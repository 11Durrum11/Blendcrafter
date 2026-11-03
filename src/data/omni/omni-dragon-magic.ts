/**
 * Omni sweep Wave 2 (2026-11-02): Dragon Magic — Chapter 3:
 * Draconic Magic's two item tables: the draconic magic items
 * table (printed p. 92, 15 rows counting the lesser/greater
 * variants separately) and the dweomered dragon scales table
 * (p. 97, 23 items). Enumeration found 38 purchasable entries
 * and EVERY one is already in the catalog through the book's
 * own pack, at exactly the printed prices — no additions and
 * no price conflicts. Both arrays are empty by design. The
 * rest of the book's priced text is confined to these two
 * sections; dragonpact and vestige content is not purchasable
 * gear.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const DMAG_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const DMAG_EQUIPMENT_OMNI: EquipmentItem[] = [];
