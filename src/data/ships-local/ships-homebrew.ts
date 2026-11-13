import type { EquipmentItem, RandomTableDefinition } from "@/engine/types";

// Shaun's own homebrew spelljamming ships, from six text files in
// his Dropbox ("A POC PC related/3.All to do with ships" and
// "A POC DM related/Enemy Battleship.txt"). Every file carries the
// same shared blocks (crack crew, free turret, ammunition
// distribution system, heavy cannon and shot, misfire table,
// artillery-fire mechanics) after a per-ship header; the shared
// blocks are built once here and each ship's notes point to them.
// Figures are transcribed exactly as he wrote them (including his
// spelljamming speed of "100 million miles/h," which differs from
// the boxed set's per-day figure — his files, his numbers).
// House style: short mechanical summaries; his text is not
// reproduced wholesale. His spellings inside quotes are his own.

const SRC = "Homebrew Ships";
const PATH =
  "/A POC PC related/3.All to do with ships/ (Fubu.txt, helebalu.txt, isseum.txt, lady's grace.txt, loperwood.txt) and /A POC DM related/Enemy Battleship.txt";

const CREW = `Crack crew (identical in all six files): Medium Humanoid (varies); HD 5d6+15; hp 45; Init +3; Spd 30 ft; AC 15 (+3 Dex, leather half jurkin); Melee masterwork dagger +8 (1d4/19-20/x2); AL varies; SV Fort +6, Ref +12, Will +5; Str 11, Dex 16, Con 12, Int 10, Wis 10, Cha 10. Skills and Feats: Balance +13, Climb +12, Gamble +9, Intimidate +9, Jump +9, Knowledge (Arcane Space) +16, Operate Rigging +21, Profession (Heavy Weaponeer) +9, Speak Language +5, Use Rope +14; Skill Focus (Operate Rigging), Ship Weapon Loader (varies), Ship Weapon Proficiency (varies), Ship Weapon Focus (varies), Ship Weapon Specialization (varies), Improved Ship Weapon Critical (varies). A crack crew grants +2 initiative and +4 morale checks.`;

const FIT = `Armament (all six ships): replace all ballista with 2 Heavy cannons at each station; all ship weapons are mounted on Free Turrets and fed by the ship's Ammunition Distribution System (see both records in this pack). Landing: Land no, Water no. Maneuver Class D. Armor Rating 22 (+2 Dex of pilot). Spelljamming speed: 100 million miles/h (straight line space flight only) — as written in the files.`;

function ship(
  id: string,
  name: string,
  header: string,
  cost: string,
): EquipmentItem {
  return {
    id,
    name,
    category: "spelljamming ship",
    cost,
    weight: "—",
    notes: `${header} ${FIT} ${CREW}`,
    source: SRC,
    sourceUrl: PATH,
    ruleset: "homebrew",
  };
}

export const HOMEBREW_SHIPS: EquipmentItem[] = [
  ship(
    "homebrew-ship-fubu",
    "Fubu",
    `Tonnage 40 · Keel 100 ft · Beam 40 ft · Hull Points 40 · Crew: optimum 20 / max total passenger load 30 · Ship's Rating 3 (major helm, 7th-level technomancer) · Tactical speed 1,500 ft/round (51 mph, 1,200 miles/day).`,
    "750,000 gp",
  ),
  ship(
    "homebrew-ship-helebalu",
    "Helebalu",
    `Tonnage 80 · Keel 165 ft · Beam 65 ft · Hull Points 80 · Crew: optimum 40 / max total passenger load 80 · Ship's Rating 3 (major helm, 7th-level technomancer) · Tactical speed 1,500 ft/round (51 mph, 1,200 miles/day).`,
    "750,000 gp",
  ),
  ship(
    "homebrew-ship-isseum",
    "Isseum",
    `Tonnage 60 · Keel 145 ft · Beam 65 ft · Hull Points 60 · Crew: optimum 26 / max total passenger load 40 · Ship's Rating 3 (major helm, 7th-level technomancer) · Tactical speed 1,500 ft/round (51 mph, 1,200 miles/day).`,
    "750,000 gp",
  ),
  ship(
    "homebrew-ship-ladys-grace",
    "The Lady's Grace",
    `Tonnage 55 · Keel 155 ft · Beam 35 ft · Hull Points 55 · Crew: optimum 30 / max total passenger load 50 · Ship's Rating 3 (major helm, 7th-level technomancer) · Tactical speed 1,500 ft/round (51 mph, 1,200 miles/day).`,
    "750,000 gp",
  ),
  ship(
    "homebrew-ship-loperwood",
    "Loperwood",
    `Tonnage 60 · Keel 150 ft · Beam 55 ft · Hull Points 60 · Crew: optimum 26 / max total passenger load 40 · Ship's Rating 3 (major helm, 7th-level technomancer) · Tactical speed 1,500 ft/round (51 mph, 1,200 miles/day).`,
    "750,000 gp",
  ),
  ship(
    "homebrew-ship-enemy-battleship",
    "The Enemy Battleship",
    `Tonnage 80 · Keel 150 ft · Beam 50 ft · Hull Points 80 · Crew: optimum 30 / max total passenger load 50 · Ship's Rating 5 (major helm, 9th-level technomancer) · Tactical speed 2,500 ft/round (65 mph, 2,000 miles/day). The heavy of the fleet — the only one of the six rated SR 5.`,
    "1,000,000 gp",
  ),
];

