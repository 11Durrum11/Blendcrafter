// Dragon Magazine #350 (December 2006) — feat draft: 9 records.
// ONE feat from the "Magic Pollution" sidebar (Hal Maclean and the
// Dragon staff), p. 37: Evolved [General].
// FOUR regional feats from the "Savage Tidings: Journey to the Isle
// of Dread" affiliation sidebar (Stephen S. Greer and Gary Holian),
// p. 69: Blessed of Osprem, Last Survivor, Stowaway, Vohoun Eye.
// ⚠️ SURVEY CORRECTION: the survey filed Savage Tidings as
// reference-only; its p. 69 sidebar prints these four feats. They are
// Greyhawk-regional feats; per the standing rule for non-FR settings
// the mechanics stage and the Greyhawk lore (Osprem, the Vohoun Sea,
// the Amedio Jungle, the Scarlet Brotherhood's waters) stays in
// reference.md. Category "setting-specific" per catalog practice for
// regional feats.
// FOUR archery feats from Class Acts, "The Archer's Art" (Mark A.
// Hart): Efficient Pull, Bow Feint, Master Bowyer, Ranged Threat —
// all printed [General], all fighter bonus feats except Master
// Bowyer. ⚠️ SURVEY CORRECTION: the survey's variant index showed no
// Class Acts records for this issue; Class Acts ran and this column
// is record-bearing. The column's closing table cross-checks the new
// feats' prerequisites: it lists Efficient Pull with "Str 11, Dex
// 13, Point Blank Shot" where the feat text prints Point Blank Shot
// alone — the feat text governs (see MANIFEST print conflicts).
// Texts were read from the issue's OCR stream and cross-checked
// against the crystalkeep 3.5 feat index summaries where available;
// feat text is a faithful mechanical paraphrase in our own words,
// with the printed [tag], Benefit/Normal/Special structure folded
// into benefitSummary per house style.

import type { FeatDefinition } from "@/engine/types";

