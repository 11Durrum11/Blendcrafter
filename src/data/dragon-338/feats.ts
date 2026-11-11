// Dragon Magazine #338 (December 2005) — feat draft: 8 records.
// FIVE [Item Creation] feats from the feature "Staffs of the Magi"
// (Ben Vandgrift), pp. 60-61: Enchant Staff, Imbued Defense, Imbued
// Strength, Invest Spell, Recharge Staff. Each builds on an imbued
// staff (see classes-draft.ts), and each carries the printed rider
// that destroying the staff loses the benefit until a new staff is
// imbued, plus a printed preparation ritual (time and material cost)
// that prepares the staff to receive the feat — both carried in each
// record's text.
// TWO feats from "Class Acts: Focused Performer" (Robert J. Hahn),
// p. 89: Focused Performer [General] and Focused Performance
// [Bardic Music]. The feats barrel's category union has no
// bardic-music value, so Focused Performance stages with the house
// default "general" category and its printed [Bardic Music] tag
// leading its text, the same treatment as printed [General] tags.
// ONE feat from "Class Acts: The Pikeman" (Paul Leach), p. 92:
// Shield and Pike Style [General].
// All feat texts verified against the rendered page images (magazine
// pp. 60, 89, 92); the image governs over the OCR stream — it
// corrects the OCR in one place: Imbued Defense's prerequisite is
// caster level 1st (the OCR read 3rd).

import type { FeatDefinition } from "@/engine/types";

