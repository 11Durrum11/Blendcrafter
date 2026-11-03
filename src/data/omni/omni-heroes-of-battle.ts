/**
 * Omni sweep Wave 2 (2026-11-02): Heroes of Battle — Chapter 4's
 * siege engine table (p. 67), Chapter 5's camouflage netting
 * (p. 95), and Chapter 6: Magic of War (pp. 129-137): Table 6-1,
 * the heraldic crests, the standards, the siege engine special
 * abilities, and the specific siege engines and ammunition.
 * Enumeration found 85 purchasable entries and EVERY one is
 * already in the catalog — most through the book's own pack, and
 * the Table 6-1 wondrous items through their Magic Item
 * Compendium reprints (blessed bandage, everlasting rations,
 * scrying beacon, blast disk, drums of marching, camouflage
 * paint, healing salve, portable foxhole, Daern's instant tent,
 * horn of plenty). Nothing new to build, so both arrays are
 * empty by design. Two price conflicts against the MIC reprints
 * are recorded in the omni-sweep report (drums of marching:
 * book 1,000 gp vs. catalog 1,100 gp; horn of plenty: book
 * 12,960 gp vs. catalog 12,000 gp); no catalog record was
 * edited. Not items: Tables 6-2/6-3 are pricing rules for magic
 * siege engines, and the brass steed of Appendix III is a
 * construct creature with a construction cost, not an item.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HOB_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const HOB_EQUIPMENT_OMNI: EquipmentItem[] = [];
