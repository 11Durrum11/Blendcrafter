// Dragon #324 — Winning Races: Grippli, staged 2026-11-09.
// Typed RaceDefinition draft (house shape, after the #319/#323 race
// drafts). The article prints NO type line and NO Level Adjustment
// line (page-image verified, pp. 86-87). Adjudication, flagged in the
// MANIFEST for Shaun's call: the article's own text calls grippli
// "small, intelligent, humanoid tree frogs" with no racial Hit Dice
// and a PC-race presentation, so the race stages as Humanoid with
// levelAdjustment 0. Vital statistics (age, height, weight) are
// reference.md material.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #324 — Winning Races: Grippli (Joshua Cole), pp. 86-87";
const URL = "https://archive.org/details/DragonMagazine260_201801";

function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: URL };
}

export const DRAGON_324_RACES: RaceDefinition[] = [
  {
    id: "grippli",
    name: "Grippli",
    ruleset: "core",
    source: SRC,
    sourceUrl: URL,
    size: "Small",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, str: -2 },
    favoredClass: "Ranger",
    levelAdjustment: 0,
    skillBonuses: { "climb": 8, "jump": 4, "move-silently": 2 },
    traits: [
      t("grippli-climb", "Climb Speed", "Grippli have a climb speed of 20 feet. A grippli with a climb speed has a +8 racial bonus on all Climb checks (carried in skillBonuses)."),
      t("grippli-low-light-vision", "Low-Light Vision", "Grippli can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. They retain the ability to distinguish color and detail under these conditions."),
      t("grippli-weapon-familiarity", "Weapon Familiarity", "Grippli treat bolas and nets as martial weapons rather than exotic weapons."),
      t("grippli-vermin-foe", "Vermin Foe", "Grippli gain a +1 racial bonus on attack rolls against vermin and a +4 dodge bonus to Armor Class against monsters of the animal and vermin types. A condition that makes the grippli lose its Dexterity bonus to Armor Class (if any) also makes it lose this dodge bonus."),
      t("grippli-poison-resistance", "Poison Resistance", "Grippli gain a +2 racial bonus on saving throws against poison."),
      t("grippli-jump", "Leaping", "Grippli gain a +4 racial bonus on Jump checks (carried in skillBonuses) and treat all Jump checks as though they have a running start."),
      t("grippli-move-silently", "Quiet Movement", "Grippli gain a +2 racial bonus on Move Silently checks (carried in skillBonuses)."),
      t("grippli-illiterate", "Illiterate", "Grippli, even wizards, cannot read or write without devoting skill points to languages. By spending 1 skill point, a grippli can learn to read and write one language that she already speaks. Otherwise, languages work as normal for the grippli's class."),
      t("grippli-languages", "Languages", "Automatic Languages: Common and Grippli. Bonus Languages: Aquan, Elven, Gnome, Halfling, Sylvan, Undercommon."),
    ],
  },
];
