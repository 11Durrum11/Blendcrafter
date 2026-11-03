/**
 * Omni sweep Wave 2 (2026-11-02): Races of Destiny — NO purchasable
 * item content. This book has no equipment or magic items chapter
 * (its chapters cover races, prestige classes, character options,
 * and campaigns), and a full-text search of the extracted book
 * finds no magic item stat blocks at all: zero "Aura:", "Caster
 * Level:", "Slot:", or "Activation:" entries. The only "Price:"
 * figures in the book are the market price of a symbol of weakness
 * trap inside the Chapter 8 sample adventure (a trap built into a
 * location, not a purchasable item) and NPC possessions in sample
 * stat blocks, all of which are standard items cataloged elsewhere.
 * Both arrays are therefore intentionally empty, on the same model
 * as the Complete Divine omni pack.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const RDEST_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const RDEST_EQUIPMENT_OMNI: EquipmentItem[] = [];
