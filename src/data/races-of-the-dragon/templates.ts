/**
 * Races of the Dragon template data pack: the dragonborn of Bahamut
 * transformation (Chapter 1) and the draconic creature template
 * (Chapter 4). Built 2026-10-27 from the copy in Shaun's Dropbox
 * library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf
 *
 * Races of the Dragon is a generic D&D 3.5 supplement, so these
 * records carry ruleset "core".
 *
 * Judgment call — dragonborn modeled as a template: Races of the
 * Dragon Chapter 1 presents the dragonborn of Bahamut not as a race
 * but as the result of the Rite of Rebirth, a transformation an
 * existing character undergoes. The character keeps her original
 * type, subtypes (gaining dragonblood), size, speed, racial Hit
 * Dice, favored classes (gaining fighter), and level adjustment,
 * gains +2 Constitution and –2 Dexterity on top of her original
 * racial ability modifiers, and chooses one of three draconic
 * aspects (heart, mind, or wings) — which maps directly onto this
 * app's template model with forms, exactly as the half-dragon's
 * dragon varieties do. One printed rule the app cannot enforce:
 * the reborn dragonborn LOSES all other racial traits of her
 * original race (bonus feats, skill bonuses, spell-like abilities,
 * and so on). The template record cannot strip the base race's
 * traits in the resolver, so that loss is stated in the summary and
 * feature text and must be honored by hand.
 */
import type { TemplateDefinition } from "@/engine/types";

const ROTD = "Races of the Dragon";
const ROTD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf";

