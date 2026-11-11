// Dragon Magazine #357 (July 2007) — feat draft: 7 records.
// FOUR "Creature Features" feats from "Feathers and Fur" (Hal
// Maclean), pp. 34-43, feat text on p. 39: Bonded, Double Team,
// Protective Talons, Screen. All four are printed [General]-style
// feats gated on a "trained pet" — a specific animal companion or
// other creature the character has successfully taught a trick with
// the Handle Animal skill — and each carries the printed Special
// line that a fighter may select it as a bonus feat. Protective
// Talons and Screen print their operative text under "Effect:"
// rather than "Benefit:"; carried as printed in the summaries.
// THREE multiclass feats from "Class Acts: Adventurer — Dirty
// Priests, Holy Thieves" (Scott L. Gable), pp. 86-87: Sacred Outlaw
// (cleric/rogue), Sacred Performer (bard/cleric), Swift Avenger
// (druid/scout). The column's fourth feat, Elemental Stalker
// (ninja/shugenja), is HELD to reference.md under the standing
// oriental ruling — see SCREENING.md. The column's five skill
// tricks have no catalog barrel and digest in reference.md.
// All feat texts verified against rendered page images (magazine
// pp. 39, 86-87); the image governs over the OCR stream.
// Feature/benefit texts are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced verbatim beyond the
// short printed prerequisite and special lines carried as data.

import type { FeatDefinition } from "@/engine/types";

const SRC_FF = "Dragon Magazine #357 — Feathers and Fur (Hal Maclean), p. 39";
const SRC_CA = "Dragon Magazine #357 — Class Acts: Adventurer — Dirty Priests, Holy Thieves (Scott L. Gable), pp. 86-87";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function FF(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_FF,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

function CA(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_CA,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const PET_FRAME =
  "In this article a \"trained pet\" is a specific animal — an animal companion or any creature the character has successfully taught a trick using the Handle Animal skill.";

export const DRAGON_357_FEATS: FeatDefinition[] = [
  FF({
    id: "bonded",
    name: "Bonded",
    prerequisites: ["Handle Animal 5 ranks", "Trained pet"],
    benefitSummary:
      "[General.] You and your pet fight as one. Benefit: Whenever you and your pet attack the same target in the same round, you both gain a +1 bonus on attack and damage rolls. In addition, when you attack your foe with a ranged weapon you do not take the normal -4 penalty for firing into melee if your pet is the only ally currently in combat with it; penalties due to cover still apply. Special: A fighter may select Bonded as one of his fighter bonus feats. " +
      PET_FRAME,
  }),
  FF({
    id: "double-team",
    name: "Double Team",
    prerequisites: ["Handle Animal 8 ranks", "Bonded", "Trained creature"],
    benefitSummary:
      "[General.] Your pet knows how to knock enemies off balance to give you an opening. Benefit: Once per round, after your pet successfully strikes an opponent, you can make an attack of opportunity against the same opponent. This feat does not allow you to make more attacks of opportunity than you normally could in a single round. Special: A fighter may select Double Team as one of his fighter bonus feats. " +
      PET_FRAME,
  }),
  FF({
    id: "protective-talons",
    name: "Protective Talons",
    prerequisites: ["Handle Animal 8 ranks", "Bonded", "Trained creature"],
    benefitSummary:
      "[General.] Your raptor circles vigilantly overhead and may swoop down to snare a ranged weapon just before it strikes you. Effect (printed as \"Effect:\", not \"Benefit:\"): As a free action during your turn, if your raptor is within 5 feet you can order it to protect you from ranged attacks. If an opponent makes a successful ranged attack against you while your raptor is within 5 feet of you and under this command, the raptor can attempt to knock the missile off course: it makes a melee attack against the missile, using the attack roll your opponent made against you as the missile's Armor Class. If the raptor succeeds, the missile misses you and is destroyed; if it fails, you take damage as normal. Your raptor can only protect you from one missile per round. Special: A fighter may select Protective Talons as one of his fighter bonus feats. " +
      PET_FRAME,
  }),
  FF({
    id: "screen",
    name: "Screen",
    prerequisites: ["Handle Animal 8 ranks", "Bonded", "Dodge", "Trained pet"],
    benefitSummary:
      "[General.] You order your pet to launch a ferocious attack against a foe, shielding you from that opponent's attacks. Effect (printed as \"Effect:\", not \"Benefit:\"): Each round, as a free action, you can direct your pet to launch an especially determined but somewhat haphazard assault upon any one opponent. This causes your pet to take a -2 penalty on all attacks and Armor Class, but it grants you concealment against that foe. Special: A fighter may select Screen as one of his fighter bonus feats. " +
      PET_FRAME,
  }),
  CA({
    id: "sacred-outlaw",
    name: "Sacred Outlaw",
    prerequisites: ["Sneak attack +2d6", "Ability to turn or rebuke undead"],
    benefitSummary:
      "[General.] Your devotion to your deity continues to grow even as you familiarize yourself with more worldly pursuits. Benefit: Your cleric and rogue levels stack for the purpose of determining your turning check and turning damage (for example, a 3rd-level cleric/4th-level rogue turns or rebukes undead as a 7th-level cleric). Your cleric and rogue levels also stack for the purpose of determining your sneak attack bonus damage (for example, a 3rd-level cleric/4th-level rogue deals +4d6 points of damage on a successful sneak attack).",
  }),
  CA({
    id: "sacred-performer",
    name: "Sacred Performer",
    prerequisites: ["Bardic music ability", "Ability to turn or rebuke undead"],
    benefitSummary:
      "[General.] You invest a little bit of your piety into your every performance. Benefit: Your bard and cleric levels stack for the purpose of determining your turning check and turning damage (for example, a 4th-level bard/1st-level cleric turns or rebukes undead as a 5th-level cleric). Your bard and cleric levels also stack for the purpose of determining the number of times per day you can use your bardic music (although this does not affect which bardic music abilities you have) and for bardic knowledge checks (for example, a 5th-level bard/4th-level cleric gains a bonus equal to 9 — the sum of his bard and cleric levels — plus his Intelligence bonus, if any, on bardic knowledge checks, and can use bardic music 9 times per day).",
  }),
  CA({
    id: "swift-avenger",
    name: "Swift Avenger",
    prerequisites: ["Nature sense", "Skirmish +1d6"],
    benefitSummary:
      "[General.] Your speed and knowledge of nature make you a potent predator. Benefit: Your druid and scout levels stack for the purpose of determining the extra damage and Armor Class bonus when skirmishing (for example, a 4th-level druid/4th-level scout deals +2d6 points of damage and gains a +2 bonus to AC when skirmishing). Your druid and scout levels also stack for the purpose of determining the number of times per day you can wild shape (but not for the size or type of creature available; for example, a 4th-level druid/6th-level scout can change form into a Small or Medium animal three times per day, but does not gain the ability to take the shape of a Large animal). Special: A scout can select Swift Avenger as one of her scout bonus feats (Complete Adventurer, p. 13).",
  }),
];
