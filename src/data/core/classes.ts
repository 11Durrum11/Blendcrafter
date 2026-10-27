/**
 * Additional SRD base and NPC classes. Progression rows cover levels 1–10, matching the existing engine data pack.
 */
import type { ClassDefinition } from "@/engine/types";

export const CORE_CLASSES: ClassDefinition[] = [
  {
    "id": "barbarian",
    "name": "Barbarian",
    "ruleset": "core",
    "source": "d20SRD — Classes: Barbarian",
    "sourceUrl": "https://www.d20srd.org/srd/classes/barbarian.htm",
    "hitDie": "d12",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Listen",
      "Ride",
      "Survival",
      "Swim"
    ]
  },
  {
    "id": "bard",
    "name": "Bard",
    "ruleset": "core",
    "source": "d20SRD — Classes: Bard",
    "sourceUrl": "https://www.d20srd.org/srd/classes/bard.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [
      "ref",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 2,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 3,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 3,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 4,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 4,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 5,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 5,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 6,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 6,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 7,
        "will": 7
      }
    ],
    "classSkills": [
      "Appraise",
      "Balance",
      "Bluff",
      "Climb",
      "Concentration",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Hide",
      "Knowledge (all)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Sense Motive",
      "Sleight of Hand",
      "Spellcraft",
      "Swim",
      "Tumble",
      "Use Magic Device"
    ]
  },
  {
    "id": "druid",
    "name": "Druid",
    "ruleset": "core",
    "source": "d20SRD — Classes: Druid",
    "sourceUrl": "https://www.d20srd.org/srd/classes/druid.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 2,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 3,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 3,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 4,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 4,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 5,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 5,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 6,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 6,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 7,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (nature)",
      "Listen",
      "Profession",
      "Ride",
      "Spellcraft",
      "Spot",
      "Survival",
      "Swim"
    ]
  },
  {
    "id": "monk",
    "name": "Monk",
    "ruleset": "core",
    "source": "d20SRD — Classes: Monk",
    "sourceUrl": "https://www.d20srd.org/srd/classes/monk.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "fort",
      "ref",
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 4,
        "ref": 4,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 4,
        "ref": 4,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 5,
        "ref": 5,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 5,
        "ref": 5,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 6,
        "ref": 6,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 6,
        "ref": 6,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 7,
        "ref": 7,
        "will": 7
      }
    ],
    "classSkills": [
      "Balance",
      "Climb",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Escape Artist",
      "Hide",
      "Jump",
      "Knowledge (arcana)",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Sense Motive",
      "Spot",
      "Swim",
      "Tumble"
    ]
  },
  {
    "id": "paladin",
    "name": "Paladin",
    "ruleset": "core",
    "source": "d20SRD — Classes: Paladin",
    "sourceUrl": "https://www.d20srd.org/srd/classes/paladin.htm",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Profession",
      "Ride",
      "Sense Motive"
    ]
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "ruleset": "core",
    "source": "d20SRD — Classes: Ranger",
    "sourceUrl": "https://www.d20srd.org/srd/classes/ranger.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "babProgression": "full",
    "goodSaves": [
      "fort",
      "ref"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 2,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 3,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 3,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 4,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 4,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 5,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 5,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 6,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 6,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 7,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Hide",
      "Jump",
      "Knowledge (dungeoneering)",
      "Knowledge (geography)",
      "Knowledge (nature)",
      "Listen",
      "Move Silently",
      "Profession",
      "Ride",
      "Search",
      "Spot",
      "Survival",
      "Swim",
      "Use Rope"
    ]
  },
  {
    "id": "sorcerer",
    "name": "Sorcerer",
    "ruleset": "core",
    "source": "d20SRD — Classes: Sorcerer",
    "sourceUrl": "https://www.d20srd.org/srd/classes/sorcerer.htm",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Knowledge (arcana)",
      "Profession",
      "Spellcraft"
    ]
  },
  {
    "id": "adept",
    "name": "Adept",
    "ruleset": "core",
    "source": "d20SRD — Classes: Adept",
    "sourceUrl": "https://www.d20srd.org/srd/classes/npcClasses.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Handle Animal",
      "Heal",
      "Knowledge (all)",
      "Profession",
      "Spellcraft",
      "Survival"
    ]
  },
  {
    "id": "aristocrat",
    "name": "Aristocrat",
    "ruleset": "core",
    "source": "d20SRD — Classes: Aristocrat",
    "sourceUrl": "https://www.d20srd.org/srd/classes/npcClasses.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": [
      "will"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 2
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 3
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 3
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 4
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 2,
        "will": 5
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 2,
        "will": 6
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 3,
        "will": 6
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 3,
        "will": 7
      }
    ],
    "classSkills": [
      "Appraise",
      "Bluff",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Handle Animal",
      "Knowledge (all)",
      "Listen",
      "Perform",
      "Profession",
      "Ride",
      "Sense Motive",
      "Speak Language",
      "Spot",
      "Swim"
    ]
  },
  {
    "id": "commoner",
    "name": "Commoner",
    "ruleset": "core",
    "source": "d20SRD — Classes: Commoner",
    "sourceUrl": "https://www.d20srd.org/srd/classes/npcClasses.htm",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 1,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 3,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 4,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 5,
        "fort": 3,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Jump",
      "Listen",
      "Profession",
      "Ride",
      "Spot",
      "Swim",
      "Use Rope"
    ]
  },
  {
    "id": "expert",
    "name": "Expert",
    "ruleset": "core",
    "source": "d20SRD — Classes: Expert",
    "sourceUrl": "https://www.d20srd.org/srd/classes/npcClasses.htm",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "babProgression": "three-quarter",
    "goodSaves": [],
    "progression": [
      {
        "level": 1,
        "bab": 0,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 1,
        "fort": 0,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 2,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 3,
        "fort": 1,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 4,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 5,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 6,
        "fort": 2,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 6,
        "fort": 3,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 7,
        "fort": 3,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Appraise",
      "Craft",
      "Diplomacy",
      "Disable Device",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Knowledge (all)",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
      "Use Magic Device"
    ]
  },
  {
    "id": "warrior",
    "name": "Warrior",
    "ruleset": "core",
    "source": "d20SRD — Classes: Warrior",
    "sourceUrl": "https://www.d20srd.org/srd/classes/npcClasses.htm",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": [
      "fort"
    ],
    "progression": [
      {
        "level": 1,
        "bab": 1,
        "fort": 2,
        "ref": 0,
        "will": 0
      },
      {
        "level": 2,
        "bab": 2,
        "fort": 3,
        "ref": 0,
        "will": 0
      },
      {
        "level": 3,
        "bab": 3,
        "fort": 3,
        "ref": 1,
        "will": 1
      },
      {
        "level": 4,
        "bab": 4,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 5,
        "bab": 5,
        "fort": 4,
        "ref": 1,
        "will": 1
      },
      {
        "level": 6,
        "bab": 6,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 7,
        "bab": 7,
        "fort": 5,
        "ref": 2,
        "will": 2
      },
      {
        "level": 8,
        "bab": 8,
        "fort": 6,
        "ref": 2,
        "will": 2
      },
      {
        "level": 9,
        "bab": 9,
        "fort": 6,
        "ref": 3,
        "will": 3
      },
      {
        "level": 10,
        "bab": 10,
        "fort": 7,
        "ref": 3,
        "will": 3
      }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Handle Animal",
      "Intimidate",
      "Jump",
      "Profession",
      "Ride",
      "Swim"
    ]
  }
];
