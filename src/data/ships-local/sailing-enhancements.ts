import type {
  FeatDefinition,
  MagicItemDefinition,
  SpellDefinition,
} from "@/engine/types";

// A Dozen Sailing Ship Enhancements (Ronin Arts, Philip J.
// Reed, ©2005) — twelve magic items for sailing ships, all of
// their text designated Open Game Content; the mechanics
// consult Corsair (Adamant Entertainment). From Shaun's own
// copy in "A POC DM related/misc items/d20 Ronin Arts". The
// PDF also prints one new spell (Delay Sinking, the spell the
// Resilient Hull Plank stores) and one ship feat (God's Favor,
// granted by the Trusted Wheel) — both built here too.
// The book's four mundane sample items were already in the
// catalog from the Forbidden Arcana collection reprint and
// are NOT duplicated (see the sweep report).
// House style: short mechanical summaries; the book's text is
// not reproduced.

const DOZ = "A Dozen Sailing Ship Enhancements (Ronin Arts)";
const DOZ_PATH =
  "/A POC DM related/misc items/d20 Ronin Arts/A Dozen Sailing Ship Enhancements.pdf";

function mi(
  id: string,
  name: string,
  cost: string,
  summary: string,
): MagicItemDefinition {
  return {
    id: `dozen-${id}`,
    name,
    category: "wondrous",
    cost,
    summary,
    source: DOZ,
    sourceUrl: DOZ_PATH,
    ruleset: "core",
  };
}

export const DOZEN_SAILING_MAGIC_ITEMS: MagicItemDefinition[] = [
  mi(
    "animated-oars",
    "Animated Oars",
    "10,000 gp",
    `Oars that row the ship on their own, moving her without a rowing crew. Moderate transmutation; CL 11th; Craft Wondrous Item. (Appraise DC as printed in the book.)`,
  ),
  mi(
    "arcane-anchor",
    "Arcane Anchor",
    "11,250 gp",
    `An anchor that holds the ship fast without a rope or any visible means of attachment — it simply stays, and is highly prized by captains lucky enough to acquire one. CL 9th; Craft Wondrous Item.`,
  ),
  mi(
    "bowsprit-of-war",
    "Bowsprit of War",
    "26,400 gp",
    `A metal bowsprit worked for war: the ship gains a +4 bonus on ramming, counts as one size larger for ram damage, rams inflict double damage, and the bowsprit prevents the two ships from locking together after a ram. CL 13th; Craft Wondrous Item.`,
  ),
  mi(
    "enchanted-cannonball",
    "Enchanted Cannonball",
    "priced as ammunition enhancement",
    `Cannonballs enchanted exactly as magic ammunition is — an enhancement bonus from +1 to +5, priced as an ammunition enhancement (per the book's special rules, the construction follows the standards for magic ammunition, with Craft Magic Arms and Armor). Spellcasters in coastal cities craft them; wise captains keep a small cache aboard just in case.`,
  ),
  mi(
    "fear-guard-figurehead",
    "Fear Guard Figurehead",
    "240,000 gp (minor artifact)",
    `A figurehead carved to resemble a fear guard — an evil incorporeal undead — with the head, torso and outstretched arms of the hooded figure. The ship carries an unholy aura field from it. A minor artifact; CL 18th. Appraise DC 16 identifies what the carving depicts. Few exist today; most went down with the collectors who mounted them.`,
  ),
  mi(
    "gunwale-of-deflection",
    "Gunwale of Deflection",
    "25,000 gp",
    `An enchanted length of a ship's gunwale that turns aside ranged attacks against the protected side of the vessel, granting a +5 deflection bonus to AC against ranged attacks from that side; a ship may mount one on each side. (The book's heading reads "Deflection"; its body text once calls the item a gunwale of "protection" — headed name kept.) CL 11th; Craft Wondrous Item.`,
  ),
  mi(
    "keel-of-unearthly-strength",
    "Keel of Unearthly Strength",
    "72,000 gp",
    `A keel fashioned for a sailing ship that massively reinforces her: the ship's Structure Dice and Hardness are increased by 25%, and the ship's AC is increased by 2. The keel must be built to the specifications of the individual ship and, once used in the construction of a ship, is permanently bonded — it cannot be removed to build a new ship. Strong transmutation or conjuration; CL 12th; Craft Wondrous Item, ironwood or wall of iron.`,
  ),
  mi(
    "living-mast-and-sail",
    "Living Mast and Sail",
    "66,000 gp",
    `A towering mainmast that is literally a living tree — branches for yardarms, a massive leaf for a sail, roots extending through the hull into the water beneath (fresh or salt, it makes no difference). The speed and maneuverability of a ship equipped with a living mast are increased by 25% (round up). It has never been found by itself, and every attempt to separate one from its ship has killed the mast. Created centuries ago by the druid circle of Seadefense; few exist today. It is said some living masts are a type of treant that chose to take to the sea. Moderate transmutation; CL 11th; Craft Wondrous Item, liveoak. Appraise DC 20.`,
  ),
  mi(
    "resilient-hull-plank",
    "Resilient Hull Plank",
    "4,550 gp",
    `A single perfectly white plank in the ship's hull, enhanced with an instantly activating delay sinking spell. The instant the ship's structure reaches zero, the effects of delay sinking kick in, though the spell's duration is doubled. Good for only a single activation and must be replaced once used. Strong abjuration; CL 13th; Craft Wondrous Item, delay sinking. Appraise DC 15.`,
  ),
  mi(
    "sails-of-speed",
    "Sails of Speed",
    "9,000 gp",
    `Average-looking sailcloth decorated with a large red star on both sides. A sailing ship — no matter its number of sails — that replaces at least one sail with this item has its speed increased by 10 ft; mounting multiple sails of this type gains no extra benefit. Moderate transmutation; CL 9th; Craft Wondrous Item, expeditious retreat or longstrider. Appraise DC 15.`,
  ),
  mi(
    "self-repairing-sails",
    "Self-Repairing Sails",
    "7,500 gp",
    `Thick, heavy sailcloth that resists harm from any weapon short of an enchanted one and slowly repairs damage to the ship's sails by itself — completely automatic, one minute of repair per foot of speed lost to damage. The sail continues repairs until the ship's speed is reduced to 25%, at which point the enchantment is destroyed and the sail must be completely replaced. Moderate transmutation; CL 10th; Craft Wondrous Item, mending. Appraise DC 16.`,
  ),
  mi(
    "trusted-wheel",
    "Trusted Wheel",
    "100,000 gp",
    `A heavy 80-inch ship's wheel, polished spoke-ends wrapped in black leather, ornamented with strips of silver and twenty black gemstones; it may be mounted in place of any regular ship's wheel on a sailing ship of medium size or larger. The ship automatically gains the God's Favor [Ship] feat without the need of a cleric, and the ship's saving throw is equal to that of the spellcaster who crafted the particular wheel. All Profession (sailing) checks made by anyone currently using the wheel gain a +4 enhancement bonus. Strong transmutation; CL 17th; Craft Wondrous Item, wish. Appraise DC 18.`,
  ),
];

