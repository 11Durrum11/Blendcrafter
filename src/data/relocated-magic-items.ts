import type { MagicItemDefinition } from "@/engine/types";

/**
 * Specific magic items relocated out of the equipment packs
 * (Shaun, 2026-11-03: "Put all the magic items that are in the
 * equipment section in the proper spaces in the magic item
 * section"). These records were extracted into equipment
 * collections during the book sweeps — specific magic weapons,
 * armor, and shields whose own text gives them enhancement
 * bonuses and item powers ("This +1 ...", "functions as a +1
 * ...", command words, per-day activations) — plus one airship
 * component whose text calls itself "a magical map".
 * src/data/index.ts filters every id in
 * RELOCATED_MAGIC_ITEM_IDS out of ALL_EQUIPMENT and places
 * this list first in ALL_MAGIC_ITEMS, so each item exists
 * exactly once, in its proper magic section.
 *
 * Most of them (70 of 74) turned out to exist in BOTH barrels
 * all along — parallel extractions of the same books — so the
 * relocation also de-duplicated them. Where both copies exist,
 * the fuller text won: this file carries the ones whose
 * equipment extraction was more complete (with the magic
 * record's name spelling and section), plus the 4 that
 * existed only as equipment; the rest keep their existing
 * magic records. Conversion is mechanical: summary is the
 * record's notes verbatim, with the printed weight and (for
 * armor and shields) the total armor bonus the equipment
 * record carried appended as their own sentences — the same
 * text-first convention the other specific magic armors in
 * this barrel already use.
 *
 * Left in equipment on purpose: special materials, nonmagical
 * templates, alchemical items, steam armor rigs and other gear
 * that merely mentions magic, and the borderline Holy Staff /
 * Arcane Flux Detector, which their own books file as
 * equipment.
 */
