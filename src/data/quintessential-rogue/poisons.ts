import type { EquipmentItem } from "@/engine/types";

// The Quintessential Rogue (Michael Mearls, ©2002 Mongoose
// Publishing, Collector's Series) — a d20 3.0-era book, and
// its poison terminology is transcribed AS PRINTED (3.0
// forms such as Craft (poisons), Detect DC as a Spot DC,
// and Fort/Will save lines are not modernised to 3.5).
// Chapter "Poisons and their Manufacture," printed
// pp. 72–80: the 21 Sample Poisons of pp. 73–77, each
// printed with a full stat line (Type; Detect DC; Save DC;
// Initial Damage (Onset)/Secondary Damage (Secondary
// Onset); Price; Craft (poisons) DC) and built here as
// equipment in the "alchemical gear" category, following
// the catalog's Poisoncraft convention for poisons
// (per-dose notes carrying delivery type, save DC and
// initial/secondary damage). Transcribed from Shaun's own
// scanned copy (image-only; read visually page by page,
// 2026-11-04). Prices are the printed price per dose.
// The chapter's Poison Creation framework (pp. 77–80) is a
// crafting system, not items, and is summarised in
// notes-poisons.md, as is the survey of "Hideouts"
// (pp. 111–115), a design system whose only prices are
// per-unit construction rates for building features —
// no discrete, purchasable item is printed there.
// The "Traps and their Construction" survey (pp. 81–88)
// found exactly one set of individually priced devices
// with full mechanics: the three Spell Matrices of p. 86,
// built below as a separate export
// (QUINTESSENTIAL_ROGUE_TRAP_DEVICES). The chapter's
// mechanical trap components (pp. 83–85) carry only Craft
// DC modifiers, construction times and scavenged-materials
// lists — no prices — so none of them is built.
// No sample poison duplicates a poison already in the
// catalog under the same name: this book's "Lotus Extract"
// (inhaled, Will DC 14) is a different poison from the
// catalog's "Black Lotus Extract," and "Blackroot" is
// distinct from the catalog's "Blackroot Balm."

const QR = "The Quintessential Rogue";
const QR_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Rogue.pdf";

