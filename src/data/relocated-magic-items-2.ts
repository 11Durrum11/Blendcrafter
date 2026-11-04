import type { MagicItemDefinition } from "@/engine/types";

/**
 * Second barrel purity sweep (Shaun, 2026-11-04: "Do that with
 * everything magic non magic" — "keep the magic in the magic item
 * section" and "the non-magic in the equipment section"). The
 * magic/non-magic split lives BETWEEN the two steps: anything that
 * is a magic item belongs in ALL_MAGIC_ITEMS, anything non-magic in
 * ALL_EQUIPMENT. This module carries the equipment records whose
 * own text makes them magic items, converted exactly like
 * relocated-magic-items.ts (summary = the record's notes verbatim,
 * with printed weight and, for armor/shields, total armor bonus
 * appended as their own sentences).
 *
 * Found by two scans of the equipment barrel: magic-item signals
 * (aura/caster-level lines, command words, per-day or per-charge
 * activations, item powers, "functions as a +N") and a dedicated
 * enhancement scan ("+1 keen unholy greataxe", intelligent items,
 * "+N <weapon property>") that surfaced the named specific items
 * the Ghostwalk / Book of Exalted Deeds / Book of Vile Darkness
 * equipment chapters had filed as gear. src/data/index.ts filters
 * every id in RELOCATED_MAGIC_ITEM_2_IDS out of ALL_EQUIPMENT and
 * places this list in ALL_MAGIC_ITEMS right after
 * RELOCATED_MAGIC_ITEMS, so each item exists exactly once, in its
 * proper magic section.
 *
 * Duplicates: 27 ids existed in BOTH barrels. Where the equipment
 * extraction's text was fuller, the converted record below carries
 * it (with the magic record's name spelling and section) and wins
 * by barrel order; where the magic text was fuller, the equipment
 * copy is simply filtered (DUPLICATE_EQUIPMENT_IDS in
 * barrel-overrides.ts). bladed-crossbow-mic is the Magic Item
 * Compendium's +1 bladed crossbow, converted from its equipment
 * record; the condensed magic-barrel copy filed under the plain
 * "bladed-crossbow" id (which belongs to the mundane Dragon
 * Magazine crossbow in Equipment) is superseded — see
 * SUPERSEDED_MAGIC_IDS in barrel-overrides.ts.
 *
 * Left in equipment on purpose (borderline, books file them as
 * equipment or they merely mention magic): Holy Staff and Arcane
 * Flux Detector, spell-effect foods (Halefast Bread, Wolfsbane
 * Waffles, Size Mushrooms, Demon Stew), the Joyful Horn,
 * reliquary containers, charged instrument strings, alignment-keyed
 * ritual instruments, divine candles, the Portable Star, the
 * Terran Brandy drug, special materials (including Llorannion
 * wood), steam armor rigs, and anything whose text states it is
 * nonmagical.
 */
