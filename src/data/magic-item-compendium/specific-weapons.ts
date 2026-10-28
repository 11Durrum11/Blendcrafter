/**
 * Magic Item Compendium specific weapons (Chapter 2, pp. 46–63),
including the chapter's weapon-like rods. Filed as equipment with
the printed weight; damage statistics and magic effects are
carried in the notes, following the house convention (the
equipment schema has no weapon-stat structure). Relic weapons
note their relic power in brief, as printed.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { EquipmentItem } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_SPECIFIC_WEAPONS: EquipmentItem[] = [
  {
    "id": "arrow-of-biting",
    "name": "Arrow of Biting",
    "category": "weapon",
    "cost": "506 gp",
    "weight": "—",
    "notes": "This +1 arrow injects any creature it strikes with poison (injury, Fort DC 16, 1d6 Con/1d6 Con). An arrow of biting can also be created as a crossbow bolt for the same price.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "assassin-whip",
    "name": "Assassin Whip",
    "category": "weapon",
    "cost": "5,301 gp",
    "weight": "1 lb.",
    "notes": "Twice per day, you can activate this +1 whip after successfully hitting a Medium or smaller target that is standing on the ground. Doing this causes tendrils of vegetation to spring forth from the ground, entangling the target and dealing 2d6 points of damage per round. This effect lasts for 3 rounds or until the affected creature escapes from the tendrils (a DC 20 Strength check or DC 20 Escape Artist check made as a full-round action).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "axe-of-ancestral-virtue",
    "name": "Axe of Ancestral Virtue",
    "category": "weapon",
    "cost": "8,530 gp",
    "weight": "8 lb.",
    "notes": "When you wield an axe of ancestral virtue, it functions as a +1 keen adamantine dwarven waraxe if you are lawful good, lawful neutral, or neutral good. Prized by the faithful of the Soul Forger, these weapons have long been used in the defense of dwarf holdings. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "axe-of-the-sea-reavers",
    "name": "Axe of the Sea Reavers",
    "category": "weapon",
    "cost": "10,320 gp",
    "weight": "12 lb.",
    "notes": "This +1 greataxe lets its wielder float atop water regardless of weight, continuously. Once per day the wielder can utter a war cry that grants the wielder and all allies within 15 ft. a +2 morale bonus on attack rolls, weapon damage, saves, skill checks, and ability checks for 1 round; once per day a second command word panics all enemies within 15 ft. for 1 round (Will DC 16 negates). (Aura: moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bladed-crossbow-mic",
    "name": "Bladed Crossbow",
    "category": "weapon",
    "cost": "4,660 gp",
    "weight": "12 lb.",
    "notes": "This crossbow has an exceptionally strong stock, which is shaped so that you can grip and swing it as a melee weapon. You can use a bladed crossbow as either a +1 heavy crossbow for ranged attacks, or as a +1 battleaxe for melee attacks.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blazing-skylance",
    "name": "Blazing Skylance",
    "category": "weapon",
    "cost": "8,310 gp",
    "weight": "10 lb.",
    "notes": "Three times per day, you can command this +1 lance to fire a 15-foot cone of searing flames from its tip, dealing 5d4 points of fire damage to targets within the cone's area (Reflex DC 13 half).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bow-of-songs",
    "name": "Bow of Songs",
    "category": "weapon",
    "cost": "12,330 gp",
    "weight": "2 lb.",
    "notes": "This +1 shortbow blends music with every shot to deadly effect. On your turn, you can expend one daily use of your bardic music ability to gain a bonus equal to your Charisma bonus on the next attack roll and (if your attack hits) on the corresponding damage roll that you make with the bow.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bow-of-the-wintermoon",
    "name": "Bow of the Wintermoon",
    "category": "weapon",
    "cost": "3,400 gp",
    "weight": "3 lb.",
    "notes": "When you wield this bow, it functions as a +1 composite longbow if you are chaotic good, neutral good, or chaotic neutral. It adjusts its pull automatically, allowing you to add your full Strength bonus to your damage roll with each arrow fired. Relic Power: If you have established the proper divine connection, this bow gains the frost and drow bane weapon properties (DMG 224). Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bowstaff",
    "name": "Bowstaff",
    "category": "weapon",
    "cost": "4,600 gp",
    "weight": "4 lb.",
    "notes": "By activating a bowstaff, you can change this +1/masterwork quarterstaff into a +1 longbow or back again. Each version performs like a regular magic weapon of its kind.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chain-of-obeisance",
    "name": "Chain of Obeisance",
    "category": "weapon",
    "cost": "20,400 gp",
    "weight": "12 lb.",
    "notes": "Followers of Hextor prize these grisly weapons for keeping their prisoners subdued. A chain of obeisance functions as a +1 unholy spiked chain if you are lawful evil, neutral evil, or lawful neutral. Relic Power: Despite its size and apparent unwieldiness, if you have established the proper divine connection, you can wield this weapon in a grapple as if it were a light weapon. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 48",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chromatic-rod",
    "name": "Chromatic Rod",
    "category": "weapon",
    "cost": "12,308 gp",
    "weight": "1 lb.",
    "notes": "When you wield a chromatic rod, it functions as a +1 morningstar with the corrosive, frost, flaming, or shock property if you are chaotic evil, neutral evil, or chaotic neutral. You can select or change the property by speaking the command word, but it can have no more than one such property at a time. Relic Power: If you have established the proper divine connection, you can also use the chromatic rod's spell-like abilities, as given on the table below. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-echoblade",
    "name": "Crystal Echoblade",
    "category": "weapon",
    "cost": "4,310 gp",
    "weight": "4 lb.",
    "notes": "A crystal echoblade normally functions as a +1 longsword, but is enhanced by your musical ability. If you use your bardic music ability while wielding the weapon, the blade resonates in harmony, dealing additional sonic damage on each attack equal to half your bard level.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cudgel-that-never-forgets",
    "name": "Cudgel That Never Forgets",
    "category": "weapon",
    "cost": "20,312 gp",
    "weight": "8 lb.",
    "notes": "This +1 axiomatic heavy mace functions so only for lawful neutral, lawful good, or neutral wielders. Relic power (worship St. Cuthbert; sacrifice a 5th-level divine spell slot or True Believer feat and 9 HD): the cudgel reveals intelligence and sentience (Int 16, Wis 10, Cha 16; speech, darkvision 60 ft.) and can produce cure moderate wounds three times per day; sacrificing a 7th-level slot (or True Believer and 13 HD) makes it remember foes who struck you, gaining +2 higher enhancement bonus and +2d6 damage against them thereafter. Its imprecations in combat count as Intimidate attempts to demoralize. (Aura: strong conjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 49",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-defiance",
    "name": "Dagger of Defiance",
    "category": "weapon",
    "cost": "6,302 gp",
    "weight": "1 lb.",
    "notes": "This +1 dagger grants you a +3 resistance bonus on saves against enchantment and fear effects.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-denial",
    "name": "Dagger of Denial",
    "category": "weapon",
    "cost": "20,302 gp",
    "weight": "1 lb.",
    "notes": "When you wield this weapon, it functions as a +1 unholy dagger. Unlike most relics, a dagger of denial functions for a wielder of any alignment, and it retains its sentience and basic relic powers even if you don't establish the proper divine connection, though it will not reveal its intelligence to you or use any relic powers on your behalf. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dawnstar",
    "name": "Dawnstar",
    "category": "weapon",
    "cost": "9,308 gp",
    "weight": "2 lb.",
    "notes": "Created to help bring the light of goodness into places of the darkest evil, a dawnstar is a favorite of Pelor's clergy. When you wield a dawnstar, it functions as a +2 morningstar if you are lawful good, neutral good, chaotic good, or neutral. Relic Power: If you have established the proper divine connection, a dawnstar gains the brilliant energy property (DMG 224). Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "death-spike",
    "name": "Death Spike",
    "category": "weapon",
    "cost": "6,304 gp",
    "weight": "6 lb.",
    "notes": "A death spike allows you to draw the life energy out of a dying target, granting you temporary vitality. It functions as a +1 cold iron spear, but whenever you reduce a living creature to –1 or fewer hit points on a melee attack with the spear, you can activate it to gain 1d8 temporary hit points and a +2 morale bonus on damage rolls. These benefits last for 1 hour; multiple uses of the spear don't stack. The spear can be activated three times per day.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 50",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dwarf-crusher",
    "name": "Dwarf Crusher",
    "category": "weapon",
    "cost": "9,010 gp",
    "weight": "8 lb.",
    "notes": "This Large +1 adamantine greatclub can only be activated by a bearer who has a Strength of 21 or higher and the Power Attack feat. When it is activated, the next attack you make with a dwarf crusher in that round against a dwarf, a construct, or a creature that has the earth subtype is treated as a touch attack. You must also take at least a –5 penalty on this attack roll using the Power Attack feat in order to gain this benefit.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "explosive-sling",
    "name": "Explosive Sling",
    "category": "weapon",
    "cost": "36,300 gp",
    "weight": "—",
    "notes": "This +1 sling imbues stones launched from it with an explosive charge. When you hit a target with a stone fired from an explosive sling, the stone explodes, dealing an extra 2d6 points of fire damage to the target (no save). In addition, each other creature within 10 feet of the target creature when the stone explodes is engulfed in flame from the burst of fire and takes 2d6 points of fire damage (Reflex DC 22 negates).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "forceful-skylance",
    "name": "Forceful Skylance",
    "category": "weapon",
    "cost": "8,310 gp",
    "weight": "10 lb.",
    "notes": "Three times per day, you can command this +1 lance to produce a magic missile effect, firing three missiles with each use. These missiles can be aimed at up to three targets within 150 feet of you.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fountainhead-arrow",
    "name": "Fountainhead Arrow",
    "category": "weapon",
    "cost": "306 gp",
    "weight": "—",
    "notes": "A fountainhead arrow is an otherwise normal arrow designed to be targeted at a point on the ground, a wall, or any other flat surface. If you hit the target area (treat as AC 5), the arrow creates a geyser of spewing acid. Each round on your turn (starting on the turn you fired the arrow), the arrow creates a 10-foot-radius burst of acid that deals 2d8 points of acid damage to all creatures in the area (Reflex DC 14 half). This effect continues for 3 rounds.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "galeb-duhr-hammer",
    "name": "Galeb Duhr Hammer",
    "category": "weapon",
    "cost": "5,312 gp",
    "weight": "15 lb.",
    "notes": "A galeb duhr hammer acts as a +1 warhammer. In addition, if you have the stonecunning racial ability, the hammer gains an extra ability. Whenever you score a critical hit with a galeb duhr hammer against a creature standing on the ground, the surface your target is standing on attempts to hold the creature in place. For 5 rounds, the victim's speed falls to 5 feet and it takes a –2 penalty on attack rolls and to AC.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghost-net",
    "name": "Ghost Net",
    "category": "weapon",
    "cost": "8,320 gp",
    "weight": "1 lb.",
    "notes": "You can throw this item at a target as though it were an ordinary net. It has no effect against corporeal targets, but any incorporeal target hit by a ghost net is treated as corporeal for the purpose of dealing damage to it with physical or magical attacks (though the net doesn't entangle an incorporeal target).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hooked-hammer-of-the-hearthfire",
    "name": "Hooked Hammer of the Hearthfire",
    "category": "weapon",
    "cost": "5,120 gp",
    "weight": "6 lb.",
    "notes": "These weapons were created to help the gnomes defend their holdings. While you wield a hooked hammer of the hearthfire, it functions as a +1/+1 gnome hooked hammer if you are neutral good, neutral, chaotic good, or lawful good. Relic Power: If you have established the proper divine connection, both ends of this weapon also have the flaming property (DMG 224). Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lash-of-sands",
    "name": "Lash of Sands",
    "category": "weapon",
    "cost": "22,301 gp",
    "weight": "4 lb.",
    "notes": "This +1 desiccating burst whip is twice as heavy as a normal whip, deals lethal damage, and is effective even against opponents in armor. Once per day, you can activate the whip when you strike an opponent with it. Doing so creates a mass of leather bindings that enwrap the target, entangling it as if with a net (PH 119) for 3 rounds or until it escapes.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "living-chain",
    "name": "Living Chain",
    "category": "weapon",
    "cost": "4,325 gp",
    "weight": "10 lb.",
    "notes": "This +1 spiked chain coils around the target's limbs on a successful attack, granting you a +2 bonus on Strength checks made to trip the target.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mace-of-the-dark-children",
    "name": "Mace of the Dark Children",
    "category": "weapon",
    "cost": "8,012 gp",
    "weight": "8 lb.",
    "notes": "This +1 adamantine heavy mace grants you a +3 profane bonus on rebuke undead attempts. You also treat your level as two higher when determining how many Hit Dice of undead you can rebuke.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "manticore-greatsword",
    "name": "Manticore Greatsword",
    "category": "weapon",
    "cost": "5,350 gp",
    "weight": "—",
    "notes": "Manticore greatswords were designed to mimic the spike-throwing ability of their namesake creature. Such a weapon functions as a +1 greatsword. When you activate this weapon, you can launch either one spike (a standard action) or all six spikes (a full-round action) from its hilt as a ranged attack that provokes attacks of opportunity. Treat the spikes as thrown weapons.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "meteoric-knife",
    "name": "Meteoric Knife",
    "category": "weapon",
    "cost": "2,802 gp",
    "weight": "1/2 lb.",
    "notes": "This knife functions as a +1 dagger. In addition, a meteoric knife has three charges, which are renewed each day at dawn. Spending 1 or more charges enhances the dagger's magical properties as described below. The effects last for 1 round. 1 charge: The dagger gains the returning property. 2 charges: The dagger gains the flaming and returning properties. 3 charges: The dagger gains the flaming and returning properties (DMG 224–225).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 53",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "morningstar-of-the-many",
    "name": "Morningstar of the Many",
    "category": "weapon",
    "cost": "7,308 gp",
    "weight": "6 lb.",
    "notes": "It is said that these morningstars have been dipped in the blood of creatures from every known plane on the Great Wheel. When you wield it, a morningstar of the many functions as a +1 morningstar if you are chaotic evil, neutral evil, or chaotic neutral. Furthermore, the weapon overcomes damage reduction as if it has all four of the alignment descriptors (chaotic, evil, good, and lawful). Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 54",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pick-of-piercing",
    "name": "Pick of Piercing",
    "category": "weapon",
    "cost": "9,308 gp",
    "weight": "6 lb.",
    "notes": "Three times per day, this +1 heavy pick can touch an object created of force (such as a wall of force) and destroy it as if by a disintegrate spell (touch attack against the effect's touch AC or AC 0). (Aura: moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 54",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "quarterstaff-of-battle",
    "name": "Quarterstaff of Battle",
    "category": "weapon",
    "cost": "24,600 gp",
    "weight": "4 lb.",
    "notes": "While wielding this +1/+1 quarterstaff, you can attempt to disarm opponents as if you had the Improved Disarm feat. In addition, a quarterstaff of battle has three abilities you can use when you activate the weapon. 1. For the next 2 rounds, the staff automatically deflects all ranged attacks from Medium or smaller attackers, as well as all ranged attacks created by spells of 2nd level or lower, that target you or any ally adjacent to you.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 54",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-desperate-measures",
    "name": "Rapier of Desperate Measures",
    "category": "weapon",
    "cost": "9,320 gp",
    "weight": "2 lb.",
    "notes": "Those who live by their wits often find themselves in situations over their heads. This rapier is an incomparable boon to those in such situations. When you wield a rapier of desperate measures, it functions as a +2 rapier if you are chaotic neutral, neutral, chaotic good, or chaotic evil. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-unerring-direction",
    "name": "Rapier of Unerring Direction",
    "category": "weapon",
    "cost": "9,320 gp",
    "weight": "2 lb.",
    "notes": "This rapier functions as a +1 ghost touch rapier. Relic power (worship Fharlanghn; sacrifice a 5th-level divine spell slot or True Believer feat and 9 HD): the rapier automatically ignores all miss chances from concealment, blink, displacement, and similar effects. (Aura: strong divination; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 55",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "raptor-arrow",
    "name": "Raptor Arrow",
    "category": "weapon",
    "cost": "6,006 gp",
    "weight": "—",
    "notes": "Raptor arrows harness the power of the falcon to skewer their prey. When you fire a raptor arrow, it functions as a +1 arrow with a variant of the returning quality if you are neutral good, lawful good, chaotic good, or neutral. At the beginning of the round after it is fired from a bow, a raptor arrow flies through the air and restrings itself on the bow from which it was fired. Unlike most ammunition, raptor arrows are not destroyed when used. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-cats",
    "name": "Rod of Cats",
    "category": "weapon",
    "cost": "10,600 gp",
    "weight": "4 lb.",
    "notes": "When held, this +1/masterwork quarterstaff grants you low-light vision and a +5 competence bonus on Hide and Move Silently checks. These are continuous effects and requires no activation. Once per day, you can activate a rod of cats to gain one of two different effects: The rod creates a spider climb effect on you with a duration of 50 minutes, or it creates a darkness effect, targeted on the rod.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-celestial-might",
    "name": "Rod of Celestial Might",
    "category": "weapon",
    "cost": "38,600 gp",
    "weight": "5 lb.",
    "notes": "Designed to battle the denizens of the Lower Planes, a rod of celestial might functions as a +1/+1 quarterstaff. Its abilities can be activated only by a non-evil character. A rod of celestial might has two abilities you can activate under specific circumstances. 1. After a successful attack with the rod against an evil outsider, you can trigger a holy smite effect centered on the target as an immediate (command) action.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-defiance",
    "name": "Rod of Defiance",
    "category": "weapon",
    "cost": "7,312 gp",
    "weight": "3 lb.",
    "notes": "This rod can be used in combat as a +1 heavy mace. While held, each undead creature within 30 ft. is treated as having 4 fewer Hit Dice (minimum 1 HD) for turn or rebuke undead checks. (Aura: moderate necromancy; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-enervating-strike",
    "name": "Rod of Enervating Strike",
    "category": "weapon",
    "cost": "18,312 gp",
    "weight": "8 lb.",
    "notes": "Crafted from wood exposed to the Negative Energy Plane, a rod of enervating strike functions as a +1 heavy mace. In addition, when you successfully strike a creature with the rod in melee, the target is subjected to an inflict light wounds effect (1d8+5 damage; Will DC 11 half). If you score a critical hit with the rod, the creature is instead subjected to an inflict serious wounds effect (3d8+15 damage; Will DC 14 half).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-freedom",
    "name": "Rod of Freedom",
    "category": "weapon",
    "cost": "18,402 gp",
    "weight": "6 lb.",
    "notes": "This +1 silver heavy mace has three special abilities. As long as the rod of freedom is in your hand, you gain a +4 morale bonus on saving throws against charm or compulsion effects. This is a continuous effect and requires no activation. In addition, you can activate a rod of freedom as a free (mental) action at will to deal nonlethal damage without penalty on your next attack roll. You must decide before you make the attack whether you will activate this ability.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-surprises",
    "name": "Rod of Surprises",
    "category": "weapon",
    "cost": "6,000 gp",
    "weight": "2 lb.",
    "notes": "Similar to a rod of lordly might, a rod of surprises has both combat and utilitarian features. Its buttons can be depressed, singly or in various combinations, to cause the rod to lengthen and even sprout a blade. It can be used as a javelin, kama, longspear, quarterstaff, scythe, shortspear, short sword, or spear. A rod is treated as a +1 weapon in any of these forms.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-recluse",
    "name": "Rod of the Recluse",
    "category": "weapon",
    "cost": "9,305 gp",
    "weight": "5 lb.",
    "notes": "Rods of the recluse are usually found in the possession of Lolth's high priestesses. When you wield this rod, it functions as a +2 light mace if you are chaotic evil, neutral evil, or chaotic neutral. Relic Power: If you have established the proper divine connection, you can activate the rod to deliver poison (Fort DC 20, 2d6 Str/2d6 Str) with the next melee attack you make with it. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 57",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-whips",
    "name": "Rod of Whips",
    "category": "weapon",
    "cost": "15,000 gp",
    "weight": "2 lb.",
    "notes": "On command, a rod of whips grows a magic tendril of force from one end that functions as a whip. Once activated, a rod of whips acts as a +1 dancing whip that can strike incorporeal creatures as a force effect. A rod of whips can be activated three times per day, and each activation lasts for 10 rounds.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rogue-blade",
    "name": "Rogue Blade",
    "category": "weapon",
    "cost": "12,320 gp",
    "weight": "2 lb.",
    "notes": "When you activate this +1 rapier, it provides you with the effect of a blink spell for 6 rounds. The effect ends prematurely if you stop holding the rogue blade. This effect can be used twice per day.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ruby-blade",
    "name": "Ruby Blade",
    "category": "weapon",
    "cost": "20,302 gp",
    "weight": "1 lb.",
    "notes": "This dagger functions as a +1 axiomatic dagger for lawful evil, lawful neutral, lawful good, or neutral wielders. Relic power (worship Wee Jas; sacrifice a 6th-level divine spell slot or True Believer feat and 11 HD): if you can rebuke undead, your effective level for bolstering, rebuking, or commanding undead is 4 higher (continuous), and once per day you can activate the blade to produce a status effect. (Aura: strong evocation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scourge-of-pain",
    "name": "Scourge of Pain",
    "category": "weapon",
    "cost": "26,320 gp",
    "weight": "2 lb.",
    "notes": "Each time this +1 scourge strikes, it deals an extra 1d8 points of nonlethal damage and causes agonizing pain in the creature struck. The target takes a –4 penalty on attack rolls, saving throws, and checks for 1d4 rounds (Fort DC 17 negates). Multiple strikes on the same creature don't stack.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skewer-of-gnomes",
    "name": "Skewer-Of-Gnomes",
    "category": "weapon",
    "cost": "9,302 gp",
    "weight": "4 lb.",
    "notes": "Carried primarily by kobold heroes, these spears were designed to be true to their name. When you carry a skewer-of-gnomes, it functions as a Small +1 gnome bane spear if you are lawful evil, lawful neutral, or neutral evil. Relic Power: If you have established the proper divine connection, the spear also gains the unholy property (DMG 226) and reveals its quasisentience and abilities to you. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spear-of-retribution",
    "name": "Spear of Retribution",
    "category": "weapon",
    "cost": "9,302 gp",
    "weight": "6 lb.",
    "notes": "Spears of retribution are widely known as the instruments of Gruumsh's wrath. When you wield a spear of retribution, it functions as a +1 returning spear if you are chaotic evil, chaotic neutral, or neutral evil. Relic Power: If you have established the proper divine connection, you gain a +2 morale bonus on attack rolls and damage rolls made with a spear of retribution against any enemy that dealt damage to you in the previous round. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spectral-dagger",
    "name": "Spectral Dagger",
    "category": "weapon",
    "cost": "6,000 gp",
    "weight": "1 lb.",
    "notes": "When you grasp the hilt of a spectral dagger, a “blade” of ghostly light coalesces into existence. The weapon has no enhancement bonus (and can't be imbued with one). Attacks with a spectral dagger are treated as touch attacks, but the weapon does not deal damage normally. Instead, any target struck by the weapon is affected by a chill touch spell (Fort DC 11 partial or Will DC 11 negates; see PH 209).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spider-fang",
    "name": "Spider Fang",
    "category": "weapon",
    "cost": "5,302 gp",
    "weight": "1 lb.",
    "notes": "This +1 dagger quickly cuts through webs (magical or otherwise) without getting stuck. As a move action, you can cut through a web entangling you or another creature. You can move through webs created by a web spell at half your normal speed (although the weapon doesn't prevent you from being stuck in either of these webs in the first place). These are continuous effects and require no activation.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-unyielding-oak",
    "name": "Staff of the Unyielding Oak",
    "category": "weapon",
    "cost": "5,600 gp",
    "weight": "4 lb.",
    "notes": "A staff of the unyielding oak is actually a treant bound into quarterstaff form. When you wield this weapon, it functions as a +1/+1 quarterstaff if you are neutral, neutral good, neutral evil, lawful neutral, or chaotic neutral. Relic Power: If you have established the proper divine connection, you can command this staff to become a treant. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stonereaver",
    "name": "Stonereaver",
    "category": "weapon",
    "cost": "6,320 gp",
    "weight": "12 lb.",
    "notes": "In the hands of a nondwarf, stonereaver functions as a +1 greataxe. In the hands of a dwarf, the weapon also gains the bane property (DMG 224) against elementals that have the earth subtype and against constructs primarily made of earth, stone, or metal.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stunshot-sling",
    "name": "Stunshot Sling",
    "category": "weapon",
    "cost": "7,800 gp",
    "weight": "—",
    "notes": "This weapon functions as a +1 sling. Three times per day, you can activate a stunshot sling so that the next target you hit on your current turn must succeed on a Fortitude save (DC equal to your attack roll result) or be stunned for 1 round.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sword-of-mighty-thews",
    "name": "Sword of Mighty Thews",
    "category": "weapon",
    "cost": "9,350 gp",
    "weight": "8 lb.",
    "notes": "These swords were designed for dragonslayers of great strength. When you wield a sword of mighty thews, it functions as a +1 dragonbane greatsword, provided that you are chaotic good, neutral good, or chaotic neutral. Relic Power: If you have established the proper divine connection, you are immune to the frightful presence of dragons as long as you wield the sword. Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 60",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sword-of-virtue-beyond-reproach",
    "name": "Sword of Virtue Beyond Reproach",
    "category": "weapon",
    "cost": "9,315 gp",
    "weight": "4 lb.",
    "notes": "A sword of virtue beyond reproach is designed to grant a measure of respite from charms and compulsions. When you wield this weapon, it functions as a +1 holy longsword if you are lawful good, neutral good, or lawful neutral. Relic Power: If you have established the proper divine connection and you fail a save against an enemy's charm or compulsion effect while wielding the sword, you are immune to its effects for 1d4 rounds (DM rolls secretly). Relic item; additional relic power with the proper divine connection (see text).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "swordbow",
    "name": "Swordbow",
    "category": "weapon",
    "cost": "6,375 gp",
    "weight": "3 lb.",
    "notes": "This +1 longbow changes into a +1 longsword (or vice versa) when activated. You can interchange bow and sword attacks as part of the same full attack action. In sword form, the weapon features a bowlike grip and a pommel that resembles the curving tip of a bow. In bow form, the weapon is made of metal, and each limb of the bow resembles a sword blade. In either form, a swordbow has the same enhancement bonus.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "swordbow-great",
    "name": "Swordbow, Great",
    "category": "weapon",
    "cost": "6,775 gp",
    "weight": "8 lb.",
    "notes": "This item functions as a swordbow (see above), except that its two forms are a +1 composite longbow (+4 Str bonus) and a +1 greatsword.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "swordbow-light",
    "name": "Swordbow, Light",
    "category": "weapon",
    "cost": "6,330 gp",
    "weight": "2 lb.",
    "notes": "This item functions as a swordbow, except that its two forms are a +1 shortbow and a +1 rapier.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tentacle-rod",
    "name": "Tentacle Rod",
    "category": "weapon",
    "cost": "14,000 gp",
    "weight": "3 lb.",
    "notes": "When activated, this rod makes three attacks (one per tentacle) against a single target in melee reach, each at the rod's own +12 attack bonus and dealing 6 points of bludgeoning damage; the rod counts as a magic weapon for overcoming damage reduction. If all three tentacles strike the same living creature in a round, it is slowed (as the slow spell) for 5 rounds (Fort DC 14 negates).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 61",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tentacle-rod-greater",
    "name": "Tentacle Rod, Greater",
    "category": "weapon",
    "cost": "36,000 gp",
    "weight": "6 lb.",
    "notes": "When activated, a greater tentacle rod makes six attacks (one per tentacle) against a single target within your melee reach that you designate. The rod uses its own attack bonus (+18), and each attack deals 9 points of bludgeoning damage. Treat the rod as a magic weapon for the purpose of overcoming damage reduction.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "the-fist",
    "name": "The Fist",
    "category": "weapon",
    "cost": "7,005 gp",
    "weight": "—",
    "notes": "Forged long ago by dwarf hands, the fist is a +1 adamantine spiked gauntlet. While wearing the gauntlet, you are protected from chill metal and heat metal spells. This is a continuous effect and requires no activation. In addition, once per day you can activate the fist.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "trident-of-serenity",
    "name": "Trident of Serenity",
    "category": "weapon",
    "cost": "5,315 gp",
    "weight": "4 lb.",
    "notes": "When you activate this +1 trident, it creates a calm emotions effect centered on you (Will DC 16 negates). The effect lasts for 5 rounds and does not require concentration. Any creature that successfully saves against this effect is immune to further uses of that ability for 24 hours. This ability functions three times per day.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 62",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "viperblade",
    "name": "Viperblade",
    "category": "weapon",
    "cost": "6,302 gp",
    "weight": "1 lb.",
    "notes": "Created by cults that worship serpent deities, these +1 daggers are prized for their ability to secrete toxic venom. A viperblade has 5 charges, which are renewed each day at dawn. Spending 1 or more charges envenoms the blade (at no risk to you) for the next attack you make during this turn. The poison deals 1d6 points of Constitution damage (both primary and secondary). The save DC depends on the number of charges spent: 1 charge: Fortitude DC 12.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "warlocks-scepter",
    "name": "Warlock'S Scepter",
    "category": "weapon",
    "cost": "8,305 gp",
    "weight": "3 lb.",
    "notes": "This +1 light mace confers a +1 profane bonus on your ranged touch attack rolls while you hold it. This is a continuous effect and requires no activation. Furthermore, a warlock's scepter has 5 charges, which are renewed each day at dawn. Spending 1 or more charges improves the damage of the next eldritch blast (CAr 7) you make in that round. 1 charge: +1d6 damage. 3 charges: +2d6 damage. 5 charges: +4d6 damage.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "water-whip",
    "name": "Water Whip",
    "category": "weapon",
    "cost": "20,301 gp",
    "weight": "2 lb.",
    "notes": "This +1 whip shimmers and undulates with deceptive grace when held. Unlike a normal whip, a water whip deals lethal damage and can affect armored creatures. Furthermore, while wielding a water whip, you are difficult to disarm. If the whip is knocked from your grasp, it immediately flows back into your hand at the beginning of your next turn (even if it is within someone else's grasp) as long as it is within 30 feet of you.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "whip-of-webs",
    "name": "Whip of Webs",
    "category": "weapon",
    "cost": "6,301 gp",
    "weight": "1 lb.",
    "notes": "When you strike a creature with this +1 whip, you can activate it to wrap the target in a web of tough, leathery filaments. The creature is entangled as if by a net (PH 119) for 3 rounds or until it escapes. Multiple strikes by a whip of webs aren't cumulative. This ability functions three times per day.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
