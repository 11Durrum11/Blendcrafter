import type { MagicItemDefinition } from "@/engine/types";

// Spelljammer magic items (helms and wonders not already in
// the catalog from the 3e fan helm list), converted from AD&D
// 2e to 3.5 (Shaun, 2026-11-04). Source: Shaun's own copy of
// Spelljammer: Adventures in Space (Concordance of Arcane
// Space). The generic major/minor helm configurations are
// already in the catalog from the fan conversion (136
// records); this file holds the named helm type the fan set
// lacks. House style: short mechanical summaries written for
// this dataset; the book's text is not reproduced.

const CAS = "Spelljammer: Adventures in Space — Concordance of Arcane Space";
const SJ_PATH = "/A POC PC related/3.All to do with ships/spelljammer adventures in space.pdf";

export const SPELLJAMMER_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "series-helm",
    name: "Series Helm",
    category: "wondrous-slotless",
    cost: "—",
    summary: "A helm worked by two spellcasters in tandem instead of one - a newer arcane development alongside the standard major and minor helms. The pair together supply the ship's motive power and set its Ship's Rating. The Concordance names and describes the type but prints no price for it; the Arcane sell helms of all kinds and do not share how series helms are made.",
    source: `${CAS}, pp. 24-25 (converted to 3.5)`,
    sourceUrl: SJ_PATH,
    ruleset: "core",
  },
];
