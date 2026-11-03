/**
 * Omni sweep wave 2 (2026-11-02): Sandstorm — Chapter 4's equipment
 * (printed pp. 95-104) and Chapter 5's magic items (pp. 130-137).
 * Nearly everything in both chapters was already cataloged by the
 * book's own pack and the Magic Item Compendium: all 18 weapons, the
 * armor and shield entries, all gear, clothing, and alchemical items,
 * all 6 vehicles, all armor and weapon special abilities, the
 * specific weapon, the rings, rod, staffs, and the wondrous items
 * (including the intelligent dance masks of the Great Mother). The
 * one section the earlier packs missed was Table 4-4: Mounts, built
 * here as equipment; SAND_MAGIC_ITEMS_OMNI is therefore empty.
 * Price conflicts between Sandstorm's printed prices and the
 * catalog's Magic Item Compendium reprints are NOT edited here; they
 * are listed in the omni-sweep report: burnoose of 1,001 thorns
 * (Sandstorm 10,080 gp vs. MIC 3,000 gp), personal oasis (18,600 gp
 * vs. 4,600 gp), lens of the desert (66,000 gp vs. 20,000 gp), and
 * mask of sweet air (147,000 gp vs. 2,000 gp). Sandstorm's own
 * Table 5-1 also misprints two prices against the book's item texts
 * (ring of sandstriding 10,000 gp in the table vs. 5,000 gp in the
 * text; bottle of endless sand 16,200 gp in the table vs. 21,600 gp
 * in the text) — the catalog follows the item texts in both cases.
 * Not built: kheferu (a special material priced only as a cost
 * multiplier, ×2) and the asherati sand sculpture (Table 4-3 prints
 * its price as "varies"). Prices are the printed market prices;
 * notes are mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const SAND_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const SAND_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "ashworm-mount",
    "name": "Ashworm",
    "category": "animal",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A domesticated, trained ashworm used as a mount for a Medium humanoid; the poison stingers of most domesticated ashworms are clipped. The rider must succeed on a DC 15 Ride check once every 24 hours in a sandy environment or be swept off the ashworm's back as it dives below the surface for 1d4 rounds before returning. An ashworm mount requires an exotic saddle, benefits from stabling, requires feed like a normal mount, and can wear custom barding at an additional 50% of the price.",
    "source": "Sandstorm — Chapter 4: Equipment (Mounts, Table 4–4), p. 103",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "two-humped-camel",
    "name": "Two-Humped Camel",
    "category": "animal",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A two-humped camel, an appropriate mount for a Medium humanoid creature. It is hard to control in combat. It benefits from stabling, can wear barding, and requires feed like a normal mount.",
    "source": "Sandstorm — Chapter 4: Equipment (Mounts, Table 4–4), p. 103",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dromedary-camel",
    "name": "Dromedary Camel",
    "category": "animal",
    "cost": "75 gp",
    "weight": "—",
    "notes": "A dromedary (one-humped) camel, the most common mount in the waste and appropriate for a Medium humanoid creature. It is hard to control in combat. It benefits from stabling, can wear barding, and requires feed like a normal mount.",
    "source": "Sandstorm — Chapter 4: Equipment (Mounts, Table 4–4), p. 103",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dust-twister-mount",
    "name": "Dust Twister",
    "category": "animal",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "A tamed dust twister used as a mount, suitable for a Medium or Large humanoid-shaped creature; the rider appears held aloft in the calm center of the twister some 5 feet off the ground. The rider must succeed on a DC 15 Ride check once per day or be flung from the twister, taking 1d6 points of damage, and the twister is hard to control in combat. It requires no saddle or stable, cannot wear barding, and does not require feed.",
    "source": "Sandstorm — Chapter 4: Equipment (Mounts, Table 4–4), p. 103",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "war-camel",
    "name": "War Camel",
    "category": "animal",
    "cost": "450 gp",
    "weight": "—",
    "notes": "A camel trained for battle, appropriate as a mount for a Medium humanoid creature. Unlike ordinary camels, a war camel can be ridden into battle easily. It benefits from stabling, can wear barding, and requires feed like a normal mount.",
    "source": "Sandstorm — Chapter 4: Equipment (Mounts, Table 4–4), p. 103",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
