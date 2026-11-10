// Dragon Magazine #326 (December 2004) — feat draft: 6 feats.
// Blocks: "Heroic Feats: Chaos Feats" (Julian Neale), p. 80 — the issue's four anarchic
// feats; and the "Sewer Feats" sidebar of "Down the Drain" (Chris DeKalb and Jacob
// Stammann), p. 55 — two feats the program survey had marked reference-only with the
// article; they are fully record-shaped and stage per the standing full-text rule (see
// MANIFEST). Anarchic feats follow the issue-325 bloodline house style: the feat
// category union has no "anarchic" value, so they stage as category "general" with the
// benefitSummary prefixed "[Anarchic feat.] ". The two sewer feats print no type tag
// and stage as plain general feats. All six were verified against rendered page images.

import type { FeatDefinition } from "@/engine/types";

const SRC_CHAOS = "Dragon Magazine #326 — Heroic Feats: Chaos Feats (Julian Neale), p. 80";
const SRC_SEWER = "Dragon Magazine #326 — Down the Drain: Sewer Feats (Chris DeKalb and Jacob Stammann), p. 55";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const ANARCHIC_SPECIAL =
  "Anarchic feats are supernatural in nature and can be gained only by an intelligent character of chaotic alignment who wholeheartedly embraces a chaotic lifestyle, and only as a gift from a powerful agent of chaos (a deity, demon, eladrin, slaad, or similar creature), with the DM's permission; in some cases a ritual must be performed. A character with at least one anarchic feat radiates an aura of chaos with a power equal to his character level (see the detect chaos spell), as if he were a cleric of a chaotic deity.";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_CHAOS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_326_FEATS: FeatDefinition[] = [
  // ---- Heroic Feats: Chaos Feats (anarchic feats) ----
  F({
    id: "chaos-music",
    name: "Chaos Music",
    prerequisites: ["Perform 4 ranks", "Bardic music ability"],
    benefitSummary:
      "[Anarchic feat.] Your effective bard level increases by +4 for the purposes of determining which bardic music abilities you can use. This feat can't increase your effective bard level beyond your Hit Dice; however, if you can't benefit from the full bonus immediately but later gain non-bard Hit Dice, you may apply the rest of the bonus. This does not affect your spells per day or spells known — it only increases your effective bard level in regards to using your bardic music ability.",
    special: ANARCHIC_SPECIAL,
  }),
  F({
    id: "chaos-rage",
    name: "Chaos Rage",
    prerequisites: ["Intimidate 4 ranks", "Ability to enter a rage"],
    benefitSummary:
      "[Anarchic feat.] Your effective barbarian level increases by +4 for the purposes of your rage ability. This feat can't increase your effective barbarian level beyond your Hit Dice; however, if you can't benefit from the full bonus immediately but later gain nonbarbarian Hit Dice, you may apply the rest of the bonus. This does not affect your trap sense, uncanny dodge, or any other barbarian class feature — it only increases your effective barbarian level in regards to using your rage ability.",
    special: ANARCHIC_SPECIAL,
  }),
  F({
    id: "flexible-mind",
    name: "Flexible Mind",
    prerequisites: [],
    benefitSummary:
      "[Anarchic feat.] Choose two skills you have ranks in. The chosen skills are always considered class skills for you. In addition, you receive a +1 bonus on all checks involving these skills. (No prerequisites are printed for this feat.)",
    special: ANARCHIC_SPECIAL,
  }),
  F({
    id: "wild-touch",
    name: "Wild Touch",
    prerequisites: ["Use Magic Device 8 ranks"],
    benefitSummary:
      "[Anarchic feat.] When determining the effect produced by a magic item that requires a random roll, you may roll twice and choose the result you prefer. When determining the effect produced by a magic deck of cards that requires a random draw, you may draw two cards at a time and choose the card you prefer (the other card is shuffled back into the deck as if it were not drawn). If you cause a mishap when attempting to read a scroll, you can choose which of two possible mishaps actually occurs. In all three cases, the DM should explain the choices to the player. You may only use the effects of this feat once per day.",
    special: ANARCHIC_SPECIAL,
  }),
  // ---- Down the Drain: Sewer Feats (no type tag printed) ----
  F({
    id: "strong-stomach-326",
    name: "Strong Stomach",
    source: SRC_SEWER,
    prerequisites: [],
    benefitSummary:
      "You gain a +4 bonus on all saving throws made against any extraordinary, supernatural, or spell-like nauseating or scent-based attack, such as a ghast's stench ability or stinking cloud. (No prerequisite is printed for this feat, and no feat type tag is printed for either sewer feat.)",
  }),
  F({
    id: "tunnel-rat",
    name: "Tunnel Rat",
    source: SRC_SEWER,
    prerequisites: ["Escape Artist 4 ranks"],
    benefitSummary:
      "When squeezing (see Player's Handbook, page 148), each space counts as 1 square of movement and you only suffer a −2 penalty on attack rolls.",
    special:
      "Normal: Squeezing causes spaces to count as 2 squares and the squeezing character suffers a −4 penalty on attack rolls.",
  }),
];
