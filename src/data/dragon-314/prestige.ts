// Dragon Magazine #314 (Dec 2003) prestige classes — integrated in the
// Dragon Magazine treatment program (issue #314 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-314/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's ten prestige classes:
//   * Heartfire Fanner (5 levels), from "The Brotherhood of the
//     Burning Heart" (by Clifford Horowitz, pp. 18–25).
//   * The four Masters of the Four Winds (10 levels each), from
//     "Master of the Four Winds" (by David Noonan, pp. 33–42) — the
//     ledger's "Master of the 4 Winds" resolved at extraction as FOUR
//     prestige classes, one per wind.
//   * Darkwater Knight (10 levels), from "Guardians of the Deepest
//     Seas" (by James Jacobs, pp. 43–47).
//   * The four elemental prestige classes of "Channeling the
//     Elements" (by Spencer Kornhaber, pp. 56–62): Earthshaker,
//     Icesinger, Firestorm Berserker, Purebreath Devotee (10 levels
//     each).
// Sources: the Dragon #314 magazine text on archive.org
// (DragonMagazine314_djvu.txt), cross-checked against the
// srd.dndtools.org transcriptions of all ten classes (which supplied
// every Hit Die line and confirmed every advancement table) and the
// realmshelps.net transcriptions of the Heartfire Fanner, Master of
// the South Wind, and Darkwater Knight. Records mirror the
// issue-312/313 prestige draft shape: plain objects, a prerequisites
// array, progression rows carrying only level/BAB/saves (specials
// live in the features), and features led by a "Basics" feature that
// carries the hit die, skill points, proficiencies, and spellcasting
// advancement. A class's own spells-per-day/known numbers are spelled
// out in prose inside its "Spells" feature. Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine prose
// is reproduced.
//
// ADJUDICATIONS (all flagged in MANIFEST.md):
//   * Darkwater Knight — Knowledge (nature) prerequisite: magazine
//     OCR illegible; realmshelps transcribes 8 ranks, dndtools 6.
//     Staged as 8 per realmshelps; the conflict is flagged.
//   * Darkwater Knight — Underwater Blindsense: the advancement
//     table (both transcriptions) places it at 7th level; the feature
//     text (magazine and both transcriptions) says 6th. Per the
//     issue-313 precedent the feature text governs: 6th.
//   * Earthshaker — Geyser damage: magazine OCR reads 5d6
//     bludgeoning; the dndtools transcription reads 2d6. Staged 2d6.
//   * Firestorm Berserker — Breathe Fire at 3rd and Fire Immunity at
//     5th per the transcribed table, agreeing with both feature
//     texts (the magazine table OCR interleaved the two rows);
//     Sheath of Flame damage 1d8 per the transcription (OCR: 1d6).
//   * Icesinger — Frost Weave at 7th per table and feature text
//     (OCR garbled the text's level); Fingers of Frost damage 1d4 +
//     Charisma per the transcription (OCR: 1d6).

import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
  PrestigeClassDefinition,
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

interface RawPrestige {
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
  prerequisites: string[];
  features: RawFeature[];
}

