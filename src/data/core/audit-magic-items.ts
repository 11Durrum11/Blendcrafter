/**
 * Core Books Audit (2026-10-28): DMG rings, rods, and staffs missing
 * from the app. The recovered core magic-item set holds only a
 * "representative" sample (63 records); the Magic Item Compendium
 * (Batch 11a) does not reprint DMG items, so the DMG's own lists were
 * the remaining gap. Prices and effects follow the SRD tables and
 * descriptions. Already present and skipped: Ring of Protection +1,
 * Feather Falling, Sustenance, Evasion, Freedom of Movement,
 * Invisibility, Spell Storing (Minor), Immovable Rod, Rod of Flame
 * Extinguishing, and the lesser Extend/Empower/Silent metamagic rods.
 */
import type { MagicItemDefinition } from "@/engine/types";

type Row = [string, string, string, string];

function build(category: string, source: string, sourceUrl: string, rows: Row[]): MagicItemDefinition[] {
  return rows.map(([id, name, cost, summary]) => ({
    id,
    name,
    category,
    cost,
    summary,
    source,
    sourceUrl,
    ruleset: "core" as const,
  }));
}

const RINGS = "d20SRD — Magic Items: Rings";
const RING_URL = "https://www.d20srd.org/srd/magicItems/rings.htm";
const RODS = "d20SRD — Magic Items: Rods";
const ROD_URL = "https://www.d20srd.org/srd/magicItems/rods.htm";
const STAFFS = "d20SRD — Magic Items: Staffs";
const STAFF_URL = "https://www.d20srd.org/srd/magicItems/staffs.htm";

