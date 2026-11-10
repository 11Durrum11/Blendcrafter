// Dragon Magazine #325 (November 2004) — flaw draft: "Class Acts: Flaws for Barbarians" (p. 93).
// Typed FlawTraitDefinition records in the house shape of recent packs (issue-324 flaws
// precedent). Standing flaw rules carried in MANIFEST, not per record: a character may take
// up to two flaws, flaws are selected at 1st level, and each flaw taken grants an additional
// feat. Two of the seven differ from same-named D&D Wiki homebrew flaws already in the live
// catalog and stage as -325 variants (gullible-325, uncontrollable-rage-325); Gullible prints
// NO prerequisite and stages with the field omitted, exactly as printed.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #325 — Class Acts: Flaws for Barbarians (Richard Pocklington), p. 93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FlawSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function F(seed: FlawSeed): FlawTraitDefinition {
  return {
    kind: "flaw",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_325_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "blind-rage",
    name: "Blind Rage",
    prerequisite: "Rage ability.",
    summary: "While raging, you cannot end your rage voluntarily and must attack a creature every round if you are able — even an ally.",
    description:
      "You cannot end your rage voluntarily; you rage for the full duration and must attack a creature every round, if able. You can charge or move to attack another creature, and you may move to attack a foe rather than remain stationary and attack a friend. If no creatures are within sight, you must attack the nearest breakable object. Once per round on your turn, you may attempt a DC 15 Will save to stop attacking an ally; if foes later become visible, you may immediately switch targets.",
  }),
  F({
    id: "exhausting-rage",
    name: "Exhausting Rage",
    prerequisite: "Rage ability.",
    summary: "When your rage ends, you become exhausted for the duration of the encounter instead of fatigued.",
    description:
      "When your rage ends, you become exhausted (instead of fatigued) for the duration of the encounter. If you gain the tireless rage ability (as a 17th-level barbarian), you are instead fatigued after a rage ends.",
  }),
  F({
    id: "gullible-325",
    name: "Gullible",
    summary: "You take a \u22122 penalty on saving throws against enchantment and illusion spells and effects, and a \u22124 penalty on Sense Motive checks.",
    description:
      "You take a \u22122 penalty on saving throws against enchantment and illusion spells and effects. You also take a \u22124 penalty on Sense Motive checks. (No prerequisite is printed for this flaw.)",
  }),
  F({
    id: "quick-burning-rage",
    name: "Quick Burning Rage",
    prerequisite: "Rage ability.",
    summary: "Your rage lasts only a number of rounds equal to your newly improved Constitution modifier.",
    description: "Your rage lasts only a number of rounds equal to your newly improved Constitution modifier.",
  }),
  F({
    id: "slow-to-anger",
    name: "Slow to Anger",
    prerequisite: "Rage ability.",
    summary: "Entering a rage requires a full-round action.",
    description: "Entering a rage requires a full-round action.",
  }),
  F({
    id: "superstitious",
    name: "Superstitious",
    prerequisite: "Inability to cast spells.",
    summary:
      "Whenever you see an item, effect, or location obviously created by magic, you become frightened until you can no longer see it.",
    description:
      "Whenever you see an item, effect, or location obviously created by magic (by spell or by other means), you become frightened until you can no longer see it.",
  }),
  F({
    id: "uncontrollable-rage-325",
    name: "Uncontrollable Rage",
    prerequisite: "Rage ability.",
    summary:
      "You cannot enter a rage voluntarily; being wounded, grappled, or failing a save against a spell can force you into one unless you make a DC 15 Will save.",
    description:
      "You cannot enter a rage voluntarily. If during the previous round something dealt damage to you, grappled or immobilized you, or you failed a saving throw against a spell, you may enter a rage — and if you do not wish to, you must succeed at a DC 15 Will save or enter it involuntarily. You cannot rage more times per day than you are normally entitled to.",
  }),
];
