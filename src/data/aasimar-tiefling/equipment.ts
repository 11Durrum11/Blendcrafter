import type { EquipmentItem } from "@/engine/types";

// Aasimar & Tiefling: A Guidebook to the Planetouched
// (Green Ronin Publishing, Races of Renown line, ©2004,
// by Robert J. Schwalb) — Special Materials, Chapter
// Five, printed p. 76, transcribed from Shaun's own
// scanned copy (read visually; the scan is image-only),
// 2026-11-05. All six new special materials in the book
// are here: driftmetal, fundamental iron, heavenly
// steel, scorched brass, sea metal, and sky steel.
// Modeled as equipment records after the Complete
// Warrior special-materials precedent (category "gear";
// the cost field carries the printed cost modification
// and the notes carry the material's properties).
// Printed tables exist for driftmetal, sea metal, and
// sky steel; the other three price in prose, and those
// figures are transcribed as such — no table rows are
// invented for them.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const AT = "Aasimar & Tiefling: A Guidebook to the Planetouched";
const AT_PATH = "/Desktop/DnD-3.5/Supplements/Races/A Guidebook to Races/Aasimar and Tiefling - Guidebook to the Planetouched.pdf";

export const AASIMAR_TIEFLING_EQUIPMENT: EquipmentItem[] = [
  {
    id: "driftmetal",
    name: "Driftmetal",
    category: "gear",
    cost: "Ammunition +50 gp, Light Armor +3,000 gp, Medium Armor +6,000 gp, Heavy Armor +9,000 gp, Weapon +2,000 gp (no shield row printed)",
    weight: "—",
    notes: "Special material: metal left adrift in the Astral and Ethereal planes becomes driftmetal — highly receptive to magical enchantments and, even unenchanted, effectively bypasses the damage reduction/magic of creatures native to those planes. Any items normally made of metal can be made of driftmetal. The armor check penalty of driftmetal armor or shields is reduced by 1. In all other ways, driftmetal resembles steel.",
    source: `${AT} — Special Materials: Driftmetal (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
  {
    id: "fundamental-iron",
    name: "Fundamental Iron",
    category: "gear",
    cost: "20% more than equivalent cold-iron weaponry; weighs half as much (as printed)",
    weight: "—",
    notes: "Special material: fundamental iron is mined on the Elemental Plane of Earth, where it is highly desired for its resistance to breakage and ease of manufacture — it requires lower temperatures than normal iron, like cold iron. Fundamental iron costs 20% more than equivalent cold-iron weaponry and weighs half as much; these are the only differences between this material and cold iron (as printed).",
    source: `${AT} — Special Materials: Fundamental Iron (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
  {
    id: "heavenly-steel",
    name: "Heavenly Steel",
    category: "gear",
    cost: "Weapon +5,000 gp and masterwork (as printed); armor has all the properties of mithral",
    weight: "—",
    notes: "Special material: a heavenly steel weapon costs 5,000 gp more than a normal weapon, and the weapon is considered masterwork; one-half of all damage dealt by a heavenly steel weapon is holy, thereby partially defeating the damage reduction of evil outsiders. Armor constructed of heavenly steel has all the properties of mithral.",
    source: `${AT} — Special Materials: Heavenly Steel (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
  {
    id: "scorched-brass",
    name: "Scorched Brass",
    category: "gear",
    cost: "Weapon +3,000 gp, masterwork (as printed)",
    weight: "—",
    notes: "Special material: a weapon made of scorched brass costs 3,000 gp more than a normal weapon and is considered masterwork. Only creatures of the fire subtype can wield scorched brass without damage; all others take 1 point of damage per round when handling it. A scorched brass weapon deals an additional point of fire damage with every successful hit, but the material is brittle when exposed to cold: when exposed to spells with the cold descriptor, the weapon must attempt a separate save, and a failed save means the weapon shatters.",
    source: `${AT} — Special Materials: Scorched Brass (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
  {
    id: "sea-metal",
    name: "Sea Metal",
    category: "gear",
    cost: "Ammunition +500 gp, Light Armor +2,000 gp, Medium Armor +4,000 gp, Heavy Armor +8,000 gp, Shield +500 gp, Weapon +500 gp",
    weight: "—",
    notes: "Special material: tightly compacted coral harvested from the Elemental Plane of Water, sea metal weighs half as much as normal items, and armor forged from sea metal comes automatically equipped with spikes at no additional cost. Weapons and armor fashioned from sea metal are masterwork.",
    source: `${AT} — Special Materials: Sea Metal (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
  {
    id: "sky-steel",
    name: "Sky Steel",
    category: "gear",
    cost: "Ammunition +500 gp, Light Armor +4,000 gp, Medium Armor +8,000 gp, Heavy Armor +12,000 gp, Shield +1,000 gp, Weapon +2,000 gp",
    weight: "—",
    notes: "Special material: a white, semi-translucent material formed in the coldest reaches of the Elemental Plane of Air, sky steel weighs one-tenth of its normal weight. Weapons and armor fashioned from sky steel function as masterwork items.",
    source: `${AT} — Special Materials: Sky Steel (p. 76)`,
    sourceUrl: AT_PATH,
    ruleset: "core",
  },
];
