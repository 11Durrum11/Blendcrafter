// Dragon Magazine #333 (July 2005) — flaw draft: "Flaws for
// Wizards" (Richard Pocklington), Class Acts, p. 94. Typed
// FlawTraitDefinition records in the house shape of the
// issue-327/328/329 flaws drafts (same author, same column series —
// the series ran sorcerers #327, clerics #328, rangers #329,
// wizards here). SIX flaws print.
// Standing flaw rules carried in MANIFEST, not per record: a
// character may take up to two flaws, flaws must be selected at
// 1st level, and each flaw taken grants an additional feat. As
// printed: "Although designed specifically with wizards in mind,
// other characters may select from these flaws if they meet the
// appropriate prerequisites."
// Texts verified against the magazine text; 3.5 check clean (no
// 3.0-era names or mechanics). See SCREENING.md.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #333 — Class Acts: Flaws for Wizards (Richard Pocklington), p. 94";
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

export const DRAGON_333_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "arcane-fatigue",
    name: "Arcane Fatigue",
    prerequisite: "Ability to cast arcane spells.",
    summary:
      "Casting arcane spells leaves you vulnerable to exhaustion. You must make a Fortitude save (DC 10 + spell level) every time you successfully cast an arcane spell or become fatigued.",
    description:
      "Casting arcane spells leaves you vulnerable to exhaustion. You must make a Fortitude save (DC 10 + spell level) every time you successfully cast an arcane spell. On a failed save you become fatigued. If you are already fatigued (by this or any other effect), then you suffer no additional effect from this flaw — this flaw becomes self-limiting, because a fatigued character cannot easily become exhausted by it.",
  }),
  F({
    id: "arcane-parasites",
    name: "Arcane Parasites",
    prerequisite: "Ability to cast arcane spells.",
    summary:
      "A magical parasite in your body siphons the arcane energy of your spells. Every arcane spell you cast has its save DC lowered by 1; the parasites cannot be removed by any mortal means (even a miracle or wish).",
    description:
      "A magical parasite hatches in your body and siphons the arcane energy that is pent up in your spells. Every arcane spell you cast has its save DC lowered by 1. These parasites cannot be removed by any mortal means (even a miracle or wish).",
  }),
  F({
    id: "forlorn",
    name: "Forlorn",
    prerequisite: "Ability to call a familiar.",
    summary:
      "You lose the ability to call a familiar.",
    description:
      "You lose the ability to call a familiar.",
  }),
  F({
    id: "methodical-magical-methods",
    name: "Methodical Magical Methods",
    prerequisite: "Ability to cast spells.",
    summary:
      "You have trouble regaining your composure after casting a spell. In any round in which you cast a spell you are considered flat-footed, with an effective Dexterity modifier of 0 (-5 penalty to AC), and you may not cast defensively.",
    description:
      "You have trouble regaining your composure after casting a spell. In any round in which you cast a spell you are considered flat-footed, with an effective Dexterity modifier of 0 (-5 penalty to AC). Furthermore, you may not use the ability to cast defensively.",
  }),
  F({
    id: "short-of-breath",
    name: "Short of Breath",
    prerequisite: "Constitution 13 or lower.",
    summary:
      "Whenever you must make a Strength check, a Constitution check to continue running, or a Climb, Jump, or Swim check, you also must make a Fortitude save (against the same DC) or become fatigued.",
    description:
      "Whenever you must make a Strength check, a Constitution check to continue running, or a Climb, Jump, or Swim check, you also must make a Fortitude save (against the same DC) or become fatigued. Normal: The above-mentioned actions do not normally carry any risk of fatigue, and becoming fatigued does not normally risk becoming exhausted.",
  }),
  F({
    id: "test-subject",
    name: "Test Subject",
    summary:
      "You suffer a -2 penalty on saving throws against spells and spell-like abilities from three schools of magic chosen from conjuration, enchantment, evocation, illusion, necromancy, and transmutation.",
    description:
      "You suffer a -2 penalty on saving throws against spells and spell-like abilities from three schools of magic. The three schools are chosen when this flaw is selected, from the following list: conjuration, enchantment, evocation, illusion, necromancy, and transmutation.",
  }),
];
