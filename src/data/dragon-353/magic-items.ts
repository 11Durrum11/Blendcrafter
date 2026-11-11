// Dragon Magazine #353 (March 2007) — magic item draft: 8 records.
// "Savage Tidings: Advancing the Wyvern" (Jason Bulmahn), pp. 58-61 —
// the MAGICAL ship upgrades for the Sea Wyvern. Unlike the mundane
// upgrades (equipment-draft.ts), each of these prints a full magic
// creation line (feat, prerequisite spell, caster level, and the
// creation cost/XP split), so they stage in the magic-item shape —
// the same call the pipeline made for issue #331's wondrous vehicles.
// The `cost` field carries the article's INSTALLATION COST (the price
// to have the upgrade installed, as the article prints it); the
// creation cost and XP from the Craft line ride in the summary.
// ⚠️ APOC SCREENING — see SCREENING.md: none of the eight is
// extra-dimensional or planar in function. Buoyant Boat works by
// levitate (it lightens the ship's load response; it does not make
// the vessel fly, hold extra-dimensional cargo, or open a space) —
// staged CLEAN with the reasoning stated in SCREENING.md, because the
// brief requires extra-dimensional holds/spaces to be flagged as
// printed and this one is neither. Hull Field generates a wall of
// force over a destroyed hull section (a force effect, not a space).
// Read from the archive.org OCR stream; figures are the legible OCR
// values. The Dolphin Helm's prerequisite spell is OCR-garbled in the
// stream (read as wall of force, CL 9th in the legible fragments);
// flagged OCR-CHECK in MANIFEST.md.
// 3.5 check: printed in 3.5 form; no conversion applied.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #353 — Savage Tidings: Advancing the Wyvern (Jason Bulmahn), pp. 58-61";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

const FRAME =
  "Magical ship upgrade (Sea Wyvern upgrade rules): a vessel can have only one mundane and one magical upgrade applied to each of its components, with exceptions as noted in Stormwrack and the Arms and Equipment Guide.";