export const RELOCATED_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    "id": "armor-of-the-fallen-leaves",
    "name": "Armor of the Fallen Leaves",
    "category": "armor",
    "cost": "17,350 gp",
    "summary": "This suit of armor functions as a +1 wild breastplate if you are neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil. Because it is nonmetallic, wearing this armor does not violate a druid's spiritual oaths, though it has the durability of steel. Relic Power: If you have established the proper divine connection, once per day you can cause the leaves of the armor to turn brown and scatter on the breeze. Relic item; additional relic power with the proper divine connection (see text). Armor bonus: +6 total (base armor plus enhancement). Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "barricade-buckler",
    "name": "Barricade Buckler",
    "category": "shield",
    "cost": "4,165 gp",
    "summary": "By speaking the command word, you can transform this +1 buckler into a 5-foot-by-5foot vertical wall of force. The wall persists for 1 minute or until you speak a second command word to return the buckler to its normal condition. The wall of force ability functions three times per day. Armor bonus: +2 total (base armor plus enhancement). Weight: 5 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bearskin-armor",
    "name": "Bearskin Armor",
    "category": "armor",
    "cost": "14,350 gp",
    "summary": "This +1 breastplate grants a +2 competence bonus on grapple checks. Once per day it can be activated for a +4 enhancement bonus to Constitution for 9 minutes; twice per day for the scent special quality for 5 rounds; and three times per day on command to sprout a pair of claws (1d6 damage each, reach extended by 5 ft.) for 5 rounds. Its special properties function normally while the wearer is in wild shape. (Aura: moderate transmutation; CL 9th.) Armor bonus: +6 total (base armor plus enhancement). Weight: 30 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 16",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "earthplate-armor",
    "name": "Earthplate Armor",
    "category": "armor",
    "cost": "41,650 gp",
    "summary": "A suit of earthplate armor functions as +1 full plate. Once per day while wearing this armor, you can activate a stoneskin effect, as the stoneskin spell. As long as this effect is active, you also gain tremorsense out to 5 feet (MM 316). Both effects last for 90 minutes or until the stoneskin effect absorbs 90 points of damage, whichever comes first. Armor bonus: +9 total (base armor plus enhancement). Weight: 70 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "electric-eel-hide",
    "name": "Electric Eel Hide",
    "category": "armor",
    "cost": "14,165 gp",
    "summary": "This +1 buoyant slick hide armor is coated with a thin slime. When you activate it, it generates an electricity shield that lasts 5 rounds: any creature that strikes you with a natural weapon, unarmed attack, or nonreach manufactured weapon takes 1d6 points of electricity damage. This shield can be activated three times per day. While the electricity shield is active, you can make a melee touch attack to deal 5d6 points of electricity damage, or, if underwater, produce a lightning burst that deals 2d6 points of electricity damage to all other adjacent creatures; using either ability ends the electricity shield effect. Armor bonus: +4 total (base armor plus enhancement). Weight: 25 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hawkfeather-armor",
    "name": "Hawkfeather Armor",
    "category": "armor",
    "cost": "12,175 gp",
    "summary": "While wearing this +1 studded leather armor, you gain a continuous +5 competence bonus on Spot checks. In addition, the armor has two other special abilities. Once per day, you can activate the armor to gain a +4 enhancement bonus to your Charisma for 9 minutes. Three times per day, you can cause the armor to sprout wings, allowing you to fly at a speed of 60 feet (good maneuverability) for 5 rounds. Armor bonus: +4 total (base armor plus enhancement). Weight: 20 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "kyton-armor",
    "name": "Kyton Armor",
    "category": "armor",
    "cost": "13,100 gp",
    "summary": "This suit of armor functions as a +1 mithral shirt. When you activate it, one of the five dangling chains makes one melee attack (using your base attack bonus) against an adjacent creature of your choice. The chain deals 1d6 points of bludgeoning damage (no Str bonus on damage), and is treated as a magic weapon with an enhancement bonus equal to the armor's enhancement bonus to AC. Armor bonus: +5 total (base armor plus enhancement). Weight: 12 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 19",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "millennial-chainmail",
    "name": "Millennial Chainmail",
    "category": "armor",
    "cost": "8,150 gp",
    "summary": "If you are chaotic good, chaotic neutral, or neutral good, millennial chainmail functions as +1 mithral chainmail while you wear it. It is considered light armor and has a maximum Dexterity bonus of +8, an armor check penalty of –2, and an arcane spell failure chance of 15%. Relic Power: If you have established the proper divine connection, a suit of millennial chainmail painlessly extends tiny green roots into your skin when you don it. Relic item; additional relic power with the proper divine connection (see text). Armor bonus: +7 total (base armor plus enhancement). Weight: 20 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mithralmist-shirt",
    "name": "Mithralmist Shirt",
    "category": "armor",
    "cost": "3,400 gp",
    "summary": "Up to seven times per day, you can activate this +1 mithral shirt to fill your space with a billowing silver mist. This gleaming fog grants you concealment against attacks but does not interfere with your vision. The mist lasts for 1 minute per activation, and it remains in the space where you activated the effect (it doesn't move with you if you leave that space). Armor bonus: +5 total (base armor plus enhancement). Weight: 10 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "overhead-shield",
    "name": "Overhead Shield",
    "category": "shield",
    "cost": "24,170 gp",
    "summary": "Once per day, you can raise this +1 heavy steel shield skyward and command a horizontal wall of force into existence. The wall of force has a 20-foot radius and hovers 5 feet above you, remaining above you as you move. It blocks all attacks from above, including catapult missiles and indirect fire (PH2 161). The wall of force lasts as long as you concentrate, up to a maximum of 10 rounds. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "serpent-armor",
    "name": "Serpent Armor",
    "category": "armor",
    "cost": "12,160 gp",
    "summary": "This +1 leather provides you with a +1 resistance bonus on Reflex saving throws. While you wear it, you gain the benefit of the Combat Reflexes feat. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 20",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-mercy",
    "name": "Shield of Mercy",
    "category": "shield",
    "cost": "2,170 gp",
    "summary": "A shield of mercy functions as a +1 heavy steel shield and also allows you to channel your destructive power into healing. You can expend a smite attempt (such as from a paladin's smite evil class feature or the granted power of the Destruction domain) to heal a creature by touch. The touched creature is healed of a number of points of damage equal to the extra damage that you would have dealt with the smite attack. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-resolute",
    "name": "Shield of the Resolute",
    "category": "shield",
    "cost": "5,520 gp",
    "summary": "Despite its motley appearance, this shield is a bulwark of defense. It functions as a +1 light fortification heavy mithral shield, provided that you are lawful good, neutral good, or lawful neutral. Relic Power: If you have established the proper divine connection, the shield terrorizes enemies of the dwarves: every goblinoid and giant within 30 feet that gazes upon it must succeed on a DC 17 Will save or be shaken (if its Hit Dice are equal to or greater than yours) or frightened (if it has fewer Hit Dice than you) for 2 rounds; this effect functions like a gaze attack. Relic item; additional relic power with the proper divine connection (see text). Armor bonus: +3 total (base armor plus enhancement). Weight: 7 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 21",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wight-armor",
    "name": "Wight Armor",
    "category": "armor",
    "cost": "14,175 gp",
    "summary": "When you activate this +1 shadow studded leather, it makes a single touched creature or yourself imperceptible to undead (as if affected by the hide from undead spell). That creature also gains darkvision out to 60 feet while so affected. This property functions three times per day, and the effect lasts for 1 hour. Armor bonus: +4 total (base armor plus enhancement). Weight: 20 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wight-hide-shield",
    "name": "Wight Hide Shield",
    "category": "shield",
    "cost": "9,159 gp",
    "summary": "A wight hide shield functions as a +1 light steel shield. When you use a shield bash attack with a wight hide shield to deal damage to a living creature, the target must succeed on a DC 14 Fortitude save or gain one negative level (see PH 125 for rules on shield bash attacks). A wight hide shield can bestow no more than three negative levels per day. Armor bonus: +2 total (base armor plus enhancement). Weight: 6 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wrapped-tower",
    "name": "Wrapped Tower",
    "category": "shield",
    "cost": "6,180 gp",
    "summary": "Once per day while using this +1 tower shield to gain total cover (PH 125), you can activate its special property. At your command, the mere sight of the shield's mummylike facade requires each viewer in front of it to succeed on a DC 16 Will save or be paralyzed with fear for 1d4 rounds. Armor bonus: +5 total (base armor plus enhancement). Weight: 45 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "assassin-whip",
    "name": "Assassin Whip",
    "category": "weapon",
    "cost": "5,301 gp",
    "summary": "Twice per day, you can activate this +1 whip after successfully hitting a Medium or smaller target that is standing on the ground. Doing this causes tendrils of vegetation to spring forth from the ground, entangling the target and dealing 2d6 points of damage per round. This effect lasts for 3 rounds or until the affected creature escapes from the tendrils (a DC 20 Strength check or DC 20 Escape Artist check made as a full-round action). Weight: 1 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "axe-of-ancestral-virtue",
    "name": "Axe of Ancestral Virtue",
    "category": "weapon",
    "cost": "8,530 gp",
    "summary": "When you wield an axe of ancestral virtue, it functions as a +1 keen adamantine dwarven waraxe if you are lawful good, lawful neutral, or neutral good. Prized by the faithful of the Soul Forger, these weapons have long been used in the defense of dwarf holdings. Relic item; additional relic power with the proper divine connection (see text). Weight: 8 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "axe-of-the-sea-reavers",
    "name": "Axe of the Sea Reavers",
    "category": "weapon",
    "cost": "10,320 gp",
    "summary": "This +1 greataxe lets its wielder float atop water regardless of weight, continuously. Once per day the wielder can utter a war cry that grants the wielder and all allies within 15 ft. a +2 morale bonus on attack rolls, weapon damage, saves, skill checks, and ability checks for 1 round; once per day a second command word panics all enemies within 15 ft. for 1 round (Will DC 16 negates). (Aura: moderate necromancy; CL 7th.) Weight: 12 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bow-of-songs",
    "name": "Bow of Songs",
    "category": "weapon",
    "cost": "12,330 gp",
    "summary": "This +1 shortbow blends music with every shot to deadly effect. On your turn, you can expend one daily use of your bardic music ability to gain a bonus equal to your Charisma bonus on the next attack roll and (if your attack hits) on the corresponding damage roll that you make with the bow. Weight: 2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bow-of-the-wintermoon",
    "name": "Bow of the Wintermoon",
    "category": "weapon",
    "cost": "3,400 gp",
    "summary": "When you wield this bow, it functions as a +1 composite longbow if you are chaotic good, neutral good, or chaotic neutral. It adjusts its pull automatically, allowing you to add your full Strength bonus to your damage roll with each arrow fired. Relic Power: If you have established the proper divine connection, this bow gains the frost and drow bane weapon properties (DMG 224). Relic item; additional relic power with the proper divine connection (see text). Weight: 3 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bowstaff",
    "name": "Bowstaff",
    "category": "weapon",
    "cost": "4,600 gp",
    "summary": "By activating a bowstaff, you can change this +1/masterwork quarterstaff into a +1 longbow or back again. Each version performs like a regular magic weapon of its kind. Weight: 4 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chain-of-obeisance",
    "name": "Chain of Obeisance",
    "category": "weapon",
    "cost": "20,400 gp",
    "summary": "Followers of Hextor prize these grisly weapons for keeping their prisoners subdued. A chain of obeisance functions as a +1 unholy spiked chain if you are lawful evil, neutral evil, or lawful neutral. Relic Power: Despite its size and apparent unwieldiness, if you have established the proper divine connection, you can wield this weapon in a grapple as if it were a light weapon. Relic item; additional relic power with the proper divine connection (see text). Weight: 12 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chromatic-rod",
    "name": "Chromatic Rod",
    "category": "weapon",
    "cost": "12,308 gp",
    "summary": "When you wield a chromatic rod, it functions as a +1 morningstar with the corrosive, frost, flaming, or shock property if you are chaotic evil, neutral evil, or chaotic neutral. You can select or change the property by speaking the command word, but it can have no more than one such property at a time. Relic Power: If you have established the proper divine connection, you can also use the chromatic rod's spell-like abilities, as given on the table below. Relic item; additional relic power with the proper divine connection (see text). Weight: 1 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-echoblade",
    "name": "Crystal Echoblade",
    "category": "weapon",
    "cost": "4,310 gp",
    "summary": "A crystal echoblade normally functions as a +1 longsword, but is enhanced by your musical ability. If you use your bardic music ability while wielding the weapon, the blade resonates in harmony, dealing additional sonic damage on each attack equal to half your bard level. Weight: 4 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cudgel-that-never-forgets",
    "name": "Cudgel That Never Forgets",
    "category": "weapon",
    "cost": "20,312 gp",
    "summary": "This +1 axiomatic heavy mace functions so only for lawful neutral, lawful good, or neutral wielders. Relic power (worship St. Cuthbert; sacrifice a 5th-level divine spell slot or True Believer feat and 9 HD): the cudgel reveals intelligence and sentience (Int 16, Wis 10, Cha 16; speech, darkvision 60 ft.) and can produce cure moderate wounds three times per day; sacrificing a 7th-level slot (or True Believer and 13 HD) makes it remember foes who struck you, gaining +2 higher enhancement bonus and +2d6 damage against them thereafter. Its imprecations in combat count as Intimidate attempts to demoralize. (Aura: strong conjuration; CL 20th.) Weight: 8 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-denial",
    "name": "Dagger of Denial",
    "category": "weapon",
    "cost": "20,302 gp",
    "summary": "When you wield this weapon, it functions as a +1 unholy dagger. Unlike most relics, a dagger of denial functions for a wielder of any alignment, and it retains its sentience and basic relic powers even if you don't establish the proper divine connection, though it will not reveal its intelligence to you or use any relic powers on your behalf. Relic item; additional relic power with the proper divine connection (see text). Weight: 1 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dawnstar",
    "name": "Dawnstar",
    "category": "weapon",
    "cost": "9,308 gp",
    "summary": "Created to help bring the light of goodness into places of the darkest evil, a dawnstar is a favorite of Pelor's clergy. When you wield a dawnstar, it functions as a +2 morningstar if you are lawful good, neutral good, chaotic good, or neutral. Relic Power: If you have established the proper divine connection, a dawnstar gains the brilliant energy property (DMG 224). Relic item; additional relic power with the proper divine connection (see text). Weight: 2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "death-spike",
    "name": "Death Spike",
    "category": "weapon",
    "cost": "6,304 gp",
    "summary": "A death spike allows you to draw the life energy out of a dying target, granting you temporary vitality. It functions as a +1 cold iron spear, but whenever you reduce a living creature to –1 or fewer hit points on a melee attack with the spear, you can activate it to gain 1d8 temporary hit points and a +2 morale bonus on damage rolls. These benefits last for 1 hour; multiple uses of the spear don't stack. The spear can be activated three times per day. Weight: 6 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "explosive-sling",
    "name": "Explosive Sling",
    "category": "weapon",
    "cost": "36,300 gp",
    "summary": "This +1 sling imbues stones launched from it with an explosive charge. When you hit a target with a stone fired from an explosive sling, the stone explodes, dealing an extra 2d6 points of fire damage to the target (no save). In addition, each other creature within 10 feet of the target creature when the stone explodes is engulfed in flame from the burst of fire and takes 2d6 points of fire damage (Reflex DC 22 negates).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "forceful-skylance",
    "name": "Forceful Skylance",
    "category": "weapon",
    "cost": "8,310 gp",
    "summary": "Three times per day, you can command this +1 lance to produce a magic missile effect, firing three missiles with each use. These missiles can be aimed at up to three targets within 150 feet of you. Weight: 10 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hooked-hammer-of-the-hearthfire",
    "name": "Hooked Hammer of the Hearthfire",
    "category": "weapon",
    "cost": "5,120 gp",
    "summary": "These weapons were created to help the gnomes defend their holdings. While you wield a hooked hammer of the hearthfire, it functions as a +1/+1 gnome hooked hammer if you are neutral good, neutral, chaotic good, or lawful good. Relic Power: If you have established the proper divine connection, both ends of this weapon also have the flaming property (DMG 224). Relic item; additional relic power with the proper divine connection (see text). Weight: 6 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "meteoric-knife",
    "name": "Meteoric Knife",
    "category": "weapon",
    "cost": "2,802 gp",
    "summary": "This knife functions as a +1 dagger. In addition, a meteoric knife has three charges, which are renewed each day at dawn. Spending 1 or more charges enhances the dagger's magical properties as described below. The effects last for 1 round. 1 charge: The dagger gains the returning property. 2 charges: The dagger gains the flaming and returning properties. 3 charges: The dagger gains the flaming and returning properties (DMG 224–225). Weight: 1/2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-desperate-measures",
    "name": "Rapier of Desperate Measures",
    "category": "weapon",
    "cost": "9,320 gp",
    "summary": "Those who live by their wits often find themselves in situations over their heads. This rapier is an incomparable boon to those in such situations. When you wield a rapier of desperate measures, it functions as a +2 rapier if you are chaotic neutral, neutral, chaotic good, or chaotic evil. Relic item; additional relic power with the proper divine connection (see text). Weight: 2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-unerring-direction",
    "name": "Rapier of Unerring Direction",
    "category": "weapon",
    "cost": "9,320 gp",
    "summary": "This rapier functions as a +1 ghost touch rapier. Relic power (worship Fharlanghn; sacrifice a 5th-level divine spell slot or True Believer feat and 9 HD): the rapier automatically ignores all miss chances from concealment, blink, displacement, and similar effects. (Aura: strong divination; CL 20th.) Weight: 2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "raptor-arrow",
    "name": "Raptor Arrow",
    "category": "ammunition",
    "cost": "6,006 gp",
    "summary": "Raptor arrows harness the power of the falcon to skewer their prey. When you fire a raptor arrow, it functions as a +1 arrow with a variant of the returning quality if you are neutral good, lawful good, chaotic good, or neutral. At the beginning of the round after it is fired from a bow, a raptor arrow flies through the air and restrings itself on the bow from which it was fired. Unlike most ammunition, raptor arrows are not destroyed when used. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-celestial-might",
    "name": "Rod of Celestial Might",
    "category": "weapon",
    "cost": "38,600 gp",
    "summary": "Designed to battle the denizens of the Lower Planes, a rod of celestial might functions as a +1/+1 quarterstaff. Its abilities can be activated only by a non-evil character. A rod of celestial might has two abilities you can activate under specific circumstances. 1. After a successful attack with the rod against an evil outsider, you can trigger a holy smite effect centered on the target as an immediate (command) action. Weight: 5 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-enervating-strike",
    "name": "Rod of Enervating Strike",
    "category": "weapon",
    "cost": "18,312 gp",
    "summary": "Crafted from wood exposed to the Negative Energy Plane, a rod of enervating strike functions as a +1 heavy mace. In addition, when you successfully strike a creature with the rod in melee, the target is subjected to an inflict light wounds effect (1d8+5 damage; Will DC 11 half). If you score a critical hit with the rod, the creature is instead subjected to an inflict serious wounds effect (3d8+15 damage; Will DC 14 half). Weight: 8 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-recluse",
    "name": "Rod of the Recluse",
    "category": "weapon",
    "cost": "9,305 gp",
    "summary": "Rods of the recluse are usually found in the possession of Lolth's high priestesses. When you wield this rod, it functions as a +2 light mace if you are chaotic evil, neutral evil, or chaotic neutral. Relic Power: If you have established the proper divine connection, you can activate the rod to deliver poison (Fort DC 20, 2d6 Str/2d6 Str) with the next melee attack you make with it. Relic item; additional relic power with the proper divine connection (see text). Weight: 5 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ruby-blade",
    "name": "Ruby Blade",
    "category": "weapon",
    "cost": "20,302 gp",
    "summary": "This dagger functions as a +1 axiomatic dagger for lawful evil, lawful neutral, lawful good, or neutral wielders. Relic power (worship Wee Jas; sacrifice a 6th-level divine spell slot or True Believer feat and 11 HD): if you can rebuke undead, your effective level for bolstering, rebuking, or commanding undead is 4 higher (continuous), and once per day you can activate the blade to produce a status effect. (Aura: strong evocation; CL 20th.) Weight: 1 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spear-of-retribution",
    "name": "Spear of Retribution",
    "category": "weapon",
    "cost": "9,302 gp",
    "summary": "Spears of retribution are widely known as the instruments of Gruumsh's wrath. When you wield a spear of retribution, it functions as a +1 returning spear if you are chaotic evil, chaotic neutral, or neutral evil. Relic Power: If you have established the proper divine connection, you gain a +2 morale bonus on attack rolls and damage rolls made with a spear of retribution against any enemy that dealt damage to you in the previous round. Relic item; additional relic power with the proper divine connection (see text). Weight: 6 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sword-of-mighty-thews",
    "name": "Sword of Mighty Thews",
    "category": "weapon",
    "cost": "9,350 gp",
    "summary": "These swords were designed for dragonslayers of great strength. When you wield a sword of mighty thews, it functions as a +1 dragonbane greatsword, provided that you are chaotic good, neutral good, or chaotic neutral. Relic Power: If you have established the proper divine connection, you are immune to the frightful presence of dragons as long as you wield the sword. Relic item; additional relic power with the proper divine connection (see text). Weight: 8 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sword-of-virtue-beyond-reproach",
    "name": "Sword of Virtue Beyond Reproach",
    "category": "weapon",
    "cost": "9,315 gp",
    "summary": "A sword of virtue beyond reproach is designed to grant a measure of respite from charms and compulsions. When you wield this weapon, it functions as a +1 holy longsword if you are lawful good, neutral good, or lawful neutral. Relic Power: If you have established the proper divine connection and you fail a save against an enemy's charm or compulsion effect while wielding the sword, you are immune to its effects for 1d4 rounds (DM rolls secretly). Relic item; additional relic power with the proper divine connection (see text). Weight: 4 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "swordbow",
    "name": "Swordbow",
    "category": "weapon",
    "cost": "6,375 gp",
    "summary": "This +1 longbow changes into a +1 longsword (or vice versa) when activated. You can interchange bow and sword attacks as part of the same full attack action. In sword form, the weapon features a bowlike grip and a pommel that resembles the curving tip of a bow. In bow form, the weapon is made of metal, and each limb of the bow resembles a sword blade. In either form, a swordbow has the same enhancement bonus. Weight: 3 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "trident-of-serenity",
    "name": "Trident of Serenity",
    "category": "weapon",
    "cost": "5,315 gp",
    "summary": "When you activate this +1 trident, it creates a calm emotions effect centered on you (Will DC 16 negates). The effect lasts for 5 rounds and does not require concentration. Any creature that successfully saves against this effect is immune to further uses of that ability for 24 hours. This ability functions three times per day. Weight: 4 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spellflinging-spear",
    "name": "Spellflinging Spear",
    "category": "weapon",
    "cost": "21,300 gp",
    "summary": "A Small +1 returning spell storing spear of red copper and steel with a light steel shaft. Speaking Draconic command words as a swift action elongates it into a longspear, shortens it into a shortspear, or returns it to normal spear form; it always weighs as much as a spear (3 lb., hardness 12, 20 hp) regardless of shape. More powerful versions add the distance and/or gnome bane abilities (adding one increases the price by 14,000 gp; both, by 32,000 gp). (The item's entry prices it at 21,300 gp; Table 8-2 lists 21,302 gp — printed discrepancy, entry price used.) Weight: 3 lbs.",
    "source": "Races of the Dragon, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf",
    "ruleset": "core"
  },
  {
    "id": "bone-sword",
    "name": "Bone Sword",
    "category": "weapon",
    "cost": "18,310 gp",
    "summary": "Jagged bone blade made by clerics of Orcus; functions as a +1 ghost bane longsword (other versions exist as clubs and maces). Weight is the PHB longsword weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "chain-of-barriers",
    "name": "Chain of Barriers",
    "category": "weapon",
    "cost": "29,325 gp",
    "summary": "+1 spiked chain that, on a command word, expands to become a wall of chains; a second command word reverts it to weapon form. Weight: 15 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "reactive-map",
    "name": "Reactive Map",
    "category": "wondrous-slotless",
    "cost": "10,000 gp",
    "summary": "An airship navigation component: a magical map that reacts to the vessel's surroundings and grants a +2 bonus on navigation checks.",
    "source": "Airships (Bastion Press) — Sample Airships (component price in sample stat blocks)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const RELOCATED_MAGIC_ITEM_IDS: string[] = [
  "armor-of-the-fallen-leaves",
  "barricade-buckler",
  "bearskin-armor",
  "earthplate-armor",
  "electric-eel-hide",
  "hawkfeather-armor",
  "kyton-armor",
  "millennial-chainmail",
  "mithralmist-shirt",
  "overhead-shield",
  "owlfeather-armor",
  "serpent-armor",
  "shield-of-mercy",
  "shield-of-the-resolute",
  "shield-of-the-severed-hand",
  "tigerskin-armor",
  "wight-armor",
  "wight-hide-shield",
  "wrapped-tower",
  "zombie-hide-armor",
  "arrow-of-biting",
  "assassin-whip",
  "axe-of-ancestral-virtue",
  "axe-of-the-sea-reavers",
  "blazing-skylance",
  "bow-of-songs",
  "bow-of-the-wintermoon",
  "bowstaff",
  "chain-of-obeisance",
  "chromatic-rod",
  "crystal-echoblade",
  "cudgel-that-never-forgets",
  "dagger-of-defiance",
  "dagger-of-denial",
  "dawnstar",
  "death-spike",
  "explosive-sling",
  "forceful-skylance",
  "hooked-hammer-of-the-hearthfire",
  "lash-of-sands",
  "living-chain",
  "mace-of-the-dark-children",
  "manticore-greatsword",
  "meteoric-knife",
  "morningstar-of-the-many",
  "pick-of-piercing",
  "quarterstaff-of-battle",
  "rapier-of-desperate-measures",
  "rapier-of-unerring-direction",
  "raptor-arrow",
  "rod-of-cats",
  "rod-of-celestial-might",
  "rod-of-enervating-strike",
  "rod-of-freedom",
  "rod-of-the-recluse",
  "rogue-blade",
  "ruby-blade",
  "scourge-of-pain",
  "spear-of-retribution",
  "spider-fang",
  "staff-of-the-unyielding-oak",
  "stonereaver",
  "stunshot-sling",
  "sword-of-mighty-thews",
  "sword-of-virtue-beyond-reproach",
  "swordbow",
  "trident-of-serenity",
  "warlocks-scepter",
  "water-whip",
  "whip-of-webs",
  "spellflinging-spear",
  "bone-sword",
  "chain-of-barriers",
  "reactive-map"
];
