// Dragon Magazine #339 prestige class — integrated in the Dragon
// Magazine treatment program (issue #339 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-339/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Athasian Dragon, an EPIC prestige class: defiling is inseparable from the printed class; staged as printed with Dark Sun lore stripped and the flag on the record per the pack SCREENING.
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

import type { PrestigeClassDefinition } from "@/engine/types";
import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  key?: string;
  name: string;
  category?: string;
  source?: string;
  sourceUrl?: string;
  description: string;
  level?: number;
}

interface RawClassLike {
  id: string;
  name: string;
  role?: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression?: string;
  goodSaves?: string[];
  requirements?: { label: string; value: string }[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  prerequisites?: string[];
  length?: number;
  features: RawFeature[];
}


function deriveBab(rows: ClassLevelProgressionRow[]): string {
  const last = rows[rows.length - 1];
  if (!last) return "half";
  if (last.bab >= last.level) return "full";
  if (last.bab >= Math.floor((last.level * 3) / 4)) return "three-quarter";
  return "half";
}

function deriveSaves(rows: ClassLevelProgressionRow[]): string[] {
  const good = (v: number, lvl: number) => v >= 2 + Math.floor(lvl / 2) - 1;
  const out: string[] = [];
  const last = rows[rows.length - 1];
  if (!last) return out;
  if (good(last.fort, last.level)) out.push("fort");
  if (good(last.ref, last.level)) out.push("ref");
  if (good(last.will, last.level)) out.push("will");
  return out;
}






const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SRC = "Dragon Magazine #339 — Dragon Kings (Chris Flipse and Jon Sederquist), pp. 22-25";

const EPIC_BAB = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const EPIC_SAVE = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

const RAW: RawClassLike[] = [
  {
    id: "athasian-dragon",
    name: "Athasian Dragon",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: [],
    prerequisites: [
      "Race: Any living humanoid",
      "Alignment: Any nongood",
      "Skills: Knowledge (arcana) 24 ranks, Knowledge (psionics) 24 ranks",
      "Feats: Epic Spellcasting, Great Fortitude, any two metamagic feats, and any two metapsionic feats",
      "Spells/Powers: Able to cast 9th-level arcane spells and manifest 6th-level psionic powers",
      "Special: Must perform a ritual that requires a sacrifice of no less than 1,000 HD of living creatures and 50,000 gp",
    ],
    progression: EPIC_BAB.map((bab, i) => ({
      level: i + 1,
      bab,
      fort: EPIC_SAVE[i],
      ref: EPIC_SAVE[i],
      will: EPIC_SAVE[i],
    })),
    classSkills: [
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Intimidate",
      "Jump",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (psionics)",
      "Listen",
      "Profession",
      "Psicraft",
      "Spellcraft",
      "Spot",
    ],
    features: [
      {
        name: "Athasian Dragon Basics",
        description:
          "An epic prestige class: the metamorphosis that transforms an epic arcane spellcaster and psionic manifester into a true dragon over ten levels of growth and change, molting at each level and emerging in a new, larger form. Hit Die d12; 2 + Int modifier skill points per level. Epic progression: as an epic class, it accrues epic attack and epic save bonuses at the epic rate (+1 per two levels, all saves alike) rather than the standard base attack/save rates, per the Epic Level Handbook. Weapon and Armor Proficiency: the Athasian dragon gains no new weapon or armor proficiency. Spells per Day / Powers per Day: at 1st, 3rd, 5th, 7th, and 9th level the dragon gains new spells per day (and spells known, if applicable) or new power points (and powers known, if applicable) as if he had also gained a level in an arcane spellcasting or manifesting class to which he belonged before adding the prestige class level — the dragon decides at each such level which class the added level applies to; he gains no other benefit of that class (no bonus metamagic, metapsionic, or item creation feats, psicrystal abilities, and so on). If already an epic spellcaster, the character gains only the benefit noted under the Spells or Powers entry for that epic class. Key abilities: Constitution and Charisma. ⚠️ APOC: this class's dragon magic is a defiling mechanic and its entry ritual requires a mass living sacrifice — see SCREENING.md §1; both are staged as printed and flagged for Shaun.",
        level: 1,
      },
      {
        name: "Dragon Magic",
        description:
          "By combining his knowledge of psionics and arcane magic, an Athasian dragon learns how to use the life energy of those around him to aid his epic spellcasting. When casting an epic spell with the backlash mitigating factor, the Athasian dragon can drain up to 10 hit points from one living creature per Athasian dragon level as a free action. The creatures drained must be within close range (25 feet + 5 feet per 2 spellcaster levels). If the spell takes more than 1 round to cast, the Athasian dragon may select different creatures to drain each round. The total number of hit points drained in this manner cannot exceed the amount of backlash damage dealt to the Athasian dragon by the epic spell. A living creature drained in this manner must make a Fortitude save (DC 10 + Athasian dragon class level + the dragon's Constitution modifier) or permanently lose the drained hit points (its hit point total permanently drops by that amount, to a minimum of 1 hp per HD). If the drained damage kills a creature and it is brought back to life, it automatically loses at least 1 level regardless of the spell used to return it to life; if the spell used normally penalizes the recipient 1 level, a creature killed by this ability loses 2 levels instead. ⚠️ This is the setting's defiling mechanic, staged as printed — see SCREENING.md §1.",
        level: 1,
      },
      {
        name: "Metamorphosis",
        description:
          "Upon beginning the transformation process, the Athasian dragon takes on some aspects of the dragon type. He gains darkvision out to 60 feet and low-light vision. In addition, he becomes immune to magical sleep and paralysis effects, and he gains a natural armor bonus equal to his Athasian dragon level.",
        level: 1,
      },
      {
        name: "Polyglot",
        description:
          "The Athasian dragon gains the Polyglot feat (Epic Level Handbook) as a bonus feat, even if he does not meet its prerequisites.",
        level: 1,
      },
      {
        name: "Bonus Feat",
        description:
          "At 2nd level, and every four levels thereafter (6th and 10th), the Athasian dragon gains a bonus epic feat chosen from the class's printed list: Arcane Augmentation (new, staged in this pack's feats draft), Armor Skin, Damage Reduction, Epic Fortitude, Epic Psionic Focus, Epic Skill Focus (Knowledge [arcana]), Epic Skill Focus (Knowledge [psionics]), Epic Spell Focus, Epic Spell Penetration, Epic Toughness, Fast Healing, Great Constitution, Great Intelligence, Great Strength, Improved Combat Casting, Improved Manifestation, Improved Spell Capacity, Improved Spell Resistance, Metamixture (new, staged in this pack's feats draft), Penetrate Damage Reduction, Power Knowledge, and Spell Knowledge.",
        level: 2,
      },
      {
        name: "Claws",
        description:
          "At 2nd level, the Athasian dragon's hands harden into claws. He gains two claw attacks as primary natural attacks, dealing the same amount of damage as those of a true dragon of the same size.",
        level: 2,
      },
      {
        name: "Ageless",
        description:
          "Beginning at 3rd level, the Athasian dragon does not age. All age-related ability score penalties and bonuses accrued prior to becoming an Athasian dragon remain, but he no longer takes ability score penalties or gains bonuses for aging, and he is immune to the ravages of time.",
        level: 3,
      },
      {
        name: "Bite",
        description:
          "At 4th level, the Athasian dragon's face extends into a pronounced snout. He gains a bite attack as a primary natural attack, dealing the same amount of damage as that of a true dragon of the same size.",
        level: 4,
      },
      {
        name: "Growth",
        description:
          "At 4th level, and again at 10th level, the Athasian dragon grows by one size category, gaining all bonuses and penalties inherent to the size transformation (Monster Manual, p. 291), and the damage dealt by all his natural attacks increases accordingly. Growing from Medium to Large grants +6 Strength and +4 Constitution, natural armor +2, −4 Dexterity, and a −1 size penalty to Armor Class and attack bonuses; from Large to Huge, an additional +8 Strength and +4 Constitution, natural armor +1 more (+3 total from size), −2 Dexterity, and the size penalty increases to −2.",
        level: 4,
      },
      {
        name: "Burrow",
        description:
          "At 5th level, the Athasian dragon can burrow; its burrow speed equals half its base land speed.",
        level: 5,
      },
      {
        name: "Tail",
        description:
          "At 5th level, the Athasian dragon also grows a tail. A Large or larger Athasian dragon gains a tail slap attack, and a Gargantuan or larger Athasian dragon gains a tail sweep attack; both deal the same amount of damage as those of a true dragon of the same size.",
        level: 5,
      },
      {
        name: "Frightful Presence (Ex)",
        description:
          "At 6th level, the Athasian dragon gains the frightful presence ability, as a dragon. This ability has a radius of 30 feet per Athasian dragon level and affects creatures with fewer Hit Dice than the Athasian dragon. A creature that succeeds on a Will save (DC 10 + 1/2 the dragon's character level + its Charisma modifier) becomes immune to that Athasian dragon's frightful presence for 24 hours. On a failure, creatures with 4 or fewer HD become panicked for 4d6 rounds and those with 5 or more HD become shaken for 4d6 rounds. Athasian dragons ignore the frightful presence of other Athasian dragons.",
        level: 6,
      },
      {
        name: "Breath Weapon",
        description:
          "At 7th level, the Athasian dragon gains a single breath weapon: a superheated cone of sand that deals 1d12 points of damage per Athasian dragon level, half fire and half piercing. The area of effect is equivalent to that of a true dragon of the same size. Creatures caught in the area can attempt Reflex saves to take half damage (DC 10 + 1/2 Athasian dragon level + the dragon's Constitution modifier). Just like a true dragon, the Athasian dragon can use his breath weapon at will, but he must wait 1d4 rounds between uses.",
        level: 7,
      },
      {
        name: "Wings",
        description:
          "At 8th level, the Athasian dragon sprouts wings and gains a fly speed: an Athasian dragon of size Huge or smaller has a fly speed of 150 feet, and one of size Gargantuan or larger has a fly speed of 200 feet, with poor maneuverability regardless of size. In addition, he gains two wing attacks as secondary natural attacks, dealing the same amount of damage as those of a true dragon of the same size. (APOC note: flying is barred over the Bastion by the Melairshield; the class stages as printed.)",
        level: 8,
      },
      {
        name: "Resistance",
        description:
          "At 9th level, the Athasian dragon gains spell resistance and power resistance equal to 11 + its character level.",
        level: 9,
      },
      {
        name: "The Change / Raising",
        description:
          "The transformation is complete at 10th level: the pain of the transformation passes, and although the dragon continues to grow, as a normal dragon, it is a natural process that no longer causes pain. (The growth period from 4th through 10th level is excruciating; the article suggests a DM might occasionally take control of the dragon during this animalistic rampage.) An epic spell is required to raise an Athasian dragon, should he die. If an Athasian dragon becomes undead, the transformation is halted and the character may no longer advance in the Athasian dragon class, although he retains all abilities from Athasian dragon levels he gained prior to undeath.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_339_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: (c.babProgression ?? deriveBab(c.progression)) as PrestigeClassDefinition["babProgression"],
  goodSaves: (c.goodSaves ?? deriveSaves(c.progression)) as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites ?? (c.requirements ?? []).map((r) => `${r.label}: ${r.value}`),
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