export const DRAGON_353_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "ship-buoyant-boat",
    name: "Buoyant Boat (Ship Enchantment)",
    cost: "12,000 gp",
    summary:
      FRAME +
      " These enchantments are made to the hull of the ship; once in place, the vessel is never slowed due to the amount of cargo it is carrying. This enchantment does not, however, allow the vessel to exceed its maximum load. Installation time: 12 days. Craft Wondrous Item, levitate, CL 9th; creation 6,000 gp, 480 XP. Weight —. (Effect is load-buoyancy by levitation magic — no extra-dimensional space; see SCREENING.md.)",
  }),
  M({
    id: "ship-dolphin-helm",
    name: "Dolphin Helm",
    cost: "5,000 gp (+5) / 20,000 gp (+10) / 45,000 gp (+15)",
    summary:
      FRAME +
      " This magical captain's wheel has spokes carved in the likeness of leaping dolphins. Once installed, it grants a competence bonus on all Profession (sailor) checks made by the pilot of the boat: +5, +10, or +15 by strength of enchantment. This bonus stacks with that granted by masterwork controls. Installation time: 5 days (+5), 20 days (+10), 45 days (+15). Craft Wondrous Item, control water, CL 5th; creation 2,500 gp (+5), 10,000 gp (+10), 22,500 gp (+15); XP 200 (+5), 800 (+10), 1,800 (+15). Weight: 20 lb. for the +5 helm (as printed).",
  }),
  M({
    id: "ship-featherwood",
    name: "Featherwood (Ship Enchantment)",
    cost: "8,000 gp",
    summary:
      FRAME +
      " This upgrade changes the properties of a wooden boat's hull, allowing it to move as gracefully as a swan: once all of the hull's wood has been enchanted, the ship is capable of turning in half the listed distance (the Sea Wyvern, for example, can turn 45 degrees after moving only 30 feet), and the enhancement also doubles the amount of turn that can be made while stationary. Installation time: 8 days. Craft Wondrous Item, feather fall, CL 5th; creation 4,000 gp, 320 XP. Weight —.",
  }),
  M({
    id: "ship-fireball-catapult",
    name: "Fireball Catapult",
    category: "weapon",
    cost: "37,650 gp",
    summary:
      FRAME +
      " Few weapons are more feared on the open sea than the fireball catapult. This +2 catapult fires ordinary stones, but three times per day it can fire a special stone that explodes into an 8d6 fireball upon impact (DC 14 Reflex save halves the fire damage); the fire damage is in addition to the normal damage caused by the stone. Installation time: 37 days. Craft Magic Arms and Armor, fireball, CL 8th; creation 19,250 gp, 1,472 XP. Weight: 1,000 lb.",
  }),
  M({
    id: "ship-hull-field",
    name: "Hull Field",
    cost: "4,500 gp",
    summary:
      FRAME +
      " Nothing is more damaging to a vessel than a hole in one of its hull sections. This magic stone, attached to the keel of the boat, provides a limited amount of protection against such a calamity: in the event of a destroyed hull section, the hull field generates a wall of force over that section, preventing damage to neighboring sections and sealing the hole so water does not enter the ship. While the wall of force is in place, that section of hull is treated as undamaged; should an adjacent section be destroyed, the wall of force is unaffected. The wall remains in place for 1d4 days, at which time the section is considered destroyed unless repaired (repairing a single destroyed hull section at sea requires two DC 20 Craft (shipmaking) checks and two days' time). Each hull field stone can only be used once, and a ship can have no more than one installed for each size category above Large. Installation time: 5 days. Craft Wondrous Item, wall of force, CL 9th; creation 2,250 gp, 180 XP. Weight: 10 lb.",
  }),
  M({
    id: "ship-ironclad",
    name: "Ironclad (Ship Figurehead)",
    cost: "12,800 gp",
    summary:
      FRAME +
      " This rune-covered iron statue allows a ship to be cloaked in a protective field that makes it take on the appearance of iron. Installed at the ship's helm, the field takes only a standard action to activate and lasts for 10 rounds; when active, the field grants the ship a +8 armor bonus extending to all of its hull and rigging sections and to any other objects installed on the boat — loose objects, including crew, are not protected. The field can be used once per day. The statue is usually carved in the likeness of a boat and is only 10 inches tall. Installation time: 13 days. Craft Magic Arms and Armor, mage armor, CL 8th; creation 6,400 gp, 512 XP. Weight: 20 lb.",
  }),
  M({
    id: "ship-rod-of-repair",
    name: "Rod of Repair",
    category: "rod",
    cost: "22,000 gp",
    summary:
      FRAME +
      " This wooden rod is carefully carved with scenes of a ship at sea and tipped with a brass barnacle. Considered a great boon by any captain, a rod of repair can be used to repair up to 50 hit points of damage to a vessel's hull per day; when used, it repairs as much damage as possible to a single section. Activating the rod is a standard action and it must be touched to the damaged section to have any effect. The rod can be used to repair a destroyed hull section, but only if it is capable of bringing the section to above half hit points in a single use. Installation time: 22 days. Craft Magic Arms and Armor (as printed), mending, CL 7th; creation 11,000 gp, 880 XP. Weight: 5 lb.",
  }),
  M({
    id: "ship-storm-ballista",
    name: "Storm Ballista",
    category: "weapon",
    cost: "20,800 gp",
    summary:
      FRAME +
      " This light weapon is common among those who wish to attack ships without destroying them. The storm ballista is a +2 ballista capable of firing normal bolts, but three times per day it can fire a lightning bolt instead: this bolt deals 5d6 points of electrical damage along a 120-foot line, and those in its path receive a DC 14 Reflex save for half damage; when used in this way, the ballista does not fire a traditional bolt. Installation time: 20 days. Craft Magic Arms and Armor, lightning bolt, CL 5th; creation 10,800 gp, 860 XP. Weight: 500 lb.",
  }),
];