const SRC_STAFF = "Dragon Magazine #338 — Staffs of the Magi (Ben Vandgrift), pp. 60-61";
const SRC_PERFORMER = "Dragon Magazine #338 — Class Acts: Focused Performer (Robert J. Hahn), p. 89";
const SRC_PIKE = "Dragon Magazine #338 — Class Acts: The Pikeman (Paul Leach), p. 92";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_STAFF,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_338_FEATS: FeatDefinition[] = [
  F({
    id: "enchant-staff",
    name: "Enchant Staff",
    category: "item-creation",
    prerequisites: ["Caster level 5th", "Ability to imbue a staff"],
    benefitSummary:
      "[Item Creation.] Your imbued staff develops a new power. Benefit: Choose a spell that you are capable of casting and that is of a level no higher than one level below the highest-level spell you can cast. Your imbued staff gains the ability to grant you this spell once per day as a spell-like ability. While grasping your imbued staff, you may cast this spell as a standard action. The caster level and DC for this spell is calculated as if you had cast the spell yourself. Special: This feat may be taken multiple times. Its effects do not stack. Each time you take the feat, select a new spell to add to your staff. If your imbued staff is ever destroyed, the use of these abilities is lost until a new staff is imbued. The ritual for preparing the staff to receive this feat requires 24 hours and expends materials valued at 100 gp per level of the spell to be invested.",
  }),
  F({
    id: "imbued-defense",
    name: "Imbued Defense",
    category: "item-creation",
    prerequisites: ["Caster level 1st", "Ability to imbue a staff"],
    benefitSummary:
      "[Item Creation.] Your staff protects its master, deflecting attacks targeting you. Benefit: While casting a spell on the defensive and in contact with your imbued staff, add your Wisdom modifier to your AC until your next action, in addition to your Dexterity modifier. Special: If your imbued staff is ever destroyed, this benefit is lost until a new staff is imbued. Preparing a staff to receive this feat requires 12 hours and expends materials valued at 500 gp.",
  }),
  F({
    id: "imbued-strength",
    name: "Imbued Strength",
    category: "item-creation",
    prerequisites: ["Caster level 3rd", "Ability to imbue a staff"],
    benefitSummary:
      "[Item Creation.] Your will can overcome the limitations of your physical abilities. Benefit: When you successfully hit with your imbued staff, use your Wisdom modifier to determine your damage bonus, rather than your Strength modifier. Special: If your imbued staff is ever destroyed, this feat is lost until a new staff is imbued. Preparing a staff to receive this feat requires 12 hours and expends materials valued at 500 gp.",
  }),
  F({
    id: "invest-spell",
    name: "Invest Spell",
    category: "item-creation",
    prerequisites: ["Caster level 9th", "Ability to imbue a staff"],
    benefitSummary:
      "[Item Creation.] The staff you carry is a repository of great power. Benefit: You permanently lose one of your arcane spell slots to invest an arcane spell of that level into your imbued staff. The spell invested must be one that you are able to cast and can be of a level no higher than 2 levels below the highest-level spell you can cast. Once imbued in this way, the spell chosen can be cast from the staff three times per day as a spell-like ability. Casting an invested spell in this way does not require any normal material components, but any XP cost or costly material components must still be paid. You must be in direct physical contact with your imbued staff to cast an invested spell. This feat uses a spell slot equal to the level of the spell being invested; however, you may choose to modify the spell with any metamagic feat you know and adjust the spell's level and slot accordingly. The caster level and DC for an invested spell is calculated as if you cast the spell. Special: This feat may be taken multiple times. Its effects do not stack. Each time you take the feat, select a new spell to invest. If the imbued staff is ever destroyed, the use of this ability is lost until a new staff is imbued. The ritual for preparing the staff to receive this feat requires 24 hours, and expends materials valued at 250 gp per level of the spell to be invested.",
  }),
  F({
    id: "recharge-staff",
    name: "Recharge Staff",
    category: "item-creation",
    prerequisites: ["Caster level 12th", "Craft Staff", "Ability to imbue a staff"],
    benefitSummary:
      "[Item Creation.] You have the ability to transfer your arcane power into your imbued staff, recharging it. Benefit: You may, as a standard action, expend any of your prepared spells or unused spell slots to add charges to your imbued staff. For every five spell levels expended in this way, add one charge to your imbued staff. Cantrips cannot be expended in this way. Your imbued staff must be enchanted with spells that consume charges for this feat to have any effect. Your staff cannot exceed 50 charges through this ability. Special: If the imbued staff is ever destroyed, the ability to use this feat is lost until a new staff is imbued.",
  }),
  F({
    id: "focused-performer",
    name: "Focused Performer",
    source: SRC_PERFORMER,
    prerequisites: ["Concentration 1 rank", "Perform 4 ranks", "Bardic music class ability"],
    benefitSummary:
      "[General.] Your musical talent helps you focus your mind when maintaining spells. Benefit: When required to make a Concentration check to maintain an arcane spell with a verbal component, you may use your Perform skill instead. This feat cannot be used on a silent spell (a spell cast with the Silent Spell metamagic feat applied). Normal: A character uses the Concentration skill to cast spells while under duress.",
  }),
  F({
    id: "focused-performance",
    name: "Focused Performance",
    source: SRC_PERFORMER,
    prerequisites: ["Concentration 1 rank", "Perform 6 ranks", "Focused Performer", "Bardic music class ability"],
    benefitSummary:
      "[Bardic Music.] You can use your musical performances to channel your bardic music in new ways. Benefit: You may expend daily uses of bardic music to modify a single performance. You may only add one of the following modifications to any single use of your bardic music ability, and you must succeed at a Perform check to do so (DC listed with each modification). ACCOMPANIMENT: Spend 3 daily uses of bardic music to perform two bardic music abilities simultaneously. You must continue to make Perform checks every round, or both bardic music abilities end early. You may drop one ability and maintain the other normally. This modification can be used with all bardic music abilities. Perform check DC 20 + highest Perform ranks required for either bardic music ability. DRAMATIC PAUSE: Spend 2 daily uses of bardic music to pause an ongoing bardic music ability for 1 round (to cast a spell, make an attack, or for any other reason) and pick it up in the next round as if you had never stopped performing. You may pause your performance multiple times in later rounds, but each pause requires another use of this feat. This modification can be used with the fascinate, inspire courage, inspire greatness, and inspire heroics bardic music abilities. Perform check DC 20 + Perform ranks required for the bardic music ability. HARMONY: Spend 1 extra daily use of bardic music to make a bardic music ability that usually affects a single target affect two creatures. This modification can be used with the inspire competence, suggestion, and song of freedom bardic music abilities. Perform check DC 20 + Perform ranks required for the bardic music ability. INDIVIDUAL PERFORMANCE: Spend 1 extra daily use of bardic music to target a single individual (other than yourself) with a bardic music ability that normally affects multiple targets. The target receives double the normal bonus or penalty from the bardic music. This modification can be used with the fascinate, inspire courage, inspire greatness, and inspire heroics bardic music abilities. Perform check DC 15 + Perform ranks required for the bardic music ability. PROJECTION: Spend 2 daily uses of bardic music to double the area of effect of the next bardic music ability you activate. This modification can be used with the countersong, fascinate, inspire competence, inspire greatness, inspire heroics, and song of freedom bardic music abilities. Perform check DC 10 + Perform ranks required for the bardic music ability. RHYTHM: Maintain a bardic music ability for at least 3 rounds, then spend 1 extra daily use of bardic music to make it last for 2 additional rounds after you stop performing. You must make the Perform check when you stop performing. This modification can be used with the fascinate, inspire competence, inspire courage, inspire greatness, and inspire heroics bardic music abilities. Perform check DC 10 + Perform ranks required for the bardic music ability. RIVETING PERFORMANCE: Spend 1 extra daily use of bardic music; as long as all targets are in range and can hear you, they are affected by your bardic music as long as they can hear your performance, whether or not you have line of sight to them. This modification can be used with the fascinate and inspire competence bardic music abilities. Perform check DC 15 + Perform ranks required for the bardic music ability.",
  }),
  F({
    id: "shield-and-pike-style",
    name: "Shield and Pike Style",
    source: SRC_PIKE,
    prerequisites: ["Proficiency with selected piercing pole arm", "Proficiency with light shield"],
    benefitSummary:
      "[General.] You have learned to use a two-handed pole arm in one hand, bracing it against your shield arm. Benefit: You may wield a light shield and benefit from its full bonus to AC when using a two-handed piercing pole arm with reach, such as a longspear or awl pike. (The column frames the sarissa of its historical pikemen as a longspear or awl pike; see the pole arms of Dragon #331.) Normal: Although you can use a light shield and hold items in the same hand used to hold the shield, you may not wield a weapon in that hand. Special: A fighter may select Shield and Pike Style as one of his fighter bonus feats.",
  }),
];
