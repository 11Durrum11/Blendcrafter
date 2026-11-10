// Dragon Magazine #326 (December 2004) — flaw draft: "Class Acts: Flaws for Clerics"
// (Richard Pocklington), p. 91. Typed FlawTraitDefinition records in the house shape of
// recent packs (issue-325 flaws precedent). The program survey did not itemize this
// column; the issue's full text governs and all seven flaws stage (see MANIFEST). All
// seven were verified against the rendered page image (magazine p. 91). Standing flaw
// rules carried in MANIFEST, not per record: a character may take up to two flaws, flaws
// are selected at 1st level, and each flaw taken grants an additional feat. Although
// designed for clerics, other characters may select these flaws if they meet the
// prerequisites, as printed.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #326 — Class Acts: Flaws for Clerics (Richard Pocklington), p. 91";
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

export const DRAGON_326_FLAWS: FlawTraitDefinition[] = [
  F({
    id: "aligned-devotion",
    name: "Aligned Devotion",
    prerequisite: "Ability to spontaneously cast cure spells.",
    summary: "Your healing spells have reduced effect on those who do not share your alignment: full benefit only for exactly your alignment, half hit points cured within one step, and no benefit beyond one step.",
    description:
      "Your spells of the healing subschool have reduced effect on those who do not share your alignment. Those that have exactly the same alignment as you gain full benefit from your healing. Those with an alignment within one step of yours are cured half the normal amount of hit points from your healing spells. Characters with alignments more than one step different from yours gain no benefit from your healing at all. Your cure spells still deal full damage to undead.",
  }),
  F({
    id: "divine-gestures",
    name: "Divine Gestures",
    prerequisite: "Ability to cast divine spells.",
    summary: "You suffer a spell failure chance (due to armor, shields, or anything else which causes arcane spell failure) when casting divine spells, just as if they were arcane spells.",
    description:
      "Your religious rites require elaborate gestures that cause you difficulty when casting divine spells while wearing armor or using a shield. You suffer a spell failure chance (due to armor, shields, or anything else which causes arcane spell failure) when casting divine spells, just as if they were arcane spells.",
  }),
  F({
    id: "domain-devotion",
    name: "Domain Devotion",
    prerequisite: "Access to domains.",
    summary: "You choose and have access to only one of your deity's domains.",
    description:
      "You choose and have access to only one of your deity's domains. You may gain prestige domains from a prestige class as usual.",
  }),
  F({
    id: "living-faith",
    name: "Living Faith",
    prerequisite: "Ability to turn or rebuke undead.",
    summary: "You lose the ability to turn or rebuke undead.",
    description:
      "You lose the ability to turn or rebuke undead. This does not extend to any other creatures a domain might grant you the ability to turn or rebuke, such as earth elementals for a cleric with the Air domain (example as printed).",
  }),
  F({
    id: "material-devotion",
    name: "Material Devotion",
    prerequisite: "Access to domains.",
    summary: "You may only use spell-trigger items (wands and staffs) that cast spells on your domain spell lists; other spell-trigger items fail in your hands.",
    description:
      "You may only use spell-trigger items (wands and staffs) that cast spells on your domain spell lists. Other spell-trigger items fail in your hands.",
  }),
  F({
    id: "ponderous-spellcaster",
    name: "Ponderous Spellcaster",
    prerequisite: "Ability to cast spells.",
    summary: "The casting time of all your spells is doubled: a single action becomes a full-round action, and a free action becomes a standard action.",
    description:
      "The casting time of all your spells is doubled. Spells that normally require a single action to cast require a full-round action to cast instead. Spells that normally require a free action to cast now require a standard action to cast instead.",
  }),
  F({
    id: "weapon-bound",
    name: "Weapon Bound",
    prerequisite: "Devotion to a specific deity.",
    summary: "You lose proficiency with all weapons except the favored weapon of your deity; this flaw does not grant proficiency with that weapon.",
    description:
      "You lose proficiency with all weapons except the favored weapon of your deity. This flaw does not grant you proficiency with that weapon.",
  }),
];
