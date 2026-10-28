/**
 * Magic Item Compendium specific armor and shields (Chapter 1,
pp. 16–24). Filed as equipment so an equipped suit feeds the
sheet's Armor Class: acBonus is the armor's total bonus including
its enhancement bonus, read from the entry text (e.g. a +1
breastplate records 6). The magic effects are summarized in the
notes, following the house convention.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { EquipmentItem } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_SPECIFIC_ARMOR: EquipmentItem[] = [
  {
    "id": "armor-of-the-fallen-leaves",
    "name": "Armor of the Fallen Leaves",
    "category": "armor",
    "cost": "17,350 gp",
    "weight": "15 lb.",
    "acBonus": 6,
    "notes": "This suit of armor functions as a +1 wild breastplate if you are neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil. Because it is nonmetallic, wearing this armor does not violate a druid's spiritual oaths, though it has the durability of steel. Relic Power: If you have established the proper divine connection, once per day you can cause the leaves of the armor to turn brown and scatter on the breeze. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "barricade-buckler",
    "name": "Barricade Buckler",
    "category": "shield",
    "cost": "4,165 gp",
    "weight": "5 lb.",
    "acBonus": 2,
    "notes": "By speaking the command word, you can transform this +1 buckler into a 5-foot-by-5foot vertical wall of force. The wall persists for 1 minute or until you speak a second command word to return the buckler to its normal condition. The wall of force ability functions three times per day.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bearskin-armor",
    "name": "Bearskin Armor",
    "category": "armor",
    "cost": "14,350 gp",
    "weight": "30 lb.",
    "acBonus": 6,
    "notes": "This +1 breastplate grants a +2 competence bonus on grapple checks. Once per day it can be activated for a +4 enhancement bonus to Constitution for 9 minutes; twice per day for the scent special quality for 5 rounds; and three times per day on command to sprout a pair of claws (1d6 damage each, reach extended by 5 ft.) for 5 rounds. Its special properties function normally while the wearer is in wild shape. (Aura: moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonrider-armor",
    "name": "Dragonrider Armor",
    "category": "armor",
    "cost": "18,300 gp",
    "weight": "50 lb.",
    "acBonus": 9,
    "notes": "This suit of +1 dragonhide full plate is made from cast-off scales rather than the hide of a slain dragon. While wearing it, you have resistance 10 against the form of energy associated with the breath weapon of the dragon that provided the scales (such as fire, in the case of red dragonrider armor). You also gain a +5 competence bonus on Ride checks you make while riding any creature of the dragon type.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "earthplate-armor",
    "name": "Earthplate Armor",
    "category": "armor",
    "cost": "41,650 gp",
    "weight": "70 lb.",
    "acBonus": 9,
    "notes": "A suit of earthplate armor functions as +1 full plate. Once per day while wearing this armor, you can activate a stoneskin effect, as the stoneskin spell. As long as this effect is active, you also gain tremorsense out to 5 feet (MM 316). Both effects last for 90 minutes or until the stoneskin effect absorbs 90 points of damage, whichever comes first.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "electric-eel-hide",
    "name": "Electric Eel Hide",
    "category": "armor",
    "cost": "14,165 gp",
    "weight": "25 lb.",
    "acBonus": 4,
    "notes": "This +1 buoyant slick hide armor is coated with a thin slime. When you activate it, it generates an electricity shield that lasts 5 rounds: any creature that strikes you with a natural weapon, unarmed attack, or nonreach manufactured weapon takes 1d6 points of electricity damage. This shield can be activated three times per day. While the electricity shield is active, you can make a melee touch attack to deal 5d6 points of electricity damage, or, if underwater, produce a lightning burst that deals 2d6 points of electricity damage to all other adjacent creatures; using either ability ends the electricity shield effect.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "exoskeleton-armor",
    "name": "Exoskeleton Armor",
    "category": "armor",
    "cost": "21,350 gp",
    "weight": "30 lb.",
    "acBonus": 6,
    "notes": "A suit of exoskeleton armor provides protection as a +1 breastplate and grants you damage reduction 5/bludgeoning while you wear it.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "foxhide-armor",
    "name": "Foxhide Armor",
    "category": "armor",
    "cost": "10,160 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "While wearing this suit of +1 leather, you gain a +2 competence bonus on Hide and Move Silently checks. In addition, the armor has three other special properties. Once per day, you can activate the armor to gain a +4 enhancement bonus to Intelligence for 9 minutes. Two times per day, you can activate the armor to gain the scent special quality (MM 314) for 5 rounds. Three times per day, you can activate the armor to gain the benefit of a pass without trace spell.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghoul-shell-armor",
    "name": "Ghoul Shell Armor",
    "category": "armor",
    "cost": "10,160 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "This suit of +1 leather allows you to make up to three touch attacks per day that replicate the ghoul touch spell (Fort DC 15 negates).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hawkfeather-armor",
    "name": "Hawkfeather Armor",
    "category": "armor",
    "cost": "12,175 gp",
    "weight": "20 lb.",
    "acBonus": 4,
    "notes": "While wearing this +1 studded leather armor, you gain a continuous +5 competence bonus on Spot checks. In addition, the armor has two other special abilities. Once per day, you can activate the armor to gain a +4 enhancement bonus to your Charisma for 9 minutes. Three times per day, you can cause the armor to sprout wings, allowing you to fly at a speed of 60 feet (good maneuverability) for 5 rounds.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "kyton-armor",
    "name": "Kyton Armor",
    "category": "armor",
    "cost": "13,100 gp",
    "weight": "12 lb.",
    "acBonus": 5,
    "notes": "This suit of armor functions as a +1 mithral shirt. When you activate it, one of the five dangling chains makes one melee attack (using your base attack bonus) against an adjacent creature of your choice. The chain deals 1d6 points of bludgeoning damage (no Str bonus on damage), and is treated as a magic weapon with an enhancement bonus equal to the armor's enhancement bonus to AC.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "millennial-chainmail",
    "name": "Millennial Chainmail",
    "category": "armor",
    "cost": "8,150 gp",
    "weight": "20 lb.",
    "acBonus": 7,
    "notes": "If you are chaotic good, chaotic neutral, or neutral good, millennial chainmail functions as +1 mithral chainmail while you wear it. It is considered light armor and has a maximum Dexterity bonus of +8, an armor check penalty of –2, and an arcane spell failure chance of 15%. Relic Power: If you have established the proper divine connection, a suit of millennial chainmail painlessly extends tiny green roots into your skin when you don it. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mithralmist-shirt",
    "name": "Mithralmist Shirt",
    "category": "armor",
    "cost": "3,400 gp",
    "weight": "10 lb.",
    "acBonus": 5,
    "notes": "Up to seven times per day, you can activate this +1 mithral shirt to fill your space with a billowing silver mist. This gleaming fog grants you concealment against attacks but does not interfere with your vision. The mist lasts for 1 minute per activation, and it remains in the space where you activated the effect (it doesn't move with you if you leave that space).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "overhead-shield",
    "name": "Overhead Shield",
    "category": "shield",
    "cost": "24,170 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "Once per day, you can raise this +1 heavy steel shield skyward and command a horizontal wall of force into existence. The wall of force has a 20-foot radius and hovers 5 feet above you, remaining above you as you move. It blocks all attacks from above, including catapult missiles and indirect fire (PH2 161). The wall of force lasts as long as you concentrate, up to a maximum of 10 rounds.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "owlfeather-armor",
    "name": "Owlfeather Armor",
    "category": "armor",
    "cost": "8,160 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "While wearing this +1 leather, you gain a +2 competence bonus on Listen and Move Silently checks. In addition, the armor has three other special abilities. Once per day, you can activate the armor to gain a +4 enhancement bonus to Wisdom for 9 minutes. Twice per day, you can activate the armor to gain a +5 competence bonus on Spot checks for 10 minutes; this effect functions only while in shadowy illumination.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "serpent-armor",
    "name": "Serpent Armor",
    "category": "armor",
    "cost": "12,160 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "This +1 leather provides you with a +1 resistance bonus on Reflex saving throws. While you wear it, you gain the benefit of the Combat Reflexes feat.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-mercy",
    "name": "Shield of Mercy",
    "category": "shield",
    "cost": "2,170 gp",
    "weight": "15 lb.",
    "acBonus": 3,
    "notes": "A shield of mercy functions as a +1 heavy steel shield and also allows you to channel your destructive power into healing. You can expend a smite attempt (such as from a paladin's smite evil class feature or the granted power of the Destruction domain) to heal a creature by touch. The touched creature is healed of a number of points of damage equal to the extra damage that you would have dealt with the smite attack.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-resolute",
    "name": "Shield of the Resolute",
    "category": "shield",
    "cost": "5,520 gp",
    "weight": "7 lb.",
    "acBonus": 3,
    "notes": "Despite its motley appearance, this shield is a bulwark of defense. It functions as a +1 light fortification heavy mithral shield, provided that you are lawful good, neutral good, or lawful neutral. Relic Power: If you have established the proper divine connection, the shield terrorizes enemies of the dwarves: every goblinoid and giant within 30 feet that gazes upon it must succeed on a DC 17 Will save or be shaken (if its Hit Dice are equal to or greater than yours) or frightened (if it has fewer Hit Dice than you) for 2 rounds; this effect functions like a gaze attack. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-severed-hand",
    "name": "Shield of the Severed Hand",
    "category": "shield",
    "cost": "4,657 gp",
    "weight": "10 lb.",
    "acBonus": 4,
    "notes": "This gory item is favored by orcs for its shock value to enemies, as well as for its special properties. A shield of the severed hand functions as a +2 heavy wooden shield if you are chaotic evil, chaotic neutral, or neutral evil. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 22",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tigerskin-armor",
    "name": "Tigerskin Armor",
    "category": "armor",
    "cost": "17,100 gp",
    "weight": "25 lb.",
    "acBonus": 5,
    "notes": "While wearing this +1 mithral shirt, you gain a +2 competence bonus on Climb, Hide, Jump, and Move Silently checks. In addition, the armor has three other special abilities. Once per day, you can activate the armor to gain a +4 enhancement bonus to Dexterity for 9 minutes. Two times per day, you can activate the armor to gain the scent special quality (MM 314) for 5 rounds.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 22",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vampire-hide-armor",
    "name": "Vampire Hide Armor",
    "category": "armor",
    "cost": "21,175 gp",
    "weight": "30 lb.",
    "acBonus": 4,
    "notes": "In addition to providing the protective qualities of +1 studded leather, a suit of vampire hide armor grants you damage reduction 5/silver or magic.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wight-armor",
    "name": "Wight Armor",
    "category": "armor",
    "cost": "14,175 gp",
    "weight": "20 lb.",
    "acBonus": 4,
    "notes": "When you activate this +1 shadow studded leather, it makes a single touched creature or yourself imperceptible to undead (as if affected by the hide from undead spell). That creature also gains darkvision out to 60 feet while so affected. This property functions three times per day, and the effect lasts for 1 hour.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wight-hide-shield",
    "name": "Wight Hide Shield",
    "category": "shield",
    "cost": "9,159 gp",
    "weight": "6 lb.",
    "acBonus": 2,
    "notes": "A wight hide shield functions as a +1 light steel shield. When you use a shield bash attack with a wight hide shield to deal damage to a living creature, the target must succeed on a DC 14 Fortitude save or gain one negative level (see PH 125 for rules on shield bash attacks). A wight hide shield can bestow no more than three negative levels per day.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wrapped-tower",
    "name": "Wrapped Tower",
    "category": "shield",
    "cost": "6,180 gp",
    "weight": "45 lb.",
    "acBonus": 5,
    "notes": "Once per day while using this +1 tower shield to gain total cover (PH 125), you can activate its special property. At your command, the mere sight of the shield's mummylike facade requires each viewer in front of it to succeed on a DC 16 Will save or be paralyzed with fear for 1d4 rounds.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "zombie-hide-armor",
    "name": "Zombie Hide Armor",
    "category": "armor",
    "cost": "16,165 gp",
    "weight": "25 lb.",
    "acBonus": 4,
    "notes": "This suit of +1 hide grants you damage reduction 5/slashing. Though the armor sports various holes and rents, these imperfections in no way compromise its integrity.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
