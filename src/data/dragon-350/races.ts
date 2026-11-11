// Dragon Magazine #350 (December 2006) — race draft: 4 races.
// "Legacies of Ancient Empires" (Eric L. Boyd), pp. 50-57.
// ⚠️ SURVEY CORRECTION: the program survey (following the issue's own
// table-of-contents blurb) calls these "four new planar bloodlines."
// They are NOT Unearthed Arcana-style bloodlines and NOT templates:
// the article presents four new PLANETOUCHED RACES of Faerûn —
// azerblood (shield dwarf/azer), celadrin (elf/firre eladrin),
// d'hin (lightfoot halfling/djinn; singular "d'hin," plural
// "d'hin'ni"), and worghest (goblin/barghest). They stage here as
// RaceDefinition records in the house shape of recent packs
// (issue-328 races precedent): traits via the t() helper, racial
// skill bonuses in skillBonuses with conditionality spelled out in
// the trait text.
// ⚠️ APOC FLAG — see SCREENING.md §1 (the issue's headline flag):
// all four races descend from planar beings, and the sphere is
// sealed; the worghest is fiend-descended, and fiend-blooded
// planetouched sit next to Shaun's standing ruling that APOC has
// no tieflings (the fiend-blooded were taken/backdoored into
// demons). These records are STAGED IN THIS PACK ONLY, with the
// disposition laid out for Shaun's call in SCREENING.md — staged
// here does not mean cleared for the catalog (precedent: the
// Aasimar & Tiefling guidebook's tiefling record, staged in its
// pack and deliberately not wired into the catalog).
// Trait text was cross-checked against the issue's OCR stream and
// the clean realmshelps.net transcription of this article; where
// the two agree, the numbers are settled. No magazine prose is
// reproduced; trait text is a faithful mechanical paraphrase.
// ID NOTE: the races barrel has no "azerblood" race, but the live
// feats barrel already carries an unrelated Races of Faerûn feat
// named Azerblood (a shield-dwarf regional feat). Distinct record,
// same name — flagged in MANIFEST.md for integration.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #350 — Legacies of Ancient Empires (Eric L. Boyd), pp. 50-57";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_350_RACES: RaceDefinition[] = [
  {
    id: "azerblood",
    name: "Azerblood",
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { str: 2, con: 2, cha: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    skillBonuses: { appraise: 2, craft: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "azerblood-planetouched",
        "Planetouched",
        "Azerbloods are planetouched: native outsiders descended from shield dwarves and azers of the Elemental Plane of Fire. An azerblood has the outsider type with the native subtype and darkvision out to 60 feet.",
      ),
      t(
        "azerblood-ability-scores",
        "Ability Scores",
        "+2 Strength, +2 Constitution, -2 Charisma: azerbloods inherit the stocky strength of their dwarven kin and the furnace-hardiness of the azers, but their dour, smoldering manner puts others off.",
      ),
      t(
        "azerblood-dwarven-blood",
        "Dwarven Blood",
        "For all effects related to race, an azerblood is considered a dwarf. Azerbloods are treated as shield dwarves for the purpose of determining their home region, and an azerblood may select the Bloodline of Fire feat (Races of Faerûn) as if he were a shield dwarf.",
      ),
      t(
        "azerblood-fire-resistance",
        "Fire Resistance",
        "An azerblood has fire resistance 10.",
      ),
      t(
        "azerblood-weapon-familiarity",
        "Weapon Familiarity",
        "Azerbloods treat the dwarven waraxe and the dwarven urgrosh as martial weapons rather than exotic weapons.",
      ),
      t(
        "azerblood-stability",
        "Stability",
        "An azerblood gains a +4 bonus on ability checks to resist being bull rushed or tripped while standing on the ground (but not when climbing, flying, or otherwise not standing firmly on the ground).",
      ),
      t(
        "azerblood-dwarven-resistances",
        "Dwarven Resistances",
        "An azerblood gains a +2 racial bonus on saving throws against poison and a +2 racial bonus on saving throws against spells and spell-like effects.",
      ),
      t(
        "azerblood-fire-foes",
        "Fire Foes",
        "An azerblood gains a +1 racial bonus on attack rolls against fire, magma, and steam mephits and against salamanders, ancient enemies of his azer forebears.",
      ),
      t(
        "azerblood-giant-dodging",
        "Giant Dodging",
        "An azerblood gains a +4 dodge bonus to Armor Class against monsters of the giant type (this bonus does not apply against a creature that the azerblood cannot see).",
      ),
      t(
        "azerblood-skills",
        "Azerblood Skills",
        "An azerblood gains a +2 racial bonus on Appraise checks and Craft checks that are related to fire, stone, or metal items.",
      ),
      t(
        "azerblood-heat-metal",
        "Heat Metal (Sp)",
        "Once per day, an azerblood can use heat metal as a spell-like ability, with a caster level equal to his character level. The save DC is Charisma-based.",
      ),
      t(
        "azerblood-forged",
        "Forged",
        "An azerblood gains a +1 racial bonus on saving throws against heat and fire spells and effects. This bonus increases by +1 for every five character levels the azerblood attains beyond 1st.",
      ),
      t(
        "azerblood-languages",
        "Languages",
        "Azerbloods speak Common, Dwarven, and Ignan. Bonus languages: Giant, Gnome, Goblin, Orc, and Undercommon.",
      ),
    ],
  },
  {
    id: "celadrin",
    name: "Celadrin",
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { dex: 2, con: -2, cha: 2 },
    favoredClass: "Bard",
    levelAdjustment: 1,
    skillBonuses: { perform: 4, listen: 2, search: 2, spot: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "celadrin-planetouched",
        "Planetouched",
        "Celadrin are planetouched: native outsiders descended from gold elves and firre eladrin. A celadrin has the outsider type with the native subtype and darkvision out to 60 feet.",
      ),
      t(
        "celadrin-ability-scores",
        "Ability Scores",
        "+2 Dexterity, -2 Constitution, +2 Charisma: celadrin are graceful and magnetic, with the elven frame's familiar frailty.",
      ),
      t(
        "celadrin-elven-blood",
        "Elven Blood",
        "For all effects related to race, a celadrin is considered an elf.",
      ),
      t(
        "celadrin-fire-resistance",
        "Fire Resistance",
        "A celadrin has fire resistance 10, a legacy of the firre's flames.",
      ),
      t(
        "celadrin-sleep-immunity",
        "Sleep Immunity",
        "A celadrin is immune to magic sleep effects.",
      ),
      t(
        "celadrin-weapon-proficiency",
        "Weapon Proficiency",
        "Celadrin receive the Martial Weapon Proficiency feats for the longsword, rapier, longbow (including composite longbow), and shortbow (including composite shortbow) as bonus feats.",
      ),
      t(
        "celadrin-keen-senses",
        "Keen Senses",
        "A celadrin gains a +2 racial bonus on Listen, Search, and Spot checks, and a +4 racial bonus on Perform (sing) checks. A celadrin who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if he were actively looking for it.",
      ),
      t(
        "celadrin-fiery-gaze",
        "Fiery Gaze (Sp)",
        "Once per day, a celadrin can use scorching ray as a spell-like ability, with a caster level equal to his class level.",
      ),
      t(
        "celadrin-melodious-voice",
        "Melodious Voice",
        "A celadrin gains a +1 racial bonus on Diplomacy checks made to influence an NPC's attitude and on wild empathy checks. This bonus rises to +2 at 5th level, +3 at 10th level, +4 at 15th level, and +5 at 20th level.",
      ),
      t(
        "celadrin-languages",
        "Languages",
        "Celadrin speak Celestial, Common, and Elven. Bonus languages: Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.",
      ),
    ],
  },
  {
    id: "dhin",
    name: "D'hin",
    size: "Small",
    baseSpeed: 20,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { dex: 2, cha: 2, wis: -2 },
    favoredClass: "Sorcerer",
    levelAdjustment: 1,
    skillBonuses: { climb: 2, jump: 2, listen: 2, "move-silently": 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "dhin-planetouched",
        "Planetouched",
        "The d'hin (plural d'hin'ni) are planetouched: native outsiders descended from lightfoot halflings and djinn of the Elemental Plane of Air. A d'hin has the outsider type with the native subtype and darkvision out to 60 feet.",
      ),
      t(
        "dhin-ability-scores",
        "Ability Scores",
        "+2 Dexterity, +2 Charisma, -2 Wisdom: d'hin'ni are quick, charming, and flighty, with a djinn's wandering attention.",
      ),
      t(
        "dhin-small",
        "Small",
        "As a Small creature, a d'hin gains a +1 size bonus to Armor Class, a +1 size bonus on attack rolls, and a +4 size bonus on Hide checks, but takes a -4 size penalty on grapple checks and must use smaller weapons than humans use. A d'hin's lifting and carrying limits are three-quarters of those of a Medium character. Base land speed is 20 feet.",
      ),
      t(
        "dhin-halfling-blood",
        "Halfling Blood",
        "For all effects related to race, a d'hin is considered a halfling.",
      ),
      t(
        "dhin-luck",
        "Halfling Luck",
        "A d'hin gains a +1 racial bonus on all saving throws.",
      ),
      t(
        "dhin-thrown-weapons",
        "Thrown Weapons",
        "A d'hin gains a +2 racial bonus on attack rolls with thrown weapons and slings.",
      ),
      t(
        "dhin-skills",
        "D'hin Skills",
        "A d'hin gains a +2 racial bonus on Climb, Jump, Listen, and Move Silently checks.",
      ),
      t(
        "dhin-air-mastery",
        "Air Mastery (Ex)",
        "Airborne creatures take a -1 penalty on attack and damage rolls against a d'hin.",
      ),
      t(
        "dhin-spell-likes",
        "Spell-Like Abilities",
        "A d'hin can use prestidigitation at will, and can use one of gust of wind, whispering wind, or wind wall once per day, as spell-like abilities with a caster level equal to his character level. The save DCs are Charisma-based.",
      ),
      t(
        "dhin-languages",
        "Languages",
        "D'hin'ni speak Common, Halfling, and Auran. Bonus languages: Dwarven, Elven, Gnome, Goblin, and Orc.",
      ),
    ],
  },
  {
    id: "worghest",
    name: "Worghest",
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { str: 2, dex: 2, cha: -2 },
    favoredClass: "Ranger",
    levelAdjustment: 2,
    skillBonuses: { "move-silently": 4 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "worghest-planetouched",
        "Planetouched",
        "Worghests are planetouched: native outsiders descended from goblins and barghests. A worghest has the outsider type with the native subtype, darkvision out to 60 feet, and low-light vision. ⚠️ APOC: fiend-descended planetouched — see SCREENING.md §1 before this record is integrated.",
      ),
      t(
        "worghest-ability-scores",
        "Ability Scores",
        "+2 Strength, +2 Dexterity, -2 Charisma: worghests are strong and quick like the wolves they become, but their goblinoid features and barghest hunger unsettle others.",
      ),
      t(
        "worghest-scent",
        "Scent",
        "A worghest has the scent special quality.",
      ),
      t(
        "worghest-skills",
        "Worghest Skills",
        "A worghest gains a +4 racial bonus on Move Silently checks, and has the Track feat as a bonus feat.",
      ),
      t(
        "worghest-change-shape",
        "Change Shape (Su)",
        "A worghest can assume the form of a wolf as a standard action, as the change shape special ability; in wolf form its base land speed is 50 feet and it gains a bite attack. A worghest may select feats that have wild shape as a prerequisite, treating this ability as wild shape for that purpose.",
      ),
      t(
        "worghest-feed",
        "Feed (Su)",
        "As a full-round action, a worghest can feed on the corpse of a slain humanoid. Feeding destroys the body: the victim cannot be raised or resurrected by any effect that requires part of the corpse to remain, and any wish, miracle, or true resurrection attempt to restore the victim has a 50% chance of failure (checked once for each creature so restored). Feeding grants the worghest the benefits of a death knell spell, using the victim's Hit Dice as the caster level.",
      ),
      t(
        "worghest-trip",
        "Trip (Ex)",
        "In wolf form, a worghest that hits with its bite attack can attempt to trip its opponent as a free action without making a touch attack or provoking an attack of opportunity. If the attempt fails, the opponent cannot react to trip the worghest.",
      ),
      t(
        "worghest-languages",
        "Languages",
        "Worghests speak Common, Infernal, and Worg. Bonus languages: Giant, Goblin, Ogre, and Orc.",
      ),
    ],
  },
];
