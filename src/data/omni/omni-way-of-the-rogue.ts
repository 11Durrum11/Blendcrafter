/**
 * Omni sweep wave 2 (2026-11-02): Way of the Rogue — the text
 * extraction available for this book is unusable: the scan was
 * OCR'd from mirrored/upside-down pages, so the extracted text is
 * character-level garbage from cover to cover (running text reads
 * as reversed letter soup; no table of contents, price list, or
 * equipment table survives in legible form). The legible fragments
 * concern thieves' guild organization and operations rather than
 * priced goods, but no item name or price can be recovered
 * reliably from this extraction, so both arrays are empty rather
 * than padded with guesses. See
 * ~/workspace/omni-sweep/reports/way-of-the-rogue.md.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const WOTR_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const WOTR_EQUIPMENT_OMNI: EquipmentItem[] = [];
