import type { BabProgressionKind, ClassDefinition, ClassLevelProgressionRow, SaveKey } from "./types";

/**
 * Base attack bonus and base save progression helpers.
 *
 * The data packs carry explicit per-level rows (levels 1–10); these helpers
 * prefer the shipped row and fall back to the standard SRD formulas so a
 * class level never resolves to undefined.
 */

export function babForLevel(kind: BabProgressionKind, level: number): number {
  switch (kind) {
    case "full":
      return level;
    case "three-quarter":
      return Math.floor((level * 3) / 4);
    case "half":
      return Math.floor(level / 2);
  }
}

export function baseSaveForLevel(good: boolean, level: number): number {
  return good ? 2 + Math.floor(level / 2) : Math.floor(level / 3);
}

export function progressionRow(def: ClassDefinition, level: number): ClassLevelProgressionRow {
  const row = def.progression.find((r) => r.level === level);
  if (row) return row;
  return {
    level,
    bab: babForLevel(def.babProgression, level),
    fort: baseSaveForLevel(def.goodSaves.includes("fort"), level),
    ref: baseSaveForLevel(def.goodSaves.includes("ref"), level),
    will: baseSaveForLevel(def.goodSaves.includes("will"), level),
  };
}

export const SAVE_ABILITY: Record<SaveKey, "con" | "dex" | "wis"> = {
  fort: "con",
  ref: "dex",
  will: "wis",
};
