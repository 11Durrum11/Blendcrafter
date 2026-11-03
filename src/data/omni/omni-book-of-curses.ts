/**
 * Omni sweep wave 2 (2026-11-02): The Book of Curses (Heyoka
 * Studios, by Rogan R. Hamby). The book was read in full for the
 * sweep. It contains NO purchasable entries: its contents are
 * curse spells (ten arcane curses and eleven divine curses),
 * lycanthropy rules, and vampirism rules with vampire variants.
 * There is no equipment or magic item chapter, and no item
 * anywhere in the book is given a name, stat block, and market
 * price. The only two gold figures in the text are flavor inside
 * curse entries — coffin wood said to fetch "as much as 4,000
 * gold" in the vampirism section, and a curse's lifting condition
 * referencing a crafted item "worth at least 1,000 gold" — neither
 * of which is a purchasable item entry. Both arrays are therefore
 * intentionally empty; see the omni-sweep report.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CURSE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CURSE_EQUIPMENT_OMNI: EquipmentItem[] = [];
