// Dragon Magazine #329 (March 2005) — equipment draft: 8 items.
// "Class Acts: Tokens of Faith II" (Amber E. Scott), p. 90 — alternate holy
// symbols, one per domain presented (Air, Death, Good, Plant, Strength, Sun,
// War, Water). The sequel to issue #327's "Tokens of Faith" (same author,
// same framework, staged there as equipment). Printed framework, verified
// against the rendered page image: "All the holy symbols presented here cost
// 100 gp"; the symbols are not magic items and do not take up a slot; to gain
// the benefit of the item, the user must be a cleric with the domain the
// symbol is tied to as one of his chosen domains; the bonus is treated as an
// addition to the domain's granted power. The article closes the series
// forward: "Tokens of Faith III" in issue #331 will conclude it. The program
// survey did not itemize this column; it stages per the standing full-text
// rule (see MANIFEST). House shape mirrors the issue-327 equipment draft.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #329 — Class Acts: Tokens of Faith II (Amber E. Scott), p. 90";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const FRAME =
  "Alternate holy symbol from \"Tokens of Faith II\": all the holy symbols presented in the article cost 100 gp, they are not magic items and do not take up a slot, and to gain the benefit of the item the user must be a cleric with the tied domain as one of his chosen domains — the bonus is treated as an addition to the domain's granted power.";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_329_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "holy-symbol-of-air",
    name: "Holy Symbol of Air",
    cost: "100 gp",
    notes:
      FRAME +
      " No crystal or precious metal seems to hold together this circlet: made of a wispy, swirling convergence of barely-visible blue and white ribbons, it seems to magically hover over the cleric's brow, and the gossamer ribbons feel soft and feather light to the touch. Bearing this circlet grants a cleric a +1 sacred bonus on Jump checks made to perform high jumps.",
  }),
  E({
    id: "holy-symbol-of-death",
    name: "Holy Symbol of Death",
    cost: "100 gp",
    notes:
      FRAME +
      " This symbol is nothing more than a knotted, ashy-white rope the width of a man's finger. The flesh of a cleric who wears the rope around his neck becomes livid and covered with purple and yellow bruises that seem to change position slowly, as if creeping across the cleric's skin, but they are not painful and disappear if the cleric removes the rope. Whenever the cleric delivers a coup de grace, this holy symbol increases the DC of the save to avoid death by +2.",
  }),
  E({
    id: "holy-symbol-of-good",
    name: "Holy Symbol of Good",
    cost: "100 gp",
    notes:
      FRAME +
      " This silver cuff fits snugly around the wrist; a silver flange protrudes from the cuff to the center of the cleric's palm, where it attaches to a round crystal disk that seems colorless but emits waves of rainbow colors in bright light — to display his holy symbol, the cleric must turn his palm upwards. When casting a good spell, this symbol adds a +1 sacred bonus on Knowledge (the planes) checks when dealing with evil outsiders.",
  }),
  E({
    id: "holy-symbol-of-plant",
    name: "Holy Symbol of Plant",
    cost: "100 gp",
    notes:
      FRAME +
      " This symbol is a chain of leaves made from many different types of trees and worn around the waist. Soft and supple, the living belt's leaves never age or die, but they change from green in the spring and summer to red in the fall and pure white in the wintertime. A cleric wearing this belt gains a +1 bonus on Knowledge (nature) checks when dealing with plants and plant creatures.",
  }),
  E({
    id: "holy-symbol-of-strength",
    name: "Holy Symbol of Strength",
    cost: "100 gp",
    notes:
      FRAME +
      " This studded bronze band is worn around the arm; some clerics wear two, one below the shoulder and one above the elbow, although only one bonus is granted. When the cleric activates his Strength domain power, his arm muscles bulge and ripple mightily. The band's wearer gains a +1 bonus on Strength checks made to resist a bull rush.",
  }),
  E({
    id: "holy-symbol-of-sun",
    name: "Holy Symbol of Sun",
    cost: "100 gp",
    notes:
      FRAME +
      " This half-inch-long red, orange, or yellow oval gem adheres magically to the cleric's brow and constantly flashes and glitters while exposed to the sun. A cleric who wears this symbol extends the radius of effect of any spell with the light descriptor he casts by 5 feet.",
  }),
  E({
    id: "holy-symbol-of-war",
    name: "Holy Symbol of War",
    cost: "100 gp",
    notes:
      FRAME +
      " This holy symbol is a rectangular steel plate that the cleric holds to his chest with leather straps (even over his armor). Engravings of battling warriors cover the plate, and whenever the cleric enters combat the engraved figures animate and begin fighting each other. After the cleric has worn this item for 24 consecutive hours, he gains a +1 bonus on attack rolls made to confirm a critical threat while wielding his deity's chosen weapon.",
  }),
  E({
    id: "holy-symbol-of-water",
    name: "Holy Symbol of Water",
    cost: "100 gp",
    notes:
      FRAME +
      " This chain of tiny blue and green beads is long enough for the cleric to loop around his neck several times; the beads, tiny glass spheres filled with both salt and fresh water, rub together to recreate the soft susurrus of the sea. Wearing this symbol allows the cleric to hold his breath for a number of rounds equal to three times his Constitution score.",
  }),
];
