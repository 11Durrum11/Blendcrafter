// Dragon Magazine #339 (January 2006) — feat draft: 19 records.
// * TWO new epic feats — "Dragon Kings" (Chris Flipse and Jon
//   Sederquist), p. 25: Arcane Augmentation [Epic] and Metamixture
//   [Epic], both gated on the Athasian dragon's dragon magic class
//   feature (also on that class's bonus-feat list).
// * SIX ranger feats — "Class Acts: A Different Path" (Johnny O'Neal),
//   p. 87: Concealed Ambush, Disabling Strike, Extend Defense, Inspire
//   Beast, Mystic Companion, Pathfinder. None is printed with a type
//   tag; all stage as [General].
// * ELEVEN hexblade feats — "Class Acts: Hexblade Curses" (Luke
//   Fleeman), pp. 92-93: ten [Hex] feats (each grants or modifies an
//   alternative use of the hexblade's curse; unless otherwise noted, a
//   curse provided by a hex feat lasts 1 hour, as the normal curse, and
//   its effect scales across hexblade's curse / greater hexblade's curse
//   / dire hexblade's curse) plus Extra Curse [General].
// The FeatCategory union has no epic or hex value, so all records carry
// category "general" with the printed tag carried in the benefit text,
// per house practice.
// Every feat text was verified against rendered page images (magazine
// pp. 25, 87, 92-93); the image governs over the OCR stream.

import type { FeatDefinition } from "@/engine/types";

const SRC_EPIC = "Dragon Magazine #339 — Dragon Kings (Chris Flipse and Jon Sederquist), p. 25";
const SRC_RANGER = "Dragon Magazine #339 — Class Acts: A Different Path (Johnny O'Neal), p. 87";
const SRC_HEX = "Dragon Magazine #339 — Class Acts: Hexblade Curses (Luke Fleeman), pp. 92-93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_RANGER,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const HEX_FRAME =
  "Unless otherwise noted, the new curse ability provided by a hex feat has a duration of 1 hour, as with the normal hexblade's curse; taking a hex feat gives the hexblade greater flexibility, as he can choose to use his normal curse or the new curse granted by the hex feat, and the alternative curse affects its target differently depending on the curse's level (hexblade's curse, greater hexblade's curse, and dire hexblade's curse). ";

