// Dragon Magazine #344 classes — integrated in the Dragon
// Magazine treatment program (issue #344 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-344/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Anagakok, a wizard variant class, staged as printed.
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

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
const SRC = "Dragon Magazine #344 — Class Acts: Anagakok (Richard Farrese), pp. 104–105";

// Wizard chassis, levels 1–10 (identical to the live wizard record's rows).
const WIZARD_PROGRESSION = [
  { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
  { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
  { level: 3, bab: 1, fort: 1, ref: 1, will: 3 },
  { level: 4, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 5, bab: 2, fort: 1, ref: 1, will: 4 },
  { level: 6, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 7, bab: 3, fort: 2, ref: 2, will: 5 },
  { level: 8, bab: 4, fort: 2, ref: 2, will: 6 },
  { level: 9, bab: 4, fort: 3, ref: 3, will: 6 },
  { level: 10, bab: 5, fort: 3, ref: 3, will: 7 },
];

const RAW: RawClass[] = [
  {
    id: "anagakok",
    name: "Anagakok",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: WIZARD_PROGRESSION,
    classSkills: [
      "Concentration",
      "Craft",
      "Decipher Script",
      "Knowledge (all)",
      "Profession",
      "Spellcraft",
      "Survival",
    ],
    features: [
      {
        name: "Anagakok Basics",
        description:
          "The anagakok is a variant wizard: an arcane spellcaster from a primitive, nature-bound society, trained in a unique school of magic built from survival and nature spells. Alignment: any. Hit Die: d4. The anagakok advances exactly as a wizard — the same base attack bonus, saving throws, and skill points per level — and prepares and casts spells as a specialist wizard of his unique school. A character who takes a level of wizard cannot later take levels of anagakok, and an anagakok cannot take levels of wizard. (Flavor kept neutral in this record; see the pack's SCREENING.md.)",
        level: 1,
      },
      {
        name: "Spellbook",
        description:
          "An anagakok begins play with a spellbook — usually made from layers of bark — containing all of the 0-level spells of the anagakok school, three 1st-level spells of the school, and one additional 1st-level school spell for each point of Intelligence bonus. Each time he gains a new anagakok level, he adds two spells of the anagakok school to his spellbook for free, and he may add further spells to it just as a wizard does. He prepares spells only from his own spellbook, with one exception: he may prepare read magic from memory, without a spellbook. His spells per day are those of a specialist wizard, including the specialist bonus spell of each spell level.",
        level: 1,
      },
      {
        name: "School Specialization",
        description:
          "The anagakok specializes in a unique school of magic assembled from survival- and nature-themed spells, including several spells not normally found on the sorcerer/wizard list. He gains one additional spell slot of each spell level per day, which must be filled with a spell of the anagakok school, and the spells of the school are treated as being on his spell list for all of his spell slots. He gains a +2 bonus on Spellcraft checks to learn spells of the school. His prohibited schools are always illusion and necromancy, and he cannot specialize in any other school. The anagakok school spell list: 0 — create water, know direction, purify food and drink; 1st — calm animals, charm animal, detect animals or plants, detect snares and pits, longstrider, pass without trace; 2nd — animal trance, hold animal, reduce animal, wood shape; 3rd — diminish plants, dominate animal, neutralize poison, quench, snare; 4th — antiplant shell, command plants, repel vermin, rusting grasp; 5th — awaken, commune with nature, control winds, tree stride; 6th — find the path, repel wood, stone tell, transport via plants; 7th — animate plants, transmute metal to wood, wind walk; 8th — animal shapes, control plants, repel metal or stone; 9th — elemental swarm, regenerate, shambler. (List carried as printed; standard APOC rules govern any spell whose effect cannot function in the sealed sphere — see SCREENING.md.)",
        level: 1,
      },
      {
        name: "Illiteracy",
        description:
          "An anagakok cannot read or write in any language he speaks, other than the arcane formulas in his spellbook. He may spend 2 skill points to gain the ability to read and write in all languages he is able to speak. Taking a level in any class other than barbarian grants him this literacy automatically. A character who already knows how to read and write does not lose that ability by taking a level of anagakok.",
        level: 1,
      },
      {
        name: "Spontaneous Casting",
        description:
          "An anagakok may lose a prepared spell of 1st level or higher — other than the bonus spell gained for specializing in the anagakok school — to cast endure elements instead, even if endure elements is not among his prepared spells.",
        level: 1,
      },
      {
        name: "Wilderness Lore",
        description:
          "An anagakok gains a +2 bonus on Knowledge (nature) checks and Survival checks.",
        level: 1,
      },
      {
        name: "Good Fortune",
        description:
          "An anagakok has a daily pool of good-fortune points: 2 points at 1st level, increasing to 4 points at 5th level, 6 points at 10th level, 8 points at 15th level, and 10 points at 20th level. As an immediate action, he may expend any number of these points to add a luck bonus equal to the number of points expended to any die roll — an attack roll, a skill check, a saving throw, or another roll of his own — splitting the points between rolls or putting them all on a single roll. By readying an action, he may instead grant the bonus to an ally he can touch.",
        level: 1,
      },
    ],
  },
];

export const DRAGON_344_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
