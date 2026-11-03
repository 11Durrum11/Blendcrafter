/**
 * Magic Item Compendium Audit (2026-11-02): the Compendium's SPECIFIC
 * armor, shields, and weapons were never built — the app's MIC records
 * were all armor/weapon properties, augment crystals, clothing, and
 * tools. Everything here is taken from Chapter 1's "Specific Armor
 * and Shields" (book pp. 16-23), Chapter 2's "Specific Weapons"
 * (book pp. 46-62), and the armor, shield, and weapon pieces of
 * Chapter 5's magic item sets (book pp. 191-209), skipping any item
 * whose name already exists in the catalog. Prices are the printed
 * Price values; summaries are mechanical effects in our own words.
 * The sections actually begin one page earlier than the table of
 * contents states - Specific Armor and Shields on p. 15 (Armor of
 * the Fallen Leaves, Bearskin Armor, Barricade Buckler) and Specific
 * Weapons on p. 45 (Arrow of Biting, Assassin Whip, Axe of
 * Ancestral Virtue) - and those boundary entries are included.
 * Gauntlet of Gruumsh and Storm Gauntlets were already in the
 * catalog as hands-slot items. The chapters' augment crystals are
 * already in the catalog under their own pack. Arrow of Biting,
 * Fountainhead Arrow, and Raptor Arrow are filed as ammunition,
 * matching the SRD arrows' placement.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MIC_SPECIFIC_ARMOR_SHIELDS: MagicItemDefinition[] = [
  {
    "id": "dragonrider-armor",
    "name": "Dragonrider Armor",
    "category": "armor",
    "cost": "18,300 gp",
    "summary": "A suit of +1 dragonhide full plate made from cast-off dragon scales. It grants resistance 10 against the energy type of the providing dragon's breath weapon, a +5 competence bonus on Ride checks while riding a creature of the dragon type, and an automatic feather fall effect if you fall more than 5 feet.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 16",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earthplate-armor",
    "name": "Earthplate Armor",
    "category": "armor",
    "cost": "41,650 gp",
    "summary": "A suit of +1 full plate set with a black crystal shard. Once per day, the wearer can activate a stoneskin effect lasting 90 minutes or until it absorbs 90 points of damage, and gains tremorsense out to 5 feet while the effect lasts.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 16",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "electric-eel-hide",
    "name": "Electric Eel Hide",
    "category": "armor",
    "cost": "14,165 gp",
    "summary": "A suit of +1 buoyant slick hide armor. Three times per day it can generate an electricity shield for 5 rounds: creatures striking the wearer with natural weapons, unarmed attacks, or nonreach manufactured weapons take 1d6 electricity damage, and while the shield lasts the wearer can make a melee touch attack for 5d6 electricity damage or, underwater, burst for 2d6 electricity damage to all adjacent creatures, either of which ends the shield.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 16",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "exoskeleton-armor",
    "name": "Exoskeleton Armor",
    "category": "armor",
    "cost": "21,350 gp",
    "summary": "Armor prepared from the remains of an animated skeleton that protects as a +1 breastplate and grants the wearer damage reduction 5/bludgeoning.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 17",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "foxhide-armor",
    "name": "Foxhide Armor",
    "category": "armor",
    "cost": "10,160 gp",
    "summary": "A suit of +1 leather granting a +2 competence bonus on Hide and Move Silently checks. Once per day it grants a +4 enhancement bonus to Intelligence for 9 minutes; twice per day, the scent quality for 5 rounds; three times per day, a pass without trace effect for 1 hour that also lets the wearer move through undergrowth unimpeded. Its properties function while the wearer is in wild shape.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 17",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ghoul-shell-armor",
    "name": "Ghoul Shell Armor",
    "category": "armor",
    "cost": "10,160 gp",
    "summary": "A suit of +1 leather made from fitted sections of ghoul flesh. It allows the wearer to make up to three touch attacks per day that replicate the ghoul touch spell (Fortitude DC 15 negates).",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 17",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hawkfeather-armor",
    "name": "Hawkfeather Armor",
    "category": "armor",
    "cost": "12,175 gp",
    "summary": "A suit of +1 studded leather granting a continuous +5 competence bonus on Spot checks. Once per day it grants a +4 enhancement bonus to Charisma for 9 minutes, and three times per day it can sprout wings that let the wearer fly at 60 feet (good maneuverability) for 5 rounds. It contains no metal, and its properties function while the wearer is in wild shape.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 18",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "kyton-armor",
    "name": "Kyton Armor",
    "category": "armor",
    "cost": "13,100 gp",
    "summary": "Armor functioning as a +1 mithral shirt, hung with five barbed chains. When activated, one dangling chain makes a melee attack against an adjacent creature of the wearer's choice using the wearer's base attack bonus, dealing 1d6 bludgeoning damage as a magic weapon with an enhancement bonus equal to the armor's.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 18",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "millennial-chainmail",
    "name": "Millennial Chainmail",
    "category": "armor",
    "cost": "8,150 gp",
    "summary": "For a chaotic good, chaotic neutral, or neutral good wearer, this functions as +1 mithral chainmail (light armor, maximum Dexterity bonus +8, armor check penalty -2, arcane spell failure 15%). Relic power (Corellon Larethian): roots extend into the wearer's skin, granting fast healing 3 while in brighter than shadowy illumination.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 19",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mithralmist-shirt",
    "name": "Mithralmist Shirt",
    "category": "armor",
    "cost": "3,400 gp",
    "summary": "A +1 mithral chain shirt. Up to seven times per day, the wearer can activate it to fill his space with a billowing silver mist that grants concealment against attacks for 1 minute; the mist remains in the space where it was created.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 19",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "overhead-shield",
    "name": "Overhead Shield",
    "category": "shield",
    "cost": "24,170 gp",
    "summary": "A +1 heavy steel shield. Once per day, the bearer can raise it skyward to create a horizontal wall of force with a 20-foot radius hovering 5 feet above him; the wall moves with him and blocks all attacks from above, lasting as long as he concentrates (up to 10 rounds), during which the shield grants no AC benefit.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 19",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "owlfeather-armor",
    "name": "Owlfeather Armor",
    "category": "armor",
    "cost": "8,160 gp",
    "summary": "A suit of +1 leather granting a +2 competence bonus on Listen and Move Silently checks. Once per day it grants a +4 enhancement bonus to Wisdom for 9 minutes; twice per day, a +5 competence bonus on Spot checks for 10 minutes while in shadowy illumination; three times per day, it can sprout wings that let the wearer fly at 40 feet (good maneuverability) for 5 rounds. Its properties function while the wearer is in wild shape.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 19",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "serpent-armor",
    "name": "Serpent Armor",
    "category": "armor",
    "cost": "12,160 gp",
    "summary": "A suit of +1 leather that grants a +1 resistance bonus on Reflex saving throws and the benefit of the Combat Reflexes feat while worn.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 19",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-of-mercy",
    "name": "Shield of Mercy",
    "category": "shield",
    "cost": "2,170 gp",
    "summary": "A +1 heavy steel shield. Its bearer can expend a smite attempt (such as smite evil) to heal a touched creature of a number of points of damage equal to the extra damage the smite attack would have dealt; an item granting an enhancement bonus to Wisdom adds its bonus to the amount healed.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-resolute",
    "name": "Shield of the Resolute",
    "category": "shield",
    "cost": "5,520 gp",
    "summary": "For a lawful good, neutral good, or lawful neutral bearer, this functions as a +1 light fortification heavy mithral shield. Relic power (Moradin): every goblinoid and giant within 30 feet that gazes upon the shield must succeed on a DC 17 Will save or be shaken (Hit Dice equal to or greater than the bearer's) or frightened (fewer Hit Dice) for 2 rounds, as a gaze attack.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-severed-hand",
    "name": "Shield of the Severed Hand",
    "category": "shield",
    "cost": "4,657 gp",
    "summary": "For a chaotic evil, chaotic neutral, or neutral evil bearer, this functions as a +2 heavy wooden shield. Relic power (Gruumsh): the bearer can make an immediate bull rush attempt (with a +4 bonus on the Strength check) against an adjacent opponent that has just attacked him in melee, without provoking an attack of opportunity and without risk of falling prone.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 21",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tigerskin-armor",
    "name": "Tigerskin Armor",
    "category": "armor",
    "cost": "17,100 gp",
    "summary": "A +1 mithral shirt granting a +2 competence bonus on Climb, Hide, Jump, and Move Silently checks. Once per day it grants a +4 enhancement bonus to Dexterity for 9 minutes; twice per day, the scent quality for 5 rounds; three times per day, the wearer can sprout a pair of claws for 5 rounds that deal 1d4 damage and extend natural reach by 5 feet. Its properties function in wild shape, and druids are not prohibited from wearing it.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 21",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vampire-hide-armor",
    "name": "Vampire Hide Armor",
    "category": "armor",
    "cost": "21,175 gp",
    "summary": "A suit of +1 studded leather prepared from a single layer of vampire skin, granting the wearer damage reduction 5/silver or magic.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 22",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wight-armor",
    "name": "Wight Armor",
    "category": "armor",
    "cost": "14,175 gp",
    "summary": "A suit of +1 shadow studded leather. When activated, it makes a single touched creature (or the wearer) imperceptible to undead, as the hide from undead spell, and that creature gains darkvision out to 60 feet while the effect lasts.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 22",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wight-hide-shield",
    "name": "Wight Hide Shield",
    "category": "shield",
    "cost": "9,159 gp",
    "summary": "A +1 light steel shield covered in wight hide. When the bearer deals damage to a living creature with a shield bash attack, the target must succeed on a DC 14 Fortitude save or gain one negative level; the shield can bestow no more than three negative levels per day.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 22",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wrapped-tower",
    "name": "Wrapped Tower",
    "category": "shield",
    "cost": "6,180 gp",
    "summary": "A +1 tower shield partially wrapped in a mummy's funerary wrappings. Once per day, while the bearer uses it to gain total cover, the sight of its mummylike facade forces each viewer in front of it to succeed on a DC 16 Will save or be paralyzed with fear for 1d4 rounds.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "zombie-hide-armor",
    "name": "Zombie Hide Armor",
    "category": "armor",
    "cost": "16,165 gp",
    "summary": "A suit of +1 hide armor prepared from pieced zombie skin, granting the wearer damage reduction 5/slashing; the holes and rents in the flesh do not compromise its integrity.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  }
,
  {
    "id": "armor-of-the-fallen-leaves",
    "name": "Armor of the Fallen Leaves",
    "category": "armor",
    "cost": "17,350 gp",
    "summary": "A suit of armor sewn from rigid autumn leaves (relic of the nature faiths). Its relic power lets a worshipper of Obad-Hai who has made the proper divine connection assume gaseous form for up to 30 minutes per day.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 15",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bearskin-armor",
    "name": "Bearskin Armor",
    "category": "armor",
    "cost": "14,350 gp",
    "summary": "A +1 breastplate covered in shaggy bear fur. The armor's special properties keep working while the wearer is in wild shape, though it grants no armor bonus in that form.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 15",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barricade-buckler",
    "name": "Barricade Buckler",
    "category": "shield",
    "cost": "4,165 gp",
    "summary": "A +1 buckler set with polished green stones. Speaking its command word transforms it into a 5-foot-by-5-foot vertical wall of force.",
    "source": "Magic Item Compendium \u2014 Specific Armor and Shields, p. 15",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const MIC_SPECIFIC_WEAPONS: MagicItemDefinition[] = [
  {
    "id": "axe-of-the-sea-reavers",
    "name": "Axe of the Sea Reavers",
    "category": "weapon",
    "cost": "10,320 gp",
    "summary": "A +1 greataxe that lets its wielder float atop water continuously. Once per day, the wielder can utter an engraved war cry so that he and all allies within 15 feet gain a +2 morale bonus on attack rolls, weapon damage, saves, skill checks, and ability checks for 1 round; once per day, a command word on the blade makes all enemies within 15 feet panicked for 1 round (Will DC 16 negates).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 46",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bladed-crossbow",
    "name": "Bladed Crossbow",
    "category": "weapon",
    "cost": "4,660 gp",
    "summary": "A heavy crossbow fitted with curved blades at its front and an exceptionally strong stock, usable either as a +1 heavy crossbow for ranged attacks or as a +1 battleaxe for melee attacks.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 46",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blazing-skylance",
    "name": "Blazing Skylance",
    "category": "weapon",
    "cost": "8,310 gp",
    "summary": "A +1 lance wreathed in flame. Three times per day, it can be commanded to fire a 15-foot cone of searing flames from its tip, dealing 5d4 points of fire damage to targets in the area (Reflex DC 13 half).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bow-of-songs",
    "name": "Bow of Songs",
    "category": "weapon",
    "cost": "12,330 gp",
    "summary": "A +1 shortbow that blends music with every shot. On your turn, you can expend one daily use of bardic music to gain a bonus equal to your Charisma bonus on the next attack roll you make with the bow and, if the attack hits, on the corresponding damage roll.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bow-of-the-wintermoon",
    "name": "Bow of the Wintermoon",
    "category": "weapon",
    "cost": "3,400 gp",
    "summary": "For a chaotic good, neutral good, or chaotic neutral wielder, this functions as a +1 composite longbow whose pull adjusts automatically so the wielder adds his full Strength bonus to damage with each arrow. Relic power (Corellon Larethian): the bow gains the frost and drow bane weapon properties.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bowstaff",
    "name": "Bowstaff",
    "category": "weapon",
    "cost": "4,600 gp",
    "summary": "A +1/masterwork quarterstaff that, when activated, changes into a +1 longbow, and back again; each version performs like a regular magic weapon of its kind.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chain-of-obeisance",
    "name": "Chain of Obeisance",
    "category": "weapon",
    "cost": "20,400 gp",
    "summary": "For a lawful evil, neutral evil, or lawful neutral wielder, this functions as a +1 unholy spiked chain. Relic power (Hextor): the wielder can use it in a grapple as if it were a light weapon, and an opponent he pins must succeed on a DC 22 Will save or be dominated as by the dominate monster spell; only one creature can be dominated at a time.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 47",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chromatic-rod",
    "name": "Chromatic Rod",
    "category": "weapon",
    "cost": "12,308 gp",
    "summary": "For a chaotic evil, neutral evil, or chaotic neutral wielder, this five-headed rod functions as a +1 morningstar with a single selectable energy property (corrosive, frost, flaming, or shock) chosen by command word. Relic power (Tiamat): once per day each, spell-like abilities including wall of ice, insect plague, dominate person, find the path, and veil, depending on the divine spell slot sacrificed.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crystal-echoblade",
    "name": "Crystal Echoblade",
    "category": "weapon",
    "cost": "4,310 gp",
    "summary": "A +1 longsword with a blade of jagged violet crystal. If the wielder uses bardic music while wielding it, the blade resonates in harmony and deals additional sonic damage on each attack equal to half the wielder's bard level.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cudgel-that-never-forgets",
    "name": "Cudgel That Never Forgets",
    "category": "weapon",
    "cost": "20,312 gp",
    "summary": "For a lawful neutral, lawful good, or neutral wielder, this functions as a +1 axiomatic heavy mace. Relic power (St. Cuthbert): the cudgel reveals an intelligent, speaking personality and can produce a cure moderate wounds effect three times per day; at a higher tier, against any foe that has struck the wielder it gains an enhancement bonus 2 higher than normal and deals an extra 2d6 points of damage, with no disguise or shapechanging able to fool it.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 48",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-defiance",
    "name": "Dagger of Defiance",
    "category": "weapon",
    "cost": "6,302 gp",
    "summary": "A +1 dagger that grants its wielder a +3 resistance bonus on saves against enchantment and fear effects.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 49",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-denial",
    "name": "Dagger of Denial",
    "category": "weapon",
    "cost": "20,302 gp",
    "summary": "A +1 unholy dagger that is intelligent and sentient regardless of the wielder's divine connection, though it betrays wielders who are not neutral, lawful evil, or neutral evil, beginning by dispelling their spells and their allies'. Relic power (Vecna): the dagger can use detect magic at will and greater dispel magic once per day, and at a higher tier grants continuous detect scrying and arcane eye once per day.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 49",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dawnstar",
    "name": "Dawnstar",
    "category": "weapon",
    "cost": "9,308 gp",
    "summary": "For a lawful good, neutral good, chaotic good, or neutral wielder, this functions as a +2 morningstar. Relic power (Pelor): the dawnstar gains the brilliant energy property, and if it is ever sundered or broken it explodes, dealing 200 points of damage within 10 feet, 150 within 20 feet, and 100 within 30 feet (Reflex DC 17 half), leaving its wielder unharmed.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 49",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "death-spike",
    "name": "Death Spike",
    "category": "weapon",
    "cost": "6,304 gp",
    "summary": "A +1 cold iron spear. Whenever you reduce a living creature to -1 or fewer hit points with a melee attack from the spear, you can activate it (three times per day) to gain 1d8 temporary hit points and a +2 morale bonus on damage rolls for 1 hour; a worn item granting a Charisma bonus adds its bonus to the temporary hit points. Multiple uses do not stack.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 49",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dwarf-crusher",
    "name": "Dwarf Crusher",
    "category": "weapon",
    "cost": "9,010 gp",
    "summary": "A Large +1 adamantine greatclub that can be activated only by a bearer with Strength 21 or higher and the Power Attack feat. Three times per day, when activated with at least a -5 penalty on the attack roll from Power Attack, the next attack made with it that round against a dwarf, a construct, or a creature with the earth subtype is treated as a touch attack.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 50",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "explosive-sling",
    "name": "Explosive Sling",
    "category": "weapon",
    "cost": "36,300 gp",
    "summary": "A +1 sling that imbues stones launched from it with an explosive charge. On a hit, the stone explodes, dealing an extra 2d6 points of fire damage to the target (no save) and 2d6 points of fire damage to each other creature within 10 feet of the target (Reflex DC 22 negates).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 50",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-fist",
    "name": "The Fist",
    "category": "weapon",
    "cost": "7,005 gp",
    "summary": "A +1 adamantine spiked gauntlet that continuously protects its wearer from chill metal and heat metal spells. Once per day, the wearer can activate it so the next attack with the gauntlet before the end of the turn deals an extra 2d6 points of damage and knocks the target prone and stuns it for 1 round (Fortitude DC 22 negates the stun and prone effects).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 50",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "forceful-skylance",
    "name": "Forceful Skylance",
    "category": "weapon",
    "cost": "8,310 gp",
    "summary": "A +1 lance. Three times per day, it can be commanded to produce a magic missile effect, firing three missiles with each use that can be aimed at up to three targets within 150 feet.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fountainhead-arrow",
    "name": "Fountainhead Arrow",
    "category": "ammunition",
    "cost": "306 gp",
    "summary": "An arrow designed to be targeted at a point on the ground, a wall, or another flat surface (treat as AC 5). On a hit it creates a geyser of spewing acid: each round for 3 rounds it produces a 10-foot-radius burst dealing 2d8 points of acid damage (Reflex DC 14 half). It can also be created as a crossbow bolt for the same price.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "galeb-duhr-hammer",
    "name": "Galeb Duhr Hammer",
    "category": "weapon",
    "cost": "5,312 gp",
    "summary": "A +1 warhammer with a head of living rock. If the wielder has the stonecunning racial ability, whenever he scores a critical hit with it against a creature standing on the ground, the surface attempts to hold the creature in place: for 5 rounds the victim's speed falls to 5 feet and it takes a -2 penalty on attack rolls and to AC.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ghost-net",
    "name": "Ghost Net",
    "category": "weapon",
    "cost": "8,320 gp",
    "summary": "A gossamer-thin net thrown as an ordinary net. It has no effect against corporeal targets, but an incorporeal target it hits is treated as corporeal for the purpose of dealing damage to it with physical or magical attacks (including losing the usual 50% chance to ignore damage from corporeal sources), and it cannot turn ethereal; the target can escape only with a DC 20 Escape Artist check, since the net cannot be burst with a Strength check.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hooked-hammer-of-the-hearthfire",
    "name": "Hooked Hammer of the Hearthfire",
    "category": "weapon",
    "cost": "5,120 gp",
    "summary": "For a neutral good, neutral, chaotic good, or lawful good wielder, this functions as a +1/+1 gnome hooked hammer. Relic power (Garl Glittergold): both ends gain the flaming property (flaming burst at a higher tier), and the weapon automatically deals 1d6 points of fire damage per round to any kobold or goblinoid unfortunate enough to grasp its handle.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 51",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lash-of-sands",
    "name": "Lash of Sands",
    "category": "weapon",
    "cost": "22,301 gp",
    "summary": "A +1 desiccating burst whip of cohesive sand, twice as heavy as a normal whip; it deals lethal damage and is effective even against opponents in armor. Once per day, when you strike an opponent with it, you can create a mass of leather bindings that entangles the target as if with a net for 3 rounds, dealing 1d4 points of damage each round it remains entangled (1d8 to plants and elementals with the water subtype; nonliving creatures take no damage).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "living-chain",
    "name": "Living Chain",
    "category": "weapon",
    "cost": "4,325 gp",
    "summary": "A +1 spiked chain that coils around a target's limbs on a successful attack, granting you a +2 bonus on Strength checks made to trip that target.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mace-of-the-dark-children",
    "name": "Mace of the Dark Children",
    "category": "weapon",
    "cost": "8,012 gp",
    "summary": "A +1 adamantine heavy mace that grants its wielder a +3 profane bonus on rebuke undead attempts and treats his level as two higher when determining how many Hit Dice of undead he can rebuke.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "manticore-greatsword",
    "name": "Manticore Greatsword",
    "category": "weapon",
    "cost": "5,350 gp",
    "summary": "A +1 greatsword with six spikes in its oversized hilt. When activated, the wielder can launch one spike (a standard action) or all six spikes (a full-round action) as ranged attacks; each spike is treated as a thrown weapon dealing 1d6 points of piercing damage with a range increment of 20 feet and the weapon's enhancement bonus. Thrown spikes crumble to dust after 1 round, and the weapon regenerates them at dawn.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "meteoric-knife",
    "name": "Meteoric Knife",
    "category": "weapon",
    "cost": "2,802 gp",
    "summary": "A +1 dagger (throwing knife) with three charges renewed each day at dawn. Spending charges enhances it for 1 round: 1 charge grants the returning property; 2 charges grant flaming and returning; 3 charges grant flaming and returning, and on a hit it also creates an explosion of fire dealing an extra 3d6 points of fire damage to the target and all adjacent creatures (Reflex DC 14 half).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 52",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "morningstar-of-the-many",
    "name": "Morningstar of the Many",
    "category": "weapon",
    "cost": "7,308 gp",
    "summary": "For a chaotic evil, neutral evil, or chaotic neutral wielder, this functions as a +1 morningstar that overcomes damage reduction as if it had all four alignment descriptors (chaotic, evil, good, and lawful). Relic power (Erythnul): five times per day, the wielder can command it to mutate for 6 rounds, taking a different form and property each round (vicious morningstar, flaming burst shortspear, anarchic morningstar, wounding battleaxe, unholy morningstar, then vorpal longsword), retaining its enhancement bonus throughout.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pick-of-piercing",
    "name": "Pick of Piercing",
    "category": "weapon",
    "cost": "9,308 gp",
    "summary": "A +1 heavy pick. Three times per day, the wielder can touch an object created of force (such as a wall of force or Bigby's forceful hand) with it as a touch attack; a successful touch destroys the object as if the wielder had cast disintegrate on it.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quarterstaff-of-battle",
    "name": "Quarterstaff of Battle",
    "category": "weapon",
    "cost": "24,600 gp",
    "summary": "A +1/+1 quarterstaff whose wielder can attempt disarms as if he had the Improved Disarm feat. It has three activatable abilities: for 2 rounds it automatically deflects all ranged attacks from Medium or smaller attackers and spell-created ranged attacks of 2nd level or lower targeting the wielder or an adjacent ally (three times per day); both ends gain the speed property for 5 rounds (once per day); or the wielder's next attack that turn is a battlestrike dealing an extra 2d6 damage and knocking the target prone and stunning it for 1 round (Fortitude DC 22 negates; once per day).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-desperate-measures",
    "name": "Rapier of Desperate Measures",
    "category": "weapon",
    "cost": "9,320 gp",
    "summary": "For a chaotic neutral, neutral, chaotic good, or chaotic evil wielder, this functions as a +2 rapier. Relic power (Olidammara): the rapier gains the keen property while its wielder has fewer than his full normal hit points, and the speed property while he has fewer than half.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 54",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rapier-of-unerring-direction",
    "name": "Rapier of Unerring Direction",
    "category": "weapon",
    "cost": "9,320 gp",
    "summary": "A +1 ghost touch rapier that can find hidden enemies and pierce veiling magic. Relic power (Fharlanghn): the rapier automatically ignores all miss chances, whether they stem from concealment, blink, displacement, or some other source.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 54",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "raptor-arrow",
    "name": "Raptor Arrow",
    "category": "ammunition",
    "cost": "6,006 gp",
    "summary": "An arrow that, for a neutral good, lawful good, chaotic good, or neutral archer, functions as a +1 arrow with a variant of the returning quality: at the beginning of the round after it is fired, it flies back and restrings itself on the bow it was fired from, and unlike most ammunition it is not destroyed when used. Relic power (Ehlonna): the arrow also gains the bane property against the targeted foe.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 55",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-cats",
    "name": "Rod of Cats",
    "category": "weapon",
    "cost": "10,600 gp",
    "summary": "A rod that, when held, functions as a +1/masterwork quarterstaff and grants low-light vision and a +5 competence bonus on Hide and Move Silently checks. Once per day it can be activated to create a spider climb effect on the holder lasting 50 minutes, or a darkness effect targeted on the rod that does not hinder the vision of anyone touching it. It also has a secret compartment (Search DC 25) large enough for thieves' tools or a scroll.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 55",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-celestial-might",
    "name": "Rod of Celestial Might",
    "category": "weapon",
    "cost": "38,600 gp",
    "summary": "A rod that functions as a +1/+1 quarterstaff, its abilities usable only by a nonevil character. After a successful attack against an evil outsider, the wielder can trigger a holy smite effect centered on the target as an immediate action (three times per day); once per day, the wielder can summon an avoral guardinal, as summon monster VII, when within 60 feet of an evil outsider.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 55",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-defiance",
    "name": "Rod of Defiance",
    "category": "weapon",
    "cost": "7,312 gp",
    "summary": "A rod that can be used in combat as a +1 heavy mace. While it is held, each undead creature within 30 feet is treated as if it had 4 fewer Hit Dice (minimum 1 HD) for the purpose of turn or rebuke undead checks.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 56",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-enervating-strike",
    "name": "Rod of Enervating Strike",
    "category": "weapon",
    "cost": "18,312 gp",
    "summary": "A rod that functions as a +1 heavy mace. A creature successfully struck in melee is subjected to an inflict light wounds effect (1d8+5 damage; Will DC 11 half), or on a critical hit to an inflict serious wounds effect (3d8+15 damage; Will DC 14 half). On a minor negative-dominant plane these effects are empowered, and on a major negative-dominant plane they are maximized.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 56",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-freedom",
    "name": "Rod of Freedom",
    "category": "weapon",
    "cost": "18,402 gp",
    "summary": "A +1 silver heavy mace with three special abilities. While it is held, the wielder gains a +4 morale bonus on saving throws against charm or compulsion effects; the wielder can activate it at will to deal nonlethal damage without penalty on his next attack roll; and five times per day, when he strikes a creature under a charm or compulsion effect, he can make a special caster level check (1d20+9) to attempt to dispel that effect (DC 11 + the effect's caster level).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 56",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-recluse",
    "name": "Rod of the Recluse",
    "category": "weapon",
    "cost": "9,305 gp",
    "summary": "For a chaotic evil, neutral evil, or chaotic neutral wielder, this spider-leg rod functions as a +2 light mace. Relic power (Lolth): five times per day, the wielder can activate the rod to deliver poison (Fortitude DC 20, 2d6 Strength damage/2d6 Strength damage) with the next melee attack he makes with it; on a critical hit, that Strength damage becomes Strength drain instead.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 56",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-surprises",
    "name": "Rod of Surprises",
    "category": "weapon",
    "cost": "6,000 gp",
    "summary": "A blunt metal rod covered in seams, hinges, and buttons that can be depressed, singly or in combination, to reshape it into a +1 javelin, kama, longspear, quarterstaff, scythe, shortspear, short sword, or spear. It can store a message of up to twenty-five words as the magic mouth spell, replaying it under trigger conditions the owner sets, and it can lengthen up to 60 feet and support up to 800 pounds without bending.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 57",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-whips",
    "name": "Rod of Whips",
    "category": "weapon",
    "cost": "15,000 gp",
    "summary": "On command, this short rod grows a magic tendril of force from one end that functions as a +1 dancing whip able to strike incorporeal creatures as a force effect. It can be activated three times per day, and each activation lasts for 10 rounds.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 57",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rogue-blade",
    "name": "Rogue Blade",
    "category": "weapon",
    "cost": "12,320 gp",
    "summary": "A +1 rapier whose edges seem to fade and twitch. When activated, it provides the wielder with the effect of a blink spell for 6 rounds; the effect ends prematurely if the wielder stops holding the blade. This ability functions twice per day.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 57",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ruby-blade",
    "name": "Ruby Blade",
    "category": "weapon",
    "cost": "20,302 gp",
    "summary": "For a lawful evil, lawful neutral, lawful good, or neutral wielder, this crystal dagger functions as a +1 axiomatic dagger. Relic power (Wee Jas): if the wielder has levels in a class that allows him to rebuke undead, his effective level in that class is considered 4 higher for the purpose of bolstering, rebuking, or commanding undead, and he can activate the blade to produce a status effect once per day.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 57",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scourge-of-pain",
    "name": "Scourge of Pain",
    "category": "weapon",
    "cost": "26,320 gp",
    "summary": "A +1 scourge whose lashes are covered in rusted wire, broken red glass, and tiny fangs. Each strike deals an extra 1d8 points of nonlethal damage and causes agonizing pain: the target takes a -4 penalty on attack rolls, saving throws, and checks for 1d4 rounds (Fortitude DC 17 negates; multiple strikes on the same creature do not stack).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "skewer-of-gnomes",
    "name": "Skewer-of-Gnomes",
    "category": "weapon",
    "cost": "9,302 gp",
    "summary": "For a lawful evil, lawful neutral, or neutral evil wielder, this functions as a Small +1 gnome bane spear. Relic power (Kurtulmak): the spear also gains the unholy property and automatically sets itself against a charge, attacking any foe that charges the wielder and dealing double damage, using the wielder's highest base attack bonus as if making an attack of opportunity.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spear-of-retribution",
    "name": "Spear of Retribution",
    "category": "weapon",
    "cost": "9,302 gp",
    "summary": "For a chaotic evil, chaotic neutral, or neutral evil wielder, this functions as a +1 returning spear. Relic power (Gruumsh): the wielder gains a +2 morale bonus on attack and damage rolls with the spear against any enemy that dealt damage to him in the previous round, and against an enemy that scored a critical hit against him in the previous round the spear also gains the keen property.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spectral-dagger",
    "name": "Spectral Dagger",
    "category": "weapon",
    "cost": "6,000 gp",
    "summary": "A dagger hilt of yellowed bone with a missing blade: when grasped, a blade of ghostly light coalesces. The weapon has no enhancement bonus (and cannot be imbued with one); its attacks are treated as touch attacks and deal no normal damage, instead affecting any target struck as a chill touch spell (Fortitude DC 11 partial or Will DC 11 negates). It fades away if it leaves the wielder's hand and cannot be used for ranged attacks.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 58",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spider-fang",
    "name": "Spider Fang",
    "category": "weapon",
    "cost": "5,302 gp",
    "summary": "A +1 dagger of sharpened chitin that quickly cuts through webs, magical or otherwise, without getting stuck, and lets its wielder move through webs created by a web spell at half normal speed. Once per day, the wielder can create a freestanding 10-foot-by-10-foot vertical curtain of cobwebs that provides concealment to creatures behind it; anyone touching the curtain causes it to collapse, dealing 2d4 points of acid damage to that creature.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 59",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-unyielding-oak",
    "name": "Staff of the Unyielding Oak",
    "category": "weapon",
    "cost": "5,600 gp",
    "summary": "A living-wood quarterstaff (actually a treant bound into staff form) that functions as a +1/+1 quarterstaff for a neutral, neutral good, neutral evil, lawful neutral, or chaotic neutral wielder. Relic power (Obad-Hai): the wielder can command the staff to become a fully real treant, any number of times per day but for no more than 12 hours total in a day; if reduced to 0 hit points or fewer in treant form, it reverts to staff form and cannot transform again for twenty-eight days.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 59",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stonereaver",
    "name": "Stonereaver",
    "category": "weapon",
    "cost": "6,320 gp",
    "summary": "A greataxe, half of whose head is a curved blade and the other half a chisel-point pick. In the hands of a nondwarf it functions as a +1 greataxe; in the hands of a dwarf, it also gains the bane property against elementals with the earth subtype and against constructs primarily made of earth, stone, or metal.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 59",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stunshot-sling",
    "name": "Stunshot Sling",
    "category": "weapon",
    "cost": "7,800 gp",
    "summary": "A +1 sling stitched with tiny bull's-head images. Three times per day, the wielder can activate it so that the next target he hits on his current turn must succeed on a Fortitude save (DC equal to the attack roll result) or be stunned for 1 round.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 59",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-of-mighty-thews",
    "name": "Sword of Mighty Thews",
    "category": "weapon",
    "cost": "9,350 gp",
    "summary": "For a chaotic good, neutral good, or chaotic neutral wielder, this functions as a +1 dragon bane greatsword. Relic power (Kord): the wielder is immune to the frightful presence of dragons while wielding the sword and gains a +5 luck bonus on Reflex saves against a dragon's breath weapon.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 59",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-of-virtue-beyond-reproach",
    "name": "Sword of Virtue Beyond Reproach",
    "category": "weapon",
    "cost": "9,315 gp",
    "summary": "For a lawful good, neutral good, or lawful neutral wielder, this functions as a +1 holy longsword designed to grant respite from charms and compulsions. Relic power (Heironeous): if the wielder fails a save against an enemy's charm or compulsion effect while wielding the sword, he is immune to its effects for 1d4 rounds (rolled secretly by the DM); the effect is only suppressed during that time, not negated, and effects received during previous rounds take hold when suppression ends.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "swordbow",
    "name": "Swordbow",
    "category": "weapon",
    "cost": "6,375 gp",
    "summary": "A +1 longbow that changes into a +1 longsword (or vice versa) when activated as a free (command) action; the wielder can interchange bow and sword attacks as part of the same full attack action. In either form it carries the same enhancement bonus, which can be improved (and special properties added) as if improving two separate weapons.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "swordbow-great",
    "name": "Swordbow, Great",
    "category": "weapon",
    "cost": "6,775 gp",
    "summary": "A massive bow of razor-sharp steel that functions as a swordbow, except that its two forms are a +1 composite longbow (+4 Strength bonus) and a +1 greatsword.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "swordbow-light",
    "name": "Swordbow, Light",
    "category": "weapon",
    "cost": "6,330 gp",
    "summary": "A small, compact bow that functions as a swordbow, except that its two forms are a +1 shortbow and a +1 rapier.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tentacle-rod",
    "name": "Tentacle Rod",
    "category": "weapon",
    "cost": "14,000 gp",
    "summary": "A rod sprouting three writhing tentacles. When activated, it makes three attacks (one per tentacle) against a single designated target within the wielder's melee reach, using its own attack bonus (+12) rather than the wielder's, each dealing 6 points of bludgeoning damage and treated as a magic weapon for overcoming damage reduction. If all three tentacles strike the same living creature in a round, that creature becomes slowed (as the slow spell) for 5 rounds (Fortitude DC 14 negates).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 60",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tentacle-rod-greater",
    "name": "Tentacle Rod, Greater",
    "category": "weapon",
    "cost": "36,000 gp",
    "summary": "A rod sprouting six writhing tentacles. When activated, it makes six attacks (one per tentacle) against a single designated target within the wielder's melee reach, using its own attack bonus (+18), each dealing 9 points of bludgeoning damage and treated as a magic weapon for overcoming damage reduction. If at least three tentacles strike the same living creature in a round, that creature becomes fatigued, and if all six strike it becomes exhausted instead (Fortitude DC 20 negates).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 61",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "trident-of-serenity",
    "name": "Trident of Serenity",
    "category": "weapon",
    "cost": "5,315 gp",
    "summary": "A +1 trident. When activated, it creates a calm emotions effect centered on the wielder that lasts 5 rounds without concentration (Will DC 16 negates); any creature that successfully saves is immune to further uses of that ability for 24 hours. This ability functions three times per day.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 61",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "viperblade",
    "name": "Viperblade",
    "category": "weapon",
    "cost": "6,302 gp",
    "summary": "A +1 dagger that secretes toxic venom, with 5 charges renewed each day at dawn. Spending 1 or more charges envenoms the blade (at no risk to the wielder) for the next attack made during the turn: the poison deals 1d6 points of Constitution damage as both primary and secondary damage, with a Fortitude save DC of 12 (1 charge), 15 (2 charges), or 18 (3 charges).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 62",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "warlocks-scepter",
    "name": "Warlock's Scepter",
    "category": "weapon",
    "cost": "8,305 gp",
    "summary": "A +1 light mace surmounted by a demonic horned skull, conferring a continuous +1 profane bonus on the holder's ranged touch attack rolls. It has 5 charges renewed each day at dawn; spending charges improves the damage of the next eldritch blast made in that round (1 charge: +1d6 damage; 3 charges: +2d6; 5 charges: +4d6), after which it remains a +1 light mace with no bonus on ranged touch attacks until its charges are restored.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 62",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-whip",
    "name": "Water Whip",
    "category": "weapon",
    "cost": "20,301 gp",
    "summary": "A +1 whip formed of a tube of water bound with a fire elemental and a water elemental. Unlike a normal whip it deals lethal damage and can affect armored creatures; while wielding it, the user is difficult to disarm (if knocked from his grasp it flows back into his hand at the start of his next turn if within 30 feet), and drawing it is always a free action. The wielder chooses when activating it whether it bears the flaming or frost property, dealing an extra 1d6 points of damage of that type.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 62",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "whip-of-webs",
    "name": "Whip of Webs",
    "category": "weapon",
    "cost": "6,301 gp",
    "summary": "A +1 whip woven from braided spider webs. When the wielder strikes a creature with it, he can activate it to wrap the target in a web of tough, leathery filaments, entangling it as if by a net for 3 rounds or until it escapes; multiple strikes are not cumulative. This ability functions three times per day.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 62",
    "sourceUrl": "",
    "ruleset": "core"
  }
,
  {
    "id": "arrow-of-biting",
    "name": "Arrow of Biting",
    "category": "ammunition",
    "cost": "506 gp",
    "summary": "A +1 arrow whose head is the fang of a gigantic snake; it can also be made as a crossbow bolt for the same price. A creature struck is injected with poison (injury, Fortitude DC 16, 1d6 Constitution / 1d6 Constitution).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "assassin-whip",
    "name": "Assassin Whip",
    "category": "weapon",
    "cost": "5,301 gp",
    "summary": "A +1 whip. Twice per day after a successful hit on a Medium or smaller target standing on the ground, the wielder can command tendrils of vegetation to spring up and entangle the target, dealing 2d6 points of damage per round for 3 rounds or until it escapes (DC 20 Strength check or DC 20 Escape Artist check as a full-round action).",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 45",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "axe-of-ancestral-virtue",
    "name": "Axe of Ancestral Virtue",
    "category": "weapon",
    "cost": "8,530 gp",
    "summary": "A +1 keen adamantine dwarven waraxe bearing a holy symbol of Moradin (relic). For a worshipper who has established the relic connection, the axe reveals itself as intelligent and sentient (LN; Int 10, Wis 17, Cha 17; speech and telepathy) and can use bless and cure moderate wounds.",
    "source": "Magic Item Compendium \u2014 Specific Weapons, p. 45",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
