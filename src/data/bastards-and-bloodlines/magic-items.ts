import type { MagicItemDefinition } from "@/engine/types";

// Bastards and Bloodlines: A Guidebook to Half-Breeds
// (Green Ronin Publishing, ©2003, d20 System) —
// "Relics of the Blood," printed pp. 106-107,
// transcribed from Shaun's own scanned copy (read
// visually; the scan is image-only), 2026-11-04. This
// is a 3.0-era book: terminology is transcribed as
// printed (e.g. the Circlet of Arcana grants additional
// "partial actions," a 3.0 action type). The section
// prints six race-specific weapon special abilities
// (priced as enhancement-bonus equivalents, summarized
// in the section's Weapons table on p. 107) and five
// named wondrous items with gp market prices — 11
// records in all, every priced item in the section.
// Like the blood spells, these items can be made only
// by members of certain bloodlines, and they work only
// for those with such blood: as printed for the weapon
// abilities, each ability can only manifest in the
// hands of a creature of the blood listed with that
// ability — when wielded by other creatures, the
// weapons act as if the ability did not exist, and the
// ability is not revealed by spells such as identify
// or analyze dweomer unless they are cast by a creature
// of the listed kind. Each summary includes the printed
// caster level and creation prerequisites. The section
// also notes that any medium or major wondrous item can
// have the additional abilities of a minor item added
// to it (doubling the minor item's cost and adding it
// to the major item's), which is a creation rule, not a
// priced item, and is not built as a record. Summaries
// are short mechanical paraphrases in our own words;
// no book prose is reproduced.

const BB = "Bastards and Bloodlines";
const BB_PATH = "/A POC PC related/2.Alchemy & steampunk flavored material/Bastards And Bloodlines A Guidebook To Half Breeds.pdf";

