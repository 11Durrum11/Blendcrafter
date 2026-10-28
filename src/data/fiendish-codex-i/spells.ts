import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Fiendish Codex I: Hordes of the Abyss — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const FIENDISH_CODEX_I_SPELLS: SpellDefinition[] = [
{
  "id": "abyssal-frenzy",
  "name": "Abyssal Frenzy",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 8,
    "Fury": 7
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One animal, humanoid, magical beast, or monstrous humanoid",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You cause the subject to transform into a demonic version of its true self, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 90",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "abyssal-frenzy-mass",
  "name": "Abyssal Frenzy, Mass",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Fury": 9
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One animal, humanoid, magical beast, or monstrous humanoid/level, all of which must be within 30 ft. of each other",
  "duration": "1 round/level (D)",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "This spell has the same effects as abyssal frenzy, except that it affects one creature per level, all within 30 feet of each other.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 91",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf",
  "note": "This book prints only the level and target lines for the mass version and states that it has the same effects as abyssal frenzy except as indicated; the remaining fields are as abyssal frenzy in this book. Abbreviated entry in Fiendish Codex I: Hordes of the Abyss: functions as Abyssal Frenzy except as noted in its description; the unprinted stat-block fields are inherited from that spell."
},
{
  "id": "abyssal-rift",
  "name": "Abyssal Rift",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Entropy": 9,
    "Sorcerer/Wizard": 9
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "10-ft.-wide, 60-ft.-deep rift, up to 5 ft. long per caster level",
  "duration": "3 rounds",
  "savingThrow": "Reflex negates; see text",
  "spellResistance": "Yes",
  "summary": "A yawning rift filled with black fire splits the ground, threatening to devour all, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 91",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf",
  "subschool": "Calling"
},
{
  "id": "beckoning-call",
  "name": "Beckoning Call",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Temptation": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One creature",
  "duration": "Concentration plus 3 rounds",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You draw the targeted creature toward you: the subject becomes overwhelmed with the desire to be near you, though it remains aware of its surroundings.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 91",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf",
  "subschool": "Compulsion"
},
{
  "id": "demoncall-fc1",
  "name": "Demoncall",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Blackguard": 2,
    "Demonic": 2
  },
  "components": "V, S",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You call to Dagon for his unique insight and become aware of some fragment of forbidden lore previously lost to you, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 92",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf",
  "note": "The Fiendish Codex I printing of this spell differs from the Book of Vile Darkness version (see that record): it has no material component and a casting time of 1 swift action instead of 1 action. Both versions are included; this is the later (2006) printing."
},
{
  "id": "embrace-the-dark-chaos",
  "name": "Embrace the Dark Chaos",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Chaotic"
  ],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, XP",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Willing living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You infuse the creature touched with raw chaos channeled from the Abyss: the subject immediately gains one Abyssal heritor feat, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 92",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "exorcism",
  "name": "Exorcism",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Paladin": 1
  },
  "components": "V, S, M, DF",
  "castingTime": "1 swift action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Not printed in source",
  "summary": "You force your will against that of a possessing fiend, trying to drive it from the body of the creature before you, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 92",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "extract-gift",
  "name": "Extract Gift",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Chaotic"
  ],
  "levels": {
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M, XP",
  "castingTime": "1 hour",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One demon and one willing creature",
  "duration": "Permanent",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "After an hour-long ritual, you pull a gift from a demon standing in one magic circle and bestow it upon a willing subject in another, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 92",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "inner-beauty",
  "name": "Inner Beauty",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Bard": 4
  },
  "components": "V, S, F",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "One creature",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates; see below",
  "spellResistance": "Yes",
  "summary": "You change the subject's physical appearance to reflect its personality and morality, revealing its true beauty or exposing its revolting ugliness.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 94",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "oozepuppet",
  "name": "Oozepuppet",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Ooze": 5,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One ooze",
  "duration": "1 hour/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You telekinetically take control of the targeted ooze, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 95",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "shun-the-dark-chaos",
  "name": "Shun the Dark Chaos",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 8,
    "Sorcerer/Wizard": 8
  },
  "components": "V, S, XP",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Willing creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You strip the taint of the Abyss from the creature touched, removing a vestige of its Abyssal heritage, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 95",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "soul-link",
  "name": "Soul Link",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 6,
    "Sorcerer/Wizard": 7,
    "Temptation": 7
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You link your soul to the touched creature's, as the text describes.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 96",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf"
},
{
  "id": "vision-of-entropy",
  "name": "Vision of Entropy",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Entropy": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft/2 levels)",
  "targetOrArea": "One creature",
  "duration": "1 round/level",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "You invite the targeted creature to behold the seething chaos of the infinite void surrounding the Abyss, with the effects given in the text.",
  "source": "Fiendish Codex I: Hordes of the Abyss, p. 96",
  "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Fiendish Codex I - Hordes of the Abyss.pdf",
  "subschool": "Phantasm"
},
];
