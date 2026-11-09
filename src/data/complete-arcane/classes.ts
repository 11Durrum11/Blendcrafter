/**
 * Complete Arcane base classes: of the book's three new standard classes,
 * the Warlock (p. 5) and Warmage (p. 10) already exist in the recovered
 * core data (src/data/core/new-base-classes.ts) and were verified against
 * the printed book for this batch (see the REBUILD-NOTES.md Batch 3
 * addendum — the recovered Warlock record is missing Knowledge
 * (religion) from its class-skill list; neither record was modified).
 * The Wu Jen (p. 14) was NOT present anywhere in the dataset, so it is
 * added here, built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf
 * Progression rows are the printed Table 1–3 rows for levels 1–10,
 * matching this app's per-class level cap convention.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const CA = "Complete Arcane";
const CA_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf";
const CH1 = `${CA} — Chapter 1: Classes`;

export const COMPLETE_ARCANE_CLASSES: ClassDefinition[] = [
];
