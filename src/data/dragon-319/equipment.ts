// Dragon Magazine #319 (May 2004) — equipment.
// Sources: the Dark Sun feature's "Weapons of Athas" (p. 40),
// "Materials" (pp. 39–40), and "Armor" table (p. 42). (The Shen
// article's sidebar weapons are held — see the feats file's
// header note.)
//
// Every stat below was verified against the printed page images
// (magazine pp. 39–42, 73–74): the OCR layer garbles several
// values (it read the cahulaks as 2d6 and dropped its weight;
// the image gives 2d4 and 1 lb.). All Dark Sun prices are in
// ceramic pieces (cp); on Athas 1 ceramic piece has the same
// purchasing power as 1 gold piece in other lands, and that
// equivalence is noted in each record. The printed stat format
// follows the house equipment convention (the issue-318 pack).
//
// Supersede/suffix adjudication (see MANIFEST.md): the catalog's
// fan index holds ten #319 items in data/core/new-equipment.json
// (bark, bone, wood, chitin-dr319, bronze-breastplate,
// bronze-half-plate, bronze-light-shield, bronze-heavy-shield,
// cahulaks, gythka). These extractions supersede those records;
// where a fan id would collide, the extraction carries the -319
// suffix (the fan "Wood" armor even prints different statistics —
// max Dex +6, check penalty −2 — from this issue's table, which
// gives +4/−3; the magazine table governs). Studded leather's
// price really is printed as 125 cp in the table; it is carried
// as printed and flagged in MANIFEST.md.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const DM319_DS = "Dragon Magazine #319 — Dark Sun feature";
const URL319 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine319_djvu.txt";

