/**
 * Omni Sweep — Complete Arcane (2026-11-02): Chapter 5: Magic Items
 * (printed pp. 137-150, master list Table 5-2) read in full and
 * enumerated entry by entry: 7 spellbook enhancements, 3 armor
 * special abilities, 3 specific armors, 3 weapon special abilities,
 * 4 rings, rods of fury (+1 to +5) plus the warlock's scepter and
 * rod of interference, 12 metamagic rods, 10 staffs, and 26
 * wondrous items. Every one of those magic item names already
 * exists in the catalog (from the earlier Complete Arcane pack or
 * from Magic Item Compendium reprints), so the magic item array
 * below is intentionally empty; the price disagreements are
 * itemized in ~/workspace/omni-sweep/reports/complete-arcane.md.
 * What was genuinely missing is equipment-grade content from the
 * same chapter: the starmetal special material (p. 141) and the
 * spellbook construction options of Table 5-1 (p. 140).
 * Alternate item forms (potion tiles, skull talismans, spell
 * wafers, incendiary scrolls, and so on) and contingent spells
 * are rules for repricing or making standard items, not priced
 * entries, and are not recorded here.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CArc_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CArc_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "starmetal",
    "name": "Starmetal",
    "category": "gear",
    "cost": "+5,000 gp",
    "weight": "—",
    "notes": "Special material: alloy of meteoric iron, equal to adamantine for hardness, hit points, and armor damage reduction. A starmetal weapon costs 5,000 gp more than a steel one and deals an extra 1d6 points of damage to extraplanar creatures while they are on the Material Plane; starmetal armor costs the same as adamantine armor.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 141",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-cover-leather",
    "name": "Spellbook Cover: Leather",
    "category": "tool",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "Spellbook cover construction (Table 5-1). Hardness 2; adds +0 hit points to the book.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-cover-wood-thin",
    "name": "Spellbook Cover: Wood, Thin",
    "category": "tool",
    "cost": "20 gp",
    "weight": "1 lb.",
    "notes": "Spellbook cover construction (Table 5-1). Hardness 3; adds +1 hit point to the book.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-cover-metal-soft",
    "name": "Spellbook Cover: Metal, Soft",
    "category": "tool",
    "cost": "100 gp",
    "weight": "5 lb.",
    "notes": "Spellbook cover construction (Table 5-1). Hardness 5; adds +4 hit points to the book.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-cover-metal-hard",
    "name": "Spellbook Cover: Metal, Hard",
    "category": "tool",
    "cost": "200 gp",
    "weight": "5 lb.",
    "notes": "Spellbook cover construction (Table 5-1). Hardness 7; adds +5 hit points to the book.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-cover-dragonhide",
    "name": "Spellbook Cover: Dragonhide",
    "category": "tool",
    "cost": "200 gp",
    "weight": "2 lb.",
    "notes": "Spellbook cover construction (Table 5-1). Hardness 4; adds +2 hit points to the book.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-slipcase",
    "name": "Spellbook Slipcase",
    "category": "tool",
    "cost": "+20 gp",
    "weight": "+1 lb.",
    "notes": "Waterproof double slipcase of chased, tooled leather for a spellbook (Table 5-1). Adds +1 hardness and +1 hit point; protects against rain and snow but not prolonged immersion.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-pages-parchment",
    "name": "Spellbook Pages: Parchment (100)",
    "category": "tool",
    "cost": "10 gp",
    "weight": "2 lb.",
    "notes": "Spellbook page construction, priced per 100 pages (Table 5-1). Hardness +0; 1 hit point.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-pages-linen-paper",
    "name": "Spellbook Pages: Paper, Linen (100)",
    "category": "tool",
    "cost": "20 gp",
    "weight": "2 lb.",
    "notes": "Spellbook page construction, priced per 100 pages (Table 5-1). Hardness +0; 2 hit points.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-pages-vellum",
    "name": "Spellbook Pages: Vellum (100)",
    "category": "tool",
    "cost": "50 gp",
    "weight": "2 lb.",
    "notes": "Spellbook page construction, priced per 100 pages (Table 5-1). Hardness +0; 3 hit points.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-pages-bone-ivory",
    "name": "Spellbook Pages: Bone or Ivory (100)",
    "category": "tool",
    "cost": "100 gp",
    "weight": "4 lb.",
    "notes": "Spellbook page construction, priced per 100 pages (Table 5-1). Hardness +0; 4 hit points.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-pages-metal-foil",
    "name": "Spellbook Pages: Metal Foil (100)",
    "category": "tool",
    "cost": "500 gp",
    "weight": "20 lb.",
    "notes": "Spellbook page construction, priced per 100 pages (Table 5-1). Hardness +1; 8 hit points.",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 140",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
