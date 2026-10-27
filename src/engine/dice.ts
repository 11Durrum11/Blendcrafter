/**
 * Die helpers: parsing die expressions, stepping die sizes up/down the
 * standard ladder (used by template hit-die upgrades), and average rolls
 * (used for hit point derivation).
 */

export const DIE_LADDER = [2, 3, 4, 6, 8, 10, 12, 20, 100];

/** "d10" -> 10. Returns 0 for unparseable input. */
export function parseDieFaces(die: string): number {
  const match = /^d(\d+)$/i.exec(die.trim());
  return match ? Number(match[1]) : 0;
}

/** Step a die size up (positive steps) or down the ladder, clamped at the ends. */
export function stepDieSize(faces: number, steps: number): number {
  const idx = DIE_LADDER.indexOf(faces);
  if (idx === -1) return faces;
  const next = Math.min(DIE_LADDER.length - 1, Math.max(0, idx + steps));
  return DIE_LADDER[next];
}

export function formatDie(faces: number): string {
  return `d${faces}`;
}

/** Average result of a single die: (faces + 1) / 2, e.g. d8 -> 4.5. */
export function averageRoll(faces: number): number {
  return (faces + 1) / 2;
}

/** Small deterministic d20-style roll helper (not used by the resolver). */
export function rollDie(faces: number): number {
  return 1 + Math.floor(Math.random() * faces);
}
