import type { EquipmentItem } from "@/engine/types";

// Pirates! (d20) — Chapter 4, Table 4-1: Common Ship Types,
// from Shaun's own copy ("A POC DM related/Desktop/Sourcebooks/
// Pirates!.pdf", fetched for this sweep). Thirty-five sea-going
// ship types with full statistics. The table's Cost column is
// printed in THOUSANDS of gp (kgp); each record's cost field
// gives the converted gp figure and its notes keep the printed
// kgp figure alongside.
// Column key (Table 4-1 legend, printed p. 74): L = length bow
// to stern excluding bowsprit · B = beam at center · D = depth
// main deck to keel · Tons = total tonnage · Cr = average crew
// needed to sail her · Tr = transport capacity (additional
// troops, oarsmen or passengers) · Cg = cargo tonnage · R =
// rigging (S square, L lateen) · Sp = maximum speed in knots ·
// O = oarsmen for propulsion · M = maneuverability class (see
// Table 4-2: A = 6 30-degree turns/minute at speed 0 (rowed),
// B = 3/min at speed 0 (rowed), C = 3/min, D = 2/min, E = 1/min,
// F = 1 per two minutes) · SW = seaworthiness, modifier to
// rolls against weather-related DCs · Hull = hull hit points
// (a ship starts sinking after half) · Hd = hull hardness (the
// hull's Break DC is hardness + 20) · Int = interior hit
// points (hardness 5).
// The book's custom ship construction rules (Tables 4-3 on)
// and its ship-section combat tables are rules systems, not
// ship records, and are inventoried in the sweep report only.
// These are water ships: category "ship", distinct from both
// "spelljamming ship" and "airship."
// House style: short mechanical summaries; the book's text is
// not reproduced.

const PIR = "Pirates! (d20), Ch. 4 — Table 4-1: Common Ship Types";
const PIR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/Pirates!.pdf (Dropbox)";

function seaShip(
  id: string,
  name: string,
  era: string,
  kgp: string,
  stats: string,
): EquipmentItem {
  const gp = Math.round(parseFloat(kgp) * 1000).toLocaleString("en-US");
  return {
    id: `pirates-${id}`,
    name,
    category: "ship",
    cost: `${gp} gp`,
    weight: "—",
    notes: `${era}. Cost ${kgp} kgp (thousands of gp) as printed. ${stats}`,
    source: PIR,
    sourceUrl: PIR_PATH,
    ruleset: "core",
  };
}