export const DOZEN_SAILING_SPELLS: SpellDefinition[] = [
  {
    id: "delay-sinking",
    name: "Delay Sinking",
    ruleset: "core",
    school: "Abjuration",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 7 },
    components: "V, S, M",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "One ship touched",
    duration: "1 hour/level",
    savingThrow: "None",
    spellResistance: "Yes",
    summary: `You call up invisible barriers of arcane force that effectively plug holes in the hull of a sinking ship for a short period of time, so crewmen can effect longer-lasting repairs in the hope the ship might safely reach port. A ship under the effect of this spell stops sinking for the duration of the casting; when the spell ends, if no repairs have been made, it begins to sink again. Printed as the spell stored in the Resilient Hull Plank (where its duration is doubled).`,
    source: DOZ,
    sourceUrl: DOZ_PATH,
  },
];

export const DOZEN_SAILING_FEATS: FeatDefinition[] = [
  {
    id: "gods-favor-ship",
    name: "God's Favor [Ship]",
    category: "general",
    prerequisites: [
      "A cleric in the crew, performing regular rituals on board (the feat is taken by/for the ship)",
    ],
    benefitSummary: `The ship is magically defended: the ship itself gains the ability to roll saving throws against magical attacks. The ship's saving throw is equal to that of the ship's cleric. The Trusted Wheel magic item grants this feat to its ship automatically, with the ship's saving throw equal to that of the wheel's crafter instead.`,
    source: DOZ,
    sourceUrl: DOZ_PATH,
    ruleset: "core",
  },
];
