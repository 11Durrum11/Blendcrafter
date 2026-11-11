// Dragon Magazine #343 (May 2006) — feat draft: 24 records.
// * FIVE general feats — "Take Cover!: Surviving D&D's Masters of
//   Movement" (Hal Maclean), "New Feats" block, p. 32: Defensive
//   Climber, Master Swimmer, Quiet Feet, Suppress Presence, Touched by
//   Ether. The program survey's TOC window missed this feature entirely.
// * ONE feat — "Spellcraft: The Magic of Kyuss" (Jesse Decker), p. 76:
//   Wormbound Spellcaster, the gate feat for the issue's Kyuss spells
//   and vestige-worm magic items.
// * ONE feat — "Class Acts: Magic in the Blood" (Jeremy Hogg),
//   pp. 87-88: Divine Sorcery. Its deity/domain table digests in
//   reference.md.
// * EIGHT feats — "Class Acts: Pious Extension" (Tim Hitchcock),
//   pp. 89-90: the column prints ten feats; two of them (Elemental
//   Strike, Turn Elemental) are keyed exclusively to the shugenja, an
//   Oriental Adventures class, and are HELD to reference.md under the
//   standing oriental ruling — see SCREENING.md.
// * NINE general feats — "Class Acts: The Tide of Battle" (C. Wesley
//   Clough), pp. 91-92, a fighter column; Quick Cleave's and Ricochet's
//   fighter-bonus-feat status is corroborated by the realmshelps fighter
//   feat index.
// The FeatCategory union carries the printed tags in the benefit text
// where the union has no matching value ([Divine], [Wild]), per house
// practice.
// VERIFICATION BASIS: two independent archive.org OCR streams of the
// issue (the DragonMagazine260_201801 djvu text and the
// dragon-magazine [ocr] PDF text) agree on the feat block of p. 32,
// including Defensive Climber's -10 penalty and its second benefit
// (no Climb check when damaged while climbing). Crystalkeep's 3.5 feat
// index corroborates Suppress Presence. No rendered page image was
// consulted in this session; see MANIFEST.md for the OCR-risk list.

import type { FeatDefinition } from "@/engine/types";

