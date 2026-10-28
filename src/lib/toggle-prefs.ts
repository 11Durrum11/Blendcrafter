import { ABILITY_KEYS, type AbilityKey, type CharacterBuild, type HouseRules, type Ruleset } from "@/engine/types";
import { DEFAULT_HOUSE_RULES } from "@/engine/house-rules";

/**
 * Shaun's standing toggle preferences (2026-10-28): "All toggles that I
 * have off stay off until I turn them back on" — and new characters
 * INHERIT the toggles as he last set them. This covers the ruleset and
 * house-rule toggles AND the per-entity enable switches (races, classes,
 * skills, feats, abilities): every toggle action stores the build's
 * whole toggle state here, and createDefaultBuild() starts new
 * characters from it. (The per-entity lists were originally left out;
 * Shaun caught it the same day — "I just turned off all kinds of races
 * and classes and you didn't save it" — and they were added.)
 *
 * Stored in localStorage (synchronous, tiny) rather than the IndexedDB
 * character repository, because createDefaultBuild() is synchronous.
 */
export interface TogglePrefs {
  enabledRulesets: Ruleset[];
  houseRules: HouseRules;
  disabledRaceIds: string[];
  disabledClassIds: string[];
  disabledSkillIds: string[];
  disabledFeatIds: string[];
  disabledAbilities: AbilityKey[];
}

const STORAGE_KEY = "blendcrafter:toggle-prefs";

const KNOWN_RULESETS: readonly Ruleset[] = ["core", "eberron", "iron_kingdoms", "sorcery_steam", "homebrew"];

/** First-run default (Shaun's live choice, 2026-10-27): every ruleset on. */
export const ALL_RULESETS_ON: Ruleset[] = [...KNOWN_RULESETS];

function cleanIds(list: string[] | undefined): string[] {
  return Array.from(new Set((list ?? []).filter((x): x is string => typeof x === "string")));
}

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
    disabledRaceIds: cleanIds(input?.disabledRaceIds),
    disabledClassIds: cleanIds(input?.disabledClassIds),
    disabledSkillIds: cleanIds(input?.disabledSkillIds),
    disabledFeatIds: cleanIds(input?.disabledFeatIds),
    disabledAbilities: (input?.disabledAbilities ?? []).filter((k): k is AbilityKey =>
      (ABILITY_KEYS as readonly string[]).includes(k as string)
    ),
  };
}

/** Snapshot a build's complete toggle state as prefs. */
export function prefsFromBuild(build: CharacterBuild): TogglePrefs {
  return sanitizeTogglePrefs({
    enabledRulesets: build.enabledRulesets,
    houseRules: build.houseRules,
    disabledRaceIds: build.disabledRaceIds,
    disabledClassIds: build.disabledClassIds,
    disabledSkillIds: build.disabledSkillIds,
    disabledFeatIds: build.disabledFeatIds,
    disabledAbilities: build.disabledAbilities,
  });
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
