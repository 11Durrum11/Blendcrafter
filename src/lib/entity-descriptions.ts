import {
  ABILITY_LABEL,
  type AbilityKey,
  type ClassDefinition,
  type EquipmentItem,
  type FeatDefinition,
  type FlawTraitDefinition,
  type MagicItemDefinition,
  type PrestigeClassDefinition,
  type RaceDefinition,
  type SkillDefinition,
  type SpellDefinition,
  type TemplateDefinition,
} from "@/engine/types";
import { raceStartingEcl } from "@/lib/race-groups";
import { ALL_SPELLS, CASTING_PROFILES_BY_ID } from "@/data/index";

const SPELL_BY_ID = new Map(ALL_SPELLS.map((sp) => [sp.id, sp]));

/**
 * Read-only detail views for the shared EntityDetailDialog. Every describe*
 * function turns a data-pack record into a titled, badged, sectioned summary
 * with its SRD citation attached.
 */

export interface EntityDetailSection {
  heading: string;
  body: string;
}

export interface EntityDetail {
  title: string;
  badges: string[];
  summary?: string;
  sections: EntityDetailSection[];
  source?: string;
  sourceUrl?: string;
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

const ABILITY_DESCRIPTIONS: Record<AbilityKey, string> = {
  str: "Strength measures muscle and physical power: melee attack and damage, carrying capacity, and skills like Climb, Jump, and Swim.",
  dex: "Dexterity measures agility, reflexes, and balance: Armor Class, Reflex saves, ranged attacks, and skills like Hide and Tumble.",
  con: "Constitution measures health and stamina: hit points per Hit Die and Fortitude saves. Undead and constructs have no Constitution score.",
  int: "Intelligence measures learning and reasoning: bonus languages, skill points per level, and knowledge-focused skills.",
  wis: "Wisdom measures willpower and perception: Will saves, divine spellcasting, and skills like Listen, Spot, and Survival.",
  cha: "Charisma measures force of personality: social skills, turning undead, and sorcerer/bard spellcasting.",
};

export function describeAbility(key: AbilityKey): EntityDetail {
  return {
    title: ABILITY_LABEL[key],
    badges: ["Ability Score"],
    summary: ABILITY_DESCRIPTIONS[key],
    sections: [
      {
        heading: "Modifier",
        body: "Ability modifier = (score − 10) / 2, rounded down. The modifier — not the raw score — feeds attack rolls, saves, skills, and Armor Class.",
      },
    ],
    source: "d20SRD — The Basics",
    sourceUrl: "https://www.d20srd.org/srd/theBasics.htm",
  };
}

/**
 * A brief understanding of a race (Shaun, 2026-11-09: "a brief
 * understanding in each class — and the races"): two plain-language
 * sentences built from the race's own record — what it is, where its
 * ability scores lean, what it costs to start as one, and the traits
 * it is known for. Nothing is invented: every phrase traces to a
 * field or a trait name on the record.
 */
function raceBrief(race: RaceDefinition): string {
  const ups: string[] = [];
  const downs: string[] = [];
  for (const [k, v] of Object.entries(race.abilityModifiers)) {
    if (!v) continue;
    const label = ABILITY_LABEL[k as AbilityKey];
    if ((v as number) > 0) ups.push(`${label} ${signed(v as number)}`);
    else downs.push(`${label} ${signed(v as number)}`);
  }
  const abilityPhrase =
    ups.length && downs.length
      ? `Its abilities favor ${ups.join(", ")}, at the cost of ${downs.join(", ")}.`
      : ups.length
        ? `Its abilities favor ${ups.join(", ")} — nothing is given up for them.`
        : downs.length
          ? `Its abilities are held back by ${downs.join(", ")} — nothing is granted in return.`
          : "Its ability scores are unadjusted — no built-in strengths or weaknesses.";
  const cost =
    raceStartingEcl(race) > 1
      ? ` It costs more to start as one: ECL ${raceStartingEcl(race)} before class levels${(race.racialHitDice ?? 0) > 0 ? ` (${race.racialHitDice} racial Hit Dice${race.levelAdjustment ? ` and level adjustment ${signed(race.levelAdjustment)}` : ""})` : race.levelAdjustment ? ` (level adjustment ${signed(race.levelAdjustment)})` : ""}.`
      : "";
  const extras: string[] = [];
  if (race.bonusFeatSlots) extras.push("an extra feat at 1st level");
  if (race.bonusSkillPointsPerLevel || race.bonusSkillPointsAtFirstLevel) extras.push("extra skill points as it levels");
  if (race.naturalArmor) extras.push(`natural armor ${signed(race.naturalArmor)}`);
  const traitNames = race.traits.slice(0, 3).map((t) => t.name);
  const knownFor =
    traitNames.length > 0
      ? ` Known for: ${traitNames.join(", ")}${race.traits.length > 3 ? `, and ${race.traits.length - 3} more trait${race.traits.length - 3 === 1 ? "" : "s"}` : ""}.`
      : "";
  return (
    `${race.name} — a ${race.size} ${race.type}${race.subtypes.length ? ` (${race.subtypes.join(", ")})` : ""}, moving ${race.baseSpeed} ft a round. ` +
    abilityPhrase +
    (extras.length ? ` It brings ${extras.join(" and ")}.` : "") +
    cost +
    (race.favoredClass ? ` Favored class: ${race.favoredClass}.` : "") +
    knownFor
  );
}

export function describeRace(race: RaceDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [
    {
      heading: "Racial Traits",
      body: race.traits.map((t) => `${t.name}: ${t.description}`).join("\n") || "No special traits.",
    },
  ];
  if (Object.keys(race.skillBonuses ?? {}).length > 0) {
    sections.push({
      heading: "Skill Bonuses",
      body: Object.entries(race.skillBonuses ?? {})
        .map(([skill, v]) => `${skill}: ${signed(v as number)}`)
        .join("\n"),
    });
  }
  return {
    title: race.name,
    badges: ["Race", `ECL ${raceStartingEcl(race)}`, race.size, `${race.baseSpeed} ft`, ...(race.favoredClass ? [`Favored class: ${race.favoredClass}`] : [])],
    summary: raceBrief(race),
    sections,
    source: race.source,
    sourceUrl: race.sourceUrl,
  };
}

/**
 * Template detail (bug sweep 2026-11-08): template cards showed
 * their summary with no way to read the rest — no info view at
 * all, unlike races/classes/feats. Built from the record's own
 * fields only: adjustments, features, prerequisites, forms.
 */
export function describeTemplate(t: TemplateDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [];
  if (t.abilityModifiers && Object.keys(t.abilityModifiers).length > 0) {
    sections.push({
      heading: "Ability Adjustments",
      body: Object.entries(t.abilityModifiers)
        .map(([k, v]) => (v === null || v === undefined ? `${k.toUpperCase()} — (score removed)` : `${k.toUpperCase()} ${signed(v as number)}`))
        .join("\n"),
    });
  }
  if (t.features && t.features.length > 0) {
    sections.push({
      heading: "Features",
      body: t.features.map((f) => `${f.name}: ${f.description}`).join("\n"),
    });
  }
  if (t.modifiers && t.modifiers.length > 0) {
    sections.push({
      heading: "Adjustments",
      body: t.modifiers.map((m) => `${m.target}: ${signed(m.value)}`).join("\n"),
    });
  }
  if (t.prerequisites && t.prerequisites.length > 0) {
    sections.push({
      heading: "Prerequisites",
      body: t.prerequisites.map((p) => p.note).join("\n"),
    });
  }
  if (t.forms && t.forms.length > 0) {
    sections.push({
      heading: "Forms",
      body: t.forms.map((f) => (f.description ? `${f.name}: ${f.description}` : f.name)).join("\n"),
    });
  }
  return {
    title: t.name,
    badges: ["Template", t.timing === "inherited" ? "Inherited" : "Acquired", `CR ${signed(t.crModifier)}`, `LA ${signed(t.levelAdjustment)}`],
    summary: t.summary,
    sections,
    source: t.source,
    sourceUrl: t.sourceUrl,
  };
}

/**
 * The FULL class breakdown (Shaun, 2026-11-03: "give an exclamation
 * point that breaks down the entire class fully"). Until now the
 * class dialog showed only the final level's numbers and no class
 * features at all. Now it carries everything the record holds:
 * the vitals, the progression table for EVERY level, every class
 * feature with its full text (level-gated features marked with the
 * level they arrive at), and the class skill list.
 */
const SAVE_LABEL: Record<string, string> = { fort: "Fortitude", ref: "Reflex", will: "Will" };
const ORDINALS = ["0-level", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level"];

/**
 * A brief understanding of a class (Shaun, 2026-11-09: "give a brief
 * understanding in each class"): two or three plain-language
 * sentences built from the class's own record — its role (from base
 * attack, hit die, and its casting profile where it has one), its
 * strong saves, its skill breadth, and the features it is known
 * for. Nothing is invented: every phrase traces to a field on the
 * record or its casting profile.
 */
function classBrief(cls: ClassDefinition): string {
  const profile = CASTING_PROFILES_BY_ID[cls.id];
  const hdWord =
    cls.hitDie === "d12" || cls.hitDie === "d10" ? "tough" : cls.hitDie === "d8" ? "sturdy" : cls.hitDie === "d6" ? "lightly built" : "fragile";
  const babWord = cls.babProgression === "full" ? "full" : cls.babProgression === "three-quarter" ? "three-quarter" : "half";
  let role: string;
  let power = "";
  if (profile) {
    const kindWord =
      profile.kind === "prepared-arcane"
        ? "prepared arcane spellcaster"
        : profile.kind === "prepared-divine"
          ? "prepared divine spellcaster"
          : "spontaneous spellcaster";
    let maxSpell = 0;
    for (const row of profile.spellsPerDay) {
      row.forEach((cell, i) => {
        if (cell !== null && i > maxSpell) maxSpell = i;
      });
    }
    role = `a ${kindWord}`;
    power = ` Its casting is keyed to ${ABILITY_LABEL[profile.keyAbility]} and reaches up to ${ORDINALS[maxSpell]} spells.`;
  } else if (cls.source.startsWith("Expanded Psionics Handbook") || cls.source.startsWith("Complete Psionic")) {
    role = cls.id === "soulknife" ? "a psionic warrior" : "a psionic manifester";
    power =
      cls.id === "soulknife"
        ? " It manifests no powers — its psionics take shape as a blade of pure mental energy."
        : " Its powers are psionic, drawn from the mind rather than from spellcasting.";
  } else if (cls.babProgression === "full") {
    role = "a front-line martial class";
  } else if (cls.babProgression === "three-quarter") {
    role = "a skilled combatant";
  } else {
    role = "a specialist class";
  }
  const saves = cls.goodSaves.map((s) => SAVE_LABEL[s] ?? s);
  const breadth = cls.skillPointsPerLevel >= 6 ? "a broad skill set" : cls.skillPointsPerLevel >= 4 ? "a moderate skill set" : "a narrow skill set";
  const features = [...(cls.features ?? [])]
    .sort((a, b) => ((a as { levelsNeeded?: number }).levelsNeeded ?? 0) - ((b as { levelsNeeded?: number }).levelsNeeded ?? 0))
    .filter((f) => !/proficien/i.test(f.name));
  const knownFor =
    features.length > 0
      ? ` Known for: ${features.slice(0, 3).map((f) => f.name).join(", ")}${features.length > 3 ? `, and ${features.length - 3} more feature${features.length - 3 === 1 ? "" : "s"}` : ""}.`
      : "";
  return (
    `${cls.name} is ${role} — ${cls.hitDie} Hit Die (${hdWord}), ${babWord} base attack progression, ` +
    `${saves.length ? `strong ${saves.join(" and ")}` : "no strong save"}.` +
    power +
    ` It earns ${cls.skillPointsPerLevel} + Int skill points per level across ${cls.classSkills.length} class skills — ${breadth}.` +
    knownFor
  );
}

function classSections(cls: ClassDefinition): EntityDetailSection[] {
  const sections: EntityDetailSection[] = [
    {
      heading: "Overview",
      body: `Hit Die ${cls.hitDie} · ${cls.babProgression} BAB progression · ${cls.skillPointsPerLevel} + Int skill points per level.\nGood saves: ${cls.goodSaves.map((s) => s.toUpperCase()).join(", ") || "none"}.`,
    },
    {
      heading: "Progression — level by level",
      body: cls.progression
        .map(
          (r) =>
            `Level ${r.level}: BAB ${signed(r.bab)} · Fort ${signed(r.fort)} · Ref ${signed(r.ref)} · Will ${signed(r.will)}`
        )
        .join("\n"),
    },
  ];
  const features = cls.features ?? [];
  if (features.length > 0) {
    // General features (no level gate — basics, proficiencies) first,
    // then level-gated features in the order they arrive.
    const ordered = [...features].sort(
      (a, b) =>
        ((a as { levelsNeeded?: number }).levelsNeeded ?? 0) -
        ((b as { levelsNeeded?: number }).levelsNeeded ?? 0)
    );
    sections.push({
      heading: "Class Features",
      body: ordered
        .map((f) => {
          const lvl = (f as { levelsNeeded?: number }).levelsNeeded;
          return `${f.name}${lvl ? ` (from level ${lvl})` : ""}: ${f.description}`;
        })
        .join("\n"),
    });
  }
  sections.push({
    heading: "Class Skills",
    body: cls.classSkills.join(", "),
  });
  return sections;
}

export function describeClass(cls: ClassDefinition): EntityDetail {
  return {
    title: cls.name,
    badges: ["Class", `Hit Die ${cls.hitDie}`],
    summary: classBrief(cls),
    sections: classSections(cls),
    source: cls.source,
    sourceUrl: cls.sourceUrl,
  };
}

export function describePrestigeClass(cls: PrestigeClassDefinition): EntityDetail {
  const sections = classSections(cls);
  if (cls.prerequisites.length > 0) {
    sections.unshift({ heading: "Prerequisites", body: cls.prerequisites.join("\n") });
  }
  return {
    title: cls.name,
    badges: ["Prestige Class", `Hit Die ${cls.hitDie}`],
    summary: `${classBrief(cls)} Its prerequisites are enforced by the builder — it unlocks when the build meets them.`,
    sections,
    source: cls.source,
    sourceUrl: cls.sourceUrl,
  };
}

export function describeSkill(skill: SkillDefinition): EntityDetail {
  return {
    title: skill.name,
    badges: ["Skill", `Key ability: ${ABILITY_LABEL[skill.keyAbility]}`, ...(skill.trainedOnly ? ["Trained only"] : []), ...(skill.armorCheckPenalty ? ["Armor check penalty applies"] : [])],
    summary:
      skill.description ??
      `${skill.name} is a ${ABILITY_LABEL[skill.keyAbility]}-based skill.${skill.trainedOnly ? " It cannot be used untrained." : " It can be used untrained."} Class skills cap at level + 3 ranks; cross-class ranks cost 1 point per rank (the double-cost rule is locked off at Shaun's direction) and cap at half while that cap toggle is on.`,
    sections: [],
    source: skill.source,
    sourceUrl: skill.sourceUrl,
  };
}

export function describeFeat(feat: FeatDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [];
  if (feat.prerequisites.length > 0) {
    sections.push({ heading: "Prerequisites", body: feat.prerequisites.join("\n") });
  }
  if (feat.modifiers && feat.modifiers.length > 0) {
    sections.push({
      heading: "Modeled Effect",
      body: feat.modifiers.map((m) => `${m.target}: ${signed(m.value)} (${m.bonusType})`).join("\n"),
    });
  }
  if (feat.special) sections.push({ heading: "Special", body: feat.special });
  return {
    title: feat.name,
    badges: ["Feat", feat.category],
    summary: feat.benefitSummary,
    sections,
    source: feat.source,
    sourceUrl: feat.sourceUrl,
  };
}

export function describeFlawTrait(entry: FlawTraitDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [
    { heading: "Full Description", body: entry.description },
  ];
  if (entry.prerequisite) {
    sections.push({ heading: "Prerequisite", body: entry.prerequisite });
  }
  return {
    title: entry.name,
    badges: [entry.kind === "flaw" ? "Flaw" : "Trait"],
    summary: entry.summary,
    sections,
    source: entry.source,
    sourceUrl: entry.sourceUrl,
  };
}

export function describeEquipment(item: EquipmentItem): EntityDetail {
  return {
    title: item.name,
    badges: ["Equipment", item.category, ...(typeof item.acBonus === "number" ? [`AC +${item.acBonus} when equipped`] : [])],
    summary: `${item.cost} · ${item.weight}`,
    sections: [{ heading: "Notes", body: item.notes }],
    source: item.source,
    sourceUrl: item.sourceUrl,
  };
}

export function describeMagicItem(item: MagicItemDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [{ heading: "Cost", body: item.cost }];
  // Generated wands and scrolls (2026-11-02): the item IS a spell in a
  // stick / on a page, so its detail view carries the spell's full
  // crunch — description where the spell record has one, plus the
  // full stat block (lists, casting time, components, range, target,
  // duration, saving throw, spell resistance). The three hand-built
  // scrolls pick the same treatment up by the same id join.
  const spellId = item.id.startsWith("wand-of-")
    ? item.id.slice("wand-of-".length)
    : item.id.startsWith("scroll-of-")
      ? item.id.slice("scroll-of-".length)
      : null;
  const spell = spellId ? SPELL_BY_ID.get(spellId) : undefined;
  if (spell) {
    if (spell.description) sections.push({ heading: "Spell Description", body: spell.description });
    sections.push(
      {
        heading: "Spell Lists",
        body: Object.entries(spell.levels)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([list, lvl]) => `${list} ${lvl}`)
          .join("\n"),
      },
      { heading: "Casting Time", body: spell.castingTime },
      { heading: "Components", body: spell.components },
      { heading: "Range", body: spell.range },
      { heading: "Target / Area / Effect", body: spell.targetOrArea },
      { heading: "Duration", body: spell.duration },
      { heading: "Saving Throw", body: spell.savingThrow },
      { heading: "Spell Resistance", body: spell.spellResistance }
    );
  }
  return {
    title: item.name,
    badges: ["Magic Item", item.category],
    summary: item.summary,
    sections,
    source: item.source,
    sourceUrl: item.sourceUrl,
  };
}

/**
 * Full crunch for one spell. When a list name is given (the library and the
 * picking cards browse one list at a time), its level on that list is badged.
 */
export function describeSpell(spell: SpellDefinition, listName?: string): EntityDetail {
  const schoolLine = `${spell.school}${spell.subschool ? ` (${spell.subschool})` : ""}${
    spell.descriptors.length > 0 ? ` [${spell.descriptors.join(", ")}]` : ""
  }`;
  const levelOnList = listName ? spell.levels[listName] : undefined;
  const sections: EntityDetailSection[] = [
    ...(spell.description ? [{ heading: "Description", body: spell.description }] : []),
    {
      heading: "Spell Lists",
      body: Object.entries(spell.levels)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([list, lvl]) => `${list} ${lvl}`)
        .join("\n"),
    },
    { heading: "Casting Time", body: spell.castingTime },
    { heading: "Components", body: spell.components },
    { heading: "Range", body: spell.range },
    { heading: "Target / Area / Effect", body: spell.targetOrArea },
    { heading: "Duration", body: spell.duration },
    { heading: "Saving Throw", body: spell.savingThrow },
    { heading: "Spell Resistance", body: spell.spellResistance },
  ];
  if (spell.note) sections.push({ heading: "Note", body: spell.note });
  return {
    title: spell.name,
    badges: ["Spell", schoolLine, ...(levelOnList !== undefined && listName ? [`${listName} ${levelOnList}`] : [])],
    summary: spell.summary,
    sections,
    source: spell.source,
    sourceUrl: spell.sourceUrl,
  };
}