const SRC_COVER = "Dragon Magazine #343 — Take Cover! (Hal Maclean), p. 32";
const SRC_SPELLCRAFT = "Dragon Magazine #343 — Spellcraft: The Magic of Kyuss (Jesse Decker), p. 76";
const SRC_BLOOD = "Dragon Magazine #343 — Class Acts: Magic in the Blood (Jeremy Hogg), pp. 87-88";
const SRC_PIOUS = "Dragon Magazine #343 — Class Acts: Pious Extension (Tim Hitchcock), pp. 89-90";
const SRC_TIDE = "Dragon Magazine #343 — Class Acts: The Tide of Battle (C. Wesley Clough), pp. 91-92";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_COVER,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_343_FEATS: FeatDefinition[] = [
  // ---- Take Cover!: New Feats (5) ----
  F({
    id: "defensive-climber",
    name: "Defensive Climber",
    prerequisites: ["Dex 15", "Athletic"],
    benefitSummary:
      "[General.] You can climb without dropping your guard. Benefit: You can move freely enough to avoid some blows while climbing. By accepting a -10 penalty on your Climb check, you can retain your Dexterity bonus to AC while climbing. In addition, you do not need to make a Climb check when you take damage while climbing. Normal: When climbing you lose your Dexterity bonus to AC unless you take a -20 penalty on the check (see page 97 of Complete Adventurer), and you must make a Climb check every time you take damage.",
  }),
  F({
    id: "master-swimmer",
    name: "Master Swimmer",
    prerequisites: ["Str 15", "Athletic"],
    benefitSummary:
      "[General.] You can swim while heavily laden with a reduced risk of drowning. Benefit: When using the Swim skill while wearing armor, you only take the normal armor check penalty and encumbrance penalty on your Swim check (see pages 123 and 162 of the Player's Handbook). Normal: Swim checks are subject to double the normal armor check penalty and encumbrance penalty.",
  }),
  F({
    id: "quiet-feet",
    name: "Quiet Feet",
    prerequisites: ["Dex 15", "Stealthy"],
    benefitSummary:
      "[General.] You can move in such a way as to avoid making vibrations. Benefit: You can avoid detection by creatures with tremorsense. As long as you move at no more than one-half of your normal movement speed, you cannot be detected by tremorsense; you move so deliberately that for the purposes of that ability you are not considered to be in contact with the ground. This feat does not benefit you when attempting to avoid tremorsense underwater. If you make an attack while using this feat, you can be detected as normal. Normal: Creatures with tremorsense can detect any creature in contact with the ground.",
  }),
  F({
    id: "suppress-presence",
    name: "Suppress Presence",
    prerequisites: ["Dex 15", "Stealthy"],
    benefitSummary:
      "[General.] You can lessen the outward signs of your existence. Benefit: You can avoid detection by creatures with blindsense. By using the Hide skill, you can avoid the notice of creatures with blindsense: such a creature must make a Spot or Listen check (as proves appropriate to the creature) to detect you while you are hiding within range of its blindsense, just as it would if it were sighted or didn't have this ability. You still require cover to disguise your presence and hide from such creatures. A creature with other means of perceiving you can still use them to detect you as normal. Normal: Creatures with blindsense do not need to make Spot or Listen checks to detect creatures.",
  }),
  F({
    id: "touched-by-ether",
    name: "Touched by Ether",
    prerequisites: ["Cha 13"],
    benefitSummary:
      "[General.] You are connected to the intangible threads of existence that lie beyond the Material Plane. Benefit: Something about you makes it difficult for incorporeal creatures to see you clearly. When on the Material Plane, you have concealment from incorporeal creatures (20% miss chance). See invisibility does not counteract this effect, but true seeing does. An incorporeal creature that cannot see you ignores this effect (although fighting an unseen opponent carries penalties of its own; see page 151 of the Player's Handbook). This feat has no effect on corporeal or ethereal creatures.",
  }),

  // ---- Spellcraft: The Magic of Kyuss (1) ----
  F({
    id: "wormbound-spellcaster",
    name: "Wormbound Spellcaster",
    source: SRC_SPELLCRAFT,
    prerequisites: ["Living creature", "Must host a living Kyuss worm"],
    benefitSummary:
      "[General.] You bind a living Kyuss worm to your body and gain the worm-god's spells. Benefit: You perform a 4-hour ritual using rare unguents and materials worth 500 gp to bind a hosted Kyuss worm to yourself; at the ritual's end you must succeed at a DC 15 Fortitude save or die (rising as a spawn of Kyuss in 1d6+4 rounds). On a success you gain access to the spells of Kyuss, adding them to your spell list: path of worms (2nd level), consume the parasite and the worm within (3rd level), mindworms (4th level), servant of the green corruption (5th level), and extrude wormswarm (7th level). The bond can be removed only by a dispel evil, heal, remove curse, or remove disease spell cast within a hallowed area, or by means of the consume the parasite spell. Special: If you die while hosting a worm, you rise as a spawn of Kyuss 1d6+4 rounds after death, under the DM's control. (The feat's printed bracket tag was not legible in the OCR stream; it is presented among the article's general feats and stages as [General] — see SCREENING.md.)",
  }),

  // ---- Class Acts: Magic in the Blood (1) ----
  F({
    id: "divine-sorcery",
    name: "Divine Sorcery",
    source: SRC_BLOOD,
    prerequisites: ["Sorcerer level 1st", "Alignment within one step of patron deity"],
    benefitSummary:
      "[General.] Your sorcerous blood carries a spark of your patron deity's domain. Benefit: Choose a patron deity whose alignment is within one step of your own, and one of that deity's domains offered to your race and alignment (see the article's deity/domain table, digested in the pack's reference.md). You gain the domain's granted power, and you add one of the domain's spells to your sorcerer spell list, which you may cast once per day as an arcane spell. Special: This feat may only be taken when you take your first level of sorcerer.",
  }),

  // ---- Class Acts: Pious Extension (8 of 10; 2 held — see SCREENING.md) ----
  F({
    id: "deflect-energy",
    name: "Deflect Energy",
    source: SRC_PIOUS,
    prerequisites: ["Energy resistance class ability"],
    benefitSummary:
      "[General.] You can turn the energy you resist back upon your attacker. Benefit: When an attack deals energy damage of a type to which you have resistance from a class ability, you may, as an immediate action, forfeit your saving throw against the effect and deflect part of the energy back at the attacker: the attacker takes damage equal to your energy resistance plus your divine caster level plus your Charisma modifier, of the same energy type. Any damage beyond that amount is dealt to you normally. This feat does not work against area effects.",
  }),
  F({
    id: "energy-strike",
    name: "Energy Strike",
    source: SRC_PIOUS,
    prerequisites: ["Energy resistance class ability"],
    benefitSummary:
      "[General.] You can release the energy you resist as a weapon. Benefit: Each day you have a pool of energy dice equal to 1d6 per two divine caster levels, of an energy type to which you have resistance from a class ability. As a standard action, you can fire a ray (ranged touch attack, range 30 feet) that deals any number of the remaining dice as damage of that energy type, minimum 1d6.",
  }),
  F({
    id: "extended-spirit-form",
    name: "Extended Spirit Form",
    source: SRC_PIOUS,
    prerequisites: ["Chastise spirits class ability", "Spirit form class ability"],
    benefitSummary:
      "[General.] Your spirit form endures. Benefit: You may spend one use of your chastise spirits ability to extend the duration of your spirit form by a number of minutes equal to 1 + your Charisma modifier (minimum 1 minute).",
  }),
  F({
    id: "extra-divine-power",
    name: "Extra Divine Power",
    source: SRC_PIOUS,
    prerequisites: ["Divinely granted class ability with a set number of daily uses"],
    benefitSummary:
      "[General.] Your divine gifts come more readily. Benefit: Choose one divinely granted class ability that you can use a set number of times per day (for example, a spirit shaman's chastise spirits); you can use the chosen ability two additional times per day. Special: You can take this feat multiple times; each time it applies to a different class ability, and its effects do not stack. (The printed examples also include the shugenja's ward against spirits; the shugenja is an Oriental Adventures class and does not stage in APOC — see SCREENING.md.)",
  }),
  F({
    id: "imbue-weapon",
    name: "Imbue Weapon",
    category: "general",
    source: SRC_PIOUS,
    prerequisites: ["Extra Turning", "Turn or rebuke undead class ability"],
    benefitSummary:
      "[Divine.] You channel divine power through your weapon against a chosen foe. Benefit: As a standard action, designate one opponent; you gain a bonus on attack and damage rolls against that opponent equal to +1 per four cleric levels you possess. The benefit lasts a number of rounds equal to the bonus granted.",
  }),
  F({
    id: "natures-fists",
    name: "Nature's Fists",
    category: "general",
    source: SRC_PIOUS,
    prerequisites: ["Wild shape (elemental) class ability"],
    benefitSummary:
      "[Wild.] Your limbs take on the stuff of the elements. Benefit: Spend one use of wild shape to encase your limbs in an element of your choice (air, earth, fire, or water) for 1 minute. You gain a slam attack dealing 1d4 points of damage (1d3 for a Small creature) plus an effect by element: air — +1d4 sonic damage, and the target must succeed at a Fortitude save (DC 10 + one-half your druid level + your Charisma modifier) or be deafened for 1d4 rounds; earth — +1d4 acid damage, and the slam ignores hardness; fire — +1d4 fire damage, and the target may catch fire (see page 303 of the Dungeon Master's Guide); water — +1d4 cold damage, and the target must succeed at a Fortitude save (same DC) or be fatigued for a number of minutes (read as 1d4 minutes; the duration figure is garbled in the OCR stream — see MANIFEST.md). Your limbs count as magic weapons for defeating damage reduction, and the miss chance for incorporeal creatures, while encased; you cannot use your hands for other purposes while the effect lasts. These bonuses also apply to your unarmed strikes and natural attacks.",
  }),
  F({
    id: "photosynthesize",
    name: "Photosynthesize",
    category: "general",
    source: SRC_PIOUS,
    prerequisites: ["Wild shape (plant) class ability"],
    benefitSummary:
      "[Wild.] You draw sustenance from the sun like a plant. Benefit: Spend one use of wild shape; for 24 hours, every 4 hours you spend in natural sunlight counts as consuming one meal's worth of sustenance, you gain a +10 inherent bonus on Fortitude saves against the effects of thirst, and you are immune to suffocation. APOC: natural sunlight does not occur under APOC's always-grey sky — staged as printed and flagged in SCREENING.md.",
  }),
  F({
    id: "spirit-spell",
    name: "Spirit Spell",
    source: SRC_PIOUS,
    prerequisites: ["Chastise spirits class ability"],
    benefitSummary:
      "[General.] You pour spirit energy into your spellcasting. Benefit: As a standard action, spend four uses of your chastise spirits ability to surround yourself with an aura that maximizes every spell you cast in the following round, at no increase in the spell's level or casting time (as the Maximize Spell feat).",
  }),

  // ---- Class Acts: The Tide of Battle (9) ----
  F({
    id: "aid-giver",
    name: "Aid Giver",
    source: SRC_TIDE,
    prerequisites: ["Combat Expertise", "Dodge", "Power Attack"],
    benefitSummary:
      "[General.] You shield and support every ally at your side at once. Benefit: As a full-round action, you may use the aid another action for every ally adjacent to you, granting each a +2 bonus on attack rolls or a +2 bonus to AC (your choice per ally, as the aid another action).",
  }),
  F({
    id: "battle-hardened-343",
    name: "Battle Hardened",
    source: SRC_TIDE,
    prerequisites: ["Base attack bonus +4"],
    benefitSummary:
      "[General.] Being surrounded only steadies you. Benefit: You gain a +1 circumstance bonus to AC whenever you are adjacent to two or more opponents who threaten you.",
  }),
  F({
    id: "dedicated-nuisance",
    name: "Dedicated Nuisance",
    source: SRC_TIDE,
    prerequisites: ["Int 13", "Combat Expertise", "Base attack bonus +4"],
    benefitSummary:
      "[General.] Your harassment leaves your foe open to everyone else. Benefit: Make a melee touch attack against an opponent. Until just before your next turn, all creatures adjacent to that opponent other than you count as flanking it. This is an extraordinary, mind-affecting effect; it cannot be used against creatures immune to mind-affecting effects or against creatures that cannot be flanked.",
  }),
  F({
    id: "improved-whirlwind-attack",
    name: "Improved Whirlwind Attack",
    source: SRC_TIDE,
    prerequisites: ["Dex 13", "Int 13", "Combat Expertise", "Dodge", "Mobility", "Spring Attack", "Whirlwind Attack", "Base attack bonus +4"],
    benefitSummary:
      "[General.] Your whirlwind leaves openings for your full attack routine. Benefit: As part of a whirlwind attack (a full attack action), you may also make your iterative base attack bonus attacks at the end of the whirlwind, against targets of your choice. These additional attacks are not made against every opponent, as the whirlwind attacks themselves are.",
  }),
  F({
    id: "quick-cleave",
    name: "Quick Cleave",
    source: SRC_TIDE,
    prerequisites: ["Str 15", "Dex 13", "Cleave", "Power Attack"],
    benefitSummary:
      "[General.] Your follow-through blows land surer than most. Benefit: You gain a +2 circumstance bonus on the additional attacks granted by the Cleave or Great Cleave feats. Special: A fighter may select Quick Cleave as one of his fighter bonus feats. (The feat's printed header was lost in the OCR stream; the name is confirmed by its own Special line and by external feat indexes — see MANIFEST.md.)",
  }),
  F({
    id: "ricochet",
    name: "Ricochet",
    source: SRC_TIDE,
    prerequisites: ["Dex 19", "Blind-Fight", "Improved Precise Shot", "Point Blank Shot", "Precise Shot", "Base attack bonus +15"],
    benefitSummary:
      "[General.] Your thrown bludgeoning weapons bound from foe to foe. Benefit: Once per round, when you hit a creature with a thrown bludgeoning weapon, you may make an automatic second attack roll at a -5 penalty against a creature adjacent to the first target. The second attack deals half the weapon's damage plus one-half your Strength modifier. You cannot apply sneak attack damage to the second attack. Special: A fighter may select Ricochet as one of his fighter bonus feats.",
  }),
  F({
    id: "superior-flanking",
    name: "Superior Flanking",
    source: SRC_TIDE,
    prerequisites: ["Improved flanking class ability (see page 12 of Complete Warrior)"],
    benefitSummary:
      "[General.] Your mastery of the flank is unmatched. Benefit: You gain a +6 bonus on attack rolls against opponents you flank, and allies flanking with you gain a +3 bonus on their attack rolls against the same opponent. These bonuses do not stack with the normal flanking bonus or with the improved flanking class ability bonus.",
  }),
  F({
    id: "sweeping-trip",
    name: "Sweeping Trip",
    source: SRC_TIDE,
    prerequisites: ["Improved Trip"],
    benefitSummary:
      "[General.] One felled foe becomes the lever against the next. Benefit: When you successfully trip an opponent, you may forgo the immediate attack granted by the Improved Trip feat to instead make a free trip attempt against a creature adjacent to both you and the tripped opponent. This trip attempt does not provoke an attack of opportunity; if it fails, the target may react to trip you in return, as normal for a failed trip attempt. You may make only one such extra trip attempt per round.",
  }),
  F({
    id: "terrifying-warrior",
    name: "Terrifying Warrior",
    source: SRC_TIDE,
    prerequisites: ["Str 13", "Cleave", "Power Attack", "Base attack bonus +3"],
    benefitSummary:
      "[General.] Your slaughter unnerves those still standing. Benefit: If an additional attack granted by the Cleave feat reduces its target to 0 or fewer hit points, all other opponents within your reach must succeed at a Will save (DC 10 + one-half your level + your Charisma modifier) or become panicked for 1d4 rounds. Opponents with Hit Dice equal to or greater than yours are immune to this effect. This is an extraordinary, mind-affecting fear effect.",
  }),
];
