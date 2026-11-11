// Dragon Magazine #352 (February 2007) — equipment draft: 4 items.
// THREE cactacae exotic weapons from the Cactacae Weapons chart —
// "People of Bas-Lag" (Wolfgang Baur), p. 43: the GREAT CLEAVER
// (printed "Greatcleaver"), the CHAKRI, and the RIVEBOW. All values
// read off the rendered chart on p. 43; the image governs over the
// OCR stream. The cactacae treat all three as martial weapons (weapon
// familiarity, carried on the cactacae race record).
// ONE khepri weapon from the Stingbox sidebar, p. 45: the STINGBOX, a
// metaclockwork device found only among the khepri. Its sidebar chart
// prints a Medium damage line only; no Small line is printed.
// The issue's other new weapons — the three Olman exotic weapons of
// "Savage Tidings" (p. 72) — already stand in the live catalog as
// fan-index stubs (japute, shimalokoa, kauakoi) sourced to this very
// issue; the Savage Tidings installment is reference-only under the
// task brief, so the weapons are digested in reference.md and NOT
// duplicated here. The printed chart (p. 72) was image-verified and
// the stubs' values agree with it — see MANIFEST.md.
// Bas-Lag lore is stripped; the weapons stage as mechanics with
// neutral framing.

import type { EquipmentItem } from "@/engine/types";

const SRC_PEOPLE = "Dragon Magazine #352 — People of Bas-Lag (Wolfgang Baur), pp. 42-49";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_PEOPLE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_352_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "greatcleaver",
    name: "Greatcleaver",
    category: "weapon",
    cost: "40 gp",
    weight: "15 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 2d8 (Medium; 2d6 Small), critical x3, type slashing. The greatcleaver is a slashing, two-handed melee weapon with 10-foot reach. One of the enormous exotic weapons of cactacae design, too large and powerful to be used by many others; cactacae treat it as a martial weapon.",
  }),
  E({
    id: "chakri",
    name: "Chakri",
    category: "weapon",
    cost: "10 gp",
    weight: "1 lb.",
    notes:
      "Exotic ranged weapon. Damage 1d6 (Medium; 1d4 Small), critical x2, range increment 20 feet, type slashing. The chakri are disc-bladed throwing weapons that can also serve as ammunition for a rivebow. Cactacae treat the chakri as a martial weapon.",
  }),
  E({
    id: "rivebow",
    name: "Rivebow",
    category: "weapon",
    cost: "200 gp",
    weight: "14 lb.",
    notes:
      "Exotic ranged weapon. Damage 2d6 (Medium; 1d10 Small), critical 19-20/x3, range increment 40 feet, type slashing. The rivebow is the best-known of the cactacae weapons: an enormous crossbow that fires large spinning buzz blades (chakri serve as its ammunition). Because the cactacae lavish such attention and resources on this weapon, masterwork rivebows are actually relatively easy to find. Cactacae treat the rivebow as a martial weapon.",
  }),
  E({
    id: "stingbox",
    name: "Stingbox",
    category: "weapon",
    cost: "Variable (charges 10 gp each)",
    weight: "4 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 1d3+1d8 electrical (Medium; no Small line is printed), critical x2, type slashing (as printed in the sidebar chart). This metaclockwork device is only found among the khepri, who use it to electrocute or stun their targets. The stingbox resembles a squared-off box with a handle at one end and two whiplike flails at the other; the flails have a reach of 20 feet, are extendable, and are whipped out to catch the enemy, and then a powerful electrical charge is sent through the line. While the base damage it deals is minimal (1 or 1d3 points of damage), each strike also deals 1d8 points of electrical damage. Creatures struck by a stingbox must make an immediate DC 13 Fortitude save or be stunned for 1d3 rounds. Using a stingbox without penalty requires Exotic Weapon Proficiency; in addition to the usual non-proficiency penalty, any untrained user of a stingbox who rolls a 1 on an attack roll shocks himself for normal damage and must save or be stunned. Stingboxes are charged items and must be recharged after twelve successful attacks. Stingbox charges are sold only by khepri merchants to those they trust, and cost 10 gp per box charge.",
  }),
];
