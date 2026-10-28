import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Races of Eberron — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const RACES_OF_EBERRON_SPELLS: SpellDefinition[] = [
{
  "id": "aspect-of-the-werebeast",
  "name": "Aspect of the Werebeast",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [
    "Mindset"
  ],
  "levels": {
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S, shifter",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You tap into your shifter nature to transform yourself into a hybrid of your natural form and a specific animal, resembling the hybrid forms of some lycanthropes.",
  "source": "Races of Eberron, p. 184",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "construct-essence",
  "name": "Construct Essence",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living construct touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As lesser construct essence, with additional effects: the living construct becomes immune to critical hits, sneak attacks, ability damage, ability drain, death effects, and necromancy effects, as the text describes.",
  "source": "Races of Eberron, p. 184",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Construct Essence, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "construct-essence-greater",
  "name": "Construct Essence, Greater",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living construct touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As construct essence, with additional effects: the target loses the living construct subtype for the duration and becomes immune to mind-affecting spells and abilities, as the text describes.",
  "source": "Races of Eberron, p. 184",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Construct Essence, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "construct-essence-lesser",
  "name": "Construct Essence, Lesser",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living construct touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The living construct takes on more of the qualities of a true construct, gaining the moderate fortification armor special quality and other benefits as the text describes.",
  "source": "Races of Eberron, p. 185",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "dominate-living-construct",
  "name": "Dominate Living Construct",
  "ruleset": "eberron",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Artificer": 5
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living construct",
  "duration": "One day/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As the spell dominate person, except that it affects a living construct.",
  "source": "Races of Eberron, p. 185",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "subschool": "Compulsion"
},
{
  "id": "doppelganger-transformation",
  "name": "Doppelganger Transformation",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [
    "Mindset"
  ],
  "levels": {
    "Transformation": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You take on some of the qualities of a doppelganger, gaining a +4 enhancement bonus to Wisdom and other improved mental and physical abilities, as the text describes.",
  "source": "Races of Eberron, p. 185",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "enhanced-shifting",
  "name": "Enhanced Shifting",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 3
  },
  "components": "V, shifter",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You use divine energy to enhance the power of your shifting ability; this spell functions only if cast while you are shifting, and lasts until your shifting ends.",
  "source": "Races of Eberron, p. 185",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "extend-shifting",
  "name": "Extend Shifting",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, shifter",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Cast while shifting, this spell magically extends the duration of that use of your shifting ability by 4 rounds; when it ends, you become fatigued for 10 minutes.",
  "source": "Races of Eberron, p. 186",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "force-shapechange",
  "name": "Force Shapechange",
  "ruleset": "eberron",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Truth": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "One creature/level",
  "duration": "1 round/level",
  "savingThrow": "Will partial",
  "spellResistance": "Yes",
  "summary": "Any shapechanger targeted by the spell takes 3d10 points of damage from wracking pain and reverts to its true form, as the text describes.",
  "source": "Races of Eberron, p. 186",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "furnace-within",
  "name": "Furnace Within",
  "ruleset": "eberron",
  "school": "Evocation",
  "descriptors": [
    "Fire",
    "Mindset"
  ],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, DF, dwarf",
  "castingTime": "1 standard action",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius burst, centered on you",
  "duration": "Instantaneous",
  "savingThrow": "Refl ex half",
  "spellResistance": "Yes",
  "summary": "You erupt with the fiery heart of the mountains: a burst centered on you deals fire damage to those around you, as the text describes.",
  "source": "Races of Eberron, p. 186",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "golem-immunity",
  "name": "Golem Immunity",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "1 minute/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The construct touched gains the magic immunity special quality of a particular golem, chosen at the time of casting.",
  "source": "Races of Eberron, p. 187",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "humanoid-essence",
  "name": "Humanoid Essence",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4,
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As lesser humanoid essence, with additional effects: the construct becomes subject to critical hits, sneak attacks, nonlethal damage, stunning, ability damage, ability drain, and death effects, as the text describes.",
  "source": "Races of Eberron, p. 187",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Humanoid Essence, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "humanoid-essence-greater",
  "name": "Humanoid Essence, Greater",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6,
    "Cleric": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As lesser humanoid essence, with additional effects: the target construct's type changes to humanoid, and it loses the living construct subtype if it has it.",
  "source": "Races of Eberron, p. 187",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Humanoid Essence, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "humanoid-essence-lesser",
  "name": "Humanoid Essence, Lesser",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 3,
    "Cleric": 3
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Construct touched",
  "duration": "1 round/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The construct takes on more of the qualities of a living creature, gaining the full benefit of spells from the healing subschool, as the text describes.",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "illusion-purge",
  "name": "Illusion Purge",
  "ruleset": "eberron",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8,
    "Truth": 7
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "5 ft./level",
  "targetOrArea": "5-ft.-radius/level emanation, centered on you",
  "duration": "1 minute/level (D)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You surround yourself with a powerful sphere of magical clarity that negates all illusions of 7th level or lower; anything concealed or altered by illusion appears in its natural state while in the area.",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "inflict-light-damage-mass",
  "name": "Inflict Light Damage, Mass",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One construct/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Will half",
  "spellResistance": "Yes",
  "summary": "Transmuting energy spreads out around the targets, dealing 1d8 points of damage +1 point per caster level (maximum +25) to constructs.",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "This book prints only the mass version's differing fields; components, casting time, and duration are as the base inflict light damage spell (Eberron Campaign Setting)."
},
{
  "id": "inflict-moderate-damage-mass",
  "name": "Inflict Moderate Damage, Mass",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One construct/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Will half",
  "spellResistance": "Yes",
  "summary": "This spell functions like mass inflict light damage, except that it deals 2d8 points of damage +1 point per caster level (maximum +30).",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Inflict Light Damage, Mass except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "insidious-insight",
  "name": "Insidious Insight",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 day/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You gain insight into a creature's thoughts and motivations to use as leverage in negotiations, as the text describes.",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "insidious-suggestion",
  "name": "Insidious Suggestion",
  "ruleset": "eberron",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "See text",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You plant a subtle suggestion in the target, as the suggestion spell, with the modifications given in the text.",
  "source": "Races of Eberron, p. 188",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "subschool": "Compulsion"
},
{
  "id": "involuntary-shapeshifting",
  "name": "Involuntary Shapeshifting",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 5,
    "Transformation": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/2 levels (D)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "For the duration, you force the target creature to change shape on its turn every round if it has an extraordinary or supernatural ability that allows it to do so.",
  "source": "Races of Eberron, p. 189",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "misrepresent-alignment",
  "name": "Misrepresent Alignment",
  "ruleset": "eberron",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Cleric": 3,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature or object",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "This spell conceals the true alignment of an object or creature from all forms of divination, rendering a misleading result determined by you.",
  "source": "Races of Eberron, p. 189",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "subschool": "Glamer"
},
{
  "id": "natural-weapon-augmentation",
  "name": "Natural Weapon Augmentation",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 4
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As lesser natural weapon augmentation, but you can choose any special ability whose market price is equivalent to a bonus of up to +3 or up to 70,000 gp, such as speed.",
  "source": "Races of Eberron, p. 189",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Natural Weapon Augmentation, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "natural-weapon-augmentation-greater",
  "name": "Natural Weapon Augmentation, Greater",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As lesser natural weapon augmentation, but you can choose any special ability whose market price is equivalent to a bonus of up to +5 or up to 200,000 gp, such as vorpal.",
  "source": "Races of Eberron, p. 189",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Natural Weapon Augmentation, Lesser except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "natural-weapon-augmentation-lesser",
  "name": "Natural Weapon Augmentation, Lesser",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 2
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "As personal natural weapon augmentation, but the spell can be cast on one natural weapon of any creature.",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Natural Weapon Augmentation, Personal except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "natural-weapon-augmentation-personal",
  "name": "Natural Weapon Augmentation, Personal",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 1
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "One of your natural weapons temporarily gains a special ability commonly found on magic weapons, whose market price is equivalent to a +1 bonus or up to 10,000 gp.",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "reachwalkers-wariness",
  "name": "Reachwalker's Wariness",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 2,
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "30 ft.",
  "targetOrArea": "30-ft.-radius spherical emanation, centered on you",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "While this spell is in effect, you are instantly aware of the exact position of any aberration within the spell’s area, as if you had blindsense with respect to aberrations only.",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "repair-light-damage-mass",
  "name": "Repair Light Damage, Mass",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 5
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One construct/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Will half",
  "spellResistance": "Yes",
  "summary": "Transmuting energy spreads out around the targets, repairing 1d8 points of damage +1 point per caster level (maximum +25) to constructs.",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "This book prints only the mass version's differing fields; components, casting time, and duration are as the base repair light damage spell (Spell Compendium)."
},
{
  "id": "repair-moderate-damage-mass",
  "name": "Repair Moderate Damage, Mass",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Artificer": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One construct/level, no two of which can be more than 30 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Will half",
  "spellResistance": "Yes",
  "summary": "This spell functions like mass repair light damage, except that it repairs 2d8 points of damage +1 point per caster level (maximum +30).",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "Abbreviated entry in Races of Eberron: functions as Repair Light Damage, Mass except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "ride-of-the-valenar",
  "name": "Ride of the Valenar",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "While this spell is in effect, the bond between you and your mount is strengthened, as the text describes.",
  "source": "Races of Eberron, p. 190",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "scorpion-tail",
  "name": "Scorpion Tail",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, drow",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Willing creature touched",
  "duration": "1 round/level",
  "savingThrow": "Fortitude partial; see text",
  "spellResistance": "No",
  "summary": "The affected creature sprouts a black, scorpionlike tail; as a free action each round, the target may attack any adjacent foe with the tail’s stinger.",
  "source": "Races of Eberron, p. 191",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "shifter-prowess",
  "name": "Shifter Prowess",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 1,
    "Ranger": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, shifter",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "See text 190",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You infuse your senses with the latent power of your lycanthrope heritage, increasing your racial bonuses on Balance, Climb, and Jump checks by +8; this spell functions only if cast while shifting.",
  "source": "Races of Eberron, p. 191",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "touch-of-jorasco",
  "name": "Touch of Jorasco",
  "ruleset": "eberron",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, F, halfling",
  "castingTime": "1 standard action",
  "range": "Personal and touch; see text",
  "targetOrArea": "You and creature touched; see text",
  "duration": "See text",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You channel the healing mastery of House Jorasco, as the text describes.",
  "source": "Races of Eberron, p. 191",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "subschool": "Healing"
},
{
  "id": "true-seeing-mass",
  "name": "True Seeing, Mass",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Truth": 9
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature/level, no two of which can be more than 30 ft. apart.",
  "duration": "1 min./level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "This spell functions like the true seeing spell, except that it affects multiple creatures.",
  "source": "Races of Eberron, p. 191",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "note": "This book prints only the level, range, and target lines and states that the spell functions like true seeing (Player's Handbook); the remaining fields are filled from that spell."
},
{
  "id": "unfettered-heroism",
  "name": "Unfettered Heroism",
  "ruleset": "eberron",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V",
  "castingTime": "1 immediate action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Each round this spell is in effect, you gain a free temporary action point, as the text describes.",
  "source": "Races of Eberron, p. 191",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
{
  "id": "unseen-crafter",
  "name": "Unseen Crafter",
  "ruleset": "eberron",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Artificer": 2,
    "Bard": 2,
    "Cleric": 2,
    "Magewright": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One invisible, mindless, shapeless servant",
  "duration": "1 day/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell functions as unseen servant, except that the unseen crafter can be assigned any one task that can be accomplished by the use of the Craft skill.",
  "source": "Races of Eberron, p. 192",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf",
  "subschool": "Creation"
},
{
  "id": "wild-instincts",
  "name": "Wild Instincts",
  "ruleset": "eberron",
  "school": "Divination",
  "descriptors": [
    "Mindset"
  ],
  "levels": {
    "Druid": 2,
    "Ranger": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You sharpen your instincts and awareness: while the spell is in effect, you retain your Dexterity bonus to AC even if flat-footed, as the text describes.",
  "source": "Races of Eberron, p. 192",
  "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf"
},
];
