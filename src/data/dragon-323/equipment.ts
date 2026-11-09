// Dragon Magazine #323 (September 2004) — equipment.
// Eight mundane items stage, all from "Class Acts: Gear for
// Greeners" by Mike McArtor (p. 103) — the "New Ranger
// Equipment" table. Every cost and weight was verified against
// the page image (magazine p. 103), which corrects the OCR
// layer throughout the table: Camouflage clothes 150 gp /
// 6 lb.; Compass, magnetic 100 gp / 1/2 lb.; Crookneck lantern
// 9 gp / 1 lb.; Duster coat 25 gp / 7 lb.; Finger chain saw
// 5 gp / no weight listed; Kayak, inflatable 150 gp / 35 lb.;
// Vest, tactical 5 gp / 2 lb.; Waking herbs 30 gp / no weight
// listed. The item texts on the same page supply the mechanics
// in each record's notes.
//
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const DM323 = "Dragon Magazine #323 — Class Acts: Gear for Greeners (New Ranger Equipment)";
const URL323 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt";

export const DRAGON_323_EQUIPMENT: EquipmentItem[] = [
  {
    id: "camouflage-clothes",
    name: "Camouflage Clothes",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "150 gp",
    weight: "6 lb.",
    notes:
      "Full-body suit made in three different color combinations that help disguise the body's form and make the wearer harder to pick out of his surroundings: camouflage clothes grant a +2 circumstance bonus on a wearer's Hide checks while he is in an area the camouflage blends with. The forest pattern (a mix of greens, browns, and blacks) provides its bonus in forest and marsh terrains; the desert pattern (dark and light tans with irregular black or blue shapes) provides its bonus in desert and plains terrains; the mountain pattern (a white background with black, gray, and green shapes) provides its bonus in hills, mountains, and underground terrains. The listed price is for one set suited to a specific terrain.",
  },
  {
    id: "compass-magnetic",
    name: "Compass, Magnetic",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "100 gp",
    weight: "1/2 lb.",
    notes:
      "A palm-sized device made up of a wooden block with a metal needle mounted on a tiny metal post. The needle spins freely, and always points north unless obstructed or within 10 feet of 50 pounds or more of ferrous metal (such as iron and steel).",
  },
  {
    id: "crookneck-lantern",
    name: "Crookneck Lantern",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "9 gp",
    weight: "1 lb.",
    notes:
      "A leather-wrapped metal tube with a shorter glass-covered metal tube at one end; small mirrors inside the lantern reflect and intensify the light shed by the candle held within the main body, and shrouded air holes line the top and bottom of both tubes. A weight at the bottom of the main tube lets it be set down without falling over. The crookneck lantern clearly illuminates a 60-foot-long, 5-foot-wide line and provides shadowy illumination in a 100-foot cone (with the illuminating line in the center of the cone). A single candle burns for 1 hour.",
  },
  {
    id: "duster-coat",
    name: "Duster Coat",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "25 gp",
    weight: "7 lb.",
    notes:
      "A long coat of heavy oiled canvas that reaches to the wearer's ankles, with twin rows of buttons running the length of the front; when all of them are fastened the wearer is wrapped in a nearly waterproof shell. A fully fastened duster provides a +2 circumstance bonus on Survival checks made to gain a bonus against the effects of severe weather and on saves against severe weather, but it also imposes a −1 armor check penalty.",
  },
  {
    id: "finger-chain-saw",
    name: "Finger Chain Saw",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "5 gp",
    weight: "—",
    notes:
      "A narrow-gauge steel chain covered with small teeth links a metal loop on either end of it. The user simply throws the chain over a branch and pulls back and forth on each end of the chain. It cuts through 2 inches of soft wood and 1 inch of hard wood in 1 round. A finger chain saw is ineffective as a weapon.",
  },
  {
    id: "kayak-inflatable",
    name: "Kayak, Inflatable",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "150 gp",
    weight: "35 lb.",
    notes:
      "Made of thick but pliant leather forming several air bladders, this vessel looks and acts like a normal kayak once inflated. One character can inflate the kayak in 20 minutes; there are two inflating tubes, so two characters can inflate it in 10 minutes. The inflatable kayak holds one Medium creature plus 100 pounds of gear. By pulling the plugs on the air bladders, the kayak deflates in 5 minutes and can then be folded and carried in a standard backpack. The inflatable kayak comes with a short paddle that breaks down for easy storage.",
  },
  {
    id: "vest-tactical",
    name: "Vest, Tactical",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "5 gp",
    weight: "2 lb.",
    notes:
      "This light vest has a number of pouches and loops covering its front and back, and is usually made of green or black canvas. It can hold up to 10 pounds of gear, no single item of which can weigh more than 2 pounds. Any item stored in a tactical vest can be retrieved without provoking an attack of opportunity.",
  },
  {
    id: "waking-herbs",
    name: "Waking Herbs",
    category: "gear",
    ruleset: "core",
    source: DM323,
    sourceUrl: URL323,
    cost: "30 gp",
    weight: "—",
    notes:
      "When waved under the nose of someone unconscious or asleep (even through magical means), these herbs allow the unconscious or sleeping character another saving throw (made at the original DC) to wake up. After three uses, these herbs lose their effectiveness and must be replaced.",
  },
];
