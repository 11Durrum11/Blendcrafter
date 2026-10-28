import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Book of Vile Darkness — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const BOOK_OF_VILE_DARKNESS_SPELLS: SpellDefinition[] = [
{
  "id": "aberrate",
  "name": "Aberrate",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, Fiend",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "10 minutes/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Transforms one creature into an aberration: its type changes to aberration and its flesh toughens and twists, granting a +1 natural armor bonus per four caster levels (maximum +5).",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "absorb-mind",
  "name": "Absorb Mind",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "V, S, F, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster eats part of a corpse's brain and gains some of the dead creature's memories, with a 25% chance of recalling any important fact the creature knew.",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "absorb-strength",
  "name": "Absorb Strength",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 4
  },
  "components": "V, S, F, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "By eating a portion of another creature's flesh, the caster gains one-quarter of that creature's Strength and Constitution scores as enhancement bonuses to her own.",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "abyssal-might",
  "name": "Abyssal Might",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Demonologist": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M, Demon",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster draws evil energy from the Abyss into himself, gaining a +2 enhancement bonus to Strength, Constitution, and Dexterity, and improving his existing spell resistance by 2.",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Summoning"
},
{
  "id": "addiction",
  "name": "Addiction",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Assassin": 1,
    "Bard": 2,
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, Drug",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Forces the subject to become addicted to a drug; the strongest addiction rating the caster can impose rises with caster level.",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "alert-bebilith",
  "name": "Alert Bebilith",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One bebilith",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls a bebilith to attack a demon; a percentile check determines whether the bebilith fights the demon, seizes another nearby creature, flees, or turns on the caster.",
  "source": "Book of Vile Darkness, p. 84",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Calling"
},
{
  "id": "angry-ache",
  "name": "Angry Ache",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Assassin": 1,
    "Cleric": 1,
    "Pain": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Strains the subject's muscles so that every attack hurts: all her attack rolls take a -2 circumstance penalty per four caster levels (maximum -10).",
  "source": "Book of Vile Darkness, p. 85",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "apocalypse-from-the-sky",
  "name": "Apocalypse from the Sky",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 9
  },
  "components": "V, S, M, Corrupt",
  "castingTime": "1 day",
  "range": "Personal",
  "targetOrArea": "10-mile radius/level, centered on caster",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Rains destruction over a huge area: all creatures and objects take 10d6 points of fire, acid, or sonic damage (caster's choice), and the caster is caught in it too.",
  "source": "Book of Vile Darkness, p. 85",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "befoul",
  "name": "Befoul",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 8,
    "Corruption": 8
  },
  "components": "V, S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Water in a volume of 100 ft./level by 100 ft./level by 10 ft./level (S)",
  "duration": "Permanent (see text)",
  "savingThrow": "None (see text)",
  "spellResistance": "No",
  "summary": "Makes a body of water foul and mildly poisonous: creatures of 1 HD or less in it die, and anyone drinking or immersed in it risks Constitution damage.",
  "source": "Book of Vile Darkness, p. 85",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "bestow-greater-curse",
  "name": "Bestow Greater Curse",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 6,
    "Cleric": 7,
    "Demonologist": 3,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Permanent",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Places a greater curse on the creature touched: an ability score reduced to 1 (or two scores at -6), a -8 penalty on attacks, saves, and checks, or a 25% chance each turn of taking no action.",
  "source": "Book of Vile Darkness, p. 85",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "bestow-wound",
  "name": "Bestow Wound",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The wounded caster touches a living creature and transfers her wounds to it, healing herself by the amount the creature takes (up to 1 point per caster level or what she needs to reach full hit points).",
  "source": "Book of Vile Darkness, p. 85",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "black-bag",
  "name": "Black Bag",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "A black leather bag",
  "duration": "24 hours",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates a bag full of knives, scalpels, and other small torture implements; the tools disintegrate shortly after leaving the caster's possession.",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "bodak-birth",
  "name": "Bodak Birth",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 8
  },
  "components": "V, S, F, Drug",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Caster or one creature touched",
  "duration": "Instantaneous",
  "savingThrow": "None (see text)",
  "spellResistance": "No",
  "summary": "Transforms one willing subject into a bodak, replacing all of the subject's characteristics with the bodak's, using a blood-bathed figurine of the subject.",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "boneblade",
  "name": "Boneblade",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 2,
    "Cleric": 3
  },
  "components": "V, S, F, Undead",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One bone that becomes a blade",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Changes a bone at least 6 inches long into a magic sword with an enhancement bonus that grows with caster level, dealing extra damage to living and good-aligned targets.",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "boneblast",
  "name": "Boneblast",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 1,
    "Cleric": 2
  },
  "components": "V, S, M, Undead",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One creature that has a skeleton",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half or",
  "spellResistance": "Yes",
  "summary": "Causes a bone inside a touched creature to break or crack, dealing 1d3 points of Constitution damage (Fortitude save reduces or negates).",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "call-dretch-horde",
  "name": "Call Dretch Horde",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Demonologist": 3,
    "Mortal Hunter": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, Soul",
  "castingTime": "1 minute",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "2d4 dretches",
  "duration": "One year",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls 2d4 dretches from the Abyss, offering them a prepared soul; in exchange they serve the caster for one year at simple tasks.",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Calling"
},
{
  "id": "call-lemure-horde",
  "name": "Call Lemure Horde",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Mortal Hunter": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, Soul",
  "castingTime": "1 minute",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "3d4 lemures",
  "duration": "One year",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls 3d4 lemures from the Nine Hells, offering them a prepared soul; in exchange they serve the caster for one year at very simple tasks.",
  "source": "Book of Vile Darkness, p. 86",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Calling"
},
{
  "id": "call-nightmare",
  "name": "Call Nightmare",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Demonologist": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, Soul",
  "castingTime": "1 minute",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "One nightmare",
  "duration": "One week",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Calls a nightmare from the Lower Planes, offering it a prepared soul; it serves the caster for one week as a mount or guard but returns home if it strays more than 150 feet from her.",
  "source": "Book of Vile Darkness, p. 87",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Calling"
},
{
  "id": "charnel-fire",
  "name": "Charnel Fire",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One corpse",
  "duration": "Instantaneous",
  "savingThrow": "None (Will negates for undead)",
  "spellResistance": "No (Yes for undead)",
  "summary": "Completely consumes one dead body with sinister flame so nothing remains; the creature can then be restored only by true resurrection. It can also be turned on corporeal undead.",
  "source": "Book of Vile Darkness, p. 87",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "circle-of-nausea",
  "name": "Circle of Nausea",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 3,
    "Druid": 2
  },
  "components": "V, S, F",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "An emanation extending in a 20-ft.-radius around a 2-ft.-radius circle on the ground with the caster in the center",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Evil energy fills the area with pain: creatures in it must save each round or take a -2 penalty on attack rolls, saving throws, and skill checks.",
  "source": "Book of Vile Darkness, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "claws-of-the-bebilith",
  "name": "Claws of the Bebilith",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 5
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster gains claws sized by her form that can catch and tear an opponent's armor or shield apart on a successful grapple check.",
  "source": "Book of Vile Darkness, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "claws-of-the-savage",
  "name": "Claws of the Savage",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bestial": 4,
    "Blackguard": 4,
    "Cleric": 4,
    "Druid": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One creature",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Grants one creature two long claws in place of its hands, dealing damage by the creature's size, which it can attack with as if proficient.",
  "source": "Book of Vile Darkness, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "cloud-of-the-achaierai",
  "name": "Cloud of the Achaierai",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 6,
    "Demonologist": 4
  },
  "components": "V, S, Disease",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "10-ft.-radius spread",
  "duration": "10 minutes/level -",
  "savingThrow": "Fortitude partial 1",
  "spellResistance": "Yes",
  "summary": "Conjures a choking cloud of inky blackness: creatures inside other than the caster take damage each round and must save or be confused for the duration.",
  "source": "Book of Vile Darkness, p. 88",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "consume-likeness",
  "name": "Consume Likeness",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 6
  },
  "components": "V, S, F, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "Permanent",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster eats the flesh of a freshly dead corporeal humanoid and can afterward assume that creature’s appearance and form, including clothing and equipment, at will.",
  "source": "Book of Vile Darkness, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "cruel-disappointment",
  "name": "Cruel Disappointment",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Will disbelief (if interacted with) and Will negates (see text)",
  "spellResistance": "Yes",
  "summary": "The subject’s next action requiring a die roll automatically fails, but a phantasm makes him believe it succeeded for 1 round before the truth hits.",
  "source": "Book of Vile Darkness, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Phantasm"
},
{
  "id": "crushing-fist-of-spite",
  "name": "Crushing Fist of Spite",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil",
    "Force"
  ],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M, Disease",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "5-ft.-radius cylinder, 30 ft. high",
  "duration": "1 round/level",
  "savingThrow": "Reflex half or Reflex negates (see text)",
  "spellResistance": "Yes",
  "summary": "A fist of darkness smashes down from 30 feet up, dealing 1d6 damage per caster level (maximum 20d6, Reflex half) to everything in the area; the caster can redirect it each round.",
  "source": "Book of Vile Darkness, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "curse-of-the-putrid-husk",
  "name": "Curse of the Putrid Husk",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round + 1d10 minutes",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "An illusion makes the subject believe his flesh is rotting and his organs spilling out: he is dazed for 1 round, then falls unconscious for 1d10 minutes.",
  "source": "Book of Vile Darkness, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Phantasm"
},
{
  "id": "damning-darkness",
  "name": "Damning Darkness",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Darkness",
    "Evil"
  ],
  "levels": {
    "Cleric": 4,
    "Darkness": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Object touched",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Works as darkness, but the darkness also deals unholy damage each round: 2d6 to good creatures and 1d6 to creatures neither good nor evil.",
  "source": "Book of Vile Darkness, p. 89",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "dance-of-ruin",
  "name": "Dance of Ruin",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bard": 2,
    "Cleric": 2,
    "Demonologist": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Spread centered on caster",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "After dancing and chanting, the caster sends a wave of crackling energy out to the range limit, dealing 2d20 points of damage to all non-demon creatures in the area.",
  "source": "Book of Vile Darkness, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "dancing-chains",
  "name": "Dancing Chains",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Demonologist": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One chain per level within range",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Animates one chain per caster level under the caster’s control; chains can lengthen, sprout barbs, and attack or grapple as spiked chains.",
  "source": "Book of Vile Darkness, p. 90",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "darklight",
  "name": "Darklight",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Darkness"
  ],
  "levels": {
    "Assassin": 2,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One creature or object touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Makes one creature or object radiate darklight in a 5-foot sphere: creatures that can see in light can see within the sphere even in total darkness, and only what is inside it.",
  "source": "Book of Vile Darkness, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "death-by-thorns",
  "name": "Death by Thorns",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil",
    "Death"
  ],
  "levels": {
    "Corrupt": 7
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Up to three creatures, no two of which can be more than 15 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Thorns sprout inside the subject creatures, incapacitating them in agony for 1d4 rounds before they die; wish or miracle can save a subject in time.",
  "source": "Book of Vile Darkness, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "death-grimace",
  "name": "Death Grimace",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 1,
    "Blackguard": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One corpse",
  "duration": "Permanent",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Marks a corpse with a magical signature identifying the caster (truthfully or falsely) as the murderer, as a calling card or proof of a paid killing.",
  "source": "Book of Vile Darkness, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "demon-wings",
  "name": "Demon Wings",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 3,
    "Demonic": 3,
    "Demonologist": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/ level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Massive batlike wings grow from the caster’s back, letting him fly at his land speed with average maneuverability.",
  "source": "Book of Vile Darkness, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "demoncall",
  "name": "Demoncall",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 2,
    "Demonic": 2,
    "Demonologist": 2
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Taps the forbidden knowledge of demons for a +10 profane bonus on one immediate Knowledge (arcana), Knowledge (the planes), or Knowledge (religion) check.",
  "source": "Book of Vile Darkness, p. 91",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "note": "Fiendish Codex I (2006) reprints this spell with changes (see the demoncall-fc1 record): no material component and a casting time of 1 swift action instead of 1 action. This record is the original Book of Vile Darkness printing."
},
{
  "id": "demonflesh",
  "name": "Demonflesh",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 1,
    "Demonic": 1,
    "Demonologist": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster grows thick, leathery demon flesh, gaining a +1 natural armor bonus per five caster levels (maximum +4); no effect on evil outsiders.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "despoil",
  "name": "Despoil",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 9
  },
  "components": "V, S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "100-ft./level radius",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial (plants) or Fortitude negates (other living creatures)",
  "spellResistance": "Yes",
  "summary": "Blights and corrupts a vast area of land forever: weak plants die outright, stronger plants and other living creatures must save or die or take damage.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "devils-ego",
  "name": "Devil's Ego",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Grants a 1d4+1 enhancement bonus to Charisma, and the caster is treated as an outsider for what spells and effects can affect her.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "note": "Fiendish Codex II (2006) reprints this spell with changes (see the devils-ego-fc2 record): a +4 profane bonus to Charisma instead of a 1d4+1 enhancement bonus, and a casting time of 1 swift action. This record is the original Book of Vile Darkness printing."
},
{
  "id": "devils-eye",
  "name": "Devil's Eye",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 2,
    "Cleric": 3,
    "Diabolic": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Gives the caster a devil’s visual acuity: he can see in darkness and magical darkness out to 30 feet.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "devils-tail",
  "name": "Devil's Tail",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster grows a 3-foot spiked tail he can attack with in melee alongside his normal attacks at a -2 penalty.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "devils-tongue",
  "name": "Devil's Tongue",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 2
  },
  "components": "S, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster’s tongue lengthens and strengthens so she can make grapple or disarm attacks with a 15-foot reach without provoking attacks of opportunity.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "distort-summons",
  "name": "Distort Summons",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Demonologist": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "50-ft.-radius spread",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Creates an area in which summoning magic brings only evil creatures: anything summoned arrives as an evil version or equivalent and does not obey a non-evil summoner.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "distort-weapon",
  "name": "Distort Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Makes a weapon strike true against good foes: critical threats against good creatures are automatically confirmed, and the weapon harms good creatures with damage reduction as if +1.",
  "source": "Book of Vile Darkness, p. 92",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "dread-word",
  "name": "Dread Word",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Demonologist": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature of good alignment",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The caster speaks a word of Dark Speech so foul it drains 1d3 points of Charisma from one subject who hears it; the spell protects the caster from the word.",
  "source": "Book of Vile Darkness, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "drug-resistance",
  "name": "Drug Resistance",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "1 hour/level",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The creature touched cannot become addicted to drugs for the duration, though it still feels a drug’s effects; it does not cure an addiction already incurred.",
  "source": "Book of Vile Darkness, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "ectoplasmic-enhancement",
  "name": "Ectoplasmic Enhancement",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One incorporeal undead/level",
  "duration": "24 hours",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Undead affected gain a deflection bonus to AC, temporary hit points, an enhancement bonus on attack rolls, and a bonus to turn resistance, all scaling with caster level.",
  "source": "Book of Vile Darkness, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "eternity-of-torture",
  "name": "Eternity of Torture",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Pain": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Permanent",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "Twists the subject’s body into helpless, unending agony: the subject needs no food, drink, or air and does not age, but takes 1 point of drain to each ability score every day.",
  "source": "Book of Vile Darkness, p. 93",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "evil-eye",
  "name": "Evil Eye",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Mortal Hunter": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous (see text)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The caster’s malevolent gaze curses the subject with a -4 luck penalty on all attack rolls, saves, and checks until sunrise, dismissal, remove curse, or the subject damages the caster.",
  "source": "Book of Vile Darkness, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "evil-weather",
  "name": "Evil Weather",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 8
  },
  "components": "V, S, M, XP, Corrupt (see below)",
  "castingTime": "1 hour",
  "range": "Personal",
  "targetOrArea": "1-mile/level radius, centered on caster",
  "duration": "3d6 minutes",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Conjures a form of evil weather (such as violet rain) as described in this book’s weather rules, at this spell’s area and duration.",
  "source": "Book of Vile Darkness, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "extract-drug",
  "name": "Extract Drug",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Cleric": 1,
    "Druid": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, F",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One dose of a drug",
  "duration": "Permanent",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Creates a magical version of a drug from a substance used as the focus; the resulting fumes must be inhaled within 1 round to gain the drug’s effects.",
  "source": "Book of Vile Darkness, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "eye-of-the-beholder",
  "name": "Eye of the Beholder",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "One of the caster’s eyes grows out on a stalk like a beholder’s, granting a Spot bonus and one randomly determined beholder eye power usable during the spell.",
  "source": "Book of Vile Darkness, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "eyes-of-the-zombie",
  "name": "Eyes of the Zombie",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, F",
  "castingTime": "30 minutes",
  "range": "Personal",
  "targetOrArea": "Caster and one zombie",
  "duration": "1 hour/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "The caster swaps his eyes for those of a zombie he animated, seeing through its sockets and controlling its actions directly.",
  "source": "Book of Vile Darkness, p. 94",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "false-sending",
  "name": "False Sending",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M/DF",
  "castingTime": "10 minutes",
  "range": "See text",
  "targetOrArea": "One creature",
  "duration": "1 round (see text)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Works as sending, but the subject is convinced the message came from someone else the caster names and is familiar with.",
  "source": "Book of Vile Darkness, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Glamer"
},
{
  "id": "fiendish-clarity",
  "name": "Fiendish Clarity",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 7,
    "Demonic": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/ level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster gains a powerful fiend’s senses: darkvision 60 feet, sight through magical darkness, see invisibility, and detect good at will.",
  "source": "Book of Vile Darkness, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "fiendish-quickening",
  "name": "Fiendish Quickening",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, Fiend",
  "castingTime": "1 full round",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For the duration, the caster’s teleport or teleport without error spell-like ability is quickened and usable once per round; teleport spells are unaffected.",
  "source": "Book of Vile Darkness, p. 95",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "flesh-armor",
  "name": "Flesh Armor",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 4
  },
  "components": "V, S, M, F",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Wearing the flayed skin of a creature of his size, the caster gains damage reduction 10/+1 until the spell has absorbed 5 points of damage per caster level (maximum 50).",
  "source": "Book of Vile Darkness, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "flesh-ripper",
  "name": "Flesh Ripper",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 3,
    "Mortal Hunter": 3
  },
  "components": "V, S, Undead, Fiend",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A black claw of evil power flies at the target: on a successful ranged touch attack it deals 1d8 damage per caster level (maximum 10d8), and critical hits leave a bleeding wound.",
  "source": "Book of Vile Darkness, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "forbidden-speech",
  "name": "Forbidden Speech",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Corrupt": 5
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "1 living creature",
  "duration": "Permanent",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Makes it impossible for one creature to speak about a single narrow topic chosen by the caster.",
  "source": "Book of Vile Darkness, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "glimpse-of-truth",
  "name": "Glimpse of Truth",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, Drug",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 hour",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster poses one yes-or-no question to nameless malevolent entities beyond reality; the answer is correct 75% of the time.",
  "source": "Book of Vile Darkness, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "grazzts-long-grasp",
  "name": "Graz'zt's Long Grasp",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "One of the caster’s hands detaches and flies under her mental control at 20 feet with perfect maneuverability; detaching deals her damage, healed when the hand returns.",
  "source": "Book of Vile Darkness, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "grim-revenge",
  "name": "Grim Revenge",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, Undead",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living humanoid",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The subject’s hand tears itself off (6d6 damage) and animates, attacking its former owner with the statistics of a Tiny wight.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "gutwrench",
  "name": "Gutwrench",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil",
    "Death"
  ],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, Undead",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "The target’s innards burst forth, killing it and flying to the caster, who gains temporary hit points and a Strength bonus; a successful save means 10d6 damage instead.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "heartache",
  "name": "Heartache",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Cleric": 1,
    "Mortal Hunter": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Fills the subject with heart-wrenching sorrow, rendering it helpless and unable to act for 1 round.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "heartclutch",
  "name": "Heartclutch",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 5
  },
  "components": "V, S, Disease",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "The heart of one creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "The subject’s still-beating heart appears in the caster’s hand: the subject dies in 1d3 rounds unless saved by powerful healing magic; a successful save means heavy damage instead.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "hellfire",
  "name": "Hellfire",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "5-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Creates a small explosion of brimstone and diabolic fire dealing 3d6 damage that is not reduced by fire-protection magic.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "note": "Fiendish Codex II (2006) reprints this spell with changes (see the hellfire-fc2 record): a 10-ft.-radius spread instead of 5 ft., damage of 1d8 per two caster levels (maximum 5d8) instead of 3d6, and Spell Resistance: No instead of Yes. This record is the original Book of Vile Darkness printing."
},
{
  "id": "hellfire-storm",
  "name": "Hellfire Storm",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Diabolic": 7
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As hellfire, except with a larger area and longer range, and it deals 5d6 points of diabolic fire damage.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "note": "Fiendish Codex II (2006) reprints this spell with changes (see the hellfire-storm-fc2 record): it deals 1d8 points of damage per caster level (maximum 10d8) instead of 5d6. This record is the original Book of Vile Darkness printing. Book of Vile Darkness prints this spell in abbreviated form (\"As hellfire, except...\"); level, range, and area are as printed there, and the remaining stat-block fields follow hellfire as the book directs."
},
{
  "id": "hells-power",
  "name": "Hell's Power",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 3,
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M, Devil",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster bathes himself in the power of the Nine Hells, gaining a +2 deflection bonus to Armor Class and improving his existing damage reduction by one step.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "identify-transgressor",
  "name": "Identify Transgressor",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, Drug, Location",
  "castingTime": "10 minutes",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Divines the answer to a single “who?” question, giving the name of one person (such as who stole an item), with a base chance of a correct answer.",
  "source": "Book of Vile Darkness, p. 97",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "impotent-possessor",
  "name": "Impotent Possessor",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Demonologist": 4,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One possessing creature",
  "duration": "Permanent (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Renders a possessing or body-inhabiting creature powerless inside its current host: the only action it can take is to leave the body.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "imprison-possessor",
  "name": "Imprison Possessor",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Demonologist": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One possessing creature and its host",
  "duration": "Permanent (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Traps a possessing or body-inhabiting creature inside the creature it currently inhabits, preventing it from leaving by any means.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "imprison-soul",
  "name": "Imprison Soul",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 7
  },
  "components": "V, S, M, F",
  "castingTime": "1 action (see text)",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "No",
  "summary": "Places the subject’s soul in a small receptacle, leaving the body lifeless; the trapped soul takes Constitution damage each day until dead or freed.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "liquid-pain",
  "name": "Liquid Pain",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Pain": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, F",
  "castingTime": "1 day",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Permanent",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Over the course of a day, the caster captures the agony of a subject already in great pain as liquid pain, a substance usable in item creation, spell enhancement, or as a drug.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "lahms-finger-darts",
  "name": "Lahm's Finger Darts",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 2
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Up to five creatures, no two of which can be more than 15 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "The caster’s fingers become unerring projectiles that strike their targets and deal 1d4 points of Dexterity damage each.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "loves-pain",
  "name": "Love's Pain",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "A lance of energy strikes one foe harmlessly, but the foe’s closest friend or dearest loved one takes 1d6 damage per two caster levels (maximum 10d6), at any distance.",
  "source": "Book of Vile Darkness, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "masochism",
  "name": "Masochism",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 3,
    "Blackguard": 3,
    "Cleric": 3,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For every 10 points of damage the caster takes in a round, he gains a +1 luck bonus on attack rolls, saving throws, and skill checks in the following round.",
  "source": "Book of Vile Darkness, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "mindrape",
  "name": "Mindrape",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The caster enters a creature’s mind, learning everything it knows, and may erase or add memories and alter emotions, opinions, and even alignment, leaving it insane or seemingly untouched.",
  "source": "Book of Vile Darkness, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "mirror-sending",
  "name": "Mirror Sending",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Mortal Hunter": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, F",
  "castingTime": "See text",
  "range": "See text",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "Sends the caster’s image through a mirror to another mirror the target looks into, letting the caster see and speak with the subject.",
  "source": "Book of Vile Darkness, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "morality-undone",
  "name": "Morality Undone",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 5,
    "Cleric": 5,
    "Corruption": 4,
    "Mortal Hunter": 4
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One nonevil creature",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Turns one creature evil, leaving the law-chaos component of its alignment unchanged; it keeps its old allegiances only where they do not conflict with its new outlook.",
  "source": "Book of Vile Darkness, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "nether-trail",
  "name": "Nether Trail",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "A trail 20 ft. long/level",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates",
  "spellResistance": "No",
  "summary": "Creates an invisible powder that, sprinkled as a trail, compels evil outsiders who come near and fail their saves to follow it.",
  "source": "Book of Vile Darkness, p. 99",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "no-light",
  "name": "No Light",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Cleric": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates an area of darkness that normal light cannot illuminate, though darkvision works within it; it counters and is countered by light spells.",
  "source": "Book of Vile Darkness, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "pestilence",
  "name": "Pestilence",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 8,
    "Druid": 7
  },
  "components": "V, S, Disease",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Infects the subject with a terrible contagious disease that drains 1d4 Constitution each day with no incubation period; two consecutive successful saves end it.",
  "source": "Book of Vile Darkness, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "plague-of-nightmares",
  "name": "Plague of Nightmares",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Corrupt": 8
  },
  "components": "V, S, F, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Gives the subject demon-haunted dreams so vivid that sleep gives no rest, driving the subject toward suicide unless the caster’s nightly chanting is stopped.",
  "source": "Book of Vile Darkness, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "power-leech",
  "name": "Power Leech",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 5
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Creates a conduit that drains 1 point per round from an ability score of the caster’s choice, granting the caster an equal enhancement bonus to the same score.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "pox",
  "name": "Pox",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corruption": 6,
    "Druid": 6,
    "Pain": 6
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Up to one living creature/level, no two of which can be more than 10 ft. apart",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Subjects take 1d4 points of Constitution drain as their skin breaks out in lesions and takes on a pale yellow pallor.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "preserve-organ",
  "name": "Preserve Organ",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 0,
    "Druid": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S, DF",
  "castingTime": "10 minutes",
  "range": "Touch",
  "targetOrArea": "One organ",
  "duration": "24 hours",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes",
  "summary": "Preserves a single severed organ so it does not decay, keeping it in exactly the state it was in when the spell was cast.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "psychic-poison",
  "name": "Psychic Poison",
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
  "castingTime": "10 minutes",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "50-ft.-radius spread, or one single object or creature that can fit in that area",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Taints an area, creature, or object so that anyone casting a mind-affecting or divination spell at it is struck by a psychic poison of the caster’s choice.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "rapture-of-rupture",
  "name": "Rapture of Rupture",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 7
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature touched per level",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "The caster’s touch deals grievous internal wounds; she can touch one target per round, up to one target per caster level.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "reality-blind",
  "name": "Reality Blind",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Concentration (see below)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Overwhelms the target with hallucinations, blinding and stunning him; he may save anew each round, but nightmares plague his sleep afterward.",
  "source": "Book of Vile Darkness, p. 101",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Phantasm"
},
{
  "id": "red-fester",
  "name": "Red Fester",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The subject’s skin blisters into oozing wounds and her self-esteem clouds: she takes 1d6 points of Strength damage and 1d4 points of Charisma damage.",
  "source": "Book of Vile Darkness, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "resonating-resistance",
  "name": "Resonating Resistance",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Mortal Hunter": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "V, Fiend",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Improves the caster’s spell resistance: each time a foe tries to overcome it, the foe must roll the spell resistance check twice and fail if either roll fails.",
  "source": "Book of Vile Darkness, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "rotting-curse-of-urfestra",
  "name": "Rotting Curse of Urfestra",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The subject’s flesh and bones rot: 1d6 points of Constitution damage immediately and again every hour until the subject dies or the curse is removed.",
  "source": "Book of Vile Darkness, p. 102",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "sacrificial-skill",
  "name": "Sacrificial Skill",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 2,
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Grants the caster a +5 bonus on Knowledge (religion) checks concerning sacrifices made to evil gods.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "sadism",
  "name": "Sadism",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 3,
    "Blackguard": 3,
    "Cleric": 3,
    "Pain": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "For every 10 points of damage the caster deals in a round, she gains a +1 luck bonus on attack rolls, saving throws, and skill checks in the next round.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "sap-strength",
  "name": "Sap Strength",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Drains the subject’s well-being, leaving her exhausted; rest downgrades the exhaustion to fatigue and eventually removes it.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "seething-eyebane",
  "name": "Seething Eyebane",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil",
    "Acid"
  ],
  "levels": {
    "Corrupt": 1
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (see text)",
  "spellResistance": "Yes",
  "summary": "The subject’s eyes burst, blinding him and spraying acid on everyone within 5 feet for 1d6 points of acid damage (Reflex half for those sprayed).",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "serpents-of-theggeron",
  "name": "Serpents of Theggeron",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "S, Corrupt",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster’s arms become serpents with 10-foot reach that bite for 1d8 damage and inject a Strength-damaging poison.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "shriveling",
  "name": "Shriveling",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, Disease",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "Dark energy blasts and blackens the subject’s flesh, dealing 1d4 points of damage per caster level (maximum 10d4).",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "slash-tongue",
  "name": "Slash Tongue",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature with a tongue",
  "duration": "1 round",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Cuts the subject’s tongue for 1 point of damage and a -1 penalty on attack rolls, saving throws, skill checks, and ability checks for 1 round.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "slow-consumption",
  "name": "Slow Consumption",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 1,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, Location",
  "castingTime": "10 minutes",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "Permanent (see below)",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The caster absorbs life from a helpless subject: that day the caster heals at twice the natural rate and needs no food, while the subject does not heal and takes Constitution damage.",
  "source": "Book of Vile Darkness, p. 103",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "snare-astral-traveler",
  "name": "Snare Astral Traveler",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 6,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One astral creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Attracts and captures a creature traveling by astral projection, bringing it instantly before the caster and holding it motionless and visible.",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "song-of-festering-death",
  "name": "Song of Festering Death",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bard": 2
  },
  "components": "V",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Concentration",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "A wailing song (Perform DC 20) makes the subject’s flesh bubble and fester, dealing 2d6 damage each round; if the subject dies, she bursts.",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "sorrow",
  "name": "Sorrow",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil",
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 1,
    "Cleric": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Grief and sadness overcome the subject, imposing a -3 morale penalty on all attack rolls, saving throws, ability checks, and skill checks.",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "soul-shackles",
  "name": "Soul Shackles",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, F, Location",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living creature",
  "duration": "Instantaneous",
  "savingThrow": "None (see text)",
  "spellResistance": "Yes",
  "summary": "Draws the soul of a creature that died holding a special talisman into that talisman, letting the caster call it forth and question it each day.",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "souls-treasure-lost",
  "name": "Soul's Treasure Lost",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates (object)",
  "spellResistance": "Yes",
  "summary": "Ascertains the most valuable object in the subject’s possession and disintegrates it (artifacts are skipped for the next most valuable item).",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "spider-hand",
  "name": "Spider Hand",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Druid": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster’s hand",
  "duration": "Concentration (up to 1 minute/level)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster’s hand detaches and becomes a Small monstrous spider he controls and sees through, ranging up to 20 feet per level away.",
  "source": "Book of Vile Darkness, p. 104",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "spider-legs",
  "name": "Spider Legs",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S, F",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster grows four spider legs from her torso, gaining a 30-foot speed and the ability to climb walls and ceilings with her hands free.",
  "source": "Book of Vile Darkness, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "spores-of-the-vrock",
  "name": "Spores of the Vrock",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 2,
    "Demonologist": 1
  },
  "components": "V, S, M/DF",
  "castingTime": "1 full round",
  "range": "Centered on caster",
  "targetOrArea": "5-ft.-radius, centered on caster",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Spores fill the area around the caster, dealing 1d8 damage to nearby creatures and then growing inside them for further damage over 10 rounds.",
  "source": "Book of Vile Darkness, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation",
  "note": "Book of Vile Darkness prints no Range line for this spell; its area is centered on the caster."
},
{
  "id": "spread-of-savagery",
  "name": "Spread of Savagery",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bestial": 8,
    "Cleric": 9
  },
  "components": "V, S, M/DF",
  "castingTime": "1 hour",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "10-ft./level radius spread",
  "duration": "1 hour/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "All living creatures in the area become hostile to anyone not affected by the spell, likely attacking outsiders while keeping their wits.",
  "source": "Book of Vile Darkness, p. 105",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "steal-life",
  "name": "Steal Life",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, Location",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One living humanoid",
  "duration": "Concentration",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Each round the caster concentrates, she drains 1 point from an ability score of the subject, cycling through different scores, and adds the life force to her own.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "stop-heart",
  "name": "Stop Heart",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Assassin": 4,
    "Cleric": 4,
    "Sorcerer/Wizard": 5
  },
  "components": "S, Drug",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living humanoid or animal",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Gives the subject a massive heart attack: she drops to -8 hit points, then -9, and dies at the end of the next round unless healed or stabilized.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "stunning-screech",
  "name": "Stunning Screech",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil",
    "Sonic"
  ],
  "levels": {
    "Bard": 3,
    "Demonologist": 2
  },
  "components": "V, S, M, Drug",
  "castingTime": "1 action",
  "range": "30 ft.",
  "targetOrArea": "All creatures within range",
  "duration": "1 round",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The caster emits a piercing screech like a vrock’s: every creature in the area is stunned for 1 round.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "stupor",
  "name": "Stupor",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Assassin": 1,
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "S, M",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "One helpless creature",
  "duration": "1 hour/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Places one already-helpless creature in a drugged, clouded state in which she cannot think clearly or take actions, though she can be led along.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "suspend-disease",
  "name": "Suspend Disease",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Druid": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One creature",
  "duration": "24 hours",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Keeps a disease already infecting the subject from harming him for that day, without curing it or allowing a save to throw it off.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "thousand-needles",
  "name": "Thousand Needles",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Pain": 5,
    "Cleric": 6
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./levels)",
  "targetOrArea": "One living creature",
  "duration": "1 minute/level",
  "savingThrow": "Fortitude partial",
  "spellResistance": "Yes",
  "summary": "A thousand needles pierce the subject through any armor, dealing 2d6 damage and imposing a -4 circumstance penalty on attack rolls, saving throws, and checks; creatures with damage reduction are immune.",
  "source": "Book of Vile Darkness, p. 106",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "tongue-of-baalzebul",
  "name": "Tongue of Baalzebul",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, M, Drug",
  "castingTime": "1 full round",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 hour/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Gives the caster a devil’s silver tongue: a +2 competence bonus on Bluff, Diplomacy, and Gather Information checks.",
  "source": "Book of Vile Darkness, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "tongue-serpents",
  "name": "Tongue Serpents",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 hour/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster’s tongue becomes a small serpent he can spit up to 30 feet away to bite with his attack bonus; he can create one per four caster levels.",
  "source": "Book of Vile Darkness, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "tongue-tendrils",
  "name": "Tongue Tendrils",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "Caster",
  "duration": "1 hour/level or until discharged",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "The caster’s tongue becomes a tendril she can spit up to 30 feet to grapple a target as a Small creature with Strength 20, lashing it in place.",
  "source": "Book of Vile Darkness, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "touch-of-juiblex",
  "name": "Touch of Juiblex",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Corrupt": 3
  },
  "components": "V, S, Corrupt",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "The subject turns into green slime over 4 rounds; powerful restorative spells cast during the transformation restore the subject, who still takes 3d6 damage.",
  "source": "Book of Vile Darkness, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "unheavened",
  "name": "Unheavened",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, Drug",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One creature",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "Grants one creature a +4 profane bonus on saving throws against spells and spell-like effects from good outsiders, marked by a black and red nimbus celestials recognize.",
  "source": "Book of Vile Darkness, p. 107",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "unliving-weapon",
  "name": "Unliving Weapon",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, M",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "One undead creature",
  "duration": "1 hour/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "Causes an undead creature to explode in a 10-foot burst dealing 1d6 damage per two caster levels (maximum 10d6) when struck or at a set time.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "unnerving-gaze",
  "name": "Unnerving Gaze",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Demonologist": 1,
    "Mortal Hunter": 1,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One humanoid creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The caster’s face resembles one of the opponent’s departed loved ones or bitter enemies, imposing a -1 morale penalty on the subject’s attack rolls.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Phantasm"
},
{
  "id": "utterdark",
  "name": "Utterdark",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Darkness": 8,
    "Demonic": 8,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M/DF",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "100-ft./level radius spread, centered on caster",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Creates cold, cloying magical darkness that no magical light counters or dispels; evil creatures can see in it as if it were dim light.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "vile-lance",
  "name": "Vile Lance",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 4,
    "Cleric": 3,
    "Mortal Hunter": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One shortspear",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Creates a weapon of blackness only the caster can wield, treated as a +2 shortspear that deals vile damage; throwing it ends the spell after the attack.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "wall-of-chains",
  "name": "Wall of Chains",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "A wall whose area is up to one 5-ft. square/level (S) (see text)",
  "duration": "1 minute/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "Conjures a flat vertical wall of woven, spiked chains that can seal a passage or breach, inserting itself into surrounding nonliving material.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "wall-of-deadly-chains",
  "name": "Wall of Deadly Chains",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "A wall whose area is up to one 5-ft. square/level (S) (see text)",
  "duration": "1 minute/level",
  "savingThrow": "Reflex half",
  "spellResistance": "No",
  "summary": "As wall of chains, except loose lengths of spiked chain strike anyone within 5 feet of the wall for 3d6 damage each round.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation",
  "note": "Book of Vile Darkness prints this spell in abbreviated form (\"As wall of chains, except...\"); level and saving throw are as printed there, and the remaining stat-block fields follow wall of chains as the book directs."
},
{
  "id": "wall-of-eyes",
  "name": "Wall of Eyes",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "A wall whose area is up to one 5-ft. square/level (S) (see text)",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (see text)",
  "spellResistance": "No",
  "summary": "Conjures a flat vertical wall of living, glistening eyes that can seal a passage or breach, inserting itself into surrounding nonliving material.",
  "source": "Book of Vile Darkness, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "wall-of-ooze",
  "name": "Wall of Ooze",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "A wall whose area is up to one 5-ft. square/level (S) (see text)",
  "duration": "Concentration + 1 round/level",
  "savingThrow": "Fortitude partial (see text)",
  "spellResistance": "No",
  "summary": "Conjures a flat vertical wall of festering, stinking organic ooze that can seal a passage or breach, inserting itself into surrounding nonliving material.",
  "source": "Book of Vile Darkness, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf",
  "subschool": "Creation"
},
{
  "id": "wave-of-pain",
  "name": "Wave of Pain",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bard": 6,
    "Pain": 7
  },
  "components": "S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Cone",
  "duration": "1 round/2 levels",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "All living creatures in the cone are overcome with pain and suffering and are stunned for the duration; creatures without discernible anatomy are unaffected.",
  "source": "Book of Vile Darkness, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "were-doom",
  "name": "Were-Doom",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil",
    "Chaos"
  ],
  "levels": {
    "Bestial": 9,
    "Cleric": 9,
    "Druid": 9
  },
  "components": "V, S, M",
  "castingTime": "1 minute",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "50-ft./level radius",
  "duration": "24 hours",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "Cast at night, it infects 1d4 randomly chosen humanoids in the area with lycanthropy; they change form and savagely attack those around them.",
  "source": "Book of Vile Darkness, p. 109",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "whirlwind-of-teeth",
  "name": "Whirlwind of Teeth",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Bestial": 7,
    "Sorcerer/Wizard": 7
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./ level)",
  "targetOrArea": "5-ft./level radius cylinder 10 ft./level high",
  "duration": "1 round/level",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "Creates an opaque whirlwind of roaring mouths and teeth that deals up to 10d8 damage to those inside and moves 40 feet as the caster directs.",
  "source": "Book of Vile Darkness, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
{
  "id": "wretched-blight",
  "name": "Wretched Blight",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 7
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude partial (see text)",
  "spellResistance": "Yes",
  "summary": "Unholy darkness smites good and neutral creatures for 1d8 damage per caster level (maximum 15d8), stunning good creatures struck.",
  "source": "Book of Vile Darkness, p. 110",
  "sourceUrl": "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf"
},
];
