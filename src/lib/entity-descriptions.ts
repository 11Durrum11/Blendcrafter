import {
  ABILITY_LABEL,
  type AbilityKey,
  type ClassDefinition,
  type EquipmentItem,
  type FeatDefinition,
  type MagicItemDefinition,
  type PrestigeClassDefinition,
  type RaceDefinition,
  type SkillDefinition,
} from "@/engine/types";

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
    badges: ["Race", race.size, `${race.baseSpeed} ft`, ...(race.favoredClass ? [`Favored class: ${race.favoredClass}`] : [])],
    summary: `${race.size} ${race.type}${race.subtypes.length ? ` (${race.subtypes.join(", ")})` : ""}, base speed ${race.baseSpeed} ft.${adjustments ? ` Ability adjustments: ${adjustments}.` : " No ability adjustments."}`,
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
    summary: `${cls.name} (prestige) — prerequisites are shown as text and are not enforced by the builder.`,
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
      `${skill.name} is a ${ABILITY_LABEL[skill.keyAbility]}-based skill.${skill.trainedOnly ? " It cannot be used untrained." : " It can be used untrained."} Class skills cap at level + 3 ranks; cross-class ranks cost double and cap at half (RAW).`,
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
  return {
    title: item.name,
    badges: ["Magic Item", item.category],
    summary: item.summary,
    sections: [{ heading: "Cost", body: item.cost }],
    source: item.source,
    sourceUrl: item.sourceUrl,
  };
}
