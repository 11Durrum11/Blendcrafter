import type { FeatDefinition } from "@/engine/types";

// Sharn: City of Towers (Eberron, WotC) — the Chapter 6
// feat list, printed pp. 157-158, transcribed from Shaun's
// own scanned copy (read visually; the scan is image-only),
// 2026-11-04. The five feats are the book's whole feat
// content: four keyed to Sharn's manifest zone linked to
// Syrania (the Azure Sky) and one to the Children of Winter.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const SHARN = "Sharn: City of Towers";
const SHARN_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Sharn - City of Towers.pdf";

export const SHARN_FEATS: FeatDefinition[] = [
  {
    id: "filth-eater",
    name: "Filth Eater",
    category: "general",
    prerequisites: [],
    benefitSummary: "You receive a +4 bonus on saving throws against disease or ingested poisons. If you fail your saving throw, ability damage from either of these sources is reduced by 1 point (minimum 1).",
    modifiers: [],
    source: `${SHARN} — p. 157`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "improved-flight-item",
    name: "Improved Flight Item",
    category: "item-creation",
    prerequisites: ["Craft Wondrous Item", "Knowledge (the planes) 6 ranks"],
    benefitSummary: "You can craft a magic item that grants a fly speed in such a way that its powers are enhanced within a manifest zone linked to Syrania, including anywhere within the city of Sharn: when such an item is used in Sharn, the fly speed it grants is increased by 50%, and it can be used an additional two times per day, or continuously if it could otherwise be used three times or more each day. The market price of the item is unchanged. This feat is a prerequisite for creating certain magic items unique to Sharn. In addition, if you also have the Craft Construct feat or the ability to craft a homunculus, any construct you create that has a fly speed gains Manifest Flight as a bonus feat.",
    modifiers: [],
    special: "An artificer may select Improved Flight Item as one of his artificer bonus feats.",
    source: `${SHARN} — p. 157`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "manifest-flight",
    name: "Manifest Flight",
    category: "general",
    prerequisites: ["Fly speed", "Knowledge (the planes) 4 ranks"],
    benefitSummary: "When you are within a manifest zone linked to Syrania, including anywhere within the city of Sharn, your fly speed is increased by 50% and your maneuverability is increased by one step.",
    modifiers: [],
    source: `${SHARN} — p. 157`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "manifest-leap",
    name: "Manifest Leap",
    category: "general",
    prerequisites: ["Knowledge (the planes) 3 ranks", "Jump 6 ranks"],
    benefitSummary: "When you are within a manifest zone linked to Syrania, including anywhere within the city of Sharn, you gain a +5 competence bonus on Jump checks, and you take only 1d4 points of damage for each 10 feet you fall. If you have the slow fall class ability, add 10 feet to the distance you can fall without taking damage. (Normal: You take 1d6 points of damage for each 10 feet you fall.)",
    modifiers: [],
    source: `${SHARN} — pp. 157-158`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "swarms-embrace",
    name: "Swarm's Embrace",
    category: "general",
    prerequisites: ["Child of Winter"],
    benefitSummary: "You are immune to the distraction effect of a swarm and receive damage reduction 6/— against swarm attacks.",
    modifiers: [],
    source: `${SHARN} — p. 158`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
];
