// Dragon Magazine #333 (July 2005) — feat draft: 11 records.
// The program survey named ~0 feats for this issue; Class Acts and
// the features hid eleven, in five groups:
//   1 — "Noble Born" (Keith Baker), p. 45: the Noble Born feat, the
//       one mechanical piece of the noble-PCs feature (the survey
//       gap — the front features beyond the Demonomicon were never
//       itemized).
//   3 — "Class Acts: Change of Environs" (Greg Marks), p. 84:
//       barbarian regional feats (arctic/plains/underground). The
//       column frames them as regional feats: one may be taken at
//       1st level, and a character may only ever have one.
//   1 — "Class Acts: Tempering Bards" (Troy E. Taylor), p. 85:
//       Divine Inspiration (the column's temple-role write-ups are
//       flavor and digest in reference.md).
//   4 — "Class Acts: Cultured Combatant" (Hal Maclean), p. 88:
//       Perform-based combat feats; the column is part one of a
//       two-part series (part two is in Dragon #335). All four are
//       fighter bonus feats as printed.
//   1 — "Class Acts: Monks in the City" (Tracy Taylor; feat by
//       Richard Farrese), p. 89: High Society. The column is urban
//       social advice for a bard/monk pairing — no oriental
//       mechanics; the feat is a generic social feat.
//   1 — "Class Acts: Unseen Sisters" (Richard Farrese), p. 92:
//       Deceitful Appearances (the sisterhood's organization
//       write-up digests in reference.md).
// All feat texts verified against the magazine text and, for the
// Class Acts sidebars, the rendered page images; the image governs
// over the OCR stream (it confirms Deadly Concussion's Perform
// (percussion) 6 ranks). 3.5 check: all eleven are printed in 3.5
// form (Survival, Sleight of Hand — no 3.0 skill names). See
// SCREENING.md. Texts are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced beyond the printed
// rule lines carried in each record's summary.

import type { FeatDefinition } from "@/engine/types";

