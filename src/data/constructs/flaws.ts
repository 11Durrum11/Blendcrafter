import type { FlawTraitDefinition } from "@/engine/types";

// Construct deficiencies from Encyclopaedia Arcane – Constructs:
// It Is Alive (Mongoose Publishing, ©2002, MGP 1004), the
// "Deficiencies" section of the "Building a Better Construct"
// chapter. The book defines deficiencies as "reverse feats that
// subtract from the cost of a construct in the same way that
// feats add to it" — built into a construct at its creation to
// make it cheaper, some also lowering its Challenge Rating.
// They are filed here as flaws (kind: "flaw"); unlike character
// flaws they grant no bonus feat — their negative Construction
// Points are the payoff, and that CP / CR Value / Body Rating
// line is carried at the end of every summary.
//
// This is a 3.0-era d20 book; entries are transcribed as
// printed, nothing silently modernised. Source: Shaun's own
// copy, read page by page from his scan (printed page = PDF
// page − 2). Summaries and descriptions are short mechanical
// paraphrases written for this dataset; the book's prose is
// not reproduced.

const CONSTRUCTS = "Constructs: It Is Alive";
const CONSTRUCTS_PDF =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Constructs. It Is Alive.pdf";
const CONSTRUCT_ONLY =
  "Construct built with the Constructs: It Is Alive construction rules";

