import type { MagicItemDefinition } from "@/engine/types";

// The Quintessential Dwarf (Mongoose Publishing, ©2002,
// Collectors' Series) — magic items from the "Dwarven
// Magic" chapter (printed pp. 61-82), transcribed from
// Shaun's own scanned copy (image-only; read visually
// page by page, 2026-11-04). This is a 3.0-era book:
// terminology is as printed (armour, Craft Magic Arms and
// Armour), and nothing has been modernized. Summaries are
// short mechanical paraphrases in our own words; no book
// prose is reproduced.
//
// RAW RUNES (pp. 61-66). A raw (unmounted) rune is a rune
// ritually inscribed upon a stone or metal tile: held and
// concentrated upon, it lets the user unleash the power
// contained within, releasing a spell of the rune's
// school. When a rune is created, it contains the
// essential patterns for all spells of the rune's school
// the creator knows, up to the maximum level the rune was
// created to hold; any of these spells may be released
// from the rune, provided the wielder understands how to
// manipulate the runic patterns. Creating one requires
// the appropriate Rune Magic feat (see the pack's feats):
// one feat per rune, inscribed so as to be useable by
// anyone who picks it up only with the third feat of the
// chain; otherwise only the creator may use the rune — a
// rune created with the appropriate feat can be used by
// anyone with the skill to manipulate its patterns, not
// only those with spellcasting ability. Inscription: a
// rune must have a surface equal in area to one-half the
// level of the highest-level spell it will contain in
// square inches (minimum 1 square inch), and for every
// half-inch of thickness the surface holds five spell
// levels of energy (a rune must be at least one inch
// thick to hold a single 9th-level spell). Cost in
// materials: the rune's surface costs its volume in cubic
// inches times the material rate (wood 1 gp, Hardness 5,
// 10 hp/inch; stone 5 gp, 8, 15; iron 8 gp, 10, 30;
// mithral 100 gp, 15, 30; adamantine 150 gp, 20, 40),
// plus the Additional Rune Materials Cost for the rune's
// maximum spell level (0th: 10 gp/1 XP; 1st: 15 gp/1 XP;
// 2nd: 100 gp/10 XP; 3rd: 200 gp/20 XP; 4th: 400 gp/30
// XP; 5th: 600 gp/50 XP; 6th: 850 gp/75 XP; 7th: 1,200
// gp/100 XP; 8th: 1,600 gp/150 XP; 9th: 2,000 gp/200 XP);
// the total cost of a rune with additional spell levels
// is the base cost multiplied by the number of times the
// rune's highest-level spell can be released, and extra
// castings can be added only at creation. Using a rune:
// study it for a full round to determine which spells it
// contains (afterwards, a glance — a free action —
// refreshes memory); make an Intelligence check (DC 10 +
// spell level, standard action, provokes an attack of
// opportunity) to prime the spell, which may then be
// released on the user's initiative on the following
// round as a standard action that does not provoke an
// attack of opportunity; any required material components
// must be in the caster's possession or the energy is
// lost but the spell is not cast (a Spellcraft check, DC
// 10 + spell level, as a free action, determines necessary
// components or foci in advance); subtract the spell's
// level from the spell levels remaining in the rune; the
// wielder must then make a Fortitude save (DC 10 + level
// of the spell released) each time the rune is used — on
// a success the rune loses a single hit point, on a
// failure it suffers one hit point of damage per level of
// the spell released. As a standard action the wielder
// may make an Intelligence check (DC 20) to determine the
// number of spell levels remaining in a rune. Destroying
// runes: if a rune's hit points are ever reduced below 0,
// or its stored spell levels equal 0, the rune is
// destroyed and the substance crumbles to dust; if it
// still holds spell energy when destroyed by damage, the
// energy is released violently — every spell level still
// stored causes 1d6 hit points of damage to all creatures
// within the rune's maximum spell level times 5 feet
// (Fortitude save, DC 10 + number of spell levels
// released, negates). Because a rune's price depends
// entirely on its construction, the cost field records
// the basis rather than a single figure.
//
// The chapter's GRAFTED runes (pp. 66-74) are a creation
// framework — standard weapon, armour, and shield special
// abilities and bonus types (ability enhancement,
// deflection, luck, natural armour, resistance, skill,
// spell resistance) bought as bonus modifiers and grafted
// onto host items — not priced items, so they are not
// built as records; the framework is documented in the
// pack's draft report (the three genuinely NEW special
// abilities the chapter prints are built below). The
// ancestral artefacts (pp. 77-82) are likewise a creation
// framework and are documented, not built.

