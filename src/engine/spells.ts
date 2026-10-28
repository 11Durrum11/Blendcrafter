import { ALL_CLASSES, ALL_SPELLS, CASTING_PROFILES_BY_ID, SPELLS_BY_ID } from "@/data";
import type {
  AbilityKey,
  CastingProfile,
  CharacterBuild,
  SpellDefinition,
  ValidationIssue,
} from "./types";

/**
 * Batch 12 — spellcasting engine helpers.
 *
 * Everything spell-related that more than one layer needs lives here:
 *   - arcane/divine typing of casting classes,
 *   - per-day slot math (base table + ability bonus spells),
 *   - "can this class level cast spell level L" access checks,
 *   - selection validation used by the resolver,
 *   - casting facts used by the prestige-prerequisite evaluator.
 *
 * Modeling limits (documented, never faked):
 *   - Prestige-class "+1 level of existing spellcasting class"
 *     advancement is NOT modeled: PrC records carry no casting data,
 *     so casting facts derive from base-class levels only.
 *   - A wizard's / wu jen's selections are the spellbook: the rules
 *     place no cap on spells known, so only list membership and level
 *     access are enforced for them.
 *   - Specialist-wizard bonus slots, domain slots, and similar
 *     slot add-ons are not modeled; prepared-divine caps use base
 *     spells per day + ability bonus spells.
 */

const CLASS_NAME_BY_ID = new Map(ALL_CLASSES.map((c) => [c.id, c.name]));

/** Spontaneous classes whose casting is divine (all other spontaneous
 *  profiled classes are arcane). From each class's own book. */
const DIVINE_SPONTANEOUS = new Set(["favored-soul", "spirit-shaman", "shugenja", "healer"]);

export type CastingType = "arcane" | "divine";

export function castingType(profile: CastingProfile): CastingType {
  if (profile.kind === "prepared-arcane") return "arcane";
  if (profile.kind === "prepared-divine") return "divine";
  return DIVINE_SPONTANEOUS.has(profile.classId) ? "divine" : "arcane";
}

/** Standard bonus spells per day for a key-ability score at spell
 *  level L (PHB Table: Ability Modifiers and Bonus Spells). */
export function bonusSpells(abilityScore: number | null | undefined, spellLevel: number): number {
  if (abilityScore === null || abilityScore === undefined) return 0;
  if (spellLevel <= 0) return 0;
  if (abilityScore < 10 + spellLevel) return 0;
  const mod = Math.floor((abilityScore - 10) / 2);
  if (mod < spellLevel) return 0;
  return Math.floor((mod - spellLevel) / 4) + 1;
}

/** The spells-per-day row for a class level (profiles carry 1–10). */
export function perDayRow(profile: CastingProfile, classLevel: number): (number | null)[] {
  const idx = Math.min(Math.max(classLevel, 1), profile.spellsPerDay.length) - 1;
  return profile.spellsPerDay[idx];
}

export function knownRow(profile: CastingProfile, classLevel: number): (number | null)[] | null {
  if (!profile.spellsKnown) return null;
  const idx = Math.min(Math.max(classLevel, 1), profile.spellsKnown.length) - 1;
  return profile.spellsKnown[idx];
}

/**
 * Can a caster of this class level cast spells of `spellLevel` at all?
 * True when the per-day cell is non-null and, counting ability bonus
 * spells, at least one slot exists. When `abilityScore` is null the
 * ability component is skipped (callers that lack scores).
 */
export function canCastLevel(
  profile: CastingProfile,
  classLevel: number,
  spellLevel: number,
  abilityScore: number | null
): boolean {
  const cell = perDayRow(profile, classLevel)[spellLevel];
  if (cell === null || cell === undefined) return false;
  if (abilityScore !== null && abilityScore < 10 + spellLevel) return false;
  return cell + bonusSpells(abilityScore, spellLevel) >= 1;
}

/** Highest spell level (1–9) castable at this class level; 0 if the
 *  class can cast only 0-level spells, -1 if it cannot cast at all. */
export function maxCastableLevel(
  profile: CastingProfile,
  classLevel: number,
  abilityScore: number | null
): number {
  const row = perDayRow(profile, classLevel);
  let max = -1;
  for (let l = 0; l <= 9; l++) {
    const cell = row[l];
    if (cell === null || cell === undefined) continue;
    if (abilityScore !== null && abilityScore < 10 + l) continue;
    if (cell + bonusSpells(abilityScore, l) >= 1) max = l;
    else if (l === 0) max = 0;
  }
  return max;
}

/** Prepared-class daily slot cap for one spell level (base + bonus). */
export function slotCap(
  profile: CastingProfile,
  classLevel: number,
  spellLevel: number,
  abilityScore: number | null
): number | null {
  const cell = perDayRow(profile, classLevel)[spellLevel];
  if (cell === null || cell === undefined) return null;
  return cell + bonusSpells(abilityScore, spellLevel);
}

/** Spells on a class's list (optionally ruleset-filtered), with the
 *  profile's school restriction applied (spellthief). */
export function spellsOnList(
  profile: CastingProfile,
  rulesets?: readonly string[]
): SpellDefinition[] {
  return ALL_SPELLS.filter((s) => {
    if (s.levels[profile.listName] === undefined) return false;
    if (profile.allowedSchools && !profile.allowedSchools.includes(s.school)) return false;
    if (rulesets && !rulesets.includes(s.ruleset)) return false;
    return true;
  });
}

export interface ClassCastingFacts {
  classId: string;
  className: string;
  classLevel: number;
  profile: CastingProfile;
  type: CastingType;
  /** Highest spell level castable with at least one slot. */
  maxLevel: number;
}

