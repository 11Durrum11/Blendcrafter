/**
 * Omni sweep wave 2 (2026-11-02): Sorcery & Steam — gap-fill only.
 * The catalog already carries most of this book from its own packs:
 * all 18 firearms, all 6 steamcraft armor suits, all 11 Chapter 5
 * vehicles, both magic items (hypnotist's watch; the painjector is
 * cataloged as equipment), and a scatter of gear — all at prices
 * agreeing with this book except as noted below. Built here are the
 * 79 Chapter 4 entries that were missing: the scholar's, rogue's,
 * and cleric's tools, general steam gear, firearm accessories and
 * prose-priced extras (silver bullet, optical scope), cannons and
 * their shot, the p. 152 melee-weapons table, grenades, and the
 * alchemical gunpowders. The steamcraft armor OPTIONS are not built
 * here: the book's own pack already catalogs all 13 options as
 * combined records named e.g. "Strength Boosting (steamcraft armor
 * option)" whose cost strings carry every per-variant price in this
 * book (an id-collision check against that pack caught the overlap).
 * Cannon shot names
 * carry a cannon-size suffix because the book reuses the same five
 * shot names at three sizes. Grenade names render the table's
 * size-plus-type entries as "Explosive Grenade, Small" and so on.
 * PRICE CONFLICTS with the existing catalog (nothing edited; see the
 * omni-sweep report): the book's steam-powered alchemist's lab is
 * 1,000 gp vs. the catalog's 200 gp record; powder horn 1 gp vs.
 * 3 gp; awl 5 sp vs. 1 sp; bayonet 20 gp vs. 10 gp; belaying pin
 * 1 gp vs. no printed cost; smoke grenade 70 gp vs. a "military
 * issue only" record; burning powder "5 gp/shot" vs. 75 gp/tube.
 * (A separate 5 gp "Climbing Claws" record from another source
 * shares its name with the 500 gp steamcraft option, which the
 * book's pack carries as "Climbing Claws (steamcraft armor
 * option)".) In-book conflicts
 * resolved in the records below: sparkling sword weight 4 lb. (the
 * melee table) over 6 lb. (the general table); springblades at
 * 150 gp/3 lb. because the description states the equipment table
 * lists a single blade (melee table: 250 gp/2 lb.); steambow weight
 * 100 lb. (firearms table) over 30 lb. (general table) — the steambow
 * itself is already cataloged, so that conflict is report-only.
 * DESCRIBED BUT NEVER PRICED, therefore not built: firesprayer,
 * fighting claws, hand cannon, shoulder cannon, jumping boots. The
 * bard in a box's magic-mouth enchanted variant (+1,000 gp) is a
 * modification, not a separate printed entry. All records use
 * ruleset "sorcery_steam". Prices and weights are as printed;
 * notes are mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const SS_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const SS_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "arcane-flux-detector",
    "name": "Arcane Flux Detector",
    "category": "tool",
    "cost": "500 gp",
    "weight": "5 lb.",
    "notes": "Detects lingering arcane magic out to 1 ft. per spell level and grants a +4 bonus to disable magical traps.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "arcane-pulse-disruptor",
    "name": "Arcane Pulse Disruptor",
    "category": "gear",
    "cost": "3,500 gp",
    "weight": "60 lb.",
    "notes": "Causes 50% arcane spell failure within 15 ft., imposes −4 on Scry checks into the area, and spontaneous casters must make a Will save (DC 19) to approach it.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "bard-in-a-box-hand-cranked",
    "name": "Bard in a Box (Hand-Cranked)",
    "category": "gear",
    "cost": "450 gp",
    "weight": "2 lb.",
    "notes": "A hand-cranked device that plays specially prepared bardic scrolls.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "bard-in-a-box-steam-powered",
    "name": "Bard in a Box (Steam-Powered)",
    "category": "gear",
    "cost": "900 gp",
    "weight": "3 lb.",
    "notes": "A steam-powered device that plays specially prepared bardic scrolls.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "calculating-engine-large",
    "name": "Calculating Engine, Large",
    "category": "gear",
    "cost": "10,000 gp",
    "weight": "1 ton",
    "notes": "Grants a +10 circumstance bonus on complex analysis; the bonus rises to +12 for lawful spell research.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "calculating-engine-small",
    "name": "Calculating Engine, Small",
    "category": "gear",
    "cost": "20,000 gp",
    "weight": "10 lb.",
    "notes": "Grants a +4 circumstance bonus on complex analysis (+6 for lawful spell research). Hardness 2, 5 hit points.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "clockwork-chess-set",
    "name": "Clockwork Chess Set",
    "category": "gear",
    "cost": "Varies (1,000 gp + 150 gp per skill rank)",
    "weight": "100 lb.",
    "notes": "A clockwork chess automaton priced by its skill, as printed: 1,000 gp plus 150 gp per skill rank.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "measuring-rod",
    "name": "Measuring Rod",
    "category": "tool",
    "cost": "100 gp",
    "weight": "1 lb.",
    "notes": "Telescopes out to 20 ft. and grants a +2 bonus on Search checks for hidden spaces.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "scribing-box",
    "name": "Scribing Box",
    "category": "gear",
    "cost": "500 gp",
    "weight": "75 lb.",
    "notes": "Copies scrolls at quarter size and can produce multiple copies at once.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "vibrational-veradicator",
    "name": "Vibrational Veradicator",
    "category": "tool",
    "cost": "150 gp",
    "weight": "8 lb.",
    "notes": "A lie-detecting device; lying to it requires a Will save (DC 15). (The equipment table misprints the name as 'veradictor'; the item description's spelling is used.)",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "clockwork-spider",
    "name": "Clockwork Spider",
    "category": "gear",
    "cost": "500 gp",
    "weight": "1/4 lb.",
    "notes": "Climbs any surface, drills into material of hardness less than 10, and lowers a silk thread that holds 150 lb.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "drillspike",
    "name": "Drillspike",
    "category": "tool",
    "cost": "50 gp",
    "weight": "1 lb.",
    "notes": "Silently burrows into material of hardness less than 8.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "far-reaching-gauntlet",
    "name": "Far-Reaching Gauntlet",
    "category": "gear",
    "cost": "800 gp",
    "weight": "2 lb.",
    "notes": "Extends the wearer's hand out to 10 ft.; manipulation at range takes a −4 penalty without the relevant proficiency.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "springsaw",
    "name": "Springsaw",
    "category": "tool",
    "cost": "200 gp",
    "weight": "1/2 lb.",
    "notes": "A spring-driven saw that cuts through bolts, dealing 1d8 damage per minute of cutting.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "steamstilts",
    "name": "Steamstilts",
    "category": "gear",
    "cost": "150 gp",
    "weight": "5 lb.",
    "notes": "Stilts whose soles telescope up to 5 ft.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "holy-water-sprinkler",
    "name": "Holy Water Sprinkler",
    "category": "weapon",
    "cost": "600 gp",
    "weight": "8 lb.",
    "notes": "An exotic ranged weapon that delivers a dose of holy or unholy water.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "prayer-watch",
    "name": "Prayer Watch",
    "category": "gear",
    "cost": "800 gp",
    "weight": "1/4 lb.",
    "notes": "Vibrates at its owner's prayer times; it has a 1% failure chance and needs weekly winding.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "automatic-ladder-collapsible",
    "name": "Automatic Ladder, Collapsible",
    "category": "gear",
    "cost": "300 gp",
    "weight": "15 lb.",
    "notes": "A powered ladder extending from 10 to 100 ft. that carries riders.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "clockwork-animals",
    "name": "Clockwork Animals",
    "category": "gear",
    "cost": "750 gp",
    "weight": "1 lb.",
    "notes": "Tiny automatons that follow up to 10 simple commands.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "miners-glove",
    "name": "Miner's Glove",
    "category": "gear",
    "cost": "700 gp",
    "weight": "25 lb.",
    "notes": "A heavy powered glove (the description headings it 'Dwarven Miner's Glove') with sockets for mining tools; it doubles the wearer's mining speed.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "electric-lantern",
    "name": "Electric Lantern",
    "category": "gear",
    "cost": "50 gp",
    "weight": "3 lb.",
    "notes": "A battery-powered lantern; each battery runs it for 1 hour.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "battery-ss",
    "name": "Battery",
    "category": "gear",
    "cost": "1 sp",
    "weight": "—",
    "notes": "Powers an electric lantern for 1 hour.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "diving-suit",
    "name": "Diving Suit",
    "category": "gear",
    "cost": "500 gp",
    "weight": "20 lb.",
    "notes": "Lets the wearer breathe underwater for 1 hour, functions as masterwork leather armor, and grants a +2 bonus on Swim checks.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "rocket-pack",
    "name": "Rocket Pack",
    "category": "gear",
    "cost": "5,000 gp",
    "weight": "40 lb.",
    "notes": "Provides flight up to 150 ft.; it has a 5% ignition misfire chance and explodes for 10d6 damage if destroyed.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "steam-portal",
    "name": "Steam Portal",
    "category": "gear",
    "cost": "600 gp",
    "weight": "1 ton",
    "notes": "A steam engine that raises a door or portcullis too heavy to lift by hand (Strength DC 30).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "buckler-glove",
    "name": "Buckler Glove",
    "category": "shield",
    "cost": "300 gp",
    "weight": "8 lb.",
    "notes": "A glove whose fan-out buckler cannot be disarmed.",
    "acBonus": 1,
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "gauntlet-of-the-iron-ogre",
    "name": "Gauntlet of the Iron Ogre",
    "category": "gear",
    "cost": "800 gp",
    "weight": "30 lb.",
    "notes": "Grants a +4 bonus to Strength (except for encumbrance and Strength-based skill checks), lets the wearer wield weapons one size larger, and gives a +1 armor bonus.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "gnome-guardians-knife",
    "name": "Gnome Guardian's Knife",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "1 lb.",
    "notes": "A masterwork dagger containing a suite of masterwork tools.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "sparking-sword",
    "name": "Sparking Sword",
    "category": "weapon",
    "cost": "2,315 gp",
    "weight": "4 lb.",
    "notes": "A masterwork longsword (price included) whose nonmagical battery adds +1d6 electricity damage on hits for 20 rounds per charge. (The general equipment table lists its weight as 6 lb.; the melee weapons table's 4 lb. is used.)",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "springblades",
    "name": "Springblades",
    "category": "weapon",
    "cost": "150 gp",
    "weight": "3 lb.",
    "notes": "Spring-loaded blades; the description states the equipment table's cost and weight are for a single blade. (The melee weapons table lists 250 gp and 2 lb.)",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "apostle",
    "name": "Apostle",
    "category": "gear",
    "cost": "2 sp",
    "weight": "—",
    "notes": "A firearm accessory: a pre-measured powder charge carrier.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cartridge-box",
    "name": "Cartridge Box",
    "category": "gear",
    "cost": "8 sp",
    "weight": "1 lb.",
    "notes": "Grants a +2 bonus on Munitions checks made to reload.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "percussion-cap",
    "name": "Percussion Cap",
    "category": "gear",
    "cost": "1 sp",
    "weight": "—",
    "notes": "The ignition cap used by percussion cap firearms.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "ramrod-iron",
    "name": "Ramrod, Iron",
    "category": "gear",
    "cost": "1 sp",
    "weight": "3 lb.",
    "notes": "An iron ramrod for loading muzzle-loading firearms.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "ramrod-wooden",
    "name": "Ramrod, Wooden",
    "category": "gear",
    "cost": "5 cp",
    "weight": "1 lb.",
    "notes": "A wooden ramrod for loading muzzle-loading firearms.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "swine-feather",
    "name": "Swine Feather",
    "category": "gear",
    "cost": "2 sp",
    "weight": "2 lb.",
    "notes": "A rest for a two-handed firearm; once set up it grants a +1 bonus on ranged attacks with the weapon.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "silver-bullet",
    "name": "Silver Bullet",
    "category": "ammunition",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A single silver bullet, priced individually in the book's firearm prose.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "optical-scope",
    "name": "Optical Scope",
    "category": "gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Sights that add 10 gp to a weapon's cost and, when aiming as a move action, increase a longarm's range increment by 10 ft.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "light-cannon",
    "name": "Light Cannon",
    "category": "weapon",
    "cost": "1,000 gp",
    "weight": "500 lb.",
    "notes": "The smallest of the book's three cannon classes; fires light cannon shot.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "medium-cannon",
    "name": "Medium Cannon",
    "category": "weapon",
    "cost": "2,000 gp",
    "weight": "2,000 lb.",
    "notes": "The middle of the book's three cannon classes; fires medium cannon shot.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "heavy-cannon",
    "name": "Heavy Cannon",
    "category": "weapon",
    "cost": "4,000 gp",
    "weight": "4,000 lb.",
    "notes": "The largest of the book's three cannon classes; fires heavy cannon shot.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cannonball-light-cannon",
    "name": "Cannonball (Light Cannon)",
    "category": "ammunition",
    "cost": "5 gp",
    "weight": "6 lb.",
    "notes": "Solid shot for a light cannon, dealing 4d6 damage in a line.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "shell-light-cannon",
    "name": "Shell (Light Cannon)",
    "category": "ammunition",
    "cost": "10 gp",
    "weight": "6 lb.",
    "notes": "Explosive shell for a light cannon, dealing 2d6 damage in a 10 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "case-shot-light-cannon",
    "name": "Case Shot (Light Cannon)",
    "category": "ammunition",
    "cost": "10 gp",
    "weight": "6 lb.",
    "notes": "Case shot for a light cannon, dealing 3d6 damage over a 20 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "canister-shot-light-cannon",
    "name": "Canister Shot (Light Cannon)",
    "category": "ammunition",
    "cost": "15 gp",
    "weight": "6 lb.",
    "notes": "Canister shot for a light cannon, dealing 3d6 damage over a 30 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "grape-shot-light-cannon",
    "name": "Grape Shot (Light Cannon)",
    "category": "ammunition",
    "cost": "15 gp",
    "weight": "6 lb.",
    "notes": "Grape shot for a light cannon, dealing 3d6 damage over a 40 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cannonball-medium-cannon",
    "name": "Cannonball (Medium Cannon)",
    "category": "ammunition",
    "cost": "8 gp",
    "weight": "12 lb.",
    "notes": "Solid shot for a medium cannon, dealing 6d6 damage in a line.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "shell-medium-cannon",
    "name": "Shell (Medium Cannon)",
    "category": "ammunition",
    "cost": "15 gp",
    "weight": "12 lb.",
    "notes": "Explosive shell for a medium cannon, dealing 4d6 damage in a 20 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "case-shot-medium-cannon",
    "name": "Case Shot (Medium Cannon)",
    "category": "ammunition",
    "cost": "15 gp",
    "weight": "12 lb.",
    "notes": "Case shot for a medium cannon, dealing 5d6 damage over a 30 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "canister-shot-medium-cannon",
    "name": "Canister Shot (Medium Cannon)",
    "category": "ammunition",
    "cost": "20 gp",
    "weight": "12 lb.",
    "notes": "Canister shot for a medium cannon, dealing 5d6 damage over a 40 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "grape-shot-medium-cannon",
    "name": "Grape Shot (Medium Cannon)",
    "category": "ammunition",
    "cost": "20 gp",
    "weight": "12 lb.",
    "notes": "Grape shot for a medium cannon, dealing 5d6 damage over a 50 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "cannonball-heavy-cannon",
    "name": "Cannonball (Heavy Cannon)",
    "category": "ammunition",
    "cost": "20 gp",
    "weight": "24 lb.",
    "notes": "Solid shot for a heavy cannon, dealing 8d6 damage in a line.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "shell-heavy-cannon",
    "name": "Shell (Heavy Cannon)",
    "category": "ammunition",
    "cost": "25 gp",
    "weight": "24 lb.",
    "notes": "Explosive shell for a heavy cannon, dealing 6d6 damage in a 40 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "case-shot-heavy-cannon",
    "name": "Case Shot (Heavy Cannon)",
    "category": "ammunition",
    "cost": "25 gp",
    "weight": "24 lb.",
    "notes": "Case shot for a heavy cannon, dealing 7d6 damage over a 50 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "canister-shot-heavy-cannon",
    "name": "Canister Shot (Heavy Cannon)",
    "category": "ammunition",
    "cost": "30 gp",
    "weight": "24 lb.",
    "notes": "Canister shot for a heavy cannon, dealing 7d6 damage over a 60 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "grape-shot-heavy-cannon",
    "name": "Grape Shot (Heavy Cannon)",
    "category": "ammunition",
    "cost": "30 gp",
    "weight": "24 lb.",
    "notes": "Grape shot for a heavy cannon, dealing 7d6 damage over an 80 ft. area.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  }
  ,
  {
    "id": "scalpel",
    "name": "Scalpel",
    "category": "weapon",
    "cost": "3 gp",
    "weight": "—",
    "notes": "A surgeon's blade used as a weapon: 1d2 damage, critical 18–20/×2.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "injector",
    "name": "Injector",
    "category": "weapon",
    "cost": "10 gp",
    "weight": "1 lb.",
    "notes": "Deals 1d3 damage (critical ×2); whenever it deals at least 1 point of damage it injects its loaded poison or potion as a free action.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "screwdriver",
    "name": "Screwdriver",
    "category": "weapon",
    "cost": "5 sp",
    "weight": "1 lb.",
    "notes": "A tool usable as a weapon: 1d4 damage, critical 19–20/×2.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "wrench-medium",
    "name": "Wrench, Medium",
    "category": "weapon",
    "cost": "2 gp",
    "weight": "4 lb.",
    "notes": "A medium wrench usable as a weapon: 1d4 damage, critical ×3.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tongs-blacksmith",
    "name": "Tongs, Blacksmith",
    "category": "weapon",
    "cost": "1 gp",
    "weight": "3 lb.",
    "notes": "Blacksmith's tongs usable as a weapon: 1d6 damage, critical ×2.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "wrench-large",
    "name": "Wrench, Large",
    "category": "weapon",
    "cost": "3 gp",
    "weight": "5 lb.",
    "notes": "A large wrench usable as a weapon: 1d6 damage, critical ×3.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "shovel-gardener",
    "name": "Shovel, Gardener",
    "category": "weapon",
    "cost": "1 gp",
    "weight": "5 lb.",
    "notes": "A gardener's shovel usable as a weapon: 1d6 damage, critical ×2.",
    "source": "Sorcery & Steam — Chapter 4 (Melee Weapons Table), p. 152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "explosive-grenade-small",
    "name": "Explosive Grenade, Small",
    "category": "weapon",
    "cost": "150 gp",
    "weight": "1/2 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 1d6 damage on a direct hit and 1d2 splash damage in a 5 ft. radius. All of the book's grenades have a 5% timer-failure chance; masterwork grenades cost three times as much, fail 1% of the time, and grant +1 on attacks.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "explosive-grenade-medium",
    "name": "Explosive Grenade, Medium",
    "category": "weapon",
    "cost": "200 gp",
    "weight": "1 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 2d6 damage on a direct hit and 1d4 splash damage in a 10 ft. radius. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "explosive-grenade-large",
    "name": "Explosive Grenade, Large",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "2 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 3d6 damage on a direct hit and 1d6 splash damage in a 15 ft. radius. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "tangler-grenade",
    "name": "Tangler Grenade",
    "category": "weapon",
    "cost": "75 gp",
    "weight": "1 lb.",
    "notes": "Thrown grenade (10 ft. range increment) that entangles everyone in its area. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fire-grenade-small",
    "name": "Fire Grenade, Small",
    "category": "weapon",
    "cost": "200 gp",
    "weight": "1 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 2d6 fire damage on a direct hit and 1d6 splash damage. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fire-grenade-medium",
    "name": "Fire Grenade, Medium",
    "category": "weapon",
    "cost": "250 gp",
    "weight": "1.5 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 3d6 fire damage on a direct hit and 2d6 splash damage. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "fire-grenade-large",
    "name": "Fire Grenade, Large",
    "category": "weapon",
    "cost": "300 gp",
    "weight": "3 lb.",
    "notes": "Thrown grenade (10 ft. range increment) dealing 4d6 fire damage on a direct hit and 2d8 splash damage. Grenades have a 5% timer-failure chance (1% and +1 on attacks if masterwork, at three times the cost).",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "orcish-ale-grenade",
    "name": "Orcish Ale Grenade",
    "category": "weapon",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "A primitive lit-rag grenade dealing 1d4 damage on a direct hit and 1 splash damage, with a 10 ft. range increment and the standard 5% timer-failure chance.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "charging-powder",
    "name": "Charging Powder",
    "category": "alchemical gear",
    "cost": "5 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it deal an extra +1d4 electricity damage.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "deathbane-powder",
    "name": "Deathbane Powder",
    "category": "alchemical gear",
    "cost": "10 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it gain the ghost touch quality against incorporeal undead.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "merfolks-revenge",
    "name": "Merfolk's Revenge",
    "category": "alchemical gear",
    "cost": "3 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: firearms loaded with it function underwater and in rain.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "outsiders-dust-1",
    "name": "Outsider's Dust +1",
    "category": "alchemical gear",
    "cost": "5 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it overcome outsider damage reduction as a +1 weapon, for damage reduction purposes only.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "outsiders-dust-2",
    "name": "Outsider's Dust +2",
    "category": "alchemical gear",
    "cost": "10 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it overcome outsider damage reduction as a +2 weapon, for damage reduction purposes only.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "outsiders-dust-3",
    "name": "Outsider's Dust +3",
    "category": "alchemical gear",
    "cost": "20 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it overcome outsider damage reduction as a +3 weapon, for damage reduction purposes only.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "outsiders-dust-4",
    "name": "Outsider's Dust +4",
    "category": "alchemical gear",
    "cost": "40 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it overcome outsider damage reduction as a +4 weapon, for damage reduction purposes only.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
  {
    "id": "outsiders-dust-5",
    "name": "Outsider's Dust +5",
    "category": "alchemical gear",
    "cost": "80 gp/shot",
    "weight": "—",
    "notes": "Alchemical gunpowder, priced per shot as printed: bullets fired with it overcome outsider damage reduction as a +5 weapon, for damage reduction purposes only.",
    "source": "Sorcery & Steam — Chapter 4 (Equipment), pp. 123–152",
    "sourceUrl": "",
    "ruleset": "sorcery_steam"
  },
];
