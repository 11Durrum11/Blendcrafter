import type { MagicItemDefinition } from "@/engine/types";

// Cityscape (WotC, D&D 3.5) magic items. The printed
// book contains NO magic item chapter, so every record
// here comes from "Urban Tools," the Cityscape web
// enhancement by Ari Marmell whose pages are appended
// to part 2 of Shaun's copy (the pages headed
// "Cityscape, Part 3"): 1 shield special ability,
// 1 weapon special ability, 1 specific weapon, and
// 2 wondrous items. The Urban Tools article ends with
// the guardian's lantern, which is therefore the last
// magic item in the copy. Transcribed from Shaun's own
// copy. Summaries are short mechanical paraphrases in
// our own words, carrying the printed aura, caster
// level, creation prerequisites, and creation cost; no
// book or article prose is reproduced. The
// duo-dimensional jug is flagged in SCREENING.md (its
// second interior is an extradimensional space).

const CS = "Cityscape";
const CS2_PATH = "library-staging/books/cityscape-part2.pdf";
const TOOLS = `${CS} — Urban Tools (web enhancement, Ari Marmell)`;

export const CITYSCAPE_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Armor/shield special ability (Urban Tools) ----
  {
    id: "sentinel",
    name: "Sentinel",
    ruleset: "core",
    category: "armor",
    cost: "+15,120 gp",
    summary: "Shield special ability (almost always added to shields, though it can technically go on a helm or breastplate). The shield is irrevocably tied to a small mirror created with it. As a standard action (command), the bearer causes an image of whatever the shield is facing to appear in the mirror, not unlike a scrying spell: the mirror's holder sees everything in a 120-foot cone in front of the shield (or less, if ambient light reduces visibility), and the effect is blocked by anything that blocks scrying. The connection can be severed as a move action. Usable three times per day for up to 7 minutes at a time; if either the shield (or armor) or the mirror is destroyed, the ability is lost. Moderate divination; CL 7th; Craft Magic Arms and Armor, scrying; Price +15,120 gp; Cost to Create 7,560 gp, 605 XP.",
    source: `${TOOLS} — Magic Armor and Shield Special Ability`,
    sourceUrl: CS2_PATH,
  },
  // ---- Weapon special ability (Urban Tools) ----
  {
    id: "assassination",
    name: "Assassination",
    ruleset: "core",
    category: "weapon",
    cost: "+1 bonus",
    summary: "Weapon special ability. The weapon deals an extra 1d6 points of damage against a foe who is flat-footed or otherwise denied a Dexterity bonus to AC, or who is flanked; this stacks with sneak attack damage from other sources. The wielder never risks poisoning herself when applying poison to an assassination weapon, and the save DC of any poison applied to the weapon increases by an amount equal to the weapon's enhancement bonus (a +1 weapon raises poison DCs by 1, a +3 weapon by 3). Moderate divination; CL 7th; Craft Magic Arms and Armor, true strike, creator must have sneak attack +2d6; Price +1 bonus; Cost to Create varies.",
    source: `${TOOLS} — Magic Weapon Special Ability`,
    sourceUrl: CS2_PATH,
  },
  // ---- Specific weapon (Urban Tools) ----
  {
    id: "bolt-of-arrest",
    name: "Bolt of Arrest",
    ruleset: "core",
    category: "weapon",
    cost: "307 gp (1,407 gp for the greater version)",
    summary: "Specific weapon (ammunition). A +1 bolt of dark wood with a black iron head: any humanoid struck by it must make a DC 12 Will save or be paralyzed, as per the hold person spell. A rare greater version affects all creatures (except those immune to mind-affecting effects) with a save DC of 16. Faint enchantment (Moderate for the greater version); CL 3rd (7th for the greater version); Craft Magic Arms and Armor, hold person (greater version requires hold monster); Price 307 gp (2nd) or 1,407 gp (5th) for the greater version; Cost to Create 150 gp (plus 7 gp for the masterwork bolt), 12 XP (greater version 700 gp [plus 7 gp for the masterwork bolt], 56 XP).",
    source: `${TOOLS} — Specific Weapon`,
    sourceUrl: CS2_PATH,
  },
  // ---- Wondrous items (Urban Tools) ----
  {
    id: "duo-dimensional-jug",
    name: "Duo-Dimensional Jug",
    ruleset: "core",
    category: "wondrous item",
    cost: "1,000 gp",
    summary: "Wondrous item (item level 4th; body slot — [held]; weight 8 lb.). A jug with two interiors, each holding up to a gallon of liquid: one accessed normally, and one in an extradimensional space, accessed by speaking the command word as you remove the cork (filling or emptying it as you choose). Anyone who removes the cork without the command word reaches only the normal contents. Only liquids can be placed in the extradimensional space — particularly useful for smuggling poisons and potions. Activation: standard (command). Faint transmutation; CL 5th; Craft Wondrous Item, rope trick; Price 1,000 gp; Cost to Create 500 gp, 40 XP.",
    source: `${TOOLS} — Wondrous Items`,
    sourceUrl: CS2_PATH,
  },
  {
    id: "guardians-lantern",
    name: "Guardian's Lantern",
    ruleset: "core",
    category: "wondrous item",
    cost: "7,750 gp",
    summary: "Wondrous item (item level 11th; body slot — [held]; weight 2 lb.). A hooded lantern that requires no fuel and burns with no heat, activated or deactivated by turning a knob at the top (standard action, manipulation). All weapons glow when brought within the lantern's 60-foot radius of dim illumination, and all invisible creatures glow within its 30-foot radius of bright illumination (detecting or failing to detect as per the detect weaponry and see invisibility spells). The glow is visible only to the person who manipulates the knob, who need not be holding the lantern but must be within 5 feet of it. Usable up to 1 hour per day, in increments that each round up to the next 10-minute interval. Moderate divination and evocation; CL 7th; Craft Wondrous Item, continual flame, detect weaponry, see invisibility; Price 7,750 gp; Cost to Create 3,785 gp, 310 XP.",
    source: `${TOOLS} — Wondrous Items`,
    sourceUrl: CS2_PATH,
  },
];