export const HOMEBREW_SHIP_SYSTEMS: EquipmentItem[] = [
  {
    id: "homebrew-free-turret",
    name: "Free Turret (ship weapon mount)",
    category: "ship weapon",
    cost: "+5,000 gp (added to the weapon's cost)",
    weight: "—",
    notes: `A framework a ship weapon is set in, allowing it to pivot through a wide range of positions (including straight up), with counterbalances for the weapon's weight making even large weapons easy to move. A weapon mounted in a free turret is treated as being on a ship two sizes smaller when determining attack penalties due to ship size, and gains the benefits of a normal turret without the drawbacks of extra men or time to reposition — it can be positioned to any available firing arc as a free action. Downsides: price, and fragility — the counterweight system is delicate, and if the weapon takes half or more of its hit points in damage it is nonfunctional. A free turret must be built into the weapon; it cannot be added later. Standard fit on all six homebrew ships.`,
    source: SRC,
    sourceUrl: PATH,
    ruleset: "homebrew",
  },
  {
    id: "homebrew-ammunition-distribution-system",
    name: "Ammunition Distribution System",
    category: "ship system",
    cost: "—",
    weight: "—",
    notes: `A configuration of guide rails (likened in the file to a bowling-alley ball return) running from a reinforced munitions bunker in the heart of the ship to each weapon station, allowing the armaments to be breech-loaded in half the normal time. Only 2 rounds can be sent to a weapon station per round from the bunker (2-man team), and a round takes 2 rounds to reach the station. Reload time by loading crew: 4 crew — 1 move action (fire on the 3rd round); 2 crew — 1 full round (fire on the 4th round). No price is printed in the files. Standard fit on all six homebrew ships.`,
    source: SRC,
    sourceUrl: PATH,
    ruleset: "homebrew",
  },
  {
    id: "homebrew-heavy-cannon",
    name: "Heavy Cannon",
    category: "ship weapon",
    cost: "4,000 gp",
    weight: "4,000 lb.",
    notes: `Range increment 500 ft. Ammunition (ship's complement of 5 of each per cannon aboard): Cannonball 20 gp, 8d6, line, save DC 18, 24 lb.; Shell 25 gp, 6d6, 40 ft. blast, save DC 20, 24 lb.; Case shot 25 gp, 7d6, 50 ft., save DC 22, 24 lb.; Canister shot 30 gp, 7d6, 60 ft., save DC 20, 24 lb.; Grape shot 30 gp, 7d6, 80 ft., save DC 22, 24 lb. ARTILLERY FIRE (from the same files): artillery is direct or indirect fire (by cannon type) against a single 5-foot square chosen by the gunner. The gunner and Number 2 work as a team: the gunner makes a Profession (gunner) check (DC 20); Number 2 makes a Profession (gunner) check (DC 10) using aid another — on a success the gunner gains a +2 circumstance bonus. If the gunner's check succeeds, consult the Deviation Diagram (6 ft. to 10 ft. for direct fire, 10 ft. to 16 ft. for indirect fire) to find the actual target square, then resolve the area of effect and damage as normal. If the check fails, treat the shot as a grenade-like weapon: roll 1d6 and add +5 feet for every range increment of distance fired to find the distance, then use the appropriate Deviation Diagram for the actual square. (The Deviation Diagrams themselves are not in the files.) Black powder weapons use the Black Powder Misfires table in this pack.`,
    source: SRC,
    sourceUrl: PATH,
    ruleset: "homebrew",
  },
];

export const HOMEBREW_SHIP_TABLES: RandomTableDefinition[] = [
  {
    id: "homebrew-black-powder-misfires",
    name: "Black Powder Misfires",
    ruleset: "homebrew",
    die: "d20",
    source: SRC,
    sourceUrl: PATH,
    entries: [
      {
        roll: "1–5",
        title: "Fires Normally",
        effect:
          "Weapon fires normally, but probably misses since the attack roll was a natural 1.",
      },
      {
        roll: "6–9",
        title: "Charge Fails to Ignite",
        effect:
          "For one reason or another, the charge fails to ignite. The weapon can be fired again without having to reload.",
      },
      {
        roll: "10–12",
        title: "Weak Charge",
        effect:
          "The charge is not sufficient to propel the round far enough to hit the target. The shot is wasted.",
      },
      {
        roll: "13–15",
        title: "Weapon Jams",
        effect:
          "The weapon jams. It takes 1d4 full round actions to clear the jam before the weapon can be used again.",
      },
      {
        roll: "16–18",
        title: "Barrel Fouled",
        effect:
          "The barrel becomes fouled with powder residue. It takes 3d10 minutes to clean the weapon so it can be used again.",
      },
      {
        roll: "19–20",
        title: "Weapon Explodes",
        effect:
          "The weapon explodes, inflicting normal damage to its user and area. The weapon must be repaired or replaced. Modifiers: subtract 1 from the d20 roll when using a masterwork weapon; subtract 1 when using percussion cap ammunition. These modifiers are cumulative. (Roll this table whenever an attack roll with a firearm results in a natural 1.)",
      },
    ],
  },
];
