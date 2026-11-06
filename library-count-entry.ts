/**
 * Library counter entry point — bundled and run by
 * bump-version.mjs at every version bump (Shaun, 2026-11-05:
 * the loading splash must show the TRUE size of the library and
 * never go stale again). Counts every record in every ALL_*
 * collection the barrel exports — the same total the app loads.
 * This file is never imported by the app itself.
 */
import * as barrel from "@/data";

let total = 0;
for (const [key, value] of Object.entries(barrel)) {
  if (key.startsWith("ALL_") && Array.isArray(value)) {
    total += value.length;
  }
}

export const LIBRARY_COUNT = total;
