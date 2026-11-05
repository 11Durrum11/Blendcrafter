import type { FeatDefinition } from "@/engine/types";

// Construct feats from Encyclopaedia Arcane – Constructs: It Is
// Alive (Mongoose Publishing, ©2002, MGP 1004), the
// "Building a Better Construct" chapter. This is a 3.0-era d20
// book: entries are transcribed as printed, including 3.0 feat
// names in the Core Feat list — nothing has been silently
// modernised. Source: Shaun's own copy, read page by page from
// his scan (printed page = PDF page − 2).
//
// These are feats FOR constructs, bought with Construction
// Points (CPs) during the construct's creation — not feats a
// character takes. The book prints each with a type in
// parentheses (Construct / Golem / Automaton / Simulacrum), a
// Construction Point cost, a CR Value and a Body Rating flag;
// Blendcrafter's FeatCategory has no construct value, so the
// records file under "general" and the printed type plus the
// CP / CR Value / Body Rating line are carried at the end of
// every benefit summary. Summaries are short mechanical
// paraphrases written for this dataset; the book's prose is
// not reproduced.

const CONSTRUCTS = "Constructs: It Is Alive";
const CONSTRUCTS_PDF =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Constructs. It Is Alive.pdf";

export const CONSTRUCTS_FEATS: FeatDefinition[] = [
  {
    id: "additional-special-ability-slot",
    name: "Additional Special Ability Slot",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the spellcaster can install one additional special ability into the construct, beyond the special ability slots its material or template provides. Construction Points: 5. CR Value: 1. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 44`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "This feat can only be taken twice, and only during the planning stage of the construct's creation.",
  },
  {
    id: "combat-expertise-construct",
    name: "Combat Expertise",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct) — a different feat from the character feat of the same name: the construct can be outfitted with specialized combat core feats, and can attempt special fighting techniques without direction, like flanking, charging, tripping, trying to overrun and bull rush an opponent, as described in Core Rulebook I. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 44`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "concealed-weapon-mounting",
    name: "Concealed Weapon Mounting",
    category: "general",
    prerequisites: ["Weapon Mounting feat"],
    benefitSummary:
      "Construct feat (Automaton, Simulacrum): the construct's incorporated weapons are concealed within its body and can be drawn or retracted as a free action; the first time the construct attacks with a concealed weapon in a single encounter, it gains a +1 surprise bonus to its attack roll. Construction Points: 3. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 44`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "Concealed weapons must be one size category smaller than the construct (for example, a Medium-size automaton can conceal a weapon the size of a short sword).",
  },
  {
    id: "core-feat",
    name: "Core Feat",
    category: "general",
    prerequisites: ["The normal prerequisites of the chosen feat"],
    benefitSummary:
      "Construct feat: the construct gains one feat from Core Rulebook I or Core Rulebook III, chosen from the book's printed list — Ambidexterity, Cleave, Far Shot, Flyby Attack, Great Cleave, Improved Bull Rush, Improved Initiative, Improved Trip, Improved Two-Weapon Fighting, Lightning Reflexes, Multiattack, Multidexterity, Multiweapon Fighting, Point Blank Shot, Power Attack, Precise Shot, Quick Draw, Rapid Shot, Run, Two-Weapon Fighting (3.0 feat names, as printed). Construction Points: 1. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 44`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "In addition to normal prerequisites, some core feats require a construct feat to become available. The construct is considered to possess Ambidexterity for the purposes of the Improved Two-Weapon Fighting feat.",
  },
  {
    id: "defensive-manoeuvres",
    name: "Defensive Manoeuvres",
    category: "general",
    prerequisites: ["Combat Expertise (construct feat)"],
    benefitSummary:
      "Construct feat (Construct): the construct can attempt, without outside direction, to fight defensively, engage in full defence or aid another, as described in Core Rulebook I. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 45`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "extra-arm",
    name: "Extra Arm",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct has an extra off hand and can perform one extra standard action at −4 to every roll with it. Construction Points: 4. CR Value: 1/2. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 45`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The Multidexterity feat cancels the −4 penalty for using an off hand for creatures with more than two arms. If the off hand has a natural weapon, it suffers a −5 penalty instead of −4, which can be reduced with the Multiattack feat.",
  },
  {
    id: "extra-head",
    name: "Extra Head",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct has a +1 enhancement bonus to initiative, and every round it can roll a Reflex save (DC 10 + enemy's character level or HD) to avoid being flanked. Construction Points: 3. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 45`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "If gifted with the Speech special ability, both heads can speak, but they are both the same being.",
    modifiers: [
      {
        id: "extra-head-initiative",
        source: "Extra Head (construct feat)",
        target: "initiative",
        value: 1,
        mode: "add",
        bonusType: "enhancement",
        note: "+1 enhancement bonus to initiative, as printed. (The feat is bought for a construct at its creation; the modifier is recorded for completeness.)",
      },
    ],
  },
  {
    id: "extra-leg",
    name: "Extra Leg",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct gains a +4 stability bonus against bull rush attacks and other effects that might throw it off balance. Construction Points: 4. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 45`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "extra-miscellaneous-limbs",
    name: "Extra Miscellaneous Limbs",
    category: "general",
    prerequisites: ["Construct size minimums, by limb (see benefit)"],
    benefitSummary:
      "Construct feat (Construct): the construct gains one extra set of miscellaneous limbs, chosen from the book's table — Long neck (min. Tiny: reach increases by 5 ft, or by 10 ft for Huge, Gargantuan and Colossal creatures); Larger torso (min. Small: choose one of natural armour +1, Strength score +3, or a crawl speed if No Legs is chosen); Tail (min. Fine: choose one of an extra slam attack, swim speed equal to walk speed, or a +2 stability bonus); Wings (min. Fine: fly speed equal to walk speed with poor manoeuvrability); Fins/Flippers (min. Diminutive: swim speed equal to walk speed plus 10 ft). Construction Points: 5. CR Value: 1 1/2. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, pp. 45-46`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "extra-pair-of-arms",
    name: "Extra Pair of Arms",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct has two extra off hands and can perform one extra standard action at −4 to every roll with each; it can also handle an additional two-handed weapon. Construction Points: 6. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 46`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The Multidexterity feat cancels the −4 penalty for using an off hand for creatures with more than two arms; natural weapons on the off hands suffer −5 instead of −4, reducible with Multiattack. Adding an even number of arms is cheaper in pairs, since they are built to balance each other.",
  },
  {
    id: "extra-pair-of-legs",
    name: "Extra Pair of Legs",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct gains a +4 stability bonus against bull rush attacks and other effects that might throw it off balance, and its walk speed increases by 10 feet. Construction Points: 6. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 46`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    modifiers: [
      {
        id: "extra-pair-of-legs-speed",
        source: "Extra Pair of Legs (construct feat)",
        target: "speed.land",
        value: 10,
        mode: "add",
        bonusType: "untyped",
        note: "Walk speed +10 ft, as printed. (The +4 stability bonus has no engine target and is not modeled.)",
      },
    ],
  },
  {
    id: "fine-manipulation",
    name: "Fine Manipulation",
    category: "general",
    prerequisites: ["Dex 11+"],
    benefitSummary:
      "Construct feat (Golem, Automaton): the construct has a +2 enhancement bonus to its Dexterity modifier when rolling ability checks; the bonus also applies to skill checks that require manual coordination and which can be used untrained, like Craft, Escape Artist, Use Rope, etc. Construction Points: 1. CR Value: 1/2. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 46`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "horizontal",
    name: "Horizontal",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct stands on four legs, not two, and gains a +4 stability bonus against bull rush attacks and other effects that might throw it off balance; it also increases its walk speed by 10 feet. Construction Points: 1. CR Value: 0. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, pp. 46-47`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "This feat is used to simulate the shape of a four-legged creature; simulacra with a base creature that already has four or more legs cannot take it. The construct loses the ability to manipulate objects, so it cannot take Fine Manipulation, Melee Weapon Proficiency, Ranged Weapon Proficiency or Swerving Waist (as printed).",
    modifiers: [
      {
        id: "horizontal-speed",
        source: "Horizontal (construct feat)",
        target: "speed.land",
        value: 10,
        mode: "add",
        bonusType: "untyped",
        note: "Walk speed +10 ft, as printed. (The +4 stability bonus has no engine target and is not modeled.)",
      },
    ],
  },
  {
    id: "improved-limb-movements",
    name: "Improved Limb Movements",
    category: "general",
    prerequisites: ["Dex 8+"],
    benefitSummary:
      "Construct feat (Construct): the construct's body is designed to be more nimble, and it can be outfitted with some specialized core feats. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 47`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "melee-weapon-proficiency",
    name: "Melee Weapon Proficiency",
    category: "general",
    prerequisites: ["Combat Expertise (construct feat)"],
    benefitSummary:
      "Construct feat (Construct): the construct's imprinting includes the ability to wield hand-to-hand weapons — it can be proficient in the use of a simple, martial or exotic melee weapon. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 47`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The construct can gain this feat multiple times; each time it applies to a new weapon.",
  },
  {
    id: "natural-weaponry",
    name: "Natural Weaponry",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Construct): the construct gains a bite, gore, sting or other natural attack. Damage depends on the type of attack and the construct's size, from the book's Natural Weaponry Damage table (for example, Medium-size: fangs/tusks etc. 1d3, claws/stings/limb spines 1d4, horns/antlers/head ridges 1d6). Natural weaponry from secondary limbs suffers a −5 penalty to attack rolls, which can be reduced to −2 with the Multiattack feat. Construction Points: 3. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 47`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The construct can gain this feat multiple times; each time it applies to a new natural weapon. The construct must have the necessary limb to implement a natural weapon.",
  },
  {
    id: "overbearing-trample",
    name: "Overbearing Trample",
    category: "general",
    prerequisites: ["Combat Expertise (construct feat)", "Str 15+"],
    benefitSummary:
      "Construct feat (Construct): when the construct attempts to overrun an opponent, the target may not choose to avoid it; if the construct knocks down the target, it may make one slam attack against the target, gaining the standard +4 bonus on attack rolls against prone targets. Construction Points: 3. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, pp. 47-48`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "Constructs can only attempt to trample a creature that is one size category smaller than them.",
  },
  {
    id: "ranged-weapon-proficiency",
    name: "Ranged Weapon Proficiency",
    category: "general",
    prerequisites: ["Combat Expertise (construct feat)"],
    benefitSummary:
      "Construct feat (Construct): the construct's imprinting includes the ability to wield ranged weapons — it can be proficient in the use of a simple, martial or exotic ranged weapon. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 48`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The construct can gain this feat multiple times; each time it applies to a new weapon.",
  },
  {
    id: "reinforced-armour",
    name: "Reinforced Armour",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Automaton): the armour plating covering an automaton is stronger than normal — the automaton's AC is increased by +2. Construction Points: 2. CR Value: 1/2. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 48`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    modifiers: [
      {
        id: "reinforced-armour-ac",
        source: "Reinforced Armour (construct feat)",
        target: "ac.natural",
        value: 2,
        mode: "add",
        bonusType: "untyped",
        note: "As printed: the automaton's AC is increased by +2 (recorded against natural armour, the automaton's plating).",
      },
    ],
  },
  {
    id: "rotating-hip",
    name: "Rotating Hip",
    category: "general",
    prerequisites: ["Combat Expertise (construct feat)", "Dex 9+"],
    benefitSummary:
      "Construct feat (Automaton, Simulacrum): the construct's torso can rotate 360 degrees, widening its area of influence — it can turn to face in any direction as a free action, cannot be flanked, and threatens the areas behind it. Construction Points: 3. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, p. 48`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "A simulacrum must have a vertical configuration and deals 1d8 hp damage to itself the first time this ability is used in an encounter, as its tissue tears and stretches.",
  },
  {
    id: "stomp",
    name: "Stomp",
    category: "general",
    prerequisites: ["Huge size or larger"],
    benefitSummary:
      "Construct feat (Construct): the construct can make a stomp attack as a full round action, dealing 2d6 (Huge), 4d6 (Gargantuan) or 4d8 (Colossal) damage, plus Strength modifiers. Construction Points: 3. CR Value: 1. Applies to Body Rating: No.",
    source: `${CONSTRUCTS}, p. 48`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "The construct can only attempt a stomp attack against creatures that are three size categories smaller.",
  },
  {
    id: "weapon-mountings",
    name: "Weapon Mountings",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Construct feat (Automaton, Simulacrum): the construct has weapons incorporated into its form, usually on its arms or forearms. It can deal weapon damage per attack depending on size, is considered to be proficient with the weapon mounted, and the mounted weapon's damage is added to the construct's damage with a primary attack. Construction Points: 4. CR Value: 1. Applies to Body Rating: Yes.",
    source: `${CONSTRUCTS}, pp. 48-49`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    special:
      "Mounted weapons must be of the same size category as the construct. The construct can gain this feat multiple times; each time it applies to a new weapon, but only one weapon can fit in a single limb.",
  },
];
