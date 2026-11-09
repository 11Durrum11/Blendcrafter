import type { FeatDefinition } from "@/engine/types";

// Dragon Magazine #310 (WotC/Paizo, D&D 3.5) feats — eight in all:
// the five "Feats of Rage" from the Barbarians article (all printed
// as [General] feats requiring the ability to rage or frenzy), and
// three new feats from the Rogues article. Transcribed from the
// magazine text on archive.org. Prerequisites arrays carry only the
// printed Prerequisites lines. Benefit summaries are short
// mechanical paraphrases in our own words; no magazine prose is
// reproduced. The Rogues article's two new rogue special abilities
// (Knockout Blow and Painful Strike) are NOT feats — they are
// options for the rogue's special ability class feature, for which
// the catalog has no mechanism; they are written up in full in
// reference.md in this staging folder.

const DM310 = "Dragon Magazine #310";
const DM310_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine310_djvu.txt";

export const DRAGON_310_FEATS: FeatDefinition[] = [
  {
    id: "rage-casting",
    name: "Rage Casting",
    category: "general",
    prerequisites: ["Ability to cast 1st-level spells", "Combat Casting", "Quicken Spell", "Concentration 5 ranks", "Ability to rage or frenzy"],
    benefitSummary: "[General feat.] While raging, you can cast spells that you can cast as a free action — including spells quickened with the Quicken Spell feat. While raging, you can also activate magic items by spell trigger, spell completion, or command word. (Normally, a raging barbarian cannot cast spells or use such magic items at all.)",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "raging-bull-rush",
    name: "Raging Bull Rush",
    category: "general",
    prerequisites: ["Str 13", "Power Attack", "Improved Bull Rush", "Ability to rage or frenzy"],
    benefitSummary: "[General feat.] While you are raging and make a bull rush attack, you gain a +4 bonus on the opposed Strength check you make to push back the defender. This bonus stacks with the +4 bonus from Improved Bull Rush.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "raging-overrun",
    name: "Raging Overrun",
    category: "general",
    prerequisites: ["Str 13", "Power Attack", "Improved Overrun", "Ability to rage or frenzy"],
    benefitSummary: "[General feat.] While you are raging and attempt to overrun an opponent, you gain a +4 bonus on your Strength check to knock down your opponent. This bonus stacks with the +4 bonus from Improved Overrun.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "raging-spell-penetration",
    name: "Raging Spell Penetration",
    category: "general",
    prerequisites: ["Ability to cast 1st-level spells", "Combat Casting", "Concentration 5 ranks", "Rage Casting", "Spell Penetration", "Ability to rage or frenzy"],
    benefitSummary: "[General feat.] You can sacrifice a daily use of rage to gain a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance. This bonus stacks with the +2 bonus from Spell Penetration and lasts a number of rounds equal to 3 + your Constitution modifier, after which you lose the bonus and become fatigued (-2 penalty to Strength, -2 penalty to Dexterity, unable to charge or run) for the duration of the current encounter.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "raging-sunder",
    name: "Raging Sunder",
    category: "general",
    prerequisites: ["Str 13", "Power Attack", "Improved Sunder", "Ability to rage or frenzy"],
    benefitSummary: "[General feat.] While you are raging, you gain a +4 bonus on any attack roll made to attack an object held or carried by another character. This bonus stacks with the +4 bonus from Improved Sunder.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "mercurial-strike",
    name: "Mercurial Strike",
    category: "general",
    prerequisites: ["Quick Draw", "Base attack bonus +5"],
    benefitSummary: "[General feat.] When an opponent provokes an attack of opportunity from you while you are unarmed, you may draw a melee weapon and make the attack of opportunity with it; the target is caught flat-footed for that attack.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "precise-strike",
    name: "Precise Strike",
    category: "general",
    prerequisites: ["Dex 13", "Ability to sneak attack"],
    benefitSummary: "[General feat.] When you make a sneak attack, you may trade any number of your sneak attack dice for a +2 circumstance bonus on the attack roll per die traded. You must convert the same number of dice for every sneak attack you make in a given round.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
  {
    id: "tutor",
    name: "Tutor",
    category: "general",
    prerequisites: ["Int 13"],
    benefitSummary: "[General feat.] You can grant an ally a +2 competence bonus on checks with any one skill in which you have ranks, including a skill that is cross-class for the ally. Tutoring takes 4 days of instruction; the ally must then spend 1 hour per day with you as a refresher or the bonus is lost. You can tutor a total number of allies equal to your Intelligence bonus, each in one skill.",
    modifiers: [],
    source: DM310,
    sourceUrl: DM310_PATH,
    ruleset: "core",
  },
];
