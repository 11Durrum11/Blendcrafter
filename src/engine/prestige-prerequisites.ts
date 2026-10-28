import { ALL_CLASSES, ALL_FEATS, ALL_PRESTIGE_CLASSES, ALL_RACES, ALL_SKILLS, ALL_SPELLS, SPELLS_BY_ID } from "@/data";
import {
  type AbilityKey,
  type CharacterBuild,
  type CreatureType,
  type FeatCategory,
  type FeatDefinition,
  type PrestigeClassDefinition,
  type ResolvedCharacter,
  type SaveKey,
  type Size,
  type SkillDefinition,
  type SpellDefinition,
} from "./types";
import { progressionRow } from "./progression";
import { canCastNamedSpell, castingFacts, type CastingType, type ClassCastingFacts } from "./spells";

/**
 * Prestige-class prerequisite enforcement.
 *
 * PrestigeClassDefinition.prerequisites are free text written by the data
 * packs. This module parses the patterns that actually occur across the
 * catalogue into machine-checkable requirements and evaluates them against
 * the resolved character:
 *
 *   met     — the requirement is machine-checkable and satisfied.
 *   unmet   — machine-checkable and NOT satisfied (carries a reason).
 *   special — not machine-checkable with the data the app models
 *             (psionic powers, shadowcasting mysteries, invocations,
 *             class features such as sneak attack or turn undead,
 *             languages, story requirements, ...). Special
 *             prerequisites never hard-gate on a guess: the player must
 *             certify them (CharacterBuild.prestigePrereqCertifications).
 *
 * Since Batch 12, spellcasting prerequisites ARE modeled (casting
 * profiles + spell selections in src/engine/spells.ts): "able to cast
 * Nth-level arcane/divine spells", "arcane/divine caster level Nth",
 * and named-spell requirements ("able to cast charm person") evaluate
 * as hard checks. Descriptor/school counting requirements ("able to
 * cast at least three illusion spells"), domain-access requirements,
 * and spell-like-ability alternatives remain special.
 *
 * A prestige class is selectable iff every entry is met, or special and
 * certified. Parsing is conservative by design: any phrasing that does not
 * match a known pattern exactly falls into the special bucket rather than
 * risking a wrong hard gate.
 */

/* ------------------------------------------------------------------ */
/* Public types                                                        */
/* ------------------------------------------------------------------ */

export type PrereqStatus = "met" | "unmet" | "special";

export interface PrereqFragmentResult {
  /** The fragment text as printed (a sub-part of the prerequisite entry). */
  text: string;
  status: PrereqStatus;
  /** For unmet fragments: what is required vs. what the character has. */
  reason?: string;
}

export interface PrereqEntryResult {
  /** The full prerequisite entry exactly as printed in the data pack. */
  text: string;
  status: PrereqStatus;
  /** True when a "special" entry has been certified by the player. */
  certified: boolean;
  fragments: PrereqFragmentResult[];
}

export interface PrestigeGateResult {
  classId: string;
  /** True iff the class may be taken / leveled right now. */
  selectable: boolean;
  entries: PrereqEntryResult[];
  /** Human-readable reasons from every unmet fragment. */
  blockers: string[];
  /** Entry texts that are "special" and not yet certified. */
  pendingCertifications: string[];
}

/** Everything the evaluator needs, distilled from a ResolvedCharacter. */
export interface PrereqContext {
  bab: number;
  /** Base save bonuses (class progression only, no ability modifiers). */
  baseSaves: Record<SaveKey, number>;
  abilityScores: Record<AbilityKey, number | null>;
  /** Skill ranks by skill id. */
  skillRanks: ReadonlyMap<string, number>;
  takenFeats: readonly FeatDefinition[];
  raceName: string;
  type: CreatureType;
  subtypes: readonly string[];
  size: Size;
  /** Levels per class id, base and prestige classes combined. */
  classLevels: ReadonlyMap<string, number>;
  totalHitDice: number;
  alignment: string;
  /** Batch 12: per-class casting facts (profiles + selections). */
  castingFacts: ClassCastingFacts[];
  /** Batch 12: the build's spell selections, for named-spell checks. */
  selectedSpells: CharacterBuild["selectedSpells"];
}

/* ------------------------------------------------------------------ */
/* Context construction                                                */
/* ------------------------------------------------------------------ */

const CLASS_DEFS = new Map<string, (typeof ALL_CLASSES)[number]>(
  [...ALL_CLASSES, ...ALL_PRESTIGE_CLASSES].map((c) => [c.id, c])
);

export function buildPrereqContext(resolved: ResolvedCharacter): PrereqContext {
  const build = resolved.build;
  const classLevels = new Map<string, number>();
  for (const choice of [...build.classLevels, ...build.prestigeClassLevels]) {
    if (choice.levels > 0) classLevels.set(choice.classId, (classLevels.get(choice.classId) ?? 0) + choice.levels);
  }
  const baseSaves: Record<SaveKey, number> = { fort: 0, ref: 0, will: 0 };
  for (const [classId, levels] of classLevels) {
    const def = CLASS_DEFS.get(classId);
    if (!def) continue;
    const row = progressionRow(def, levels);
    baseSaves.fort += row.fort;
    baseSaves.ref += row.ref;
    baseSaves.will += row.will;
  }
  const abilityScores = {} as Record<AbilityKey, number | null>;
  for (const key of Object.keys(resolved.abilityScores) as AbilityKey[]) {
    abilityScores[key] = resolved.abilityScores[key].total;
  }
  return {
    bab: resolved.bab.total,
    baseSaves,
    abilityScores,
    skillRanks: new Map(resolved.skills.map((s) => [s.id, s.ranks])),
    takenFeats: resolved.selectedFeats,
    raceName: resolved.race.name,
    type: resolved.type,
    subtypes: resolved.subtypes,
    size: resolved.size,
    classLevels,
    totalHitDice: resolved.totalHitDice,
    alignment: build.personality.alignment,
    castingFacts: castingFacts(build, abilityScores),
    selectedSpells: build.selectedSpells ?? {},
  };
}