const SRC_NOBLE = "Dragon Magazine #333 — Noble Born (Keith Baker), p. 45";
const SRC_ENVIRONS = "Dragon Magazine #333 — Class Acts: Change of Environs (Greg Marks), p. 84";
const SRC_BARD = "Dragon Magazine #333 — Class Acts: Tempering Bards (Troy E. Taylor), p. 85";
const SRC_CULTURED = "Dragon Magazine #333 — Class Acts: Cultured Combatant (Hal Maclean), p. 88";
const SRC_MONKS = "Dragon Magazine #333 — Class Acts: Monks in the City (Tracy Taylor; feat by Richard Farrese), p. 89";
const SRC_UNSEEN = "Dragon Magazine #333 — Class Acts: Unseen Sisters (Richard Farrese), p. 92";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_NOBLE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_333_FEATS: FeatDefinition[] = [
  F({
    id: "noble-born",
    name: "Noble Born",
    source: SRC_NOBLE,
    prerequisites: ["Must be taken at 1st level"],
    benefitSummary:
      "[General.] You are a scion of a noble house, raised to rule and taught the art of diplomacy as soon as you could talk. Benefit: Diplomacy and Knowledge (nobility and royalty) are always considered class skills for you. In addition, if you gain the Leadership feat you receive a +2 bonus to your Leadership score. Special: This feat can only be taken at 1st level. It indicates a tie to a noble family, which might or might not still exist.",
  }),
  F({
    id: "darkness-adaptation",
    name: "Darkness Adaptation",
    source: SRC_ENVIRONS,
    prerequisites: ["Raised in an arctic environment"],
    benefitSummary:
      "[General.] Living in a land that experiences prolonged periods of darkness, you possess superior sight. Benefit: You see twice as far as normal in areas of poor illumination. If you possess low-light vision, you see three times the normal distance. This feat does not affect darkvision. (A regional feat from Class Acts: Change of Environs — treat as a regional feat: it may be taken at 1st level, and a character may only ever have one such regional feat.)",
  }),
  F({
    id: "efficient-hunter",
    name: "Efficient Hunter",
    source: SRC_ENVIRONS,
    prerequisites: ["Survival 1 rank", "Raised in a plains environment"],
    benefitSummary:
      "[General.] You are skilled at finding food where others fail. Benefit: You receive a +2 bonus on Survival checks. When making checks to get along in the wild, successful checks provide enough food for yourself and a number of additional people equal to your Wisdom modifier (minimum of +1) without raising the DC of the check. Normal: When making checks to get along in the wild, you can support one other person for every 2 points by which your check result exceeds 10. (A regional feat from Class Acts: Change of Environs — it may be taken at 1st level, and a character may only ever have one such regional feat.)",
  }),
  F({
    id: "fury-of-stone",
    name: "Fury of Stone",
    source: SRC_ENVIRONS,
    prerequisites: ["Ability to rage or frenzy", "Raised in an underground environment"],
    benefitSummary:
      "[General.] While underground, you are able to draw on the strength of the surrounding stone and extend the length of your rage. Benefit: While underground, your rage lasts for twice as long as it normally would. However, when above ground the duration of your rage is halved. Normal: A barbarian's rage normally lasts for a number of rounds equal to 3 + the character's (newly improved) Constitution modifier. (A regional feat from Class Acts: Change of Environs — it may be taken at 1st level, and a character may only ever have one such regional feat.)",
  }),
  F({
    id: "divine-inspiration",
    name: "Divine Inspiration",
    source: SRC_BARD,
    prerequisites: ["Bardic music ability", "Ability to turn undead"],
    benefitSummary:
      "Your piety grants you the ability to aid your friends to a level beyond your natural skills. Benefit: Your bard and cleric levels stack for the purpose of determining your bardic music ability. For example, a human 5th-level bard/1st-level cleric with 9 ranks in a Perform skill could use the suggestion bardic music ability. In addition, Perform is always a class skill for you.",
  }),
  F({
    id: "breath-control",
    name: "Breath Control",
    source: SRC_CULTURED,
    prerequisites: ["Perform (wind instrument) 5 ranks"],
    benefitSummary:
      "[General.] You enjoy an almost legendary ability to master the air in your lungs. Benefit: You get a +2 bonus on all Perform (wind instruments) checks and saves made against inhaled poisons and nauseating vapors. In addition, you may hold your breath for a number of rounds equal to the result of a Perform (wind instruments) check or twice your Constitution score (whichever is higher). Special: A fighter may select Breath Control as one of his fighter bonus feats.",
  }),
  F({
    id: "deadly-concussion",
    name: "Deadly Concussion",
    source: SRC_CULTURED,
    prerequisites: ["Str 13", "Perform (percussion) 6 ranks", "Improved Sunder", "Power Attack"],
    benefitSummary:
      "[General.] Your shattering rhythms pass through armor to rattle your opponent's bones. Benefit: Whenever you use a bludgeoning weapon to make a sunder special attack against an opponent's armor or shield and you destroy the item with a single hit, you deal an amount of damage to your opponent equal to the amount of damage you dealt to destroy his armor or shield. Special: A fighter may select Deadly Concussion as one of his fighter bonus feats.",
  }),
  F({
    id: "elusive-dance",
    name: "Elusive Dance",
    source: SRC_CULTURED,
    prerequisites: ["Perform (dance) 5 ranks"],
    benefitSummary:
      "[General.] Your training in dance allows you to mirror and anticipate an opponent's moves. Benefit: During your action, you designate an opponent. That opponent cannot make attacks of opportunity against you. You can select a new opponent on any action. If you have the Dodge feat you must designate the same opponent as the target for both feats. Special: A fighter may select Elusive Dance as one of his fighter bonus feats.",
  }),
  F({
    id: "master-of-mockery",
    name: "Master of Mockery",
    source: SRC_CULTURED,
    prerequisites: ["Perform (comedy) 8 ranks"],
    benefitSummary:
      "[General.] A genius of repartee and quick-witted insults, you can provoke your opponents to leave them too furious to worry about their own safety. Benefit: You may, as a standard action that does not provoke an attack of opportunity, attempt to enrage a single melee opponent by making a Perform (comedy) check. The result of this check represents the DC of the Will save your opponent must make to avoid becoming enraged. Enraged opponents attack you whenever able, ignoring all other targets. They gain a +2 morale bonus on attack rolls against you but take a -2 penalty to Armor Class. This is a mind-affecting, language-dependent effect. Special: A fighter may select Master of Mockery as one of his fighter bonus feats.",
  }),
  F({
    id: "high-society",
    name: "High Society",
    source: SRC_MONKS,
    prerequisites: ["Diplomacy 4 ranks"],
    benefitSummary:
      "[General.] You know good manners and were trained to handle social interactions in noble circles. Benefit: You get a +3 bonus on Bluff, Diplomacy, or Disguise checks made when interacting with members of the highest levels of society, such as monarchs, nobles, courtiers, lords and ladies, and high-ranking clerics.",
  }),
  F({
    id: "deceitful-appearances",
    name: "Deceitful Appearances",
    source: SRC_UNSEEN,
    prerequisites: ["Sleight of Hand 5 ranks", "Base attack bonus +3"],
    benefitSummary:
      "[General.] You can fool others into thinking you are defenseless. Benefit: When bearing only light weapons that you have made Sleight of Hand checks to hide on your body, you automatically adopt mannerisms and postures that make you appear defenseless. This deception grants you a +2 circumstance bonus on initiative checks and attack rolls made with a hidden weapon during the first round of combat. These bonuses do not apply if your enemies spot your weapons prior to combat.",
  }),
];
