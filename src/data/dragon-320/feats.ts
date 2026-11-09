// Dragon Magazine #320 (June 2004) — feats.
// Transcribed from the magazine text on archive.org
// (DragonMagazine320_djvu.txt); the Dragon Cohort sidebar was
// verified against the page image (magazine p. 49), and the
// Inspiring Leader bonus (+1) against the page image
// (magazine p. 100 — the OCR layer reads it as "H").
//
// Two feats stage:
//   * DRAGON COHORT (p. 49, "Fostered Dragons" sidebar): the
//     magazine itself notes the feat is reprinted from
//     Draconomicon p. 104. The catalog holds NO Draconomicon
//     record of the feat (no Draconomicon pack exists in the
//     catalog; the book is one of the unowned hardcovers), so
//     the magazine printing is the only source and stages
//     unsuffixed.
//   * INSPIRING LEADER (p. 100, "The Play's the Thing" by Mike
//     Mearls): new, no catalog record under the name. Its
//     teamwork pool system has no catalog mechanism and is
//     carried in full in reference.md.
// A third magazine feat does NOT stage: LEAST DRAGONMARK
// (p. 77, "Countdown to Eberron") is mechanically identical to
// the Eberron Campaign Setting record already in the catalog
// (id least-dragonmark) — same prerequisite, benefit, caster
// level formula, and save DC — so the magazine printing is
// held to reference.md under the identical-reprint precedent.
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { FeatDefinition } from "@/engine/types";

const DM320_FD = "Dragon Magazine #320 — Fostered Dragons";
const DM320_PT = "Dragon Magazine #320 — The Play's the Thing";
const URL320 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine320_djvu.txt";

export const DRAGON_320_FEATS: FeatDefinition[] = [
  {
    id: "dragon-cohort",
    name: "Dragon Cohort",
    category: "general",
    ruleset: "core",
    source: DM320_FD,
    sourceUrl: URL320,
    prerequisites: ["Character level 9th", "Speak Language (Draconic)"],
    benefitSummary:
      "You gain the service of a loyal dragon ally: you gain a cohort selected from the Draconic Cohorts table (printed in the same article, pp. 47-48, and reproduced in full in the pack reference), just as you would by selecting the Leadership feat. However, you may treat the dragon's ECL as if it were 3 lower than indicated.",
    special:
      "This feat is reprinted from page 104 of the Draconomicon; it is staged from the magazine printing because the catalog holds no Draconomicon record of it.",
  },
  {
    id: "inspiring-leader",
    name: "Inspiring Leader",
    category: "general",
    ruleset: "core",
    source: DM320_PT,
    sourceUrl: URL320,
    prerequisites: ["Cha 13", "Leadership", "Character level 6th"],
    benefitSummary:
      "You gain a +1 bonus to your Leadership score for purposes of the Leadership feat (see page 106 of the Dungeon Master's Guide). You can also establish a teamwork pool (the teamwork pool rules and the nine purchasable teamwork abilities are carried in full in the pack reference).",
  },
];
