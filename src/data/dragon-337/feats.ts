// Dragon Magazine #337 (November 2005) — feat draft: 9 records.
// All nine come from Class Acts columns the program survey did not
// itemize (it named only the Harbinger):
//   - League Militiaman [General] — "Class Acts: The Free People"
//     (Richard Farrese), p. 92 (barbarian column).
//   - Seafarer [General] — "Class Acts: Viking Raider" (Paul Leach),
//     p. 96 (fighter column).
//   - Six paladin feats — "Class Acts: Purification Feats" (Amber E.
//     Scott), p. 98: five printed [Purification] (a feat type that
//     works like the Complete Divine divine feats, except each use
//     spends weekly uses of the remove disease spell-like ability
//     instead of turn/rebuke attempts; each use costs a minimum of one
//     daily use of remove disease as printed, and purification feats
//     require a standard action to activate) and one printed [General]
//     (Extra Remove Disease). The catalog's FeatCategory set has no
//     "purification" value, so the [Purification] tag rides in each
//     record's text, as the [General] tags do in earlier packs.
//   - Spell Graft [General] — "Class Acts: Spell Grafts" (Hal
//     Maclean), p. 101 (sorcerer column). The column's four sample
//     grafts (After Images, Cinder Fists, Cobra's Hood, Red Eye) are
//     options taken through this feat, not feats themselves; they are
//     digested in full in reference.md.
// Held to reference under the standing monk fighting-style ruling:
// Defensive Metered Foot and Offensive Metered Foot ("Class Acts: The
// Metered Style," p. 97) — see SCREENING.md; their full text is in
// reference.md.
// All feat texts verified against rendered page images (magazine
// pp. 92, 96, 98, 101); the image governs over the OCR stream — it
// corrects the OCR's "Extra Remove Dime" to Extra Remove Disease and
// confirms Bane of Decay grants a +1 undead bane or +1 vermin bane
// weapon.

import type { FeatDefinition } from "@/engine/types";

const SRC_FREE = "Dragon Magazine #337 — Class Acts: The Free People (Richard Farrese), p. 92";
const SRC_VIKING = "Dragon Magazine #337 — Class Acts: Viking Raider (Paul Leach), p. 96";
const SRC_PURIF = "Dragon Magazine #337 — Class Acts: Purification Feats (Amber E. Scott), p. 98";
const SRC_GRAFT = "Dragon Magazine #337 — Class Acts: Spell Grafts (Hal Maclean), p. 101";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_FREE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const PURIF_FRAME =
  "Purification feats function much like the divine feats from Complete Divine; instead of requiring the ability to turn or rebuke undead, these feats require the ability to cast remove disease as a spell-like ability. Each use of a purification feat costs a minimum of one daily use of remove disease (as printed). Purification feats require a standard action to activate.";

