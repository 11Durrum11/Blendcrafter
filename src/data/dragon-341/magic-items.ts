// Dragon Magazine #341 (March 2006) — magic item draft: 18 records.
// ELEVEN warforged components — "Warforged Magic" (running head
// "Arcane Upgrade") (John Polojac), pp. 46-50: ten basic components
// plus one artifact component, the Clone Mask. Ruleset "eberron" per
// the standing warforged-components catalog layer; Eberron setting
// lore is stripped and only the mechanics are carried. Each record
// leads with its printed component kind (attached or embedded) and
// the body space it occupies; the published restriction (usable only
// by a warforged) stays in the record text AS PRINTED — Shaun's
// shared-pool override (Warforged / War-Torn / Steamcraft armor draw
// on one interchangeable equipment pool) is applied at play and is
// NOT blended into these records; see SCREENING.md.
// SIX animated items — "Bazaar of the Bizarre: Animated Antiquities"
// (Jeremy Hogg), pp. 64-67. (The table-of-contents blurb advertises
// eight animated items; the article as printed carries six item
// entries plus the Fine animated object sidebar, which is reference
// material — see MANIFEST.md.)
// ONE minor artifact — the brazen skull, from "Demonomicon of
// Iggwilv: Baphomet" (James Jacobs), p. 32. An item record whose
// every use is a direct beseeching of Baphomet's cult machinery; it
// stages as an item, with its APOC position flagged in SCREENING.md
// (the skull's attendant spirit is the undying soul of a sacrificed
// minotaur cleric of Baphomet, awakened by a humanoid blood
// sacrifice — in APOC the demon prince himself is outside the sealed
// sphere and cannot be reached, but the skull's spellcasting is the
// bound spirit's, not a live call to Baphomet).
//
// Component rules frame (Eberron Campaign Setting, p. 268, restated
// in the article): a component occupies the same body space as the
// equivalent normal magic item; an embedded component cannot be
// damaged when its warforged fails a saving throw with a natural 1
// and cannot be targeted independently of the warforged; components
// are usually activated by thought alone; attaching or detaching a
// component is a standard action that never provokes attacks of
// opportunity.
//
// Verification: read from the archive.org OCR text stream of the full
// issue; no rendered-page-image pass was possible in this session
// (see MANIFEST.md "Verification"). Two values are OCR-damaged and
// are flagged in SCREENING.md rather than silently settled: the
// Spring-Heeled Boots price (OCR reads "45,500 gp," an outlier for a
// CL 5th component) and the Stone of Internal Fire's adjacent-
// creature fire damage (OCR damaged die, read as 1d6).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_WARFORGED = "Dragon Magazine #341 — Warforged Magic (John Polojac), pp. 46-50";
const SRC_BAZAAR = "Dragon Magazine #341 — Bazaar of the Bizarre: Animated Antiquities (Jeremy Hogg), pp. 64-67";
const SRC_DEMONOMICON = "Dragon Magazine #341 — Demonomicon of Iggwilv: Baphomet (James Jacobs), p. 32";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

