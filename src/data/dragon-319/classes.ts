// Dragon Magazine #319 (May 2004) base class — integrated in the
// Dragon Magazine treatment program (issue #319 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-319/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's one base class: the ERUDITE, from "The Erudite"
// (pp. 46–49), the class's original presentation as a full
// standalone base class. Complete Psionic later presented the
// Erudite as a variant psion; the catalog's Complete Psionic file
// deliberately did not add it, so this record stands unsuffixed as
// the catalog's only erudite. The advancement table was illegible
// in the magazine OCR; every value was read off the printed page
// image (magazine p. 48): half BAB, poor Fortitude and Reflex,
// good Will; power points/day and the unique-powers-per-day grid
// are carried in the features as text. Transcribed from the
// magazine text on archive.org (DragonMagazine319_djvu.txt).
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
    "id": "erudite",
    "name": "Erudite",
    "ruleset": "core",
    "source": "Dragon Magazine #319",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine319_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Decipher Script",
      "Gather Information",
      "Heal",
      "Knowledge (psionics)",
      "Knowledge (all)",
      "Profession",
      "Psicraft",
      "Sense Motive"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d4. Alignment: any. Intelligence determines what powers an erudite can manifest, how many power points he has, and how hard his powers are to resist (save DC 10 + the power's level + Int modifier); to manifest a power he needs an Intelligence score of at least 10 + the power's level. He is proficient with the club, dagger, heavy crossbow, light crossbow, quarterstaff, and shortspear, and with no armor or shields (armor does not interfere with manifesting). An erudite does not choose a primary discipline. Power points/day (levels 1–20): 2, 6, 11, 17, 25, 35, 46, 58, 72, 88, 106, 126, 147, 170, 195, 221, 250, 280, 311, 343 — plus bonus power points for a high Intelligence score (Expanded Psionics Handbook Table 2-1). Powers and power points are not modeled by this app; the tables are recorded here as text. Starting gear: 3d4 × 10 gp."
      },
      {
        "name": "Powers Discovered (Repertoire)",
        "description": "An erudite learns powers from the psion/wilder power list. He begins play knowing three 1st-level psion/wilder powers of his choice, plus one additional 1st-level power per point of Intelligence bonus. Each time he gains a level, he unlocks two new powers of any levels he can manifest from the psion/wilder list. He may not automatically learn powers from any discipline-exclusive list; those he can learn only through contact (below) or the Expanded Knowledge feat. He can also learn new powers found in power stones, from the minds of willing psionic characters, and from the minds of unconscious psionic characters."
      },
      {
        "name": "Unique Powers Per Day",
        "description": "Unlike a psion, an erudite is limited in how many unique powers of each power level he can manifest per day from his repertoire (he may manifest a chosen unique power repeatedly, paying power points each time). Unique powers per day by class level, given as the allowance for each power level from 1st upward: 1st: 1; 2nd: 2; 3rd: 2/1; 4th: 3/2; 5th: 3/2/1; 6th: 3/3/2; 7th: 4/3/2/1; 8th: 4/3/3/2; 9th: 4/4/3/2/1; 10th: 4/4/3/3/2; 11th: 4/4/4/3/2/1; 12th: 4/4/4/3/3/2; 13th: 4/4/4/4/3/2/1; 14th: 4/4/4/4/3/3/2; 15th: 4/4/4/4/4/3/2/1; 16th: 4/4/4/4/4/3/3/2; 17th: 4/4/4/4/4/4/3/3/1; 18th: 4/4/4/4/4/4/3/3/2; 19th: 4/4/4/4/4/4/4/3/3; 20th: 4/4/4/4/4/4/4/4/4. A new day is assumed to start after the erudite rests to regain daily power points; he need not prepare powers ahead of time. The Extra Unique Power feat (feats-draft.ts) raises one power level's allowance by one."
      },
      {
        "name": "Bonus Feats",
        "description": "At 1st, 5th, 10th, 15th, and 20th level, an erudite gains a bonus feat, which must be a psionic feat, a metapsionic feat, or a psionic item creation feat. These are in addition to the feats every character gains every three levels."
      },
      {
        "name": "Psicrystal",
        "description": "An erudite gains the Psicrystal Affinity feat as a class feature at 1st level (see the Expanded Psionics Handbook, Chapter 3)."
      },
      {
        "name": "Adding Powers to an Erudite's Repertoire",
        "description": "To learn a power from a power stone or another psionic character's or creature's repertoire, the erudite first makes contact: 1 full round of physical contact (provoking attacks of opportunity) with a willing psionic character or creature (unconscious creatures count as willing; immobilized characters do not), succeeding at a Psicraft check against DC 15 + the highest-level power contained in the stone or repertoire. On contact, he becomes aware of all powers in the stone or repertoire up to the highest power level he himself knows. He then makes a Psicraft check (DC 15 + the power's level) to understand one power; if the power is not on his class list or is a discipline power learned any other way than this process allows, he automatically fails, and a failed check bars him from that power until he gains another rank in Psicraft (a power stone is not drained by a failed attempt). To commit an understood power permanently to his repertoire takes 8 hours of uninterrupted meditation (manifesting any other power in that time loses the chance until he gains another Psicraft rank) and costs 20 XP at the end of the meditation. A power learned from a power stone disappears from the stone; a power learned from a character leaves that character's repertoire unharmed. Other psionic characters usually charge a fee equal to the power's level × 50 gp for access. The two powers gained free at each new level cost no time or XP."
      },
      {
        "name": "Learning Discipline Powers",
        "description": "An erudite can learn discipline (discipline-exclusive list) powers only directly from another's repertoire, from a power stone, or by taking the Expanded Knowledge feat or the Epic Expanded Knowledge feat."
      }
    ]
  }
];

export const DRAGON_319_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
