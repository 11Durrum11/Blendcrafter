// Dragon Magazine #338 (December 2005) — equipment draft: 4 records.
// All four from "Class Acts: Grimoires" (C. Wesley Clough), p. 98 —
// mundane reference books. The column's frame: each book weighs
// roughly 3 pounds, is hand-written and hand-drawn, contains no
// spells, and as a reference work provides a +2 circumstance bonus
// to the listed skill checks where those checks relate to the book's
// subject. The column's text was verified against the rendered page
// image (magazine p. 98) and cross-checked in full against the fan
// "Complete Dragon Magazine 3.5 Arms and Equipment" compilation,
// whose equipment table lists exactly these four books at the same
// prices and weights — the column is complete on p. 98 even though
// folios 99-101 are absent from this scan (see MANIFEST.md). The
// image governs over the OCR stream: the third book's title prints
// "Slaying Dragons" (the OCR read "Laying Dragons").

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #338 — Class Acts: Grimoires (C. Wesley Clough), p. 98";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "3 lb.",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const BOOK_FRAME =
  "Reference book (mundane equipment) — hand-written and hand-drawn, containing no spells; as a reference work it provides a +2 circumstance bonus to the listed skill checks relating to the book's subject.";

export const DRAGON_338_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "dimensions-of-evil",
    name: "Dimensions of Evil: A Guidebook to the Nether Realms",
    cost: "75 gp",
    notes:
      BOOK_FRAME +
      " Provides the bonus on Knowledge (the planes) checks relating to the Lower Planes. Written in Infernal. This book is banned and confiscated by several good faiths, while others encourage its reading.",
  }),
  E({
    id: "dwellings-of-the-ancients",
    name: "Dwellings of the Ancients",
    cost: "140 gp",
    notes:
      BOOK_FRAME +
      " Provides the bonus on Knowledge (architecture and engineering) and Decipher Script checks relating to ancient ruins and inscriptions. Created by the renowned antiquarian Naniel ibn-Nurth and written in Dwarven.",
  }),
  E({
    id: "slaying-dragons",
    name: "Slaying Dragons",
    cost: "100 gp",
    notes:
      BOOK_FRAME +
      " Provides the bonus on Knowledge (arcana) checks relating to dragons. Written in Common and bound in black dragon skin, its author — Cevinar of the Saffron Robes — was eaten by a red wyrm.",
  }),
  E({
    id: "theory-and-application-of-force-magic",
    name: "The Theory and Application of Force Magic",
    cost: "55 gp",
    notes:
      BOOK_FRAME +
      " Provides the bonus on Knowledge (arcana) and Spellcraft checks relating to spells with the force descriptor. Written in Common by Aeroth Blith.",
  }),
];
