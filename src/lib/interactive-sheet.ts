/**
 * Interactive character sheet (Shaun, 2026-11-04): the Character Sheet step
 * can hand the player the classic interactive 3.5 sheet PDF — the blank
 * form Shaun supplied — filled in from the resolved build.
 *
 * "My way, not its own way": the blank sheet carries 113 calculated fields
 * driven by its own JavaScript Calculate actions, which recompute derived
 * numbers (ability modifiers, skill totals, AC, saves…) from the raw inputs
 * by the SHEET's formulas. Those formulas know nothing of this builder's
 * engine or house rules, so the fill below
 *   1. writes Blendcrafter's RESOLVED value into every field, the
 *      calculated ones included — totals and parts alike, decomposed the
 *      way the printed sheet lays them out (total = ability + ranks + misc),
 *   2. strips every Calculate action from the file, and clears the
 *      read-only flag those fields carry,
 * so nothing left in the PDF can recompute over the build's numbers, and
 * every box stays hand-editable afterwards.
 */
import {
  ALL_CLASSES,
  ALL_EQUIPMENT,
  ALL_MAGIC_ITEMS,
  ALL_PRESTIGE_CLASSES,
  ALL_SKILLS,
  CASTING_PROFILES_BY_ID,
  SPELLS_BY_ID,
} from "@/data";
import { spellLevelOnList } from "@/engine/spells";
import type { AbilityKey, ResolvedCharacter } from "@/engine/types";
import { weaponSubcategory } from "@/lib/weapon-subcategories";
import { INTERACTIVE_SHEET_B64 } from "@/lib/interactive-sheet-data";

/* ------------------------------------------------------------------ */
/* Lookup tables                                                       */
/* ------------------------------------------------------------------ */

const CLASS_BY_ID = new Map(
  [...ALL_CLASSES, ...ALL_PRESTIGE_CLASSES].map((c) => [c.id, c]),
);
const SKILL_BY_ID = new Map(ALL_SKILLS.map((s) => [s.id, s]));
const EQUIPMENT_BY_ID = new Map(ALL_EQUIPMENT.map((i) => [i.id, i]));
const MAGIC_BY_ID = new Map(ALL_MAGIC_ITEMS.map((i) => [i.id, i]));

/** AbilityKey values ("str", "dex", …) are also the sheet's field names. */
const ABILITY_KEYS_LIST: AbilityKey[] = ["str", "dex", "con", "int", "wis", "cha"];

/** Printed skill rows on the sheet, by skill name (sub-skills handled apart). */
const SKILL_ROW: Record<string, string> = {
  Appraise: "app",
  Balance: "bal",
  Bluff: "blu",
  Climb: "cli",
  Concentration: "con",
  "Decipher Script": "dec",
  Diplomacy: "dip",
  "Disable Device": "dis",
  Disguise: "dig",
  "Escape Artist": "esc",
  Forgery: "for",
  "Gather Information": "gat",
  "Handle Animal": "han",
  Heal: "hea",
  Hide: "hid",
  Intimidate: "inti",
  Jump: "jum",
  Listen: "lis",
  "Move Silently": "mov",
  "Open Lock": "ope",
  Ride: "rid",
  Search: "sea",
  "Sense Motive": "sen",
  "Sleight of Hand": "sle",
  Spellcraft: "spe",
  Spot: "spo",
  Survival: "sur",
  Swim: "swi",
  Tumble: "tum",
  "Use Magic Device": "mag",
  "Use Rope": "rop",
};
/** Sub-skill families: printed label field per slot, in slot order. */
const SUBSKILL_SLOTS: Record<string, { rows: string[]; labels: string[] }> = {
  Craft: { rows: ["cra", "cra2", "cra3"], labels: ["craft", "craft2", "craft3"] },
  Knowledge: {
    rows: ["kno", "kno2", "kno3", "kno4", "kno5"],
    labels: ["knowledge", "knowledge2", "knowledge3", "knowledge4", "knowledge5"],
  },
  Perform: {
    rows: ["per", "per2", "per3"],
    labels: ["perform", "perform2", "perform3"],
  },
  Profession: {
    rows: ["pro", "pro2"],
    labels: ["profession", "profession2"],
  },
};
const EXTRA_ROWS = ["ext", "ext2", "ext3"];
const EXTRA_LABELS = ["skill", "skill2", "skill3"];
const EXTRA_ATTRS = ["skillatr", "skillatr2", "skillatr3"];

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