export const DRAGON_339_FEATS: FeatDefinition[] = [
  // ---- Dragon Kings: new epic feats (2) ----
  F({
    id: "arcane-augmentation",
    name: "Arcane Augmentation",
    source: SRC_EPIC,
    prerequisites: ["Dragon magic class feature"],
    benefitSummary:
      "[Epic.] You can spend spell slots to augment psionic powers. Benefit: You can spend an arcane spell slot to increase your manifester level limit for augmenting psionic powers during manifestation. Using Arcane Augmentation is a free action that does not provoke an attack of opportunity. Add the level of the spell slot spent to your manifester level for purposes of determining the maximum amount of power points you can spend while manifesting a single power. These additional power points may only be used to augment a psionic power, and may not be used to apply metapsionic feats.",
  }),
  F({
    id: "metamixture",
    name: "Metamixture",
    source: SRC_EPIC,
    prerequisites: ["Dragon magic class feature"],
    benefitSummary:
      "[Epic.] Choose a metapsionic feat; you can modify your spells with the chosen metapsionic feat. Benefit: You can apply the chosen metapsionic feat to spells in order to modify them as if using a metamagic feat of the same type (for example, you could use Maximize Power to maximize the variable numeric effects of a spell). Using Metamixture is a free action that does not provoke an attack of opportunity. You must spend power points as normal when using a metapsionic feat to boost a spell; treat the spell as a psionic power of equivalent level for the purpose of determining the power point cost, and you cannot spend more power points in this fashion than your manifester level. If a metapsionic feat has the same effect as a metamagic feat already applied to the spell, there is no additional effect. Special: This feat may be taken multiple times; each time, it applies to a different metapsionic feat. More than one metapsionic feat may be applied to a spell using Metamixture; you still cannot spend more power points than your manifester level when boosting a spell with multiple metapsionic feats applied this way.",
  }),

  // ---- Class Acts: A Different Path — ranger feats (6) ----
  F({
    id: "concealed-ambush",
    name: "Concealed Ambush",
    prerequisites: ["Hide 10 ranks", "Move Silently 10 ranks", "Point Blank Shot", "Precise Shot"],
    benefitSummary:
      "[General.] You can spring out of hiding to deliver deadly blows to unwitting foes. Benefit: You take a −10 penalty on your Hide check to conceal yourself after sniping (see page 76 of the Player's Handbook). Normal: You take a −20 penalty on your Hide check to conceal yourself after sniping.",
  }),
  F({
    id: "disabling-strike",
    name: "Disabling Strike",
    prerequisites: ["Favored enemy (any humanoid)"],
    benefitSummary:
      "[General.] Your blows have the possibility of stunning your opponents. Benefit: Whenever you successfully score a critical hit against a humanoid creature (of a subtype you have selected as a favored enemy), the humanoid is stunned for 1 round unless he succeeds at a Fortitude save (DC 15 + your favored enemy bonus against that creature).",
  }),
  F({
    id: "extend-defense",
    name: "Extend Defense",
    prerequisites: ["Combat Expertise"],
    benefitSummary:
      "[General.] You can protect an ally from attacks by placing yourself in harm's way. Benefit: As a standard action, you can grant an adjacent character a +2 cover bonus to his Armor Class. Any time your ally is struck, however, there is a 50% chance that the blow hits you instead. The bonus and chance of striking you lasts until the beginning of your next turn or the protected character moves more than 5 feet away from you.",
  }),
  F({
    id: "inspire-beast",
    name: "Inspire Beast",
    prerequisites: ["Handle Animal 6 ranks", "Ability to acquire an animal companion"],
    benefitSummary:
      "[General.] You can use spoken and nonverbal cues to direct your animal companion, increasing its combat prowess for short periods of time. Benefit: As a standard action you may make a DC 20 Handle Animal check to inspire your animal companion. Your animal companion must be within 30 feet of you, have line of effect, and be able to hear or see you. Success gives your companion a +3 morale bonus on attack and damage rolls for 1 round.",
  }),
  F({
    id: "mystic-companion",
    name: "Mystic Companion",
    prerequisites: ["Knowledge (nature) 9 ranks", "Ability to cast 1st-level divine spells", "Ability to acquire an animal companion"],
    benefitSummary:
      "[General.] You have a mystic link with your animal companion that enhances your spellcasting abilities. Benefit: Your caster level for ranger spells increases by 4 as long as you have an animal companion and it is within line of sight. This benefit cannot increase your caster level to higher than your ranger level; however, even if you can't benefit from the full bonus immediately, if you later gain more ranger levels, you might apply the rest of the bonus. If your animal companion dies or you dismiss it, you lose the benefits of this feat until you acquire a replacement companion. This feat does not affect your spells per day or spells known; it increases your caster level only, which helps you penetrate spell resistance and increases the duration and other effects of your spells.",
  }),
  F({
    id: "pathfinder",
    name: "Pathfinder",
    prerequisites: ["Knowledge (geography) 1 rank", "Survival 1 rank", "Track"],
    benefitSummary:
      "[General.] You possess exceptional direction sense. Benefit: You never become lost because of poor visibility or difficult terrain (see page 86 of the Dungeon Master's Guide). In addition, you may make a Survival check to reduce travel time through difficult terrain for you and one additional creature per 5 ranks you possess in Survival. A successful DC 20 check decreases how much terrain affects movement by 1/4 of your speed (to a maximum movement of 3/4 speed); a DC 30 check decreases how much terrain affects movement by 1/2 of your speed (to a maximum movement of full speed).",
  }),

  // ---- Class Acts: Hexblade Curses — hex feats (11) ----
  F({
    id: "curse-of-distraction",
    name: "Curse of Distraction",
    source: SRC_HEX,
    prerequisites: ["Any other hex feat", "Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse can distract your opponent, making spellcasting difficult for him. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, your victim must make a Concentration check in order to cast a spell. As a hexblade's curse the DC equals 15 + spell level; as a greater hexblade's curse the DC equals 20 + spell level; as a dire hexblade's curse the DC equals 25 + spell level.",
  }),
  F({
    id: "curse-of-failure",
    name: "Curse of Failure",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[Hex.] Choose a saving throw; your hexblade's curse reduces your victim's ability to succeed with those saves. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, you may choose to impose a −4 penalty on the saves of the chosen saving throw attempted by your victim. As a greater hexblade's curse the penalty increases to −6; as a dire hexblade's curse the penalty becomes −8.",
  }),
  F({
    id: "curse-of-ignorance",
    name: "Curse of Ignorance",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[Hex.] Choose two skills; your hexblade's curse can reduce your victim's ability to use those skills. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, you may choose to impose a −5 penalty on all skill checks of the chosen skills made by your victim. As a greater hexblade's curse the penalties increase to −10; as a dire hexblade's curse the penalties become −15.",
  }),
  F({
    id: "curse-of-paranoia",
    name: "Curse of Paranoia",
    source: SRC_HEX,
    prerequisites: ["Any other hex feat", "Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse causes your victim to become paranoid, forcing him to watch his back for enemies that don't exist. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, the bonus your allies receive due to flanking increases to +3 against your victim. As a greater hexblade's curse the bonus increases to +4; as a dire hexblade's curse the bonus increases to +6.",
  }),
  F({
    id: "curse-of-sloth",
    name: "Curse of Sloth",
    source: SRC_HEX,
    prerequisites: ["Any other hex feat", "Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse can slow your victim. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, you can choose to cut your victim's movement by one-quarter (round down); this affects all his forms of movement. As a greater hexblade's curse you cut his movement in half; as a dire hexblade's curse you cut his movement by 3/4 speed (minimum 5 feet).",
  }),
  F({
    id: "curse-of-the-stricken",
    name: "Curse of the Stricken",
    source: SRC_HEX,
    prerequisites: ["Any other two hex feats", "Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse hampers your enemy's armor. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, you can reduce the protective quality of your victim's armor: as a hexblade's curse the victim's armor bonus decreases by −2 (minimum +0 armor bonus); as a greater hexblade's curse the victim's armor bonus decreases by −4 (minimum +0 armor bonus); as a dire hexblade's curse the victim's armor bonus decreases by −6 (minimum +0 armor bonus).",
  }),
  F({
    id: "curse-of-the-softened-blade",
    name: "Curse of the Softened Blade",
    source: SRC_HEX,
    prerequisites: ["Any other two hex feats", "Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse hampers your enemy's weapons. " + HEX_FRAME + "Benefit: When using your hexblade's curse ability, you can reduce the potency of one of your victim's weapons: as a hexblade's curse the cursed weapon deals −2 points of damage (minimum 1 point of damage); as a greater hexblade's curse the weapon deals −4 points of damage (minimum 1 point of damage); as a dire hexblade's curse the weapon deals −6 points of damage (minimum 1 point of damage).",
  }),
  F({
    id: "empower-curse",
    name: "Empower Curse",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[Hex.] Your curses are more potent. Benefit: Your hexblade's curse bestows penalties 1 point greater than normal: thus, your hexblade's curse imposes −3 penalties instead of −2 penalties, your greater hexblade's curse imposes −5 penalties instead of −4 penalties, and your dire hexblade's curse imposes −7 penalties instead of −6 penalties.",
  }),
  F({
    id: "extend-curse",
    name: "Extend Curse",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[Hex.] Your hexblade's curse lasts significantly longer. Benefit: Your hexblade's curse lasts for one day. Normal: Your hexblade's curse lasts for 1 hour.",
  }),
  F({
    id: "extra-curse",
    name: "Extra Curse",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[General.] You can use your hexblade's curse more often. Benefit: You may use your hexblade's curse ability one extra time per day. Special: You may take this feat multiple times; its effects stack.",
  }),
  F({
    id: "foe-of-the-unlucky",
    name: "Foe of the Unlucky",
    source: SRC_HEX,
    prerequisites: ["Curse ability"],
    benefitSummary:
      "[Hex.] You may use your manipulation of bad luck to hamper your foes. Benefit: You may spend a daily use of your hexblade's curse ability to force an enemy who just confirmed a critical hit to reroll his confirmation roll; he must take the result of the second roll. You may not use this ability more than once per round.",
  }),
];
