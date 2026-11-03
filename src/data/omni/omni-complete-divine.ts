/**
 * Omni Sweep — Complete Divine (2026-11-02): the PDF extraction
 * available for this book (~64 KB) contains a text layer for only
 * 10 of its 205 pages — PDF pages 195-204, which are not the book
 * at all but the "More Divinity" web enhancement appended after
 * it (four prestige classes: dweomerkeeper, master of shrouds,
 * moon guardian, nightcloak). That readable text contains NO
 * magic item or equipment entries, only NPC "Possessions" lines
 * naming standard Dungeon Master's Guide items. The book proper
 * is image-only in this PDF, so its item content — above all
 * Chapter 4: Relics and Staffs (printed pp. 95-107) — could not
 * be parsed from this extraction, and both arrays are empty
 * rather than padded with guesses. The 25 Complete Divine
 * records already in the catalog (23 staffs, the gauntlet of the
 * talon, and the robe of ebonsilk) came from an earlier build.
 * See ~/workspace/omni-sweep/reports/complete-divine.md.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CDiv_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CDiv_EQUIPMENT_OMNI: EquipmentItem[] = [];
