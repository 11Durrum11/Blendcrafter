import type { SpellDefinition } from "@/engine/types";

// Batch 12b: leftover spell chapter of Complete Divine — spells not
// reprinted in Spell Compendium. Records verified against the book's
// own text (page images where the text layer was ambiguous);
// summaries are original paraphrases. See REBUILD-NOTES.md.

export const COMPLETE_DIVINE_SPELLS: SpellDefinition[] = [
{
  "id": "bane-bow",
  "name": "Bane Bow",
  "ruleset": "core",
  "school": "Evocation",
  "descriptors": [],
  "levels": {
    "Ranger": 4
  },
  "components": "V, S",
  "castingTime": "1 standard action",
  "range": "Touch",
  "targetOrArea": "Ranged weapon touched",
  "duration": "1 round/level",
  "savingThrow": "None",
  "spellResistance": "No",
  "summary": "This spell allows you to channel divine power into any ranged weapon you choose: the weapon gains a +5 enhancement bonus on attack and damage rolls, plus the bane quality (+7 enhancement bonus on attack and damage rolls, plus an additional 2d6 points of damage) against foes of one of your favored enemy categories that you specify. The spell is automatically canceled 1 round after the weapon leaves your hand, and you cannot have more than one bane bow at a time.",
  "source": "Complete Divine, p. 151",
  "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf"
},
];
