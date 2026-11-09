// Dragon Magazine #315 (Jan 2004) base class — integrated in the
// Dragon Magazine treatment program (issue #315 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-315/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's one base class: the Sha'ir, from the Al-Qadim article
// (by Dean Poisso, pp. 78–83). Transcribed from the magazine text on
// archive.org (DragonMagazine315_djvu.txt), cross-checked against the
// Dragon Compendium reprint's known shape where the OCR scrambled the
// tables (see MANIFEST.md). Records mirror the issue-311 draft shape:
// plain objects, levels 1–10 progression rows, features carrying their
// true levels. Feature descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.
//
// The sha'ir's spells-per-day and spells-known tables are written up
// in reference.md (the catalog class shape has no spells-per-day
// field); the advancement table's spells-per-day values for levels
// 1–10 are also summarized in the Basics feature. The four gen
// familiar stat blocks are monsters and live in reference.md.
//
// Ruleset: "core" — the Oriental Adventures family in the catalog
// (wu jen, shugenja) files under "core", and Al-Qadim's Toril tie does
// not make this a Faerûn-sourced record; see MANIFEST.md.

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
    "id": "shair",
    "name": "Sha'ir",
    "ruleset": "core",
    "source": "Dragon Magazine #315",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt",
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
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Knowledge (arcana)",
      "Knowledge (the planes)",
      "Listen",
      "Profession",
      "Sense Motive",
      "Spellcraft"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d4. Alignment: any. A sha'ir is proficient with all simple weapons; she is not proficient with any armor or shields, and armor interferes with the arcane gestures she uses to cast spells. Charisma is her spellcasting ability: to learn or cast a spell she must have a Charisma score of at least 10 + the spell's level, and save DCs against her spells are 10 + spell level + her Charisma modifier. She may substitute Aquan, Auran, Ignan, or Terran for any of her racial bonus languages. Spells per day (levels 1–10, by spell level 0/1/2/3/4/5): 1st 4/2/–/–/–/–; 2nd 5/3/–/–/–/–; 3rd 5/3/1/–/–/–; 4th 5/4/3/–/–/–; 5th 5/4/3/1/–/–; 6th 5/4/4/3/–/–; 7th 5/5/4/3/1/–; 8th 5/5/4/4/3/–; 9th 5/5/5/4/3/1; 10th 5/5/5/4/4/3. (The full 20-level spells-per-day and spells-known tables are in reference.md.) She begins play knowing five 0-level spells and three 1st-level spells, and learns more per the Sha'ir Spells Known table. At 4th level and every even level thereafter, she may exchange one spell known for another spell of the same level."
      },
      {
        "name": "Retrieve Spells",
        "description": "A sha'ir does not cast spells from her own memory of formulae; her gen familiar fetches spells for her from the elemental planes (see Summon Gen Familiar). She can retrieve any sorcerer/wizard spell, plus any spell from the Air, Chaos, Earth, Fire, Knowledge, Law, Luck, Sun, and Water domain lists (she gains no domain granted powers). A retrieved spell remains in her memory until cast or until a number of hours equal to her sha'ir level passes. Retrieval times: an arcane spell she knows takes 1d4 rounds + the spell's level; an arcane spell she does not know but has seen cast and identified with a successful Spellcraft check takes 1d6 minutes + 1 minute per spell level and does not become a spell known; a divine spell (known or not, and only from the domain lists above) takes 1d6 hours + 1 hour per spell level. Success is determined by a Diplomacy check (DC 20), made by the sha'ir as the gen negotiates on her behalf: +1 per sha'ir level; +2 if the spell is in her spells known (arcane spells only); the DC rises by 2 per level of the desired spell, by 6 if the spell is an unknown divine spell, by 2 per level of any metamagic increase applied to the spell, and by 2 for every attempt after a failed attempt to retrieve the same spell on the same day. On success the gen reappears within 5 feet of the sha'ir and imparts the spell. If the check fails by 5 or more, the gen is detained an additional 1d4 minutes. A gen that has been sent out cannot be recalled. A sha'ir may ask her gen to fetch a spell with metamagic feats applied; she does not need a full-round action to cast such a spell.",
        "level": 1
      },
      {
        "name": "Summon Gen Familiar",
        "description": "A sha'ir must obtain a gen familiar at 1st level. Summoning one takes 12 hours and consumes raw materials worth 100 gp; the sha'ir chooses the gen's elemental type (air, earth, fire, or water — see reference.md for the four gen stat blocks). The gen advances as a normal familiar except that its Intelligence does not increase with the sha'ir's level, it speaks the languages given in its description, and it retains the outsider type. If the gen dies or is dismissed, the sha'ir must succeed on a DC 15 Fortitude save or lose 200 XP per sha'ir level (half that on a success; her XP total cannot drop below 0 from this). A slain or dismissed gen can be replaced the following day, but as an outsider it cannot be raised from the dead. A sha'ir may have only one familiar at a time.",
        "level": 1
      },
      {
        "name": "Recognize Genie Works",
        "description": "A sha'ir can recognize the craftsmanship of any item or magical effect created by geniekind with a successful DC 20 Knowledge (the planes) check; she adds her sha'ir level as a bonus on this check.",
        "level": 3
      },
      {
        "name": "Elemental Protection",
        "description": "A sha'ir gains resistance to acid 2, cold 2, electricity 2, and fire 2, and damage reduction 2/— against attacks by creatures with the air, earth, fire, or water subtype. Her resistance rises to 4 against the energy type her gen is immune to, and her damage reduction rises to 4/— against creatures of her gen's elemental subtype. She also gains a +2 bonus on all saves against acid-, cold-, electricity-, and fire-based attacks, rising to +4 against attacks dealing the energy type her gen is immune to.",
        "level": 5
      },
      {
        "name": "Call Janni (Sp)",
        "description": "Once per day, a sha'ir can call a janni, as lesser planar ally except that the spell calls only a janni. She pays the spell's XP cost and must bargain with the janni as normal. Her caster level is equal to her sha'ir level.",
        "level": 7
      },
      {
        "name": "Elemental Travel (Sp)",
        "description": "Once per day, a sha'ir can use plane shift as the spell, to travel to any Elemental Plane or from an elemental plane to the Material Plane. She can use this ability twice per day at 15th level and at will at 18th level. Her caster level is equal to her sha'ir level.",
        "level": 9
      },
      {
        "name": "Call Genie (Sp)",
        "description": "Once per day, a sha'ir can call a genie, as planar ally except that the spell calls only one djinni, efreeti, dao, or marid, or two jann. She pays the spell's XP cost and must bargain as normal. Her caster level is equal to her sha'ir level.",
        "level": 11
      },
      {
        "name": "Craft Genie Prison (Ex)",
        "description": "A sha'ir gains the benefit of the Craft Wondrous Item feat, but only to create genie prisons. A genie prison is created like an iron flask and functions identically, except that it can hold only geniekind.",
        "level": 13
      }
    ]
  }
];

export const DRAGON_315_CLASSES: ClassDefinition[] = RAW.map((c) => ({
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
