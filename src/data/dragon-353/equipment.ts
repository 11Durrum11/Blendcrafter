// Dragon Magazine #353 (March 2007) — equipment draft: 6 records.
// "Savage Tidings: Advancing the Wyvern" (Jason Bulmahn), pp. 58-61 —
// the MUNDANE ship upgrades for the Sea Wyvern: special materials and
// improved craftsmanship, each printed with an installation time, an
// installation cost, a Craft (shipmaking) DC, and a weight. The
// magical upgrades from the same article stage in
// magic-items-draft.ts (they print Craft Wondrous Item / Craft Magic
// Arms and Armor lines with caster levels and creation costs).
// ⚠️ SHAPE CHOICE — FLAGGED in SCREENING.md for Shaun: the brief
// directs these into "the ship/vehicle shape that fits" for the
// Spelljamming Ships nest. Unlike issue #345's Excursion conveyances
// (whole named vessels, staged as equipment category "vehicle"), these
// are UPGRADES to a vessel, printed with purchase-style costs — they
// stage as equipment records with category "ship upgrade" and the
// installation terms in the notes, the closest fit to how the magazine
// prints them (a priced modification, not a vessel and not a magic
// item). If integration prefers the Ships-nest system records or the
// magic-item barrel for the mundane set as well, all six move together.
// Also from the article but NOT staged: the generic "Weapons" note
// (the Wyvern has room for 2 light and 1 heavy ship weapons per
// Stormwrack p. 103 — a rule, no new item) and the hireable crew
// (NPCs — reference.md).
// Read from the archive.org OCR stream; the figures below are the
// legible OCR values, cross-checked for internal consistency.
// The Armor Plating per-material table (adamantine / mithral / other
// materials, price and weight per inch per hull section) is only
// partly legible in the OCR; the record carries the general rule and
// the one legible line (200 gp / 200 lb. per hull section for the
// standard installation) and the table is flagged OCR-PARTIAL in
// MANIFEST.md for image verification at integration.
// 3.5 check: printed in 3.5 form throughout; no conversion applied.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #353 — Savage Tidings: Advancing the Wyvern (Jason Bulmahn), pp. 58-61";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "ship upgrade",
    weight: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const FRAME =
  "Ship upgrade (mundane) for a sailing vessel, from the Sea Wyvern upgrade rules: a vessel can have only one mundane and one magical upgrade applied to each of its components, with exceptions as noted in Stormwrack and the Arms and Equipment Guide; upgrade weight counts against the vessel's cargo capacity. Most mundane upgrades require the vessel to be dry-docked (200 gp in labor and materials) before installation.";

export const DRAGON_353_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "ship-armor-plating",
    name: "Ship Armor Plating",
    cost: "see notes",
    weight: "200 lb. per hull section (standard line)",
    notes:
      FRAME +
      " You can increase the hit points and hardness of a vessel by adding armor to any hull section; all statistics are per inch of thickness. You can layer the same material for thicker armor or combine different materials; each layer takes damage separately, damage left over after an outer layer is destroyed is dealt to the next layer inward, and a layer's hardness is applied a second time if the new layer is a different material. A hull section is only considered damaged when its innermost layer is reduced to 50% of its hit points or less; when a section is holed, the adjacent sections are reduced to 50% of their normal hit points, less any layers of armor. Installation time: 1 day per 500 gp of cost. Installation cost: per the article's material table (OCR-partial — see the pack MANIFEST). Skills: Craft (shipmaking) DC 25; the installation cost listed for an upgrade is for raw materials.",
  }),
  E({
    id: "ship-compartmentalizing",
    name: "Ship Compartmentalizing",
    cost: "2,000 gp",
    weight: "2,000 lb.",
    notes:
      FRAME +
      " This upgrade enhances the interior walls and doors of the vessel, making it harder to sink in case of a hull breach: with compartmentalization in place, the ship does not need to make a sinking check (see Stormwrack, p. 32) until it has been holed twice, and all sinking checks are made at a +4 bonus. The upgrade is made to the ship's interior and does not require the vessel to be put in dry-dock. Installation time: 1 week. Skills: Craft (shipmaking) DC 20.",
  }),
  E({
    id: "ship-hull-fortification",
    name: "Ship Hull Fortification",
    cost: "200 gp per hull section",
    weight: "200 lb. per hull section",
    notes:
      FRAME +
      " Reinforcements to the inner hull make a section more resistant to damage: hull sections with this upgrade are not considered damaged until they are reduced to 25% of their hit points or less, and when such a section is destroyed, the adjacent hull sections (and their armor plating) are reduced to only 75% of their normal hit points the following round. Installation time: 3 days per hull section. Skills: Craft (shipmaking) DC 25.",
  }),
  E({
    id: "ship-masterwork-controls",
    name: "Ship Masterwork Controls",
    cost: "4,800 gp",
    weight: "1,000 lb.",
    notes:
      FRAME +
      " This upgrade finely tunes the wheel to the rudder and adds additional ropes and pulleys to enhance the captain's control of the ship: masterwork controls provide a +2 circumstance bonus on Profession (sailor) checks made by the pilot. Installation time: 1 month. Skills: Craft (shipmaking) DC 30.",
  }),
  E({
    id: "ship-olman-light-wood",
    name: "Ship, Olman Light Wood (Samatir)",
    cost: "10,000 gp",
    weight: "—",
    notes:
      FRAME +
      " If friendly relations are made with the Burowao tribe of the Olman, the natives tell of Samatir, a wood of ordinary strength but weighing only half as much. If all of a vessel's hull sections are replaced by this wood, the vessel rides higher in the water and its speed increases by 10 feet and its draft is reduced by 5 feet (minimum 5 feet). Installation time: 3 months. Skills: Craft (shipmaking) DC 25. (Savage Tide campaign framing — the Olman of the Isle of Dread — is setting color; the material and its ship effect are the record.)",
  }),
  E({
    id: "ship-rigging-fortification",
    name: "Ship Rigging Fortification",
    cost: "500 gp",
    weight: "200 lb.",
    notes:
      FRAME +
      " This upgrade adds redundancy and resiliency to a section of rigging: add 50% to one rigging section's hit points. Installation time: 1 week. Skills: Craft (shipmaking) DC 20.",
  }),
];
