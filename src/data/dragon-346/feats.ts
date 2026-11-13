// Dragon Magazine #346 (August 2006) — feat draft: 21 records.
// THREE columns the program survey undercounted (see MANIFEST's survey
// corrections):
//  - SIX scout feats — "Class Acts: Scout Feat and Options" (Stefan
//    Happ, with Paul Leach), pp. 86-87. All printed [General]; each is
//    selectable as a scout bonus feat, and Mounted Fighting also as a
//    fighter bonus feat.
//  - NINE truename feats — "Class Acts: The Power of Truenames" (Mark
//    Jackman), pp. 88-89: six denouncement feats (a denouncement
//    requires knowing the target's personal truename, Truespeak DC
//    15 + 2 x the target's CR, and follows the utterance rules of Tome
//    of Magic; at the DM's option a denouncement feat may be taken in
//    place of the bonus recitation feats normally gained at 8th and
//    15th level) plus three truename support feats, two of them
//    [Metamagic].
//  - SIX Leadership feats — "Supporting Cast" (Michael Trice), pp. 53-54,
//    the article's "Feats of Leadership" block, which the survey treated
//    as reference-leaning advice. All printed [General].
// The survey's expected Core Beliefs initiate feats do NOT exist in this
// issue: "Core Beliefs: Pelor" (pp. 20-32) prints new divine SPELLS and
// relics instead (spells-draft.ts; relics in reference.md).
// ID NOTE: Natural Leader stages under `natural-leader-346` — the plain
// id is held by the Heroes of Battle feat of the same name (a +4 bonus
// on rally checks), a different record; both live, per the side-by-side
// pairs ruling.
// All feat texts verified against rendered page images (magazine
// pp. 86, 87, 89, 54); the image governs over the OCR stream — it
// corrects the OCR's "Gass Champion"/"Gose Cohort" garbles (Class
// Champion, Close Cohort) and confirms the Mounted Fighting prerequisite
// (Ride 11 ranks) and every Leadership-score prerequisite.

import type { FeatDefinition } from "@/engine/types";

const SRC_SCOUT = "Dragon Magazine #346 — Class Acts: Scout Feat and Options (Stefan Happ, with Paul Leach), pp. 86-87";
const SRC_TRUENAME = "Dragon Magazine #346 — Class Acts: The Power of Truenames (Mark Jackman), pp. 88-89";
const SRC_LEADER = "Dragon Magazine #346 — Supporting Cast: Feats of Leadership (Michael Trice), pp. 53-54";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_SCOUT,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const DEN_FRAME =
  "Denouncement feat. To use a denouncement you must possess the feat and know the personal truename of the target creature, succeeding on a Truespeak check (DC 15 + [2 x the target creature's CR]); all the rules regarding utterances (Tome of Magic) apply to denouncements, and you may not use a denouncement on multiple foes at the same time or in conjunction with abilities like speak unto the masses. At the DM's option, you may take a denouncement feat instead of the bonus recitation feats normally gained at 8th and 15th level; you must still meet all the prerequisites of the feat.";

