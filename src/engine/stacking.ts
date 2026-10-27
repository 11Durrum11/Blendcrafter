import type { AuditEntry, Modifier } from "./types";

/**
 * Typed-bonus stacking resolver (SRD "Bonus Types" rules).
 *
 * For a single target key, modifiers are combined as follows:
 * - Bonuses whose bonus type always stacks (dodge, circumstance, untyped),
 *   whose mode is "improve" (SRD "improves by" wording), or which carry
 *   stackingPolicy "always_stack" simply sum.
 * - For every other bonus type, only the single best (largest) positive
 *   bonus applies; weaker same-type bonuses are suppressed.
 * - Penalties (negative values) always stack.
 * - "set" modifiers are not handled here — callers that support them
 *   (ability scores) resolve them before consulting this module.
 *
 * Returns the combined value plus an audit trail that names every modifier,
 * including suppressed ones, so the UI can show the stacking decision.
 */

const ALWAYS_STACK_TYPES = new Set(["dodge", "circumstance", "untyped"]);

export interface StackResult {
  value: number;
  audit: AuditEntry[];
}

export function resolveModifierStack(modifiers: Modifier[], target: string): StackResult {
  const relevant = modifiers.filter((m) => m.target === target && m.mode !== "set" && m.mode !== "remove");
  const audit: AuditEntry[] = [];
  let value = 0;

  const stackable: Modifier[] = [];
  const byType = new Map<string, Modifier[]>();

  for (const mod of relevant) {
    if (mod.value < 0) {
      // Penalties always stack.
      value += mod.value;
      audit.push(toAudit(mod, target, `${formatSigned(mod.value)} penalty (penalties always stack)`, value));
    } else if (mod.mode === "improve" || mod.stackingPolicy === "always_stack" || ALWAYS_STACK_TYPES.has(mod.bonusType)) {
      stackable.push(mod);
    } else {
      const list = byType.get(mod.bonusType) ?? [];
      list.push(mod);
      byType.set(mod.bonusType, list);
    }
  }

  for (const mod of stackable) {
    value += mod.value;
    const why =
      mod.mode === "improve"
        ? `${formatSigned(mod.value)} — "improves by" bonuses always compound`
        : `${formatSigned(mod.value)} ${mod.bonusType} bonus (always stacks)`;
    audit.push(toAudit(mod, target, why, value));
  }

  for (const [bonusType, list] of byType) {
    const sorted = [...list].sort((a, b) => b.value - a.value);
    const [best, ...rest] = sorted;
    value += best.value;
    audit.push(toAudit(best, target, `${formatSigned(best.value)} ${bonusType} bonus`, value));
    for (const suppressed of rest) {
      audit.push(
        toAudit(
          suppressed,
          target,
          `${formatSigned(suppressed.value)} ${bonusType} bonus suppressed — same-type bonuses do not stack; ${best.source} (+${best.value}) applies`,
          value
        )
      );
    }
  }

  return { value, audit };
}

/** Collect every modifier targeting `target` or starting with `prefix`. */
export function modifiersFor(modifiers: Modifier[], target: string): Modifier[] {
  return modifiers.filter((m) => m.target === target);
}

function toAudit(mod: Modifier, target: string, operation: string, resultingValue: number): AuditEntry {
  return {
    source: mod.source,
    sourceUrl: mod.sourceUrl,
    target,
    operation,
    resultingValue,
    note: mod.note,
  };
}

export function formatSigned(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}
