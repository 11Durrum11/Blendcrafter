/**
 * Omni sweep wave 2 (2026-11-02): Ship Combat — a 3e Spelljammer
 * fan document on ship-to-ship combat. Its only priced content is
 * the Ship Weapons table and the two turret mountings described
 * alongside it: ballistae, stonethrowers, catapults, bombards and
 * jettisons in light, medium and heavy sizes, each built below as
 * an equipment record (the same weapon names exist in the catalog
 * from land-based sources at different prices; these are the
 * ship-mounted Spelljammer versions). The table's accelerator and
 * fire projector rows are priced "XXX gp" in the document — no
 * printed price exists — so they are not built. The document
 * prints no magic items and no weights for the weapons.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const SHIP_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const SHIP_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "ship-ballista-light",
    "name": "Ship Ballista, Light",
    "category": "weapon",
    "cost": "600 gp",
    "weight": "—",
    "notes": "A ship-mounted ballista; a crossbow-like engine that shoots heavy bolts. Attack bonus +4, damage 1d3 x 5 (critical x2), crew 1, reload 2 rounds, occupies 1 tonnage, range 3 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-ballista-medium",
    "name": "Ship Ballista, Medium",
    "category": "weapon",
    "cost": "1,200 gp",
    "weight": "—",
    "notes": "A ship-mounted ballista; a crossbow-like engine that shoots heavy bolts. Attack bonus +4, damage 1d6 x 5 (critical x2), crew 2, reload 3 rounds, occupies 2 tonnage, range 3 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-ballista-heavy",
    "name": "Ship Ballista, Heavy",
    "category": "weapon",
    "cost": "2,400 gp",
    "weight": "—",
    "notes": "A ship-mounted ballista; a crossbow-like engine that shoots heavy bolts. Attack bonus +4, damage 2d6 x 5 (critical x2), crew 2, reload 4 rounds, occupies 3 tonnage, range 3 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-stonethrower-light",
    "name": "Ship Stonethrower, Light",
    "category": "weapon",
    "cost": "700 gp",
    "weight": "—",
    "notes": "A cross between a ballista and a catapult, using a ballista firing mechanism with a cup that holds a stone; slower and less accurate than a ballista but harder-hitting. Attack bonus +2, damage 1d6 x 5 (critical 19-20/x2), crew 2, reload 2 rounds, occupies 1 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-stonethrower-medium",
    "name": "Ship Stonethrower, Medium",
    "category": "weapon",
    "cost": "1,400 gp",
    "weight": "—",
    "notes": "A cross between a ballista and a catapult, using a ballista firing mechanism with a cup that holds a stone; slower and less accurate than a ballista but harder-hitting. Attack bonus +2, damage 2d6 x 5 (critical 19-20/x2), crew 3, reload 3 rounds, occupies 2 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-stonethrower-heavy",
    "name": "Ship Stonethrower, Heavy",
    "category": "weapon",
    "cost": "2,800 gp",
    "weight": "—",
    "notes": "A cross between a ballista and a catapult, using a ballista firing mechanism with a cup that holds a stone; slower and less accurate than a ballista but harder-hitting. Attack bonus +2, damage 3d6 x 5 (critical 19-20/x2), crew 4, reload 4 rounds, occupies 3 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-catapult-light",
    "name": "Ship Catapult, Light",
    "category": "weapon",
    "cost": "800 gp",
    "weight": "—",
    "notes": "A ship-mounted catapult that lobs heavy shot in a high arc. Attack bonus +0, damage 2d6 x 5 (critical x3), crew 2, reload 3 rounds, occupies 1 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-catapult-medium",
    "name": "Ship Catapult, Medium",
    "category": "weapon",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "A ship-mounted catapult that lobs heavy shot in a high arc. Attack bonus +0, damage 3d6 x 5 (critical x3), crew 3, reload 4 rounds, occupies 2 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-catapult-heavy",
    "name": "Ship Catapult, Heavy",
    "category": "weapon",
    "cost": "3,200 gp",
    "weight": "—",
    "notes": "A ship-mounted catapult that lobs heavy shot in a high arc. Attack bonus +0, damage 4d6 x 5 (critical x3), crew 4, reload 5 rounds, occupies 3 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-bombard-light",
    "name": "Ship Bombard, Light",
    "category": "weapon",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "A ship-mounted bombard, a heavy gunpowder weapon. Attack bonus +2, damage 2d6 x 5 (critical 18-20/x2), crew 2, reload 3 rounds, occupies 1 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-bombard-medium",
    "name": "Ship Bombard, Medium",
    "category": "weapon",
    "cost": "3,200 gp",
    "weight": "—",
    "notes": "A ship-mounted bombard, a heavy gunpowder weapon. Attack bonus +2, damage 3d6 x 5 (critical 18-20/x2), crew 3, reload 4 rounds, occupies 2 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-bombard-heavy",
    "name": "Ship Bombard, Heavy",
    "category": "weapon",
    "cost": "6,400 gp",
    "weight": "—",
    "notes": "A ship-mounted bombard, a heavy gunpowder weapon. Attack bonus +2, damage 4d6 x 5 (critical 18-20/x2), crew 4, reload 5 rounds, occupies 3 tonnage, range 2 hexes.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-jettison-light",
    "name": "Ship Jettison, Light",
    "category": "weapon",
    "cost": "400 gp",
    "weight": "—",
    "notes": "A ship weapon that drops or casts its load onto a target below or alongside. Jettisons never damage ships with hardness of 1 or better and cannot score critical hits. Attack bonus +0, damage 2d6 (critical —), crew 1, reload 2 rounds, occupies 1/2 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-jettison-medium",
    "name": "Ship Jettison, Medium",
    "category": "weapon",
    "cost": "800 gp",
    "weight": "—",
    "notes": "A ship weapon that drops or casts its load onto a target below or alongside. Jettisons never damage ships with hardness of 1 or better and cannot score critical hits. Attack bonus +0, damage 3d6 (critical —), crew 2, reload 3 rounds, occupies 1 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-jettison-heavy",
    "name": "Ship Jettison, Heavy",
    "category": "weapon",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "A ship weapon that drops or casts its load onto a target below or alongside. Jettisons never damage ships with hardness of 1 or better and cannot score critical hits. Attack bonus +0, damage 4d6 (critical —), crew 3, reload 4 rounds, occupies 1 1/2 tonnage, range 1 hex.",
    "source": "Ship Combat (3e Spelljammer) — Ship Weapons table",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "standard-turret",
    "name": "Standard Turret",
    "category": "gear",
    "cost": "750 gp",
    "weight": "—",
    "notes": "A mounting that lets a ship weapon be rotated into a new firing arc; one man can rotate a light weapon in one round, while medium and heavy weapons take one man two rounds or two men one round, and rotation can be done while reloading by men not assisting the reload.",
    "source": "Ship Combat (3e Spelljammer) — Weapons: Standard Turret",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "free-turret",
    "name": "Free Turret",
    "category": "gear",
    "cost": "5,000 gp",
    "weight": "—",
    "notes": "A gnomish counterbalanced frame mount that adds 5,000 gp to the cost of the weapon it is built into (it cannot be added later). The weapon can be repositioned to any firing arc as a free action and counts as mounted on a ship two sizes smaller for attack penalties, but if the weapon takes half or more of its hit points in damage the counterweight system fails. Works only with ballistae, stonethrowers, bombards and accelerators.",
    "source": "Ship Combat (3e Spelljammer) — Weapons: Free Turret",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
