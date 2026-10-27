/**
 * Races of the Dragon race data pack: the playable races of Races of
 * the Dragon (Wizards of the Coast) — the spellscale and the kobold,
 * each presented "as characters" in Chapters 2 and 3. Built
 * 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf
 *
 * Races of the Dragon is a generic D&D 3.5 supplement, not a separate
 * setting, so these records carry ruleset "core".
 *
 * The dragonborn of Bahamut (Chapter 1) is not a race of its own —
 * it is a transformation applied to an existing character — so it is
 * modeled as a template in templates.ts. The chapter on draconic
 * creatures (Chapter 4) likewise contributes the draconic creature
 * template, not a race. The half-dragon is a Monster Manual template
 * already in the core data. Kobold content here is from the printed
 * book only; the well-known kobold web enhancement is not in the
 * book and is not used.
 */
import type { RaceDefinition } from "@/engine/types";

const ROTD = "Races of the Dragon";
const ROTD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf";

export const RACES_OF_THE_DRAGON_RACES: RaceDefinition[] = [
  {
    id: "spellscale",
    name: "Spellscale",
    ruleset: "core",
    source: `${ROTD} — Chapter 2: Spellscales, Spellscale Racial Traits (p. 23)`,
    sourceUrl: ROTD_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Dragonblood"],
    abilityModifiers: { cha: 2, con: -2 },
    favoredClass: "Sorcerer",
    levelAdjustment: 0,
    traits: [
      {
        key: "spellscale-low-light-vision",
        name: "Low-Light Vision",
        description:
          "A spellscale can see twice as far as a human in conditions of poor illumination, and retains the ability to distinguish color and detail under these conditions.",
        category: "special-quality",
        source: `${ROTD} — Spellscale Racial Traits (p. 23)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "spellscale-dragonblood",
        name: "Humanoid (Dragonblood)",
        description:
          "Spellscales are humanoids with the dragonblood subtype; for all effects related to race, a spellscale is considered a dragon.",
        category: "trait",
        source: `${ROTD} — Spellscale Racial Traits (p. 23)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "spellscale-blood-quickening",
        name: "Blood Quickening",
        description:
          "Each day, a spellscale can perform a 1-hour draconic meditation keyed to a draconic deity (such as Aasterinian, Astilabor, Bahamut, Chronepsis, Falazure, Garyx, Hlal, Io, Lendys, Tamara, or Tiamat) to gain that meditation's benefit for 24 hours — for example a bonus on a skill, a save reroll, temporary hit points, or a mettle-like effect, varying by deity. The full menu is the Blood-Quickening Meditations sidebar.",
        category: "special-quality",
        source: `${ROTD} — Spellscale Racial Traits (p. 23); Blood-Quickening Meditations sidebar (p. 25)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "spellscale-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Draconic. Bonus Languages: Dwarven, Elven, Gnome, and Halfling.",
        category: "trait",
        source: `${ROTD} — Spellscale Racial Traits (p. 23)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
  {
    id: "kobold",
    name: "Kobold",
    ruleset: "core",
    source: `${ROTD} — Chapter 3: Kobolds, Kobold Racial Traits (p. 39); Favored Class (p. 40)`,
    sourceUrl: ROTD_PATH,
    size: "Small",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Dragonblood", "Reptilian"],
    abilityModifiers: { str: -4, dex: 2, con: -2 },
    naturalArmor: 1,
    favoredClass: "Sorcerer",
    levelAdjustment: 0,
    skillBonuses: { search: 2 },
    traits: [
      {
        key: "kobold-darkvision",
        name: "Darkvision",
        description:
          "Kobolds can see in the dark up to 60 feet. Darkvision is black and white only, but otherwise functions like normal sight.",
        category: "special-quality",
        source: `${ROTD} — Kobold Racial Traits (p. 39)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "kobold-natural-armor",
        name: "Natural Armor",
        description:
          "A kobold's scaly skin grants a +1 natural armor bonus (included in this race's natural armor).",
        category: "trait",
        source: `${ROTD} — Kobold Racial Traits (p. 39)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "kobold-trapmaking",
        name: "Trapmaking",
        description:
          "All kobolds add Craft (trapmaking) to their list of class skills for every class. Kobolds receive a +2 racial bonus on Craft (trapmaking), Profession (miner), and Search checks. The Search bonus is included in this race's skill bonuses; the Craft and Profession bonuses apply only to those subskills, which the app's skill list does not break out, so they are recorded here rather than as general Craft/Profession bonuses.",
        category: "trait",
        source: `${ROTD} — Kobold Racial Traits (p. 39)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "kobold-light-sensitivity",
        name: "Light Sensitivity",
        description:
          "Kobolds are dazzled in bright sunlight or within the radius of a daylight spell.",
        category: "trait",
        source: `${ROTD} — Kobold Racial Traits (p. 39)`,
        sourceUrl: ROTD_PATH,
      },
      {
        key: "kobold-languages",
        name: "Languages",
        description:
          "Automatic Language: Draconic. Bonus Languages: Common and Undercommon.",
        category: "trait",
        source: `${ROTD} — Kobold Racial Traits (p. 39)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
];
