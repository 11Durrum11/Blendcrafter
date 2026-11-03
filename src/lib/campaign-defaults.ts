import { DEFAULT_HOUSE_RULES } from "@/engine/house-rules";
import type { TogglePrefs } from "@/lib/toggle-prefs";

/**
 * Shaun's curated toggle state, baked into the app (2026-11-02).
 *
 * Why this exists: toggle prefs live in each browser's own
 * localStorage. Shaun curated his lists on his computer — 80 races,
 * 11 classes, and 2 feats turned off — but his phone and his D&D
 * group's browsers each started from the factory default (everything
 * on), so they all saw every race and he "looked like an asshole"
 * putting the app out to the group. The lists below are his own,
 * recovered intact from his computer's saved prefs, now shipped as
 * the app's starting state.
 *
 * How it applies (see builder.tsx): a one-time, versioned
 * migration. Version 1 adopted these wholesale on devices whose
 * prefs were missing or factory-default — but Shaun's phone had
 * stored prefs that were neither, so it kept showing every race.
 * Version 2 therefore MERGES: on any device that has not yet
 * applied v2, the campaign's turned-off lists are unioned into the
 * device's saved prefs and into the open character. Nothing is
 * ever removed from a device's lists, and rulesets / house rules
 * are never touched. After the migration the version key is
 * current, so if Shaun later turns one of these back on, it
 * stays on — the merge runs once, not forever.
 *
 * Version 3 (2026-11-03, Shaun: "Build the Forgotten Realms rule
 * set"): the "faerun" ruleset is new — the FR records used to be
 * tagged "core", so they were visible on every device. To keep
 * exactly what everyone sees today, the v3 merge also unions
 * "faerun" into enabledRulesets (saved prefs and open character),
 * once. That is the one ruleset change a merge has ever made, and
 * it only ever ADDS the new set: if Shaun later turns Forgotten
 * Realms off, the version key is already current and it stays off.
 */
export const CAMPAIGN_DEFAULTS_VERSION = 3;
export const CAMPAIGN_DEFAULTS_VERSION_KEY = "blendcrafter:campaign-defaults-version";

export const CAMPAIGN_DEFAULT_PREFS: TogglePrefs = {
  enabledRulesets: ["core", "eberron", "faerun", "iron_kingdoms", "sorcery_steam", "homebrew"],
  houseRules: {
    crossClassSkillDoubleCost: false,
    crossClassSkillHalfCap: true,
    levelAdjustmentBuyoff: false,
    superiorSynergy: false,
  },
  disabledRaceIds: [
    "gobber", "bogrin", "ogrun", "trollkin", "trollkin-sorcerer", "chaos-gnome",
    "dream-dwarf", "feral-gargun", "whisper-gnome", "raptoran", "gnoll",
    "neanderthal", "uldra", "frost-folk", "glacier-dwarf", "snow-goblin",
    "asherati", "bhuka", "spellscale", "kobold", "goblin", "hobgoblin",
    "bugbear", "orc", "synad", "doppelganger", "half-ogre", "mongrelfolk",
    "sea-kin", "sharakim", "skulk", "tiefling", "gray-orc", "mountain-orc",
    "orog", "feyri", "tanarukk", "aarakocra", "dekanter-goblin", "kir-lanan",
    "lizardfolk", "wemic", "yuan-ti-pureblood", "dromite", "githyanki",
    "githzerai", "thri-kreen", "hellbred", "armand", "dracotaur", "flind",
    "forestkith-goblin", "goatfolk", "harssaf", "kenku", "lumi", "nycter",
    "poison-dusk-lizardfolk", "quaraphon", "sand-giant", "skullcrusher-ogre",
    "crystalline-troll", "naztharune-rakshasa", "witchknife", "varag",
    "jaebrin", "efaarit", "ogre", "pixie", "satyr", "troll", "rakshasa",
    "forest-gnome", "deep-dwarf", "grimlock", "azer", "troglodyte",
    "gargoyle", "ogre-mage", "drow",
  ],
  disabledClassIds: [
    "druid", "adept", "aristocrat", "commoner", "warrior", "expert",
    "dragon-shaman", "wu-jen", "shugenja", "healer", "ardent",
  ],
  disabledSkillIds: [],
  disabledFeatIds: ["mobility", "spring-attack"],
  disabledAbilities: [],
};

/**
 * True when a device's saved prefs are still the untouched factory
 * default: every ruleset on, default house rules, nothing turned
 * off. Only factory-default devices get the campaign defaults —
 * anyone who has actually curated toggles on a device keeps theirs.
 */
export function isFactoryDefaultPrefs(prefs: TogglePrefs | null): boolean {
  if (prefs === null) return true;
  return (
    prefs.enabledRulesets.length === 6 &&
    prefs.disabledRaceIds.length === 0 &&
    prefs.disabledClassIds.length === 0 &&
    prefs.disabledSkillIds.length === 0 &&
    prefs.disabledFeatIds.length === 0 &&
    prefs.disabledAbilities.length === 0 &&
    JSON.stringify(prefs.houseRules) === JSON.stringify(DEFAULT_HOUSE_RULES)
  );
}

/**
 * Union the campaign's turned-off lists into any object carrying
 * the five disabled lists (a TogglePrefs or a CharacterBuild's
 * toggle fields). House rules are NOT touched. Rulesets are
 * touched in exactly one way since v3: "faerun" is unioned into
 * enabledRulesets when the object carries that field, so the new
 * Forgotten Realms set starts ON (its records were core-tagged
 * and visible before) instead of silently hiding FR content on
 * devices whose saved prefs predate the set.
 */
export function withCampaignOffs<
  T extends {
    disabledRaceIds: string[];
    disabledClassIds: string[];
    disabledSkillIds: string[];
    disabledFeatIds: string[];
    disabledAbilities: TogglePrefs["disabledAbilities"];
    enabledRulesets?: TogglePrefs["enabledRulesets"];
  },
>(input: T): T {
  const union = (a: string[], b: string[]) => Array.from(new Set([...a, ...b]));
  return {
    ...input,
    ...(input.enabledRulesets
      ? { enabledRulesets: union(input.enabledRulesets as string[], ["faerun"]) }
      : {}),
    disabledRaceIds: union(input.disabledRaceIds, CAMPAIGN_DEFAULT_PREFS.disabledRaceIds),
    disabledClassIds: union(input.disabledClassIds, CAMPAIGN_DEFAULT_PREFS.disabledClassIds),
    disabledSkillIds: union(input.disabledSkillIds, CAMPAIGN_DEFAULT_PREFS.disabledSkillIds),
    disabledFeatIds: union(input.disabledFeatIds, CAMPAIGN_DEFAULT_PREFS.disabledFeatIds),
    disabledAbilities: union(
      input.disabledAbilities as string[],
      CAMPAIGN_DEFAULT_PREFS.disabledAbilities as string[]
    ) as TogglePrefs["disabledAbilities"],
  };
}
