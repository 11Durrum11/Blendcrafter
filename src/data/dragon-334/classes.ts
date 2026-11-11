// Dragon Magazine #334 (Aug 2005) variant class — integrated in
// the Dragon Magazine treatment program (issue #334 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-334/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Janissary (Class Acts): variant class staged as printed and
// image-verified. The issue's monk fighting styles (Kyokushinkai,
// Wing Chun, Wushu) are reference-only in full under the oriental
// ruling. Records: levels 1-10 progression rows on the class
// chassis, features carrying their true levels.
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
const SRC = "Dragon Magazine #334 — Class Acts: The Janissary (Peter von Bleichert), p. 88";

const FIGHTER_PROGRESSION = [
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

// The fighter's class skills (Climb, Craft, Handle Animal, Intimidate,
// Jump, Ride, Swim) with the article's swap applied: Handle Animal,
// Intimidate, and Swim become cross-class skills and are removed; Speak
// Language and two chosen Knowledge skills are added. "Knowledge (any)"
// carries the choice of two, as the Basics feature explains (the live
// catalog uses the same string; see the audit note in MANIFEST.md).
const JANISSARY_SKILLS = [
  "Climb",
  "Craft",
  "Jump",
  "Knowledge (any)",
  "Ride",
  "Speak Language",
];

const RAW: RawClass[] = [
  {
    id: "janissary",
    name: "Janissary",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: FIGHTER_PROGRESSION,
    classSkills: JANISSARY_SKILLS,
    features: [
      {
        name: "Janissary Basics",
        description:
          "A variant of the fighter class: the article presents the janissary as an alternative fighter class that must be approved by the DM. It uses the fighter's Hit Die (d10), full base attack bonus, good Fortitude save, skill points (2 + Int modifier per level), weapon and armor proficiencies, and bonus-feat progression unchanged. The only mechanical difference from the fighter is its class-skill list (see Broad Learning). The article frames the class as an elite corps soldier raised from childhood into absolute loyalty to a lord; that framing is flavor, and in this catalog the variant reads as a learned, disciplined household trooper or guardsman — see SCREENING.md for the disposition and the APOC note.",
        level: 1,
      },
      {
        name: "Broad Learning",
        description:
          "A janissary gains Speak Language and two Knowledge skills (of his choice) as class skills; the two chosen Knowledge skills are what the \"Knowledge (any)\" entry in this record's class-skill list stands for. Handle Animal, Intimidate, and Swim — class skills for a standard fighter — are cross-class skills for a janissary. The remaining fighter class skills (Climb, Craft, Jump, and Ride) stay class skills.",
        level: 1,
      },
      {
        name: "Bonus Feats",
        description:
          "As the fighter: a bonus feat at 1st level and at every even level thereafter (2nd, 4th, 6th, and so on), chosen from the fighter bonus-feat list and meeting all prerequisites. The article names Blind-Fight, Combat Expertise, Improved Disarm, and Improved Sunder as particularly appropriate choices, and presents the Combat Engineer feat (staged in this issue's feat draft) as a signature method of the corps.",
        level: 1,
      },
    ],
  },
];

export const DRAGON_334_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
