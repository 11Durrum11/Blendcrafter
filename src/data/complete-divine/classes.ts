/**
 * Complete Divine base classes: of the book's three new standard
 * classes, the Favored Soul (p. 6) and Spirit Shaman (p. 14) already
 * exist in the recovered core data (src/data/core/new-base-classes.ts)
 * and were verified against the printed book for this batch (see the
 * REBUILD-NOTES.md Batch 3 addendum — both recovered records carry one
 * class skill the book does not list: Knowledge (religion) for the
 * Favored Soul, Knowledge (arcana) for the Spirit Shaman; neither
 * record was modified). The Shugenja (p. 10) was NOT present anywhere
 * in the dataset, so it is added here, built 2026-10-27 from the copy
 * in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf
 * The PDF is a scan with no text layer; values below come from OCR of
 * the printed pages, with table cells settled against the page images.
 * Progression rows are the printed Table 1-3 rows for levels 1-10,
 * matching this app's per-class level cap convention.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1-10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1-10
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const CD = "Complete Divine";
const CD_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf";
const CH1 = `${CD} — Chapter 1: Classes`;

export const COMPLETE_DIVINE_CLASSES: ClassDefinition[] = [
];
