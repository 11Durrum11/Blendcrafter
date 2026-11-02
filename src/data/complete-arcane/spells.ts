import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Arcane — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_ARCANE_SPELLS: SpellDefinition[] = [
{
  "id": "assay-resistance",
  "name": "Assay Resistance",
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
  "duration": "1 round/level",
  "savingThrow": "Not printed in source",
  "spellResistance": "Not printed in source",
  "summary": "You divine the exact nature and vulnerabilities of one creature's magical defenses, gaining a +10 bonus on caster level checks to overcome its spell resistance.",
  "source": "Complete Arcane, p. 98",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "chameleon",
  "name": "Chameleon",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Druid": 2,
  },
  "components": "V, S, M",
  "castingTime": "1 round",
  "range": "Touch",
  "targetOrArea": "Creature touched",
  "duration": "1 hour/level",
  "savingThrow": "None",
  "spellResistance": "Yes (harmless)",
  "summary": "Alters the recipient's coloration to blend with the surrounding background, granting a +10 circumstance bonus on Hide checks.",
  "source": "Complete Arcane, p. 100",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Glamer"
},
{
  "id": "force-whip",
  "name": "Force Whip",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [
    "Sonic",
    "Mind-Affecting"
  ],
  "levels": {
    "Bard": 2,
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "A whip of force",
  "duration": "1 round/level",
  "savingThrow": "Will negates; see text",
  "spellResistance": "No",
  "summary": "Creates a whip of magical force that you wield as if proficient; simply cracking it keeps normal animals at least 30 feet away unless they succeed on a Will save.",
  "source": "Complete Arcane, p. 108",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
{
  "id": "superior-invisibility",
  "name": "Superior Invisibility",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Sorcerer/Wizard": 9
  },
  "components": "V, S",
  "castingTime": "10 minutes",
  "range": "Personal or touch",
  "targetOrArea": "You or a creature or object weighing no more than 100 lb./level",
  "duration": "1 hour/level (D)",
  "savingThrow": "Will negates (harmless)",
  "spellResistance": "No",
  "summary": "Functions as greater invisibility, except that it masks image, scent, and sound alike, concealing the subject from all senses except touch and taste.",
  "source": "Complete Arcane, p. 125",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
  "subschool": "Glamer"
},
{
  "id": "accuracy",
  "name": "Accuracy",
  "ruleset": "core",
  "school": "Transmutation",
  "descriptors": [],
  "levels": {
    "Warmage": 1,
  },
  "components": "V, S, M",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "One thrown weapon per level touched or one projectile weapon touched",
  "duration": "10 min./level",
  "savingThrow": "Will negates (harmless, object)",
  "spellResistance": "Yes (harmless, object)",
  "summary": "You enhance one or more thrown weapons or one projectile weapon to improve its chance of hitting distant targets: for the duration, the range increment of the affected weapon or weapons is doubled. Material component: ink used to scribe a mystical character on each weapon affected.",
  "source": "Complete Arcane, p. 96",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf"
},
];
