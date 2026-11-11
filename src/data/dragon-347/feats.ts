// Dragon Magazine #347 (September 2006) — feat draft: 4 records.
// All four are the "Archaeologist Feats" of "Class Acts: Archaeologists"
// (Peter von Bleichert), p. 89: Chronicle [General], Find Relic
// [General], Relicguard Spell [Metamagic], Trap Mastery [General].
// The program survey named NO feats in this issue ("feats ~0 named") —
// this column is one of the survey's Class Acts blind spots, the same
// pattern as #327/#329/#331.
// Verified against the rendered page image (magazine p. 89); the image
// governs over the OCR stream — it corrects the OCR twice: Chronicle's
// special Appraise check is DC 20 (OCR read DC 10), and its affiliation
// sidebar cites Player's Handbook II, p. 163.
// HELD, not in this file: Corrupt Summoning [Vile], a new feat printed
// in a sidebar of "Archomentals" (p. 32) — held to reference.md §2.5
// under the summoning screening and flagged in SCREENING.md; its full
// printed text is transcribed there for a one-step lift.
// The FeatCategory union carries the printed tags in the benefit text
// where needed, per house practice. Relicguard Spell prints NO spell
// level adjustment — carried as printed and disclosed on the record
// and in MANIFEST.md (an evident print omission; not silently fixed).

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #347 — Class Acts: Archaeologists (Peter von Bleichert), p. 89";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_347_FEATS: FeatDefinition[] = [
  F({
    id: "chronicle",
    name: "Chronicle",
    prerequisites: ["Int 13", "Appraise 4 ranks", "Ability to cast arcane spells"],
    benefitSummary:
      "[General.] You can accurately discern the date of an art object and sell it to a proper establishment for a higher-than-normal rate. Benefit: You gain a +1 bonus on Appraise checks. By succeeding at a DC 20 Appraise check, you can discern the approximate age of a nonmagical art object (any treasure that isn't coins, gems, or jewelry). If you succeed at this check, you may sell the item to a college, museum, school, or university for more than its actual value, depending on the age of the item: less than 100 years, no extra value; 100-199 years, +1%; 200-499 years, +5%; 500-999 years, +10%; 1,000-1,999 years, +15%; 2,000+ years, +20%. You may only attempt the special Appraise check once. You must sell the item to an academic institution, and not to an individual, merchant, or shop. Your DM might adjust the listed years to better match the age of his campaign world. Special: If you belong to an affiliation (Player's Handbook II, page 163) that is an academic institution (a college, museum, school, or university), you may instead sell items at the normal amount to gain a +1 to your affiliation Score for every 2,000 gp you forgo (to a maximum of +10).",
  }),
  F({
    id: "find-relic",
    name: "Find Relic",
    prerequisites: ["Ability to cast locate object"],
    benefitSummary:
      "[General.] You possess an uncanny ability to find lost treasures. Benefit: Whenever you pass within 10 feet of an item or object worth more than 1,000 gp you are entitled to a Search check to notice it as if you were actively looking for it.",
  }),
  F({
    id: "relicguard-spell",
    name: "Relicguard Spell",
    category: "metamagic",
    benefitSummary:
      "[Metamagic.] Your spells do not damage objects. Benefit: A relicguarded spell has no effect on objects. It cannot target an object and any object caught within its area is immune to its effects, even if a creature holding the item is affected. Creatures immune to spells that do not affect objects (such as constructs and undead) are also immune to a relicguarded spell. As printed, the feat states no spell level adjustment; none has been invented for this record — see the pack's MANIFEST.md.",
  }),
  F({
    id: "trap-mastery",
    name: "Trap Mastery",
    prerequisites: ["Knowledge (architecture and engineering) 9 ranks", "Investigator or Nimble Fingers"],
    benefitSummary:
      "[General.] You are adept at locating, disabling, and evading traps. Benefit: You gain a +1 bonus on Disable Device and Search checks made to locate and disable traps. In addition, you gain a +1 bonus on all saving throws made to avoid the ill effects of traps.",
  }),
];
