/**
 * Omni sweep wave 2 (2026-11-02): Heroes of High Favor: Elves — the
 * book's only purchasable entries are Chapter 2's "masterwork
 * components": special construction options the book treats as
 * separate items for cost and creation purposes. They are filed as
 * equipment, each name carrying a "(Masterwork Component)" qualifier
 * because several printed component names (Seeking, Green, Hardened,
 * Darkened) are single generic words that would collide with or be
 * confused for existing catalog records; the component's printed name
 * is preserved at the start of each record name and in its notes.
 * Prices are printed as bare numbers, which the book's convention
 * makes gold pieces. NOT built: the Living Creation component — the
 * book states its 300 gp market value exists "for creation times
 * only; such an item would never be sold on the open market," so it
 * is not a purchasable entry. The Darkened component's price is a
 * formula in the book (market value equal to three times the item's
 * weight in pounds) and is recorded as printed. The spell-research
 * costs elsewhere in the book are rules for researching spells, not
 * items. Prices are as printed; notes are mechanical effects in our
 * own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const HOFE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const HOFE_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "arcane-conductor-masterwork-component",
    "name": "Arcane Conductor (Masterwork Component)",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "Masterwork component 'Arcane Conductor' for armor or a shield: reduces the item's arcane spell failure chance by 5%, cumulatively to a minimum of 10%. The component's market value doubles for medium armor and quadruples for heavy armor.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "seeking-masterwork-component",
    "name": "Seeking (Masterwork Component)",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "Masterwork component 'Seeking' for a bow: range penalties with the bow are halved.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "increased-range-masterwork-component",
    "name": "Increased Range (Masterwork Component)",
    "category": "gear",
    "cost": "75 gp",
    "weight": "—",
    "notes": "Masterwork component 'Increased Range' for a bow: increases the bow's range increment by 10 ft.; it may be applied up to three times.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "arrow-resiliency-masterwork-component",
    "name": "Arrow Resiliency (Masterwork Component)",
    "category": "ammunition",
    "cost": "3 gp per 20 arrows",
    "weight": "—",
    "notes": "Masterwork component 'Arrow Resiliency' applied to arrows, making them hardier; priced per 20 arrows as printed.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "green-masterwork-component",
    "name": "Green (Masterwork Component)",
    "category": "gear",
    "cost": "75 gp",
    "weight": "—",
    "notes": "Masterwork component 'Green' for a wooden item: the item gains fire resistance 5.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hardened-masterwork-component",
    "name": "Hardened (Masterwork Component)",
    "category": "gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "Masterwork component 'Hardened': increases the item's hardness by 2; it may be applied up to twice.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "darkened-masterwork-component",
    "name": "Darkened (Masterwork Component)",
    "category": "gear",
    "cost": "3 × the item's weight in lb (gp)",
    "weight": "—",
    "notes": "Masterwork component 'Darkened': the book prices it by formula — its market value equals three times the base item's weight in pounds. Each application reduces the item's weight by 10%, and it may be applied up to five times.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "weapon-of-finesse-masterwork-component",
    "name": "Weapon of Finesse (Masterwork Component)",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "Masterwork component 'Weapon of Finesse' for a melee weapon of 5 lb. or less: the weapon can be used with the Weapon Finesse feat.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elven-war-arrows-20",
    "name": "Elven War Arrows (20)",
    "category": "ammunition",
    "cost": "30 gp per 20 arrows",
    "weight": "—",
    "notes": "The 'Elven War Arrow' masterwork component: arrows threatening a critical on 19–20 with a ×3 multiplier, but their damage die drops one category. Priced per 20 arrows as printed.",
    "source": "Heroes of High Favor: Elves — Chapter 2 (Masterwork Components)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
