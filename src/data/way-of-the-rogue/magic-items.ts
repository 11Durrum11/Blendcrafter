import type { MagicItemDefinition } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// Magical poisons (pp. 46-48) and New Magic Items (pp. 48-52).
// Transcribed from Shaun's own scanned copy (image-only; pages
// read visually, 2026-11-04). The nine magical poisons print
// Caster Level / Prerequisites / Market Price lines and are
// filed here as magic items, matching the Quintessential Rogue
// pack's handling of its potions and poison devices. Every
// summary carries the item's printed creation line (caster
// level, prerequisites, market price) or says the book prints
// none. Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.
//
// Quirks kept as printed: the Boots of Grace's creation line
// reads "Market Value: 4,000 gp" (not "Market Price"). The
// Ring of Magic Detection prints NO caster level, prerequisites,
// or market price anywhere in its entry (verified at 250 DPI),
// so its cost is "—".

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const POI = "Way of the Rogue — Magical Poisons";
const MI = "Way of the Rogue — New Magic Items";

export const WAY_OF_THE_ROGUE_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "draught-of-wounding",
    name: "Draught of Wounding",
    category: "Wondrous item",
    cost: "1,520 gp",
    summary:
      "A magical poison: arsenic enchanted with an inflict critical wounds spell. Ingested; Fortitude DC 13 negates the initial effect of 1 point of temporary Constitution damage. Secondary effect: the victim suffers inflict critical wounds (4d8+7 damage; Will save DC 16 for half). Caster Level: 7th; Prerequisites: Brew Poison, inflict critical wounds; Market Price: 1,520 gp.",
    source: `${POI} (p. 46)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "enfeebling-sting",
    name: "Enfeebling Sting",
    category: "Wondrous item",
    cost: "3,300 gp",
    summary:
      "A magical poison: wyvern poison enchanted for use as a blade venom; one dose coats two small weapons or one medium or large slashing or piercing weapon. Fortitude DC 17 negates the initial effect of 2d6 points of temporary Constitution damage. Secondary effect: ray of enfeeblement as cast by a 6th-level caster (-1d6+3 Strength for six minutes; Fortitude DC 14 avoids). Caster Level: 6th; Prerequisites: Brew Poison, ray of enfeeblement; Market Price: 3,300 gp.",
    source: `${POI} (p. 46)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ghastly-mist",
    name: "Ghastly Mist",
    category: "Wondrous item",
    cost: "300 gp",
    summary:
      "A supernatural magical poison kept in airtight glass vials; one dose fills 1 cubic foot when released into the air. A humanoid who inhales it must make a Fortitude save (DC 13) or suffer the effects of a ghoul touch spell. Caster Level: 3rd; Prerequisites: Brew Poison, ghoul touch; Market Price: 300 gp.",
    source: `${POI} (pp. 46-47)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "paste-of-pestilence",
    name: "Paste of Pestilence",
    category: "Wondrous item",
    cost: "1,400 gp",
    summary:
      "A supernatural magical poison in paste form; one dose coats two small weapons or one medium or large slashing or piercing weapon. A creature struck must make a Fortitude save (DC 16) or be affected by a contagion spell. Caster Level: 7th; Prerequisites: Brew Poison, contagion; Market Price: 1,400 gp.",
    source: `${POI} (p. 47)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "powder-of-paralysis",
    name: "Powder of Paralysis",
    category: "Wondrous item",
    cost: "3,750 gp",
    summary:
      "A magical poison: insanity mist enchanted for use as an inhaled powder. Initial effect: Fortitude DC 15 negates 1d4 points of temporary Wisdom damage. Secondary effect: hold monster — the victim must make a Will save (DC 17) or be held for nine rounds. Caster Level: 9th; Prerequisites: Brew Poison, hold monster; Market Price: 3,750 gp.",
    source: `${POI} (p. 47)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "seasoning-of-shrinking",
    name: "Seasoning of Shrinking",
    category: "Wondrous item",
    cost: "300 gp",
    summary:
      "A supernatural magical poison that looks like powdered pepper. Consumed with food or drink, the victim must make a Fortitude save (DC 14) or be affected by a reduce spell as cast by a 6th-level caster; the victim's equipment is not affected. Caster Level: 6th; Prerequisites: Brew Poison, reduce; Market Price: 300 gp.",
    source: `${POI} (p. 47)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "tashas-hideous-laughing-venom",
    name: "Tasha's Hideous Laughing Venom",
    category: "Wondrous item",
    cost: "450 gp",
    summary:
      "A magical poison: Medium-size spider venom enchanted for use as a blade venom; one dose coats two small weapons or one medium or large slashing or piercing weapon. Fortitude DC 14 negates the initial effect of 1d4 points of temporary Strength damage. Secondary effect: the victim must make a Will save (DC 13) or suffer the effects of Tasha's hideous laughter. Caster Level: 3rd; Prerequisites: Brew Poison, Tasha's hideous laughter; Market Price: 450 gp.",
    source: `${POI} (p. 47)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "touch-of-the-unholy",
    name: "Touch of the Unholy",
    category: "Wondrous item",
    cost: "1,400 gp",
    summary:
      "A supernatural contact poison: a clear oily liquid painted over an area of up to 1 square foot; when dry it is nearly undetectable (treat it as a magic trap with Search DC 29). When bare flesh touches the treated surface, the substance is released as a dark greasy cloud with a 20-foot radius, and all caught in it suffer the effects of unholy blight (Fortitude DC 16 partially negates). Gauntlets protect the wearer's hand but pick the substance up and can carry it to other surfaces. Caster Level: 7th; Prerequisites: Brew Poison, unholy blight; Market Price: 1,400 gp.",
    source: `${POI} (pp. 47-48)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "will-breaker",
    name: "Will-Breaker",
    category: "Wondrous item",
    cost: "1,600 gp",
    summary:
      "A magical poison: purple worm poison enchanted for use as a blade venom; one dose coats two small weapons or one medium or large slashing or piercing weapon. Fortitude DC 24 negates the initial effect of 1d6 points of temporary Strength damage. Secondary effect: suggestion as cast by a 6th-level wizard (Will DC 14 negates); a victim who fails is suggestible for up to 6 hours. Caster Level: 6th; Prerequisites: Brew Poison, suggestion; Market Price: 1,600 gp.",
    source: `${POI} (p. 48)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "alrics-tiny-golem",
    name: "Alric's Tiny Golem",
    category: "Wondrous item",
    cost: "12,000 gp",
    summary:
      "A jade figurine in the form of a key fob; at the owner's command word it animates as a tiny golem that can climb into locks and traps and work their tumblers and mechanisms, exerting up to 20 lbs. of pressure. It makes Open Lock and Disable Device checks at the owner's bonus -2, can deliberately set off traps, and is mentally commanded at up to 40 feet. If destroyed (HD 2d8, 10 hp, AC 15), it returns to fob form and cannot be used for 24 hours. Caster Level: 3rd; Prerequisites: Craft Wondrous Item, unseen servant; Market Price: 12,000 gp.",
    source: `${MI} (p. 48)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bag-of-trash-belt-pouch",
    name: "Bag of Trash (Belt Pouch)",
    category: "Wondrous item",
    cost: "2,500 gp",
    summary:
      "A container whose true contents only its owner can see: anyone else looking inside sees only worthless junk, and items placed in the bag instantly take on the appearance of worthless items (a crystal goblet appears to be a chipped clay cup). The owner sees the contents truly at once; true seeing or a gem of seeing also pierces the illusion. A new owner needs a week to attune to the bag. Removed items revert to their true appearance in 1d10 rounds. This belt-pouch version holds 3 lbs. Caster Level: 1st; Prerequisites: Craft Wondrous Item, silent image; Market Price: 2,500 gp.",
    source: `${MI} (pp. 48-49)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bag-of-trash-bag",
    name: "Bag of Trash (Bag)",
    category: "Wondrous item",
    cost: "5,000 gp",
    summary:
      "As the belt-pouch bag of trash: only the owner sees the true contents (anything placed inside instantly appears to be a worthless item to everyone else), true seeing or a gem of seeing pierces the illusion, a new owner needs a week to attune, and removed items revert in 1d10 rounds. This bag version holds 20 lbs. Caster Level: 1st; Prerequisites: Craft Wondrous Item, silent image; Market Price: 5,000 gp.",
    source: `${MI} (pp. 48-49)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bag-of-trash-large-sack",
    name: "Bag of Trash (Large Sack)",
    category: "Wondrous item",
    cost: "10,000 gp",
    summary:
      "As the belt-pouch bag of trash: only the owner sees the true contents (anything placed inside instantly appears to be a worthless item to everyone else), true seeing or a gem of seeing pierces the illusion, a new owner needs a week to attune, and removed items revert in 1d10 rounds. This large-sack version holds 50 lbs. Caster Level: 1st; Prerequisites: Craft Wondrous Item, silent image; Market Price: 10,000 gp.",
    source: `${MI} (pp. 48-49)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "boots-of-grace",
    name: "Boots of Grace",
    category: "Wondrous item",
    cost: "4,000 gp",
    summary:
      "Cursed boots. The wearer feels unusually agile and graceful — until he attempts a Move Silently check, a Dexterity check, or a Reflex save, at which point the boots squeak very loudly and impose a -10 circumstance penalty on all Dexterity-based skill checks. The boots can be removed only by remove curse, miracle, limited wish, wish, or amputation. Caster Level: 17th; Prerequisites: Craft Wondrous Item, bestow curse, ghost sound; Market Value (as printed): 4,000 gp.",
    source: `${MI} (pp. 48-49)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "boots-of-misdirection",
    name: "Boots of Misdirection",
    category: "Wondrous item",
    cost: "52,000 gp",
    summary:
      "Once per day, the wearer can send his own shadow off as a semi-sentient decoy: the shadow is three-dimensional, of the owner's size and shape, and moves on command in a straight line at the owner's base speed, taking the easiest path around obstacles. Being semi-material, it leaves footprints and obvious signs of passage. It returns after 1 hour or if it takes any damage; it has no hit points, and its AC equals the owner's counting only natural, armor, and Dexterity bonuses. Magical means can capture the shadow — the book warns about beings with access to the Plane of Shadow. Caster Level: 7th; Prerequisites: Craft Wondrous Item, shadow conjuration; Market Price: 52,000 gp.",
    source: `${MI} (p. 49)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bracers-of-facade",
    name: "Bracers of Façade",
    category: "Wondrous item",
    cost: "60,000 gp",
    summary:
      "Twice per day, these bracers project a 180-degree illusionary barrier in front of the wearer that matches the terrain behind him as he moves, granting a +20 circumstance bonus on Hide checks for 10 minutes. The barrier does not mask sound, a light source brighter than a candle in front of the wearer casts his shadow through it, and moving more than 5 feet from the surface he is hiding against gives active observers a cumulative 25% chance per 5 feet moved to notice something wrong. Even if discovered, the façade still grants nine-tenths concealment (40% miss chance; see PHB p. 133). Caster Level: 7th; Prerequisites: Craft Wondrous Item, illusory wall; Market Price: 60,000 gp.",
    source: `${MI} (pp. 49-50)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "bridle-of-invisibility",
    name: "Bridle of Invisibility",
    category: "Wondrous item",
    cost: "15,000 gp",
    summary:
      "When activated, the mount wearing this bridle and everything on it disappear, as the invisibility spell. A centaur cannot use the bridle; a paladin's summoned mount can activate it. Caster Level: 3rd; Prerequisites: Craft Wondrous Item, invisibility; Market Price: 15,000 gp.",
    source: `${MI} (p. 50)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "compass-of-passage",
    name: "Compass of Passage",
    category: "Wondrous item",
    cost: "37,800 gp",
    summary:
      "A compass that opens to a maximum width of 3 inches; fit one end with a pen, piece of chalk, or charcoal, set the pointed end on a surface, and draw a circle up to 6 inches in diameter. When the encircled surface is touched, the ink or chalk flares and the user's extremity passes into the surface through a magical tunnel up to 10 feet deep. The hole allows no viewing through it, and nothing on the far side can pass back unless grasped by the user; the hole disappears when the appendage is withdrawn. Usable up to three times per day. Caster Level: 7th; Prerequisites: Craft Wondrous Item, passwall; Market Price: 37,800 gp.",
    source: `${MI} (p. 50)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ring-of-magic-detection",
    name: "Ring of Magic Detection",
    category: "Ring",
    cost: "—",
    summary:
      "A ring set with gems: in the presence of a magical aura, one or more of the gems glow, depending on the school of magic involved; multiple auras of multiple schools make many of the jewels glow. The ring detects only magical auras — it is up to the wearer to determine whether the glow comes from magic items, traps, or lingering spell effects. Otherwise, the ring functions as the spell detect magic. (The book prints no caster level, prerequisites, or market price for this item.)",
    source: `${MI} (p. 50)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "ring-of-trap-detection",
    name: "Ring of Trap Detection",
    category: "Ring",
    cost: "20,000 gp",
    summary:
      "A finely crafted platinum ring setting a small scorpion trapped in amber. When the wearer comes within 30 feet of a trapped item or area, the insect appears to come to life within the amber; within 10 feet it orients toward the trap's trigger, pointing it out with its tail. The ring automatically detects any non-magic trap, simple or complex, and alerts the wearer to the presence of a magic trap, allowing a Search check as a rogue of equal level; with several traps in the area it orients to the closest. The ring is created with 50 charges: it expends 1 charge when it detects a mechanical trap and 2 charges when it detects a magic trap, whether the wearer discovers the trap or not. Caster Level: 5th; Prerequisites: Forge Ring, divination, detect snares and pits, find traps; Market Price: 20,000 gp.",
    source: `${MI} (p. 50)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "scarab-agent",
    name: "Scarab Agent",
    category: "Wondrous item",
    cost: "22,000 gp",
    summary:
      "A tiny (quarter-inch long) insect-shaped pin that can be attached to a target's clothing. Once the command word is given, the pin lets the owner see and hear as if he stood right beside the target: listening requires no special action, and for viewing the scarab's multifaceted eyes open so the owner sees everything in the area not blocked by the target's body. The scarab channels only the owner's natural senses — magical enhancements are not effective. The owner must be within a half-mile and fully concentrating to receive both audio and visual feedback; if he takes any move-equivalent actions he may only listen, and he cannot cast spells or use psionic abilities while operating a scarab. If the scarab travels more than a half-mile away or is blocked by magical means, the connection is lost and cannot be re-established until the scarab is retrieved. Caster Level: 4th; Prerequisites: Craft Wondrous Item, clairaudience, clairvoyance; Market Price: 22,000 gp.",
    source: `${MI} (pp. 50-51)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "sword-of-silence",
    name: "Sword of Silence",
    category: "Weapon",
    cost: "10,310 gp",
    summary:
      "An ordinary-looking +2 short sword. By touching the weapon to activate it (up to three times per day), the wielder generates a field of silence in a 5-ft. radius around himself, functioning as the silence spell. Even when inactive or sheathed, the sword slightly disrupts the air pressure around the user, muffling all sounds: the user gains a +2 circumstance bonus on Move Silently checks. Caster Level: 7th; Prerequisites: Craft Magic Arms and Armor (as printed), silence; Market Price: 10,310 gp.",
    source: `${MI} (p. 51)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "tolarets-staff-bronze",
    name: "Tolaret's Staff (Bronze)",
    category: "Wondrous item",
    cost: "3,000 gp",
    summary:
      "A rod two feet long of lightweight, burnished bronze that radiates a slight dweomer of alteration magic. With a sharp flick of the wrist it extends into a six-foot quarterstaff, and if grasped in both hands while the command word is given, it expands further into a 10-foot staff. The bronze version is a +1 weapon and grants a +5 circumstance bonus on Balance checks. (A found staff's metal is determined by a d10 roll: 1-3 bronze, 4-6 silver, 7-10 gold.) Caster Level: 5th; Prerequisites: Craft Wondrous Item, cat's grace, caster must be of a level three times that of the combat bonus; Market Price: 3,000 gp.",
    source: `${MI} (p. 51)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "tolarets-staff-silver",
    name: "Tolaret's Staff (Silver)",
    category: "Wondrous item",
    cost: "10,000 gp",
    summary:
      "As the bronze Tolaret's staff (a two-foot rod that extends to a six-foot quarterstaff with a flick of the wrist, or to a 10-foot staff with two hands and the command word), but the silver version is a +2 weapon, grants the same +5 circumstance bonus on Balance checks, and can also cast spider climb once per day. Caster Level: 5th; Prerequisites: Craft Wondrous Item, cat's grace, spider climb, caster must be of a level three times that of the combat bonus; Market Price: 10,000 gp.",
    source: `${MI} (p. 51)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "tolarets-staff-gold",
    name: "Tolaret's Staff (Gold)",
    category: "Wondrous item",
    cost: "24,000 gp",
    summary:
      "As the bronze Tolaret's staff (a two-foot rod that extends to a six-foot quarterstaff with a flick of the wrist, or to a 10-foot staff with two hands and the command word), but the gold version is a +3 weapon, grants the same +5 circumstance bonus on Balance checks, can cast spider climb once per day, and can also cast feather fall once per day. Caster Level: 5th; Prerequisites: Craft Wondrous Item, cat's grace, spider climb, feather fall, caster must be of a level three times that of the combat bonus; Market Price: 24,000 gp.",
    source: `${MI} (p. 51)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "urchin-ring",
    name: "Urchin Ring",
    category: "Ring",
    cost: "30,000 gp",
    summary:
      "Once per day, this unassuming brass ring attracts the attention of 1d6 children under the age of 12. Enchanted by the ring, the children are compelled to find the largest concentration of people within a half-mile radius, systematically pick their pockets, and bring the stolen purses to the ring wearer; the compulsion acts subconsciously, and the children think of it as a game and do their best not to be caught. While under the ring's magic, the children have Pick Pocket +3, Hide +3, and Move Silently +3. If a child is caught in the act, the compulsion is dispelled immediately and the child cannot explain why he acted as he did. The enchantment lasts one hour or until all the children have been caught; the children stealthily bring their loot to the wearer each time they collect something valuable. Caster Level: 11th; Prerequisites: Forge Ring, mass suggestion; Market Price: 30,000 gp.",
    source: `${MI} (pp. 51-52)`,
    sourceUrl: WOTR_PATH,
    ruleset: "core",
    modifiers: [],
  },
];
