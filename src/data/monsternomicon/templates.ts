import type { TemplateDefinition } from "@/engine/types";

// Monsternomicon templates: the two templates in the Iron
// Kingdoms Monsternomicon (Privateer Press) that print a level
// adjustment — Deathless and Genzoul, both from vol. 2. The
// vol. 2 Revenant template (pp. 130–132) prints a Challenge
// Rating adjustment but no level adjustment line in its
// "Creating a Revenant" block, so it is not converted; the
// Quickplates and Skorne conditioning systems (vol. 2, p. 220
// and the Skorne entries) are modification systems with no
// level adjustment and are likewise omitted. Short mechanical
// summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf

const MN2 = "Iron Kingdoms Monsternomicon, vol. 2";
const MN2_PATH = "/A POC PC related/4.Core books/monster manuals/IK-Monsternomicon, vol. 2.pdf";

export const MONSTERNOMICON_TEMPLATES: TemplateDefinition[] = [
  {
    id: "deathless-ik",
    name: "Deathless",
    ruleset: "iron_kingdoms",
    timing: "acquired",
    summary:
      "An Orgoth death priest bound into undeath by its own foul liturgies: type becomes undead, all Hit Dice become d12s, natural armor improves by +10, and it gains two slam attacks, energy drain, damage reduction 10/holy, spell resistance, spell-like abilities, turn immunity, undead servants, and illusionary dominion over its tomb. (Distinct from the deathless creature type of the Book of Exalted Deeds.)",
    source: `${MN2} — Deathless (pp. 32–35)`,
    sourceUrl: MN2_PATH,
    crModifier: 3,
    levelAdjustment: 8,
    prerequisites: [
      {
        note: "“Deathless” is an acquired template that can be added to any human Orgoth character (referred to hereafter as the base creature). The base creature's level adjustment increases by +8. A deathless has a +10 racial bonus on Knowledge (Orgoth history) checks.",
      },
    ],
    abilityModifiers: { str: 4, con: null, wis: 2, cha: 4 },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to undead (augmented humanoid). All current and future Hit Dice become d12s." },
    ],
    modifiers: [
      {
        id: "deathless-natural-armor",
        source: "Deathless",
        sourceUrl: MN2_PATH,
        target: "ac.natural",
        value: 10,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +10.",
      },
    ],
    features: [
      {
        key: "deathless-attacks",
        name: "Slam Attacks and Energy Drain (Su)",
        description:
          "A deathless gains two slam attacks (damage by size: Small 1d4, Medium 1d6, Large 1d8) if it did not already have them; each slam can bestow one negative level on a living creature it hits (Fortitude save to remove, DC 10 + 1/2 the deathless's Hit Dice + Cha modifier; the DC for each negative level is rolled separately).",
        category: "special-attack",
        source: `${MN2} — Deathless (p. 35)`,
        sourceUrl: MN2_PATH,
      },
      {
        key: "deathless-qualities",
        name: "Deathless Qualities",
        description:
          "Damage reduction 10/holy. Spell resistance equal to 20 + 1 per character level beyond 10th. Spell-like abilities (caster level 18th): at will — command, modify memory; 3/day — dominate person, greater command; 1/day — geas. Turn immunity (Ex): a deathless cannot be turned, but can be banished by holy word and similar spells, and a successful turning check while within the radius of a consecrate spell destroys it. Undead servants: a deathless can have up to 3 × its HD in summoned or created undead under its control. It retains all spells and spell-like abilities of the base creature.",
        category: "special-quality",
        source: `${MN2} — Deathless (p. 35)`,
        sourceUrl: MN2_PATH,
      },
      {
        key: "deathless-illusionary-dominion",
        name: "Illusionary Dominion (Su) and Dark Ascension",
        description:
          "While within the area of its long-abandoned Orgoth temple or tomb, a deathless can weave illusions that can fool even true seeing: a creature must make a Will save (DC 10 + 1/2 the deathless's HD + its Cha modifier) each minute to disbelieve. A deathless cannot leave its tomb (a 2-mile radius) without losing all of its abilities until it returns, and is destroyed if away for more than a year and a day.",
        category: "special-quality",
        source: `${MN2} — Deathless (p. 35)`,
        sourceUrl: MN2_PATH,
      },
    ],
  },
  {
    id: "genzoul",
    name: "Genzoul",
    ruleset: "iron_kingdoms",
    timing: "acquired",
    summary:
      "A corpse-eater warped by the genzoul spirit into a ravening undead predator: type becomes undead, all Hit Dice become d12s, natural armor improves by +4, and it gains a bite and claws, a fearsome gaze, the Ravening disease, damage reduction 10/magic, fast healing 3, and an unstoppable hunger for raw flesh.",
    source: `${MN2} — Genzoul (pp. 70–72)`,
    sourceUrl: MN2_PATH,
    crModifier: 2,
    levelAdjustment: 4,
    prerequisites: [
      {
        note: "“Genzoul” is an acquired template that can be added to any humanoid creature (referred to hereafter as the base creature). The base creature's level adjustment increases by +4. Alignment changes to chaotic evil.",
      },
    ],
    abilityModifiers: { str: 4, dex: 4, con: null, wis: 4, cha: 2 },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to undead (augmented humanoid or monstrous humanoid). All current and future Hit Dice become d12s." },
      { op: "add-speed", value: "climb", amount: 10, note: "Gains a climb speed of 10 feet and a +10-foot increase to the base creature's land speed." },
    ],
    modifiers: [
      {
        id: "genzoul-natural-armor",
        source: "Genzoul",
        sourceUrl: MN2_PATH,
        target: "ac.natural",
        value: 4,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +4.",
      },
    ],
    features: [
      {
        key: "genzoul-attacks",
        name: "Bite, Claws, Gorge, and Ravening (Su)",
        description:
          "A genzoul gains a bite attack and two claw attacks (by size: Small bite 1d4/claws 1d3, Medium 1d6/1d4, Large 1d8/1d6). Gorge (Ex): when not in combat, a genzoul rarely stops eating; it remains satiated for 1 hour per 5 pounds of flesh consumed, and for every hour after that takes a cumulative –1 penalty to Armor Class, attack rolls, and saving throws until it feeds again. Ravening (Su): a creature struck by a genzoul's natural weapons must make a Fortitude save (DC 10 + 1/2 the genzoul's HD + its Cha modifier) or contract the Ravening, a supernatural disease whose victims waste away unless they eat huge amounts of food, and can pass the hunger on by bite.",
        category: "special-attack",
        source: `${MN2} — Genzoul (p. 72)`,
        sourceUrl: MN2_PATH,
      },
      {
        key: "genzoul-qualities",
        name: "Fearsome Gaze, Cannibal Control, and Feasting",
        description:
          "Fearsome Gaze (Su): creatures meeting a genzoul's gaze within 30 feet must make a Will save or be shaken for 4d6 rounds. Cannibal Control (Su): a genzoul can command up to twice its Hit Dice in cannibal spirits (Charisma check, as rebuking undead). Damage reduction 10/magic and fast healing 3. Feasting: a genzoul heals 1 hit point per pound of fresh humanoid flesh it consumes. False Cadaver (Ex): at rest, a genzoul is indistinguishable from a normal corpse (DC 30 Spot check to notice signs of life).",
        category: "special-quality",
        source: `${MN2} — Genzoul (p. 72)`,
        sourceUrl: MN2_PATH,
      },
    ],
  },
];
