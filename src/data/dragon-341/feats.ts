// Dragon Magazine #341 (March 2006) — feat draft: 10 records.
// All ten are the "Mind Blade Feats" Class Acts column (Matthew J.
// Hanson), p. 86 — psionic feats for the soulknife of the Expanded
// Psionics Handbook. Every one is printed with the [Psionic] tag and
// requires the ability to form a mind blade. The column's frame rule:
// at the DM's option, a soulknife may select one of these feats in
// place of a soulknife bonus feat (the column instances the 6th- and
// 9th-level bonus feats); Wild Talent may not be replaced this way.
// That frame is article-level and is carried here in the header; the
// records themselves are the feats as printed.
//
// Filed per the live Expanded Psionics Handbook house style: category
// "general" with the printed [Psionic] descriptor carried in
// `special`, descriptor also leading the benefit text.
//
// Verification: read from the archive.org OCR text stream of the full
// issue; no rendered-page-image pass was possible in this session (see
// MANIFEST.md "Verification"). One prerequisite value is an OCR
// reconstruction and is flagged in SCREENING.md: Tactical
// Reassignment's Concentration ranks print through the OCR as "u
// ranks," read as 11 ranks (the chain runs 4 → 7 → 11 across
// Practiced / Strategic / Tactical Reassignment).
// The three Vile feats reprinted in the Demonomicon sidebar (Willing
// Deformity, Thrall to Demon, Deformity (Clawed Hands)) are NOT in
// this draft: all three are already in the live catalog from the Book
// of Vile Darkness treatment. See MANIFEST.md "Reprints."

import type { FeatDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #341 — Class Acts: Mind Blade Feats (Matthew J. Hanson), p. 86";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    special: "Psionic feat.",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_341_FEATS: FeatDefinition[] = [
  F({
    id: "adamantine-mind-blade",
    name: "Adamantine Mind Blade",
    prerequisites: ["Base attack bonus +1", "Ability to form a mind blade"],
    benefitSummary:
      "[Psionic.] Your mind blade takes on the properties of adamantine. Benefit: Your mind blade counts as adamantine for the purpose of overcoming damage reduction. Normal: A mind blade has hardness 10 and 10 hit points. Special: You may not also have the Silver Mind Blade feat.",
  }),
  F({
    id: "align-mind-blade",
    name: "Align Mind Blade",
    prerequisites: ["Base attack bonus +6", "Ability to form a mind blade"],
    benefitSummary:
      "[Psionic.] Your mind blade carries the force of your convictions. Benefit: Choose one alignment — chaotic, evil, good, or lawful — that is not opposed to your own alignment (a true neutral character may choose any of the four). Your mind blade is treated as having that alignment for the purpose of overcoming damage reduction. Special: You may take this feat twice, choosing a different alignment each time; you may never choose an alignment opposed to one you have already chosen with this feat.",
  }),
  F({
    id: "greater-mind-shield",
    name: "Greater Mind Shield",
    prerequisites: ["Mind Shield", "Mind blade +2", "Shape mind blade class feature"],
    benefitSummary:
      "[Psionic.] Your mind shield can be larger, and can carry shield special abilities. Benefit: You can form a light shield or a heavy shield with your Mind Shield feat; switching between the two forms is a full-round action. Your mind shield may carry armor special abilities whose total value does not exceed the value of the special abilities assigned to your mind blade, and those abilities are reassigned when your mind blade's abilities are. The shield abilities available are: bashing (+1), light fortification (+1), arrow deflection (+2), power resistance (13) (+2), ghost touch (+3), moderate fortification (+3), and power resistance (15) (+3).",
  }),
  F({
    id: "mind-daggers",
    name: "Mind Daggers",
    prerequisites: ["Base attack bonus +4", "Throw mind blade class feature", "Free draw class feature"],
    benefitSummary:
      "[Psionic.] You can form a flurry of smaller mind blades for throwing. Benefit: You can form additional mind blades each round; each blade after the first has an enhancement bonus 1 lower than the one before it, cumulatively (minimum +0, and you can form only one +0 dagger in a round). These mind daggers deal 1d4 points of damage (1d3 for a Small soulknife), are thrown weapons with a 30-foot range increment, and always count as magic weapons for the purpose of overcoming damage reduction.",
  }),
  F({
    id: "mind-shield",
    name: "Mind Shield",
    prerequisites: ["Mind blade +1", "Shape mind blade class feature"],
    benefitSummary:
      "[Psionic.] You can split your mind blade to form a shield as well as a weapon. Benefit: When you shape your mind blade, you may split it into a mind blade and a light shield, each with an enhancement bonus 1 lower than your single mind blade's, in the same manner as splitting a mind blade into two short swords. A shield bash with the mind shield counts as a magic weapon but gains none of the mind blade's enhancement bonus or special abilities. The mind shield's hardness and hit points equal those of your mind blade.",
  }),
  F({
    id: "practiced-mind-blade",
    name: "Practiced Mind Blade",
    prerequisites: ["Concentration 4 ranks"],
    benefitSummary:
      "[Psionic.] Your mind blade keeps pace with your overall experience even when you pursue other classes. Benefit: Your effective soulknife level is 4 higher for the purpose of determining your mind blade's enhancement bonus and special abilities, but never higher than your total Hit Dice. (For example, a 6th-level soulknife/3rd-level ranger counts as a 9th-level soulknife for his mind blade's enhancement and special abilities.)",
  }),
  F({
    id: "reshape-mind-blade",
    name: "Reshape Mind Blade",
    prerequisites: ["Base attack bonus +4", "Shape mind blade class feature"],
    benefitSummary:
      "[Psionic.] Your mind blade is not limited to its usual forms. Benefit: Choose one simple, martial, or exotic melee weapon with which you are proficient. Your mind blade can take the form of that weapon, with all of the weapon's statistics. Reshaping the blade is a full-round action, and you may also manifest your mind blade directly in the chosen shape. Special: You may take this feat multiple times; each time, choose a new weapon.",
  }),
  F({
    id: "silver-mind-blade",
    name: "Silver Mind Blade",
    prerequisites: ["Base attack bonus +1", "Ability to form a mind blade"],
    benefitSummary:
      "[Psionic.] Your mind blade takes on the properties of alchemical silver. Benefit: Your mind blade counts as alchemical silver for the purpose of overcoming damage reduction. Special: You may not also have the Adamantine Mind Blade feat.",
  }),
  F({
    id: "strategic-reassignment",
    name: "Strategic Reassignment",
    prerequisites: ["Concentration 7 ranks", "Mind blade +1"],
    benefitSummary:
      "[Psionic.] You can reassign your mind blade's special abilities with a short period of concentration instead of a night's rest. Benefit: You can reassign the special abilities of your mind blade after 10 minutes of concentration. Normal: Reassigning a mind blade's special abilities requires 8 hours of rest.",
  }),
  F({
    id: "tactical-reassignment",
    name: "Tactical Reassignment",
    prerequisites: ["Concentration 11 ranks", "Strategic Reassignment", "Mind blade +2"],
    benefitSummary:
      "[Psionic.] You can reassign your mind blade's special abilities in the middle of a fight. Benefit: You can reassign the special abilities of your mind blade as a full-round action that provokes attacks of opportunity, with a DC 25 Concentration check; if an attack of opportunity deals damage to you, the attempt fails.",
  }),
];