export const RELOCATED_MAGIC_ITEMS_2: MagicItemDefinition[] = [
  {
    "id": "angelkiller",
    "name": "Angelkiller",
    "category": "weapon",
    "cost": "110,350 gp",
    "summary": "+3 unholy greatsword; any celestial it damages must succeed on a DC 20 Fortitude save or be destroyed. Weight: 15 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "armor-of-the-beast",
    "name": "Armor of the Beast",
    "category": "armor",
    "cost": "26,175 gp",
    "summary": "+1 wild studded leather armor held together with bits of bone and scale. If you have the wild shape class feature, it grants you one additional use of that ability per day (stacking with a druid's vestment). Part of the Trappings of the Beast item set (with the mantle of the beast and the ring of the beast): wearing all three grants a +5 competence bonus on wild empathy checks and treats you as one level higher for the purpose of using wild shape. Armor bonus: +4 total (base armor plus enhancement). Weight: 20 lbs.",
    "source": "Complete Champion, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
    "ruleset": "core"
  },
  {
    "id": "armor-of-the-dread-emperor",
    "name": "Armor of the Dread Emperor",
    "category": "armor",
    "cost": "14,650 gp",
    "summary": "+1 full plate with four 5-foot chains ending in neck manacles: whenever the wearer takes damage, captives held by the chains take half of it (divided among them); the wearer takes an additional -5 armor check penalty unless the captives are subdued or controlled (-2 if they are children, none if subdued children). Weight is the PHB full plate weight; the book prints none. Armor bonus: +9 total (base armor plus enhancement). Weight: 50 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 111",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "armor-of-transport",
    "name": "Armor of Transport",
    "category": "armor",
    "cost": "25,300 gp",
    "summary": "A +2 mithral breastplate prized by quick-strike forces. Once per day, on command, the wearer can use dimension door, as the spell. Caster level 7th. Weight is the mithral breastplate weight; the entry prints no weight. Armor bonus: +7 total (base armor plus enhancement). Weight: 25 lbs.",
    "source": "Heroes of Battle, p. 129",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "banisher-of-nightmares",
    "name": "Banisher of Nightmares",
    "category": "weapon",
    "cost": "18,310 gp",
    "summary": "+1 undead bane short sword made by the church of Aluvan, marked with a golden hand on a white circle. Weight is the PHB short sword weight; the book prints none. Weight: 2 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "barsolidor-the-tyrant-bane",
    "name": "Barsolidor, the Tyrant Bane",
    "category": "weapon",
    "cost": "52,515 gp",
    "summary": "Intelligent +3 longsword (AL LG; Int/Wis/Cha and ego score in the book). Lesser powers: cure moderate wounds, detect evil, detect law, zone of truth (see book).",
    "source": "Book of Exalted Deeds, p. 116",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "blackguards-blade",
    "name": "Blackguard's Blade",
    "category": "weapon",
    "cost": "9,515 gp",
    "summary": "+2 longsword of black iron engraved with evil symbols; adds +10 damage to the wielder's smite good ability. Weight: 4 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "blade-of-deception",
    "name": "Blade of Deception",
    "category": "weapon",
    "cost": "19,820 gp",
    "summary": "+3 rapier: +2 enhancement bonus on Bluff checks to feint in combat while wielding it, and a successfully feinted opponent cannot make attacks of opportunity against you until the start of its next turn. (Moderate illusion; CL 9th.)",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf",
    "ruleset": "core"
  },
  {
    "id": "blade-of-righteous-war",
    "name": "Blade of Righteous War",
    "category": "weapon",
    "cost": "12,315 gp",
    "summary": "A +1 longsword with a blood groove and a blood-red ruby in its pommel holding a deity's holy symbol; favored by paladins and certain clerics. Any time you roll a critical threat with it, you can sacrifice a turn/rebuke undead attempt as a free action to gain a +4 bonus on the roll made to confirm the critical threat (decided before the confirmation roll). Part of the Regalia of Righteous War set (see the bastion of righteous war). Weight: 4 lbs.",
    "source": "Complete Champion, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
    "ruleset": "core"
  },
  {
    "id": "bladed-crossbow-mic",
    "name": "Bladed Crossbow",
    "category": "weapon",
    "cost": "4,660 gp",
    "summary": "This crossbow has an exceptionally strong stock, which is shaped so that you can grip and swing it as a melee weapon. You can use a bladed crossbow as either a +1 heavy crossbow for ranged attacks, or as a +1 battleaxe for melee attacks. Weight: 12 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 47",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bonecrushers",
    "name": "Bonecrushers",
    "category": "ammunition",
    "cost": "366 gp",
    "summary": "+1 undead bane arrows or crossbow bolts with bright green fletching, sold individually at the listed price.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "breastplate-of-kaltar",
    "name": "Breastplate of Kaltar",
    "category": "armor",
    "cost": "25,350 gp",
    "summary": "+1 undead controlling breastplate engraved with ram and human skulls, made by a Tereppekian Orcus-worshipper. Weight is the PHB breastplate weight; the book prints none. Armor bonus: +6 total (base armor plus enhancement). Weight: 25 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "bullet-of-sound",
    "name": "Bullet of Sound",
    "category": "ammunition",
    "cost": "196 gp",
    "summary": "A +1 sling bullet (priced singly). If it strikes a foe, every creature within a 10-foot radius takes 1d8 points of sonic damage and must succeed on a DC 13 Fortitude save or be stunned for 1 round.",
    "source": "Miniatures Handbook, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Miniatures Handbook.pdf",
    "ruleset": "core"
  },
  {
    "id": "burning-battle-gauntlets",
    "name": "Burning Battle Gauntlets",
    "category": "weapon",
    "cost": "8,310 gp",
    "summary": "Price is for a single gauntlet. Created by the fiends of Hellgate Keep for their tanarukk minions, these +1 flaming battle gauntlets are not actually on fire but are constantly hot to the touch, dealing fire damage whenever the wearer punches an opponent (and to grappling damage as well). They are hot enough to ignite flammable objects, and anyone wearing them suffers 1d6 points of fire damage per round, making them unsuitable for anyone not resistant to fire damage. Caster level 10th. Weight is the battle gauntlet weight; the entry prints no weight. Weight: 4 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "calishite-mail",
    "name": "Calishite Mail",
    "category": "armor",
    "cost": "3,840 gp",
    "summary": "A suit of +1 cooling chainmail, much sought after along the shores of the Shining Sea, particularly near the Calim Desert, where extreme temperature effectively prevents the wearing of most types of armor. The cooling property grants the wearer fire resistance 5. Caster level 6th. Weight is the chainmail weight; the entry prints no weight. Armor bonus: +6 total (base armor plus enhancement). Weight: 25 lbs.",
    "source": "Races of Faerun, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "chain-of-convolution",
    "name": "Chain of Convolution",
    "category": "weapon",
    "cost": "30,705 gp",
    "summary": "A +2 spiked chain of crystal, hard as steel, pulsing with a red glow. Twice per day, as a standard action and mental command, it grants the benefit of the telekinetic maneuver power, though you can perform only bull rush, disarm, and trip maneuvers with it. Manifester level 11th. Weight: 10 lbs.",
    "source": "Complete Psionic, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "charnel-reaver",
    "name": "Charnel Reaver",
    "category": "weapon",
    "cost": "108,330 gp",
    "summary": "+3 dwarven waraxe, usually duergar-made, that utterly consumes the physical form of any living creature it slays; only true resurrection can restore the victim. Weight: 15 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "claws-of-the-leopard",
    "name": "Claws of the Leopard",
    "category": "weapon",
    "cost": "38,305 gp",
    "summary": "A pair of +2 spiked gauntlets: the wearer gains low-light vision and a +10 enhancement bonus on Climb checks, and can make a full attack at the end of a charge (as the pounce special attack). (Moderate transmutation; CL 6th.)",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf",
    "ruleset": "core"
  },
  {
    "id": "crash-ghostwalk",
    "name": "Crash",
    "category": "weapon",
    "cost": "16,315 gp",
    "summary": "+1 frost trident; grants the holder a +2 enhancement bonus to Wisdom while held or carried. Weight is the PHB trident weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "crimson-coat-of-ilpharzz",
    "name": "Crimson Coat of Ilpharzz",
    "category": "armor",
    "cost": "28,300 gp",
    "summary": "+4 leather armor embroidered with flame motifs: as a free action, up to three times per day, the wearer can ignite it for up to 1 minute — magical flames (light as a torch) that don't harm the wearer, grant a +4 deflection bonus to AC and fire resistance 15, and deal 1d4 fire damage to creatures attacking the wearer with natural or non-reach melee weapons. (Moderate abjuration; CL 12th.) Armor bonus: +6 total (base armor plus enhancement).",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-defense",
    "name": "Dagger of Defense",
    "category": "weapon",
    "cost": "58,302 gp",
    "summary": "+4 defending dagger: while held in the off hand, the bearer cannot be flanked. (Moderate abjuration; CL 12th.)",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf",
    "ruleset": "core"
  },
  {
    "id": "demonward",
    "name": "Demonward",
    "category": "weapon",
    "cost": "20,400 gp",
    "summary": "A +1 holy greatsword made of cold iron, crafted for planar wars against demons; scarred and notched from frequent contact with demonic skin.",
    "source": "Miniatures Handbook, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/Miniatures Handbook.pdf",
    "ruleset": "core"
  },
  {
    "id": "devilward",
    "name": "Devilward",
    "category": "weapon",
    "cost": "18,480 gp",
    "summary": "A +1 holy greatsword made with alchemical silver, forged in heavenly fires for use against devils. The silver imposes a -1 penalty on its damage, effectively canceling the +1 enhancement bonus.",
    "source": "Miniatures Handbook, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Miniatures Handbook.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonfire-ram",
    "name": "Dragonfire Ram",
    "category": "weapon",
    "cost": "4,000 gp",
    "summary": "A battering ram whose head depicts a dragon in mid-breath. Each strike deals an extra 1d6 points of fire damage to any wooden or flammable object it strikes, ignoring hardness; if the ram breaks through the object, it immediately breathes a 30-foot cone of fire through the opening, dealing 2d6 points of fire damage (Reflex DC 15 half). It can breathe fire once per day. Caster level 3rd. Weight: 3000 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonrider-armor",
    "name": "Dragonrider Armor",
    "category": "armor",
    "cost": "18,300 gp",
    "summary": "This suit of +1 dragonhide full plate is made from cast-off scales rather than the hide of a slain dragon. While wearing it, you have resistance 10 against the form of energy associated with the breath weapon of the dragon that provided the scales (such as fire, in the case of red dragonrider armor). You also gain a +5 competence bonus on Ride checks you make while riding any creature of the dragon type. Armor bonus: +9 total (base armor plus enhancement). Weight: 50 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 17",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonshot-catapult",
    "name": "Dragonshot Catapult",
    "category": "weapon",
    "cost": "10,000 gp",
    "summary": "A catapult bearing an elaborate dragon's head at the end of its throwing arm. Instead of normal shot or stone, the operator can load a gemstone, which is hurled as a stone of the appropriate size and explodes on impact: pearl worth 50 gp+ (all within 5 ft. take 2d6 cold, Reflex DC 14 half); obsidian worth 100 gp+ (10 ft., 4d4 acid, DC 14); emerald worth 400 gp+ (15 ft., 4d6 acid, DC 16); sapphire worth 500 gp+ (20 ft., 4d8 electricity, DC 16); ruby worth 1,000 gp+ (30 ft., 4d10 fire, DC 18). The entry prices it as +10,000 gp added to a catapult; Table 6-5 lists it at 10,000 gp. Caster level 15th. Weight: 2000 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "due-process",
    "name": "Due Process",
    "category": "weapon",
    "cost": "37,315 gp",
    "summary": "+2 lawful longsword created by the church of Chaniud; the wielder can invoke protection from chaos on himself once per day. Weight is the PHB longsword weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "dwarf-crusher",
    "name": "Dwarf Crusher",
    "category": "weapon",
    "cost": "9,010 gp",
    "summary": "This Large +1 adamantine greatclub can only be activated by a bearer who has a Strength of 21 or higher and the Power Attack feat. When it is activated, the next attack you make with a dwarf crusher in that round against a dwarf, a construct, or a creature that has the earth subtype is treated as a touch attack. You must also take at least a –5 penalty on this attack roll using the Power Attack feat in order to gain this benefit. Weight: 8 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 51",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "earth-hammer",
    "name": "Earth Hammer",
    "category": "weapon",
    "cost": "12,300 gp",
    "summary": "A +1 thundering warhammer with a large green crystal set in each side of its head. By striking the earth with it as a standard action, you produce the stomp power as augmented by a 5th-level manifester: creatures standing on the ground in a 20-foot cone must succeed on a DC 11 Reflex save or be knocked prone and take 5d4 points of nonlethal damage. Manifester level 5th. Weight: 5 lbs.",
    "source": "Complete Psionic, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "earthskin",
    "name": "Earthskin",
    "category": "armor",
    "cost": "3,150 gp",
    "summary": "A suit of +1 dendritic armor fashioned by urdunnir dwarves, who can simply stone walk into and out of the living crystal armor whenever they don't need to wear it; others must succeed on a Strength check (DC 22) to break out of the armor. If even part of the earthskin survives damage, it regrows in 8 hours. Caster level 3rd. Weight is the dendritic armor weight; the entry prints no weight. Armor bonus: +10 total (base armor plus enhancement). Weight: 60 lbs.",
    "source": "Races of Faerun, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "elemental-rockshot",
    "name": "Elemental Rockshot",
    "category": "ammunition",
    "cost": "750 gp",
    "summary": "An ordinary-looking catapult stone that can be fired from a scorpion or heavy mangonel. After it impacts (dealing damage as normal), it transforms into a Small earth elemental that attacks nearby enemies for 5 rounds before crumbling into dust. Caster level 5th. Weight: 75 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "ethereal-reaver",
    "name": "Ethereal Reaver",
    "category": "weapon",
    "cost": "40,000 gp",
    "summary": "A +2 longsword whose blade exists on both the Material and Ethereal Planes at once (the pommel and hilt exist only on your current plane). On command (a standard action) it sheds dim silvery light in a 5-foot radius, and while activated it lets you see onto the Ethereal Plane as the psionic see invisibility power and attack creatures on either plane as though they were on yours. Manifester level 7th. Weight: 4 lbs.",
    "source": "Complete Psionic, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "ezrylon",
    "name": "Ezrylon",
    "category": "weapon",
    "cost": "64,810 gp",
    "summary": "Intelligent +2 demon bane short sword of Solanian truesteel with a +4 ring of protection built into its pommel (the ring functions only while the sword is drawn and the wielding hand wears no other ring). +1 on critical confirmation rolls (truesteel). Lesser powers: daze monster 3/day, 10 ranks Knowledge (the planes).",
    "source": "Book of Exalted Deeds, p. 117",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "fate-of-the-undevoured",
    "name": "Fate of the Undevoured",
    "category": "weapon",
    "cost": "18,315 gp",
    "summary": "+1 undead bane scimitar made by the church of Dracanish. Weight is the PHB scimitar weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "fiendhunter-two-bladed-sword",
    "name": "Fiendhunter Two-Bladed Sword",
    "category": "weapon",
    "cost": "32,380 gp",
    "summary": "A two-bladed sword whose green tip crackles with green sparks and whose red tip is limned with a dull red glow. The green side is a +1 sure striking weapon that forces any evil extraplanar creature hit by it to succeed on a Will save (DC 16) or suffer a dismissal effect (as the spell from an 8th-level caster), three times per day. The red side is also a +1 sure striking weapon, but evil extraplanar creatures hit by it are unable to engage in extradimensional travel (as the dimensional anchor spell) for 8 minutes, also three times per day. Caster level 8th. Weight is the two-bladed sword weight; the entry prints no weight. Weight: 10 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "first-thaw",
    "name": "First Thaw",
    "category": "weapon",
    "cost": "12,500 gp",
    "summary": "+1 frost quarterstaff whose bearer is protected by endure elements (cold) at all times. Weight is the PHB quarterstaff weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "fleshshifter-armor",
    "name": "Fleshshifter Armor",
    "category": "armor",
    "cost": "13,160 gp",
    "summary": "+1 leather armor made from humanoid skins; the wearer can produce an alter self effect at will. Weight is the PHB leather armor weight; the book prints none. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 111",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "foesplitter-axe",
    "name": "Foesplitter Axe",
    "category": "weapon",
    "cost": "7,480 gp",
    "summary": "A +1 keen battleaxe with a steel haft (hardness 10, 25 hp), crafted by the shield dwarves of the North. Caster level 6th; the creator must be a shield dwarf. Weight is the battleaxe weight; the entry prints no weight. Weight: 6 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "fountainhead-arrow",
    "name": "Fountainhead Arrow",
    "category": "ammunition",
    "cost": "306 gp",
    "summary": "A fountainhead arrow is an otherwise normal arrow designed to be targeted at a point on the ground, a wall, or any other flat surface. If you hit the target area (treat as AC 5), the arrow creates a geyser of spewing acid. Each round on your turn (starting on the turn you fired the arrow), the arrow creates a 10-foot-radius burst of acid that deals 2d8 points of acid damage to all creatures in the area (Reflex DC 14 half). This effect continues for 3 rounds.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "foxhide-armor",
    "name": "Foxhide Armor",
    "category": "armor",
    "cost": "10,160 gp",
    "summary": "While wearing this suit of +1 leather, you gain a +2 competence bonus on Hide and Move Silently checks. In addition, the armor has three other special properties. Once per day, you can activate the armor to gain a +4 enhancement bonus to Intelligence for 9 minutes. Two times per day, you can activate the armor to gain the scent special quality (MM 314) for 5 rounds. Three times per day, you can activate the armor to gain the benefit of a pass without trace spell. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 18",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "galeb-duhr-hammer",
    "name": "Galeb Duhr Hammer",
    "category": "weapon",
    "cost": "5,312 gp",
    "summary": "A galeb duhr hammer acts as a +1 warhammer. In addition, if you have the stonecunning racial ability, the hammer gains an extra ability. Whenever you score a critical hit with a galeb duhr hammer against a creature standing on the ground, the surface your target is standing on attempts to hold the creature in place. For 5 rounds, the victim's speed falls to 5 feet and it takes a –2 penalty on attack rolls and to AC. Weight: 15 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 52",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gharriakha-the-hearthwarden",
    "name": "Gharriakha, the Hearthwarden",
    "category": "weapon",
    "cost": "61,830 gp",
    "summary": "Intelligent +4 defending dwarven waraxe holding the spirit of a dwarven defender: AL LG; Int 13, Wis 13, Cha 8; empathy, 60-ft. darkvision and hearing; Ego 10. Lesser powers: cure moderate wounds 3/day, deathwatch. Ancestor weapons are dwarvencraft, have Ego 2 higher than a normal intelligent item, and resist serving anyone outside the deceased's bloodline. (Strong abjuration; CL 15th.) Weight: 8 lb.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf",
    "ruleset": "core"
  },
  {
    "id": "grim-defender",
    "name": "Grim Defender",
    "category": "armor",
    "cost": "11,350 gp",
    "summary": "+1 breastplate: once per day the wearer can transfer the damage of a melee attack dealt to him to another creature (not the attacker) within 100 feet; if that creature succeeds on a DC 16 Fortitude save it takes no damage and the wearer takes double damage. Weight is the PHB breastplate weight; the book prints none. Armor bonus: +6 total (base armor plus enhancement). Weight: 30 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 111",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "guerrilla-spear",
    "name": "Guerrilla Spear",
    "category": "weapon",
    "cost": "32,301 gp",
    "summary": "+2 shortspear: deals an extra 2d6 damage on a successful attack against an opponent denied its Dexterity bonus to Armor Class. (Moderate illusion; CL 7th.)",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf",
    "ruleset": "core"
  },
  {
    "id": "harrowheart",
    "name": "Harrowheart",
    "category": "weapon",
    "cost": "15,320 gp",
    "summary": "+2 rapier that deals x3 damage when it scores a critical hit on a creature of good alignment, rather than the normal x2. Weight: 3 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "hells-heart-arrow",
    "name": "Hell's Heart Arrow",
    "category": "ammunition",
    "cost": "60 gp",
    "summary": "+1 arrow that passes through creatures of evil alignment: they give no cover bonus and do not count for the -4 penalty for firing into melee.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "hellwasp-shot",
    "name": "Hellwasp Shot",
    "category": "ammunition",
    "cost": "2,500 gp",
    "summary": "A hardened mound of mud that can be loaded into any stone-throwing catapult. On impact it deals no damage but breaks open and spews out a magically summoned swarm of hellwasps filling a 10-foot cube, attacking all creatures within that area for 10 rounds before disappearing; if it lands in a unit of creatures of 6 HD or less, it also forces a morale check. Caster level 10th. Weight: 20 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "holorans-chainmail",
    "name": "Holoran's Chainmail",
    "category": "armor",
    "cost": "36,300 gp",
    "summary": "+2 chainmail with the negative energy protection and undead disrupting abilities, bearing Aluvan's symbol. Weight is the PHB chainmail weight; the book prints none. Armor bonus: +7 total (base armor plus enhancement). Weight: 40 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "iasalas-the-watershod",
    "name": "Iasalas, the Watershod",
    "category": "weapon",
    "cost": "48,100 gp",
    "summary": "Intelligent +1/+1 ki focus quarterstaff (both ends have the ki focus ability). Lesser powers: water walk 3/day (wielder only), 10 ranks Sense Motive.",
    "source": "Book of Exalted Deeds, p. 117",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "kerrenderit-arrow",
    "name": "Kerrenderit Arrow",
    "category": "ammunition",
    "cost": "350 gp",
    "summary": "A single +1 arrow made from ice crystals from the Great Glacier, fashioned by the arctic dwarves. Kerrenderit arrows have the wounding special ability and a range increment 25 feet farther than normal arrows; if exposed to temperatures above 50 degrees for more than 1 hour, their icy arrowheads melt into uselessness. Caster level 12th. Weight: 0.2 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "kihanams-mace",
    "name": "Kihanam's Mace",
    "category": "weapon",
    "cost": "18,312 gp",
    "summary": "+2 torturous heavy mace with an iron skull head, created by a ghast cleric of Orcus. Weight is the PHB heavy mace weight; the book prints none. Weight: 8 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "kisses-of-traagash",
    "name": "Kisses of Traagash",
    "category": "ammunition",
    "cost": "366 gp",
    "summary": "+1 ghost bane arrows, sold individually at the listed price.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "kodate-of-the-spirit-dragon",
    "name": "Kodate of the Spirit Dragon",
    "category": "shield",
    "cost": "6,165 gp",
    "summary": "A +1 buckler of silver-plated steel with a shen lung dragon scale embedded in its center. While it is held, its owner can speak and understand the Spirit Tongue, and twice per day the owner can become ethereal for 1 round as a swift action (similar to the ethereal jaunt spell). Caster level not fully legible in the scan; weight is the standard buckler weight. Armor bonus: +2 total (base armor plus enhancement). Weight: 5 lbs.",
    "source": "Dragon Magic, p. 102",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
    "ruleset": "core"
  },
  {
    "id": "lash-of-the-sands",
    "name": "Lash of the Sands",
    "category": "weapon",
    "cost": "56,400 gp",
    "summary": "A +2 desiccating burst whip formed of permanently stabilized shapesand. Twice as heavy as a normal whip, it deals lethal damage effective even against opponents in armor, and can entangle a hit opponent as an animate rope spell (caster level 12th); an entangled opponent takes 1d6 points of dessication damage per round.",
    "source": "Sandstorm, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/Sandstorm.pdf",
    "ruleset": "core"
  },
  {
    "id": "lifequencher",
    "name": "Lifequencher",
    "category": "weapon",
    "cost": "14,800 gp",
    "summary": "A +1 sundering bastard sword with a blackened blade and a permanent conduit to the Negative Energy Plane; you can attack a foe's weapon as if you had the Improved Sunder feat. As a swift action, three times per day, you can imbue the blade with the stygian weapon power: in conjunction with a successful strike, the foe gains 1d4 negative levels for 1 round (a foe that gains at least as many negative levels as it has Hit Dice is stunned for 1 round instead). Manifester level 9th. Weight is the PHB bastard sword weight; the stat block's weight line did not survive the scan legibly. Weight: 6 lbs.",
    "source": "Complete Psionic, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "lightning-ballista",
    "name": "Lightning Ballista",
    "category": "weapon",
    "cost": "15,000 gp",
    "summary": "A magic light ballista that uses no traditional ammunition: instead it fires a 60-foot line of lightning when triggered. Creatures in the path take 5d6 points of electricity damage (Reflex DC 14 half). It can be fired only once per minute (every other round in a stormy environment) and requires no loading time or attack roll. Caster level 5th. Weight: 400 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "lunistra-the-heartstar",
    "name": "Lunistra, the Heartstar",
    "category": "armor",
    "cost": "71,850 gp",
    "summary": "Intelligent +4 soulfire breastplate shaped like a lupinal guardinal's visage. Lesser power: cure moderate wounds 3/day on the wearer only; it readies the cure if the wearer drops to 0 hp or fewer. Armor bonus: +9 total (base armor plus enhancement).",
    "source": "Book of Exalted Deeds, p. 117",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "mace-of-undead-prowess",
    "name": "Mace of Undead Prowess",
    "category": "weapon",
    "cost": "7,812 gp",
    "summary": "+1 heavy mace capped with a carved obsidian skull; a wielder who can rebuke or command undead does so as a cleric two levels higher. Weight is the PHB heavy mace weight; the book prints none. Weight: 8 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "maladurs-warhammer",
    "name": "Maladur's Warhammer",
    "category": "weapon",
    "cost": "35,912 gp",
    "summary": "+2 disruption warhammer; the wielder can detect undead once per day on command. Weight is the PHB warhammer weight; the book prints none. Weight: 6 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "moon-ivy-armor-pheromones",
    "name": "Moon-Ivy Armor, Pheromones",
    "category": "armor",
    "cost": "16,500 gp",
    "summary": "Moon-ivy armor grafted with pheromone ivy: once per day +3 on Charisma-based checks for 3 hours (+6 against creatures with scent) Armor bonus: +4 total (base armor plus enhancement). Weight: 5 lb.",
    "source": "Arms and Equipment Guide — Chapter 1: Weapons and Armor, Table 1–8, p. 15",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "moon-ivy-armor-poison-ivy",
    "name": "Moon-Ivy Armor, Poison Ivy",
    "category": "armor",
    "cost": "16,500 gp",
    "summary": "Moon-ivy armor grafted with poison ivy: once per day a grappled foe must save (Fort DC 14) or take 1d3 temporary Constitution damage, initial and secondary Armor bonus: +4 total (base armor plus enhancement). Weight: 5 lb.",
    "source": "Arms and Equipment Guide — Chapter 1: Weapons and Armor, Table 1–8, p. 15",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "morzhul-the-forgeheart",
    "name": "Morzhul, the Forgeheart",
    "category": "weapon",
    "cost": "127,212 gp",
    "summary": "Intelligent +2 flaming burst warhammer holding the spirit of a cleric of the forge-god: AL CN; Int 18, Wis 10, Cha 16; speech, telepathy, 120-ft. darkvision, blindsense, hearing; Ego 25. Lesser powers: daze monster 3/day, faerie fire 3/day, 10 ranks in Intimidate. Greater power: wall of fire in a ring 1/day. Special purpose: defeat/slay creatures with the cold subtype; dedicated power 10d6 fireball. (Strong evocation; CL 15th.) Weight: 5 lb.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf",
    "ruleset": "core"
  },
  {
    "id": "oathkeeper-ghostwalk",
    "name": "Oathkeeper",
    "category": "weapon",
    "cost": "29,312 gp",
    "summary": "+1 thundering warhammer graven with Durann's symbol; the wielder can use discern lies once per day. Weight is the PHB warhammer weight; the book prints none. Weight: 6 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "painjector",
    "name": "Painjector",
    "category": "weapon",
    "cost": "120,000 gp",
    "summary": "+4 unholy wounding injector with a huge serrated needle: any injection placed into it that was created from a spell with the Evil descriptor becomes more potent, gaining the benefits of the Maximize Spell feat.",
    "source": "Sorcery & Steam, Chapter 4: Steamcraft and Black Powder, p. 132",
    "sourceUrl": "/A POC DM related/Desktop/Sorcery & Steam.pdf",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "paladincutter",
    "name": "Paladincutter",
    "category": "weapon",
    "cost": "32,320 gp",
    "summary": "+1 keen unholy greataxe with a hole drilled through the blade, created by a cleric of Phaant. Weight is the PHB greataxe weight; the book prints none. Weight: 12 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "patient-lesson",
    "name": "Patient Lesson",
    "category": "weapon",
    "cost": "11,900 gp",
    "summary": "+1 merciful quarterstaff carved with a pastoral scene; it can also cure light wounds (1d8+5) once per day. Weight is the PHB quarterstaff weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "quietus-stiletto",
    "name": "Quietus Stiletto",
    "category": "weapon",
    "cost": "50,308 gp",
    "summary": "A +1 keen kukri with a blade of jade; it hums and glows pale blue-green when undead are within 60 feet, louder as they approach. On a critical hit against an undead creature it severs the creature's connection to the Negative Energy Plane, instantly destroying it; intelligent undead receive a DC 20 Will save to resist, but mindless undead are severed automatically. It deals no extra damage on such a critical hit. Manifester level 13th. Weight: 2 lbs.",
    "source": "Complete Psionic, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapid-wrath",
    "name": "Rapid Wrath",
    "category": "weapon",
    "cost": "11,702 gp",
    "summary": "+1 mighty cleaving shortspear that doubles the speed of a creature carrying it. Weight is the PHB shortspear weight; the book prints none. Weight: 3 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "razor-armor",
    "name": "Razor Armor",
    "category": "armor",
    "cost": "5,600 gp",
    "summary": "+2 scale armor of razor-sharp scales: deals 2d6 slashing damage on a successful grapple check and while grappling; once per day the wearer can launch up to six scales as +1 shuriken. Weight is the PHB scale mail weight; the book prints none. Armor bonus: +6 total (base armor plus enhancement). Weight: 25 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 111",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "redeemed-demon-armor",
    "name": "Redeemed Demon Armor",
    "category": "armor",
    "cost": "88,590 gp",
    "summary": "Demon armor redeemed to good: remains +4 full plate and still allows claw attacks (1d10 damage, striking as +1 weapons) that also affect the target as a sword of conscience spell (Will DC 16 negates). Bestows one negative level on any nongood wearer. Cost to redeem: 3,478 XP. Armor bonus: +12 total (base armor plus enhancement).",
    "source": "Book of Exalted Deeds, p. 120",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "redeemed-nine-lives-stealer-holy",
    "name": "Redeemed Nine Lives Stealer (+1 Holy Longsword)",
    "category": "weapon",
    "cost": "18,315 gp",
    "summary": "A nine lives stealer redeemed while it still can steal life becomes a +1 holy longsword. Cost to redeem: 720 XP.",
    "source": "Book of Exalted Deeds, p. 120",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "redeemed-nine-lives-stealer-plain",
    "name": "Redeemed Nine Lives Stealer (+2 Longsword)",
    "category": "weapon",
    "cost": "8,315 gp",
    "summary": "A nine lives stealer redeemed after its life-stealing power is spent becomes a +2 longsword with no special qualities. Cost to redeem: 320 XP.",
    "source": "Book of Exalted Deeds, p. 120",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "roaring-armor-of-ammarindar",
    "name": "Roaring Armor of Ammarindar",
    "category": "armor",
    "cost": "49,350 gp",
    "summary": "One of twelve sets of +2 breastplate decorated with silver elven runes on the front and a carved bear or dragon head on the back, all believed to be in the hands of the tanarukks of Hellgate Keep, who plundered them from Ammarindar. Any nonmagical arrow, bolt, sling bullet, or similar missile that strikes the wearer for 10 or fewer points of damage is automatically turned back to strike at the creature that fired it (damage re-rolled; the wearer suffers none). Because the carved head roars when danger approaches from the rear, the wearer gains the uncanny dodge ability of a 6th-level rogue. Caster level 13th. Weight is the breastplate weight; the entry prints no weight. Armor bonus: +7 total (base armor plus enhancement). Weight: 30 lbs.",
    "source": "Races of Faerun, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "rod-of-defiance",
    "name": "Rod of Defiance",
    "category": "weapon",
    "cost": "7,312 gp",
    "summary": "This rod can be used in combat as a +1 heavy mace. While held, each undead creature within 30 ft. is treated as having 4 fewer Hit Dice (minimum 1 HD) for turn or rebuke undead checks. (Aura: moderate necromancy; CL 10th.) Weight: 3 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 56",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-whips",
    "name": "Rod of Whips",
    "category": "weapon",
    "cost": "15,000 gp",
    "summary": "On command, a rod of whips grows a magic tendril of force from one end that functions as a whip. Once activated, a rod of whips acts as a +1 dancing whip that can strike incorporeal creatures as a force effect. A rod of whips can be activated three times per day, and each activation lasts for 10 rounds. Weight: 2 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 58",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sacrificial-knife",
    "name": "Sacrificial Knife",
    "category": "weapon",
    "cost": "3,305 gp",
    "summary": "+1 dagger adding a +3 competence bonus on Knowledge (religion) checks made when a sacrifice is performed with it. Weight: 1 lb.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "scimitar-of-the-sirocco",
    "name": "Scimitar of the Sirocco",
    "category": "weapon",
    "cost": "9,530 gp",
    "summary": "A +1 keen scimitar graced by a pommel shaped like the head of a desert hawk. It also doubles the speed of any horse or equine creature the bearer rides, much like horseshoes of speed. Caster level 8th; the creator must be Calishite. Weight is the scimitar weight; the entry prints no weight. Weight: 4 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "scorching-ballista",
    "name": "Scorching Ballista",
    "category": "weapon",
    "cost": "6,000 gp",
    "summary": "A magic light ballista that uses no traditional ammunition: instead it fires a 60-foot ray of fire when triggered. The operator makes an attack roll as normal for a ballista but need only succeed on a ranged touch attack; a target hit takes 4d6 points of fire damage. It can be fired only once per minute and requires no loading time. Caster level 3rd. Weight: 400 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "self-launching-stone",
    "name": "Self-Launching Stone",
    "category": "ammunition",
    "cost": "500 gp",
    "summary": "A magic siege stone that provides the benefit of a catapult without a machine: on command, it flies into the air and strikes as if fired from a light mangonel, automatically hitting the target square. It functions only once, like other magic siege ammunition. Caster level 9th. Weight: 40 lbs.",
    "source": "Heroes of Battle, p. 137",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/[D&D 3.5] Heroes of Battle.pdf",
    "ruleset": "core"
  },
  {
    "id": "seryl-the-laughing-bow",
    "name": "Seryl, the Laughing Bow",
    "category": "weapon",
    "cost": "38,900 gp",
    "summary": "Intelligent +2 merciful composite longbow (+4 Str bonus) made of serren wood, which grants it the ghost touch quality (nonmagical feature of the wood). Lesser powers: faerie fire 3/day, 10 ranks Diplomacy, 10 ranks Spot.",
    "source": "Book of Exalted Deeds, p. 118",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "sharkjaw",
    "name": "Sharkjaw",
    "category": "weapon",
    "cost": "18,312 gp",
    "summary": "+1 wounding heavy mace capped with a skull whose teeth are rows of shark teeth that break off in wounds and replenish automatically. Weight is the PHB heavy mace weight; the book prints none. Weight: 8 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-winged-crusade",
    "name": "Shield of the Winged Crusade",
    "category": "shield",
    "cost": "3,170 gp",
    "summary": "A +1 heavy steel shield of dull red, scaly metal. Once per day, as an immediate action, a wearer within the area of an instantaneous effect that allows a Reflex save to reduce it (such as a fireball or a breath weapon) can use the shield's translocation effect to instantaneously move 10 feet in any direction; if the movement takes him beyond the area, he doesn't need to attempt the Reflex save. Caster level 8th. Armor bonus: +3 total (base armor plus enhancement). Weight: 15 lbs.",
    "source": "Dragon Magic, p. 95",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
    "ruleset": "core"
  },
  {
    "id": "silver-sword-githyanki",
    "name": "Silver Sword, Githyanki",
    "category": "weapon",
    "cost": "50,530 gp",
    "summary": "+1 silvered greatsword whose blade flows like liquid silver when drawn: a target hit must succeed on a DC 17 Fortitude save or lose any psionic abilities for 1d4 rounds, and the wielder can sunder an astral traveler's silver cord. Weight is the PHB greatsword weight; the book prints none in the entry. Weight: 8 lbs.",
    "source": "Expanded Psionics Handbook, Chapter 7: Psionic Items, p. 167",
    "sourceUrl": "/A POC PC related/4.Core books/monster manuals/Expanded Psionics Handbook.pdf",
    "ruleset": "core"
  },
  {
    "id": "skewer-of-gnomes",
    "name": "Skewer-of-Gnomes",
    "category": "weapon",
    "cost": "9,302 gp",
    "summary": "Carried primarily by kobold heroes, these spears were designed to be true to their name. When you carry a skewer-of-gnomes, it functions as a Small +1 gnome bane spear if you are lawful evil, lawful neutral, or neutral evil. Relic Power: If you have established the proper divine connection, the spear also gains the unholy property (DMG 226) and reveals its quasisentience and abilities to you. Relic item; additional relic power with the proper divine connection (see text). Weight: 4 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 59",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "songblade",
    "name": "Songblade",
    "category": "weapon",
    "cost": "6,400 gp",
    "summary": "+1 rapier whose etched blade sings in motion: while held unsheathed, +2 enhancement bonus on Perform checks, and a bard wielding it can use bardic music one additional time per day. Its music does not function where air cannot pass over the blade. (Moderate transmutation; CL 8th.)",
    "source": "Complete Adventurer — Chapter 4: Tools and Equipment, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf",
    "ruleset": "core"
  },
  {
    "id": "soul-in-iron",
    "name": "Soul in Iron",
    "category": "weapon",
    "cost": "52,500 gp",
    "summary": "A +2 collision undead bane greatsword with a permanent conduit to the Positive Energy Plane, glowing with a white, sunlike radiance (its collision ability deals +5 damage; against undead its effective enhancement bonus is +4 and it deals +2d6 damage). On command it illuminates a 30-foot radius, and once per day as a standard action you can call on stygian erasure to remove up to four negative levels you possess. Manifester level 9th. Weight is the PHB greatsword weight; the stat block's weight line did not survive the scan legibly. Weight: 8 lbs.",
    "source": "Complete Psionic, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf",
    "ruleset": "core"
  },
  {
    "id": "spear-of-impaling",
    "name": "Spear of Impaling",
    "category": "weapon",
    "cost": "32,301 gp",
    "summary": "A +1 wounding shortspear, deadly to elves and dwarves: if the spear hits an elf or dwarf, the target must succeed on a Reflex save (DC 19) or be impaled by the spear (treat as an extra attack from the spear that hits automatically but cannot score a critical hit). Caster level 12th. Weight is the shortspear weight; the entry prints no weight. Weight: 3 lbs.",
    "source": "Races of Faerun, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf",
    "ruleset": "faerun"
  },
  {
    "id": "spear-of-the-wild",
    "name": "Spear of the Wild",
    "category": "weapon",
    "cost": "24,302 gp",
    "summary": "A +1 spear with an iron head and a dark wood shaft carved with ivy vines. It grants its wielder a +2 competence bonus on Knowledge (nature) and Survival checks. If you are a druid, a ranger, or a cleric with the Animal domain, the spear automatically casts baleful polymorph on any creature upon which it scores a critical hit (Fortitude DC 15 + your Wis modifier negates), three times per day. Weight: 6 lbs.",
    "source": "Complete Champion, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
    "ruleset": "core"
  },
  {
    "id": "spectral-arrow",
    "name": "Spectral Arrow",
    "category": "ammunition",
    "cost": "2,560 gp",
    "summary": "Invisible brilliant energy arrow that looks like a +1 arrow; bestows two negative levels rather than dealing normal damage.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "spiritwarder",
    "name": "Spiritwarder",
    "category": "weapon",
    "cost": "4,510 gp",
    "summary": "+1 short sword; once per day it can use protection from possession on the wielder, triggering automatically if the wielder is ever subject to a possession attempt. Weight is the PHB short sword weight; the book prints none. Weight: 2 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-vagabond",
    "name": "Staff of the Vagabond",
    "category": "weapon",
    "cost": "3,600 gp",
    "summary": "A battered masterwork/masterwork quarterstaff that becomes a +1/+1 quarterstaff as long as you are carrying no other weapons (natural weapons and unarmed attacks don't count, but weapons in a bag of holding or other container do). Part of the Garb of the Vagabond item set (with the cloak, robe, and sandals of the vagabond): wielding it while wearing any two of the other items gives each end the merciful property; while wearing all three, each end also gains the ki focus property. Weight: 2 lbs.",
    "source": "Complete Champion, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf",
    "ruleset": "core"
  },
  {
    "id": "sword-of-the-great-harrawing",
    "name": "Sword of the Great Harrowing",
    "category": "weapon",
    "cost": "60,315 gp",
    "summary": "An intelligent +1 dragonbane longsword (AL N; Int 10, Wis 17, Cha 17; speech and telepathy; 120 ft. darkvision and hearing; Ego score 17) with a seething hatred for all dragons. Three times per day each, it can use resist energy (20 points, its choice of type) and remove fear. Immediately after the wielder damages a dragon with it, its dragonblood consumption power activates: at the end of each of the wielder's turns, its enhancement bonus against that dragon rises by 1 if it dealt the dragon damage that round and falls by 1 if it did not (never below +1 or above the dragon's age category, counting the bane quality); the effect fades one hour after it last damages a dragon. Caster level 15th. Weight: 4 lbs.",
    "source": "Dragon Magic, p. 95",
    "sourceUrl": "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf",
    "ruleset": "core"
  },
  {
    "id": "the-spiteful-imp",
    "name": "The Spiteful Imp",
    "category": "shield",
    "cost": "46,245 gp",
    "summary": "+4 animated buckler forged in the shape of a grinning imp's face: commanded as a standard action once per day, it spits burning venom (ranged touch, 30 ft.) dealing 1d4+6 fire damage and 1d10 Constitution damage, plus another 1d10 Constitution damage 1 minute later (each instance negated by a DC 17 Fortitude save). It titters whenever it deflects a weapon. (Strong transmutation; CL 12th.) Armor bonus: +5 total (base armor plus enhancement).",
    "source": "Complete Arcane — Chapter 5: Magic Items, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf",
    "ruleset": "core"
  },
  {
    "id": "torvion-the-fifth-shield",
    "name": "Torvion, the Fifth Shield",
    "category": "shield",
    "cost": "49,659 gp",
    "summary": "Intelligent +4 angelic light steel shield of aurorum; if sundered, it is fully restored by rejoining its fragments (full-round action). Lesser powers: bless 3/day, eyes of the avoral continuously on a good-aligned owner (need not be carried to confer it). Armor bonus: +5 total (base armor plus enhancement).",
    "source": "Book of Exalted Deeds, p. 118",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "truthseeker-ancestor-weapon",
    "name": "Truthseeker (Ancestor Weapon)",
    "category": "weapon",
    "cost": "34,120 gp",
    "summary": "Intelligent +1 axiomatic greataxe holding the spirit of a long-forgotten dwarven judge: AL LN; Int 10, Wis 14, Cha 12; speech, 120-ft. darkvision and hearing; Ego 10. Lesser powers: zone of truth 3/day, 10 ranks in Sense Motive. It initiates conflict with any wielder who lies. (Strong evocation [lawful]; CL 15th.) Weight: 12 lb.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf",
    "ruleset": "core"
  },
  {
    "id": "vampire-hide-armor",
    "name": "Vampire Hide Armor",
    "category": "armor",
    "cost": "21,175 gp",
    "summary": "In addition to providing the protective qualities of +1 studded leather, a suit of vampire hide armor grants you damage reduction 5/silver or magic. Armor bonus: +4 total (base armor plus enhancement). Weight: 30 lb.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Specific Armor and Shields, p. 23",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vassal-armor",
    "name": "Vassal Armor",
    "category": "armor",
    "cost": "38,250 gp",
    "summary": "+3 exalted half-plate made with Ysgardian heartwire, which grants +2 AC solely for the roll to confirm a critical hit against the wearer. Armor bonus: +10 total (base armor plus enhancement).",
    "source": "Book of Exalted Deeds, p. 113",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "viperblade",
    "name": "Viperblade",
    "category": "weapon",
    "cost": "6,302 gp",
    "summary": "Created by cults that worship serpent deities, these +1 daggers are prized for their ability to secrete toxic venom. A viperblade has 5 charges, which are renewed each day at dawn. Spending 1 or more charges envenoms the blade (at no risk to you) for the next attack you make during this turn. The poison deals 1d6 points of Constitution damage (both primary and secondary). The save DC depends on the number of charges spent: 1 charge: Fortitude DC 12. Weight: 1 lb.",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Specific Weapons, p. 63",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "warpsword",
    "name": "Warpsword",
    "category": "weapon",
    "cost": "78,350 gp",
    "summary": "+2 greatsword infecting anyone it strikes with warp touch disease if the target fails a DC 14 Fortitude save. Weight: 10 lbs.",
    "source": "Book of Vile Darkness, Chapter 6: Magic, p. 112",
    "sourceUrl": "/A POC PC related/BoVD - Book of Vile Darkness.pdf",
    "ruleset": "core"
  },
  {
    "id": "wars-armor",
    "name": "War's Armor",
    "category": "weapon",
    "cost": "6,310 gp",
    "summary": "+1 battleaxe that grants its bearer a +1 natural armor bonus at all times (with a metallic sheen and dark tattoolike joint markings while held). Weight is the PHB battleaxe weight; the book prints none. Weight: 6 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "wars-craft",
    "name": "War's Craft",
    "category": "weapon",
    "cost": "20,308 gp",
    "summary": "+2 defending light flail; anyone may wield it as if proficient, and using the defending ability projects a ghostly shield bearing Uhanam's symbol. Weight is the PHB light flail weight; the book prints none. Weight: 4 lbs.",
    "source": "Ghostwalk, Chapter 1: All About Ghosts (Magic Items), p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/Ghostwalk.pdf",
    "ruleset": "core"
  },
  {
    "id": "weapon-of-transmutation",
    "name": "Weapon of Transmutation",
    "category": "weapon",
    "cost": "50,315 gp",
    "summary": "A plain-looking +1 longsword. After it hits a creature with damage reduction, at the beginning of the wielder's next turn it takes on the properties required to overcome that damage reduction (all of the creature's DR types, if it has several) for 10 rounds or until it strikes a creature with a different damage reduction. It gains no other benefit of the properties it takes on and always deals its normal damage.",
    "source": "Miniatures Handbook, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/Miniatures Handbook.pdf",
    "ruleset": "core"
  },
  {
    "id": "zaethwar-the-sinflayer",
    "name": "Zaethwar, the Sinflayer",
    "category": "weapon",
    "cost": "134,025 gp",
    "summary": "Intelligent adamantine +5 holy spiked chain. Lesser powers: ease pain 3/day, refreshment 3/day, 10 ranks Intimidate; greater power: detect chaotic evil at will.",
    "source": "Book of Exalted Deeds, p. 118",
    "sourceUrl": "/A POC PC related/BoED - Book of Exalted Deeds.pdf",
    "ruleset": "core"
  },
  {
    "id": "zhavak-the-sunderer",
    "name": "Zhavak the Sunderer",
    "category": "weapon",
    "cost": "99,110 gp",
    "summary": "Intelligent +2 bane (constructs) adamantine battleaxe holding the spirit of a cleric of Moradin slain by an iron golem: AL LG; Int 10, Wis 17, Cha 15; speech, telepathy, 120-ft. darkvision and hearing; Ego 18. Lesser powers: bless 3/day, cure moderate wounds 3/day, 10 ranks in Knowledge (arcana). Special purpose: defeat/slay constructs; dedicated power rusting grasp. (Strong conjuration; CL 15th.) Weight: 6 lb.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/Races of series/Races of Stone.pdf",
    "ruleset": "core"
  }
];

