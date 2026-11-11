// Dragon Magazine #345 (July 2006) — feat draft: 3 records.
// "Class Acts: Combat Strikes" (Mark A. Hart), pp. 90-91 — three
// TACTICAL feats in the Complete Warrior format. The program survey
// named ~0 feats for this issue; this column is the miss the brief
// warned about (surveys repeatedly miss Class Acts columns). All
// three print their maneuvers in full and name themselves fighter
// bonus feats.
// Prerequisites verified against the rendered page image (magazine
// p. 90); maneuver text is a faithful mechanical paraphrase in our
// own words. 3.5 check: all three are printed in 3.5 form, native
// to the Complete Warrior tactical-feat framework. No conversion.
// ID NOTE: Blinding Strike stages under the suffixed id
// "blinding-strike-345" — the plain id already belongs to a
// DIFFERENT feat of the same name in the live catalog (the
// Quintessential Rogue feat, prerequisite Back Alley Brawler). The
// two feats are unrelated; the suffix is the house disambiguation
// pattern, confirmed by this pack's scratch audit.
// APOC screening: nothing summons, calls, teleports, or touches a
// plane; the maneuvers' printed immunities for undead sit alongside
// constructs and oozes as printed. See SCREENING.md.
// (The issue's two other feats do not stage: Thrall to Demon, a
// Demonomicon reprint box, p. 28 — already a live catalog record,
// reference; and Sting Strike, the drow racial feat in "Giants of
// Xen'drik," p. 40 — drow-bound, reference. See MANIFEST.md.)

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #345 — Class Acts: Combat Strikes (Mark A. Hart), pp. 90-91";
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

export const DRAGON_345_FEATS: FeatDefinition[] = [
  F({
    id: "blinding-strike-345",
    name: "Blinding Strike",
    prerequisites: ["Dex 13", "Power Attack", "Base attack bonus +5"],
    benefitSummary:
      "[Tactical.] You know special attacks for temporarily blinding a foe or degrading a gaze attack. Benefit: The Blinding Strike feat enables the use of three tactical maneuvers. Blind the Foe: use a full-round action to make an attack with a melee weapon using your Power Attack feat, with a penalty of -5 or more on the attack; if the attack succeeds, instead of taking damage your opponent must make a Fortitude save or become blind for 1d4 rounds (DC 10 plus the value of the penalty you took, minimum DC 15). Weaken Gaze: use a full-round action to make an attack with a melee weapon using Power Attack, with a penalty of -5 or more, against a creature with a gaze attack; if the attack succeeds, you deal normal damage and degrade one of the target's gaze attacks — for the next 10 rounds that gaze attack's save DC decreases by 2, and each further successful Weaken Gaze attack reduces it by another 2 (against a creature with more than one gaze attack, you choose which one is affected). Eye Gouge: use a full-round action to make an attack with a melee weapon using Power Attack, with a penalty of -5 or more, against a creature with a gaze attack; this maneuver provokes attacks of opportunity, and if you take damage from one the maneuver is disrupted and your turn ends; otherwise, if the attack succeeds, your opponent takes normal damage and must make a Fortitude save or lose the use of its gaze attack for 1d4 rounds (DC 10 plus the value of the penalty you took, minimum DC 15).",
    special:
      "Tactical feat (Complete Warrior format). Constructs, oozes, and creatures without visual organs (including most undead) are immune to the effects of these maneuvers. A fighter may select Blinding Strike as one of his fighter bonus feats.",
  }),
  F({
    id: "deafening-blow",
    name: "Deafening Blow",
    prerequisites: ["Str 13", "Power Attack", "Base attack bonus +4"],
    benefitSummary:
      "[Tactical.] You know just where to strike an enemy to deafen him for a short time. Benefit: The Deafening Blow feat enables the use of three tactical maneuvers. Battle Clangor: make an attack with a bludgeoning melee weapon using your Power Attack feat, with a penalty of -4 or more; if the attack succeeds, instead of dealing damage you strike your opponent's head with such precision that he becomes overly sensitive to sound — for 1 minute he takes a -4 penalty on saving throws against sonic attacks and language-dependent effects. Disorienting Blow: make an attack with a bludgeoning melee weapon weighing at least 4 pounds using Power Attack, with a penalty of -4 or more; if the attack succeeds, instead of taking damage your opponent must make a Fortitude save or become shaken for 1d4 rounds (DC 10 plus the value of the penalty you took, minimum DC 14). Deafen Foe: use a full-round action to make an attack with a bludgeoning melee weapon using Power Attack, with a penalty of -4 or more; if the attack succeeds, in addition to taking normal damage your opponent must make a Fortitude save or be deafened for 1d4 rounds (DC 10 plus the value of the penalty you took, minimum DC 14).",
    special:
      "Tactical feat (Complete Warrior format). Constructs, oozes, undead, and creatures without the ability to hear are immune to the effects of these maneuvers. A fighter may select Deafening Blow as one of his fighter bonus feats.",
  }),
  F({
    id: "exhausting-defense",
    name: "Exhausting Defense",
    prerequisites: ["Combat Expertise", "Dodge", "Base attack bonus +5"],
    benefitSummary:
      "[Tactical.] Your fighting style invites attackers to wear themselves out against your stalwart defense. Benefit: The Exhausting Defense feat enables the use of three tactical maneuvers. Fatigue the Foe: fight using the Combat Expertise feat for at least three consecutive rounds against the same opponent, whom you have also designated as the target of your Dodge feat, with a penalty of -2 or more on your attacks; after the first three rounds, each round your opponent continues to attack you he must make a DC 15 Fortitude save or become fatigued — if you stop attacking that opponent, or he ceases attacking you, you must restart the three rounds of Combat Expertise fighting before using this maneuver against him again; an affected opponent remains fatigued until the end of the encounter. Exhaust the Foe: against a fatigued opponent, fight using Combat Expertise for at least three consecutive rounds against the same Dodge-designated opponent (rounds counting toward Fatigue the Foe do not count), with a penalty of -4 or more; beginning on the third round your target attacks you, it must make a DC 15 Fortitude save or become exhausted — breaking off combat restarts the count as printed; an exhausted opponent remains exhausted until the end of the encounter, at which time he becomes fatigued until he rests. The Best Offense: face a fatigued or exhausted opponent, spend a round using the total defense action, and the round after that attack your foe without using Combat Expertise at all — for that round your foe is flat-footed against your attacks and you gain a +2 bonus on all attacks against that foe until your next turn.",
    special:
      "Tactical feat (Complete Warrior format). Constructs, oozes, undead, and creatures immune to fatigue are immune to these maneuvers. A fighter may select Exhausting Defense as one of his fighter bonus feats.",
  }),
];
