// Dragon Magazine #333 (Jul 2005) variant class — integrated in
// the Dragon Magazine treatment program (issue #333 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-333/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Rage Cleric (Class Acts): a cleric variant on the cleric
// chassis — the rage track comes in, turn/rebuke undead and the
// domains go out; power is drawn, not granted, under APOC canon,
// and the record rides as printed.
// Records: levels 1-10 progression rows on the cleric chassis,
// features carrying their true levels.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

import type {
  ClassDefinition,
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
  name: string;
  description: string;
  level?: number;
}

interface RawClass {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features: RawFeature[];
}




const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SRC = "Dragon Magazine #333 — Class Acts: The Rage Cleric (Joshua Cole), p. 86";

const CLERIC_PROGRESSION = [
  { level: 1, bab: 0, fort: 2, ref: 0, will: 2 },
  { level: 2, bab: 1, fort: 3, ref: 0, will: 3 },
  { level: 3, bab: 2, fort: 3, ref: 1, will: 3 },
  { level: 4, bab: 3, fort: 4, ref: 1, will: 4 },
  { level: 5, bab: 3, fort: 4, ref: 1, will: 4 },
  { level: 6, bab: 4, fort: 5, ref: 2, will: 5 },
  { level: 7, bab: 5, fort: 5, ref: 2, will: 5 },
  { level: 8, bab: 6, fort: 6, ref: 2, will: 6 },
  { level: 9, bab: 6, fort: 6, ref: 3, will: 6 },
  { level: 10, bab: 7, fort: 7, ref: 3, will: 7 },
];

const CLERIC_SKILLS = [
  "Concentration",
  "Craft",
  "Diplomacy",
  "Heal",
  "Knowledge (arcana)",
  "Knowledge (history)",
  "Knowledge (religion)",
  "Knowledge (the planes)",
  "Profession",
  "Spellcraft",
];

const RAW: RawClass[] = [
  {
    id: "rage-cleric",
    name: "Rage Cleric",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: CLERIC_PROGRESSION,
    classSkills: CLERIC_SKILLS,
    features: [
      {
        name: "Rage Cleric Basics",
        description:
          "The rage cleric is a variant cleric, the faithful berserker of a wild warrior deity such as Gruumsh or Kord. Unless otherwise noted, a rage cleric advances in the same manner as a cleric — same Hit Die, base attack bonus, saving throw bonuses, and skill points. A character who elects to take a level of cleric or rage cleric may not later take levels in the other; this prevents a character from gaining the benefits of a 1st-level cleric twice. Alignment: a rage cleric cannot be lawful, but must still be within one step of his deity's alignment. Weapon and Armor Proficiency: a rage cleric is proficient with all simple weapons, light armor, and shields (except tower shields). In exchange for his rage, a rage cleric loses his ability to turn or rebuke undead, as well as his ability to gain domains — which includes both domain granted powers and domain spells. Ex-Rage Clerics: a rage cleric who becomes lawful loses his rage abilities, though he can continue to advance in this class and gain spells provided his deity accepts lawful-aligned clerics; one who grossly violates his deity's code of conduct loses all spells and class features except rage and his proficiencies until he atones. Key abilities: Strength, Constitution, and Wisdom.",
        level: 1,
      },
      {
        name: "Rage",
        description:
          "A rage cleric rages as a barbarian of equal level. Rage cleric and barbarian levels stack for the purposes of determining the number of times per day a character can enter a rage and the type of rage available.",
        level: 1,
      },
      {
        name: "Greater Rage",
        description:
          "As the barbarian class feature: the rage cleric's rage bonuses increase to +6 Strength, +6 Constitution, and a +3 morale bonus on Will saves, with the same -2 penalty to Armor Class.",
        level: 11,
      },
      {
        name: "Indomitable Will",
        description:
          "As the barbarian class feature: while raging, the rage cleric gains a +4 morale bonus on Will saves against enchantment spells and effects, stacking with the rage's own Will save bonus.",
        level: 14,
      },
      {
        name: "Tireless Rage",
        description:
          "As the barbarian class feature: the rage cleric no longer becomes fatigued at the end of his rage.",
        level: 17,
      },
      {
        name: "Mighty Rage",
        description:
          "As the barbarian class feature: the rage cleric's rage bonuses increase to +8 Strength, +8 Constitution, and a +4 morale bonus on Will saves, with the same -2 penalty to Armor Class.",
        level: 20,
      },
    ],
  },
];

export const DRAGON_333_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as ClassDefinition["babProgression"],
  goodSaves: c.goodSaves as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
