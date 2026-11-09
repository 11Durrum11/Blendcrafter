import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #316 pack (library-staging/packs/dragon-magazine/issue-316)
// The issue's fourteen magic item records, all from "Cloak and
// Dagger" (pp. 38–47): one weapon special ability (Forgetful) and
// thirteen wondrous items. Every aura, caster level, prerequisite,
// and price below was verified against the printed page images of
// the magazine (archive.org scan) — the OCR text garbled several
// stat lines, and one checkpoint reading (Amulet of Authority
// CL 3rd) was corrected by the print to CL 5th. See MANIFEST.md.
//
// COLLISIONS (see MANIFEST.md):
//   * "forgetful" is held in the catalog by an unrelated flaw
//     (src/data/flaws-traits/flaws.ts), so the weapon property
//     stages as forgetful-316.
//   * "clockwork-messenger" is held by a different item (an
//     Unapproachable East–era bomb-cart record), so the spy raven
//     stages as clockwork-messenger-316.
//   * Necklace of Inflection's price reads 160,000 gp in print
//     (verified on the page image) — high, but that is the printed
//     figure; it is carried as printed and flagged in MANIFEST.md.
//   * Clockwork Messenger's caster level is OCR-garbled in the
//     magazine text ("CL nth"); CL 11th is carried because its
//     prerequisites include two 6th-level spells (animate object,
//     find the path). Flagged in MANIFEST.md as the one number in
//     this file resting on reconstruction rather than a legible
//     reading.
//
// Transcribed from the magazine text on archive.org
// (DragonMagazine316_djvu.txt) and the printed page images.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

const DM316 = "Dragon Magazine #316";
const DM316_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine316_djvu.txt";

