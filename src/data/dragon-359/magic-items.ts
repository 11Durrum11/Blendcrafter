// Dragon Magazine #359 (September 2007) — magic item draft: 13 records.
//
// TWELVE items from the feature "Treasures of Greyhawk: Magic of the
// Company of Seven" (Gary Holian & Rick Miller), pp. 70-77 — magic
// items of Greyhawk's legendary Company of Seven (Heward, Keoghtom,
// Murlynd, Nolzur, Quaal, Tasha, and Yragerne's signet), in Magic Item
// Compendium format. Greyhawk lore is stripped; mechanics stage as
// printed, per the brief — discrete hoard/company items stage (old
// kills and hoards exist in the badlands; cf. #344 wyrm gear). The
// Robe of the Mad Archmage is a printed minor artifact and stages in
// the artifact category per the #312/#317 artifact precedent.
// ONE item from "Class Acts — Warrior: The Universal Key" (Jeremy
// Walker), p. 123: the skeleton key.
//
// ⚠️ APOC FLAGS — see SCREENING.md: Heward's bell works by summoning
// and banishment (summon monster VI, unseen servant, dismissal of
// summoned creatures) under sealed-sphere canon — staged as printed
// and flagged, per the #331 vehicle posture. Keoghtom's spidery map
// carries printed planar/extra-dimensional limits that are inert
// flavor under APOC canon; the item itself is a divination tool.
//
// ⚠️ OCR CAUTION: extracted from the archive.org OCR text stream, not
// rendered page images. Known soft spots, all flagged in SCREENING.md:
// Keoghtom's spidery map's item level prints as "26th" (impossible —
// treated as a print/OCR error and flagged); Keoghtom's staff of
// purification's cost to create (26,125 gp) diverges from the usual
// half-price norm and is carried as printed; Murlynd's rattlesnake
// whip's XP cost is carried as printed; Quaal's armor's item level
// and armor-check line are partially garbled (armor check penalty
// reconciles to 0 through the mithral + twilight properties).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_GREYHAWK = "Dragon Magazine #359 — Treasures of Greyhawk: Magic of the Company of Seven (Gary Holian & Rick Miller), pp. 70-77";
const SRC_KEY = "Dragon Magazine #359 — Class Acts: The Universal Key (Jeremy Walker), p. 123";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_GREYHAWK,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_359_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Treasures of Greyhawk (12) ----
  M({
    id: "hewards-bell",
    name: "Heward's Bell",
    cost: "37,680 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 37,680 gp (17th); Aura: strong (DC 22) abjuration and conjuration; Caster Level: 15th; Activation: — (use activated); Weight: 2 lb. Ringing the bell 3/day summons an unseen servant for 1 hour. 1/day, ringing it twice dismisses or banishes any summoned creature within 60 feet (Will save, DC = 26 - the creature's HD). 1/day, a bard keeping time with the bell may cast summon monster VI on a successful DC 26 Perform check. Prerequisites: Craft Wondrous Item, dismissal, summon monster VI, unseen servant; creator must have 10 ranks in Perform. Cost to Create: 18,840 gp, 1,508 XP. APOC: two of this item's three functions are summoning functions and the second banishes creatures to their home plane — under the sealed crystal sphere, summoning does not work; staged as printed and flagged prominently in SCREENING.md.",
  }),
  M({
    id: "hewards-lyre-of-truth",
    name: "Heward's Lyre of Truth",
    cost: "28,280 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 28,280 gp (16th); Aura: strong (DC 19) abjuration and conjuration (healing); Caster Level: 8th; Activation: standard; Weight: 4 lb. While played, the lyre maintains a continuous zone of truth (DC 13). 2/day, by plucking a single string, the player can target anyone within 60 feet with discern lies (DC 16). 1/day, by playing a tune with the string tension loosened, the player gains the benefit of glibness. Prerequisites: Craft Wondrous Item, discern lies, glibness, zone of truth. Cost to Create: 14,140 gp, 1,131 XP.",
  }),
  M({
    id: "keoghtoms-spidery-map",
    name: "Keoghtom's Spidery Map",
    cost: "26,400 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 26,400 gp (item level prints as \"26th\" in the source scan — an impossible value treated as a print/OCR error and flagged in SCREENING.md; the item's price and CL sit in the 16th-level band); Aura: strong (DC 20) divination; Caster Level: 11th; Activation: full-round; Weight: —. Concentrate on a location, creature, or object and the map displays the route to it in the detail of a find the path spell, 1/day. The map refuses to locate Keoghtom, any deity, or Keoghtom's extradimensional home, and cannot see beyond the current plane. Prerequisites: Craft Wondrous Item, find the path. Cost to Create: 13,200 gp, 1,056 XP. APOC: the printed planar limits are inert flavor under the sealed sphere; no rewrite made.",
  }),
  M({
    id: "keoghtoms-staff-of-purification",
    name: "Keoghtom's Staff of Purification",
    category: "staff",
    cost: "47,250 gp",
    summary:
      "Staff. Price (Item Level): 47,250 gp (17th); Aura: strong (DC 21) abjuration and conjuration (healing); Caster Level: 12th; Activation: standard; Weight: 4 lb. This staff holds 50 charges. Touching it to a liquid purifies maladies in the manner of purify food and drink without destroying the liquid's magical qualities (2 charges). It also allows the use of the following spells: restoration (1 charge), break enchantment (2 charges), heal (2 charges). Prerequisites: Craft Staff, break enchantment, heal, restoration. Cost to Create: 26,125 gp, 1,690 XP (cost to create as printed — it diverges from the standard half-of-price norm and is flagged in SCREENING.md).",
  }),
  M({
    id: "murlynds-hat",
    name: "Murlynd's Hat",
    cost: "72,000 gp",
    summary:
      "Wondrous item (head). Price (Item Level): 72,000 gp (19th); Aura: moderate (DC 19) transmutation; Caster Level: 9th; Activation: move; Weight: 1 lb. The wearer gains a +2 insight bonus to AC and a +2 insight bonus on Will saves against charms and mind-affecting enchantments, and can use fabricate 3/day. Prerequisites: Craft Wondrous Item, fabricate, foresight; creator must have 10 ranks in Craft (alchemy). Cost to Create: 36,000 gp, 2,880 XP.",
  }),
  M({
    id: "murlynds-rattlesnake-whip",
    name: "Murlynd's Rattlesnake Whip",
    category: "weapon",
    cost: "72,301 gp",
    summary:
      "Weapon (no body slot). Price (Item Level): 72,301 gp (20th); Aura: moderate (DC 19) conjuration and transmutation; Caster Level: 9th; Activation: —; Weight: 1 lb. A +3 disarming sweeping whip. The wielder gains a +2 competence bonus on disarm attempts and on Strength checks to trip with the whip, and cannot be disarmed of it. The whip is prehensile: it can grasp items, operate levers and handles, and lower its wielder as a rope, and it can grapple a target at 10 feet range on a successful grapple check. Prerequisites: Craft Magic Arms and Armor, bull's strength, web. Cost to Create: 36,301 gp, 2,880 XP (XP cost as printed — flagged in SCREENING.md).",
  }),
  M({
    id: "nolzurs-orb",
    name: "Nolzur's Orb",
    cost: "60,400 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 60,400 gp (18th); Aura: strong (DC 22) conjuration and illusion; Caster Level: 15th; Activation: standard; Weight: 1 lb. The orb continually seeps paints that act as Nolzur's marvelous pigments 1/day; the paints also grant a +10 competence bonus on Disguise checks for up to 30 minutes while in use. 1/day, the wielder can fling the paints as a prismatic spray (60 ft.). Paints stored elsewhere lose all but their normal pigment properties. Prerequisites: Craft Wondrous Item, disguise self, major creation, prismatic spray. Cost to Create: 30,200 gp, 2,416 XP.",
  }),
  M({
    id: "quaals-cloak",
    name: "Quaal's Cloak",
    cost: "29,200 gp",
    summary:
      "Wondrous item (shoulders). Price (Item Level): 29,200 gp (16th); Aura: strong (DC 21) conjuration; Caster Level: 12th; Activation: standard; Weight: 1 lb. The cloak provides a continuous feather fall effect. Any feather removed from the cloak acts as a Quaal's feather token; the cloak begins with 50 charges, and each feather removed drains one charge. Prerequisites: Craft Wondrous Item, feather fall, major creation. Cost to Create: 14,600 gp, 1,168 XP.",
  }),
  M({
    id: "quaals-surreptitious-armor-of-expedience",
    name: "Quaal's Surreptitious Armor of Expedience",
    category: "armor",
    cost: "65,250 gp",
    summary:
      "Armor (torso). Price (Item Level): 65,250 gp (item level lost in the source scan — flagged in SCREENING.md); Aura: strong (DC 21) transmutation; Caster Level: 12th; Activation: standard; Weight: 12.5 lb. A +4 twilight mobility mithral chain shirt (+8 armor bonus total); per the item text, the twilight property completely negates its arcane spell failure chance, and mithral with twilight reduces its armor check penalty to 0. The wearer gains the benefit of the Mobility feat without needing its prerequisites, and can use fly and longstrider as spell-like abilities 1/day each. Prerequisites: Craft Magic Arms and Armor, cat's grace, fly, longstrider. Cost to Create: 33,250 gp, 2,560 XP.",
  }),
  M({
    id: "robe-of-the-mad-archmage",
    name: "Robe of the Mad Archmage",
    category: "artifact",
    cost: "—",
    summary:
      "Minor artifact (torso). Price: — (artifact); Aura: strong (DC 25) divination and transmutation; Caster Level: 20th; Activation: move; Weight: 1 lb. An intelligent robe of blending. The wearer gains a +2 bonus on rolls to overcome spell resistance and a +5 insight bonus to AC and on all saving throws. 3/day, the wearer can cast a quickened spell of up to 9th level without increasing the spell's level or casting time (spells already prepared with metamagic cannot be so quickened). The robe can also store up to 10 spell levels, as a ring of spell storing. Intelligence 18, Wisdom 10, Charisma 18; it speaks Abyssal, Ancient Suloise, Celestial, Common, Draconic, and Flan, communicates by telepathy, and has darkvision and hearing to 120 ft. and blindsense 120 ft. Alignment: CN. Its personality conflicts with a wearer who tries to remove it to don another magical garment.",
  }),
  M({
    id: "tashas-grinning-idol",
    name: "Tasha's Grinning Idol",
    cost: "28,000 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 28,000 gp (16th); Aura: moderate (DC 19) enchantment; Caster Level: 9th. The bearer gains a +10 competence bonus on Bluff and Diplomacy checks and a +2 bonus to the DC of all enchantment spells he casts. Prerequisites: Craft Wondrous Item, Greater Spell Focus (enchantment), charm person; creator must have 10 ranks in Diplomacy. Cost to Create: 14,000 gp, 1,120 XP.",
  }),
  M({
    id: "yragerne-signet",
    name: "Yragerne Signet",
    category: "ring",
    cost: "15,200 gp",
    summary:
      "Ring (fingers). Price (Item Level): 15,200 gp (14th); Aura: strong (DC 21) abjuration and necromancy; Caster Level: 7th; Activation: move; Weight: —. The ring provides continuous protection from evil and protection from good. 1/day, spinning the ring face-down activates death ward. Prerequisites: Forge Ring, death ward, protection from evil, protection from good. Cost to Create: 7,600 gp, 608 XP.",
  }),
  // ---- The Universal Key (1) ----
  M({
    id: "skeleton-key",
    name: "Skeleton Key",
    source: SRC_KEY,
    cost: "4,500 gp",
    summary:
      "Wondrous item (held, no slot). Price (Item Level): 4,500 gp (9th — read as \"oth\" in the source scan; the price band and CL support 9th, flagged in SCREENING.md); Aura: faint (DC 17) transmutation; Caster Level: 3rd; Activation: 1 full-round action; Weight: 1 lb. This unusual object has two distinct parts: a small metal handle and a thin blade about 4 inches long, made of a shiny blue material whose surface ripples and shifts like the surface of water. The skeleton key is commonly found in the possession of doppelgangers and their ilk, who have an affinity with its shapeshifting properties. When inserted into a common door lock, the blade ripples and writhes into the precise shape of the key needed to open the lock, even if the lock is much bigger or much smaller than the blade. Any lock that can be unlocked with a physical key can also be unlocked with a skeleton key. Prerequisites: Craft Wondrous Item, knock; creator must have the shapechanger subtype. Cost to Create: 2,250 gp, 180 XP.",
  }),
];
