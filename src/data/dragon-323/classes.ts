// Dragon Magazine #323 (Sep 2004) variant class — integrated in
// the Dragon Magazine treatment program (issue #323 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-323/
// (MANIFEST.md / SCREENING.md / reference.md).
// The THANE, from Class Acts (p. 96): a fighter variant in the
// issue-311 variant-class shape — its own advancement over the
// fighter chassis, staged as a class record. Requirements and the
// advancement table were verified against the printed page images.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

import type { ClassDefinition } from "@/engine/types";
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
  name: string;
  description: string;
  level?: number;
}

interface RawClassLike {
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
  prerequisites?: string[];
  features: RawFeature[];
}

const RAW: RawClassLike[] = [
  {
    "id": "thane",
    "name": "Thane",
    "ruleset": "core",
    "source": "Dragon Magazine #323 — Class Acts: The Thane",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Jump",
      "Ride",
      "Swim"
    ],
    "features": [
      {
        "name": "Thane Basics",
        "description": "Hit Die d10. The thane is a specialist fighter, much like an evoker is a specialist wizard. Unless otherwise noted, a thane advances in the same manner as a fighter (same Hit Die, base attack bonus, saving throw bonuses, skill points, and so on) — the progression shown is the fighter's. When a character elects to take a level of fighter or thane, he may not later take levels in the other class; this prevents the character from gaining the benefits of a 1st-level fighter twice. Weapon and Armor Proficiency: a thane is proficient with all simple and martial weapons and with all armor (heavy, medium, and light) and shields (including tower shields). Thanes are professional fighters sworn to protect a clan or tribal chieftain, serving as bodyguards, companions, and the commanders of their liege's warbands; in return for a thane's faithful service, patrons feed, board, and give gifts to their protectors.",
        "level": 1
      },
      {
        "name": "Bonus Feats",
        "description": "The thane gains bonus feats as normal fighters do (a fighter bonus feat at 1st level, 2nd level, and every two levels thereafter, chosen from the fighter bonus feat list). In addition to normal fighter bonus feats, the thane may also select any of the feats in the New Thane Feats sidebar (Aura of Bravery, Improved Aid Another, Stalwart — staged in this pack's feats draft) in place of a fighter bonus feat.",
        "level": 1
      },
      {
        "name": "Thane's Vow",
        "description": "At 1st level, a thane devotes himself to a single lord or master. This lord does not have to be an actual ruler, merely any other character the thane determines as being worthy to serve and who accepts the thane's service. A thane cannot voluntarily change who his lord is for any reason once he has pledged himself to that lord. If the thane's lord is killed, the thane must exact revenge against his master's killers or die in the attempt, and should be treated as if under the effects of geas/quest until this mission is fulfilled (this quest cannot be ended prematurely by a remove curse spell). A lordless thane suffers a −4 penalty on all Charisma-based skill checks until he fulfills his vow. After a thane has avenged his previous lord's death, he is free to devote himself to a new lord and must do so to eliminate the penalty on Charisma-based skill checks.",
        "level": 1
      }
    ]
  }
];

export const DRAGON_323_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
