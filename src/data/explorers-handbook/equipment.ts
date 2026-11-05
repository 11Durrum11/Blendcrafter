import type { EquipmentItem } from "@/engine/types";

// Explorer's Handbook (Eberron, Wizards of the Coast, 2005)
// equipment: the elemental and mundane vessels of Chapter 2
// (Tools of the Trade) that the book prices, plus the two
// specific magic weapons of the Appendix (filed as
// equipment, per the house convention for specific weapons
// — see the Magic Item Compendium specific-weapons pack).
// Transcribed from Shaun's own copy (text-extracted),
// 2026-11-05. Prices are as printed: the five vessels with
// full statistics blocks carry their own Price lines; the
// Orien coach and the lightning rail carts are priced only
// in Table 1-1: Transport Prices (p. 18, the "Own" column).
// The book prints no statistics block (and no price) for
// the elemental land cart, the undersea ship, or the Orien
// coach beyond Table 1-1, so those are not built. Vehicle
// statistics blocks are carried in the notes; the equipment
// schema has no vehicle-stat structure. Summaries are
// short mechanical paraphrases in our own words.

const EH_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Explorer's Handbook.pdf";

export const EXPLORERS_HANDBOOK_EQUIPMENT: EquipmentItem[] = [
  {
    id: "airship",
    name: "Airship",
    category: "vehicle",
    cost: "92,000 gp",
    weight: "—",
    notes: "Elemental vessel (House Lyrandar): Colossal vehicle; Airworthiness +6; Shiphandling -4; Speed Fly 100 ft. (poor); Overall AC -3; Hull sections 1,000 (crashes when 250 sections are destroyed); Section hp 60 (hardness 5); Section AC 3; Ram 12d6; SA fire ring; SQ resistance to fire 10, hover; Space 90 ft. by 300 ft.; Height 50 ft. (fire ring 110-ft. diameter); Watch 20; Complement 150; Cargo 30 tons. A Huge fire or air elemental is bound into a ring around the soarwood hull, giving lighter-than-air buoyancy: the ship hovers with no minimum speed (but cannot turn in place), and with its elemental suppressed it remains aloft but moves only 1 mile per hour. The elemental ring deals 3d8 damage (fire, or bludgeoning for an air elemental) to any creature or object passing through it. Aura: strong conjuration, CL 15th.",
    source: "Explorer's Handbook, p. 30",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "stormship",
    name: "Stormship",
    category: "vehicle",
    cost: "76,000 gp",
    weight: "—",
    notes: "Elemental warship: Colossal vehicle; Seaworthiness +1; Shiphandling +2; Speed 40 ft. (nautical average); Overall AC -3; Hull sections 45 (sinks when 12 sections are destroyed); Section hp 60 (hardness 5); Section AC 3; Rigging sections 2; Rigging hp 80 (hardness 0), AC 1; Ram 12d6; Mounts 6 light, 2 heavy, ram; SA lightning ring; SQ resistance to electricity 10; Space 100 ft. by 30 ft.; Height 15 ft. (draft 10 ft.); Watch 8; Complement 40; Cargo 200 tons. Armaments: 6 light ballistae, 2 heavy ballistae. A bound air elemental creates stronger winds and a perpetual storm (thunderstorms form within a 1-mile radius, lingering 4d12 hours after the ship leaves). While gripping the ship's wheel of wind and water, a pilot with the Lesser Mark of Storm can expend a daily use of the mark's spell-like abilities to use call lightning (bolts deal 3d10 damage) instead; a pilot with the Greater Mark of Storm can likewise use call lightning storm or chain lightning. Touching or moving through the lightning ring deals 3d8 electricity damage. With the elemental suppressed the ship sails as a regular sailing ship and the storm abates over 4d6 hours. Aura: strong conjuration, CL 15th.",
    source: "Explorer's Handbook, p. 40",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "wind-galleon",
    name: "Wind Galleon",
    category: "vehicle",
    cost: "64,000 gp",
    weight: "—",
    notes: "Elemental cargo ship (House Lyrandar): Colossal vehicle; Seaworthiness +4; Shiphandling +3; Speed 100 ft. (perfect); Overall AC -3; Hull sections 80 (sinks when 20 sections are destroyed); Section hp 60 (hardness 5); Section AC 3; Ram 6d6; Space 90 ft. by 30 ft.; Height 30 ft. (draft 0 ft.); Watch 7; Complement 30; Cargo 150 tons. A bound air elemental in a ring on the aft deck propels the part-soarwood hull, which skims the surface on two long fins; sails help it steer (with sails furled its top speed falls to 10 miles per hour). The design is fast but vulnerable and prone to capsizing. Wave galleons, which bind water elementals instead of air, are otherwise identical. Without its elemental, the ship moves at half the speed of a normal ship under the same conditions. Aura: strong conjuration, CL 15th.",
    source: "Explorer's Handbook, pp. 41-42",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "lyrandar-sailing-ship",
    name: "Lyrandar Sailing Ship",
    category: "vehicle",
    cost: "18,000 gp",
    weight: "—",
    notes: "Colossal vehicle; Seaworthiness -1; Shiphandling +1; Speed 60 ft. (average); Overall AC -3; Hull sections 32 (sinks when 8 sections are destroyed); Section hp 50 (hardness 5); Section AC 3; Rigging sections 2; Rigging hp 80 (hardness 0), AC 1; Ram 12d6; Space 80 ft. by 20 ft.; Height 10 ft. (draft 10 ft.); Watch 5; Complement 30; Cargo 150 tons. An ordinary sailing ship fitted with a House Lyrandar wheel of wind and water (included in the price), letting a dragonmark heir with the Mark of Storm propel it faster than normal; it still requires a full crew to work sails and rudder.",
    source: "Explorer's Handbook, p. 42",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "lhazaar-sea-galleon",
    name: "Lhazaar Sea Galleon",
    category: "vehicle",
    cost: "17,000 gp",
    weight: "—",
    notes: "Colossal vehicle; Seaworthiness +1; Shiphandling -1; Speed wind x 10 ft. (average); Overall AC -3; Hull sections 100 (sinks when 25 sections are destroyed); Section hp 70 (hardness 5); Section AC 3; Rigging sections 2; Rigging hp 100 (hardness 0), AC 1; Ram 14d6; Mounts 8 light, ram; Space 110 ft. by 30 ft.; Height 15 ft. (draft 15 ft.); Watch 10; Complement 80; Cargo 200 tons. Armaments: 6 light ballistae, 2 light catapults. The sturdy, heavily armed sailing galleon of the Lhazaar Principalities, built with thick hulls for staying power in naval combat and oars for calm seas; designed to be sailed by a skeleton crew so extra hands can work the weapons or repel boarders.",
    source: "Explorer's Handbook, p. 42",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "lightning-rail-crew-cart",
    name: "Lightning Rail Crew Cart",
    category: "vehicle",
    cost: "58,000 gp",
    weight: "—",
    notes: "Purchase price from Table 1-1: Transport Prices (the book prints no statistics block for it). The lead cart of a lightning rail coach: it houses the bound Huge air elemental's Khyber dragonshard in its elemental housing chamber, the helm (where an Orien pilot controls the elemental through the lightning reins), crew stations for a crew of ten, and up to 50 tons of cargo capacity, usually emergency and repair supplies. A coach normally runs with a crew cart at both ends; the rear cart's elemental stays suppressed until the return trip. The coach travels at about 30 miles per hour (720 miles per day) along lines of conductor stones; off the line, a cart simply falls to the ground, inert.",
    source: "Explorer's Handbook, p. 18",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "lightning-rail-passenger-cart",
    name: "Lightning Rail Passenger Cart, Standard",
    category: "vehicle",
    cost: "12,000+ gp",
    weight: "—",
    notes: "Purchase price from Table 1-1: Transport Prices (the book prints no statistics block for it; 'standard' is the table's name for the basic passenger cart, which also sets the 12,000+ gp base for other cart types). A lightning rail cart 60 to 100 feet long that floats about 5 feet above the conductor-stone line. Carts vary widely by purpose — passenger, cargo, sleeper, dining, galley, first-class, and steerage configurations — and a bound Huge air elemental in the crew cart can pull a train of up to ten carts.",
    source: "Explorer's Handbook, p. 18",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "sailing-ship-soarwood",
    name: "Sailing Ship, Soarwood",
    category: "vehicle",
    cost: "40,000 gp",
    weight: "—",
    notes: "Purchase price from Table 1-1: Transport Prices (the book prints no separate statistics block for it). A sailing ship built with a soarwood hull, whose buoyant timber makes the vessel lighter and faster than an ordinary sailing ship: fare 5 cp/mi., cargo 2 cp/mi. per 100 lb., charter 200 gp/day, speed 4 mph (96 miles per day) in Table 1-1.",
    source: "Explorer's Handbook, p. 18",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "orien-coach",
    name: "Orien Coach",
    category: "vehicle",
    cost: "200 gp",
    weight: "—",
    notes: "Purchase price from Table 1-1: Transport Prices. A House Orien covered wagon with separate front and rear compartments, each with a pair of cushioned benches seating three Medium creatures (twelve passengers total), pulled by four strong horses (House Vadalis stock). The driver sits atop the front, often with crates of mail or other cargo, and a second crew member (often a bodyguard) can sit beside the driver. Scheduled coaches run the Orien trade roads at about 5 mph (40 miles per day).",
    source: "Explorer's Handbook, p. 18",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "titanic-hammer",
    name: "Titanic Hammer",
    category: "weapon",
    cost: "34,772 gp (+1); 44,772 gp (+2); 58,772 gp (+3); 131,852 gp (greater, +4); 153,852 gp (greater, +5)",
    weight: "160 lb.",
    notes: "An adamantine warhammer of the ancient giants of Xen'drik; it resizes to fit its wielder but never weighs less than 160 pounds, and a wielder with Strength below 18 takes a -4 penalty on attacks with it. It deals double damage to objects, including sundered weapons and shields. Once per day, by slamming its head against the ground, it creates a wave of broken earth along a 60-foot line in the ground that makes a bull rush attack against every creature in its path (+14 bonus on the Strength check), always pushing those caught the full distance allowed; all squares touched have light debris afterward. Greater titanic hammers (+4 or +5) can instead create an earthquake (as the spell, CL 15th) once per day. Moderate (+1 or +2) or strong (+3) transmutation; CL 11th (+1 or +2) or 12th (+3).",
    source: "Explorer's Handbook, pp. 153-154",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
  {
    id: "implacable-blade",
    name: "Implacable Blade",
    category: "weapon",
    cost: "19,815 gp (+1); 33,815 gp (+2); 51,815 gp (+3)",
    weight: "6 lb.",
    notes: "A byeshk longsword of the ancient Dhakaani Empire (variants exist as scimitars, greatswords, and other weapons; byeshk overcomes the damage reduction of daelkyr, dolgaunts, and mind flayers). When you injure a creature with it, that creature loses 2 additional hit points per wound at the beginning of each of your turns; the wound does not heal naturally and resists healing spells — the loss can be stopped by a DC 16 Heal check or a cure or heal spell, but casting a cure or heal spell on the victim requires a DC 16 caster level check or the spell has no effect on that character. On command, the blade emits (or douses) light providing 20 feet of bright illumination and 20 feet of shadowy illumination. If the blade is ever reduced to less than half its hit points (15 hp/hardness 19 at +1, 20 hp/21 at +2, 25 hp/23 at +3), the Khyber dragonshard in its pommel shatters and releases the bearded devil bound within, which attacks you; thereafter it is a magic byeshk longsword of its enhancement bonus with no other powers. Moderate conjuration; CL 9th.",
    source: "Explorer's Handbook, pp. 156-157",
    sourceUrl: EH_PATH,
    ruleset: "eberron",
  },
];