export const DRAGON_319_EQUIPMENT: EquipmentItem[] = [
  // ---- Weapons of Athas (p. 40) ----
  {
    id: "cahulaks-319",
    name: "Cahulaks",
    category: "weapon",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "25 cp",
    weight: "1 lb.",
    notes:
      "Exotic weapon; two-handed melee. Damage 1d6 (Small), 2d4 (Medium), 2d6 (Large); critical ×2. Piercing. Two four-bladed heads connected by a 12-foot-long rope, whirled and hurled at the target. Reach weapon: threatens at 10 feet but also usable against adjacent foes (unlike most reach weapons). Can be used for trip attacks (the wielder can drop it to avoid being tripped in return) and gives +2 on opposed attack rolls to disarm (including rolls to avoid being disarmed). Weapon Finesse cannot be applied even though it is light for its purpose. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas); listed cost assumes bone, stone, or wood construction.",
  },
  {
    id: "gythka-319",
    name: "Gythka",
    category: "weapon",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "60 cp",
    weight: "25 lb.",
    notes:
      "Exotic weapon; two-handed melee, double weapon. Damage 1d8/1d8 (Small), 1d10/1d10 (Medium), 2d8/2d8 (Large); critical ×2. Slashing. A polearm with a blade at each end. Fighting with both ends uses the two-weapon fighting rules as if fighting with a one-handed weapon and a light weapon; a thri-kreen can wield two gythkas (one in each pair of arms) and treat them as double weapons, though for the off-hand gythka the secondary end is treated as a one-handed weapon rather than a light one. Described as in the Expanded Psionics Handbook. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas); listed cost assumes bone, stone, or wood construction.",
  },
  {
    id: "chatkcha",
    name: "Chatkcha",
    category: "weapon",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "1 cp",
    weight: "1 lb.",
    notes:
      "Exotic weapon; ranged. Damage 1d4 (Small), 1d6 (Medium), 1d8 (Large); critical 18–20/×2. Range increment 20 ft. Slashing. A crystalline throwing wedge, the traditional weapon of the thri-kreen. Described as in the Expanded Psionics Handbook. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas); listed cost assumes bone, stone, or wood construction.",
  },
  // ---- Weapon materials (pp. 39–40) ----
  {
    id: "bone-material-319",
    name: "Bone (Weapon Material)",
    category: "gear",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "As the PHB price, in ceramic pieces",
    weight: "Half the listed weight",
    notes:
      "Athasian weapon material. Bone weapons take a −2 penalty on attacks and damage (minimum damage 1). Hardness 6; hit points by weapon type (per inch of thickness / weapon-hit-points table): light blade 1, one-handed blade 2, two-handed blade 3, light hafted 3, one-handed hafted 6, two-handed hafted 10, projectile 6. A bone weapon costs the same number of ceramic pieces as the iron weapon's gold-piece price in the Player's Handbook and weighs half as much.",
  },
  {
    id: "wood-material-319",
    name: "Wood (Weapon Material)",
    category: "gear",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "As the PHB price, in ceramic pieces",
    weight: "As listed",
    notes:
      "Athasian weapon material. Wooden weapons made from clubs, staves, or branches — club, quarterstaff, sap, greatclub, and all bows and crossbows — take no attack or damage penalty. All other bludgeoning weapons take a −3 penalty on attacks and damage (minimum damage 1). Piercing and slashing weapons cannot be made of wood. Hardness 5; hit points: light hafted 2, one-handed hafted 5, two-handed hafted 10, projectile 5 (blades cannot be wood). Cost as for bone (Player's Handbook gold price, paid in ceramic pieces).",
  },
  {
    id: "stone-material-319",
    name: "Stone (Weapon Material)",
    category: "gear",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "As the PHB price, in ceramic pieces",
    weight: "As listed",
    notes:
      "Athasian weapon material. Stone weapons take a −2 penalty on attacks and damage (minimum damage 1), except stone sling bullets, which take no attack or damage penalty. Hardness 8; hit points: light blade 1, one-handed blade 3, two-handed blade 5, light hafted 5, one-handed hafted 10, two-handed hafted 15 (projectile weapons cannot be stone). Cost as for bone (Player's Handbook gold price, paid in ceramic pieces).",
  },
  {
    id: "bronze-material-319",
    name: "Bronze (Weapon Material)",
    category: "gear",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "Five times the PHB price, in ceramic pieces",
    weight: "As listed",
    notes:
      "Athasian weapon material. Bronze weapons take a −1 penalty on attacks and damage. Hardness 9; hit points: light blade 1, one-handed blade 4, two-handed blade 7, light hafted 7, one-handed hafted 14, two-handed hafted 20, projectile 14. A bronze weapon costs five times the Player's Handbook gold-piece price, paid in ceramic pieces.",
  },
  {
    id: "blood-obsidian-material-319",
    name: "Blood Obsidian (Weapon Material)",
    category: "gear",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "PHB price + 2,000 cp",
    weight: "As listed",
    notes:
      "Athasian weapon material. Blood obsidian is a form of naturally occurring dark glass; weapons made from it gain a natural +1 enhancement bonus on damage rolls only, which does not stack with other enhancement bonuses. The bonus functions in antimagic and dead magic areas, and a masterwork blood obsidian weapon effectively gains +1 on attacks and damage (the masterwork bonus and the material's enhancement bonus). Hardness 12; hit points: light blade 2, one-handed blade 5, two-handed blade 10, light hafted 10, one-handed hafted 20, two-handed hafted 30 (projectile weapons cannot be blood obsidian). Cost: the Player's Handbook gold-piece price plus 2,000 ceramic pieces, paid in ceramic pieces.",
  },
  // ---- Armor (p. 42) ----
  {
    id: "padded-armor-319",
    name: "Padded Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "5 cp",
    weight: "10 lb.",
    acBonus: 1,
    notes:
      "Light armor. Armor bonus +1; maximum Dex bonus +8; armor check penalty 0; arcane spell failure 5%; speed 30 ft./20 ft. at full speed. Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "bark-319",
    name: "Bark Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "5 cp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armor made from thick strips of tree bark. Armor bonus +2; maximum Dex bonus +5; armor check penalty −2; arcane spell failure 15%; speed 30 ft./20 ft. at full speed. Donning: don 4 minutes, don hastily 1 minute, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bark'.",
  },
  {
    id: "cord-armor-319",
    name: "Cord Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "15 cp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armor made of layered twisted cords or ropes. Armor bonus +2; maximum Dex bonus +5; armor check penalty −1; arcane spell failure 5%; speed 30 ft./20 ft. at full speed. Donning: don 1 minute, don hastily 5 rounds, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "leather-armor-319",
    name: "Leather Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "10 cp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armor. Armor bonus +2; maximum Dex bonus +6; armor check penalty 0; arcane spell failure 10%; speed 30 ft./20 ft. at full speed. Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "bone-319",
    name: "Bone Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "20 cp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Light armor lashed together from many small pieces of bone. Armor bonus +3; maximum Dex bonus +4; armor check penalty −3; arcane spell failure 15%; speed 30 ft./20 ft. at full speed. Donning: don 1 minute, don hastily 5 rounds, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bone'.",
  },
  {
    id: "wood-319",
    name: "Wood Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "15 cp",
    weight: "15 lb.",
    acBonus: 3,
    notes:
      "Light armor made of small pieces of wood tied with leather thongs, often reinforced with wooden slats across the chest. Armor bonus +3; maximum Dex bonus +4; armor check penalty −3; arcane spell failure 15%; speed 30 ft./20 ft. at full speed. Donning: don 1 minute, don hastily 5 rounds, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'wood' (whose statistics differ from this table).",
  },
  {
    id: "studded-leather-armor-319",
    name: "Studded Leather Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "125 cp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Light armor. Armor bonus +3; maximum Dex bonus +5; armor check penalty −1; arcane spell failure 15%; speed 30 ft./20 ft. at full speed. Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). The 125 cp price is printed as shown in the magazine's armor table (see MANIFEST.md).",
  },
  {
    id: "leather-scale-armor-319",
    name: "Leather Scale Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "35 cp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Light armor made of cured leather scales. Armor bonus +3; maximum Dex bonus +6; armor check penalty −2; arcane spell failure 15%; speed 30 ft./20 ft. at full speed. Donning: don 1 minute, don hastily 5 rounds, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "shell-armor-319",
    name: "Shell Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "25 cp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Medium armor made from the carapaces of turtles and other shell-bearing desert animals. Armor bonus +3; maximum Dex bonus +3; armor check penalty −2; arcane spell failure 20%; speed 20 ft./15 ft. at full speed. Donning: don 4 minutes, don hastily 1 minute, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "hide-armor-319",
    name: "Hide Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "15 cp",
    weight: "25 lb.",
    acBonus: 3,
    notes:
      "Medium armor. Armor bonus +3; maximum Dex bonus +4; armor check penalty −3; arcane spell failure 20%; speed 20 ft./15 ft. at full speed. Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "bronze-breastplate-319",
    name: "Bronze Breastplate",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "200 cp",
    weight: "30 lb.",
    acBonus: 4,
    notes:
      "Medium armor. This Athasian bronze breastplate's statistics differ from the Player's Handbook breastplate: armor bonus +4; maximum Dex bonus +4; armor check penalty −4; arcane spell failure 25%; speed 20 ft./15 ft. at full speed. Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bronze-breastplate'.",
  },
  {
    id: "chitin-319",
    name: "Chitin Armor",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "100 cp",
    weight: "35 lb.",
    acBonus: 5,
    notes:
      "Heavy armor made from the chitin of giant insects. Armor bonus +5; maximum Dex bonus +0; armor check penalty −6; arcane spell failure 35%; speed 20 ft./15 ft. (running in this armor is triple speed, not quadruple). Donning: don 4 minutes, don hastily 1 minute, remove 1 minute (help halves these times). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'chitin-dr319'.",
  },
  {
    id: "bronze-half-plate-319",
    name: "Bronze Half-Plate",
    category: "armor",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "600 cp",
    weight: "50 lb.",
    acBonus: 6,
    notes:
      "Heavy armor. Armor bonus +6; maximum Dex bonus +1; armor check penalty −7; arcane spell failure 40%; speed 20 ft./15 ft. (running in this armor is triple speed, not quadruple). Armor for Small characters weighs half as much. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bronze-half-plate'.",
  },
  // ---- Shields (p. 42) ----
  {
    id: "buckler-319",
    name: "Buckler",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "15 cp",
    weight: "5 lb.",
    acBonus: 1,
    notes:
      "Shield bonus +1; armor check penalty −1; arcane spell failure 5%. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "beetle-buckler-319",
    name: "Beetle Buckler",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "6,600 cp",
    weight: "5 lb.",
    acBonus: 2,
    notes:
      "A living Tiny scarab beetle that latches onto the bearer's forearm; it must be worn for 1 day before it grants its bonus. Acts as a masterwork buckler with a nonmagical +1 enhancement bonus to AC (shield bonus +2 total; armor check penalty −1; arcane spell failure 5%). On a command word, the beetle instead detaches and flies around its owner, blocking ranged attacks as though the owner had the Deflect Arrows feat (using the beetle's Reflex save instead of the owner's). The beetle does not attack except to defend itself. Creature statistics as printed with the armor table: beetle buckler — CR 1/2; Tiny vermin; HD 1d8; hp 4; Init +6; Spd 10 ft., fly 40 ft. (good); AC 24, touch 18, flat-footed 18; Base Atk +0; Grp −9; Atk/Full Atk −1 melee (1d3−5/20, bite); Space/Reach 2-1/2 ft./0 ft.; SQ Deflect Arrows, vermin traits; AL N; SV Fort +2, Ref +6, Will +0; Str 1, Dex 23, Con 10, Int —, Wis 10, Cha 2; Skills Hide +14, Listen +4, Move Silently +10, Spot +4; Feats —. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "light-wooden-shield-319",
    name: "Shield, Light Wooden",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "3 cp",
    weight: "5 lb.",
    acBonus: 1,
    notes:
      "Shield bonus +1; armor check penalty −1; arcane spell failure 5%. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "bronze-light-shield-319",
    name: "Shield, Light Bronze",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "9 cp",
    weight: "6 lb.",
    acBonus: 1,
    notes:
      "Shield bonus +1; armor check penalty −1; arcane spell failure 5%. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bronze-light-shield'.",
  },
  {
    id: "heavy-wooden-shield-319",
    name: "Shield, Heavy Wooden",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "7 cp",
    weight: "10 lb.",
    acBonus: 2,
    notes:
      "Shield bonus +2; armor check penalty −2; arcane spell failure 15%. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
  {
    id: "bronze-heavy-shield-319",
    name: "Shield, Heavy Bronze",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "20 cp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Shield bonus +2; armor check penalty −2; arcane spell failure 15%. Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas). Supersedes the fan-index record 'bronze-heavy-shield'.",
  },
  {
    id: "tower-shield-319",
    name: "Shield, Tower",
    category: "shield",
    ruleset: "core",
    source: DM319_DS,
    sourceUrl: URL319,
    cost: "30 cp",
    weight: "45 lb.",
    acBonus: 4,
    notes:
      "Shield bonus +4; armor check penalty −10; arcane spell failure 50%. Instead of its AC bonus, the shield can be used to grant cover (per the Player's Handbook). Priced in ceramic pieces (1 cp = 1 gp purchasing power on Athas).",
  },
];
