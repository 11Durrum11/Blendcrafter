import type { EquipmentItem } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #317 pack (library-staging/packs/dragon-magazine/issue-317)
// The issue's one equipment record: the HARVESTER'S FIELDS KIT, from
// the sidebar in "Power Components" (Jim Bishop & F. Wesley
// Schneider, pp. 44–49; the sidebar itself is on magazine p. 48).
//
// JUDGMENT CALL (flagged prominently in MANIFEST.md): "Power
// Components" is a variant-rule article and the program ledger
// designates it reference-only; its full text and tables are in
// reference.md. The kit, however, is a priced equipment item with a
// defined game effect printed in the magazine — exactly the shape
// the catalog holds as an equipment record — so it is staged here
// rather than buried in the reference file. The parent can pull it
// at integration if the ledger's reference-only designation is held
// to cover it.
//
// The kit's bonus (+2 circumstance) and its price and weight were
// read off the printed page image; the magazine OCR drops the bonus
// amount entirely. No catalog collision (grep of src/data, both id
// styles, 2026-11-09). Notes are a faithful mechanical paraphrase in
// our own words; no magazine prose is reproduced.

const DM317 = "Dragon Magazine #317";
const DM317_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt";

export const DRAGON_317_EQUIPMENT: EquipmentItem[] = [
  {
    id: "harvesters-fields-kit",
    name: "Harvester's Fields Kit",
    category: "tool",
    cost: "60 gp",
    weight: "3 lb.",
    notes: "A thick leather satchel stocked with cutting implements (from bone saws to scalpels), serrated pins, tongs, pliers, unguents, oils, and culture jars, made for the swift and precise extraction of organs. The kit provides a +2 circumstance bonus on all Survival checks made to extract power components and on Craft (alchemy) checks made to prepare or preserve them (see the Power Components rules in this pack's reference.md).",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
];