export const CONSTRUCTS_FLAWS: FlawTraitDefinition[] = [
  {
    id: "construct-berserk",
    name: "Berserk",
    kind: "flaw",
    summary:
      "Construct deficiency (Golem, Simulacrum): the bindings on the construct are weak and it may break free in combat. Construction Points: −4. CR Value: −1. Applies to Body Rating: No.",
    description:
      "The bindings and enchantments on the construct are weak, and the golem's elemental, or the simulacrum's proto-consciousness, sometimes breaks free. Disadvantage: when the construct enters combat, there is a cumulative 1% chance each round that it will go berserk. The uncontrolled golem attacks the nearest living creature or smashes some object smaller than itself if no creature is within reach, then moves on to spread more destruction. The construct's creator, if within 60 feet, can try to regain control by speaking firmly and persuasively to the construct, which requires a successful Charisma check (DC 19). It takes 1 minute of rest by the construct to reset its berserk chance to 0%. Construction Points: −4. CR Value: −1. Applies to Body Rating: No.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 49`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "bound",
    name: "Bound",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct is chained or constrained from leaving an area by physical or magical means. Construction Points: −2. CR Value: −1/2. Applies to Body Rating: Yes.",
    description:
      "The construct is chained or constrained from leaving an area by physical or magical means. Disadvantage: the construct can only act within a designated area with a 60 feet radius; it does not pursue anyone who leaves this range. Construction Points: −2. CR Value: −1/2. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 49`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "no-hands",
    name: "No Hands",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct's arms end in stumps — it cannot wield weapons nor grab anything. Construction Points: −1 (additional −1 per each extra arm the construct has). CR Value: −1/2. Applies to Body Rating: Yes.",
    description:
      "The construct's arms end in stumps. Disadvantage: the construct cannot wield weapons nor grab anything. Special: the construct cannot take the following feats: Fine Manipulation, Melee Weapon Proficiency, Natural Weaponry (claws) or Ranged Weapon Proficiency. It can take Natural Weaponry, Weapon Mountings and Concealed Weapon Mounting normally. Construction Points: −1 (additional −1 per each extra arm the construct has). CR Value: −1/2. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 49`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "no-arms",
    name: "No Arms",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct was designed with no arms and cannot attack unless it has other limbs that can do so. Construction Points: −6. CR Value: −1. Applies to Body Rating: Yes.",
    description:
      "The spellcaster designed the construct with no arms. Disadvantage: the construct cannot attack unless it has other limbs that can do so. Special: the construct cannot take the following feats: Extra Arm, Extra Pair of Arms, Fine Manipulation, Melee Weapon Proficiency, Natural Weaponry (claws) or Ranged Weapon Proficiency. It can take Natural Weaponry that does not involve arms, and Concealed Weapon Mounting and Weapon Mounting provided the weapons are incorporated somewhere else. Construction Points: −6. CR Value: −1. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "no-legs",
    name: "No Legs",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct was designed with no legs and cannot move; changing its facing is a move action. Construction Points: −6. CR Value: −1. Applies to Body Rating: Yes.",
    description:
      "The spellcaster designed the construct with no legs. Disadvantage: the construct cannot move (except as detailed in its Special line), and changing its facing is a move action. Special: the construct cannot take the following feats: Extra Leg, Extra Pair of Legs, Overbearing Trample or Stomp. If it takes Extra Miscellaneous Limb (torso) twice and Extra Miscellaneous Limb (tail), it can slither like a snake, subtracting 20 feet from its normal walk speed, to a minimum of 10 feet. Construction Points: −6. CR Value: −1. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "one-arm",
    name: "One Arm",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct was designed with only one arm — it has one less attack and a −1 balance penalty to AC (penalty type as printed). Construction Points: −4. CR Value: −1/2. Applies to Body Rating: Yes.",
    description:
      "The spellcaster designed the construct with only one arm, decreasing its number of attacks. Disadvantage (headed \"Benefit\" in the book, as printed): the construct has one less attack and a −1 balance penalty to AC. Special: the spellcaster can substitute the arm with the Extra Miscellaneous Limb (tentacle) or other appropriate limbs. Construction Points: −4. CR Value: −1/2. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    modifiers: [
      {
        id: "one-arm-ac",
        source: "One Arm (construct deficiency)",
        target: "ac.untyped",
        value: -1,
        mode: "add",
        bonusType: "untyped",
        note: "−1 penalty to AC, printed as a \"balance penalty\" (no such penalty type exists in the engine; recorded untyped).",
      },
    ],
  },
  {
    id: "one-leg",
    name: "One Leg",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct was designed with only one leg — a −2 stability penalty and walk speed reduced by 10 feet. Construction Points: −4. CR Value: −1. Applies to Body Rating: Yes.",
    description:
      "The spellcaster designed the construct with only one leg, decreasing its stability. Disadvantage (headed \"Benefit\" in the book, as printed): the construct suffers from a −2 stability penalty against bull rush attacks and other effects that might throw it off balance, and its walk speed decreases by 10 feet. Special: the construct cannot take the following feats: Extra Leg, Extra Pair of Legs, Overbearing Trample or Stomp. The construct can take the Run feat, but it looks very funny (as printed). Construction Points: −4. CR Value: −1. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "unarmoured",
    name: "Unarmoured",
    kind: "flaw",
    summary:
      "Construct deficiency (Automaton): the armour plating covering an automaton is weak — the automaton's AC is decreased by 2. Construction Points: −2. CR Value: −1/2. Applies to Body Rating: Yes.",
    description:
      "The armour plating covering an automaton is weak. Disadvantage (headed \"Benefit\" in the book, as printed): the automaton's AC is decreased by −2. Construction Points: −2. CR Value: −1/2. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
    modifiers: [
      {
        id: "unarmoured-ac",
        source: "Unarmoured (construct deficiency)",
        target: "ac.natural",
        value: -2,
        mode: "add",
        bonusType: "untyped",
        note: "As printed: the automaton's AC is decreased by 2 (recorded against natural armour, the automaton's plating; mirror of the Reinforced Armour construct feat).",
      },
    ],
  },
  {
    id: "ponderous",
    name: "Ponderous",
    kind: "flaw",
    summary:
      "Construct deficiency (Golem, Automaton): the construct's materials are heavier, making its movements clumsier — walk speed reduced by 10 feet (minimum 10 feet per round) and automata cannot run. Construction Points: −1 for golems, −2 for automata. CR Value: +0. Applies to Body Rating: No.",
    description:
      "The construct's materials are heavier, making its movements clumsier. Disadvantage: the construct's walk speed is reduced by 10 feet, with a minimum of 10 feet per round; in addition, automata cannot run. Construction Points: −1 for golems, −2 for automata. CR Value: +0. Applies to Body Rating: No.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 50`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "construct-vulnerability",
    name: "Vulnerability",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct is particularly vulnerable to certain attacks — golems take normal damage from one chosen type, automata and simulacra take double damage from it. Construction Points: −4. CR Value: −1/2. Applies to Body Rating: No.",
    description:
      "The construct is particularly vulnerable to certain attacks. Disadvantage: golems take normal damage from a chosen type of attack and are affected normally by certain effects; automata and simulacra take double damage from one of these types of attack. The types of attacks and effects available are air, cold, earth, fire, force, electricity, rust, sonic and water; alternative vulnerabilities include bludgeoning, piercing or slashing weapons, certain materials and schools of magic. Construction Points: −4. CR Value: −1/2. Applies to Body Rating: No.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, pp. 50-51`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
  {
    id: "weak-spot",
    name: "Weak Spot",
    kind: "flaw",
    summary:
      "Construct deficiency (Construct): the construct is particularly vulnerable in a certain part of its body — subject to double damage from critical hits. Construction Points: −5. CR Value: −1/2. Applies to Body Rating: Yes.",
    description:
      "The construct is particularly vulnerable in a certain part of its body. Disadvantage: the construct is subject to double damage from critical hits, but not to sneak attacks. Special: opponents who succeed at a Spot check (DC 5 + construct's HD) can attempt to target the weak spot by applying a −2 to their attack rolls and deal +1d4 damage if successful. Construction Points: −5. CR Value: −1/2. Applies to Body Rating: Yes.",
    prerequisite: CONSTRUCT_ONLY,
    source: `${CONSTRUCTS}, p. 51`,
    sourceUrl: CONSTRUCTS_PDF,
    ruleset: "core",
  },
];
