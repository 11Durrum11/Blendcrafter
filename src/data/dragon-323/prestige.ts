// Dragon Magazine #323 (Sep 2004) prestige class — integrated in
// the Dragon Magazine treatment program (issue #323 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-323/
// (MANIFEST.md / SCREENING.md / reference.md).
// The SPIRIT SPEAKER, from Gaining Prestige (p. 82): d8, all three
// saves good, requirements BAB +4 and base Will +2, all read off
// the printed page image (the OCR garbles the table). Its spirit
// trance is a mental journey — no planar travel, no summoning —
// and stages as printed. Feature descriptions are faithful
// mechanical paraphrases in our own words; no magazine prose is
// reproduced.

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
    "id": "spirit-speaker",
    "name": "Spirit Speaker",
    "ruleset": "core",
    "source": "Dragon Magazine #323 — Gaining Prestige",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "prerequisites": [
      "Base Attack Bonus: +4",
      "Base Will Save: +2",
      "Skills: Diplomacy 3 ranks, Knowledge (arcana) 1 rank, Knowledge (nature) 1 rank"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 7, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Intimidate",
      "Knowledge (all skills, taken individually)",
      "Listen",
      "Ride",
      "Search",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Weapon and Armor Proficiency: spirit speakers gain no proficiency with any weapons or shields; they are proficient with light armor. Spells: a spirit speaker has the ability to cast divine spells drawn from the ranger spell list — she has access to any spell on the ranger spell list and can freely choose which to prepare, just as a ranger, and she prepares and casts spells just as a ranger does. To cast a spell, a spirit speaker must have a Charisma score of at least 10 + the spell's level (a spirit speaker with a Charisma of 10 or lower cannot cast spells); bonus spells are based on Charisma, and saving throws against her spells have a DC of 10 + the spell's level + her Charisma modifier. Spells per day (1st/2nd/3rd/4th-level spells) by spirit speaker level: 1st 1/—/—/—, 2nd 2/—/—/—, 3rd 2/1/—/—, 4th 3/2/—/—, 5th 3/2/1/—, 6th 3/3/2/—, 7th 4/3/2/1, 8th 4/3/3/2, 9th 4/4/3/2, 10th 4/4/3/3, plus bonus spells for a high Charisma score. When a spirit speaker enters her first trance, she meets a spirit who bonds with her, as a familiar bonds with a sorcerer or wizard; she has no control over which spirit bonds with her, although it typically has some connection to her past."
      },
      {
        "name": "Enter Trance (Su) — 1st level",
        "description": "By making a DC 15 Concentration check, the spirit speaker can enter a trance that allows her to communicate with the spirit world. She may enter a trance once per day per spirit speaker level, which lasts a number of rounds equal to her Charisma score. She can end the trance at any time before this by succeeding at a DC 10 Concentration check. She may not take 10 or take 20 for either of these checks, but she can retry a failed check after 1 round. Entering a trance is a full-round action that provokes attacks of opportunity; once in a trance, she does not need to make Concentration checks to maintain it. While in trance, a spirit speaker casts her spirit speaker spells at +1 caster level and gains access to her spirit guide, but she cannot run or charge and suffers a −2 penalty on all Wisdom- and Charisma-based skill checks. A spirit speaker may remain in trance when her current trance's duration ends by making a DC 15 Concentration check and expending another of her daily trances; this prolonged trance counts as one trance for the purposes of abilities that work once per trance."
      },
      {
        "name": "Spirit Guide (Su) — 1st level",
        "description": "When the spirit speaker enters a trance, her spirit guide appears. While the spirit speaker remains in this dual existence, the spirit guide manifests an unseen servant effect, as the spell cast by a spellcaster of the spirit speaker's class level, except that the servant has hit points equal to the spirit speaker. While in trance, the spirit guide grants its spirit speaker special abilities depending on her levels in the spirit speaker class: 1st — spirit sight; 3rd — deliver touch spells; 5th — remove curse; 7th — ability enhancement; 9th — scrying. The granted special abilities are cumulative, so a 10th-level spirit speaker gains all of the abilities on the table; however, the spirit speaker only gains access to these abilities while in trance."
      },
      {
        "name": "Spirit Sight (Su) — 1st level",
        "description": "While in trance, the spirit speaker gains darkvision to 60 feet (if she did not already have it) and can see magical auras as if continually under the effect of a detect magic spell. Granted by the spirit guide at 1st level."
      },
      {
        "name": "Skill Insight (Su) — 2nd level",
        "description": "Beginning at 2nd level, the spirit speaker's spirit guide remains in contact with her at all times in a tangential way, even outside of trance. This grants the spirit speaker a +2 insight bonus on all checks for a skill, as listed in the Spirit Speaker Advancement table: at 2nd level the bonus applies to Heal checks, and at 4th and later levels it applies to a different Knowledge check that the spirit speaker has at least 1 rank in — Knowledge (nature) at 4th level, Knowledge (history) at 6th level, Knowledge (arcana) at 8th level, and Knowledge (the planes) at 10th level. The bonuses from multiple entries apply to their respective skills."
      },
      {
        "name": "Sense Ailments (Su) — 3rd level",
        "description": "At 3rd level, the spirit speaker's spirit guide can help her tell if a creature suffers from the effects of a disease or a poison, even if that creature is unaware of it, by the spirit speaker succeeding at a DC 15 Heal check. The spirit speaker can only use this ability when not in trance."
      },
      {
        "name": "Deliver Touch Spells (Su) — 3rd level",
        "description": "A 3rd-level spirit speaker's spirit guide allows her to deliver touch spells from afar. If the spirit speaker has line of effect to a creature within range of the unseen servant effect, the spirit speaker may deliver a touch spell to that creature as though it were within reach. Granted by the spirit guide at 3rd level, usable while in trance."
      },
      {
        "name": "Sense Curse (Su) — 5th level",
        "description": "At 5th level, the spirit speaker can listen to the whisperings of the spirit world to tell if someone suffers from a curse, such as from bestow curse or the evil eye ability of sea hags, and similar effects, even if that person is unaware of it, with a DC 20 Knowledge (arcana) check. The spirit speaker can only use this ability when not in trance."
      },
      {
        "name": "Remove Curse (Su) — 5th level",
        "description": "At 5th level, the spirit speaker gains the ability to use her connection with her spirit guide to petition the spirit world to remove a curse. Once per trance, the spirit speaker may attempt a DC 20 Diplomacy check to convince the spirits to help her, having the effect of casting remove curse on a subject the spirit speaker designates. If she fails her Diplomacy check, she may not use this power for 24 hours. Granted by the spirit guide at 5th level, usable while in trance."
      },
      {
        "name": "Ability Enhancement (Su) — 7th level",
        "description": "At 7th level, the spirit speaker gains the ability to enhance one of her physical ability scores while in trance. Once she enters a trance, the spirit speaker gains a +4 enhancement bonus that she may apply to her Strength, Dexterity, or Constitution score. She must choose one at the beginning of the trance, and she cannot later change the ability score to which the bonus applies (although leaving the trance and entering a new one allows her to select a different ability score). A spirit speaker who prolongs a trance with additional daily trance uses cannot choose a new ability score to apply the bonus to (she is still considered in the same trance as when she began). Granted by the spirit guide at 7th level."
      },
      {
        "name": "Legend Lore (Sp) — 9th level",
        "description": "At 9th level, the spirit speaker's spirit guide grants her the ability to cast legend lore once per day at her caster level. The spirit speaker can only use this ability when not in trance."
      },
      {
        "name": "Scrying (Sp) — 9th level",
        "description": "Once she becomes a 9th-level spirit speaker, the spirit speaker can cast scrying once per trance as a 10th-level caster. Because of her connection to the spirit world, the spirit speaker can cast the spell without material components or a focus by using a full-round action and succeeding at a DC 25 Diplomacy check. If the spirit speaker fails her Diplomacy check, she may not use this power again for 24 hours. A spirit speaker who prolongs a trance with additional daily trance uses cannot use this ability more than once in that trance (she is still considered in the same trance as when she began). Granted by the spirit guide at 9th level, usable while in trance."
      }
    ]
  }
];

export const DRAGON_323_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as PrestigeClassDefinition["babProgression"],
  goodSaves: c.goodSaves as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites ?? [],
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
