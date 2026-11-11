// Dragon Magazine #355 (May 2007) — equipment draft: 11 items.
// NINE items from "Savage Tidings: The Market Is Bad" (James Jacobs and
// Richard Pett), pp. 64-69 — the Scuttlecove market column the program
// survey filed as reference-only. The issue itself governs over the
// survey: the column prints nine discrete, fully priced goods in the
// dealer's sidebars (an alchemical draught, four new poisons in a priced
// table, a poison-delivery tool, and three burnable anti-osssra oils),
// each with the same record shape as the Bazaar and Class Acts gear
// staged throughout this program. They stage here; the divergence from
// the survey tag is flagged prominently in SCREENING.md.
//   - Snakebite, the anti-yuan-ti draught of the enchanter Ingram
//     Cadgraydian (p. 66).
//   - Riordan Darkly's four new poisons (table, p. 68): Skinshedder,
//     Scalerot, Scalepox, Skinvice.
//   - Thevanan Quain's toxin holder and his three ophiotoxins (pp. 68-69):
//     Bane, Hissing Choker, Osssra Blight.
// TWO items from "Class Acts: Strangulation" (Shane O'Connor), p. 85 —
// the column's New Equipment box prints two discrete protective items
// with prices and weights (Gorget, Leather Collar). The column's
// garroting-weapons table assigns strangle statistics to weapons the
// catalog already holds and is a rule, not new gear — it is transcribed
// in full in reference.md, as are the locking mechanism and the
// material notes for cord, steel cable, and wire (no prices printed).
// The gorget stages under a -355 id: the plain id `gorget` is already
// held by an Omni Goods and Gear record (a different, generic gorget).
// All prices, DCs, and damage figures verified against rendered page
// images (magazine pp. 67, 68, 69, 85); the image governs over the OCR
// stream — it corrects the OCR on the Scalepox price (950 gp, not
// 450 gp), the Skinshedder Craft DC (30, not 20), the Scalerot Craft DC
// (20), and the wire garrote's hit points (5, not 3). Feature text is
// paraphrased in our own words; no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const SRC_SAVAGE = "Dragon Magazine #355 — Savage Tidings: The Market Is Bad (James Jacobs and Richard Pett), pp. 64-69";
const SRC_STRANGLE = "Dragon Magazine #355 — Class Acts: Strangulation (Shane O'Connor), p. 85";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_SAVAGE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const OPHIO_FRAME =
  "Ophiotoxin (burnable oil devised by the Scuttlecove perfumer Thevanan Quain to counter osssra, the yuan-ti oil reprinted in the same column — see reference.md). A dose weighs 1/10 lb and comes in a small labeled glass vial. Burned in a toxin holder (see the toxin holder record), an ophiotoxin fills a 10-foot-square area in 3 rounds, continues to burn for a further 6 rounds, then dissipates 1 round after that. A moderate wind (11+ mph), such as from a gust of wind spell, disperses the gas in 4 rounds; a strong wind (21+ mph) disperses it in 1 round.";

