import type { MagicItemDefinition } from "@/engine/types";

// Magic of Incarnum (WotC, 2005) — Chapter 5 magic items,
// printed pp. 108-114, plus three priced items printed in
// Chapter 6's prestige-class sections (the Crescent Moon
// Clasp, p. 121, the Pearl of Incarnum Power, p. 147, and
// the specific weapon Trollbane, pp. 131-132),
// transcribed from the pdftotext extraction of Shaun's own
// copy, 2026-11-05. The chapter's two "soulbound" entries
// are armor/shield and weapon special abilities priced as
// enhancement-bonus equivalents (+1 bonus lesser, +3 bonus
// greater), as printed. Tables 5-1 and 5-2 (suggested
// chakra-bind effects for existing items) are DM guidance,
// not items, and are not recorded. Summaries are short
// mechanical paraphrases in our own words; no book prose
// is reproduced. Chapter 6 also prints the specific weapon
// Trollbane (pp. 131-132), recorded here as well.

const MOI = "Magic of Incarnum";
const MOI_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Magic of Incarnum.pdf";
const CH5 = `${MOI} — Chapter 5: Magic`;
const CH6 = `${MOI} — Chapter 6: Prestige Classes`;

export const MAGIC_OF_INCARNUM_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "soulbound-armor-or-shield",
    name: "Soulbound Armor or Shield",
    category: "armor-special-ability",
    cost: "+1 bonus (lesser) or +3 bonus (greater)",
    summary: "Armor/shield special ability (requires at least a +1 enhancement bonus). The wearer invests essentia in it as in a soulmeld: every point of essentia invested increases its enhancement bonus to Armor Class by 1, up to +5. Essentia capacity 2 (lesser) or 4 (greater), limited also by the wearer's normal capacity. Chakra binds — arms (shield): +4 insight bonus on checks or rolls to avoid being bull rushed or overrun, or to avoid the shield being sundered; soul (armor): +4 insight bonus on saves against the attacks of creatures whose alignment opposes the wearer's in any way (neutral characters gain no benefit). CL 6th (lesser) or 18th (greater); Craft Magic Arms and Armor, magic vestment, essentia pool 2 or 4.",
    source: `${CH5} — Soulbound Armor or Shield, p. 110`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
  {
    id: "soulbound-weapon",
    name: "Soulbound Weapon",
    category: "weapon-special-ability",
    cost: "+1 bonus (lesser) or +3 bonus (greater)",
    summary: "Weapon special ability (requires at least a +1 enhancement bonus). The wielder invests essentia in it as in a soulmeld: every point invested increases its enhancement bonus on attack and damage rolls by 1, up to +5. Essentia capacity 2 (lesser) or 4 (greater), limited also by the wielder's normal capacity. Chakra bind (choose one benefit per day): arms — +2 insight bonus on rolls to confirm critical hits with the weapon; brow — once per round, reroll a miss-chance percentile roll lost to concealment; hands — +2 insight bonus on initiative checks while the weapon is held. CL 6th (lesser) or 18th (greater); Craft Magic Arms and Armor, magic weapon, essentia pool 2 or 4.",
    source: `${CH5} — Soulbound Weapon, pp. 111-112`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
  {
    id: "glove-of-incarnum-theft",
    name: "Glove of Incarnum Theft",
    category: "wondrous",
    cost: "8,000 gp",
    summary: "Midnight-blue leather glove set with a single ruby. As a standard action, make an unarmed touch attack with the gloved hand: on a hit the wearer gains 1 point of essentia and the target loses 1 point from his essentia pool (Will DC 15 negates; no effect if the target has no pool). Stolen essentia can be invested immediately with no action, remains in the wearer's pool for 1 minute, then returns to its owner. Chakra bind (hands): the save DC increases by 2. A matched pair (12,000 gp) can steal 2 points with a full-round two-glove touch attack. Moderate necromancy, CL 7th; Craft Wondrous Item, rend essentia. Weight 1 lb.",
    source: `${CH5} — Glove of Incarnum Theft, p. 114`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
  {
    id: "crescent-moon-clasp",
    name: "Crescent Moon Clasp",
    category: "wondrous",
    cost: "6,000 gp",
    summary: "A silver brooch in the shape of a crescent moon partially obscured by clouds, given to each new member of the Knights of the Crescent Moon on acceptance. While wearing it, a character with an essentia pool gains a +1 sacred bonus on attack rolls against evil creatures. It uses the amulet, medallion, or brooch item slot. Faint evocation, CL 6th; Craft Wondrous Item, prayer, creator must be good.",
    source: `${CH6} — Crescent Moon Clasp, p. 121`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
  {
    id: "pearl-of-incarnum-power",
    name: "Pearl of Incarnum Power",
    category: "wondrous",
    cost: "1,500 gp (1st), 6,000 gp (2nd), 13,500 gp (3rd), 24,000 gp (4th), 37,500 gp (5th), 54,000 gp (6th), 73,500 gp (7th), 96,000 gp (8th), 121,500 gp (9th)",
    summary: "A pearl with a slightly cloudy sheen, a relic passed down among soulcasters. Like a pearl of power, it enables the possessor to recall any one spell he has already prepared and cast — and in addition, restore any essentia that was invested in that spell as part of the same action: the spell is prepared again with its invested essentia, just as if it had not been cast. Each pearl functions once per day, and only for spells of one particular level (priced by that level, as listed). Strong transmutation, CL 17th; Craft Wondrous Item, creator must be able to cast spells of the spell level to be recalled and must have an essentia pool.",
    source: `${CH6} — Pearl of Incarnum Power, p. 147`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
  {
    id: "trollbane",
    name: "Trollbane",
    category: "weapon",
    cost: "86,000 gp",
    summary: "A specific weapon: a +3 adamantine flaming burst giantbane warhammer, one of the more famous works of the legendary ironsoul forgemaster Adrulzul Fireheart. Three times per day, a wielder who has either an essentia pool or the ability to bind a soulmeld to his hands chakra can use haste as the spell (CL 9th; self only). When this ability is activated, the weapon smokes with a weird, blue, flickering flame whenever a troll comes within 100 feet of it; the flame is harmless to the wielder or anyone else handling the weapon. Strong evocation, CL 9th; Craft Magic Arms and Armor, essentia pool, summon monster I, haste, plus flame blade, flame strike, or fireball. Cost to create 43,156 gp. Weight 5 lb.",
    source: `${CH6} — Trollbane, pp. 131-132`,
    sourceUrl: MOI_PATH,
    ruleset: "core",
  },
];
