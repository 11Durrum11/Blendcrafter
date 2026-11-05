import type { MagicItemDefinition } from "@/engine/types";

// The Quintessential Rogue (Michael Mearls, ©2002
// Mongoose Publishing, Collector's Series, d20
// 3.0-era) — "Magical Items" within the "Tools of the
// Trade" chapter, printed pp. 58-61, transcribed from
// Shaun's own scanned copy (image-only; read visually
// page by page, 2026-11-04). The section prints five
// weapon qualities (priced as enhancement-bonus
// equivalents), three specific weapons, three potions,
// four wondrous items, and six magical locks — 21
// records in all, every priced magic item in the
// chapter. Each prints a caster level and creation
// prerequisites, and each summary includes them.
// Terminology is transcribed as printed for this
// 3.0-era book (e.g. prerequisites list the 3.0 spell
// names enlarge, reduce and ethereal jaunt, and feats
// as "Craft Magic Arms and Armour"). No aura lines are
// printed in this chapter, so none are recorded. The
// chapter's mundane weapons, armour and gear are filed
// in equipment.ts. Summaries are short mechanical
// paraphrases in our own words; no book prose is
// reproduced. Grep found no id collisions for any of
// these 21 ids (see notes-tools.md).

const QR = "The Quintessential Rogue";
const QR_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Rogue.pdf";

