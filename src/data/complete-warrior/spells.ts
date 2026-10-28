import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Warrior — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_WARRIOR_SPELLS: SpellDefinition[] = [
{
  "id": "hound-of-doom",
  "name": "Hound of Doom",
  "ruleset": "core",
  "school": "Illusion",
  "descriptors": [],
  "levels": {
    "Hexblade": 3
  },
  "components": "V, S",
  "castingTime": "1 round",
  "range": "Close (25 ft. + 5 ft./2 levels)",
  "targetOrArea": "Shadowy hound",
  "duration": "1 minute/level (D) or until destroyed",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "You shape the essence of the Plane of Shadow to create a powerful doglike companion that serves you loyally for the duration of the spell. You can have only one hound of doom in existence at a time.",
  "source": "Complete Warrior, p. 117",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Warrior.pdf",
  "subschool": "Shadow"
},
];
