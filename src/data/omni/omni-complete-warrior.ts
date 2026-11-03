/**
 * Omni Sweep — Complete Warrior (2026-11-02).
 *
 * Everything in Complete Warrior's Chapter 4 "Magic Items" section
 * (book pp. 133-136) and "New Special Materials" that was not already
 * in the catalog under the same name. Prices are the printed Price
 * values; summaries are mechanical effects in our own words.
 *
 * Skipped as already cataloged (name match, price agrees): Explosive
 * weapon ability, Bracers of Dawn, Sacred Scabbard, and all 19 exotic
 * weapons of Table 4-6 (the 6 CW-pack records plus 13 recorded from
 * other books at identical prices). See
 * ~/workspace/omni-sweep/reports/complete-warrior.md for the full
 * enumeration ledger.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const CW_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "anti-impact",
    "name": "Anti-Impact",
    "category": "armor-special-ability",
    "cost": "+2,000 gp",
    "summary": "Armor ability: bludgeoning damage that affects all or most of the wearer's body at once, such as falling damage and constriction, is halved. It gives no extra protection against ordinary weapon damage.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "axeblock",
    "name": "Axeblock",
    "category": "armor-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor or shield ability: the wearer gains damage reduction 5/bludgeoning or piercing, turning aside slashing weapons such as axes and most swords. If two of the three block abilities (axeblock, hammerblock, spearblock) are combined on one item, the overlap still grants only DR 5 against the damage type the two share.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hammerblock",
    "name": "Hammerblock",
    "category": "armor-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor or shield ability: functions as axeblock, except that it provides damage reduction 5/piercing or slashing, turning aside bludgeoning weapons such as hammers and maces.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spearblock",
    "name": "Spearblock",
    "category": "armor-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor or shield ability: functions as axeblock, except that it provides damage reduction 5/bludgeoning or slashing, turning aside piercing weapons such as spears.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "armor-of-the-unending-hunt",
    "name": "Armor of the Unending Hunt",
    "category": "armor",
    "cost": "21,500 gp",
    "summary": "A suit of +2 mithral chainmail built for rangers on long-range patrols. The wearer is immune to fatigue and exhaustion.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blood-seeking",
    "name": "Blood Seeking",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Ranged weapon ability: ammunition flies around cover to strike a living creature, negating the target's bonus to AC from intervening cover; the shooter can even fire at a target behind full cover (which keeps total concealment and a 50% miss chance) if she knows it is there and a clear flight path exists. Does not function against plants, oozes, undead, or constructs.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "deflecting",
    "name": "Deflecting",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Melee weapon ability: once per round, when the wielder would be hit by a ranged weapon, she may make a DC 20 Reflex save (DC rises by the ranged weapon's enhancement bonus) to deflect it away harmlessly. She must be aware of the attack and not flat-footed, and the deflecting weapon must be her size or one size larger.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "disarming",
    "name": "Disarming",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon ability: on a melee weapon, it eliminates an opponent's disarm bonuses for weapon size and for wielding a weapon two-handed. On a ranged weapon, it makes a ranged disarm attack possible, shooting a weapon out of a target's hand (relative weapon sizes don't matter, but a two-handed grip still gives the defender +4).",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "exit-wound",
    "name": "Exit Wound",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Ranged weapon ability: ammunition passes entirely through a living target it hits, dealing an extra 1d6 points of damage, and continues in a straight line; further targets in the path are attacked with the same attack roll but gain +4 AC for each previous target in the path. The projectile stops when it hits an object.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "knockback",
    "name": "Knockback",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Ranged weapon ability only: whenever the weapon hits, it also makes a bull rush attempt against the target, treating the projectile as a Medium creature with a +8 Strength bonus. The attempt doesn't provoke attacks of opportunity and always pushes the target as far back as possible.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "last-resort",
    "name": "Last Resort",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Melee weapon ability: the wielder takes no -4 penalty for attacking with the weapon while grappling, and the weapon deals an extra 1d6 points of damage in a grapple for every size category the target is larger than the wielder.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "burrowing-arrow",
    "name": "Burrowing Arrow",
    "category": "ammunition",
    "cost": "167 gp",
    "summary": "A +1 arrow that embeds itself in the wound on a successful hit. The target cannot heal naturally until the arrow is pulled out; removing it deals a further 1d8 points of damage, and if the target instead receives magical healing, the arrow deals 1d8 points of damage as the magic forces it out.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lance-of-the-last-rider",
    "name": "Lance of the Last Rider",
    "category": "weapon",
    "cost": "8,306 gp",
    "summary": "A +1 lance. When the wielder charges a mounted foe from the back of a steed and hits, the weapon allows a free bull rush attempt; if it succeeds, the enemy rider is moved back but the enemy's mount stays where it is.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ogliens-final-answer",
    "name": "Oglien's Final Answer",
    "category": "weapon",
    "cost": "26,325 gp",
    "summary": "A +2 spiked chain under a persistent nondetection effect, so most spellcasters don't identify it as magic (a DC 25 Spellcraft check is required to detect its magic). It grants its wielder a +5 bonus on Perform (weapon drill) checks.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gauntlet-of-the-dwarven-forge",
    "name": "Gauntlet of the Dwarven Forge",
    "category": "wondrous-hands",
    "cost": "24,000 gp",
    "summary": "An iron gauntlet that is always cool to its wearer's touch. On command it glows red-hot for 10 rounds, shedding torchlight; anyone else it touches takes 1d6+10 points of fire damage. While it glows, the wearer takes half damage from fire attacks, and no damage from fire attacks that allow a Reflex save for half if she makes the save.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gauntlet-of-lassitude",
    "name": "Gauntlet of Lassitude",
    "category": "wondrous-hands",
    "cost": "27,000 gp",
    "summary": "A leather glove bound in brass that reshapes itself to its owner's hand. With a successful melee touch attack, it slows the target for 5 rounds (Will DC 14 negates).",
    "source": "Complete Warrior — Chapter 4 (Magic Items), pp. 135-136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gauntlet-of-utterdeath",
    "name": "Gauntlet of Utterdeath",
    "category": "wondrous-hands",
    "cost": "96,000 gp",
    "summary": "A spiked gauntlet of jet-black steel, usable three times per day. On a successful melee touch attack, the target must make a DC 20 Fortitude save or be reduced to a pile of smoldering cinders; on a successful save it instead takes 10d6 points of damage.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "standard-of-courage",
    "name": "Standard of Courage",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "A banner standard that must be affixed to a two-handed hafted weapon such as a halberd or lance to be effective. The bearer and any allies within 30 feet gain a +4 morale bonus on saves against fear effects.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "standard-of-heroism",
    "name": "Standard of Heroism",
    "category": "wondrous-slotless",
    "cost": "40,000 gp",
    "summary": "Functions as a standard of courage, except that the bearer and any allies within 30 feet gain a +2 morale bonus on attack rolls, saves, and skill checks.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "standard-of-no-retreat",
    "name": "Standard of No Retreat",
    "category": "wondrous-slotless",
    "cost": "145,000 gp",
    "summary": "Functions as a standard of courage, and also blocks outward extradimensional travel within 30 feet as if creatures in the area were under a dimensional anchor spell; a creature trying to flee the area must succeed on a DC 19 Will save or its attempt fails. Travel into the area is not prevented.",
    "source": "Complete Warrior — Chapter 4 (Magic Items), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const CW_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "pandemonic-silver",
    "name": "Pandemonic Silver",
    "category": "gear",
    "cost": "+9,000 gp (light weapon), +11,000 gp (one-handed), +13,000 gp (two-handed)",
    "weight": "—",
    "notes": "Special material: has all the properties of alchemical silver. A bladed pandemonic silver weapon screams when unsheathed in at least a light breeze; creatures other than the wielder within 30 feet must make a Will save (DC 10 in light wind, rising to DC 28 in a tornado) or cower for 1d4 rounds. Coats the striking surface of steel slashing or piercing weapons; cost modifier by weapon size as listed.",
    "source": "Complete Warrior — Chapter 4 (New Special Materials), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "susalian-chainweave",
    "name": "Susalian Chainweave",
    "category": "gear",
    "cost": "+28,000 gp (light armor), +35,000 gp (medium armor), +42,000 gp (heavy armor)",
    "weight": "—",
    "notes": "Special material: an elven chain-knitting technique for chainmail-type armor. The armor stiffens at the point of impact against slashing and bludgeoning attacks, granting the wearer damage reduction 3/piercing while it is worn. Cost modifier by armor category as listed.",
    "source": "Complete Warrior — Chapter 4 (New Special Materials), p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thinaun",
    "name": "Thinaun",
    "category": "gear",
    "cost": "+10,000 gp (light weapon), +15,000 gp (one-handed), +20,000 gp (two-handed)",
    "weight": "—",
    "notes": "Special material: a dark steel alloy that traps souls. If a thinaun melee weapon is touching a creature when it dies, the creature's soul is drawn into the weapon (a new soul displaces an old one) and cannot be raised unless the caster has the weapon; raise-type spells cost half the usual material components if the soul is in a thinaun weapon at hand. Only melee weapons made primarily of metal can be thinaun; cost modifier by weapon size as listed.",
    "source": "Complete Warrior — Chapter 4 (New Special Materials), pp. 136-137",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