export const QUINTESSENTIAL_ROGUE_POISONS: EquipmentItem[] = [
  {
    id: "allevar",
    name: "Allevar",
    category: "alchemical gear",
    cost: "1,100 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Fortitude DC 20; Detect DC 25. Special initial damage and no secondary damage: ten doses administered over the course of a month are needed — each dose the subject fails the DC 20 Fortitude save against remains in his system, and 4d4 hours after the tenth failed save within a 30-day period the victim takes 4d6 temporary Constitution damage; Craft (poisons) DC 25.",
    source: `${QR}, p. 73`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "black-lung",
    name: "Black Lung",
    category: "alchemical gear",
    cost: "780 gp",
    weight: "—",
    notes: "Poison per dose, inhaled, Fortitude DC 15; Detect DC 5. Initial and secondary damage are each 1d6 Constitution. It affects only dwarves (non-dwarves in the cloud cough but suffer no other effect); the opaque black gas blocks all sight, including darkvision, as total darkness. Typically delivered by burning a thick 2-ft. log of the granular substance, which burns for one hour, can fill up to 100,000 cubic feet, and spreads 5 ft. per round unless affected by wind; Craft (poisons) DC 25.",
    source: `${QR}, p. 73`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "blackroot",
    name: "Blackroot",
    category: "alchemical gear",
    cost: "460 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 15; Detect DC 10. Initial damage is 1d4 Constitution and secondary damage is 2d4 Constitution. It affects only creatures of the plant type and has no effect on other creatures; normal plants such as trees or bushes die within 1d4 hours of exposure; Craft (poisons) DC 20.",
    source: `${QR}, p. 73`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "caro-venom",
    name: "Caro Venom",
    category: "alchemical gear",
    cost: "240 gp",
    weight: "—",
    notes: "Poison per dose, contact, Fortitude DC 13; Detect DC 15. Initial and secondary damage are each 1d6 Charisma. Distilled from the poison sacs of hundreds of caro beetles; it raises tiny red boils on the victim's skin and leaves him with unsteady, wheezy, stammering speech; Craft (poisons) DC 15.",
    source: `${QR}, p. 73`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "deathsleep",
    name: "Deathsleep",
    category: "alchemical gear",
    cost: "95 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Fortitude DC 14; Detect DC 12. No initial damage; secondary damage is feign death — the paralytic slows heartbeat and respiration so far that the victim appears dead to non-magical inspection and remains in that seemingly dead state for 3d4 hours in total; Craft (poisons) DC 15.",
    source: `${QR}, p. 74`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "demonic-essence",
    name: "Demonic Essence",
    category: "alchemical gear",
    cost: "400 gp",
    weight: "—",
    notes: "Poison per dose, contact, Will DC 15; Detect DC 15. Initial damage is 1d6 Wisdom; secondary damage is hallucinations — the victim gains a distorted view of alignments (good creatures appear as fiery demonic monsters, neutral creatures as spectral ghostly figures, evil creatures as gleaming angelic figures) and distorted voices, and must make a Spot check (DC 15) to recognise any real figure behind the hallucinations; Craft (poisons) DC 20.",
    source: `${QR}, p. 74`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "dolleck-eggs",
    name: "Dolleck Eggs",
    category: "alchemical gear",
    cost: "675 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 18; Detect DC 12. Initial damage is 1d4 hit points (onset 1 round) and secondary damage is 3d4 hit points. Chemically mutated dolleck eggs, usually spread on weapons in a sticky mixture; on a hit they sprout, burrow into the victim, and the mites inside devour him from within for a minute or two before dying as they erupt out of his skin; Craft (poisons) DC 20.",
    source: `${QR}, p. 74`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "fogwit",
    name: "Fogwit",
    category: "alchemical gear",
    cost: "100 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Fortitude DC 12; Detect DC 20. Initial damage is 1d6 Wisdom; secondary damage is loss of balance — a -2 circumstance penalty to all Reflex saves, Dexterity checks, Armour Class and attack rolls, and each round the victim attempts to move more than half his maximum normal rate he must make a Dexterity check (DC 15) or collapse prone; Craft (poisons) DC 15.",
    source: `${QR}, p. 74`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "green-oil",
    name: "Green Oil",
    category: "alchemical gear",
    cost: "170 gp",
    weight: "—",
    notes: "Poison per dose, contact, Fortitude DC 15; Detect DC 5. Initial damage is 2d4 hit points and secondary damage is 1d4 Constitution. A bright green, thin, runny liquid that burns exposed flesh; small ceramic jars of it may be thrown like flasks of burning oil, splashing those around the primary target; Craft (poisons) DC 15.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "lotus-extract",
    name: "Lotus Extract",
    category: "alchemical gear",
    cost: "1,800 gp",
    weight: "—",
    notes: "Poison per dose, inhaled, Will DC 14; Detect DC 10. Initial damage is 1d4 Wisdom and secondary damage is 2d6 Wisdom. Made from specially dried black lotus seeds; a victim who fails his save against both the initial and secondary effects gains the ability to see invisible creatures and objects as a see invisibility spell cast by a 5th-level sorcerer; Craft (poisons) DC 35.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "mindbreaker",
    name: "Mindbreaker",
    category: "alchemical gear",
    cost: "75 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Will DC 12; Detect DC 10. Initial damage is 2d4 Wisdom (onset 1 minute) and secondary damage is 1d4 Wisdom (secondary onset 3 minutes). A subtle narcotic/sedative mix that corrodes the victim's will and undermines his ability to resist temptations or magical spells, while leaving his thought processes and perceptive abilities unhindered; Craft (poisons) DC 15.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "red-mist",
    name: "Red Mist",
    category: "alchemical gear",
    cost: "1,200 gp",
    weight: "—",
    notes: "Poison per dose, inhaled, Will DC 14; Detect DC 5. Initial damage is homicidal mania and secondary damage is 1d4 Intelligence: those affected immediately rage as per the barbarian class and attack the closest creature for 2d4 rounds. When thrown or blown at a target, the attacker must hit with a ranged touch attack at a maximum range of 10 ft., and there is a flat 10% chance the attacker accidentally exposes himself to the poison; Craft (poisons) DC 25.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "sombal",
    name: "Sombal",
    category: "alchemical gear",
    cost: "75 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 12; Detect DC 15. Initial damage is sleep and there is no secondary damage. A victim affected is considered completely helpless; most noises will not awaken him, though an extremely loud noise, a slap, or any wounding attack does, and arousing a sleeping creature requires a standard action; Craft (poisons) DC 15.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "spell-sapper",
    name: "Spell Sapper",
    category: "alchemical gear",
    cost: "90 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 14; Detect DC 10. Initial damage is 1d4 Intelligence and secondary damage is 1d6 Intelligence. A thick, red gel commonly spread on arrows and other weapons, made to leave spellcasters befuddled and unable to use their spells; Craft (poisons) DC 15.",
    source: `${QR}, p. 75`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "tarzags-venom",
    name: "Tarzag's Venom",
    category: "alchemical gear",
    cost: "240 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 15; Detect DC 10. Initial damage is 1d4 Constitution and secondary damage is 1d4 Dexterity. It works exclusively on elves and half-elves; all other creatures are immune to its effects (in non-elves it causes nothing more than a minor stomach ache); Craft (poisons) DC 15.",
    source: `${QR}, p. 76`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "telsaths-powder",
    name: "Telsath's Powder",
    category: "alchemical gear",
    cost: "220 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Fortitude DC 16; Detect DC 0. Initial damage is 2d4 Strength and secondary damage is 1d6 Strength. Usually formed into fist-sized pellets with an intensely sweet taste animals find irresistible: in combat, an animal, beast or magical beast with an Intelligence of 6 or lower must make a Will save (DC 12) to resist spending a standard action to eat a pellet, though a creature under direct attack need not make the save and in non-combat conditions automatically eats it; Craft (poisons) DC 15.",
    source: `${QR}, p. 76`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "tremble-oil",
    name: "Tremble Oil",
    category: "alchemical gear",
    cost: "300 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 15; Detect DC 10. Initial and secondary damage are each 1d4 Dexterity. A victim under its influence who attempts to cast a spell with a somatic component must use a full-round action to cast it or make a Concentration check (DC 20) to avoid ruining the spell; a victim who makes his save against the initial effects is not subject to this spell failure effect; Craft (poisons) DC 20.",
    source: `${QR}, p. 76`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "truth-water",
    name: "Truth Water",
    category: "alchemical gear",
    cost: "200 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Will DC 15; Detect DC 0. Initial damage is 1d4 Wisdom; secondary damage compels truth — for 5d6 minutes the victim answers all questions truthfully (at least the truth as he sees it), though he is under no compulsion to volunteer information beyond the scope of the questions. It cannot be mixed with food or drink, as both ruin its effects; Craft (poisons) DC 15.",
    source: `${QR}, p. 76`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "varrans-oil",
    name: "Varran's Oil",
    category: "alchemical gear",
    cost: "450 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 14; Detect DC 0. Initial damage is 2d4 Strength and secondary damage is 1d4 Strength. A shimmering golden oil infused with holy water and the tears of a celestial: it has no effect against living creatures, but against undead it saps their strength (and it gleams brightly, casting light in a 5 ft. radius); Craft (poisons) DC 20.",
    source: `${QR}, p. 76`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "vithil-seeds",
    name: "Vithil Seeds",
    category: "alchemical gear",
    cost: "150 gp",
    weight: "—",
    notes: "Poison per dose, ingested, Fortitude DC 13; Detect DC 10. Initial damage is 1d2 Intelligence; secondary damage is amnesia — a victim who fails his saving throw against the secondary effect loses all recollection of the previous 1d4 hours. The seeds must be eaten to have any effect and are commonly crushed and mixed with food; Craft (poisons) DC 15.",
    source: `${QR}, p. 77`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "white-fire",
    name: "White Fire",
    category: "alchemical gear",
    cost: "2,200 gp",
    weight: "—",
    notes: "Poison per dose, injury, Fortitude DC 20; Detect DC 5. Initial damage is 1d6 Strength and secondary damage is 2d6 Strength. A magical poison that affects only elementals and outsiders on the prime plane; it appears as a ghostly, shimmering white gauze wrapped around a weapon, and on a hit the gauze disintegrates into a fine dust that fuses with the outsider's or elemental's physical form; Craft (poisons) DC 35.",
    source: `${QR}, p. 77`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
];

// Survey build from "Traps and their Construction"
// (printed pp. 81–88): the Spell Matrices of p. 86 are the
// chapter's only individually priced devices printed with
// full mechanics (market price, caster level, creation
// prerequisites, maximum spell level and caster level).
// They are magical containers, bought or built to hold a
// spell drained from a wand or scroll and normally set
// into a trap via the spell trigger component (p. 85);
// filed here as equipment records per the survey brief.
// Charging/handling rules (pp. 86–88): creating a matrix
// takes 10 minutes; a stored spell operates at half its
// scroll/wand caster level (capped at the matrix maximum);
// a matrix that takes a single point of damage from a
// melee or missile attack immediately detonates, and a
// spent matrix must be repaired for one-tenth its value
// before it can be charged again.
export const QUINTESSENTIAL_ROGUE_TRAP_DEVICES: EquipmentItem[] = [
  {
    id: "matrix-type-a",
    name: "Matrix (Type A)",
    category: "gear",
    cost: "1,000 gp",
    weight: "—",
    notes: "Spell matrix container: an iron cube three inches along each side, covered with magical glyphs, with a small hole opening into an empty spherical chamber at its centre. It can store spells from 1st to 3rd level; maximum caster level 3. Caster Level: 5th; Prerequisites: Craft Wondrous Item or Craft Matrix; Market Price: 1,000 gp. Building one from scratch costs half the market price in raw materials.",
    source: `${QR}, p. 86`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "matrix-type-b",
    name: "Matrix (Type B)",
    category: "gear",
    cost: "7,000 gp",
    weight: "—",
    notes: "Spell matrix container: a silver cube roughly four inches along each side, with runes etched in gold on its sides. It can store spells from 1st to 6th level; maximum caster level 9. Caster Level: 11th; Prerequisites: Craft Wondrous Item or Craft Matrix; Market Price: 7,000 gp. Building one from scratch costs half the market price in raw materials.",
    source: `${QR}, p. 86`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
  {
    id: "matrix-type-c",
    name: "Matrix (Type C)",
    category: "gear",
    cost: "21,000 gp",
    weight: "—",
    notes: "Spell matrix container: a mithril cube five inches wide, bearing elegant runes etched in adamant across its faces. It can hold spells of any level; maximum caster level 12. Caster Level: 17th; Prerequisites: Craft Wondrous Item or Craft Matrix; Market Price: 21,000 gp. Building one from scratch costs half the market price in raw materials.",
    source: `${QR}, p. 86`,
    sourceUrl: QR_PATH,
    ruleset: "core",
  },
];
