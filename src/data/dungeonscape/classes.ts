import type { ClassDefinition, FeatureDefinition } from "@/engine/types";

// Dungeonscape (WotC, D&D 3.5) base class — the Factotum
// (Chapter 1, printed pp. 14-19), transcribed from Shaun's
// own copy. 3.5-native: no conversion. Table 1-1 was
// verified against a rendered page because the text layer
// interleaves its columns. Progression arrays are levels
// 1-10 per this app's per-class level cap; the table's
// values for levels 11-20 (inspiration points, arcane
// dilettante spell counts and maximum spell level) are
// recorded in the feature text where the book prints
// them. Summaries are short mechanical paraphrases in
// our own words; no book prose is reproduced.
//
// Chapter 1's other character content — the fourteen
// alternative class features in "Standard Class Options"
// (pp. 8-14) — is NOT coded here: the app has no
// alternative-class-feature mechanism (the same reason
// the Planar Handbook substitution levels and the
// Exemplars of Evil alternative class features were
// documented rather than coded). They are written up in
// full in reference.md in this staging folder.

const DS = "Dungeonscape";
const DS_PATH = "workspace/library-staging/books/dungeonscape.pdf";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  levelsNeeded: number | undefined,
): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source: DS,
    sourceUrl: DS_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

const TQ_BAB = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD_SAVE = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR_SAVE = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

function rows(bab: number[], fort: number[], ref: number[], will: number[]) {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

export const DUNGEONSCAPE_CLASSES: ClassDefinition[] = [
  {
    id: "factotum",
    name: "Factotum",
    ruleset: "core",
    source: DS,
    sourceUrl: DS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ_BAB, POOR_SAVE, GOOD_SAVE, POOR_SAVE),
    classSkills: [
      "All skills — a factotum treats every skill as a class skill",
    ],
    features: [
      f("Factotum Basics", "Alignment: any. Key ability: Intelligence governs nearly everything the factotum does, including his inspiration-driven abilities and arcane dilettante spell DCs. Starting gold 6d4 x 10 gp (150 gp); starting age as wizard. Weapon and armor proficiency: all simple and martial weapons, light armor, and shields (except tower shields). Because a factotum's spells are actually spell-like abilities, he can wear armor without incurring arcane spell failure for his factotum abilities; a multiclass factotum still incurs normal arcane spell failure for arcane spells from other classes.", undefined),
      f("Inspiration", "At the beginning of each encounter you gain inspiration points, which you spend to activate your factotum abilities. Points by level: 2 at 1st, 3 at 2nd-4th, 4 at 5th-7th, 5 at 8th-10th. (The book's table continues: 6 at 11th-13th, 7 at 14th-16th, 8 at 17th-19th, and 10 at 20th.)", 1),
      f("Cunning Insight (Ex)", "Before making an attack roll, damage roll, or saving throw, you can spend 1 inspiration point to gain a competence bonus on the roll equal to your Intelligence modifier. It requires no action, can be used on your turn or others' turns as long as you have points to spend, and does not stack with itself.", 1),
      f("Cunning Knowledge (Ex)", "When making a check involving a skill in which you have at least 1 rank, you can spend 1 inspiration point to gain a bonus on the check equal to your factotum level. You can use this ability only once per day for any particular skill, though you may use it on different skills.", 1),
      f("Trapfinding (Ex)", "You can use the Search skill to locate traps with a DC higher than 20, and you can use Disable Device to bypass a trap or disarm magic traps, as the rogue class feature.", 1),
      f("Arcane Dilettante (Sp)", "At 2nd level you can mimic spells as spell-like abilities by spending 1 inspiration point. At the start of each day, choose spells from the sorcerer/wizard list: 1 spell at 2nd level, 2 at 4th, 3 at 7th, 4 at 9th (the book's table continues: 5 at 12th, 6 at 14th, 7 at 17th, 8 at 20th). The maximum spell level you can use is 0 at 2nd level, 1st at 3rd, 2nd at 5th, 3rd at 8th, 4th at 10th (continuing: 5th at 13th, 6th at 15th, 7th at 18th), and you can prepare only one spell of your maximum level. Your caster level equals your factotum level; the save DC is 10 + the spell level + your Int modifier. Once used, a spell cannot be used again until you have rested 8 hours and chosen new spells; you cannot prepare the same spell multiple times in a day. You cannot use spells that require an XP cost, and you must provide material components as normal. A metamagic feat must be applied when the spell is prepared, and you must be capable of using a spell of the modified level.", 2),
      f("Brains over Brawn (Ex)", "At 3rd level, you gain your Intelligence bonus as a modifier on Strength checks, Dexterity checks, and checks involving skills based on Strength or Dexterity, such as Hide, Climb, and Jump.", 3),
      f("Cunning Defense (Ex)", "Starting at 3rd level, as a free action you can spend 1 inspiration point to gain your Intelligence bonus as a dodge bonus to Armor Class against one opponent for 1 round. You gain this benefit even while wearing medium or heavy armor. You can use it against different opponents multiple times, but not more than once per turn against a single foe.", 3),
      f("Cunning Strike (Ex)", "Starting at 4th level, you can spend 1 inspiration point before making an attack roll to gain 1d6 points of sneak attack damage on that attack. When determining whether you can use sneak attack against a target with uncanny dodge, use your factotum level as your rogue level.", 4),
      f("Opportunistic Piety (Su)", "Starting at 5th level, you can spend 1 inspiration point as a standard action to channel divine energy to heal injuries, harm undead, or turn undead. You can use this ability a number of times per day equal to 3 + your Wisdom bonus (if any), plus one extra daily use at 10th, 15th, and 20th level. Used to heal, it restores hit points to a living creature equal to twice your factotum level + your Int modifier, and deals the same amount of damage to undead targets. Used to turn undead, you act as a cleric of a level equal to your factotum level, but you can never control undead.", 5),
      f("Cunning Surge (Ex)", "Starting at 8th level, by spending 3 inspiration points you can take an extra standard action during your turn.", 8),
      f("Cunning Breach (Su)", "Starting at 11th level, by spending 2 inspiration points as a free action, you can ignore a single target's spell resistance and damage reduction for 1 round. The target automatically fails any spell resistance check it attempts against your spell.", 11),
      f("Cunning Dodge (Ex)", "Starting at 13th level, if you take damage that would reduce you to 0 or fewer hit points, you can spend 4 inspiration points as an immediate action to ignore the damage entirely. Usable once per day.", 13),
      f("Improved Cunning Defense (Ex)", "At 16th level, you gain your Intelligence bonus as a dodge bonus to Armor Class at all times, without spending an inspiration point. Unlike standard cunning defense, you do not gain this benefit when wearing medium or heavy armor.", 16),
      f("Cunning Brilliance (Ex)", "At 19th level, at the start of each day choose three extraordinary class abilities, each available to a standard character class at 15th level or lower and appearing on that class's advancement table or in its text description. By spending 4 inspiration points as a free action, you gain the benefits and drawbacks of one chosen ability for 1 minute, using it as if your level in the relevant class equaled your factotum level. Each chosen ability can be used once per day.", 19),
    ].map((x) => x as FeatureDefinition),
  },
];