const QD = "The Quintessential Dwarf";
const QD_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Dwarf.pdf";

export const QUINTESSENTIAL_DWARF_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- New item special abilities (p. 74) ----
  {
    id: "blade-breaker",
    name: "Blade Breaker",
    category: "Weapon special ability",
    cost: "+2 bonus",
    summary: "Weapon special ability: when used to attack another weapon, this weapon receives a +3 bonus on attack and damage rolls. In addition, the weapon is treated as having double its normal enhancement bonus when used to determine whether or not it may damage an opponent's weapon (thus, a +2 longsword would be treated as a +4 longsword when determining what types of weapons it can harm and a +5 longsword when attacking another weapon). Caster Level: 8th; Prerequisites: Craft Magic Arms and Armour, shatter; Market Price: +2 bonus.",
    source: `${QD}, p. 74`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "life-hold",
    name: "Life Hold",
    category: "Armor/shield special ability",
    cost: "+1 bonus",
    summary: "Armour or shield special ability: this armour or shield provides protection from death to its wearer, although it offers no healing of its own. When worn, this armour or shield will automatically stabilise the wearer when he reaches -3 hit points, if he has not already stabilised. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armour, cure minor wounds; Market Price: +1 bonus.",
    source: `${QD}, p. 74`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "magmic",
    name: "Magmic",
    category: "Weapon special ability",
    cost: "+4 bonus",
    summary: "Weapon special ability: veins of magma flow over the blade of this weapon, burning targets and leaving behind little pockets of seething magma to damage foes further. When a critical hit is scored with this weapon, it causes an additional amount of damage equal to 1d10 per critical multiplier (thus, a weapon with a x2 critical multiplier causes an additional 2d10 hit points of damage, a x3 multiplier an additional 3d10, and a x4 multiplier an additional 4d10). Each round after the critical hit, the target suffers an additional amount of damage equal to the initial magmic damage - 1d10 (a magmic weapon which causes 4d10 additional hit points of damage, then, causes 3d10 hit points of damage on the next round, 2d10 on the third round, and 1d10 on the fourth and final round). This damage is considered fire-based in regards to resistances and immunities. Caster Level: 14th; Prerequisites: Craft Magic Arms and Armour, flame blade, flame strike, or fireball; Market Price: +4 bonus.",
    source: `${QD}, p. 74`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  // ---- The runes (pp. 61-63) ----
  {
    id: "akharak-rune",
    name: "Akharak Rune (Stalwart Shield)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune tied to protective energies, a favourite among warriors and adventurers of all types; dwarves prefer to make few of these runes during times of peace, and stockpiles are stored for use during battles or wars. Associated school: Abjuration. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, pp. 61-62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "cazkeer-rune",
    name: "Cazkeer Rune (Gatestone)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune whose specialty is compelling extraplanar creatures, providing the user with the ability to call forth beings and demand or request services from them. Associated school: Conjuration (calling). Special: this rune always contains the energy to cast a magic circle spell, the type of which is determined when the rune is used — when used, the rune first casts the magic circle spell, then immediately casts the conjuration spell desired by the caster; the addition of the magic circle spell makes cazkeer runes more expensive to create but the safeguard is a necessity for the effective use of other conjuration spells. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "rukreesh-rune",
    name: "Rukreesh Rune (Forge)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune whose domain is creation, allowing the user to use the stored magical energy to create objects or creatures; these runes are used grudgingly by most dwarves, who prefer the solid strength of a handcrafted item. Associated school: Conjuration (creation). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ruksuur-rune",
    name: "Ruksuur Rune (Balm of Stone)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune used to store healing energies, treasured by dwarves with dangerous occupations: in many mines, crew leaders are often provided with this type of rune and instruction in its use in order to save lives during a cave-in or other natural disaster, and commanders and subcommanders carry small sacks of these runes into battle. Associated school: Conjuration (healing). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ruktharka-rune",
    name: "Ruktharka Rune (Calling)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune generating effects which transport creatures or objects to a location specified by the user; the guards and leaders of a community most often use these items to summon aid for specific tasks or to help turn the tide of battle. Associated school: Conjuration (summoning). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "rukthan-rune",
    name: "Rukthan Rune (Arcane Eye)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune associated with detection and divination in all its forms; rukthan runes are often provided to leaders of battle, law enforcement officials, and engineers during the planning stages of projects. Associated school: Divination. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "arzlee-rune",
    name: "Arzlee Rune (Beguiling Tongue)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune of charm magic: dwarves are loath to use spells which modify the mind or spirit of sentient creatures, but a well timed charm spell can save many lives, so runes of this type are kept on hand and given only to the most trusted members of a community, and only in times of impending danger. Associated school: Enchantment (charm). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 62`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "arzkhal-rune",
    name: "Arzkhal Rune (Demanding Voice)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune providing the power to demand a course of action from the target of its spells; like the arzlee rune, this type of magic is loathed by most dwarves, who view slavery of the mind as a perversion. Associated school: Enchantment (compulsion). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, pp. 62-63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "krukrin-rune",
    name: "Krukrin Rune (Thunder Hand)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune most often used for battle: these runes call down fire, lightning, and other forces of destruction at the direction of the user; handed out often during times of war, they are rarely seen during periods of peace. Associated school: Evocation. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "zulkin-rune",
    name: "Zulkin Rune (Mist Images)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune of simple illusions, useful in protecting or concealing an object or person: these runestones allow the user to create figments, the simplest of illusions, and scouts are often provided with zulkin runes to protect them during missions or as a means of escape. Associated school: Illusion (figment). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "zulmir-rune",
    name: "Zulmir Rune (Mistaken Sight)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune used when a more complex illusion is needed, to create a glamour; these runes are used most often to render individuals or objects invisible or otherwise undetectable, enabling small groups to bypass hordes of enemies without danger. Associated school: Illusion (glamour). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "zullyk-rune",
    name: "Zullyk Rune (Clouded Mind)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune used to create illusions, or patterns, to be more specific: because spells of this nature affect the minds, rather than simply the senses, of those who witness them, they are more effective in an environment where creatures possess many different types of sensory apparatus; dwarven scouts and warlords make extensive use of these items. Associated school: Illusion (pattern). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "zulraak-rune",
    name: "Zulraak Rune (Dazzled Mind)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune generating phantasm effects: because many underlands creatures perceive the world in alien ways, the use of zulraak runes is common amongst dwarves — by generating images, feelings and sensations directly in the minds of the targets, the dwarves are able to bypass the need to alter the senses of other creatures. Associated school: Illusion (phantasm). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "zulthrok-rune",
    name: "Zulthrok Rune (Fanged Mind)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune which, unlike the other illusion-generating runes, unleashes effects which have real, physical results: these shadow illusions are able to inflict harm even on those who successfully resist the influence of other illusions, giving the dwarves a weapon to use against their strong-willed enemies. Associated school: Illusion (shadow). Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "dokrath-rune",
    name: "Dokrath Rune (Open Grave)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune used only by those dwarves unconcerned with the taint of evil: tampering with these runes unleashes necromantic energies, drawing the dead from the graves and chaining them to the will of the rune's user; devil dwarves make extensive use of dokrath runes but few other dwarves utilize them. Associated school: Necromancy. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "suurkan-rune",
    name: "Suurkan Rune (Creator's Hand)",
    category: "Rune",
    cost: "Varies by construction (see pack header)",
    summary: "Raw rune of transformation: though there is no substitute for a well-crafted piece of metal, dwarves often use the suurkan rune to make their lives easier — its transformative powers are a great boon to miners and smiths alike, allowing them to accomplish tasks quickly which might otherwise take days of backbreaking labour. Associated school: Transmutation. Rune creation, use, and destruction rules are summarized in this file's header.",
    source: `${QD}, p. 63`,
    sourceUrl: QD_PATH,
    ruleset: "core",
    modifiers: [],
  },
];
