// Dragon Magazine #351 (January 2007) — magic item draft: 20 records.
// ONE Al-Qadim minor artifact — the issue's Al-Qadim article (Wolfgang
// Baur), pp. 28-31: the phoenix feather. Per the brief's Al-Qadim
// line, Arabian generic mechanics stage as core with lore stripped;
// the feather's three uses are generic fire/resurrection mechanics.
// FOUR Volo's Guide thrones — "Volo's Guide: Lost Regalia of the
// North: The Toppled Thrones" (Eric L. Boyd), pp. 72-75. Forgotten
// Realms is the base canon, so these stage as core. (The program
// survey estimated ~8 Volo's items; the article prints four thrones —
// see MANIFEST.md.) ⚠️ APOC FLAGS — see SCREENING.md §9: the Bloodbone
// Throne's construction prerequisites include planar ally, a calling
// spell, under severed-planar canon (staged as printed, per the
// issue-331 vehicle precedent); the Soaring Throne flies, and flight
// is barred over the Bastion by the Melairshield (staged as printed,
// as an item).
// FIFTEEN technomagical implants — "Class Acts: The Clockwork
// Disciple" (Stephanie Vergamini), pp. 92-93, gated by the
// Technomagical Implant feat (feats-draft.ts). Implants are relics
// that can no longer be created; they are found only as treasure.
// Each record carries its printed kind (minor/major), its body slot,
// and its printed price (the article prices implants as magic items
// with a 25% reduction because a feat is required to use them — hence
// the irregular prices, e.g. 2,062 gp and 20,625 gp).
// HELD, not staged: the two Kara-Tur items (chrysanthemum blade,
// monkey head talisman — reference.md §6, in full) and the five
// Dragonlance Icons of Symeon (reference.md §4, in full), under the
// brief's hard lines for those settings.
// Summaries are faithful mechanical paraphrases in our own words,
// each carrying the printed aura/CL/construction line where the
// article prints one; no magazine prose is reproduced.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_ALQADIM = "Dragon Magazine #351 — Al-Qadim (Wolfgang Baur), pp. 28-31";
const SRC_VOLO = "Dragon Magazine #351 — Volo's Guide: Lost Regalia of the North: The Toppled Thrones (Eric L. Boyd), pp. 72-75";
const SRC_CLOCKWORK = "Dragon Magazine #351 — Class Acts: The Clockwork Disciple (Stephanie Vergamini), pp. 92-93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_VOLO,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

const IMPLANT_FRAME =
  "Technomagical implant (treasure only — the technology can no longer be created; requires the Technomagical Implant feat).";

