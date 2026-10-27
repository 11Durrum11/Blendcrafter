/**
 * Races of the Dragon feats: the new feats of Chapter 6 (Table 6–3,
 * p. 99), minus duplicates. Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf
 *
 * Duplicates skipped (9): Races of the Dragon reprints the draconic
 * feat line from Complete Arcane, and the Complete Arcane pack
 * already carries those records — draconic-heritage, draconic-breath,
 * draconic-claw, draconic-flight, draconic-legacy, draconic-power,
 * draconic-presence, draconic-resistance, and draconic-skin. Only
 * the three draconic feats new in this book (Arcane Grace,
 * Persuasion, Toughness) are recorded here. Summaries follow
 * Table 6–3, as in the other packs.
 */
import type { FeatDefinition } from "@/engine/types";

const ROTD = "Races of the Dragon";
const ROTD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf";
const T63 = `${ROTD} — Table 6–3: New Feats (p. 99)`;
const DRACONIC = "Draconic feat (Races of the Dragon grouping).";
const BREATH = "Breath channeling feat (Races of the Dragon grouping).";

export const RACES_OF_THE_DRAGON_FEATS: FeatDefinition[] = [
  // General feats
  { id: "accelerate-metamagic", name: "Accelerate Metamagic", category: "metamagic", ruleset: "core", prerequisites: ["Dragonblood subtype", "Spellcraft 4 ranks", "any metamagic feat", "ability to spontaneously cast 1st-level spells"], benefitSummary: "Apply a selected metamagic feat to your spells more quickly than normal (a spontaneous caster's metamagic casting time is reduced). You can gain this feat multiple times, once per metamagic feat.", source: T63, sourceUrl: ROTD_PATH },
  { id: "dragon-breath", name: "Dragon Breath", category: "general", ruleset: "core", prerequisites: ["Half-dragon", "6 HD", "breath weapon"], benefitSummary: "Use your breath weapon every 1d4 rounds instead of once per day.", source: T63, sourceUrl: ROTD_PATH },
  { id: "dragon-tail", name: "Dragon Tail", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "1st level only"], benefitSummary: "Gain a tail and a tail attack (damage by size).", source: T63, sourceUrl: ROTD_PATH },
  { id: "dragon-trainer", name: "Dragon Trainer", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "Handle Animal 4 ranks", "Speak Language (Draconic)"], benefitSummary: "Use Handle Animal to handle and train dragons with Intelligence 6 or lower as if they were animals; without this feat, dragons can't be reared with the Handle Animal skill.", source: T63, sourceUrl: ROTD_PATH },
  { id: "dragon-wings", name: "Dragon Wings", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "1st level only"], benefitSummary: "+10 bonus on Jump checks, and you can glide at 30 feet (negating falling damage).", source: T63, sourceUrl: ROTD_PATH },
  { id: "dragonwrought", name: "Dragonwrought", category: "race-specific", ruleset: "core", prerequisites: ["Kobold", "1st level only"], benefitSummary: "You are a dragonwrought kobold: your type is dragon rather than humanoid — you lose the dragonblood subtype but retain your other subtypes and all your kobold racial traits, and your scales become tinted with the color of your draconic heritage.", source: T63, sourceUrl: ROTD_PATH },
  { id: "extraordinary-trapsmith", name: "Extraordinary Trapsmith", category: "general", ruleset: "core", prerequisites: ["Craft (trapmaking) 9 ranks"], benefitSummary: "Reduce the cost of making a trap by 25% (50% if you are a kobold).", source: T63, sourceUrl: ROTD_PATH },
  { id: "heavyweight-wings", name: "Heavyweight Wings", category: "general", ruleset: "core", prerequisites: ["Str 15", "Reinforced Wings", "wings and a glide or fly speed"], benefitSummary: "Fly (or glide) while wearing heavy armor or carrying a heavy load.", source: T63, sourceUrl: ROTD_PATH },
  { id: "improved-dragon-wings", name: "Improved Dragon Wings", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "Dragon Wings", "6 HD"], benefitSummary: "Gain a fly speed of 30 feet (average maneuverability) using your Dragon Wings.", source: T63, sourceUrl: ROTD_PATH },
  { id: "kobold-endurance", name: "Kobold Endurance", category: "race-specific", ruleset: "core", prerequisites: ["Kobold"], benefitSummary: "+4 bonus on Strength checks, Constitution checks, and related checks (such as resisting forced march, starvation, and breath-holding).", source: T63, sourceUrl: ROTD_PATH },
  { id: "kobold-foe-strike", name: "Kobold Foe Strike", category: "race-specific", ruleset: "core", prerequisites: ["Kobold"], benefitSummary: "+1d6 damage against flanked or flat-footed dwarves, fey, and gnomes. A kobold fighter can select this as a bonus feat.", source: T63, sourceUrl: ROTD_PATH },
  { id: "practical-metamagic", name: "Practical Metamagic", category: "metamagic", ruleset: "core", prerequisites: ["Dragonblood subtype", "Spellcraft 8 ranks", "any metamagic feat", "ability to spontaneously cast 3rd-level spells"], benefitSummary: "Reduce one metamagic feat's spell-level increase by one (minimum +1). You can gain this feat multiple times, once per metamagic feat.", source: T63, sourceUrl: ROTD_PATH },
  { id: "reinforced-wings", name: "Reinforced Wings", category: "general", ruleset: "core", prerequisites: ["Str 13", "wings and a glide or fly speed"], benefitSummary: "Fly (or glide) while wearing medium armor or carrying a medium load.", source: T63, sourceUrl: ROTD_PATH },
  { id: "versatile-spellcaster", name: "Versatile Spellcaster", category: "general", ruleset: "core", prerequisites: ["Ability to spontaneously cast spells"], benefitSummary: "Use two lower-level spell slots to cast a higher-level spell you know.", source: T63, sourceUrl: ROTD_PATH },
  { id: "wyrmgrafter", name: "Wyrmgrafter", category: "general", ruleset: "core", prerequisites: ["Heal 10 ranks", "Knowledge (arcana) 5 ranks"], benefitSummary: "Create and apply draconic grafts (the grafts themselves are Chapter 6 equipment, not recorded in this pack).", source: T63, sourceUrl: ROTD_PATH },
  // Breath channeling feats
  { id: "entangling-exhalation", name: "Entangling Exhalation", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "breath weapon"], benefitSummary: "Channel your breath weapon to entangle enemies it damages.", special: BREATH, source: T63, sourceUrl: ROTD_PATH },
  { id: "exhaled-barrier", name: "Exhaled Barrier", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "breath weapon"], benefitSummary: "Channel your breath weapon to create a wall of energy.", special: BREATH, source: T63, sourceUrl: ROTD_PATH },
  { id: "exhaled-immunity", name: "Exhaled Immunity", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "breath weapon"], benefitSummary: "Channel your breath weapon to grant immunity to its energy type.", special: BREATH, source: T63, sourceUrl: ROTD_PATH },
  { id: "extra-exhalation", name: "Extra Exhalation", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "breath weapon with limited uses per day"], benefitSummary: "Gain an additional use of your breath weapon per day.", special: BREATH, source: T63, sourceUrl: ROTD_PATH },
  { id: "furious-inhalation", name: "Furious Inhalation", category: "general", ruleset: "core", prerequisites: ["Dragonblood subtype", "Con 13", "ability to rage or frenzy", "bite attack", "breath weapon"], benefitSummary: "Channel your breath weapon to add energy damage to your bite while raging.", special: BREATH, source: T63, sourceUrl: ROTD_PATH },
  // Draconic feats new in this book (the other nine duplicate Complete Arcane)
  { id: "draconic-arcane-grace", name: "Draconic Arcane Grace", category: "general", ruleset: "core", prerequisites: ["Draconic Heritage", "sorcerer level 1st"], benefitSummary: "Give up a spell slot for a bonus on a saving throw.", special: DRACONIC, source: T63, sourceUrl: ROTD_PATH },
  { id: "draconic-persuasion", name: "Draconic Persuasion", category: "general", ruleset: "core", prerequisites: ["Draconic Heritage", "sorcerer level 1st"], benefitSummary: "Spellcasting grants a bonus on select Charisma-based skills.", special: DRACONIC, source: T63, sourceUrl: ROTD_PATH },
  { id: "draconic-toughness", name: "Draconic Toughness", category: "general", ruleset: "core", prerequisites: ["Draconic Heritage", "sorcerer level 1st"], benefitSummary: "Gain 2 hit points for each draconic feat you have.", special: DRACONIC, source: T63, sourceUrl: ROTD_PATH },
  // Tactical feats
  { id: "spell-rehearsal", name: "Spell Rehearsal", category: "combat", ruleset: "core", prerequisites: ["Caster level 1st"], benefitSummary: "Gain benefits from repetitious spellcasting (tactical maneuvers for casting the same spell repeatedly, per the feat description).", special: "Tactical feat.", source: T63, sourceUrl: ROTD_PATH },
  { id: "wing-expert", name: "Wing Expert", category: "combat", ruleset: "core", prerequisites: ["Flyby Attack", "wings and a glide or fly speed"], benefitSummary: "Use your wings for tactical advantages (tactical maneuvers, per the feat description).", special: "Tactical feat.", source: T63, sourceUrl: ROTD_PATH },
];
