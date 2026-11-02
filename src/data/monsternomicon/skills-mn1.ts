import type { SkillDefinition } from "@/engine/types";

// Monsternomicon vol. 1 skill: Creature Lore is the one entry
// under the "New Skills" heading of the book's Legend & Lore
// appendix (p. 209) — a standalone skill with its own key
// ability, trained-only status, Check and Special text, and the
// skill the appendix's monster-research rules and its "Tomes of
// Lore" rules run on. Added in the 2026-11-02 skills audit
// (Shaun: "Look for all the skills from all the books — list
// them"); Batch 9 had left the name standing as printed in the
// appendix classes' skill lists without a record. The Iron
// Kingdoms Character Guide reprints the skill (p. 149),
// restating its Knowledge synergy at the 3.5-standard 5 ranks
// and naming Knowledge (nature) as the related skill; both
// printings are noted in the description. Short mechanical
// summary in our own words, cited to book + page.
// Source PDF: /transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf

const MN1 = "Iron Kingdoms Monsternomicon, vol. 1";
const MN1_PATH = "/transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf";

export const MONSTERNOMICON_MN1_SKILLS: SkillDefinition[] = [
  {
    id: "creature-lore",
    name: "Creature Lore",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "Researching the tales surrounding creatures to discern the truths evident in the legends and lore surrounding specific beasts — monster research under the book's \"Legends & Lore\" rules. Research checks are made against DCs by how available the lore is: Common DC 10, Uncommon DC 15, Rare DC 20–25 (DM's option), Obscure DC 30+, with the creature's CR as a suggested addition to the DC for unusually rare lore. Research time without a tome typically takes 1 week (an extra week of fact-checking can reach for Rare lore at +5 DC); a check can take 10, and taking 20 doubles the research time and requires research material. Using a tome of lore fully requires this skill (or another appropriate to its contents), with the tome's bonus gained week by week. Special: there is a synergy between Creature Lore and some Knowledge skills — a PC with 4 ranks or more of Creature Lore receives a +2 synergy bonus to a Knowledge check that relates to monster lore, and a PC conducting research with Creature Lore may receive a +2 synergy bonus if they have a relevant Knowledge skill of 4 ranks or greater; only one synergy bonus may be applied to any skill check. Note: this is a class skill for bards, rangers, and wizards; it is a cross-class skill for other classes. (Reprinted in the Iron Kingdoms Character Guide, p. 149, where the synergy is stated at 5 or more ranks and the related Knowledge skill is named as Knowledge (nature).)",
    source: `${MN1} — Legend & Lore appendix: New Skills — Creature Lore (p. 209)`,
    sourceUrl: MN1_PATH,
  },
];
