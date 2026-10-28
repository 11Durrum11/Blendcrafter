import type { SpellDefinition } from "@/engine/types";

// Spell Compendium spells (ruleset "core"), parsed from Shaun's PDF:
// /A POC PC related/5.Splat/Spell Compendium.pdf (printed page = folio).
// Summaries are original one-line gists; stat lines are the book's own.
export const SPELL_COMPENDIUM_SPELLS_D: SpellDefinition[] = [
  {
    "id": "shadow-spray",
    "name": "Shadow Spray",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "5-ft.-radius burst",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A spray of shadow chills and weakens creatures in a cone, dealing Strength damage.",
    "source": "Spell Compendium, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadow-well",
    "name": "Shadow Well",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You step into a shadow well: transported into a shadowy pocket that lets you emerge from another shadow nearby.",
    "source": "Spell Compendium, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadowblast",
    "name": "Shadowblast",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "A blast of shadow-stuff deals damage and can blind creatures in the burst, worse for light-sensitive foes.",
    "source": "Spell Compendium, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shadowfade",
    "name": "Shadowfade",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S can",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One 10-ft. portal to the Plane of Shadow",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You fade into shadow form, gaining concealment and incorporeal qualities while moving.",
    "source": "Spell Compendium, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shadowy-grappler",
    "name": "Shadowy Grappler",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "Not printed in source",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will partial; see text",
    "spellResistance": "Yes",
    "summary": "A shadowy figure grapples a creature at range, holding and crushing it in darkness.",
    "source": "Spell Compendium, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "shard-storm",
    "name": "Shard Storm",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/ Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./ level)",
    "targetOrArea": "One or more 20-ft.-radius bursts of piercing force",
    "duration": "1",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A storm of crystal shards rains down, dealing piercing damage over an area each round.",
    "source": "Spell Compendium, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "share-husk",
    "name": "Share Husk",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Animal touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes",
    "summary": "You possess a willing animal's body ('husk'), sensing through it while your own body sleeps.",
    "source": "Spell Compendium, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sharptooth",
    "name": "Sharptooth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As jagged tooth but stronger: a creature's natural weapons gain a larger crit range and damage boost.",
    "source": "Spell Compendium, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shatterfloor",
    "name": "Shatterfloor",
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
    "targetOrArea": "15-ft.-radius spread",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "The floor shatters and buckles, dealing damage and creating difficult, broken terrain.",
    "source": "Spell Compendium, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sheltered-vitality",
    "name": "Sheltered Vitality",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Druid": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject becomes immune to ability damage, ability drain, and energy drain for the duration.",
    "source": "Spell Compendium, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shield-of-faith-mass",
    "name": "Shield Of Faith, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart 188",
    "duration": "1 minute/level",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As shield of faith, for one creature per level.",
    "source": "Spell Compendium, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shield-of-warding",
    "name": "Shield Of Warding",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 3,
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One shield or buckler touched",
    "duration": "1",
    "savingThrow": "Will negates (object, harmless)",
    "spellResistance": "No",
    "summary": "A shield gains a sacred bonus and can absorb a spell cast at its wielder once.",
    "source": "Spell Compendium, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shieldbearer",
    "name": "Shieldbearer",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Shield touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A shield floats and follows you, granting its shield bonus without occupying your hand.",
    "source": "Spell Compendium, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shifting-paths",
    "name": "Shifting Paths",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Druid": 7,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "1-mile radius + 1 mile/level",
    "duration": "1",
    "savingThrow": "Will disbelief (if interacted with)",
    "spellResistance": "Yes",
    "summary": "Paths and trails in the area subtly shift: travelers become lost and arrive at wrong destinations while you pass freely.",
    "source": "Spell Compendium, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "shock-and-awe",
    "name": "Shock And Awe",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Assassin": 1,
      "Bard": 1,
      "Sorcerer/ Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart.",
    "duration": "1 round",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "At the very start of combat (surprise round), you strike terror: enemies take penalties on initiative and attacks... in practice, cast during a surprise round to penalize foes' initiative.",
    "source": "Spell Compendium, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shroud-of-flame",
    "name": "Shroud Of Flame",
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
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As fire shield but stronger: a shroud of flame damages melee attackers with fire.",
    "source": "Spell Compendium, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "shroud-of-undeath",
    "name": "Shroud Of Undeath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You give off the aura of undeath: you detect as undead and gain some protection from positive energy and turning.",
    "source": "Spell Compendium, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sign",
    "name": "Sign",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Cleric": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You give a subject a small blessing: +1 on its next attack, save, or check, which it can invoke.",
    "source": "Spell Compendium, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "sign-of-sealing",
    "name": "Sign Of Sealing",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One door, chest, or other opening up to 30 sq. ft./level",
    "duration": "Permanent",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "No",
    "summary": "A sign seals a door or container like arcane lock and blasts those who force it open without the sign's key.",
    "source": "Spell Compendium, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sealing-greater",
    "name": "Sealing, Greater",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One door, chest, or other opening or open space up to 30 sq. ft./level",
    "duration": "Permanent",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "No",
    "summary": "As sign of sealing, but the seal is far stronger, warding a larger portal and blasting intruders with greater force.",
    "source": "Spell Compendium, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Sign Of Sealing."
  },
  {
    "id": "silent-portal",
    "name": "Silent Portal",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Sorcerer/Wizard": 0
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels) but",
    "targetOrArea": "One portal The sink spell defeats even the best swimmer",
    "duration": "1",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "A door or portal you touch opens or closes completely silently.",
    "source": "Spell Compendium, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "silverbeard",
    "name": "Silverbeard",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your beard turns to silver, granting a natural armor bonus and dwarven-like respect bonuses.",
    "source": "Spell Compendium, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sink",
    "name": "Sink",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/3 levels, no two of which are more than 30 ft. apart",
    "duration": "1 round",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject becomes heavy as lead: it sinks in water and falls swiftly, unable to swim.",
    "source": "Spell Compendium, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sirines-grace",
    "name": "Sirine’S Grace",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Druid": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a sirine's grace: Charisma bonus, swim speed, and the ability to captivate with your presence briefly.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "skeletal-guard",
    "name": "Skeletal Guard",
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
    "range": "Touch",
    "targetOrArea": "One or more fingerbones",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Animates a powerful skeletal undead guardian bound to a place, like create undead focused on guarding.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "skull-watch",
    "name": "Skull Watch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One humanoid skull",
    "duration": "Permanent",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "A skull you place keeps watch, alerting you telepathically when creatures approach its post.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "slapping-hand",
    "name": "Slapping Hand",
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
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One Tiny hand",
    "duration": "Instantaneous",
    "savingThrow": "None; see text",
    "spellResistance": "Yes",
    "summary": "A hand of force slaps a creature, dealing small damage and interrupting its concentration or spell.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "slashing-darkness",
    "name": "Slashing Darkness",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A blade-like ray of darkness deals damage, extra against good creatures.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "slide",
    "name": "Slide",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Moves the subject laterally (5 feet) as a swift teleport-like shift, ignoring attacks of opportunity for that movement.",
    "source": "Spell Compendium, p. 191",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "slide-greater",
    "name": "Slide, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As slide, but moves the subject up to 15 feet or another creature a shorter distance.",
    "source": "Spell Compendium, p. 192",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Slide."
  },
  {
    "id": "slime-wave",
    "name": "Slime Wave",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7,
      "Druid": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "15-ft.-radius spread",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "No",
    "summary": "A wave of green slime surges forth, dissolving wood and flesh like dungeon slime over an area.",
    "source": "Spell Compendium, p. 192",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "slow-burn",
    "name": "Slow Burn",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Fire"
    ],
    "levels": {
      "Druid": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "30-ft.-radius spread",
    "duration": "1 minute",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Fuel or a creature burns slowly: a fire lasts far longer, or a target takes small fire damage over a long duration.",
    "source": "Spell Compendium, p. 192",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "smell-of-fear",
    "name": "Smell Of Fear",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "You can smell fear: you detect frightened creatures by scent and gain bonuses against them.",
    "source": "Spell Compendium, p. 193",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snakes-swiftness",
    "name": "Snake’S Swiftness",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One allied creature",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject instantly takes a single extra move or attack action, snake-quick.",
    "source": "Spell Compendium, p. 193",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snakes-swiftness-mass",
    "name": "Snake’S Swiftness, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Allied creatures in a 20-ft.- radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As snake's swiftness, for one creature per level.",
    "source": "Spell Compendium, p. 193",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Snake'S Swiftness."
  },
  {
    "id": "snakebite",
    "name": "Snakebite",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Ranger": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your bite becomes venomous like a snake's, dealing damage and Constitution poison.",
    "source": "Spell Compendium, p. 193",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snipers-eye",
    "name": "Sniper’S Eye",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain bonuses to ranged sneak attacks: increased range for precision damage and improved criticals with bows.",
    "source": "Spell Compendium, p. 193",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snipers-shot",
    "name": "Sniper’S Shot",
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
    "duration": "1 round While",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next ranged attack can deal sneak attack damage at any range and ignores some cover.",
    "source": "Spell Compendium, p. 194",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snowball-swarm",
    "name": "Snowball Swarm",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action 194 The snowshoes spell gives a druid the upper hand when fighting foes in the snow",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A swarm of snowballs pelts creatures in an area for cold damage.",
    "source": "Spell Compendium, p. 194",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snowshoes",
    "name": "Snowshoes",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You walk atop snow without sinking or penalty, moving at full speed over snow and ice.",
    "source": "Spell Compendium, p. 194",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "snowshoes-mass",
    "name": "Snowshoes, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3,
      "Ranger": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart The feet of all the designated creatures glow with an ice-blue aura. Each subject in turn rises",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As snowshoes, for one creature per level.",
    "source": "Spell Compendium, p. 194",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Snowshoes."
  },
  {
    "id": "solipsism",
    "name": "Solipsism",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject believes the world isn't real: it stands inactive, ignoring everything, convinced all is illusion.",
    "source": "Spell Compendium, p. 194",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Phantasm"
  },
  {
    "id": "songbird",
    "name": "Songbird",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Performance +1 hour or until discharged; see text",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your voice becomes songbird-sweet: bonuses to Perform and you attract birds; the magic also carries messages on birdsong... in practice, a minor charm of voice and bird affinity.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonic-blast",
    "name": "Sonic Blast",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A blast of sonic energy deals 1d4 sonic damage per level (max 5d4) in a cone and can deafen.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonic-rumble",
    "name": "Sonic Rumble",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Concentration, up to 1",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A persistent rumble of sonic energy deals damage each round to creatures standing on the ground in the area.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonic-snap",
    "name": "Sonic Snap",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Sorcerer/Wizard": 0
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A tiny snap of sound deals 1 point of sonic damage and can deafen a creature momentarily.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonic-weapon",
    "name": "Sonic Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A weapon gains sonic resonance: it deals +1d6 sonic damage on hits and hums audibly.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonic-whip",
    "name": "Sonic Whip",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "0 ft.",
    "targetOrArea": "A whip of force",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "No",
    "summary": "A whip of sound lashes a target, dealing sonic damage and potentially deafening or disarming.",
    "source": "Spell Compendium, p. 195",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sonorous-hum",
    "name": "Sonorous Hum",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A hum maintains concentration on another spell for you, freeing you to act while it sustains the first spell.",
    "source": "Spell Compendium, p. 196",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sound-lance",
    "name": "Sound Lance",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature or object",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "A lance of sound deals 4d6 sonic damage (more to crystalline creatures) in a line.",
    "source": "Spell Compendium, p. 196",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spark-of-life",
    "name": "Spark Of Life",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Undead creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Gives an undead creature a spark of life for a time: it becomes vulnerable as if living (to critical hits, sneak attack, and healing effects).",
    "source": "Spell Compendium, p. 196",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spawn-screen",
    "name": "Spawn Screen",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/level",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Protects a slain creature from becoming spawn: undead creation effects fail on the protected corpse.",
    "source": "Spell Compendium, p. 197",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "speak-to-allies",
    "name": "Speak To Allies",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Language-Dependent"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "Not printed in source",
    "castingTime": "Not printed in source",
    "range": "Not printed in source",
    "targetOrArea": "Any number of allied creatures, no two of which are more than 30 ft. apart As you rub the small piece of copper wire, it begins to buzz with the latent magical",
    "duration": "Not printed in source",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You can speak to allies telepathically... per its printed block: you communicate with allies at range as if speaking (target line: your allies).",
    "source": "Spell Compendium, p. 197",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spectral-touch",
    "name": "Spectral Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One creature/level",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your hand becomes spectral: your touch attacks deal negative levels... in practice, a ghostly touch that bestows a negative level on a hit.",
    "source": "Spell Compendium, p. 197",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spectral-weapon",
    "name": "Spectral Weapon",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Assassin": 3,
      "Bard": 4,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "0 ft.",
    "targetOrArea": "One shadowy blade",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "Creates a spectral copy of a weapon that attacks with your skill, dealing force-like damage and striking incorporeal foes.",
    "source": "Spell Compendium, p. 197",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "speechlink",
    "name": "Speechlink",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "You and one creature touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As telepathic bond for a small group, but spoken: you all hear each other's speech at range.",
    "source": "Spell Compendium, p. 198",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-engine",
    "name": "Spell Engine",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M, XP",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "5-ft.-radius magical wheel",
    "duration": "See text",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "A vortex of spell energy absorbs spells cast in an area and returns their energy to casters as recovered slots or power.",
    "source": "Spell Compendium, p. 198",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-enhancer",
    "name": "Spell Enhancer",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next spell (cast within 1 round) is enhanced: +2 caster level and +1 save DC.",
    "source": "Spell Compendium, p. 198",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-flower",
    "name": "Spell Flower",
    "ruleset": "core",
    "school": "Transmutation",
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
    "summary": "Flowers bloom on your hands, each holding a prepared touch spell you can deliver later without keeping your hands charged.",
    "source": "Spell Compendium, p. 198",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-immunity-lesser",
    "name": "Spell Immunity, Lesser",
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
    "summary": "As spell immunity, but protects against one specific spell of up to 2nd level.",
    "source": "Spell Compendium, p. 199",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-matrix",
    "name": "Spell Matrix",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Matrix that holds two of your spells",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Stores up to three spells in a matrix in your mind, castable later without preparation as a linked sequence.",
    "source": "Spell Compendium, p. 199",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Spell Matrix."
  },
  {
    "id": "spell-matrix-greater",
    "name": "Spell Matrix, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Matrix that holds three of your spells",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As spell matrix, but stores higher-level spells and more total levels.",
    "source": "Spell Compendium, p. 199",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Spell Matrix."
  },
  {
    "id": "spell-matrix-lesser",
    "name": "Spell Matrix, Lesser",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "Matrix that holds one of your spells",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As spell matrix, but stores lower-level spells.",
    "source": "Spell Compendium, p. 199",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Spell Matrix."
  },
  {
    "id": "spell-resistance-mass",
    "name": "Spell Resistance, Mass",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As spell resistance, for one creature per level.",
    "source": "Spell Compendium, p. 199",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spell-vulnerability",
    "name": "Spell Vulnerability",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "Lowers the subject's spell resistance and imposes penalties on saves against spells.",
    "source": "Spell Compendium, p. 200",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sphere-of-ultimate-destruction",
    "name": "Sphere Of Ultimate Destruction",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./ level)",
    "targetOrArea": "2-ft.-radius sphere",
    "duration": "1",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A black sphere disintegrates whatever it touches, dealing massive damage as it rolls where you direct.",
    "source": "Spell Compendium, p. 200",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "spider-curse",
    "name": "Spider Curse",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Spider": 6
    },
    "components": "V, S, DF A sphere of ultimate destruction destroys everything it touches",
    "castingTime": "1 minute",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One Medium or smaller humanoid",
    "duration": "24",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Curses the subject with a spider's form and mind over time, transforming it toward a monstrous spider.",
    "source": "Spell Compendium, p. 200",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spider-plague",
    "name": "Spider Plague",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Five summoned spiders",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls a plague of monstrous spiders to attack your enemies.",
    "source": "Spell Compendium, p. 201",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "spider-poison",
    "name": "Spider Poison",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Assassin": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous; see text",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your touch delivers a spider's venom: initial and secondary Strength damage.",
    "source": "Spell Compendium, p. 201",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spider-shapes",
    "name": "Spider Shapes",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Spider": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One willing creature/level, all within 30 ft. of each other",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "Yes (harmless)",
    "summary": "You and companions take the forms of monstrous spiders of various sizes.",
    "source": "Spell Compendium, p. 201",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spiderform",
    "name": "Spiderform",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Drow": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You assume the form of a drider-like spider creature, gaining its attacks, poison, and movement.",
    "source": "Spell Compendium, p. 201",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spiderskin",
    "name": "Spiderskin",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject's skin becomes spider-like: natural armor, bonuses to Hide and Climb, growing with level.",
    "source": "Spell Compendium, p. 202",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spikes",
    "name": "Spikes",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Wooden weapon touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As brambles, but stronger: the wooden weapon gains +2 enhancement and deals more piercing damage, and hurts attackers.",
    "source": "Spell Compendium, p. 202",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Brambles."
  },
  {
    "id": "spirit-worm",
    "name": "Spirit Worm",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "A worm of spirit energy burrows into the subject, dealing damage and draining a spell slot if it remains.",
    "source": "Spell Compendium, p. 202",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spiritjaws",
    "name": "Spiritjaws",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 + 10 ft./level)",
    "targetOrArea": "Jaws of force",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Jaws of force snap and grapple creatures repeatedly, holding them as they bite.",
    "source": "Spell Compendium, p. 202",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "spiritual-chariot",
    "name": "Spiritual Chariot",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Blackguard": 3,
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One special mount",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A spectral chariot and horses carry you and companions swiftly and safely overland.",
    "source": "Spell Compendium, p. 202",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "spiritwall",
    "name": "Spiritwall",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./ level)",
    "targetOrArea": "Swirling wall whose area is up to one 10-ft. square/level, or a sphere or hemisphere with a radius of up to 1 ft./level",
    "duration": "1",
    "savingThrow": "None; see text",
    "spellResistance": "No",
    "summary": "A wall of spirit energy blocks incorporeal creatures and harms undead that pass through.",
    "source": "Spell Compendium, p. 203",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "splinterbolt",
    "name": "Splinterbolt",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more streams of splinters",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A bolt of splintered wood deals piercing damage and embeds splinters that keep damaging the target.",
    "source": "Spell Compendium, p. 203",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "spontaneous-search",
    "name": "Spontaneous Search",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 round",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You search an area instantly, as spending minutes taking 20, with a single casting.",
    "source": "Spell Compendium, p. 204",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stabilize",
    "name": "Stabilize",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 2,
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Not printed in source",
    "targetOrArea": "50-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless); see text",
    "spellResistance": "Yes (harmless)",
    "summary": "Stabilizes all dying creatures in an area, stopping their bleeding (a burst version of the orison-like effect).",
    "source": "Spell Compendium, p. 204",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "stalking-brand",
    "name": "Stalking Brand",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "24",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Brands a creature so your animals and allies can track it relentlessly and gain bonuses against it.",
    "source": "Spell Compendium, p. 204",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stalwart-pact",
    "name": "Stalwart Pact",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Pact": 5
    },
    "components": "V, S, M, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Willing living creature touched",
    "duration": "Permanent until",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A pact effect: when the subject drops below half hit points, prearranged spells (like a heal-lite and protection) trigger to keep it fighting.",
    "source": "Spell Compendium, p. 204",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "standing-wave",
    "name": "Standing Wave",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Waves under a creature or object within range",
    "duration": "10",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "Creates a standing wave of water that you ride swiftly across a body of water.",
    "source": "Spell Compendium, p. 204",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "starvation",
    "name": "Starvation",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "The subject suffers sudden starvation and thirst: nonlethal damage and fatigue as if days without food.",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "steeldance",
    "name": "Steeldance",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Two swords or daggers",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Two daggers animate and attack foes on their own, dancing around you.",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stick",
    "name": "Stick",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 0,
      "Sorcerer/Wizard": 0
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Nonmagical, unattended object weighing up to 5 lb.",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Makes a small object stick fast to a surface as if glued (strength DC to pull free).",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sticky-fingers",
    "name": "Sticky Fingers",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 1,
      "Bard": 1
    },
    "components": "S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your fingers become adhesive for thievery: bonuses to Sleight of Hand and you can palm items by touch.",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sticky-saddle",
    "name": "Sticky Saddle",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 immediate action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You stick to your saddle: huge bonuses to Ride checks to stay mounted.",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sting-ray",
    "name": "Sting Ray",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "Will partial",
    "spellResistance": "Yes",
    "summary": "A ray's sting-like mental jolt: the subject is stunned briefly by a piercing mental sting (bardic sonic-mind effect).",
    "source": "Spell Compendium, p. 206",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "stolen-breath",
    "name": "Stolen Breath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature that breathes air",
    "duration": "Instantaneous; see text",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You steal the subject's breath: it cannot speak or breathe and begins to suffocate.",
    "source": "Spell Compendium, p. 207",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-body",
    "name": "Stone Body",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your body becomes living stone: damage reduction, immunity to many effects, but vulnerability to stone-shaping magic.",
    "source": "Spell Compendium, p. 207",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-bones",
    "name": "Stone Bones",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Corporeal undead creature touched",
    "duration": "10",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "An undead creature you touch gains damage reduction 5/bludgeoning from reinforced bones.",
    "source": "Spell Compendium, p. 208",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-shape-greater",
    "name": "Stone Shape, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 5,
      "Druid": 5,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Stone or stone objects touched, up to 10 cu. ft. + 10 cu. ft./ level 208 Stone shatter sends a heartrendingly pure note to the center of any stone",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As stone shape, but you can shape far more stone into finer, more complex forms.",
    "source": "Spell Compendium, p. 208",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-shatter",
    "name": "Stone Shatter",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./level)",
    "targetOrArea": "One stone object or creature",
    "duration": "Instantaneous",
    "savingThrow": "None or Fortitude ( PH half; see text",
    "spellResistance": "No",
    "summary": "Your song or note shatters stone: deals heavy damage to stone objects and constructs in an area.",
    "source": "Spell Compendium, p. 208",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-sphere",
    "name": "Stone Sphere",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 5-ft.-diameter stone sphere",
    "duration": "1",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "A rolling sphere of stone crushes creatures in its path as you direct it.",
    "source": "Spell Compendium, p. 209",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stone-spiders",
    "name": "Stone Spiders",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Spider": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Three pebbles, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Stone statues of spiders animate as constructs that guard or attack.",
    "source": "Spell Compendium, p. 209",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stonehold",
    "name": "Stonehold",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 10-ft. square/level",
    "duration": "24",
    "savingThrow": "See text",
    "spellResistance": "Yes (object)",
    "summary": "Hands of stone erupt and grapple creatures over an area, holding them fast.",
    "source": "Spell Compendium, p. 209",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "stony-grasp",
    "name": "Stony Grasp",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Animated stone arm",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As earthen grasp, but a stronger stone hand that grapples and crushes.",
    "source": "Spell Compendium, p. 209",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Earthen Grasp."
  },
  {
    "id": "storm-of-elemental-fury",
    "name": "Storm Of Elemental Fury",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "40-ft.-radius storm cloud, 200 ft. above the ground",
    "duration": "4 rounds",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A storm calls elementals of all types and rains elemental damage over an area as they rage.",
    "source": "Spell Compendium, p. 209",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "storm-tower",
    "name": "Storm Tower",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 7
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (20-ft. radius, 100 ft. high)",
    "duration": "1",
    "savingThrow": "Fortitude negates; see text",
    "spellResistance": "Yes",
    "summary": "Creates a tower of storm-cloud that shelters you and strikes attackers with lightning.",
    "source": "Spell Compendium, p. 210",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stormrage",
    "name": "Stormrage",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Cleric": 8,
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You ride the storm: fly in storm winds, immunity to wind and lightning, and you hurl lightning bolts each round.",
    "source": "Spell Compendium, p. 210",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "strategic-charge",
    "name": "Strategic Charge",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Paladin": 1
    },
    "components": "V, DF",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain protection while charging: no attacks of opportunity for your charge movement and a deflection bonus.",
    "source": "Spell Compendium, p. 210",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "strength-of-stone",
    "name": "Strength Of Stone",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Paladin": 2
    },
    "components": "V, S, DF",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You draw strength from the earth: a Strength bonus while standing on stone or earth.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stun-ray",
    "name": "Stun Ray",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Ray",
    "duration": "1d4+1 rounds; see text",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "A ray stuns the target for 1d4+1 rounds on a failed Fortitude save.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "stunning-breath",
    "name": "Stunning Breath",
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
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your next breath weapon also stuns creatures caught in it.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "stunning-breath-greater",
    "name": "Stunning Breath, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "Your breath weapon",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As stunning breath, but a longer stun.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Stunning Breath."
  },
  {
    "id": "submerge-ship",
    "name": "Submerge Ship",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Ship touched",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Causes a ship to sink beneath the waves (stored safely) and return later, or drags an enemy vessel down.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "subvert-planar-essence",
    "name": "Subvert Planar Essence",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Changes a creature's planar essence: an outsider's alignment subtype and traits are suppressed or converted.",
    "source": "Spell Compendium, p. 211",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "sudden-stalagmite",
    "name": "Sudden Stalagmite",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "No",
    "summary": "A stalagmite erupts beneath a creature, impaling it for piercing damage and knocking it prone.",
    "source": "Spell Compendium, p. 213",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "summon-babau-demon",
    "name": "Summon Babau Demon",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Chaotic",
      "Evil"
    ],
    "levels": {
      "Cleric": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned babau demon",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a babau demon to fight for you, as a summon monster variant of fixed creature.",
    "source": "Spell Compendium, p. 213",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-bearded-devil",
    "name": "Summon Bearded Devil",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil",
      "Lawful"
    ],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned bearded devil",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a bearded devil (barbazu) to fight for you.",
    "source": "Spell Compendium, p. 213",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-bralani-eladrin",
    "name": "Summon Bralani Eladrin",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Chaotic",
      "Good"
    ],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned bralani eladrin",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a bralani eladrin to fight for you or aid you.",
    "source": "Spell Compendium, p. 213",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-elemental-monolith",
    "name": "Summon Elemental Monolith",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 9,
      "Druid": 9,
      "Sorcerer/ Wizard": 9
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One summoned elemental monolith",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons an elemental monolith — a colossal, prince-level elemental — to fight for you briefly.",
    "source": "Spell Compendium, p. 214",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-elementite-swarm",
    "name": "Summon Elementite Swarm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned elementite swarm",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a swarm of tiny elementites (of a chosen element) to harass enemies.",
    "source": "Spell Compendium, p. 214",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-elysian-thrush",
    "name": "Summon Elysian Thrush",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Bard": 2,
      "Cleric": 2
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned Elysian thrush",
    "duration": "8 hours",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons an Elysian thrush whose song grants morale bonuses and removes fear and despair.",
    "source": "Spell Compendium, p. 214",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-greater-elemental",
    "name": "Summon Greater Elemental",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned elemental",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a greater elemental of a chosen type to fight for you.",
    "source": "Spell Compendium, p. 214",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-hound-archon",
    "name": "Summon Hound Archon",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Good",
      "Lawful"
    ],
    "levels": {
      "Cleric": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned hound archon",
    "duration": "Concentration, up to 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons a hound archon to aid and fight for you.",
    "source": "Spell Compendium, p. 214",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-undead-i",
    "name": "Summon Undead I",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 1,
      "Cleric": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One summoned creature",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Summons an undead creature (skeleton or zombie from the list) to fight for you.",
    "source": "Spell Compendium, p. 215",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "summon-undead-ii",
    "name": "Summon Undead II",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two of which are more than 30 ft. apart Summon undead puts control of undead minions in the hands of even apprentice wizards",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As summon undead I, but a stronger undead.",
    "source": "Spell Compendium, p. 215",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning",
    "note": "Abbreviated entry: missing fields follow Summon Undead I."
  },
  {
    "id": "summon-undead-iii",
    "name": "Summon Undead III",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 3,
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As summon undead I, but a stronger undead (ghoul-tier).",
    "source": "Spell Compendium, p. 215",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning",
    "note": "Abbreviated entry: missing fields follow Summon Undead I."
  },
  {
    "id": "summon-undead-iv",
    "name": "Summon Undead IV",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Blackguard": 4,
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As summon undead I, but a stronger undead (ghast/wight tier).",
    "source": "Spell Compendium, p. 215",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning",
    "note": "Abbreviated entry: missing fields follow Summon Undead I."
  },
  {
    "id": "summon-undead-v",
    "name": "Summon Undead V",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F/DF",
    "castingTime": "1 round",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One or more summoned creatures, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As summon undead I, but the strongest undead of the series (shadow/mummy tier).",
    "source": "Spell Compendium, p. 215",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning",
    "note": "Abbreviated entry: missing fields follow Summon Undead I."
  },
  {
    "id": "suppress-breath-weapon",
    "name": "Suppress Breath Weapon",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature that has a breath weapon",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "Suppresses a creature's breath weapon: it cannot use it for the duration.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "suppress-glyph",
    "name": "Suppress Glyph",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "100 ft.",
    "targetOrArea": "100-ft.-radius burst centered on you.",
    "duration": "1",
    "savingThrow": "Will negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Suppresses a glyph, symbol, or ward so creatures can pass without triggering it.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "surefoot",
    "name": "Surefoot",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain sure footing: bonuses against trip and to balance on treacherous ground.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "surefooted-stride",
    "name": "Surefooted Stride",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You move over difficult terrain and slippery surfaces at full speed without penalty.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "surefooted-stride-mass",
    "name": "Surefooted Stride, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 5,
      "Druid": 4,
      "Ranger": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As surefooted stride, for one creature per level.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Surefooted Stride."
  },
  {
    "id": "suspended-silence",
    "name": "Suspended Silence",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One object",
    "duration": "24 hours or until discharged, then 6 rounds; see text",
    "savingThrow": "None (object)",
    "spellResistance": "No (object)",
    "summary": "Creates a zone of suspended silence: a held silence effect that triggers when conditions you set occur.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "swamp-lung",
    "name": "Swamp Lung",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One living creature with a respiratory system",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "No",
    "summary": "Swamp gas fills creatures' lungs in the area: they take damage and sicken as they choke on miasma.",
    "source": "Spell Compendium, p. 216",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "swamp-stride",
    "name": "Swamp Stride",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 5,
      "Ranger": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You step through the Plane of Shadow via swamp: teleporting between points in a swampy area.",
    "source": "Spell Compendium, p. 217",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Teleportation"
  },
  {
    "id": "swim",
    "name": "Swim",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Grants a swim speed to the subject.",
    "source": "Spell Compendium, p. 217",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "swim-mass",
    "name": "Swim, Mass",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart Choosing carefully the recipients of your spell, you cause a blue-green glow to emanate from eac",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "As swim, for one creature per level.",
    "source": "Spell Compendium, p. 217",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Swim."
  },
  {
    "id": "sword-of-darkness",
    "name": "Sword Of Darkness",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Black blade of negative energy",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A sword of negative energy attacks foes on its own, bestowing negative levels with its strikes.",
    "source": "Spell Compendium, p. 217",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Sword Of Deception."
  },
  {
    "id": "sword-of-deception",
    "name": "Sword Of Deception",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Pale green blade of force",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A sword of force attacks on its own; a struck creature takes a penalty on attacks against you, and the sword flanks.",
    "source": "Spell Compendium, p. 217",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "symbol-of-spell-loss",
    "name": "Symbol Of Spell Loss",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "10 minutes",
    "range": "0 ft.; see text",
    "targetOrArea": "One symbol",
    "duration": "See text",
    "savingThrow": "Will negates",
    "spellResistance": "No",
    "summary": "A triggered symbol causes spellcasters to lose prepared spells or slots.",
    "source": "Spell Compendium, p. 218",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "symphonic-nightmare",
    "name": "Symphonic Nightmare",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 6,
      "Cleric": 7,
      "Sorcerer/ Wizard": 7
    },
    "components": "V, S, F",
    "castingTime": "1 standard action sword",
    "range": "Touch; see text",
    "targetOrArea": "Living creature touched; see text",
    "duration": "24",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A symphony of horror invades dreams: sleeping creatures take damage and are fatigued and shaken.",
    "source": "Spell Compendium, p. 218",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "synostodweomer",
    "name": "Synostodweomer",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "One of your spells",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You convert a prepared spell into healing energy, curing yourself as you sacrifice the spell (synostodweomer: spell-to-healing conversion).",
    "source": "Spell Compendium, p. 218",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tactical-precision",
    "name": "Tactical Precision",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Allies gain insight bonuses when fighting cooperatively: bonuses to attack foes you all threaten and to aid another.",
    "source": "Spell Compendium, p. 218",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "targeting-ray",
    "name": "Targeting Ray",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Ray",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A ray marks a target: you and allies gain a +1 bonus per few levels on ranged attacks against it.",
    "source": "Spell Compendium, p. 219",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "telepathic-aura",
    "name": "Telepathic Aura",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Paladin": 4
    },
    "components": "S, DF",
    "castingTime": "1 standard action",
    "range": "100 ft.",
    "targetOrArea": "100-ft.-radius emanation centered on you",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You gain a telepathic aura: you can communicate mentally with creatures near you and sense their presence.",
    "source": "Spell Compendium, p. 219",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "telepathic-bond-lesser",
    "name": "Telepathic Bond, Lesser",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Mind": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "You and one willing creature within 30 ft.",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As telepathic bond, but between fewer creatures or shorter range/duration — a minor two-way mental link.",
    "source": "Spell Compendium, p. 219",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "thornskin",
    "name": "Thornskin",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Thorns grow from your skin: attackers take piercing damage and you gain a natural armor bonus.",
    "source": "Spell Compendium, p. 219",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "thunderhead",
    "name": "Thunderhead",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Electricity"
    ],
    "levels": {
      "Druid": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "A small storm cloud forms over a creature, zapping it with small lightning bolts each round.",
    "source": "Spell Compendium, p. 219",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "thunderlance",
    "name": "Thunderlance",
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
    "targetOrArea": "A spearlike beam",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A lance of sonic force deals damage in melee with great reach, and can shatter objects.",
    "source": "Spell Compendium, p. 220",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "thunderous-roar",
    "name": "Thunderous Roar",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "Yes",
    "summary": "Like great thunderclap from a beast's roar: sonic damage, deafness, and knockdown in a cone.",
    "source": "Spell Compendium, p. 220",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tidal-surge",
    "name": "Tidal Surge",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature or all creatures in a 20-ft.-radius burst",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half",
    "spellResistance": "Yes",
    "summary": "A surge of water slams creatures, dealing damage and bull rushing them backward.",
    "source": "Spell Compendium, p. 220",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tigers-tooth",
    "name": "Tiger’S Tooth",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2
    },
    "components": "V",
    "castingTime": "1 swift action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "As magic fang: one natural weapon gains +1 enhancement — but printed as its own spell; functions like magic fang for a chosen natural weapon.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tortoise-shell",
    "name": "Tortoise Shell",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10",
    "savingThrow": "None",
    "spellResistance": "Yes (harmless)",
    "summary": "Your natural armor becomes enormous like a tortoise shell, at the cost of speed.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "touch-of-madness",
    "name": "Touch Of Madness",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Madness": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "Your touch deranges: the subject is confused briefly or takes Wisdom damage.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "towering-oak",
    "name": "Towering Oak",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [],
    "levels": {
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You appear as a tall oak tree, hiding in plain sight in forests with a strong disguise.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Glamer"
  },
  {
    "id": "train-animal",
    "name": "Train Animal",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Druid": 2,
      "Ranger": 2
    },
    "components": "V, S, DF",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Animal touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You train an animal with tricks quickly, teaching it as if spending weeks in a single casting's work.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Charm"
  },
  {
    "id": "transcribe-symbol",
    "name": "Transcribe Symbol",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Magic symbol touched",
    "duration": "10 minutes or until discharged",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Moves a symbol or glyph spell from one surface to another without triggering it.",
    "source": "Spell Compendium, p. 221",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "transfix",
    "name": "Transfix",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 7
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft.-radius emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "Paralyzes a group of creatures who fail their saves, holding them motionless while you concentrate.",
    "source": "Spell Compendium, p. 222",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "translocation-trick",
    "name": "Translocation Trick",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Teleportation"
    ],
    "levels": {
      "Sorcerer/Wizard": 4
    },
    "components": "V to as-",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "You and one creature",
    "duration": "10",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "You swap places with a creature at the moment it teleports, redirecting its arrival and taking its destination... in practice, you intercept a teleport effect and trade places with the traveler.",
    "source": "Spell Compendium, p. 222",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "transmute-rock-to-lava",
    "name": "Transmute Rock To Lava",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth",
      "Fire"
    ],
    "levels": {
      "Druid": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One 10-ft. cube",
    "duration": "Instantaneous",
    "savingThrow": "Reflex half; see text",
    "spellResistance": "No",
    "summary": "Transforms rock into flowing lava over a large volume.",
    "source": "Spell Compendium, p. 222",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "travelers-mount",
    "name": "Traveler’S Mount",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Blackguard": 1,
      "Druid": 1,
      "Paladin": 1,
      "Ranger": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Animal or magical beast touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "As mount, but the conjured horse is hardier and can travel long distances without tiring.",
    "source": "Spell Compendium, p. 223",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "treasure-scent",
    "name": "Treasure Scent",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Druid": 3,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You can smell treasure: detecting concentrations of precious metal and gems by scent within range.",
    "source": "Spell Compendium, p. 223",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tremor",
    "name": "Tremor",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "40-ft.-radius spread",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "A localized tremor shakes the ground, potentially knocking creatures prone and damaging structures.",
    "source": "Spell Compendium, p. 223",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "tremorsense",
    "name": "Tremorsense",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Ranger": 2,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, F/DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Grants tremorsense out to 30 feet.",
    "source": "Spell Compendium, p. 224",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "triadspell",
    "name": "Triadspell",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Prepares a spell in triplicate: when you cast the chosen spell, it is cast three times from one slot (for lower-level spells).",
    "source": "Spell Compendium, p. 224",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "true-creation",
    "name": "True Creation",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Creation": 8
    },
    "components": "V, S, M, XP",
    "castingTime": "10 minutes",
    "range": "0 ft.",
    "targetOrArea": "Unattended, nonmagical object of nonliving matter, up to 1 cu. ft./level",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Creates permanent, real matter: objects created are nonmagical and permanent, including valuable materials.",
    "source": "Spell Compendium, p. 224",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "true-domination",
    "name": "True Domination",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Domination": 8
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One humanoid",
    "duration": "24",
    "savingThrow": "Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As dominate monster, but the link is deeper: you can sense through the subject and it cannot be freed by dispel magic easily.",
    "source": "Spell Compendium, p. 224",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "tsunami",
    "name": "Tsunami",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 9
    },
    "components": "V, S, M",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "20-ft./level-wide, 10-ft.-long, 40-ft.-high wave of water; see text",
    "duration": "Concentration, up to 1",
    "savingThrow": "Fortitude partial (object)",
    "spellResistance": "No",
    "summary": "A gigantic wave crashes over an area, dealing massive damage and sweeping creatures and structures away.",
    "source": "Spell Compendium, p. 224",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "tunnel-swallow",
    "name": "Tunnel Swallow",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Tunnel section up to 20 ft. in diameter and up to 50 ft. long",
    "duration": "Instantaneous",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "The earth swallows a tunnel or passage, collapsing it shut and burying what's inside.",
    "source": "Spell Compendium, p. 225",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "unbinding",
    "name": "Unbinding",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Liberation": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, S, M, DF",
    "castingTime": "1 round",
    "range": "180 ft.",
    "targetOrArea": "180-ft.-radius burst centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Frees creatures from all bindings, imprisonments, and compulsions in a wide area, a mass liberation effect.",
    "source": "Spell Compendium, p. 225",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undead-bane-weapon",
    "name": "Undead Bane Weapon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 4,
      "Paladin": 3
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched or fifty projectiles (all of which must be in contact with each other at the time of casting)",
    "duration": "1",
    "savingThrow": "Will negates and (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "A weapon gains the undead bane property: +2 enhancement and +2d6 damage against undead.",
    "source": "Spell Compendium, p. 226",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undead-lieutenant",
    "name": "Undead Lieutenant",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One undead creature; see text",
    "duration": "24 hours",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "An undead you control gains intelligence and can command lesser undead under you as your lieutenant.",
    "source": "Spell Compendium, p. 226",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undead-torch",
    "name": "Undead Torch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One corporeal undead/ level, no two of which are more than 30 ft. apart",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "An undead creature burns with green fire, shedding light and dealing fire damage to those who strike it.",
    "source": "Spell Compendium, p. 226",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undeaths-eternal-foe",
    "name": "Undeath’S Eternal Foe",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/5 levels",
    "duration": "1",
    "savingThrow": "None (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain powerful defenses against undead: AC and save bonuses, immunity to their special attacks, and a damaging aura against them.",
    "source": "Spell Compendium, p. 226",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undermaster",
    "name": "Undermaster",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Druid": 9,
      "Sorcerer/Wizard": 9
    },
    "components": "V, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "5 rounds",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You command the earth itself: earth elementals obey you, you earthglide, and you can use various earth spells at will within the duration.",
    "source": "Spell Compendium, p. 227",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "undersong",
    "name": "Undersong",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 1
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You perform an undersong that sustains your bardic music while you do other things, letting you maintain an effect.",
    "source": "Spell Compendium, p. 227",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "unholy-storm",
    "name": "Unholy Storm",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil",
      "Water"
    ],
    "levels": {
      "Blackguard": 3,
      "Cleric": 3
    },
    "components": "V, S, M, DF",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "Cylinder (20-ft. radius, 20 ft. high)",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "An unholy storm rains profane energy, damaging good creatures in the area like holy storm inverted.",
    "source": "Spell Compendium, p. 227",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "unluck",
    "name": "Unluck",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject is unlucky: on its next several d20 rolls it must roll twice and take the worse result.",
    "source": "Spell Compendium, p. 227",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "unyielding-roots",
    "name": "Unyielding Roots",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Willing creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Roots anchor you and allies: huge bonuses against movement effects, fast healing while rooted to the earth.",
    "source": "Spell Compendium, p. 228",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "updraft",
    "name": "Updraft",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S, M",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "Instantaneous",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A column of rising air lifts you (and lets you glide down safely) — a sudden updraft that can raise you high and carry you.",
    "source": "Spell Compendium, p. 228",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "valiant-fury",
    "name": "Valiant Fury",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Courage": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains valiant fury: Strength and Constitution boosts and temporary hit points, fighting on past injury.",
    "source": "Spell Compendium, p. 228",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "veil-of-shadow",
    "name": "Veil Of Shadow",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Darkness"
    ],
    "levels": {
      "Assassin": 2,
      "Blackguard": 2,
      "Cleric": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A veil of shadow grants concealment and a bonus on Hide checks, and darkvision briefly.",
    "source": "Spell Compendium, p. 228",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "veil-of-undeath",
    "name": "Veil Of Undeath",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain the traits of undeath wholesale: immunities to critical hits, ability damage to physical scores, and negative energy healing, among undead traits.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vigor",
    "name": "Vigor",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10 rounds + 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains fast healing 2 for the duration.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing",
    "note": "Abbreviated entry: missing fields follow Lesser Vigor."
  },
  {
    "id": "vigor-greater",
    "name": "Vigor, Greater",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10 rounds + 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains fast healing 4 for the duration.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing",
    "note": "Abbreviated entry: missing fields follow Lesser Vigor."
  },
  {
    "id": "vigor-lesser",
    "name": "Vigor, Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "10 rounds + 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "The subject gains fast healing 1 for the duration.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing"
  },
  {
    "id": "vigor-mass-lesser",
    "name": "Vigor, Mass Lesser",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 3,
      "Druid": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "One creature/2 levels, no two of which are more than 30 ft. apart",
    "duration": "10 rounds + 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As lesser vigor, for one creature per level.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing",
    "note": "Abbreviated entry: missing fields follow Lesser Vigor."
  },
  {
    "id": "vigorous-circle",
    "name": "Vigorous Circle",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Druid": 6
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "20 ft.",
    "targetOrArea": "One creature/2 levels, no two of which are more than 30 ft. apart",
    "duration": "10 rounds + 1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "As greater vigor, shared among all creatures in a circle around you.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Healing",
    "note": "Abbreviated entry: missing fields follow Mass Lesser Vigor."
  },
  {
    "id": "vile-death",
    "name": "Vile Death",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 9,
      "Sorcerer/ Wizard": 9
    },
    "components": "V, S, M, XP",
    "castingTime": "1 hour",
    "range": "Touch",
    "targetOrArea": "One corporeal undead creature",
    "duration": "Permanent (D)",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "As binding/animate: a slain creature's soul is bound to an undead you create, making it intelligent and loyal — vile death binds a soul into an undead servant.",
    "source": "Spell Compendium, p. 229",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Calling"
  },
  {
    "id": "vine-mine",
    "name": "Vine Mine",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "10-ft.-radius/level spread",
    "duration": "10",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "Vines fill an area in one of several modes you choose: entangling, hampering, or damaging growth planted like a mine.",
    "source": "Spell Compendium, p. 230",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "vine-strike",
    "name": "Vine Strike",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Ranger": 1
    },
    "components": "V, DF 230",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "For one round your attacks can sneak attack plant creatures as if they were not immune.",
    "source": "Spell Compendium, p. 230",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vipergout",
    "name": "Vipergout",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "1d4+3 summoned creatures",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You vomit forth living vipers that bite and poison your enemies.",
    "source": "Spell Compendium, p. 230",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Summoning"
  },
  {
    "id": "visage-of-the-deity",
    "name": "Visage Of The Deity",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "EvilorGood"
    ],
    "levels": {
      "Cleric": 6,
      "Mysticism": 6
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You take on your deity's visage: ability boosts, wings, resistances, and a divine aura.",
    "source": "Spell Compendium, p. 230",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Visage Of The Deity."
  },
  {
    "id": "visage-of-the-deity-greater",
    "name": "Visage Of The Deity, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "EvilorGood"
    ],
    "levels": {
      "Cleric": 9,
      "Competition": 9,
      "Mysticism": 9,
      "Purification": 9
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A greater divine visage: larger ability boosts and powerful resistances and damaging aura.",
    "source": "Spell Compendium, p. 231",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Lesser Visage Of The Deity."
  },
  {
    "id": "visage-of-the-deity-lesser",
    "name": "Visage Of The Deity, Lesser",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "EvilorGood"
    ],
    "levels": {
      "Blackguard": 4,
      "Cleric": 3,
      "Mysticism": 3,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "A lesser divine visage: small ability boosts and minor traits of your deity.",
    "source": "Spell Compendium, p. 231",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Visage Of The Deity."
  },
  {
    "id": "viscid-glob",
    "name": "Viscid Glob",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "You hurl a glob of sticky resin that glues a creature to the floor, immobilizing it.",
    "source": "Spell Compendium, p. 231",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vision-of-glory",
    "name": "Vision Of Glory",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Paladin": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1 minute or until discharged",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "You gain a +2 Charisma bonus and a radiant countenance briefly.",
    "source": "Spell Compendium, p. 231",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vitriolic-sphere",
    "name": "Vitriolic Sphere",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Acid"
    ],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "10-ft.-radius burst",
    "duration": "Instantaneous; see text",
    "savingThrow": "Reflex partial; see text",
    "spellResistance": "No",
    "summary": "A sphere of acid deals 1d6 acid damage per level (max 15d6) in a burst and lingers, dealing more damage next round.",
    "source": "Spell Compendium, p. 231",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "voice-of-the-dragon",
    "name": "Voice Of The Dragon",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 4,
      "Dragon": 4,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a dragon's voice: bonuses to social skills, a frightful roar option, and draconic speech power.",
    "source": "Spell Compendium, p. 232",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vortex-of-teeth",
    "name": "Vortex Of Teeth",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Force"
    ],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "Hollow cylinder (40-ft. radius, 20 ft. high, with a 5-ft.-radius safe zone at the center)",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "A vortex of snapping force-teeth swirls around you, biting adjacent creatures each round.",
    "source": "Spell Compendium, p. 232",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "vulnerability",
    "name": "Vulnerability",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 4,
      "Cleric": 5,
      "Sorcerer/ Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject loses its damage reduction and resistances, becoming vulnerable to all damage types.",
    "source": "Spell Compendium, p. 232",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wail-of-doom",
    "name": "Wail Of Doom",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Fear",
      "Mind-Affecting",
      "Sonic"
    ],
    "levels": {
      "Bard": 5
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "Instantaneous + 1",
    "savingThrow": "Will partial; see text",
    "spellResistance": "Yes",
    "summary": "Your wail dooms enemies: they take penalties on attacks, saves, and checks as despair washes over them.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wall-of-chaos",
    "name": "Wall Of Chaos",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Chaotic"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 5 ft./2 levels",
    "duration": "10",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A wall of chaotic energy damages lawful creatures passing through and blocks spells like wall of force in part.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Wall Of Good."
  },
  {
    "id": "wall-of-dispel-magic",
    "name": "Wall Of Dispel Magic",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wall that dispels spells and suppresses the magic of creatures passing through it.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wall-of-evil",
    "name": "Wall Of Evil",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 5 ft./2 levels",
    "duration": "10",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A wall of evil energy damages good creatures passing through and hedges good outsiders.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Wall Of Good."
  },
  {
    "id": "wall-of-gears",
    "name": "Wall Of Gears",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Mechanus": 6,
      "Sorcerer/Wizard": 6
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A straight wall of moving gears whose area is up to one 10-ft. square/level; see text",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "No",
    "summary": "A wall of grinding gears deals heavy damage to creatures passing through or pushed into it.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "wall-of-gloom",
    "name": "Wall Of Gloom",
    "ruleset": "core",
    "school": "Illusion",
    "descriptors": [
      "Darkness",
      "Fear",
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level",
    "duration": "Concentration + 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wall of shadowy gloom blocks sight and movement partially; creatures passing through are slowed by dread.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Shadow"
  },
  {
    "id": "wall-of-good",
    "name": "Wall Of Good",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Good"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 5 ft./2 levels",
    "duration": "10",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A wall of good energy damages evil creatures passing through and hedges evil outsiders.",
    "source": "Spell Compendium, p. 233",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wall-of-greater-dispel-magic",
    "name": "Wall Of Greater Dispel Magic",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 8,
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As wall of dispel magic, but dispels with greater dispel magic's power.",
    "source": "Spell Compendium, p. 234",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Wall Of Dispel Magic."
  },
  {
    "id": "wall-of-law",
    "name": "Wall Of Law",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Lawful"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 5 ft./2 levels",
    "duration": "10",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "A wall of lawful energy damages chaotic creatures passing through and hedges chaotic outsiders.",
    "source": "Spell Compendium, p. 234",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Wall Of Good."
  },
  {
    "id": "wall-of-light",
    "name": "Wall Of Light",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Light"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level or a sphere or hemisphere with a radius of up to 5 ft./2 levels",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes; see text",
    "summary": "A wall of bright light blinds creatures passing through and damages undead.",
    "source": "Spell Compendium, p. 234",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wall-of-limbs",
    "name": "Wall Of Limbs",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A wall of whirling limbs up to 20 ft. long/level, or a ring of whirling limbs with a radius of up to 5 ft./2 levels, either form 20 ft. high",
    "duration": "1",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "Yes",
    "summary": "A wall of grasping limbs grapples creatures that approach or pass through.",
    "source": "Spell Compendium, p. 234",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wall-of-sand",
    "name": "Wall Of Sand",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Earth"
    ],
    "levels": {
      "Cleric": 4,
      "Druid": 5,
      "Sorcerer/ Wizard": 4
    },
    "components": "V, S, M/DF",
    "castingTime": "Not printed in source",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level (S)",
    "duration": "Concentration + 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "A wall of churning sand blocks sight and movement; creatures inside suffocate and take damage.",
    "source": "Spell Compendium, p. 235",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "wall-of-smoke",
    "name": "Wall Of Smoke",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level (S)",
    "duration": "1",
    "savingThrow": "Fortitude partial; see text",
    "spellResistance": "No",
    "summary": "A thin wall of smoke blocks sight like fog and sickens creatures passing through.",
    "source": "Spell Compendium, p. 235",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "wall-of-water",
    "name": "Wall Of Water",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "A straight wall whose area is up to one 10-ft. square/level (S)",
    "duration": "10",
    "savingThrow": "Reflex negates; see text",
    "spellResistance": "No",
    "summary": "A wall of water blocks attacks, douses fires, and slows creatures passing through.",
    "source": "Spell Compendium, p. 235",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "war-cry",
    "name": "War Cry",
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
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your war cry panics enemies of fewer HD and bolsters your courage... in practice, enemies who fail their saves are panicked briefly.",
    "source": "Spell Compendium, p. 236",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "warning-shout",
    "name": "Warning Shout",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Paladin": 1
    },
    "components": "V",
    "castingTime": "1 immediate action",
    "range": "30 ft.",
    "targetOrArea": "All allies within 30 feet",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "As an immediate response, your shout grants an ally a bonus to AC or a save against an imminent attack.",
    "source": "Spell Compendium, p. 236",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "waterspout",
    "name": "Waterspout",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [
      "Water"
    ],
    "levels": {
      "Druid": 7,
      "Ocean": 7
    },
    "components": "V, S, DF",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "targetOrArea": "Cylinder (5-ft. radius, 80 ft. high)",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "No",
    "summary": "A waterspout churns across the water, battering ships and creatures and sucking them upward.",
    "source": "Spell Compendium, p. 236",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "wave-of-grief",
    "name": "Wave Of Grief",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Evil",
      "Mind-Affecting"
    ],
    "levels": {
      "Bard": 2,
      "Blackguard": 2,
      "Cleric": 2
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Cone-shaped burst",
    "duration": "1",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "A wave of grief imposes penalties on enemies' attacks, saves, and checks as sorrow overwhelms them.",
    "source": "Spell Compendium, p. 236",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weapon-of-energy",
    "name": "Weapon Of Energy",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "seetext"
    ],
    "levels": {
      "Cleric": 3,
      "Sorcerer/Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One weapon",
    "duration": "1",
    "savingThrow": "Fortitude negates (object, harmless)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "A weapon deals +1d6 damage of a chosen energy type on each hit.",
    "source": "Spell Compendium, p. 236",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weapon-of-impact",
    "name": "Weapon Of Impact",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 3,
      "Cleric": 3,
      "Sorcerer/ Wizard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One bludgeoning weapon or fifty bludgeoning projectiles, all of which must be in contact with one another at the time of casting",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "As keen edge, but for bludgeoning weapons: doubles their threat range.",
    "source": "Spell Compendium, p. 237",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weapon-of-the-deity",
    "name": "Weapon Of The Deity",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Blackguard": 3,
      "Cleric": 3,
      "Paladin": 3
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Weapon touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless, object)",
    "spellResistance": "Yes (harmless, object)",
    "summary": "Your deity's favored weapon appears in your hand with enhancement and special qualities scaling with your level.",
    "source": "Spell Compendium, p. 237",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weapon-shift",
    "name": "Weapon Shift",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 1
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One melee weapon of up to 15 lb.",
    "duration": "1",
    "savingThrow": "Fortitude negates (object)",
    "spellResistance": "Yes (object)",
    "summary": "Transforms a weapon into another weapon of similar size and type for the duration.",
    "source": "Spell Compendium, p. 237",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weather-eye",
    "name": "Weather Eye",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Druid": 3
    },
    "components": "V, S, M, F",
    "castingTime": "1 hour",
    "range": "1 mile + 1 mile/level",
    "targetOrArea": "1-mile radius + 1-mile/level centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You accurately predict the weather for the next several days in the region.",
    "source": "Spell Compendium, p. 238",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "weighed-in-the-balance",
    "name": "Weighed In The Balance",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Balance": 9
    },
    "components": "V 238",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Creatures in a 30-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "Will negates",
    "spellResistance": "Yes",
    "summary": "The subject's soul is weighed: creatures of extreme alignment take massive damage; it judges and punishes the imbalanced.",
    "source": "Spell Compendium, p. 238",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "whirling-blade",
    "name": "Whirling Blade",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Bard": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S, F",
    "castingTime": "1 standard action A whirling blade makes attacks against many foes",
    "range": "60 ft.",
    "targetOrArea": "60-ft. line",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "You throw a slashing weapon that attacks every creature in a line and returns to you.",
    "source": "Spell Compendium, p. 238",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "whirlwind-greater",
    "name": "Whirlwind, Greater",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Air"
    ],
    "levels": {
      "Druid": 9,
      "Windstorm": 9
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "20-ft.-radius tornado, up to 5 ft./level high, centered on a point in space",
    "duration": "1",
    "savingThrow": "Fortitude partial",
    "spellResistance": "Yes",
    "summary": "As whirlwind, but a larger, longer-lasting cyclone under finer control.",
    "source": "Spell Compendium, p. 239",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wild-runner",
    "name": "Wild Runner",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Ranger": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "10",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain animal speed and endurance: faster movement, Run benefits, and scent briefly.",
    "source": "Spell Compendium, p. 239",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wind-at-back",
    "name": "Wind At Back",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "targetOrArea": "One creature/level, no two of which are more than 30 ft. apart",
    "duration": "12 hours",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Favorable winds double your group's overland speed by filling sails and easing travel.",
    "source": "Spell Compendium, p. 239",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wind-tunnel",
    "name": "Wind Tunnel",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Druid": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature/level",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A tunnel of controlled wind lets creatures travel swiftly through it or blocks a passage with rushing air.",
    "source": "Spell Compendium, p. 239",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wingbind",
    "name": "Wingbind",
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
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "Wings of force bind a flying creature's wings, forcing it to descend.",
    "source": "Spell Compendium, p. 240",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "winged-mount",
    "name": "Winged Mount",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Blackguard": 4,
      "Paladin": 4
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Your touched special mount",
    "duration": "10",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Your mount gains wings and a fly speed for the duration.",
    "source": "Spell Compendium, p. 240",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wings-of-air",
    "name": "Wings Of Air",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch The wind tunnel spell guides ranged attacks to their targets",
    "targetOrArea": "Winged creature touched",
    "duration": "1",
    "savingThrow": "None (harmless)",
    "spellResistance": "No (harmless)",
    "summary": "Wings of air improve a flying creature's maneuverability by one step.",
    "source": "Spell Compendium, p. 240",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wings-of-air-greater",
    "name": "Wings Of Air, Greater",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4,
      "Sorcerer/Wizard": 4
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "Touch The wind tunnel spell guides ranged attacks to their targets",
    "targetOrArea": "Winged creature touched",
    "duration": "1",
    "savingThrow": "None (harmless)",
    "spellResistance": "No (harmless)",
    "summary": "As wings of air, but improves maneuverability by two steps.",
    "source": "Spell Compendium, p. 240",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "note": "Abbreviated entry: missing fields follow Wings Of Air."
  },
  {
    "id": "wings-of-the-sea",
    "name": "Wings Of The Sea",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Cleric": 1,
      "Druid": 1,
      "Ranger": 1,
      "Sorcerer/Wizard": 1
    },
    "components": "S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "Fins and gills let you swim well and breathe underwater briefly: you gain a swim speed and water breathing.",
    "source": "Spell Compendium, p. 240",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "winter-chill",
    "name": "Winter Chill",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 1
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your touch or presence chills: a creature takes cold damage and fatigue from wintry cold.",
    "source": "Spell Compendium, p. 241",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "winters-embrace",
    "name": "Winter’S Embrace",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Cold"
    ],
    "levels": {
      "Druid": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One creature",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Cold winds embrace the area, dealing cold damage and coating surfaces in frost that hampers movement.",
    "source": "Spell Compendium, p. 241",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wither-limb",
    "name": "Wither Limb",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Deathbound": 4
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "Limbs of one humanoid",
    "duration": "Permanent",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Withers one of the subject's limbs, making it useless: arm (drops items, penalties) or leg (slows).",
    "source": "Spell Compendium, p. 241",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "withering-palm",
    "name": "Withering Palm",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Cleric": 7
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Living creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "Your palm strike withers the subject over time: it takes Constitution damage each day as it wastes away.",
    "source": "Spell Compendium, p. 241",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wood-rot",
    "name": "Wood Rot",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Druid": 4
    },
    "components": "V, S, M",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "One nonmagical wooden object or a volume of wood; or one plant creature",
    "duration": "Instantaneous or 1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Rots and decays wooden objects and structures, destroying them rapidly.",
    "source": "Spell Compendium, p. 241",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wood-wose",
    "name": "Wood Wose",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Druid": 1
    },
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One nature servant",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "No",
    "summary": "Calls a wood wose — a nature spirit — to perform simple tasks and guide you through the wild.",
    "source": "Spell Compendium, p. 242",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "word-of-balance",
    "name": "Word Of Balance",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Balance": 7,
      "Druid": 7
    },
    "components": "V",
    "castingTime": "1 standard action",
    "range": "30 ft.",
    "targetOrArea": "Creatures in a 30-ft.-radius spread centered on you",
    "duration": "Instantaneous",
    "savingThrow": "None or Will negates; see text",
    "spellResistance": "Yes",
    "summary": "As holy word/blasphemy for neutrality: harms creatures of extreme alignments (strongly lawful/chaotic/good/evil) according to their imbalance.",
    "source": "Spell Compendium, p. 242",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "word-of-binding",
    "name": "Word Of Binding",
    "ruleset": "core",
    "school": "Conjuration",
    "descriptors": [],
    "levels": {
      "Paladin": 3
    },
    "components": "V, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./level)",
    "targetOrArea": "One Medium or smaller humanoid or monstrous humanoid",
    "duration": "1",
    "savingThrow": "Reflex negates",
    "spellResistance": "Yes",
    "summary": "Words of power form chains of force that hold a creature fast, as a binding hold that scales with your faith.",
    "source": "Spell Compendium, p. 242",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Creation"
  },
  {
    "id": "wounding-whispers",
    "name": "Wounding Whispers",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [
      "Sonic"
    ],
    "levels": {
      "Bard": 3
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Whispering winds surround you: creatures striking you in melee take sonic damage as the whispers lash back.",
    "source": "Spell Compendium, p. 242",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wrack",
    "name": "Wrack",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [
      "Evil"
    ],
    "levels": {
      "Cleric": 4,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One humanoid",
    "duration": "1",
    "savingThrow": "Fortitude negates",
    "spellResistance": "Yes",
    "summary": "The subject is wracked with pain: blinded and helpless with agony for several rounds, then sickened.",
    "source": "Spell Compendium, p. 243",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wracking-touch",
    "name": "Wracking Touch",
    "ruleset": "core",
    "school": "Necromancy",
    "descriptors": [],
    "levels": {
      "Druid": 2,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude half",
    "spellResistance": "Yes",
    "summary": "Your touch wracks a creature with pain: it takes damage and is sickened briefly.",
    "source": "Spell Compendium, p. 243",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wraithstrike",
    "name": "Wraithstrike",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Assassin": 3,
      "Sorcerer/Wizard": 2
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1 round",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "Your melee attacks resolve as touch attacks for 1 round, as your weapon becomes wraithlike.",
    "source": "Spell Compendium, p. 243",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "wrathful-castigation",
    "name": "Wrathful Castigation",
    "ruleset": "core",
    "school": "Enchantment",
    "descriptors": [
      "Mind-Affecting"
    ],
    "levels": {
      "Sorcerer/Wizard": 8
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "One living creature",
    "duration": "1",
    "savingThrow": "See text",
    "spellResistance": "Yes",
    "summary": "You castigate a creature with divine wrath: it is stunned and compelled to confess/atone, taking damage if it resists.",
    "source": "Spell Compendium, p. 243",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf",
    "subschool": "Compulsion"
  },
  {
    "id": "xorn-movement",
    "name": "Xorn Movement",
    "ruleset": "core",
    "school": "Transmutation",
    "descriptors": [],
    "levels": {
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "targetOrArea": "Creature touched",
    "duration": "1",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "You gain a xorn's earthglide: you can move through earth and stone as a xorn does.",
    "source": "Spell Compendium, p. 244",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "zeal",
    "name": "Zeal",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Competition": 2,
      "Blackguard": 2,
      "Paladin": 2
    },
    "components": "V, S",
    "castingTime": "1 swift action",
    "range": "Personal",
    "targetOrArea": "You",
    "duration": "1",
    "savingThrow": "Not printed in source",
    "spellResistance": "Not printed in source",
    "summary": "You gain a sacred surge: +2 dodge bonus to AC and you can move swiftly to reach a chosen foe, ignoring intervening enemies.",
    "source": "Spell Compendium, p. 244",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "zealot-pact",
    "name": "Zealot Pact",
    "ruleset": "core",
    "school": "Evocation",
    "descriptors": [],
    "levels": {
      "Cleric": 6,
      "Competition": 6,
      "Pact": 6
    },
    "components": "V, S, DF, XP",
    "castingTime": "10 minutes",
    "range": "Touch",
    "targetOrArea": "Willing living creature touched",
    "duration": "Permanent until",
    "savingThrow": "Will negates (harmless)",
    "spellResistance": "Yes (harmless)",
    "summary": "A pact effect: when you fall in battle under set conditions, restorative and empowering spells trigger to return you to the fight.",
    "source": "Spell Compendium, p. 244",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "zone-of-respite",
    "name": "Zone Of Respite",
    "ruleset": "core",
    "school": "Abjuration",
    "descriptors": [],
    "levels": {
      "Cleric": 5,
      "Sorcerer/Wizard": 5
    },
    "components": "V, S, M",
    "castingTime": "2 rounds",
    "range": "20 ft.",
    "targetOrArea": "20-ft.-radius emanation centered on you",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Creates a zone where extraplanar creatures cannot enter or be summoned, a safe respite from outsiders.",
    "source": "Spell Compendium, p. 244",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  },
  {
    "id": "zone-of-revelation",
    "name": "Zone Of Revelation",
    "ruleset": "core",
    "school": "Divination",
    "descriptors": [],
    "levels": {
      "Cleric": 5
    },
    "components": "V, S, M/DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "targetOrArea": "5-ft.-radius/level emanation centered on a point in space",
    "duration": "1",
    "savingThrow": "None",
    "spellResistance": "Yes",
    "summary": "Reveals everything hidden in an area: invisible, ethereal, disguised, and shapechanged creatures are exposed.",
    "source": "Spell Compendium, p. 244",
    "sourceUrl": "/A POC PC related/5.Splat/Spell Compendium.pdf"
  }
];