export const BASTARDS_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "alert",
    name: "Alert (Elf)",
    category: "Weapon special ability",
    cost: "+1 bonus",
    summary: "Weapon special ability (elf blood): an alert weapon allows its wielder to make a Listen check (DC 20) to avoid being surprised; if the check is successful, the wielder can still take action in a surprise round even if he would normally not be aware of the attack. Caster Level: 6th; Prerequisites: Craft Magic Arms and Armor, elven blood, keen senses* (*new spell described in Spells of the Blood); Market Price: +1 bonus.",
    source: `${BB}, p. 106`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "angered",
    name: "Angered (Orc)",
    category: "Weapon special ability",
    cost: "+2 bonus",
    summary: "Weapon special ability (orc blood): an angered weapon improves by +2 the bonuses to Strength and Constitution granted by a barbarian's rage, and prevents the barbarian from being fatigued at the end of a rage; it also confers this effect on creatures or other classes that gain a rage ability like that of the barbarian. Caster Level: 7th; Prerequisites: Craft Magic Arms and Armor, orc blood, wrath of our fathers* (*new spell described in Spells of the Blood); Market Price: +2 bonus.",
    source: `${BB}, p. 106`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "greater-stonecutting",
    name: "Greater Stonecutting (Dwarf)",
    category: "Weapon special ability",
    cost: "+2 bonus",
    summary: "Weapon special ability (dwarf blood): a greater stonecutting weapon acts as a stonecutting weapon, but ignores hardness when dealing damage to objects made of earth, metal, or stone, and also counts as having a +5 enhancement bonus for purposes of bypassing the damage reduction of golems (it does not deal additional damage beyond its existing enhancement bonus). Caster Level: 11th; Prerequisites: Craft Magic Arms and Armor, dwarven blood, stoneskin; Market Price: +2 bonus.",
    source: `${BB}, p. 106`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "stonecutting",
    name: "Stonecutting (Dwarf)",
    category: "Weapon special ability",
    cost: "+1 bonus",
    summary: "Weapon special ability (dwarf blood): a stonecutting weapon ignores 5 points of hardness when dealing damage to objects made of earth, metal, or stone. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armor, dwarven blood, earthskin* (*new spell described in Spells of the Blood); Market Price: +1 bonus. (The entry begins at the foot of p. 106 and its caster level/prerequisites/price lines are printed at the top of p. 107.)",
    source: `${BB}, pp. 106-107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "strafing",
    name: "Strafing (Halfling)",
    category: "Weapon special ability",
    cost: "+2 bonus",
    summary: "Weapon special ability (halfling blood): only a weapon that can be thrown can have this special ability; a thrown strafing weapon makes a full attack action against a target, and strafing weapons often have the returning special ability as well. Caster Level: 13th; Prerequisites: Craft Magic Arms and Armor, halfling blood, telekinesis; Market Price: +2 bonus.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "traptripping",
    name: "Traptripping (Gnome)",
    category: "Weapon special ability",
    cost: "+1 bonus",
    summary: "Weapon special ability (gnome blood): a traptripping weapon can activate traps — the wielder must be aware of the trap and take a full-round action to attempt to trip it, making an attack roll; if the result is at least equal to the Disable Device DC of the trap, it is activated (not disabled, unless tripping the trap also disables it). This ability is normally placed on ranged weapons or those with reach. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armor, gnome blood, detect snares and pits; Market Price: +1 bonus.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bracers-of-the-hinterlands",
    name: "Bracers of the Hinterlands (Orc)",
    category: "Wondrous item",
    cost: "6,000 gp",
    summary: "Bracers that appear to be normal protective devices with small rows of spikes running their length, imbuing the wearer with a connection to the savage nature of the wilderness: the wearer gains a +10 circumstance bonus on Intimidate and Survival checks (3.0 skill name as printed). Caster Level: 12th; Prerequisites: Craft Wondrous Item, orc blood, endure elements, fear; Market Price: 6,000 gp.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "circlet-of-arcana",
    name: "Circlet of Arcana (Elf)",
    category: "Wondrous item",
    cost: "12,000 gp",
    summary: "A delicate headband that enables the wearer to take an additional standard action, usable only to cast spells with a casting time of one standard action or less; the circlet grants ten such additional standard actions per day, which need not be taken consecutively. Additionally, the circlet grants a +10 circumstance bonus on all Knowledge (arcana) checks made by the wearer. Caster Level: 10th; Prerequisites: Craft Wondrous Item, elven blood, detect magic, haste; Market Price: 12,000 gp.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ioun-gem",
    name: "Ioun Gem (Gnome)",
    category: "Wondrous item",
    cost: "7,200 gp",
    summary: "A heavy gem of quartz, or a mineral of similar value, set on a thick silver chain; the gem is hinged and hollow, with two spaces inside, and each space can hold a single Ioun stone, which continues to function normally despite not being in orbit around the wearer. If it holds no Ioun stones, the gem can be used to cast detect magic at will as the spell from a 1st-level caster. Caster Level: 9th; Prerequisites: Craft Wondrous Item, gnome blood, detect magic, magic jar; Market Price: 7,200 gp.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "pitchers-gloves",
    name: "Pitcher's Gloves (Halfling)",
    category: "Wondrous item",
    cost: "5,100 gp",
    summary: "Gloves that look like normal leather gauntlets: they empower the wearer to wield any thrown weapon as though proficient in its use, and a wearer who already has proficiency with a given type of thrown weapon gains a +2 competence bonus on attack rolls and a +1 competence bonus on damage when using that type of weapon, the damage bonus applying only if the target is within 30 feet. Both gloves must be worn to be effective. Caster Level: 4th; Prerequisites: Craft Magic Arms and Armor, Craft Wondrous Item, halfling blood; Market Price: 5,100 gp.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "warriors-girdle",
    name: "Warrior's Girdle (Dwarf)",
    category: "Wondrous item",
    cost: "8,000 gp",
    summary: "A thick, heavy leather belt covered in iron studs and small metal plates: the wearer's speed is not reduced by medium or heavy armor, and the wearer can ignore all armor check penalties on Climb and Jump checks (but not check penalties from encumbrance). Caster Level: 11th; Prerequisites: Craft Wondrous Item, Craft Arms and Armor (as printed), dwarven blood; Market Price: 8,000 gp.",
    source: `${BB}, p. 107`,
    sourceUrl: BB_PATH,
    ruleset: "core",
    modifiers: [],
  },
];