/* ------------------------------------------------------------------ */
/* Text utilities                                                      */
/* ------------------------------------------------------------------ */

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\.+$/, "");
}

/** Split on separator strings occurring outside () and [] nesting. */
function splitTopLevel(text: string, separators: string[]): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === "(" || ch === "[") depth += 1;
    if (ch === ")" || ch === "]") depth = Math.max(0, depth - 1);
    if (depth === 0) {
      const sep = separators.find((s) => text.startsWith(s, i));
      if (sep) {
        parts.push(current);
        current = "";
        i += sep.length;
        continue;
      }
    }
    current += ch;
    i += 1;
  }
  parts.push(current);
  return parts.map((p) => p.trim()).filter((p) => p.length > 0);
}

const NUMBER_WORDS: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
};

function parseCount(word: string): number | null {
  if (/^\d+$/.test(word)) return Number(word);
  return NUMBER_WORDS[word] ?? null;
}

/* ------------------------------------------------------------------ */
/* Static name indexes                                                 */
/* ------------------------------------------------------------------ */

const SKILLS_BY_NAME = new Map(ALL_SKILLS.map((s) => [norm(s.name), s]));
const SPELLS_BY_NAME = new Map<string, SpellDefinition>();
for (const s of ALL_SPELLS) {
  const key = norm(s.name);
  if (!SPELLS_BY_NAME.has(key)) SPELLS_BY_NAME.set(key, s);
}
const ORDINAL_WORDS = ["0th", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
const FEATS_BY_NAME = new Map(ALL_FEATS.map((f) => [norm(f.name), f]));
const RACES_BY_NAME = new Map(ALL_RACES.map((r) => [norm(r.name), r]));
const RACE_NAMES_NORM = [...RACES_BY_NAME.keys()].sort((a, b) => b.length - a.length);
const CLASS_DEFS_BY_NAME = new Map<string, string[]>();
for (const def of [...ALL_CLASSES, ...ALL_PRESTIGE_CLASSES]) {
  const key = norm(def.name);
  CLASS_DEFS_BY_NAME.set(key, [...(CLASS_DEFS_BY_NAME.get(key) ?? []), def.id]);
}
const CREATURE_TYPES_NORM = new Set(
  [
    "Aberration", "Animal", "Construct", "Dragon", "Elemental", "Fey", "Giant", "Humanoid",
    "Magical Beast", "Monstrous Humanoid", "Ooze", "Outsider", "Plant", "Undead", "Vermin",
  ].map(norm)
);

/** Documented 3.0 -> 3.5 skill conversions used by older books in the data. */
const SKILL_ALIASES: Record<string, string> = {
  alchemy: "craft (alchemy)",
  "wilderness lore": "survival",
  "intuit direction": "survival",
  "pick pocket": "sleight of hand",
  innuendo: "bluff",
};

function resolveSkill(printedRaw: string): SkillDefinition | null {
  const n = norm(printedRaw);
  const direct = SKILLS_BY_NAME.get(n);
  if (direct) return direct;
  const alias = SKILL_ALIASES[n];
  if (alias) {
    const viaAlias = SKILLS_BY_NAME.get(alias);
    if (viaAlias) return viaAlias;
  }
  // Generic-skill fallback: the app models Craft / Profession / Perform as
  // single skills (plus a few split-out specialties), so "Craft
  // (explosives)" reads against the generic Craft skill. Knowledge has no
  // generic entry, so unknown Knowledge specialties fail here and the
  // requirement lands in the special bucket instead of guessing.
  const base = n.split(" (")[0].trim();
  if (base !== n) {
    const viaBase = SKILLS_BY_NAME.get(base);
    if (viaBase) return viaBase;
  }
  return null;
}

/** Documented 3.0 -> 3.5 feat renames used by older books in the data. */
const FEAT_ALIASES: Record<string, string> = {
  expertise: "combat expertise",
};

function resolveFeat(printedRaw: string): FeatDefinition | null {
  const t = norm(printedRaw);
  if (!t || t.split(" ").length > 7) return null;
  const exact = FEATS_BY_NAME.get(t);
  if (exact) return exact;
  const alias = FEAT_ALIASES[t];
  if (alias) {
    const viaAlias = FEATS_BY_NAME.get(alias);
    if (viaAlias) return viaAlias;
  }
  const base = t.split(" (")[0].trim();
  if (base !== t) {
    const baseFeat = FEATS_BY_NAME.get(base);
    if (baseFeat) return baseFeat;
  }
  // Longest dataset feat name that prefixes the fragment, with only a
  // parenthetical or a short descriptor ("heritage feat") left over —
  // e.g. "Child Prodigy heritage feat", "Weapon Focus (rapier)".
  let best: FeatDefinition | null = null;
  let bestLen = 0;
  for (const [name, def] of FEATS_BY_NAME) {
    if (name.length <= bestLen || name === t) continue;
    if (!t.startsWith(name)) continue;
    const remainder = t.slice(name.length).trim();
    if (/^(\(.*\))?\s*(feat|feats|heritage feat)?$/.test(remainder)) {
      best = def;
      bestLen = name.length;
    }
  }
  return best;
}

/* ------------------------------------------------------------------ */
/* Parsed fragment model                                               */
/* ------------------------------------------------------------------ */

type AlignmentOption = {
  order?: string;
  orderNot?: string;
  moral?: string;
  moralNot?: string;
  anyNeutral?: boolean;
};

type IdentityOption =
  | { kind: "race"; name: string }
  | { kind: "type"; name: string }
  | { kind: "subtype"; name: string }
  | { kind: "not-type"; name: string };

type ParsedFragment =
  | { kind: "note" }
  | { kind: "special" }
  | { kind: "bab"; required: number }
  | { kind: "save"; save: SaveKey; label: string; required: number }
  | { kind: "skill"; skillId: string; printedName: string; required: number }
  | { kind: "skill-or"; options: { skillId: string; printedName: string; required: number }[] }
  | { kind: "skill-any"; count: number; required: number; knowledgeOnly: boolean }
  | { kind: "feat"; feat: FeatDefinition; display: string; hasParens: boolean }
  | { kind: "feat-any-of"; options: { feat: FeatDefinition; display: string; hasParens: boolean }[] }
  | { kind: "feat-count"; categories: FeatCategory[]; count: number; label: string }
  | { kind: "ability"; ability: AbilityKey; label: string; required: number }
  | { kind: "char-level"; required: number }
  | { kind: "class-level"; classIds: string[]; name: string; required: number }
  | { kind: "alignment"; options: AlignmentOption[]; printed: string }
  | { kind: "identity"; options: IdentityOption[]; printed: string }
  | { kind: "size"; target: string; mode: "exact" | "or-larger" | "or-smaller" }
  | { kind: "cast-level"; type: CastingType | "any"; level: number; mode: "any" | "prepared" | "spontaneous" }
  | { kind: "caster-level"; type: CastingType | "any"; level: number }
  | { kind: "cast-spell"; options: SpellDefinition[]; type?: CastingType }
  | { kind: "cast-school-spell"; type: CastingType; level: number; school: string };

interface ParsedEntry {
  text: string;
  fragments: { text: string; parsed: ParsedFragment }[];
}

/* ------------------------------------------------------------------ */
/* Entry / fragment parsing                                            */
/* ------------------------------------------------------------------ */

const PREFIX_RE =
  /^(spells or spell-like abilities|skills?|feats?|spells?|spellcasting|special|race|alignment|languages?|base attack bonus|base save bonuses|base save bonus|base saves|base save|weapon proficiency|proficiency|type\/subtype|creature type|type|patron|religion|deity|gender|martial maneuvers|martial stances|skill tricks|psionics|powers|invocations?|warlock invocation|spell|class skills)\s*:\s*/i;

type PrefixHint = "skill" | "feat" | "race" | "type" | "alignment" | "bab" | "save" | "other";

function prefixHint(prefix: string): PrefixHint {
  const p = prefix.toLowerCase();
  if (p.startsWith("skill")) return "skill";
  if (p.startsWith("feat")) return "feat";
  if (p === "race") return "race";
  if (p.includes("type")) return "type";
  if (p === "alignment") return "alignment";
  if (p === "base attack bonus") return "bab";
  if (p.startsWith("base save")) return "save";
  return "other";
}

/** Spell/power advancement lines and editorial notes are not entry requirements. */
const ADVANCEMENT_RE = /(spells per day|powers) advance|advance as \+1 level of an existing|\+1 level of an existing \w+ class/i;

const SAVE_WORDS: Record<string, { save: SaveKey; label: string }> = {
  fort: { save: "fort", label: "Fortitude" },
  fortitude: { save: "fort", label: "Fortitude" },
  ref: { save: "ref", label: "Reflex" },
  reflex: { save: "ref", label: "Reflex" },
  will: { save: "will", label: "Will" },
};

const ABILITY_WORDS: Record<string, { ability: AbilityKey; label: string }> = {
  str: { ability: "str", label: "Strength" },
  strength: { ability: "str", label: "Strength" },
  dex: { ability: "dex", label: "Dexterity" },
  dexterity: { ability: "dex", label: "Dexterity" },
  con: { ability: "con", label: "Constitution" },
  constitution: { ability: "con", label: "Constitution" },
  int: { ability: "int", label: "Intelligence" },
  intelligence: { ability: "int", label: "Intelligence" },
  wis: { ability: "wis", label: "Wisdom" },
  wisdom: { ability: "wis", label: "Wisdom" },
  cha: { ability: "cha", label: "Charisma" },
  charisma: { ability: "cha", label: "Charisma" },
};

const SIZE_ORDER = ["fine", "diminutive", "tiny", "small", "medium", "large", "huge", "gargantuan", "colossal"];

function parseAlignment(rest: string): ParsedFragment {
  const t = norm(rest);
  if (t.length > 90 || /\b(varies|deity|same|depends|chosen|sect|restriction|match)\b/.test(t)) {
    return { kind: "special" };
  }
  const pieces = splitTopLevel(t, [",", " or "]);
  const options: AlignmentOption[] = [];
  for (const rawPiece of pieces) {
    let piece = rawPiece.replace(/non-/g, "non").trim();
    const anyPrefix = piece.startsWith("any ");
    if (anyPrefix) piece = piece.slice(4).trim();
    if (anyPrefix) {
      if (piece === "lawful" || piece === "chaotic") options.push({ order: piece });
      else if (piece === "good" || piece === "evil") options.push({ moral: piece });
      else if (piece === "neutral") options.push({ anyNeutral: true });
      else if (piece.startsWith("non") && (piece.slice(3) === "lawful" || piece.slice(3) === "chaotic")) options.push({ orderNot: piece.slice(3) });
      else if (piece.startsWith("non") && (piece.slice(3) === "good" || piece.slice(3) === "evil")) options.push({ moralNot: piece.slice(3) });
      else return { kind: "special" };
    } else {
      if (piece === "neutral" || piece === "true neutral") {
        options.push({ order: "neutral", moral: "neutral" });
        continue;
      }
      const words = piece.split(" ");
      if (words.length === 2) {
        const [order, moral] = words;
        if (["lawful", "chaotic", "neutral"].includes(order) && ["good", "evil", "neutral"].includes(moral)) {
          options.push({ order, moral });
          continue;
        }
      }
      return { kind: "special" };
    }
  }
  if (options.length === 0) return { kind: "special" };
  return { kind: "alignment", options, printed: rest.trim() };
}

function parseIdentity(rest: string): ParsedFragment {
  const t = norm(rest)
    .replace(/\([^)]*\)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!t || t.split(" ").length > 8) return { kind: "special" };
  if (/\b(member|appropriate|house|already|cannot|dragonmarked|living|nonhumanoid|sect|deity|must)\b/.test(t)) {
    return { kind: "special" };
  }
  const pieces = splitTopLevel(t, [",", " or "]);
  const options: IdentityOption[] = [];
  for (const rawPiece of pieces) {
    let piece = rawPiece.trim();
    if (piece.startsWith("any ")) piece = piece.slice(4).trim();
    if (piece === "nondragon") {
      options.push({ kind: "not-type", name: "dragon" });
      continue;
    }
    if (piece.endsWith(" subtype")) {
      options.push({ kind: "subtype", name: piece.slice(0, -" subtype".length).trim() });
      continue;
    }
    if (CREATURE_TYPES_NORM.has(piece)) {
      options.push({ kind: "type", name: piece });
      continue;
    }
    if (RACES_BY_NAME.has(piece)) {
      options.push({ kind: "race", name: piece });
      continue;
    }
    // Subrace phrasing ("sun elf", "gold dwarf"): the app does not model
    // subraces separately, so read it as the base race it modifies.
    const suffixRace = RACE_NAMES_NORM.find((n) => piece.endsWith(` ${n}`) || piece.endsWith(`-${n}`));
    if (suffixRace) {
      options.push({ kind: "race", name: suffixRace });
      continue;
    }
    return { kind: "special" };
  }
  if (options.length === 0) return { kind: "special" };
  return { kind: "identity", options, printed: rest.trim() };
}

