// Dragon Magazine #328 (February 2005) — trait draft: "Class Acts: Peripheral Beliefs"
// (Erik Seligman), p. 86. Typed FlawTraitDefinition records with kind "trait".
// The article presents five sample peripheral beliefs for clerics: a cleric may choose
// up to two of them, and if a cleric violates a belief for any reason he loses its
// benefit until he receives an atonement spell. Each belief pairs a Restriction with a
// Benefit; both are carried in the record's description. These are NOT flaws (no feat
// is granted) and NOT a class variant — they are optional add-on beliefs, so they stage
// in the flaws/traits barrel as traits with the Cleric gate as prerequisite; the shared
// framework rule is restated at the end of each description so every record stands
// alone. All five were verified against the rendered page image (magazine p. 86).

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #328 — Class Acts: Peripheral Beliefs (Erik Seligman), p. 86";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const FRAMEWORK =
  " Peripheral beliefs: a cleric may choose up to two peripheral beliefs; if he violates a belief for any reason, he loses its benefit until he receives an atonement spell.";

type TraitSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function T(seed: TraitSeed): FlawTraitDefinition {
  return {
    kind: "trait",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    prerequisite: "Cleric.",
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_328_TRAITS: FlawTraitDefinition[] = [
  T({
    id: "due-prayer",
    name: "Due Prayer",
    summary:
      "You must stop to pray at specific times of day while facing a specific direction; in return you can automatically discern true north as if you had 5 ranks in Survival (or gain a +2 bonus on all Survival checks if you already do).",
    description:
      "At specific times of day, you must perform a prayer while facing a specific direction. Restriction: You must stop to pray at the appropriate times, regardless of your current situation. Most deities require at least three 5-minute prayers each day (dawn, noon, and sunset), but stricter lawful deities may also require prayers at mid-morning and mid-afternoon. Benefit: Since you must always face the proper direction while praying, you can automatically discern true north as if you had 5 ranks in Survival. If you already have 5 ranks in Survival, you gain a +2 bonus on all Survival checks instead." +
      FRAMEWORK,
  }),
  T({
    id: "day-of-rest",
    name: "Day of Rest",
    summary:
      "Every seventh day you must refrain from all physical activity; in return you gain a +4 bonus on all saves against sleep effects and do not suffer a -10 penalty on Listen checks while asleep.",
    description:
      "Every seventh day, you must refrain from all physical activity, regardless of whether you are in town, on the road, or in the dungeon. Restriction: On the designated day, you cannot take attack actions, cast spells with somatic components, activate mechanical devices, or carry a load heavier than light. Benefit: Due to being especially well-rested, you gain a +4 bonus on all saves made against sleep effects and you do not suffer a -10 penalty when making Listen checks while asleep." +
      FRAMEWORK,
  }),
  T({
    id: "dietary-restriction",
    name: "Dietary Restriction",
    summary:
      "You believe a certain kind of food is unclean and may eat only food prepared by a devout follower of your religion; in return you gain a +1 bonus on Fortitude saves against poisons and diseases.",
    description:
      "You believe a certain kind of food — such as all meat from a certain kind of animal, or from any animal not slain in a specific way — is unclean. Any utensils or dishes used with unclean food themselves become unclean and taint any other food they touch. Restriction: Any food prepared by someone other than a devout follower of the religion, or any potion that is not created by the cleric, violates these standards of cleanliness. (A detect poison spell can detect these foods, since the cleric perceives such fare as spiritual poison.) Benefit: Due to the careful choice of foods, the cleric is especially healthy and gains a +1 bonus on Fortitude saves against poisons and diseases." +
      FRAMEWORK,
  }),
  T({
    id: "sacred-animal",
    name: "Sacred Animal",
    summary:
      "You consider a particular kind of animal sacred and cannot harm or impede one; in return, such animals instinctively avoid attacking you and you gain a +4 bonus on Charisma-based skill checks when interacting with them.",
    description:
      "You consider some particular kind of animal sacred, such as cats, cows, or birds. You cannot harm or impede a sacred animal in any way and you must attempt to prevent others from harming or impeding one. Restriction: You cannot attack the sacred creature, even in self-defense. If your allies choose to attack such a creature in self-defense, you must ensure the creature survives, such as binding its wounds once it goes unconscious. If your allies are the aggressors, you cannot cast beneficial spells on them for 24 hours after the combat ends. Benefit: Animals of the sacred kind feel a special affinity for you and instinctively avoid attacking you unless in self-defense or under magical compulsion (this benefit does not extend to your allies). In addition, you gain a +4 bonus on all Charisma-based skill checks when interacting with such creatures." +
      FRAMEWORK,
  }),
  T({
    id: "sacred-clothing",
    name: "Sacred Clothing",
    summary:
      "You must wear a particular item of clothing that takes up a magic item slot at all times, displayed and uncovered; the masterwork item (at least 25 gp) grants a +2 bonus on Charisma-based skill checks when dealing with other followers of your religion.",
    description:
      "You must wear some particular item of clothing that takes up a magic item slot, such as a head covering or a ceremonial glove, at all times. Restriction: Since the special clothing must be both worn and displayed as a show of devotion, you cannot cover up or remove it. This often means you must forego use of magic items that would be worn in that slot, and it might also cause you to commit violations of etiquette in social situations. Benefit: The special item of clothing is of masterwork quality and costs at least 25 gp. Wearing it grants you a +2 bonus on Charisma-based skill checks when dealing with other followers of your religion, and it may be enhanced using normal magic item creation rules. A set of armor or other item that grants you benefits cannot count as your sacred clothing." +
      FRAMEWORK,
  }),
];
