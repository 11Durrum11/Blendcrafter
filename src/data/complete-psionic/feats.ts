/**
 * Complete Psionic feats: ninety-five net-new feat records — Chapter
 * 3's Table 3-1: Psionic Feats
 * (40), Table 3-2: Psionic Racial Feats (28), Table 3-3: General Feats
 * (4), Table 3-4: Host Feats (8), Table 3-5: Illithid Heritage Feats
 * (9), and Table 3-6: Metapsionic Feats (7), plus the five epic
 * psionic feats of Chapter 6 — with prerequisites and
 * benefits condensed from the tables and the feat descriptions
 * (pp. 47–64). Six of the book's printings duplicate records already
 * in the dataset and are skipped here: Deep Vision, Focused Shield,
 * Invest Armor, and Energize Armor (Races of Stone records) and
 * Gestalt Anchor and Strength of Two (Races of Eberron records —
 * the Complete Psionic Gestalt Anchor reprint words the benefit
 * slightly differently; see the REBUILD-NOTES.md Batch 6 addendum).
 * The book's host feat Spiritual Force is a different feat from the
 * Races of Eberron feat of the same name and is kept under the
 * suffixed id spiritual-force-cp with cross-notes in both records.
 * Built 2026-10-27 from the copy in Shaun's Dropbox
 * library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf
 * The PDF is a scan with no text layer; the tables and descriptions
 * were read by OCR of the page images. The app has no psionic / host
 * / illithid feat categories, so those feats carry category "general"
 * and the metapsionic feats "metamagic" (their psionic analog), with
 * the book's grouping named in `special`; the racial feats use the
 * app's "race-specific" category. Ectopic Form's eight forms (Agile
 * Loper, Alabaster Aerial, Amber Tunneler, Anathemic Carapace,
 * Astral Aquan, Ebony Stinger, Emerald Gyre, Iridescent Serpent) are
 * choices made when taking that one feat, not separate feats.
 */
import type { FeatDefinition } from "@/engine/types";

const CP = "Complete Psionic";
const CP_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf";
const PSI = "Psionic feat (Complete Psionic grouping).";
const RACIAL = "Psionic racial feat (Complete Psionic grouping).";
const HOST = "Host feat (Complete Psionic grouping): host feats can only be taken by a character who is acting as a host for a psionic entity (see the book).";
const ILLITHID = "Illithid heritage feat (Complete Psionic grouping).";
const META = "Metapsionic feat (Complete Psionic grouping).";

function f(
  id: string,
  name: string,
  category: FeatDefinition["category"],
  prerequisites: string[],
  benefitSummary: string,
  table: string,
  page: number,
  special?: string,
): FeatDefinition {
  const rec: FeatDefinition = {
    id,
    name,
    category,
    ruleset: "core",
    prerequisites,
    benefitSummary,
    source: `${CP}, p. ${page} (${table})`,
    sourceUrl: CP_PATH,
  };
  if (special) rec.special = special;
  return rec;
}

const T31 = "Table 3-1: Psionic Feats (Chapter 3)";
const T32 = "Table 3-2: Psionic Racial Feats (Chapter 3)";
const T33 = "Table 3-3: General Feats (Chapter 3)";
const T34 = "Table 3-4: Host Feats (Chapter 3)";
const T35 = "Table 3-5: Illithid Heritage Feats (Chapter 3)";
const T36 = "Table 3-6: Metapsionic Feats (Chapter 3)";
const TEPIC = "Epic Feats (Chapter 6)";
const EPIC = "Epic psionic feat (Complete Psionic, Chapter 6): available only to epic characters (21st level or higher); the versions printed here supersede any previously published versions by the same name.";

