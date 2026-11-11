// Dragon Magazine #329 (March 2005) — flaw draft: "Flaws for Rangers"
// (Richard Pocklington), Class Acts, p. 95. Typed FlawTraitDefinition records
// in the house shape of the issue-327/328 flaws drafts (same author, same
// column series). SIX flaws print, all verified against the rendered page
// image; the image governs over the OCR stream.
// Standing flaw rules carried in MANIFEST, not per record: a character may
// take up to two flaws, flaws must be selected at 1st level, and each flaw
// taken grants an additional feat. As printed: "Although designed
// specifically with rangers in mind, other characters may select from these
// flaws if they meet the appropriate prerequisites."
// ID NOTE: the Foe Specialist flaw is staged as "foe-specialist-329" — the
// bare id "foe-specialist" is already carried by an unrelated Miniatures
// Handbook FEAT in the live catalog (see SCREENING.md).

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #329 — Class Acts: Flaws for Rangers (Richard Pocklington), p. 95";
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

export const DRAGON_329_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "beastly",
    name: "Beastly",
    prerequisite: "Wild empathy.",
    summary:
      "You are vulnerable to spells that affect animals (animal trance, calm animals, charm animal, dominate animal, hide from animals, hold animal) as well as those that affect your own creature type, and you suffer a -2 penalty on all Charisma-based skill checks except Disguise, Handle Animal, and Use Magic Device.",
    description:
      "You have more in common with beasts than you do with your own race. You are vulnerable to the following list of spells that affect animals, as well as those which affect your own creature type: animal trance, calm animals, charm animal, dominate animal, hide from animals, hold animal. Additionally, you suffer a -2 penalty on all Charisma-based skill checks except Disguise, Handle Animal, and Use Magic Device. Anyone observing your mannerisms who possesses the wild empathy class ability can recognize this flaw immediately.",
  }),
  F({
    id: "foe-specialist-329",
    name: "Foe Specialist",
    prerequisite: "Favored enemy.",
    summary:
      "You suffer a -1 penalty on attack rolls, Bluff, Sense Motive, Spot, and Survival checks made against creatures of any kind that isn't one of your favored enemies.",
    description:
      "Your training is so specialized that you have difficulty tracking, predicting, or otherwise interacting with those foes you have not studied in great detail. You suffer a -1 penalty on attack rolls, Bluff, Sense Motive, Spot, and Survival checks made against creatures of any kind that isn't one of your favored enemies.",
  }),
  F({
    id: "hatred",
    name: "Hatred",
    prerequisite: "Favored enemy.",
    summary:
      "You suffer a -4 penalty to your Armor Class and on attack rolls and skill checks whenever you are not engaged in melee combat with a favored enemy and a favored enemy is close enough that you could engage it.",
    description:
      "You are engulfed by a deep hatred of your chosen foes and you become insensibly enraged in their presence. You suffer a -4 penalty to your Armor Class and on attack rolls and skill checks whenever you are not engaged in melee combat with a favored enemy and a favored enemy is close enough that you could engage it.",
  }),
  F({
    id: "individualist",
    name: "Individualist",
    summary:
      "You suffer a -2 penalty on all attack rolls made using weapons that you have not personally crafted; in addition, the armor check penalty of any suit of armor you wear that you did not craft increases by +1.",
    description:
      "You are committed to a path that requires complete independence from others. You suffer a -2 penalty on all attack rolls made using weapons that you have not personally crafted. In addition, the armor check penalty of any suit of armor you wear that you did not craft increases by +1.",
  }),
  F({
    id: "terrain-specialist",
    name: "Terrain Specialist",
    prerequisite: "Track, wild empathy.",
    summary:
      "Choose one terrain type as your home terrain; in all other terrains you suffer a -2 penalty on wild empathy checks and on Search or Survival checks made to track, and you may only use camouflage and hide in plain sight in your chosen terrain.",
    description:
      "You were trained to use your abilities in only one type of environment and are uncomfortable and less competent in all others. Choose one terrain type (aquatic, desert, forest, hills, marsh, mountain, or plains). That is your home terrain, in which you are most comfortable. In all other terrains you suffer a -2 penalty on all wild empathy checks, as well as on Search or Survival checks made to track. You may only use your camouflage and hide in plain sight abilities in your chosen terrain.",
  }),
  F({
    id: "wild",
    name: "Wild",
    prerequisite: "Survival 1 rank.",
    summary:
      "Whenever you are entangled, pinned, or bound, you immediately become panicked; your fear is alleviated 1 round after you are free of all bonds, and spells and effects that remove fear do not prevent this effect.",
    description:
      "Accustomed only to a free life in the wild, you panic when captured or restrained. Whenever you are entangled, pinned, or bound, you immediately become panicked. Your fear is alleviated 1 round after you are free of all bonds. Spells and effects that remove fear do not prevent this effect.",
  }),
];