export const RACES_OF_THE_DRAGON_TEMPLATES: TemplateDefinition[] = [
  {
    id: "dragonborn-of-bahamut",
    name: "Dragonborn of Bahamut",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A character reborn through the Rite of Rebirth as a draconic servant of Bahamut: gains the dragonblood subtype, +2 Constitution and –2 Dexterity, a +2 dodge bonus to AC against dragons, immunity to dragon frightful presence, the Draconic language, and fighter as an additional favored class (paladins may also multiclass freely) — and chooses one draconic aspect: heart, mind, or wings. Per the Mechanics of Rebirth sidebar, the dragonborn retains her original type, size, speed, racial Hit Dice, and level adjustment, but loses all other racial traits of her original race; the app cannot strip the base race's traits automatically, so apply that loss by hand.",
    source: `${ROTD} — Chapter 1: Dragonborn of Bahamut, Dragonborn Racial Traits (pp. 8–9); The Mechanics of Rebirth sidebar (p. 10)`,
    sourceUrl: ROTD_PATH,
    crModifier: 0,
    levelAdjustment: 0,
    prerequisites: [
      {
        note: "Undergo the Rite of Rebirth: the supplicant must be non-evil with Intelligence 3 or higher, fast and meditate for a full day and night, then sleep within a self-built symbolic egg (100 gp) and emerge transformed at the next dawn, dedicated to Bahamut.",
      },
    ],
    abilityModifiers: { con: 2, dex: -2 },
    patches: [
      {
        op: "add-subtype",
        value: "Dragonblood",
        note: "Gains the dragonblood subtype; original type and subtypes are retained (Mechanics of Rebirth, p. 10). For all effects related to race, a dragonborn is considered a dragon and a member of her original race.",
      },
    ],
    features: [
      {
        key: "dragonborn-dragon-defense",
        name: "Draconic Defense",
        description:
          "+2 dodge bonus to Armor Class against creatures of the dragon type, from an innate sense of how dragons fight. This is a conditional bonus, so it is recorded here rather than as an always-on modifier.",
        category: "trait",
        source: `${ROTD} — Dragonborn Racial Traits (p. 8)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "dragonborn-frightful-presence-immunity",
        name: "Immunity to Frightful Presence",
        description:
          "Dragonborn are immune to the frightful presence ability of dragons, just as if they were dragons.",
        category: "special-quality",
        source: `${ROTD} — Dragonborn Racial Traits (p. 8)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "dragonborn-rebirth",
        name: "Mechanics of Rebirth",
        description:
          "The dragonborn retains her original type, subtypes, size, base land speed and other movement modes, racial Hit Dice, languages, favored classes, and level adjustment, and emerges as an adult regardless of previous age (aging effects restart from the dragonborn table: middle age at 200 years). She loses all other racial traits of her original race — including bonus feats, skill bonuses, and spell-like abilities — with the book's exceptions for replaced feats and prestige-class qualifications. She also gains Draconic as an automatic language, fighter as a favored class, and may leave and return to the paladin class without penalty. Upon becoming a dragonborn she may optionally replace one existing feat with a 1st-level-only dragonblood feat (Chapter 6).",
        category: "trait",
        source: `${ROTD} — The Mechanics of Rebirth sidebar (p. 10); Dragonborn Racial Traits (pp. 8–9)`,
        sourceUrl: ROTD_PATH,
      },
    ],
    forms: [
      {
        id: "heart",
        name: "Draconic Aspect: Heart",
        description:
          "A breath weapon: a shining line of energy chosen fresh at each use.",
        features: [
          {
            key: "dragonborn-breath-weapon",
            name: "Breath Weapon (Su)",
            description:
              "A bright, shining line that coruscates with every metallic color, 5 feet long per Hit Die (maximum 100 feet at 20 HD). It deals 1d8 points of damage, plus an extra 1d8 for each 3 HD the dragonborn possesses (2d8 at 3 HD, 3d8 at 6 HD, and so on). The damage type is chosen at each use: acid, cold, electricity, or fire. Usable once every 1d4 rounds.",
            category: "special-attack",
            dcFormula: "10 + 1/2 HD + Con modifier (Reflex half)",
            source: `${ROTD} — Dragonborn Racial Traits, Draconic Aspect: Heart (p. 9)`,
            sourceUrl: ROTD_PATH,
          },
        ],
      },
      {
        id: "mind",
        name: "Draconic Aspect: Mind",
        description:
          "Sharpened draconic senses that deepen with experience.",
        features: [
          {
            key: "dragonborn-mind-senses",
            name: "Draconic Senses (Ex)",
            description:
              "Immunity to paralysis and magic sleep effects. Darkvision 30 feet and low-light vision (see twice as far as a human), plus a +2 racial bonus on Listen, Search, and Spot checks. At 6 HD darkvision extends to 60 feet; at 9 HD to 90 feet and low-light vision sees three times as far; at 12 HD darkvision reaches 120 feet and low-light vision sees four times as far; at 15 HD the dragonborn gains blindsense out to 30 feet.",
            category: "special-quality",
            source: `${ROTD} — Dragonborn Racial Traits, Draconic Aspect: Mind (p. 9)`,
            sourceUrl: ROTD_PATH,
          },
        ],
      },
      {
        id: "wings",
        name: "Draconic Aspect: Wings",
        description:
          "Fully formed wings: gliding from birth, true flight from 6 HD.",
        features: [
          {
            key: "dragonborn-wings",
            name: "Wings (Ex)",
            description:
              "+10 racial bonus on Jump checks. The dragonborn can glide at 30 feet (average maneuverability), negating falling damage and traveling 20 feet forward per 5 feet of descent; she cannot glide with a medium or heavy load. At 6 HD she gains a fly speed of 30 feet (average maneuverability), limited to a number of consecutive rounds equal to her Constitution modifier (minimum 1) before fatigue, and no more than 10 minutes of flight per day without fatigue. At 12 HD she can fly without tiring. A flying dragonborn can make a dive attack with a piercing weapon (a charge descending at least 10 feet after moving at least 30 feet) for double damage.",
            category: "special-quality",
            source: `${ROTD} — Dragonborn Racial Traits, Draconic Aspect: Wings (p. 9)`,
            sourceUrl: ROTD_PATH,
          },
        ],
      },
    ],
  },
  {
    id: "draconic-creature",
    name: "Draconic Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature with dragon blood many generations back: gains the dragonblood subtype, natural armor improves by 1, gains two claw attacks, darkvision 60 feet and low-light vision, a +4 racial bonus on saves against magic sleep and paralysis, and a +2 racial bonus on Intimidate and Spot checks. Type is unchanged, except that animals become magical beasts (noted here; the app applies no type patch for this conditional change). The dragon devotee prestige class (Chapter 5) can also grant this template without its level adjustment.",
    source: `${ROTD} — Chapter 4: Dragon-Descended, Creating a Draconic Creature (p. 74)`,
    sourceUrl: ROTD_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "Draconic is an inherited template that can be added to any living, corporeal creature except a dragon.",
      },
    ],
    abilityModifiers: { str: 2, con: 2, cha: 2 },
    patches: [
      {
        op: "add-subtype",
        value: "Dragonblood",
        note: "All draconic creatures gain the dragonblood subtype; size and type are otherwise unchanged (animals become magical beasts).",
      },
    ],
    modifiers: [
      {
        id: "draconic-natural-armor",
        source: "Draconic Creature",
        sourceUrl: ROTD_PATH,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by 1.",
      },
    ],
    features: [
      {
        key: "draconic-claws",
        name: "Claw Attacks",
        description:
          "Gains two claw attacks if it doesn't already have them, dealing damage by size: up to Tiny 1, Small 1d2, Medium 1d3, Large 1d4, Huge 1d6, Gargantuan 1d8, Colossal 1d10. A creature that already has claw attacks keeps the better damage.",
        category: "special-attack",
        source: `${ROTD} — Creating a Draconic Creature (p. 74)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "draconic-senses",
        name: "Draconic Senses and Resistances",
        description:
          "Darkvision out to 60 feet and low-light vision. +4 racial bonus on saving throws against magic sleep effects and paralysis. +2 racial bonus on Intimidate and Spot checks (racial skill bonuses are recorded here, following the pack convention for bonuses the app does not break out per skill).",
        category: "special-quality",
        source: `${ROTD} — Creating a Draconic Creature (p. 74)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
];
