import type { EquipmentItem } from "@/engine/types";

// The Quintessential Rogue (Michael Mearls, ©2002
// Mongoose Publishing, Collector's Series, d20
// 3.0-era) — "Tools of the Trade," printed pp. 53-61,
// transcribed from Shaun's own scanned copy
// (image-only; read visually page by page, 2026-11-04).
// This is a 3.0-era book: weapon sizes, damage,
// criticals, ranges and armour figures are transcribed
// AS PRINTED (3.0 weapon-size categories Tiny/Small/
// Medium, subdual damage marked "(S)", British
// spellings "Armour" in names) and NOT modernised to
// 3.5. All rogues automatically gain proficiency with
// the chapter's weapons except those marked exotic
// (p. 53). Weapon stats come from the tables on p. 54,
// armour stats from the Armour Table on p. 56, and
// mundane gear prices/weights from the Equipment Table
// on p. 58; entry texts supply the mechanics. The
// chapter's true magic items (caster level, creation
// prerequisites, market price) are filed separately in
// magic-items.ts. Ten ids collided with records in the
// catalog's omni Ultimate Equipment Guide file (which
// reprints much of this material) and are prefixed
// "qr-" here; see notes-tools.md. Notes are short
// mechanical paraphrases in our own words; no book
// prose is reproduced.

const QR = "The Quintessential Rogue";
const QR_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Rogue.pdf";

