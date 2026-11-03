/**
 * Omni Sweep — Complete Adventurer (2026-11-02).
 *
 * Complete Adventurer's Chapter 4 "Tools and Equipment" (book
 * pp. 115-136) was enumerated in full: Table 4-1 weapons, Table 4-2
 * alchemical items, Tables 4-3/4-4 weapon capsules, Table 4-5 tools
 * and skill kits, armor/shield/weapon special abilities, specific
 * weapons, Table 4-7 potions and oils, rings, and the Table 4-11
 * wondrous items. Everything was already in the catalog under the
 * same name EXCEPT the Quicksilver weapon capsule, which is the one
 * record built here.
 *
 * Several Complete Adventurer prices disagree with the catalog
 * records (which carry the Magic Item Compendium's later repricing);
 * per sweep rules those records were not edited — the conflicts are
 * listed in ~/workspace/omni-sweep/reports/complete-adventurer.md.
 * Tables 4-8/4-9 (scrolls) and 4-10 (wands) list the book's new
 * spells at standard DMG prices; generated scrolls and wands already
 * exist for catalog spells, so no records were built from them.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CAdv_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const CAdv_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "quicksilver-capsule",
    "name": "Quicksilver Capsule",
    "category": "gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "Alchemical weapon capsule (Table 4-4): coats a melee or thrown weapon with a thick silvery liquid so the weapon deals damage as if coated with silver, including the normal -1 penalty on damage rolls for silvered weapons. Lasts 3 rounds and overrides any other special material effects of the weapon. Craft (Alchemy) DC 30.",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 121",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
