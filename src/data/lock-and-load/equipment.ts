/**
 * Lock & Load: Iron Kingdoms Character Primer equipment pack: the
 * gear chapter (pp. 52–57) of Privateer Press's 2002 character
 * primer, converted in Batch 10 of the "everything" program.
 * Ruleset: iron_kingdoms.
 *
 * Lock & Load is a 3.0-era book (it requires the D&D Player's
 * Handbook, Third Edition), so its weapons use the 3.0 stat-block
 * format — proficiency, the weapon's own size category, and a single
 * damage value for the weapon as sized — rather than the 3.5
 * small/medium damage pairs; the records keep the printed values and
 * say so in the notes. Book page = PDF page − 1 in Shaun's scan.
 *
 * Duplicates against Liber Mechanika (which reprinted much of this
 * gear chapter in 2005) were skipped, not duplicated: Ammunition
 * Bandolier, Field Glass, Flint Striker, Goggles, Holster, Holster
 * (Wrist-Loader), Magnified Bull's-Eye Lantern, Mechanik's Boots,
 * and Pocket Watch are identical in both books, and the Armored
 * Apron and Greatcoat are the same garments (Lock & Load prints
 * armor statistics for them that Liber Mechanika's clothing table
 * omits — see REBUILD-NOTES.md). The book's races, class
 * adjustments, patronage benefits, and the double-barreled firearm
 * modification are documented as omitted in REBUILD-NOTES.md.
 */
import type { EquipmentItem } from "@/engine/types";

const LL = "Lock & Load: Iron Kingdoms Character Primer";
const LL_PATH =
  "/transfer/DnD-3.5/10936572-Privateer-Iron-Kingdoms-Lock-Load.pdf";