export const DRAGON_351_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Al-Qadim: minor artifact (1) ----
  M({
    id: "phoenix-feather",
    name: "Phoenix Feather",
    category: "artifact",
    source: SRC_ALQADIM,
    summary:
      "Minor artifact — a foot-long feather of golden and crimson plumage. Using the feather destroys it. It has three possible uses: (1) scribe a scroll of any fire spell of any level, as if you were a 24th-level caster, without needing the Scribe Scroll feat or knowledge of the spell; (2) brandish it to turn (never rebuke) undead or creatures of the water subtype as a 24th-level cleric with the Fire domain — a ghost destroyed this way cannot rejuvenate; or (3) cast true resurrection (caster level 24th; requires 10 minutes of concentration). Overwhelming transmutation; CL 24th; Weight —.",
  }),
  // ---- Volo's Guide: the Toppled Thrones (4) ----
  M({
    id: "bloodbone-throne",
    name: "Bloodbone Throne of Uruth",
    cost: "91,000 gp",
    summary:
      "Wondrous item — a throne built of skulls and bones. The seated occupant gains the following powers: unholy aura once per day; speak with the authority of greater command at will (as the spell); the throne's skulls belch a cloud like unholy blight three times per day; an occupant who remains seated for 3 or more consecutive rounds gains the death dragon cocoon effect (Magic of Faerûn) upon arising; and once per day the throne can unleash a torrent of blood that forms a blood elemental (treat as a water elemental of the same size, except a successful attack ignites the victim's blood for 1 round, dealing +1d6 fire damage) — the elemental is Small after 1 round of flow, Medium after 2 rounds, Large after 4 rounds, and Huge after 8 or more rounds. Strong varied; CL 15th; Craft Wondrous Item, burning blood (Spell Compendium), death dragon, greater command, planar ally, unholy aura, unholy blight; Weight 4,000 lb. APOC: construction requires planar ally, a calling spell, under severed-planar canon — staged as printed, flagged in SCREENING.md §9.",
  }),
  M({
    id: "kingthrone",
    name: "Kingthrone (Shining Throne of Splendarrmorn)",
    cost: "372,200 gp",
    summary:
      "Wondrous item — a throne that is also a golem. A seated occupant can use one of its powers each round, chosen by silent act of will: commune with earth, divine power, or silverbeard (Magic of Faerûn). Shared with the Queenthrone: the occupant can merge into the seat (as meld into stone) and can animate the throne as an iron golem under the occupant's control; if the golem is slain, the occupant is expelled unharmed. Strong varied; CL 16th; Craft Magic Arms and Armor, Craft Wondrous Item, cloudkill, commune with earth (Races of Faerûn), divine power, geas/quest, limited wish, meld into stone, polymorph any object, silverbeard; creator must be a dwarf; Weight 5,000 lb.",
  }),
  M({
    id: "queenthrone",
    name: "Queenthrone (Shining Throne of Splendarrmorn)",
    cost: "490,100 gp",
    summary:
      "Wondrous item — as the Kingthrone, except that the seated occupant's per-round powers are spell resistance, stone tell, and stoneskin instead of the Kingthrone's list; the shared merge-into-seat and animate-as-iron-golem powers are the same. Strong varied; CL 16th; Craft Magic Arms and Armor, Craft Wondrous Item, cloudkill, geas/quest, limited wish, meld into stone, polymorph any object, spell resistance, stone tell, stoneskin; creator must be a dwarf; Weight 5,000 lb.",
  }),
  M({
    id: "soaring-throne",
    name: "Soaring Throne of the Witch-Queen",
    cost: "617,150 gp",
    summary:
      "Wondrous item — a throne of glassteel in the shape of a griffon (hardness 20, 40 hit points per inch of thickness). A seated user can activate one of the following at will, once per round: Mordenkainen's sword, shield, spell turning, or whispering wind. The throne also functions as a figurine of wondrous power (with no size change), transforming into an advanced 15 HD griffon for up to 8 hours per day; if the griffon is slain, the throne reverts to its intact form and cannot reanimate for 10 days. Strong transmutation; CL 13th; Craft Wondrous Item, animate objects, Mordenkainen's sword, shield, spell turning, whispering wind; Weight 5,000 lb. APOC: a flying throne — flight is barred over the Bastion by the Melairshield; staged as printed, as an item.",
  }),
  // ---- Class Acts: The Clockwork Disciple — technomagical implants (15) ----
  M({
    id: "implant-quickdisk",
    name: "Quickdisk (Technomagical Implant)",
    cost: "1,000 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Minor implant, worn in the necklace (amulet) body slot. Grants a +2 bonus on initiative checks.",
  }),
  M({
    id: "implant-farseer",
    name: "Farseer (Technomagical Implant)",
    cost: "1,350 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Minor implant, worn in the eye lenses body slot. Grants a +3 competence bonus on Spot and Search checks.",
  }),
  M({
    id: "implant-fleshbound-steelscales",
    name: "Fleshbound Steelscales (Technomagical Implant)",
    cost: "1,500 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the vest body slot. Grants a +1 enhancement bonus to natural armor.",
  }),
  M({
    id: "implant-shockrod",
    name: "Shockrod (Technomagical Implant)",
    cost: "1,500 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the bracers body slot. Your melee touch attacks and unarmed strikes deal +1d6 points of electricity damage; you take half that amount as nonlethal damage each time you strike.",
  }),
  M({
    id: "implant-cheetahs-swiftness",
    name: "Cheetah's Swiftness (Technomagical Implant)",
    cost: "2,062 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME + " Minor implant, worn in the boots body slot. Increases your base land speed by 5 feet.",
  }),
  M({
    id: "implant-masters-edge",
    name: "Master's Edge (Technomagical Implant)",
    cost: "3,000 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Minor implant, worn in the headband body slot. Grants a +2 bonus on one skill, determined when the implant is found.",
  }),
  M({
    id: "implant-tremorsense-disk",
    name: "Tremorsense Disk (Technomagical Implant)",
    cost: "4,000 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME + " Major implant, worn in the boots body slot. Grants tremorsense out to 20 feet.",
  }),
  M({
    id: "implant-levitation-pads",
    name: "Levitation Pads (Technomagical Implant)",
    cost: "5,625 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME + " Minor implant, worn in the boots body slot. You can levitate at will, as the spell.",
  }),
  M({
    id: "implant-force-blast-generator",
    name: "Force-Blast Generator (Technomagical Implant)",
    cost: "6,450 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the headband body slot. You can release a 10-foot-radius explosion of force centered on yourself, making a bull rush attempt against every creature within 10 feet with a bonus of 3 + your Charisma modifier.",
  }),
  M({
    id: "implant-arcane-deflection",
    name: "Arcane Deflection (Technomagical Implant)",
    cost: "17,275 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the vest body slot. Up to 3 times per day, a spell or effect that targets you has a 25% chance to rebound on its caster, as a ring of spell turning.",
  }),
  M({
    id: "implant-divine-body",
    name: "Divine Body (Technomagical Implant)",
    cost: "20,625 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the bracers or boots body slot. Grants a +1 inherent bonus to one physical ability score, determined by roll (1d6) when the implant is found: Strength (1-2), Dexterity (3-4), or Constitution (5-6).",
  }),
  M({
    id: "implant-divine-mind",
    name: "Divine Mind (Technomagical Implant)",
    cost: "20,625 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the headband body slot. Grants a +1 inherent bonus to one mental ability score, determined by roll (1d6) when the implant is found: Intelligence (1-2), Wisdom (3-4), or Charisma (5-6).",
  }),
  M({
    id: "implant-shocking-field-lesser",
    name: "Shocking Field, Lesser (Technomagical Implant)",
    cost: "21,000 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Minor implant, worn in the vest body slot. Creatures that strike you in melee take 1d4 points of electricity damage; attackers using reach weapons are exempt. You cannot have both a lesser and a greater shocking field installed.",
  }),
  M({
    id: "implant-darkeye-lenses",
    name: "Darkeye Lenses (Technomagical Implant)",
    cost: "22,500 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the eye lenses body slot. You are immune to blindness and gain a +2 enhancement bonus on saving throws against gaze attacks.",
  }),
  M({
    id: "implant-shocking-field-greater",
    name: "Shocking Field, Greater (Technomagical Implant)",
    cost: "42,000 gp",
    source: SRC_CLOCKWORK,
    summary:
      IMPLANT_FRAME +
      " Major implant, worn in the vest body slot. As the lesser shocking field (melee attackers take 1d4 points of electricity damage, reach weapons exempt), and in addition an attacker must succeed at a Fortitude save (DC = 1/2 your character level + your Constitution modifier) or be stunned for 1 round. You cannot have both a lesser and a greater shocking field installed.",
  }),
];
