// Dragon #324 — feats, staged 2026-11-09.
//
// "Heroic Feats: Racial Feats" by Nick Simmonds (p. 78; all ten feats
// page-image verified on the single article page). Racial feats print
// with the [Racial] tag; following the catalog's Book of Exalted Deeds
// precedent for tag-type feats, they stage with category "general" and
// the tag rules carried in each record's `special` field. The
// article's governing rule (printed above the feats): a character may
// have only one racial feat, selected at 1st level, and a fighter
// cannot use his 1st-level fighter bonus feat to gain one.
// Etch Rune comes from "Silicon Sorcery: Gothic II" (pp. 22-29); its
// rune mechanics are summarized in the feat and reference.md. It is a
// different feat from the Forgotten Realms Inscribe Rune record
// (different prerequisite and pricing) — both stand.
//
// Print flag: Innate Magic's prerequisite genuinely prints
// "Int 3, Cha 11" (page image verified) — staged as printed.

import type { FeatDefinition } from "@/engine/types";

const SRC78 = "Dragon Magazine #324 — Heroic Feats: Racial Feats (Nick Simmonds), p. 78";
const SRCSS = "Dragon Magazine #324 — Silicon Sorcery: Gothic II, pp. 22-29";
const URL = "https://archive.org/details/DragonMagazine260_201801";
const RACIAL = "Racial feat: A character may have only one racial feat, selected at 1st level. A fighter cannot use his 1st-level fighter bonus feat to gain a racial feat.";

function R(o: Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">): FeatDefinition {
  return {
    category: "general",
    ruleset: "core",
    prerequisites: ["Must be taken at 1st level"],
    source: SRC78,
    sourceUrl: URL,
    special: RACIAL,
    ...o,
  } as FeatDefinition;
}

export const DRAGON_324_FEATS: FeatDefinition[] = [
  R({
    id: "human-blood",
    name: "Human Blood",
    prerequisites: ["Partial human ancestry (such as half-elf or half-orc)", "Must be taken at 1st level"],
    benefitSummary: "You gain 1 extra skill point at 1st level and 1 additional skill point every level thereafter, and you are considered a human for all effects relating to race.",
  }),
  R({
    id: "innate-magic",
    name: "Innate Magic",
    prerequisites: ["Int 3", "Cha 11", "Must be taken at 1st level"],
    benefitSummary: "Select a 0-level spell. Once per day you may cast that spell as a spell-like ability, as a 1st-level caster; the saving throw DC, if any, is 10 + your Charisma modifier.",
  }),
  R({
    id: "slender",
    name: "Slender",
    benefitSummary: "You get a +1 racial bonus on Disable Device, Escape Artist, Move Silently, and Tumble checks, and your weight decreases by 10%.",
  }),
  R({
    id: "slow-maturation",
    name: "Slow Maturation",
    prerequisites: ["Must be taken at 1st level", "Must be younger than middle age"],
    benefitSummary: "It takes you 50% longer than normal for your race to reach the next age category.",
  }),
  R({
    id: "stocky",
    name: "Stocky",
    benefitSummary: "You get a +4 bonus on ability checks made to resist being bull rushed or tripped while standing on the ground (this stacks with the stability racial feature possessed by dwarves), and your weight increases by 10%.",
  }),
  R({
    id: "superior-hearing",
    name: "Superior Hearing",
    benefitSummary: "You get a +1 bonus on Listen checks and a +1 bonus on Perform (keyboard instruments), Perform (percussion instruments), Perform (stringed instruments), Perform (wind instruments), and Perform (sing) checks.",
  }),
  R({
    id: "superior-sense-of-smell",
    name: "Superior Sense of Smell",
    benefitSummary: "You get a +1 bonus on Craft (alchemy) and Heal checks, and a +2 bonus on Survival checks.",
  }),
  R({
    id: "superior-taste",
    name: "Superior Taste",
    benefitSummary: "You get a +3 bonus on Spellcraft checks to identify a potion and a +3 bonus on Fortitude saves to resist ingested poison.",
  }),
  R({
    id: "superior-touch",
    name: "Superior Touch",
    benefitSummary: "You get a +1 bonus on Disable Device, Open Lock, and Sleight of Hand checks, and a +2 bonus on Spot checks to pinpoint the location of an invisible creature.",
  }),
  R({
    id: "superior-vision",
    name: "Superior Vision",
    benefitSummary: "You gain low-light vision; if you already possess low-light vision, you can see three times as far as a human in conditions of poor illumination.",
    special: `${RACIAL} Normal: A creature with low-light vision can see twice as far as a human in conditions of poor illumination.`,
  }),
  {
    id: "etch-rune",
    name: "Etch Rune",
    category: "item-creation",
    ruleset: "core",
    prerequisites: ["Scribe Scroll"],
    benefitSummary: "You can create a rune of any spell you know. A rune's base price is its spell level × its caster level × 75 gp; scribing takes 1 day for each 1,000 gp in its base price, costs XP equal to 1/25 of the base price, and consumes raw materials costing half the base price. The holder activates a rune as a standard action by speaking its command word, and the rune disappears once used.",
    source: SRCSS,
    sourceUrl: URL,
  },
];