export const QUINTESSENTIAL_ROGUE_EQUIPMENT: EquipmentItem[] = [
  // ---- Weapons (pp. 53-55, table p. 54) ----
  {
    id: "padded-club",
    name: "Club, Padded",
    category: "weapon",
    cost: "1 gp",
    weight: "4 lb.",
    notes:
      "Simple melee weapon (Medium size): 1d6(S) damage, critical x2, bludgeoning. A stout oaken cudgel wrapped in thick woollen covering; deals subdual rather than standard damage — an ideal weapon for taking someone alive.",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "assassins-dagger",
    name: "Dagger, Assassin's",
    category: "weapon",
    cost: "4 gp",
    weight: "1 lb.",
    notes:
      "Simple melee weapon (Tiny size): 1d3 damage, critical x4, piercing. Broad-bladed dagger designed to inflict gaping wounds that are difficult to mend; it deals less damage than a normal dagger but has a much better chance of a critical strike (the x4 critical).",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "hollow-pommel-dagger",
    name: "Dagger, Hollow Pommel",
    category: "weapon",
    cost: "20 gp",
    weight: "1 lb.",
    notes:
      "Simple melee weapon (Tiny size): 1d4 damage, critical 19-20/x2, piercing. The handle is a secret carrying case (the pommel's bottom screws off, or on some versions the blade twists off) often used for messages, narcotics, thieves' tools and other small, light items. Detecting the compartment requires a Search check (DC 15; DC 20 for versions with removable blades); a searcher familiar with this weapon type who specifically looks for the compartment gains a +5 competence bonus to the check.",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-knuckleduster",
    name: "Knuckleduster",
    category: "weapon",
    cost: "5 sp",
    weight: "1 lb.",
    notes:
      "Simple melee weapon (Tiny size): 1d3 damage, critical x2, piercing. A spiked leather strap worn across the knuckles. Fighting with knuckledusters counts as an unarmed attack, though they deal normal rather than subdual damage. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"knuckleduster\".)",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "sap-pommel-dagger",
    name: "Dagger, Sap Pommel",
    category: "weapon",
    cost: "1 gp",
    weight: "3 lb.",
    notes:
      "Martial melee weapon (Small size): 1d4 or 1d6(S) damage, critical x2, piercing or bludgeoning. Incorporates a heavy, one-inch diameter bludgeon at the pommel end; in combat the bladed end may be used as a normal dagger or the blunt end used as a sap.",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "spring-loaded-dagger",
    name: "Dagger, Spring-Loaded",
    category: "weapon",
    cost: "30 gp",
    weight: "2 lb.",
    notes:
      "Martial melee weapon (Tiny size): 1d4 damage, critical 19-20/x2, range increment 10 ft., slashing (type as printed in the table). Kept in a slender leather wrist sheath; twisting the hand in a particular way pops it into the user's hand. To draw it this way the user must make a Dexterity check (DC 10): on a success he draws it as a free action and may immediately attack with it, possibly catching his opponent flat-footed if the GM rules the target did not expect an attack; on a failure he fumbles with it and must follow the standard rules for drawing the weapon. A character with the Quick Draw feat needs no Dexterity check to use it properly.",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-clawed-gauntlets",
    name: "Gauntlets, Clawed",
    category: "weapon",
    cost: "2 gp",
    weight: "3 lb.",
    notes:
      "Martial melee weapon (Tiny size): 1d4 damage, critical x3, piercing (table type as printed; the entry text describes the sharpened spikes as effective slashing weapons). Armoured gloves ending in long, sharpened spikes designed to aid climbing: when used in conjunction with a Climb check, the gauntlets grant a +1 equipment bonus. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"clawed-gauntlets\".)",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-blowgun",
    name: "Blowgun",
    category: "weapon",
    cost: "10 gp",
    weight: "2 lb.",
    notes:
      "Exotic ranged weapon (Medium size): damage 1, critical x2, range increment 10 ft., piercing. A long, hollow tube firing poisoned needles; its needles deal only 1 point of damage on a hit but can deliver injury and contact poisons. The needles deal no damage to, and cannot poison, a target with a +1 or greater armour bonus or a natural armour bonus of at least +3. (Id prefixed qr-: the catalog already owns \"blowgun\" in the omni Ultimate Equipment Guide and omni Goods and Gear files.)",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "blowgun-needle",
    name: "Blowgun Needle",
    category: "weapon",
    cost: "1 sp",
    weight: "—",
    notes:
      "Ammunition for the blowgun (Fine size, as printed in the Exotic Weapons - Ranged table): the table prints no damage, critical, range increment, weight or type for the needle itself — the blowgun's needle deals 1 point of damage on a hit and can deliver injury and contact poisons (see the Blowgun entry).",
    source: `${QR}, p. 54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "snipers-crossbow",
    name: "Crossbow, Sniper's",
    category: "weapon",
    cost: "350 gp",
    weight: "7 lb.",
    notes:
      "Exotic ranged weapon (Medium size): 1d8 damage, critical 19-20/x2, range increment 80 ft., piercing. A crossbow with a stock-mounted telescope and simple targeting sight: when using it, a rogue may make sneak attacks from up to 120 ft. away from his target. A character without proficiency with this weapon may use it as a normal light crossbow, gaining no benefit from the scope.",
    source: `${QR}, pp. 53-54`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-lariat",
    name: "Lariat",
    category: "weapon",
    cost: "1 gp",
    weight: "8 lb.",
    notes:
      "Exotic ranged weapon (Medium size): the table prints no damage, critical, range increment or type. A loop of rope cast at an opponent up to 10 ft. away; if the attacker hits with a ranged touch attack, the defender is caught in the rope: he suffers -2 to all attack rolls and a -4 penalty to Dexterity, and cannot cast any spells with a somatic component. The lariat has 5 hit points and can be burst with a Strength check taken as a full-round action (DC 25). The penalties last as long as the attacker uses a move-equivalent action each round to maintain the grip; if he lets the line go loose, the defender may automatically shake loose with a move-equivalent action. The user can pull a trapped target prone by beating the defender in an opposed Strength check. Effective only against Small or Medium-size targets; on a miss, a move-equivalent action pulls the lariat back for reuse. (Id prefixed qr-: the catalog already owns \"lariat\" in the omni Ultimate Equipment Guide and omni Goods and Gear files.)",
    source: `${QR}, pp. 53-55`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  // ---- Armour (pp. 55-57, Armour Table p. 56) ----
  {
    id: "qr-footpads-vest",
    name: "Footpad's Vest",
    category: "armor",
    cost: "60 gp",
    weight: "2 lb.",
    notes:
      "Light armour (Armour Table, p. 56): the table prints no armour bonus, max Dex bonus, armour check penalty or arcane spell failure for the vest; speed 30 ft. (20 ft.). A simple leather vest with a set of thieves' tools sewn into it, requiring a Search check (DC 25) to detect them; a rogue may use a full-round action to tear open the vest and retrieve the tools. It may be worn in conjunction with any light armour. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"footpads-vest\"; the table spells the name without the apostrophe, the entry heading with it.)",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "displacer-beast-leather-armour",
    name: "Leather Armour, Displacer Beast",
    category: "armor",
    cost: "12,000 gp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armour: armour bonus +2, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). The hide's bizarre, light-bending qualities make it difficult to determine the wearer's location: a 10% miss chance applies to all attacks against the wearer, and the wearer gains a +1 circumstance bonus to Hide checks. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "digester-leather-armour",
    name: "Leather Armour, Digester",
    category: "armor",
    cost: "8,000 gp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armour: armour bonus +2, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). The hide retains the digester's acid-resistant qualities: its wearer gains Acid Resistance 10. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "gargoyle-leather-armour",
    name: "Leather Armour, Gargoyle",
    category: "armor",
    cost: "1,400 gp",
    weight: "30 lb.",
    acBonus: 4,
    notes:
      "Light armour: armour bonus +4, max Dex bonus +4, armour check penalty -2, arcane spell failure 20%, speed 30 ft. (20 ft.). Thick, stony skin that limits movement and agility but serves as excellent camouflage in subterranean settings: its wearer gains a +4 circumstance bonus to Hide checks in subterranean, mountainous and rocky terrain. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "gorgon-leather-armour",
    name: "Leather Armour, Gorgon",
    category: "armor",
    cost: "2,500 gp",
    weight: "20 lb.",
    acBonus: 5,
    notes:
      "Light armour: armour bonus +5, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). A gorgon's steely hide produces stout but flexible armour; it grants its wearer a +2 circumstance bonus to all saves against petrifying attacks. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "hell-hound-leather-armour",
    name: "Leather Armour, Hell Hound",
    category: "armor",
    cost: "9,200 gp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armour: armour bonus +2, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). Grants its wearer Fire Resistance 10 but incurs a -2 circumstance penalty to saves against cold attacks. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "rust-monster-leather-armour",
    name: "Leather Armour, Rust Monster",
    category: "armor",
    cost: "13,500 gp",
    weight: "10 lb.",
    acBonus: 1,
    notes:
      "Light armour: armour bonus +1, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). A non-magical metal weapon used to deal damage to the wearer has a 10% chance of crumbling into rust. This is the one leather armour in the chapter that may NOT be upgraded to studded leather (p. 55).",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "troglodyte-leather-armour",
    name: "Leather Armour, Troglodyte",
    category: "armor",
    cost: "1,200 gp",
    weight: "15 lb.",
    acBonus: 2,
    notes:
      "Light armour: armour bonus +2, max Dex bonus +6, armour check penalty 0, arcane spell failure 10%, speed 30 ft. (20 ft.). Cured troglodyte hide retains some of the creature's colour-changing characteristics, granting its wearer a +2 circumstance bonus to Hide checks. May be upgraded to studded leather (see the studded variant record).",
    source: `${QR}, pp. 55-57`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-displacer-beast-leather-armour",
    name: "Studded Leather Armour, Displacer Beast",
    category: "armor",
    cost: "12,015 gp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Priced variant (rule printed p. 55): any of the chapter's leather armours except rust monster leather can be upgraded to studded leather by increasing the price by 15 gp and the weight by 5 lb.; studded leather provides an additional +1 armour bonus but increases the armour check penalty by -1. Applied here: armour bonus +3, armour check penalty -1, max Dex bonus +6, arcane spell failure 10%, speed 30 ft. (20 ft.); 10% miss chance on attacks against the wearer and +1 circumstance bonus to Hide checks, as the base armour.",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-digester-leather-armour",
    name: "Studded Leather Armour, Digester",
    category: "armor",
    cost: "8,015 gp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Priced variant (rule printed p. 55): studded leather upgrade — price +15 gp and weight +5 lb. over the base leather armour, an additional +1 armour bonus, and the armour check penalty increased by -1. Applied here: armour bonus +3, armour check penalty -1, max Dex bonus +6, arcane spell failure 10%, speed 30 ft. (20 ft.); Acid Resistance 10, as the base armour.",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-gargoyle-leather-armour",
    name: "Studded Leather Armour, Gargoyle",
    category: "armor",
    cost: "1,415 gp",
    weight: "35 lb.",
    acBonus: 5,
    notes:
      "Priced variant (rule printed p. 55): studded leather upgrade — price +15 gp and weight +5 lb. over the base leather armour, an additional +1 armour bonus, and the armour check penalty increased by -1. Applied here: armour bonus +5, armour check penalty -3, max Dex bonus +4, arcane spell failure 20%, speed 30 ft. (20 ft.); +4 circumstance bonus to Hide checks in subterranean, mountainous and rocky terrain, as the base armour.",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-gorgon-leather-armour",
    name: "Studded Leather Armour, Gorgon",
    category: "armor",
    cost: "2,515 gp",
    weight: "25 lb.",
    acBonus: 6,
    notes:
      "Priced variant (rule printed p. 55): studded leather upgrade — price +15 gp and weight +5 lb. over the base leather armour, an additional +1 armour bonus, and the armour check penalty increased by -1. Applied here: armour bonus +6, armour check penalty -1, max Dex bonus +6, arcane spell failure 10%, speed 30 ft. (20 ft.); +2 circumstance bonus to all saves against petrifying attacks, as the base armour.",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-hell-hound-leather-armour",
    name: "Studded Leather Armour, Hell Hound",
    category: "armor",
    cost: "9,215 gp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Priced variant (rule printed p. 55): studded leather upgrade — price +15 gp and weight +5 lb. over the base leather armour, an additional +1 armour bonus, and the armour check penalty increased by -1. Applied here: armour bonus +3, armour check penalty -1, max Dex bonus +6, arcane spell failure 10%, speed 30 ft. (20 ft.); Fire Resistance 10 and a -2 circumstance penalty to saves against cold attacks, as the base armour.",
    source: `${QR}, pp. 55-56`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "studded-troglodyte-leather-armour",
    name: "Studded Leather Armour, Troglodyte",
    category: "armor",
    cost: "1,215 gp",
    weight: "20 lb.",
    acBonus: 3,
    notes:
      "Priced variant (rule printed p. 55): studded leather upgrade — price +15 gp and weight +5 lb. over the base leather armour, an additional +1 armour bonus, and the armour check penalty increased by -1. Applied here: armour bonus +3, armour check penalty -1, max Dex bonus +6, arcane spell failure 10%, speed 30 ft. (20 ft.); +2 circumstance bonus to Hide checks, as the base armour.",
    source: `${QR}, pp. 55-57`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "armoured-robe",
    name: "Robe, Armoured",
    category: "armor",
    cost: "55 gp",
    weight: "30 lb.",
    acBonus: 3,
    notes:
      "Medium armour: armour bonus +3, max Dex bonus +3, armour check penalty -4, arcane spell failure 25%, speed 20 ft. (15 ft.). A mundane-looking robe like a wizard's, priest's or scholar's, with small metal plates and thick leather padding sewn into its inner side, giving protection without drawing undue attention; it is bulky and heavy, limiting the wearer's agility and speed.",
    source: `${QR}, pp. 56-57`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-quick-change-plate",
    name: "Quick-Change Plate",
    category: "armor",
    cost: "950 gp",
    weight: "55 lb.",
    acBonus: 5,
    notes:
      "Heavy armour: armour bonus +5, max Dex bonus +0, armour check penalty -8, arcane spell failure 20%, speed 20 ft. (15 ft.). A suit of half-plate designed to drop off its wearer with the pull of a single pin, and roomy enough to wear normal armour and carry regular equipment inside it. Removing it takes a full-round action (the armour drops in a matter of seconds); donning it takes 10 minutes to properly assemble, it cannot be donned hastily, and aid from others does not speed up assembling it. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"quick-change-plate\".)",
    source: `${QR}, pp. 56-57`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-armour-padding",
    name: "Padding",
    category: "gear",
    cost: "+50 gp",
    weight: "+5 lb.",
    notes:
      "Armour extra (Armour Table 'Extras', p. 56): padded cloth inserted between a suit of armour's joints or beneath its metallic edges, decreasing the jingling and clanking that betray a sneaking rogue. It can be added to any medium or heavy armour. As printed in the table it modifies the armour by: cost +50 gp, armour bonus 0, max Dex bonus -1, armour check penalty -2/+2, arcane spell failure +5%, weight +5 lb. The entry text (p. 57) explains: padding increases the armour's check penalty for all skills except Move Silently by -2 (i.e. worsens it by 2), and padded armour grants a +2 circumstance bonus to all Move Silently checks. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"armour-padding\".)",
    source: `${QR}, pp. 56-57`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  // ---- Mundane Equipment (pp. 57-58, Equipment Table p. 58) ----
  {
    id: "acid-vial",
    name: "Acid (vial)",
    category: "gear",
    cost: "5 gp",
    weight: "—",
    notes:
      "A simple vial of acid (Equipment Table, p. 58, prints no weight). Splashing a target with acid deals 1d6 damage. When used to destroy an object, acid ignores hardness and deals 1d6 damage per round for 1d4 rounds. Uses include eating through rope, softening metal and ruining a lock.",
    source: `${QR}, pp. 57-58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-camouflage-makeup",
    name: "Camouflage Makeup",
    category: "gear",
    cost: "10 gp",
    weight: "1 lb.",
    notes:
      "Paint or properly administered dye that can turn clothing or armour into a disguise for wild terrain; it can be applied to a suit of armour, a set of clothes, or directly to a character's face, hands and other exposed parts. Applying it requires 10 minutes of work and a Disguise check (DC 15); if successful, the makeup grants a +1 circumstance bonus to all Hide checks for 1d4 hours, after which it becomes smeared and useless. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"camouflage-makeup\".)",
    source: `${QR}, pp. 57-58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-flash-powder",
    name: "Flash Powder (packet)",
    category: "gear",
    cost: "40 gp",
    weight: "—",
    notes:
      "A small packet of gunpowder producing a bright, smoky but otherwise harmless explosion when detonated (Equipment Table, p. 58, prints no weight). After using flash powder, you may immediately attempt a Hide check without penalty: the light and smoke distract your opponents, letting you use your skill as if you had successfully used Bluff to hide in plain sight. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"flash-powder\".)",
    source: `${QR}, pp. 57-58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "qr-lock-glass",
    name: "Lock Glass",
    category: "tool",
    cost: "1,500 gp",
    weight: "2 lb.",
    notes:
      "A magnifying lens combined with an alchemical light source on a long, narrow extension ringed with a sunrod-like substance: rubbing the narrow tip causes it to spring to light, and it can then be inserted into a lock or other mechanical apparatus so the rogue can inspect the inner workings through the lens. Spending 1 minute inspecting a lock with this device grants a +2 competence bonus to any Disable Device, Open Lock or Search check involving that particular lock. The illumination portion can be used 10 times before it must be replaced; each use lasts 1 minute, and a replacement costs 5 gp. (Id prefixed qr-: the catalog's omni Ultimate Equipment Guide file already owns \"lock-glass\".)",
    source: `${QR}, pp. 57-58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "long-stemmed-lock-picks",
    name: "Lock Picks, Long Stemmed",
    category: "tool",
    cost: "100 gp",
    weight: "—",
    notes:
      "Similar to standard thieves' tools but with long handles, allowing a rogue to attempt to pick a lock or disable a trap from up to 5 ft. away, possibly avoiding a triggered trap's effects (Equipment Table, p. 58, prints no weight). Their length makes them difficult to use with the same precision as standard picks, imparting a -4 circumstance penalty to Open Lock and Disable Device checks.",
    source: `${QR}, pp. 57-58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "shock-freeze",
    name: "Shock Freeze",
    category: "gear",
    cost: "50 gp",
    weight: "1 lb.",
    notes:
      "An alchemical concoction, normally kept in small, one-use pouches, that causes a tremendous drop in temperature when exposed to air. It can be sprayed on an opponent as a ranged touch attack with a maximum range of 10 ft., dealing 1d10 points of damage. It can also shatter metal: metal exposed to shock freeze loses the benefits of its hardness rating for 1d6 rounds after exposure.",
    source: `${QR}, pp. 58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
];
