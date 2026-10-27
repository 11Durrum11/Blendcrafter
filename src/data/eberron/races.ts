/**
 * Eberron race data pack: the four playable races introduced in the
 * Eberron Campaign Setting (Changeling, Kalashtar, Shifter, Warforged).
 *
 * Built 2026-10-26 from the copy of the Eberron Campaign Setting in
 * Shaun's Dropbox library:
 *   /A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf
 * Trait wording follows the rebuild's house style (short mechanical
 * summaries, as in the core pack) rather than reproducing book text.
 * The Eberron Campaign Setting presents no playable templates, so this
 * ruleset intentionally adds none rather than inventing one.
 */
import type { RaceDefinition } from "@/engine/types";

const ECS = "Eberron Campaign Setting";
const ECS_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf";

export const EBERRON_RACES: RaceDefinition[] = [
  {
    id: "changeling",
    name: "Changeling",
    ruleset: "eberron",
    source: `${ECS} — Races: Changelings (p. 13)`,
    sourceUrl: ECS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Shapechanger"],
    abilityModifiers: {},
    favoredClass: "Rogue",
    skillBonuses: { bluff: 2, intimidate: 2, "sense-motive": 2 },
    traits: [
      {
        key: "changeling-slippery-mind",
        name: "Slippery Mind",
        description:
          "+2 racial bonus on saving throws against sleep and charm effects.",
        category: "special-quality",
        source: `${ECS} — Changeling Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "changeling-minor-change-shape",
        name: "Minor Change Shape (Su)",
        description:
          "As a full-round action, alter your own appearance as with disguise self, except the change is a real physical alteration of facial features, skin color and texture, and size within the spell's limits (possessions are unaffected). Lasts until changed again; reverts on death; true seeing reveals the natural form. Grants a +10 circumstance bonus on Disguise checks when used to create a disguise.",
        category: "special-quality",
        source: `${ECS} — Changeling Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "changeling-social-intuition",
        name: "Social Intuition",
        description:
          "+2 racial bonus on Bluff, Intimidate, and Sense Motive checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${ECS} — Changeling Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "changeling-natural-linguist",
        name: "Natural Linguist",
        description:
          "Speak Language is always a class skill for a changeling, regardless of class.",
        category: "trait",
        source: `${ECS} — Changeling Racial Traits`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "kalashtar",
    name: "Kalashtar",
    ruleset: "eberron",
    source: `${ECS} — Races: Kalashtar (pp. 17–18)`,
    sourceUrl: ECS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Psionic"],
    abilityModifiers: {},
    favoredClass: "Psion",
    skillBonuses: { bluff: 2, diplomacy: 2, intimidate: 2, disguise: 2 },
    traits: [
      {
        key: "kalashtar-dual-spirit",
        name: "Dual Spirit",
        description:
          "+2 racial bonus on saving throws against mind-affecting spells and abilities, and against possession.",
        category: "special-quality",
        source: `${ECS} — Kalashtar Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "kalashtar-social-mastery",
        name: "Social Mastery",
        description:
          "+2 racial bonus on Bluff, Diplomacy, and Intimidate checks, and a +2 racial bonus on Disguise checks made to impersonate a human (all included in this race's skill bonuses).",
        category: "trait",
        source: `${ECS} — Kalashtar Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "kalashtar-dreamless-sleep",
        name: "Dreamless Sleep",
        description:
          "Kalashtar sleep but do not dream, and are immune to the dream and nightmare spells and to any other effect that relies on the target's ability to dream.",
        category: "special-quality",
        source: `${ECS} — Kalashtar Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "kalashtar-naturally-psionic",
        name: "Naturally Psionic",
        description:
          "Kalashtar gain 1 extra power point per character level, regardless of whether they choose a psionic class.",
        category: "special-quality",
        source: `${ECS} — Kalashtar Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "kalashtar-mindlink",
        name: "Psi-Like Ability: Mindlink",
        description:
          "Mindlink 1/day, as the power manifested by a wilder of 1/2 the kalashtar's Hit Dice (minimum 1st level): a telepathic bond with one willing creature within 30 feet, lasting 1 round per character level.",
        category: "special-attack",
        source: `${ECS} — Kalashtar Racial Traits`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "shifter",
    name: "Shifter",
    ruleset: "eberron",
    source: `${ECS} — Races: Shifters (pp. 19–20)`,
    sourceUrl: ECS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Shapechanger"],
    abilityModifiers: { dex: 2, int: -2, cha: -2 },
    favoredClass: "Ranger",
    skillBonuses: { balance: 2, climb: 2, jump: 2 },
    traits: [
      {
        key: "shifter-shifting",
        name: "Shifting (Su)",
        description:
          "Once per day, as a free action, tap your lycanthropic heritage for a burst of physical power lasting 3 + your Constitution modifier rounds. Your shifter trait (chosen at character creation: beasthide, cliffwalk, dreamsight, gorebrute, longstride, longtooth, razorclaw, swiftwing, truedive, or wildhunt) grants a +2 bonus to one physical ability score (Strength, Dexterity, or Constitution) plus a trait-specific benefit while shifting. Each shifter feat you take extends shifting by 1 round; every two shifter feats grant one additional use per day.",
        category: "special-quality",
        source: `${ECS} — Shifter Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "shifter-low-light-vision",
        name: "Low-Light Vision",
        description:
          "A shifter can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination.",
        category: "special-quality",
        source: `${ECS} — Shifter Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "shifter-athletic",
        name: "Athletic Grace",
        description:
          "+2 racial bonus on Balance, Climb, and Jump checks (included in this race's skill bonuses).",
        category: "trait",
        source: `${ECS} — Shifter Racial Traits`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "warforged",
    name: "Warforged",
    ruleset: "eberron",
    source: `${ECS} — Races: Warforged (pp. 22–23)`,
    sourceUrl: ECS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Construct",
    subtypes: ["Living Construct"],
    abilityModifiers: { con: 2, wis: -2, cha: -2 },
    favoredClass: "Fighter",
    traits: [
      {
        key: "warforged-living-construct",
        name: "Living Construct Traits",
        description:
          "A warforged has a Constitution score and is subject to critical hits, nonlethal damage, stunning, ability damage/drain, and death and necromancy effects. Immune to poison, sleep effects, paralysis, disease, nausea, fatigue, exhaustion, sickened effects, and energy drain. Cannot heal damage naturally; healing spells and effects cure only half their normal amount, while repair spells heal fully. Reduced to 0 hit points a warforged is disabled; below 0 (above –10) it is inert but stable, losing no further hit points. Can be raised or resurrected. Does not need to eat, sleep, or breathe, but a warforged wizard must still rest 8 hours to prepare spells. Vulnerable to heat metal, chill metal, repel metal or stone, repel wood, and rusting grasp as if wearing metal armor.",
        category: "special-quality",
        source: `${ECS} — Warforged Racial Traits: Living Construct Subtype`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "warforged-composite-plating",
        name: "Composite Plating",
        description:
          "+2 armor bonus to AC from built-in plating. This is an armor bonus, not natural armor: it does not stack with other armor bonuses, occupies the body slot as a suit of armor or robe (a warforged cannot wear armor or magic robes), and can be enchanted exactly as armor can. The plating imposes a 5% arcane spell failure chance, treated as light armor for class features that ignore light-armor spell failure.",
        category: "special-quality",
        source: `${ECS} — Warforged Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "warforged-light-fortification",
        name: "Light Fortification (Ex)",
        description:
          "When a critical hit or sneak attack is scored on a warforged, there is a 25% chance the extra damage is negated and damage is rolled normally.",
        category: "special-quality",
        source: `${ECS} — Warforged Racial Traits`,
        sourceUrl: ECS_PATH,
      },
      {
        key: "warforged-slam",
        name: "Slam Attack",
        description:
          "A warforged has a natural weapon slam attack that deals 1d4 points of damage.",
        category: "special-attack",
        source: `${ECS} — Warforged Racial Traits`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
];
