import type { EquipmentItem } from "@/engine/types";

// Dragon Magazine #312 (WotC/Paizo, D&D 3.5) equipment — one
// record: the blowgun from the equipment sidebar of the Assassins
// article (p. 43). Transcribed from the magazine text on
// archive.org. The sidebar's blowgun needles row is too garbled in
// the OCR to stage responsibly (its cost line is unreadable); the
// needles and the sidebar's Craft (poisonmaking) DC table are
// written up in reference.md instead.
//
// Id adjudication: the catalog already carries a blowgun record
// (id "blowgun") from the third-party Ultimate Equipment Guide
// Volume 1, priced 10 gp. The magazine's WotC printing is a
// different source with a different price (1 gp), so per the
// program's same-name/different-source precedent both records
// stand and this one is suffixed -312.

const DM312 = "Dragon Magazine #312";
const DM312_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt";

export const DRAGON_312_EQUIPMENT: EquipmentItem[] = [
  {
    id: "blowgun-312",
    name: "Blowgun",
    category: "weapon",
    cost: "1 gp",
    weight: "2 lb.",
    notes: "Exotic ranged weapon: damage 1 (piercing), critical x2, range increment 10 ft. A hollow tube that fires blowgun needles, usually envenomed — the delivery weapon of the poisoner prestige class, which requires Exotic Weapon Proficiency (blowgun). Dragon #312 printing; the catalog's Ultimate Equipment Guide blowgun (id blowgun) lists 10 gp.",
    source: `${DM312} — Assassins: Blowgun sidebar (p. 43)`,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
];