export const CORE_AUDIT_MAGIC_ITEMS: MagicItemDefinition[] = [
  ...build("ring", RINGS, RING_URL, [
    ["ring-of-animal-friendship", "Ring of Animal Friendship", "10,800 gp", "The wearer can befriend animals as with a charm animal spell."],
    ["ring-of-blinking", "Ring of Blinking", "27,000 gp", "On command, the wearer blinks as with the blink spell."],
    ["ring-of-chameleon-power", "Ring of Chameleon Power", "12,700 gp", "Grants a +10 competence bonus on Hide checks, and the wearer can change appearance as with a disguise self spell at will."],
    ["ring-of-climbing", "Ring of Climbing", "2,500 gp", "Grants a +5 competence bonus on Climb checks."],
    ["ring-of-climbing-improved", "Ring of Climbing, Improved", "10,000 gp", "Grants a +10 competence bonus on Climb checks, and the wearer retains his Dexterity bonus to AC while climbing."],
    ["ring-of-counterspells", "Ring of Counterspells", "4,000 gp", "Stores one spell of up to 6th level, which automatically counters the same spell if it is cast at the wearer."],
    ["ring-of-djinni-calling", "Ring of Djinni Calling", "125,000 gp", "Once per day, summons a djinni to serve the wearer for up to 1 hour."],
    ["ring-of-elemental-command-air", "Ring of Elemental Command (Air)", "200,000 gp", "The wearer can command air elementals and gains the ring's air powers and spell-like abilities, culminating in travel to the Elemental Plane of Air, as printed in the SRD entry."],
    ["ring-of-elemental-command-earth", "Ring of Elemental Command (Earth)", "200,000 gp", "The wearer can command earth elementals and gains the ring's earth powers and spell-like abilities, culminating in travel to the Elemental Plane of Earth, as printed in the SRD entry."],
    ["ring-of-elemental-command-fire", "Ring of Elemental Command (Fire)", "200,000 gp", "The wearer can command fire elementals and gains the ring's fire powers and spell-like abilities, culminating in travel to the Elemental Plane of Fire, as printed in the SRD entry."],
    ["ring-of-elemental-command-water", "Ring of Elemental Command (Water)", "200,000 gp", "The wearer can command water elementals and gains the ring's water powers and spell-like abilities, culminating in travel to the Elemental Plane of Water, as printed in the SRD entry."],
    ["ring-of-energy-resistance-minor", "Ring of Energy Resistance, Minor", "12,000 gp", "Grants resistance 10 against one energy type (acid, cold, electricity, fire, or sonic), chosen when the ring is created."],
    ["ring-of-energy-resistance-major", "Ring of Energy Resistance, Major", "28,000 gp", "Grants resistance 20 against one energy type, chosen when the ring is created."],
    ["ring-of-energy-resistance-greater", "Ring of Energy Resistance, Greater", "44,000 gp", "Grants resistance 30 against one energy type, chosen when the ring is created."],
    ["ring-of-force-shield", "Ring of Force Shield", "8,500 gp", "On command, creates a shield of force granting a +2 shield bonus to AC, with no armor check penalty or arcane spell failure chance."],
    ["ring-of-friend-shield", "Ring of Friend Shield", "50,000 gp", "Sold as a matched pair; each wearer can cast shield other on the wearer of the other ring at will."],
    ["ring-of-jumping", "Ring of Jumping", "2,500 gp", "Grants a +5 competence bonus on Jump checks."],
    ["ring-of-jumping-improved", "Ring of Jumping, Improved", "10,000 gp", "Grants a +10 competence bonus on Jump checks."],
    ["ring-of-meld-into-stone", "Ring of Meld into Stone", "27,000 gp", "The wearer can meld into stone as with the meld into stone spell."],
    ["ring-of-mind-shielding", "Ring of Mind Shielding", "8,000 gp", "The wearer is immune to detect thoughts, discern lies, and any attempt to magically discern his alignment."],
    ["ring-of-protection-2", "Ring of Protection +2", "8,000 gp", "Grants a +2 deflection bonus to AC."],
    ["ring-of-protection-3", "Ring of Protection +3", "18,000 gp", "Grants a +3 deflection bonus to AC."],
    ["ring-of-protection-4", "Ring of Protection +4", "32,000 gp", "Grants a +4 deflection bonus to AC."],
    ["ring-of-protection-5", "Ring of Protection +5", "50,000 gp", "Grants a +5 deflection bonus to AC."],
    ["ring-of-the-ram", "Ring of the Ram", "8,600 gp", "Holds 50 charges; on command it releases a ram-shaped force that batters creatures and doors, dealing up to 3d6 damage as printed."],
    ["ring-of-regeneration", "Ring of Regeneration", "90,000 gp", "The wearer regenerates damage and regrows lost body parts as printed; fire and acid damage is not regenerated."],
    ["ring-of-shooting-stars", "Ring of Shooting Stars", "50,000 gp", "Outdoors at night, the wearer can loose shooting-star effects (fiery bursts or illuminating lights) as printed, up to three times per week."],
    ["ring-of-spell-storing", "Ring of Spell Storing", "50,000 gp", "Holds up to 5 levels of spells, placed in the ring by a caster, which the wearer can then cast."],
    ["ring-of-spell-storing-major", "Ring of Spell Storing, Major", "200,000 gp", "Holds up to 10 levels of spells, placed in the ring by a caster, which the wearer can then cast."],
    ["ring-of-spell-turning", "Ring of Spell Turning", "98,280 gp", "On command, turns spells back on their casters as with spell turning (1d4+6 spell levels per activation)."],
    ["ring-of-swimming", "Ring of Swimming", "2,500 gp", "Grants a +5 competence bonus on Swim checks."],
    ["ring-of-swimming-improved", "Ring of Swimming, Improved", "10,000 gp", "Grants a +10 competence bonus on Swim checks, and the wearer can swim tirelessly for extended periods as printed."],
    ["ring-of-telekinesis", "Ring of Telekinesis", "75,000 gp", "The wearer can use telekinesis on command, as the spell cast by a 9th-level caster."],
    ["ring-of-three-wishes", "Ring of Three Wishes", "97,950 gp", "Contains three wish spells the wearer can use; when the last is spent, the ring becomes a plain nonmagical band."],
    ["ring-of-water-walking", "Ring of Water Walking", "15,000 gp", "On command, the wearer can walk on water as with the water walk spell."],
    ["ring-of-wizardry-i", "Ring of Wizardry I", "20,000 gp", "Doubles an arcane caster's 1st-level spells per day."],
    ["ring-of-wizardry-ii", "Ring of Wizardry II", "40,000 gp", "Doubles an arcane caster's 2nd-level spells per day."],
    ["ring-of-wizardry-iii", "Ring of Wizardry III", "70,000 gp", "Doubles an arcane caster's 3rd-level spells per day."],
    ["ring-of-wizardry-iv", "Ring of Wizardry IV", "100,000 gp", "Doubles an arcane caster's 4th-level spells per day."],
    ["ring-of-x-ray-vision", "Ring of X-Ray Vision", "25,000 gp", "The wearer can see through solid objects as printed; prolonged use is fatiguing."],
  ]),
  ...build("rod", RODS, ROD_URL, [
    ["rod-of-absorption", "Rod of Absorption", "50,000 gp", "Absorbs incoming spells targeted at the wielder (up to 50 spell levels), converting their energy to power the wielder's own spells, as printed."],
    ["rod-of-alertness", "Rod of Alertness", "85,000 gp", "Warns of danger, grants a +1 insight bonus on initiative, and can detect enemies and objects as printed."],
    ["rod-of-cancellation", "Rod of Cancellation", "11,000 gp", "A touch from this rod drains and destroys a single magic item; the rod is then itself destroyed."],
    ["rod-of-enemy-detection", "Rod of Enemy Detection", "23,500 gp", "The rod vibrates and points toward creatures hostile to the wielder within 60 feet, as printed."],
    ["rod-of-flailing", "Rod of Flailing", "50,000 gp", "Functions as a +3 dire flail whose heads can extend, and can entangle or trip foes as printed."],
    ["rod-of-lordly-might", "Rod of Lordly Might", "70,000 gp", "Transforms into several magic weapons (longsword, battleaxe, shortspear, and others) and has paralysis and fear effects, as printed."],
    ["rod-of-metal-and-mineral-detection", "Rod of Metal and Mineral Detection", "10,500 gp", "Detects metals and minerals within 30 feet, pointing toward the largest deposit, as printed."],
    ["rod-of-negation", "Rod of Negation", "37,000 gp", "Negates the effects of one spell or magic item per use as printed (a targeted dispel effect); the rod crumbles after several uses."],
    ["rod-of-the-python", "Rod of the Python", "13,000 gp", "Transforms into a giant constrictor snake under the wielder's control (also usable as a +1 quarterstaff)."],
    ["rod-of-rulership", "Rod of Rulership", "60,000 gp", "The wielder can command creatures totaling up to 300 Hit Dice as with mass charm effects, for up to 500 minutes total, as printed."],
    ["rod-of-security", "Rod of Security", "61,000 gp", "Creates a paradisiacal extradimensional refuge that sustains and rests a group, once per week, as printed."],
    ["rod-of-splendor", "Rod of Splendor", "25,000 gp", "Grants a +4 enhancement bonus to Charisma and can conjure fine clothing, a pavilion, and a feast for guests, as printed."],
    ["rod-of-thunder-and-lightning", "Rod of Thunder and Lightning", "33,000 gp", "Functions as a +2 light mace with thunder and lightning blast abilities usable on daily limits, as printed."],
    ["rod-of-the-viper", "Rod of the Viper", "19,000 gp", "Transforms into a poisonous snake under the wielder's control (also usable as a +1 quarterstaff-like weapon as printed)."],
    ["rod-of-withering", "Rod of Withering", "25,000 gp", "Acts as a +1 light mace; its touch can wither a limb, dealing Strength and Constitution damage as printed."],
    ["rod-of-wonder", "Rod of Wonder", "12,000 gp", "Fires a random wondrous effect (roll on the printed table: anything from a fireball to a rain of flowers) each time it is activated."],
    ["metamagic-rod-enlarge-lesser", "Metamagic Rod, Enlarge, Lesser", "3,000 gp", "Apply the Enlarge Spell feat to up to three spells per day (each up to 3rd level) without raising their spell slots."],
    ["metamagic-rod-enlarge", "Metamagic Rod, Enlarge", "11,000 gp", "Apply the Enlarge Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-enlarge-greater", "Metamagic Rod, Enlarge, Greater", "24,500 gp", "Apply the Enlarge Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
    ["metamagic-rod-extend", "Metamagic Rod, Extend", "11,000 gp", "Apply the Extend Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-extend-greater", "Metamagic Rod, Extend, Greater", "24,500 gp", "Apply the Extend Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
    ["metamagic-rod-empower", "Metamagic Rod, Empower", "32,500 gp", "Apply the Empower Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-empower-greater", "Metamagic Rod, Empower, Greater", "73,000 gp", "Apply the Empower Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
    ["metamagic-rod-silent", "Metamagic Rod, Silent", "11,000 gp", "Apply the Silent Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-silent-greater", "Metamagic Rod, Silent, Greater", "24,500 gp", "Apply the Silent Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
    ["metamagic-rod-maximize-lesser", "Metamagic Rod, Maximize, Lesser", "14,000 gp", "Apply the Maximize Spell feat to up to three spells per day (each up to 3rd level) without raising their spell slots."],
    ["metamagic-rod-maximize", "Metamagic Rod, Maximize", "54,000 gp", "Apply the Maximize Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-maximize-greater", "Metamagic Rod, Maximize, Greater", "121,500 gp", "Apply the Maximize Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
    ["metamagic-rod-quicken-lesser", "Metamagic Rod, Quicken, Lesser", "35,000 gp", "Apply the Quicken Spell feat to up to three spells per day (each up to 3rd level) without raising their spell slots."],
    ["metamagic-rod-quicken", "Metamagic Rod, Quicken", "75,500 gp", "Apply the Quicken Spell feat to up to three spells per day (each up to 6th level) without raising their spell slots."],
    ["metamagic-rod-quicken-greater", "Metamagic Rod, Quicken, Greater", "170,000 gp", "Apply the Quicken Spell feat to up to three spells per day (each up to 9th level) without raising their spell slots."],
  ]),
  ...build("staff", STAFFS, STAFF_URL, [
    ["staff-of-charming", "Staff of Charming", "16,500 gp", "Charged staff (50 charges): charm person (1 charge), charm monster (2 charges)."],
    ["staff-of-defense", "Staff of Defense", "58,250 gp", "Charged staff (50 charges): shield (1 charge), shield of faith (1 charge), shield other (1 charge), shield of law (3 charges)."],
    ["staff-of-earth-and-stone", "Staff of Earth and Stone", "80,500 gp", "Charged staff (50 charges): passwall (1 charge), move earth (1 charge)."],
    ["staff-of-swarming-insects", "Staff of Swarming Insects", "24,750 gp", "Charged staff (50 charges): summon swarm (1 charge), insect plague (3 charges)."],
    ["staff-of-woodlands", "Staff of Woodlands", "101,250 gp", "Charged staff (50 charges) that also functions as a +2 quarterstaff and grants pass without trace at will: charm animal (1), speak with animals (1), barkskin (2), wall of thorns (3), summon nature's ally VI (3), animate plants (4)."],
  ]),
];
