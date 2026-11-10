// Dragon Magazine #328 (February 2005) — feat draft: 1 feat.
// "Silicon Sorcery: God of War," pp. 68-69 — beneath the anarch razors artifact
// weapon (staged in magic-items-draft.ts), the article prints exactly ONE new feat,
// Heads Up [General]. The program survey estimated ~4 feats for the issue and ~8
// Silicon Sorcery items; the article prints one feat and one artifact (see MANIFEST).
// Verified against the rendered page image (magazine p. 69).

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #328 — Silicon Sorcery: God of War, p. 69";
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

export const DRAGON_328_FEATS: FeatDefinition[] = [
  F({
    id: "heads-up",
    name: "Heads Up",
    prerequisites: ["Spell-like abilities or ability to cast arcane or divine spells"],
    benefitSummary:
      "[General.] You are capable of using the gaze attacks of a slain creature: if you grasp the severed head of a creature with a gaze supernatural ability (such as the petrifying gaze of a medusa) within 1 hour of the creature being slain, you may use that creature's head to employ the slain creature's gaze supernatural ability as a standard action up to three times during the next 24 hours. After that time the head is rendered useless. Retrieving the head from a slain creature is a full-round action that provokes an attack of opportunity.",
  }),
];
