// Dragon Magazine #348 (October 2006) — feat draft: 14 records.
// THIRTEEN commander auras (below) plus WIGHTBLADE, a true printed
// [Monstrous] feat buried in "Ecology of the Wight" (Graeme Davis),
// p. 64 — a record-bearing sidebar the survey (and the TOC) never
// itemized; ecologies in this program are reference by default, but a
// fully printed feat stages as a feat wherever it appears.
// The thirteen COMMANDER AURAS of "Class Acts: Marshal of Battle"
// (Stefan Happ), pp. 91-92. ⚠️ These are NOT printed as feats: they are
// commander auras in the Heroes of Battle system, each printed with
// Prerequisites and a Benefit in feat format, selectable by any
// character (marshal or commander) who meets the prerequisites. The
// feats barrel is the catalog's only record shape for discrete
// prerequisite-gated benefits, so they stage there — ids/names carry
// the aura identity plainly, every record's text opens with the framing
// and the not-a-feat disclosure, and the decision is flagged in
// SCREENING.md for Shaun's call (precedent: the issue-331 familiar
// abilities). Aura range and projection rules ride on the Marshal of
// Battle class record in classes-draft.ts: a nonmarshal commander's
// aura reaches 30 feet and he may have only one; a marshal's reaches
// 60 feet (90 at 14th level, 120 at 20th), with two auras projected at
// once from 7th level and three at 20th.
// Read from the archive.org djvu OCR stream; prerequisites and benefit
// numbers cross-checked against the printed column text.

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #348 — Class Acts: Marshal of Battle (Stefan Happ), pp. 91-92";
const SRC_WIGHT = "Dragon Magazine #348 — Ecology of the Wight (Graeme Davis), p. 64";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const FRAME =
  "Commander aura (not a printed feat — staged in the feats barrel as the catalog's only fitting record shape; see SCREENING.md). Any character wishing to use this aura, whether marshal or commander, must meet all of its prerequisites. Aura range and projection limits are as given on the Marshal of Battle variant class record. ";

export const DRAGON_348_FEATS: FeatDefinition[] = [
  F({
    id: "wightblade",
    name: "Wightblade",
    source: SRC_WIGHT,
    category: "general",
    prerequisites: ["Energy drain ability"],
    benefitSummary:
      "[Monstrous.] You can use your energy drain attack while using a melee weapon. Prerequisite: Energy drain ability. Benefit: On a successful melee hit against a living opponent, you may use your energy drain ability in addition to dealing normal damage for your weapon. Normal: You may only use your energy drain ability when you strike with your natural weapons.",
  }),
  F({
    id: "artful-commander",
    name: "Artful Commander (Commander Aura)",
    prerequisites: ["Commander rating 2", "Chaotic alignment"],
    benefitSummary: FRAME + "Your troops are skilled at using unusual combat maneuvers. Benefit: Allies within your aura range gain a +1 morale bonus on bull rush, disarm, sunder, and trip attempts.",
  }),
  F({
    id: "brawling-commander",
    name: "Brawling Commander (Commander Aura)",
    prerequisites: ["Commander rating 1", "Improved Unarmed Strike"],
    benefitSummary: FRAME + "The troops under your command are especially effective at unarmed combat. Benefit: Allies within your aura range gain a +1 morale bonus on unarmed attack rolls and a +1 morale bonus on damage rolls when dealing nonlethal damage.",
  }),
  F({
    id: "cavalry-commander",
    name: "Cavalry Commander (Commander Aura)",
    prerequisites: ["Commander rating 1", "Ride 5 ranks", "Mounted Combat"],
    benefitSummary: FRAME + "You are especially adept at leading mounted troops in battle. Benefit: Allies within your aura range gain a +1 morale bonus on attack rolls and on Ride checks when mounted.",
  }),
  F({
    id: "charioteer-commander",
    name: "Charioteer Commander (Commander Aura)",
    prerequisites: ["Commander rating 2", "Handle Animal 5 ranks", "Profession (teamster) 5 ranks"],
    benefitSummary: FRAME + "You are especially skilled at leading war vehicles into battle. Benefit: Allies within your aura range gain a +1 morale bonus on Profession (teamster) skill checks and a +1 morale bonus on attack rolls made while crewing a chariot or wheeled war vehicle.",
  }),
  F({
    id: "guard-commander",
    name: "Guard Commander (Commander Aura)",
    prerequisites: ["Commander rating 1", "Listen 5 ranks or Spot 5 ranks"],
    benefitSummary: FRAME + "You have learned to effectively lead troops assigned to guard details. Benefit: Allies within your aura range gain a +1 morale bonus on Listen and Spot checks.",
  }),
  F({
    id: "guerilla-commander",
    name: "Guerilla Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Chaotic alignment", "Sneak attack +1d6 or Blind-Fight"],
    benefitSummary: FRAME + "You are an effective leader of formations of unconventional troops, striking in the darkness and with total silence. Benefit: You can communicate your orders and commands to your allies within your aura range undetectably, using projected whispers, body language, and hand signals.",
  }),
  F({
    id: "hardy-commander",
    name: "Hardy Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Barbarian class or Toughness"],
    benefitSummary: FRAME + "You inspire your troops to ignore wounds from enemies. Benefit: Allies within your aura range gain damage reduction 1/—.",
  }),
  F({
    id: "inspiring-commander",
    name: "Inspiring Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Diplomacy 5 ranks or Intimidate 5 ranks"],
    benefitSummary: FRAME + "You bring out the best in your troops. Benefit: Allies within your aura range gain a +1 morale bonus on all ability checks and initiative rolls.",
  }),
  F({
    id: "naval-commander",
    name: "Naval Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Profession (sailor) 5 ranks"],
    benefitSummary: FRAME + "You are especially skilled at commanding ships in battle. Benefit: Allies within your aura range gain a +3 morale bonus on Profession (sailor) and Survival checks made to navigate when at sea.",
  }),
  F({
    id: "picket-commander",
    name: "Picket Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Hide 5 ranks", "Move Silently 5 ranks"],
    benefitSummary: FRAME + "You are an effective commander of soldiers assigned to picket lines. Benefit: Allies within your aura range gain a +2 morale bonus on Move Silently and Hide checks.",
  }),
  F({
    id: "rampart-commander",
    name: "Rampart Commander (Commander Aura)",
    prerequisites: ["Commander rating 3", "Climb 5 ranks"],
    benefitSummary: FRAME + "You are especially effective at leading men in defending and besieging walls. Benefit: Allies within your aura range gain a +1 morale bonus on Climb checks and a +1 morale bonus on attack rolls made while fighting against opponents on higher ground or lower ground.",
  }),
  F({
    id: "siege-commander",
    name: "Siege Commander (Commander Aura)",
    prerequisites: ["Commander rating 1", "Profession (siege engineer) 5 ranks"],
    benefitSummary: FRAME + "You are a capable commander of siege engines and their crews. Benefit: Allies within your aura range gain a +1 morale bonus on Profession (siege engineer) checks.",
  }),
  F({
    id: "volley-commander",
    name: "Volley Commander (Commander Aura)",
    prerequisites: ["Commander rating 2", "Lawful alignment", "Far Shot", "Point-Blank Shot"],
    benefitSummary: FRAME + "Your archers are particularly effective at volley firing. Benefit: Allies within your aura range who make volley of arrows attacks (Heroes of Battle, pp. 68-69) increase the DC of their attacks by +1 and the attacks deal +1 extra point of damage per archer firing the volley.",
  }),
];
