// Dragon Magazine #334 (August 2005) — feat draft: 14 records.
// NINE printed feats from four Class Acts columns the program survey
// did not itemize: "Council of Elders" (Richard Farrese, barbarian,
// p. 84) — three [General] elder feats; "Variant Turning" (Jason
// Nelson, cleric, p. 86) — four [Divine] turning feats; "The
// Janissary" (Peter von Bleichert, fighter, p. 88) — Combat Engineer
// [General]; "The Bronze Solaris" (Troy E. Taylor, sorcerer, p. 93) —
// Bronze Solaris Member, printed in a sidebar without a bracketed
// category tag and staged as a general feat.
// FIVE rogue special abilities — "That Which Does Not Kill, Part II"
// (Hal Maclean, rogue, p. 92). ⚠️ These are NOT printed as feats: they
// are new rogue special abilities, taken in place of one of the
// special abilities a rogue gains at 10th level or above (Player's
// Handbook p. 50), each gated by an experiential prerequisite. They
// stage in the feats barrel because it is the catalog's only fitting
// record shape for discrete prerequisite-gated benefits (precedent:
// the issue-331 alternative familiar abilities); every record says so
// in its text, and the decision is flagged in SCREENING.md for
// Shaun's call. (Part I of the column ran in issue #332, which was
// skipped at Shaun's order; its abilities are not extracted here.)
// All feat texts verified against rendered page images (magazine
// pp. 84, 86, 88, 92, 93); the image governs over the OCR stream.
// DragonDex's feat index for this issue lists exactly the nine
// printed feats staged here.
// ID NOTE: "corona-334" — the plain id "corona" is already held in
// the live feats barrel by an unrelated Corona feat from Dragon
// Magazine #306; the issue suffix keeps the two records distinct
// (issue-319/330/331 precedent).

import type { FeatDefinition } from "@/engine/types";

const SRC_ELDERS = "Dragon Magazine #334 — Class Acts: Council of Elders (Richard Farrese), p. 84";
const SRC_TURNING = "Dragon Magazine #334 — Class Acts: Variant Turning (Jason Nelson), p. 86";
const SRC_JANISSARY = "Dragon Magazine #334 — Class Acts: The Janissary (Peter von Bleichert), p. 88";
const SRC_ROGUE = "Dragon Magazine #334 — Class Acts: That Which Does Not Kill, Part II (Hal Maclean), p. 92";
const SRC_BRONZE = "Dragon Magazine #334 — Class Acts: The Bronze Solaris (Troy E. Taylor), p. 93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_ELDERS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const ROGUE_FRAME =
  "Rogue special ability (not a printed feat — staged in the feats barrel as the catalog's only fitting record shape; see SCREENING.md). A rogue may take this ability in place of one of the rogue special abilities gained at 10th level or above (Player's Handbook p. 50), provided she meets its prerequisite.";

