/**
 * Wealth calculations for the Equipment section (Shaun's order, 2026-10-28:
 * "wealth calculations actively kept in the equipment section").
 *
 * Item prices in the data are display strings ("1,200 gp", "25 sp",
 * "+1 bonus", "—"). This module converts them to gold-piece values and
 * carries the DMG character-wealth-by-level guideline for comparison.
 *
 * Parsing rules (surveyed against all 3,614 priced records in the data):
 * - The first currency amount in the string is the price; units convert at
 *   pp ×10, gp ×1, sp ×0.1, cp ×0.01. Fractions (½ gp) are supported.
 * - A parenthetical "market" price wins when present (wealth counts market
 *   value, not crafting/base cost): "8,000 gp base cost (16,000 gp market)".
 * - Multi-grade records (augment crystals: least/lesser/greater in one
 *   record) count at their first — least — grade.
 * - Ranges count at their lower bound.
 * - "+N bonus" special-ability prices are NOT gold (they price against the
 *   base item's total enhancement bonus) and relative prices ("+50% of the
 *   limb's cost") can't be valued standalone: both return null, and the
 *   caller counts the item as unpriced rather than guessing.
 */

const UNIT_TO_GP: Record<string, number> = { pp: 10, gp: 1, sp: 0.1, cp: 0.01 };

export function parseCostToGp(cost: string): number | null {
  if (!cost) return null;
  const normalized = cost.replace(/½/g, "0.5").replace(/¼/g, "0.25").replace(/,/g, "");
  const market = normalized.match(/([\d.]+)\s*gp\s+market/i);
  if (market) return parseFloat(market[1]);
  // Ranges ("5–10 gp", "5 sp–1 gp") count at the lower bound, in its own unit.
  const range = normalized.match(/([\d]*\.?\d+)\s*(pp|gp|sp|cp)?\s*[–—-]\s*[\d]*\.?\d+\s*(pp|gp|sp|cp)\b/i);
  if (range) {
    const value = parseFloat(range[1]) * (UNIT_TO_GP[(range[2] ?? range[3]).toLowerCase()] ?? 1);
    return Math.round(value * 100) / 100;
  }
  // "150+ gp" is a floor price: it counts at 150.
  const m = normalized.match(/([\d]*\.?\d+)\+?\s*(pp|gp|sp|cp)\b/i);
  if (!m) return null;
  const value = parseFloat(m[1]) * (UNIT_TO_GP[m[2].toLowerCase()] ?? 1);
  return Math.round(value * 100) / 100;
}

/** DMG Table 5–1: Character Wealth by Level (gp). Level 1 uses starting gold instead. */
export const WEALTH_BY_LEVEL: Record<number, number> = {
  2: 900,
  3: 2700,
  4: 5400,
  5: 9000,
  6: 13000,
  7: 19000,
  8: 27000,
  9: 36000,
  10: 49000,
  11: 66000,
  12: 88000,
  13: 110000,
  14: 150000,
  15: 200000,
  16: 260000,
  17: 340000,
  18: 440000,
  19: 580000,
  20: 760000,
};

export function wealthByLevel(level: number): number | null {
  return WEALTH_BY_LEVEL[level] ?? null;
}

/** 1234.5 -> "1,234.5"; whole numbers show no decimals. */
export function formatGp(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return rounded.toLocaleString("en-US", { maximumFractionDigits: 2 });
}
