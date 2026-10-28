import type { FeatDefinition } from "@/engine/types";

// Liber Mechanika (Privateer Press, 2005) feats (book
// pp. 22–26): the chapter's new and revised feats for the
// Iron Kingdoms. The chapter headnote states that the
// arcane-mechanik feats from the Iron Kingdoms Character
// Guide are reprinted here revised and that "the rules for
// the feats here supersede the rules in the IKCG" — none of
// the fifteen feats below duplicates a record in the
// existing Iron Kingdoms pack (that pack converted only the
// Character Guide's General and Racial feats), so all are
// recorded new. The book's [Society] feat type (the Steam
// and Ironworkers Union feats) is filed under the app's
// "setting-specific" category. Short mechanical summaries
// in our own words, cited to book + page.
// Source PDF: /transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf

const LM = "Liber Mechanika";
const LM_PATH = "/transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf";
const CH1 = `${LM} — Chapter 1: Feats`;

export const LIBER_MECHANIKA_FEATS: FeatDefinition[] = [
  {
    id: "calloused-hands",
    name: "Calloused Hands",
    category: "general",
    prerequisites: ["Strength 13", "Craft (mechanika) 6 ranks or Craft (steam engine) 6 ranks"],
    benefitSummary: "The character can make basic repairs to a piece of mechanika using his bare hands instead of tools, turning bolts and wrestling with sharp gears and components directly. After doing so, he must soak his hands in cool water for two hours or suffer a −4 penalty on all skill checks requiring the use of his hands for the next 24 hours.",
    modifiers: [],
    special: "The character gains a +2 competency bonus when attempting a feat of strength requiring the use of his hands, including bending bars, breaking chains, and grappling — but not contested Strength checks such as bull rush attempts or breaking down doors.",
    source: `${CH1}: Calloused Hands (pp. 22–23)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-cerebral-matrix",
    name: "Craft Cerebral Matrix",
    category: "item-creation",
    prerequisites: ["Craft (mechanika) 6 ranks", "Etch Rune Plate"],
    benefitSummary: "The character may build a cerebral matrix, the primitive precursor to the cortex: it provides a construct with an Intelligence score of 2 and an animal-like intelligence, allowing the construct to respond to Jack Handling skill checks. A cerebral matrix takes 1 week to manufacture and costs 10 XP and 250 gp to produce; as an object it has hardness 5 and 2 hit points.",
    modifiers: [],
    source: `${CH1}: Craft Cerebral Matrix (p. 23)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-cortex",
    name: "Craft Cortex",
    category: "item-creation",
    prerequisites: ["Craft Cerebral Matrix", "Craft (mechanika) 13 ranks", "Craft (alchemy) 13 ranks", "Etch Rune Plate"],
    benefitSummary: "The character may attempt to build a cortex of any grade, the arcane technology that lets a construct operate with rudimentary to advanced intelligence and decision-making ability. Constructing a cortex takes 1 week for every 1,000 gp of its value; the builder must pay 1/25 of its market cost in XP and half of its market cost in gp for the materials.",
    modifiers: [],
    source: `${CH1}: Craft Cortex (p. 23)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-cyriss-tech",
    name: "Craft Cyriss-Tech",
    category: "item-creation",
    prerequisites: ["Craft Wondrous Item", "Craft (clockwork) 6 ranks", "Cleric of Cyriss"],
    benefitSummary: "The character can create Cyriss-tech or devices that incorporate Cyriss-tech components, using raw materials equal in value to one half of the component or item's market cost and expending experience points equal to 1/25 of the item's market value.",
    modifiers: [],
    source: `${CH1}: Craft Cyriss-Tech (p. 23)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-mechanikal-prosthetic",
    name: "Craft Mechanikal Prosthetic",
    category: "item-creation",
    prerequisites: ["Craft (mechanika) 8 ranks", "Craft (clockwork) 8 ranks", "Craft Wondrous Item"],
    benefitSummary: "The character can create a mechanikal appendage (arm or leg) to replace a lost limb. Building one takes one day for each 1,000 gp of its market price; the builder must spend 1/25 of the appendage's price in XP and use up raw materials costing half of this price.",
    modifiers: [],
    special: "Only characters with this feat may repair and maintain mechanikal prosthetics.",
    source: `${CH1}: Craft Mechanikal Prosthetic (pp. 23–24)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-mechanikal-construct",
    name: "Craft Mechanikal Construct",
    category: "item-creation",
    prerequisites: ["Craft (mechanika) 8 ranks", "Craft Wondrous Item"],
    benefitSummary: "The character can create any mechanikal construct whose prerequisites he meets. Building one takes one day for each 1,000 gp in its market price; the builder must spend 1/25 of the construct's price in XP and use up raw materials costing half of this price. A newly created mechanikal construct has average hit points for its Hit Dice. The character can also repair mechanikal constructs that have taken damage, repairing up to 20 points of damage in one day of work.",
    modifiers: [],
    special: "Mechanikal constructs are useless without a cortex or cerebral matrix to guide them; without one, a mechanikal construct is nothing more than an expensive assembly of armor plates, hydraulics, and turbines.",
    source: `${CH1}: Craft Mechanikal Construct (p. 24)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "craft-steam-armor",
    name: "Craft Steam Armor",
    category: "item-creation",
    prerequisites: ["Craft (mechanika) 6 ranks", "Craft (armorsmithing) 6 ranks"],
    benefitSummary: "The character can create a suit of steam armor. Building steam armor takes one day for each 1,000 gp of its market price; the builder must spend 1/25 of the armor's price in XP and use up raw materials costing half of this price. The character can also repair steam armor that has taken damage, repairing up to 20 points of damage in one day of work by expending 5 gp per point of damage repaired.",
    modifiers: [],
    source: `${CH1}: Craft Steam Armor (p. 25)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "etch-rune-plate",
    name: "Etch Rune Plate",
    category: "item-creation",
    prerequisites: ["Scribe Scroll", "Craft (alchemy) 4 ranks"],
    benefitSummary: "The character can create mechanikal rune plates using spells from scrolls or spells the character knows — the vital spell-bearing components of all mechanikal devices. The base price of a rune plate is the spell level × the caster level × 275 gp (its market price is double the base price); etching takes one day for each 1,000 gp in its market price (minimum 1 day), and the character must pay 1/25 of the rune plate's market cost in XP.",
    modifiers: [],
    source: `${CH1}: Etch Rune Plate (p. 25)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "exotic-armor-proficiency-steam-armor",
    name: "Exotic Armor Proficiency (Steam Armor)",
    category: "general",
    prerequisites: ["Craft (mechanika) 4 ranks", "Armor Proficiency (Heavy)"],
    benefitSummary: "The character has learned how to pilot a suit of steam armor into combat — managing its controls, bulky plate, and operations — and may move about and operate a suit of steam armor, gaining the benefits of the armor and its abilities.",
    modifiers: [],
    source: `${CH1}: Exotic Armor Proficiency (Steam Armor) (p. 25)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "mechanikal-aptitude",
    name: "Mechanikal Aptitude",
    category: "general",
    prerequisites: [],
    benefitSummary: "The character has a knack for working with mechanika and gains a +2 bonus on all Craft (mechanika) and Jack Handling checks.",
    modifiers: [],
    source: `${CH1}: Mechanikal Aptitude (p. 25)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "mechanikal-secrets",
    name: "Mechanikal Secrets",
    category: "setting-specific",
    prerequisites: ["Craft (mechanika) 12 ranks", "Knowledge (mechanika) 8 ranks", "Craft Mechanikal Construct", "Union Steamo"],
    benefitSummary: "The character can reduce the base cost to create any mechanikal construct by 20%; this also reduces the amount of experience points expended when creating the construct. (The book prints this as a [Society] feat.)",
    modifiers: [],
    special: "The effects of this feat stack with an arcane mechanik's fabrication score.",
    source: `${CH1}: Mechanikal Secrets (pp. 25–26)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "mechanikal-specialty",
    name: "Mechanikal Specialty",
    category: "general",
    prerequisites: ["Craft (mechanika) 8 ranks", "Knowledge (mechanika) 8 ranks", "Craft Wondrous Item"],
    benefitSummary: "The character gains a +3 bonus to skill checks related to crafting or repairing a specific type of mechanika chosen for this feat: accumulators, arcantrik convergence engines, armor, rods, staves, steamjacks, wands, or weapons.",
    modifiers: [],
    special: "This feat may be taken multiple times, choosing a different type of item as a specialization each time. An arcane mechanik may select Mechanikal Specialty as one of his arcane mechanik bonus feats.",
    source: `${CH1}: Mechanikal Specialty (p. 26)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "quick-fix",
    name: "Quick Fix",
    category: "setting-specific",
    prerequisites: ["Craft (mechanika) 6 ranks", "Union Steamo"],
    benefitSummary: "The character can take 10 as a standard action to repair any broken mechanika. The repair is temporary at best and lasts for a number of minutes equal to the mechanik's Intelligence modifier + the number of his ranks in Craft (mechanika); repairs made with Quick Fix cannot be repaired with consequent uses of the feat and require a full repair job with a +5 DC modifier. (The book prints this as a [Society] feat.)",
    modifiers: [],
    source: `${CH1}: Quick Fix (p. 26)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "rugged-mechanika",
    name: "Rugged Mechanika",
    category: "general",
    prerequisites: ["Mechanikal Secrets"],
    benefitSummary: "The character knows how to build mechanikal constructs that are sturdier and far more durable: any construct built by the character gains an additional 2 hit points per Hit Die and a +2 bonus to its armor class.",
    modifiers: [],
    source: `${CH1}: Rugged Mechanika (p. 26)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
  {
    id: "union-steamo",
    name: "Union Steamo",
    category: "setting-specific",
    prerequisites: ["Craft (mechanika) 4 ranks", "Skill Focus (Craft (mechanika))"],
    benefitSummary: "The character is a member of the Steam and Ironworkers Union. He may register with any Steam and Ironworkers local to find work in a city or town, and while billeted may petition for a billet of a small cot and three meals a day while performing tasks for the union. He gains a 25% discount on the purchase of mechanikal components and mechanika from union-certified shops. If a union member is not paid for a contracted job, he may petition the union to arbitrate; for payments exceeding 5,000 gp the union may send a special negotiator, whose collections require a 10% commission. Each member has a vote in the five-year director elections and the yearly board member elections. (The book prints this as a [Society] feat.)",
    modifiers: [],
    special: "Obligations: union members must represent their work in a professional and courteous manner and perform any job to the best of their ability; neglect of union duties can lead to revocation of membership and permanent blacklisting.",
    source: `${CH1}: Union Steamo (p. 26)`,
    sourceUrl: LM_PATH,
    ruleset: "iron_kingdoms",
  },
];
