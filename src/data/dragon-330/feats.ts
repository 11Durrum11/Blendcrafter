// Dragon Magazine #330 (April 2005) — feat draft: 2 feats, both from
// Class Acts columns the program survey did not itemize as record-bearing.
// SPEAR MASTER [General] — "Class Acts: The Celtic Warrior" (Kieran
// Turley), p. 89, the article's single printed feat, under its "Celtic
// Feats" heading; the rest of the column is cultural flavor (see
// reference.md).
// KNIGHT TRAINING [General] — "Class Acts: Paladin by Night" (Joshua
// Cole), p. 91; the article names it "the Eberron Campaign Setting's
// Knight Training feat" and prints the full feat block. It is NOT in the
// live catalog (id sweep, 2026-11-10), so — unlike a reprint of an
// already-cataloged feat, which would go to reference — this one stages
// to fill the gap, with ruleset "eberron" recording its origin and the
// Dragon source on the record. Flagged in SCREENING.md.
// Both feat texts verified against the page text and rendered images.

import type { FeatDefinition } from "@/engine/types";

const SRC_CELTIC = "Dragon Magazine #330 — Class Acts: The Celtic Warrior (Kieran Turley), p. 89";
const SRC_PALADIN = "Dragon Magazine #330 — Class Acts: Paladin by Night (Joshua Cole), p. 91";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_CELTIC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_330_FEATS: FeatDefinition[] = [
  F({
    id: "spear-master",
    name: "Spear Master",
    benefitSummary:
      "[General.] You are a master close combat spear fighter. You may choose to wield a spear or shortspear as a double weapon. If you do, you may deal bludgeoning damage with the blunt end of the spear. If enchanted, only one end of the spear uses the enchantment's bonus. Special: A fighter may select Spear Master as one of his fighter bonus feats.",
  }),
  F({
    id: "knight-training",
    name: "Knight Training",
    source: SRC_PALADIN,
    ruleset: "eberron",
    benefitSummary:
      "[General.] You are part of a knightly order that combines the divine calling of the paladin class with another form of training. Pick one class. Taking levels in this class does not prevent you from taking paladin levels. If you take levels in any other class, you lose your ability to progress as a paladin as usual. If the selected class also has restricted advancement, such as the monk class, taking paladin levels does not prevent you from advancing in that class. (Printed in the Eberron Campaign Setting and reprinted here in full; the live catalog had no record of it, so it stages from this printing — see SCREENING.md.)",
  }),
];
