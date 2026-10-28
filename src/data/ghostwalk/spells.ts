import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Ghostwalk — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const GHOSTWALK_SPELLS: SpellDefinition[] = [
{
  "id": "anti-ectoplasm-shell",
  "name": "Anti-Ectoplasm Shell",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "10 ft.",
  "targetOrArea": "10-ft.-radius emanation centered on you",
  "duration": "10 minutes/level (D)",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "As antilife shell, except that it affects only ectoplasm, whether inert or part of an ectoplasmic creature.",
  "source": "Ghostwalk, p. 49",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as antilife shell (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "black-lungs",
  "name": "Black Lungs",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 2
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "1 hour/level",
  "savingThrow": "Fortitude negates",
  "spellResistance": "Yes",
  "summary": "You cause the target to succumb to an infection and corruption of the lungs: its speed is reduced by half, it loses any Dexterity bonus to Armor Class, and it takes a -2 penalty on attack rolls.",
  "source": "Ghostwalk, p. 49",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "blessing-of-the-snake-mother",
  "name": "Blessing of the Snake Mother",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Evil"
  ],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Living humanoid touched",
  "duration": "10 minutes/level",
  "savingThrow": "Fortitude negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "The target assumes some of the qualities of the yuan-ti tainted one template, gaining the Alertness feat and other benefits as the text describes.",
  "source": "Ghostwalk, p. 49",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "bonerattle",
  "name": "Bonerattle",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic"
  ],
  "levels": {
    "Bard": 1,
    "Bonecollector": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature with bones",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "You create a deep resonating vibration that damages bone, dealing sonic damage to one creature with bones; it does not affect creatures without true bones.",
  "source": "Ghostwalk, p. 49",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "bottomless-hate",
  "name": "Bottomless Hate",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [
    "Mind-Affecting"
  ],
  "levels": {
    "Ranger": 2
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You fill yourself with a terrible hatred against your favored enemies, gaining a +1 morale bonus on attack and damage rolls against them for every three caster levels.",
  "source": "Ghostwalk, p. 49",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Compulsion"
},
{
  "id": "charm-person-or-ghost",
  "name": "Charm Person or Ghost",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One humanoid creature",
  "duration": "1 hour/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As charm person, except that it also affects ghosts.",
  "source": "Ghostwalk, p. 50",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Charm",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as charm person (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "contingent-spell-lock",
  "name": "Contingent Spell Lock",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Bard": 6,
    "Cleric": 6,
    "Ghost": 5,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, DF",
  "castingTime": "10 minutes",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Instantaneous",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You transfer some of your currently prepared spells or available spell slots to a hidden part of your soul, so that if you die and appear on the Ethereal Plane, you have those spells or slots available.",
  "source": "Ghostwalk, p. 50",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "create-ectoplasm",
  "name": "Create Ectoplasm",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "1 lb. of raw ectoplasm/level",
  "duration": "10 minutes/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You create raw ectoplasm — sticky or slippery, as you choose — from your hands, eyes, or mouth.",
  "source": "Ghostwalk, p. 50",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Creation"
},
{
  "id": "death-lock",
  "name": "Death Lock",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "10 minutes/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "If the subject dies while the spell is in effect, its soul immediately passes on to the True Afterlife and cannot form a ghost, though it can still be raised from the dead.",
  "source": "Ghostwalk, p. 51",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "delay-manifestation",
  "name": "Delay Manifestation",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One living creature",
  "duration": "1 hour/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You prevent the subject creature from manifesting as a ghost for the duration: if it dies, it appears on the Ethereal Plane as normal but cannot enter the Material Plane while the spell lasts.",
  "source": "Ghostwalk, p. 51",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "detect-ghost",
  "name": "Detect Ghost",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Bard": 0,
    "Cleric": 0,
    "Druid": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "60 ft.",
  "targetOrArea": "Quarter-circle emanating from you to the extreme of the range",
  "duration": "Concentration, up to 1 minute/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You detect ghosts, learning first their presence or absence, then their number, then their location as you study an area.",
  "source": "Ghostwalk, p. 51",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "dispel-possession",
  "name": "Dispel Possession",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Bard": 4,
    "Cleric": 5,
    "Sorcerer/Wizard": 5
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One creature",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You force a being that is possessing a creature out of its host body, as if it had left voluntarily.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "disrupt-ectoplasm",
  "name": "Disrupt Ectoplasm",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 0,
    "Sorcerer/Wizard": 0
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Ray",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "Yes",
  "summary": "You direct a ray of energy that damages ectoplasm: on a successful ranged touch attack, a ghost or ectoplasmic object takes 1d6 points of damage that bypasses hardness.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "dominate-person-or-ghost",
  "name": "Dominate Person or Ghost",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 5,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One humanoid",
  "duration": "1 day/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "As dominate person, except that it also affects ghosts.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Compulsion",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as dominate person (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "ectoplasmic-decay",
  "name": "Ectoplasmic Decay",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "20-ft.-radius spread",
  "duration": "Instantaneous",
  "savingThrow": "Fortitude half",
  "spellResistance": "Yes",
  "summary": "You create a barely visible spread of energy that is harmful to ectoplasm but harmless to everything else: ectoplasmic creatures and objects in the area take 1d6 points of damage per caster level.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "ectoplasmic-web",
  "name": "Ectoplasmic Web",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Webs in a 20-ft.-radius spread",
  "duration": "10 minutes/level (D)",
  "savingThrow": "Reflex negates; see text",
  "spellResistance": "No",
  "summary": "As web, except that the strands are made of ectoplasm and therefore affect incorporeal creatures.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Creation",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as web (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "ethereal-alarm",
  "name": "Ethereal Alarm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Ranger": 2,
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "20-ft.-radius emanation centered on a point in space",
  "duration": "2 hours/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As alarm, but detecting only ethereal creatures that enter the warded area; the spell does not let you see them once the alarm is triggered.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as alarm (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "forced-incorporeality",
  "name": "Forced Incorporeality",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One ghost or naturally incorporeal undead",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The target ghost or naturally incorporeal undead is enveloped in an orange haze that forces it to be incorporeal for the duration. This spell counters and dispels forced manifestation.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "forced-manifestation",
  "name": "Forced Manifestation",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 3,
    "Bonecollector": 3,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One ghost or naturally incorporeal undead",
  "duration": "1 round/level",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "The target ghost or naturally incorporeal undead is enveloped in a violet haze that forces it to manifest fully for the duration. This spell counters and dispels forced incorporeality.",
  "source": "Ghostwalk, p. 52",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "ghost-bane-weapon",
  "name": "Ghost Bane Weapon",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 4,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Weapon touched",
  "duration": "1 hour/level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You give a weapon the ghost bane property in addition to any other properties it has.",
  "source": "Ghostwalk, p. 53",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "ghost-companion",
  "name": "Ghost Companion",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Druid": 2,
    "Paladin": 2,
    "Ranger": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One willing animal, beast, or magical beast",
  "duration": "1 day/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The touched willing animal, beast, or magical beast dies painlessly; instead of passing beyond the Veil of Souls, its soul remains on the Ethereal Plane and attempts to enter the Material Plane as a ghost.",
  "source": "Ghostwalk, p. 53",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "ghost-lock",
  "name": "Ghost Lock",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 2,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One willing nonhumanoid",
  "duration": "1 hour/level or until discharged",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "If the willing nonhumanoid subject dies while this spell is in effect, its soul does not immediately enter the realm of the dead and can instead attempt to enter the Material Plane as a ghost.",
  "source": "Ghostwalk, p. 53",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "ghost-venom",
  "name": "Ghost Venom",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Druid": 3,
    "Ranger": 3
  },
  "components": "V, S, DF",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Living creature touched",
  "duration": "Instantaneous; see text",
  "savingThrow": "Fortitude negates; see text",
  "spellResistance": "Yes",
  "summary": "As poison, except the poison affects only ghosts and other ectoplasmic creatures.",
  "source": "Ghostwalk, p. 54",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as poison (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "glyph-of-turning",
  "name": "Glyph of Turning",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Cleric": 3
  },
  "components": "V, S, M",
  "castingTime": "10 minutes",
  "range": "Touch",
  "targetOrArea": "Object touched or up to 5 sq. ft./level",
  "duration": "Permanent until discharged (D)",
  "savingThrow": "Reflex negates; see text or None; see text",
  "spellResistance": "Yes; see text",
  "summary": "As glyph of warding, except that instead of a spell effect or a blast of energy, the glyph unleashes a burst of positive or negative energy, depending on whether you channel positive or negative energy.",
  "source": "Ghostwalk, p. 54",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as glyph of warding (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "hail-of-ectoplasm",
  "name": "Hail of Ectoplasm",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 2
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "10-ft.-radius burst",
  "duration": "Instantaneous",
  "savingThrow": "Reflex half",
  "spellResistance": "Yes",
  "summary": "An explosion of spheres of hardened ectoplasm occurs at a point you designate, dealing 1d6 points of bludgeoning damage per two caster levels (maximum 5d6) to creatures within the effect.",
  "source": "Ghostwalk, p. 54",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Creation"
},
{
  "id": "harmony",
  "name": "Harmony",
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
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "Variable (see below)",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "When you play your instrument, sing, recite, or speak words of encouragement, your inspire competence or similar bardic music grants a +4 bonus instead of the normal bonus, as the text describes.",
  "source": "Ghostwalk, p. 54",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Compulsion"
},
{
  "id": "hold-person-or-ghost",
  "name": "Hold Person or Ghost",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 3,
    "Cleric": 3,
    "Ghost": 2,
    "Sorcerer/Wizard": 4
  },
  "components": "V, S, F/DF",
  "castingTime": "1 standard action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "One humanoid creature",
  "duration": "1 round/level (D); see text",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "As hold person, except that it also affects ghosts.",
  "source": "Ghostwalk, p. 54",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Compulsion",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as hold person (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "incorporeal-disharmonics",
  "name": "Incorporeal Disharmonics",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Ectomancy",
    "Sonic"
  ],
  "levels": {
    "Bard": 2
  },
  "components": "V, S, F",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One incorporeal creature and see text",
  "duration": "Instantaneous",
  "savingThrow": "Will half",
  "spellResistance": "Yes",
  "summary": "You create a wave of sonic energy harmful to incorporeal creatures: the target cannot avoid the damage with its incorporeal miss chance and takes 1d6 points of sonic damage per two caster levels.",
  "source": "Ghostwalk, p. 55",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "i-smell-your-fear",
  "name": "I Smell Your Fear",
  "ruleset": "core",
  "school": "Divination",
  "descriptors": [],
  "levels": {
    "Ranger": 4
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Long (400 ft. + 40 ft./level)",
  "targetOrArea": "Circle, centered on you, with a radius of 400 ft. + 40 ft./level",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As locate creature, except as noted in the spell’s text, and it requires a sample of the target’s flesh, blood, hair, ectoplasm, or other physical part as its material component.",
  "source": "Ghostwalk, p. 55",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only its level and duration and otherwise functions as locate creature (Player's Handbook/SRD); the remaining fields are filled from that spell."
},
{
  "id": "irresistible-force",
  "name": "Irresistible Force",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Charged with divine energy, you become the epitome of force in motion: you are protected by freedom of movement and may charge and pass through enemy squares as the text describes.",
  "source": "Ghostwalk, p. 55",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "mass-camouflage",
  "name": "Mass Camouflage",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Druid": 4,
    "Ranger": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Any number of creatures, no two of which can be more than 60 ft. apart",
  "duration": "10 minutes/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "As camouflage, except the effect is mobile with the group, and the spell is broken for any individual who moves more than 60 feet from the nearest member of the group.",
  "source": "Ghostwalk, p. 55",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "painless-death",
  "name": "Painless Death",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S, DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One willing living creature touched",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "The touched willing living creature dies painlessly and instantly.",
  "source": "Ghostwalk, p. 56",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "persuade-to-manifest",
  "name": "Persuade to Manifest",
  "ruleset": "core",
  "school": "Enchantment",
  "descriptors": [],
  "levels": {
    "Bard": 2,
    "Sorcerer/Wizard": 3
  },
  "components": "V, S",
  "castingTime": "1 full round",
  "range": "Touch",
  "targetOrArea": "Dead creature touched",
  "duration": "Instantaneous",
  "savingThrow": "Yes (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You send a powerful signal to the soul of a creature that has died and not yet manifested: the soul immediately appears on the Ethereal Plane and can attempt to manifest.",
  "source": "Ghostwalk, p. 56",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Compulsion"
},
{
  "id": "pleasant-visage",
  "name": "Pleasant Visage",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Bard": 1,
    "Cleric": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "One ghost",
  "duration": "24 hours",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "Yes (harmless)",
  "summary": "You disguise the wounds of a ghost with a disturbing, repulsive, or gruesome appearance, making it appear completely normal (although still a ghost).",
  "source": "Ghostwalk, p. 56",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Glamer"
},
{
  "id": "preserve-ectoplasm",
  "name": "Preserve Ectoplasm",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 0
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "10 ft.",
  "targetOrArea": "1 cu. ft./level of ectoplasm",
  "duration": "Instantaneous",
  "savingThrow": "Will negates (object)",
  "spellResistance": "Yes (object)",
  "summary": "As purify food and drink, but affecting only ectoplasm.",
  "source": "Ghostwalk, p. 56",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "proper-state",
  "name": "Proper State",
  "ruleset": "core",
  "school": "Necromancy",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 4,
    "Ghost": 4
  },
  "components": "V, S, DF",
  "castingTime": "1 full round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One willing incorporeal undead",
  "duration": "Instantaneous",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You transform a willing incorporeal undead creature into a ghost.",
  "source": "Ghostwalk, p. 56",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "protection-from-possession",
  "name": "Protection from Possession",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Bard": 1,
    "Bonecollector": 1,
    "Cleric": 1,
    "Ghost": 1,
    "Paladin": 1,
    "Sorcerer/Wizard": 1
  },
  "components": "V, S, M/DF",
  "castingTime": "1 action",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "10 minutes/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell wards a creature against mental control and possession attempts, blocking any attempt to possess the warded creature or exercise mental control over it.",
  "source": "Ghostwalk, p. 57",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "raise-ghost",
  "name": "Raise Ghost",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Cleric": 4
  },
  "components": "V, S, M, DF",
  "castingTime": "1 minute",
  "range": "Touch",
  "targetOrArea": "Dead creature touched",
  "duration": "Instantaneous",
  "savingThrow": "None; see text",
  "spellResistance": "No",
  "summary": "As raise dead, except that this spell can bring back only a ghost who has been killed: it does not restore life to a dead body, but brings back a slain ghost as a ghost.",
  "source": "Ghostwalk, p. 57",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Healing",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as raise dead (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "repel-ectoplasm",
  "name": "Repel Ectoplasm",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Ghost": 7,
    "Sorcerer/Wizard": 6
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Personal",
  "targetOrArea": "60-ft. emanation centered on you",
  "duration": "1 round/level (D)",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "As repel wood, but affecting only ectoplasm, whether inert or part of an ectoplasmic creature; large manifestations of ectoplasm are not considered “fixed firmly” for the spell’s purpose.",
  "source": "Ghostwalk, p. 57",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "note": "In this book the entry prints only the fields shown as its own and otherwise functions as repel wood (Player's Handbook/SRD); the shared fields are filled from that spell."
},
{
  "id": "sherem-transformation",
  "name": "Sherem Transformation",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 6
  },
  "components": "V, S, M, F",
  "castingTime": "1 hour",
  "range": "Touch",
  "targetOrArea": "One unborn human (see text)",
  "duration": "Instantaneous",
  "savingThrow": "Will negates",
  "spellResistance": "Yes",
  "summary": "You enhance the abilities of an unborn human child, giving the child exceptional sorcerous ability (if female) or exceptional clarity of mind (if male).",
  "source": "Ghostwalk, p. 57",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "song-of-the-calling",
  "name": "Song of the Calling",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Bard": 3
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "One ghost",
  "duration": "Instantaneous",
  "savingThrow": "Will negates; see text",
  "spellResistance": "Yes",
  "summary": "You force a ghost to succumb to the Calling and depart immediately for the True Afterlife; each level in the eidolon class the target ghost has gives it a -1 penalty on its saving throw.",
  "source": "Ghostwalk, p. 58",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "spittle-spray",
  "name": "Spittle Spray",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Cleric": 1
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You can spit out to close range; if you have a poison bite attack, this spell lets you spit your poison out to that range with a ranged touch attack.",
  "source": "Ghostwalk, p. 58",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "surelife",
  "name": "Surelife",
  "ruleset": "core",
  "school": "Abjuration",
  "descriptors": [],
  "levels": {
    "Repose": 8
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 minute/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "This spell protects you against one condition you name that would ordinarily cause certain death, such as being immersed in boiling oil or buried under an avalanche.",
  "source": "Ghostwalk, p. 59",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "unmovable-object",
  "name": "Unmovable Object",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Paladin": 4
  },
  "components": "V, S",
  "castingTime": "1 action",
  "range": "Personal",
  "targetOrArea": "You",
  "duration": "1 round/ level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "Charged with divine energy, you bond yourself to the ground beneath your feet and become the epitome of stability; the spell ends instantly if you move from your current position.",
  "source": "Ghostwalk, p. 60",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf"
},
{
  "id": "wall-of-ectoplasm",
  "name": "Wall of Ectoplasm",
  "ruleset": "core",
  "school": "Conjuration",
  "descriptors": [
    "Ectomancy"
  ],
  "levels": {
    "Sorcerer/Wizard": 3
  },
  "components": "V, S, M",
  "castingTime": "1 action",
  "range": "Medium (100 ft. + 10 ft./level)",
  "targetOrArea": "Anchored plane of ectoplasm, up to one 10-ft. square/level, or hemisphere of ectoplasm with a radius of up to 3 ft. + 1 ft./level",
  "duration": "1 minute/level",
  "savingThrow": "See text",
  "spellResistance": "Yes",
  "summary": "You create an anchored plane of ectoplasm or a hemisphere of ectoplasm, depending on the version selected.",
  "source": "Ghostwalk, p. 61",
  "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
  "subschool": "Creation"
},
];