function parseSkillFragment(frag: string): ParsedFragment | null {
  const t = norm(frag);

  // "Knowledge (any two) 10 ranks each"
  let m = t.match(/^knowledge \(any ([a-z]+|\d+)\) (\d+) ranks( each)?$/);
  if (m) {
    const count = parseCount(m[1]);
    if (count !== null) return { kind: "skill-any", count, required: Number(m[2]), knowledgeOnly: true };
    return { kind: "special" };
  }
  // "7 ranks in any two skills"
  m = t.match(/^(\d+) ranks in any ([a-z]+|\d+) skills?$/);
  if (m) {
    const count = parseCount(m[2]);
    if (count !== null) return { kind: "skill-any", count, required: Number(m[1]), knowledgeOnly: false };
    return { kind: "special" };
  }
  // "Any one skill 9 ranks"
  m = t.match(/^any ([a-z]+|\d+) skills? (\d+) ranks$/);
  if (m) {
    const count = parseCount(m[1]);
    if (count !== null) return { kind: "skill-any", count, required: Number(m[2]), knowledgeOnly: false };
    return { kind: "special" };
  }
  // "Any four skills at 8 ranks each"
  m = t.match(/^any ([a-z]+|\d+) skills? at (\d+) ranks( each)?$/);
  if (m) {
    const count = parseCount(m[1]);
    if (count !== null) return { kind: "skill-any", count, required: Number(m[2]), knowledgeOnly: false };
    return { kind: "special" };
  }
  // "Hide 8 ranks or Move Silently 8 ranks" (per-side rank counts)
  m = t.match(/^(.+?) (\d+) ranks or (.+?) (\d+) ranks$/);
  if (m) {
    const a = resolveSkill(m[1]);
    const b = resolveSkill(m[3]);
    if (a && b) {
      return {
        kind: "skill-or",
        options: [
          { skillId: a.id, printedName: originalName(frag, m[1]), required: Number(m[2]) },
          { skillId: b.id, printedName: originalName(frag, m[3]), required: Number(m[4]) },
        ],
      };
    }
    return { kind: "special" };
  }
  // "Craft (armorsmithing) or Craft (weaponsmithing) 10 ranks" (shared count)
  m = t.match(/^(.+?) (\d+) ranks( each)?$/);
  if (m && m[1].includes(" or ")) {
    const names = splitTopLevel(m[1], [" or "]);
    const options: { skillId: string; printedName: string; required: number }[] = [];
    for (const name of names) {
      const skill = resolveSkill(name);
      if (!skill) return { kind: "special" };
      options.push({ skillId: skill.id, printedName: originalName(frag, name), required: Number(m[2]) });
    }
    if (options.length >= 2) return { kind: "skill-or", options };
    return { kind: "special" };
  }
  // Single skill, name-first: "Knowledge (arcana) 8 ranks"
  if (m) {
    const skill = resolveSkill(m[1]);
    if (skill) return { kind: "skill", skillId: skill.id, printedName: originalName(frag, m[1]), required: Number(m[2]) };
    return { kind: "special" };
  }
  // Single skill, ranks-first: "8 ranks in Knowledge (arcana)"
  m = t.match(/^(\d+) ranks in (.+)$/);
  if (m) {
    const skill = resolveSkill(m[2]);
    if (skill) return { kind: "skill", skillId: skill.id, printedName: m[2], required: Number(m[1]) };
    return { kind: "special" };
  }
  return null;
}