export const DRAGON_337_FEATS: FeatDefinition[] = [
  F({
    id: "league-militiaman",
    name: "League Militiaman",
    prerequisites: ["Halfling", "Dodge", "Belong to a tribe associated with the League of the Free People"],
    benefitSummary:
      "[General.] You are a militiaman of the League of the Free People; you swore an oath to protect all members of the league. Benefit: You are specially trained to fight opponents larger than yourself and can adopt a defensive combat style against them. During your action you can designate a Medium or larger fey, giant, humanoid, or monstrous humanoid with whom you are engaged in melee combat. Choose one effect to gain against the designated opponent: a +1 dodge bonus to your Armor Class, or a +2 shield bonus to the Armor Class of any Small or smaller creature adjacent to you whom your designated opponent also threatens. You may designate a different opponent or choose a different effect or target of an effect on your turn as a free action.",
  }),
  F({
    id: "seafarer",
    name: "Seafarer",
    source: SRC_VIKING,
    benefitSummary:
      "[General.] You are a skilled sailor. Benefit: Add Profession (sailor) and Survival to your class skills. You receive a +2 bonus on all Profession (sailor) checks and a +2 bonus on Survival checks made on a ship or boat.",
  }),
  F({
    id: "bane-of-decay",
    name: "Bane of Decay",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability"],
    benefitSummary:
      "[Purification.] You channel your purifying abilities into your weapon. " +
      PURIF_FRAME +
      " Benefit: You can spend a weekly use of remove disease to make a melee weapon you hold either +1 undead bane or +1 vermin bane. If the weapon already bears an enhancement bonus, the bonuses do not stack. This ability lasts for 1 minute.",
  }),
  F({
    id: "detoxifying-touch",
    name: "Detoxifying Touch",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability"],
    benefitSummary:
      "[Purification.] You clear poisons from a person's body with a single touch. " +
      PURIF_FRAME +
      " Benefit: You can spend two weekly uses of remove disease to produce a neutralize poison effect.",
  }),
  F({
    id: "extra-remove-disease",
    name: "Extra Remove Disease",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability"],
    benefitSummary:
      "[General.] You can remove disease more frequently than normal. Benefit: Each time you take this feat, you can use your remove disease spell-like ability two more times per week than normal. Special: You can take this feat multiple times. Its effects stack.",
  }),
  F({
    id: "smite-carrier",
    name: "Smite Carrier",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability", "Smite evil ability"],
    benefitSummary:
      "[Purification.] You channel your purifying ability to strike down toxic creatures. " +
      PURIF_FRAME +
      " Benefit: You can spend a weekly use of remove disease to use your smite evil ability on any nongood creature that possesses a poisonous or infectious natural attack. If you accidentally smite a good, nonpoisonous, noninfectious creature, the smite has no effect but the ability is still used up.",
  }),
  F({
    id: "strengthened-resilience",
    name: "Strengthened Resilience",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability"],
    benefitSummary:
      "[Purification.] You and your allies become hardier and more resistant to disease. " +
      PURIF_FRAME +
      " Benefit: You can spend a weekly use of remove disease to grant yourself and two allies you touch a +4 sacred bonus on Fortitude saves made to resist diseases or poison. This applies to saves made to avoid becoming infected with a disease (natural or magical), to resist the effects of a disease, to fight off a disease, and to resist a poison's initial and secondary damage. This bonus lasts for 1 hour.",
  }),
  F({
    id: "wholesome-fare",
    name: "Wholesome Fare",
    source: SRC_PURIF,
    prerequisites: ["Ability to cast remove disease as a spell-like ability"],
    benefitSummary:
      "[Purification.] Your powers purify tainted food and drink. " +
      PURIF_FRAME +
      " Benefit: You can spend a weekly use of remove disease to gain the ability to cast purify food and drink as a spell-like ability up to five times in the next 24 hours. Any unused castings of purify food and drink expire after 24 hours.",
  }),
  F({
    id: "spell-graft",
    name: "Spell Graft",
    source: SRC_GRAFT,
    prerequisites: ["Knowledge (arcana) 8 ranks", "Craft Wondrous Item", "Ability to cast arcane spells without preparation"],
    benefitSummary:
      "[General.] Your special insight into arcane theory allows you to imbue a body part with the inherent power of one of your spells. Effect: You may, by sacrificing one of the spells you currently know, endow a body part with a magical ability similar to that of the spell you sacrificed. You may not regain the sacrificed spell even if you subsequently gain the ability to learn a new spell of that level; in a sense you still retain the chosen spell, but you simply use it in a different way. Treat the DC of any saving throw for this ability as equal to that of the spell you sacrificed. Using a spell graft requires a standard action; you may use the ability granted by a spell graft once per day per 4 character levels. Special: You may take this feat multiple times; each time you must sacrifice a different spell and endow a different body part with a power. (The column's four sample grafts — After Images, Cinder Fists, Cobra's Hood, and Red Eye — are options taken through this feat and are digested in the pack's reference.md.)",
  }),
];
