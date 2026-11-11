// Dragon Magazine #352 (February 2007) — feat draft: 1 record.
// SLAVE SEEKER — "Class Acts: Warrior — Burning Gauntlet Sisterhood"
// (Richard Farrese), sidebar, p. 99. The issue's only printed feat.
// Its prerequisite is an affiliation score in the Burning Gauntlet
// Sisterhood, an anti-slavery fighting company whose full affiliation
// block (type, scale, criteria, titles, executive powers) is carried
// in reference.md; the feat stages because it is a complete,
// self-contained record whose prerequisite names the affiliation
// exactly as the affiliation system prints it.
// Verified against the rendered page image (magazine p. 99); the
// image governs over the OCR stream. The sidebar prints no feat-type
// tag; the record carries the house default category "general" and
// no invented tag in its text.

import type { FeatDefinition } from "@/engine/types";

const SRC_WARRIOR = "Dragon Magazine #352 — Class Acts: Warrior — Burning Gauntlet Sisterhood (Richard Farrese), p. 99";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_WARRIOR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_352_FEATS: FeatDefinition[] = [
  F({
    id: "slave-seeker",
    name: "Slave Seeker",
    prerequisites: ["Affiliation score 8 or higher in the Burning Gauntlet Sisterhood"],
    benefitSummary:
      "You are adept at locating slavers, slave owners, and others who support slavery. Prerequisites: Affiliation score 8 or higher in the Burning Gauntlet Sisterhood. Benefit: Gather Information is always a class skill for you. You also gain a +4 insight bonus on Gather Information checks made to locate slaves, slavers, slave owners, or an organization that actively supports slavery.",
  }),
];
