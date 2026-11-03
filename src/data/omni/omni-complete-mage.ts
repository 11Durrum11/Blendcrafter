/**
 * Omni Sweep — Complete Mage (2026-11-02): Chapter 5: Magic Items
 * read in full and enumerated from the book's own tables:
 * Table 5-1 New Rings (7), Table 5-2 New Rods (13), Table 5-3 New
 * Staffs (8), Table 5-4 New Wondrous Items (14), Table 5-5
 * Alchemical Items (5), and Table 5-6 Optional Spell Components
 * (10) — 57 entries in total. Every name already exists in the
 * catalog at the same price (the earlier Complete Mage pack, plus
 * Magic Item Compendium reprints for a few), so both arrays are
 * intentionally empty. Full accounting in
 * ~/workspace/omni-sweep/reports/complete-mage.md.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CMag_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CMag_EQUIPMENT_OMNI: EquipmentItem[] = [];
