/**
 * Sandstorm race data pack: the two playable races of Chapter 2
 * of Sandstorm (Wizards of the Coast) — asherati and bhuka.
 * Built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Sandstorm.pdf
 *
 * Sandstorm is a generic D&D 3.5 supplement, not a separate
 * setting, so these records carry ruleset "core". Both races
 * gain Heat Endurance as a bonus feat at 1st level (see the
 * Sandstorm feat pack). Page citations are the book's printed
 * page numbers; in this PDF the printed page is the PDF page
 * minus one.
 */
import type { RaceDefinition } from "@/engine/types";

const SS = "Sandstorm";
const SS_PATH = "/A POC PC related/5.Splat/Sandstorm.pdf";
const CH2 = `${SS} — Chapter 2: Races, Classes, and Feats`;

export const SANDSTORM_RACES: RaceDefinition[] = [
  {
    id: "asherati",
    name: "Asherati",
    ruleset: "core",
    source: `${CH2} — Asherati Racial Traits (pp. 38–39)`,
    sourceUrl: SS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: {},
    favoredClass: "Rogue",
    levelAdjustment: 0,
    naturalArmor: 1,
    skillBonuses: { "move-silently": 2, hide: 2 },
    traits: [
      {
        key: "asherati-natural-dryness",
        name: "Natural Dryness (Ex)",
        description:
          "Asheratis must still drink water to survive, but need only one-quarter the amount of water per day that humanoids of their size must normally consume to avoid dehydration. An asherati's +1 natural armor bonus is included in this record.",
        category: "special-quality",
        source: `${CH2} — Asherati Racial Traits (p. 38)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "asherati-sandswim",
        name: "Sandswim (Su)",
        description:
          "An asherati gains a burrow speed equal to its base land speed while wearing light armor or carrying a light load and traveling through sand, ash, or other loose soil; the speed drops to 5 feet with a heavier load, or if the asherati tries to drag a Medium or larger creature along.",
        category: "special-quality",
        source: `${CH2} — Asherati Racial Traits (p. 38)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "asherati-body-lamp",
        name: "Body Lamp (Su)",
        description:
          "An asherati can make its skin glow at will, shedding light to 60 feet and shadowy illumination to 120 feet — enough to navigate by while sandswimming. Once per day as a free action, it can bring its skin to full brilliance so rapidly that creatures within 30 feet may be dazzled (Fortitude save negates; the DC is Charisma-based). An asherati cannot Hide while its skin glows.",
        category: "special-quality",
        source: `${CH2} — Asherati Racial Traits (pp. 38–39)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "asherati-heat-endurance",
        name: "Heat Endurance",
        description:
          "Asheratis gain Heat Endurance as a bonus feat at 1st level. They are familiar with the eagle's claw, treating it as a martial weapon rather than an exotic weapon (weapon familiarity).",
        category: "feat",
        source: `${CH2} — Asherati Racial Traits (p. 39)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "asherati-skills-and-water-vulnerability",
        name: "Skills and Water Vulnerability",
        description:
          "+2 racial bonus on Move Silently and Hide checks (included in this race's skill bonuses), with a further +2 bonus on Hide checks in sandy areas (conditional). Asheratis are vulnerable to water: they take damage from water exposure as described in the book's waste hazards.",
        category: "trait",
        source: `${CH2} — Asherati Racial Traits (p. 39)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "bhuka",
    name: "Bhuka",
    ruleset: "core",
    source: `${CH2} — Bhuka Racial Traits (pp. 40–41)`,
    sourceUrl: SS_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Goblinoid"],
    abilityModifiers: { str: -2, dex: 2 },
    favoredClass: "Druid",
    levelAdjustment: 0,
    skillBonuses: { "knowledge-nature": 2 },
    traits: [
      {
        key: "bhuka-sure-feet",
        name: "Sure Feet (Ex)",
        description: "Bhukas move through sand and loose soil without the usual movement penalties, and are sure-footed on unstable ground.",
        category: "special-quality",
        source: `${CH2} — Bhuka Racial Traits (p. 40)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "bhuka-glare-resistance",
        name: "Glare Resistance (Ex)",
        description: "Bhukas are resistant to glare and dazzling light effects, and can see clearly in bright desert conditions that would dazzle others.",
        category: "special-quality",
        source: `${CH2} — Bhuka Racial Traits (p. 40)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "bhuka-water-sense",
        name: "Water Sense (Ex)",
        description: "A bhuka can sense the presence and direction of water in its surroundings, as described in the race's trait list.",
        category: "special-quality",
        source: `${CH2} — Bhuka Racial Traits (pp. 40–41)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "bhuka-heat-endurance",
        name: "Heat Endurance and Nature Knowledge",
        description:
          "Bhukas gain Heat Endurance as a bonus feat at 1st level, a +2 bonus on Constitution checks and Fortitude saves to resist the effects of heat and dehydration (conditional, so not included in this race's skill bonuses), and a +2 racial bonus on Knowledge (nature) checks (included), with Knowledge (nature) always a class skill for them.",
        category: "feat",
        source: `${CH2} — Bhuka Racial Traits (p. 41)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
];
