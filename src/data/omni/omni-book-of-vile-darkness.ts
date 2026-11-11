/**
 * Omni sweep (2026-11-02): Book of Vile Darkness — Chapter 3's evil
 * equipment (printed pp. 37-46) and Chapter 6's evil magic items
 * (pp. 111-122). Most of this book was already cataloged by its own
 * pack: the torture and execution devices, the alchemical items, all
 * 10 drugs, all 34 poisons, the evil spell components, all 3 armor
 * and 8 weapon special abilities, the specific armors and weapons
 * (filed as equipment), the rings, staffs, and most wondrous items.
 * The remaining gaps were Chapter 3's seven example equipment traps
 * (p. 40), the priced psychic poison oils and nine further wondrous
 * items of Chapter 6 (pp. 116-117), and the book's entire artifact
 * list (pp. 117-122): the minor artifacts, the diabolic engines and
 * demonic devices, and the major artifacts including the Regalia of
 * Evil. Two Chapter 6 rods — the harrow rod and Flesheater — were
 * reprinted in the Magic Item Compendium and already exist in the
 * catalog under that source, as does the flesh ring of scorn, so
 * they are skipped here; both rods carry different prices in the two
 * books (see the omni-sweep report). The psychic poisons of
 * Chapter 3 (Table 3-7) have no prices of their own — they are
 * created by the psychic poison spell — but Chapter 6 sells them as
 * priced oils, and those oils are built here. Prices are the printed
 * market prices; summaries and notes are mechanical effects in our
 * own words. Source text is an OCR scan, so a few entries were
 * cross-checked against item indexes (noted in the omni report).
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const BOVD_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "psychic-poison-oil-darin-tasith",
    "name": "Psychic Poison Oil (Darin-tasith)",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "An oil form of the darin-tasith psychic poison, sprinkled on a creature. A spellcaster who targets the poisoned creature with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Intelligence damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-karadrach",
    "name": "Psychic Poison Oil (Karadrach)",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "An oil form of the karadrach psychic poison, sprinkled on a creature. A spellcaster who targets the poisoned creature with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Wisdom damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-estadrach",
    "name": "Psychic Poison Oil (Estadrach)",
    "category": "wondrous-slotless",
    "cost": "1,800 gp",
    "summary": "An oil form of the estadrach psychic poison, sprinkled on a creature. A spellcaster who targets the poisoned creature with a mind-affecting or divination spell suffers the poison instead: 1d8 points of Wisdom damage initially and 2d8 points as secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-stradda",
    "name": "Psychic Poison Oil (Stradda)",
    "category": "wondrous-slotless",
    "cost": "1,600 gp",
    "summary": "An oil form of the stradda psychic poison, sprinkled on a creature or an object. A spellcaster who targets the poisoned creature or object with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Charisma damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-nishita",
    "name": "Psychic Poison Oil (Nishita)",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "An oil form of the nishita psychic poison, sprinkled on an object. A spellcaster who targets the poisoned object with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Intelligence damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-vashita",
    "name": "Psychic Poison Oil (Vashita)",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "An oil form of the vashita psychic poison, sprinkled on an object. A spellcaster who targets the poisoned object with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Wisdom damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-lanshita",
    "name": "Psychic Poison Oil (Lanshita)",
    "category": "wondrous-slotless",
    "cost": "2,200 gp",
    "summary": "An oil form of the lanshita psychic poison, sprinkled on an object. A spellcaster who targets the poisoned object with a mind-affecting or divination spell suffers the poison instead: 2d6 points of Charisma damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-blue-unlyn",
    "name": "Psychic Poison Oil (Blue Unlyn)",
    "category": "wondrous-slotless",
    "cost": "1,600 gp",
    "summary": "An oil form of the blue unlyn psychic poison, sprinkled over a 25-foot-radius area. A spellcaster who targets anything in the poisoned area with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Intelligence damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-red-unlyn",
    "name": "Psychic Poison Oil (Red Unlyn)",
    "category": "wondrous-slotless",
    "cost": "1,600 gp",
    "summary": "An oil form of the red unlyn psychic poison, sprinkled over a 25-foot-radius area. A spellcaster who targets anything in the poisoned area with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Wisdom damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-amber-unlyn",
    "name": "Psychic Poison Oil (Amber Unlyn)",
    "category": "wondrous-slotless",
    "cost": "1,600 gp",
    "summary": "An oil form of the amber unlyn psychic poison, sprinkled over a 25-foot-radius area. A spellcaster who targets anything in the poisoned area with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Charisma damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-violet-unlyn",
    "name": "Psychic Poison Oil (Violet Unlyn)",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "An oil form of the violet unlyn psychic poison, sprinkled over a 25-foot-radius area. A spellcaster who targets anything in the poisoned area with a mind-affecting or divination spell suffers the poison instead: 1d6 points of Intelligence damage initially and 2d6 points as secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychic-poison-oil-black-unlyn",
    "name": "Psychic Poison Oil (Black Unlyn)",
    "category": "wondrous-slotless",
    "cost": "2,600 gp",
    "summary": "An oil form of the black unlyn psychic poison, sprinkled over a 25-foot-radius area. A spellcaster who targets anything in the poisoned area with a mind-affecting or divination spell suffers the poison instead: 1d6 points each of Intelligence, Wisdom, and Charisma damage as both initial and secondary damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quiver-of-lies",
    "name": "Quiver of Lies",
    "category": "wondrous-arms",
    "cost": "12,000 gp",
    "summary": "A 3-inch-long quiver that holds no arrows and is worn around the wrist like a bracelet. If the wearer holds a bow or crossbow and speaks a lie, an arrow or bolt (whichever is appropriate) appears in the wearer's hand, ready for use; the ammunition lasts for 10 rounds.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rack-of-irresistible-torture",
    "name": "Rack of Irresistible Torture",
    "category": "wondrous-slotless",
    "cost": "3,000 gp",
    "summary": "A torture device that grants the torturer a +10 bonus on Intimidate checks made while using it on a victim. It weighs 275 lb.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "skull-of-fear",
    "name": "Skull of Fear",
    "category": "wondrous-slotless",
    "cost": "70,000 gp",
    "summary": "An ebony skull fashioned so it can be mounted on armor, a weapon haft, or a staff or pole. It gives the wearer or wielder an aura of fear: anyone coming within 10 feet is affected as if by a fear spell (Will DC 16 negates), and the aura can be raised or lowered with a command word.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "slime-pot",
    "name": "Slime Pot",
    "category": "wondrous-slotless",
    "cost": "11,200 gp",
    "summary": "A small black pot with a removable lid and an iron handle. If the pot is filled with water and some decaying organic matter, a patch of green slime grows in it within 24 hours; carefully dumping out the contents (a standard action) places the slime where the owner wants it, though the owner has no special control over or immunity to the slime.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 116",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spiralburst-bottle",
    "name": "Spiralburst Bottle",
    "category": "wondrous-slotless",
    "cost": "19,000 gp",
    "summary": "A glass bottle containing a tiny portal to the Ethereal Plane. Opening or shattering the bottle unleashes the spiralburst on a single creature or object — the opener, or whatever the bottle shatters against — sucking up to 10 cubic feet through the portal in a single round unless the target succeeds at a Fortitude save (DC 30); creatures drawn through are liquefied and lost on the Ethereal Plane. The bottle is consumed in the use.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, pp. 116–117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "symbol-of-demogorgon",
    "name": "Symbol of Demogorgon",
    "category": "wondrous-throat",
    "cost": "10,000 gp",
    "summary": "An unholy symbol dedicated to Demogorgon, worn as an amulet. It provides a +2 enhancement bonus to Wisdom and allows the owner to cast rotting curse of Urfestra with no corruption cost, though the spell must still be prepared normally.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tongue-studs-of-hell-breath",
    "name": "Tongue Studs of Hell Breath",
    "category": "wondrous-slotless",
    "cost": "35,000 gp",
    "summary": "Golden studs pierced through the tongue. Three times per day they turn the wearer's normal breath into a 50-foot line of hellfire dealing 3d6 points of unholy damage, with no saving throw.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vasharan-offal-bag",
    "name": "Vasharan Offal Bag",
    "category": "wondrous-slotless",
    "cost": "3,000 gp",
    "summary": "A big burlap sack filled with dung that always remains fresh and odiferous; emptying the bag destroys its power. Once per day a nonflying giant cockroach can be called out of the bag to serve the holder for 1 hour or until killed, obeying all verbal commands within 100 feet of the bag; unlike other vermin it understands Common and has an Intelligence score of 3.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vasharan-worm-pod",
    "name": "Vasharan Worm Pod",
    "category": "wondrous-slotless",
    "cost": "35,000 gp",
    "summary": "A 6-inch gray seed pod that must be forcibly inserted into a helpless character's stomach (dealing 3d6 points of damage). Gray-white worms grow inside for 2d10 days, dealing 1d4 points of damage per day; once grown, the host can spit a worm up to 30 feet away (ranged touch attack), up to three times per day — a worm that hits burrows to the vital organs, and the target must succeed at a Fortitude save (DC 18) or die in 1d4 rounds, taking 2d6 points of damage per round for 1d4 rounds even on a successful save.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items, p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "angel-blood",
    "name": "Angel Blood",
    "category": "artifact",
    "cost": "—",
    "summary": "The blood of a celestial, gathered and stored in a flask during a special ritual; it is not a created magic item. Thrown as a grenadelike weapon, it deals 5d6 points of acid damage, but only against noncelestial creatures.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "angel-tears",
    "name": "Angel Tears",
    "category": "artifact",
    "cost": "—",
    "summary": "Tiny crystals gathered from places where angels have felt sorrow or pain. Hurled as weapons (they work well in slings), they deal 3d6 points of damage to any creature they break against, the target is automatically exhausted, and the target must succeed at a Fortitude save (DC 18) or take 1d8 points of Strength drain.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "demon-blood",
    "name": "Demon Blood",
    "category": "artifact",
    "cost": "—",
    "summary": "Dark blood gathered using a special process and an unholy ritual. When it is sprinkled over a 100-foot-radius area, that area is treated as though affected by an unhallow spell, and nothing natural can ever grow in the area again.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 117",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "demonstone",
    "name": "Demonstone",
    "category": "artifact",
    "cost": "—",
    "summary": "A 2-inch-diameter dark rock shaped like a demonic creature, which sometimes seems to whisper foul entreaties. Its owner gains a +1 luck bonus on attacks, damage, skill checks, and saving throws; after a day within 5 feet of it, a character must succeed at a Will save (DC 15, increasing by 1 each day) or do as the stone compels and become chaotic evil. The bonus lasts until the brittle stone is destroyed (hardness 4, 10 hp, break DC 24) or someone else succumbs to it.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), pp. 117–118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "devil-blood",
    "name": "Devil Blood",
    "category": "artifact",
    "cost": "—",
    "summary": "Black ichor which, used to coat a blade, acts as a poison for the next thirteen times the weapon strikes: Fortitude DC 20, initial damage 1d6 points of Strength damage and secondary damage 2d6 points of Strength damage.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "kython-armor",
    "name": "Kython Armor",
    "category": "artifact",
    "cost": "—",
    "summary": "Armor that looks like a dead adult kython; a wearer who crawls into it has it fuse to him, though it can be removed later. It is +3 full plate, allows the wearer to use kython weapons as if he were a kython and to use its claws (1d8 points of damage) as natural weapons, and adds a +10 bonus on any attempt to disguise the wearer as an actual adult kython.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "midnight-blade",
    "name": "Midnight Blade",
    "category": "artifact",
    "cost": "—",
    "summary": "A +5 bastard sword that is unholy, fleshgrinding, and marrowcrushing, but only at night; during the day it has merely its +5 enhancement bonus. It must be used to draw blood from at least one creature of Medium size or larger each night, or it loses all abilities and becomes a –4 cursed bastard sword until it is used to slay such a creature at night.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rhapsody-of-pain",
    "name": "Rhapsody of Pain",
    "category": "artifact",
    "cost": "—",
    "summary": "Earrings that let the wearer function as if continually under the effects of both a sadism and a masochism spell. The wearer is also immune to the debilitating effects of pain, such as those brought on by a symbol of pain, although she still feels the pain.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-the-dread-emperor",
    "name": "Ring of the Dread Emperor",
    "category": "artifact",
    "cost": "—",
    "summary": "A black ring made from a single piece of obsidian with a gold inlay design of chains. If a humanoid of at least 10th level is killed on a given day by the wearer, the wearer takes no penalties for wearing armor (no armor check penalty, no maximum Dexterity bonus limit, no spell failure chance, no reduced movement) and gains the effect of a free action spell for the next 24 hours.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-malice",
    "name": "Staff of Malice",
    "category": "artifact",
    "cost": "—",
    "summary": "A 6-foot shaft of hardened black wood tipped with metal spear points, usable as a +3 unholy quarterstaff or a +3 unholy shortspear. Like all staffs it has 50 charges, powering bestow greater curse (1 charge, DC 21), boneblast (1 charge, DC 16), destruction (1 charge, DC 21), pestilence (2 charges, DC 22), stop heart (1 charge, DC 18), wrack (1 charge, DC 17), and wretched blight (15d8 damage, 2 charges, DC 23); when the charges are gone the staff disappears, only to reappear fully charged somewhere else in the multiverse.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vasharan-crossbow",
    "name": "Vasharan Crossbow",
    "category": "artifact",
    "cost": "—",
    "summary": "A +4 heavy crossbow that can be loaded and fired as quickly as a light crossbow can. Any bolt it fires is automatically treated as a bolt of slaying humans (as an arrow of slaying).",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Minor Artifacts), p. 118",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cauldron-of-zombie-spewing",
    "name": "Cauldron of Zombie Spewing",
    "category": "artifact",
    "cost": "—",
    "summary": "A diabolic engine built around a gigantic black cauldron 13 feet in diameter. When fifty Medium corpses are thrown in with strange chemicals and a single dose of liquid pain, the contents stew for 24 hours and then spew forth 4d12 Medium zombies, which obey the commands of any devil present within the first 3 rounds of their creation. The cauldron has hardness 10, 250 hp, and a break DC of 35 (the glass portions and tubing are hardness 1, 20 hp, break DC 12).",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Diabolic Engines), pp. 118–119",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "demonic-graft-machine",
    "name": "Demonic Graft Machine",
    "category": "artifact",
    "cost": "—",
    "summary": "A demonic device of metal tubes, gears, arms, and wheels, fronted by a hideous face with a wide open mouth. Anyone within 5 feet of the mouth must succeed at a Reflex save (DC 15) or be dragged inside: the machine deals 6d6 points of damage over one round, then restores 5d6 points as it grafts on a random demonic addition (a tendril claw arm, a muscular clawed arm granting +2 inherent Strength, thick legs granting +2 Constitution, slim agile legs granting +10 ft. speed and +5 on Climb and Jump checks, or a demonic familiar face). Each addition requires a soul fed into the machine; the machine has hardness 10, 200 hp, and a break DC of 35.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Demonic Devices), pp. 119–120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pain-pit",
    "name": "Pain Pit",
    "category": "artifact",
    "cost": "—",
    "summary": "A yugoloth device: a metal cauldron 10 feet across and 20 feet deep containing several giant leeches, holding up to five Medium or smaller creatures. Foot-long leeches attach to the victims and extract one dose of liquid pain per victim over the course of a day into a storage vat (capacity one hundred doses), after which the leeches consume the victim. The cylinder has hardness 10, 300 hp, and a break DC of 35.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Diabolic Engines), p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "angelwing-razor",
    "name": "Angelwing Razor",
    "category": "artifact",
    "cost": "—",
    "summary": "A +5 vorpal longsword honed on the wings of dead and captive celestials, giving it an impossibly fine edge. It ignores damage reduction and hardness of any kind, and can even cut through a wall of force or similar effect.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "death-rock",
    "name": "Death Rock",
    "category": "artifact",
    "cost": "—",
    "summary": "A crude black stone the size of a fist that pulses like a beating heart, said to be the heart of an evil demon lord or demigod. Anyone possessing it gains the spellcasting abilities of a sorcerer of a level equal to his own, knowing only spells of the Necromancy school (in addition to a sorcerer's own abilities). Once per week, the owner's closest companion or dearest loved one is automatically slain and turned into a zombie that serves the owner, unless the owner forsakes the rock, which then immediately fades away.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 120",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "despoiler-of-flesh",
    "name": "Despoiler of Flesh",
    "category": "artifact",
    "cost": "—",
    "summary": "A short staff made of human tongues sewn together end to end, slightly animated so it occasionally bends and curls on its own. It allows the wielder to reshape the flesh of any creature as with a polymorph other spell, except that any shape the wielder can imagine can be bestowed; a form that is unwieldy or untenable collapses. Victims may resist each change with a Fortitude save (DC 25), and the wielder can make one change per round.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), pp. 120–121",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "iron-flask-of-tuerny-the-merciless",
    "name": "Iron Flask of Tuerny the Merciless",
    "category": "artifact",
    "cost": "—",
    "summary": "A very small, plain iron flask with a rune-engraved stopper that imprisons and controls demons; it holds up to one hundred demons. The owner can command one demon out for up to 8 hours (no demon more than once per week) and controls its actions, and can attempt to imprison a demon within 30 feet (Will DC 20, using the flask's 30th caster level against spell resistance). Each new imprisonment risks 1d4 other demons attempting escape, and calling or imprisoning demons risks the owner becoming chaotic evil or losing the demon, which then turns on him.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 121",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ruby-rod-of-asmodeus",
    "name": "Ruby Rod of Asmodeus",
    "category": "artifact",
    "cost": "—",
    "summary": "A scepter of unimaginable luster, worth more than one million gold pieces in gem value alone. In melee it is a +6 unholy greatclub that bestows an inflict critical wounds spell (cast at 20th level, Will DC 19 half) on anyone it touches, and anyone who touches the rod against Asmodeus's will suffers the same effect. At will for Asmodeus and once per day for anyone else (as spells cast by a 20th-level caster): a 150-foot line of lightning (20d6 electricity, Reflex DC 23 half), a 300-foot line of acid (20d6, DC 23 half), a 75-foot cone of cold (20d6, DC 23 half), an aura of might (melee attackers must succeed at a Will save DC 20 or bow down helpless for 1 round), and the Reverie of Nessus, which encases the wielder in a spherical wall of force surrounded by an antimagic field for 3 rounds of purging and full restoration.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), pp. 121–122",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-wand-of-orcus",
    "name": "The Wand of Orcus",
    "category": "artifact",
    "cost": "—",
    "summary": "A black obsidian and iron rod topped with the skull of a human hero slain by Orcus. Wielded in melee it is a +6 unholy chaotic heavy mace, and if it touches any nonoutsider, or an outsider with less than 15 HD, the target must succeed at a Fortitude save (DC 25) or die immediately, as must anyone who touches the wand against Orcus's will. It confers a +5 deflection bonus to the wielder's Armor Class, and once per day each, as spells cast by a 20th-level caster: abyssal might, bodak birth, call nightmare, clutch of Orcus (DC 18), summon monster VII, wrack (DC 18), and wretched blight (15d8 damage, DC 23).",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 122",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crown-of-evil",
    "name": "Crown of Evil",
    "category": "artifact",
    "cost": "—",
    "summary": "The crude iron crown of the Regalia of Evil, fashioned to look like black flames wreathing the wearer's head; an evil wearer's head is surrounded by reddish-black fire that conceals his face. It grants fire immunity, a +4 enhancement bonus to Strength, a +4 deflection bonus to Armor Class, and spell resistance 20, with unnerving gaze at will and create undead, hellfire, and wall of fire each three times per day, all at 20th caster level. The wearer can speak only lies while wearing the crown.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 122",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scepter-of-evil",
    "name": "Scepter of Evil",
    "category": "artifact",
    "cost": "—",
    "summary": "The iron rod of the Regalia of Evil, draped in chains with a dark red flame always lit at one end that gives off no heat. While in a character's possession it confers a +4 enhancement bonus to Charisma, and the wielder can use fear (DC 19), corrupt fireball (DC 18), red fester (DC 18), and power leech (DC 20) each three times per day at 20th caster level. The owner of this device slowly becomes more and more egotistical.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 122",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "orb-of-evil",
    "name": "Orb of Evil",
    "category": "artifact",
    "cost": "—",
    "summary": "A 6-inch-diameter orb of pitted and scarred iron, of the Regalia of Evil; red sparks fly from it at the slightest touch. The wielder can rebuke and command undead as a 15th-level cleric can, the orb confers a +4 enhancement bonus to Wisdom while in a character's possession, and it can absorb spells as a rod of absorption can. The owner slowly grows greedier over time.",
    "source": "Book of Vile Darkness — Chapter 6: Evil Magic Items (Major Artifacts), p. 122",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const BOVD_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "spring-needle-trap-in-sword-hilt",
    "name": "Spring Needle Trap in Sword Hilt",
    "category": "gear",
    "cost": "225 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 2); the price includes one dose of poison. Unless a special latch is activated, a needle pricks anyone attempting to use the weapon, dealing 1 point of damage plus Medium monstrous scorpion poison (Fortitude DC 15). Search DC 30, Disable Device DC 20.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "plate-armor-locking-trap",
    "name": "Plate Armor Locking Trap",
    "category": "gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 1) that works with plate armor, half-plate, banded mail, or scale mail. If the wearer doesn't undo particular latches and detach inconspicuous wires, the armor's joints lock, imposing a –12 armor check penalty on appropriate checks. Search DC 30, Disable Device DC 20.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "detaching-axe-blade",
    "name": "Detaching Axe Blade",
    "category": "gear",
    "cost": "40 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 1) that can be placed on virtually any weapon. Unless two special latches are secured, the head flies off during the first attack, leaving the weapon unusable. Search DC 30, Disable Device DC 20.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poison-gas-spray-in-coin-purse",
    "name": "Poison Gas Spray in Coin Purse",
    "category": "gear",
    "cost": "625 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 3); the price includes one dose of poison. Opening the purse without turning a knob hidden in the latch sprays ishentav poison gas in a cloud affecting only the opener (Fortitude DC 15). Search DC 30, Disable Device DC 20.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "alchemists-fire-spray-in-breastplate",
    "name": "Alchemist's Fire Spray in Breastplate",
    "category": "gear",
    "cost": "110 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 1). Donning the breastplate carelessly shatters a glass container and sprays the wearer with alchemist's fire for 2d6 points of damage (Reflex DC 20 for half); once the armor is strapped on, a pressure lever secures the vial until the armor is removed. Search DC 30, Disable Device DC 20.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-trap-on-potion-vial",
    "name": "Fire Trap on Potion Vial",
    "category": "gear",
    "cost": "60 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 2). Opening the stopper sprays fire unless the opener is specifically attuned: a 5-foot-radius burst dealing 1d4+3 points of fire damage (Reflex DC 13 for half), damaging neither the vial nor the potion. Search DC 27, Disable Device DC 27.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "glyph-of-warding-on-backpack",
    "name": "Glyph of Warding on Backpack",
    "category": "gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "An example equipment trap (CR 2). Opening the backpack without speaking the proper phrase triggers a burst of acid dealing 2d8 points of damage in a 5-foot radius (Reflex DC 15 for half), probably destroying the pack's contents. Search DC 28, Disable Device DC 28.",
    "source": "Book of Vile Darkness — Chapter 3: Evil Equipment, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
