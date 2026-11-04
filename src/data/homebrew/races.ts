/**
 * Homebrew race pack: the warforged as Shaun plays them, from his
 * "MISC OTHER HOUSE RULES" document (his house-rules doc #4,
 * uploaded 2026-11-02 as
 * workspace/user/files/4._MISC_OTHER_HOUSE_RULES_6_xpih.docx).
 *
 * This record started (2026-11-02) as a VARIANT alongside the
 * Eberron Campaign Setting warforged, under id "warforged-house"
 * and name "Warforged (House Version)". At Shaun's order
 * (2026-11-03: "Remove the standard warforged and put the house
 * ruled one in its place") the Eberron record was deleted and THIS
 * record took its place: id "warforged", name "Warforged" (so
 * "Race: Warforged" prerequisites — Warforged Juggernaut and kin —
 * match it by name). The resolver keeps a legacy alias so builds
 * saved with "warforged-house" still resolve to this record.
 * Shaun's document reprints the living construct traits with his
 * own changes, and this record is modeled on the Eberron record's
 * shape with his text governing:
 *
 * - Warforged DO heal damage naturally — "Do to the biological
 *   nanites within their makeup" (Eberron print: cannot heal
 *   naturally).
 * - Spells from the healing sub-school and supernatural abilities
 *   that cure hit point damage or ability damage provide FULL
 *   normal effect (Eberron print: only half effect).
 *
 * Everything else in his traits block matches the Eberron text he
 * reprinted: +2 Constitution, −2 Wisdom, −2 Charisma; composite
 * plating; light fortification; 1d4 slam.
 */
import type { RaceDefinition } from "@/engine/types";

const DOC4 = "Shaun Bradley — Misc Other House Rules (house-rules doc #4)";
const DOC4_URL = "workspace/user/files/4._MISC_OTHER_HOUSE_RULES_6_xpih.docx";
const TRAITS_SOURCE = `${DOC4} — Warforged Racial Traits`;

export const HOMEBREW_RACES: RaceDefinition[] = [
  {
    id: "warforged",
    name: "Warforged",
    ruleset: "homebrew",
    source: `${DOC4} — Warforged Racial Traits`,
    sourceUrl: DOC4_URL,
    size: "Medium",
    baseSpeed: 30,
    type: "Construct",
    subtypes: ["Living Construct"],
    abilityModifiers: { con: 2, wis: -2, cha: -2 },
    favoredClass: "Fighter",
    traits: [
      {
        key: "warforged-house-living-construct",
        name: "Living Construct Traits",
        description:
          "Warforged are constructs with the living construct subtype — created beings given sentience and free will through powerful and complex creation enchantments — and combine aspects of both constructs and living creatures. Unlike other constructs, a warforged has a Constitution score, does not have low-light vision or darkvision, and is not immune to mind-affecting spells and abilities. A warforged derives its Hit Dice, base attack bonus progression, saving throws, and skill points from the class it selects. Unlike other constructs, warforged are subject to critical hits, nonlethal damage, stunning, ability damage, ability drain, and death effects or necromancy effects. As living constructs, warforged can be affected by spells that target living creatures as well as by those that target constructs: damage dealt to a warforged can be healed by a cure light wounds spell or a repair light damage spell, for example, and a warforged is vulnerable to disable construct and harm.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-immunities",
        name: "Living Construct Immunities",
        description:
          "Immunity to poison, sleep effects, paralysis, disease, nausea, fatigue, exhaustion, effects that cause the sickened condition, and energy drain.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-natural-healing",
        name: "Natural Healing (House Rule)",
        description:
          "Warforged DO heal damage naturally, due to the biological nanites within their makeup. Spells from the healing sub-school and supernatural abilities that cure hit point damage or ability damage provide FULL normal effect to a warforged.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-vulnerabilities",
        name: "Construct Vulnerabilities",
        description:
          "The unusual physical construction of warforged makes them vulnerable to certain spells and effects that normally don't affect living creatures. A warforged takes damage from heat metal and chill metal as if he were wearing metal armor; likewise, a warforged is affected by repel metal or stone as if he were wearing metal armor. A warforged is repelled by repel wood. The iron in the body of a warforged makes him vulnerable to rusting grasp: the creature takes 2d6 points of damage from the spell (Reflex half; save DC 14 + caster's ability modifier), and takes the same damage from a rust monster's touch (Reflex DC 17 half). Spells such as stone to flesh, stone shape, warp wood, and wood shape affect objects only and thus cannot be used on the stone and wood parts of a warforged.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-inert",
        name: "Reduced to 0 Hit Points",
        description:
          "A warforged with 0 hit points is disabled, just like a living creature: he can only take a single move action or standard action in each round, but strenuous activity does not risk further injury. When his hit points are less than 0 and greater than –10, a warforged is inert — unconscious and helpless, and he cannot perform any actions — but an inert warforged does not lose additional hit points unless more damage is dealt to him, as with a living creature that is stable. As a living construct, a warforged can be raised or resurrected.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-sustenance",
        name: "Sustenance",
        description:
          "A warforged does not need to eat, sleep, or breathe, but he can still benefit from the effects of consumable spells and magic items such as heroes' feast and potions. Although living constructs do not need to sleep, a warforged wizard must rest for 8 hours before preparing spells.",
        category: "trait",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-composite-plating",
        name: "Composite Plating",
        description:
          "The plating used to build a warforged provides a +2 armor bonus. This plating is not natural armor and does not stack with other effects that give an armor bonus (other than natural armor). It occupies the same space on the body as a suit of armor or a robe, so a warforged cannot wear armor or magic robes. Warforged can be enchanted just as armor can be enchanted (the character must be present for the entire time it takes to enchant him). Composite plating also provides a 5% arcane spell failure chance, like the penalty for wearing light armor; any class ability that allows a warforged to ignore the arcane spell failure chance for light armor lets him ignore this penalty as well.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-light-fortification",
        name: "Light Fortification (Ex)",
        description:
          "When a critical hit or sneak attack is scored on a warforged, there is a 25% chance that the critical hit or sneak attack is negated and damage is instead rolled normally.",
        category: "special-quality",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
      {
        key: "warforged-house-slam",
        name: "Slam Attack",
        description:
          "A warforged has a natural weapon in the form of a slam attack that deals 1d4 points of damage.",
        category: "special-attack",
        source: TRAITS_SOURCE,
        sourceUrl: DOC4_URL,
      },
    ],
  },
];
