/**
 * Omni sweep wave 2 (2026-11-02): Airships (Bastion Press). The
 * extraction available is the free "e-Ships" companion to the
 * book, not the full volume: it reprints Chapter 2's engine table
 * and the Sample Airships chapter, while the full construction
 * chapter (hull, rigging, anchor and component price lists) and
 * Chapter 6: Aerial Equipment are in the book only. Built here:
 * the ten engine types from Table 1.4 at their printed cost per
 * power point (confirmed against the samples: an oil engine of
 * power 150 is priced 225,000 gp), the seven preconstructed
 * sample airships at their printed total market prices, and
 * three components whose price is constant across multiple
 * sample stat blocks (reactive map 10,000 gp, engine swivel
 * 18,000 gp, fire thrower 6,000 gp). Size-dependent component
 * prices in the samples (rudders, landing gear, anchors, hoists)
 * follow formulas from the full book and are not built.
 * Note: the Skyscout sample prices its arcane (95) engine at
 * 1,425,000 gp, ten times the table rate; its total is printed
 * that way and is used as printed.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const AIR_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const AIR_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "airship-engine-arcane",
    "name": "Airship Engine, Arcane",
    "category": "gear",
    "cost": "1,500 gp per power point",
    "weight": "—",
    "notes": "Airship engine powered by arcane spell energy, typically tended by wizards. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 30; the engine has 5 hull points and hardness 5; repair DC 25, repair cost 300 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-divine",
    "name": "Airship Engine, Divine",
    "category": "gear",
    "cost": "1,500 gp per power point",
    "weight": "—",
    "notes": "Airship engine powered by divine spell energy. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 30; the engine has 5 hull points and hardness 5; repair DC 25, repair cost 300 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-elemental-air",
    "name": "Airship Engine, Elemental, Air",
    "category": "gear",
    "cost": "2,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine bound to an air elemental. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 25; the engine has 1 hull points and hardness 2; repair DC 20, repair cost 400 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-elemental-fire",
    "name": "Airship Engine, Elemental, Fire",
    "category": "gear",
    "cost": "1,500 gp per power point",
    "weight": "—",
    "notes": "Airship engine bound to a fire elemental. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 25; the engine has 3 hull points and hardness 6; repair DC 20, repair cost 300 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-energy",
    "name": "Airship Engine, Energy",
    "category": "gear",
    "cost": "3,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine drawing on raw magical energy. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 35; the engine has 2 hull points and hardness 5; repair DC 30, repair cost 600 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-fiendish",
    "name": "Airship Engine, Fiendish",
    "category": "gear",
    "cost": "3,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine powered by fiendish forces. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 30; the engine has 20 hull points and hardness 5; repair DC 30, repair cost 600 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-necrotic",
    "name": "Airship Engine, Necrotic",
    "category": "gear",
    "cost": "2,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine powered by necrotic energy, often fueled with captured creatures. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 30; the engine has 20 hull points and hardness 5; repair DC 25, repair cost 400 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-oil-burning",
    "name": "Airship Engine, Oil-Burning",
    "category": "gear",
    "cost": "1,500 gp per power point",
    "weight": "—",
    "notes": "Airship engine a mundane engine that burns oil. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 20; the engine has 2 hull points and hardness 5; repair DC 20, repair cost 200 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-vampiric",
    "name": "Airship Engine, Vampiric",
    "category": "gear",
    "cost": "3,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine powered by drained life energy. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 30; the engine has 20 hull points and hardness 5; repair DC 20, repair cost 600 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-wood-burning",
    "name": "Airship Engine, Wood-Burning",
    "category": "gear",
    "cost": "1,000 gp per power point",
    "weight": "—",
    "notes": "Airship engine a mundane engine that burns wood. Priced per point of engine power (a ship's engine power must exceed its tonnage to fly). Craft DC 20; the engine has 2 hull points and hardness 5; repair DC 15, repair cost 200 gp per hull point.",
    "source": "Airships (Bastion Press) — Chapter 2: Airship Construction, Table 1.4: Engine Types",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-sprint-freighter",
    "name": "Airship (Sprint Freighter)",
    "category": "gear",
    "cost": "285,000 gp",
    "weight": "—",
    "notes": "A 75-ton Colossal wood-hulled freighter with a 150-power oil engine, square rigging and no weapons; built for speed on trade routes, with 42 tons of cargo space and a standard crew of 20 plus 18 officers. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-asherake-sunshadow",
    "name": "Airship (Asherake Sunshadow)",
    "category": "gear",
    "cost": "155,620 gp",
    "weight": "—",
    "notes": "A 15-ton Medium wood-hulled light warship with a 50-power necrotic engine, two whirling ballistae in side turrets, a prow lightning bombard and turret-mounted fire missiles; small and fast, relying on speed rather than armor. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-dwarven-waraxe",
    "name": "Airship (Dwarven Waraxe)",
    "category": "gear",
    "cost": "510,270 gp",
    "weight": "—",
    "notes": "A 100-ton Colossal stone-hulled battleship with three 60-power oil engines, panel rigging, a reinforced hull, ram spikes, a ballista, two dart launchers and a fire thrower; designed to plow through smaller airships. Standard crew 126 plus 21 officers. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-fleshstalker",
    "name": "Airship (Fleshstalker)",
    "category": "gear",
    "cost": "328,720 gp",
    "weight": "—",
    "notes": "A 50-ton Gargantuan bone-hulled raider with a 100-power necrotic engine, lateen rigging, two dart launchers and a razor launcher in bottom turrets, two whirling ballistae in side turrets, and drop lines for troops. Standard crew 60 plus 14 officers. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-elvish-cloudleaper",
    "name": "Airship (Elvish Cloudleaper)",
    "category": "gear",
    "cost": "583,600 gp",
    "weight": "—",
    "notes": "An 80-ton Colossal crystalline-hulled elven vessel with a 200-power arcane engine, square rigging and an aquatic template, carrying no weapons; a floating home and showcase for elven wizards and sages, with 57 tons of cargo space. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-elvish-skyscout",
    "name": "Airship (Elvish Skyscout)",
    "category": "gear",
    "cost": "1,442,600 gp",
    "weight": "—",
    "notes": "A 5-ton Diminutive crystalline-hulled scout with a 95-power arcane engine and an aquatic template, operable only by arcane spellcasters who also power the engine; possibly the smallest viable airship, crewed by a single pilot. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-spindire-dragonship",
    "name": "Airship (Spindire Dragonship)",
    "category": "gear",
    "cost": "156,500 gp",
    "weight": "—",
    "notes": "A 35-ton Huge iron-hulled pirate vessel with a 90-power wood-burning engine, square rigging, two fire missiles in side turrets, additional fire missiles and a fire thrower; built around fire as its entire offense. Price is the total market price to buy the vessel preconstructed from a shipyard.",
    "source": "Airships (Bastion Press) — Sample Airships",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "reactive-map",
    "name": "Reactive Map",
    "category": "gear",
    "cost": "10,000 gp",
    "weight": "—",
    "notes": "An airship navigation component: a magical map that reacts to the vessel's surroundings and grants a +2 bonus on navigation checks.",
    "source": "Airships (Bastion Press) — Sample Airships (component price in sample stat blocks)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "airship-engine-swivel",
    "name": "Engine Swivel (Airship)",
    "category": "gear",
    "cost": "18,000 gp",
    "weight": "—",
    "notes": "An airship pilot component that lets the ship's engines swivel, improving the vessel's ability to change direction and speed.",
    "source": "Airships (Bastion Press) — Sample Airships (component price in sample stat blocks)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-thrower-airship",
    "name": "Fire Thrower (Airship Weapon)",
    "category": "weapon",
    "cost": "6,000 gp",
    "weight": "—",
    "notes": "An airship-mounted weapon that projects fire at enemy vessels and crews; a standard weapon on fire-oriented airships such as the Spindire Dragonship. Comes with 20 shots of ammunition when fitted to a preconstructed ship.",
    "source": "Airships (Bastion Press) — Sample Airships (component price in sample stat blocks)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