export const DRAGON_346_FEATS: FeatDefinition[] = [
  // — Scout feats (pp. 86-87) —
  F({
    id: "acrobatic-skirmisher",
    name: "Acrobatic Skirmisher",
    prerequisites: ["Dex 13", "Tumble 5 ranks", "Skirmish ability"],
    benefitSummary:
      "[General.] You can skirmish while performing daring acts of acrobatics. Benefit: When you successfully make a Tumble check to avoid attacks of opportunity while moving through a square occupied by an opponent, your skirmish damage against that opponent increases by +1d6 points of damage until the beginning of your next turn. Special: A scout may select Acrobatic Skirmisher as one of his scout bonus feats.",
  }),
  F({
    id: "improved-acrobatic-skirmisher",
    name: "Improved Acrobatic Skirmisher",
    prerequisites: ["Dex 13", "Tumble 10 ranks", "Acrobatic Skirmisher", "Skirmish ability"],
    benefitSummary:
      "[General.] Your exceptional training and dedication has expanded your ability to skirmish while avoiding the enemy's blows, allowing you to deal potentially crippling damage while tumbling around your foes. Benefit: When you successfully make a Tumble check to avoid attacks of opportunity while moving through a square occupied by an opponent, your skirmish damage against that opponent increases by +2d6 points of damage until the beginning of your next turn. This overlaps (does not stack with) the damage increase from Acrobatic Skirmisher. Special: A scout may select Improved Acrobatic Skirmisher as one of his scout bonus feats.",
  }),
  F({
    id: "mounted-fighting",
    name: "Mounted Fighting",
    prerequisites: ["Ride 11 ranks", "Mounted Combat", "Base attack bonus +8"],
    benefitSummary:
      "[General.] You are especially effective when fighting atop a mount. Benefit: You gain a +1 bonus on all attack and damage rolls you make while mounted. Special: A fighter may select Mounted Fighting as one of his fighter bonus feats. A scout may select Mounted Fighting as one of his scout bonus feats.",
  }),
  F({
    id: "passive-reconnoiter",
    name: "Passive Reconnoiter",
    prerequisites: ["Survival 4 ranks"],
    benefitSummary:
      "[General.] You have learned to perceive your surroundings with an acute eye and ear. Benefit: You gain a +3 circumstance bonus on Listen and Spot checks whenever you spend a full-round action doing nothing other than concentrating on locating opponents. Special: A scout may select Passive Reconnoiter as one of his scout bonus feats.",
  }),
  F({
    id: "ranged-skirmisher",
    name: "Ranged Skirmisher",
    prerequisites: ["Dex 15", "Wis 13", "Far Shot", "Point Blank Shot", "Skirmish ability"],
    benefitSummary:
      "[General.] You have extensive training in making ranged attacks while skirmishing. Benefit: You may apply the extra damage from the skirmish ability to ranged attacks made against targets within 60 feet. Normal: You may apply the extra damage from the skirmish ability to ranged attacks made against targets within 30 feet. Special: A scout may select Ranged Skirmisher as one of his scout bonus feats.",
  }),
  F({
    id: "scout-the-path",
    name: "Scout the Path",
    prerequisites: ["Survival 4 ranks"],
    benefitSummary:
      "[General.] You have received training in leading small groups through enemy territory, helping them stay undetected and guiding them effectively through difficult terrain. Benefit: While trailblazing (see page 103 of Complete Adventurer), you gain a +3 bonus on Survival checks. In addition, as a full-round action you can grant a +1 bonus on all Hide and Move Silently checks made by allies within 20 feet. Special: A scout may select Scout the Path as one of his scout bonus feats.",
  }),
  // — Truename feats (pp. 88-89) —
  F({
    id: "denouncement-of-energy",
    name: "Denouncement of Energy",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 12 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] You weaken your foe's resistance to an energy type by warping his personal truename. " +
      DEN_FRAME +
      " Benefit: You lower a creature's energy resistances by 5 for 3 rounds by succeeding on a Truespeak check to say its personal truename; the Truespeak DC to use this denouncement is 5 higher than normal. This feat does not grant you knowledge of a creature's resistances, and it has no effect on creatures immune to an energy type rather than merely resistant. The reduction does not stack with itself, but you can use it multiple times on the same target to extend the duration of the reduction.",
  }),
  F({
    id: "denouncement-of-focused-aggression",
    name: "Denouncement of Focused Aggression",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 12 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] You can mask allies by warping your foe's truename. " +
      DEN_FRAME +
      " Benefit: As an immediate action on a foe's turn, you can designate one of your allies as someone your foe cannot attack with melee or ranged attacks until the end of his turn; this only affects the foe's ability to make attacks for the rest of the round. You can choose to use this ability in the middle of a foe's turn, even in the middle of a full attack action (and even if he already attacked the designated ally), and you can designate yourself as an ignored target. You must succeed on a Truespeak check to say your foe's personal truename; the Truespeak DC to use this denouncement is 10 higher than normal. You can only choose a specific combination of attacker and protected target three times per encounter, but you may choose any particular attacker or protected target at will.",
  }),
  F({
    id: "denouncement-of-garbled-words",
    name: "Denouncement of Garbled Words",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 15 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] You warp a creature's truename to alter his perception. " +
      DEN_FRAME +
      " Benefit: You make the target confused, as the spell confusion, for 1 round — even creatures immune to mind-affecting effects become confused. You must succeed on a Truespeak check to say your target's personal truename; the Truespeak DC to use this denouncement is 10 higher than normal.",
  }),
  F({
    id: "denouncement-of-the-stalwart-shield",
    name: "Denouncement of the Stalwart Shield",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 12 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] You can weaken an opponent's spell resistance by warping his truename. " +
      DEN_FRAME +
      " Benefit: You lower a creature's spell resistance by 5 for 3 rounds by succeeding at a Truespeak check to say its personal truename; the Truespeak DC to use this denouncement is 10 higher than normal. This feat does not grant you knowledge of a creature's spell resistance. The reduction does not stack with itself, but you can use it multiple times on the same target to extend the duration of the reduction.",
  }),
  F({
    id: "denouncement-of-the-unleashed-spell",
    name: "Denouncement of the Unleashed Spell",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 12 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] You can shield allies from your foe by warping his truename. " +
      DEN_FRAME +
      " Benefit: As an immediate action on a foe's turn, you can designate one of your allies as someone your foe cannot target with spells or spell-like abilities until the end of his turn; this only affects the foe's ability to target spells or spell-like abilities for the rest of the round and does not protect your ally from area effects. You can designate yourself as an ignored target. You must succeed on a Truespeak check to say your foe's personal truename; the Truespeak DC to use this denouncement is 10 higher than normal. You can only choose a specific combination of attacker and protected target three times per encounter, but you may choose any particular attacker or protected target at will.",
  }),
  F({
    id: "denouncement-of-untouchable-form",
    name: "Denouncement of Untouchable Form",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 12 ranks", "Any recitation feat", "Ability to speak utterances", "Must know your own personal truename"],
    benefitSummary:
      "[Denouncement.] By warping its truename, you can make your foe easier to harm. " +
      DEN_FRAME +
      " Benefit: You lower a creature's damage reduction by 5 for 3 rounds when you succeed on a Truespeak check to say its personal truename; the Truespeak DC to use this denouncement is 10 higher than normal. This feat does not grant you knowledge of a creature's damage reduction, and it has no effect on creatures immune to a type of damage. The reduction caused by this feat stacks with itself — you may, for example, reduce a creature's damage reduction by 5 one round and an additional 5 the following round; using the ability this way does not change the duration, so the first reduction ends 1 round before the next. You may also choose to reduce multiple forms of damage reduction from the same creature, with each reduction having its own duration.",
  }),
  F({
    id: "greater-named-spell",
    name: "Greater Named Spell",
    category: "metamagic",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 9 ranks", "Named Spell"],
    benefitSummary:
      "[Metamagic.] You speak your foe's truename to make him susceptible to your spells. Benefit: You can make a Truespeak check to say a creature's personal truename. Until the end of your next turn, the DC of any spell you cast increases by +2 for that creature and you gain a +2 bonus on caster level checks to overcome that creature's spell resistance. The level of the spell does not increase. This bonus stacks with other bonuses on spell DCs and caster level checks, including the ones from Named Spell, Spell Focus, and Spell Penetration. Special: You cannot apply this feat to spells that have area effects or more than one target.",
  }),
  F({
    id: "named-spell",
    name: "Named Spell",
    category: "metamagic",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 6 ranks"],
    benefitSummary:
      "[Metamagic.] You increase the potency of your spells by interweaving them with your opponent's truename. Benefit: You can make a Truespeak check to say a creature's personal truename. Until the end of your next turn, the DC of any spell you cast increases by 2 for that creature and you gain a +2 bonus on caster level checks to overcome that creature's spell resistance. The level of the spell does not increase. This bonus stacks with other bonuses on spell DCs and caster level checks, including the ones from Spell Focus and Spell Penetration. Special: You cannot apply this feat to spells that have area effects or more than one target.",
  }),
  F({
    id: "truename-scholar",
    name: "Truename Scholar",
    source: SRC_TRUENAME,
    prerequisites: ["Truespeak 4 ranks", "Skill Focus (Truespeak)", "Must know your own personal truename"],
    benefitSummary:
      "[General.] Through additional effort you can speak another creature's truename with the same ease as your own. Benefit: You may perform a ritual requiring three days (8 hours per day) and the expenditure of 500 gp x the creature's CR in order to permanently gain a +4 competence bonus on all Truespeak checks to say that creature's name. Normal: A truenamer has a +4 competence bonus on Truespeak checks made to say his own name.",
  }),
  // — Feats of Leadership (pp. 53-54) —
  F({
    id: "assemble-the-horde",
    name: "Assemble the Horde",
    source: SRC_LEADER,
    prerequisites: ["Leadership", "Character level 6th", "Leadership score 4 higher than your level"],
    benefitSummary:
      "[General.] You are beloved by the people, and the commonfolk seek out your leadership. Benefit: You gain a permanent +1 bonus to your Leadership score. You gain a number of additional 1st-level followers equal to the number of higher-level followers you are allowed; these additional 1st-level followers do not replace your higher-level followers. (Example as printed: a paladin with a Leadership score of 18, normally entitled to thirty-five 1st-level followers, three 2nd-level followers, and one follower each of 3rd and 4th levels, can with this feat have up to forty 1st-level followers — thirty-five plus the number of 2nd-, 3rd-, and 4th-level followers — alongside the higher-level followers.) Normal: You typically may only recruit followers up to the limit allowed by your Leadership score.",
  }),
  F({
    id: "class-champion",
    name: "Class Champion",
    source: SRC_LEADER,
    prerequisites: ["Leadership", "Character level 6th", "Leadership score 4 higher than your level"],
    benefitSummary:
      "[General.] Superior renown brings two elite members of your class to serve you. Benefit: You gain a permanent +1 bonus to your Leadership score. You gain two additional followers of the highest level available for your Leadership score; these extra followers must be of the same class as you. If you have more than one standard class, they must only share one class with you, but they must both be of the same class. If you lose these followers you can replace them through the normal means, gaining up to two new followers of the highest level of followers you're able to recruit. Normal: You typically may only recruit followers up to the limit allowed by your Leadership score.",
  }),
  F({
    id: "close-cohort",
    name: "Close Cohort",
    source: SRC_LEADER,
    prerequisites: ["Leadership", "Character level 6th", "Leadership score 2 higher than your level"],
    benefitSummary:
      "[General.] Your cohort is almost your equal. Benefit: Your cohort may be one level lower than you. Normal: Regardless of your Leadership score, you can only recruit a cohort who is two or more levels lower than you, and your cohort cannot gain levels to bring him within one level of you.",
  }),
  F({
    id: "eye-for-talent",
    name: "Eye for Talent",
    source: SRC_LEADER,
    prerequisites: ["Sense Motive 9 ranks", "Leadership", "Character level 6th", "Leadership score 2 higher than your level"],
    benefitSummary:
      "[General.] You can accurately judge the personalities of others, allowing you to recruit followers quickly. Benefit: You gain a permanent +1 bonus to your Leadership score. It only takes you 1d4 weeks to replace or attain new followers. Normal: Recruitment normally requires 1d4 months to replace or attain new followers.",
  }),
  F({
    id: "fanatical-devotion",
    name: "Fanatical Devotion",
    source: SRC_LEADER,
    prerequisites: ["Leadership", "Character level 6th", "Leadership score 3 higher than your level"],
    benefitSummary:
      "[General.] Your followers willingly die for you. Benefit: You gain a permanent +1 bonus to your Leadership score. You ignore the penalty for causing a follower's death when determining your Leadership score. Normal: You suffer a -1 penalty to your Leadership score when a follower perishes due to your actions.",
  }),
  F({
    id: "natural-leader-346",
    name: "Natural Leader",
    source: SRC_LEADER,
    prerequisites: ["Leadership", "Character level 6th"],
    benefitSummary:
      "[General.] You have a way with people that lets you excel as a leader. Benefit: You gain a permanent +2 bonus to your Leadership score. (A different feat from the Heroes of Battle feat of the same name, which grants a bonus on rally checks; the two records live side by side, this one under a -346 id.)",
  }),
];
