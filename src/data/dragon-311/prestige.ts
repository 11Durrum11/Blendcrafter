// Dragon Magazine #311 (Sep 2003) prestige classes — integrated in the
// Dragon Magazine treatment program (issue #311 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-311/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's five prestige classes, all from the Bards article
// (pp. 64–71): Worldspeaker, Mourner, Memory Smith, Battle Howler of
// Gruumsh, Green Whisperer. Each is a 5-level prestige class;
// progression tables give all five levels. Sources: the Dragon #311
// magazine text on archive.org, cross-checked against the
// prestige-class pages at srd.dndtools.org (prestigeDramag), which
// govern wherever the magazine OCR was garbled (see MANIFEST.md).
// Records mirror the issue-310 prestige draft shape, with a
// prerequisites array in the catalog's prestige-class convention.
// Features are plain objects ({ name, description, level? }) for the
// integration step. Feature descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.
// All five classes stack with bardic knowledge and bardic music as
// described in their features and advance bard spellcasting at every
// level (the green whisperer advances druid spellcasting as well);
// spellcasting advancement is stated in each class's Basics feature,
// following the dragon-paladins pack convention.

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
    "id": "worldspeaker",
    "name": "Worldspeaker",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/worldspeaker.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Gather Information",
      "Handle Animal",
      "Knowledge (all)",
      "Listen",
      "Perform",
      "Search",
      "Sense Motive",
      "Speak Language",
      "Spellcraft"
    ],
    "prerequisites": [
      "Skills: Concentration 8 ranks, Decipher Script 8 ranks, Knowledge (history) 4 ranks, Knowledge (nature) 4 ranks",
      "Special: Must be able to speak, read, and write three languages that are not on the character's racial list of bonus languages"
    ],
    "features": [
      { "name": "Worldspeaker Basics", "description": "Key abilities: Charisma and Intelligence. Weapon and armor proficiencies: none gained. Spellcasting: at each worldspeaker level, the character gains new bard spells per day and spells known as if she had also gained a level in the bard class." },
      { "name": "Bardic Knowledge", "description": "If the character already has the bardic knowledge ability, her worldspeaker levels stack with the levels of any other classes that grant her that ability for the purpose of determining the bonus.", "level": 1 },
      { "name": "Bardic Music", "description": "If the character already has the bardic music ability, her worldspeaker levels stack with the levels of any other classes that grant her that ability for the purpose of determining abilities, duration, and so on.", "level": 1 },
      { "name": "Tongues (Sp)", "description": "Once per day, the worldspeaker may speak as though under the effect of a tongues spell as cast by a 6th-level sorcerer.", "level": 1 },
      { "name": "Animal Speech (Sp)", "description": "The worldspeaker has learned the speech of animals: at will, he may speak as though under the effect of a speak with animals spell cast by a 5th-level druid.", "level": 2 },
      { "name": "Bardic Knowledge Bonus (Ex)", "description": "Because a worldspeaker has so many opportunities to talk to unusual creatures, he gains a +2 bonus on bardic knowledge checks if he already has, or later gains, the ability to make them.", "level": 3 },
      { "name": "Plant Speech (Sp)", "description": "Three times per day, the worldspeaker may speak to plants as though under the effect of a speak with plants spell cast by a 9th-level druid.", "level": 3 },
      { "name": "Mineral Speech (Sp)", "description": "If the worldspeaker speaks Terran, he may speak with stones once per day as if under the effect of a stone tell spell cast by an 11th-level druid. As the sturdiest and most consistent of the four elements, this ability is separate from elemental speech.", "level": 4 },
      { "name": "Elemental Speech (Sp)", "description": "Once per day, the worldspeaker may speak to one of the following elemental materials — air, fire, or water — for 1 minute; he must speak the appropriate elemental language (Auran, Ignan, or Aquan, respectively). An element's perspective, perception, and knowledge may limit what it can tell, and the worldspeaker must succeed on a DC 20 Concentration check to draw meaningful information from the exchange. Air cannot be spoken with intelligibly while it moves faster than a light wind; within a half-mile radius it can report the presence, approximate number, and size of breathing creatures of Small or larger size and the presence of Gargantuan or larger objects it can reach, nothing underwater or underground, and it can forecast natural weather one day in advance. Fire can communicate how long it has burned and simple facts about anyone who lit it, passed within its light radius, or was burned by it, and can reveal its fuel source. Still water can relate facts about who or what has been in or drunk from it and reveal the contents of its depths; running water can say who stepped through or drank from it upstream within the last 3d10 minutes and facts about its source; precipitation and tidal water can only relate the presence of Gargantuan or larger creatures or objects within a two-mile radius that the water touches.", "level": 4 },
      { "name": "Grave Speech (Sp)", "description": "Once per day, the worldspeaker may talk to a corpse as if under the effect of a speak with dead spell cast by a 15th-level cleric.", "level": 5 }
    ]
  },
  {
    "id": "mourner",
    "name": "Mourner",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/mourner.html",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 2, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 3, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 3, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 4, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 4, "ref": 4, "will": 4 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Gather Information",
      "Hide",
      "Knowledge (all)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Spellcraft"
    ],
    "prerequisites": [
      "Skills: Diplomacy 8 ranks, Knowledge (religion) 5 ranks, Perform (any) 8 ranks",
      "Special: Must have the bardic music ability"
    ],
    "features": [
      { "name": "Mourner Basics", "description": "Key abilities: Charisma and Wisdom. Weapon and armor proficiencies: none gained. Spellcasting: at each mourner level, the character gains new bard spells per day and spells known as if she had also gained a level in the bard class." },
      { "name": "Bardic Knowledge", "description": "If the character already has the bardic knowledge ability, her mourner levels stack with the levels of any other classes that grant her that ability for the purpose of determining the bonus, but only when making a bardic knowledge check that deals with funeral rites, undead, necromancy, or items associated with those topics.", "level": 1 },
      { "name": "Bardic Music", "description": "If the character already has the bardic music ability, her mourner levels stack with the levels of any other classes that grant her that ability for the purpose of determining abilities, duration, and so on.", "level": 1 },
      { "name": "Bright Soul (Su)", "description": "The mourner adds her Charisma bonus to all saves against necromancy spells and effects and against all supernatural and spell-like abilities of undead.", "level": 2 },
      { "name": "Peaceful Slumber (Su)", "description": "The mourner can grant a corpse protection against reanimation, at the cost of 1 use of her daily bardic music and a Perform check (on which she cannot take 20). The corpse gains permanent spell resistance equal to the result of the Perform check, but only against spells and spell-like abilities that speak with the dead, create undead, or raise or resurrect the dead. She may grant a corpse this spell resistance as many times as she wishes, but each use resets the spell resistance to the new result, higher or lower.", "level": 3 },
      { "name": "Lament (Su)", "description": "The mourner stirs an undead creature's soul with a lament to lost life laced with the magic of necromancy. Lament requires a standard action and two uses of the mourner's daily bardic music. All undead within a 30-foot radius centered on the mourner who fail a Will save (DC 10 + mourner level + bard level + Charisma bonus) fall prone and are held immobile as by a halt undead spell cast by a cleric of the mourner's class level. This is a sonic effect.", "level": 4 },
      { "name": "Go Gently (Su)", "description": "In the round immediately following the use of the lament ability, the mourner can sever the cords of negative energy that bind undead to the material plane, at the cost of a Perform check and 1 use of her daily bardic music. Any undead within 30 feet that failed to save against the lament must make a second Will save against the same DC: non-intelligent undead that fail are destroyed, and intelligent undead take damage equal to the Perform skill check result. Using go gently counts as an attack against the undead and frees them from the effects of lament.", "level": 5 }
    ]
  },
  {
    "id": "memory-smith",
    "name": "Memory Smith",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/memorySmith.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 2 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 3 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 3 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 4 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Appraise",
      "Bluff",
      "Climb",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disable Device",
      "Gather Information",
      "Knowledge (all)",
      "Listen",
      "Open Lock",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Speak Language",
      "Spellcraft",
      "Spot",
      "Use Magic Device"
    ],
    "prerequisites": [
      "Alignment: Any good",
      "Skills: Craft (armorsmithing or weaponsmithing) 5 ranks, Knowledge (religion) 3 ranks, Perform (any) 8 ranks, Use Magic Device 5 ranks",
      "Deity: Must worship Moradin before all other gods"
    ],
    "features": [
      { "name": "Memory Smith Basics", "description": "Key abilities: Charisma, Intelligence, and Strength. Weapon and armor proficiencies: all simple weapons and all martial axes, hammers, and picks; all armors (heavy, medium, and light) and shields, including the tower shield. Spellcasting: at each memory smith level, the character gains new bard spells per day and spells known as if he had also gained a level in the bard class." },
      { "name": "Bardic Knowledge", "description": "If the character already has the bardic knowledge ability, his memory smith levels stack with the levels of any other classes that grant him that ability for the purpose of determining the bonus, but only when making checks about weapons, armor, or other items crafted of metal.", "level": 1 },
      { "name": "Bardic Music", "description": "If the character already has the bardic music ability, his memory smith levels stack with the levels of any other classes that grant him that ability for the purpose of determining abilities, duration, and so on.", "level": 1 },
      { "name": "Spell Smith (Ex)", "description": "Each level of memory smith adds new spells to his bard spells known list, cast exactly as a bard casts arcane spells; a spell's level is equal to the class level at which the memory smith gained it. 1st level: endure elements and magic weapon. 2nd level: align weapon and make whole. 3rd level: keen edge and magic vestment. 4th level: divine power and greater magic weapon. 5th level: disrupting weapon and fabricate.", "level": 1 }
    ]
  },
  {
    "id": "battle-howler",
    "name": "Battle Howler of Gruumsh",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/battleHowlerOfGruumsh.html",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 }
    ],
    "classSkills": [
      "Appraise",
      "Balance",
      "Climb",
      "Concentration",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Knowledge (all)",
      "Listen",
      "Perform",
      "Ride",
      "Search",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ],
    "prerequisites": [
      "Alignment: Any chaotic",
      "Skills: Knowledge (religion) 2 ranks, Perform (any) 8 ranks",
      "Feats: Cleave, Power Attack",
      "Deity: Must worship Gruumsh before all other gods"
    ],
    "features": [
      { "name": "Battle Howler Basics", "description": "Key abilities: Strength, Constitution, and Charisma. Weapon and armor proficiencies: all simple and martial weapons, all armors (heavy, medium, and light), and shields (except tower shields). Spellcasting: at each battle howler level, the character gains new bard spells per day (and spells known, if applicable) as if she had also gained a level in the bard class, but gains no other benefit of the bard class." },
      { "name": "Bardic Music", "description": "If the character already has the bardic music ability, her battle howler levels stack with the levels of any other classes that grant her that ability for the purpose of determining abilities, duration, and so on.", "level": 1 },
      { "name": "Rage (Ex)", "description": "The battle howler gains the rage ability, exactly as the barbarian ability of the same name, once per day at 2nd level and twice per day at 5th level. If she already has the rage ability from another class, the daily uses stack.", "level": 2 },
      { "name": "War Cry (Su)", "description": "When the battle howler uses the inspire courage ability of bardic music, it affects all allies within 60 feet, and the morale bonuses it provides are increased by +1.", "level": 3 },
      { "name": "Howling Rage (Ex)", "description": "The battle howler can use the bardic music abilities inspire courage, inspire greatness, and inspire heroics while raging, provided she has access to them.", "level": 4 }
    ]
  },
  {
    "id": "green-whisperer",
    "name": "Green Whisperer",
    "ruleset": "core",
    "source": "Dragon Magazine #311",
    "sourceUrl": "https://srd.dndtools.org/srd/classes/prestigeDramag/greenWhisperer.html",
    "hitDie": "d6",
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
      { "level": 5, "bab": 3, "fort": 4, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Concentration",
      "Craft",
      "Handle Animal",
      "Jump",
      "Knowledge (nature)",
      "Listen",
      "Perform",
      "Ride",
      "Search",
      "Sense Motive",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ],
    "prerequisites": [
      "Alignment: Any neutral",
      "Skills: Knowledge (nature) 8 ranks, Perform 8 ranks, Survival 5 ranks"
    ],
    "features": [
      { "name": "Green Whisperer Basics", "description": "Key abilities: Charisma and Wisdom. Weapon and armor proficiencies: none gained. Spellcasting: at each green whisperer level, the character gains new bard and new druid spells per day (and spells known, if applicable) as if she had also gained a level in both the bard and the druid classes, but gains no other benefit of the druid class." },
      { "name": "Bardic Knowledge", "description": "If the character already has the bardic knowledge ability, his green whisperer levels stack with the levels of any other classes that grant him that ability for the purpose of determining the bonus, but only when making a bardic knowledge check about something involving plants, animals, the elements, or items associated with those topics.", "level": 1 },
      { "name": "Bardic Music", "description": "If the character already has the bardic music ability, his green whisperer levels stack with the levels of any other classes that grant him that ability for the purpose of determining abilities, duration, and so on.", "level": 1 },
      { "name": "Soothe the Savage Beast (Ex)", "description": "Creatures of the animal and magical beast types suffer a -2 penalty on all saves against the green whisperer's fascinate, suggestion, and mass suggestion uses of bardic music.", "level": 3 },
      { "name": "Green Ear (Su)", "description": "The green whisperer's mind-affecting bardic music abilities affect creatures of the plant type.", "level": 5 }
    ]
  }
];

export const DRAGON_311_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
