// Dragon Magazine #345 (July 2006) — equipment draft: 4 records.
// "Excursion: Four Ways to Travel the World" (Martin Ralya),
// pp. 44-53 — four named conveyances with deck plans: the Silver
// Trident (oceangoing sloop), the Kraken's Bane (submersible),
// Serella's Caravan (wagon train), and the Steambolt (hot-air
// balloon airship).
// ⚠️ SHAPE CHOICE — FLAGGED in SCREENING.md for Shaun: none of the
// four prints a vehicle stat block, a purchase price, a caster
// level/aura, or a construction line. They are descriptive
// conveyances with capacities and hire terms, so they stage as
// EQUIPMENT records (category "vehicle", cost "—") with the hire
// terms carried in the notes. The magic-item shape used for issue
// #331's wondrous vehicles would misrepresent them — those were
// printed as magic items with prices and CLs; these are not magic
// items. The four captains' NPC stat blocks and the adventure
// hooks digest in reference.md.
// Details verified against rendered page images (magazine pp. 45,
// 47-48, 50, 52-53); the image governs over the OCR stream — it
// confirms the Kraken's Bane's depth as printed in METERS (a
// genuine print oddity in a US D&D magazine; carried as printed,
// not converted — see SCREENING.md) and the Steambolt's fares
// (3 gp/day, 8 gp/day with cabin, 40 gp/day whole hire).
// ⚠️ APOC NOTE: the Steambolt flies. The Melairshield bars flying
// vessels over the Bastion; the record stages as printed with the
// note carried here and the flag in SCREENING.md (cf. the issue-331
// flying-vehicle flags).

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #345 — Excursion: Four Ways to Travel the World (Martin Ralya), pp. 44-53";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "vehicle",
    weight: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_345_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "silver-trident",
    name: "Silver Trident",
    cost: "—",
    notes:
      "Vehicle (unique named vessel; no purchase price printed — berth rent is left to Captain Mallik's whim). A three-masted sloop converted from wartime duties to service as a seafaring trader, capable of transporting 400 tons of cargo; she rides low in the water when fully laden but makes excellent time with a favorable wind. In addition to her captain, Aressa Mallik, the Trident has a crew of 30 sailors. A secret smuggler's hold can hide roughly 1,000 lb. of cargo or five fugitives. The main deck carries the captain's cabin and a noble stateroom aft, two massive trapdoors into the cargo hold, and two small collapsible cranes.",
  }),
  E({
    id: "krakens-bane",
    name: "Kraken's Bane",
    cost: "—",
    notes:
      "Vehicle (unique named vessel; no purchase price printed). A wholly unique 60-foot-long submersible of vaguely ichthyoid (fish-like) shape, originally constructed for an eccentric wizard who wanted to capture strange undersea creatures. The boat has room for twelve Medium creatures total and little else, and is worked by a crew of four led by Captain Zagiir. It has few defenses except its maneuverability and a powerful hull-splintering ram. The Kraken's Bane can dive to a depth of 200 meters (depth as printed, in meters) and is equipped with a magical air recirculation system that allows her to stay submerged up to three days with a full crew; three hours topside with her hatch open recharges the system for another three days of continuous use. An elongated dorsal fin houses a periscope that rotates 360 degrees, and forward observation is through two large portholes shaped to look like eyes.",
  }),
  E({
    id: "serellas-caravan",
    name: "Serella's Caravan",
    cost: "—",
    notes:
      "Vehicle (wagon train; no purchase price printed — hire terms as follows). A caravan of fifteen wagons, each drawn by two heavy horses and fitted with iron-rimmed wheels: one watch wagon, ten merchant wagons, the caravan master's wagon, and three guard wagons. The crew traveling with Caravan Master Serella Laer numbers twenty-three guards, sixteen drovers, and four outriders, plus two cooks and six hired hands. Passage: anyone wishing to become a passenger pays 5 silver pieces per day of the journey, half in advance and the rest, based on the trip's actual duration, upon reaching the destination. Additional wagons may join on at 1 gold piece per day per horse. Groups wishing to hire on must prove they can serve a useful purpose; Serella pays hired hands and guards 2 sp a day, in addition to providing food, weak ale, and uncomfortable places to sleep.",
  }),
  E({
    id: "steambolt",
    name: "Steambolt",
    cost: "—",
    notes:
      "Vehicle (unique named airship; no purchase price printed — hire terms as follows). A strange contraption: a specially converted sailing ship suspended from a massive hot-air balloon — an oblong bladder of magically treated canvas, roughly 50 feet wide and 150 feet long — with its masts removed and four large fans mounted to its hull, turned by an elaborate mechanism in the ship's bowels. Captain Feravir Dunogh commands a crew of twelve other gnomes and dwarves (pilots, engineers, and crossbowmen), and the balloon can accommodate up to thirty passengers in somewhat cramped quarters. The balloon is divided into six inaccessible compartments, each with hardness 2 and 25 hit points; the Steambolt can fly as normal with as many as three compartments destroyed, begins descending at a rate of 20 feet per round if a fourth is burst, and plummets if five are destroyed (all aboard take falling damage from the height fallen, half of it nonlethal); destroying all six compartments causes the ship and all aboard to take full falling damage from its current altitude. The ship carries an arsenal of 'droppers' — stones, specially weighted arrows, oil flasks, and other alchemical items — in bomb bays along the keel, for bombarding enemies on the ground. Hire: passengers pay 3 gp a day, or 8 gp a day with one of the passenger cabins; the vessel can also be hired to travel to specific destinations at 40 gp per day plus any expenditures the boat might incur during travel. APOC: a flying vessel — the Melairshield bars flying vessels over the Bastion.",
  }),
];