export const QUINTESSENTIAL_ROGUE_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Weapon Qualities (p. 58-59) ----
  {
    id: "heartskewer",
    name: "Heartskewer",
    category: "Weapon special ability",
    cost: "+3 bonus",
    summary: "Weapon special ability: a heartskewer weapon pulses with magical power and is attracted to critical organs, directing the user's blows to critical points of an opponent's anatomy. It grants its wielder the ability to sneak attack for +2d6 damage; a character who already has the sneak attack ability adds 2d6 to his sneak attack damage. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armour, keen edge; Market Price: +3 bonus.",
    source: `${QR}, p. 58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ring-weapon",
    name: "Ring Weapon",
    category: "Weapon special ability",
    cost: "+3 bonus",
    summary: "Weapon special ability: the weapon can transform into a plain, golden ring, allowing it to be smuggled past guards or into a secure facility; while in ring form it does not emit a magical aura, making it proof against detection spells such as detect magic. Shifting a weapon to ring form or back requires a move-equivalent action, allowing the wielder to shift it from ring to weapon form and attack in the same round. Caster Level: 15th; Prerequisites: Craft Magic Arms and Armour, Forge Ring, nondetection, polymorph any object; Market Price: +3 bonus.",
    source: `${QR}, p. 58`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "seeker",
    name: "Seeker",
    category: "Weapon special ability",
    cost: "+2 bonus",
    summary: "Weapon special ability, applicable only to a thrown weapon or to ammunition such as arrows or bolts: a seeker weapon functions like any other magical ranged weapon when first fired or thrown, but if it misses its mark it curls back to attack its target again, attacking once each round until it hits or its target moves beyond the weapon's maximum range from the user's position (at which point the missile settles to the ground). The return attack is modified only by its magical bonus and any modifiers that apply to the target, such as cover or concealment; range modifiers do not apply. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armour, fly, true strike; Market Price: +2 bonus. (Entry begins p. 58; its caster level/prerequisites/price lines are printed at the top of p. 59.)",
    source: `${QR}, pp. 58-59`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "stealth",
    name: "Stealth",
    category: "Weapon special ability",
    cost: "+4 bonus",
    summary: "Weapon special ability: stealth weapons emit a continuous zone of total silence in a 5 ft. radius when unsheathed. This silence operates as per the spell silence but with the area of effect described here rather than that of the spell. Stealth weapons serve both to disrupt spellcasters and to cover the sounds of attacks or murders. Caster Level: 3rd; Prerequisites: Craft Magic Arms and Armour, silence; Market Price: +4 bonus.",
    source: `${QR}, p. 59`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "swarming",
    name: "Swarming",
    category: "Weapon special ability",
    cost: "+3",
    summary: "Weapon special ability, applicable only to thrown weapons or ammunition such as arrows or bolts: swarming weapons split into three separate weapons when thrown or fired. Roll to hit separately for each missile, counting all modifiers and using the base attack bonus that applied to the initial shot. Check only once to see if an enchanted piece of ammunition survives being fired; if any of the three missiles hits, the item counts as hitting its target for purposes of determining if the ammunition remains intact. Caster Level: 7th; Prerequisites: Craft Magic Arms and Armour, minor creation, mirror image; Market Price: +3 (as printed, without the word \"bonus\").",
    source: `${QR}, p. 59`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  // ---- Specific Weapons (pp. 59-60) ----
  {
    id: "nightblade",
    name: "Nightblade",
    category: "Specific weapon",
    cost: "132,000 gp",
    summary: "An enchanted longsword with a blade of pitch-black metal, bathed in a corona of flickering, ebon flames; in combat it functions as a +3 magical weapon. The inky flames that wreath the blade may flow from it to engulf the wielder, granting him a +10 circumstance bonus to Hide checks for 10 rounds, usable three times per day. The weapon can emit a charged pulse of searing black flame, engulfing a single target for 5d4 points of fire damage as a ranged touch attack once per day. Finally, the wielder can cast ethereal jaunt as a 13th-level wizard once per day. Caster Level: 15th; Prerequisites: Craft Magic Arms and Armour, darkness, ethereal jaunt, flame arrow; Market Price: 132,000 gp.",
    source: `${QR}, p. 59`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "staff-of-springing",
    name: "Staff of Springing",
    category: "Specific weapon",
    cost: "8,600 gp",
    summary: "An enchanted quarterstaff made from resilient, highly flexible wood; in combat it strikes as a +1 weapon. When planted firmly into the ground, the staff collapses down to a third its length before popping back to its full length and vaulting its user into the air; when used in conjunction with a Jump skill check, it allows its wielder to ignore the maximum jumping distance based on his height. Caster Level: 3rd; Prerequisites: Craft Magic Arms and Armour, jump, levitate; Market Price: 8,600 gp.",
    source: `${QR}, p. 59`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "whisper-arrow",
    name: "Whisper Arrow",
    category: "Specific weapon",
    cost: "132 gp",
    summary: "An arrow that delivers a message to the first person who touches it after it has been fired from a bow: the archer must whisper a message of up to 30 words as he draws the bowstring back to fire the arrow, and the first person to touch the arrow after it lands hears the message repeated in his mind in a dull, hollow tone, making it impossible to guess the sender by his voice. If the arrow strikes a living target, that target hears the message as the arrow strikes him; if the arrow wound knocks him to below 0 hit points, he hears the message immediately if and when he returns to consciousness. Caster Level: 5th; Prerequisites: Craft Magic Arms and Armour, message; Market Price: 132 gp. (Entry begins p. 59 and concludes at the top of p. 60.)",
    source: `${QR}, pp. 59-60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  // ---- Potions (p. 60) ----
  {
    id: "potion-of-ink-black",
    name: "Potion of Ink Black",
    category: "Potion",
    cost: "250 gp",
    summary: "A potion that usually appears as a thick, black, viscous fluid: when ingested, it changes the drinker's skin and equipment to an inky, black colour for 30 minutes, making him almost impossible to spot in the dark. In low-light conditions, the drinker gains a +20 circumstance bonus to Hide checks; in any other condition, he gains a +10 circumstance bonus. In addition, the user's features are so obscured that he is impossible to identify without magical means such as true seeing. Caster Level: 3rd; Prerequisites: Brew Potion, darkness; Market Price: 250 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "potion-of-liquid-form",
    name: "Potion of Liquid Form",
    category: "Potion",
    cost: "750 gp",
    summary: "When drunk, this potion transforms its user into a pillar of thick, silvery liquid that can flow through cracks, beneath doors, or down small pipes or holes; the drinker may move at his normal walking rate. While he can breathe normally in this form, he does not gain the ability to breathe underwater. The user may return to his normal form and switch back to his liquid one as often as necessary during the potion's one hour duration. Caster Level: 11th; Prerequisites: Brew Potion, control water, gaseous form; Market Price: 750 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "potion-of-treasure-finding",
    name: "Potion of Treasure Finding",
    category: "Potion",
    cost: "350 gp",
    summary: "Upon downing this potion, the user gains the ability to smell silver, copper, gold, jewels and other valuable items: he can determine the location of each valuable item or treasure trove within 120 ft. of his current position by his sense of smell, though if a treasure lies in an area that he has not explored or previously entered he only becomes aware of the treasure's presence in that general direction. Judging from each treasure's odour, he can determine their relative values. This effect lasts for 30 minutes. Caster Level: 5th; Prerequisites: Brew Potion, clairaudience/clairvoyance; Market Price: 350 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  // ---- Wondrous Items (p. 60) ----
  {
    id: "gliding-stick",
    name: "Gliding Stick",
    category: "Wondrous item",
    cost: "19,800 gp",
    summary: "A plain, two-foot long wooden rod with several powers: it can cast feather fall as a 5th-level sorcerer on command, levitate as a 5th-level sorcerer three times per day, and fly as a 5th-level sorcerer once per day. Each of these powers has a separate command word that must be spoken to activate the power. Caster Level: 5th; Prerequisites: Craft Wondrous Item, feather fall, fly, levitate; Market Price: 19,800 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "infinite-ladder",
    name: "Infinite Ladder",
    category: "Wondrous item",
    cost: "5,400 gp",
    summary: "An item that appears as a three-inch tall, miniature wooden ladder. Once per day when its command word is spoken, the ladder grows to normal size and attains a height chosen by its user, with a maximum of 200 ft.; it maintains this size for up to 30 minutes, after which it immediately returns to its miniature size. If the command word is spoken while the ladder is in its giant form, it immediately shrinks back to normal; if the user grasps the ladder when speaking the command word to shrink it, it shrinks down into his hand, allowing him to recover the ladder after scaling its height. Caster Level: 7th; Prerequisites: Craft Wondrous Item, enlarge, reduce; Market Price: 5,400 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "thieves-tools-of-speed",
    name: "Thieves' Tools of Speed",
    category: "Wondrous item",
    cost: "1,320 gp",
    summary: "Elegantly crafted thieves' tools imbued with an enchantment granting incredible speed and dexterity when using the Open Lock and Disable Device skills: the user may make Open Lock and Disable Device attempts that require one round as a free action, while checks that require more than one round take only half the necessary time. In addition, these tools grant a +4 competence bonus to both Open Lock and Disable Device checks. Caster Level: 5th; Prerequisites: Craft Wondrous Item, haste; Market Price: 1,320 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "tools-of-the-master-thief",
    name: "Tools of the Master Thief",
    category: "Wondrous item",
    cost: "4,000 gp",
    summary: "Tools cast in adamant and forged by a master wizard: they grant a +10 competence bonus to all Disable Device and Open Lock checks. Caster Level: 5th; Prerequisites: Craft Wondrous Item, cat's grace; Market Price: 4,000 gp.",
    source: `${QR}, p. 60`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  // ---- Locks (p. 61; all are magical locks made with Craft Wondrous Item) ----
  {
    id: "alarm-lock",
    name: "Alarm (Lock)",
    category: "Magical lock",
    cost: "1,500 gp",
    summary: "Magical lock set to emit a tremendously loud clanging noise if anyone attempts to pick it. Jimmying this lock requires an Open Lock check (DC 25); if failed, the lock emits a loud, metallic clanging noise that continues for 10 minutes and is audible up to 500 ft. away. A rogue may use Search (DC 26) to detect the presence of the magical alarm. Caster Level: 3rd; Prerequisites: Craft Wondrous Item, alarm; Market Price: 1,500 gp.",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "devourer-lock",
    name: "Devourer (Lock)",
    category: "Magical lock",
    cost: "2,000 gp",
    summary: "Magical lock that consumes non-magical tools inserted into it, grinding them into useless junk unless the character making the Open Lock attempt makes a Reflex save (DC 20). To notice this lock, a rogue must make a Search check (DC 27). Only a knock spell, a set of magical thieves' tools, or the proper key can open a devourer lock. Caster Level: 3rd; Prerequisites: Craft Wondrous Item, shatter; Market Price: 2,000 gp.",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "shifter-lock",
    name: "Shifter (Lock)",
    category: "Magical lock",
    cost: "12,000 gp",
    summary: "Magical lock enchanted to magically rearrange its tumblers and other interior components every ten seconds, making it tremendously difficult to pick: cracking it requires an Open Lock check (DC 45), though a locksmith equipped with thieves' tools of speed (see above) can jimmy this lock before it has a chance to change its configuration (DC 20). Caster Level: 15th; Prerequisites: Craft Wondrous Item, polymorph any object; Market Price: 12,000 gp. (Entry begins at the foot of the left column of p. 61; its caster level/prerequisites/price lines are printed at the top of the right column.)",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "silent-alarm-lock",
    name: "Silent Alarm (Lock)",
    category: "Magical lock",
    cost: "5,000 gp",
    summary: "Magical lock meant to draw guards to a location without alerting their quarry: it emits a pulse of mental energy that up to three specific creatures of any type designated at the time of the lock's construction may detect from up to a mile away; alternatively, rather than linking the lock to a creature, it may be connected to up to three talismans, each of which alerts its wearer of the intrusion. A silent alarm lock requires a DC 20 Open Lock check to breach and a DC 30 Search check to detect. Caster Level: 5th; Prerequisites: Craft Wondrous Item, whispering wind; Market Price: 5,000 gp.",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "snapper-lock",
    name: "Snapper (Lock)",
    category: "Magical lock",
    cost: "1,500 gp",
    summary: "Magical lock that slams shut as soon as it detects an intruder's attempt to break or modify its inner workings. Defeating it requires an Open Lock check (DC 30); if failed, a mithril plate slides over the keyhole, preventing any further attempts to defeat the lock, and the plate remains in place until a proper command word is spoken. Noticing this lock's qualities requires a Search check (DC 26). Caster Level: 5th; Prerequisites: Craft Wondrous Item, unseen servant; Market Price: 1,500 gp.",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "trojan-horse-lock",
    name: "Trojan Horse (Lock)",
    category: "Magical lock",
    cost: "8000 gp",
    summary: "Magical lock that appears as a normal lock requiring a DC 20 Open Lock check to pick; however, when opened via that skill, the Trojan horse arms a magical blast of fire that fires from the lock's keyhole when the door or chest is opened, dealing 4d6 points of damage to everyone in a 25 ft. cone, requiring a Reflex save (DC 20) for half damage. Detecting this trap requires a successful Search check (DC 29). Caster Level: 7th; Prerequisites: Craft Wondrous Item, fire trap; Market Price: 8000 gp (printed without a comma).",
    source: `${QR}, p. 61`,
    sourceUrl: QR_PATH,
    ruleset: "core",
    modifiers: [],
  },
];