const SRC_POLLUTION = "Dragon Magazine #350 — Magic Pollution (Hal Maclean and the Dragon staff), p. 37";
const SRC_SAVAGE = "Dragon Magazine #350 — Savage Tidings: Journey to the Isle of Dread (Stephen S. Greer and Gary Holian), p. 69";
const SRC_ARCHER = "Dragon Magazine #350 — Class Acts: The Archer's Art (Mark A. Hart)";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_POLLUTION,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_350_FEATS: FeatDefinition[] = [
  F({
    id: "evolved",
    name: "Evolved",
    prerequisites: ["Character level 3rd", "Mutation template"],
    benefitSummary:
      "[General.] Your mutation only works to your advantage. Benefit: Choose a mutation template you possess. You can ignore one or more drawbacks of your chosen mutation template (see each mutation template's Evolved entry — arcane-blood, poisonous, and stonebone in the same article). Special: You may gain this feat multiple times. Its effects do not stack; each time you gain it, it applies to a different mutation template.",
  }),
  F({
    id: "blessed-of-osprem",
    name: "Blessed of Osprem",
    category: "setting-specific",
    source: SRC_SAVAGE,
    prerequisites: ["Endurance", "Swim 5 ranks", "Region: Vohoun Sea"],
    benefitSummary:
      "[Regional.] The blessing of the sea goddess Osprem rides with sailors of the Vohoun Sea. Benefit: You gain a +2 competence bonus on Swim checks made to resist nonlethal damage and to hold your breath, and you can always take 10 on Swim checks. These bonuses stack with those provided by the Endurance feat. (Greyhawk regional feat; the mechanics stage, the Osprem lore digests in the pack's reference.md.)",
  }),
  F({
    id: "last-survivor",
    name: "Last Survivor",
    category: "setting-specific",
    source: SRC_SAVAGE,
    prerequisites: ["Survival 5 ranks", "Sole survivor of a deadly encounter in the Amedio Jungle", "Region: Amedio Jungle"],
    benefitSummary:
      "[Regional.] You walked out of the Amedio Jungle when no one else did, and the jungle's lessons stayed with you. Benefit: You gain a +2 circumstance bonus on Hide, Listen, and Spot checks made against predators and natural hazards in jungle and forest environments. (Greyhawk regional feat; mechanics stage, lore in reference.md.)",
  }),
  F({
    id: "stowaway",
    name: "Stowaway",
    category: "setting-specific",
    source: SRC_SAVAGE,
    prerequisites: ["Hide 5 ranks", "Move Silently 5 ranks", "Profession (sailor) 1 rank", "Region: Jeklea Bay / the Azure Sea"],
    benefitSummary:
      "[Regional.] You are an expert at stealth aboard large sailing vessels, where you have hidden among cargo and crew more than once. Benefit: You gain a +2 circumstance bonus on Disguise, Hide, and Move Silently checks made aboard large sailing vessels. (Greyhawk regional feat; mechanics stage, lore in reference.md.)",
  }),
  F({
    id: "vohoun-eye",
    name: "Vohoun Eye",
    category: "setting-specific",
    source: SRC_SAVAGE,
    prerequisites: ["Sense Motive 5 ranks", "Region: the Pirate Isles"],
    benefitSummary:
      "[Regional.] A sharp eye for spellcasters, honed in the Pirate Isles. Benefit: When you observe someone casting a spell, you can identify the spell's school as a free action by making a Sense Motive check (DC 20 + the spell's level). If you succeed, you also gain a +2 circumstance bonus on your saving throw against that spell. (Greyhawk regional feat; mechanics stage, lore in reference.md.)",
  }),
  F({
    id: "efficient-pull",
    name: "Efficient Pull",
    source: SRC_ARCHER,
    prerequisites: ["Point Blank Shot"],
    benefitSummary:
      "[General.] Benefit: When using a composite bow with a Strength rating, you treat your Strength score as 2 higher than it actually is for the purpose of that rating — you draw the bow as if you were stronger, gaining the full benefit of a mightier bow than your frame would normally manage. Special: A fighter may select Efficient Pull as one of his fighter bonus feats. (The column's closing archery-feat table also lists Str 11 and Dex 13 for this feat; the feat text itself prints Point Blank Shot alone, and the text governs — see MANIFEST.)",
  }),
  F({
    id: "bow-feint",
    name: "Bow Feint",
    source: SRC_ARCHER,
    prerequisites: ["Int 13", "Point Blank Shot"],
    benefitSummary:
      "[General.] Benefit: You can feint an opponent with a ranged attack. To feint, you must have a ranged weapon readied and your target must be able to see you and be within 30 feet. Feinting is a standard action: make a Bluff check opposed by your target's Sense Motive check, with the target adding his base attack bonus to his Sense Motive result. If your Bluff result exceeds his result, the next ranged attack you make against that target (on or before your next turn) does not allow him to use his Dexterity bonus to Armor Class. When feinting this way against a nonhumanoid opponent you take a -4 penalty on the Bluff check; against a creature of animal Intelligence (1 or 2) the penalty is -8; feinting against a nonintelligent creature is impossible. Normal: Feinting involves a melee attack against the target. Special: A fighter may select Bow Feint as one of his fighter bonus feats.",
  }),
  F({
    id: "master-bowyer",
    name: "Master Bowyer",
    source: SRC_ARCHER,
    prerequisites: ["Craft (bowyer) 6 ranks"],
    benefitSummary:
      "[General.] Benefit: Your exceptional skill as a bowyer and fletcher allows you to fashion masterwork bows and arrows at half the normal cost and in half the normal time.",
  }),
  F({
    id: "ranged-threat",
    name: "Ranged Threat",
    source: SRC_ARCHER,
    prerequisites: ["Combat Reflexes", "Point Blank Shot", "Precise Shot", "Base attack bonus +6"],
    benefitSummary:
      "[General.] Benefit: When armed with a ranged weapon, you threaten every square within 15 feet of you. If a target in this threatened area takes an action that provokes an attack of opportunity, you may make one ranged attack at your highest attack bonus against that target. You may use this feat only once per round, and this attack counts as all of your attacks of opportunity for that round, even if you are normally allowed more than one. Special: A fighter may select Ranged Threat as one of his fighter bonus feats.",
  }),
];
