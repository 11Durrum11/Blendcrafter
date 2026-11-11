// Dragon Magazine #351 (January 2007) — equipment draft: 6 records.
// ONE Dark Sun weapon — the issue's Dark Sun article (Chris Flipse),
// pp. 32-35: the elven longblade, an Athasian exotic weapon of bone.
// Per the brief's Dark Sun line, mechanics stage with lore stripped.
// ⚠️ Its price prints in Athasian ceramic pieces (60 cp), the setting's
// base currency unit — carried as printed and flagged in SCREENING.md
// §10 rather than silently converted to gold.
// FIVE oerthblood special-material rows — "Irongate: City of Stairs"
// (Greyhawk; Holian & Tetreault), pp. 42-45:
// the printed cost-modifier table (ammunition, light armor or shield,
// medium armor, heavy armor, weapon) staged as one record per row,
// each carrying the material's full rules so any row stands alone.
// Per the brief's Greyhawk line, mechanics stage with lore stripped;
// the material's name is Greyhawk-keyed ("Oerth") and is kept as
// printed, noted in SCREENING.md §11. The printed damage reduction is
// already in 3.5 form (DR 1/—, 2/—, 3/—), not +N-keyed — no conversion
// needed; see SCREENING.md.
// Mechanics are faithful paraphrases in our own words, carried in
// `notes`; no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const SRC_DARKSUN = "Dragon Magazine #351 — Dark Sun article (Chris Flipse), pp. 32-35";
const SRC_GREYHAWK = "Dragon Magazine #351 — Irongate: City of Stairs (Greyhawk gazetteer), pp. 42-45";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_DARKSUN,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const OERTHBLOOD_WEAPON =
  "Special material (oerthblood): an item made of oerthblooded metal must be made primarily of metal, and is always masterwork. Weapons of oerthblooded metal grant a +1 luck bonus on attack and damage rolls; a target damaged by an oerthblooded weapon takes a -1 penalty on saving throws against magical effects for 1 round, and this penalty stacks across multiple hits. Items of oerthblooded metal have hardness twice that of the base metal (oerthblooded iron, mithral, and steel have hardness 20) and 1.5 times the normal hit points. The cost modifier applies on top of the item's normal price; enhancing an oerthblooded item takes 25% less time and XP than normal.";
const OERTHBLOOD_ARMOR =
  "Special material (oerthblood): an item made of oerthblooded metal must be made primarily of metal, and is always masterwork. Armor and shields of oerthblooded metal grant damage reduction by weight class — light armor DR 1/—, medium armor DR 2/—, heavy armor DR 3/— — and a luck bonus on saving throws against magical effects (+1 light, +2 medium, +3 heavy). Items of oerthblooded metal have hardness twice that of the base metal (oerthblooded iron, mithral, and steel have hardness 20) and 1.5 times the normal hit points. The cost modifier applies on top of the item's normal price; enhancing an oerthblooded item takes 25% less time and XP than normal.";

export const DRAGON_351_EQUIPMENT: EquipmentItem[] = [
  // ---- Dark Sun article (1) ----
  E({
    id: "elven-longblade",
    name: "Elven Longblade",
    category: "weapon",
    cost: "60 cp",
    weight: "4 lb.",
    notes:
      "Exotic one-handed melee weapon (Athasian). Damage 1d8 (Medium; 1d6 Small), critical 18-20/x2, type slashing. A long, slightly curved blade of sharpened bone worked in the manner of both a scimitar and a rapier; you can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with an elven longblade sized for you, even though it is not a light weapon. The printed price is in Athasian ceramic pieces, the setting's base currency — staged as printed; see SCREENING.md §10.",
  }),
  // ---- Greyhawk: oerthblood special material (5) ----
  E({
    id: "oerthblood-ammunition",
    name: "Oerthblood (Ammunition)",
    category: "material",
    cost: "+150 gp",
    source: SRC_GREYHAWK,
    notes: OERTHBLOOD_WEAPON + " This row is the printed cost modifier for ammunition.",
  }),
  E({
    id: "oerthblood-light-armor",
    name: "Oerthblood (Light Armor or Shield)",
    category: "material",
    cost: "+10,000 gp",
    source: SRC_GREYHAWK,
    notes: OERTHBLOOD_ARMOR + " This row is the printed cost modifier for light armor or a shield (DR 1/—, +1 luck bonus on saves vs. magic).",
  }),
  E({
    id: "oerthblood-medium-armor",
    name: "Oerthblood (Medium Armor)",
    category: "material",
    cost: "+20,000 gp",
    source: SRC_GREYHAWK,
    notes: OERTHBLOOD_ARMOR + " This row is the printed cost modifier for medium armor (DR 2/—, +2 luck bonus on saves vs. magic).",
  }),
  E({
    id: "oerthblood-heavy-armor",
    name: "Oerthblood (Heavy Armor)",
    category: "material",
    cost: "+30,000 gp",
    source: SRC_GREYHAWK,
    notes: OERTHBLOOD_ARMOR + " This row is the printed cost modifier for heavy armor (DR 3/—, +3 luck bonus on saves vs. magic).",
  }),
  E({
    id: "oerthblood-weapon",
    name: "Oerthblood (Weapon)",
    category: "material",
    cost: "+6,000 gp",
    source: SRC_GREYHAWK,
    notes: OERTHBLOOD_WEAPON + " This row is the printed cost modifier for a weapon.",
  }),
];