export const LOCK_AND_LOAD_EQUIPMENT: EquipmentItem[] = [
  // ── Weapons (p. 52) ─────────────────────────────────────────────
  {
    id: "light-chain",
    name: "Chain, Light",
    category: "weapon",
    cost: "—",
    weight: "3 lb.",
    notes:
      "Damage 1d4, critical ×2, Bludgeoning. Proficiency: martial. Size: Small (3.0-era format: a single damage value for the weapon as sized). Any length of chain up to 4 feet effectively swung as a weapon (a length of thick knotted rope or a thick belt with a heavy buckle has the same statistics); improvised, hence no price. Can be used to make trip attacks (if you are tripped during the attempt, you may drop the weapon to avoid being tripped), and grants a +2 bonus on attempts to disarm and to resist being disarmed if the disarm attempt fails.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "cleft-arrow",
    name: "Cleft Arrow",
    category: "weapon",
    cost: "7 gp each",
    weight: "3 lb.",
    notes:
      "Damage 1d6, critical 19–20/×3, Piercing. Proficiency: martial. Size: Medium-size (3.0-era format: a single damage value for the weapon as sized). Bow ammunition with a bifurcated head. All cleft bladed weapons are considered masterwork and have their critical ranges improved by 1, already reflected in the printed statistics.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "cleft-greatsword",
    name: "Cleft Greatsword",
    category: "weapon",
    cost: "350 gp",
    weight: "14 lb.",
    notes:
      "Damage 2d6, critical 18–20/×2, Slashing and piercing (due to the bifurcated blade). Proficiency: martial. Size: Large (3.0-era format: a single damage value for the weapon as sized). All cleft bladed weapons are considered masterwork and have their critical ranges improved by 1, already reflected in the printed statistics.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "cleft-spear",
    name: "Cleft Spear",
    category: "weapon",
    cost: "302 gp",
    weight: "8 lb.",
    notes:
      "Damage 1d8, critical 19–20/×3, range increment 20 ft, Piercing. Proficiency: martial. Size: Large (3.0-era format: a single damage value for the weapon as sized). Double weapon. All cleft bladed weapons are considered masterwork and have their critical ranges improved by 1, already reflected in the printed statistics.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "collapsing-baton",
    name: "Collapsing Baton",
    category: "weapon",
    cost: "12 gp",
    weight: "3 lb.",
    notes:
      "Damage 1d6, critical ×2, Bludgeoning. Proficiency: simple (club). Size: Small (Tiny when collapsed). A slim iron rod that collapses to 6 inches and extends to its full 2 feet with a hard flick of the wrist (a free action); so unobtrusive it may not be identified as a weapon by those unaware of such devices.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "collapsing-staff",
    name: "Collapsing Staff",
    category: "weapon",
    cost: "75 gp",
    weight: "6 lb.",
    notes:
      "Damage 1d6/1d6, critical ×2, Bludgeoning. Proficiency: simple (quarterstaff). Size: Large (Small when collapsed). Built on the collapsing baton's principle with an internal spring mechanism: 18 inches retracted, 6 feet extended, and it extends or retracts instantly (a free action). A double weapon, like a normal quarterstaff.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "cryxian-dirk",
    name: "Cryxian Dirk",
    category: "weapon",
    cost: "10 gp",
    weight: "2 lb.",
    notes:
      "Damage 1d4, critical 18–20/×2, range increment 10 ft, Piercing. Proficiency: simple (dagger). Size: Tiny (3.0-era format: a single damage value for the weapon as sized). A thrusting dagger commonplace in Cryx whose blade has four sharp flanges forming an X-shaped cross section, inflicting viler wounds than other daggers of equal size.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "folding-knife",
    name: "Folding Knife",
    category: "weapon",
    cost: "6 gp",
    weight: "—",
    notes:
      "Damage 1d3, critical 19–20/×2, range increment 10 ft, Piercing. Proficiency: simple (dagger). Size: Tiny (3.0-era format: a single damage value for the weapon as sized). Commonly called a pocket knife: the blade folds neatly into a groove in the handle so it can be carried safely in a pocket; folding or unfolding the blade is a move-equivalent action. Printed quirk kept: the book's stat line prints a blank where the weight belongs.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "gaff",
    name: "Gaff",
    category: "weapon",
    cost: "2 gp",
    weight: "1 lb.",
    notes:
      "Damage 1d4, critical ×3, Piercing. Proficiency: simple. Size: Tiny (3.0-era format: a single damage value for the weapon as sized). A common shipboard tool — a large metal hook on a small wooden crossbar clenched in the fist, the hook protruding between the fingers — equally useful as an impromptu weapon.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "gaff-spear",
    name: "Gaff Spear",
    category: "weapon",
    cost: "7 gp",
    weight: "7 lb.",
    notes:
      "Damage 1d8, critical ×3, range increment 10 ft, Piercing. Proficiency: simple. Size: Large (3.0-era format: a single damage value for the weapon as sized). A sturdy shortspear with a large hook mounted at the base of the spearhead; as a tool it can hook objects or people from the water or push off from other boats, and as a weapon it is used as a normal shortspear but also grants a +2 bonus to trip and disarm attacks.",
    source: `${LL} p. 52`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Weapons (p. 53) ─────────────────────────────────────────────
  {
    id: "katrenas-hook",
    name: "Katrena's Hook",
    category: "weapon",
    cost: "15 gp",
    weight: "6 lb.",
    notes:
      "Damage 1d6, critical ×3, Slashing and piercing. Proficiency: exotic. Size: Small (3.0-era format: a single damage value for the weapon as sized). Developed from the common halberd with a reduced head on a very short one-handed hilt, somewhat like a handaxe: the back hook can be used for trip attacks (if you are tripped during the attempt, you may drop the weapon to avoid being tripped), and a top-mounted spike serves for thrusting attacks. A Monk of the Order of Keeping using a Katrena's hook can use their unarmed base attack and more favorable number of attacks; they are rarely used by anyone else.",
    source: `${LL} p. 53`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "khardic-composite-shortbow",
    name: "Khardic Composite Shortbow",
    category: "weapon",
    cost: "225 gp",
    weight: "4 lb.",
    notes:
      "Damage 1d6 + Str, critical ×3, range increment 70 ft, Piercing. Proficiency: simple (as printed). Size: Medium (3.0-era format: a single damage value for the weapon as sized). Developed by the horseman tribes of the Khadoran plains from the horns and tendons of the Raevhan buffalo; functions as a mighty composite shortbow, and the hand guard on the bow grip may be used as a spiked gauntlet.",
    source: `${LL} p. 53`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "light-mechanoflail",
    name: "Mechanoflail, Light",
    category: "weapon",
    cost: "Only available to cultists of Cyriss",
    weight: "8 lb.",
    notes:
      "Damage 1d8, critical 19–20/×2, Bludgeoning. Proficiency: exotic. Size: Medium-size (3.0-era format: a single damage value for the weapon as sized). The favored weapon of cultists of Cyriss: a short metal handle affixed with a clockwork-powered head that rotates with great speed, spinning its three short flail heads; the spin allows a bonus attack in a round, in which case both attacks are made at a −3 attack penalty. The weapons are created in Cyriss foundries and supplied to acolytes unfinished — completing one is part of the final test of worth: the acolyte must first discern why it is inoperative (Craft (clockworks) check, DC 10) and then make the appropriate repairs (Craft (clockworks) check, DC 15).",
    source: `${LL} p. 53`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "menoths-sting",
    name: "Menoth's Sting",
    category: "weapon",
    cost: "Varies",
    weight: "1/10 lb.",
    notes:
      "Damage 1, critical ×2, range increment 10 ft, Bludgeoning or slashing. Proficiency: exotic. Size: Tiny (3.0-era format: a single damage value for the weapon as sized). Small aerodynamic projectiles — smooth pebbles, sling bullets, and the like, sometimes with the edges sharpened — thrown accurately by Monks of the Fist. Up to three stings may be thrown per attack, provided they are thrown at the same target; you do not add your Strength modifier to sting attacks.",
    source: `${LL} p. 53`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "nyss-claymore",
    name: "Nyss Claymore",
    category: "weapon",
    cost: "1,000+ gp",
    weight: "8 lb.",
    notes:
      "Damage 2d6, critical 19–20/×2, Slashing. Proficiency: exotic. Size: Large (3.0-era format: a single damage value for the weapon as sized). The favored weapon of the Nyss: an elegant masterwork greatsword (usual +1 bonus to attack rolls) with a slender 5-foot blade etched with Aeric runes; the Nyss train with it from youth, and its unusual balance enables it to be used with the Weapon Finesse feat. The printed price is what a non-Nyss would pay to acquire one of these rare weapons — the Nyss almost never sell them and will not willingly part with their own for any price.",
    source: `${LL} p. 53`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Weapons and firearms (pp. 54–55) ────────────────────────────
  {
    id: "ogrun-warcleaver",
    name: "Ogrun Warcleaver",
    category: "weapon",
    cost: "35 gp",
    weight: "35 lb.",
    notes:
      "Damage 2d8, critical ×3, Slashing or piercing. Proficiency: martial. Size: Huge (3.0-era format: a single damage value for the weapon as sized). A vast polearm built to take full advantage of an ogrun's massive strength and size — a 3-foot-long, 1-foot-wide cleaver blade on a 12-foot pole, the back of the blade studded with three punching spikes — so large and heavy that an ogrun must wield it with both hands. It has reach, and can be used to strike adjacent opponents or those up to 10 feet away.",
    source: `${LL} p. 54`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "military-pistol",
    name: "Military Pistol",
    category: "weapon",
    cost: "600 gp",
    weight: "5 lb.",
    notes:
      "Damage 2d6, critical 19–20/×3, range increment 80 ft, Piercing. Proficiency: exotic (small arms). Size: Tiny (3.0-era format: a single damage value for the weapon as sized). A large, powerful breech-loading pistol, 1 full foot in length with a broad, heavy barrel, commonly issued to military officers. Reload: 1 standard action and a successful Craft (small arms) check (DC 8); on a failed check the reloading must begin anew, and if the check fails by 5 or more the ammunition is ruined.",
    source: `${LL} p. 54`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "small-pistol",
    name: "Small Pistol",
    category: "weapon",
    cost: "400 gp",
    weight: "4 lb.",
    notes:
      "Damage 2d4, critical 19–20/×3, range increment 40 ft, Piercing. Proficiency: exotic (small arms). Size: Tiny (3.0-era format: a single damage value for the weapon as sized). At only 9 inches in length, a handy breech-loading pistol, relatively easy to conceal and cheaper than most other firearms. Reload: 1 standard action and a successful Craft (small arms) check (DC 6); on a failed check the reloading must begin anew, and if the check fails by 5 or more the ammunition is ruined.",
    source: `${LL} p. 54`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "long-rifle",
    name: "Long Rifle",
    category: "weapon",
    cost: "1,000 gp",
    weight: "10 lb.",
    notes:
      "Damage 2d6, critical 19–20/×3, range increment 160 ft, Piercing. Proficiency: exotic (small arms). Size: Medium-size (3.0-era format: a single damage value for the weapon as sized). A breech-loading rifle, generally 4 feet from stock to barrel, using a smaller projectile than the military rifle: less impact power and range, but considerably lighter and less cumbersome, and faster to reload. Reload: 1 standard action and a successful Craft (small arms) check (DC 10); on a failed check the reloading must begin anew, and if the check fails by 5 or more the ammunition is ruined.",
    source: `${LL} p. 55`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "military-rifle",
    name: "Military Rifle",
    category: "weapon",
    cost: "1,200 gp",
    weight: "15 lb.",
    notes:
      "Damage 2d8, critical 19–20/×3, range increment 200 ft, Piercing. Proficiency: exotic (small arms). Size: Medium-size (3.0-era format: a single damage value for the weapon as sized). A breech-loading rifle typically around 4 feet in length; somewhat rare, as there are few rifle regiments in the Iron Kingdoms, but increasing in use particularly in Khador and Cygnar. Slow to operate, but powerful with substantial range. Reload: 2 standard actions and a successful Craft (small arms) check (DC 12); on a failed check the reloading must begin anew, and if the check fails by 5 or more the ammunition is ruined.",
    source: `${LL} p. 55`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Grenades (p. 55) ────────────────────────────────────────────
  {
    id: "explosive-grenade",
    name: "Explosive Grenade",
    category: "weapon",
    cost: "Military issue only",
    weight: "2 lb.",
    notes:
      "Damage 2d10, critical ×2, range increment 10 ft, Piercing. Proficiency: simple. Size: Tiny. A six-inch iron sphere with a built-in clockwork timer that can be set to detonate between five and fifteen seconds; filled with two compartments of blasting powders. Blast radius 10 feet: characters within the blast radius may make a Reflex save (DC 16) to take half damage. Priming and setting a grenade takes 1 standard action and a successful Craft (cannoneer or demolitions) check (DC 6); any roll of a natural 1 while priming, setting, and throwing a grenade results in it going off in the character's hand.",
    source: `${LL} p. 55`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "flash-grenade",
    name: "Flash Grenade",
    category: "weapon",
    cost: "Military issue only",
    weight: "2 lb.",
    notes:
      "No damage. Range increment 10 ft. Proficiency: simple. Size: Tiny. A six-inch iron sphere with a built-in clockwork timer (settable between five and fifteen seconds), filled with a heat-reactive alchemical that flares with incredible intensity when the timer elapses: anyone looking directly at it within the 10-foot flare radius must make a Reflex save (DC 16) to cover or avert their eyes, or suffer a −1 penalty on attack rolls for one minute. Ready: 1 action and a successful Craft (cannoneer or demolitions) check (DC 6); any roll of a natural 1 while priming, setting, and throwing a grenade results in it going off in the character's hand.",
    source: `${LL} p. 55`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "incendiary-grenade",
    name: "Incendiary Grenade",
    category: "weapon",
    cost: "Military issue only",
    weight: "2 lb.",
    notes:
      "Damage: see alchemist's fire or Menoth's Fury. Range increment 10 ft. Proficiency: simple. Size: Tiny. A six-inch iron sphere with a built-in clockwork timer (settable between five and fifteen seconds), filled with an alchemical mixture of the sort created in the Protectorate of Menoth, spreading its alchemical fire over a ten-foot radius on detonation. Blast radius 10 feet. Ready: 1 action and a successful Craft (cannoneer or demolitions) check (DC 6); any roll of a natural 1 while priming, setting, and throwing a grenade results in it going off in the character's hand.",
    source: `${LL} p. 55`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "smoke-grenade",
    name: "Smoke Grenade",
    category: "weapon",
    cost: "Military issue only",
    weight: "2 lb.",
    notes:
      "No damage. Range increment 10 ft. Proficiency: simple. Size: Tiny. A six-inch iron sphere with a built-in clockwork timer (settable between five and fifteen seconds), containing an alchemical that produces thick, billowing clouds of obscuring gray-white smoke when detonated, filling the ten-foot burst radius and dissipating naturally. Ready: 1 action and a successful Craft (cannoneer or demolitions) check (DC 6); any roll of a natural 1 while priming, setting, and throwing a grenade results in it going off in the character's hand.",
    source: `${LL} pp. 55–56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Firearms ammunition (p. 56) ─────────────────────────────────
  {
    id: "basic-military-pistol-charge",
    name: "Basic Military Pistol Charge",
    category: "gear",
    cost: "8–10 gp",
    weight: "—",
    notes:
      "A basic ammunition charge for a military pistol: the usual lead ball and blasting powder charge with no unusual qualities, packaged for the specific firearm. Price as printed (a range).",
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "basic-small-pistol-charge",
    name: "Basic Small Pistol Charge",
    category: "gear",
    cost: "6–8 gp",
    weight: "—",
    notes:
      "A basic ammunition charge for a small pistol: the usual lead ball and blasting powder charge with no unusual qualities, packaged for the specific firearm. Price as printed (a range).",
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "basic-long-rifle-charge",
    name: "Basic Long Rifle Charge",
    category: "gear",
    cost: "8–10 gp",
    weight: "—",
    notes:
      "A basic ammunition charge for a long rifle: the usual lead ball and blasting powder charge with no unusual qualities, packaged for the specific firearm. Price as printed (a range).",
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "basic-military-rifle-charge",
    name: "Basic Military Rifle/Carbine Charge",
    category: "gear",
    cost: "10–12 gp",
    weight: "—",
    notes:
      "A basic ammunition charge for a military rifle or carbine: the usual lead ball and blasting powder charge with no unusual qualities, packaged for the specific firearm. Price as printed (a range).",
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Armor (p. 56) ───────────────────────────────────────────────
  {
    id: "iron-mantle",
    name: "Iron Mantle",
    category: "armor",
    cost: "Only available to clerics of Cyriss",
    weight: "20 lb.",
    notes:
      "Light armor. Maximum Dex bonus +4; armor check penalty −3; arcane spell failure 15%; speed unchanged (30 ft./20 ft.). Don 5 rounds (2 rounds hastily); remove 1 round. An integral part of the Church of Cyriss' clerical garb: a thick iron dome helmet and gorget combination, heavily riveted, with Cyriss' symbol emblazoned on the front of the gorget and two glass-lensed portals granting the wearer vision. Often worn with other light armor (typically an armored apron): when stacked with light armor, the armor bonuses stack, use the worst maximum Dex bonus −1, the worst armor check penalty −1, the worst arcane spell failure +5%, and speed becomes 20 ft. and 15 ft.",
    acBonus: 2,
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  // ── Miscellaneous gear (pp. 56–57) ──────────────────────────────
  {
    id: "collapsible-oar",
    name: "Collapsible Oar",
    category: "gear",
    cost: "15 gp (replacement; included with the Inflatable Raft Pack)",
    weight: "2 lb.",
    notes:
      "A broad paddle fitted to the end of a telescoping metal handle, the entire affair shortening to 1 foot in length when collapsed and 3 feet in length when extended. Two collapsible oars are included in the Inflatable Raft Pack; the printed price and weight are for a single replacement oar.",
    source: `${LL} p. 56`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "gobber-poncho",
    name: "Gobber Poncho",
    category: "gear",
    cost: "100 gp",
    weight: "1 lb.",
    notes:
      "Constructed of thin leather treated with a noxious alchemical mixture composed of gobber sweat, urine, and other secret ingredients; a murky gray-green in color with a slightly slick, tacky texture and a decidedly peculiar smell. Gobber wearers gain their full racial camouflage bonus as if they are naked. These items do not function for non-gobbers (but see the Robe of Gobberkind, woven from three gobber ponchos).",
    source: `${LL} p. 57`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "inflatable-raft-pack",
    name: "Inflatable Raft Pack",
    category: "gear",
    cost: "55 gp",
    weight: "11 lb.",
    notes:
      "A rubberized fabric boat carried in a 1-foot diameter canvas bag with rope handles (5 lb. for the raft, 2 lb. for the hand-pump, 2 lb. each for the two collapsible oars; the weight of the canvas bag is negligible). The raft can carry four human-sized individuals comfortably and, using the hand-pump, requires 20 rounds to fully inflate. While easy to deflate and carry, the raft is quite fragile: any attack inflicting more than 1 hp of damage will puncture it. In a pinch a normal oar or rifle butt can be used to paddle the craft.",
    source: `${LL} p. 57`,
    sourceUrl: LL_PATH,
    ruleset: "iron_kingdoms",
  },
];
