// Dragon Magazine #318 (April 2004) — feats.
// Transcribed from the magazine text on archive.org
// (DragonMagazine318_djvu.txt).
//
// Only TWO feats from this issue are staged. The Oriental
// Adventures Update's 34 clan ancestor feats are NOT staged:
// they are held to reference.md in full under Shaun's
// 2026-11-09 removal order (all Oriental Adventures /
// oriental-themed material out — see MANIFEST.md). The issue's
// other feat groups resolve as follows: Graft Flesh (X Marks
// the Spot) is staged below; the Countdown to Eberron warforged
// preview prints five feats — Adamantine-Laced Body,
// Mithral-Laced Body, Improved Fortification, and Mithral
// Fluidity are effect-identical to catalog records and held to
// reference.md, and Improved Damage Reduction (absent from the
// catalog) is staged below.

import type { FeatDefinition } from "@/engine/types";

const DM318_X = "Dragon Magazine #318 — X Marks the Spot";
const DM318_EB = "Dragon Magazine #318 — Countdown to Eberron";
const URL318 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine318_djvu.txt";

export const DRAGON_318_FEATS: FeatDefinition[] = [
  {
    id: "graft-flesh",
    name: "Graft Flesh",
    category: "item-creation",
    ruleset: "core",
    source: DM318_X,
    sourceUrl: URL318,
    prerequisites: ["Heal 10 ranks"],
    benefitSummary:
      "You can create grafts (Fiend Folio, pages 210–211) of one type you select: aboleth, beholder, fiendish, illithid, maug, pirate, undead, or yuan-ti. You can also place a graft on an unwilling victim, who must be helpless or willing for the procedure — a 1-hour medicinal and surgical procedure during which the victim must remain alive; the DM determines its success for unwilling victims. Multiple applications: you can gain this feat multiple times, choosing a new graft type each time. (Dragon #318 reprints this Fiend Folio feat to add the pirate graft type.)",
  },
  {
    id: "improved-damage-reduction",
    name: "Improved Damage Reduction",
    category: "race-specific",
    ruleset: "eberron",
    source: DM318_EB,
    sourceUrl: URL318,
    prerequisites: ["Warforged"],
    benefitSummary:
      "If you have damage reduction from a source other than this feat, this feat increases that damage reduction by 1. Otherwise, you gain damage reduction 1/adamantine. Multiple applications: you can gain this feat multiple times; its effects stack if applied to the same type of damage reduction.",
  },
];