/** Best-effort recovery of the printed (original-case) skill name. */
function originalName(frag: string, normalizedName: string): string {
  const idx = frag.toLowerCase().indexOf(normalizedName.toLowerCase());
  if (idx >= 0) return frag.slice(idx, idx + normalizedName.length).trim();
  return normalizedName;
}

const FEAT_COUNT_CATEGORIES: { word: string; category: FeatCategory }[] = [
  { word: "metamagic", category: "metamagic" },
  { word: "item creation", category: "item-creation" },
  { word: "combat", category: "combat" },
];

function parseFeatCount(frag: string): ParsedFragment | null {
  const t = norm(frag);
  const m = t.match(/^any ([a-z]+|\d+) (?:other )?(.+?) feats?$/);
  if (!m) return null;
  const count = parseCount(m[1]);
  if (count === null) return { kind: "special" };
  const categories = FEAT_COUNT_CATEGORIES.filter((c) => m[2].includes(c.word)).map((c) => c.category);
  if (categories.length === 0) return { kind: "special" };
  return { kind: "feat-count", categories, count, label: m[2] };
}

function classifyFragment(frag: string, hint: PrefixHint, depth: number): { text: string; parsed: ParsedFragment }[] {
  const self = (parsed: ParsedFragment) => [{ text: frag, parsed }];
  const t = norm(frag);

  if (ADVANCEMENT_RE.test(frag)) return self({ kind: "note" });

  // Base attack bonus: bare "+5" under a "Base Attack Bonus:" heading, or
  // the full phrase anywhere in the fragment.
  if (hint === "bab" && /^\+\d+$/.test(t)) return self({ kind: "bab", required: Number(t.slice(1)) });
  const babMatch = t.match(/base attack bonus \+?(\d+)/);
  if (babMatch) return self({ kind: "bab", required: Number(babMatch[1]) });

  // Base saves: full phrase, or a bare "Will +3" under a Base Save heading.
  const savePhrase = t.match(/base (fortitude|reflex|will)(?: save)?(?: bonus)? \+(\d+)/);
  if (savePhrase) {
    const info = SAVE_WORDS[savePhrase[1]];
    return self({ kind: "save", save: info.save, label: info.label, required: Number(savePhrase[2]) });
  }
  if (hint === "save") {
    const bare = t.match(/^(fortitude|fort|reflex|ref|will) \+(\d+)$/);
    if (bare) {
      const info = SAVE_WORDS[bare[1]];
      return self({ kind: "save", save: info.save, label: info.label, required: Number(bare[2]) });
    }
  }

  // Character level ("character level 10th" as its own fragment).
  const charLevel = t.match(/^character level (\d+)(?:st|nd|rd|th)?$/);
  if (charLevel) return self({ kind: "char-level", required: Number(charLevel[1]) });

  // Skills (any phrasing that mentions ranks is a skill requirement).
  if (t.includes("ranks")) {
    const skill = parseSkillFragment(frag);
    if (skill) return self(skill);
    return self({ kind: "special" });
  }

  // "Any three metamagic or item creation feats" style counts.
  const featCount = parseFeatCount(frag);
  if (featCount) return self(featCount);

  // Specific class level: "5th-level wizard".
  const classLevel = t.match(/^(\d+)(?:st|nd|rd|th)-level ([a-z][a-z' -]+)$/);
  if (classLevel) {
    const ids = CLASS_DEFS_BY_NAME.get(classLevel[2].trim());
    if (ids) {
      return self({ kind: "class-level", classIds: ids, name: classLevel[2].trim(), required: Number(classLevel[1]) });
    }
  }

  // Spellcasting (Batch 12): caster level, "able to cast Nth-level
  // arcane/divine spells" (with prepared/spontaneous qualifiers), and
  // named-spell requirements. Descriptor/school counting phrasings
  // ("at least three illusion spells") deliberately do NOT match any
  // pattern here and stay special.
  const casterLevel = t.match(/^(arcane|divine) caster level (\d+)(?:st|nd|rd|th)?$/);
  if (casterLevel) {
    return self({ kind: "caster-level", type: casterLevel[1] as CastingType, level: Number(casterLevel[2]) });
  }
  const casterLevelAny = t.match(/^caster level (\d+)(?:st|nd|rd|th)?$/);
  if (casterLevelAny) return self({ kind: "caster-level", type: "any", level: Number(casterLevelAny[1]) });

  const castLevel = t.match(
    /^(?:able|ability) to (spontaneously cast|prepare and cast|cast) (\d+)(?:st|nd|rd|th)-level (arcane or divine|divine or arcane|arcane|divine) spells?$/
  );
  if (castLevel) {
    const mode =
      castLevel[1] === "spontaneously cast" ? "spontaneous" : castLevel[1] === "prepare and cast" ? "prepared" : "any";
    const type = castLevel[3].includes(" or ") ? "any" : (castLevel[3] as CastingType);
    return self({ kind: "cast-level", type, level: Number(castLevel[2]), mode });
  }
  const castLevelNoType = t.match(/^(?:able|ability) to cast (\d+)(?:st|nd|rd|th)-level spells?$/);
  if (castLevelNoType) return self({ kind: "cast-level", type: "any", level: Number(castLevelNoType[1]), mode: "any" });
  const castWithoutPrep = t.match(/^(?:able|ability) to cast (arcane|divine) spells? without preparation$/);
  if (castWithoutPrep) {
    return self({ kind: "cast-level", type: castWithoutPrep[1] as CastingType, level: 1, mode: "spontaneous" });
  }
  const castAnyOfType = t.match(/^(?:able|ability) to cast (arcane|divine) spells?$/);
  if (castAnyOfType) return self({ kind: "cast-level", type: castAnyOfType[1] as CastingType, level: 1, mode: "any" });
  const castSchool = t.match(
    /^(?:able|ability) to prepare and cast at least one (\d+)(?:st|nd|rd|th)-level (arcane|divine) spell from the ([a-z]+) school$/
  );
  if (castSchool) {
    return self({
      kind: "cast-school-spell",
      type: castSchool[2] as CastingType,
      level: Number(castSchool[1]),
      school: castSchool[3],
    });
  }

  // Named spells: "able to cast charm person", "able to cast dismissal
  // or dispel evil", "able to cast zone of truth as a divine spell".
  const namedCast = t.match(/^(?:able|ability) to cast (.+)$/);
  if (namedCast) {
    let rest = namedCast[1].trim();
    let namedType: CastingType | undefined;
    const asType = rest.match(/^(.+?) as an? (arcane|divine) spell$/);
    if (asType) {
      rest = asType[1].trim();
      namedType = asType[2] as CastingType;
    }
    rest = rest.replace(/ spells?$/, "").trim();
    const alternatives = splitTopLevel(rest, [" or "]).map((p) => p.trim());
    const resolvedSpells = alternatives.map((alt) => SPELLS_BY_NAME.get(norm(alt)));
    if (resolvedSpells.length > 0 && resolvedSpells.every((r) => r !== undefined)) {
      return self({ kind: "cast-spell", options: resolvedSpells as SpellDefinition[], type: namedType });
    }
  }
  // Bare spell name: the second half of an "X and Y" compound whose
  // first half carried the "able to cast" phrasing.
  if (!/^(able|ability)\b/.test(t) && !/\d/.test(t) && t.length <= 40) {
    const bareSpell = SPELLS_BY_NAME.get(t);
    if (bareSpell) return self({ kind: "cast-spell", options: [bareSpell] });
  }

  // Ability score: "Dexterity 13".
  const ability = t.match(/^(strength|dexterity|constitution|intelligence|wisdom|charisma|str|dex|con|int|wis|cha) (\d+)\+?$/);
  if (ability) {
    const info = ABILITY_WORDS[ability[1]];
    return self({ kind: "ability", ability: info.ability, label: info.label, required: Number(ability[2]) });
  }

  // Size: "Must be Large size or larger".
  const sizeMatch =
    t.match(/^must be (?:a |an )?(\w+)(?: size)? or (larger|smaller)$/) ??
    t.match(/^must be (?:a |an )?(\w+)(?: size)?$/) ??
    t.match(/^(\w+) size or (larger|smaller)$/);
  if (sizeMatch && SIZE_ORDER.includes(sizeMatch[1])) {
    return self({
      kind: "size",
      target: sizeMatch[1],
      mode: sizeMatch[2] === "larger" ? "or-larger" : sizeMatch[2] === "smaller" ? "or-smaller" : "exact",
    });
  }

  // Narrative imperatives and class-feature prose are never guessed at.
  if (/^must\b/.test(t) || /\bclass (feature|features|ability|abilities)\b/.test(t)) {
    return self({ kind: "special" });
  }

  // A bare identity fragment (race / type / subtype name).
  if (t.split(" ").length <= 4) {
    const identity = parseIdentity(frag);
    if (identity.kind === "identity") return self(identity);
  }

  // Fragment-level feat alternation: "Weapon Focus (longsword) or
  // Weapon Focus (rapier)" — any one of the alternatives satisfies it.
  if (t.includes(" or ")) {
    const alternatives = splitTopLevel(frag, [" or "]).map((p) => p.trim());
    if (alternatives.length >= 2) {
      const resolved = alternatives.map((alt) => ({ alt, feat: resolveFeat(alt) }));
      if (resolved.every((r) => r.feat !== null)) {
        return self({
          kind: "feat-any-of",
          options: resolved.map((r) => ({
            feat: r.feat as FeatDefinition,
            display: r.alt,
            hasParens: r.alt.includes("("),
          })),
        });
      }
    }
  }

  // Named feat.
  const feat = resolveFeat(frag);
  if (feat) {
    return self({ kind: "feat", feat, display: frag.trim(), hasParens: frag.includes("(") });
  }

  // Compound "X and Y" where both sides are independently checkable.
  if (depth === 0 && t.includes(" and ")) {
    const sides = splitTopLevel(frag, [" and "]);
    if (sides.length >= 2) {
      // "Able to cast 2nd-level divine spells and 2nd-level arcane
      // spells": later sides inherit the first side's verb phrase.
      const verbMatch = sides[0].trim().match(/^(able|ability) to cast\s+/i);
      const adjusted = sides.map((side, i) => {
        const s = side.trim();
        if (i > 0 && verbMatch && !/^(able|ability)\b/i.test(s)) return `${verbMatch[0]}${s}`;
        return s;
      });
      const classified = adjusted.flatMap((side) => classifyFragment(side, hint, depth + 1));
      if (classified.every((c) => c.parsed.kind !== "special")) return classified;
    }
  }

  return self({ kind: "special" });
}

function parseEntry(rawText: string): ParsedEntry {
  const text = rawText.trim();

  // Editorial notes and class-skill lists are not entry requirements.
  if (/^note\s*:/i.test(text) || /^class skills\s*:/i.test(text)) {
    return { text, fragments: [{ text, parsed: { kind: "note" } }] };
  }
  if (ADVANCEMENT_RE.test(text) && !/;/i.test(text)) {
    return { text, fragments: [{ text, parsed: { kind: "note" } }] };
  }

  let rest = text;
  let hint: PrefixHint = "other";
  const prefixMatch = text.match(PREFIX_RE);
  if (prefixMatch) {
    hint = prefixHint(prefixMatch[1]);
    rest = text.slice(prefixMatch[0].length).trim();
  }

  if (hint === "alignment") {
    return { text, fragments: [{ text: rest, parsed: parseAlignment(rest) }] };
  }
  if (hint === "race" || hint === "type") {
    return { text, fragments: [{ text: rest, parsed: parseIdentity(rest) }] };
  }
  if (/any one of the following/i.test(rest)) {
    return { text, fragments: [{ text: rest, parsed: { kind: "special" } }] };
  }

  // Feat alternation, whole-list form: "Good Devotion, Healing Devotion,
  // or Sun Devotion" means any ONE of them. Recognize it only when the
  // entry's single "or" is the trailing joiner and every item names a
  // real feat — an AND list whose last item is internally alternated
  // ("..., Weapon Focus (longsword) or Weapon Focus (rapier)") must NOT
  // be read this way; that piece is handled per-fragment instead.
  if (hint === "feat" || hint === "other") {
    const pieces = splitTopLevel(rest, [";", ","]);
    const orPieces = pieces.filter((p) => /(^|\s)or(\s|$)/.test(norm(p)));
    if (pieces.length >= 2 && orPieces.length === 1) {
      const target = orPieces[0].replace(/^or\s+/i, "").trim();
      if (!/ or /.test(norm(target))) {
        const all = pieces.map((p) =>
          p === orPieces[0] ? target : p.replace(/^(and|plus)\s+/i, "").trim()
        );
        const resolved = all.map((alt) => ({ alt, feat: resolveFeat(alt) }));
        if (resolved.every((r) => r.feat !== null)) {
          return {
            text,
            fragments: [
              {
                text: rest,
                parsed: {
                  kind: "feat-any-of",
                  options: resolved.map((r) => ({
                    feat: r.feat as FeatDefinition,
                    display: r.alt,
                    hasParens: r.alt.includes("("),
                  })),
                },
              },
            ],
          };
        }
      }
    }
  }

  const pieces = splitTopLevel(rest, [";", ","]).map((p) =>
    p.replace(/^(and|plus|or)\s+/i, "").trim()
  );
  const fragments = pieces.flatMap((piece) => classifyFragment(piece, hint, 0));
  return { text, fragments };
}

const parseCache = new Map<string, ParsedEntry[]>();

function getParsedEntries(def: PrestigeClassDefinition): ParsedEntry[] {
  const cached = parseCache.get(def.id);
  if (cached) return cached;
  const parsed = def.prerequisites.map(parseEntry);
  parseCache.set(def.id, parsed);
  return parsed;
}

/* ------------------------------------------------------------------ */
/* Evaluation                                                          */
/* ------------------------------------------------------------------ */

function featIsTaken(parsed: { feat: FeatDefinition; hasParens: boolean }, ctx: PrereqContext): boolean {
  if (ctx.takenFeats.some((f) => f.id === parsed.feat.id)) return true;
  if (!parsed.hasParens) {
    // Alternate printings / specialized forms of the same feat count
    // toward a bare-name requirement ("Iron Will" vs "Iron Will
    // (Alternate)").
    const base = norm(parsed.feat.name).split(" (")[0].trim();
    return ctx.takenFeats.some((f) => norm(f.name).split(" (")[0].trim() === base);
  }
  return false;
}

function alignmentAxes(alignment: string): { order: string; moral: string } {
  const moral = alignment.includes("Good") ? "good" : alignment.includes("Evil") ? "evil" : "neutral";
  const order = alignment.startsWith("Lawful") ? "lawful" : alignment.startsWith("Chaotic") ? "chaotic" : "neutral";
  return { order, moral };
}

function evalFragment(parsed: ParsedFragment, ctx: PrereqContext): { status: PrereqStatus; reason?: string } {
  switch (parsed.kind) {
    case "note":
      return { status: "met" };
    case "special":
      return { status: "special" };
    case "bab":
      return ctx.bab >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `Base attack bonus +${parsed.required} (you have +${ctx.bab})` };
    case "save": {
      const have = ctx.baseSaves[parsed.save];
      return have >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `Base ${parsed.label} save +${parsed.required} (yours is +${have})` };
    }
    case "skill": {
      const have = ctx.skillRanks.get(parsed.skillId) ?? 0;
      return have >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `${parsed.printedName} ${parsed.required} ranks (you have ${have})` };
    }
    case "skill-or": {
      const best = parsed.options.map((o) => ({ ...o, have: ctx.skillRanks.get(o.skillId) ?? 0 }));
      if (best.some((o) => o.have >= o.required)) return { status: "met" };
      return {
        status: "unmet",
        reason: `${best.map((o) => `${o.printedName} ${o.required} ranks`).join(" or ")} (you have ${best.map((o) => o.have).join(" / ")})`,
      };
    }
    case "skill-any": {
      let count = 0;
      for (const [skillId, ranks] of ctx.skillRanks) {
        if (ranks < parsed.required) continue;
        if (parsed.knowledgeOnly) {
          const def = ALL_SKILLS.find((s) => s.id === skillId);
          if (!def || !norm(def.name).startsWith("knowledge (")) continue;
        }
        count += 1;
      }
      return count >= parsed.count
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `${parsed.count} ${parsed.knowledgeOnly ? "Knowledge skills" : "skills"} with ${parsed.required}+ ranks (you have ${count})`,
          };
    }
    case "feat":
      return featIsTaken(parsed, ctx)
        ? { status: "met" }
        : { status: "unmet", reason: `Feat: ${parsed.display} (not taken)` };
    case "feat-any-of":
      return parsed.options.some((o) => featIsTaken(o, ctx))
        ? { status: "met" }
        : { status: "unmet", reason: `One of: ${parsed.options.map((o) => o.display).join(", ")} (none taken)` };
    case "feat-count": {
      const have = ctx.takenFeats.filter((f) => parsed.categories.includes(f.category)).length;
      return have >= parsed.count
        ? { status: "met" }
        : { status: "unmet", reason: `Any ${parsed.count} ${parsed.label} feats (you have ${have})` };
    }
    case "ability": {
      const total = ctx.abilityScores[parsed.ability];
      if (total === null) {
        return { status: "unmet", reason: `${parsed.label} ${parsed.required} (you have no ${parsed.label} score)` };
      }
      return total >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `${parsed.label} ${parsed.required} (you have ${total})` };
    }
    case "char-level":
      return ctx.totalHitDice >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `Character level ${parsed.required} (you are level ${ctx.totalHitDice})` };
    case "class-level": {
      const have = parsed.classIds.reduce((sum, id) => sum + (ctx.classLevels.get(id) ?? 0), 0);
      return have >= parsed.required
        ? { status: "met" }
        : { status: "unmet", reason: `${parsed.name} level ${parsed.required} (you have ${have})` };
    }
    case "alignment": {
      const axes = alignmentAxes(ctx.alignment);
      const ok = parsed.options.some((opt) => {
        if (opt.anyNeutral) return axes.order === "neutral" || axes.moral === "neutral";
        if (opt.order && axes.order !== opt.order) return false;
        if (opt.orderNot && axes.order === opt.orderNot) return false;
        if (opt.moral && axes.moral !== opt.moral) return false;
        if (opt.moralNot && axes.moral === opt.moralNot) return false;
        return true;
      });
      return ok
        ? { status: "met" }
        : { status: "unmet", reason: `Alignment: ${parsed.printed} (you are ${ctx.alignment})` };
    }
    case "identity": {
      const ok = parsed.options.some((opt) => {
        switch (opt.kind) {
          case "race":
            return norm(ctx.raceName) === opt.name;
          case "type":
            return norm(ctx.type) === opt.name;
          case "subtype":
            return ctx.subtypes.some((s) => norm(s) === opt.name);
          case "not-type":
            return norm(ctx.type) !== opt.name;
        }
      });
      return ok
        ? { status: "met" }
        : { status: "unmet", reason: `Requires: ${parsed.printed} (you are a ${ctx.raceName})` };
    }
    case "size": {
      const mine = SIZE_ORDER.indexOf(norm(ctx.size));
      const target = SIZE_ORDER.indexOf(parsed.target);
      const ok =
        parsed.mode === "exact" ? mine === target : parsed.mode === "or-larger" ? mine >= target : mine <= target;
      return ok
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `Must be ${parsed.target} size${parsed.mode === "exact" ? "" : ` or ${parsed.mode === "or-larger" ? "larger" : "smaller"}`} (you are ${ctx.size})`,
          };
    }
    case "cast-level": {
      const pool = ctx.castingFacts.filter(
        (f) =>
          (parsed.type === "any" || f.type === parsed.type) &&
          (parsed.mode === "any" ||
            (parsed.mode === "prepared" ? f.profile.kind !== "spontaneous" : f.profile.kind === "spontaneous"))
      );
      const have = pool.reduce((m, f) => Math.max(m, f.maxLevel), -1);
      const typeLabel = parsed.type === "any" ? "" : ` ${parsed.type}`;
      const modeLabel = parsed.mode === "prepared" ? "prepared " : parsed.mode === "spontaneous" ? "spontaneous " : "";
      return have >= parsed.level
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `Able to cast ${ORDINAL_WORDS[parsed.level]}-level${typeLabel} spells (${modeLabel}your best is ${have < 0 ? "no casting" : have === 0 ? "0-level only" : `${ORDINAL_WORDS[have]}-level`})`,
          };
    }
    case "caster-level": {
      const pool = ctx.castingFacts.filter((f) => parsed.type === "any" || f.type === parsed.type);
      const have = pool.reduce((m, f) => Math.max(m, f.classLevel), 0);
      const typeLabel = parsed.type === "any" ? "" : `${parsed.type} `;
      return have >= parsed.level
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `${typeLabel.charAt(0).toUpperCase() + typeLabel.slice(1)}caster level ${parsed.level} (yours is ${have})`,
          };
    }
    case "cast-spell": {
      const facts = parsed.type ? ctx.castingFacts.filter((f) => f.type === parsed.type) : ctx.castingFacts;
      const ok = parsed.options.some((spell) =>
        canCastNamedSpell(ctx.selectedSpells, spell, facts, ctx.abilityScores)
      );
      const names = parsed.options.map((s) => s.name).join(" or ");
      return ok
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `Able to cast ${names}${parsed.type ? ` as a ${parsed.type} spell` : ""} (not castable with this build's classes and spell selections)`,
          };
    }
    case "cast-school-spell": {
      const ok = ctx.castingFacts.some(
        (f) =>
          f.type === parsed.type &&
          f.profile.kind !== "spontaneous" &&
          f.maxLevel >= parsed.level &&
          (ctx.selectedSpells[f.classId] ?? []).some((id) => {
            const sp = SPELLS_BY_ID[id];
            return sp !== undefined && norm(sp.school) === parsed.school && sp.levels[f.profile.listName] === parsed.level;
          })
      );
      return ok
        ? { status: "met" }
        : {
            status: "unmet",
            reason: `Able to prepare and cast a ${ORDINAL_WORDS[parsed.level]}-level ${parsed.type} spell from the ${parsed.school} school (none selected for a prepared ${parsed.type} class)`,
          };
    }
  }
}

