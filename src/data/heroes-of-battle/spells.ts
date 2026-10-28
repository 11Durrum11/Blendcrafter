import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Heroes of Battle — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const HEROES_OF_BATTLE_SPELLS: SpellDefinition[] = [
{
  "id": "acid-rain",
  "name": "Acid Rain",
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
  "targetOrArea": "20-ft. radius cylinder, 40 ft. high",
  "duration": "1 full round and 1 round/level; see text",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create a downpour of acid that douses the area for 1 full round, dealing 7d6 points of acid damage to every creature in the area.",
  "source": "Heroes of Battle, p. 125",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Creation"
},
{
  "id": "aerial-alarm",
  "name": "Aerial Alarm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Ranger": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "100-ft.-radius cylinder, 500 ft. high",
  "duration": "2 hours/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As alarm, except the area is a cylinder that extends 500 feet into the air and the alarm only sounds when a flying creature of Medium or larger size enters or touches the warded area.",
  "source": "Heroes of Battle, p. 125",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "animate-legion",
  "name": "Animate Legion",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One or more corpses, no two of which can be more than 30 ft. apart",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You use negative energy to temporarily animate one or more corpses as skeletons or zombies, creating no more Hit Dice of undead than twice your caster level.",
  "source": "Heroes of Battle, p. 125",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "animate-siege-weapon",
  "name": "Animate Siege Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 7
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One siege weapon of up to Gargantuan size",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You imbue a siege weapon, such as a ballista or a battering ram, with mobility and the semblance of life.",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "battlefield-fortification",
  "name": "Battlefield Fortification",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Earth"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "See text",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You shift earth to create a shallow trench or a berm in a straight line up to 5 feet long per two caster levels.",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "battlefield-illumination",
  "name": "Battlefield Illumination",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Cleric": 4,
    "Druid": 4,
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "80-ft.-radius cylinder, 40 ft. high",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "A soft light illuminates the area, improving the illumination by one category (from darkness to shadowy, or from shadowy to bright light).",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "battlemagic-perception",
  "name": "Battlemagic Perception",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 min./level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You gain a perception of the forces of magic and can sense when magic is being manipulated by a spellcaster, gaining a +5 competence bonus on Spellcraft checks to identify a spell as it is being cast.",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "blaze-of-light",
  "name": "Blaze of Light",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Light"
  ],
  "levels": {
    "Druid": 2,
    "Paladin": 1
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "Cone",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "A cone of bright light shines forth from just above your head: all creatures within the cone that fail a Fortitude saving throw are dazzled for 1 minute.",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "boiling-oil",
  "name": "Boiling Oil",
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
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "10-ft.-radius cylinder, 40 ft. high",
  "duration": "1 round and 1 round/three levels; see text",
  "savingThrow": "Reﬂex half",
  "spellResistance": "No",
  "summary": "A torrent of boiling oil rains down in the area you specify, dealing 4d6 points of scalding (fire) damage to creatures in the area, with additional damage to those that fail their initial saving throw.",
  "source": "Heroes of Battle, p. 126",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Creation"
},
{
  "id": "consecrate-battlefield",
  "name": "Consecrate Battlefield",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Good"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, M, DF",
  "castingTime": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "100-ft.-radius emanation",
  "duration": "1 day/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell blesses a large area with positive energy, functioning as the consecrate spell except as noted in the text.",
  "source": "Heroes of Battle, p. 127",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "crisis-of-confidence",
  "name": "Crisis of Confidence",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 3,
    "Hexblade": 2
  },
  "components": "V",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 minute/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You strip away the target's leadership qualities, leaving the creature virtually incapable of commanding troops, as the text describes.",
  "source": "Heroes of Battle, p. 127",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Compulsion"
},
{
  "id": "desecrate-battlefield",
  "name": "Desecrate Battlefield",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 6
  },
  "components": "V, S, M, DF",
  "castingTime": "10 minutes",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "100-ft.-radius emanation",
  "duration": "1 day/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell imbues a large area with negative energy, functioning as the desecrate spell except as noted in the text. It counters and dispels consecrate battlefield.",
  "source": "Heroes of Battle, p. 127",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "drums-of-war",
  "name": "Drums of War",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 4
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "All enemies within range",
  "duration": "Concentration plus 1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Your music is transformed into an ominous cadence of drumbeats that fills enemies with doubt, as the text describes.",
  "source": "Heroes of Battle, p. 127",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Compulsion",
  "note": "The book prints no Target or Area line for this spell; the area shown is from the spell text (all enemies within range)."
},
{
  "id": "early-twilight",
  "name": "Early Twilight",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Darkness"
  ],
  "levels": {
    "Cleric": 4,
    "Hexblade": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, M/DF",
  "castingTime": "1 round",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "80-ft.-radius cylinder, 40 ft. high",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell suppresses light in its area, reducing the illumination by one category (from bright light to shadowy, or from shadowy to darkness).",
  "source": "Heroes of Battle, p. 127",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "hurtling-stone",
  "name": "Hurtling Stone",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Druid": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "60 ft.",
  "targetOrArea": "60-ft. line",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂex negates",
  "spellResistance": "No",
  "summary": "This spell creates a 50-pound stone that speeds away from you in a straight line, dealing 6d6 points of damage to each creature in its path.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Creation"
},
{
  "id": "leomunds-billet",
  "name": "Leomund's Billet",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./level)",
  "targetOrArea": "20-ft.-by-80-ft. structure",
  "duration": "2 hours/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell creates a simple building similar to Leomund's secure shelter that can house up to forty troops.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "subschool": "Creation"
},
{
  "id": "molten-strike",
  "name": "Molten Strike",
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
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "5-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Reﬂex negates",
  "spellResistance": "Yes",
  "summary": "You launch a ball of molten rock that detonates, showering nearby creatures with red-hot stone and flames for 2d6 points of fire damage.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "resounding-voice",
  "name": "Resounding Voice",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 2,
    "Cleric": 2
  },
  "components": "S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 minute/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes",
  "summary": "The subject becomes supernaturally loud, and his voice carries over long distances, clearly audible up to 100 feet away per caster level.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "shrieking-blast",
  "name": "Shrieking Blast",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "40-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "Yes",
  "summary": "A deafening explosion of sonic power: any creature in the area is permanently deafened and takes 8d6 points of sonic damage, reduced on a successful save as the text describes.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "spiritual-cavalry",
  "name": "Spiritual Cavalry",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Two or more magical horsemen of force",
  "duration": "Instantaneous",
  "savingThrow": "None and Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "As spiritual charger, except that you create one horseman for every four caster levels, up to a maximum of five horsemen at 20th level.",
  "source": "Heroes of Battle, p. 128",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "spiritual-charger",
  "name": "Spiritual Charger",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Force"
  ],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Magic horseman of force",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A lance-wielding rider of pure force, bearing the symbol of your deity, springs into being and immediately makes one attack against a target you designate within range.",
  "source": "Heroes of Battle, p. 129",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
{
  "id": "status-greater-hob",
  "name": "Status, Greater",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Healer": 6
  },
  "components": "V, S",
  "castingTime": "1 minute",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Ten living creatures per caster level",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell is identical to status, except as noted in the spell's text.",
  "source": "Heroes of Battle, p. 129",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
  "note": "Heroes of Battle prints a different spell under this name than the Eberron Campaign Setting (see the status-greater record): that version is a Community domain spell, while this one is a cleric/healer spell with a 1-minute casting time and a range of Medium. Both are included."
},
{
  "id": "trip-vine",
  "name": "Trip Vine",
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
  "targetOrArea": "One 10-ft. square/level (S)",
  "duration": "1 hour/level",
  "savingThrow": "Reﬂex negates; see text",
  "spellResistance": "No",
  "summary": "Plants within the area grow together to form a tangle: any creature entering an affected square must succeed on a Reflex save or fall prone.",
  "source": "Heroes of Battle, p. 129",
  "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf"
},
];