/** Casting facts for every profiled base class in the build. */
export function castingFacts(
  build: CharacterBuild,
  abilityScores?: Partial<Record<AbilityKey, number | null>>
): ClassCastingFacts[] {
  const facts: ClassCastingFacts[] = [];
  for (const choice of build.classLevels) {
    if (choice.levels <= 0) continue;
    const profile = CASTING_PROFILES_BY_ID[choice.classId];
    if (!profile) continue;
    const score = abilityScores ? abilityScores[profile.keyAbility] ?? null : null;
    facts.push({
      classId: choice.classId,
      className: CLASS_NAME_BY_ID.get(choice.classId) ?? choice.classId,
      classLevel: choice.levels,
      profile,
      type: castingType(profile),
      maxLevel: maxCastableLevel(profile, choice.levels, score),
    });
  }
  return facts;
}

/** Can the build cast the named spell right now? Prepared-divine and
 *  know-whole-list classes can cast anything on their list at an
 *  accessible level; spellbook and spontaneous-known classes must
 *  actually have the spell among their selections. */
export function canCastNamedSpell(
  selectedSpells: Record<string, string[]>,
  spell: SpellDefinition,
  facts: ClassCastingFacts[],
  abilityScores?: Partial<Record<AbilityKey, number | null>>
): boolean {
  for (const fact of facts) {
    const level = spell.levels[fact.profile.listName];
    if (level === undefined) continue;
    if (fact.profile.allowedSchools && !fact.profile.allowedSchools.includes(spell.school)) continue;
    const score = abilityScores ? abilityScores[fact.profile.keyAbility] ?? null : null;
    if (!canCastLevel(fact.profile, fact.classLevel, level, score)) continue;
    if (fact.profile.kind === "prepared-divine" || fact.profile.knowsEntireList) return true;
    if ((selectedSpells[fact.classId] ?? []).includes(spell.id)) return true;
  }
  return false;
}

/* ------------------------------------------------------------------ */
/* Selection validation (resolver)                                     */
/* ------------------------------------------------------------------ */

const ORDINAL = ["0-level", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level"];

export function validateSelectedSpells(
  build: CharacterBuild,
  abilityScores?: Partial<Record<AbilityKey, number | null>>
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const selections = build.selectedSpells ?? {};
  const takenLevels = new Map<string, number>();
  for (const choice of build.classLevels) {
    if (choice.levels > 0) takenLevels.set(choice.classId, choice.levels);
  }

  for (const [classId, spellIds] of Object.entries(selections)) {
    if (!spellIds || spellIds.length === 0) continue;
    const className = CLASS_NAME_BY_ID.get(classId) ?? classId;
    const profile = CASTING_PROFILES_BY_ID[classId];
    const classLevel = takenLevels.get(classId);
    if (classLevel === undefined) {
      issues.push({
        severity: "error",
        message: `Spells are selected for ${className}, but this build has no levels in that class.`,
      });
      continue;
    }
    if (!profile) {
      issues.push({
        severity: "error",
        message: `${className} has no spellcasting progression in the data (its casting system is not modeled as spells), so its spell selections cannot be validated.`,
      });
      continue;
    }
    const score = abilityScores ? abilityScores[profile.keyAbility] ?? null : null;
    const byLevel = new Map<number, number>();
    for (const spellId of spellIds) {
      const spell = SPELLS_BY_ID[spellId];
      if (!spell) {
        issues.push({ severity: "error", message: `Unknown spell id "${spellId}" selected for ${className}.` });
        continue;
      }
      const level = spell.levels[profile.listName];
      if (level === undefined) {
        issues.push({
          severity: "error",
          message: `${spell.name} is not on the ${profile.listName} spell list (${className} cannot select it).`,
        });
        continue;
      }
      if (profile.allowedSchools && !profile.allowedSchools.includes(spell.school)) {
        issues.push({
          severity: "error",
          message: `${spell.name} is ${spell.school}, outside the schools a ${className} may learn (${profile.allowedSchools.join(", ")}).`,
        });
        continue;
      }
      const cell = perDayRow(profile, classLevel)[level];
      if (cell === null || cell === undefined) {
        issues.push({
          severity: "error",
          message: `${className} ${classLevel} cannot cast ${ORDINAL[level]} spells yet, so ${spell.name} cannot be selected.`,
        });
        continue;
      }
      if (score !== null && score < 10 + level) {
        issues.push({
          severity: "error",
          message: `${className}'s key ability score (${score}) is too low to cast ${ORDINAL[level]} spells (needs ${10 + level}).`,
        });
        continue;
      }
      byLevel.set(level, (byLevel.get(level) ?? 0) + 1);
    }

    // Per-level count caps.
    for (const [level, count] of byLevel) {
      if (profile.kind === "spontaneous" && !profile.knowsEntireList) {
        const row = knownRow(profile, classLevel);
        if (row) {
          const cap = row[level];
          if (cap !== null && cap !== undefined && count > cap) {
            issues.push({
              severity: "error",
              message: `${className} ${classLevel} knows at most ${cap} ${ORDINAL[level]} spells (you selected ${count}).`,
            });
          }
        }
      }
      if (profile.kind === "prepared-divine") {
        const cap = slotCap(profile, classLevel, level, score);
        if (cap !== null && count > cap) {
          issues.push({
            severity: "error",
            message: `${className} ${classLevel} can prepare at most ${cap} ${ORDINAL[level]} spells per day (you selected ${count}).`,
          });
        }
      }
      // prepared-arcane (wizard / wu jen): selections are the spellbook —
      // no known cap exists in the rules, so nothing to enforce here.
    }
  }
  return issues;
}
