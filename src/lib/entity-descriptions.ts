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
} from "@/engine/types";
import { raceStartingEcl } from "@/lib/race-groups";
import { ALL_SPELLS } from "@/data/index";

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

export function describeRace(race: RaceDefinition): EntityDetail {
  const adjustments = Object.entries(race.abilityModifiers)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k.toUpperCase()} ${signed(v as number)}`)
    .join(", ");
  const startingEcl = raceStartingEcl(race);
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
    badges: ["Race", `ECL ${startingEcl}`, race.size, `${race.baseSpeed} ft`, ...(race.favoredClass ? [`Favored class: ${race.favoredClass}`] : [])],
    summary: `${race.size} ${race.type}${race.subtypes.length ? ` (${race.subtypes.join(", ")})` : ""}, base speed ${race.baseSpeed} ft.${adjustments ? ` Ability adjustments: ${adjustments}.` : " No ability adjustments."} Starting ECL ${startingEcl} before class levels${(race.racialHitDice ?? 0) > 0 ? ` (${race.racialHitDice} racial Hit Dice${race.levelAdjustment ? ` + level adjustment ${signed(race.levelAdjustment)}` : ""})` : race.levelAdjustment ? ` (level adjustment ${signed(race.levelAdjustment)})` : ""}.`,
    sections,
    source: race.source,
    sourceUrl: race.sourceUrl,
  };
}

function classSections(cls: ClassDefinition): EntityDetailSection[] {
  const lastRow = cls.progression[cls.progression.length - 1];
  return [
    {
      heading: "Progression",
      body: `Hit Die ${cls.hitDie} · ${cls.babProgression} BAB progression · ${cls.skillPointsPerLevel} + Int skill points per level.\nGood saves: ${cls.goodSaves.map((s) => s.toUpperCase()).join(", ") || "none"}.\nAt level ${lastRow.level}: BAB ${signed(lastRow.bab)}, Fort ${signed(lastRow.fort)}, Ref ${signed(lastRow.ref)}, Will ${signed(lastRow.will)}.`,
    },
    {
      heading: "Class Skills",
      body: cls.classSkills.join(", "),
    },
  ];
}

export function describeClass(cls: ClassDefinition): EntityDetail {
  return {
    title: cls.name,
    badges: ["Class", `Hit Die ${cls.hitDie}`],
    summary: `${cls.name} — ${cls.babProgression} base attack progression, ${cls.skillPointsPerLevel} skill points per level.`,
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
    summary: `${cls.name} (prestige) — prerequisites are enforced by the builder: the class stays unavailable until every prerequisite the builder can check is met, and each remaining prerequisite has been confirmed on the Classes step.`,
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