const RAW: RawPrestige[] = [
  {
    "id": "heartfire-fanner",
    "name": "Heartfire Fanner",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": ["ref", "will"],
    "prerequisites": [
      "Skills: Diplomacy 10 ranks, Perform (any) 10 ranks",
      "Feats: Negotiator, Skill Focus (Perform [any])",
      "Spells: Ability to cast 1st-level spells",
      "Special: Must be a member of the Brotherhood of the Burning Heart"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 }
    ],
    "classSkills": ["Bluff", "Craft", "Diplomacy", "Gather Information", "Intimidate", "Listen", "Perform", "Search", "Sense Motive", "Speak Language", "Spot"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d6. Skill points at each level: 6 + Int modifier. Weapon and Armor Proficiency: a heartfire fanner gains no new weapon or armor proficiencies. Spells per Day: at every heartfire fanner level, the character gains new spells per day (and spells known, if applicable) as if he had also gained a level in an existing spellcasting class he belonged to before adding the prestige class level — no other benefits of that class. The class's text frames this advancement around arcane spellcasting classes when the character has more than one spellcasting class." },
      { "name": "Bardic Music", "description": "The heartfire fanner gains the bardic music ability if he did not already have it, in which case he has the bardic music abilities of a 5th-level bard. All bardic music effects (countersong, fascinate, inspire competence, inspire courage, inspire greatness, inspire heroics, song of freedom, suggestion, and mass suggestion) become available to him, subject to their usual Perform rank and level requirements. Heartfire fanner levels stack with bard levels for all bardic music calculations, including uses per day; a fanner with bard levels does not gain the normal bardic music abilities as he advances in fanner levels.", "level": 1 },
      { "name": "Inspired Fight (Su)", "description": "Requires 11 or more ranks in Perform. By performing bardic music for 1 round, the fanner grants one allied subject within 30 feet who can hear him bonus feats: one feat at 1st level, two at 3rd, and three at 5th. Each bonus feat is chosen by the target, either from among the fanner's own feats or from the fighter bonus feat list, and the target must meet the feat's prerequisites (one granted feat can serve as the prerequisite for another). For every three character levels the fanner has, he can bestow feats on one additional creature. The feats last while he sings and for 5 rounds thereafter. He cannot use inspired fight on himself, and using it costs one daily use of bardic music. This is a mind-affecting effect.", "level": 1 },
      { "name": "Magic Flare (Su)", "description": "Requires 12 or more ranks in Perform. By performing for 1 round as a standard action, the fanner inspires one allied spellcaster within 30 feet: the next spell that spellcaster casts (within 1 round per fanner level) gains a metamagic feat the spellcaster possesses, with a level adjustment of up to 1 (up to 2 at 4th level), without using a higher-level slot and without the increased casting time spontaneous casters normally take with metamagic. The altered spell still cannot be of a level higher than the spellcaster could normally cast with metamagic applied. The fanner can target himself with magic flare. Using it costs one daily use of bardic music.", "level": 2 },
      { "name": "Bolster Courage (Su)", "description": "Requires 13 or more ranks in Perform. When the fanner uses his inspire courage bardic music ability, he can choose one ally currently under its effects to gain an additional +2 bonus on attack rolls and AC. Bolster courage does not consume a daily use of bardic music, and the fanner cannot target himself with it.", "level": 3 },
      { "name": "Prolonged Passion (Su)", "description": "Requires 15 ranks in Perform. By performing for 1 round, the fanner targets one creature within 30 feet, plus one additional creature per three fanner and bard levels he has. The duration of any one spell, extraordinary, supernatural, or spell-like effect affecting each target (the target chooses which effect) increases by 1 round per point of the fanner's Charisma bonus. Only effects with durations benefit, and an effect that ends prematurely gains nothing further from this ability. Targets must be able to hear the fanner, who cannot target himself. Using it costs one daily use of bardic music. This is a mind-affecting effect.", "level": 5 }
    ]
  },
  {
    "id": "master-of-the-north-wind",
    "name": "Master of the North Wind",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["fort"],
    "prerequisites": [
      "Alignment: Lawful neutral",
      "Skills: Climb 10 ranks",
      "Spellcasting: Ability to cast 3rd-level divine spells",
      "Special: Ki strike (magic) class feature",
      "Special: Ability to change shape into a flying creature"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 4, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 5, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 6, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 6, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 7, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": ["Balance", "Climb", "Concentration", "Diplomacy", "Hide", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Profession", "Spellcraft", "Spot", "Survival", "Swim"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d8. Skill points at each level: 4 + Int modifier. Weapon and Armor Proficiency: a master of the north wind gains no weapon or armor proficiencies. Spells per Day: at each master of the north wind level except 6th, the character gains new spells per day (and spells known, if applicable) as if she had also gained a level in whatever divine spellcasting class in which she could cast 3rd-level spells before she added the prestige class level — no other benefits of that class (such as more frequent wild shapes). If she had more than one such class, she chooses which class gains the benefit of each level." },
      { "name": "Monk Abilities", "description": "A master of the north wind's class levels stack with her monk levels for determining her unarmed damage, AC bonus, and unarmored speed bonus. If she has no monk levels, she gains the unarmed damage, AC bonus, and unarmored speed bonus of a monk of a level equal to her master of the north wind level.", "level": 1 },
      { "name": "Wild Shape", "description": "Half the master's master of the north wind levels (rounded down) stack with her druid levels to determine how often she can wild shape and into which forms. A master who could not previously wild shape gains the ability to wild shape as a 5th-level druid at 2nd level, then improves at the same rate less the first level (as a 6th-level druid at 3rd level, and so on). At 6th level, she can expend one of her wild shape uses for the day to take on a gaseous shape, functioning like the gaseous form spell from a caster of her class level, except that she can affect only herself; unlike other uses of wild shape, taking a gaseous shape is a spell-like ability.", "level": 2 },
      { "name": "Air Domain", "description": "The master is granted access to the Air domain. In the likely event that she has druid levels rather than cleric levels, she can cast an extra spell per day of each spell level she has access to, which must be the Air domain spell of that level. She uses the Air domain's granted power, substituting her master of the north wind levels for cleric levels.", "level": 10 }
    ]
  },
  {
    "id": "master-of-the-south-wind",
    "name": "Master of the South Wind",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": ["ref"],
    "prerequisites": [
      "Alignment: Lawful good or lawful neutral",
      "Skills: Climb 10 ranks, Disguise 10 ranks, Hide 10 ranks, Move Silently 10 ranks",
      "Special: Ki strike (magic) class feature",
      "Special: Uncanny dodge class feature",
      "Special: Must complete an obstacle course devised by senior masters of the south wind (traps, guards to be eluded, and monsters to be fought; a typical course has five or six CR 3 encounters and is designed to limit lethal danger, though accidents happen)"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": ["Balance", "Bluff", "Climb", "Concentration", "Diplomacy", "Disable Device", "Disguise", "Forgery", "Hide", "Jump", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Spellcraft", "Spot", "Tumble"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d6. Skill points at each level: 6 + Int modifier. Weapon and Armor Proficiency: a master of the south wind gains no weapon or armor proficiencies. Spellcasting: unlike the other masters of the four winds, a master of the south wind does not advance another class's spellcasting; from 1st level he gains his own small list of arcane spells (see the Spells feature)." },
      { "name": "Monk Abilities", "description": "A master of the south wind's class levels stack with his monk levels for determining his unarmed damage, AC bonus, and unarmored speed bonus. If he has no monk levels, he gains the unarmed damage, AC bonus, and unarmored speed bonus of a monk of a level equal to his master of the south wind level.", "level": 1 },
      { "name": "Spells", "description": "Beginning at 1st level, the master of the south wind casts arcane spells drawn from his own class spell list, Charisma-based: to cast a spell he must have a Charisma score of at least 10 + the spell's level, his bonus spells are based on Charisma, and the save DC of his spells is 10 + spell level + his Charisma modifier. He prepares and casts spells just as a bard does. Spells per day by level (1st/2nd/3rd/4th): 1st 0/—/—/—; 2nd 1/—/—/—; 3rd 1/0/—/—; 4th 1/1/—/—; 5th 1/1/0/—; 6th 1/1/1/—; 7th 2/1/1/0; 8th 2/1/1/1; 9th 2/2/1/1; 10th 2/2/2/1. Spells known by level (1st/2nd/3rd/4th): 1st 2*/—/—/—; 2nd 3/—/—/—; 3rd 3/2*/—/—; 4th 4/3/—/—; 5th 4/3/2*/—; 6th 4/4/3/—; 7th 4/4/3/2*; 8th 4/4/4/3; 9th 4/4/4/3; 10th 4/4/4/4. An entry of 0 (or an asterisked entry) means the master receives only his bonus spells for that spell level (from a high Charisma) — if he has no bonus spells, he knows no spells of that level yet. At 6th level and every even level thereafter (8th and 10th), he can learn a new spell in place of one he already knows, as a bard does. Spell list — 1st level: disguise self, endure elements, entropic shield, feather fall, ghost sound, jump, obscuring mist, sleep. 2nd level: cat's grace, darkness, eagle's splendor, fog cloud, gust of wind, invisibility, pass without trace, spider climb, stolen breath, whispering wind, wind wall. 3rd level: capricious zephyr, deep slumber, deeper darkness, gaseous form, misdirection, nondetection, updraft. 4th level: air walk, clairaudience/clairvoyance, cyclonic blast, dimension door, freedom of movement, greater invisibility, modify memory.", "level": 1 },
      { "name": "Sneak Attack", "description": "This ability functions as the rogue's sneak attack ability. The extra damage is +1d6 at 2nd level and increases by +1d6 every other level thereafter (+2d6 at 4th, +3d6 at 6th, +4d6 at 8th, +5d6 at 10th). Critical hits do not multiply sneak attack damage.", "level": 2 },
      { "name": "Air Domain", "description": "The master is granted access to the Air domain. In the likely event that he has no cleric levels, he adds the Air domain spells to his master of the south wind spells known in addition to his normal number of spells known and casts them as arcane spells; he cannot thereby cast spells higher than 4th level, but he can use spell completion items for the higher-level domain spells. He uses the Air domain's granted power, substituting his master of the south wind levels for cleric levels.", "level": 5 }
    ]
  },
  {
    "id": "master-of-the-east-wind",
    "name": "Master of the East Wind",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": [
      "Alignment: Lawful good or lawful neutral",
      "Skills: Climb 10 ranks",
      "Spellcasting: Ability to cast 3rd-level arcane spells",
      "Special: Ki strike (magic) class feature"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": ["Balance", "Climb", "Concentration", "Diplomacy", "Hide", "Jump", "Knowledge (arcana)", "Listen", "Move Silently", "Profession", "Spellcraft", "Spot"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d6. Skill points at each level: 4 + Int modifier. Weapon and Armor Proficiency: a master of the east wind gains no weapon or armor proficiencies. Spells per Day: at every master of the east wind level, the character gains new spells per day (and spells known, if applicable) as if she had also gained a level in whatever arcane spellcasting class in which she could cast 3rd-level spells before she added the prestige class level — no other benefits of that class (such as bonus feats). If she had more than one such class, she chooses which class gains the benefit of each level." },
      { "name": "Monk Abilities", "description": "A master of the east wind's class levels stack with her monk levels for determining her unarmed damage, AC bonus, and unarmored speed bonus. If she has no monk levels, she gains the unarmed damage, AC bonus, and unarmored speed bonus of a monk of a level equal to her master of the east wind level.", "level": 1 },
      { "name": "Familiar", "description": "Half the master's master of the east wind levels (rounded down) stack with her wizard or sorcerer levels to determine the abilities her familiar has. A master who could not previously summon a familiar gains the ability to do so at 2nd level, then improves at the same rate (gaining the familiar abilities of a 3rd-level wizard when she becomes a 6th-level master of the east wind, for example).", "level": 2 },
      { "name": "Air Domain", "description": "The master is granted access to the Air domain. In the likely event that she has wizard or sorcerer levels rather than cleric levels, she adds the domain spells to her spells known — scribed in a wizard's spellbook, or added to a sorcerer's or bard's spells known in addition to the normal number — and casts them as arcane spells. She uses the Air domain's granted power, substituting her master of the east wind levels for cleric levels.", "level": 5 }
    ]
  },
  {
    "id": "master-of-the-west-wind",
    "name": "Master of the West Wind",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": [
      "Alignment: Lawful good or lawful neutral",
      "Skills: Climb 10 ranks",
      "Spellcasting: Ability to cast 3rd-level divine spells",
      "Special: Ki strike (magic) class feature",
      "Special: Ability to turn undead"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": ["Balance", "Climb", "Concentration", "Diplomacy", "Hide", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Profession", "Sense Motive", "Spellcraft", "Spot"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d8. Skill points at each level: 4 + Int modifier. Weapon and Armor Proficiency: a master of the west wind gains no weapon or armor proficiencies. Spells per Day: at every master of the west wind level, the character gains new spells per day (and spells known, if applicable) as if he had also gained a level in whatever divine spellcasting class in which he could cast 3rd-level spells before he added the prestige class level — no other benefits of that class. If he had more than one such class, he chooses which class gains the benefit of each level." },
      { "name": "Monk Abilities", "description": "A master of the west wind's class levels stack with his monk levels for determining his unarmed damage, AC bonus, and unarmored speed bonus. If he has no monk levels, he gains the unarmed damage, AC bonus, and unarmored speed bonus of a monk of a level equal to his master of the west wind level.", "level": 1 },
      { "name": "Turn Undead", "description": "Half the master's master of the west wind levels (rounded down) stack with his cleric levels to determine how well he can turn undead.", "level": 2 },
      { "name": "Air Domain", "description": "The master is granted access to the Air domain, which gives him an additional granted power and offers one more spell option for him to choose as a domain spell.", "level": 5 }
    ]
  },
  {
    "id": "darkwater-knight",
    "name": "Darkwater Knight",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": [
      "Patron Deity: Any nature deity",
      "Skills: Knowledge (nature) 8 ranks, Survival 6 ranks, Swim 6 ranks",
      "Feats: Skill Focus (Swim), Water Focus",
      "Language: Aquan",
      "Spells: Ability to cast at least three spells with the water descriptor, one of which must be at least 2nd level"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (religion)", "Move Silently", "Profession", "Spellcraft", "Survival", "Swim"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d6. Skill points at each level: 2 + Int modifier. Weapon and Armor Proficiency: darkwater knights are proficient with no additional weapons or armor. Spells per Day: at every darkwater knight level, the character gains new spells per day (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class level — no other benefits of that class. If she had more than one spellcasting class, she chooses which class gains the benefit of each level." },
      { "name": "Favored Enemy (Ex)", "description": "The darkwater knight's extensive knowledge of aquatic creatures grants her a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures with the aquatic subtype, and a +2 bonus on weapon damage rolls against such creatures. The bonus increases to +4 at 5th level and to +6 at 9th level. If the knight has a favored enemy bonus from another class (such as ranger), the bonuses stack where both apply to the target creature.", "level": 1 },
      { "name": "Darkvision (Ex)", "description": "The darkwater knight gains darkvision to a range of 60 feet. If she already possesses darkvision, its range increases by 60 feet.", "level": 2 },
      { "name": "Bonus Feat", "description": "At 3rd level and again at 8th level, the darkwater knight gains a bonus feat, which must be a metamagic feat or a feat from the Darkwater Feats presented in the article (Flotation, Flow With the Current, Pressure Resistance, Sea Legs, Water Focus).", "level": 3 },
      { "name": "Adept Swimmer (Su)", "description": "The darkwater knight gains a swim speed equal to her land speed; if she already possesses a higher natural swim speed, it increases by 10 feet instead. She gains a +8 racial bonus on all Swim checks, may take 10 on Swim checks even when distracted or threatened, and can hold her breath twice as long as normal.", "level": 4 },
      { "name": "Darkwater Prodigy (Ex)", "description": "If the darkwater knight prepares her daily allotment of spells while the majority of her body is immersed in a large body of water, she may prepare a bonus spell of each level she can cast, provided the bonus spell has the water descriptor.", "level": 6 },
      { "name": "Underwater Blindsense (Ex)", "description": "The darkwater knight can locate creatures in a 30-foot radius underwater. This ability works like blindsense except that it functions only while the knight is underwater, and it detects only creatures in the same body of water. (The class's feature text grants this ability at 6th level; the advancement table places it at 7th — see MANIFEST.md.)", "level": 6 },
      { "name": "Darkwater Scion (Su)", "description": "The darkwater knight becomes amphibious and gains the aquatic subtype. She can now breathe water as well as air, and her swim speed increases by an additional 10 feet. While swimming, she gains a +2 morale bonus on initiative checks and all Dexterity-based skill checks. Finally, she casts all spells with the water descriptor at +1 caster level.", "level": 10 }
    ]
  },
  {
    "id": "earthshaker",
    "name": "Earthshaker",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": ["fort", "will"],
    "prerequisites": [
      "Skills: Knowledge (dungeoneering) 6 ranks, Knowledge (nature) 12 ranks",
      "Spells: Ability to cast soften earth and stone",
      "Language: Terran"
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
    "classSkills": ["Balance", "Climb", "Concentration", "Craft", "Knowledge (dungeoneering)", "Knowledge (nature)", "Spellcraft", "Survival"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d8. Skill points at each level: 2 + Int modifier. Weapon and Armor Proficiency: earthshakers gain no proficiency with any weapons or armor. Spells per Day/Spells Known: at every earthshaker level, the character gains new spells per day (and spells known, if applicable) as if he had also gained a level in whatever spellcasting class he belonged to before adding the prestige class level — he adds his earthshaker level to that class's level to determine spells per day, spells known, and caster level, but gains no other benefits of that class. If he had more than one spellcasting class, he chooses which class gains the benefit of each level." },
      { "name": "Earth Domain", "description": "The earthshaker is granted access to the Earth domain. In the likely event that he has druid levels rather than cleric levels, he can cast an extra spell per day of each spell level he has access to, which must be the Earth domain spell of that level. He gains the Earth domain's granted power, substituting his earthshaker levels for cleric levels.", "level": 1 },
      { "name": "Tremorsense (Ex)", "description": "The earthshaker automatically senses the location of anything in contact with the ground within 5 feet of him, exactly as the tremorsense ability described in the Dungeon Master's Guide. The range increases by 5 feet at every other earthshaker level (to 10 feet at 3rd level, 15 feet at 5th, 20 feet at 7th, and 25 feet at 9th).", "level": 1 },
      { "name": "Tremor (Su)", "description": "As a standard action, the earthshaker creates a small, localized tremor in the earth lasting 1d4 rounds. Every creature touching the ground within a 10-foot radius of him must make a Balance check (DC 10 + earthshaker level) or fall prone, with a new check each subsequent round until it leaves the area or the effect ends. All creatures in the area count as being in vigorous motion for the purpose of Concentration checks. The area does not move with the earthshaker, and he is immune to its effects. The ability works only where the surface he stands on is in direct contact with the earth (underground, on the ground floor of a building, or outdoors — not on a ship or a second story). He can use tremor a number of times per day equal to half his earthshaker level (1/day at 2nd level, rising to 5/day at 10th).", "level": 2 },
      { "name": "Geyser (Su)", "description": "Once per day as a full-round action, the earthshaker designates a point on the ground up to 100 feet away to which he has line of effect; the earth ruptures there, showering a 10-foot-radius area with rock and scalding water. Every creature in the area takes 1d6 points of fire damage and 2d6 points of bludgeoning damage (a successful Reflex save, DC 15 + the earthshaker's Charisma bonus, halves both). In addition, each creature within 5 feet of the geyser must make a DC 20 Reflex save or be thrown 10 feet away from the point of origin and knocked prone, taking 1d6 points of damage. The ability works only where the surface is in direct contact with the earth, as tremor. It can be used twice per day at 7th level and three times per day at 10th level.", "level": 4 },
      { "name": "Greater Tremor (Su)", "description": "Once per day, the earthshaker produces an unusually powerful tremor. This functions as his tremor ability, except it lasts 2d4 rounds, affects all creatures within a 30-foot radius, raises the Balance check DC to 15 + earthshaker level, and creatures in the area count as being in violent motion for the purpose of Concentration checks.", "level": 6 },
      { "name": "Earthquake (Sp)", "description": "The earthshaker can cast earthquake once per day, at a caster level equal to his character level. At 10th level, he can cast it twice per day.", "level": 8 }
    ]
  },
  {
    "id": "icesinger",
    "name": "Icesinger",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": ["ref", "will"],
    "prerequisites": [
      "Alignment: Any non-good",
      "Skills: Concentration 9 ranks, Perform (any) 9 ranks",
      "Feats: Iron Will, and either Skill Focus (Concentration) or Skill Focus (Perform [any])",
      "Special: Bardic music ability"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 7 }
    ],
    "classSkills": ["Bluff", "Concentration", "Craft", "Disguise", "Hide", "Intimidate", "Move Silently", "Perform", "Profession", "Spellcraft"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d6. Skill points at each level: 6 + Int modifier. Weapon and Armor Proficiency: icesingers gain no proficiency with any weapons or armor. Spells per Day/Spells Known: icesingers cast spells as bards. At every icesinger level, the character gains new spells per day and spells known as if she had also gained a level in the bard class — she adds her icesinger level to her bard level (even if that is 0) to determine spells per day, spells known, and caster level — but she gains no other bard benefits, such as bardic knowledge." },
      { "name": "Frostbitten (Ex)", "description": "The icesinger's body adapts to cold: she gains resistance to cold equal to her icesinger level.", "level": 1 },
      { "name": "Haunting Lament (Su)", "description": "This song works exactly like the fascinate function of the bardic music ability, except that it affects all listeners within 90 feet regardless of whether they can see the icesinger, and it lasts as long as she sings and for a number of rounds equal to her Charisma modifier afterward. Haunting lament is considered bardic music, so using it takes up one use of her bardic music ability for the day.", "level": 1 },
      { "name": "Cold Spell", "description": "At 2nd level and at every other icesinger level thereafter (4th, 6th, 8th, and 10th), the icesinger chooses one spell of 1st to 6th level with the cold descriptor that she does not already know and adds it to her spells known. The spell can come from any class's spell list; if it appears on more than one list, she gains it at the lowest spell level. The bonus spell known can be of a higher level than she can currently cast, but she must wait until she can actually cast spells of that level to use it. Spells gained this way are cast using bard spell slots but do not count against her maximum number of spells known.", "level": 2 },
      { "name": "Bardic Music", "description": "The icesinger continues to advance her bardic music ability: her icesinger levels after her 2nd level count as bard levels for all bardic music calculations, including the abilities she has and her uses of bardic music per day.", "level": 3 },
      { "name": "Indifference (Ex)", "description": "The icesinger gains a +4 morale bonus on saving throws against charm effects and a +2 morale bonus on saving throws against all other enchantment effects.", "level": 3 },
      { "name": "Fingers of Frost (Su)", "description": "As a standard action, the icesinger can make a melee touch attack that deals nonlethal cold damage equal to 1d4 + her Charisma bonus. In addition, once per hour as a full-round action, she can touch one object or surface and coat a contiguous area of up to 10 feet by 10 feet (of her chosen shape, including the point touched) with slippery ice that functions as a grease spell; the surface remains frozen for 1 hour or until it takes 10 points of fire damage, whichever comes first.", "level": 5 },
      { "name": "Song of Sorrow (Su)", "description": "Every creature within 100 feet that hears this performance must succeed on a Will save (DC 10 + icesinger level + her Charisma modifier) or take a −2 morale penalty on saving throws against charm and fear effects and a −1 morale penalty on attack and damage rolls (minimum damage 1). An ally of the icesinger who hears the song gains a +2 morale bonus on this saving throw. The effects last while she performs and for 3 rounds afterward. While performing a song of sorrow, she can fight but cannot cast spells or activate spell completion or command word magic items. Song of sorrow is considered bardic music and takes up one use of her bardic music ability for the day. It is a mind-affecting ability.", "level": 6 },
      { "name": "Frost Weave (Su)", "description": "Whenever the icesinger casts a spell that would normally deal acid, electricity, fire, or sonic damage, she may choose to convert all of that damage to cold damage; the decision is made at the time of casting, and all of the spell's energy damage must be converted. All other effects of the spell remain unchanged — she could, for example, cast a shout spell that deals cold damage rather than sonic damage.", "level": 7 },
      { "name": "Subzero Soul (Su)", "description": "The icesinger becomes immune to cold and to all charm effects.", "level": 9 }
    ]
  },
  {
    "id": "firestorm-berserker",
    "name": "Firestorm Berserker",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d12",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": ["fort"],
    "prerequisites": [
      "Alignment: Any chaotic",
      "Base Attack Bonus: +8",
      "Skills: Intimidate 6 ranks",
      "Feats: Great Fortitude, Iron Will, Toughness",
      "Special: Rage 3 times per day"
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
    "classSkills": ["Climb", "Craft", "Intimidate", "Jump"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d12. Skill points at each level: 2 + Int modifier. Weapon and Armor Proficiency: firestorm berserkers gain no proficiency with any weapons or armor. Spellcasting: none — the class's powers all run through its rage." },
      { "name": "Kindling (Ex)", "description": "The firestorm berserker's inner flames ignite at the slightest spark: he can initiate his rage at any time, even when it isn't his turn or when he is surprised, and can activate it in response to another's action, gaining the benefits of rage in time to prevent or ameliorate an undesirable effect.", "level": 1 },
      { "name": "Rage (Ex)", "description": "The firestorm berserker's levels stack with the levels of the class from which he gained the rage ability for the purpose of determining his uses of rage per day. He does not advance in any of that class's other abilities (damage reduction, fast movement, greater rage, uncanny dodge, or the like).", "level": 1 },
      { "name": "Inner Flame (Ex)", "description": "While raging, the firestorm berserker gains resistance to cold equal to his firestorm berserker level plus his Constitution bonus (if any).", "level": 2 },
      { "name": "Breathe Fire (Su)", "description": "While raging, the firestorm berserker can breathe fire in a 10-foot cone as a standard action that does not provoke an attack of opportunity. Every creature in the area takes fire damage equal to 3d6 + his Constitution bonus (if any); a successful Reflex save (DC 10 + firestorm berserker level + his Constitution modifier) halves the damage. Using this ability causes his rage to end 1 round sooner than it otherwise would, and he cannot breathe fire during the last round of his rage.", "level": 3 },
      { "name": "Heat (Su)", "description": "While raging, the firestorm berserker generates so much heat that his mere touch deals an additional 1d6 points of fire damage. His metallic weapons also conduct this heat.", "level": 4 },
      { "name": "Fire Immunity (Su)", "description": "When the firestorm berserker rages, he is immune to fire damage.", "level": 5 },
      { "name": "Inner Inferno (Ex)", "description": "On his turn in the round his rage would normally end, the firestorm berserker may take 1d4+1 points of Constitution damage as a free action to gain an equal number of additional rounds of rage. When those bonus rounds end, he must make a DC 15 Fortitude save (using his raging save bonus) or take another 1d4+1 points of Constitution damage and continue raging for an equal number of rounds, repeating the save after each set of bonus rounds until he succeeds or dies. If he dies, his body is incinerated into ash on the spot.", "level": 6 },
      { "name": "Sheath of Flame (Su)", "description": "While raging, as a standard action that does not provoke an attack of opportunity, the firestorm berserker causes his flesh to erupt into flames until his rage ends. The aura does not harm him or his equipment. Any creature striking him with its body or a melee weapon deals normal damage but takes fire damage equal to 1d8 plus his Constitution bonus (if any); creatures wielding weapons with exceptional reach are not subject to this damage. This ability can be used once per day at 7th level, twice per day at 9th, and three times per day at 10th.", "level": 7 },
      { "name": "Ventilating Shout (Su)", "description": "While raging, as a standard action, the firestorm berserker releases all his inner flames in one great shout, immediately ending his rage — even one that has gone out of control through inner inferno. Every creature within a 15-foot radius takes 1d6 points of fire damage per firestorm berserker level (Reflex DC 10 + firestorm berserker level + his Constitution modifier for half). He is immune to this damage. This ability can be used once per day.", "level": 8 }
    ]
  },
  {
    "id": "purebreath-devotee",
    "name": "Purebreath Devotee",
    "ruleset": "core",
    "source": "Dragon Magazine #314",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["fort", "ref", "will"],
    "prerequisites": [
      "Base Attack Bonus: +5",
      "Skills: Knowledge (nature) 4 ranks",
      "Feats: Endurance, Iron Will",
      "Special: The candidate must go three days without eating, drinking, or using magic items that prevent hunger or thirst (see the starvation and thirst rules in the class text: without fluids, 1 day plus a number of hours equal to her Constitution score, then an hourly Constitution check, DC 10 + 1 per previous check, or 1d6 nonlethal damage; without food, 3 days without consequence, then a daily Constitution check on the same terms; nonlethal damage from thirst or starvation makes the character fatigued and cannot be recovered — not even by hit-point-restoring magic — until she gets food or water as needed)"
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
    "classSkills": ["Balance", "Climb", "Concentration", "Craft", "Heal", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Profession", "Spot", "Survival", "Swim", "Tumble"],
    "features": [
      { "name": "Basics", "description": "Hit Die: d8. Skill points at each level: 4 + Int modifier. Weapon and Armor Proficiency: purebreath devotees gain no proficiency with any weapons or armor. Spellcasting: from 1st level the purebreath devotee gains her own divine spellcasting (see the Spells feature); all three of her saving throws are good." },
      { "name": "Spells", "description": "Beginning at 1st level, the purebreath devotee casts divine spells drawn from the purebreath devotee spell list, Wisdom-based: to cast a spell she must have a Wisdom score of at least 10 + the spell's level, her bonus spells are based on Wisdom, and the save DC of her spells is 10 + spell level + her Wisdom bonus. She casts her divine spells just as a sorcerer does; she knows all the spells on the purebreath devotee spell list and cannot add to this list. When the table gives her 0 spells per day of a given spell level, she gains only the bonus spells she would be entitled to based on her Wisdom score for that spell level. Spells per day by level (1st/2nd/3rd/4th): 1st 0/—/—/—; 2nd 1/—/—/—; 3rd 2/0/—/—; 4th 3/1/—/—; 5th 3/2/0/—; 6th 3/3/1/—; 7th 3/3/2/0; 8th 3/3/3/1; 9th 3/3/3/2; 10th 3/3/3/3. Spell list — 1st level: cure light wounds, detect poison, expeditious retreat, feather fall, jump, purify food and drink, obscuring mist. 2nd level: calm emotions, cure moderate wounds, delay poison, fog cloud, lesser restoration, levitate, see invisibility, wind wall, whispering wind. 3rd level: cure serious wounds, dispel magic, fly, gaseous form, gentle repose, gust of wind, haste, remove blindness/deafness, remove curse, remove disease, water breathing. 4th level: air walk, atonement, break enchantment, control winds, cure critical wounds, death ward, freedom of movement, neutralize poison, quench, solid fog.", "level": 1 },
      { "name": "Breatharian (Ex)", "description": "The purebreath devotee does not need to eat or drink, so long as she spends at least 8 hours a day in an environment with breathable oxygen.", "level": 1 },
      { "name": "Rebuke Air Creatures (Su)", "description": "The purebreath devotee can rebuke, command, or bolster air creatures as an evil cleric rebukes undead. For the purpose of this ability she functions as a cleric of her total character level. The ability is usable a number of times per day equal to 3 + her Charisma modifier.", "level": 2 },
      { "name": "Mighty Lungs (Ex)", "description": "The purebreath devotee can hold her breath in an airless environment twice as long as normal before having to make Constitution checks — three times as long at 6th level and four times as long at 9th level. This ability is usable at will.", "level": 3 },
      { "name": "Zone of Pure Air (Sp)", "description": "As a standard action, the purebreath devotee fills a 15-foot-radius area centered on herself with pure, fresh air, purging it of all airborne pollutants. The effect lasts 1 minute (10 rounds) per purebreath devotee level; the rounds need not be consecutive, and dismissing the zone is a free action. The bubble of breathable air moves with her and functions even in an airless environment (such as underwater). Any portion of a gaseous magical effect (obscuring mist, fog cloud, solid fog, stinking cloud, cloudkill, mind fog, acid fog, incendiary cloud) within the area is suppressed until the zone expires or is removed; airborne diseases and poisons are harmless within the zone; noxious stenches (such as a ghast's or troglodyte's) and gas-form breath weapons do not affect the area. Any gaseous creature within the zone is pushed out to the nearest open space unless it makes a Will save (DC 10 + purebreath devotee level + her Charisma modifier), with a new save each round it remains in the zone or attempts to enter it. For this effect, she counts as a caster of a level equal to her purebreath devotee level.", "level": 4 },
      { "name": "Pure Body (Ex)", "description": "The purebreath devotee is immune to all diseases and poisons, even magical ones.", "level": 5 },
      { "name": "Light as a Feather (Su)", "description": "The purebreath devotee constantly functions as though affected by a feather fall spell, unless she suppresses the effect; suppressing or renewing it is a standard action.", "level": 7 },
      { "name": "Master Respiration (Ex)", "description": "The purebreath devotee gains a +2 bonus on any Constitution checks involving holding her breath or breathing. In a sealed chamber, she takes damage every 30 minutes rather than every 15 minutes (see the suffocation rules in the Dungeon Master's Guide).", "level": 8 },
      { "name": "Mass Heal (Sp)", "description": "Once per day, the purebreath devotee can cast mass heal as a 10th-level caster.", "level": 10 }
    ]
  }
];

export const DRAGON_314_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
  prerequisites: c.prerequisites,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
