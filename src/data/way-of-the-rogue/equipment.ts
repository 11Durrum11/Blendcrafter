import type { EquipmentItem } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// New Equipment, printed pp. 39-40. Transcribed from Shaun's
// own scanned copy (image-only; pages read visually,
// 2026-11-04). Costs and weights are as printed ("—" where the
// book prints no weight). Notes are short mechanical
// paraphrases in our own words; no book prose is reproduced.
// Acid Drops and Night Drops are alchemical gear and are
// categorized as such, matching the catalog's "Alchemical
// gear" subcategory treatment of Adventuring Gear.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const EQ = "Way of the Rogue — New Equipment (pp. 39-40)";

export const WAY_OF_THE_ROGUE_EQUIPMENT: EquipmentItem[] = [
  {
    id: "acid-drops",
    name: "Acid Drops",
    category: "Alchemical gear",
    cost: "25 gp",
    weight: "—",
    notes:
      "A vial holds three applications. Each application burns through 1/2 inch of nonmagical metal or deals 2d8 hit points of damage to a metal object per round; the acid is harmless to wood and stone and causes only minor skin irritation. Magical metal receives a saving throw (see PHB p. 136).",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "honey-paper",
    name: "Honey Paper",
    category: "Adventuring gear",
    cost: "2 gp",
    weight: "—",
    notes:
      "Adhesive sheets of heavy cloth applied to a window before it is broken so the shards stick to the paper instead of falling and making noise; the sheet can later be removed for disposal. The adhesive is flammable.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "iron-backbone",
    name: "Iron Backbone",
    category: "Adventuring gear",
    cost: "8 gp",
    weight: "4 lbs.",
    notes:
      "A clawed metal rod used to block a window or similar opening in the open position so it cannot be closed (or slammed) on the user.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "ladder-box",
    name: "Ladder Box",
    category: "Adventuring gear",
    cost: "150 gp",
    weight: "10 lbs.",
    notes:
      "An 8-inch x 6-inch x 6-inch block that unravels into a ladder up to 10 feet long. Deployment or collapse takes one full round per foot; rushing the process carries a cumulative 10% chance per round of fouling the mechanism. The ladder holds up to 75 lbs.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "ladder-staff",
    name: "Ladder Staff",
    category: "Adventuring gear",
    cost: "75 gp",
    weight: "10 lbs.",
    notes:
      "A quarterstaff concealing six hinged arms beneath an enamel coating; the arms deploy to form a short ladder whose rungs lock individually. The hooked end works as a shepherd's crook, and the staff can be laid sideways as a work platform. Using it destroys the enamel coating, which must be reapplied to restore the disguise. Masterwork versions exist; the book prints no separate price for them.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "night-drops",
    name: "Night Drops",
    category: "Alchemical gear",
    cost: "40 gp",
    weight: "—",
    notes:
      "Eye drops that dilate the pupils, granting darkvision for 1d4 hours; the vision gained is in black and white. Exposure to bright light while the drops are active blinds the user until the drops wear off or the user returns to darkness (see DMG p. 83).",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "one-handed-drill",
    name: "One-Handed Drill",
    category: "Adventuring gear",
    cost: "75 gp",
    weight: "3 lbs.",
    notes:
      "A hand drill operable with one hand that bores through any surface with Hardness less than 7. A pair of drills grants a +10 circumstance bonus on Climb checks on surfaces other than stone (and requires Strength 12 or better to use that way); a single drill grants a +2 circumstance bonus on Climb checks.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "one-handed-drill-masterwork",
    name: "One-Handed Drill, Masterwork",
    category: "Adventuring gear",
    cost: "200 gp",
    weight: "3 lbs.",
    notes:
      "As the one-handed drill, but it can bore through stone and other material up to Hardness 9.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "shingle-pick",
    name: "Shingle Pick",
    category: "Adventuring gear",
    cost: "75 gp",
    weight: "—",
    notes:
      "A flat pick slipped beneath clay, slate, or wood shingles; a quarter-turn of the handle sets its claw against the rafters so a rope can be tied to it for a descent. The tool has no legal uses, and possessing one is illegal in many areas.",
    source: EQ,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
];