export const RELOCATED_MAGIC_ITEM_2_IDS: string[] = [
  "angelkiller",
  "armor-of-the-beast",
  "armor-of-the-dread-emperor",
  "armor-of-transport",
  "banisher-of-nightmares",
  "barsolidor-the-tyrant-bane",
  "blackguards-blade",
  "blade-of-deception",
  "blade-of-righteous-war",
  "bladed-crossbow-mic",
  "bonecrushers",
  "breastplate-of-kaltar",
  "bullet-of-sound",
  "burning-battle-gauntlets",
  "calishite-mail",
  "chain-of-convolution",
  "charnel-reaver",
  "claws-of-the-leopard",
  "crash-ghostwalk",
  "crimson-coat-of-ilpharzz",
  "dagger-of-defense",
  "demonward",
  "devilward",
  "dragonfire-ram",
  "dragonrider-armor",
  "dragonshot-catapult",
  "due-process",
  "dwarf-crusher",
  "earth-hammer",
  "earthskin",
  "elemental-rockshot",
  "ethereal-reaver",
  "ezrylon",
  "fate-of-the-undevoured",
  "fiendhunter-two-bladed-sword",
  "first-thaw",
  "fleshshifter-armor",
  "foesplitter-axe",
  "fountainhead-arrow",
  "foxhide-armor",
  "galeb-duhr-hammer",
  "gharriakha-the-hearthwarden",
  "grim-defender",
  "guerrilla-spear",
  "harrowheart",
  "hells-heart-arrow",
  "hellwasp-shot",
  "holorans-chainmail",
  "iasalas-the-watershod",
  "kerrenderit-arrow",
  "kihanams-mace",
  "kisses-of-traagash",
  "kodate-of-the-spirit-dragon",
  "lash-of-the-sands",
  "lifequencher",
  "lightning-ballista",
  "lunistra-the-heartstar",
  "mace-of-undead-prowess",
  "maladurs-warhammer",
  "moon-ivy-armor-pheromones",
  "moon-ivy-armor-poison-ivy",
  "morzhul-the-forgeheart",
  "oathkeeper-ghostwalk",
  "painjector",
  "paladincutter",
  "patient-lesson",
  "quietus-stiletto",
  "rapid-wrath",
  "razor-armor",
  "redeemed-demon-armor",
  "redeemed-nine-lives-stealer-holy",
  "redeemed-nine-lives-stealer-plain",
  "roaring-armor-of-ammarindar",
  "rod-of-defiance",
  "rod-of-whips",
  "sacrificial-knife",
  "scimitar-of-the-sirocco",
  "scorching-ballista",
  "self-launching-stone",
  "seryl-the-laughing-bow",
  "sharkjaw",
  "shield-of-the-winged-crusade",
  "silver-sword-githyanki",
  "skewer-of-gnomes",
  "songblade",
  "soul-in-iron",
  "spear-of-impaling",
  "spear-of-the-wild",
  "spectral-arrow",
  "spiritwarder",
  "staff-of-the-vagabond",
  "sword-of-the-great-harrawing",
  "the-spiteful-imp",
  "torvion-the-fifth-shield",
  "truthseeker-ancestor-weapon",
  "vampire-hide-armor",
  "vassal-armor",
  "viperblade",
  "warpsword",
  "wars-armor",
  "wars-craft",
  "weapon-of-transmutation",
  "zaethwar-the-sinflayer",
  "zhavak-the-sunderer",
];