export const COMPLETE_PSIONIC_FEATS: FeatDefinition[] = [
  // ---- Table 3-1: Psionic feats ----
  f("dazzling-energy", "Dazzling Energy", "general", ["Ability to manifest energy missile power", "Privileged Energy"],
    "When you manifest an energy power that specifies a single target using your privileged energy type, the target is dazzled by the display, as described in the feat.", T31, 49, PSI),
  f("dire-flail-mind-blade", "Dire Flail Mind Blade", "general", ["Mind blade", "shape mind blade class features"],
    "When you reshape your mind blade, you can change it into a dire flail; you are proficient with your dire flail mind blade.", T31, 49, PSI),
  f("dire-stun", "Dire Stun", "general", ["Lurk augment class feature", "Extra Lurk Augment"],
    "When you use a lurk augment to deal a stunning strike, the save DC against the stun increases by 2 and the stun duration increases by 1 round.", T31, 49, PSI),
  f("don-mantle", "Don Mantle", "general", ["Tap Mantle"],
    "You gain the granted ability of a mantle you have accessed using the Tap Mantle feat. You can take this feat multiple times, each time for a different tapped mantle.", T31, 49, PSI),
  f("dwarven-urgosh-mind-blade", "Dwarven Urgosh Mind Blade", "general", ["Mind blade", "shape mind blade class features"],
    "When you reshape your mind blade, you can change it into a dwarven urgosh; you are proficient with your dwarven urgosh mind blade.", T31, 49, PSI),
  f("ectopic-form", "Ectopic Form", "general", ["Know astral construct power"],
    "The astral constructs you create take on a distinctive form with special abilities. Choose one form when you take the feat: Agile Loper (quicker, +4 initiative and +20 ft. speed), Alabaster Aerial (winged; fly speed), Amber Tunneler (burrow speed equal to land speed), Anathemic Carapace (explodes on destruction for 1d6 + 1d6 per HD; requires any other ectopic form), Astral Aquan (swim speed), Ebony Stinger (piercing attacks dealing 1 point of Con damage; requires any other ectopic form), Emerald Gyre (improved grab), or Iridescent Serpent (energy resistance 10 to one energy type). You can take this feat multiple times, once per form, applying only one form to each construct.", T31, 50, PSI),
  f("elemental-envoy", "Elemental Envoy", "general", ["Knowledge (the planes) 1 rank", "Psicrystal Affinity"],
    "You gain an elemental steward (a small elemental envoy creature; see Chapter 6) instead of a psicrystal.", T31, 52, PSI),
  f("envoy-cognizance", "Envoy Cognizance", "general", ["Knowledge (the planes) 1 rank", "Psicrystal Affinity", "Elemental Envoy"],
    "Your elemental steward enhances your energy powers, as described in the feat.", T31, 53, PSI),
  f("enervation-endurance", "Enervation Endurance", "general", ["Psychic enervation class feature"],
    "You suffer only half the normal power point loss when you are enervated (from wild surge).", T31, 53, PSI),
  f("enhanced-beneficence", "Enhanced Beneficence", "general", ["Psychic aura class feature"],
    "The size of your psychic aura increases by 5 feet.", T31, 53, PSI),
  f("euphoric-reduction", "Euphoric Reduction", "general", ["Surging euphoria +1 class feature"],
    "You gain an alternate surging euphoria ability, as described in the feat.", T31, 53, PSI),
  f("focused-perception", "Focused Perception", "general", ["Blind-Fight"],
    "While psionically focused, you gain blindsense as described in the feat (the table's benefit: blindsense 60 feet for 1 round when you expend focus), sharpening your perception beyond sight.", T31, 54, PSI),
  f("focused-skill-user", "Focused Skill User", "general", [],
    "While you are psionically focused, you gain a +2 bonus in three skills you select, as described in the feat.", T31, 54, PSI),
  f("instinctive-consummator", "Instinctive Consummator", "general", ["Str 13", "Power Attack", "Cleave"],
    "You can expend your psionic focus to automatically confirm a critical threat, as described in the feat.", T31, 54, PSI),
  f("extra-lurk-augment", "Extra Lurk Augment", "general", ["Lurk augment class feature"],
    "You can use your lurk augment ability three extra times per day.", T31, 55, PSI),
  f("lurk-augment-ranged", "Lurk Augment, Ranged", "general", ["Lurk augment class feature"],
    "You can use your lurk augments with ranged attacks, not just melee attacks.", T31, 55, PSI),
  f("lurk-master", "Lurk Master", "general", ["Lurk augment class feature"],
    "You use your lurk augments as if you were a lurk two class levels higher.", T31, 55, PSI),
  f("mantle-focus", "Mantle Focus", "general", ["Access to one psionic mantle"],
    "The save DCs of powers from the chosen mantle increase by 1.", T31, 55, PSI),
  f("mental-juggernaut", "Mental Juggernaut", "general", ["Ability to gain psionic focus"],
    "You gain a bonus on saving throws against daze and stun effects, as described in the feat.", T31, 56, PSI),
  f("mind-cleave", "Mind Cleave", "general", ["Mind blade", "psychic strike class features"],
    "When you defeat a foe, you drain its mental energy to charge your mind blade, as described in the feat.", T31, 56, PSI),
  f("mind-empowerment", "Mind Empowerment", "general", ["Mind blade", "psychic strike class features", "Mind Cleave"],
    "You drain a defeated foe's mental energy to deal additional psychic strike damage, as described in the feat.", T31, 56, PSI),
  f("mind-strike-focused", "Mind Strike, Focused", "general", ["Mind blade", "psychic strike +1d8 class features"],
    "Your psychic strike deals an extra die of damage, as described in the feat.", T31, 56, PSI),
  f("mind-strike-swift", "Mind Strike, Swift", "general", ["Mind blade", "psychic strike +2d8 class features"],
    "You can imbue your psychic strike as a swift action, at a -2 penalty on the attack roll, as described in the feat.", T31, 57, PSI),
  f("orc-double-axe-mind-blade", "Orc Double Axe Mind Blade", "general", ["Mind blade", "shape mind blade class features"],
    "When you reshape your mind blade, you can change it into an orc double axe; you are proficient with your orc double axe mind blade.", T31, 57, PSI),
  f("postpone-enervation", "Postpone Enervation", "general", ["Psychic enervation", "wild surge +2 class features"],
    "You can delay the effects of psychic enervation for up to 3 rounds, as described in the feat.", T31, 57, PSI),
  f("practiced-manifester", "Practiced Manifester", "general", ["Psicraft 4 ranks"],
    "Your manifester level for one manifesting class increases by 4, up to a maximum of your Hit Dice.", T31, 57, PSI),
  f("privileged-energy", "Privileged Energy", "general", ["Ability to manifest energy missile power"],
    "Choose an energy type: you deal +1 damage per die with powers of your chosen energy type, as described in the feat.", T31, 57, PSI),
  f("psymbiot", "Psymbiot", "general", ["Knowledge (psionics) 8 ranks", "manifester level 3rd"],
    "While you are within 10 feet of psionic entities, you gain a +2 bonus on ability checks, skill checks, and saving throws.", T31, 57, PSI),
  f("skin-of-the-construct", "Skin of the Construct", "general", ["Know astral construct power"],
    "You can absorb aspects of an astral construct you would otherwise manifest, gaining its abilities yourself, as described in the feat.", T31, 57, PSI),
  f("stygian-archon", "Stygian Archon", "general", ["Know two negative energy powers"],
    "You manifest negative energy powers at +1 manifester level.", T31, 57, PSI),
  f("tap-mantle", "Tap Mantle", "general", ["Access to one psionic mantle"],
    "You add the powers of one additional mantle to your powers known (without gaining its granted ability), as described in the feat.", T31, 58, PSI),
  f("extra-aura", "Extra Aura", "general", ["Don Mantle", "psychic aura class feature"],
    "You gain an additional psychic aura, as described in the feat.", T31, 54, PSI),
  f("two-bladed-mind-blade", "Two-Bladed Mind Blade", "general", ["Mind blade", "shape mind blade class features"],
    "When you reshape your mind blade, you can change it into a two-bladed sword; you are proficient with your two-bladed mind blade.", T31, 58, PSI),
  f("volatile-escalation", "Volatile Escalation", "general", ["Volatile mind class feature"],
    "A creature that targets you with a telepathy power must pay an extra 1d4 power points, as described in the feat.", T31, 58, PSI),
  f("volatile-leech", "Volatile Leech", "general", ["Volatile mind class feature"],
    "You absorb the extra power points a foe is forced to spend by your volatile mind ability, as described in the feat.", T31, 58, PSI),

  // ---- Table 3-2: Psionic racial feats ----
  f("dromite-ray", "Dromite Ray", "race-specific", ["Dromite"],
    "You can use the energy ray psi-like ability granted by your dromite heritage two more times per day (normally once per day). You can take this feat multiple times, gaining two additional uses each time.", T32, 49, RACIAL),
  f("dromite-barrier", "Dromite Barrier", "race-specific", ["Dromite", "Dromite Ray", "3 HD"],
    "You can convert uses of your energy ray psi-like ability into walls of energy: a 10-foot-by-10-foot vertical plane of energy lasting 1d4 rounds; creatures passing through it take damage equal to your energy ray's damage.", T32, 49, RACIAL),
  f("duergar-expansion", "Duergar Expansion", "race-specific", ["Duergar", "expansion psi-like ability"],
    "You can use the expansion psi-like ability granted by your duergar heritage a total of 3 + your Cha modifier times per day.", T32, 49, RACIAL),
  f("duergar-invisibility", "Duergar Invisibility", "race-specific", ["Duergar", "invisibility psi-like ability"],
    "You can use the invisibility psi-like ability granted by your duergar heritage a total of three times per day (normally once).", T32, 49, RACIAL),
  f("elan-repletion-enhanced", "Elan Repletion, Enhanced", "race-specific", ["Elan"],
    "You do not require food or water, sustaining yourself psionically as described in the feat.", T32, 53, RACIAL),
  f("elan-resilience-enhanced", "Elan Resilience, Enhanced", "race-specific", ["Elan"],
    "Your elan resilience improves: you can reduce damage taken by 4 points per power point spent, as described in the feat.", T32, 53, RACIAL),
  f("elan-resistance-enhanced", "Elan Resistance, Enhanced", "race-specific", ["Elan"],
    "Your elan resistance improves: spend 1 power point for a +6 bonus on saving throws for 1 round, as described in the feat.", T32, 53, RACIAL),
  f("elan-retainment", "Elan Retainment", "race-specific", ["Elan", "3 HD"],
    "Once per day, you can spend 3 power points to maintain your psionic focus when it would otherwise be expended, as described in the feat.", T32, 53, RACIAL),
  f("githyanki-charm", "Githyanki Charm", "race-specific", ["Githyanki", "psionic daze psi-like ability"],
    "You can use psionic charm instead of psionic daze with your githyanki psi-like abilities, as described in the feat.", T32, 55, RACIAL),
  f("githyanki-control", "Githyanki Control", "race-specific", ["Githyanki", "far hand psi-like ability"],
    "You can use control object instead of far hand with your githyanki psi-like abilities, as described in the feat.", T32, 55, RACIAL),
  f("githyanki-dismissal", "Githyanki Dismissal", "race-specific", ["Githyanki", "dimension door psi-like ability"],
    "You can use psionic dismissal instead of dimension door with your githyanki psi-like abilities, as described in the feat.", T32, 55, RACIAL),
  f("githyanki-ectoform", "Githyanki Ectoform", "race-specific", ["Githyanki", "concealing amorpha psi-like ability"],
    "You can use ectoplasmic form instead of concealing amorpha with your githyanki psi-like abilities, as described in the feat.", T32, 55, RACIAL),
  f("githzerai-burst", "Githzerai Burst", "race-specific", ["Githzerai", "catfall psi-like ability"],
    "You can use burst instead of catfall with your githzerai psi-like abilities, as described in the feat.", T32, 55, RACIAL),
  f("githzerai-feedback", "Githzerai Feedback", "race-specific", ["Githzerai", "inertial armor psi-like ability"],
    "You can use biofeedback instead of inertial armor with your githzerai psi-like abilities, as described in the feat.", T32, 56, RACIAL),
  f("githzerai-knock", "Githzerai Knock", "race-specific", ["Githzerai", "concussion blast psi-like ability"],
    "You can use psionic knock instead of concussion blast with your githzerai psi-like abilities, as described in the feat.", T32, 56, RACIAL),
  f("githzerai-link", "Githzerai Link", "race-specific", ["Githzerai", "psionic daze psi-like ability"],
    "You can use mindlink instead of psionic daze with your githzerai psi-like abilities, as described in the feat.", T32, 56, RACIAL),
  f("half-giant-stomp", "Half-Giant Stomp", "race-specific", ["Half-giant", "stomp psi-like ability"],
    "You can use your stomp psi-like ability three times per day.", T32, 56, RACIAL),
  f("half-giant-thunderer", "Half-Giant Thunderer", "race-specific", ["Half-giant", "stomp psi-like ability"],
    "Your stomp psi-like ability is doubly effective, as described in the feat.", T32, 56, RACIAL),
  f("maenad-fury", "Maenad Fury", "race-specific", ["Maenad"],
    "You can use your maenad outburst ability a number of times per day equal to 1 per 2 Hit Dice you have.", T32, 55, RACIAL),
  f("maenad-scream", "Maenad Scream", "race-specific", ["Maenad"],
    "You can use energy ray (sonic) as a psi-like ability a number of times per day equal to 3 + your Cha modifier.", T32, 55, RACIAL),
  f("maenad-deafening-scream", "Maenad Scream, Deafening", "race-specific", ["Maenad"],
    "Your energy ray (sonic) deals +1 damage per damage die and deafens targets that fail their saves, as described in the feat.", T32, 55, RACIAL),
  f("synad-multitask-enhanced", "Synad Multitask, Enhanced", "race-specific", ["Synad"],
    "You can use your synad multitask racial trait two times per day.", T32, 58, RACIAL),
  f("thri-kreen-carapace", "Thri-Kreen Carapace", "race-specific", ["Thri-kreen"],
    "Your natural armor bonus increases by +1.", T32, 58, RACIAL),
  f("thri-kreen-claw", "Thri-Kreen Claw", "race-specific", ["Thri-kreen", "metaphysical claw psi-like ability"],
    "You can use your metaphysical claw psi-like ability three times per day.", T32, 58, RACIAL),
  f("thri-kreen-displacement", "Thri-Kreen Displacement", "race-specific", ["Thri-kreen", "psionic displacement psi-like ability"],
    "You can use your psionic displacement psi-like ability three times per day.", T32, 58, RACIAL),
  f("thri-kreen-poison", "Thri-Kreen Poison", "race-specific", ["Thri-kreen", "poison psi-like ability"],
    "You can use your poison psi-like ability (paralysis venom) three times per day.", T32, 58, RACIAL),
  f("xeph-burst-extra", "Xeph Burst, Extra", "race-specific", ["Xeph"],
    "You can use your xeph burst ability three times per day.", T32, 58, RACIAL),
  f("xeph-celerity", "Xeph Celerity", "race-specific", ["Xeph"],
    "You can use your burst ability to gain an extra attack, as described in the feat.", T32, 59, RACIAL),

  // ---- Table 3-3: General feats ----
  f("dorje-mastery", "Dorje Mastery", "general", ["Craft Dorje", "manifester level 9th"],
    "When you use a dorje, the power manifested is treated as if augmented by 4 additional power points; if the power cannot be augmented, the save DC increases by 2 instead. (Table 3-3 lists only the manifester level prerequisite; the description's Craft Dorje requirement is included here.)", T33, 59),
  f("dual-dorje", "Dual Dorje", "general", ["Craft Dorje", "Two-Weapon Fighting"],
    "As a full-round action you can wield and activate a dorje in each hand (both hands free); each use of the secondary dorje expends 2 charges instead of 1.", T33, 59),
  f("hostile-mind-improved", "Hostile Mind, Improved", "general", ["Cha 15", "Hostile Mind"],
    "Whenever you are targeted by a telepathy power (harmful or not), the manifester must make a Will save (DC 10 + 1/2 your character level + your Cha modifier) and takes damage improved over the base Hostile Mind feat (2d6 additional, per the description), as described in the feat.", T33, 59),
  f("psionic-mastery", "Psionic Mastery", "general", ["Able to manifest powers or use psi-like abilities"],
    "You can take 10 on manifester level checks, as described in the feat.", T33, 59),

  // ---- Table 3-4: Host feats ----
  f("aggressive-mind", "Aggressive Mind", "general", [],
    "Your host entity grants you mind thrust or psionic daze as a psi-like ability once per day.", T34, 60, HOST),
  f("antagonist", "Antagonist", "general", [],
    "Your host entity grants you energy ray or crystal shard as a psi-like ability once per day.", T34, 60, HOST),
  f("defensive-shell", "Defensive Shell", "general", [],
    "Your host entity grants you force screen or empty mind as a psi-like ability once per day.", T34, 60, HOST),
  f("host-focus", "Host Focus", "general", ["Any other host feat"],
    "You can use your host-granted abilities one extra time per day.", T34, 60, HOST),
  f("pacifist", "Pacifist", "general", [],
    "Your host entity grants you deaden blow or entangling ectoplasm as a psi-like ability once per day.", T34, 60, HOST),
  f("spiritual-force-cp", "Spiritual Force", "general", ["Any other host feat", "mind blade class feature"],
    "You can add your Charisma bonus to your mind blade damage for 1 round, as described in the feat.", T34, 60, `${HOST} Not the same feat as the Races of Eberron feat of the same name (a kalashtar mind-blade feat) — this host feat is kept under a suffixed id so both printings remain available; see the REBUILD-NOTES.md Batch 6 addendum.`),
  f("telepathic-affinity", "Telepathic Affinity", "general", [],
    "Your host entity grants you mindlink or detect psionics as a psi-like ability once per day.", T34, 60, HOST),

  // ---- Table 3-5: Illithid heritage feats ----
  f("illithid-heritage", "Illithid Heritage", "general", ["Power point reserve of 1 or more"],
    "Somewhere in the deeps of time your bloodline was touched by illithid influence, and you embrace it: you gain Intimidate as a class skill and a bonus on saves against psionic powers, as described in the feat.", T35, 61, ILLITHID),
  f("illithid-blast", "Illithid Blast", "general", ["Illithid Heritage", "two other illithid feats", "manifester level 5th"],
    "You can convert power points into a mind blast, as described in the feat.", T35, 61, ILLITHID),
  f("illithid-compulsion", "Illithid Compulsion", "general", ["Illithid Heritage"],
    "You gain +1 manifester level and +1 save DC for compulsion powers.", T35, 61, ILLITHID),
  f("illithid-enthusiast", "Illithid Enthusiast", "general", ["Illithid Heritage"],
    "Manifesting powers grants you a bonus on select illithid-related skills, as described in the feat.", T35, 62, ILLITHID),
  f("illithid-grapple", "Illithid Grapple", "general", ["Illithid Heritage", "one other illithid feat"],
    "You gain a natural tentacle attack, as described in the feat.", T35, 62, ILLITHID),
  f("illithid-extraction", "Illithid Extraction", "general", ["Illithid Heritage", "Illithid Grapple"],
    "You gain the ability to extract brains with your tentacles, like a true illithid, as described in the feat. (Table 3-5 prints Illithid Grapple (4) — four tentacles' worth of grapples — in the prerequisite.)", T35, 62, ILLITHID),
  f("illithid-legacy", "Illithid Legacy", "general", ["Illithid Heritage", "one other illithid feat", "manifester level 3rd"],
    "You gain psionic charm and read thoughts as powers known, as described in the feat.", T35, 62, ILLITHID),
  f("illithid-legacy-greater", "Illithid Legacy, Greater", "general", ["Illithid Legacy", "one other illithid feat", "manifester level 7th"],
    "You gain dispel psionics and psionic dominate as powers known, as described in the feat.", T35, 62, ILLITHID),
  f("illithid-skin", "Illithid Skin", "general", ["Illithid Heritage"],
    "Your natural armor bonus increases by 1.", T35, 62, ILLITHID),

  // ---- Table 3-6: Metapsionic feats ----
  f("knockdown-power", "Knockdown Power", "metamagic", [],
    "Expend your psionic focus: a power modified by this feat knocks creatures caught in its area prone if they fail their saving throw against its damage. Applies only to powers that allow Reflex saves and affect an area.", T36, 62, META),
  f("linked-power", "Linked Power", "metamagic", [],
    "Expend your psionic focus: manifest a power now and a linked power that goes off next round on the area or target you choose this round, as described in the feat.", T36, 63, META),
  f("metapower", "Metapower", "metamagic", ["Able to manifest psionic powers", "any other metapsionic feat"],
    "Permanently improve one psionic power with a metapsionic feat you know, reducing its power point cost, as described in the feat.", T36, 63, META),
  f("paraelemental-power", "Paraelemental Power", "metamagic", ["Privileged Energy"],
    "Expend your psionic focus: when you manifest a damaging power of your privileged energy type, you can access paraelemental energy instead — ice (cold), magma (fire), ooze (electricity), or smoke (sonic) — enhancing the power as described in the feat.", T36, 63, META),
  f("phrenic-leech", "Phrenic Leech", "metamagic", [],
    "A power modified by this feat drains 1d6 power points from the foe and gives 1 to you, as described in the feat.", T36, 63, META),
  f("stygian-power", "Stygian Power", "metamagic", ["Know two negative energy powers", "Stygian Archon"],
    "Foes are shaken when you manifest stygian (negative energy) powers modified by this feat, as described in the feat.", T36, 64, META),
  f("transdimensional-power", "Transdimensional Power", "metamagic", [],
    "Your powers can affect targets in coexistent planes and extradimensional spaces, as described in the feat.", T36, 64, META),

  // ---- Epic feats (Chapter 6) ----
  f("improved-overchannel", "Improved Overchannel", "general", ["Overchannel", "Psicraft 25 ranks"],
    "While manifesting a power, you can increase your effective manifester level to a value up to twice your actual manifester level; for each level of increase, you take 2d8 points of damage.", TEPIC, 157, EPIC),
  f("automatic-quicken-power", "Automatic Quicken Power", "metamagic", ["Quicken Power", "Psicraft 30 ranks", "ability to manifest 9th-level powers"],
    "You can manifest all your 1st-level powers as quickened powers without expending your psionic focus (though you must be psionically focused). You can take this feat multiple times; each time, the powers of your next level can be quickened without expenditure of psionic focus.", TEPIC, 157, `${EPIC} Metapsionic feat.`),
  f("epic-power-penetration", "Epic Power Penetration", "general", ["Greater Power Penetration", "Power Penetration"],
    "You gain a +2 bonus on manifester level checks made to overcome a creature's power resistance; this stacks with the bonuses from Power Penetration and Greater Power Penetration.", TEPIC, 157, EPIC),
  f("epic-psionic-endowment", "Epic Psionic Endowment", "general", ["Greater Psionic Endowment", "Psionic Endowment", "ability to manifest at least one 9th-level power"],
    "You can expend your psionic focus to add 1 to the save DC of a power you manifest; this bonus stacks with those from Psionic Endowment and Greater Psionic Endowment.", TEPIC, 157, EPIC),
  f("improved-combat-manifestation", "Improved Combat Manifestation", "general", ["Combat Manifestation", "Concentration 25 ranks"],
    "You gain a bonus equal to one-half your manifester level on Concentration checks made to manifest a power, use a psi-like ability, or achieve psionic focus while on the defensive or while grappling or pinned.", TEPIC, 157, EPIC),
];
