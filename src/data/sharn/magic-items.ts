import type { MagicItemDefinition } from "@/engine/types";

// Sharn: City of Towers (Eberron, WotC) — the Chapter 6
// magic items, printed pp. 169-171, transcribed from
// Shaun's own scanned copy (read visually; the scan is
// image-only), 2026-11-04: three greater dragonshard
// focus items keyed to the least dragonmarks of Warding,
// Scribing, and Sentinel, the wondrous items of the city
// (several of them contraband in Sharn itself), and the
// book's single artifact. Two items from this section
// are NOT built here because the catalog already holds
// them from the Magic Item Compendium: shiftweave
// (identical reprint) and the watch lamp (reprint; note
// the Sharn original is priced 1,500 gp against the
// Compendium's 500 gp). Summaries are short mechanical
// paraphrases in our own words, closing with the printed
// aura, caster level, and creation line; no book prose
// is reproduced.

const SHARN = "Sharn: City of Towers";
const SHARN_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Sharn - City of Towers.pdf";

export const SHARN_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "gloves-of-the-locksmith",
    name: "Gloves of the Locksmith",
    category: "wondrous-hands",
    cost: "10,000 gp",
    summary: "Greater dragonshard focus item: heavy leather gauntlets studded with dragonshards and bearing the sigil of House Kundarak. When worn by a character who possesses the arcane lock variation of the Least Mark of Warding, they allow the character to cast arcane seal 3 times per day, and the caster can attach up to 3 separate keys to the spell effect (as a general rule, a Kundarak locksmith provides two of these keys to the customer and holds one key at the Kundarak enclave). The power of the gloves can only be used a total of 3 times per day, regardless of who wears them. (Moderate abjuration; CL 5th; Craft Wondrous Item, Least Mark of Warding.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 169`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "pen-of-the-living-parchment",
    name: "Pen of the Living Parchment",
    category: "wondrous-slotless",
    cost: "22,500 gp",
    summary: "Greater dragonshard focus item: a narrow darkwood rod with a small dragonshard embedded in its tip. A character who possesses the arcane mark ability of the Least Mark of Scribing can use the pen to inscribe permanent arcane marks onto the flesh of living creatures — commonly used by the courts of Khorvaire to mark criminals and exiles (the House Sivis service, mark of the living parchment, uses one). It takes at least 1 minute to use the pen effectively, the intended target must be restrained, unconscious, or willing to cooperate, and a single mark can cover an area no larger than 2 inches by 2 inches, as an image or a written message. Removing such a mark requires break enchantment (check DC 18), limited wish, miracle, or wish, though the character who inscribed the mark can also remove it using the same pen. The pen can only be used on living creatures. (Faint universal; CL 5th; Craft Wondrous Item, Least Dragonmark of Scribing.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 169`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "sentinels-shield",
    name: "Sentinel's Shield",
    category: "armor-special-ability",
    cost: "+4,200 gp",
    summary: "Shield property (added to any magic shield). A sentinel's shield is usually emblazoned with the Watchful Eye of Deneith, with small dragonshards set around the sun. When worn by a character with the Least Mark of Sentinel, the shield grants the ability to use protection from arrows (10/magic) 3 times per day; by taking a standard action, the wielder can transfer this protection to an adjacent character for one round. If the bearer already has a dragonmark allowing him to cast protection from arrows, he may use this power an additional 3 times per day, using his character level as the caster level. (Faint abjuration; CL 3rd; Craft Magic Arms and Armor, Least Dragonmark of Sentinel.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 169`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "arcane-key",
    name: "Arcane Key",
    category: "wondrous-slotless",
    cost: "500 gp",
    summary: "A set of thieves' tools enchanted to allow the bearer to interact with mystical bonds and seals. A rogue — and only a rogue — equipped with an arcane key can use Open Lock against a door sealed with arcane lock or hold portal, and can use Disable Device to temporarily shut down the alarm function of an arcane seal. To pick a mystically sealed lock, the Open Lock check DC is increased by 10; doors sealed by magic may not have any sort of physical lock, in which case the DC is 20. A successful check permanently dispels hold portal, while the sealing magic of arcane lock and arcane seal is simply suppressed for 10 minutes. Opening an arcane seal in this manner triggers the seal's mental alert unless that effect has already been suppressed (Disable Device check, DC 10 + the caster level of the seal; success suppresses the effect for 10 minutes). In Sharn, it is illegal to own an arcane key. (Faint abjuration; CL 3rd; Craft Wondrous Item, creator must have 1 rogue level, knock.)",
    source: `${SHARN}, Chapter 6: Magic Items, pp. 169-170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "eye-of-aureon",
    name: "Eye of Aureon",
    category: "wondrous-slotless",
    cost: "102,000 gp",
    summary: "A large circular seal formed of mithral alloy, two inches thick and three feet across, bearing the sigil of the god Aureon on its face; usually embedded into the floor to prevent theft. An eye of Aureon projects a continuous zone of truth in a 20-foot radius centered on the eye, with a saving throw DC of 20; if a person leaves the area and returns, or remains in the area for more than 14 minutes, he must make his saving throw again. Weight 12 lb. (Faint divination; CL 14th; Craft Wondrous Item, Heighten Spell, zone of truth.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "feather-fall-talisman",
    name: "Feather Fall Talisman",
    category: "wondrous-slotless",
    cost: "50 gp",
    summary: "A small pin made from brightly colored feathers. Its wearer can activate it as a free action to gain the effect of a feather fall spell, but its magic functions only once before it is expended and the talisman becomes useless. Like the feather fall spell, the item can be activated even when it is not the wearer's turn. Weight —. (Faint transmutation; CL 1st; Craft Wondrous Item, feather fall.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "flying-buttress",
    name: "Flying Buttress",
    category: "wondrous-slotless",
    cost: "48,000 gp",
    summary: "Wondrous architecture that makes use of Sharn's manifest zone linked to Syrania to keep the upper levels of a tower suspended in the air, making impossibly tall towers possible within the city. Its function is purely structural; it has no game effect on the hardness or hit points of tower walls, for example. (Strong transmutation; CL 12th; Craft Wondrous Item, Improved Flight Item, levitate.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "magic-lift",
    name: "Lift",
    category: "wondrous-slotless",
    cost: "24,000 gp",
    summary: "A magic lift carries passengers and cargo vertically — and sometimes horizontally — through the upper levels of the city. These lifts resemble iron cages or ornamented booths with lines of glowing energy stretching below and above them; a lift's speed is moderate and it cannot leave its line of travel, though some lift lines turn horizontally, facilitating some side-to-side movement. (Moderate transmutation; CL 6th; Craft Wondrous Item, levitate.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "mask-of-the-misplaced-aura",
    name: "Mask of the Misplaced Aura",
    category: "wondrous-face",
    cost: "77,000 gp",
    summary: "When a mask of the misplaced aura is created, it is invested with a specific persona, including physical appearance and alignment. When any form of divination is used on the wearer, it instead reads this false persona; this includes spells such as discern lies, which are usually set to read false. True seeing reveals the physical appearance of the false persona — so if the wearer has shapeshifted to a different form, trouble can still occur. (No aura; CL 11th; Craft Wondrous Item, false vision, misdirection.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "pendant-of-mystic-warning",
    name: "Pendant of Mystic Warning",
    category: "wondrous-throat",
    cost: "8,000 gp",
    summary: "Allows the wearer to monitor his surroundings for the use of magic: the wearer is constantly aware of the presence of magical auras within 30 feet, identical to the 1st-round effect of detect magic. If he concentrates, he can sharpen this magical sense as if using detect magic, allowing him to sense the strength, location, and school of magic involved in each aura, and the wearer can concentrate indefinitely. A pendant of mystic warning can only be used by a character who possesses the ability to cast arcane spells. (Faint divination; CL 2nd; Craft Wondrous Item, detect magic.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "powder-of-silent-passage",
    name: "Powder of Silent Passage",
    category: "wondrous-slotless",
    cost: "300 gp",
    summary: "This magic powder temporarily disrupts an active alarm spell or the warning effect of an arcane seal: the powder must be thrown into the area of the alarm while a command word is spoken, and the alarm is suppressed for a total number of minutes equal to (21 - the caster level of the alarm or seal). When created, powder of silent passage includes enough powder for three uses. Powder of silent passage is illegal in Sharn. (Faint illusion; CL 1st; Craft Wondrous Item, Nystul's magic aura.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 170`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "soarsled",
    name: "Soarsled",
    category: "wondrous-slotless",
    cost: "38,000 gp",
    summary: "A crystalline disk crackling with energy, 5 feet in diameter, that flies with great speed and maneuverability through the air in Sharn's manifest zone. Within the city of Sharn, a character can fly a soarsled at a speed of 90 feet with good maneuverability; beyond the city limits, a soarsled functions as a fly spell (speed 60 feet, or 40 feet if heavily loaded) that works only three times per day (for 6 minutes each use). A soarsled has an effective Strength of 20 and is treated as a Large quadruped for purposes of determining its carrying capacity (light load 399 pounds or less, medium load 400-698 pounds, heavy load 699-1,200 pounds); when carrying a medium or heavy load, its flying speed within the city is reduced to 60 feet. A soarsled is controlled by thought — activating and controlling the disk does not require actions or checks — but remaining standing as the disk moves often requires a DC 10 Balance check, and a character riding a soarsled loses his Dexterity bonus to AC unless he has 5 or more ranks in Balance. Weight 50 lb. (Moderate transmutation; CL 6th; Craft Wondrous Item, Improved Flight Item, fly, Tenser's floating disk.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 171`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "voluminous-vault",
    name: "Voluminous Vault",
    category: "wondrous-slotless",
    cost: "17,500 gp (steel); 27,500 gp (adamantine)",
    summary: "A metal safe, typically 2 feet by 1.5 feet by 1.5 feet in size, whose door is protected with a superior lock (base Open Lock DC 40) and enchanted with arcane seal. When the safe is opened, its second enchantment is revealed: it contains an extradimensional space capable of holding 2,500 pounds or 375 cubic feet of material, and the portal of the safe expands to 3 feet by 3 feet in size, allowing larger objects to be pushed within; removing an item from the safe is a full-round action, and a living creature placed inside the vault can survive for 10 minutes before it begins to suffocate. The steel vault has hardness 12, 60 hit points, and a break DC of 38; the adamantine vault has hardness 22, 80 hit points, and a break DC of 43. If the vault is broken or penetrated by force, the enchantment is broken and all objects within are lost; the vault interacts with portable holes and bags of holding in the same manner as a bag of holding. Weight 100 lb. (Moderate abjuration and conjuration; CL 9th; Craft Wondrous Item, Leomund's secret chest, arcane seal.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 171`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "wizards-manacles",
    name: "Wizard's Manacles",
    category: "wondrous-slotless",
    cost: "3,250 gp",
    summary: "Masterwork manacles formed from adamantine, designed to hold the most dangerous prisoners. Wizard's manacles require a DC 40 Escape Artist check to escape and a DC 40 Strength check to break, and have a hardness of 20 and 20 hit points. In addition, they are sealed with the same enchantment used in an arcane seal: they can only be opened using the associated key, dispel magic, knock, or by a rogue using an arcane key (DC 40), and this sends a mental alarm to the bearer of the key. Large wizard's manacles cost five times the listed price. Weight 2 lb. (Faint abjuration; CL 5th; Craft Wondrous Item, arcane seal.)",
    source: `${SHARN}, Chapter 6: Magic Items, p. 171`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "cauldron-of-boldrei",
    name: "Cauldron of Boldrei",
    category: "artifact",
    cost: "—",
    summary: "A large copper cauldron with a handle in the shape of an arched copper dragon, immobile in the Godsgate temple where it has rested for nearly 800 years — no force can shift it from its place. At sunrise of every day, it fills to the rim with a warm, thick gray sludge that tastes horrible but provides a character with the nutritional benefits of a full meal and flagon of water; the Cauldron holds enough soup to provide 60 humans with a full day's worth of nutrients. If the soup is removed from the Cauldron and stored in another container, it dissolves at sunrise the following day. Weight 25 lb. (immobile). (Strong conjuration; CL 20th.)",
    source: `${SHARN}, Chapter 6: Magic Items — Artifacts, p. 171`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
];
