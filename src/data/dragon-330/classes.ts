// Dragon Magazine #330 (Apr 2005) variant class — integrated in
// the Dragon Magazine treatment program (issue #330 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-330/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Implacable (Class Acts, Joshua Cole, p. 84): a barbarian
// variant on the barbarian chassis. Its id is `implacable-330` —
// the plain id belongs to the #328 dwarf flaw of the same name.
// (The issue's Shadow Soulknife is Umbragen racial substitution
// levels — race-bound, no catalog mechanism — and Sorcerer Spheres
// is a variant rule system; both are reference-only, SCREENING.md.)
// Records: levels 1-10 progression rows on the barbarian chassis,
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
const SRC = "Dragon Magazine #330 — Class Acts: Implacable (Joshua Cole), p. 84";

const BARBARIAN_PROGRESSION = [
  { level: 1, bab: 1, fort: 2, ref: 0, will: 0 },
  { level: 2, bab: 2, fort: 3, ref: 0, will: 0 },
  { level: 3, bab: 3, fort: 3, ref: 1, will: 1 },
  { level: 4, bab: 4, fort: 4, ref: 1, will: 1 },
  { level: 5, bab: 5, fort: 4, ref: 1, will: 1 },
  { level: 6, bab: 6, fort: 5, ref: 2, will: 2 },
  { level: 7, bab: 7, fort: 5, ref: 2, will: 2 },
  { level: 8, bab: 8, fort: 6, ref: 2, will: 2 },
  { level: 9, bab: 9, fort: 6, ref: 3, will: 3 },
  { level: 10, bab: 10, fort: 7, ref: 3, will: 3 },
];

const BARBARIAN_SKILLS = [
  "Climb",
  "Craft",
  "Handle Animal",
  "Intimidate",
  "Jump",
  "Listen",
  "Ride",
  "Survival",
  "Swim",
];

const RAW: RawClass[] = [
  {
    id: "implacable-330",
    name: "Implacable",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: BARBARIAN_PROGRESSION,
    classSkills: BARBARIAN_SKILLS,
    features: [
      {
        name: "Implacable Basics",
        description:
          "The implacable is a variant barbarian, developed by rowdy dwarven warriors who found ordered dwarven culture a poor fit for their chaotic natures and since taken up by gnomes, humans, and even savage humanoids. Unless otherwise noted, an implacable advances in the same manner as a barbarian — same Hit Die, base attack bonus, saving throw bonuses, skill points, and class skills. A character who elects to take a level of barbarian or implacable may not later take levels in the other; this prevents a character from gaining the benefits of a 1st-level barbarian twice. Weapon and Armor Proficiency: an implacable is proficient with all simple and martial weapons and with all armor and shields (except tower shields). Unlike a barbarian, an implacable does NOT gain the fast movement class feature. Key abilities: Constitution, Dexterity, and Strength.",
        level: 1,
      },
      {
        name: "Resilient Rage (Ex)",
        description:
          "Where a barbarian's rage is a bloodthirsty, reckless assault, an implacable in a resilient rage is an impatient but doggedly determined guardian. He does not gain the normal rage bonuses when he enters a rage. Instead, his rage more resembles the dwarven defender's defensive stance, granting him a +4 bonus to Dexterity and Constitution, a +2 bonus on Will saves, and damage reduction 1/—. This temporary damage reduction stacks with the permanent damage reduction the implacable gains at higher levels. Resilient rage is otherwise identical to the standard barbarian rage in all respects. At 11th level (when a standard barbarian gains greater rage), the Dexterity and Constitution bonuses increase to +6, and the temporary damage reduction bonus improves to 2/—. At 20th level (when a standard barbarian gains mighty rage), the Dexterity and Constitution bonuses increase to +8, and the temporary damage reduction bonus improves to 3/—.",
        level: 1,
      },
      {
        name: "Uncanny Dodge (Ex)",
        description:
          "As the barbarian class feature of the same name: the implacable retains his Dexterity bonus to AC (if any) even when caught flat-footed or struck by an invisible attacker, though he still loses his Dexterity bonus to AC if immobilized.",
        level: 2,
      },
      {
        name: "Trap Sense (Ex)",
        description:
          "As the barbarian class feature of the same name: the implacable gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps, increasing by +1 every three implacable levels thereafter (+2 at 6th, +3 at 9th, and so on).",
        level: 3,
      },
      {
        name: "Improved Uncanny Dodge (Ex)",
        description:
          "As the barbarian class feature of the same name: the implacable can no longer be flanked, except by a rogue (or similar character) at least four levels higher than his implacable level.",
        level: 5,
      },
      {
        name: "Damage Reduction (Ex)",
        description:
          "As the barbarian class feature of the same name: the implacable gains damage reduction 1/—, increasing by 1 every three levels thereafter (2/— at 10th, 3/— at 13th, and so on). This permanent damage reduction stacks with the temporary damage reduction granted by resilient rage.",
        level: 7,
      },
    ],
  },
];

export const DRAGON_330_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