export const DRAGON_355_EQUIPMENT: EquipmentItem[] = [
  // ---- Savage Tidings: Cadgraydian's draught (1) ----
  E({
    id: "snakebite",
    name: "Snakebite",
    category: "alchemical gear",
    cost: "600 gp",
    notes:
      "Alchemical item (a draught sold by the Scuttlecove enchanter Ingram Cadgraydian). Snakebite tastes of bitter apples and smells of nutmeg and ginger. When consumed, it acts as a modified version of delay poison with a duration of 1 hour. In addition, any yuan-ti (or other snake or snake-like creature) who bites a person with active snakebite in her veins is affected by a poison (ingested; Fortitude DC 20; initial damage 1d6 Con, secondary damage 2d6 Con). Cadgraydian charges 600 gp for a vial. (The equipment id is free; the same word is held in the spells barrel by an unrelated Spell Compendium spell.) APOC: an alchemical preparation — see SCREENING.md on the potion house rule question, flagged not decided.",
  }),
  // ---- Savage Tidings: Riordan Darkly's new poisons (4) ----
  E({
    id: "skinshedder",
    name: "Skinshedder",
    category: "alchemical gear",
    cost: "2,000 gp",
    notes:
      "Poison (one of Riordan Darkly's new Scuttlecove poisons). Injury, Fortitude DC 16; initial damage 1d6 Con, secondary damage 2d6 Con; Craft DC 30. Skinshedder painfully strips portions of the victim's skin, causing the flesh to blister as though burnt.",
  }),
  E({
    id: "scalerot",
    name: "Scalerot",
    category: "alchemical gear",
    cost: "600 gp",
    notes:
      "Poison (one of Riordan Darkly's new Scuttlecove poisons). Injury, Fortitude DC 16; initial damage 1d6 Dex, secondary effect sickened; Craft DC 20. A vile infestation between the scales that erupts in ugly sores. This poison only affects yuan-ti: a yuan-ti failing the save against this poison is sickened for 2d6 rounds.",
  }),
  E({
    id: "scalepox",
    name: "Scalepox",
    category: "alchemical gear",
    cost: "950 gp",
    notes:
      "Poison (one of Riordan Darkly's new Scuttlecove poisons). Injury, Fortitude DC 16; initial effect scaledrop, secondary damage 0 (none); Craft DC 25. Scalepox causes scales to drop off, lowering the natural armor bonus of the snakefolk; this poison only affects yuan-ti. The round after a failed save, a significant portion of the yuan-ti's scales slough away, reducing the creature's natural armor bonus by 1d4. The scales grow back over a period of 24 hours. The process of shedding does not otherwise harm the yuan-ti.",
  }),
  E({
    id: "skinvice",
    name: "Skinvice",
    category: "alchemical gear",
    cost: "700 gp",
    notes:
      "Poison (one of Riordan Darkly's new Scuttlecove poisons). Injury, Fortitude DC 18; initial effect paralysis, secondary damage 0 (none); Craft DC 25. Skinvice hardens skin or scales so as to cause paralysis.",
  }),
  // ---- Savage Tidings: Quain's toxin holder and ophiotoxins (4) ----
  E({
    id: "toxin-holder",
    name: "Toxin Holder",
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      "Poison-delivery tool (sold by the Scuttlecove perfumer Thevanan Quain). The toxin holder looks like a brass-topped sunrod. It holds enough lantern oil to burn 10 doses of ophiotoxin, but it can hold only 1 dose at a time. Refilling the toxin holder with ophiotoxin requires a full-round action. The holder does not go out if dropped but can be extinguished normally.",
  }),
  E({
    id: "ophiotoxin-bane",
    name: "Ophiotoxin, Bane",
    category: "alchemical gear",
    cost: "400 gp",
    weight: "1/10 lb.",
    notes:
      OPHIO_FRAME +
      " Bane: the ochre-colored smoke created by this oil has the scent of camphor. This toxin neutralizes the effects of osssra in an area, rendering it useless to yuan-ti and negating the effects of the poison upon others. A dose costs 400 gp.",
  }),
  E({
    id: "ophiotoxin-hissing-choker",
    name: "Ophiotoxin, Hissing Choker",
    category: "alchemical gear",
    cost: "750 gp",
    weight: "1/10 lb.",
    notes:
      OPHIO_FRAME +
      " Hissing Choker: this thick, acrid smoke smells of tar. When burned, the oil counteracts the effects of osssra and reverses the effects, causing them to become harmful to yuan-ti and affecting the snakefolk as though they were humans. Yuan-ti in the area must save against the poison effects of osssra as if they were humans and take the damage indicated by the particular type. All non-yuan-ti are unaffected by the reversed osssra's poison effect. A dose costs 750 gp.",
  }),
  E({
    id: "ophiotoxin-osssra-blight",
    name: "Ophiotoxin, Osssra Blight",
    category: "alchemical gear",
    cost: "1,200 gp",
    weight: "1/10 lb.",
    notes:
      OPHIO_FRAME +
      " Osssra Blight: the deep violet smoke of this oil has thick bands of yellow dancing through it and gives off the scent of damp earth and oil. The oil has a mutating effect on any osssra, reversing the effects of the oil to yuan-ti: oils that would otherwise offer bonuses instead offer penalties, while those that heal damage deal damage to yuan-ti instead. A dose costs 1,200 gp.",
  }),
  // ---- Class Acts: Strangulation — New Equipment (2) ----
  E({
    id: "gorget-355",
    name: "Gorget",
    cost: "10 gp",
    weight: "5 lb.",
    source: SRC_STRANGLE,
    notes:
      "Protective collar from the Strangulation column's New Equipment box. A gorget is a metal collar that provides a +10 armor bonus against strangulation attacks (see reference.md for the strangulation rules and the AC Versus Strangulation table). A gorget has hardness 10 and 5 hit points. It must be custom-made for its wearer and imposes a -4 penalty on checks made to perform physical actions over a period of time (running, swimming, breath-holding, and so on). (Staged under a -355 id beside the generic Omni Goods and Gear record `gorget`.)",
  }),
  E({
    id: "leather-collar",
    name: "Leather Collar",
    cost: "2 gp",
    weight: "2 lb.",
    source: SRC_STRANGLE,
    notes:
      "Protective collar from the Strangulation column's New Equipment box. This simplified leather gorget provides a +4 armor bonus against strangulation attacks (see reference.md for the strangulation rules and the AC Versus Strangulation table). A leather collar has hardness 3 and 1 hit point. It must be custom-made for its wearer. A leather collar imposes a -2 penalty on checks made to perform physical actions that extend over a period of time.",
  }),
];
