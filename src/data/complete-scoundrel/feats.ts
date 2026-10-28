/**
 * Complete Scoundrel feats: all fifty-five new feats from Chapter 3 of
 * Complete Scoundrel (Wizards of the Coast), per Table 3-1: New Feats
 * (pp. 71–72) with prerequisites and benefits condensed from the table
 * and the feat descriptions (pp. 73–82). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf
 * The app has no luck / ambush / bardic-music feat categories, so luck
 * and bardic feats carry category "general" and ambush feats "combat",
 * with the book's grouping named in `special`, following the house
 * pattern of the earlier batches.
 * Improved Familiar is NOT included: its own Special entry identifies
 * it as a reprint of the Dungeon Master's Guide feat (p. 200) with new
 * familiar options, and the feat is already in the dataset.
 * Two printing quirks are noted per record: Eldritch Erosion's table
 * entry and description disagree on the sneak attack dice traded, and
 * Poison Expert's table and description disagree on the Craft
 * (poisonmaking) ranks required; descriptions govern in both cases.
 */
import type { FeatDefinition } from "@/engine/types";

const CS = "Complete Scoundrel";
const CS_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf";
const T31 = "Table 3-1: New Feats (Chapter 3)";
const LUCK = "Luck feat (Complete Scoundrel grouping): you gain one luck reroll per day; expend luck rerolls as the feat describes, and you must take the reroll's result.";
const AMBUSH = "Ambush feat (Complete Scoundrel grouping).";
const BARDIC = "Bardic music feat (Complete Scoundrel grouping).";

function f(
  id: string,
  name: string,
  category: FeatDefinition["category"],
  prerequisites: string[],
  benefitSummary: string,
  page: number,
  special?: string,
): FeatDefinition {
  const rec: FeatDefinition = {
    id,
    name,
    category,
    ruleset: "core",
    prerequisites,
    benefitSummary,
    source: `${CS}, p. ${page} (${T31})`,
    sourceUrl: CS_PATH,
  };
  if (special) rec.special = special;
  return rec;
}

