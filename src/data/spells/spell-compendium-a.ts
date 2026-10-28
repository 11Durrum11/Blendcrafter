import type { SpellDefinition } from "@/engine/types";

// Spell Compendium spells (ruleset "core"), parsed from Shaun's PDF:
// /A POC PC related/5.Splat/Spell Compendium.pdf (printed page = folio).
// Summaries are original one-line gists; stat lines are the book's own.
export const SPELL_COMPENDIUM_SPELLS_A: SpellDefinition[] = [
  {
    "id": "absorb-weapon",
    "name": "Absorb Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One touched weapon not in another creature's possession",
    "duration": "1",
    "savingThrow": "Will negates (object); see text",
    "spellResistance": "Yes (object)",
    "summary": "You hide a touched light weapon inside your body, where it stays undetectable until you retrieve it as a free action or the duration ends.",
    "source": "Spell Compendium, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "absorption",
    "name": "Absorption",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Until expended or 10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You absorb the next spells targeted at you (up to your level in spell levels) and can later recast them yourself for free.",
    "source": "Spell Compendium, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "abyssal-army",
    "name": "Abyssal Army",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Chaotic",
      "Evil"
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
    "summary": "Over several rounds summons an army of demons (from dretches up to a balor-tier commander) that fight for you briefly.",
    "source": "Spell Compendium, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "accelerated-movement",
    "name": "Accelerated Movement",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Ranger": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "S, M",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You move at full speed without penalty through difficult terrain or when climbing or swimming.",
    "source": "Spell Compendium, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "acid-breath",
    "name": "Acid Breath",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "15 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "You exhale a cone of acid dealing 1d6 damage per two levels (max 10d6), Reflex half.",
    "source": "Spell Compendium, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "acid-sheath",
    "name": "Acid Sheath",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A sheath of acid deals damage to creatures that hit you in melee and adds acid damage to your own acid spells' potency... in practice it damages attackers and empowers acid effects you produce.",
    "source": "Spell Compendium, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "acid-storm",
    "name": "Acid Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cylinder (20-ft. radius, 20 ft. high)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "Acid rain pours over a wide area dealing 1d6 acid damage per level (max 15d6) and obscuring vision.",
    "source": "Spell Compendium, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "aid-mass",
    "name": "Aid, Mass",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more creatures, no two of which are more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As aid, but one subject per level gains the bonus on attacks and fear saves plus temporary hit points.",
    "source": "Spell Compendium, p. 8",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "aiming-at-the-target",
    "name": "Aiming At The Target",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "S",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Concentration, up to 20 minutes; see text",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a +10 circumstance bonus on each of your next few ranged attack rolls against a designated foe.",
    "source": "Spell Compendium, p. 8",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "air-breathing",
    "name": "Air Breathing",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creatures touched",
    "duration": "2",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The touched creatures can breathe air freely underwater... the spell lets water breathers and others breathe whatever medium surrounds them for its duration.",
    "source": "Spell Compendium, p. 8",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "alarm-greater",
    "name": "Alarm, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius emanation centered on a point in space",
    "duration": "4",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As alarm, but with a larger area, longer duration, and mental/visual options that resist dispelling better.",
    "source": "Spell Compendium, p. 8",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "align-fang",
    "name": "Align Fang",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "One natural weapon of an animal counts as good, evil, lawful, or chaotic (your choice) for overcoming damage reduction.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "align-fang-mass",
    "name": "Align Fang, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As align fang, but affects one creature per level.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Align Fang."
  },
  {
    "id": "align-weapon-mass",
    "name": "Align Weapon, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One weapon/level, no two of which are more than 30 ft. apart",
    "duration": "1 minute/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As align weapon, but affects one weapon per level.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "allegro",
    "name": "Allegro",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 swift action",
    "range": "20 ft.",
    "targetOrArea": "20-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As haste on yourself only: extra speed, +1 attacks/AC/Reflex, and one extra attack on a full attack.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "amanuensis",
    "name": "Amanuensis",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Object or objects with writing",
    "duration": "10",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Copies nonmagical text from a book or document onto blank pages at 250 words per minute without triggering text-based traps.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "amorphous-form",
    "name": "Amorphous Form",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing corporeal creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject's body becomes ooze-like, able to slip through small openings and gaining partial immunity to critical hits and precision damage.",
    "source": "Spell Compendium, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "amplify",
    "name": "Amplify",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius emanation centered on a creature, object, or point in space",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes; see text",
    "summary": "Sounds near you are amplified; you gain a bonus on Listen checks and the volume of your own noises increases.",
    "source": "Spell Compendium, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "analyze-portal",
    "name": "Analyze Portal",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Portal": 2,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation from you to the extreme of the range",
    "duration": "Concentration, up to 1",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "You learn the properties, destination, keys, and activation conditions of a magical portal.",
    "source": "Spell Compendium, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anarchic-storm",
    "name": "Anarchic Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Chaotic",
      "Water"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "Cylinder (20-ft. radius, 20 ft. high)",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A chaotic storm rains random energy on lawful creatures in the area for damage and harmful random effects.",
    "source": "Spell Compendium, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "anarchic-water",
    "name": "Anarchic Water",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Chaotic"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Flask of water touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Transforms water into chaotic-aligned water that damages lawful outsiders as holy water does evil ones.",
    "source": "Spell Compendium, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "angelskin",
    "name": "Angelskin",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Lawful good creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your skin gleams, granting damage reduction 5/evil... in practice the subject gains DR 5/evil and a sacred glow that penalizes evil attackers' concealment against you.",
    "source": "Spell Compendium, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anger-of-the-noonday-sun",
    "name": "Anger Of The Noonday Sun",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "20 feet",
    "targetOrArea": "All sighted creatures within a 20-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "Blinding light rays rain down, dealing fire damage to enemies and blinding them, with extra effect against undead and darkness spells.",
    "source": "Spell Compendium, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "animate-breath",
    "name": "Animate Breath",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next breath weapon instead becomes an elemental creature of similar type that fights for you briefly.",
    "source": "Spell Compendium, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "animate-fire",
    "name": "Animate Fire",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One Small fire",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A fire source animates as a small fire elemental under your control.",
    "source": "Spell Compendium, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "animate-snow",
    "name": "Animate Snow",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Cube of snow up to 20 ft. on a side",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A mass of snow animates as a huge snow creature that fights for you.",
    "source": "Spell Compendium, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "animate-water",
    "name": "Animate Water",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Cube of water up to 5 ft. on a side",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A water source animates as a small water elemental under your control.",
    "source": "Spell Compendium, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Animate Fire."
  },
  {
    "id": "animate-wood",
    "name": "Animate Wood",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "One Small or smaller wooden object",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wooden object animates as a small animated object under your control.",
    "source": "Spell Compendium, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anticipate-teleportation",
    "name": "Anticipate Teleportation",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "One willing creature touched",
    "targetOrArea": "5-ft./level radius emanation from touched creature",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You sense creatures about to arrive by teleportation in the area, delaying their arrival by 1 round and knowing their arrival points.",
    "source": "Spell Compendium, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anticipate-teleportation-greater",
    "name": "Anticipate Teleportation, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "One willing creature touched",
    "targetOrArea": "5-ft./level radius emanation from touched creature",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As anticipate teleportation, but a larger area, longer delay, and you learn more about the arriving creatures.",
    "source": "Spell Compendium, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Anticipate Teleportation."
  },
  {
    "id": "anticold-sphere",
    "name": "Anticold Sphere",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A sphere protects everyone inside from cold damage, absorbing cold up to a limit.",
    "source": "Spell Compendium, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "antidragon-aura",
    "name": "Antidragon Aura",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/ 2 levels, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and allies gain a bonus on saves and AC against dragon attacks, breath weapons, and frightful presence.",
    "source": "Spell Compendium, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "antimagic-ray",
    "name": "Antimagic Ray",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes",
    "summary": "A ray strips the target of spellcasting, spell-like abilities, and magic item use for the duration, as if in an antimagic field.",
    "source": "Spell Compendium, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anyspell",
    "name": "Anyspell",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Spell": 3
    },
    "components": "V, S, DF (and possibly M, F, and XP)",
    "castingTime": "15 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You prepare one arcane spell of up to 2nd level from a spellbook or scroll in your domain spell slot.",
    "source": "Spell Compendium, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "anyspell-greater",
    "name": "Anyspell, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Spell": 6
    },
    "components": "V, S, DF (and possibly M, F, and XP)",
    "castingTime": "15 minutes",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As anyspell, but the arcane spell can be up to 5th level.",
    "source": "Spell Compendium, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Anyspell."
  },
  {
    "id": "appraising-touch",
    "name": "Appraising Touch",
    "ruleset": "core",
    "school": "Divination",
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
    "summary": "You gain a +10 insight bonus on Appraise checks and can identify an item's market value by touch.",
    "source": "Spell Compendium, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "arc-of-lightning",
    "name": "Arc Of Lightning",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 5,
      "Windstorm": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A line between two creatures",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "A bolt arcs from you to a target and then to a second target, dealing electricity damage to both and anything between.",
    "source": "Spell Compendium, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "armor-of-darkness",
    "name": "Armor Of Darkness",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Darkness": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Shadowy armor grants you a deflection bonus to AC, darkvision, and a bonus on saves against light and good effects.",
    "source": "Spell Compendium, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "arrow-mind",
    "name": "Arrow Mind",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "While concentrating you threaten nearby squares with a bow and gain bonuses to ranged attacks and precision.",
    "source": "Spell Compendium, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "arrow-of-bone",
    "name": "Arrow Of Bone",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One projectile or thrown weapon touched",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "An arrow becomes a necromantic projectile: on a hit the victim must save or die, taking extra negative energy damage either way.",
    "source": "Spell Compendium, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "arrow-storm",
    "name": "Arrow Storm",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "For one round you can make a ranged attack against every enemy within one range increment.",
    "source": "Spell Compendium, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aspect-of-the-earth-hunter",
    "name": "Aspect Of The Earth Hunter",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6,
      "Ranger": 4
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take on a burrowing hunter's traits: tremorsense, natural armor, burrow speed, and powerful claw attacks.",
    "source": "Spell Compendium, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aspect-of-the-wolf",
    "name": "Aspect Of The Wolf",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain the form and traits of a wolf: speed 50 ft, scent, trip attack, and bonuses while in animal form.",
    "source": "Spell Compendium, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "assay-spell-resistance",
    "name": "Assay Spell Resistance",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You learn a creature's spell resistance and gain a +10 bonus on caster level checks to overcome that creature's SR for the duration.",
    "source": "Spell Compendium, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "astral-hospice",
    "name": "Astral Hospice",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "See text",
    "duration": "24",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates a safe extradimensional refuge on the Astral Plane where travelers can rest protected.",
    "source": "Spell Compendium, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "attune-form",
    "name": "Attune Form",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/3 levels",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your body adapts to a plane's harmful traits, protecting you from planar environmental damage and effects.",
    "source": "Spell Compendium, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "augment-familiar",
    "name": "Augment Familiar",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Your familiar",
    "duration": "Concentration + 1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your familiar gains bonuses to Strength, natural armor, and damage reduction while staying near you.",
    "source": "Spell Compendium, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aura-against-flame",
    "name": "Aura Against Flame",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You emanate an aura granting fire resistance 10 to you and nearby allies.",
    "source": "Spell Compendium, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aura-of-evasion",
    "name": "Aura Of Evasion",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "No",
    "spellResistance": "No",
    "summary": "You and nearby allies gain evasion-like protection: area effects that allow Reflex saves deal reduced or no damage.",
    "source": "Spell Compendium, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aura-of-glory",
    "name": "Aura Of Glory",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 2
    },
    "components": "V, DF",
    "castingTime": "1 swift action",
    "range": "Not printed in source",
    "targetOrArea": "10-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your radiant aura bolsters allies' Charisma-based checks and saves against fear.",
    "source": "Spell Compendium, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aura-of-terror",
    "name": "Aura Of Terror",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "30-ft.-radius emanation centered on you",
    "targetOrArea": "Not printed in source",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You radiate fear; creatures near you are shaken, and those who fail their saves flee in panic.",
    "source": "Spell Compendium, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "aura-of-vitality",
    "name": "Aura Of Vitality",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/3 levels, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and allies gain +4 enhancement bonuses to Strength, Dexterity, and Constitution.",
    "source": "Spell Compendium, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "avascular-mass",
    "name": "Avascular Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Deathbound": 8,
      "Sorcerer/ Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "See text",
    "savingThrow": "Fortitude partial and Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "As avasculate, but it bursts outward, entangling and harming nearby creatures in the expelled vasculature.",
    "source": "Spell Compendium, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "avasculate",
    "name": "Avasculate",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Deathbound": 7,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "You eject the target's blood vessels, dealing half its current hit points in damage and stunning it on a failed save.",
    "source": "Spell Compendium, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "avoid-planar-effects",
    "name": "Avoid Planar Effects",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2,
      "Sorcerer/ Wizard": 3
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "20 ft.",
    "targetOrArea": "One creature/level in a 20-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Protects you from the basic harmful traits of the plane you are on (fire damage on the Plane of Fire, and similar).",
    "source": "Spell Compendium, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "awaken-mass",
    "name": "Awaken, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, DF, XP",
    "castingTime": "24 hours",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One animal or tree/3 levels, no two of which are more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "As awaken, but awakens multiple animals or trees at once.",
    "source": "Spell Compendium, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "awaken-construct",
    "name": "Awaken Construct",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M, XP",
    "castingTime": "8 hours",
    "range": "Touch",
    "targetOrArea": "One construct",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Gives a construct humanlike intelligence and free will.",
    "source": "Spell Compendium, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "awaken-sin",
    "name": "Awaken Sin",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Fear",
      "Good",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One evil creature with Intelligence 3+",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject relives its sins painfully; evil subjects take Wisdom damage and are shaken when they commit fresh offenses.",
    "source": "Spell Compendium, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "awaken-undead",
    "name": "Awaken Undead",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Deathbound": 6,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S, M, XP",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "All mindless undead within a circle with a radius of 25 ft. + 5 ft./2 levels",
    "duration": "Instantaneous",
    "savingThrow": "None (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Mindless undead under your control gain intelligence and their former feats and skills.",
    "source": "Spell Compendium, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "axiomatic-storm",
    "name": "Axiomatic Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Lawful",
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
    "summary": "A lawful storm of energy punishes chaotic creatures in the area with damage and harmful effects.",
    "source": "Spell Compendium, p. 22",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "axiomatic-water",
    "name": "Axiomatic Water",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, M",
    "castingTime": "1 minute",
    "range": "Touch",
    "targetOrArea": "Flask of water touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Transforms water into law-aligned water that damages chaotic outsiders like holy water damages evil ones.",
    "source": "Spell Compendium, p. 22",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "babau-slime",
    "name": "Babau Slime",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Abyss": 3,
      "Druid": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your body exudes acidic slime that damages weapons striking you and adds acid to your touch.",
    "source": "Spell Compendium, p. 22",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "backbiter",
    "name": "Backbiter",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One weapon",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes (object)",
    "summary": "The next time the subject strikes with a melee weapon, the weapon bends and strikes the subject instead.",
    "source": "Spell Compendium, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "backlash",
    "name": "Backlash",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The next spell cast in the area rebounds on its caster for damage (formerly mantel of last resort style protection)... in practice, a triggered ward that punishes the next enemy spellcast with force damage.",
    "source": "Spell Compendium, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "balancing-lorecall",
    "name": "Balancing Lorecall",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain bonuses to Balance and Listen, can balance on difficult surfaces, and sense the distance to sounds precisely.",
    "source": "Spell Compendium, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "baleful-transposition",
    "name": "Baleful Transposition",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two creatures of up to Large size",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Two creatures of the same size swap positions; Will save for an unwilling subject.",
    "source": "Spell Compendium, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "ball-lightning",
    "name": "Ball Lightning",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One lightning ball",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "A sphere of lightning you direct rolls into creatures dealing electricity damage each round.",
    "source": "Spell Compendium, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "balor-nimbus",
    "name": "Balor Nimbus",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Abyss": 4,
      "Cleric": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Flames like a balor's wreath your body, damaging nearby creatures and grapplers with fire.",
    "source": "Spell Compendium, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bands-of-steel",
    "name": "Bands Of Steel",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One Medium or smaller creature",
    "duration": "1",
    "savingThrow": "Reflex partial",
    "spellResistance": "No",
    "summary": "Metal bands clamp onto the subject, entangling or helplessly binding it on a failed Reflex save.",
    "source": "Spell Compendium, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "barghests-feast",
    "name": "Barghest’S Feast",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "Corpse touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Destroys a corpse utterly, preventing resurrection and feeding you its life force as temporary hit points.",
    "source": "Spell Compendium, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "battering-ram",
    "name": "Battering Ram",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One object or creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A force effect slams a door or creature like a battering ram, dealing damage and bull rushing it.",
    "source": "Spell Compendium, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "battle-hymn",
    "name": "Battle Hymn",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "All allies within 30 ft.",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Allies under your music-like effect may reroll one Will save each round and gain morale benefits in combat.",
    "source": "Spell Compendium, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Charm"
  },
  {
    "id": "beast-claws",
    "name": "Beast Claws",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your hands grow claws dealing slashing damage as natural weapons.",
    "source": "Spell Compendium, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "beastland-ferocity",
    "name": "Beastland Ferocity",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 1,
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject fights on when below 0 hp as if disabled, gaining a Strength bonus, without dying until -10.",
    "source": "Spell Compendium, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "beget-bogun",
    "name": "Beget Bogun",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, M, XP",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Tiny construct",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You create a bogun, a small nature construct servant, from gathered materials over the casting.",
    "source": "Spell Compendium, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "belker-claws",
    "name": "Belker Claws",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Your arms become smoky claws that deal damage and can smoke-claw victims.",
    "source": "Spell Compendium, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "benign-transposition",
    "name": "Benign Transposition",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two willing creatures of up to Large size",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You swap positions with a willing creature of your size.",
    "source": "Spell Compendium, p. 27",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "bestow-curse-greater",
    "name": "Bestow Curse, Greater",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Permanent",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As bestow curse, but stronger penalties: -8 to an ability, -6 on rolls and checks, or a severe action limitation.",
    "source": "Spell Compendium, p. 27",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "binding-winds",
    "name": "Binding Winds",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 2,
      "Windstorm": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Concentration",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "Winds hold a flying creature in place or slow its movement, hampering flight.",
    "source": "Spell Compendium, p. 27",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-king",
    "name": "Bite Of The King",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Gluttony": 8,
      "Hunger": 8
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One living creature of a size that does not exceed caster's",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You swallow a smaller creature whole; it takes damage inside you each round.",
    "source": "Spell Compendium, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-werebear",
    "name": "Bite Of The Werebear",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain bearlike lycanthrope traits: large Strength/Constitution boosts, natural armor, and bear claws and bite.",
    "source": "Spell Compendium, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-wereboar",
    "name": "Bite Of The Wereboar",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain boarlike traits: Strength and Constitution boosts, natural armor, and a gore attack with ferocity.",
    "source": "Spell Compendium, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-wererat",
    "name": "Bite Of The Wererat",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain ratlike traits: Dexterity boost, small size benefits, bite attack, and weapon finesse benefits.",
    "source": "Spell Compendium, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-weretiger",
    "name": "Bite Of The Weretiger",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain tigerlike traits: big Strength/Dexterity boosts, natural armor, claws and bite with pounce potential.",
    "source": "Spell Compendium, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bite-of-the-werewolf",
    "name": "Bite Of The Werewolf",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain wolflike traits: Strength, Dexterity, and Constitution boosts, natural armor, claw and bite attacks.",
    "source": "Spell Compendium, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "black-blade-of-disaster",
    "name": "Black Blade Of Disaster",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Sword-shaped planar rift",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A planar rift shaped like a sword attacks foes on its own, dealing heavy damage and disintegrating what it kills.",
    "source": "Spell Compendium, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "blackfire",
    "name": "Blackfire",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Fortitude partial and Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "Black flames consume the subject, dealing Constitution damage each round and spreading to nearby creatures.",
    "source": "Spell Compendium, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blacklight",
    "name": "Blacklight",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Darkness": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A 20-ft.-radius emanation centered on a creature, object, or point in space",
    "duration": "1",
    "savingThrow": "Will negates or none (object)",
    "spellResistance": "Yes",
    "summary": "Creates darkness only you can see through within its area.",
    "source": "Spell Compendium, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blade-of-pain-and-fear",
    "name": "Blade Of Pain And Fear",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Assassin": 2,
      "Blackguard": 2,
      "Cleric": 3,
      "Deathbound": 2,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Swordlike column of gnashing teeth",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A blade of force forms in your hand; its strikes deal damage and can frighten the wounded.",
    "source": "Spell Compendium, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blade-storm",
    "name": "Blade Storm",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You whirl to attack every enemy in reach once... in practice, as whirlwind-style: make one melee attack against each opponent in your threatened area.",
    "source": "Spell Compendium, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blade-thirst",
    "name": "Blade Thirst",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "One slashing weapon",
    "duration": "1",
    "savingThrow": "None (object)",
    "spellResistance": "Yes (object)",
    "summary": "A weapon you touch gains a +3 enhancement bonus for the duration.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blades-of-fire",
    "name": "Blades Of Fire",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Up to two melee weapons you are wielding",
    "duration": "1 round",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Weapons in hand burst into flame, dealing extra fire damage on hits for a few rounds.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "bladeweave",
    "name": "Bladeweave",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Pattern"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "See text",
    "summary": "Your weapon moves in dizzying patterns: one struck creature per round must save or be dazed.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blast-of-flame",
    "name": "Blast Of Flame",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "A cone of flame deals 1d6 fire damage per level (max 10d6).",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "blast-of-force",
    "name": "Blast Of Force",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Force": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A ray of force deals damage and can knock the target prone.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bless-weapon-swift",
    "name": "Bless Weapon, Swift",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As bless weapon, cast as a swift action.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blessed-aim",
    "name": "Blessed Aim",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "50 ft.",
    "targetOrArea": "50-ft.-radius spread centered on you",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "No",
    "summary": "You and allies gain a +2 morale bonus on ranged attack rolls.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blessing-of-bahamut",
    "name": "Blessing Of Bahamut",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Paladin": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain dragonlike protection: damage reduction and a breath of energy to use once.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blinding-breath",
    "name": "Blinding Breath",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Light"
    ],
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
    "summary": "Your next breath weapon also blinds creatures caught in it.",
    "source": "Spell Compendium, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Breath Flare."
  },
  {
    "id": "blinding-spittle",
    "name": "Blinding Spittle",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One missile of spit",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You spit acid at a creature's eyes, blinding it on a failed save.",
    "source": "Spell Compendium, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blindsight",
    "name": "Blindsight",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains blindsight out to 30 feet.",
    "source": "Spell Compendium, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blindsight-greater",
    "name": "Blindsight, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains blindsight out to 60 feet and finer senses.",
    "source": "Spell Compendium, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Blindsight."
  },
  {
    "id": "blink-greater",
    "name": "Blink, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Celerity": 8,
      "Sorcerer/ Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round/level (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As blink, but you control the blinking, taking less miss chance and striking as invisible when you attack.",
    "source": "Spell Compendium, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blistering-radiance",
    "name": "Blistering Radiance",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire",
      "Light"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "50-ft.-radius spread",
    "duration": "1",
    "savingThrow": "None and Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A stationary globe of light deals fire damage each round to creatures in a wide area.",
    "source": "Spell Compendium, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blood-frenzy",
    "name": "Blood Frenzy",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Any creature with the rage ability",
    "duration": "Special; see text",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject enters a frenzy like rage, gaining Strength and Constitution but losing control while blood is in the air.",
    "source": "Spell Compendium, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blood-sirocco",
    "name": "Blood Sirocco",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped emanation centered on you or on a point in space",
    "duration": "1",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "A hot bloody wind scourges the area, dealing damage and exhausting creatures caught in it.",
    "source": "Spell Compendium, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blood-to-water",
    "name": "Blood To Water",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Up to five living creatures, no two of which are more than 30 ft. apart",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "The target's blood turns to water, dealing heavy Constitution damage.",
    "source": "Spell Compendium, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "blood-wind",
    "name": "Blood Wind",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 caster levels)",
    "targetOrArea": "A single creature with Intelligence 4 or higher",
    "duration": "1 round",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A touched creature can make its natural attacks at range once, hurling them on a wind of blood.",
    "source": "Spell Compendium, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bloodhound",
    "name": "Bloodhound",
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
    "duration": "24 hours (D)",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain bonuses to track a creature whose blood or scent you have, including Survival and scent-like tracking benefits.",
    "source": "Spell Compendium, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bloodstar",
    "name": "Bloodstar",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A bloodstar",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A floating orb marks a wounded creature; each round it bleeds the target for damage while it remains hurt.",
    "source": "Spell Compendium, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "bodaks-glare",
    "name": "Bodak’S Glare",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Abyss": 8,
      "Cleric": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your gaze gains a death effect like a bodak's; creatures meeting it must save or die.",
    "source": "Spell Compendium, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "body-blades",
    "name": "Body Blades",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Blades grow from your body, usable as weapons and damaging grapplers.",
    "source": "Spell Compendium, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "body-harmonic",
    "name": "Body Harmonic",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Concentration, up to 1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You attune your body to vibrate through solid objects, passing through barriers and gaining protection.",
    "source": "Spell Compendium, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "body-of-the-sun",
    "name": "Body Of The Sun",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "5 ft.",
    "targetOrArea": "5-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Your body radiates fire, dealing damage to creatures adjacent to you each round.",
    "source": "Spell Compendium, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "body-of-war",
    "name": "Body Of War",
    "ruleset": "core",
    "school": "Transmutation",
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
    "summary": "Your body transforms into a war machine of a construct: size, natural armor, slam attacks, and construct traits.",
    "source": "Spell Compendium, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bolt-of-glory",
    "name": "Bolt Of Glory",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 6,
      "Glory": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A ray of positive energy deals heavy damage, especially to evil outsiders and undead.",
    "source": "Spell Compendium, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bolts-of-bedevilment",
    "name": "Bolts Of Bedevilment",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 5,
      "Madness": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Bolts of chaotic energy confuse struck creatures.",
    "source": "Spell Compendium, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bombardment",
    "name": "Bombardment",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (15-ft. radius, 40 ft. high)",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "No",
    "summary": "Rocks rain from the sky, crushing and burying creatures in the area under debris.",
    "source": "Spell Compendium, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "bonefiddle",
    "name": "Bonefiddle",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature with a skeleton or exoskeleton",
    "duration": "Concentration, up to 1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject's bones vibrate audibly and painfully, dealing sonic damage and penalizing actions.",
    "source": "Spell Compendium, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bottle-of-smoke",
    "name": "Bottle Of Smoke",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "One smoky, horselike creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Smoke pours from a bottle you hold, concealing an area as it spreads.",
    "source": "Spell Compendium, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "brain-spider",
    "name": "Brain Spider",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 7,
      "Mind": 7
    },
    "components": "V, S, M, DF",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Up to eight living creatures",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You plant mental probes in up to eight creatures, reading their thoughts and learning through their senses.",
    "source": "Spell Compendium, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "brambles",
    "name": "Brambles",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Wooden weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wooden weapon gains a +1 enhancement bonus and grows damaging spikes... creatures striking it take piercing damage.",
    "source": "Spell Compendium, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "branch-to-branch",
    "name": "Branch To Branch",
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
    "summary": "You move through trees and branches at full speed with bonuses to Climb and Jump in forests.",
    "source": "Spell Compendium, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "breath-flare",
    "name": "Breath Flare",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next breath weapon dazzles or blinds creatures in its area in addition to its normal effect.",
    "source": "Spell Compendium, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "breath-of-the-jungle",
    "name": "Breath Of The Jungle",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Mist spreads in a 40-ft. radius, 20 ft. high",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You exhale a mist that invigorates allies, granting fast healing briefly and removing fatigue.",
    "source": "Spell Compendium, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "breath-weapon-admixture",
    "name": "Breath Weapon Admixture",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
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
    "summary": "Your next breath weapon mixes two energy types, dealing half its damage as each of two chosen energies.",
    "source": "Spell Compendium, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "breath-weapon-substitution",
    "name": "Breath Weapon Substitution",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
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
    "summary": "Your next breath weapon deals a different energy type of your choice instead of its normal type.",
    "source": "Spell Compendium, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "briar-web",
    "name": "Briar Web",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "40-ft.-radius spread",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As web, but the strands are thorny vines that also deal piercing damage to creatures moving through them.",
    "source": "Spell Compendium, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "brilliant-aura",
    "name": "Brilliant Aura",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Druid": 8,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Weapons carried by one creature/2 levels, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your allies' weapons blaze with energy, gaining the brilliant energy quality (passing through nonliving matter) briefly.",
    "source": "Spell Compendium, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Brilliant Blade."
  },
  {
    "id": "brilliant-blade",
    "name": "Brilliant Blade",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Druid": 7,
      "Sorcerer/ Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One melee or thrown weapon, or fifty projectiles (all of which must be in contact with each other at the time of casting)",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "One weapon gains the brilliant energy property for the duration, ignoring armor and shield bonuses.",
    "source": "Spell Compendium, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "bristle",
    "name": "Bristle",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Suit of armor touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Your skin sprouts stiff bristles, granting a natural armor bonus and damaging creatures that grapple you.",
    "source": "Spell Compendium, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "buoyant-lifting",
    "name": "Buoyant Lifting",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "S, DF",
    "castingTime": "1 immediate action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One willing creature/ level, no two of which are more than 20 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Raises a sunken object or creature toward the surface with great lifting force.",
    "source": "Spell Compendium, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "burning-blood",
    "name": "Burning Blood",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature; see text",
    "duration": "1",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "The subject's blood ignites: each round it takes fire and acid damage, worse if it has the fire or water subtype.",
    "source": "Spell Compendium, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "burning-sword",
    "name": "Burning Sword",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
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
    "summary": "A touched weapon deals extra fire damage and can ignite targets on a critical hit.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "burrow",
    "name": "Burrow",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains a burrow speed of 20 feet through soil and loose earth.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "burrow-mass",
    "name": "Burrow, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As burrow, for one creature per level.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Burrow."
  },
  {
    "id": "buzzing-bee",
    "name": "Buzzing Bee",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A conjured bee harasses one creature, distracting it with a penalty on attacks and checks until the bee is destroyed.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "cacophonic-burst",
    "name": "Cacophonic Burst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A blast of sound deals sonic damage in a burst and deafens creatures that fail their saves.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cacophonic-shield",
    "name": "Cacophonic Shield",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "A shield of sound damages and deafens creatures that strike you in melee.",
    "source": "Spell Compendium, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "call-kolyarut",
    "name": "Call Kolyarut",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 7,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called kolyarut",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls a kolyarut inevitable to aid you, as planar ally, for a negotiated service.",
    "source": "Spell Compendium, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "call-marut",
    "name": "Call Marut",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 9,
      "Mechanus": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels) 42",
    "targetOrArea": "One called marut",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls a marut inevitable to aid you, as planar ally.",
    "source": "Spell Compendium, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "call-zelekhut",
    "name": "Call Zelekhut",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One called zelekhut",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls a zelekhut inevitable to aid you, as planar ally.",
    "source": "Spell Compendium, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "caltrops",
    "name": "Caltrops",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "See text",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Covers an area with magical caltrops that wound feet and slow movement as mundane caltrops, but more numerous.",
    "source": "Spell Compendium, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "camouflage",
    "name": "Camouflage",
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
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a +10 competence bonus on Hide checks by blending with your surroundings.",
    "source": "Spell Compendium, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "camouflage-mass",
    "name": "Camouflage, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Any number of creatures, no two of which are more than 60 ft. apart",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As camouflage, for one creature per level.",
    "source": "Spell Compendium, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Camouflage."
  },
  {
    "id": "capricious-zephyr",
    "name": "Capricious Zephyr",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "5-ft.-diameter sphere",
    "duration": "1",
    "savingThrow": "None or Reflex partial; see text",
    "spellResistance": "Yes",
    "summary": "A fickle wind gust follows a creature, bull rushing and harassing it at random moments.",
    "source": "Spell Compendium, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cast-in-stone",
    "name": "Cast In Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None and Fortitude negates; see text",
    "spellResistance": "No",
    "summary": "The subject is permanently turned to stone along with its gear, as flesh to stone without a save at close range by gaze-like contact... it petrifies one creature on a failed Fortitude save permanently.",
    "source": "Spell Compendium, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "castigate",
    "name": "Castigate",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Cleric": 4,
      "Paladin": 4,
      "Purification": 4
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "Your divine rebuke deals sonic damage to creatures of opposing alignment and deafens them.",
    "source": "Spell Compendium, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "celebration",
    "name": "Celebration",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "All creatures in a 15-ft.- radius burst",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Festive magic makes subjects joyous and slightly drunk: morale bonuses to attacks and saves, with penalties to some skills.",
    "source": "Spell Compendium, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "chain-missile",
    "name": "Chain Missile",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "One creature, plus one more creature/2 levels (each of which must be within 30 ft. of the primary target)",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Magic-missile-like bolts strike a primary target and arc to nearby secondary targets.",
    "source": "Spell Compendium, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "chain-of-eyes",
    "name": "Chain Of Eyes",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 4,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You can see through the eyes of a creature you touch, and transfer the link to creatures it touches.",
    "source": "Spell Compendium, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "charge-of-the-triceratops",
    "name": "Charge Of The Triceratops",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes",
    "summary": "You gain the charging power of a triceratops: a powerful gore attack and trample benefits on a charge.",
    "source": "Spell Compendium, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cheat",
    "name": "Cheat",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Greed": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "No",
    "summary": "You magically reroll one die roll in a game of chance or similar roll you just made.",
    "source": "Spell Compendium, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "checkmates-light",
    "name": "Checkmate’S Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Melee weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ray of light that harms evil creatures and reveals their alignment and intentions.",
    "source": "Spell Compendium, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "chill-of-the-grave",
    "name": "Chill Of The Grave",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Deathbound": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You gain undead-like chill: cold resistance and your touch deals cold damage.",
    "source": "Spell Compendium, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "circle-dance",
    "name": "Circle Dance",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 3,
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 minute",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You learn the direction and distance to a creature whose name or description you know, by dancing around a circle.",
    "source": "Spell Compendium, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "clarity-of-mind",
    "name": "Clarity Of Mind",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Balance": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains a bonus on saves against mind-affecting effects and can shake off confusion.",
    "source": "Spell Compendium, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "claws-of-the-bear",
    "name": "Claws Of The Bear",
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
    "summary": "Your hands become bear claws dealing slashing damage, with improved grab.",
    "source": "Spell Compendium, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "claws-of-darkness",
    "name": "Claws Of Darkness",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes; see text",
    "summary": "Shadowy claws extend from your hands dealing cold damage with reach.",
    "source": "Spell Compendium, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "clear-mind",
    "name": "Clear Mind",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a +3 bonus on Will saves for the duration, sharpening focus against mental influence.",
    "source": "Spell Compendium, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "climb-walls",
    "name": "Climb Walls",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain a climb speed and bonuses for climbing walls and ceilings like a spider.",
    "source": "Spell Compendium, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloak-of-bravery",
    "name": "Cloak Of Bravery",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 3,
      "Courage": 3,
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "60-ft.-radius emanation centered on you",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You emanate courage: allies near you gain a morale bonus on saves against fear.",
    "source": "Spell Compendium, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloak-of-bravery-greater",
    "name": "Cloak Of Bravery, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Courage": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "1 mile; see text",
    "targetOrArea": "1-mile-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As cloak of bravery, but stronger and covering a wide area, making allies nearly fearless.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Cloak Of Bravery."
  },
  {
    "id": "cloak-of-dark-power",
    "name": "Cloak Of Dark Power",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Drow": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A cloak of darkness grants you protection from light-based effects and a bonus against good spells.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloak-of-the-sea",
    "name": "Cloak Of The Sea",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You can breathe underwater, gain a swim speed, and freedom of movement in water, turning your cloak into fins.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloak-pool",
    "name": "Cloak Pool",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One color pool",
    "duration": "1",
    "savingThrow": "Will negates (harmless, object)",
    "spellResistance": "No",
    "summary": "You disguise a pool of water as normal ground or change its apparent appearance.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "close-wounds",
    "name": "Close Wounds",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will half (harmless); see text",
    "spellResistance": "Yes (harmless)",
    "summary": "As an immediate action, heals a small amount of damage to a nearby creature, potentially saving it from death.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "cloud-of-bewilderment",
    "name": "Cloud Of Bewilderment",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "10-ft. cube",
    "duration": "1",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "No",
    "summary": "As stinking cloud, but smaller and lower level: nauseating fumes in a small cloud.",
    "source": "Spell Compendium, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloud-wings",
    "name": "Cloud Wings",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain a fly speed made of cloudstuff while outdoors, faster with updrafts.",
    "source": "Spell Compendium, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloudburst",
    "name": "Cloudburst",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "100-ft.-radius emanation",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A brief downpour drenches an area, dousing fires and hampering vision and ranged attacks.",
    "source": "Spell Compendium, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cloud-walkers",
    "name": "Cloud-Walkers",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 7,
      "Windstorm": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/level",
    "duration": "10",
    "savingThrow": "Reflex negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You and companions can walk on clouds and fog as if solid ground.",
    "source": "Spell Compendium, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "clutch-of-orcus",
    "name": "Clutch Of Orcus",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One humanoid",
    "duration": "Concentration, up to 1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A spectral hand clutches the victim's heart, dealing damage each round and potentially killing it as the hand squeezes.",
    "source": "Spell Compendium, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cocoon",
    "name": "Cocoon",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, M, XP",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corpse",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A cocoon of force and silk encases a dying creature, preserving its life in stasis until it can be healed.",
    "source": "Spell Compendium, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "cold-fire",
    "name": "Cold Fire",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One fire source (up to a 20-ft. cube) or one creature; see text",
    "duration": "1",
    "savingThrow": "No (fire source) or Fortitude half (creature)",
    "spellResistance": "No (fire source)",
    "summary": "Existing fire burns cold: it sheds light but deals cold damage instead of fire, freezing what it touches.",
    "source": "Spell Compendium, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cold-snap",
    "name": "Cold Snap",
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
    "castingTime": "1 minute",
    "range": "1 mile 50",
    "targetOrArea": "1-mile-radius circle centered on you",
    "duration": "2d4 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "The temperature in a wide area plunges for days, bringing frostbite conditions and killing crops.",
    "source": "Spell Compendium, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "combust",
    "name": "Combust",
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
    "range": "Touch",
    "targetOrArea": "Touched creature or combustible object that weighs no more than 25 lb./level",
    "duration": "Instantaneous; see text",
    "savingThrow": "Reflex partial",
    "spellResistance": "Yes",
    "summary": "The touched creature catches fire, taking fire damage now and continuing damage as it burns.",
    "source": "Spell Compendium, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cometfall",
    "name": "Cometfall",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level) Effect: 400-pound ball of rock and ice",
    "targetOrArea": "5-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "A comet plummets where you point, dealing heavy damage, knocking creatures down, and leaving a crater of difficult terrain.",
    "source": "Spell Compendium, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "cone-of-dimness",
    "name": "Cone Of Dimness",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "A cone of shadow dims sight: creatures inside take penalties on attacks and Spot checks, and it counters light.",
    "source": "Spell Compendium, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "consumptive-field",
    "name": "Consumptive Field",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Creatures dying near you feed you strength: each death grants you temporary hit points and a Strength bonus (capped).",
    "source": "Spell Compendium, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "consumptive-field-greater",
    "name": "Consumptive Field, Greater",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Death",
      "Evil"
    ],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "30-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As consumptive field, but the gains are larger and reach further.",
    "source": "Spell Compendium, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Consumptive Field."
  },
  {
    "id": "contagion-mass",
    "name": "Contagion, Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 5,
      "Sorcerer/ Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius spread Forcing a hacking cough, you complete the spell. In the area you've designated, you see swirling red and black mist rise up, accompanied b",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As contagion, infecting multiple creatures with diseases of your choice.",
    "source": "Spell Compendium, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "contagious-fog",
    "name": "Contagious Fog",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Fog spread 20 ft. radius, 20 ft. high",
    "duration": "1",
    "savingThrow": "See text Spitting the last phrase of the spell, you throw out your arm, and a brown mist whirls into being around your foes.",
    "spellResistance": "Not printed in source",
    "summary": "As fog cloud, but the fog carries a disease or contagion effect to those breathing it... in practice a fog cloud whose vapors sicken creatures inside.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "contagious-touch",
    "name": "Contagious Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your touch carries disease; each touch infects a creature, and the contagion can keep spreading for several uses.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "contingent-energy-resistance",
    "name": "Contingent Energy Resistance",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4,
      "Sorcerer/ Wizard": 5
    },
    "components": "V, S, M 292),",
    "castingTime": "1 minute",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "When the subject first takes energy damage of a chosen type, a resist energy effect triggers automatically.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "conviction",
    "name": "Conviction",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains a +2 morale bonus on saving throws, rising with your level.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "conviction-mass",
    "name": "Conviction, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Allies in a 20-ft.-radius burst",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As conviction, for multiple subjects.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Conviction."
  },
  {
    "id": "corona-of-cold",
    "name": "Corona Of Cold",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "10-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A halo of cold damages nearby creatures each round and extinguishes flames.",
    "source": "Spell Compendium, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "corporeal-instability",
    "name": "Corporeal Instability",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject's body flickers between planes, gaining blink-like displacement but taking damage as its form destabilizes.",
    "source": "Spell Compendium, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "corpse-candle",
    "name": "Corpse Candle",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ghostly hand and candle",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A floating ghostly light reveals corpses and undead nearby and sheds eerie illumination.",
    "source": "Spell Compendium, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "corrosive-grasp",
    "name": "Corrosive Grasp",
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
    "range": "Touch",
    "targetOrArea": "Creatures touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As shocking grasp, but a touch of acid dealing 1d6 acid damage per level (max 5d6).",
    "source": "Spell Compendium, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "countermoon",
    "name": "Countermoon",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One lycanthrope",
    "duration": "12 hours",
    "savingThrow": "Will negates (D)",
    "spellResistance": "Yes",
    "summary": "Suppresses lycanthropy: prevents a lycanthrope from changing shape for the duration.",
    "source": "Spell Compendium, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "crabwalk",
    "name": "Crabwalk",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You move like a crab, gaining bonuses to stability and movement in any direction without turning penalties.",
    "source": "Spell Compendium, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "crawling-darkness",
    "name": "Crawling Darkness",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Living darkness crawls over an area, concealing and chilling creatures inside it.",
    "source": "Spell Compendium, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "creaking-cacophony",
    "name": "Creaking Cacophony",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 3,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "40-ft.-radius spread",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Illusory noises distract and deafen: creatures in the area take penalties on Listen and concentration.",
    "source": "Spell Compendium, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Figment"
  },
  {
    "id": "create-magic-tattoo",
    "name": "Create Magic Tattoo",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M, F",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "You inscribe a temporary magic tattoo granting the subject a chosen benefit such as +2 to a stat, attack, or caster level.",
    "source": "Spell Compendium, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "creeping-cold",
    "name": "Creeping Cold",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "3 rounds",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "Cold creeps through the subject: 1d6 cold damage the first round, 2d6 the second, 3d6 the third.",
    "source": "Spell Compendium, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "creeping-cold-greater",
    "name": "Creeping Cold, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "See text",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "As creeping cold, but the damage keeps escalating over more rounds.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Creeping Cold."
  },
  {
    "id": "critical-strike",
    "name": "Critical Strike",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Bard": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "For one round your weapon's threat range doubles and you gain a bonus on confirm rolls and sneak-attack-like precision.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "crown-of-glory",
    "name": "Crown Of Glory",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Glory": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "20 ft.",
    "targetOrArea": "You and one creature/level in a 20-ft.-radius burst centered on you",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A radiant crown gives you a +4 Charisma boost, sacred bonuses, and an aura that awes and influences subjects.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "crumble",
    "name": "Crumble",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One structure or construct",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half (object)",
    "spellResistance": "Yes (object)",
    "summary": "Weakens and crumbles worked stone and earth, collapsing structures and fortifications.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "curse-of-ill-fortune",
    "name": "Curse Of Ill Fortune",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Blackguard": 2,
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject takes a -3 penalty on attacks, saves, and checks.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "curse-of-ill-fortune-mass",
    "name": "Curse Of Ill Fortune, Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Enemies in a 20-ft.-radius burst",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As curse of ill fortune, but affecting several creatures — in practice the mass version from its own entry: penalties to many foes.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Curse Of Ill Fortune."
  },
  {
    "id": "curse-of-impending-blades",
    "name": "Curse Of Impending Blades",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Ranger": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "The subject takes a -2 penalty to AC as blades seem drawn to it.",
    "source": "Spell Compendium, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "curse-of-impending-blades-mass",
    "name": "Curse Of Impending Blades, Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Ranger": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Enemies in a 20-ft.-radius burst",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As curse of impending blades, for one creature per level.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Curse Of Impending Blades."
  },
  {
    "id": "curse-of-lycanthropy",
    "name": "Curse Of Lycanthropy",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Pestilence": 6
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Humanoid touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject contracts lycanthropy of a chosen type on a failed save.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cursed-blade",
    "name": "Cursed Blade",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Assassin": 4
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "One melee weapon",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Wounds from the cursed weapon cannot be healed magically until the curse is removed.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cutting-hand",
    "name": "Cutting Hand",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Your hand",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your hand becomes blade-sharp, dealing slashing damage and cutting through objects like a sword.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "cyclonic-blast",
    "name": "Cyclonic Blast",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "120 ft.",
    "targetOrArea": "120-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A blast of cyclone wind deals damage and hurls creatures in a line backward, knocking them prone.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "daggerspell-stance",
    "name": "Daggerspell Stance",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, F",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "While holding daggers you gain defensive and offensive bonuses: AC, concentration, and the ability to hold spells in the blades.",
    "source": "Spell Compendium, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dance-of-the-unicorn",
    "name": "Dance Of The Unicorn",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Purification": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "5 ft./level",
    "targetOrArea": "5 ft./level-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You purify an area: a mist cleanses poison, disease, and pollution, and hinders evil outsiders.",
    "source": "Spell Compendium, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dark-way",
    "name": "Dark Way",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Cleric": 2,
      "Sorcerer/ Wizard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One bridge of force 5 ft. wide, 1 in. thick, and up to 20 ft./level long",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Creates a bridge of shadow-stuff that supports weight across a gap.",
    "source": "Spell Compendium, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "darkbolt",
    "name": "Darkbolt",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Darkness": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One ray/2 levels (maximum seven rays)",
    "duration": "Instantaneous; see text",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "Bolts of darkness deal damage and daze evil... in practice, dark energy bolts that damage and can stun the target.",
    "source": "Spell Compendium, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "darkfire",
    "name": "Darkfire",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "Flame in your palm",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A flame you can throw repeatedly deals fire damage as ranged touch attacks for the duration.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "darkvision-mass",
    "name": "Darkvision, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "10 ft.",
    "targetOrArea": "Allies in a 10-ft.-radius burst centered on you As you conclude the spell's casting, you are aware of being able to see without light. A glance at your allies",
    "duration": "1 hour/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As darkvision, for one creature per level.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dawn",
    "name": "Dawn",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Druid": 0,
      "Ranger": 1
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "15 ft.",
    "targetOrArea": "All creatures in a 15-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You awaken sleeping creatures in the area refreshed, ending sleep effects and fatigue.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dead-end",
    "name": "Dead End",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Bard": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/level touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless) or Will disbelief (if interacted with); see text",
    "spellResistance": "Yes",
    "summary": "You cover your tracks and create a false trail, making pursuers lose your path.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "deadfall",
    "name": "Deadfall",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Mass of dead wood forming in a cylinder (20-ft. radius, 40 ft. high); see text",
    "duration": "Instantaneous; see text",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "A huge dead tree falls where you direct, crushing creatures beneath it.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "deafening-clang",
    "name": "Deafening Clang",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Touch",
    "targetOrArea": "Your weapon",
    "duration": "1 round",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "A touched weapon rings loudly on hits, dealing sonic damage and possibly deafening the struck creature.",
    "source": "Spell Compendium, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "death-armor",
    "name": "Death Armor",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As fire shield's necromantic cousin: a shroud of negative energy damages creatures that strike you in melee.",
    "source": "Spell Compendium, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "death-dragon",
    "name": "Death Dragon",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil",
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "Dragon-shaped armor of energy and bones",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take on an undead dragon's aspect: breath of negative energy, frightful presence, and spectral form benefits.",
    "source": "Spell Compendium, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "death-pact",
    "name": "Death Pact",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Pact": 8
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Willing living creature touched",
    "duration": "Permanent until",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "If you die during the duration, a prearranged effect revives you (as a contingent raise) at the cost of Constitution.",
    "source": "Spell Compendium, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "death-throes",
    "name": "Death Throes",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "If you are killed during the duration, your body explodes in a burst of energy damaging nearby creatures.",
    "source": "Spell Compendium, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "death-ward-mass",
    "name": "Death Ward, Mass",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Druid": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/ level, no two of which are more than 30 ft. apart Sensing the spark of life in your allies through your magic, you bolster that spark and protect",
    "duration": "1 minute/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As death ward, for one creature per level.",
    "source": "Spell Compendium, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "decomposition",
    "name": "Decomposition",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "50 ft.",
    "targetOrArea": "Living enemies within a 50-ft.- radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Corpses near a wounded creature rot quickly; wounds festering nearby deal extra damage to the subject each round.",
    "source": "Spell Compendium, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "decoy-image",
    "name": "Decoy Image",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Figment that mimics you and all allies within 50 ft. of you",
    "duration": "8 hours (D)",
    "savingThrow": "Will disbelief; see text",
    "spellResistance": "No",
    "summary": "Creates an illusory duplicate of an animal or companion to draw attacks away from the real creature.",
    "source": "Spell Compendium, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Figment"
  },
  {
    "id": "deep-breath",
    "name": "Deep Breath",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Fills your lungs with magically held air, letting you breathe underwater or hold your breath far longer.",
    "source": "Spell Compendium, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "deeper-darkvision",
    "name": "Deeper Darkvision",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants darkvision to 90 feet that penetrates magical darkness of lower level.",
    "source": "Spell Compendium, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "defenestrating-sphere",
    "name": "Defenestrating Sphere",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "2-ft.-radius sphere",
    "duration": "1",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A sphere of wind batters a creature and on a failed save hurls it through the nearest opening or off its feet.",
    "source": "Spell Compendium, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dehydrate",
    "name": "Dehydrate",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "You draw the water from a creature, dealing damage and fatiguing or exhausting it as it desiccates.",
    "source": "Spell Compendium, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "deific-vengeance",
    "name": "Deific Vengeance",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Purification": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will half",
    "spellResistance": "Yes",
    "summary": "Divine power smites a creature that just harmed you or an ally, dealing sacred damage.",
    "source": "Spell Compendium, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "delay-death",
    "name": "Delay Death",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 immediate action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject cannot die from hit point damage while the spell lasts, remaining at -9 or lower without dying.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "delay-disease",
    "name": "Delay Disease",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "24 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Diseases affecting the subject do not progress or harm it for the duration.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "delusions-of-grandeur",
    "name": "Delusions Of Grandeur",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "10",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject believes itself important and powerful, gaining a Charisma bonus but taking Wisdom penalties and behaving arrogantly.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "demon-dirge",
    "name": "Demon Dirge",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Living creature",
    "duration": "1d6 rounds; see text",
    "savingThrow": "None or Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A dirge that torments evil outsiders, dealing sonic damage and slowing demons in the area.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "demonhide",
    "name": "Demonhide",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Evil creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your skin becomes demon-like, granting natural armor and damage reduction overcome by cold iron or good.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "desiccating-bubble",
    "name": "Desiccating Bubble",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "3-ft.-radius sphere of air",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "A bubble of dry air surrounds a water creature, damaging and suffocating it as moisture is stripped away.",
    "source": "Spell Compendium, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "detect-favored-enemy",
    "name": "Detect Favored Enemy",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "60 ft.",
    "targetOrArea": "Quarter circle emanating from you to the extreme of the range",
    "duration": "Concentration, up to 10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You can sense the presence and direction of your favored enemies nearby.",
    "source": "Spell Compendium, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "devil-blight",
    "name": "Devil Blight",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Living creature",
    "duration": "1d6 rounds",
    "savingThrow": "None or Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A blight that torments lawful evil outsiders, dealing damage and weakening devils in the area.",
    "source": "Spell Compendium, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "diamondsteel",
    "name": "Diamondsteel",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Suit of metal armor touched",
    "duration": "1",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "A suit of armor gains extra protection: its armor bonus partially applies as damage reduction for the duration.",
    "source": "Spell Compendium, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dimension-door-greater",
    "name": "Dimension Door, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Teleportation"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and touched objects or other touched willing creatures",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As dimension door, but you can carry more and arrive precisely without error, and can act after arriving.",
    "source": "Spell Compendium, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dinosaur-stampede",
    "name": "Dinosaur Stampede",
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
    "targetOrArea": "20-ft.-radius spread",
    "duration": "1",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "Phantom dinosaurs stampede through an area, trampling and damaging creatures in their path.",
    "source": "Spell Compendium, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dire-hunger",
    "name": "Dire Hunger",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject suffers ravenous hunger, distracted and weakened, and must save each round or be compelled to eat.",
    "source": "Spell Compendium, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dirge",
    "name": "Dirge",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 6
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "50 ft.",
    "targetOrArea": "All enemies within a 50-ft.- radius burst centered on you",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your song drains the living: enemies near you take Strength and Dexterity damage each round they linger.",
    "source": "Spell Compendium, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dirge-of-discord",
    "name": "Dirge Of Discord",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Evil",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "Concentration + 1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your discordant song makes creatures hostile and confused, turning allies against each other.",
    "source": "Spell Compendium, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "discern-shapechanger",
    "name": "Discern Shapechanger",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Reveals whether creatures in view are shapechangers and their true forms.",
    "source": "Spell Compendium, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "discolor-pool",
    "name": "Discolor Pool",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One color pool",
    "duration": "1",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "No",
    "summary": "Changes the color of a pool of water, disguising its depth and contents.",
    "source": "Spell Compendium, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "disguise-undead",
    "name": "Disguise Undead",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "1 corporeal undead",
    "duration": "24 hours",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "An undead creature appears to be a living creature of similar shape to all senses and detection.",
    "source": "Spell Compendium, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "dispel-ward",
    "name": "Dispel Ward",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One warded object or area",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Dispels a ward, glyph, symbol, or abjuration trap in an area without affecting other magic.",
    "source": "Spell Compendium, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dispelling-breath",
    "name": "Dispelling Breath",
    "ruleset": "core",
    "school": "Abjuration",
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
    "summary": "Your next breath weapon also dispels magic on creatures caught in it, as a targeted dispel.",
    "source": "Spell Compendium, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dispelling-screen",
    "name": "Dispelling Screen",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Energy wall whose area is up to one 10-ft. square/level, or a sphere or hemisphere with a radius of up to 1 ft./level",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A screen of energy dispels spells and effects of creatures passing through it, as dispel magic.",
    "source": "Spell Compendium, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "dispelling-screen-greater",
    "name": "Dispelling Screen, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Drow": 6,
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Energy wall whose area is up to one 10-ft. square/level, or a sphere or hemisphere with a radius of up to 1 ft./level",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As dispelling screen, but stronger: spells up to higher level are dispelled as things pass through.",
    "source": "Spell Compendium, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Dispelling Screen."
  }
];