/**
 * Evaluate one prestige class against a context. `certifiedEntries` are
 * the prerequisite entry texts (exact strings from def.prerequisites) the
 * player has confirmed for this class.
 */
export function evaluatePrestigeClass(
  def: PrestigeClassDefinition,
  ctx: PrereqContext,
  certifiedEntries: readonly string[]
): PrestigeGateResult {
  const certified = new Set(certifiedEntries);
  const entries: PrereqEntryResult[] = getParsedEntries(def).map((parsedEntry) => {
    const fragments: PrereqFragmentResult[] = parsedEntry.fragments.map((f) => {
      const result = evalFragment(f.parsed, ctx);
      return { text: f.text, status: result.status, reason: result.reason };
    });
    let status: PrereqStatus = "met";
    if (fragments.some((f) => f.status === "unmet")) status = "unmet";
    else if (fragments.some((f) => f.status === "special")) status = "special";
    return {
      text: parsedEntry.text,
      status,
      certified: status === "special" && certified.has(parsedEntry.text),
      fragments,
    };
  });
  const blockers = entries
    .filter((e) => e.status === "unmet")
    .flatMap((e) => e.fragments.filter((f) => f.status === "unmet").map((f) => f.reason ?? f.text));
  const pendingCertifications = entries
    .filter((e) => e.status === "special" && !e.certified)
    .map((e) => e.text);
  return {
    classId: def.id,
    selectable: blockers.length === 0 && pendingCertifications.length === 0,
    entries,
    blockers,
    pendingCertifications,
  };
}

/** Convenience wrapper: build the context from a resolved character and
 * read certifications from its build. */
export function evaluatePrestigeForBuild(
  def: PrestigeClassDefinition,
  resolved: ResolvedCharacter
): PrestigeGateResult {
  return evaluatePrestigeClass(
    def,
    buildPrereqContext(resolved),
    (resolved.build.prestigePrereqCertifications ?? {})[def.id] ?? []
  );
}