export const COMPLETE_SCOUNDREL_FEATS: FeatDefinition[] = [
  // ---- Luck feats ----
  f("advantageous-avoidance", "Advantageous Avoidance", "general", ["Character level 3rd", "any luck feat"],
    "Expend one luck reroll as an immediate action to force a foe to reroll a critical threat confirmation roll against you, or two luck rerolls to force a reroll of the attack roll itself. Unlike other luck feats, you can use this after seeing whether the roll succeeded.", 73, LUCK),
  f("better-lucky-than-good", "Better Lucky than Good", "general", ["Character level 6th", "any two luck feats"],
    "If you roll a natural 1 on an attack roll, expend one luck reroll as a swift action to treat the roll as a natural 20 instead. Once per day.", 74, LUCK),
  f("dumb-luck", "Dumb Luck", "general", ["Character level 6th", "any two luck feats"],
    "If you roll a natural 1 on a saving throw, expend one luck reroll as an immediate action to treat the roll as a natural 20 instead. Once per day.", 77, LUCK),
  f("fortuitous-strike", "Fortuitous Strike", "general", ["Character level 6th", "any luck feat"],
    "Expend one luck reroll as a swift action to reroll a weapon damage roll, or two luck rerolls to reroll an attack roll.", 77, LUCK),
  f("good-karma", "Good Karma", "general", ["Character level 3rd"],
    "Expend one luck reroll as an immediate action to redirect an attack made against an adjacent ally to yourself instead; the roll result stands against your AC, and if it hits you take 150% damage.", 77, LUCK),
  f("healers-luck", "Healer's Luck", "general", [],
    "Expend one luck reroll as a swift action to reroll the damage healed by a conjuration (healing) spell you have just cast.", 78, LUCK),
  f("lucky-break", "Lucky Break", "general", [],
    "Expend one luck reroll as a swift action to reroll a Strength check made to break an item or burst open a door.", 79, LUCK),
  f("lucky-catch", "Lucky Catch", "general", [],
    "Expend one luck reroll as an immediate action to reroll a Balance, Climb, or Jump check.", 79, LUCK),
  f("lucky-fingers", "Lucky Fingers", "general", [],
    "Expend one luck reroll as an immediate action to reroll a Disable Device, Open Lock, or Sleight of Hand check.", 79, LUCK),
  f("lucky-start", "Lucky Start", "general", [],
    "Expend one luck reroll to reroll an initiative check. Using this feat requires no action.", 79, LUCK),
  f("magical-fortune", "Magical Fortune", "general", ["Caster level 3rd", "any luck feat"],
    "Expend one luck reroll as a swift action to reroll the damage dealt by a spell you have just cast, or two luck rerolls to reroll a caster level check.", 79, LUCK),
  f("make-your-own-luck", "Make Your Own Luck", "general", ["Character level 6th", "any luck feat"],
    "Expend one luck reroll as an immediate action to reroll a skill check, as long as you have at least 1 rank in that skill.", 79, LUCK),
  f("misers-fortune", "Miser's Fortune", "general", [],
    "Expend one luck reroll as an immediate action to force an opponent to reroll a sunder attack or a Strength check to damage an object within 30 feet. While you have a luck reroll remaining, items in your possession gain a +5 luck bonus on saving throws.", 80, LUCK),
  f("psychic-luck", "Psychic Luck", "general", ["Manifester level 3rd", "any luck feat"],
    "Expend one luck reroll as a swift action to reroll the damage dealt by a psionic power you have just manifested, or two luck rerolls to reroll a manifester level check.", 80, LUCK),
  f("sly-fortune", "Sly Fortune", "general", [],
    "Expend one luck reroll as an immediate action to reroll a Hide, Move Silently, or Tumble check.", 81, LUCK),
  f("survivors-luck", "Survivor's Luck", "general", ["Character level 9th", "any luck feat"],
    "Expend one luck reroll as an immediate action to reroll a saving throw you just failed.", 81, LUCK),
  f("tempting-fate", "Tempting Fate", "general", ["Character level 6th", "any luck feat"],
    "Expend a luck reroll to reroll a stabilization check. In addition, once per day, if damage would kill you while you have at least 1 hit point, expend one luck reroll as an immediate action to instead be reduced to -9 hit points and automatically stabilize.", 81, LUCK),
  f("third-times-the-charm", "Third Time's the Charm", "general", ["Character level 3rd", "any luck feat", "access to the Luck domain"],
    "Expend one luck reroll as an immediate action, right after using the Luck domain's granted power, to use that granted power an additional time.", 81, LUCK),
  f("unbelievable-luck", "Unbelievable Luck", "general", ["Any luck feat"],
    "While you have at least one luck reroll remaining, you gain a +2 luck bonus on whichever of your saves has the lowest base bonus.", 82,
    "Luck feat (Complete Scoundrel grouping): you gain two luck rerolls per day."),
  f("victors-luck", "Victor's Luck", "general", [],
    "Expend one luck reroll as a swift action to reroll a critical threat confirmation roll.", 82, LUCK),

  // ---- Ambush feats ----
  f("concussion-attack", "Concussion Attack", "combat", ["Sneak attack +3d6"],
    "Your successful sneak attack imposes a -2 penalty on the target's Intelligence and Wisdom checks and Int/Wis-based skill checks for 10 rounds. Using this feat reduces your sneak attack damage by 2d6.", 75, AMBUSH),
  f("deafening-strike", "Deafening Strike", "combat", ["Sneak attack +4d6"],
    "Your successful sneak attack deafens the target for 3 rounds. Using this feat reduces your sneak attack damage by 3d6.", 76, AMBUSH),
  f("disemboweling-strike", "Disemboweling Strike", "combat", ["Sneak attack +5d6", "Weapon Focus (any slashing weapon)"],
    "Your successful sneak attack with a slashing weapon you have Weapon Focus in deals 1d4 Constitution damage as well; no more than once per target per day. Using this feat reduces your sneak attack damage by 4d6.", 76, AMBUSH),
  f("eldritch-erosion", "Eldritch Erosion", "combat", ["Sneak attack +4d6", "Knowledge (arcana) 1 rank"],
    "Your successful sneak attack reduces the target's spell resistance and power resistance by 5 (minimum 0) for 10 rounds. Using this feat reduces your sneak attack damage by 4d6 per the description (Table 3-1 says 3d6; the description governs here).", 77, AMBUSH),
  f("head-shot", "Head Shot", "combat", ["Sneak attack +6d6", "Weapon Focus (any bludgeoning weapon)"],
    "Your successful sneak attack with a bludgeoning weapon you have Weapon Focus in leaves the foe confused for 1 round (Will negates, DC 10 + the number of sneak attack dice + your Dex modifier). Using this feat reduces your sneak attack damage by 5d6. You must be able to reach the foe's head.", 77, AMBUSH),
  f("impeding-attack", "Impeding Attack", "combat", ["Sneak attack +4d6"],
    "Your successful sneak attack imposes a -2 penalty on the target's Strength and Dexterity checks and Str/Dex-based skill checks for 10 rounds. Using this feat reduces your sneak attack damage by 3d6.", 78, AMBUSH),
  f("merciful-strike", "Merciful Strike", "combat", ["Sneak attack +2d6"],
    "Your sneak attack deals nonlethal damage, ignoring the usual -4 penalty for dealing nonlethal damage with a lethal weapon. Using this feat reduces your sneak attack damage by 1d6.", 79, AMBUSH),
  f("mind-drain", "Mind Drain", "combat", ["Power point reserve", "sneak attack +2d6"],
    "Your successful sneak attack drains power points equal to the target's manifester level (minimum 1); a target reduced to 0 power points loses psionic focus. No more than once per target per round. Using this feat reduces your sneak attack damage by 1d6.", 79, AMBUSH),
  f("persistent-attacker", "Persistent Attacker", "combat", ["Sneak attack +5d6"],
    "If your sneak attack hits, your first attack against that creature on your next turn counts as a sneak attack even if it normally wouldn't qualify. Using this feat reduces the first sneak attack's damage by 4d6.", 80, AMBUSH),
  f("throat-punch", "Throat Punch", "combat", ["Improved Unarmed Strike", "sneak attack +3d6"],
    "Your successful sneak attack with an unarmed strike hinders speech for 3 rounds: -5 on skill checks requiring speech and a 50% failure chance on spells with verbal components and command-word items. Using this feat reduces your sneak attack damage by 2d6. You must be able to reach the foe's neck.", 82, AMBUSH),

  // ---- Bardic music feats ----
  f("chant-of-the-long-road", "Chant of the Long Road", "general", ["Bardic music", "Perform 6 ranks"],
    "Expend one bardic music use (1 minute of performance) to let yourself and all allies within 60 feet avoid nonlethal damage from hustling for 1 hour.", 74, BARDIC),
  f("chord-of-distraction", "Chord of Distraction", "general", ["Bardic music", "Perform 9 ranks"],
    "As an immediate action, expend three bardic music uses to distract an opponent within 30 feet: your Perform check opposed by the target's Sense Motive (as feinting in combat) renders the target flat-footed against an ally of your choice until attacked or the start of your next turn.", 75, BARDIC),
  f("epic-of-the-lost-king", "Epic of the Lost King", "general", ["Bardic music", "Perform 6 ranks"],
    "As a move action, expend one bardic music use to remove fatigue from up to three allies (including yourself) within 30 feet; expend three uses to remove exhaustion instead.", 77, BARDIC),
  f("sound-of-silence", "Sound of Silence", "general", ["Bardic music", "Perform 9 ranks"],
    "As a standard action, expend two bardic music uses to deafen a single target within 30 feet for 3 rounds; a Will save (DC equal to your Perform check result) negates.", 81, BARDIC),
  f("warning-shout", "Warning Shout", "general", ["Bardic music", "Perform 9 ranks", "evasion"],
    "As an immediate action, expend two bardic music uses to grant one ally within 30 feet (not yourself) a +5 morale bonus on her next Reflex save and evasion until she rolls a Reflex save or the start of your next turn.", 82, BARDIC),

  // ---- General feats ----
  f("ascetic-stalker", "Ascetic Stalker", "general", ["Ki power", "ki strike (magic)"],
    "Your monk and ninja levels stack for the size of your ki pool and for unarmed strike damage. You can multiclass freely between monk and ninja, but must remain lawful to advance as a monk.", 73,
    "A monk can select this feat as a bonus feat at 1st, 2nd, or 6th level."),
  f("cool-head", "Cool Head", "general", ["Any two mental skill tricks"],
    "You immediately learn up to two mental skill tricks at no cost, and your limit on skill tricks known increases by one.", 75),
  f("daredevil-athlete", "Daredevil Athlete", "general", [],
    "Three times per day, as an immediate action, gain a +5 competence bonus on a single Balance, Climb, Escape Artist, Jump, Ride, Swim, or Tumble check.", 75,
    "A fighter can select this feat as one of his fighter bonus feats."),
  f("daring-outlaw", "Daring Outlaw", "general", ["Grace +1", "sneak attack +2d6"],
    "Your rogue and swashbuckler levels stack for grace, the swashbuckler's dodge bonus to AC, and sneak attack damage.", 76),
  f("daring-warrior", "Daring Warrior", "general", ["Weapon Specialization", "grace +1"],
    "Your fighter and swashbuckler levels stack for grace and the swashbuckler's dodge bonus to AC, and for qualifying for feats that require a minimum fighter level.", 76,
    "A fighter can select this feat as one of his fighter bonus feats."),
  f("deadly-defense", "Deadly Defense", "combat", [],
    "When fighting defensively, you deal an extra 1d6 points of damage with any light weapon or with any weapon to which Weapon Finesse applies. This applies only when you are unarmored or wearing light armor and not using a shield. With Combat Expertise, the benefit also applies when you take a penalty of at least -2 from that feat.", 76,
    "A fighter can select this feat as one of his fighter bonus feats."),
  f("expanded-ki-pool", "Expanded Ki Pool", "general", ["Ki power"],
    "You gain three extra daily uses of your ki power.", 77),
  f("enduring-ki", "Enduring Ki", "general", ["Ki power"],
    "By spending an extra daily use of your ki power when you activate it, the chosen effect lasts for an additional round. You also gain one extra daily use of your ki power.", 77),
  f("freerunner", "Freerunner", "general", ["Any two movement skill tricks"],
    "You immediately learn up to two movement skill tricks at no cost, and your limit on skill tricks known increases by one.", 77),
  f("improved-skirmish", "Improved Skirmish", "general", ["Skirmish +2d6/+1 AC"],
    "If you move at least 20 feet away from where you were at the start of your turn, your skirmish damage increases by 2d6 and your competence bonus to AC from skirmish improves by 2.", 78,
    "A scout can select this feat as one of her scout bonus feats."),
  f("martial-stalker", "Martial Stalker", "general", ["Proficiency with all martial weapons", "ki power"],
    "Your fighter and ninja levels stack for the size of your ki pool and for your AC bonus, and for qualifying for feats that require a minimum fighter level.", 79,
    "A fighter can select this feat as one of his fighter bonus feats."),
  f("master-spellthief", "Master Spellthief", "general", ["Ability to cast 2nd-level arcane spells", "steal spell class feature"],
    "Your spellthief levels stack with levels of other arcane spellcaster classes for determining what level of spell you can steal and for your caster level on all arcane spells. In addition, you incur no arcane spell failure for any arcane spells while wearing light armor.", 79),
  f("poison-expert", "Poison Expert", "general", ["Craft (poisonmaking) 4 ranks", "poison use"],
    "Choose a type of poison (contact, ingested, inhaled, or injury): the DC to resist both the initial and secondary damage of poisons of this type that you create and use increases by 1. No effect on poisons used by others or on natural poisons. (Table 3-1 prints Craft [poisonmaking] 8 ranks; the description's 4 ranks govern here.)", 80,
    "You can gain this feat multiple times, each time for a different poison type; its effects do not stack."),
  f("poison-master", "Poison Master", "general", ["Poison Expert", "Craft (poisonmaking) 8 ranks", "poison use"],
    "Choose a type of poison for which you have Poison Expert: the initial and secondary damage of poisons of this type that you create and use increases by 1 point per die of damage (or by 1 point if fixed). No effect on poisons used by others or on natural poisons.", 80,
    "You can gain this feat multiple times, each time for a different poison type; its effects do not stack."),
  f("psithief", "Psithief", "general", ["Manifester level 1st", "steal spell class feature"],
    "You can use steal spell to siphon power points instead of a spell — twice the maximum spell level you could steal, minus 1, capped by the target's manifester level — usable only to manifest powers you know, within 1 hour. Knowledge (psionics) and Psicraft are spellthief class skills for you.", 80),
  f("savvy-rogue", "Savvy Rogue", "general", ["Rogue level 10th"],
    "Each rogue special ability you have improves: crippling strike deals Strength damage even to sneak-attack-immune targets; defensive roll works three times per day; improved evasion grants +2 on Reflex saves; opportunist can trigger once per creature per round; skill mastery lets you take 12 instead of taking 10; slippery mind gains a +2 bonus on its extra save.", 80),
  f("sure-hand", "Sure Hand", "general", ["Any two manipulation skill tricks"],
    "You immediately learn up to two manipulation skill tricks at no cost, and your limit on skill tricks known increases by one.", 81),
  f("sweet-talker", "Sweet Talker", "general", ["Any two interaction skill tricks"],
    "You immediately learn up to two interaction skill tricks at no cost, and your limit on skill tricks known increases by one.", 81),
  f("swift-ambusher", "Swift Ambusher", "general", ["Skirmish +1d6/+1 AC", "sneak attack +1d6"],
    "Your rogue and scout levels stack for skirmish damage and AC. You can qualify for ambush feats as if your sneak attack damage were your skirmish plus sneak attack damage combined, but you can't sacrifice skirmish damage to power them.", 81,
    "A scout can select this feat as one of her scout bonus feats."),
  f("swift-hunter", "Swift Hunter", "general", ["Favored enemy", "skirmish +1d6/+1 AC"],
    "Your ranger and scout levels stack for skirmish damage and AC, and for favored enemy selection and bonuses. Your skirmish damage applies against favored enemies even if they are normally immune to extra damage from critical hits or skirmish attacks.", 81,
    "A scout can select this feat as one of her scout bonus feats."),
];
