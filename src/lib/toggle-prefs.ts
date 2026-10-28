import type { HouseRules, Ruleset } from "@/engine/types";
import { DEFAULT_HOUSE_RULES } from "@/engine/house-rules";

/**
 * Shaun's standing toggle preferences (2026-10-28): "All toggles that I
 * have off stay off until I turn them back on" — and new characters
 * INHERIT the toggles as he last set them. Whenever Shaun flips a
 * ruleset or house-rule toggle, the resulting state is stored here;
 * createDefaultBuild() starts new characters from it. The prefs are
 * only ever written by an explicit toggle action (or seeded once from
 * the first character he opens), never by loading data or migrating.
 *
 * Stored in localStorage (synchronous, tiny) rather than the IndexedDB
 * character repository, because createDefaultBuild() is synchronous.
 */
export interface TogglePrefs {
  enabledRulesets: Ruleset[];
  houseRules: HouseRules;
}

const STORAGE_KEY = "blendcrafter:toggle-prefs";

const KNOWN_RULESETS: readonly Ruleset[] = ["core", "eberron", "iron_kingdoms", "sorcery_steam", "homebrew"];

/** First-run default (Shaun's live choice, 2026-10-27): every ruleset on. */
export const ALL_RULESETS_ON: Ruleset[] = [...KNOWN_RULESETS];

export function sanitizeTogglePrefs(input: Partial<TogglePrefs> | null | undefined): TogglePrefs {
  const picked = (input?.enabledRulesets ?? []).filter((r): r is Ruleset =>
    (KNOWN_RULESETS as readonly string[]).includes(r as string)
  );
  const enabledRulesets: Ruleset[] = Array.from(new Set<Ruleset>(["core", ...picked]));
  return {
    enabledRulesets,
    houseRules: {
      ...DEFAULT_HOUSE_RULES,
      ...(input?.houseRules ?? {}),
      // Shaun's permanent lock (2026-10-27) applies to the prefs too:
      // cross-class skills never cost double. Off until he asks.
      crossClassSkillDoubleCost: false,
    },
  };
}

export function loadTogglePrefs(): TogglePrefs | null {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeTogglePrefs(JSON.parse(raw) as Partial<TogglePrefs>);
  } catch {
    return null;
  }
}

export function saveTogglePrefs(prefs: TogglePrefs): void {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(sanitizeTogglePrefs(prefs)));
  } catch {
    // Storage unavailable (private mode etc.): inheritance simply does
    // not persist across sessions; per-build toggles still work.
  }
}
