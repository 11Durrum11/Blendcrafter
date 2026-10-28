import type { SpellDefinition } from "@/engine/types";

// Spell Compendium spells (ruleset "core"), parsed from Shaun's PDF:
// /A POC PC related/5.Splat/Spell Compendium.pdf (printed page = folio).
// Summaries are original one-line gists; stat lines are the book's own.
export const SPELL_COMPENDIUM_SPELLS_C: SpellDefinition[] = [
  {
    "id": "know-opponent",
    "name": "Know Opponent",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3
    },
    "components": "S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "By studying a creature you gain insight bonuses against it: AC and saves vs that foe grow as you observe.",
    "source": "Spell Compendium, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "know-vulnerabilities",
    "name": "Know Vulnerabilities",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 3,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You learn a creature's special abilities, weaknesses, resistances, and damage reduction.",
    "source": "Spell Compendium, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "land-womb",
    "name": "Land Womb",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and one other creature/ level",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The earth shelters you: you sink into the ground, protected and healing, until you emerge.",
    "source": "Spell Compendium, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "languor",
    "name": "Languor",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "The subject becomes languid and weak: Strength penalty and slowed movement as energy drains away.",
    "source": "Spell Compendium, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "last-breath",
    "name": "Last Breath",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Cast immediately on a creature that just died: it returns to life briefly/mostly intact like reincarnate but swiftly and cheaply, if cast within 1 round.",
    "source": "Spell Compendium, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "launch-bolt",
    "name": "Launch Bolt",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One crossbow bolt in your possession",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Launches a crossbow bolt from your hand as if fired from a light crossbow.",
    "source": "Spell Compendium, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "launch-item",
    "name": "Launch Item",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One Fine item in your possession, weighing up to 10 lb.",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Hurls a small item (splash weapon, vial) at great range with accuracy.",
    "source": "Spell Compendium, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lawful-sword",
    "name": "Lawful Sword",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Paladin": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As holy sword, but axiomatic: the weapon becomes +5 and lawful, dealing extra damage to chaotic foes.",
    "source": "Spell Compendium, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lay-of-the-land",
    "name": "Lay Of The Land",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Druid": 4,
      "Ranger": 1
    },
    "components": "V, S, F/DF",
    "castingTime": "3 rounds",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You instantly learn the geography, terrain, and landmarks of the surrounding region.",
    "source": "Spell Compendium, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "life-bolt",
    "name": "Life Bolt",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Up to five rays",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You fire rays of positive energy powered by your own hit points: undead take damage equal to the hp you spend.",
    "source": "Spell Compendium, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "life-ward",
    "name": "Life Ward",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject gains protection against death effects and negative energy like death ward, from its own entry (a positive-energy ward).",
    "source": "Spell Compendium, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lifes-grace",
    "name": "Life’S Grace",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject's armor gains ghost touch and protection from death effects; it can also ignore energy drain partially.",
    "source": "Spell Compendium, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "light-of-lunia",
    "name": "Light Of Lunia",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good",
      "Light"
    ],
    "levels": {
      "Celestia": 1,
      "Cleric": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) Target and",
    "targetOrArea": "You and up to two rays; see text",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "You radiate silvery light; you can discharge beams of it as ranged attacks against evil.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "light-of-mercuria",
    "name": "Light Of Mercuria",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good",
      "Light"
    ],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) Target and",
    "targetOrArea": "You and up to two rays; see text",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "As light of Lunia, but golden light with stronger beams.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Light Of Lunia."
  },
  {
    "id": "light-of-venya",
    "name": "Light Of Venya",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good",
      "Light"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) Target and",
    "targetOrArea": "You and up to two rays; see text",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "As light of Lunia, but pearly light with the strongest beams and healing for good creatures.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Light Of Lunia."
  },
  {
    "id": "lightfoot",
    "name": "Lightfoot",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Ranger": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You move silently and swiftly: bonuses to Move Silently and speed, leaving no tracks.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lightning-ring",
    "name": "Lightning Ring",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "Ring of electricity",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A ring of lightning surrounds you: it deals electricity damage to nearby creatures and you can fire bolts from it each round.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lionheart",
    "name": "Lionheart",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You become immune to fear and grant nearby allies a bonus on saves against fear.",
    "source": "Spell Compendium, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lions-charge",
    "name": "Lion’S Charge",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 2
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You can make a full attack at the end of a charge (pounce).",
    "source": "Spell Compendium, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lions-roar",
    "name": "Lion’S Roar",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Cleric": 8,
      "Courage": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "120 ft.",
    "targetOrArea": "120-ft.-radius burst centered on you",
    "duration": "Instantaneous or 1",
    "savingThrow": "Fortitude partial or Will negates (harmless); see text",
    "spellResistance": "Yes",
    "summary": "Your roar damages evil creatures and grants allies courage bonuses, like a burst of holy sound.",
    "source": "Spell Compendium, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "listening-coin",
    "name": "Listening Coin",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Magical sensor",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You enchant a coin to hear through it as if you were present where it lies.",
    "source": "Spell Compendium, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Scrying"
  },
  {
    "id": "listening-lorecall",
    "name": "Listening Lorecall",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain bonuses to Listen, can hear whispers at distance, and can pinpoint sounds' distances.",
    "source": "Spell Compendium, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lively-step",
    "name": "Lively Step",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius emanation centered on you",
    "duration": "Up to 12 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and companions move faster overland and ignore light difficult terrain.",
    "source": "Spell Compendium, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "living-prints",
    "name": "Living Prints",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Tracks left by a creature glow and reveal its identity, size, and time of passing.",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "living-undeath",
    "name": "Living Undeath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain undead-like traits while alive: immunity to critical hits and many conditions, at a Dexterity cost.",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "loves-lament",
    "name": "Love’S Lament",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures are overcome with grief for lost love: they take Wisdom damage and stand weeping.",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "low-light-vision",
    "name": "Low-Light Vision",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants low-light vision (or doubles existing low-light vision).",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "loyal-vassal",
    "name": "Loyal Vassal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One willing creature touched/3 levels",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Wards your sworn vassal: a shield other-like bond alerts you and protects them from compulsion.",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "lucent-lance",
    "name": "Lucent Lance",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "A lance of light deals damage based on ambient light, stronger in bright light, especially against undead and darkness creatures.",
    "source": "Spell Compendium, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "luminous-gaze",
    "name": "Luminous Gaze",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your eyes glow with power: you can fire searing rays from them at enemies.",
    "source": "Spell Compendium, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "maddening-scream",
    "name": "Maddening Scream",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Madness": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1d4+1 rounds",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "The subject screams madly: permanently confused and unable to act coherently except babbling and lashing out.",
    "source": "Spell Compendium, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "maddening-whispers",
    "name": "Maddening Whispers",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Whispers drive multiple creatures insane or confused with Wisdom damage.",
    "source": "Spell Compendium, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "maelstrom",
    "name": "Maelstrom",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 8,
      "Ocean": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "A whirlpool 120 ft. wide and 60 ft. deep",
    "duration": "1",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "No",
    "summary": "A huge whirlpool forms in water, dragging ships and creatures down and battering them.",
    "source": "Spell Compendium, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "mage-armor-greater",
    "name": "Mage Armor, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S An invisible sheen of armor-shaped force surrounds you.",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour/level (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As mage armor, but a +6 armor bonus.",
    "source": "Spell Compendium, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "mage-armor-mass",
    "name": "Mage Armor, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart 136",
    "duration": "1 hour/level (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As mage armor, for one creature per level.",
    "source": "Spell Compendium, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "mage-hand-greater",
    "name": "Mage Hand, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One object or creature weighing up to 40 lb.",
    "duration": "Concentration",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As mage hand, but lifts up to 40 lb and works at medium range with finer control.",
    "source": "Spell Compendium, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "magic-fang-superior",
    "name": "Magic Fang, Superior",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As greater magic fang, but the enhancement applies to all the creature's natural weapons at full strength.",
    "source": "Spell Compendium, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "magic-miasma",
    "name": "Magic Miasma",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "30-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "A miasma suppresses and randomizes magic in an area: spells risk wild effects and dispelling.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "malevolent-miasma",
    "name": "Malevolent Miasma",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "15-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "A small cloud of choking vapor sickens and slows creatures inside it.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "make-manifest",
    "name": "Make Manifest",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Forces an incorporeal or ethereal creature onto the Material Plane, making it corporeal and vulnerable.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "make-manifest-mass",
    "name": "Make Manifest, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "25-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As make manifest, affecting many creatures in an area.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Make Manifest."
  },
  {
    "id": "mantle-of-chaos",
    "name": "Mantle Of Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Chaos"
    ],
    "levels": {
      "Cleric": 3,
      "Limbo": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A mantle of chaos grants an armor bonus and a deflection bonus that shifts randomly, plus confusion of attackers like cloak of chaos-lite.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mantle-of-evil",
    "name": "Mantle Of Evil",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 3,
      "Cleric": 3,
      "Hades": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A mantle of evil grants armor and protection bonuses against good creatures and holy effects.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Mantle Of Chaos."
  },
  {
    "id": "mantle-of-good",
    "name": "Mantle Of Good",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 3,
      "Elysium": 3,
      "Paladin": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A mantle of good grants armor and protection bonuses against evil creatures and unholy effects.",
    "source": "Spell Compendium, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Mantle Of Chaos."
  },
  {
    "id": "mantle-of-the-icy-soul",
    "name": "Mantle Of The Icy Soul",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 6,
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject gains the cold subtype: immunity to cold, vulnerability to fire, and a chilling presence.",
    "source": "Spell Compendium, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mantle-of-law",
    "name": "Mantle Of Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Law"
    ],
    "levels": {
      "Cleric": 3,
      "Mechanus": 3,
      "Paladin": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A mantle of law grants armor and protection bonuses against chaotic creatures.",
    "source": "Spell Compendium, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Mantle Of Chaos."
  },
  {
    "id": "manyjaws",
    "name": "Manyjaws",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One pair of disembodied, flying jaws per caster level (maximum ten pairs) ,",
    "duration": "Concentration, up to 3 rounds",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "Floating jaws of force fly out and bite multiple targets repeatedly, dealing force damage.",
    "source": "Spell Compendium, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mark-of-the-hunter",
    "name": "Mark Of The Hunter",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature, which must be a favored enemy",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Marks a quarry: you gain bonuses to track, spot, and damage your marked favored target.",
    "source": "Spell Compendium, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mark-of-the-outcast",
    "name": "Mark Of The Outcast",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Cleric": 2,
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Permanent",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Brands the subject with a visible mark: Charisma penalties and social stigma, and animals shun it.",
    "source": "Spell Compendium, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "marked-object",
    "name": "Marked Object",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 2,
      "Ranger": 1,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 minute",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "24",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Marks an object so you can sense its direction and distance and know if it moves.",
    "source": "Spell Compendium, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "master-air",
    "name": "Master Air",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You control air and wind around you, gaining a fly speed and command of gusts.",
    "source": "Spell Compendium, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "master-earth",
    "name": "Master Earth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You move through earth, command earth elementals' respect, and gain earthglide-like passage and protection.",
    "source": "Spell Compendium, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "masters-touch",
    "name": "Master’S Touch",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, F",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain proficiency with a single weapon or shield you are holding for the duration.",
    "source": "Spell Compendium, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "maw-of-chaos",
    "name": "Maw Of Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Chaotic"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "15-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A sphere of chaotic energy devours creatures and objects: those caught take massive damage and wild effects, as a sphere of annihilation-like maw.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "maw-of-stone",
    "name": "Maw Of Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cavern": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One cave mouth or natural tunnel up to 20 ft. in diameter",
    "duration": "10",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "The earth opens a stone maw that bites and swallows creatures into the ground.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mechanus-mind",
    "name": "Mechanus Mind",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Lawful",
      "Mind-Affecting"
    ],
    "levels": {
      "Mechanus": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your mind becomes perfectly ordered: bonuses against chaos and mind-affecting effects and to Intelligence checks.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "memory-rot",
    "name": "Memory Rot",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject's memories rot away: it takes Intelligence damage each day and forgets skills and identity.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mesmerizing-glare",
    "name": "Mesmerizing Glare",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your gaze mesmerizes creatures, holding them fascinated while they meet your eyes.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "metal-melt",
    "name": "Metal Melt",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Nonmagical metal object weighing up to 5 lb./level",
    "duration": "1 round",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Metal objects soften and melt: weapons and armor become useless and structures weaken.",
    "source": "Spell Compendium, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "miasma",
    "name": "Miasma",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "3",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Choking vapors fill an area: creatures inside cannot speak or cast with verbal components and must hold their breath.",
    "source": "Spell Compendium, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "miasma-of-entropy",
    "name": "Miasma Of Entropy",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft. Area or",
    "targetOrArea": "Cone-shaped burst or one solid object; see text",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half or Will negates (object); see text",
    "spellResistance": "Yes (object)",
    "summary": "Entropic mist withers creatures: damage and ability penalties to those caught inside.",
    "source": "Spell Compendium, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mind-poison",
    "name": "Mind Poison",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous; see text",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "A mental poison: your touch or a dosed item deals Intelligence damage to spellcasters when they cast.",
    "source": "Spell Compendium, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mindless-rage",
    "name": "Mindless Rage",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject flies into a mindless rage, gaining strength but attacking the nearest creature blindly.",
    "source": "Spell Compendium, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "minor-disguise",
    "name": "Minor Disguise",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 hour",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Makes a minor change to your appearance (hair, clothes, small features) for disguise purposes.",
    "source": "Spell Compendium, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "misers-envy",
    "name": "Miser’S Envy",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject covets an item it sees, compelled to steal or seize it.",
    "source": "Spell Compendium, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "moment-of-clarity",
    "name": "Moment Of Clarity",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "For a moment you clear your mind: you can act normally despite confusion or compulsion for 1 round.",
    "source": "Spell Compendium, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "monstrous-thrall",
    "name": "Monstrous Thrall",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Domination": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "24",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As dominate monster, but permanent: the subject becomes your enthralled servant until freed.",
    "source": "Spell Compendium, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "moon-blade",
    "name": "Moon Blade",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Moon": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "A swordlike beam",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A blade of moonlight harms undead and creatures of darkness, dealing extra damage and shedding light.",
    "source": "Spell Compendium, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "moon-bolt",
    "name": "Moon Bolt",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One living or undead creature, or two living or undead creatures that are no more than 15 ft. apart; see text",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half (living target) or Will negates (undead target)",
    "spellResistance": "Yes",
    "summary": "Bolts of moonlight deal damage and can daze creatures, stronger against lycanthropes and undead.",
    "source": "Spell Compendium, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "moon-lust",
    "name": "Moon Lust",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "The subject becomes entranced by the moon, standing and gazing, distracted.",
    "source": "Spell Compendium, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Pattern"
  },
  {
    "id": "moon-path",
    "name": "Moon Path",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Moon": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A variable-width, glowing white stair or bridge of translucent force up to 15 ft./level long; see text",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "Creates a path of moonlight that you and others can walk across like solid ground, even over water or chasms.",
    "source": "Spell Compendium, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "moonbeam",
    "name": "Moonbeam",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Moon": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "1",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "No",
    "summary": "A beam of moonlight reveals shapechangers and forces them into their true forms.",
    "source": "Spell Compendium, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "moonbow",
    "name": "Moonbow",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M and",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "1d4 motes of electricity",
    "duration": "Instantaneous or up to 4 rounds; see text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Arcs of moonlight lightning strike multiple targets with electricity damage.",
    "source": "Spell Compendium, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "moonfire",
    "name": "Moonfire",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Moon": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst and cone- shaped emanation; see text",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half and Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Moonlight burns creatures in an area with cold fire, devastating shapechangers and the undead.",
    "source": "Spell Compendium, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "mountain-stance",
    "name": "Mountain Stance",
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
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "You take an immovable stance: huge bonuses against bull rush, trip, and forced movement, and to AC while stationary.",
    "source": "Spell Compendium, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "murderous-mist",
    "name": "Murderous Mist",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Cloud spreads in a 30-ft. radius, 20 ft. high",
    "duration": "1",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "A mist of scalding steam fills an area, dealing fire damage each round and obscuring sight — summoned at a point and drifting.",
    "source": "Spell Compendium, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "natures-avatar",
    "name": "Nature’S Avatar",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Animal touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You become nature's avatar: massive ability boosts, natural weapons, regeneration, and plant/animal command presence.",
    "source": "Spell Compendium, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "natures-balance",
    "name": "Nature’S Balance",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You redistribute ability points among willing creatures, taking from one score to bolster another.",
    "source": "Spell Compendium, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "natures-favor",
    "name": "Nature’S Favor",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Animal touched",
    "duration": "1 minute",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Animals and nature aid the recipient: a luck bonus on attacks and damage for the duration.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "natures-rampart",
    "name": "Nature’S Rampart",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Structure up to 40 ft. square",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Earth and plants rise into a defensive rampart wall you shape for cover and protection.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "naturewatch",
    "name": "Naturewatch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 0,
      "Ranger": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped emanation",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You can tell whether natural creatures and plants nearby are healthy, injured, or dead at a glance.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nauseating-breath",
    "name": "Nauseating Breath",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "You exhale a breath of nauseating gas: creatures in the cone are sickened or nauseated.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "negative-energy-aura",
    "name": "Negative Energy Aura",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "An aura of negative energy damages living creatures near you each round and bolsters undead.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nerveskitter",
    "name": "Nerveskitter",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 immediate action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1 round",
    "savingThrow": "None (harmless)",
    "spellResistance": "Yes",
    "summary": "As an immediate action at combat's start, you (or the subject) gain +5 on initiative.",
    "source": "Spell Compendium, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "net-of-shadows",
    "name": "Net Of Shadows",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 25 ft. apart",
    "duration": "1d6 rounds",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A net woven of shadow entangles a creature and dims light around it.",
    "source": "Spell Compendium, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "nightmare-lullaby",
    "name": "Nightmare Lullaby",
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
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your lullaby mixes sleep with nightmare: subjects sleep fitfully and suffer penalties and fatigue on waking.",
    "source": "Spell Compendium, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "nights-caress",
    "name": "Night’S Caress",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "Your touch deals damage and Constitution damage as necrotic cold saps the victim.",
    "source": "Spell Compendium, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nightshield",
    "name": "Nightshield",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a +1 resistance bonus on saves and a shield-like protection against magic missiles at night or in darkness (works anytime).",
    "source": "Spell Compendium, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nightstalkers-transformation",
    "name": "Nightstalker’S Transformation",
    "ruleset": "core",
    "school": "Transmutation",
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
    "summary": "You take on a shadowy hunter's gifts: bonuses to stealth, Dexterity, sneak-attack-like precision, and darkvision.",
    "source": "Spell Compendium, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nimbus-of-light",
    "name": "Nimbus Of Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 1,
      "Purification": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A halo of light sheds illumination and can be discharged as a ray dealing damage to undead and evil.",
    "source": "Spell Compendium, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "nixies-grace",
    "name": "Nixie’S Grace",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Bard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You gain a nixie's grace: Charisma bonus, water breathing, and a charming presence.",
    "source": "Spell Compendium, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "obedient-avalanche",
    "name": "Obedient Avalanche",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cold": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius avalanche of snow centered on a point in space; see text",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half or Reflex negates; see text",
    "spellResistance": "No",
    "summary": "An avalanche obeys your commands, burying creatures and changing direction as you direct over several rounds.",
    "source": "Spell Compendium, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "omen-of-peril",
    "name": "Omen Of Peril",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Liberation": 1,
      "Ranger": 1
    },
    "components": "V, F",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You receive a quick omen of the danger level of your next hour's course: safe, perilous, or deadly.",
    "source": "Spell Compendium, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "one-with-the-land",
    "name": "One With The Land",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a strong bond with the land: bonuses on nature skills, endure elements, and knowledge of the area.",
    "source": "Spell Compendium, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "one-mind",
    "name": "One Mind",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You and your mount share senses: you can see through its eyes and communicate telepathically.",
    "source": "Spell Compendium, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser One Mind."
  },
  {
    "id": "one-mind-greater",
    "name": "One Mind, Greater",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As one mind, but you can also direct the mount's senses fully and share spells more freely.",
    "source": "Spell Compendium, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow One Mind."
  },
  {
    "id": "one-mind-lesser",
    "name": "One Mind, Lesser",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A weak empathic link with your mount: you sense its emotions and direction.",
    "source": "Spell Compendium, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow One Mind."
  },
  {
    "id": "ooze-puppet",
    "name": "Ooze Puppet",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One ooze",
    "duration": "24",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You take control of an ooze, directing its movements and attacks.",
    "source": "Spell Compendium, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "opalescent-glare",
    "name": "Opalescent Glare",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Good"
    ],
    "levels": {
      "Arborea": 4,
      "Cleric": 6,
      "Sorcerer/ Wizard": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Will partial; see text",
    "spellResistance": "Yes",
    "summary": "Your gaze blasts creatures with chaotic colors: death or madness to those who fail, especially lawful beings.",
    "source": "Spell Compendium, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "orb-of-acid",
    "name": "Orb Of Acid",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of acid",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "An orb of acid deals 1d6 acid damage per level (max 15d6) on a ranged touch, and sickens on a failed save.",
    "source": "Spell Compendium, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "orb-of-acid-lesser",
    "name": "Orb Of Acid, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of acid",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A small orb of acid deals 1d8 acid damage plus 1 per two levels on a ranged touch.",
    "source": "Spell Compendium, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "orb-of-cold",
    "name": "Orb Of Cold",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of cold",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "An orb of cold deals 1d6 cold damage per level (max 15d6) and can blind.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Orb Of Acid."
  },
  {
    "id": "orb-of-cold-lesser",
    "name": "Orb Of Cold, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of cold Your hand takes on a blue tint and your fingers turn numb and unresponsive as you complete the spell. From your chilled palm flies an orb compo",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A small orb of cold deals 1d8 cold damage plus scaling on a ranged touch.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Lesser Orb Of Acid."
  },
  {
    "id": "orb-of-electricity",
    "name": "Orb Of Electricity",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of electricity",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "An orb of electricity deals 1d6 electricity damage per level (max 15d6) and can entangle the target in sparks.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Orb Of Acid."
  },
  {
    "id": "orb-of-electricity-lesser",
    "name": "Orb Of Electricity, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of electricity The air crackles around your outstretched hand and the smell of ozone assaults your nostrils as a ball of electrical energy, its surface",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A small orb of electricity deals 1d8 electricity damage plus scaling on a ranged touch.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Lesser Orb Of Acid."
  },
  {
    "id": "orb-of-fire",
    "name": "Orb Of Fire",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of fire",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "An orb of fire deals 1d6 fire damage per level (max 15d6) and can daze.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Orb Of Acid."
  },
  {
    "id": "orb-of-fire-lesser",
    "name": "Orb Of Fire, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of fire Your hand heats to an uncomfortable temperature just moments before you release the spell's energy in the form of an orb of white flames speedi",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A small orb of fire deals 1d8 fire damage plus scaling on a ranged touch.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Lesser Orb Of Acid."
  },
  {
    "id": "orb-of-force",
    "name": "Orb Of Force",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One orb of force",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "An orb of force deals 1d6 force damage per level (max 10d6) on a ranged touch, unerringly solid.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "orb-of-sound",
    "name": "Orb Of Sound",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of sonic energy Symbols recognizable as musical notation - the visual representation of sound - appear in midair within the curve of your palm accompan",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "An orb of sound deals 1d6 sonic damage per level (max 15d6, actually 1d4/level per its entry) and can deafen.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Orb Of Acid."
  },
  {
    "id": "orb-of-sound-lesser",
    "name": "Orb Of Sound, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One orb of sonic energy",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A small orb of sound deals 1d8 sonic damage plus scaling on a ranged touch.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Lesser Orb Of Acid."
  },
  {
    "id": "otyugh-swarm",
    "name": "Otyugh Swarm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Pestilence": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Three or more otyughs, no two of which are more than 30 ft. apart",
    "duration": "Seven days or seven months (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a swarm of otyughs that attack creatures in a filthy area.",
    "source": "Spell Compendium, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "owls-insight",
    "name": "Owl’S Insight",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 hour",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains an insight bonus to Wisdom equal to half your caster level.",
    "source": "Spell Compendium, p. 152",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "panacea",
    "name": "Panacea",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless)",
    "summary": "Cures many conditions at once: removes disease, poison effects, blindness, deafness, and similar ailments, plus minor healing.",
    "source": "Spell Compendium, p. 152",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "pavilion-of-grandeur",
    "name": "Pavilion Of Grandeur",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Creation": 9
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Extradimensional pavilion, up to five 10-ft. cubes/level (S), plus feast for 12 creatures/level",
    "duration": "24",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a magnificent extradimensional pavilion with servants, food, and luxury for you and guests.",
    "source": "Spell Compendium, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "perinarch",
    "name": "Perinarch",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Limbo": 4,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Not printed in source",
    "duration": "1",
    "savingThrow": "None (object) and Reflex negates; see text",
    "spellResistance": "No",
    "summary": "You gain control over a morphic plane's traits (like Limbo), reshaping its terrain and gravity by will.",
    "source": "Spell Compendium, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "perinarch-planar",
    "name": "Perinarch, Planar",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 9,
      "Limbo": 9,
      "Sorcerer/ Wizard": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Not printed in source",
    "duration": "1",
    "savingThrow": "None (object) and Reflex negates; see text",
    "spellResistance": "No",
    "summary": "As perinarch, but you can reshape a strongly morphic plane more extensively and impose order on it.",
    "source": "Spell Compendium, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Perinarch."
  },
  {
    "id": "persistent-blade",
    "name": "Persistent Blade",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One dagger made of force",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A dagger of force attacks a target each round on its own, flanking with allies.",
    "source": "Spell Compendium, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "phantasmal-assailants",
    "name": "Phantasmal Assailants",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Will disbelief (if interacted with), then Fortitude half; see text",
    "spellResistance": "Yes",
    "summary": "Illusory attackers assail the subject's mind, dealing Dexterity and Wisdom damage as it believes the wounds.",
    "source": "Spell Compendium, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "phantasmal-decoy",
    "name": "Phantasmal Decoy",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates, and Will disbelief (if interacted with)",
    "spellResistance": "Yes",
    "summary": "Creates an illusory duplicate of you (or your companion) elsewhere that foes mistake for real.",
    "source": "Spell Compendium, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "phantasmal-disorientation",
    "name": "Phantasmal Disorientation",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "The subject's surroundings seem to shift and spin: it is disoriented, taking penalties and moving randomly.",
    "source": "Spell Compendium, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "phantasmal-thief",
    "name": "Phantasmal Thief",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Greed": 8,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One invisible, mindless, shapeless thief",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "An invisible, incorporeal thief steals items for you, picking pockets and locks at range.",
    "source": "Spell Compendium, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "phantom-bear",
    "name": "Phantom Bear",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One summoned phantom bear",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A phantom dire bear appears and fights for you, partly incorporeal and hard to harm.",
    "source": "Spell Compendium, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "phantom-foe",
    "name": "Phantom Foe",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Assassin": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will disbelief",
    "spellResistance": "No",
    "summary": "Creates an illusory enemy only the subject can see, which flanks and distracts it.",
    "source": "Spell Compendium, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "phantom-stag",
    "name": "Phantom Stag",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "One quasi-real, staglike creature",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "A phantom stag serves as a fast, tireless mount that can pass through terrain easily.",
    "source": "Spell Compendium, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "phantom-threat",
    "name": "Phantom Threat",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "An illusory threat makes a creature believe it is flanked, granting real flanking benefits against it.",
    "source": "Spell Compendium, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "phantom-wolf",
    "name": "Phantom Wolf",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One summoned phantom wolf",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A huge phantom wolf fights for you, its bite dragging down and tripping enemies.",
    "source": "Spell Compendium, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "plague-of-rats",
    "name": "Plague Of Rats",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Pestilence": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One swarm of rats/2 levels, each of which is adjacent to at least one other swarm",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons diseased rat swarms that attack and spread filth fever.",
    "source": "Spell Compendium, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "plague-of-undead",
    "name": "Plague Of Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 9,
      "Sorcerer/ Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more corpses within range",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Every corpse in a huge area rises as a zombie or skeleton under your control up to a large HD cap.",
    "source": "Spell Compendium, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "planar-bubble",
    "name": "Planar Bubble",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "10-ft.-radius emanation from touched creature",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No; see text",
    "summary": "A bubble around a creature replicates its home plane's traits, protecting it from the local plane's effects.",
    "source": "Spell Compendium, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "planar-exchange",
    "name": "Planar Exchange",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetextforlesserplanarexchange"
    ],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "0 ft.",
    "targetOrArea": "One called creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You swap places with a called outsider: it takes your place and serves briefly while you wait safely elsewhere.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling",
    "note": "Abbreviated entry: missing fields follow Lesser Planar Exchange."
  },
  {
    "id": "planar-exchange-greater",
    "name": "Planar Exchange, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetextforlesserplanarexchange"
    ],
    "levels": {
      "Cleric": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "0 ft.",
    "targetOrArea": "One called creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As planar exchange, with a more powerful outsider.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling",
    "note": "Abbreviated entry: missing fields follow Lesser Planar Exchange."
  },
  {
    "id": "planar-exchange-lesser",
    "name": "Planar Exchange, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "0 ft.",
    "targetOrArea": "One called creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As planar exchange, with a weaker outsider.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "planar-tolerance",
    "name": "Planar Tolerance",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4,
      "Elysium": 2,
      "Ranger": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "20 ft.",
    "targetOrArea": "One creature/level in a 20-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "As avoid planar effects / attune form's protection: you tolerate the plane's harmful traits without damage.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Stat block abbreviated in print; school and missing fields follow Avoid Planar Effects."
  },
  {
    "id": "plane-shift-greater",
    "name": "Plane Shift, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched, or up to eight willing creatures joining hands",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As plane shift, but you arrive exactly where intended on the destination plane.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "plant-body",
    "name": "Plant Body",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain plant traits: immunity to mind-affecting effects, poison, sleep, paralysis, polymorph, stunning, and critical hits.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "poison-thorns",
    "name": "Poison Thorns",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your body grows poisoned thorns: attackers and grapplers are pricked and poisoned.",
    "source": "Spell Compendium, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Thornskin."
  },
  {
    "id": "poison-vines",
    "name": "Poison Vines",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft.-radius/level spread",
    "duration": "10",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Poisonous vines erupt and grapple creatures in the area, poisoning those they hold.",
    "source": "Spell Compendium, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation",
    "note": "Abbreviated entry: missing fields follow Vine Mine."
  },
  {
    "id": "portal-alarm",
    "name": "Portal Alarm",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One interplanar gate or portal",
    "duration": "2",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As alarm, but wards a portal and alerts you when it is used or approached.",
    "source": "Spell Compendium, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "portal-alarm-improved",
    "name": "Portal Alarm, Improved",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One interplanar gate or portal",
    "duration": "8",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As portal alarm, but stronger: you learn who used the portal and it resists dispelling.",
    "source": "Spell Compendium, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Portal Alarm."
  },
  {
    "id": "portal-beacon",
    "name": "Portal Beacon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One interplanar gate or portal",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Marks a portal you have used so you can find and reopen it easily later.",
    "source": "Spell Compendium, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "positive-energy-aura",
    "name": "Positive Energy Aura",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your aura heals living creatures near you each round and harms undead.",
    "source": "Spell Compendium, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "primal-form",
    "name": "Primal Form",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take on a primal elemental-ish animal form with enhanced physical stats and natural attacks, losing spellcasting while in it.",
    "source": "Spell Compendium, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "prismatic-eye",
    "name": "Prismatic Eye",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Magical eye",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A floating eye fires prismatic rays at your enemies, one random color effect each round.",
    "source": "Spell Compendium, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "prismatic-ray",
    "name": "Prismatic Ray",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A ray with a random prismatic color effect strikes the target.",
    "source": "Spell Compendium, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "probe-thoughts",
    "name": "Probe Thoughts",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Mind": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Concentration, up to 1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You probe a creature's mind, asking questions and extracting answers from its surface and deep thoughts.",
    "source": "Spell Compendium, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "programmed-amnesia",
    "name": "Programmed Amnesia",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Permanent",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You rewrite the subject's memories and even personality and skills permanently, a total mental restructuring.",
    "source": "Spell Compendium, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "protection-from-negative-energy",
    "name": "Protection From Negative Energy",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains protection against negative energy damage and death effects, absorbing negative energy up to a cap.",
    "source": "Spell Compendium, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "protection-from-positive-energy",
    "name": "Protection From Positive Energy",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As protection from negative energy, but against positive energy (for undead subjects).",
    "source": "Spell Compendium, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "prot-g",
    "name": "Protégé",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 4
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "One creature with Intelligence 3 or higher",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You grant a student some of your skill: the subject gains ranks-like competence in a skill you possess.",
    "source": "Spell Compendium, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "puppeteer",
    "name": "Puppeteer",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You take subtle control of a creature's movements, making it your puppet while it remains aware.",
    "source": "Spell Compendium, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "quick-march",
    "name": "Quick March",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Allies in a 20-ft.-radius burst",
    "duration": "1 round",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and allies gain a burst of overland speed for an hour, marching without fatigue.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "quick-potion",
    "name": "Quick Potion",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Flask of water touched",
    "duration": "1",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "You temporarily turn a held potion's effect into a stored burst you can trigger instantly later... in practice, a potion you hold is consumed as a free action when you choose within the duration.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "quill-blast",
    "name": "Quill Blast",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "20 ft. 164",
    "targetOrArea": "20-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "Yes",
    "summary": "Quills erupt from you in all directions, dealing piercing damage based on your size and form.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "quillfire",
    "name": "Quillfire",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your quills or spines become weapons: you can fire them as projectiles dealing damage and mild poison.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "radiant-assault",
    "name": "Radiant Assault",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.- radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A burst of radiant energy deals damage and dazzles or blinds evil creatures and undead.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "raging-flame",
    "name": "Raging Flame",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "30-ft.-radius spread",
    "duration": "1 minute",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Makes a fire burn far hotter and faster, increasing its damage and spread.",
    "source": "Spell Compendium, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rainbow-beam",
    "name": "Rainbow Beam",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A beam deals energy damage of a random type with a random minor secondary effect.",
    "source": "Spell Compendium, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rainbow-blast",
    "name": "Rainbow Blast",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "120 ft.",
    "targetOrArea": "120-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Multiple beams of rainbow energy strike targets, each a random energy type.",
    "source": "Spell Compendium, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "raise-from-the-deep",
    "name": "Raise From The Deep",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 minute",
    "range": "Long (400 ft. + 40 ft./level); see text",
    "targetOrArea": "One creature or object",
    "duration": "1",
    "savingThrow": "Fortitude negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Raises a sunken ship or huge object from the water's depths to the surface.",
    "source": "Spell Compendium, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rams-might",
    "name": "Ram’S Might",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a ram's headbutt: a gore attack and improved bull rush power.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rapid-burrowing",
    "name": "Rapid Burrowing",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, DF 166",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain or double a burrow speed and can rush through earth quickly.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-clumsiness",
    "name": "Ray Of Clumsiness",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray imposes a Dexterity penalty of 1d6+ scaling.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-deanimation",
    "name": "Ray Of Deanimation",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels) Effect: Ray",
    "targetOrArea": "One construct",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ray unmakes constructs: it deals heavy damage to constructs and animated objects.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-deflection",
    "name": "Ray Deflection",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You automatically deflect ranged touch attacks and rays aimed at you for the duration.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-dizziness",
    "name": "Ray Of Dizziness",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray makes the subject dizzy: it can take only a move or standard action each round.",
    "source": "Spell Compendium, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "ray-of-entropy",
    "name": "Ray Of Entropy",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray decays the target: construct and undead take heavy damage; living creatures sicken and weaken.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-flame",
    "name": "Ray Of Flame",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Flame"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A ray of flame deals 1d6 fire damage per two levels (max 5d6) on a ranged touch.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-ice",
    "name": "Ray Of Ice",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A ray of ice deals cold damage and can pin the target's feet to the ground in ice.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-light",
    "name": "Ray Of Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Bard": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray of brilliant light deals damage, especially to undead and creatures of darkness, and can blind.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-sickness",
    "name": "Ray Of Sickness",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./ 2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray sickens the target on a failed Fortitude save.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ray-of-stupidity",
    "name": "Ray Of Stupidity",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray deals 1d6 Intelligence damage (plus scaling) on a ranged touch.",
    "source": "Spell Compendium, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "ray-of-weakness",
    "name": "Ray Of Weakness",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray weakens the subject: penalty to Strength and attack rolls... in practice it imposes a Strength penalty similar to ray of enfeeblement's lesser cousin.",
    "source": "Spell Compendium, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "razorfangs",
    "name": "Razorfangs",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "One creature's natural weapons become razor-sharp, improving their critical threat range and damage dice.",
    "source": "Spell Compendium, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "reality-maelstrom",
    "name": "Reality Maelstrom",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius emanation centered on a point in space, and 40-ft.-radius emanation centered on the same point; see text",
    "duration": "1 round",
    "savingThrow": "Will negates, Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "A tear in reality deals massive damage and randomly banishes or displaces creatures caught in it to other planes.",
    "source": "Spell Compendium, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "reaving-dispel",
    "name": "Reaving Dispel",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One spellcaster, creature, or object; or a 20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "As dispel magic, greater, but spells you dispel can be stolen: you gain the use of a dispelled spell as if you had cast it.",
    "source": "Spell Compendium, p. 169",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rebuke",
    "name": "Rebuke",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 2,
      "Hades": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A sharp rebuke leaves the subject cowering briefly or shaken, compelled to stop its current action.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "rebuke-final",
    "name": "Rebuke, Final",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A devastating rebuke: the subject is stunned and takes damage, possibly dying if it disobeys your command.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion",
    "note": "Abbreviated entry: missing fields follow Rebuke."
  },
  {
    "id": "rebuke-greater",
    "name": "Rebuke, Greater",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As rebuke, but the subject is stunned or compelled more strongly.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion",
    "note": "Abbreviated entry: missing fields follow Rebuke."
  },
  {
    "id": "rebuking-breath",
    "name": "Rebuking Breath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next breath weapon rebukes undead as well: undead in it are turned or damaged.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "reciprocal-gyre",
    "name": "Reciprocal Gyre",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "Will half, then Fortitude negates; see text",
    "spellResistance": "No",
    "summary": "The subject takes damage for each spell affecting it, as magic recoils on its bearer.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "recitation",
    "name": "Recitation",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Purification": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "All allies and foes within a 60-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your recited prayer grants allies a +2 luck bonus on attacks, damage, saves, and checks (+3 if they share your faith).",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "red-tide",
    "name": "Red Tide",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "30-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A tide of red algae poisons the waters and air: creatures in the area are poisoned and take damage.",
    "source": "Spell Compendium, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "reduce-person-greater",
    "name": "Reduce Person, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid creature",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As reduce person, but works on any creature type and can shrink up to two size categories.",
    "source": "Spell Compendium, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "reflective-disguise",
    "name": "Reflective Disguise",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your disguise mirrors the viewer's expectations: each observer sees you as someone unremarkable to them.",
    "source": "Spell Compendium, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "reflective-disguise-mass",
    "name": "Reflective Disguise, Mass",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/2 levels, no two of which are more than 30 ft. apart",
    "duration": "12 hours (D)",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As reflective disguise, for your whole group.",
    "source": "Spell Compendium, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer",
    "note": "Abbreviated entry: missing fields follow Reflective Disguise."
  },
  {
    "id": "refusal",
    "name": "Refusal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) Ef fect and",
    "targetOrArea": "Invisible ward that occupies two 10-ft. squares/ level (S)",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You refuse entry: creatures cannot enter the warded area or teleport into it without your permission.",
    "source": "Spell Compendium, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "regal-procession",
    "name": "Regal Procession",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One mount/level",
    "duration": "2 hours/level (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Conjures a procession of splendid spectral horses and an honor guard that travel with you impressively.",
    "source": "Spell Compendium, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "rejection",
    "name": "Rejection",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You forcibly eject extraplanar creatures and effects from an area, banishing summons and closing planar intrusions.",
    "source": "Spell Compendium, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rejuvenation-cocoon",
    "name": "Rejuvenation Cocoon",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing creature touched",
    "duration": "2 rounds",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A cocoon heals and restores the resting creature over an hour, regrowing and curing many harms.",
    "source": "Spell Compendium, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "rejuvenative-corpse",
    "name": "Rejuvenative Corpse",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "One humanoid that died within the past week",
    "duration": "24 hours or until discharged; see text",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "A corpse you touch becomes a font of healing: allies touching it regain hit points.",
    "source": "Spell Compendium, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "remove-scent",
    "name": "Remove Scent",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject loses its scent, becoming untrackable by scent and gaining protection from scent-based detection.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "renewal-pact",
    "name": "Renewal Pact",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Pact": 7
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Willing living creature touched",
    "duration": "Permanent until",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A pact effect: when the subject suffers a crippling condition, a pre-chosen restorative spell triggers automatically.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "repair-critical-damage",
    "name": "Repair Critical Damage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Construct touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Repairs 4d8 + level damage to a construct.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Repair Light Damage."
  },
  {
    "id": "repair-light-damage",
    "name": "Repair Light Damage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Construct touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Repairs 1d8 + level damage to a construct.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "repair-minor-damage",
    "name": "Repair Minor Damage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Construct touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Repairs 1 point of damage to a construct.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Repair Light Damage."
  },
  {
    "id": "repair-moderate-damage",
    "name": "Repair Moderate Damage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Construct touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Repairs 2d8 + level damage to a construct.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Repair Light Damage."
  },
  {
    "id": "repair-serious-damage",
    "name": "Repair Serious Damage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Construct touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Repairs 3d8 + level damage to a construct.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Repair Light Damage."
  },
  {
    "id": "replicate-casting",
    "name": "Replicate Casting",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 round; see text",
    "range": "See text",
    "targetOrArea": "One spell or spell-like ability",
    "duration": "See text",
    "savingThrow": "See text",
    "spellResistance": "See text",
    "summary": "Repeats the last spell cast near you (by anyone) as if you cast it yourself, using this slot.",
    "source": "Spell Compendium, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resist-energy-mass",
    "name": "Resist Energy, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "10 minutes/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As resist energy, for one creature per level.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resist-planar-alignment",
    "name": "Resist Planar Alignment",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Hades": 2,
      "Limbo": 2,
      "Paladin": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Protects you from the alignment traits of a plane (mildly aligned penalties).",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resistance-greater",
    "name": "Resistance, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Cleric": 4,
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "The subject gains a +3 resistance bonus on all saving throws for 24 hours.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resistance-superior",
    "name": "Resistance, Superior",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Cleric": 6,
      "Druid": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "The subject gains a +6 resistance bonus on all saving throws for 24 hours.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resonating-bolt",
    "name": "Resonating Bolt",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "60-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A bolt of sound deals sonic damage and resonates through the target's body, dealing extra damage to crystalline and brittle targets.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "restoration-mass",
    "name": "Restoration, Mass",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart Hurling diamond dust into the air, you call out to your deity, and a sparkling aura briefly surr",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As restoration, for one creature per level.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "resurgence",
    "name": "Resurgence",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject immediately gets a new saving throw against an ongoing effect with a +2 bonus.",
    "source": "Spell Compendium, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "resurgence-mass",
    "name": "Resurgence, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Blackguard": 3,
      "Cleric": 3,
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart Throwing out your hand and calling upon your deity for favor, you give your allies a chance to f",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As resurgence, for your allies in an area.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Resurgence."
  },
  {
    "id": "reveille",
    "name": "Reveille",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Language-Dependent"
    ],
    "levels": {
      "Bard": 2
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "One recently dead creature",
    "duration": "5 rounds",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You speak with a dead creature briefly: it answers a few questions like speak with dead but through a song that rouses its spirit.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "revenance",
    "name": "Revenance",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 6,
      "Blackguard": 4,
      "Cleric": 4,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Dead ally touched",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "Yes (harmless)",
    "summary": "A creature dead for mere rounds returns to life temporarily to fight on, dying again when the spell ends.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "reverse-arrows",
    "name": "Reverse Arrows",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Ranged attacks against you are deflected back at their attackers.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "revive-outsider",
    "name": "Revive Outsider",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S, M, DF",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Dead outsider touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "Yes (harmless)",
    "summary": "As raise dead, but for a dead outsider, restoring it to life.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "revive-undead",
    "name": "Revive Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Deathbound": 5,
      "Sorcerer/ Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Destroyed undead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Restores a destroyed undead creature to unlife with its memories and abilities.",
    "source": "Spell Compendium, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "revivify",
    "name": "Revivify",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Dead creature touched",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "Yes (harmless)",
    "summary": "Restores a creature that died within the last round to life at -1 hp, with no level loss.",
    "source": "Spell Compendium, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "rhinos-rush",
    "name": "Rhino’S Rush",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1,
      "Ranger": 1,
      "Wrath": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "On your next charge you deal double damage with the first attack.",
    "source": "Spell Compendium, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "righteous-aura",
    "name": "Righteous Aura",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good",
      "Light"
    ],
    "levels": {
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your aura of righteousness damages evil creatures that strike you and sheds holy light.",
    "source": "Spell Compendium, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "righteous-fury",
    "name": "Righteous Fury",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain sacred bonuses to Strength and temporary hit points in righteous anger, with a compulsion to fight evil.",
    "source": "Spell Compendium, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "righteous-wrath-of-the-faithful",
    "name": "Righteous Wrath Of The Faithful",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 5,
      "Purification": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Allies within a 30-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your faithful allies gain haste-like benefits and morale bonuses, stronger if they share your faith.",
    "source": "Spell Compendium, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "ring-of-blades",
    "name": "Ring Of Blades",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Blades circle you, dealing damage each round to creatures adjacent to you.",
    "source": "Spell Compendium, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "ruby-ray-of-reversal",
    "name": "Ruby Ray Of Reversal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One natural or magical hazard; see text",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ray undoes a single magical effect, trap, or transmutation on the target, reversing even effects dispel magic cannot touch.",
    "source": "Spell Compendium, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "ruin-delvers-fortune",
    "name": "Ruin Delver’S Fortune",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1d4 rounds",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a luck pool of bonuses usable on saves, AC, and checks while exploring ruins.",
    "source": "Spell Compendium, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "rushing-waters",
    "name": "Rushing Waters",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "15-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "A surge of water bull rushes and knocks down creatures in its path.",
    "source": "Spell Compendium, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "rust-ray",
    "name": "Rust Ray",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels) Effect: Ray",
    "targetOrArea": "One nonmagical ferrous object or one ferrous creature",
    "duration": "Instantaneous",
    "savingThrow": "None or Fortitude negates (object); see text",
    "spellResistance": "No",
    "summary": "A ray corrodes metal: a struck metal object or construct takes rust damage and may be destroyed.",
    "source": "Spell Compendium, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sacred-haven",
    "name": "Sacred Haven",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "You and allies in a 30-ft.- radius burst centered on you",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Creates a sacred safe place: allies inside gain protection and you can teleport to the haven.",
    "source": "Spell Compendium, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "safe-clearing",
    "name": "Safe Clearing",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Clears an area of hazards: traps are revealed, and the cleared campsite is warded from natural dangers.",
    "source": "Spell Compendium, p. 179",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "safety",
    "name": "Safety",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "None or Will negates (harmless)",
    "spellResistance": "No",
    "summary": "As a contingent sanctuary: when the subject is attacked, a sanctuary-like ward triggers to protect them.",
    "source": "Spell Compendium, p. 179",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "saltray",
    "name": "Saltray",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A ray of salt crystals deals damage and dehydrates the target, worse against water creatures and oozes.",
    "source": "Spell Compendium, p. 179",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sanctuary-mass",
    "name": "Sanctuary, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Balance": 5,
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1 round/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As sanctuary, for one creature per level.",
    "source": "Spell Compendium, p. 179",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sandblast",
    "name": "Sandblast",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A blast of sand deals minor damage and can blind creatures in a small cone.",
    "source": "Spell Compendium, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sarcophagus-of-stone",
    "name": "Sarcophagus Of Stone",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6
    },
    "components": "Not printed in source",
    "castingTime": "Not printed in source",
    "range": "Not printed in source",
    "targetOrArea": "Not printed in source",
    "duration": "Instantaneous",
    "savingThrow": "Reflex negates",
    "spellResistance": "No",
    "summary": "A stone sarcophagus forms around a creature, imprisoning it in stone (Cleric 6 per the spell lists).",
    "source": "Spell Compendium, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "scale-weakening",
    "name": "Scale Weakening",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action Encasing a foe in a sarcophagus of stone proves an effective-albeit grisly-tactic",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Weakens a creature's scales: reduces its natural armor bonus and damage reduction.",
    "source": "Spell Compendium, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scatterspray",
    "name": "Scatterspray",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Six or more Diminutive or Fine objects, all within 1 ft. of each other, whose total weight does not exceed 25 lb.",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "Small objects around the target explode outward, dealing damage to nearby creatures.",
    "source": "Spell Compendium, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scent",
    "name": "Scent",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants the scent special quality for tracking and detection.",
    "source": "Spell Compendium, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scintillating-scales",
    "name": "Scintillating Scales",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your scales or skin glitter: attackers are dazzled and you gain a deflection bonus to AC.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scintillating-sphere",
    "name": "Scintillating Sphere",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A sphere of crackling energy deals electricity damage in a burst like fireball.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scorch",
    "name": "Scorch",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A line of flame deals fire damage in a narrow path.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scourge",
    "name": "Scourge",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Pestilence": 7
    },
    "components": "V, S, F, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One living creature/level, no two of which are more than 50 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A plague scourge lashes creatures with disease and damage, spreading pestilence.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "scramble-portal",
    "name": "Scramble Portal",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Chaotic"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One interplanar gate or portal",
    "duration": "1",
    "savingThrow": "None (for portal)",
    "spellResistance": "No",
    "summary": "Scrambles a portal's destination: creatures using it arrive at random locations.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "seal-portal",
    "name": "Seal Portal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One interplanar gate or portal",
    "duration": "Permanent (D)",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Seals a portal shut so it cannot be used until the seal is removed or dispelled.",
    "source": "Spell Compendium, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "second-wind",
    "name": "Second Wind",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You recover a burst of vigor: removes fatigue and restores some hit points in a pinch.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "seek-eternal-rest",
    "name": "Seek Eternal Rest",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 3
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Destroys an undead creature utterly on a failed save, granting it final rest.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "sense-heretic",
    "name": "Sense Heretic",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Object touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You sense creatures whose faith opposes yours within range, learning their direction.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sensory-deprivation",
    "name": "Sensory Deprivation",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will disbelief",
    "spellResistance": "Yes",
    "summary": "The subject loses all senses: blind, deaf, and numb, unable to perceive anything.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "serene-visage",
    "name": "Serene Visage",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You appear calm and trustworthy: bonuses to Bluff and Diplomacy and protection from sense-motive scrutiny.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "servant-horde",
    "name": "Servant Horde",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Invisible, mindless, shapeless servants",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As unseen servant, but creates one servant per level.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "shadow-binding",
    "name": "Shadow Binding",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "10-ft.-radius burst",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Shadows pin the subject: it is entangled or immobilized by its own shadow.",
    "source": "Spell Compendium, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-cache",
    "name": "Shadow Cache",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "1-ft.-diameter circle",
    "duration": "1",
    "savingThrow": "No",
    "spellResistance": "No",
    "summary": "Hides an item in the Plane of Shadow, retrievable later like a secret chest.",
    "source": "Spell Compendium, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-form",
    "name": "Shadow Form",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Assassin": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You become a living shadow: incorporeal-like benefits, stealth bonuses, and passage through cracks, but weakened attacks.",
    "source": "Spell Compendium, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-hand",
    "name": "Shadow Hand",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Medium shadowy hand",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A shadowy hand performs tasks at range and can deliver touch spells obscurely... in practice a spectral-hand-like shadow that manipulates objects.",
    "source": "Spell Compendium, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-landscape",
    "name": "Shadow Landscape",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 hour",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One-mile-radius spread centered on a point in space",
    "duration": "24",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "Yes",
    "summary": "You reshape a landscape's shadow-stuff into an illusory terrain overlay that can become partly real.",
    "source": "Spell Compendium, p. 184",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-phase",
    "name": "Shadow Phase",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You phase partly into shadow: incorporeal-like miss chance and the ability to pass through barriers as a shadow.",
    "source": "Spell Compendium, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shadow-mask",
    "name": "Shadow Mask",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A mask of shadow conceals your face and identity, granting bonuses to disguise and protection from gaze scrutiny.",
    "source": "Spell Compendium, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-radiance",
    "name": "Shadow Radiance",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius burst centered on a point in space",
    "duration": "1",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "Yes",
    "summary": "You radiate shadow-light that conceals you and reveals creatures as silhouettes — in practice, an aura of shadow that boosts your stealth and outlines foes.",
    "source": "Spell Compendium, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  }
];
