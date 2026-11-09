// STAGING DRAFT — Dragon Magazine #321 pack (library-staging/packs/dragon-magazine/issue-321)
// The issue's equipment, all from "The Way of the Gun" by Michael
// Shortt (pp. 30–41): the Gunpowder Weapons table (p. 34), the
// Attachments table (p. 35), the Miscellaneous Items table (p. 36),
// and the Artillery table (p. 37). 37 records.
// Every stat below was verified against the printed page images
// (magazine pp. 32, 34–38): the magazine OCR garbles most digits in
// these tables. The article's rules text — firing mechanisms,
// the optional misfire table, pricing/damage options, and the
// Using Firearms guidance — is in reference.md, not in these
// records; the general firearm rules that every record depends on
// (two hands to load, 1 ounce of gunpowder per shot unless noted,
// reloading is a standard action that provokes attacks of
// opportunity, Exotic Weapon Proficiency (firearms) covers all
// firearms) are summarized once in the pistol-321 record's notes
// and cross-referenced from the others.
// Suffix adjudication (see MANIFEST.md): the catalog already holds
// Sorcery & Steam firearm records named Pistol (400 gp, 1d8, ×4,
// 20 ft.), Rifle (1,500 gp, 1d10, ×4, 80 ft.), Blunderbuss, and
// Musket, and an Omni record named Hand Cannon — this article's
// printings differ from all of them, so pistol-321, rifle-321,
// blunderbuss-321, musket-321, and hand-cannon-321 carry the -321
// suffix and both printings live. The table's repeated "Bullets
// (10)" ammunition row is staged once, as bullets-321. Items the
// magazine itself marks as originally from the DMG (pistol, musket,
// powderhorn) stage because no identical DMG record exists in the
// catalog to reference instead.
// Items marked with an asterisk in the printed tables were
// originally in the Dungeon Master's Guide; that is noted per record.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const DM321_GUN = "Dragon Magazine #321 — The Way of the Gun";
const URL321 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine321_djvu.txt";