function W(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_WARFORGED,
    sourceUrl: SRC_URL,
    ruleset: "eberron",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_341_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Warforged Magic: basic components (10) ----
  W({
    id: "circlet-of-the-third-eye",
    name: "Circlet of the Third Eye",
    cost: "30,000 gp",
    summary:
      "Warforged component (attached). On command, the circlet's forehead symbol grows into a living eye on a 6-inch eyestalk that can extend up to 10 feet from the warforged; while active it grants darkvision out to 60 feet and continuous see invisibility. The warforged takes a -5 penalty on Hide checks while the eye is active. The eyestalk can be targeted separately (AC 20, 15 hit points); if destroyed, the component does not function for 1 week. The eye can be active for up to 1 hour per day, in activations of at least 10 minutes each. Faint transmutation; CL 4th; Craft Wondrous Item, alter self, darkvision, see invisibility; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "disk-of-illumination",
    name: "Disk of Illumination",
    cost: "20,000 gp",
    summary:
      "Warforged component (embedded; occupies the amulet body space). Three times per day on command, the warforged's nonwood body parts shine as a daylight spell for 1 hour, centered on the warforged; the shifting light also grants a +2 concealment bonus to Armor Class (this bonus does not apply against attacks that do not rely on sight). Moderate evocation; CL 6th; Craft Wondrous Item, daylight; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "disk-of-shadow",
    name: "Disk of Shadow",
    cost: "20,000 gp",
    summary:
      "Warforged component (embedded; occupies the amulet body space). Three times per day on command, black vapors pour from the warforged's mouth and shroud it as a darkness spell for 1 hour; the shifting vapors also grant a +2 concealment bonus to Armor Class and a +5 bonus on Hide checks (these bonuses do not apply against senses that do not rely on sight, such as darkvision). Moderate evocation; CL 6th; Craft Wondrous Item, darkness; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "gauntlet-of-the-deft-hand",
    name: "Gauntlet of the Deft Hand",
    cost: "7,500 gp",
    summary:
      "Warforged component (attached). On command, the warforged's fingers on the gauntlet hand become fine tools, granting a +5 competence bonus on Craft, Disable Device, and Open Lock checks that require fine detail work; the warforged cannot hold a weapon in that hand while the tools are active, and the effect lasts until deactivated. The tools can serve as exotic weapons dealing 1d4 points of slashing or piercing damage. Faint transmutation; CL 4th; Craft Wondrous Item, alter self; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "gauntlets-of-excavation",
    name: "Gauntlets of Excavation",
    cost: "8,000 gp",
    summary:
      "Warforged component (attached). On command, the warforged's hands become shovels: it can dig 10 cubic feet of earth or 2 cubic feet of stone per 10 minutes, digging as if it had an effective Strength of 20 (or its own Strength, whichever is greater). While the shovels are active the warforged cannot wield anything in its hands, loses its Dodge bonus to Armor Class, and takes a -5 penalty on Dexterity-based skill checks. The effect can be used for up to 1 hour per day, in activations of at least 10 minutes each. The shovel blades can serve as exotic weapons dealing 1d4 points of slashing damage. Moderate transmutation; CL 5th; Craft Wondrous Item, alter self, soften earth and stone; Weight 8 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "iron-tooth-girdle",
    name: "Iron-Tooth Girdle",
    cost: "15,000 gp",
    summary:
      "Warforged component (attached). On command, the warforged's torso splits open into a great maw, giving it a secondary bite attack with 5-foot reach that deals 3d6 points of piercing damage (threat range 19-20) and counts as a magic weapon for the purpose of overcoming damage reduction. The warforged takes no -4 penalty when attacking with the bite in a grapple, and a pinned foe takes the bite damage automatically each round. The maw can make at most 10 bite attacks per day. Moderate transmutation; CL 7th; Craft Wondrous Item, polymorph; Weight 10 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "jewels-of-dazzling-light",
    name: "Jewels of Dazzling Light",
    cost: "17,000 gp",
    summary:
      "Warforged component (embedded; occupies the bracers body space). The jewels grant a +2 enhancement bonus on Diplomacy checks against creatures that can see the warforged. Their spell-like abilities function only while the warforged is in bright illumination: 5/day — dancing lights, daze (DC 10), flare (DC 10); 3/day — color spray (DC 11), hypnotism (DC 11); 1/day — rainbow pattern (DC 16). Moderate illusion; CL 7th; Craft Wondrous Item; Weight 1/2 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override). APOC: the bright-illumination condition interacts with the Fog of Life's perpetual grey — flagged in SCREENING.md, record unaltered.",
  }),
  W({
    id: "scorpion-brand",
    name: "Scorpion Brand",
    cost: "17,500 gp",
    summary:
      "Warforged component (embedded). The warforged manifests an 8-foot segmented metal tail, giving it a secondary sting attack with 10-foot reach that deals 1d6 points of damage plus poison (injury, Fortitude DC 14, initial and secondary damage 1d6 Dexterity) and counts as a magic weapon for the purpose of overcoming damage reduction. The tail can be targeted separately (AC 20, 30 hit points); if destroyed, the component does not function for 1 week. The tail can make at most 10 sting attacks per day. Moderate transmutation; CL 7th; Craft Wondrous Item, alter self, poison; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  W({
    id: "spring-heeled-boots",
    name: "Spring-Heeled Boots",
    cost: "45,500 gp",
    summary:
      "Warforged component (attached). On command, springs grow from the boots: the warforged gains a +20 bonus on Jump checks (with no maximum jumping distance), a +15 foot bonus to speed while loping (which needs 10 feet of ceiling clearance; with less clearance its base speed is halved instead), and takes half damage from falls on a successful DC 15 Reflex save. The warforged loses its Dodge bonus to Armor Class in any round in which it does not move at least 10 feet, and takes a -4 penalty on Balance checks. The springs can be used for up to 10 rounds per day, which need not be consecutive. Faint transmutation; CL 5th; Craft Wondrous Item, alter self, jump; Weight 4 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override). Price as read from the OCR stream; the figure is an outlier for a CL 5th component and is flagged unverified in SCREENING.md.",
  }),
  W({
    id: "stone-of-internal-fire",
    name: "Stone of Internal Fire",
    cost: "10,000 gp",
    summary:
      "Warforged component (embedded; swallowed by the warforged). Once per day on command, the warforged grows hot for 5 rounds: steam from its mouth creates the effect of a fog cloud, creatures adjacent to the warforged take 1d6 points of fire damage per round, and creatures that touch the warforged take 2d4 points of fire damage. Each round the effect lasts, the warforged itself takes 1d6 points of fire damage and must succeed on a DC 15 Fortitude save or flammable materials it wears, holds, or carries burst into flame. Moderate evocation; CL 6th; Craft Wondrous Item, fog cloud, heat metal; Weight —. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override).",
  }),
  // ---- Warforged Magic: artifact component (1) ----
  W({
    id: "clone-mask",
    name: "Clone Mask",
    cost: "—",
    summary:
      "Warforged component (attached) — artifact component. A ceramic face-plate (hardness 10, 35 hit points). Once per day, for up to 1 hour, the warforged's upper body splits into two complete sets of head, arms, and torso while its lower body broadens and grows a third leg; the transformation takes 1 full round, and using the mask requires a base attack bonus of +6 or better. Both bodies share one mind and the warforged takes its normal actions. While the mask is active: the warforged gains one extra attack on a full attack at its full base attack bonus (this stacks with haste and similar effects); gains +2d10 temporary hit points; can grapple one foe without taking the usual penalties for grappling (a second grapple is made at normal penalties); cannot be flanked; gains the powerful build trait (it functions as a creature one size larger for opposed checks such as grapple and bull rush, for whether special attacks such as improved grab or swallow whole can affect it, and for wielding larger weapons, though its space and reach do not change — this stacks with effects that change its actual size); gains a +2 bonus on Listen and Spot checks; and gains a +4 stability bonus against trip attempts. If one of the two heads is decapitated, the warforged reverts to its normal form and is stunned for 2d4 rounds. Strong transmutation; CL 20th; Weight 1 lb. A warforged component: usable only by a warforged (restriction as printed; see SCREENING.md for the shared-pool override). No market price (artifact).",
  }),
  // ---- Bazaar of the Bizarre: Animated Antiquities (6) ----
  M({
    id: "battering-ball",
    name: "Battering Ball",
    cost: "2,000 gp",
    summary:
      "Animated item (wondrous item) — a battering ball only 1 foot in diameter and lighter than a portable ram. On command it flies up to 10 feet to strike a solid object, returns to its original position, and repeats once per round until commanded to stop. It has a +12 bonus for the purpose of overcoming an object's break DC, and it cannot attack attended objects; if it would enter a square occupied by a creature it stops short, returns to its starting square, and does not move again until commanded. Moderate transmutation; CL 9th; Craft Wondrous Item, telekinesis; Weight 15 lb.",
  }),
  M({
    id: "clairaudience-beetle",
    name: "Clairaudience Beetle",
    cost: "7,500 gp",
    summary:
      "Animated item (wondrous item) — a beetle-sized spy construct that behaves like a skittish natural beetle, hiding and retreating from anything larger than itself. Its owner has limited control over it (it comes when called, follows a designated target, and halts on command; it must be able to hear its owner to obey). One command word makes it record sound for 1 hour; a second command word plays the recording back at the owner's ear; a third erases its memory so it can record again. The beetle uses the statistics of a Fine animated object (see reference.md) except that it also has a fly speed of 10 feet with average maneuverability. Moderate transmutation; CL 11th; Craft Wondrous Item, animate objects; Weight —.",
  }),
  M({
    id: "floating-book",
    name: "Floating Book",
    cost: "+500 gp",
    summary:
      "Animated item quality (wondrous item) — the floating quality can be added to any masterwork book or spellbook, much like an armor or weapon special ability, at the price shown. A floating book hovers about 3 feet above the ground at all times, in the orientation its owner sets it, and accompanies its owner unless commanded otherwise; placing any weight on the book causes it to fall. Faint evocation; CL 3rd; Craft Wondrous Item, Tenser's floating disk; Weight per book. Staged as a magic item record carrying a priced quality rather than a standalone item, as printed; see MANIFEST.md.",
  }),
  M({
    id: "flying-lantern",
    name: "Flying Lantern",
    cost: "1,600 gp",
    summary:
      "Animated item (wondrous item) — when commanded, this lantern hangs in the air at the elevation its owner releases it, keeps a constant 5 feet of distance from its owner, and navigates around obvious obstacles; it has a speed of 30 feet. It burns oil and requires refueling exactly as a regular lantern. Moderate transmutation; CL 5th; Craft Wondrous Item, fly; Weight 3 lb. APOC: a flying item — over the Bastion the Melairshield bars flying creatures and flight; flagged in SCREENING.md, record unaltered.",
  }),
  M({
    id: "poison-dart-wasp",
    name: "Poison-Dart Wasp",
    cost: "3,300 gp",
    summary:
      "Animated item (wondrous item) — a 9-inch wasp-shaped animated dart. Poison is applied to it as normal; unlike a normal dart, when it misses its designated target it keeps attacking until it hits, is knocked from the air, or is recalled by its owner. On a hit it deals 1 point of damage and delivers whatever contact or injury poison was applied to its barbed stinger. The stinger snaps off on a successful attack and the wasp falls inert; a replacement stinger (100 gp) reactivates it. The wasp uses the statistics of a Fine animated object (see reference.md) except that it has a fly speed of 30 feet with good maneuverability and stings instead of slamming. Moderate transmutation; CL 11th; Craft Wondrous Item, animate objects; Weight 1 lb. APOC: a flying item — over the Bastion the Melairshield bars flying creatures and flight; flagged in SCREENING.md, record unaltered.",
  }),
  M({
    id: "trick-coin",
    name: "Trick Coin",
    cost: "350 gp",
    summary:
      "Animated item (wondrous item) — a normal-looking silver coin that answers calls of \"heads\" or \"tails\": it lands to show whichever side lets its owner win the toss, and whichever side makes any caller other than its owner lose, regardless of who holds the coin or how it is flipped. A creature must keep a trick coin on his person for 24 hours to attune it and establish himself as its owner. Faint transmutation; CL 3rd; Craft Wondrous Item, mage hand; Weight — (not printed).",
  }),
  // ---- Demonomicon of Iggwilv: Baphomet — minor artifact (1) ----
  M({
    id: "brazen-skull",
    name: "Brazen Skull",
    source: SRC_DEMONOMICON,
    cost: "—",
    summary:
      "Minor artifact — one of thirteen identical brazen skulls: a bull's skull of riveted gold plates with real blood-painted horns, milky pearls in the eyesockets, and red metallic fangs, mounted on an iron podium. The spirit of the minotaur cleric sacrificed in its making lies dormant in each skull until awakened by anointing the skull with the blood of a humanoid sacrifice; the anointing creature may then beseech the skull for a spell. The skull has the spellcasting power of a 13th-level cleric of Baphomet; convincing it to cast requires an Intimidate check (DC 10 + the requested spell's level + 2 for each previous use that day) as a full-round action, and on failure the skull goes dormant for the rest of the day. Costly material components or foci are placed in the skull's mouth (components are consumed, a focus is not); XP costs are drawn from the user; a personal-range spell targets the user instead. Typically available: 6/day — create water, cure light wounds; 5/day — cure moderate wounds; 2/day — cure critical wounds, cure serious wounds, magic vestment, restoration; 1/day — antilife shell, atonement, blasphemy, break enchantment, commune, desecrate, dispel good, divination, enlarge person, heal, magic circle against good, obscure object, resurrection, speak with dead, spell immunity, stoneskin, zone of truth. Expended spells are restored only by a vile midnight ritual: an hour-long rite involving the sacrifice of a living creature, which fails if the skull cast any spell within the previous 8 hours. Strong (all schools); CL 13th; Weight 50 lb. No market price (artifact). APOC: several of the skull's spells (commune above all) reach across the planes; the skull and its bound spirit are inside the sphere already, its maker is not — see SCREENING.md.",
  }),
];
