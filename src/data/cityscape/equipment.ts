import type { EquipmentItem } from "@/engine/types";

// Cityscape (WotC, D&D 3.5) mundane equipment. The
// printed book contains NO equipment chapter (its
// chapters run lore, character options, organizations,
// encounters, and campaign running), so every record
// here comes from "Urban Tools," the Cityscape web
// enhancement by Ari Marmell whose pages are appended
// to part 2 of the source copy (the pages headed
// "Cityscape, Part 3"): 3 alchemical items with Craft
// (alchemy) DCs, and 3 hidden weapons with Search DCs.
// Transcribed from Shaun's own copy. Notes are short
// mechanical paraphrases in our own words; no book or
// article prose is reproduced. The alchemical table
// prints an asterisk for the items' weight ("no
// significant weight"), carried here as "—".

const CS = "Cityscape";
const CS2_PATH = "library-staging/books/cityscape-part2.pdf";
const TOOLS = `${CS} — Urban Tools (web enhancement, Ari Marmell)`;

export const CITYSCAPE_EQUIPMENT: EquipmentItem[] = [
  // ---- Alchemical items (Urban Tools) ----
  {
    id: "false-paper",
    name: "False Paper",
    category: "alchemical gear",
    cost: "15 gp",
    weight: "—",
    notes: "Alchemical item (Craft [alchemy] DC 20). A pair of fluids: the first, poured over a sheet of paper, forms an extremely thin top layer that looks like blank paper, hiding the original writing beneath (only a DC 35 Search check reveals the paper is dual-layered); you can write on the new layer or leave it blank. Applying the second fluid disintegrates the top layer (and anything written on it), revealing the original writing. The price covers enough for one sheet, one cover-and-reveal. Multiple layers can be applied to one sheet, but each layer after the first reduces the DC to detect the false paper by 5.",
    source: `${TOOLS} — Alchemical Items`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
  {
    id: "liquid-light",
    name: "Liquid Light",
    category: "alchemical gear",
    cost: "25 gp",
    weight: "—",
    notes: "Alchemical item (Craft [alchemy] DC 22). A flask of faintly glowing yellow fluid, thrown as a splash weapon (ranged touch attack, 10-foot range increment). A direct hit imposes a -8 penalty on the target's Hide checks; creatures within 5 feet are splashed and take a -4 penalty. The glow lasts 1d4 hours, or can be washed off with soap and water in 3d4 minutes.",
    source: `${TOOLS} — Alchemical Items`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
  {
    id: "sewer-mask",
    name: "Sewer Mask",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "—",
    notes: "Alchemical item (Craft [alchemy] DC 25). A small fabric-and-leather mask worn over the nose and mouth; the alchemical substances within grant the wearer a +5 circumstance bonus on saves against airborne disease, inhaled toxins, and nonmagical effects that cause the sickened or nauseated conditions. Each mask is good for 2 hours of use.",
    source: `${TOOLS} — Alchemical Items`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
  // ---- Hidden weapons (Urban Tools) ----
  {
    id: "cloak-weighted",
    name: "Cloak, Weighted",
    category: "weapon",
    cost: "95 gp",
    weight: "5 lb.",
    notes: "Martial one-handed melee weapon (hidden weapon). Damage 1d6 (Medium; 1d4 Small), critical x2, bludgeoning. A cloak with an unusually thick lining at the bottom, weighted with lead shot or a thin chain; held with the other end wrapped around the hand, it is wielded much like a flail, including the bonuses to disarm and the ability to trip. Search DC 25 to recognize it as a weapon; a masterwork version raises the Search DC by 5 in addition to the normal masterwork benefits.",
    source: `${TOOLS} — Hidden Weapons`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
  {
    id: "swordcane",
    name: "Swordcane",
    category: "weapon",
    cost: "60 gp",
    weight: "3 lb.",
    notes: "Martial one-handed melee weapon (hidden weapon). Damage 1d6 (Medium; 1d4 Small), critical 18-20/x2, piercing. The classic rapier hidden inside a cane. Search DC 25 to recognize it as a weapon; a masterwork version raises the Search DC by 5 in addition to the normal masterwork benefits.",
    source: `${TOOLS} — Hidden Weapons`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
  {
    id: "lute-bow",
    name: "Lute-Bow",
    category: "weapon",
    cost: "250 gp",
    weight: "5 lb.",
    notes: "Martial ranged weapon (hidden weapon). Damage 1d6 (Medium; 1d4 Small), critical x3, range increment 40 ft., piercing. A lute whose stringed upper layer can be rotated (a standard action) so the strings lie perpendicular to the body; treated wood and strings flex like a bow, and it is held horizontally and hand-fired like a shortbow. Search DC 30 to recognize it as a weapon; a masterwork version raises the Search DC by 5 in addition to the normal masterwork benefits.",
    source: `${TOOLS} — Hidden Weapons`,
    sourceUrl: CS2_PATH,
    ruleset: "core",
  },
];
