// Dragon Magazine #327 (January 2005) — flaw draft: "Class Acts: Flaws for Sorcerers"
// (Richard Pocklington), p. 93. Typed FlawTraitDefinition records in the house shape of
// recent packs (issue-326 flaws precedent — same author, same column series). The
// program survey did not itemize this column; the issue's full text governs and all
// five flaws stage (see MANIFEST). All five were verified against the rendered page
// image (magazine p. 93). Standing flaw rules carried in MANIFEST, not per record: a
// character may take up to two flaws, flaws must be selected at 1st level, and each
// flaw taken grants an additional feat. Although designed specifically with sorcerers
// in mind, other characters may select from these flaws if they meet the prerequisites,
// as printed.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #327 — Class Acts: Flaws for Sorcerers (Richard Pocklington), p. 93";
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

export const DRAGON_327_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "haunted-327",
    name: "Haunted",
    prerequisite: "Ability to cast spells.",
    summary: "Strange noises spontaneously arise in your immediate vicinity, out of your control: you suffer a −4 penalty on all Listen and Move Silently skill checks.",
    description:
      "You are unable to prevent the occurrence of strange noises in your immediate vicinity. Spontaneous noises sometimes arise around you; these noises are completely out of your control and cannot be used to communicate or distract other creatures. These sounds cease when you are unconscious, asleep, or dead. You suffer a −4 penalty on all Listen and Move Silently skill checks.",
  }),
  F({
    id: "loner",
    name: "Loner",
    prerequisite: "Ability to summon a familiar or animal companion.",
    summary: "You lose the ability to summon a familiar or gain an animal companion, and never gain the ability to gain a special companion by any class ability or feat.",
    description:
      "You do not have the ability to summon a familiar or gain an animal companion. You lose the ability to summon a familiar or gain an animal companion. You never gain the ability to gain a special companion, whether through animal companion, summon familiar, or some other class ability or feat. Possessing multiple classes that would grant you an animal companion or familiar does not negate the effects of this flaw.",
  }),
  F({
    id: "magical-overload",
    name: "Magical Overload",
    prerequisite: "Ability to cast spells.",
    summary: "You must use one spell slot of your highest spell level to cast or prepare a spell of a lower level, effectively losing one highest-level slot to gain one of a lower level.",
    description:
      "You have difficulty controlling your most powerful magic, being more comfortable with more familiar, lower-level spells. You must use one spell slot of your highest spell level to cast or prepare a spell of a lower level. This spell slot may be used to cast or prepare any spell of any level lower than your highest level, effectively causing you to lose one of your highest-level spell slots to gain one of a lower level. For example, a 6th-level sorcerer would lose the ability to cast one 3rd-level spell per day, but would gain the ability to cast one additional 0-, 1st-, or 2nd-level spell instead. This flaw always affects your highest spell level and changes the spell level it affects as you gain levels.",
  }),
  F({
    id: "phantom-sparks",
    name: "Phantom Sparks",
    prerequisite: "Ability to cast spells.",
    summary: "Your body occasionally emits bursts of bright colored light, out of your control: you suffer a −4 penalty on all Hide and Spot skill checks.",
    description:
      "Your body occasionally emits bursts of bright colored light. You spontaneously emit bursts of colored light; these lights are completely out of your control and cannot be used as a light source. They only cease when you are unconscious, petrified, asleep, or dead. You suffer a −4 penalty on all Hide and Spot skill checks.",
  }),
  F({
    id: "restricted-sorcery",
    name: "Restricted Sorcery",
    prerequisite: "Ability to cast spells without preparation.",
    summary: "Choose two schools of magic as restricted schools (not divination): you may not learn spells from them, nor use wands or scrolls that cast spells from them.",
    description:
      "Your magical powers manifest within a limited realm of effects. Choose two schools of magic to be your restricted schools. When you select spells to learn, you may not choose spells from these two restricted schools. In addition, you may not use wands or scrolls that cast spells from these restricted schools. You may not choose divination as one of your restricted schools.",
  }),
];
