import type { EquipmentItem } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// Poisons, printed pp. 40-45. Transcribed from Shaun's own
// scanned copy (image-only; pages read visually, 2026-11-04).
// The chapter's poison material is almost entirely framework
// (the seven poison types, first aid, and the procedures for
// crafting standard and custom poisons — carried in the Brew
// Poison feat record and summarized in the extraction report).
// The only fully statted mundane poison it prints is FINAL
// TOUCH, the worked example of the new-poison design procedure
// (p. 45); its raw-materials costs are the printed creation
// figures for a first batch and for further doses, and the
// book prints no market price for it, so cost is "—". The nine
// magical poisons the chapter prints stat lines for (pp.
// 46-48) are filed as magic items in magic-items.ts, matching
// the Quintessential Rogue pack's handling of its potions.
//
// INTEGRATION (2026-11-05): the staged extraction modeled this
// record as a PoisonDefinition from a "@/poisons" module the
// app does not have. Per the brief it is filed the way the
// catalog files poisons — the Poisoncraft (POISC) convention:
// an EquipmentItem in the "alchemical gear" category with the
// full stat line carried in the notes.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";

export const WAY_OF_THE_ROGUE_POISONS: EquipmentItem[] = [
  {
    id: "final-touch",
    name: "Final Touch",
    category: "alchemical gear",
    cost: "—",
    weight: "—",
    notes:
      "Poison per dose, injected, Fortitude DC 15. Initial damage is unconsciousness; secondary damage is 3d6 points of temporary Constitution damage. A chemical nerve poison, the worked example of the book's new-poison design procedure. Creating it costs 15,500 sp in raw materials for the first batch (Alchemy DC 32); further doses cost 5,167 sp in raw materials each (Alchemy DC 25). The book prints no market price.",
    source: "Way of the Rogue — Poisons (p. 45)",
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
];
