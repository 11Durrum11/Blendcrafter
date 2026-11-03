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
 * How it applies (see builder.tsx): on a device whose saved prefs
 * are missing or still the untouched factory default, these become
 * the device's prefs. A device with its own curated prefs (Shaun's
 * computer) is never overwritten. Bump CAMPAIGN_DEFAULTS_VERSION if
 * a future list should re-apply to factory-default devices.
 */
export const CAMPAIGN_DEFAULTS_VERSION = 1;
export const CAMPAIGN_DEFAULTS_VERSION_KEY = "blendcrafter:campaign-defaults-version";

export const CAMPAIGN_DEFAULT_PREFS: TogglePrefs = {
  enabledRulesets: ["core", "eberron", "iron_kingdoms", "sorcery_steam", "homebrew"],
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
    prefs.enabledRulesets.length === 5 &&
    prefs.disabledRaceIds.length === 0 &&
    prefs.disabledClassIds.length === 0 &&
    prefs.disabledSkillIds.length === 0 &&
    prefs.disabledFeatIds.length === 0 &&
    prefs.disabledAbilities.length === 0 &&
    JSON.stringify(prefs.houseRules) === JSON.stringify(DEFAULT_HOUSE_RULES)
  );
}
