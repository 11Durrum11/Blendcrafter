import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Sandstorm — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const SANDSTORM_SPELLS: SpellDefinition[] = [
{
  "id": "antifire-sphere",
  "name": "Antifire Sphere",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "10-ft.-radius emanation from touched creature",
  "duration": "10 min./level 110",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No; see text",
  "summary": "You bring into being a mobile spherical energy field that protects against fire: all creatures within the area gain immunity to fire damage.",
  "source": "Sandstorm, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "ashen-union",
  "name": "Ashen Union",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half and",
  "spellResistance": "Yes",
  "summary": "You drain all the moisture from a living creature's body, dealing 1d6 points of dessication damage per two caster levels (maximum 10d6); a successful Fortitude save halves the damage.",
  "source": "Sandstorm, p. 111",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "ashstar",
  "name": "Ashstar",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft. level)",
  "targetOrArea": "One ashstar; see text",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "No",
  "summary": "You create a magical ashstar construct that shoots from your hand and hovers within range, giving off a reddish light; you can reposition it by concentrating.",
  "source": "Sandstorm, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "awaken-sand",
  "name": "Awaken Sand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 6,
    "Sand": 6
  },
  "components": "V, S, DF, XP",
  "castingTime": "24 hours",
  "range": "Touch",
  "targetOrArea": "15-ft. area of sand touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You awaken a region of sand to humanlike sentience; the awakened sand is friendly toward you and serves in tasks you communicate to it.",
  "source": "Sandstorm, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "black-sand",
  "name": "Black Sand",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Darkness",
    "Evil"
  ],
  "levels": {
    "Cleric": 3,
    "Sand": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "1 min./level",
  "savingThrow": "Reflex negates; see text",
  "spellResistance": "Yes",
  "summary": "Creates an area of black sand infused with shadowstuff and negative energy that swallows light into magical darkness and damages creatures that touch it each round.",
  "source": "Sandstorm, p. 112",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "blast-of-sand",
  "name": "Blast of Sand",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 4,
    "Sand": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half",
  "spellResistance": "No",
  "summary": "Sand sprays from your palm with enough force to strip flesh from bone, dealing 1d6 points of damage per caster level (maximum 10d6).",
  "source": "Sandstorm, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "body-blaze",
  "name": "Body Blaze",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal; see text",
  "targetOrArea": "You",
  "duration": "1 round/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You are surrounded in flame that does not harm you or your equipment, and as you move you leave a vertical sheet of flame up to 20 feet high in your wake.",
  "source": "Sandstorm, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "choking-sands",
  "name": "Choking Sands",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous; see text",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "You coat the target's lungs with dust and sand; it can cough the sand up with a full-round action and a Fortitude save, or begin to suffocate.",
  "source": "Sandstorm, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "cloak-of-shade",
  "name": "Cloak of Shade",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Druid": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "The subject is wrapped in an envelope of perfect shade in which the temperature is one band lower than the surroundings.",
  "source": "Sandstorm, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "control-sand",
  "name": "Control Sand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Dust or sand in a volume of 10 ft./level wide by 10 ft./level long by 2 ft./level deep (S)",
  "duration": "10 min./level (D)",
  "savingThrow": "None; see text",
  "spellResistance": "No",
  "summary": "Depending on the version chosen, raises or lowers fine particles such as dust or sand by up to 2 feet per caster level.",
  "source": "Sandstorm, p. 113",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "desert-binding",
  "name": "Desert Binding",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Sand": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, M",
  "castingTime": "1 minute",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "See text (D)",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "Functions as binding, except as noted in this book — including the sand in the hourglass form, in which the subject becomes a minute portion of sand held in a glass container.",
  "source": "Sandstorm, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Compulsion"
},
{
  "id": "desert-diversion",
  "name": "Desert Diversion",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Ray",
  "duration": "1 min./level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A gray ray flecked with red covers a struck target in a glittering field that usurps planar travel such as dimension door, ethereal jaunt, and gate, diverting it as the text describes.",
  "source": "Sandstorm, p. 114",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Teleportation"
},
{
  "id": "desiccate",
  "name": "Desiccate",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 2,
    "Thirst": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "You evaporate moisture from a living creature, dealing 1d6 points of dessication damage per two caster levels (maximum 5d6) and dehydrating it; plants and water-subtype elementals take larger damage dice.",
  "source": "Sandstorm, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "desiccate-mass",
  "name": "Desiccate, Mass",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Druid": 6,
    "Sorcerer/Wizard": 6,
    "Thirst": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Functions as desiccate, except that it affects multiple creatures, one per caster level.",
  "source": "Sandstorm, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "note": "Abbreviated entry in Sandstorm: functions as Desiccate except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "dispel-water",
  "name": "Dispel Water",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Cleric": 5,
    "Druid": 4,
    "Sorcerer/Wizard": 5,
    "Thirst": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "See text",
  "duration": "Instantaneous",
  "savingThrow": "See text",
  "spellResistance": "See text",
  "summary": "You call on the power of the waste to dry up a body of water, counter a water-based spell or effect, or dismiss a water creature.",
  "source": "Sandstorm, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "flashflood",
  "name": "Flashflood",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Water"
  ],
  "levels": {
    "Cleric": 8,
    "Druid": 8
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "120 ft.",
  "targetOrArea": "Cone-shaped spread",
  "duration": "1 round",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "You create a roaring wall of water 10 feet high that surges forward from where you stand, sweeping away or smashing down nearly everything in its path.",
  "source": "Sandstorm, p. 115",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "flaywind-burst",
  "name": "Flaywind Burst",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Air",
    "Earth"
  ],
  "levels": {
    "Cleric": 5,
    "Druid": 5,
    "Sand": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "A brief windstorm filled with scouring supernatural grit strips flesh, dealing 1d6 points of damage per caster level (maximum 10d6) in addition to the wind's effects.",
  "source": "Sandstorm, p. 116",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "flesh-to-salt",
  "name": "Flesh to Salt",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You call forth the essence of salt in the target, dealing dessication damage; a target that loses more than half its current hit points must save or crystallize completely into salt.",
  "source": "Sandstorm, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "flesh-to-salt-mass",
  "name": "Flesh to Salt, Mass",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "Functions as flesh to salt, except that it affects multiple creatures — one additional creature per four caster levels, to a maximum of five.",
  "source": "Sandstorm, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "note": "Abbreviated entry in Sandstorm: functions as Flesh to Salt except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "freedom-of-breath",
  "name": "Freedom of Breath",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Paladin": 2,
    "Ranger": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject can breathe freely in conditions that ordinarily inhibit respiration, such as sandstorms, and need not check to avoid suffocation while any breathable substance is available.",
  "source": "Sandstorm, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "fuse-sand",
  "name": "Fuse Sand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to two 10-ft. cubes per level (S)",
  "duration": "Instantaneous",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Normal sand melts slightly and sticks together into a soft, porous building material; creatures in the sand may save to escape before it hardens, or be trapped.",
  "source": "Sandstorm, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "haboob",
  "name": "Haboob",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Air",
    "Earth"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Ranger": 3,
    "Sand": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft. level)",
  "targetOrArea": "Abrasive dust spreads in 20-ft. radius, 20 ft. high",
  "duration": "1 min./level",
  "savingThrow": "None or Reﬂ ex half; see text",
  "spellResistance": "No",
  "summary": "A thick haze of swirling dust and sand obscures all sight beyond 5 feet, grants concealment nearby and total concealment farther away, and extinguishes unprotected flames.",
  "source": "Sandstorm, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "halo-of-sand",
  "name": "Halo of Sand",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 2,
    "Ranger": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 min./level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "A thin band of sand swirls around your body, granting a +1 deflection bonus to AC that grows with caster level to a maximum of +4.",
  "source": "Sandstorm, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "hydrate",
  "name": "Hydrate",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Druid": 2,
    "Paladin": 2,
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Will half; see text",
  "spellResistance": "Yes; see text",
  "summary": "Creates moisture within a living creature’s body, healing 2d8 +1 per caster level (maximum +10) points of dessication damage and removing dehydration effects.",
  "source": "Sandstorm, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Healing"
},
{
  "id": "impede-suns-brilliance",
  "name": "Impede Sun's Brilliance",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Summer": 1
  },
  "components": "S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Cylinder (10-ft. radius, 20 ft. high)",
  "duration": "10 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Reduces the sun’s light to a comfortable glow in a stationary area, dropping the temperature by 20 degrees and improving protection against heat by one step.",
  "source": "Sandstorm, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "locate-water",
  "name": "Locate Water",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Druid": 1,
    "Ranger": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cone-shaped emanation",
  "duration": "Concentration, up to 10 min./level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You sense the direction of a substantial body of water, learning more about the number, size, and location of water sources the longer you search.",
  "source": "Sandstorm, p. 118",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "mantle-of-the-fiery-spirit",
  "name": "Mantle of the Fiery Spirit",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 9,
    "Druid": 8
  },
  "components": "V, S, M, XP",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Permanently grants the target the fire subtype.",
  "source": "Sandstorm, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "mephit-mob",
  "name": "Mephit Mob",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 6,
    "Druid": 6,
    "Thirst": 7
  },
  "components": "V, S",
  "castingTime": "1 minute",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Two or more summoned creatures, no two of which can be more than 30 ft. apart",
  "duration": "10 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Summons 2d6 mephits of a kind you designate, which appear where you choose and act immediately on your turn.",
  "source": "Sandstorm, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning"
},
{
  "id": "mummify",
  "name": "Mummify",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You flash-dry a creature, killing it and preserving it in instantaneous mummification; a successful Fortitude save instead means 6d6 points of dessication damage and dehydration.",
  "source": "Sandstorm, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "parboil",
  "name": "Parboil",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Cleric": 5,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You flash-heat the air in an area, dealing 6d6 points of fire damage and 2d4 points of Intelligence damage; a successful Fortitude save halves the fire damage and negates the Intelligence damage.",
  "source": "Sandstorm, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "parching-touch",
  "name": "Parching Touch",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1,
    "Thirst": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature or creatures touched (up to one/level)",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "Your touch drains moisture from a living creature, dealing 1d6 points of dessication damage (1d8 against plants and water-subtype elementals), plus Constitution damage and dehydration on a failed save.",
  "source": "Sandstorm, p. 119",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "protection-from-dessication",
  "name": "Protection from Dessication",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Druid": 2,
    "Ranger": 2,
    "Sorcerer/Wizard": 3,
    "Summer": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "10 min./level or until discharged",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The warded creature cannot become dehydrated, until the spell has prevented 10 points of dehydration damage per caster level (maximum 100).",
  "source": "Sandstorm, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "sandform",
  "name": "Sandform",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 min./level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Transforms your body and equipment into living sand: you take the form of an ooze, immune to poison, sleep, paralysis, polymorph, stunning, critical hits, and flanking.",
  "source": "Sandstorm, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "sandstorm",
  "name": "Sandstorm",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Air",
    "Earth"
  ],
  "levels": {
    "Druid": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "40 ft./level",
  "targetOrArea": "40 ft./level radius cylinder 40 ft. high",
  "duration": "10 min./level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "No",
  "summary": "You create a duststorm or sandstorm using the parameters of control winds, except that you need not be in an area of exposed sandy soil.",
  "source": "Sandstorm, p. 120",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "scalding-mud",
  "name": "Scalding Mud",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth",
    "Fire"
  ],
  "levels": {
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to two 10-ft. cubes/level (S)",
  "duration": "Permanent; see text",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Functions as transmute rock to mud, except it can be cast on sand, earth, and unworked rock, and the mud created is boiling hot, dealing 5d6 points of fire damage per round to creatures mired in it.",
  "source": "Sandstorm, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "note": "Sandstorm prints no Target/Area line for this spell; the area follows transmute rock to mud, which the spell functions as."
},
{
  "id": "scimitar-of-sand",
  "name": "Scimitar of Sand",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "0 ft.",
  "targetOrArea": "Scimitar of grinding sand",
  "duration": "1 min./level (D)",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "A curved 3-foot blade of screaming sand springs from your hand; its attacks are melee touch attacks dealing 1d6 damage +1 per two caster levels (maximum +10), with no Strength bonus.",
  "source": "Sandstorm, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "searing-exposure",
  "name": "Searing Exposure",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Fire",
    "Light"
  ],
  "levels": {
    "Druid": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You expose the target to hours of severe heat and desert sun in a moment: 1d4 points of nonlethal damage per caster level (maximum 15d4) on a failed Fortitude save.",
  "source": "Sandstorm, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "skin-of-the-cactus",
  "name": "Skin of the Cactus",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Ranger": 3,
    "Summer": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "10 min./level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Grants a living creature the toughness and needles of a cactus: an enhancement bonus to its natural armor that rises to +5 at 13th caster level, plus defensive spines.",
  "source": "Sandstorm, p. 121",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "sleep-mote",
  "name": "Sleep Mote",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "5-ft.-diameter sphere",
  "duration": "1 round/level; see text",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Creates a dust devil of slumber-inducing particles that flies at 30 feet per round under your control or a simple program you specify.",
  "source": "Sandstorm, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Compulsion"
},
{
  "id": "slipsand",
  "name": "Slipsand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One 10-ft.-cube region of slipsand/level",
  "duration": "Permanent",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Turns an area of natural sand into a pit of deadly slipsand: a creature that cannot free itself sinks to the bottom and must hold its breath or suffocate.",
  "source": "Sandstorm, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "soul-of-the-waste",
  "name": "Soul of the Waste",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 min./level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You meld your body and up to 100 pounds of nonliving gear into an accumulation of sand, dust, ash, or loose earth, remaining aware of the passage of time.",
  "source": "Sandstorm, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "storm-mote",
  "name": "Storm Mote",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Air",
    "Earth"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Cylinder (5-ft. radius, 10 ft. high)",
  "duration": "1 round/level",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Creates a whirling vortex of sand that flies at 60 feet per round under your control or a simple program you specify.",
  "source": "Sandstorm, p. 122",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "summon-desert-ally-i",
  "name": "Summon Desert Ally I",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One summoned creature",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Summons a desert creature from the 1st-level list, which appears where you designate and acts immediately on your turn.",
  "source": "Sandstorm, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning"
},
{
  "id": "summon-desert-ally-ii",
  "name": "Summon Desert Ally II",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Ranger": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 2nd-level creature or 1d3 1st-level creatures of the same kind.",
  "source": "Sandstorm, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-iii",
  "name": "Summon Desert Ally III",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 3,
    "Ranger": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 3rd-level creature or 1d3 2nd-level creatures of the same kind.",
  "source": "Sandstorm, p. 123",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-iv",
  "name": "Summon Desert Ally IV",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 4th-level creature, 1d3 3rd-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-v",
  "name": "Summon Desert Ally V",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 5th-level creature, 1d3 4th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-vi",
  "name": "Summon Desert Ally VI",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 6th-level creature, 1d3 5th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-vii",
  "name": "Summon Desert Ally VII",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 7th-level creature, 1d3 6th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-viii",
  "name": "Summon Desert Ally VIII",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 8
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 8th-level creature, 1d3 7th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "summon-desert-ally-ix",
  "name": "Summon Desert Ally IX",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 9,
    "Sand": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As summon desert ally I, except you can summon one 9th-level creature, 1d3 8th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Summoning",
  "note": "Abbreviated entry in Sandstorm: functions as Summon Desert Ally I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "sunstroke",
  "name": "Sunstroke",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Sorcerer/Wizard": 1,
    "Summer": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "You cause a living creature to suffer heatstroke: 2d6 points of nonlethal damage, and on a failed Fortitude save it becomes fatigued, or exhausted if already fatigued.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "symbol-of-thirst",
  "name": "Symbol of Thirst",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6,
    "Thirst": 6
  },
  "components": "V, S, M",
  "castingTime": "10 minutes",
  "range": "0 ft.; see text",
  "targetOrArea": "One symbol",
  "duration": "See text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Functions as symbol of death, except that creatures within 60 feet of the triggered symbol are consumed by terrible thirst (as the tormenting thirst spell) for 10 minutes per caster level.",
  "source": "Sandstorm, p. 124",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Compulsion"
},
{
  "id": "tormenting-thirst",
  "name": "Tormenting Thirst",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Sorcerer/Wizard": 3,
    "Thirst": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Fills the subject with a terrible thirst: desperate, it must run to the nearest water and drink as deeply as it can.",
  "source": "Sandstorm, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Compulsion"
},
{
  "id": "transmute-sand-to-glass",
  "name": "Transmute Sand to Glass",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to two 10-ft. cubes/level (S)",
  "duration": "Permanent",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Transforms a mass of normal sand of any depth into solid glass permanently; creatures in the sand may save to escape or be trapped and must be broken out.",
  "source": "Sandstorm, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "transmute-sand-to-stone",
  "name": "Transmute Sand to Stone",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to two 10-ft. cubes/level (S)",
  "duration": "Permanent",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Transforms a mass of sand of any depth into solid stone permanently; creatures that fail to escape are entangled and must break out by damaging the stone.",
  "source": "Sandstorm, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "transmute-stone-to-sand",
  "name": "Transmute Stone to Sand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to two 10-ft. cubes/level (S)",
  "duration": "Permanent",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Turns natural, uncut, or unworked stone into an equal volume of sand up to 10 feet deep; magical stone is not affected.",
  "source": "Sandstorm, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "unearthly-heat",
  "name": "Unearthly Heat",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5,
    "Summer": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "Your touch raises the target’s body temperature as though exposed to unearthly heat: each round it takes 1d6 points of lethal damage and 1d4 points of nonlethal damage, with a Fortitude save each round to negate.",
  "source": "Sandstorm, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "vitrify",
  "name": "Vitrify",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Sand": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to one 10-ft. cube/5 levels (S)",
  "duration": "Permanent",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Transforms normal sand of any depth into crude glass, instantly heating it to the melting point; creatures may save to escape before it hardens.",
  "source": "Sandstorm, p. 126",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "wall-of-magma",
  "name": "Wall of Magma",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Earth",
    "Fire"
  ],
  "levels": {
    "Cleric": 5,
    "Druid": 6,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Wall of molten stone whose area is up to one 5-ft. square/level (S)",
  "duration": "1 min./level",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "Creates a wall of thick, glowing magma that merges into adjoining rock surfaces and can seal off a passage or breach, burning flammable materials in contact with it.",
  "source": "Sandstorm, p. 127",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "wall-of-salt",
  "name": "Wall of Salt",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Cleric": 4,
    "Druid": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Salt wall whose area is up to one 5-ft. square/level (S)",
  "duration": "Instantaneous",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Creates a gleaming wall of salt crystal 1 inch thick per caster level that merges into adjoining rock surfaces and can seal a passage or be used to construct new walls.",
  "source": "Sandstorm, p. 128",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
  "subschool": "Creation"
},
{
  "id": "waste-strider",
  "name": "Waste Strider",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Sand": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One touched creature/level",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject can move through desert environments without hindrance, ignoring movement penalties and skill-check penalties for desert and waste terrain.",
  "source": "Sandstorm, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "whispering-sand",
  "name": "Whispering Sand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Language-Dependent"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "See text",
  "targetOrArea": "One creature/level",
  "duration": "10 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Sand, ash, or dust serves as a conduit for conversation with creatures in far-removed locales whose identities you fix in your mind.",
  "source": "Sandstorm, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
{
  "id": "wither",
  "name": "Wither",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Drains moisture from a living creature: 1d6 points of dessication damage per caster level (maximum 10d6) and dehydration; a successful Fortitude save halves the damage and negates the dehydration, and plants and water elementals take larger dice.",
  "source": "Sandstorm, p. 129",
  "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf"
},
];