/** Plain number the way the sheet's own arithmetic writes it ("-5", "0", "0.5"). */
function num(n: number): string {
  return `${Math.round(n * 100) / 100}`;
}
function signed(n: number): string {
  return n > 0 ? `+${n}` : `${n}`;
}

/** Parse a leading pound weight out of an equipment weight string ("4 lb.", "1/2 lb.", "8 oz"). */
function parseWeightLb(weight: string | undefined): number | null {
  if (!weight) return null;
  const w = weight.trim();
  const frac = w.match(/^(\d+)\s*\/\s*(\d+)\s*lb/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  const lb = w.match(/^(\d+(?:\.\d+)?)\s*lb/);
  if (lb) return Number(lb[1]);
  const oz = w.match(/^(\d+(?:\.\d+)?)\s*oz/);
  if (oz) return Number(oz[1]) / 16;
  return null;
}

/** Carrying capacity (heavy-load maximum) for a Strength score, SRD table. */
function heavyLoadForStr(str: number): number {
  if (str <= 0) return 0;
  const table = [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 115, 130, 150, 175, 200, 230,
    260, 300, 350, 400,
  ];
  if (str <= 20) return table[str];
  return heavyLoadForStr(str - 10) * 4;
}
const SIZE_LOAD_MULTIPLIER: Record<string, number> = {
  Fine: 1 / 8,
  Diminutive: 1 / 4,
  Tiny: 1 / 2,
  Small: 3 / 4,
  Medium: 1,
  Large: 2,
  Huge: 4,
  Gargantuan: 8,
  Colossal: 16,
};

/* ------------------------------------------------------------------ */
/* The value map                                                       */
/* ------------------------------------------------------------------ */

export function buildInteractiveSheetValues(
  character: ResolvedCharacter,
): Record<string, string> {
  const v: Record<string, string> = {};
  const { build } = character;
  const set = (field: string, value: string | number | null | undefined) => {
    if (value === null || value === undefined || value === "") return;
    v[field] = typeof value === "number" ? num(value) : value;
  };

  /* Header ---------------------------------------------------------- */
  set("Text1", build.name);
  const classParts: string[] = [];
  let careerLevel = 0;
  const baseSaves = { fort: 0, ref: 0, will: 0 };
  for (const choice of [...build.classLevels, ...build.prestigeClassLevels]) {
    if (choice.levels <= 0) continue;
    careerLevel += choice.levels;
    const def = CLASS_BY_ID.get(choice.classId);
    if (!def) continue;
    classParts.push(`${def.name} ${choice.levels}`);
    const row = def.progression?.find((r) => r.level === choice.levels);
    if (row) {
      baseSaves.fort += row.fort;
      baseSaves.ref += row.ref;
      baseSaves.will += row.will;
    }
  }
  set("Text3", classParts.join(" / "));
  set("Text15", careerLevel || null);
  set("Text4", character.race.name);
  set("Text5", build.personality.alignment || null);
  set("Text6", build.personality.religion || null);
  set("Text7", character.size);
  set("Text8", build.personality.age > 0 ? build.personality.age : null);

  /* Abilities -------------------------------------------------------- */
  for (const key of ABILITY_KEYS_LIST) {
    const score = character.abilityScores[key];
    set(key, score.total);
    set(`${key}_mod`, score.modifier);
  }
  set("con_mod2", character.abilityScores.con.modifier);

  /* Hit points, speed ------------------------------------------------ */
  set("hp", character.hp.total);
  set("speed", character.speed.base ?? null);

  /* Armor class ------------------------------------------------------ */
  const comp = (match: (key: string) => boolean): number => {
    let total = 0;
    for (const [key, c] of Object.entries(character.ac.components)) {
      if (match(key.toLowerCase())) total += c.value;
    }
    return total;
  };
  const armorBonus = comp((k) => k.includes("armor") && !k.includes("natural"));
  const shieldBonus = comp((k) => k.includes("shield"));
  const dexBonus = comp((k) => k.includes("dex"));
  const sizeBonus = comp((k) => k.includes("size"));
  const naturalBonus = comp((k) => k.includes("natural"));
  const deflectionBonus = comp((k) => k.includes("deflection"));
  set("ac", character.ac.total);
  set("touch", character.ac.touch);
  set("flatfooted", character.ac.flatFooted);
  set("ac_bonus", armorBonus);
  set("shield_bonus", shieldBonus);
  set("ac_dex_mod", dexBonus);
  set("size_mod", sizeBonus);
  set("nat_armor", naturalBonus);
  set("deflection_mod", deflectionBonus);
  set(
    "ac_misc_mod",
    character.ac.total -
      10 -
      armorBonus -
      shieldBonus -
      dexBonus -
      sizeBonus -
      naturalBonus -
      deflectionBonus,
  );

  /* Saves ------------------------------------------------------------ */
  const saveAbility: Record<"fort" | "ref" | "will", AbilityKey> = {
    fort: "con",
    ref: "dex",
    will: "wis",
  };
  const saveField: Record<"fort" | "ref" | "will", string> = {
    fort: "fort",
    ref: "reflex",
    will: "will",
  };
  for (const key of ["fort", "ref", "will"] as const) {
    const field = saveField[key];
    const abilityMod = character.abilityScores[saveAbility[key]].modifier ?? 0;
    set(field, character.saves[key].total);
    set(`${field}_ability`, abilityMod);
    set(`${field}_base`, baseSaves[key]);
    set(`${field}_magic`, 0);
    set(
      `${field}_misc`,
      character.saves[key].total - baseSaves[key] - abilityMod,
    );
  }

  /* Initiative, BAB, grapple ---------------------------------------- */
  const dexMod = character.abilityScores.dex.modifier ?? 0;
  set("ini", character.initiative.total);
  set("ini_dex_mod", dexMod);
  set("ini_misc_mod", character.initiative.total - dexMod);
  set("BAB", character.bab.total);
  const strMod = character.abilityScores.str.modifier ?? 0;
  set("grapple", character.attack.grapple.total);
  set("grapple_BAB", character.bab.total);
  set("grapple_str", strMod);
  set("grapple_misc", 0);
  set(
    "grapple_size",
    character.attack.grapple.total - character.bab.total - strMod,
  );

  /* Max ranks (the sheet's own formulas, from career level) ---------- */
  if (careerLevel > 0) {
    set("max_c", careerLevel + 3);
    set("max_cc", Math.floor((careerLevel + 3) / 2));
  }

  /* Skills ------------------------------------------------------------ */
  const usedSubSlots: Record<string, number> = {};
  let extraSlot = 0;
  const fillSkillRow = (
    prefix: string,
    skill: ResolvedCharacter["skills"][number],
    abilityMod: number,
  ) => {
    set(`${prefix}_rank`, skill.ranks);
    set(`${prefix}_mod`, abilityMod);
    set(`${prefix}_misc`, skill.total - skill.ranks - abilityMod);
    set(`${prefix}_skill`, skill.total);
  };
  for (const skill of character.skills) {
    const def = SKILL_BY_ID.get(skill.id);
    const abilityMod = def
      ? character.abilityScores[def.keyAbility].modifier ?? 0
      : 0;
    const subMatch = skill.name.match(/^([A-Za-z ]+?)\s*\((.+)\)\s*$/);
    const familyName = subMatch ? subMatch[1] : skill.name;
    if (SUBSKILL_SLOTS[familyName]) {
      const family = SUBSKILL_SLOTS[familyName];
      const idx = usedSubSlots[familyName] ?? 0;
      if (idx < family.rows.length) {
        usedSubSlots[familyName] = idx + 1;
        if (subMatch) set(family.labels[idx], subMatch[2]);
        fillSkillRow(family.rows[idx], skill, abilityMod);
        continue;
      }
    }
    const row = SKILL_ROW[skill.name];
    if (row) {
      fillSkillRow(row, skill, abilityMod);
      continue;
    }
    if (extraSlot < EXTRA_ROWS.length) {
      set(EXTRA_LABELS[extraSlot], skill.name);
      if (def) set(EXTRA_ATTRS[extraSlot], def.keyAbility.toUpperCase());
      fillSkillRow(EXTRA_ROWS[extraSlot], skill, abilityMod);
      extraSlot += 1;
    }
  }

  /* Feats and special abilities --------------------------------------- */
  character.selectedFeats.slice(0, 12).forEach((feat, i) => {
    set(i === 0 ? "feat" : `feat${i + 1}`, feat.name);
  });
  character.features.slice(0, 20).forEach((feature, i) => {
    set(
      i === 0 ? "special ability" : `special ability${i + 1}`,
      feature.name,
    );
  });

  /* Inventory: item rows, weights, total ------------------------------ */
  let totalWeight = 0;
  let weightKnown = false;
  character.inventory.slice(0, 33).forEach((item, i) => {
    const n = i + 1;
    set(n === 1 ? "item" : `item${n}`, item.name);
    const def =
      item.entry.kind === "equipment"
        ? EQUIPMENT_BY_ID.get(item.entry.itemId)
        : null;
    const lb = def ? parseWeightLb(def.weight) : null;
    if (lb !== null) {
      set(n === 1 ? "item wt" : `item wt${n}`, lb);
      totalWeight += lb;
      weightKnown = true;
    }
  });
  if (weightKnown) set("total wt", Math.round(totalWeight * 10) / 10);

  /* Attack rows: the character's weapons, in inventory order --------- */
  const weapons: { name: string; bonus: number; damage: string | null }[] = [];
  for (const item of character.inventory) {
    if (weapons.length >= 5) break;
    if (item.entry.kind === "equipment") {
      const def = EQUIPMENT_BY_ID.get(item.entry.itemId);
      if (!def || !def.category.toLowerCase().includes("weapon")) continue;
      const sub = weaponSubcategory(def);
      const bonus =
        sub === "melee"
          ? character.attack.melee.total
          : character.attack.ranged.total;
      const dice = def.notes.match(/^(\d+d\d+(?:\s*[+-]\s*\d+)?)/);
      weapons.push({ name: def.name, bonus, damage: dice ? dice[1] : null });
    } else {
      const def = MAGIC_BY_ID.get(item.entry.itemId);
      if (!def || def.category !== "Magic Weapons") continue;
      weapons.push({
        name: def.name,
        bonus: character.attack.melee.total,
        damage: null,
      });
    }
  }
  weapons.forEach((w, i) => {
    const suffix = i === 0 ? "" : `${i + 1}`;
    set(`attack${suffix}`, w.name);
    set(`attack bonus${suffix}`, signed(w.bonus));
    if (w.damage) set(`attack damage${suffix}`, w.damage);
  });

  /* Armor and shield blocks ------------------------------------------- */
  let armorDone = false;
  let shieldDone = false;
  for (const item of character.inventory) {
    if (!item.entry.equipped || item.entry.kind !== "equipment") continue;
    const def = EQUIPMENT_BY_ID.get(item.entry.itemId);
    if (!def || def.acBonus === undefined) continue;
    const isShield = `${def.category} ${def.name}`.toLowerCase().includes("shield");
    if (isShield && !shieldDone) {
      shieldDone = true;
      set("shield item", def.name);
      set("shield AC", def.acBonus);
      const lb = parseWeightLb(def.weight);
      if (lb !== null) set("shield weight", lb);
    } else if (!isShield && !armorDone) {
      armorDone = true;
      set("armor item", def.name);
      set("armor AC", def.acBonus);
      const lb = parseWeightLb(def.weight);
      if (lb !== null) set("armor weight", lb);
    }
  }
  /* Protective items: equipped magic items whose modifiers touch AC. */
  const protective: { name: string; bonus: number }[] = [];
  for (const item of character.inventory) {
    if (!item.entry.equipped || item.entry.kind !== "magic-item") continue;
    const def = MAGIC_BY_ID.get(item.entry.itemId);
    if (!def?.modifiers) continue;
    const acMods = def.modifiers.filter((m) => m.target.startsWith("ac."));
    if (acMods.length === 0) continue;
    protective.push({
      name: def.name,
      bonus: acMods.reduce((sum, m) => sum + m.value, 0),
    });
  }
  protective.slice(0, 2).forEach((p, i) => {
    const suffix = i === 0 ? "" : "2";
    set(`protective item${suffix}`, p.name);
    set(`protective AC${suffix}`, p.bonus);
  });

  /* Carrying capacity, from the build's Strength and size ------------- */
  const strScore = character.abilityScores.str.total ?? 0;
  const heavy = Math.floor(
    heavyLoadForStr(strScore) *
      (SIZE_LOAD_MULTIPLIER[character.size] ?? 1),
  );
  if (heavy > 0) {
    set("load", Math.floor(heavy / 3));
    set("load2", Math.floor((2 * heavy) / 3));
    set("load3", heavy);
    set("load4", heavy);
    set("load5", heavy * 2);
    set("load6", heavy * 5);
  }

  /* Spells known / prepared, grouped by level on each class's list ---- */
  const byLevel = new Map<number, string[]>();
  for (const choice of [...build.classLevels, ...build.prestigeClassLevels]) {
    const profile = CASTING_PROFILES_BY_ID[choice.classId];
    const picked = build.selectedSpells[choice.classId];
    if (!profile || !picked) continue;
    for (const spellId of picked) {
      const spell = SPELLS_BY_ID[spellId];
      if (!spell) continue;
      const level = spellLevelOnList(spell, profile);
      if (level === undefined || level < 0 || level > 9) continue;
      const bucket = byLevel.get(level) ?? [];
      if (!bucket.includes(spell.name)) bucket.push(spell.name);
      byLevel.set(level, bucket);
    }
  }
  for (const [level, names] of byLevel) {
    set(
      level === 0 ? "known spells" : `known spells${level + 1}`,
      names.join(", "),
    );
  }

  return v;
}

/* ------------------------------------------------------------------ */
/* Fill + neutralize                                                   */
/* ------------------------------------------------------------------ */

export async function fillInteractiveSheet(
  character: ResolvedCharacter,
): Promise<Uint8Array> {
  const { PDFDocument, PDFName, PDFNumber, PDFDict } = await import("pdf-lib");
  const binary = atob(INTERACTIVE_SHEET_B64);
  const blank = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) blank[i] = binary.charCodeAt(i);

  const doc = await PDFDocument.load(blank);
  const form = doc.getForm();
  const values = buildInteractiveSheetValues(character);

  for (const field of form.getFields()) {
    const name = field.getName();
    const dict = field.acroField.dict;
    const aa = dict.get(PDFName.of("AA"));
    const isCalculated =
      aa instanceof PDFDict && aa.get(PDFName.of("C")) !== undefined;
    if (isCalculated) {
      // Shaun's way: Blendcrafter's numbers govern. Remove the sheet's
      // calculation machinery and its read-only lock; a calculated field
      // with no Blendcrafter value is blanked rather than left holding
      // the blank sheet's stale default.
      dict.delete(PDFName.of("AA"));
      const flags = dict.get(PDFName.of("Ff"));
      if (flags instanceof PDFNumber) {
        dict.set(PDFName.of("Ff"), PDFNumber.of(flags.asNumber() & ~1));
      }
      if (!(name in values)) values[name] = "";
    }
    const value = values[name];
    if (value === undefined) continue;
    try {
      form.getTextField(name).setText(value);
    } catch {
      // Not a text field (checkbox etc.) — left exactly as the sheet has it.
    }
  }
  return doc.save();
}

export async function downloadInteractiveSheet(
  character: ResolvedCharacter,
): Promise<void> {
  const bytes = await fillInteractiveSheet(character);
  const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${character.build.name || "Character"} — Interactive Sheet.pdf`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
