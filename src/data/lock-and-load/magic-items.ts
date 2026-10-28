/**
 * Lock & Load: Iron Kingdoms Character Primer magic items pack: the
 * one item Lock & Load itself labels a magic item, converted in
 * Batch 10 of the "everything" program. Ruleset: iron_kingdoms.
 * The book's mundane Gobber Poncho is in the pack's equipment file;
 * this coat, woven from three of those ponchos, is printed in the
 * same stat line explicitly marked "(magic item)".
 */
import type { MagicItemDefinition } from "@/engine/types";

const LL = "Lock & Load: Iron Kingdoms Character Primer";
const LL_PATH =
  "/transfer/DnD-3.5/10936572-Privateer-Iron-Kingdoms-Lock-Load.pdf";

export const LOCK_AND_LOAD_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "robe-of-gobberkind",
    name: "Robe of Gobberkind",
    category: "wondrous-item",
    cost: "1,000+ gp",
    summary:
      "A coat woven from three gobber ponchos by a knowledgeable wizard of 9th level or higher (the book calls it a coat of gobberkind in the text and a Robe of Gobberkind in the stat line). Unlike an ordinary gobber poncho, it functions for non-gobbers, granting the wearer a +4 circumstance bonus to Hide and Move Silently checks. Weight 3 pounds.",
    source: `${LL} p. 57`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
];
