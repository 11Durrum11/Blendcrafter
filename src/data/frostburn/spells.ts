import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Frostburn — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const FROSTBURN_SPELLS: SpellDefinition[] = [
{
  "id": "algid-enhancement",
  "name": "Algid Enhancement",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, Coldﬁ re",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One cold creature/level",
  "duration": "24 hours",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Energizes cold creatures with coldfire: creatures with the cold subtype gain a deflection bonus to AC, temporary hit points, an enhancement bonus on attack rolls, and a bonus on saves against fire, all scaling with caster level.",
  "source": "Frostburn, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "arctic-haze",
  "name": "Arctic Haze",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Fog spreads in a 30-ft. radius, 20 ft. high",
  "duration": "10 min./level",
  "savingThrow": "Fortitude half",
  "spellResistance": "No",
  "summary": "Creates a fog of razor-sharp ice shards that blocks sight beyond 5 feet and grants concealment or total concealment by distance.",
  "source": "Frostburn, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "aura-of-cold-greater",
  "name": "Aura of Cold, Greater",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 7,
    "Druid": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius spherical emanation, centered on you",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As lesser aura of cold, except the emanation extends to 10 feet and deals 2d6 points of cold damage.",
  "source": "Frostburn, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "note": "Abbreviated entry in Frostburn: functions as Aura of Cold, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "aura-of-cold-lesser",
  "name": "Aura of Cold, Lesser",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Paladin": 4,
    "Ranger": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "5 ft.",
  "targetOrArea": "5-ft.-radius spherical emanation, centered on you",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Frigid cold emanates from your body in a 5-foot radius, dealing 1d6 points of cold damage at the start of your round to each creature in the area.",
  "source": "Frostburn, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "binding-snow",
  "name": "Binding Snow",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Paladin": 3,
    "Ranger": 3
  },
  "components": "V, S, DF, Frostfell",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One 10-ft. square/level",
  "duration": "1 hour/level (D)",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "Yes",
  "summary": "Freezes a snow field solid so movement through it is halved unless a creature forces its way with a Strength or Escape Artist check; creatures that fail their Reflex save are stuck fast.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "blizzard",
  "name": "Blizzard",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 5,
    "Winter": 5
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "100 ft.-radius/level spread",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "No",
  "summary": "The temperature plunges and a powerful blizzard erupts: visibility drops to zero, flames are doused, and unprotected creatures suffer the storm's effects.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "blood-snow",
  "name": "Blood Snow",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft. square of snow/level",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Corrupts an area of fallen snow with negative energy: creatures in contact with it must save each round or take Constitution drain and become nauseated.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "bone-chill",
  "name": "Bone Chill",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Ray",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "No",
  "summary": "A ray of burning cold covers a corporeal undead creature in ice, holding it immobile; it may attempt a new save each round to break free.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "boreal-wind",
  "name": "Boreal Wind",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Bard": 5,
    "Cleric": 5,
    "Druid": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Gust of wind (20 ft. wide, 20 ft. high) emanating out from you to the extreme of the range",
  "duration": "1 round + 1 round/2 levels",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "A stronger gust of wind of arctic air blasts from your fingertips, extinguishing flames and battering creatures and objects in its path.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "brumal-stiffening",
  "name": "Brumal Stiffening",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One weapon",
  "duration": "1 round/level",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "Yes",
  "summary": "Makes the targeted weapon brittle, reducing its hardness by 5 and causing it to damage itself when its wielder rolls a natural 1 on an attack.",
  "source": "Frostburn, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "call-avalanche",
  "name": "Call Avalanche",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 5
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "10 ft.-radius/level spread",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂ ex half; see text",
  "spellResistance": "No",
  "summary": "Calls an avalanche of ice and snow out of the sky outdoors, dealing 8d6 points of crushing damage and potentially burying Large or smaller creatures that fail their Reflex saves.",
  "source": "Frostburn, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "column-of-ice",
  "name": "Column of Ice",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One column of ice, 10-ft. radius and 5 ft./level in height",
  "duration": "Permanent",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "No",
  "summary": "A column of ice rises at the point you designate; see the full text for its use in creating barriers and crushing foes beneath falling ice and snow.",
  "source": "Frostburn, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "cometstrike",
  "name": "Cometstrike",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 9
  },
  "components": "V, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Three different creatures or objects",
  "duration": "3 rounds",
  "savingThrow": "Reﬂ ex partial",
  "spellResistance": "No",
  "summary": "Three frozen comets strike up to three different creatures or objects outdoors, each requiring a ranged touch attack and dealing bludgeoning and cold damage.",
  "source": "Frostburn, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "conjure-ice-beast-i",
  "name": "Conjure Ice Beast I",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1,
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One conjured ice creature",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Conjures a creature constructed of magical ice from the 1st-level list, which appears and acts immediately on your turn.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "conjure-ice-beast-ii",
  "name": "Conjure Ice Beast II",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Ranger": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 2nd-level list or two of the same kind from the 1st-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-iii",
  "name": "Conjure Ice Beast III",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Ranger": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 3rd-level list, two from the 2nd-level list, or four from the 1st-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-iv",
  "name": "Conjure Ice Beast IV",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 4,
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 4th-level list, two from the 3rd-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-v",
  "name": "Conjure Ice Beast V",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 5,
    "Druid": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 5th-level list, two from the 4th-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-vi",
  "name": "Conjure Ice Beast VI",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 6,
    "Druid": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 6th-level list, two from the 5th-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-vii",
  "name": "Conjure Ice Beast VII",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 7,
    "Druid": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 7th-level list, two from the 6th-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-viii",
  "name": "Conjure Ice Beast VIII",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 8,
    "Druid": 8
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 8th-level list, two from the 7th-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-beast-ix",
  "name": "Conjure Ice Beast IX",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 9,
    "Druid": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more conjured ice creatures, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As conjure ice beast I, except you may conjure one creature from the 9th-level list, two from the 8th-level list, or four from a lower-level list.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation",
  "note": "Abbreviated entry in Frostburn: functions as Conjure Ice Beast I except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "conjure-ice-object",
  "name": "Conjure Ice Object",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "One object of up to 5 lb./level",
  "duration": "1 min./level",
  "savingThrow": "None (harmless)",
  "spellResistance": "No",
  "summary": "Conjures a block of transparent ice shaped as any object you have seen, up to the weight limit; objects with moving parts do not function, and complex items require a Craft check.",
  "source": "Frostburn, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "control-snow-and-ice",
  "name": "Control Snow and Ice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Ice and snow in a volume of 10 ft./level by 10 ft./level by 2 ft./level (S)",
  "duration": "10 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Raises or lowers snow and ice in the area — lowering it to a minimum depth of 1 inch, by up to 2 feet per caster level.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "control-temperature",
  "name": "Control Temperature",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold",
    "Fire"
  ],
  "levels": {
    "Druid": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 round",
  "range": "20 ft./level",
  "targetOrArea": "20 cu. ft./level emanation, centered on you",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Imbues an area with cold or fire energy, shifting its temperature by one band per five caster levels.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "crack-ice",
  "name": "Crack Ice",
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
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius/level spread; or one ice creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half (see text)",
  "spellResistance": "Yes (creature only)",
  "summary": "Creates an explosive burst that shatters ice over a wide area or damages a single ice creature; thicker ice is cracked and weakened.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "crunchy-snow",
  "name": "Crunchy Snow",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, Frostfell",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One 20-ft.-by-20-ft. square of snow/level",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Makes an area of fallen snow hard and crumbly so it crunches loudly underfoot, imposing a -20 penalty on Move Silently checks.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "death-hail",
  "name": "Death Hail",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold",
    "Death"
  ],
  "levels": {
    "Druid": 6,
    "Winter": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Cylinder (40-ft radius, 20 ft. high)",
  "duration": "1 round/level",
  "savingThrow": "Fortitude half",
  "spellResistance": "No",
  "summary": "Calls an intense storm of death hail into being: creatures in the area must save or take Strength and Constitution damage.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "defile-snow-and-ice",
  "name": "Defile Snow and Ice",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold",
    "Evil"
  ],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "10 ft./level radius spread",
  "duration": "1 min./level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Imbues ice or snow with negative energy, granting undead in the area a +4 profane bonus against turning and cold creatures spell resistance 15 against fire effects.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "detect-fire",
  "name": "Detect Fire",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped emanation",
  "duration": "Concentration, up to 10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Functions as detect evil, except that it detects heat energy from normal fire, fire spells and items, clerics of fire deities, and living beings without the cold subtype.",
  "source": "Frostburn, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "note": "Frostburn prints this spell in abbreviated form (\"functions as\" detect evil (Player's Handbook)); Frostburn prints only the school and level, and the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "dispel-cold",
  "name": "Dispel Cold",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius burst centered on you",
  "duration": "1 round/level or instantaneous; see text",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "Functions as dispel evil, except that you are surrounded by blue-white cold energy and the spell affects cold creatures and spells rather than evil ones.",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "note": "Frostburn prints this spell in abbreviated form (\"functions as\" dispel evil (Player's Handbook)); Frostburn prints only the school and level, and the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "dispel-fire",
  "name": "Dispel Fire",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius burst centered on you",
  "duration": "1 round/level or instantaneous; see text",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "Functions as dispel evil, except that you are surrounded by flames and the spell affects fire creatures and spells rather than evil ones.",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "note": "Frostburn prints this spell in abbreviated form (\"functions as\" dispel evil (Player's Handbook)); Frostburn prints only the school and level, and the remaining stat-block fields follow that spell as the book directs."
},
{
  "id": "ease-of-breath",
  "name": "Ease of Breath",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1,
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Grants the target a +20 inherent bonus on Fortitude saves against altitude sickness and saves against fatigue from altitude or thin air.",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "entomb",
  "name": "Entomb",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous and 1 round/ level; see text",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Traps living creatures in a block of ice, suffocating them; a successful Fortitude save shakes off the ice but still takes 6d6 points of cold damage.",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "evergreen",
  "name": "Evergreen",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Fire"
  ],
  "levels": {
    "Druid": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "10-ft. radius",
  "duration": "1 hour/level and instantaneous; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Imbues a 10-foot-radius area of plant life with magical heat, healing 1d8 points of damage +1 per caster level (maximum +10).",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "fimbulwinter",
  "name": "Fimbulwinter",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 9,
    "Druid": 8,
    "Sorcerer/Wizard": 8,
    "Winter": 9
  },
  "components": "V, S, XP",
  "castingTime": "10 minutes (see text)",
  "range": "1 mile/level",
  "targetOrArea": "1 mile/level radius, centered on you",
  "duration": "4d12 weeks",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Changes the weather to permanent winter, or strengthens existing winter conditions, over a vast area for a long duration.",
  "source": "Frostburn, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "flash-freeze",
  "name": "Flash-Freeze",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth",
    "Cold"
  ],
  "levels": {
    "Druid": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft. square/level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Drains the heat from earth, stone, and water in a 10-foot-square area: earth and stone become everfrost and water freezes solid.",
  "source": "Frostburn, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "flesh-to-ice",
  "name": "Flesh to Ice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Turns the subject and all its carried gear into a mindless, inert ice sculpture; damage to the sculpture deforms the subject if it is ever restored.",
  "source": "Frostburn, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "float",
  "name": "Float",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "One Large or smaller creature or object",
  "duration": "1 min./level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The target gains buoyancy and floats on water, unable to swim below the surface; an underwater target rises at 30 feet per round.",
  "source": "Frostburn, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "fortify-cold-creatures",
  "name": "Fortify Cold Creatures",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creatures with the cold subtype gain a +1 sacred bonus on attack rolls and on saving throws against fire effects.",
  "source": "Frostburn, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "freeze-armor",
  "name": "Freeze Armor",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 4,
    "Druid": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Metal equipment of one creature/level",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "Locks suits of metal armor and equipment in ice and extreme cold, immobilizing and damaging their wearers.",
  "source": "Frostburn, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "freezing-glance",
  "name": "Freezing Glance",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level; see text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Your gaze freezes living creatures in place: each round, one creature that fails its Will save is immobilized, losing shield and Dexterity bonuses to AC.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "frost-weapon",
  "name": "Frost Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "No",
  "summary": "Imbues a weapon with icy cold like the frost special ability, dealing an extra 1d6 points of cold damage on a successful hit.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "frostbite",
  "name": "Frostbite",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/2 levels, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Chills the air and frosts the targets’ skin: those who fail their Fortitude save take 6d6 points of cold damage and 2d6 points of Dexterity damage, freezing solid at 0 Dexterity.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "frostburn",
  "name": "Frostburn",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Functions as lesser frostburn, except that it deals 3d12 points of frostburn damage +1 point per caster level (maximum +20).",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "note": "Abbreviated entry in Frostburn: functions as Frostburn, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "frostburn-lesser",
  "name": "Frostburn, Lesser",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Your touch channels cold energy dealing 1d12 points of frostburn damage +1 point per caster level (maximum +5); on a cold subtype creature it heals instead.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "frostburn-mass",
  "name": "Frostburn, Mass",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Cold energy spreads from the point of origin, dealing 3d12 points of frostburn damage +1 per caster level (maximum +20) to nearby enemies, and curing cold subtype creatures instead.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "frostfell",
  "name": "Frostfell",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 8,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M/DF",
  "castingTime": "1 round",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft. cube/level",
  "duration": "1 hour/level",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "See text",
  "summary": "The designated area becomes frigid and icy, dropping the temperature by 3 bands; water turns to ice and earth and stone become everfrost to a depth of 10 feet per caster level.",
  "source": "Frostburn, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "frostfell-slide",
  "name": "Frostfell Slide",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S, DF, Frostfell",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 hour/level or until expended; see text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You can teleport instantly from one area of slush, snow, or ice to another within the distance allowed by the substance at your point of departure.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Teleportation"
},
{
  "id": "gelid-blood",
  "name": "Gelid Blood",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Cold energy congeals the blood in the target’s extremities: a -4 penalty on attacks, Armor Class, and Strength- and Dexterity-related checks, and 50% spell failure for spells with somatic components.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "glacial-globe-of-invulnerability",
  "name": "Glacial Globe of Invulnerability",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius spherical emanation, centered on you",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A frosty sphere surrounds you and excludes fire spells and spell-like abilities of 3rd level or lower, as globe of invulnerability but only for fire spells; its opaqueness also grants concealment.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "glacial-ward-greater",
  "name": "Glacial Ward, Greater",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M, Coldﬁ re",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius spherical emanation, centered on you",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A 10-foot-radius globe of swirling coldfire grants everyone inside spell resistance 25 against fire spells and effects, including fire-based supernatural abilities.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "glacial-ward",
  "name": "Glacial Ward",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 min./level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A shimmering reddish energy grants the subject spell resistance 18 against fire spells and spell-like abilities, and fire-based supernatural abilities must pass a level check to affect the subject.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "glacier",
  "name": "Glacier",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 8
  },
  "components": "V, S, DF",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels); see text",
  "targetOrArea": "One 20-ft. cube/2 levels",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Brings into existence animated 20-foot cubes of glacial ice, one per two caster levels (maximum ten), placed on horizontal surfaces.",
  "source": "Frostburn, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "glaze-lock",
  "name": "Glaze Lock",
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
  "range": "Touch",
  "targetOrArea": "Lock touched",
  "duration": "10 min./level; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Jams a locking mechanism with ice, raising its Open Lock DC by 10 and its hardness by 5; fire attacks against the lock deal double damage.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "heartfreeze",
  "name": "Heartfreeze",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Encases the target’s heart in ice: the target is exhausted and dies in 1d3+2 rounds; a successful Fortitude save instead means 5d8 points of cold damage.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "heat-leech",
  "name": "Heat Leech",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "Plants a tiny sphere of intense cold in a living creature: each round it must save or take 1d8 points of cold damage.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "hibernal-healing",
  "name": "Hibernal Healing",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 5,
    "Druid": 4
  },
  "components": "V, S, Frostfell",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You absorb slush, snow, and ice around you, channeling the cold energy to cure 10 points of damage per caster level (maximum 150), melting all snow and ice within 10 feet.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "hibernate",
  "name": "Hibernate",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Druid": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "1 week/level (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Puts a creature into suspended animation, slowing its life functions so it can survive weeks without food or water; it also stabilizes a dying creature.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-assassin",
  "name": "Ice Assassin",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M, XP",
  "castingTime": "8 hours",
  "range": "Touch",
  "targetOrArea": "One duplicate creature",
  "duration": "Instantaneous",
  "savingThrow": "None; see text",
  "spellResistance": "No",
  "summary": "An improved simulacrum: creates a living, near-perfect duplicate of an existing creature from ice and shadow, bent on destroying the original.",
  "source": "Frostburn, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Shadow"
},
{
  "id": "ice-castle",
  "name": "Ice Castle",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, F",
  "castingTime": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Fortress of ice and snow",
  "duration": "24 hours",
  "savingThrow": "No",
  "spellResistance": "No",
  "summary": "Creates a huge castle of ice and snow, fully formed with walls, towers, gates, battlements, and magical wards.",
  "source": "Frostburn, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "ice-darts",
  "name": "Ice Darts",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more ice darts",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Fires sharp icicles from your fingertip — one dart plus one per two levels beyond 3rd (maximum five) — each dealing 2d4 points of damage, half of it cold, on a ranged touch attack.",
  "source": "Frostburn, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "ice-rift",
  "name": "Ice Rift",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 6,
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "40-ft.-radius spread (S)",
  "duration": "1 round",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "An intense, localized tremor rips through the ice for 1 round: creatures on the ice cannot move or attack, spellcasters must concentrate or lose spells, and structures collapse.",
  "source": "Frostburn, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-shape",
  "name": "Ice Shape",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 3,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Ice touched, up to 10 cu. ft. + 1 cu. ft./level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Forms an existing piece of ice into any shape that suits your purpose, such as a weapon, trapdoor, or idol, or reshapes an ice door.",
  "source": "Frostburn, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-shield",
  "name": "Ice Shield",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M, Coldﬁ re",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The warded creature gains damage reduction 15/- until the spell has prevented 10 points of damage per caster level (maximum 150), but gains vulnerability to fire.",
  "source": "Frostburn, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-ship",
  "name": "Ice Ship",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Creation"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. +5 ft./2 levels)",
  "targetOrArea": "Creates ship of ice",
  "duration": "1 hour/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Creates a ship of ice in one of two forms chosen at casting — a fast runner for level ice or a sailing vessel.",
  "source": "Frostburn, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-skate",
  "name": "Ice Skate",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 min./level (D)",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Lets a creature skate across any icy surface, increasing its base land speed by 60 feet with no Balance checks required for ordinary movement.",
  "source": "Frostburn, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-slick",
  "name": "Ice Slick",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One 20-ft. square",
  "duration": "1 round/level (D)",
  "savingThrow": "See text",
  "spellResistance": "No",
  "summary": "Covers a solid surface with slippery ice: creatures entering or caught in the area must make Balance checks or slip and fall, and move at half speed.",
  "source": "Frostburn, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "ice-to-flesh",
  "name": "Ice to Flesh",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One frozen creature or a cylinder of ice from 1 ft. to 3 ft. in diameter and up to 10 ft. long",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (object); see text",
  "spellResistance": "Yes",
  "summary": "Restores a frozen creature to its normal state (DC 15 Fortitude save to survive the process), or converts a mass of ice into inert flesh.",
  "source": "Frostburn, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ice-web",
  "name": "Ice Web",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, Coldﬁ re",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Webs of coldﬁ re in a 20-ft.- radius spread",
  "duration": "10 min./level (D)",
  "savingThrow": "Reﬂ ex negates; see text",
  "spellResistance": "No",
  "summary": "Creates a many-layered mass of frigid coldfire strands that entangles creatures caught within, anchored between opposed solid points.",
  "source": "Frostburn, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "iceberg",
  "name": "Iceberg",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "60-foot radius",
  "duration": "Instantaneous",
  "savingThrow": "None or Reﬂ ex half; see text",
  "spellResistance": "Yes",
  "summary": "Creates a single large block of ice that drops from the sky onto a spot you select, shattering and scattering elephant-sized blocks over the surroundings.",
  "source": "Frostburn, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "icicle",
  "name": "Icicle",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One 10-ft. square section of ceiling or doorframe",
  "duration": "Until discharged (D)",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "Creates icicles on an overhang that fall when a creature walks beneath, dealing 4d6 points of piercing damage (no save directly underneath; Reflex for half or none nearby).",
  "source": "Frostburn, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "ivory-flesh",
  "name": "Ivory Flesh",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Turns the subject’s flesh and equipment white, granting a +5 circumstance bonus on Hide checks in snow or ice (and a -5 penalty in nonwhite surroundings).",
  "source": "Frostburn, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "leomunds-tiny-igloo",
  "name": "Leomund's Tiny Igloo",
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
  "range": "5 ft.",
  "targetOrArea": "5-ft.-radius sphere, with 1-in.- thick wall/level centered on your location",
  "duration": "2 hours/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates a small domed snow house sheltering you and several companions, magically warm inside at exactly 50 degrees F.",
  "source": "Frostburn, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "meld-into-ice",
  "name": "Meld into Ice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Druid": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 min./level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You and up to 100 pounds of nonliving gear meld into a single block of ice large enough to hold your body in all three dimensions.",
  "source": "Frostburn, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "mindfrost",
  "name": "Mindfrost",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "Freezes the mental pathways of living creatures, dealing 5d6 points of cold damage and 1d4 points of Intelligence damage.",
  "source": "Frostburn, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "move-snow-and-ice",
  "name": "Move Snow and Ice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold",
    "Ice"
  ],
  "levels": {
    "Druid": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "See text",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Snow or ice in an area up to 750 ft. square and up to 10 ft. deep (S)",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Moves snow and ice over a huge area in wavelike currents; the area affected determines the casting time, up to 750 feet by 750 feet.",
  "source": "Frostburn, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "numbing-sphere",
  "name": "Numbing Sphere",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "5-ft.-diameter sphere",
  "duration": "1 round/level",
  "savingThrow": "Reﬂ ex negates",
  "spellResistance": "Yes",
  "summary": "A rolling sphere of intense cold moves 30 feet per round as you direct, dealing cold damage and numbing creatures it strikes.",
  "source": "Frostburn, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "obscuring-snow",
  "name": "Obscuring Snow",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Air",
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "Cloud spreads in 30-ft.-radius from you, 30 ft. high",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Swirling snow vapor arises around you and follows you, obscuring all sight beyond 5 feet and granting concealment or total concealment by distance.",
  "source": "Frostburn, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "pass-through-ice",
  "name": "Pass through Ice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Druid": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level (D)",
  "savingThrow": "Yes (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The transmuted creature can pass through ice or snow as easily as water, moving at 15 feet and rising or sinking at 5 feet per round.",
  "source": "Frostburn, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "raise-ice-forest",
  "name": "Raise Ice Forest",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 7
  },
  "components": "V, S, DF, Frostfell",
  "castingTime": "1 round",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "20-ft. square of snow/level",
  "duration": "Permanent",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Ice trees with 5-foot-diameter trunks erupt from frostfell ground throughout the area, of any type of tree you designate.",
  "source": "Frostburn, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "shivering-touch",
  "name": "Shivering Touch",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Your melee touch attack sucks the heat from the target’s body, dealing 3d6 points of Dexterity damage; cold subtype creatures are immune.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "shivering-touch-lesser",
  "name": "Shivering Touch, Lesser",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Your melee touch attack delivers a bitter chill causing uncontrollable shivering and 1d6 points of Dexterity damage; cold subtype creatures are immune.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "snow-walk",
  "name": "Snow Walk",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Ranger": 2,
    "Winter": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One creature/level touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Subjects walk on top of snow instead of through it, avoiding movement penalties, leaving no footprints or scent, and gaining 10 feet of land speed.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "snow-wave",
  "name": "Snow Wave",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 6
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "30 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half and Reflex negates; see text",
  "spellResistance": "No",
  "summary": "Creates a wave of snow that knocks creatures in its path prone and deals 4d6 points of crushing damage plus 1d6 points of cold damage.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "snowdrift",
  "name": "Snowdrift",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M/DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Snow touched, up to 10 cu. ft. +1 cu. ft./level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Forms existing snow into any shape that suits your purpose — a concealing snowbank, a statue, a tunnel, or barriers over doors and windows.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "snowsight",
  "name": "Snowsight",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Winter": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "The subject can see to the normal limits of vision even in whiteout conditions and ignores penalties from snow glare and snow blindness.",
  "source": "Frostburn, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "snowsong",
  "name": "Snowsong",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 6
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "30-ft. radius centered on you",
  "duration": "10 min./level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Soft snowfall fills the area while allies hear a bolstering song; enemies you designate are affected as the full text describes.",
  "source": "Frostburn, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Compulsion"
},
{
  "id": "summon-giants",
  "name": "Summon Giants",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Winter": 8
  },
  "components": "V, S, F/DF",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more summoned creatures",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Summons one or more giants that appear where you designate and attack your enemies.",
  "source": "Frostburn, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Summoning"
},
{
  "id": "suppress-flame",
  "name": "Suppress Flame",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, Coldﬁ re",
  "castingTime": "1 round",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "10-ft. cube/level (S)",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Imbues an area with cold and negative energy that suppresses flame: fire-based illumination is halved and open flames are weakened.",
  "source": "Frostburn, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "thaw",
  "name": "Thaw",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth",
    "Fire"
  ],
  "levels": {
    "Druid": 2
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft. cube/level",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Fills all everfrost, slush, snow, and mud in the area with heat: ice and snow become slush, slush everfrost, and everfrost bog.",
  "source": "Frostburn, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "thin-air",
  "name": "Thin Air",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Cleric": 2,
    "Druid": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "30-ft.-radius emanation",
  "duration": "1 min./level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "No",
  "summary": "Thins the oxygen in the area so creatures suffer extreme altitude sickness, taking 1 point of damage to all ability scores on a failed save.",
  "source": "Frostburn, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "wall-of-coldfire",
  "name": "Wall of Coldfire",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 5,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, Coldﬁ re",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Opaque sheet of coldfire up to 20 ft. long/level or a ring of coldfire with a radius of up to 5 ft. per two levels; either form 20 ft. high",
  "duration": "Concentration + 1 round/ level",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "An opaque curtain of coldfire springs into existence; one side sends forth waves of cold dealing damage to creatures within 20 feet.",
  "source": "Frostburn, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "waves-of-cold",
  "name": "Waves of Cold",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, Coldﬁ re",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone-shaped burst",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Frigid energy renders fire subtype creatures in the area shaken, and cold subtype creatures caught in it lose their immunity to cold.",
  "source": "Frostburn, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
{
  "id": "whiteout",
  "name": "Whiteout",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Cloud centered on target spreads 120 ft. and is 20 ft. high",
  "duration": "1 hour/level",
  "savingThrow": "None (see text)",
  "spellResistance": "No",
  "summary": "Swirling snow and strong wind surround you or a designated creature: those inside take penalties to AC and Dexterity-based checks and move at half speed.",
  "source": "Frostburn, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf",
  "subschool": "Creation"
},
{
  "id": "zone-of-glacial-cold",
  "name": "Zone of Glacial Cold",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Cold"
  ],
  "levels": {
    "Druid": 2,
    "Ranger": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft. radius",
  "duration": "1 round/level",
  "savingThrow": "Fortitude half",
  "spellResistance": "No",
  "summary": "Creates a zone of icy cold dealing 1d6 points of cold damage per round to creatures in the area.",
  "source": "Frostburn, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/Frostburn.pdf"
},
];
