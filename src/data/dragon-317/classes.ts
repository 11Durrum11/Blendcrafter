// Dragon Magazine #317 (Mar 2004) base class — integrated in the
// Dragon Magazine treatment program (issue #317 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-317/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's one base class: the URBAN DRUID, a variant druid by
// James Jacobs, from "Urban Druid" (pp. 30–37). Plain-object record
// mirroring the issue-315 classes draft shape: levels 1–10
// progression rows, features carrying their true levels to 20.
//
// The class is a full variant on the druid chassis — same
// advancement table (verified against the printed table on the page
// image: three-quarter BAB, good Fortitude and Will) — but it is
// Charisma-based, casts from its own spell list, and trades the
// druid's nature features for city features. The advancement table's
// Special column was verified row by row against the page image:
// favored city at 1st, 4th, 8th, 12th, 16th, and 20th; urban shape
// (animated object) 1/day at 16th, 2/day at 18th, 3/day and
// Gargantuan at 20th.
//
// The full urban druid spell list (0–9), the full 20-level
// spells-per-day table, and the complete urban companion lists are
// in reference.md; the eleven spells the article prints in full are
// staged in spells-draft.ts. Transcribed from the magazine text on
// archive.org (DragonMagazine317_djvu.txt) and the printed tables.
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

const RAW: RawClass[] = [
  {
    "id": "urban-druid",
    "name": "Urban Druid",
    "ruleset": "core",
    "source": "Dragon Magazine #317",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Gather Information",
      "Intimidate",
      "Knowledge (architecture and engineering)",
      "Knowledge (history)",
      "Knowledge (local)",
      "Perform",
      "Profession",
      "Sense Motive",
      "Speak Language",
      "Spellcraft",
      "Survival"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Alignment: an urban druid must have a neutral component — neutral good, neutral, lawful neutral, or lawful evil; she may never be chaotic neutral. Charisma determines how powerful a spell she can cast (Charisma score of at least 10 + the spell's level), how many bonus spells she gets, and how hard her spells are to resist (save DC 10 + spell level + her Charisma modifier). She prepares and casts divine spells as a cleric does but has no domains or granted powers; she can instead channel stored spell energy to cast any repair spell of the same or lower level she knows (spontaneous casting, as a cleric channels cure spells), losing a prepared spell to do so. She is proficient with the club, crossbow (any), dagger, quarterstaff, rapier, sap, and short sword, with padded, leather, and studded leather armor, and with bucklers. An urban druid who wears prohibited armor or carries a prohibited shield is unable to cast urban druid spells or use her supernatural class abilities while doing so and for 24 hours thereafter. Spells per day (levels 1–10, by spell level 0/1/2/3/4/5): 1st 3/1/–/–/–/–; 2nd 4/2/–/–/–/–; 3rd 4/2/1/–/–/–; 4th 5/3/2/–/–/–; 5th 5/3/2/1/–/–; 6th 5/3/3/2/–/–; 7th 6/4/3/2/1/–; 8th 6/4/3/3/2/–; 9th 6/4/4/3/2/1; 10th 6/5/4/3/3/2. (The full 20-level table and the complete spell list are in reference.md.)"
      },
      {
        "name": "City Sense (Ex)",
        "description": "An urban druid gains a +2 bonus on Gather Information and Knowledge (local) checks.",
        "level": 1
      },
      {
        "name": "Favored City (Ex)",
        "description": "At 1st level, an urban druid chooses a settlement of at least small town size (see page 137 of the Dungeon Master's Guide) that she has visited; it need not be the city she currently calls home. While within that city's limits, she gains a sacred bonus equal to her Wisdom modifier on Bluff, Diplomacy, Gather Information, and Intimidate checks, and a +2 morale bonus on Will saves. She considers additional cities her favored city at 4th, 8th, 12th, 16th, and 20th level.",
        "level": 1
      },
      {
        "name": "Urban Companion (Ex)",
        "description": "An urban druid begins play with an urban companion chosen from the following list: Small animated object, bat, dire rat, rat, cat, dog, riding dog, horse (light or heavy), Medium monstrous centipede, Small monstrous scorpion, Small monstrous spider, mule, owl, pony, raven, snake (Small or Medium viper), or light warhorse. The companion advances as a druid's animal companion (see the sidebar on page 36 of the Player's Handbook). A vermin companion gains an Intelligence score of 1 and its type changes to animal. A construct companion is spontaneously created by the 24-hour prayer ceremony that bonds the companion — the urban druid needs no Craft Construct feat and pays no gp or XP cost for it. Alternative companion lists open at higher levels, with the urban druid's effective level reduced as noted: 4th level or higher (−3) — Medium animated object, giant ant (soldier), dire bat, Large monstrous centipede, Medium monstrous scorpion, Medium monstrous spider, Large viper, heavy warhorse; 7th (−6) — Large animated object, carrion crawler, hammerer, otyugh, Huge monstrous centipede, Large monstrous scorpion, Large monstrous spider, pulverizer, Huge viper; 10th (−9) — Huge animated object, Huge monstrous spider; 13th (−12) — Gargantuan monstrous centipede, Huge monstrous scorpion; 16th (−15) — Gargantuan animated object, Gargantuan monstrous spider. (The full lists, with the table's CR column, are in reference.md.)",
        "level": 1
      },
      {
        "name": "Crowdwalking (Ex)",
        "description": "At 2nd level, an urban druid can move through crowds as if they were open space. She gains a +4 bonus on any skill check, Strength check, or attack roll made to move through a square occupied by a hostile creature (for example, Tumble checks and overrun attempts).",
        "level": 2
      },
      {
        "name": "Alley Fighting (Ex)",
        "description": "At 3rd level, while fighting in an area no wider than her space, an urban druid gains a +1 competence bonus on attack rolls. A melee attack she makes around a corner denies the target the benefit of cover (unless the target has total cover); the urban druid retains her own cover benefits unless the foe has a similar ability.",
        "level": 3
      },
      {
        "name": "Disease Immunity (Ex)",
        "description": "At 4th level, an urban druid becomes immune to all disease, including supernatural diseases such as mummy rot.",
        "level": 4
      },
      {
        "name": "Urban Shape (Su)",
        "description": "At 5th level, an urban druid gains the ability to change shape as a druid's wild shape, except that her forms are limited to creatures of the humanoid type or any non-construct creatures from her urban companion list. She may use this ability once per day at 5th level, twice at 6th, three times at 7th, four times at 10th, five times at 14th, and six times at 18th. She may assume Large forms at 8th level, Tiny forms at 11th, and Huge forms at 15th; the Hit Dice of a new form cannot exceed her urban druid level. At 12th level she may also assume the form of an object, gaining the hardness of the assumed material (she cannot assume an object with a hardness greater than 10); in object form she has no locomotion or speech but retains awareness of her surroundings. At 16th level she may assume the form of a Small, Medium, Large, or Huge animated object once per day, twice per day at 18th level, and three times per day at 20th level (when Gargantuan animated objects also become available); these uses are in addition to her normal urban shape uses. In animated object form she gains the assumed form's extraordinary special attacks and qualities, including construct-type defenses, and her type changes to construct for the duration.",
        "level": 5
      },
      {
        "name": "Information Network (Ex)",
        "description": "At 9th level, an urban druid maintains an information network in a number of cities equal to her Charisma bonus. In those cities, a Gather Information check takes her only half an hour. If an event occurs in one of those cities that would interest her, she may make a Gather Information check as a free action to learn of it, the news reaching her in 1d4 hours, unless she is somewhere her contacts cannot reach.",
        "level": 9
      }
    ]
  }
];

export const DRAGON_317_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
