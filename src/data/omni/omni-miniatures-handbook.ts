/**
 * Omni sweep Wave 2 (2026-11-02): Miniatures Handbook — the
 * Chapter 2: Magic items section (printed pp. 40-44): one shield
 * special ability, nine weapon special abilities, six specific
 * weapons, one ring, two rods, twenty-nine wondrous items, and
 * two cursed collars. Enumeration found 50 purchasable entries
 * and EVERY one is already in the catalog — 24 through the
 * book's own pack and 26 through their Magic Item Compendium
 * reprints (among them living chain, ring of communication,
 * rod of sliding, rod of transposition, and most of the
 * wondrous items). Nothing new to build, so both arrays are
 * empty by design. The MIC reprints repriced 21 of these items,
 * in several cases drastically (the damage-reduction shirts
 * printed at 58,000-90,000 gp stand at 9,000-15,000 gp in the
 * catalog); every conflict is itemized in the omni-sweep
 * report and no catalog record was edited. The Chapter 5
 * skirmish random magic item tables (Tables 5-6 through 5-12)
 * are not purchasable items — they assign generic benefits in
 * the skirmish game and print no market prices — so they are
 * excluded.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const MINI_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const MINI_EQUIPMENT_OMNI: EquipmentItem[] = [];
