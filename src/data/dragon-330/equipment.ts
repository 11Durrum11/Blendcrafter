// Dragon Magazine #330 (April 2005) — equipment draft: 7 items.
// "Class Acts: Flights of Fancy" (Amber E. Scott), p. 92 — the special
// arrows of the ranger Roberd of the Wood: five new arrow types priced
// per twenty, plus two arrow accessories (dyed fletching, engraved
// shaft). The program survey did not itemize this column (see MANIFEST).
// Prices, weights, and damage types verified against the rendered page
// image (magazine p. 92), including the article's "New Types of Arrows"
// table; the image governs over the OCR stream. The Identifying Arrows
// sidebar rule is carried in the two accessories' notes.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #330 — Class Acts: Flights of Fancy (Amber E. Scott), p. 92";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const IDENTIFYING =
  " Identifying arrows: anyone studying an arrow with a distinctive dyed fletching pattern or an engraved shaft that bears the known marks of a famous (or infamous) archer gains a +1 circumstance bonus on Knowledge (local), Knowledge (nobility and royalty), or bardic knowledge checks to determine the owner of the arrow. The fletching pattern or engravings must be unique to the archer seeking notoriety.";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "ammunition",
    weight: "3 lb.",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_330_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "hardwood-arrows",
    name: "Hardwood Arrows (20)",
    cost: "10 gp",
    weight: "5 lb.",
    notes:
      "Ammunition (piercing). Hardwood shafts are simultaneously stronger and more flexible than a regular arrow's. A hardwood arrow that misses its target has only a 25% chance of being destroyed instead of 50%. One of the arrow designs of Roberd of the Wood.",
  }),
  E({
    id: "pungent-arrows",
    name: "Pungent Arrows (20)",
    cost: "5 gp",
    notes:
      "Ammunition (deals no damage). Similar to powder arrows, these arrowheads deal no damage and contain a sticky, foul-smelling substance. Roberd used pungent arrows to delineate targets he wanted his fox companion to attack or to help track fleeing targets. Anyone tracking a person marked by a pungent arrow gains a +1 circumstance bonus on Survival checks made to track (+4 if the tracker has the scent ability) for one hour. The substance washes off in 5 minutes with ample water.",
  }),
  E({
    id: "singing-arrows",
    name: "Singing Arrows (20)",
    cost: "20 gp",
    notes:
      "Ammunition (piercing). Roberd borrowed this technique from the elves. The elves carved a series of notches along their arrows so that, when fired, they emitted a distinctive series of notes. Elven troops firing in sequence could create chords or even whole songs this way. Roberd was content to design a single distinctive whistle for his own arrows.",
  }),
  E({
    id: "star-arrows",
    name: "Star Arrows (20)",
    cost: "10 gp",
    notes:
      "Ammunition (piercing). Through much experimentation, Roberd developed an alchemical compound that phosphoresced under particular conditions. A star arrow glows with a dim colored light when fired. The arrows shed bright light in a 5-foot radius and shadowy light in a 15-foot radius.",
  }),
  E({
    id: "zigzag-arrows",
    name: "Zigzag Arrows (20)",
    cost: "3 gp",
    notes:
      "Ammunition (slashing or piercing). Roberd designed this forked arrowhead to make the arrow loop and spin crazily when fired. Later he realized the arrowhead was perfect for severing ropes and used them to save several innocents from hanging. Anyone firing a zigzag arrow takes a -4 penalty on attack rolls, but the arrow deals double damage to objects with a hardness of 0.",
  }),
  E({
    id: "dyed-fletching",
    name: "Dyed Fletching (20)",
    cost: "8 sp",
    weight: "—",
    notes:
      "Arrow accessory. While colored fletching has long existed, Roberd developed a cheap and easy way to dye them. Fletching can be a solid color or marked with symbols — Roberd favored a distinctive green." +
      IDENTIFYING,
  }),
  E({
    id: "engraved-shaft",
    name: "Engraved Shaft (20)",
    cost: "1 gp",
    weight: "—",
    notes:
      "Arrow accessory. Roberd would often carve two lines on his arrow shaft just before the nock. Designs along the shaft make an arrow distinctive without impairing its flight." +
      IDENTIFYING,
  }),
];
