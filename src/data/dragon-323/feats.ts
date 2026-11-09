// Dragon Magazine #323 (September 2004) — feats.
// Eleven feats stage, from two articles; every value verified
// against the page images (magazine pp. 90, 96), which correct
// the OCR layer in four places: the eighth Heroic Feat is SAILOR
// WILL (OCR read "ERROR Will"); Natural Dowser's prerequisite
// is Survival 4 ranks (OCR garbled); Sailor Will grants +4 on
// the opposed level checks (OCR read "+1"); Stalwart grants +4
// (OCR dropped the digit).
//
//   * "Heroic Feats: Mastery of the Sand and Seas" by Dean
//     Poisso (p. 90) prints eight [General] feats for desert and
//     coastal characters: DESERTBORN, NATURAL DOWSER, PIRATE
//     LUCK, POLYGLOT, SANDSTEP, SAVVY SWIMMER, SHIPBORN, and
//     SAILOR WILL.
//   * The "New Thane Feats" sidebar in Class Acts' "The Thane"
//     by Paul Leach (p. 96) prints three [General] feats: AURA
//     OF BRAVERY, IMPROVED AID ANOTHER, and STALWART. Any
//     character may take them, but a normal fighter may not
//     take them as fighter bonus feats; a thane may select
//     each as one of his fighter bonus feats (carried in each
//     record's summary as the printed Special line).
//
// None of the eleven names exists in the catalog. Benefit
// summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { FeatDefinition } from "@/engine/types";

const DM323_HEROIC = "Dragon Magazine #323 — Heroic Feats: Mastery of the Sand and Seas";
const DM323_THANE = "Dragon Magazine #323 — Class Acts: The Thane (New Thane Feats)";
const URL323 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt";

export const DRAGON_323_FEATS: FeatDefinition[] = [
  // ---- Heroic Feats (p. 90) ----
  {
    id: "desertborn",
    name: "Desertborn",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "You are comfortable in the blistering heat of the day and the bitter chill of the night. You treat heat conditions as if they were 20 degrees cooler (see the Dungeon Master's Guide, page 303). You also gain a +2 bonus on all Survival checks made while in the desert.",
  },
  {
    id: "natural-dowser",
    name: "Natural Dowser",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: ["Survival 4 ranks"],
    benefitSummary:
      "You gain a +4 bonus on Survival checks to get along in the wild.",
  },
  {
    id: "pirate-luck",
    name: "Pirate Luck",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: ["Cha 13"],
    benefitSummary:
      "Once per day, you may reroll one saving throw that you have just made before the DM declares whether the roll results in success or failure. You must take the result of the second roll, even if it is worse.",
  },
  {
    id: "polyglot",
    name: "Polyglot",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "You learn a language of your choice as a bonus language. In addition, Speak Language is always considered a class skill for you.",
  },
  {
    id: "sandstep",
    name: "Sandstep",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "The DCs of your Balance, Move Silently, and Tumble checks are not increased by the light or dense rubble or light undergrowth of desert terrain. Light and dense rubble and undergrowth in other regions still hinders you, and heavy undergrowth hinders you normally. In addition, when you enter a square of light undergrowth in desert terrain, you need only use 1 square of movement. Normal: Light rubble and light undergrowth raises the DC of Balance and Tumble checks by +2. Dense rubble raises the DC of Balance and Tumble checks by +5 and Move Silently checks by +2. You must use 2 squares of movement to enter a square with light undergrowth.",
  },
  {
    id: "savvy-swimmer",
    name: "Savvy Swimmer",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: ["Swim 4 ranks"],
    benefitSummary:
      "When proficient with the armor you wear, you suffer only half that armor's armor check penalty to Swim checks. Thus, if you are proficient with heavy armor and attempt to swim wearing banded mail, you suffer only a −3 penalty on Swim checks rather than the usual −12. Normal: Double the normal armor check penalty is applied to Swim checks.",
  },
  {
    id: "shipborn",
    name: "Shipborn",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "You gain a +2 circumstance bonus on any skill check necessary to operate or maintain a ship, including Balance checks on a pitching deck, Climb checks made in rigging, Craft (shipbuilding) checks, and Profession (sailor) checks. You only gain the bonuses if aboard a ship or, in the case of Craft (shipbuilding) checks, when the ship is docked.",
  },
  {
    id: "sailor-will",
    name: "Sailor Will",
    category: "general",
    ruleset: "core",
    source: DM323_HEROIC,
    sourceUrl: URL323,
    prerequisites: ["Base Will save +2"],
    benefitSummary:
      "You receive a +4 bonus on all modified level checks made to oppose Intimidate checks meant to demoralize you (see the Player's Handbook, page 76) and a +1 bonus on all Will saves.",
  },
  // ---- New Thane Feats (p. 96) ----
  {
    id: "aura-of-bravery",
    name: "Aura of Bravery",
    category: "general",
    ruleset: "core",
    source: DM323_THANE,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "All of your allies within 10 feet gain a +2 morale bonus on saves against fear effects so long as you do not suffer from a fear effect. You do not gain this bonus. Special: A thane may select Aura of Bravery as one of his fighter bonus feats (a normal fighter may not take the New Thane Feats as fighter bonus feats).",
  },
  {
    id: "improved-aid-another",
    name: "Improved Aid Another",
    category: "general",
    ruleset: "core",
    source: DM323_THANE,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "When successfully using the aid another action, you grant your ally a +4 bonus. Normal: Without this feat, you only give your ally a +2 bonus when using the aid another action. Special: A thane may select Improved Aid Another as one of his fighter bonus feats (a normal fighter may not take the New Thane Feats as fighter bonus feats).",
  },
  {
    id: "stalwart",
    name: "Stalwart",
    category: "general",
    ruleset: "core",
    source: DM323_THANE,
    sourceUrl: URL323,
    prerequisites: [],
    benefitSummary:
      "You gain a +4 bonus on the opposed Strength check made to resist bull rush, overrun, and trip attacks. Special: A thane may select Stalwart as one of his fighter bonus feats (a normal fighter may not take the New Thane Feats as fighter bonus feats).",
  },
];