export const DRAGON_321_EQUIPMENT: EquipmentItem[] = [
  // ---- Gunpowder Weapons table (p. 34): improvised melee use ----
  {
    id: "pistol-butt",
    name: "Pistol Butt",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "—",
    weight: "—",
    notes:
      "Improvised one-handed melee use of a pistol (or other one-handed firearm) as a club-like weapon. Damage 1d3 (Small), 1d4 (Medium); critical ×2. Bludgeoning. No separate cost or weight — use the firearm's. Striking with a loaded firearm in melee is extremely dangerous: the weapon has a 50% chance of firing after each successful attack, hitting its wielder and dealing normal damage.",
  },
  {
    id: "rifle-butt",
    name: "Rifle Butt",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "—",
    weight: "—",
    notes:
      "Improvised two-handed melee use of a rifle (or other two-handed firearm) as a club-like weapon. Damage 1d4 (Small), 1d6 (Medium); critical ×2. Bludgeoning. No separate cost or weight — use the firearm's. Striking with a loaded firearm in melee is extremely dangerous: the weapon has a 50% chance of firing after each successful attack, hitting its wielder and dealing normal damage.",
  },
  // ---- Gunpowder Weapons table: one-handed ranged ----
  {
    id: "pistol-321",
    name: "Pistol",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "250 gp",
    weight: "3 lb.",
    notes:
      "Exotic weapon; one-handed ranged. Damage 1d8 (Small), 1d10 (Medium); critical ×3; range increment 50 ft. Piercing. Originally in the Dungeon Master's Guide (marked with an asterisk in the printed table); the -321 suffix distinguishes this printing from the Sorcery & Steam pistol already in the catalog (400 gp, 1d8, ×4, 20 ft.). General firearm rules for this article: unless otherwise noted, a gun requires two hands to load and 1 ounce of gunpowder for each shot; reloading is a standard action that provokes attacks of opportunity; the Exotic Weapon Proficiency (firearms) feat applies to all firearms, not just a single type. Ammunition: bullets-321.",
  },
  {
    id: "bullets-321",
    name: "Bullets (10)",
    category: "ammunition",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "3 gp",
    weight: "2 lb.",
    notes:
      "Ammunition for the firearms in the Gunpowder Weapons table (pistol, dueling pistols, hilt pistol, holdout pistol, shield pistol, spear pistol, carbine, hand cannon, musket, rifle). The printed table repeats this row under each firearm; it is staged once here. Price and weight are for ten bullets.",
  },
  {
    id: "dueling-pistols",
    name: "Pistols, Dueling",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "1,100 gp",
    weight: "3 lb.",
    notes:
      "Exotic weapon; one-handed ranged. Damage 1d8 (Small), 1d10 (Medium); critical ×3; range increment 50 ft. Piercing. Dueling pistols are essentially masterwork pistols sold in matched sets of two; masterwork firearms are treated just as any other masterwork ranged weapon, offering a +1 enhancement bonus on attack rolls. The listed price is the price of a matched set of two; the listed weight is per pistol as printed. Ammunition: bullets-321.",
  },
  {
    id: "grenade-pistol",
    name: "grenade-pistol",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "300 gp",
    weight: "4 lb.",
    notes:
      "Exotic weapon; one-handed ranged. Range increment 40 ft. A grenade pistol can launch bombs, bomb casings, and canisters (staged separately), which can also be used as thrown weapons; at the DM's discretion it might launch other objects, although items in flasks or bags are destroyed upon being fired. A grenade pistol requires 4 ounces of gunpowder to fire (instead of the standard 1 ounce).",
  },
  {
    id: "bomb",
    name: "Bomb",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "150 gp",
    weight: "1 lb.",
    notes:
      "Projectile for a grenade pistol, or a thrown weapon (range increment 10 ft. when thrown). Damage 2d6 (Small), 2d6 (Medium). Originally in the Dungeon Master's Guide (marked with an asterisk in the printed table). This round gunpowder bomb must be lit before it is loaded into a grenade pistol; lighting a bomb requires a move action in addition to the time it takes to load. While lighting it, a character can set the fuse to detonate from 1 to 5 rounds later, or upon impact if the weapon is immediately fired. When the fuse expires, the bomb deals 2d6 points of fire damage to all creatures within 5 feet; anyone caught within the blast radius can make a DC 15 Reflex save to take half damage. As with thrown weapons, a bomb may target either a creature or a specific grid intersection and deviates if it misses.",
  },
  {
    id: "bomb-casing",
    name: "Bomb Casing",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "30 gp",
    weight: "1 lb.",
    notes:
      "Projectile for a grenade pistol, or a thrown weapon (range increment 10 ft. when thrown). A weaker form of a normal bomb with most of its gunpowder replaced by a plugged empty hollow, so that volatile chemicals or dangerous items placed within can survive the blast of being fired. The casing must still be lit before it is loaded; lighting requires a move action in addition to loading time, and the fuse can be set to detonate from 1 to 5 rounds later or upon impact if immediately fired. Commonly filled with a flask of acid, a flask of holy water, a tanglefoot bag, a smokestick, or a thunderstone; loading any of these (or similar items) requires a move action that provokes an attack of opportunity, and once loaded such items are not damaged by being fired and are dispersed as if they had been thrown. A casing can also carry 5 uses of a contact or inhaled poison (each use applied as a standard action, with the normal risk of poisoning the character); upon detonation the poison is scattered in a 5-foot-radius splash from the point it landed. Poison save DCs delivered this way are decreased by 2.",
  },
  {
    id: "canister",
    name: "Canister",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      "Projectile for a grenade pistol, or a thrown weapon (range increment 10 ft. when thrown). A light iron cylinder that functions much like a bomb casing but contains no gunpowder; a cork at one end allows an item the size of a potion or folded scroll to be fired from a grenade pistol and land without damage. A canister may target either a creature or a specific grid intersection, as if it were a thrown weapon, and deviates if it misses. If the target is a creature, the target may attempt to catch it, if it has a free hand, by making a successful DC 15 Dexterity check; if the target fails this check, the canister deviates as if it had missed.",
  },
  {
    id: "hilt-pistol",
    name: "Pistol, Hilt",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+300 gp",
    weight: "+2 lb.",
    notes:
      "Exotic weapon; one-handed ranged, built into another weapon. Damage 1d8 (Small), 1d10 (Medium); critical ×3; range increment 10 ft. Piercing. The listed price and weight are added to the base weapon's. Nearly any weapon can have a pistol built into it. A hilt pistol allows the wielder to choose between attacking with either the melee weapon or the hilt pistol without having to switch weapons; a character with multiple attacks can even make a single ranged attack using the hilt pistol as part of a full attack action, without suffering the penalties for fighting with two weapons. A hilt pistol used in melee combat is still considered a ranged weapon and provokes attacks of opportunity. An enhancement bonus on the weapon the hilt pistol is attached to does not apply to the attached pistol, although the pistol can be enhanced separately. Ammunition: bullets-321.",
  },
  {
    id: "holdout-pistol",
    name: "Pistol, Holdout",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "100 gp",
    weight: "1 lb.",
    notes:
      "Exotic weapon; one-handed ranged. Damage 1d6 (Small), 1d8 (Medium); critical ×2; range increment 10 ft. Piercing. A small, easily concealed pistol favored by gamblers and spies: the wielder gains a +2 bonus on Sleight of Hand checks made to conceal it. Ammunition: bullets-321.",
  },
  {
    id: "shield-pistol",
    name: "Pistol, Shield",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+300 gp",
    weight: "+2 lb.",
    notes:
      "Exotic weapon; one-handed ranged, built into a shield. Damage 1d6 (Small), 1d8 (Medium); critical ×2; range increment 10 ft. Piercing. The listed price and weight are added to the base shield's. Any shield, except a buckler, can have a pistol built into it, usually protruding from the top or directly through the center. A shield pistol can be used either to make a ranged attack (firing it like a pistol) or to increase the damage of a shield bash: when used with a shield bash, a successful attack deals the pistol damage in addition to the shield bash damage, and the damage dealt by the shield pistol in a shield bash is multiplied using the shield bash's critical multiplier on a critical hit. An enhancement bonus on a shield or shield spike does not apply to the attached shield pistol, although the pistol can be enhanced separately. Ammunition: bullets-321.",
  },
  {
    id: "spear-pistol",
    name: "Pistol, Spear",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+150 gp",
    weight: "+2 lb.",
    notes:
      "Exotic weapon; a small pistol built into a spear or similar piercing polearm, just below the blade. The listed price and weight are added to the base weapon's. The spear pistol has no normal trigger and cannot be fired as a ranged weapon: it fires the first time a target is hit using the spear it is attached to, dealing additional damage of 1d6 (Small) or 1d8 (Medium) — the printed table gives this as added damage (+1d6/+1d8) in its damage columns, with no critical or range entry of its own. An enhancement bonus on the spear does not apply to the attached spear pistol, although the pistol can be enhanced separately. Ammunition: bullets-321.",
  },
  // ---- Gunpowder Weapons table: two-handed ranged ----
  {
    id: "blunderbuss-321",
    name: "Blunderbuss",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "200 gp",
    weight: "10 lb.",
    notes:
      "Exotic weapon; two-handed ranged. Damage 1d4 (Small), 1d6 (Medium); no critical (no attack roll is made); range special. Piercing. When fired, a blunderbuss does not require the user to make an attack roll: all creatures in a 20-foot cone must make a DC 15 Reflex save or be struck by shot (taking the listed damage); those who make their save suffer only half damage. Because no attack roll is made, a blunderbuss cannot cause critical hits. Blunderbuss shot consists of 1 pound of nearly any form of scrap metal, stones, or other improvised bullets. Loading and reloading requires 4 ounces of gunpowder instead of the standard 1 ounce. The -321 suffix distinguishes this printing from the Sorcery & Steam blunderbuss already in the catalog.",
  },
  {
    id: "carbine",
    name: "Carbine",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "300 gp",
    weight: "7 lb.",
    notes:
      "Exotic weapon; two-handed ranged. Damage 1d10 (Small), 1d12 (Medium); critical ×3; range increment 100 ft. Piercing. Carbines are more or less identical to normal muskets, but shorter barrels and lighter frames reduce their range significantly. Built for mounted combat: a character firing from the back of a mount making a double move suffers only a −2 penalty to his ranged attack rolls (instead of −4), and a character firing from the back of a running mount suffers only a −4 penalty (instead of −8). Ammunition: bullets-321.",
  },
  {
    id: "hand-cannon-321",
    name: "Hand Cannon",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "50 gp",
    weight: "15 lb.",
    notes:
      "Exotic weapon; two-handed ranged. Damage 1d8 (Small), 1d10 (Medium); critical ×3; range increment 50 ft. Piercing. Also known as an arquebus: a smooth barrel bound to a wooden stock by tight iron hoops. Hand cannons do not have the range or damaging capability of more advanced muskets, but their simplicity makes them the cheapest of all firearms. The -321 suffix distinguishes this printing from the Omni hand cannon already in the catalog. Ammunition: bullets-321.",
  },
  {
    id: "musket-321",
    name: "Musket",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "500 gp",
    weight: "10 lb.",
    notes:
      "Exotic weapon; two-handed ranged. Damage 1d10 (Small), 1d12 (Medium); critical ×3; range increment 150 ft. Piercing. Originally in the Dungeon Master's Guide (marked with an asterisk in the printed table); the -321 suffix distinguishes this printing from the Sorcery & Steam musket already in the catalog. Ammunition: bullets-321.",
  },
  {
    id: "rifle-321",
    name: "Rifle",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "600 gp",
    weight: "12 lb.",
    notes:
      "Exotic weapon; two-handed ranged. Damage 1d10 (Small), 1d12 (Medium); critical ×3; range increment 200 ft. Piercing. The -321 suffix distinguishes this printing from the Sorcery & Steam rifle already in the catalog (1,500 gp, 1d10, ×4, 80 ft.). Ammunition: bullets-321.",
  },
  {
    id: "rocket-launcher",
    name: "Rocket Launcher",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "300 gp",
    weight: "4 lb.",
    notes:
      "Exotic weapon; two-handed ranged. A small, man-portable reinforced and fireproofed metal tube that fires explosive, incendiary, or spear rockets (staged separately); the launcher itself deals no damage. Firing a rocket launcher is a full-round action that provokes an attack of opportunity.",
  },
  {
    id: "explosive-rocket",
    name: "Explosive Rocket",
    category: "ammunition",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "40 gp",
    weight: "6 lb.",
    notes:
      "Ammunition for a rocket launcher; range increment 80 ft. Explosive rockets are made by packing scrap metal around a core of gunpowder. They can target either creatures or specific grid intersections and deviate if they miss, just as thrown weapons do. When the rocket strikes a target, the gunpowder charge is ignited, dealing 1d10 points of damage on a direct hit and 1d4 points of damage to every creature within a 5-foot radius.",
  },
  {
    id: "incendiary-rocket",
    name: "Incendiary Rocket",
    category: "ammunition",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "30 gp",
    weight: "5 lb.",
    notes:
      "Ammunition for a rocket launcher; range increment 80 ft. A container of alchemist's fire mounted on a small rocket. It can target either creatures or specific grid intersections and deviates if it misses, just as thrown weapons do. Upon hitting a target, an incendiary rocket is treated exactly as a thrown flask of alchemist's fire.",
  },
  {
    id: "spear-rocket",
    name: "Spear Rocket",
    category: "ammunition",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "15 gp",
    weight: "4 lb.",
    notes:
      "Ammunition for a rocket launcher. Damage 1d6 (Small), 1d8 (Medium); critical ×3; range increment 120 ft. Piercing. A rocket tipped with a spear point, fired as a projectile rather than exploding.",
  },
  // ---- Attachments table (p. 35) ----
  {
    id: "bayonet-fixed",
    name: "Bayonet, Fixed",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+15 gp",
    weight: "+2 lb.",
    notes:
      "Weapon attachment. A daggerlike point with a curved elbow affixed directly to the muzzle of a firearm; it cannot be removed, but it is fashioned so that it doesn't impede the use or loading of the weapon. A weapon augmented with a fixed bayonet can be used in melee just as any other bayonet (as a dagger on a one-handed firearm, or as a shortspear on a two-handed firearm), but it does not take additional time to draw or affix, and does not impede the loading or firing of the weapon. The listed price and weight are added to the firearm's.",
  },
  {
    id: "bayonet-plug",
    name: "Bayonet, Plug",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "2 gp",
    weight: "1 lb.",
    notes:
      "Weapon attachment. Little more than a dagger whose hilt is jammed into the barrel of a firearm. Plug bayonets can be attached to any firearm as a move action, but this prevents the weapon from being loaded or fired for as long as it remains attached. When fixed to a one-handed firearm, a plug bayonet creates a dagger; on two-handed weapons, it is treated as a shortspear. A plug bayonet must be drawn like a weapon in addition to the time it takes to affix one to a firearm.",
  },
  {
    id: "bayonet-ring",
    name: "Bayonet, Ring",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "2 gp",
    weight: "1 lb.",
    notes:
      "Weapon attachment. A bayonet that fits around the muzzle of the gun. Ring bayonets function exactly as plug bayonets in combat (dagger on a one-handed firearm, shortspear on a two-handed firearm), except as noted here: while a ring bayonet is in place, the weapon may still be fired, but at a −2 penalty to attack rolls, and attempting to reload while a ring bayonet is fixed requires a full-round action, as it is difficult to reload around the protruding blade. A ring bayonet must be drawn like a weapon in addition to the time it takes to affix one to a firearm.",
  },
  {
    id: "bayonet-spring",
    name: "Bayonet, Spring",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+5 gp",
    weight: "+2 lb.",
    notes:
      "Weapon attachment. A spring-loaded hinge attached to a firearm's muzzle keeps the bayonet out of the way while firing and loading, yet allows it to be deployed swiftly. Spring bayonets can be added to any firearm and can be set into place (or withdrawn) as a move action. As the blade extends above the muzzle of a firearm it can still be fired while the bayonet is fixed, although at a −2 penalty on attack rolls. In melee it serves as a bayonet (dagger on a one-handed firearm, shortspear on a two-handed firearm). The listed price and weight are added to the firearm's.",
  },
  {
    id: "breachloading",
    name: "Breachloading",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "+50 gp",
    weight: "—",
    notes:
      "Weapon modification from the Attachments table. Breachloading can be added to any firearm, making it much easier to load than comparable bore-loading firearms: weapons with breachloading that previously required a standard action to reload may be reloaded as a move action instead. The listed price is added to the firearm's.",
  },
  // ---- Artillery table (p. 37) ----
  {
    id: "bombard",
    name: "Bombard",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "3,500 gp",
    weight: "—",
    notes:
      "Artillery (siege weapon); crew 4. Damage 10d6; range increment 200 ft. (100 ft. minimum); no critical (no attack rolls are made). To fire a bombard, the crew chief makes a special check against DC 15 using only his base attack bonus, Intelligence modifier, range increment penalties, and any appropriate modifiers from the Catapult Attack Modifiers table in the Dungeon Master's Guide. If the check succeeds, the cannonball hits the square it was aimed at, dealing the indicated damage to any object or character in the square; characters who succeed on a DC 15 Reflex save take half damage. Once a cannonball hits a square, subsequent shots hit the same square unless the bombard is reaimed or the wind changes direction or speed. If a bombard misses, roll 1d8 to determine where it lands (1 is back toward the bombard, 2 through 8 count clockwise around the target square), then count 3 squares back for every range increment of the attack. Loading a bombard requires a series of full-round actions: a DC 15 Profession (siege engineer) check to set the fuse, another DC 15 Profession (siege engineer) check to load the powder charge, and finally a DC 10 Strength check to load a cannonball. Reaiming a bombard takes four full-round actions; multiple crew members can perform these actions in the same round, so it would take a crew of four only 1 round to reaim a bombard. A bombard is a Large object with a 10-foot space. No weight is printed.",
  },
  {
    id: "field-gun",
    name: "Field Gun",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "2,500 gp",
    weight: "—",
    notes:
      "Artillery (siege weapon); crew 2. Damage 6d6; range special; no critical (no attack rolls are made). Firing a loaded field gun requires only a standard action (that provokes attacks of opportunity). Upon being fired, the field gun shoots a cannonball in a 500-foot-long, 5-foot-wide straight line directly in front of it, affecting all creatures in that line; creatures in the line are allowed a DC 15 Reflex save to take half damage. Field guns do not have a standard range increment and cannot be fired farther than 500 feet. Loading a field gun requires a series of full-round actions: a DC 15 Profession (siege engineer) check to set the fuse, another DC 15 Profession (siege engineer) check to load the powder charge, and finally a DC 8 Strength check to load a cannonball. Reaiming a field gun takes two full-round actions; multiple crew members can perform these actions in the same round, so it would take a crew of two only 1 round to reaim a field gun. A field gun is a Medium object with a 5-foot space. No weight is printed.",
  },
  {
    id: "organ-gun",
    name: "Organ Gun",
    category: "weapon",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "3,000 gp",
    weight: "—",
    notes:
      "Artillery (siege weapon); crew 3. Damage 4d6; range special; no critical (no attack rolls are made). Firing a loaded organ gun requires a full-round action (that provokes attacks of opportunity). Upon being fired, the organ gun discharges a 10-foot-wide barrage in a 300-foot-long line directly in front of it; creatures in the line are allowed a DC 20 Reflex save to take half damage. Organ guns do not have a standard range increment and cannot be fired farther than 300 feet. Loading an organ gun requires six DC 10 Strength checks to load the cannonballs and a DC 20 Profession (siege engineer) check to set and bind the fuses; reaiming takes three full-round actions (multiple crew members can perform these actions in the same round, so a crew of three takes only 1 round to reaim). An organ gun is a Large object with a 10-foot space. No weight is printed.",
  },
  // ---- Miscellaneous Items table (p. 36) ----
  {
    id: "gunmans-bandolier",
    name: "Gunman's Bandolier",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "2 gp",
    weight: "1 lb.",
    notes:
      "A wide belt worn diagonally across the chest, developed as a replacement for the archer's quiver. A gunman's bandolier has space for five items about the size of a potion, powderhorn, or bayonet; these items are readily available, allowing an item on a gunman's bandolier to be retrieved as a move action that does not provoke attacks of opportunity. A character may wear a maximum of two gunman's bandoliers at once, although the second holds only four items (a space is lost where one bandolier overlaps the other).",
  },
  {
    id: "eyesting-cylinder",
    name: "Eyesting Cylinder",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "30 gp",
    weight: "1 lb.",
    notes:
      "A fragile tube filled with an airborne irritant that causes the eyes to fill with tears and reflexively close. Eyesting cylinders are treated as thrown splash weapons: they may target creatures or specific grid intersections and can affect multiple creatures. Upon striking its target, an eyesting cylinder breaks, filling the adjacent squares with a cloud of dust; anyone caught in or entering this area must make a DC 15 Fortitude save or be blinded for 1d6 rounds. A moderate or stronger wind dissipates the cloud in 1 round; otherwise the cloud dissipates in 4 rounds on its own.",
  },
  {
    id: "gun-rest",
    name: "Gun Rest",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "2 gp",
    weight: "5 lb.",
    notes:
      "A slender, two-pronged fork used by musketeers to keep their weapons level during long battles. Planting a gun rest firmly in the ground and taking aim requires a standard action but gives the user a +2 circumstance bonus on his attack roll when using a two-handed firearm for as long as he remains stationary. Gun rests cannot be used with one-handed firearms or other ranged weapons.",
  },
  {
    id: "powderhorn",
    name: "Powderhorn",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "35 gp",
    weight: "2 lb.",
    notes:
      "A shoulder-strung horn or leather flask filled with 2 pounds of gunpowder — enough to fire 32 shots from most firearms, at 1 ounce of gunpowder per reload. Drawing gunpowder from a powderhorn to reload a weapon is a free action. Originally in the Dungeon Master's Guide (marked with an asterisk in the printed table).",
  },
  {
    id: "powder-keg",
    name: "Powder Keg",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "250 gp",
    weight: "20 lb.",
    notes:
      "A small keg holding 15 pounds of gunpowder — enough to fire 240 shots from most firearms, at 1 ounce of gunpowder per reload. Powder kegs are not waterproof, and gunpowder exposed to water cannot be used to fire a bullet. Because powder kegs are considerably more awkward than powderhorns, a move action is required to draw an amount of gunpowder that can be used in loading a firearm, in addition to however long it normally takes to reload a firearm. Originally in the Dungeon Master's Guide (marked with an asterisk in the printed table).",
  },
  {
    id: "springbox",
    name: "Springbox",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "200 gp",
    weight: "5 lb.",
    notes:
      "A simple gunpowder trap, a precursor to the modern land mine that explodes when stepped on; often covered in dirt or otherwise disguised to blend in with its surroundings. Trap statistics: CR 1; mechanical; touch trigger; no reset; 20 ft. blast (2d6 fire, DC 20 save half damage); Search DC 22; Disable Device DC 20. Market price 200 gp (as printed in the trap line and the Miscellaneous Items table).",
  },
  {
    id: "whirligig",
    name: "Whirligig",
    category: "adventuring gear",
    ruleset: "core",
    source: DM321_GUN,
    sourceUrl: URL321,
    cost: "800 gp",
    weight: "10 lb.",
    notes:
      "A short, flat cylinder with several loaded muzzles attached to a rotating gear — essentially a portable trap that can easily be rigged to a tripwire or other trigger. When activated, the device spins around, effectively attacking all creatures within 30 feet by spewing pistol shots in all directions. Trap statistics: CR 2; mechanical; location trigger; manual reset; Atk +8 ranged (1d10/×3, bullets); multiple targets (all targets within 30 ft.); Search DC 15; Disable Device DC 20. Market price 800 gp (as printed in the trap line and the Miscellaneous Items table).",
  },
];
