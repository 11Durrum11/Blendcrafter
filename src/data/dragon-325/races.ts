// Dragon Magazine #325 (November 2004) — race draft: the lupin.
// Typed RaceDefinition in the house shape of recent packs (issue-324 grippli precedent):
// traits via the t() helper, racial skill bonuses in skillBonuses with conditionality
// spelled out in the trait text. The printed trait list (p. 87) contains NO ability-score
// adjustment and NO level-adjustment line — staged exactly as printed; see MANIFEST.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #325 — Winning Races: Lupin (Mike McArtor), pp. 84-87";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

// Trait helper in the live FeatureDefinition shape (key + source/sourceUrl baked in),
// matching the integrated dragon-324 races file.
function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_325_RACES: RaceDefinition[] = [
  {
    id: "lupin",
    name: "Lupin",
    size: "Medium",
    baseSpeed: 30,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: {},
    favoredClass: "Ranger",
    levelAdjustment: 0,
    skillBonuses: { listen: 2, ride: 2, survival: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "lupin-monstrous-humanoid",
        "Monstrous Humanoid",
        "As monstrous humanoids, lupins are immune to spells like charm person and hold person.",
      ),
      t(
        "lupin-darkvision",
        "Darkvision",
        "Lupins can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and lupins can function just fine with no light at all.",
      ),
      t(
        "lupin-acute-sense-of-smell",
        "Acute Sense of Smell",
        "A lupin's combined sense of smell and good memory for an odor she has previously encountered give her a sense similar to scent, but not automatic as that extraordinary ability is. The lupin automatically attempts a DC 10 Wisdom check to detect the presence of a lycanthrope within 30 feet, regardless of the lycanthrope's form. The normal scent modifiers apply to the DC for other creatures and effects: double the range if the lupin is downwind and halve the range if she is upwind. A lupin gains a +5 racial bonus on Spot checks made to oppose a known individual's Disguise check if that individual comes within 5 feet of her. When within 5 feet of an invisible or otherwise hidden creature, a lupin is entitled to a DC 20 Wisdom check to pinpoint the creature's location (the creature gains full concealment against her in any case). A lupin gains a +2 racial bonus on Survival checks made to follow tracks (carried in skillBonuses), although she cannot track by smell alone.",
      ),
      t(
        "lupin-odor-vulnerability",
        "Odor Vulnerability",
        "Because of their sensitive noses, lupins take a \u22122 penalty on all saving throws against attacks based on odor (such as a stinking cloud spell or a ghast's stench).",
      ),
      t(
        "lupin-expert-rider",
        "Expert Rider",
        "Lupins are natural equestrians and riders. Ride is always a class skill for a lupin. She also gets a +2 bonus on Ride checks (carried in skillBonuses).",
      ),
      t(
        "lupin-werewolf-foe",
        "Werewolf Foe",
        "A lupin gains a +1 bonus on attack rolls and on damage rolls against werewolves, whether the werewolf is in humanoid, hybrid, or animal form.",
      ),
      t(
        "lupin-keen-hearing",
        "Keen Hearing",
        "Lupins take pride in having the keenest hearing of any humanoid. A lupin gains a +2 racial bonus on Listen checks (carried in skillBonuses).",
      ),
      t(
        "lupin-shapechanger-hunter",
        "Shapechanger Hunter",
        "Lupin rangers may choose humanoid (shapechanger) as a favored enemy.",
      ),
      t(
        "lupin-languages",
        "Languages",
        "Automatic Languages: Common and Lupin. Bonus Languages: Elven, Gnoll, Gnome, Goblin, Halfling, Sylvan.",
      ),
    ],
  },
];