export const DRAGON_316_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "forgetful-316",
    name: "Forgetful",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary: "On a critical hit with a forgetful weapon, the creature struck must succeed on a DC 20 Fortitude save or lose all memory of the events that occurred within the previous hour, including faces, actions, and names. The creature may defend itself normally and does not lose prepared spells because of this ability, regardless of when they were prepared. Moderate enchantment; CL 7th; Craft Magic Arms and Armor, modify memory; Price +1 bonus. (Id suffixed: the catalog's \"forgetful\" is an unrelated flaw — see MANIFEST.md.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "amulet-of-authority",
    name: "Amulet of Authority",
    category: "wondrous item",
    cost: "6,250 gp",
    summary: "Three times per day, the user can change the appearance of this amulet, causing it to appear as any symbol or badge that he has seen before. While so disguised, it grants the wearer a +10 bonus on Bluff and Intimidate checks made to pass himself off as a person of authority in an organization the opponent is familiar with; against opponents unfamiliar with the group, the bonus is only +5. Faint transmutation; CL 5th; Craft Wondrous Item, glibness, silent image; Price 6,250 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "amulet-of-dramatic-death",
    name: "Amulet of Dramatic Death",
    category: "wondrous item",
    cost: "70,000 gp",
    summary: "This amulet activates when the wearer sustains enough damage to nearly kill her (reduced to -1 hit points or less): it negates enough of the damage from the attack to bring the wearer to 0 hit points, and she instantly gains the benefit of a mislead spell, except that the illusory double appears in place of the wearer, falling prone in a convincing display of death, while the wearer is teleported 30 feet away in a random direction, invisible (per mislead), able to limp away to safety. The teleport effect never places the wearer in danger; if she reaches -1 hit points in an environment with no safe area within 30 feet, the mislead effect begins with the wearer occupying the same space as her illusory double. Any ability that would normally penetrate mislead automatically pierces the illusory effects of the amulet. An amulet of dramatic death is built with three charges; one found as part of treasure typically has 1d2 charges remaining. Moderate illusion; CL 11th; Craft Wondrous Item, mislead, teleport; Price 70,000 gp; Weight —.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "chime-of-secrecy",
    name: "Chime of Secrecy",
    category: "wondrous item",
    cost: "12,600 gp",
    summary: "When struck, this plain metal chime not only produces no sound, it also dampens other noise within the area. Once per day, the user can strike the chime to produce a zone of silence. In addition, while this effect is active, the user becomes aware of any scrying attempt as if affected by the detect scrying spell. Moderate divination and illusion; CL 7th; Craft Wondrous Item, detect scrying, zone of silence; Price 12,600 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "clockwork-messenger-316",
    name: "Clockwork Messenger",
    category: "wondrous item",
    cost: "4,500 gp",
    summary: "This intricate clockwork device resembles a full-sized raven and has a small concealed hollow in its body that can accommodate a Fine object, such as a folded map or vial. On command, the messenger animates, becoming a construct with the same ability scores as a raven except that it has no Constitution score. In this configuration it can memorize a spoken message that takes up to 1 hour to recite; once the message is complete, the user names the location of the intended recipient, and the messenger flies nonstop to that destination by the most direct route and repeats the message in its activator's voice. Once per day, the messenger may use freedom of movement (caster level 7th) to escape capture or impediments. The messenger cannot attack; it has a +5 natural armor bonus, hardness 10, and 1 hit point. Moderate divination and transmutation; CL 11th; Craft Wondrous Item, animate object, find the path, freedom of movement, message; Price 4,500 gp. (Id suffixed: the catalog's \"clockwork-messenger\" is a different item — see MANIFEST.md. Caster level reconstructed; see MANIFEST.md.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "diplomatic-pouch",
    name: "Diplomatic Pouch",
    category: "wondrous item",
    cost: "30,000 gp",
    summary: "A large, finely crafted leather purse with a metal clasp and lock, embossed with the symbol of the nation that owns it and covered in arcane sigils; it can hold items weighing up to 10 pounds. Despite its fragile appearance, the pouch has damage reduction 10/magic, acid resistance 10, and fire resistance 10. The lock (Open Lock DC 30) resists knock and dispel magic spells as if it had spell resistance 15, and a failed Open Lock check made to pick the lock releases a powerful shock that deals 5d6 points of electricity damage. Strong abjuration; CL 9th; Craft Wondrous Item, arcane lock, resist energy, shocking grasp, spell resistance; Price 30,000 gp; Weight 2 lb.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "elixir-of-perception",
    name: "Elixir of Perception",
    category: "wondrous item",
    cost: "1,000 gp",
    summary: "Consuming this liquid enhances the imbiber's senses for 1 hour, granting a +4 bonus on Open Lock and Disable Device checks, and a +4 bonus on Spot, Search, and Listen checks. Faint transmutation; CL 3rd; Craft Wondrous Item, cat's grace, fox's cunning, owl's wisdom; Price 1,000 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "eyepiece-of-the-clear-wall",
    name: "Eyepiece of the Clear Wall",
    category: "wondrous item",
    cost: "15,000 gp",
    summary: "This hollow metal cone is 6 inches long and 4 inches across at the wide end, which is fitted with a clear crystal. Anyone who places the wide end against a solid object, such as a wall or chest, can peer through the narrow end and see what is on the other side of the intervening barrier: the eyepiece allows the user to peer through up to 6 inches of stone or masonry, 1 foot of wood, or 1 inch of metal; if the barrier exceeds those limits, the viewer sees only darkness. The eyepiece is usable three times per day, and the effect lasts for as long as it is pressed against the object. Faint divination; CL 3rd; Craft Wondrous Item, clairaudience/clairvoyance; Price 15,000 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "earpiece-of-the-hollow-wall",
    name: "Earpiece of the Hollow Wall",
    category: "wondrous item",
    cost: "15,000 gp",
    summary: "This earpiece looks like the eyepiece of the clear wall, except that the wide end is covered with a thin, durable skin. Anyone who places the earpiece against a wall or door can hear sounds as if he were standing on the other side of the intervening barrier. The earpiece has the same thickness limitations as the eyepiece of the clear wall. Faint divination; CL 3rd; Craft Wondrous Item, clairaudience/clairvoyance; Price 15,000 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "homing-bag",
    name: "Homing Bag",
    category: "wondrous item",
    cost: "55,000 gp",
    summary: "When the command word for this item is spoken, the homing bag and any items contained within are magically teleported to a specific location; the destination must be within ten miles of the homing bag for the magic to work. About the size of a large coin purse, a homing bag can hold up to 20 pounds of items, and the bearer can set a new destination for items in the bag once per day as a standard action. Spies use homing bags to send messages and important items back to their employers — or to transport an item into a well-guarded location. Strong transmutation; CL 13th; Craft Wondrous Item, teleport object; Price 55,000 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "mantle-of-the-mundane",
    name: "Mantle of the Mundane",
    category: "wondrous item",
    cost: "10,000 gp",
    summary: "This cloak makes the wearer appear completely commonplace — so average that he receives a +10 bonus on Hide checks while wearing it and attempting to blend into a crowd. In addition, those attempting to place or remember the wearer later must make a DC 14 Will save to actually remember any details about the individual, including hair or eye color, dress, possessions, height, weight, or even gender. Faint illusion; CL 3rd; Craft Wondrous Item, invisibility; Price 10,000 gp; Weight 1 lb.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "necklace-of-inflection",
    name: "Necklace of Inflection",
    category: "wondrous item",
    cost: "160,000 gp",
    summary: "This slender gold choker is set with a small emerald covering the center of the wearer's throat. When worn, the necklace allows the wearer to understand and speak any language she hears spoken. In addition, if the wearer spends 1 minute listening to a particular creature, she may choose to precisely mimic its speech patterns, gaining a +10 bonus on Bluff checks made to pass herself off as that creature. The necklace is most commonly worn with a disguise. Faint transmutation; CL 5th; Craft Wondrous Item, glibness, tongues; Price 160,000 gp. (Price as printed — verified on the page image; see MANIFEST.md.)",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "scabbard-of-deception",
    name: "Scabbard of Deception",
    category: "wondrous item",
    cost: "16,000 gp",
    summary: "This unadorned and slightly battered scabbard appears to be the correct size to accommodate a longsword, but it can grow or shrink to hold any straight-bladed weapon, from a dagger to a greatsword sized for a Large creature. On command, the scabbard and the weapon inside it take on the appearance of an innocuous, nonweapon item of roughly the same size, such as a walking stick, a tool, or a scroll case (user's choice). This illusion remains in effect for as long as the scabbard is in the owner's possession, or until the weapon is drawn. In addition, the scabbard and the weapon it holds are protected by a Nystul's magic aura effect to make them seem nonmagical. Faint illusion; CL 5th; Craft Wondrous Item, major image, Nystul's magic aura; Price 16,000 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
  {
    id: "vellum-of-copying",
    name: "Vellum of Copying",
    category: "wondrous item",
    cost: "13,500 gp",
    summary: "Made from the same superior material as tracing vellum and coming in the same 1-foot square sheets, a vellum of copying placed on top of a document, book, or map reproduces the text and images with near-perfect clarity (a viewer can detect that it is a copy with a DC 30 Forgery check). It can also copy the text from magic scrolls and spellbooks, though none of the actual magic is transferred — reproduced spells cannot be cast or memorized from the vellum, but a spellcaster can use read magic to discern their nature. Copying a page requires a full-round action. A single sheet can store up to fifty pages of copied text, which the user can access with a mental command; once the storage capacity has been reached, the next attempt to copy text destroys the vellum, and copied text may not be erased or replaced with new text. The vellum can also act as a translating device: the user may expend two pages' worth of text capacity to cause one page of copied text to appear in any one written language that he knows. Faint illusion; CL 5th; Craft Wondrous Item, comprehend languages, illusory script; Price 13,500 gp.",
    source: DM316,
    sourceUrl: DM316_PATH,
    ruleset: "core",
  },
];
