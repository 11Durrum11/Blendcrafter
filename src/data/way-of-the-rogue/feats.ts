import type { FeatDefinition } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// New Feats, printed pp. 34-39, plus the Brew Poison feat from
// the Poisons section, p. 45. Transcribed from Shaun's own
// scanned copy (image-only; pages read visually, 2026-11-04).
// 3.0-era terminology (subdual damage, Pick Pocket, Innuendo)
// is kept as printed. Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.
//
// Id notes: several natural ids were already taken in the
// catalog by other books' records (the core Acrobatic feat,
// the psionic Empathy power, Sorcery & Steam's Mechanical
// Aptitude, Book of Vile Darkness's Poison Immunity, and a
// Quintessential Rogue magic item called "stealth"), so those
// five records carry a wotr- prefix to stay unique.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const FEATS = "Way of the Rogue — New Feats (pp. 34-39)";

export const WAY_OF_THE_ROGUE_FEATS: FeatDefinition[] = [
  {
    id: "wotr-acrobatic",
    name: "Acrobatic",
    category: "general",
    prerequisites: ["Dex 15+"],
    benefitSummary:
      "You get a +2 bonus on all Balance and Tumble checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "casing-sense",
    name: "Casing Sense",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "On entering a room, you may make an Appraise check (DC 15) as a free action to spot the three most expensive items it contains and their approximate values. A low roll means no items 'catch your eye' beyond whatever the DM chooses to point out. Magnifying glasses, merchant scales, and similar appraising aids give no bonus to this check, since it cannot be made with such tools as a free action.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "craft-magic-trap",
    name: "Craft Magic Trap",
    category: "item-creation",
    prerequisites: ["Spellcaster level 10th+", "Craft (trapmaking) skill"],
    benefitSummary:
      "You can imbue a trap you craft with any spell or spell-like effect you have access to, using your own caster level. Creation takes 1 day for each 1,000 gp of market price; a one-use trap costs 50 gp + 2 XP per caster level of the imbued effect, and a multiple-use trap costs 500 gp + 20 XP per caster level (the book's printed examples: a 5th-level caster's fireball trap costs 250 gp and 10 XP one-use, or 2,500 gp and 100 XP multiple-use). Extra material-component or XP costs of the imbued spell are set by the DM. You can repair a magic trap you could make for half the XP, half the raw materials, and half the time, and you can follow the standard magic-trap procedure in place of mundane components, tools, or building materials.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "wotr-empathy",
    name: "Empathy",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You get a +2 bonus on all Innuendo and Sense Motive checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "eye-for-detail",
    name: "Eye for Detail",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You get a +2 bonus on all Appraise and Search checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "fast-talker",
    name: "Fast Talker",
    category: "general",
    prerequisites: ["Cha 15+"],
    benefitSummary:
      "You get a +2 bonus on all Bluff and Diplomacy checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "improved-knockout-attack",
    name: "Improved Knockout Attack",
    category: "general",
    prerequisites: ["Knockout Attack feat", "Sneak attack ability"],
    benefitSummary:
      "You may deal subdual sneak attack damage with any melee weapon. Unlike with Knockout Attack, you do not take the standard -4 penalty on the attack roll for striking to subdue.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "improved-ranged-sneak-attack",
    name: "Improved Ranged Sneak Attack",
    category: "general",
    prerequisites: ["Point Blank Shot", "Far Shot", "Sneak attack ability"],
    benefitSummary:
      "Your maximum range for a ranged sneak attack rises: with a projectile weapon you may sneak attack out to 45 feet (instead of 30), and with a thrown weapon out to 60 feet (instead of 30).",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "improved-sneak-attack",
    name: "Improved Sneak Attack",
    category: "general",
    prerequisites: ["Base attack bonus +2", "Sneak attack ability"],
    benefitSummary:
      "Your sneak attack damage dice increase: you deal +1d8 points of bonus damage at 1st level (in place of +1d6) and the die size rises likewise at every step of the normal progression (+1d8 every two levels). The extra damage is not multiplied on a critical hit. Special: a thug may take this feat; its backstab dice become d6s instead of d4s.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "improvise-thieves-tools",
    name: "Improvise Thieves' Tools",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You suffer no penalty for working without a formal set of tools: you take no -2 circumstance penalty on Disable Device or Open Lock checks made without thieves' tools. Normally, a character without a tool set takes a -2 circumstance penalty on these checks even when using a simple tool.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "keen-vision",
    name: "Keen Vision",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You get a +2 bonus on all Search and Spot checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "knockout-attack",
    name: "Knockout Attack",
    category: "general",
    prerequisites: ["Sneak attack ability"],
    benefitSummary:
      "You may use any melee weapon to deal subdual damage with a sneak attack, but you take the normal -4 penalty on the attack roll when striking to subdue. Normally a rogue cannot deal subdual damage with a sneak attack at all, even with the -4 penalty.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "wotr-mechanical-aptitude",
    name: "Mechanical Aptitude",
    category: "general",
    prerequisites: ["Dex 15+"],
    benefitSummary:
      "You get a +2 bonus on all Disable Device and Open Lock checks.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "perfect-memory",
    name: "Perfect Memory",
    category: "general",
    prerequisites: ["Int 14+"],
    benefitSummary:
      "After viewing a letter, map, or similar document for a few seconds, you can later reproduce its contents perfectly. You can memorize a number of pages equal to your Intelligence modifier x 3; committing new pages to memory displaces older ones. You cannot memorize spells from tomes or scrolls this way.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "wotr-poison-immunity",
    name: "Poison Immunity",
    category: "general",
    prerequisites: ["Con 12+", "Knowledge (poison) 5 ranks"],
    benefitSummary:
      "You receive a +4 fortitude bonus on all saving throws against mundane poisons — those that are in no way magical or supernatural in origin.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "quickstrike",
    name: "Quickstrike",
    category: "general",
    prerequisites: ["Base attack bonus +2", "Sneak attack ability"],
    benefitSummary:
      "When you successfully deliver a sneak attack, you may immediately make one additional melee attack against the same creature, with the same attack bonus and the same weapon; this additional attack gains no sneak attack bonus. You may use this feat once per round.",
    modifiers: [],
    source: FEATS,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "shadow",
    name: "Shadow",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You can follow a subject through a city the way the Track feat follows a trail in the wild, using Urban Lore checks. On a successful check you may follow the subject at a distance of up to 60 feet; a new check is required each hour to keep the quarry in sight. The base DC depends on population density: abandoned area 5, lightly populated area 10, normal population density 15, crowded 20, very crowded 25. General conditions modify the DC — very clean +5, average +0, cluttered -5. Other modifiers: each hour of shadowing +2; subject of a different race than most of the inhabitants -2 to -5; poor visibility (apply only the largest) — overcast or moonless night +6, moonlight +3, fog or precipitation +3 (good illumination such as streetlamps reduces these penalties); a shadowed individual who hides his trail (and moves at half speed) +5; size of the creature tracked (for a mixed-size group, only the largest category counts) — Fine +8, Diminutive +4, Tiny +2, Small +1, Medium-size +0, Gargantuan -4, Colossal -8. If you have 5 or more ranks in Gather Information, you gain a +2 synergy bonus on these Urban Lore checks. If you fail an Urban Lore check by more than 10 while shadowing a subject, he knows he is being followed and acts appropriately; after a failed check you can retry after 10 minutes. (The values for 'every three subjects in the group being shadowed' and for Large and Huge tracked creatures are not legible in Shaun's scanned copy and are not supplied here.)",
    modifiers: [],
    source: "Way of the Rogue — New Feats (pp. 37-38)",
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "signature-skill",
    name: "Signature Skill",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "One of your cross-class skills is now considered a class skill for you. Special: you can gain this feat multiple times; its effects do not stack, and each time you take it, it applies to a new skill.",
    modifiers: [],
    source: "Way of the Rogue — New Feats (pp. 38-39)",
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "wotr-stealth",
    name: "Stealth",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "You get a +2 bonus on all Hide and Move Silently checks.",
    modifiers: [],
    source: "Way of the Rogue — New Feats (p. 39)",
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
  {
    id: "brew-poison",
    name: "Brew Poison",
    category: "item-creation",
    prerequisites: ["Alchemy 4 ranks"],
    benefitSummary:
      "You can manufacture poisons: mundane poisons by the standard procedure (raw materials cost one-third of the poison's price in silver pieces; the Alchemy DC is the poison's Fortitude DC + 9, one check representing a week's work) and custom poisons by the new-poison design procedure, both printed in the Poisons section (pp. 40-45). Spellcasters with this feat can also brew magical toxins (supernatural and enchanted poisons). Special: the book urges DMs to make learning this feat difficult and dangerous in play — the knowledge is rare, illicit, and hard to obtain.",
    modifiers: [],
    source: "Way of the Rogue — Poisons (p. 45)",
    sourceUrl: WOTR_PATH,
    ruleset: "core",
  },
];
