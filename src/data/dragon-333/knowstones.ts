// Dragon Magazine #333 — magic item draft (family generation): the TEN
// printed sample knowstones from "Class Acts: Knowstones" (Joshua Cole),
// p. 93, generated as individual records beside the live base `knowstone`
// record (src/data/dragon-333/magic-items.ts), in that file's exact house
// shape. The pack (issue-333 SCREENING.md, "Knowstone family") staged one
// base record carrying the pricing formula and flagged the generated
// family for Shaun's call; the call has now been given.
// Grounding: each sample's spell and price are printed in the article and
// transcribed in the issue-333 pack reference.md ("Knowstone samples").
// The mechanism text follows the live base record. The article prints no
// per-sample aura or caster level (the base record carries none either),
// so none is stated. Prices are as printed — spell level squared ×
// 1,000 gp plus the cost of expensive material components/focuses where
// the formula adds them (0-level: 500 gp total).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_KNOWSTONE = "Dragon Magazine #333 — Class Acts: Knowstones (Joshua Cole), p. 93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_KNOWSTONE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

const MECHANISM =
  "A semi-precious stone worth at least 50 gp, set in a piece of jewelry and inscribed with the spell named above. A knowstone occupies no body slot (it may be affixed to another item); to use it, the stone's wearer must wear it for 24 hours to attune it to himself. Thereafter, the bearer of the knowstone can cast the inscribed spell exactly as if he knew the spell himself, expending his own spell slots — the inscribed spell must be on the bearer's spell list and he must be capable of casting spells of its level. Creation requires Craft Wondrous Item and takes 1 day per 1,000 gp of the base price; creating one costs XP equal to 1/25 of the base price and raw materials equal to one-half the base price. (One of the printed sample knowstones, Dragon #333, p. 93; the base knowstone record carries the general pricing formula.)";

export const DRAGON_333_KNOWSTONE_SAMPLES: MagicItemDefinition[] = [
  M({
    id: "knowstone-of-disrupt-undead",
    name: "Knowstone of Disrupt Undead",
    cost: "500 gp",
    summary: "Knowstone of a 0-level spell (disrupt undead), priced as printed at 500 gp total. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-identify",
    name: "Knowstone of Identify",
    cost: "1,100 gp",
    summary: "Knowstone of a 1st-level spell (identify), priced as printed at 1,100 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-acid-arrow",
    name: "Knowstone of Melf's Acid Arrow",
    cost: "4,000 gp",
    summary: "Knowstone of a 2nd-level spell (Melf's acid arrow), priced as printed at 4,000 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-lightning-bolt",
    name: "Knowstone of Lightning Bolt",
    cost: "9,000 gp",
    summary: "Knowstone of a 3rd-level spell (lightning bolt), priced as printed at 9,000 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-stoneskin",
    name: "Knowstone of Stoneskin",
    cost: "16,250 gp",
    summary: "Knowstone of a 4th-level spell (stoneskin), priced as printed at 16,250 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-feeblemind",
    name: "Knowstone of Feeblemind",
    cost: "25,000 gp",
    summary: "Knowstone of a 5th-level spell (feeblemind), priced as printed at 25,000 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-programmed-image",
    name: "Knowstone of Programmed Image",
    cost: "36,025 gp",
    summary: "Knowstone of a 6th-level spell (programmed image), priced as printed at 36,025 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-reverse-gravity",
    name: "Knowstone of Reverse Gravity",
    cost: "49,000 gp",
    summary: "Knowstone of a 7th-level spell (reverse gravity), priced as printed at 49,000 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-clone",
    name: "Knowstone of Clone",
    cost: "65,500 gp",
    summary: "Knowstone of an 8th-level spell (clone), priced as printed at 65,500 gp. " + MECHANISM,
  }),
  M({
    id: "knowstone-of-disjunction",
    name: "Knowstone of Mordenkainen's Disjunction",
    cost: "81,000 gp",
    summary: "Knowstone of a 9th-level spell (Mordenkainen's disjunction), priced as printed at 81,000 gp. " + MECHANISM,
  }),
];