export const DRAGON_334_FEATS: FeatDefinition[] = [
  // ---- Council of Elders (barbarian, p. 84) ----
  F({
    id: "recognized-elder",
    name: "Recognized Elder",
    prerequisites: ["Leadership", "Membership in a tribe", "Old age"],
    benefitSummary:
      "[General.] Your people highly respect your opinion and seek out your wisdom. Benefit: Diplomacy and Knowledge (history) are class skills for you, and you receive a +1 bonus on Diplomacy and Knowledge (history) checks. In addition, you may gain a cohort with levels in barbarian as if your Leadership score were 1 higher. (A character selecting one of the Council of Elders feats need not have barbarian levels, but a specific group of people that holds barbarians in high esteem must recognize the character's wisdom.)",
  }),
  F({
    id: "wise-elder",
    name: "Wise Elder",
    prerequisites: ["Leadership", "Recognized Elder", "Membership in a tribe", "Old age"],
    benefitSummary:
      "[General.] Your tribe recognizes the assets of your great wisdom and knowledge. Benefit: Once per day, you may reroll a Diplomacy or Intimidate check made to influence a member of your tribe; you must take the result of the second roll even if it is worse than the original. You may also gain a cohort with levels in barbarian as if your Leadership score were 2 higher (this replaces and does not stack with the bonus from Recognized Elder).",
  }),
  F({
    id: "venerable-elder",
    name: "Venerable Elder",
    prerequisites: ["Leadership", "Recognized Elder", "Wise Elder", "Membership in a tribe", "Venerable age"],
    benefitSummary:
      "[General.] Your tribe considers you among the wisest and most knowledgeable people alive. Benefit: Once per day, you may gain a +10 insight bonus on any Diplomacy or Intimidate check; you must declare your intent to use this ability before rolling the check. You may also gain a cohort with levels in barbarian as if your Leadership score were 4 higher (this replaces and does not stack with the bonus from Recognized Elder or Wise Elder).",
  }),

  // ---- Variant Turning (cleric, p. 86) ----
  F({
    id: "aura-of-life-energy",
    name: "Aura of Life Energy",
    source: SRC_TURNING,
    prerequisites: ["Knowledge (religion) 7 ranks", "Ability to turn undead"],
    benefitSummary:
      "[Divine.] You can produce a blast of energy that wreaks havoc on undead. Benefit: You can spend a turn attempt as a standard action to create a 20-foot-radius burst of positive energy centered on you. All undead caught within the burst take 1d8 points of damage + 1 point of damage per two cleric levels. This is a positive energy effect, although it does not heal living creatures.",
  }),
  F({
    id: "corona-334",
    name: "Corona",
    source: SRC_TURNING,
    prerequisites: ["Knowledge (religion) 4 ranks", "Ability to turn undead"],
    benefitSummary:
      "[Divine.] By channeling positive energy you can blast your foes with holy light. Benefit: You can spend a turn attempt as a standard action to create a flash of light that blasts forth into a 20-foot-radius burst centered on you. Undead creatures in the area that are susceptible to sunlight (such as bodaks, vampires, and wraiths) become frightened for 1d4 rounds unless they succeed at a Will save (DC 10 + 1/2 your character level + your Charisma modifier). (The plain id \"corona\" is held by an unrelated feat from Dragon Magazine #306; this record carries the issue suffix.)",
  }),
  F({
    id: "haunting-weapons",
    name: "Haunting Weapons",
    source: SRC_TURNING,
    prerequisites: ["Knowledge (religion) 4 ranks", "Knowledge (the planes) 4 ranks", "Ability to turn or rebuke undead"],
    benefitSummary:
      "[Divine.] You have learned the secrets of imbuing weapons with the ability to affect restless spirits. Benefit: You can spend a turn or rebuke attempt as a standard action to grant the melee weapons (including natural weapons) of all allies (including yourself) within a 30-foot burst the ghost touch special ability. Such weapons count as either corporeal or incorporeal at any given time, whichever is more beneficial to the wielder. The effect lasts until the end of your next turn.",
  }),
  F({
    id: "holy-calling",
    name: "Holy Calling",
    source: SRC_TURNING,
    prerequisites: ["Cha 15", "Ability to turn undead"],
    benefitSummary:
      "[Divine.] You are able to channel divinely infused life energy that calls to the endless hunger of the undead like a siren's song. Benefit: As a standard action you may use a turn or rebuke attempt to goad an undead opponent within 60 feet that has line of effect to you. The goaded undead must make a Will save (DC 10 + 1/2 your character level + your Charisma modifier). If it fails the save, for 1d4 rounds you are the only creature it can attack: it attacks you in the most efficient way possible, whether through melee or ranged attacks, spells, or other abilities; it may cast spells that affect an area as long as you are within the spell's area, and it may continue to use appropriate tactics, avoiding attacks of opportunity and the like, but it can only attack you regardless of the actions of your allies. If it kills you, knocks you unconscious, loses sight of you, or otherwise is unable to make attacks against you, it may attack other foes as normal.",
  }),

  // ---- The Janissary (fighter, p. 88) ----
  F({
    id: "combat-engineer",
    name: "Combat Engineer",
    source: SRC_JANISSARY,
    prerequisites: ["Str 13", "Int 13", "Knowledge (architecture and engineering) 4 ranks", "Improved Sunder", "Power Attack"],
    benefitSummary:
      "[General.] You can pinpoint weaknesses in materials, helping you destroy them. Benefit: You gain a +2 bonus on attack and damage rolls when making a sunder attack. When attacking an unattended inanimate object, wall, or structure you can ignore up to 10 points of hardness.",
    special: "A fighter may select Combat Engineer as one of his fighter bonus feats.",
  }),

  // ---- The Bronze Solaris (sorcerer, p. 93) ----
  F({
    id: "bronze-solaris-member",
    name: "Bronze Solaris Member",
    source: SRC_BRONZE,
    prerequisites: ["Sorcerer level 1st"],
    benefitSummary:
      "You have divine ancestry, granting you membership in the Order of the Bronze Solaris. Benefit: You are a member of the Order of the Bronze Solaris, granting you the secret knowledge of the order. Knowledge (religion) is a sorcerer class skill for you. Choose an ancestral deity: because of extensive instruction in the rites of your ancestral deity's church, you receive a +3 bonus on Knowledge (religion) checks related to that deity (only). You are proficient with the favored weapon of your ancestral deity. (The article prints this feat in a sidebar without a bracketed category tag; it is staged as a general feat. The order's divine-ancestry premise is addressed in SCREENING.md.)",
    special: "You may only gain this feat at 1st level.",
  }),

  // ---- That Which Does Not Kill, Part II (rogue, p. 92): rogue special abilities, feat-shaped ----
  F({
    id: "rogue-adrenaline-rush",
    name: "Adrenaline Rush (Rogue Special Ability)",
    source: SRC_ROGUE,
    prerequisites: ["Rogue special ability choice (10th level or above)", "Must have succeeded at a Fortitude save to avoid death due to massive damage"],
    benefitSummary:
      ROGUE_FRAME + " Adrenaline Rush (Ex): Brought to the brink of death by massive trauma, the rogue somehow survived and developed a talent for pushing her body beyond its normal limits. Once per day, the rogue may choose to treat a Strength-based skill check as if she had rolled a natural 20. The rogue must declare she is using this ability before the die roll, thereby negating the necessity of the check.",
  }),
  F({
    id: "rogue-cartilaginous-skeleton",
    name: "Cartilaginous Skeleton (Rogue Special Ability)",
    source: SRC_ROGUE,
    prerequisites: ["Rogue special ability choice (10th level or above)", "Must have been reduced to fewer than 0 hit points by bludgeoning damage or a crushing attack"],
    benefitSummary:
      ROGUE_FRAME + " Cartilaginous Skeleton (Ex): The rogue's shattered bones knit back together under a sheath of flexible cartilage, allowing her to contort herself in remarkable ways. The rogue gains a +4 bonus on Escape Artist checks and an additional +2 bonus when attempting to escape a grapple. Further, if subject to a grapple she may make an attack of opportunity against the grappling opponent even if it has the Improved Grapple feat or the improved grab special attack.",
  }),
  F({
    id: "rogue-enriched-bone-marrow",
    name: "Enriched Bone Marrow (Rogue Special Ability)",
    source: SRC_ROGUE,
    prerequisites: ["Rogue special ability choice (10th level or above)", "Constitution must have been reduced below 3 by blood-draining attacks"],
    benefitSummary:
      ROGUE_FRAME + " Enriched Bone Marrow (Ex): The rogue's recovery from near-fatal blood loss left her better able to recuperate from physical disability. Each day in which the rogue attempts to recover ability damage to her Strength, Dexterity, or Constitution, she may attempt a Fortitude save (DC 15 + current amount of ability damage) to recover an extra point of ability damage.",
  }),
  F({
    id: "rogue-happier-days",
    name: "Happier Days (Rogue Special Ability)",
    source: SRC_ROGUE,
    prerequisites: ["Rogue special ability choice (10th level or above)", "Must have made a saving throw to resist a death effect"],
    benefitSummary:
      ROGUE_FRAME + " Happier Days (Ex): At the moment of crisis the rogue's life did pass before her eyes, and now she may draw upon memories of better times to sustain her when enemies assault her psyche. Once per day, if the rogue must attempt a Will save she may instead choose to cast her mind adrift among her memories rather than suffer the effects of a possible failed save. She must decide to use this ability before she attempts the Will save, negating the need for the saving throw. While lost in her memories she is oblivious to her surroundings and becomes helpless. Each round, at the end of her turn, the rogue may attempt to pull her thoughts back to the present by attempting a Will save (at the same DC of the original Will save); for each round she fails this save she remains helpless.",
  }),
  F({
    id: "rogue-rainbow-stare",
    name: "Rainbow Stare (Rogue Special Ability)",
    source: SRC_ROGUE,
    prerequisites: ["Rogue special ability choice (10th level or above)", "Must have survived passing through at least four layers of a prismatic sphere or prismatic wall"],
    benefitSummary:
      ROGUE_FRAME + " Rainbow Stare (Su): Somehow, while enduring a nearly overwhelming array of colors and light, the rogue learned how to screen out dangerous images. She gains a +2 bonus on saving throws against figments and glamers and is completely immune to patterns.",
  }),
];
