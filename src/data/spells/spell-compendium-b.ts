import type { SpellDefinition } from "@/engine/types";

// Spell Compendium spells (ruleset "core"), parsed from Shaun's PDF:
// /A POC PC related/5.Splat/Spell Compendium.pdf (printed page = folio).
// Summaries are original one-line gists; stat lines are the book's own.
export const SPELL_COMPENDIUM_SPELLS_B: SpellDefinition[] = [
  {
    "id": "displacer-form",
    "name": "Displacer Form",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take the form and displacement of a displacer beast, gaining its light-bending miss chance.",
    "source": "Spell Compendium, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "disquietude",
    "name": "Disquietude",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Fills a subject with unease: it takes penalties on saves against fear and on Concentration.",
    "source": "Spell Compendium, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "disrupt-undead-greater",
    "name": "Disrupt Undead, Greater",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray deals 1d8 damage per level (max 10d8) to an undead creature.",
    "source": "Spell Compendium, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dissonant-chant",
    "name": "Dissonant Chant",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "100-foot-radius emanation",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "Yes",
    "summary": "A droning chant disrupts spellcasting nearby: casters take penalties on Concentration checks.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dissonant-chord",
    "name": "Dissonant Chord",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "A blast of discordant sound deals sonic damage and knocks creatures prone.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "distort-speech",
    "name": "Distort Speech",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject's speech becomes garbled: spellcasting with verbal components and communication are disrupted.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "distract",
    "name": "Distract",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject is distracted, taking -4 on attack rolls for 1 round.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "distract-assailant",
    "name": "Distract Assailant",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Assassin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You swat an attacker off guard: it becomes flat-footed until its next turn, enabling sneak attacks.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "distracting-ray",
    "name": "Distracting Ray",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ray distracts the target, penalizing its attacks and exposing it like distract assailant.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "divine-agility",
    "name": "Divine Agility",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "The subject gains a +4 Dexterity bonus and the Spring Attack benefits briefly.",
    "source": "Spell Compendium, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "divine-insight",
    "name": "Divine Insight",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a large insight bonus (+5 plus level, max +15) to a single skill check, discharged when used.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "divine-interdiction",
    "name": "Divine Interdiction",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. +5 ft./2 levels)",
    "targetOrArea": "10-ft.-radius emanation centered on a creature, object, or point in space",
    "duration": "1",
    "savingThrow": "Will negates or None (object); see text",
    "spellResistance": "Yes",
    "summary": "Suppresses a cleric's connection to its deity in an area: divine casters cannot regain or cast spells there.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "divine-protection",
    "name": "Divine Protection",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Allies in a 20-ft.-radius burst",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains a +1 deflection bonus to AC and a +1 resistance bonus on saves, scaling with level.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "divine-sacrifice",
    "name": "Divine Sacrifice",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You sacrifice your own hit points to add sacred damage to your next attack.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dolorous-blow",
    "name": "Dolorous Blow",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "The subject's weapon automatically confirms critical threats and deals extra damage on criticals.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "doomtide",
    "name": "Doomtide",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "80 ft.",
    "targetOrArea": "Eight 10-ft. cubes extending straight from you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Mists of doom fill an area: creatures inside are shadowed, take penalties, and are haunted by illusory doom.",
    "source": "Spell Compendium, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Pattern"
  },
  {
    "id": "downdraft",
    "name": "Downdraft",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (20- ft. radius, 100 ft. high)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "Yes",
    "summary": "A column of rushing air forces flying creatures downward and can drive them to the ground.",
    "source": "Spell Compendium, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "draconic-might",
    "name": "Draconic Might",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains dragonlike power: +4 Strength and Charisma, natural armor, and immunity to sleep and paralysis.",
    "source": "Spell Compendium, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dragon-ally",
    "name": "Dragon Ally",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Dragon": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called dragon of 18 HD or less",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As planar ally, bargaining with a dragon of up to 12 HD to serve you.",
    "source": "Spell Compendium, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling",
    "note": "Abbreviated entry: missing fields follow Lesser Dragon Ally."
  },
  {
    "id": "dragon-ally-greater",
    "name": "Dragon Ally, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called dragon of 22 HD or less",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As dragon ally, but calls a dragon of up to 18 HD.",
    "source": "Spell Compendium, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling",
    "note": "Abbreviated entry: missing fields follow Lesser Dragon Ally."
  },
  {
    "id": "dragon-ally-lesser",
    "name": "Dragon Ally, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/ Wizard": 5
    },
    "components": "V, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called dragon of 15 HD or less",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As dragon ally, but a dragon of up to 6 HD.",
    "source": "Spell Compendium, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "dragon-breath",
    "name": "Dragon Breath",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "GoodorEvil"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a dragon's breath weapon for one breath: a cone or line of energy based on a chosen dragon type.",
    "source": "Spell Compendium, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dragonsight",
    "name": "Dragonsight",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain dragon senses: blindsense, keen sight in darkness, and bonuses to Spot and Search.",
    "source": "Spell Compendium, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dragonskin",
    "name": "Dragonskin",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your skin becomes scaly, granting natural armor and energy resistance based on a chosen dragon color.",
    "source": "Spell Compendium, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dream-casting",
    "name": "Dream Casting",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "Not printed in source",
    "castingTime": "1 hour",
    "range": "Not printed in source",
    "targetOrArea": "You and one dreamer",
    "duration": "24",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Not printed in source",
    "summary": "You send a dream or nightmare carrying a suggestion-like effect to a sleeping creature anywhere.",
    "source": "Spell Compendium, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "dream-sight",
    "name": "Dream Sight",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Dream": 6
    },
    "components": "S, DF",
    "castingTime": "1 round",
    "range": "See text",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You project your senses into the dreams of a sleeping creature, watching what it dreams.",
    "source": "Spell Compendium, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "drown",
    "name": "Drown",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Water fills the subject's lungs: it begins drowning unless it makes Fortitude saves, coughing water out on success.",
    "source": "Spell Compendium, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "drown-mass",
    "name": "Drown, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two of which are more than 30 ft. apart.",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "As drown, affecting multiple creatures.",
    "source": "Spell Compendium, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Drown."
  },
  {
    "id": "duelward",
    "name": "Duelward",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A ward counters the next spell cast at you automatically, as a readied counterspell, once.",
    "source": "Spell Compendium, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earth-lock",
    "name": "Earth Lock",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One 1-foot length of tunnel with a diameter of up to 10 feet",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Locks a passage or opening in earth and stone, sealing it against passage as if solid.",
    "source": "Spell Compendium, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earth-reaver",
    "name": "Earth Reaver",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/ Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "Reflex partial",
    "spellResistance": "Yes",
    "summary": "The ground erupts in a wide area, dealing damage and knocking creatures prone amid exploding earth.",
    "source": "Spell Compendium, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earthbind",
    "name": "Earthbind",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Strips a creature's ability to fly, bringing it gently or forcibly to the ground.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earthen-grace",
    "name": "Earthen Grace",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain damage reduction against physical attacks while standing on earth or stone — in practice, DR 5/- briefly from earthen resilience.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earthen-grasp",
    "name": "Earthen Grasp",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Animated earthen arm",
    "duration": "2",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "An arm of earth rises and grapples a creature, as black tentacles but a single grasping hand of soil.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "earthfast",
    "name": "Earthfast",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One stone structure or rock formation, up to 25 cubic ft./level",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes (object)",
    "summary": "Strengthens a stone or earthen structure, doubling its hardness and hit points.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "easy-climb",
    "name": "Easy Climb",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Vertical path 10 ft. wide and 20 ft. tall/level",
    "duration": "10",
    "savingThrow": "None (object)",
    "spellResistance": "Yes (object)",
    "summary": "The subject climbs at full speed without penalty and gains a bonus on Climb checks.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "easy-trail",
    "name": "Easy Trail",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "40-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You and companions move through wilderness terrain without leaving tracks and ignore undergrowth penalties.",
    "source": "Spell Compendium, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ebon-eyes",
    "name": "Ebon Eyes",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "You can see normally in darkness, even magical darkness, for the duration.",
    "source": "Spell Compendium, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "echo-skull",
    "name": "Echo Skull",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Animal skull touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (object)",
    "summary": "A skull enchanted to record sounds replays everything said near a location, reporting conversations to you.",
    "source": "Spell Compendium, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ectoplasmic-armor",
    "name": "Ectoplasmic Armor",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "Ghostly armor grants an armor bonus that applies against incorporeal touch attacks.",
    "source": "Spell Compendium, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ectoplasmic-feedback",
    "name": "Ectoplasmic Feedback",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "See text",
    "summary": "When an incorporeal creature strikes you, ectoplasmic backlash damages it.",
    "source": "Spell Compendium, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "effulgent-epuration",
    "name": "Effulgent Epuration",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One magic-absorbing sphere per caster level",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A cascade of lights cures the subject of every ongoing spell effect, condition, and affliction one by one each round.",
    "source": "Spell Compendium, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "electric-jolt",
    "name": "Electric Jolt",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A small jolt deals 1d3 electricity damage on a ranged touch.",
    "source": "Spell Compendium, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "electric-loop",
    "name": "Electric Loop",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/3 levels, each of which is adjacent to another target",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "Yes",
    "summary": "Lightning loops between you and the target and nearby creatures, dealing electricity damage and possibly stunning.",
    "source": "Spell Compendium, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "elemental-body",
    "name": "Elemental Body",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take the form of an elemental (any type), gaining its traits, immunities, and movement modes.",
    "source": "Spell Compendium, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "embrace-the-wild",
    "name": "Embrace The Wild",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain an animal's senses: low-light vision, scent, and bonuses to Listen and Spot.",
    "source": "Spell Compendium, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "emerald-flame-fist",
    "name": "Emerald Flame Fist",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or object touched",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "Your fist becomes emerald flame; your unarmed strikes deal heavy fire damage and can blast a target once.",
    "source": "Spell Compendium, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energized-shield",
    "name": "Energized Shield",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "seetextforlesserenergizedshield"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Shield touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A shield gains resistance to a chosen energy type and splashes that energy on bash attacks.",
    "source": "Spell Compendium, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Energized Shield."
  },
  {
    "id": "energized-shield-lesser",
    "name": "Energized Shield, Lesser",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 2,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Shield touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As energized shield, but a smaller energy resistance.",
    "source": "Spell Compendium, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energy-ebb",
    "name": "Energy Ebb",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "The subject loses energy protection and takes energy damage over time as its resistances ebb away.",
    "source": "Spell Compendium, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energy-immunity",
    "name": "Energy Immunity",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject becomes completely immune to one chosen energy type for a day.",
    "source": "Spell Compendium, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energy-spheres",
    "name": "Energy Spheres",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Acid",
      "Cold",
      "Electricity",
      "Fire",
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Five floating spheres",
    "duration": "1",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "Yes; see text",
    "summary": "Orbs of each energy type orbit you; you can hurl one each round as a ranged touch attack.",
    "source": "Spell Compendium, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energy-transformation-field",
    "name": "Energy Transformation Field",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M, XP",
    "castingTime": "4 rounds",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "40-ft.-radius spread",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "An area converts all spell energy cast within it into a stored spell effect of your choosing that triggers repeatedly.",
    "source": "Spell Compendium, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "energy-vortex",
    "name": "Energy Vortex",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "All creatures within a 20-ft.- radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Choose an energy type: a vortex of it damages creatures nearby and empowers matching spells cast near it.",
    "source": "Spell Compendium, p. 81",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enervating-breath",
    "name": "Enervating Breath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next breath weapon also bestows negative levels on creatures caught in it.",
    "source": "Spell Compendium, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enhance-familiar",
    "name": "Enhance Familiar",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Familiar touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Your familiar gains evolutions: better natural armor, spell resistance, and energy resistance while close to you.",
    "source": "Spell Compendium, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enhance-wild-shape",
    "name": "Enhance Wild Shape",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "While wild shaped you gain the extraordinary qualities of the form and can use its supernatural abilities once.",
    "source": "Spell Compendium, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enlarge-person-greater",
    "name": "Enlarge Person, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "One humanoid creature",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As enlarge person, but works on any creature type and can grow the subject up to two size categories.",
    "source": "Spell Compendium, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enrage-animal",
    "name": "Enrage Animal",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One animal",
    "duration": "Concentration +1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "An animal flies into a rage, gaining Strength and Constitution but attacking the nearest creature.",
    "source": "Spell Compendium, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "entangling-staff",
    "name": "Entangling Staff",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Quarterstaff touched",
    "duration": "1",
    "savingThrow": "Yes (harmless, object)",
    "spellResistance": "Yes (harmless)",
    "summary": "A staff you hold can entangle creatures it strikes, rooting them in place.",
    "source": "Spell Compendium, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "entice-gift",
    "name": "Entice Gift",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Greed": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Compels the subject to hand you whatever it is holding.",
    "source": "Spell Compendium, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "enveloping-cocoon",
    "name": "Enveloping Cocoon",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cocoon of force around one Large or smaller creature",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "A cocoon of energy encases the subject, protecting it from harm but preventing action — used to preserve a dying ally.",
    "source": "Spell Compendium, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "eradicate-earth",
    "name": "Eradicate Earth",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "40-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "Destroys earth creatures and damages constructs of earth and stone in an area.",
    "source": "Spell Compendium, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "essence-of-the-raptor",
    "name": "Essence Of The Raptor",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a raptor's speed, senses, and talons: bonuses to movement, Spot, and natural attacks.",
    "source": "Spell Compendium, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ethereal-breath",
    "name": "Ethereal Breath",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your breath weapon becomes ethereal, affecting creatures on both the Ethereal and Material planes.",
    "source": "Spell Compendium, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ethereal-chamber",
    "name": "Ethereal Chamber",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One ethereal creature",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "Creates a small sealed ethereal room that blocks ethereal travel and traps ethereal creatures.",
    "source": "Spell Compendium, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ethereal-mount",
    "name": "Ethereal Mount",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "0 ft.",
    "targetOrArea": "One quasi-real mount, plus one additional mount/2 levels Your spell draws ether into form, creating a misty mount for you to ride.",
    "duration": "1 hour/level (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As mount/phantom steed: conjures a quasi-real horse that can become ethereal with its rider.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "evil-glare",
    "name": "Evil Glare",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil",
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "30 feet",
    "targetOrArea": "Living creatures",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your baleful gaze paralyzes good creatures with fear when they meet your eyes.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "exacting-shot",
    "name": "Exacting Shot",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Ranged weapon touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Your ranged attacks ignore concealment (short of total) and cover bonuses of targets for the duration.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "excavate",
    "name": "Excavate",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One 5-ft.-by-5-ft. opening, 1 ft./level deep",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You blast out a tunnel or pit in earth and stone, excavating a large volume instantly.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "expeditious-retreat-swift",
    "name": "Expeditious Retreat, Swift",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As expeditious retreat, cast as a swift action but lasting only 1 round.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "explosive-cascade",
    "name": "Explosive Cascade",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One 5-ft. square/level, all of which must be connected in one continuous path (S)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A bead of force ricochets among targets, exploding repeatedly for force damage.",
    "source": "Spell Compendium, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "extend-tentacles",
    "name": "Extend Tentacles",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Tentacles you possess grow longer, gaining reach for grapples and attacks.",
    "source": "Spell Compendium, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "extract-water-elemental",
    "name": "Extract Water Elemental",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "You rip the water from a creature's body, dealing massive damage and forming a water elemental from it.",
    "source": "Spell Compendium, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "eye-of-the-hurricane",
    "name": "Eye Of The Hurricane",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "40 ft.",
    "targetOrArea": "40-ft.-radius emanation centered on you, with 10-ft.-radius quiet area centered on you",
    "duration": "1",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates a calm, protected zone at the center of stormy weather where you can shelter.",
    "source": "Spell Compendium, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "eye-of-power",
    "name": "Eye Of Power",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Unlimited",
    "targetOrArea": "Magical sensor",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an invisible sensor through which you can also cast spells of limited level.",
    "source": "Spell Compendium, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Scrying"
  },
  {
    "id": "eyes-of-the-king",
    "name": "Eyes Of The King",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Hunger": 6
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Unlimited",
    "targetOrArea": "Magical sensor",
    "duration": "Concentration + 5 rounds, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You summon swarming creatures whose eyes you see through, spying over an area.",
    "source": "Spell Compendium, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "faith-healing",
    "name": "Faith Healing",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Heals a small amount of damage, but much more if the subject shares your faith and alignment.",
    "source": "Spell Compendium, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "false-gravity",
    "name": "False Gravity",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You reverse gravity for one creature, causing it to 'fall' upward or toward a surface you choose.",
    "source": "Spell Compendium, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "familiar-pocket",
    "name": "Familiar Pocket",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One container or garment with a pocket touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an extradimensional pocket where your familiar can rest safely and breathe.",
    "source": "Spell Compendium, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fangs-of-the-vampire-king",
    "name": "Fangs Of The Vampire King",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Assassin": 3,
      "Blackguard": 3,
      "Deathbound": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a vampire's bite: a natural attack that deals damage and drains blood for Constitution damage.",
    "source": "Spell Compendium, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fantastic-machine",
    "name": "Fantastic Machine",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Creation"
    ],
    "levels": {
      "Craft": 6,
      "Gnome": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A 10-ft. machine",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Conjures a fantastic gnomish machine (a construct of gears) that serves and fights for you.",
    "source": "Spell Compendium, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fantastic-machine-greater",
    "name": "Fantastic Machine, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Creation"
    ],
    "levels": {
      "Craft": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A 10-ft. machine",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As fantastic machine, but a far larger and stronger construct.",
    "source": "Spell Compendium, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Fantastic Machine."
  },
  {
    "id": "favor-of-the-martyr",
    "name": "Favor Of The Martyr",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Paladin": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One willing creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "You absorb the subject's suffering: conditions and damage transfer to you while the subject fights on, and you gain protective bonuses.",
    "source": "Spell Compendium, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "favorable-sacrifice",
    "name": "Favorable Sacrifice",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "By sacrificing material wealth at casting, you gain damage reduction and energy resistances for a day.",
    "source": "Spell Compendium, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fearsome-grapple",
    "name": "Fearsome Grapple",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Spectral arms help you grapple: you gain a size-like bonus on grapple checks and constricting damage.",
    "source": "Spell Compendium, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fell-the-greatest-foe",
    "name": "Fell The Greatest Foe",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 2,
      "Cleric": 3,
      "Paladin": 2,
      "Ranger": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your weapon deals extra damage against the largest and strongest enemies, scaling against bigger foes.",
    "source": "Spell Compendium, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "field-of-ghouls",
    "name": "Field Of Ghouls",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Hunger": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "An area becomes haunted: corpses buried there rise as ghouls under no one's control.",
    "source": "Spell Compendium, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "field-of-icy-razors",
    "name": "Field Of Icy Razors",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two of which are more than 60 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Reflex partial",
    "spellResistance": "Yes",
    "summary": "The ground sprouts razors of ice that shred creatures moving through the area.",
    "source": "Spell Compendium, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fiendform",
    "name": "Fiendform",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You assume the form of a fiendish creature or devil/demon type, gaining its physical abilities.",
    "source": "Spell Compendium, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fierce-pride-of-the-beastlands",
    "name": "Fierce Pride Of The Beastlands",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Chaotic",
      "Good"
    ],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls powerful celestial animals of the Beastlands to fight for you.",
    "source": "Spell Compendium, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "find-the-gap",
    "name": "Find The Gap",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 3,
      "Paladin": 3,
      "Ranger": 3
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your attacks find the chinks: your first attack each round ignores armor and natural armor bonuses (touch-like).",
    "source": "Spell Compendium, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "find-temple",
    "name": "Find Temple",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "10 miles + 1 mile/level",
    "targetOrArea": "Circle centered on you, with a radius of 10 miles + 1 mile/level",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You learn the direction and distance to the nearest temple or shrine of your deity.",
    "source": "Spell Compendium, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fins-to-feet",
    "name": "Fins To Feet",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Transforms a creature's fins or tail into legs so it can walk on land.",
    "source": "Spell Compendium, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fire-shield-mass",
    "name": "Fire Shield, Mass",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "FireorCold"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more allied creatures, no 92 two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As fire shield (warm or chill), for one creature per level.",
    "source": "Spell Compendium, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fire-shuriken",
    "name": "Fire Shuriken",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Assassin": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "One magic shuriken/3 levels",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Creates shuriken of fire that you throw for fire damage, several at a time.",
    "source": "Spell Compendium, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fire-spiders",
    "name": "Fire Spiders",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Fiery spiders that cover a 10-ft.-radius spread",
    "duration": "1",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Tiny spiders of living flame swarm from your hands, biting creatures for fire damage and igniting them.",
    "source": "Spell Compendium, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "fire-stride",
    "name": "Fire Stride",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Teleportation"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You step into one fire and out of another within range, teleporting between flames.",
    "source": "Spell Compendium, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fire-wings",
    "name": "Fire Wings",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M, F",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Wings of flame give you a fly speed and shed burning sparks on creatures below.",
    "source": "Spell Compendium, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "firebrand",
    "name": "Firebrand",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 5-ft.-radius burst/level (S)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Flames burst from points you designate: multiple small fire bursts damage creatures and ignite objects.",
    "source": "Spell Compendium, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fireburst",
    "name": "Fireburst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "Burst of fire extending 10 ft. from you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A small burst of flame around you deals fire damage to adjacent creatures.",
    "source": "Spell Compendium, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fireburst-greater",
    "name": "Fireburst, Greater",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "Burst of fire extending 15 ft. from you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "As fireburst, but a much larger explosion centered on you or a chosen point.",
    "source": "Spell Compendium, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Fireburst."
  },
  {
    "id": "fires-of-purity",
    "name": "Fires Of Purity",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 6,
      "Purification": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes (harmless); see text",
    "summary": "The subject is wreathed in purifying flame: fire resistance, light, and its weapons deal extra fire damage to evil and undead.",
    "source": "Spell Compendium, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fireward",
    "name": "Fireward",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) 94",
    "targetOrArea": "One 20-ft. cube/level (S)",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creatures you designate within an area become immune to a specific fire source or fire spell effect.",
    "source": "Spell Compendium, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fist-of-stone",
    "name": "Fist Of Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your arm becomes stone: a slam attack and a +6 Strength bonus for that arm's use.",
    "source": "Spell Compendium, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flame-dagger",
    "name": "Flame Dagger",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "A daggerlike beam",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A dagger of flame in your hand deals fire damage on touch attacks and can be thrown and re-formed.",
    "source": "Spell Compendium, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flame-of-faith",
    "name": "Flame Of Faith",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Nonmagical weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your weapon bursts into sacred flame, dealing extra fire damage and counting as good-aligned.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flame-whips",
    "name": "Flame Whips",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Flaming whips",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Whips of fire extend from your hands with reach, dealing fire damage and entangling foes.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flashburst",
    "name": "Flashburst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous; see text",
    "savingThrow": "Will partial; see text",
    "spellResistance": "Yes",
    "summary": "A blinding flash deals minor fire damage and blinds or dazzles creatures in a wide area.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flensing",
    "name": "Flensing",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corporeal creature",
    "duration": "4 rounds",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "The subject's skin is magically stripped away, dealing damage and Charisma damage plus horrific penalties.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fleshshiver",
    "name": "Fleshshiver",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "The subject's flesh ripples violently: it is stunned, then takes damage as its body convulses.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "flight-of-the-dragon",
    "name": "Flight Of The Dragon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain dragon wings and a strong fly speed for the duration.",
    "source": "Spell Compendium, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "floating-disk-greater",
    "name": "Floating Disk, Greater",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "3-ft.-diameter disk of force",
    "duration": "1",
    "savingThrow": "Illus. by R. Horsley None",
    "spellResistance": "No",
    "summary": "As floating disk, but larger, faster, and able to carry much more weight and follow at height.",
    "source": "Spell Compendium, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fly-mass",
    "name": "Fly, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart As your gestures point out which creatures receive the benefits of your spell, they seem lighter",
    "duration": "1 minute/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As fly, for one creature per level.",
    "source": "Spell Compendium, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fly-swift",
    "name": "Fly, Swift",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Druid": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As fly, cast as a swift action but lasting only 1 round.",
    "source": "Spell Compendium, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "focusing-chant",
    "name": "Focusing Chant",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 minute (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your chanting grants you a +1 competence bonus on skill checks and Concentration while you maintain it.",
    "source": "Spell Compendium, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "foebane",
    "name": "Foebane",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Your weapon becomes a bane weapon against your favored enemy, dealing extra damage and gaining enhancement against it.",
    "source": "Spell Compendium, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "force-chest",
    "name": "Force Chest",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Box of force 2 ft. on a side",
    "duration": "24",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A chest of force stores items in an extradimensional space only you can open.",
    "source": "Spell Compendium, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "force-claw",
    "name": "Force Claw",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Invisible claw of force",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A claw of force grapples and squeezes a target, holding it fast.",
    "source": "Spell Compendium, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "force-ladder",
    "name": "Force Ladder",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One ladder of force up to 60 ft. long",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a ladder of force rungs that you and others can climb, fixed in place.",
    "source": "Spell Compendium, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "force-missiles",
    "name": "Force Missiles",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to four creatures, no two of which are more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Missiles of force strike targets unerringly, each dealing force damage, one per few levels.",
    "source": "Spell Compendium, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "forceward",
    "name": "Forceward",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "15 ft.",
    "targetOrArea": "15-ft.-radius sphere centered on you",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "A ward of force blocks incoming force effects and magic missiles and hedges out incorporeal creatures.",
    "source": "Spell Compendium, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "forcewave",
    "name": "Forcewave",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 swift action",
    "range": "10 ft.",
    "targetOrArea": "10-ft. burst of force centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A wave of force bull rushes creatures in a line, knocking them back and prone.",
    "source": "Spell Compendium, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "forestfold",
    "name": "Forestfold",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You blend into the forest, gaining camouflage and bonuses to Hide while among trees, and can step between trees.",
    "source": "Spell Compendium, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fortify-familiar",
    "name": "Fortify Familiar",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Familiar touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Your familiar gains temporary hit points and damage reduction while near you, tougher against harm.",
    "source": "Spell Compendium, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fortunate-fate",
    "name": "Fortunate Fate",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10",
    "savingThrow": "None (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Contingency-like protection: when the subject would be killed, a heal spell triggers automatically to save it.",
    "source": "Spell Compendium, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "foundation-of-stone",
    "name": "Foundation Of Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "While standing on earth or stone and not moving, you gain +1 AC and +2 on saves and stability checks, like a dwarf's stance.",
    "source": "Spell Compendium, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "freeze",
    "name": "Freeze",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "Yes",
    "summary": "Freezes a body of water solid over a large area, trapping creatures in the ice.",
    "source": "Spell Compendium, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "freezing-fog",
    "name": "Freezing Fog",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/ Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spreads in a 20-ft. radius, 20 ft. high",
    "duration": "1",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "As solid fog, but the fog is freezing: creatures inside take cold damage and move on slick ice.",
    "source": "Spell Compendium, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "frost-breath",
    "name": "Frost Breath",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A cone of cold deals 1d4 cold damage per level (max 5d4) and can daze.",
    "source": "Spell Compendium, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fugue",
    "name": "Fugue",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "30-ft.-radius spread",
    "duration": "Concentration, up to 1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Chaotic music envelops the area: creatures must save each round or act randomly, dance, or fall prone as the fugue directs.",
    "source": "Spell Compendium, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "fuse-arms",
    "name": "Fuse Arms",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature with at least two arms or tentacles touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Two of your arms fuse together, granting a large Strength bonus with the merged limbs.",
    "source": "Spell Compendium, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "gelsewhere-chant",
    "name": "G’Elsewhere Chant",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Sonic",
      "Teleportation"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature or object touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A chant teleports an unwilling creature a short distance to a spot you designate.",
    "source": "Spell Compendium, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "gembomb",
    "name": "Gembomb",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Gnome": 2,
      "Trade": 2
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "Gem touched",
    "duration": "10",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A gem becomes a bomb: thrown or triggered, it explodes for energy damage of a type tied to the gem.",
    "source": "Spell Compendium, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "gemjump",
    "name": "Gemjump",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Teleportation"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 round",
    "range": "Unlimited; see text",
    "targetOrArea": "You and willing creatures totaling up to one/3 levels; see text",
    "duration": "Until",
    "savingThrow": "None; see text",
    "spellResistance": "No; see text",
    "summary": "You teleport into a prepared gem, then emerge from it later, traveling with the gem's carrier.",
    "source": "Spell Compendium, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "general-of-undeath",
    "name": "General Of Undeath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "24 hours",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You massively increase the number of undead you can control, adding to your HD control limit.",
    "source": "Spell Compendium, p. 102",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghost-touch-armor",
    "name": "Ghost Touch Armor",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Armor of creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Armor gains the ghost touch property, counting fully against incorporeal attacks.",
    "source": "Spell Compendium, p. 102",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghost-touch-weapon",
    "name": "Ghost Touch Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One weapon or fifty projectiles (all of which must be in contact with each other at the time of casting)",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "A weapon gains the ghost touch property, striking incorporeal creatures normally.",
    "source": "Spell Compendium, p. 102",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghost-trap",
    "name": "Ghost Trap",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "5 ft./level",
    "targetOrArea": "5 ft./level-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A warded area forces incorporeal creatures to manifest corporeally, trapping them in solid form.",
    "source": "Spell Compendium, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghostform",
    "name": "Ghostform",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You become incorporeal, gaining all incorporeal traits while your gear stays behind or merges.",
    "source": "Spell Compendium, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghostharp",
    "name": "Ghostharp",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 0
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "5",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A musical instrument plays itself, repeating a performance or playing background music on command.",
    "source": "Spell Compendium, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghoul-gauntlet",
    "name": "Ghoul Gauntlet",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Hunger": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One living humanoid creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your hand becomes a ghoul's claw: touch attacks paralyze victims as a ghoul's touch.",
    "source": "Spell Compendium, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghoul-gesture",
    "name": "Ghoul Gesture",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Hunger": 3
    },
    "components": "V, S, M , heal ,",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A gesture paralyzes a creature briefly as the ghoul's paralysis.",
    "source": "Spell Compendium, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghoul-glyph",
    "name": "Ghoul Glyph",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Hunger": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "Permanent until discharged",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A ward glyph paralyzes intruders like a ghoul's touch when triggered.",
    "source": "Spell Compendium, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ghoul-light",
    "name": "Ghoul Light",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Hunger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Magical, heatless flame",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a sickly light carried by undead, dimming living creatures' vigor nearby.",
    "source": "Spell Compendium, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "giants-wrath",
    "name": "Giant’S Wrath",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "One pebble/ 3 levels",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You hurl boulders with giant-like strength, dealing heavy damage with thrown rocks.",
    "source": "Spell Compendium, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "girallons-blessing",
    "name": "Girallon’S Blessing",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject grows two extra arms ending in claws, like a girallon, usable for attacks.",
    "source": "Spell Compendium, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "glass-strike",
    "name": "Glass Strike",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or 4 cubic ft. of material",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "As flesh to stone, but the subject becomes glass: brittle, transparent, and vulnerable to shattering.",
    "source": "Spell Compendium, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "glowing-orb",
    "name": "Glowing Orb",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Magical, controllable light source",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates an orb of light you can move, brightening or dimming on command and blinding if focused.",
    "source": "Spell Compendium, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "golden-barding",
    "name": "Golden Barding",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Paladin": 1
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Special mount touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Magical golden barding armors your mount with a strong armor bonus.",
    "source": "Spell Compendium, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "golem-strike",
    "name": "Golem Strike",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "For one round you can strike constructs as if you had construct bane precision: your attacks can critically hit and sneak attack golems.",
    "source": "Spell Compendium, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "grace",
    "name": "Grace",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 3
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "The subject gains a +2 Dexterity bonus and moves gracefully, ignoring some difficult terrain and gaining tumbling benefits.",
    "source": "Spell Compendium, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "grave-strike",
    "name": "Grave Strike",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, DF",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "For one round you can sneak attack undead as if they were living.",
    "source": "Spell Compendium, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "graymantle",
    "name": "Graymantle",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A gray shroud prevents the subject from recovering hit points by any healing until removed.",
    "source": "Spell Compendium, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "great-thunderclap",
    "name": "Great Thunderclap",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "A tremendous clap deafens, stuns, or knocks prone creatures in the area (multiple saves).",
    "source": "Spell Compendium, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "guided-shot",
    "name": "Guided Shot",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Ranger": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next ranged attack ignores range increments, cover, and concealment penalties.",
    "source": "Spell Compendium, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "guiding-light",
    "name": "Guiding Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level) 108",
    "targetOrArea": "Creatures in a 5-ft.-radius burst",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A beam of light marks a target, granting allies bonuses to hit it and illuminating it clearly.",
    "source": "Spell Compendium, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "gutsnake",
    "name": "Gutsnake",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A snake formed from the target's own innards bursts forth... in practice, the spell animates a serpent from within that attacks the host each round.",
    "source": "Spell Compendium, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hail-of-stone",
    "name": "Hail Of Stone",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cylinder (5-ft. radius, 40 ft. high)",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Stones rain on a small area dealing bludgeoning damage to creatures and objects.",
    "source": "Spell Compendium, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "hailstones",
    "name": "Hailstones",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One frigid globe/5 levels",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Hailstones pelt an area dealing cold and bludgeoning damage.",
    "source": "Spell Compendium, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hamatula-barbs",
    "name": "Hamatula Barbs",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Barbs like a barbed devil's grow from your skin: grapplers take damage and your natural attacks worsen wounds.",
    "source": "Spell Compendium, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hand-of-divinity",
    "name": "Hand Of Divinity",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Blackguard": 2,
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A divine hand grants the subject a +2 sacred (or profane) bonus on saving throws.",
    "source": "Spell Compendium, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hand-of-the-faithful",
    "name": "Hand Of The Faithful",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 4,
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 minute",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A spectral hand blocks a doorway, preventing those of other faiths from passing.",
    "source": "Spell Compendium, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hardening",
    "name": "Hardening",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One item of a volume no greater than 10 cu. ft./level; see text",
    "duration": "Permanent",
    "savingThrow": "None",
    "spellResistance": "Yes (object)",
    "summary": "Increases an item's hardness permanently by a small amount.",
    "source": "Spell Compendium, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "harmonic-chorus",
    "name": "Harmonic Chorus",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Concentration, up to 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes",
    "summary": "Your voice harmonizes with itself, doubling the effect range and power of your bardic music or sonic spells briefly.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "haste-swift",
    "name": "Haste, Swift",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 2
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1d4 rounds",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As haste on yourself only, cast as a swift action for 1 round.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "haunting-tune",
    "name": "Haunting Tune",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S 110",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A haunting melody shakes and frightens listeners, imposing fear penalties.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "hawkeye",
    "name": "Hawkeye",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a +5 bonus on Spot checks and increase your ranged attack increments by half.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heal-animal-companion",
    "name": "Heal Animal Companion",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Your animal companion touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As heal, but only for your animal companion.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "healing-lorecall",
    "name": "Healing Lorecall",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Ranger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You learn the subject's conditions precisely and can remove minor conditions (dazed, sickened, etc.) when you cast healing on it.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "healing-sting",
    "name": "Healing Sting",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and one living creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your sting-like touch drains health from a creature and heals you for the same amount.",
    "source": "Spell Compendium, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "healing-touch",
    "name": "Healing Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half; see text",
    "spellResistance": "Yes (harmless)",
    "summary": "You transfer your own hit points to heal a touched creature, losing what it gains.",
    "source": "Spell Compendium, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "healthful-rest",
    "name": "Healthful Rest",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "24 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Rest heals double: subjects regain hit points and ability damage at twice the normal rate for a day.",
    "source": "Spell Compendium, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "heart-of-stone",
    "name": "Heart Of Stone",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F, XP",
    "castingTime": "1 hour",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your heart of stone must be destroyed to kill you; you gain protection from death effects while the stone heart endures — in practice, a stone heart replaces yours, granting immunity to many effects until it is destroyed.",
    "source": "Spell Compendium, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heart-ripper",
    "name": "Heart Ripper",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Assassin": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You attempt to rip out the victim's heart: death on a failed save, heavy damage otherwise.",
    "source": "Spell Compendium, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heartfire",
    "name": "Heartfire",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light",
      "Fire"
    ],
    "levels": {
      "Bard": 2,
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Living creatures within a 5-ft.- radius burst",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "Inner fire outlines creatures in the area, revealing them and dealing minor fire damage to evil beings.",
    "source": "Spell Compendium, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heat-drain",
    "name": "Heat Drain",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates ,",
    "spellResistance": "Yes",
    "summary": "You drain the heat from a wide area, dealing cold damage and slowing creatures as warmth leaves them.",
    "source": "Spell Compendium, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heatstroke",
    "name": "Heatstroke",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "The subject suffers heatstroke: exhaustion effects and nonlethal damage from oppressive inner heat.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "heavenly-host",
    "name": "Heavenly Host",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Good",
      "Lawful"
    ],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls an army of celestial archons and angels to fight for you over several rounds.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "hellish-horde",
    "name": "Hellish Horde",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil",
      "Lawful"
    ],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls an army of devils and hellish creatures to fight for you over several rounds.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "heralds-call",
    "name": "Herald’S Call",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "20 ft.",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your call compels nearby creatures to approach slowly and listen, fascinated, if they fail their saves.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "heroics",
    "name": "Heroics",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You gain the benefit of one fighter bonus feat of your choice for the duration.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hidden-lodge",
    "name": "Hidden Lodge",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F; see text",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-square structure",
    "duration": "24 hours",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As secure shelter, but a camouflaged, hard-to-find lodge that blends into the wilderness.",
    "source": "Spell Compendium, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "hide-from-dragons",
    "name": "Hide From Dragons",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Assassin": 4,
      "Bard": 5,
      "Sorcerer/ Wizard": 7
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature touched/ 2 levels",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and companions become imperceptible to dragons' senses, including blindsense and scent.",
    "source": "Spell Compendium, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hide-the-path",
    "name": "Hide The Path",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Anywhere in the area to be warded",
    "targetOrArea": "Up to 200 sq. ft./level (S)",
    "duration": "24 hours (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Obscures a trail or path so completely that trackers and divination cannot follow it.",
    "source": "Spell Compendium, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hindsight",
    "name": "Hindsight",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 hour",
    "range": "60 ft.",
    "targetOrArea": "60-ft.-radius emanation centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You view events of a location's past, seeing further back with concentration, up to years.",
    "source": "Spell Compendium, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hiss-of-sleep",
    "name": "Hiss Of Sleep",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A serpent-like hiss puts creatures into deep sleep, affecting high-HD creatures as a powerful sleep spell.",
    "source": "Spell Compendium, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "holy-mount",
    "name": "Holy Mount",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Your special mount",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Your mount gains celestial vigor: speed, armor, and resistance bonuses and a good alignment aura.",
    "source": "Spell Compendium, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "holy-spurs",
    "name": "Holy Spurs",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V The holy mount spell bolsters a paladin's special mount with many useful resistances",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Your special mount",
    "duration": "1 round",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your spurs bless your mount, increasing its speed and granting you ride bonuses.",
    "source": "Spell Compendium, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "holy-star",
    "name": "Holy Star",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Protective star of energy",
    "duration": "3 rounds (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A star of divine energy orbits you, granting protection and firing rays of holy power on command.",
    "source": "Spell Compendium, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "holy-storm",
    "name": "Holy Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Good",
      "Water"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 3
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "Cylinder (20-ft. radius, 20 ft. high)",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A storm of holy water rains down, damaging evil creatures and evil outsiders heavily in the area.",
    "source": "Spell Compendium, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "holy-transformation",
    "name": "Holy Transformation",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You transform into a celestial being: wings, ability boosts, natural armor, and outsider traits.",
    "source": "Spell Compendium, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Holy Transformation."
  },
  {
    "id": "holy-transformation-lesser",
    "name": "Holy Transformation, Lesser",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A partial celestial transformation: modest ability boosts, wings, and minor resistances.",
    "source": "Spell Compendium, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Holy Transformation."
  },
  {
    "id": "horrible-taste",
    "name": "Horrible Taste",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature or object touched",
    "duration": "10",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "No",
    "summary": "The subject tastes utterly foul: creatures biting or swallowing it must save or become nauseated and spit it out.",
    "source": "Spell Compendium, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "howling-chain",
    "name": "Howling Chain",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One chain of force",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A chain of force attacks and trips enemies on its own, howling as it strikes multiple foes.",
    "source": "Spell Compendium, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hungry-gizzard",
    "name": "Hungry Gizzard",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One Medium or smaller creature",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "A conjured gizzard swallows creatures whole into an extradimensional stomach where they take acid damage.",
    "source": "Spell Compendium, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "hunters-of-hades",
    "name": "Hunters Of Hades",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 9
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two summoned pack fiends, which can be no more than 30 ft. apart, or one retriever",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons the hunters of Hades — spectral hounds and riders — to hunt a named quarry to the death.",
    "source": "Spell Compendium, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "hunters-mercy",
    "name": "Hunter’S Mercy",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next ranged attack on a studied target is an automatic critical threat if it hits.",
    "source": "Spell Compendium, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hurl",
    "name": "Hurl",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You telekinetically hurl an object or creature with great force against a target.",
    "source": "Spell Compendium, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hymn-of-praise",
    "name": "Hymn Of Praise",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good",
      "Sonic"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "50 ft.",
    "targetOrArea": "50-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your hymn boosts good spellcasters: divine casters nearby gain +1 caster level for good spells.",
    "source": "Spell Compendium, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "hypothermia",
    "name": "Hypothermia",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 4,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "The subject's body temperature crashes: cold damage and exhaustion as it freezes from within.",
    "source": "Spell Compendium, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-axe",
    "name": "Ice Axe",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Battleaxe-shaped weapon of swirling ice",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "An axe of ice forms in your hand, dealing cold damage on melee touch attacks.",
    "source": "Spell Compendium, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-claw",
    "name": "Ice Claw",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft. ice claw ice",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A claw of ice rakes and grapples a creature at range, dealing cold damage and dragging it.",
    "source": "Spell Compendium, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-dagger",
    "name": "Ice Dagger",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Dagger of ice",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A dagger of ice deals cold damage in melee or as a thrown weapon that shatters.",
    "source": "Spell Compendium, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-flowers",
    "name": "Ice Flowers",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 6,
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "The ground blooms with ice flowers that deal cold damage and entangle creatures moving through.",
    "source": "Spell Compendium, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-gauntlet",
    "name": "Ice Gauntlet",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your gauntlet of ice deals cold damage on unarmed strikes and can freeze small amounts of water.",
    "source": "Spell Compendium, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ice-knife",
    "name": "Ice Knife",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Assassin": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One icy missile",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial or Reflex half; see text",
    "spellResistance": "Yes",
    "summary": "A knife of ice flies at the target dealing cold damage and explodes into freezing shards over an area.",
    "source": "Spell Compendium, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "icelance",
    "name": "Icelance",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One lance of ice",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A lance of ice deals piercing and cold damage and can stun the struck creature.",
    "source": "Spell Compendium, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "illusory-feast",
    "name": "Illusory Feast",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "40-ft.-radius spread",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "An illusory banquet so real that creatures waste time eating it, becoming distracted and mildly nourished-feeling.",
    "source": "Spell Compendium, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Pattern"
  },
  {
    "id": "illusory-pit",
    "name": "Illusory Pit",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft. cube/level",
    "duration": "Concentration + 1",
    "savingThrow": "Will disbelief",
    "spellResistance": "No",
    "summary": "Creates the illusion of a deep pit in the floor; creatures that believe it cower at its edge or 'fall' in their minds.",
    "source": "Spell Compendium, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "imbue-familiar-with-spell-ability",
    "name": "Imbue Familiar With Spell Ability",
    "ruleset": "core",
    "school": "Universal",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Familiar touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You transfer spells to your familiar, which can cast them as if it were you.",
    "source": "Spell Compendium, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "imperious-glare",
    "name": "Imperious Glare",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Your glare cows creatures: those meeting your gaze are paralyzed with fear on failed saves.",
    "source": "Spell Compendium, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "implacable-pursuer",
    "name": "Implacable Pursuer",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 4,
      "Blackguard": 4,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Long (400 ft. + 40 ft./level); see text",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You unerringly track a creature you have wounded, sensing its direction and distance wherever it flees.",
    "source": "Spell Compendium, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "improvisation",
    "name": "Improvisation",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a pool of luck points to add as bonuses to attacks, checks, and saves over the duration.",
    "source": "Spell Compendium, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "incite",
    "name": "Incite",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Creatures in a 10-ft. burst",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Provokes the subject into attacking you or a designated target, enraging it.",
    "source": "Spell Compendium, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "incorporeal-enhancement",
    "name": "Incorporeal Enhancement",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One incorporeal undead/ level",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Incorporeal undead you create or control gain bonuses to AC and turn resistance.",
    "source": "Spell Compendium, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "incorporeal-nova",
    "name": "Incorporeal Nova",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "50-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A burst of negative energy damages living creatures and empowers incorporeal undead in the area.",
    "source": "Spell Compendium, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "indomitability",
    "name": "Indomitability",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "None (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You set a trigger: the next fatal blow or effect instead leaves you alive at 1 hp (once).",
    "source": "Spell Compendium, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "infernal-threnody",
    "name": "Infernal Threnody",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Evil",
      "Sonic"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "50 ft.",
    "targetOrArea": "50-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your dirge boosts evil spellcasters: evil divine casters nearby gain +1 caster level for evil spells.",
    "source": "Spell Compendium, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "infernal-transformation",
    "name": "Infernal Transformation",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You transform into a devil: horns, wings, ability boosts, resistances, and infernal traits.",
    "source": "Spell Compendium, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Infernal Transformation."
  },
  {
    "id": "infernal-transformation-lesser",
    "name": "Infernal Transformation, Lesser",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A partial fiendish transformation: modest boosts, small wings, and minor resistances.",
    "source": "Spell Compendium, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Infernal Transformation."
  },
  {
    "id": "infernal-wound",
    "name": "Infernal Wound",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wound you inflict bleeds infernally and cannot heal naturally or magically without removing the curse.",
    "source": "Spell Compendium, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "inferno",
    "name": "Inferno",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./ 2 levels)",
    "targetOrArea": "One creature",
    "duration": "6 rounds; see text",
    "savingThrow": "Fortitude negates and Reflex partial; see text",
    "spellResistance": "Yes",
    "summary": "The area becomes a raging inferno over time: escalating fire damage each round to everything within a growing blaze.",
    "source": "Spell Compendium, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "infestation-of-maggots",
    "name": "Infestation Of Maggots",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Maggots infest the subject's flesh, dealing Constitution damage as they burrow.",
    "source": "Spell Compendium, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "inhibit",
    "name": "Inhibit",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Delays the subject's next action: it loses its next move action (in practice, it acts last/briefly hesitates).",
    "source": "Spell Compendium, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "inky-cloud",
    "name": "Inky Cloud",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius spread centered on you",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A cloud of ink-like darkness obscures vision like fog cloud, even underwater.",
    "source": "Spell Compendium, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "insidious-rhythm",
    "name": "Insidious Rhythm",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S",
    "castingTime": "1 immediate action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A subtle rhythm distracts the subject, penalizing Intelligence-based and concentration checks.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "insightful-feint",
    "name": "Insightful Feint",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As a swift action you feint with uncanny insight, leaving your foe flat-footed for your next attack.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "inspirational-boost",
    "name": "Inspirational Boost",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal 124",
    "targetOrArea": "You",
    "duration": "1 round or special; see text",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next bardic music effect is strengthened, adding +1 to its morale bonuses.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "instant-locksmith",
    "name": "Instant Locksmith",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You instantly learn how to open a lock or disable a device, gaining a large bonus on one Open Lock or Disable Device check.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "instant-refuge",
    "name": "Instant Refuge",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M, XP",
    "castingTime": "10 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Until discharged",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "When a condition you set occurs, you are whisked to a designated sanctuary anywhere on the plane.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "instant-search",
    "name": "Instant Search",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Ranger": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You instantly search a room or area, learning what a careful search would find.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "interplanar-message",
    "name": "Interplanar Message",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Language-Dependent"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "See text",
    "targetOrArea": "One creature",
    "duration": "24",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Sends a short message to a creature on another plane, like sending across planar boundaries.",
    "source": "Spell Compendium, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "interplanar-telepathic-bond",
    "name": "Interplanar Telepathic Bond",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "You plus one willing creature/3 levels, no two of which are more than 30 ft. apart",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As telepathic bond, but the link works across planes.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "invisibility-superior",
    "name": "Invisibility, Superior",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal or touch",
    "targetOrArea": "You or a creature or object weighing no more than 100 lb./ level",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "As greater invisibility, but you also are silenced and scentless; attacks don't reveal you at all.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "invisibility-swift",
    "name": "Invisibility, Swift",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Assassin": 2,
      "Bard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As invisibility, cast as a swift action but lasting only 1 round.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "iron-bones",
    "name": "Iron Bones",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Corporeal undead creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As stone bones, but stronger: the undead subject gains greater damage reduction.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Stat block abbreviated in print; school and missing fields follow Stone Bones."
  },
  {
    "id": "iron-silence",
    "name": "Iron Silence",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 2,
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One suit of armor touched/ 3 levels",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Armor you wear makes no noise, removing its armor check penalty to Move Silently.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ironguard",
    "name": "Ironguard",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You become immune to damage from metal weapons and objects (greater version: all metal).",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Ironguard."
  },
  {
    "id": "ironguard-lesser",
    "name": "Ironguard, Lesser",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Metal weapons deal reduced/no damage to you, as ironguard but lesser coverage.",
    "source": "Spell Compendium, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ironguts",
    "name": "Ironguts",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You gain a +5 bonus on saves against poison, disease, and nausea effects, with a hardened stomach.",
    "source": "Spell Compendium, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ironthunder-horn",
    "name": "Ironthunder Horn",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "A horn you play emits a thunderous blast that deafens and damages creatures in a cone.",
    "source": "Spell Compendium, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "jagged-tooth",
    "name": "Jagged Tooth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One natural slashing or piercing weapon of target creature",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As keen edge plus enhancement for one natural weapon of an animal: doubles its threat range and adds +1.",
    "source": "Spell Compendium, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "jaws-of-the-wolf",
    "name": "Jaws Of The Wolf",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more created worgs",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your head transforms into a wolf's jaws, giving a powerful bite attack with trip.",
    "source": "Spell Compendium, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "joyful-noise",
    "name": "Joyful Noise",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "Concentration; see text",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your music dispels and suppresses silence effects in the area, letting sound and spellcasting work.",
    "source": "Spell Compendium, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "junglerazer",
    "name": "Junglerazer",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "120 ft.",
    "targetOrArea": "120-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Destroys plant life and deals heavy damage to plant creatures and fey in a wide swath.",
    "source": "Spell Compendium, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "jungles-rapture",
    "name": "Jungle’S Rapture",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living nonplant creature",
    "duration": "Permanent (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The jungle itself protects you: plants grant cover, concealment, and attack your enemies nearby.",
    "source": "Spell Compendium, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "kelpstrand",
    "name": "Kelpstrand",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/3 levels, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Strands of kelp rise (even from bare ground) and grapple creatures in the area, as black tentacles but seaweed.",
    "source": "Spell Compendium, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "kiss-of-the-vampire",
    "name": "Kiss Of The Vampire",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain vampiric traits: a blood-draining bite, domination gaze once, and resistances, but also vampire weaknesses.",
    "source": "Spell Compendium, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "knights-move",
    "name": "Knight’S Move",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "5 ft./2 levels; see text",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As a swift action you teleport up to your speed to a flanking position beside an enemy.",
    "source": "Spell Compendium, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "know-greatest-enemy",
    "name": "Know Greatest Enemy",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Paladin": 1
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You learn which foe present is the greatest threat to you and its relative power.",
    "source": "Spell Compendium, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  }
];