// stats order: L · B · D · Tons · Crew · Transport · Cargo ·
// Rigging · Speed · Oarsmen · Maneuverability · Seaworthiness ·
// Hull hp · Hardness · Interior hp
export const PIRATES_SHIPS: EquipmentItem[] = [
  // Category: Longship Era
  seaShip("longboat", "Longboat", "Longship Era", "4", "Length 35 ft · Beam 10 ft · Depth 4 ft · 9 tons · Crew 3 · Transport 26 · Cargo 4 t · Rigging Square · Speed 7 k · Oarsmen 12 · Maneuverability C,A · Seaworthiness -3 · Hull 20 hp · Hardness 8 · Interior 10 hp."),
  seaShip("longship", "Longship (Pirates!)", "Longship Era", "6", "Length 70 ft · Beam 17 ft · Depth 6 ft · 50 tons · Crew 5 · Transport 75 · Cargo 20 t · Rigging Square · Speed 7 k · Oarsmen 30 · Maneuverability D,A · Seaworthiness 0 · Hull 100 hp · Hardness 10 · Interior 50 hp."),
  seaShip("drakkar", "Drakkar", "Longship Era", "37.5", "Length 150 ft · Beam 25 ft · Depth 8 ft · 210 tons · Crew 18 · Transport 230 · Cargo 100 t · Rigging Square · Speed 7 k · Oarsmen 70 · Maneuverability D,B · Seaworthiness 0 · Hull 250 hp · Hardness 10 · Interior 125 hp."),
  // Category: Galley Era
  seaShip("fusta", "Fusta", "Galley Era", "28", "Length 80 ft · Beam 13 ft · Depth 5 ft · 37 tons · Crew 8 · Transport 175 · Cargo 15 t · Rigging Lateen · Speed 6 k · Oarsmen 90 · Maneuverability C,A · Seaworthiness -3 · Hull 60 hp · Hardness 10 · Interior 40 hp."),
  seaShip("galley", "Galley (Pirates!)", "Galley Era", "33", "Length 130 ft · Beam 16 ft · Depth 6 ft · 92 tons · Crew 15 · Transport 320 · Cargo 30 t · Rigging Lateen · Speed 5 k · Oarsmen 150 · Maneuverability D,A · Seaworthiness -3 · Hull 150 hp · Hardness 10 · Interior 100 hp."),
  seaShip("galeass", "Galeass", "Galley Era", "60", "Length 150 ft · Beam 25 ft · Depth 10 ft · 270 tons · Crew 45 · Transport 520 · Cargo 80 t · Rigging Lateen · Speed 6 k · Oarsmen 210 · Maneuverability E,A · Seaworthiness -5 · Hull 320 hp · Hardness 12 · Interior 200 hp."),
  seaShip("great-galley", "Great Galley", "Galley Era", "56", "Length 150 ft · Beam 25 ft · Depth 11 ft · 300 tons · Crew 30 · Transport 140 · Cargo 130 t · Rigging Lateen · Speed 5 k · Oarsmen 90 · Maneuverability E,B · Seaworthiness -3 · Hull 320 hp · Hardness 10 · Interior 200 hp."),
  seaShip("brigantine", "Brigantine", "Galley Era", "24", "Length 60 ft · Beam 15 ft · Depth 8 ft · 50 tons · Crew 12 · Transport 90 · Cargo 20 t · Rigging Lateen · Speed 8 k · Oarsmen 40 · Maneuverability C,A · Seaworthiness -3 · Hull 45 hp · Hardness 8 · Interior 35 hp."),
  // Category: Early Merchant Ships
  seaShip("cog", "Cog", "Early Merchant Ships", "30", "Length 75 ft · Beam 25 ft · Depth 18 ft · 220 tons · Crew 12 · Transport 40 · Cargo 130 t · Rigging Square · Speed 5 k · Oarsmen — · Maneuverability E · Seaworthiness +3 · Hull 150 hp · Hardness 10 · Interior 120 hp."),
  seaShip("round-ship", "Round Ship", "Early Merchant Ships", "31", "Length 70 ft · Beam 22 ft · Depth 20 ft · 200 tons · Crew 21 · Transport 50 · Cargo 110 t · Rigging Lateen · Speed 5 k · Oarsmen — · Maneuverability E · Seaworthiness 0 · Hull 120 hp · Hardness 8 · Interior 80 hp."),
  seaShip("grain-ship", "Grain Ship", "Early Merchant Ships", "52", "Length 180 ft · Beam 47 ft · Depth 32 ft · 1,830 tons · Crew 40 · Transport 100 · Cargo 1,080 t · Rigging Square · Speed 4 k · Oarsmen — · Maneuverability F · Seaworthiness -3 · Hull 1,000 hp · Hardness 8 · Interior 500 hp."),
  // Category: Carrack Era
  seaShip("caravel", "Caravel (Pirates!)", "Carrack Era", "36", "Length 60 ft · Beam 18 ft · Depth 15 ft · 110 tons · Crew 13 · Transport 40 · Cargo 60 t · Rigging Lateen · Speed 7 k · Oarsmen — · Maneuverability D · Seaworthiness +3 · Hull 75 hp · Hardness 10 · Interior 60 hp."),
  seaShip("small-carrack", "Small Carrack", "Carrack Era", "45", "Length 80 ft · Beam 26 ft · Depth 17 ft · 230 tons · Crew 21 · Transport 50 · Cargo 135 t · Rigging Square · Speed 6 k · Oarsmen — · Maneuverability E · Seaworthiness +5 · Hull 200 hp · Hardness 10 · Interior 135 hp."),
  seaShip("large-carrack", "Large Carrack", "Carrack Era", "55", "Length 100 ft · Beam 33 ft · Depth 20 ft · 420 tons · Crew 42 · Transport 100 · Cargo 250 t · Rigging Square · Speed 7 k · Oarsmen — · Maneuverability E · Seaworthiness +5 · Hull 420 hp · Hardness 12 · Interior 250 hp."),
  seaShip("great-carrack", "Great Carrack", "Carrack Era", "70", "Length 140 ft · Beam 45 ft · Depth 23 ft · 940 tons · Crew 85 · Transport 250 · Cargo 530 t · Rigging Square · Speed 6 k · Oarsmen — · Maneuverability E · Seaworthiness +5 · Hull 800 hp · Hardness 13 · Interior 600 hp."),
  seaShip("xebec", "Xebec", "Carrack Era", "60", "Length 90 ft · Beam 24 ft · Depth 10 ft · 140 tons · Crew 35 · Transport 200 · Cargo 60 t · Rigging Lateen · Speed 10 k · Oarsmen — · Maneuverability D · Seaworthiness 0 · Hull 200 hp · Hardness 8 · Interior 140 hp."),
  // Category: Galleon Era
  seaShip("galleon", "Galleon (Pirates!)", "Galleon Era", "75", "Length 135 ft · Beam 33 ft · Depth 25 ft · 760 tons · Crew 75 · Transport 200 · Cargo 400 t · Rigging Square · Speed 7 k · Oarsmen — · Maneuverability D · Seaworthiness +10 · Hull 600 hp · Hardness 14 · Interior 400 hp."),
  seaShip("merchant-ship", "Merchant (ship)", "Galleon Era", "85", "Length 180 ft · Beam 45 ft · Depth 28 ft · 1,550 tons · Crew 150 · Transport 250 · Cargo 925 t · Rigging Square · Speed 6 k · Oarsmen — · Maneuverability D · Seaworthiness +10 · Hull 1,000 hp · Hardness 12 · Interior 800 hp."),
  seaShip("man-o-war", "Man-o-War", "Galleon Era", "70", "Length 160 ft · Beam 35 ft · Depth 26 ft · 1,010 tons · Crew 200 · Transport 700 · Cargo 400 t · Rigging Square · Speed 8 k · Oarsmen — · Maneuverability D · Seaworthiness +10 · Hull 1,000 hp · Hardness 14 · Interior 600 hp."),
  seaShip("royal-galleon", "Royal Galleon", "Galleon Era", "105", "Length 200 ft · Beam 50 ft · Depth 30 ft · 2,040 tons · Crew 300 · Transport 1,600 · Cargo 750 t · Rigging Square · Speed 7 k · Oarsmen — · Maneuverability E · Seaworthiness +5 · Hull 2,000 hp · Hardness 18 · Interior 1,400 hp."),
  seaShip("frigate", "Frigate", "Galleon Era", "50", "Length 110 ft · Beam 30 ft · Depth 15 ft · 330 tons · Crew 45 · Transport 110 · Cargo 180 t · Rigging Square · Speed 10 k · Oarsmen — · Maneuverability D · Seaworthiness +10 · Hull 350 hp · Hardness 12 · Interior 250 hp."),
  // Category: Small Ships
  seaShip("ketch", "Ketch", "Small Ships", "18", "Length 65 ft · Beam 17 ft · Depth 11 ft · 82 tons · Crew 9 · Transport 20 · Cargo 50 t · Rigging Square · Speed 8 k · Oarsmen — · Maneuverability D · Seaworthiness +5 · Hull 70 hp · Hardness 10 · Interior 50 hp."),
  seaShip("polacre", "Polacre", "Small Ships", "15", "Length 50 ft · Beam 15 ft · Depth 10 ft · 50 tons · Crew 5 · Transport 13 · Cargo 30 t · Rigging Lateen · Speed 8 k · Oarsmen — · Maneuverability D · Seaworthiness 0 · Hull 45 hp · Hardness 8 · Interior 30 hp."),
  seaShip("keelboat", "Keelboat (Pirates!)", "Small Ships", "11", "Length 50 ft · Beam 15 ft · Depth 8 ft · 39 tons · Crew 6 · Transport 30 · Cargo 20 t · Rigging Square · Speed 4 k · Oarsmen 16 · Maneuverability F,B · Seaworthiness -5 · Hull 40 hp · Hardness 8 · Interior 25 hp."),
  seaShip("pinnace", "Pinnace", "Small Ships", "16", "Length 45 ft · Beam 13 ft · Depth 9 ft · 35 tons · Crew 7 · Transport 25 · Cargo 17 t · Rigging Square · Speed 9 k · Oarsmen 12 · Maneuverability D,B · Seaworthiness 0 · Hull 30 hp · Hardness 8 · Interior 20 hp."),
  seaShip("yacht", "Yacht", "Small Ships", "14", "Length 40 ft · Beam 11 ft · Depth 8 ft · 23 tons · Crew 8 · Transport 20 · Cargo 14 t · Rigging Lateen · Speed 11 k · Oarsmen — · Maneuverability C · Seaworthiness +5 · Hull 30 hp · Hardness 10 · Interior 18 hp."),
  seaShip("fishing-boat", "Fishing Boat (Pirates!)", "Small Ships", "3.5", "Length 30 ft · Beam 10 ft · Depth 6 ft · 12 tons · Crew 3 · Transport 6 · Cargo 7 t · Rigging Lateen · Speed 7 k · Oarsmen — · Maneuverability D · Seaworthiness -3 · Hull 15 hp · Hardness 6 · Interior 15 hp."),
  seaShip("sailboat", "Sailboat (Pirates!)", "Small Ships", "2.5", "Length 20 ft · Beam 6 ft · Depth 4 ft · 3 tons · Crew 2 · Transport — · Cargo 2 t · Rigging Square · Speed 6 k · Oarsmen 2 · Maneuverability C,A · Seaworthiness -5 · Hull 6 hp · Hardness 5 · Interior 6 hp."),
  // Category: Fantastic Ships
  seaShip("dwarven-knorr", "Dwarven Knorr", "Fantastic Ships", "23", "Length 50 ft · Beam 15 ft · Depth 6 ft · 30 tons · Crew 6 · Transport 25 · Cargo 15 t · Rigging Square · Speed 7 k · Oarsmen 8 · Maneuverability D,A · Seaworthiness 0 · Hull 50 hp · Hardness 10 · Interior 20 hp."),
  seaShip("dwarven-skaid", "Dwarven Skaid", "Fantastic Ships", "65", "Length 100 ft · Beam 20 ft · Depth 7 ft · 100 tons · Crew 9 · Transport 180 · Cargo 40 t · Rigging Square · Speed 8 k · Oarsmen 50 · Maneuverability D,A · Seaworthiness 0 · Hull 150 hp · Hardness 12 · Interior 60 hp."),
  seaShip("elven-fusta", "Elven Fusta", "Fantastic Ships", "52", "Length 100 ft · Beam 15 ft · Depth 8 ft · 87 tons · Crew 20 · Transport 285 · Cargo 10 t · Rigging Lateen · Speed 7 k · Oarsmen 160 · Maneuverability D,A · Seaworthiness 0 · Hull 130 hp · Hardness 13 · Interior 50 hp."),
  seaShip("elven-galley", "Elven Galley", "Fantastic Ships", "72", "Length 140 ft · Beam 23 ft · Depth 10 ft · 230 tons · Crew 35 · Transport 500 · Cargo 60 t · Rigging Lateen · Speed 6 k · Oarsmen 240 · Maneuverability D,A · Seaworthiness 0 · Hull 350 hp · Hardness 16 · Interior 150 hp."),
  seaShip("gnomish-paddlewheeler", "Gnomish Paddlewheeler", "Fantastic Ships", "95", "Length 80 ft · Beam 20 ft · Depth 12 ft · 130 tons · Crew 24 · Transport 125 · Cargo 50 t · Rigging Square · Speed 5 k · Oarsmen — · Maneuverability D,B · Seaworthiness -3 · Hull 130 hp · Hardness 8 · Interior 80 hp."),
  seaShip("gnomish-fluit", "Gnomish Fluit", "Fantastic Ships", "80", "Length 160 ft · Beam 50 ft · Depth 40 ft · 2,080 tons · Crew 250 · Transport 1,100 · Cargo 1,100 t · Rigging Square · Speed 5 k · Oarsmen — · Maneuverability F · Seaworthiness -3 · Hull 2,000 hp · Hardness 8 · Interior 1,200 hp."),
  seaShip("orcish-dromon", "Orcish Dromon", "Fantastic Ships", "120", "Length 200 ft · Beam 55 ft · Depth 12 ft · 880 tons · Crew 30 · Transport 1,500 · Cargo 300 t · Rigging Square · Speed 2 k · Oarsmen 600 · Maneuverability F,B · Seaworthiness 0 · Hull 850 hp · Hardness 8 · Interior 500 hp."),
  {
    id: "pirates-sunken-dreams",
    name: "Sunken Dreams (named galleon)",
    category: "ship",
    cost: "75,000 gp (as a galleon; modifications unpriced)",
    weight: "—",
    notes: `A beautifully ornate galleon (use the Galleon row of Table 4-1) captained for the last 50 years by the elven salvager Kaliegh Sharpeyes (Ch. 2 pirate profile). Outfitted from her salvage wealth: silver-studded masts and ship's wheel, bejeweled yardarms, golden-threaded sails; every sailor has at least a bed and locker, most their own cabin. Crew is light for her size — only about 70 people, almost all elves, highly trained on the specialized rigging and modifications (new crew need at least a full year of training before they are competent aboard her). Very well armed: 16 large cannon built into a special raised fore deck in addition to the guns normally found on a ship of this class. Despite the extra structure, elven handiwork lets her maneuver as well and sail as fast as a normal galleon; the modifications have reduced her cargo capacity to 200 tons. Three oceanic sentinels (Broadsides!) aboard protect her further with their specialized magic.`,
    source: "Pirates! (d20), Ch. 2 — Pirate Profiles (Kaliegh Sharpeyes)",
    sourceUrl: PIR_PATH,
    ruleset: "core",
  },
];
