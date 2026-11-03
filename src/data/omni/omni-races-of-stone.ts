/**
 * Omni sweep Wave 2 (2026-11-02): Races of Stone — Chapter 7:
 * Equipment and Magic (printed pp. 153–170). Much of this chapter
 * was already cataloged: the five magic forges, three of the four
 * ancestor weapons (in ALL_EQUIPMENT, the fourth under the name
 * "Truthseeker (Ancestor Weapon)"), the great crossbow, the armor
 * and miscellaneous gear via the crystalkeep fan index and the
 * book's own earlier pack. What remained unbuilt was the eight
 * sample rune circles, eight of the exotic weapons, six of the
 * armors and shields, and the priced mounts from Table 7–5 (young
 * specimens ready for training and eggs, where the book prices
 * them; the young dire badger is already in the catalog via the
 * Arms and Equipment Guide at the same 100 gp, and the earthsilk
 * rope was already cataloged from this chapter). Not built:
 * dwarvencraft quality
 * (+600 gp weapons, +300 gp armor/shields — a price modifier, not
 * an item), the earth cohorts of Table 7–6 (Leadership cohorts,
 * not purchasable), mount training and upkeep (services), and the
 * donning-armor table. Prices are the printed prices; summaries
 * and notes are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const RSTONE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "deep-hollow-circle",
    "name": "Deep Hollow Circle",
    "category": "wondrous-slotless",
    "cost": "50,000 gp",
    "summary": "An immobile rune circle of 20-foot radius bound to the Elemental Plane of Earth. Whenever a creature within it casts a summon monster or summon nature's ally spell to summon a creature with the earth subtype, one additional identical creature is summoned as well; creatures summoned by a dwarf or gnome caster are also improved as if the caster had the Augment Summoning feat.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dwarfheim-circle",
    "name": "Dwarfheim Circle",
    "category": "wondrous-slotless",
    "cost": "50,000 gp",
    "summary": "An immobile rune circle of 20-foot radius. Any dwarf standing within it casts spells as if they were improved by the Quicken Spell feat, with no change to the spells' levels, and can also activate one spell-like ability per round as a free action within the same one-quickened-spell-per-round limit. Spells from magic items are unaffected.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 168",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dwarven-holdfast-ring",
    "name": "Dwarven Holdfast Ring",
    "category": "wondrous-slotless",
    "cost": "20,000 gp",
    "summary": "An immobile rune circle of 10-foot radius. Dwarves standing within it gain a +2 morale bonus on attack rolls, a +2 deflection bonus to Armor Class against attacks made by evil creatures, and a +2 resistance bonus on saves against effects created by evil creatures, and are protected from mental control as by a protection from evil spell.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 169",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gnome-chanting-circle",
    "name": "Gnome Chanting Circle",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "An immobile rune circle of 20-foot radius. Any creature standing within it gains a +5 bonus on Perform checks, illusion spells cast by spellcasters within it have their save DCs increased by 1, and a gnome standing within it can concentrate on one bardic music ability each round as a free action.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 169",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gnome-charming-circle",
    "name": "Gnome Charming Circle",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "An immobile rune circle of 20-foot radius. A gnome standing within it can spend one of his daily uses of bardic music to cast charm monster, with a caster level equal to his bard level (or the level of the class granting his bardic music ability).",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, pp. 168–169",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "goliath-rage-ring",
    "name": "Goliath Rage Ring",
    "category": "wondrous-slotless",
    "cost": "10,000 gp",
    "summary": "An immobile rune circle of 40-foot radius. Any round during which a creature remains completely inside the ring does not count against the duration of that creature's rage ability; a round in which the creature leaves the circle counts normally.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 169",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "goliath-speaking-circle",
    "name": "Goliath Speaking Circle",
    "category": "wondrous-slotless",
    "cost": "20,000 gp",
    "summary": "An immobile rune circle of 5-foot radius. A creature standing within it can use sending as a full-round action, but only to contact individuals standing within a different goliath speaking circle, and the sender need not know the creature contacted.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 169",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "healing-circle",
    "name": "Healing Circle",
    "category": "wondrous-slotless",
    "cost": "50,000 gp",
    "summary": "An immobile rune circle of 10-foot radius. Any creature standing within it casts conjuration (healing) spells as if they were improved by the Maximize Spell feat, with no change to the spells' levels. Already maximized spells, spell-like abilities, and spells from magic items are unaffected.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, p. 169",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const RSTONE_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "buckler-axe-dwarven",
    "name": "Buckler-Axe, Dwarven",
    "category": "weapon",
    "cost": "20 gp",
    "weight": "4 lb.",
    "notes": "Exotic light melee weapon that combines a buckler with bladed edges along its top and bottom. It grants a +1 shield bonus to Armor Class like a buckler, and can be swung like an axe, dealing 1d6 points of slashing damage (×3 critical) for a Medium wielder.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hammer-throwing",
    "name": "Hammer, Throwing",
    "category": "weapon",
    "cost": "30 gp",
    "weight": "2 lb.",
    "notes": "Exotic light melee weapon balanced for throwing (20 ft. range increment). It deals 1d6 points of bludgeoning damage (×2 critical) for a Medium wielder.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tortoise-blade-gnome",
    "name": "Tortoise Blade, Gnome",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "3 lb.",
    "notes": "Exotic light melee weapon strapped to the wielder's wrist like a turtle shell, with a daggerlike blade jutting out where the fingers should be. It deals 1d6 points of piercing damage (19–20/×2) for a Medium wielder and grants a +1 shield bonus to Armor Class (lost when attacking with it), with a –1 armor check penalty and a 5% arcane spell failure chance. It can be enhanced as a weapon, as a shield, or both, paid for separately.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quickrazor-gnome",
    "name": "Quickrazor, Gnome",
    "category": "weapon",
    "cost": "45 gp",
    "weight": "1 lb.",
    "notes": "Exotic light melee weapon: a razor mounted on a wrist bracer that flicks out for the instant of an attack and retracts at the end of it, so the wielder is treated as unarmed during other creatures' actions. It deals 1d4 points of slashing damage (19–20/×2) for a Medium wielder; drawn and wielded conventionally instead, it counts as an improvised weapon.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "swordcatcher-gnome",
    "name": "Swordcatcher, Gnome",
    "category": "weapon",
    "cost": "35 gp",
    "weight": "5 lb.",
    "notes": "Exotic one-handed melee weapon: a broad-bladed short sword with two heavy prongs extending up from the hilt to catch opponents' blades. It deals 1d6 points of slashing damage (19–20/×2) for a Medium wielder and grants a +4 bonus on attack rolls made to disarm an opponent, including the roll to avoid being disarmed if such an attempt fails.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "greathammer-goliath",
    "name": "Greathammer, Goliath",
    "category": "weapon",
    "cost": "30 gp",
    "weight": "30 lb.",
    "notes": "Exotic two-handed melee weapon: an oversized hammer head on a heavy haft. It deals 1d12 points of bludgeoning damage (×4 critical) for a Medium wielder.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spear-dwarven-double",
    "name": "Spear, Dwarven Double",
    "category": "weapon",
    "cost": "115 gp",
    "weight": "15 lb.",
    "notes": "Exotic two-handed double weapon with a spear head at each end. Each end deals 1d8 points of slashing or piercing damage (×3 critical) for a Medium wielder.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "warpike-dwarven",
    "name": "Warpike, Dwarven",
    "category": "weapon",
    "cost": "45 gp",
    "weight": "15 lb.",
    "notes": "Exotic two-handed reach weapon resembling a halberd on a greatly elongated, counterweighted shaft, dealing 2d6 points of slashing or piercing damage (×3 critical) for a Medium wielder. It strikes opponents 10 feet away but not adjacent foes; readied against a charge it deals double damage, and its hook can be used to make trip attacks.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–1, p. 153",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-tower-steel",
    "name": "Shield, Tower, Steel",
    "category": "shield",
    "cost": "75 gp",
    "weight": "100 lb.",
    "notes": "A tower shield made of steel rather than wood, identical to the Player's Handbook tower shield (+4 shield bonus, maximum Dexterity bonus +2, armor check penalty –10, 50% arcane spell failure chance) except that it responds differently to special attacks such as heat metal and warp wood. Proficiency with the wooden tower shield also covers this version.",
    "acBonus": 4,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "twist-cloth-gnome",
    "name": "Twist Cloth, Gnome",
    "category": "armor",
    "cost": "150 gp",
    "weight": "5 lb.",
    "notes": "Exotic light armor of loose, flowing cloth strips tied and hung on the wearer: +1 armor bonus and a 5% arcane spell failure chance. A wearer with the Exotic Armor Proficiency (gnome twist cloth) feat twists and sways within it, so the armor bonus (including any enhancement bonus) also applies against touch attacks.",
    "acBonus": 1,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "battle-cloak-gnome",
    "name": "Battle Cloak, Gnome",
    "category": "shield",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "An exotic shield in the form of a special cloak used to foil attacks: +1 shield bonus, no armor check penalty, no arcane spell failure chance. It confers no shield bonus to a wearer without the appropriate exotic shield proficiency, cannot be used for a shield bash, but a proficient user can use it to make a disarm attempt with a +4 bonus on the opposed attack rolls. It occupies a hand as a light shield does.",
    "acBonus": 1,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-extreme-steel",
    "name": "Shield, Extreme, Steel",
    "category": "shield",
    "cost": "30 gp",
    "weight": "25 lb.",
    "notes": "An exotic shield strapped to the forearm and gripped in the hand: +3 shield bonus, armor check penalty –4, 15% arcane spell failure chance. It is so heavy that the shield hand can be used for nothing else, and it cannot be used to make shield bash attacks. A single Exotic Shield Proficiency (extreme shield) feat covers both the wooden and steel versions.",
    "acBonus": 3,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-gauntlet",
    "name": "Shield, Gauntlet",
    "category": "shield",
    "cost": "50 gp",
    "weight": "20 lb.",
    "notes": "An exotic heavy steel shield built with a special bracing gauntlet: +2 shield bonus, armor check penalty –2, 35% arcane spell failure chance. The gauntlet leaves the shield hand able to carry other items (such as material spell components) and to perform somatic spell components, though it cannot wield a weapon.",
    "acBonus": 2,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shield-riders",
    "name": "Shield, Rider's",
    "category": "shield",
    "cost": "75 gp",
    "weight": "15 lb.",
    "notes": "A high-quality exotic heavy wooden shield, longer and heavier than other heavy shields: +2 shield bonus, armor check penalty –2, 15% arcane spell failure chance. A user with the Exotic Shield Proficiency (rider's shield) feat shares the shield's AC bonus with his mount.",
    "acBonus": 2,
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–2, p. 158",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ankheg-young",
    "name": "Ankheg, Young",
    "category": "animal",
    "cost": "2,000 gp",
    "weight": "—",
    "notes": "A young ankheg ready for training as a burrowing mount (training costs a further 1,000 gp; upkeep 15 gp/month). Training one is dangerous work because of its acid spit, and a pen for an untrained ankheg needs an acid-resistant cage with a metal floor.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ankheg-egg",
    "name": "Ankheg Egg",
    "category": "animal",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "An ankheg egg. A hatched ankheg can be reared with a DC 23 Handle Animal check and later trained as a burrowing mount.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bulette-young",
    "name": "Bulette, Young",
    "category": "animal",
    "cost": "15,000 gp",
    "weight": "—",
    "notes": "A young bulette ready for training as a mount (training costs a further 1,500 gp; upkeep 20 gp/month). Bulettes are foul-tempered: all Handle Animal DCs for training and handling one are increased by 2.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bulette-egg",
    "name": "Bulette Egg",
    "category": "animal",
    "cost": "9,000 gp",
    "weight": "—",
    "notes": "A bulette egg. A hatched bulette can be reared with a DC 31 Handle Animal check and later trained as a mount.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "deep-hound-young",
    "name": "Deep Hound, Young",
    "category": "animal",
    "cost": "4,000 gp",
    "weight": "—",
    "notes": "A young deep hound ready for training as a mount (training costs a further 250 gp; upkeep 5 gp/month). Deep hounds are a new monster described in Chapter 8 of Races of Stone.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dire-eagle-young",
    "name": "Dire Eagle, Young",
    "category": "animal",
    "cost": "4,000 gp",
    "weight": "—",
    "notes": "A young dire eagle ready for training as a flying mount (training costs a further 250 gp; upkeep 5 gp/month). Dire eagles are a new monster described in Chapter 8 of Races of Stone.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dire-eagle-egg",
    "name": "Dire Eagle Egg",
    "category": "animal",
    "cost": "2,500 gp",
    "weight": "—",
    "notes": "A dire eagle egg. A hatched dire eagle can be reared with a DC 20 Handle Animal check and later trained as a flying mount.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thrum-worm-young",
    "name": "Thrum Worm, Young",
    "category": "animal",
    "cost": "2,500 gp",
    "weight": "—",
    "notes": "A young thrum worm ready for training as a mount (training costs a further 125 gp). Thrum worms are appropriate only for Small riders and are a new monster described in Chapter 8 of Races of Stone.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thrum-worm-egg",
    "name": "Thrum Worm Egg",
    "category": "animal",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "A thrum worm egg. A hatched thrum worm can be reared with a DC 19 Handle Animal check and later trained as a mount for a Small rider.",
    "source": "Races of Stone — Chapter 7: Equipment and Magic, Table 7–5, p. 161",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
