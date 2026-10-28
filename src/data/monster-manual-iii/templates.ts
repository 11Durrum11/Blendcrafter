import type { TemplateDefinition } from "@/engine/types";

// Monster Manual III templates: the three templates in the book
// that print a level adjustment — Spellwarped Creature (p. 162),
// Voidmind Creature (p. 187), and Woodling (p. 197). The book's
// fourth template, Living Spell (p. 91), prints level adjustment
// — and is not converted. Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 3.pdf

const MM3 = "Monster Manual III";
const MM3_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 3.pdf";

export const MONSTER_MANUAL_III_TEMPLATES: TemplateDefinition[] = [
  {
    id: "spellwarped",
    name: "Spellwarped Creature",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature infused with powerful magic until the changes bred true: type changes to aberration, natural armor improves by +2, and it gains spell resistance and spell absorption. Challenge Rating varies with the base creature's Hit Dice (3 or less: as base creature; 4–10: +1; 11 or more: +2) — the +1 recorded here is the middle step of that printed schedule.",
    source: `${MM3} — Spellwarped Creature (pp. 162–163)`,
    sourceUrl: MM3_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "“Spellwarped” is an inherited template that can be added to any corporeal aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, plant, or vermin. Alignment becomes usually evil (any). (The sample spellwarped ettin's printed level adjustment of +8 is the ettin's own +5 plus this template's +3.)",
      },
    ],
    abilityModifiers: { str: 4, dex: 2, con: 4, int: 4 },
    patches: [
      { op: "set-type", value: "Aberration", note: "Type changes to aberration (gaining the augmented subtype if necessary); do not recalculate Hit Dice, base attack bonus, saves, or skill points. Size is unchanged." },
    ],
    modifiers: [
      {
        id: "spellwarped-natural-armor",
        source: "Spellwarped Creature",
        sourceUrl: MM3_PATH,
        target: "ac.natural",
        value: 2,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +2 (stacks with any existing natural armor bonus).",
      },
    ],
    features: [
      {
        key: "spellwarped-spell-resistance",
        name: "Spell Resistance (Ex)",
        description:
          "A spellwarped creature gains spell resistance equal to 11 + its Hit Dice; if the creature already has spell resistance, use the greater of the two values.",
        category: "special-quality",
        source: `${MM3} — Spellwarped Creature (p. 163)`,
        sourceUrl: MM3_PATH,
      },
      {
        key: "spellwarped-spell-absorption",
        name: "Spell Absorption (Su)",
        description:
          "Whenever a spell fails to penetrate a spellwarped creature's spell resistance, the creature gains one benefit, chosen when the spell resolves: Might (+4 enhancement bonus to Strength for 1 minute), Agility (+4 enhancement bonus to Dexterity for 1 minute), Endurance (+4 enhancement bonus to Constitution for 1 minute), Life (temporary hit points equal to 5 × the level of the failed spell), Speed (base speed increases by 5 feet × the level of the failed spell), or Resistance (resistance 10 to one energy type: acid, cold, electricity, fire, or sonic).",
        category: "special-quality",
        source: `${MM3} — Spellwarped Creature (p. 163)`,
        sourceUrl: MM3_PATH,
      },
    ],
  },
  {
    id: "voidmind",
    name: "Voidmind Creature",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A creature whose brain was partly eaten by three mind flayers and replaced with psionically charged slime: it gains a sentient tentacle, cone of slime, constrict and improved grab, damage reduction 5/magic, broad immunities, and spell resistance — and is bound to its illithid masters through the mind flayer host quality.",
    source: `${MM3} — Voidmind Creature (pp. 187–189)`,
    sourceUrl: MM3_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "“Voidmind” is an acquired template that can be added to any living aberration, animal, dragon, fey, giant, humanoid, magical beast, monstrous humanoid, plant, or vermin. Type does not change. A voidmind creature has a +4 racial bonus on Bluff, Escape Artist, and Intimidate checks and gains Alertness, Combat Reflexes, and Great Fortitude as bonus feats (if the base creature meets the prerequisites and doesn't already have them).",
      },
    ],
    abilityModifiers: { str: 4, dex: 2, con: 4, int: 2, cha: -2 },
    patches: [],
    features: [
      {
        key: "voidmind-sentient-tentacle",
        name: "Sentient Tentacle, Constrict, and Improved Grab (Ex)",
        description:
          "A voidmind creature gains a sentient tentacle that attacks of its own accord with reach up to 10 feet; the creature can direct it, and it does not hinder the creature's other attacks. If the tentacle hits a creature of the voidmind creature's size category or smaller, it can attempt to start a grapple as a free action without provoking attacks of opportunity (+4 racial bonus on grapple checks made with the tentacle); a successful grapple lets it constrict for damage by size (Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6) plus 1-1/2 times its Strength bonus.",
        category: "special-attack",
        source: `${MM3} — Voidmind Creature (pp. 188–189)`,
        sourceUrl: MM3_PATH,
      },
      {
        key: "voidmind-cone-of-slime",
        name: "Cone of Slime (Su)",
        description:
          "Once per day, a voidmind creature can spray a 30-foot cone of psionic slime from its skull (2d6 points of acid damage for a Medium creature; Reflex half). Any creature damaged by the slime takes a –2 penalty on Will saves and is stunned for 1d4+1 rounds (Fortitude negates the stun). The slime replenishes itself automatically in 24 hours. Save DCs are Constitution-based.",
        category: "special-attack",
        source: `${MM3} — Voidmind Creature (pp. 187–189)`,
        sourceUrl: MM3_PATH,
      },
      {
        key: "voidmind-qualities",
        name: "Voidmind Qualities",
        description:
          "Damage reduction 5/magic. Immunity to acid and to mind-affecting spells and abilities (charms, compulsions, phantasms, patterns, and morale effects), and immunity to ability damage, ability drain, and energy drain. Spell resistance equal to 10 + Hit Dice. Mind flayer host (Su): the creature's three illithid creators are instantly aware if it takes damage, leaves their range of control, or is targeted by magic; any one of them can see and hear through its senses to a range of five miles as a standard action, take control of it at will as dominate monster (no save), and manifest its own psionic abilities through it.",
        category: "special-quality",
        source: `${MM3} — Voidmind Creature (p. 189)`,
        sourceUrl: MM3_PATH,
      },
    ],
  },
  {
    id: "woodling",
    name: "Woodling",
    ruleset: "core",
    timing: "inherited",
    summary:
      "A creature suffused with plant life until its skin is bark and its hair is leaves: type does not change, but it gains full plant traits, natural armor improves by +7, a slam attack, low-light vision, spell-like abilities by Hit Dice, and vulnerability to fire.",
    source: `${MM3} — Woodling (pp. 197–199)`,
    sourceUrl: MM3_PATH,
    crModifier: 2,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "“Woodling” is an inherited template that can be added to any corporeal animal, dragon, fey, giant, humanoid, magical beast, or monstrous humanoid. A woodling has a +4 bonus on Hide checks and Move Silently checks in aboveground natural environments.",
      },
    ],
    patches: [],
    modifiers: [
      {
        id: "woodling-natural-armor",
        source: "Woodling",
        sourceUrl: MM3_PATH,
        target: "ac.natural",
        value: 7,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +7.",
      },
    ],
    features: [
      {
        key: "woodling-slam",
        name: "Slam Attack",
        description:
          "A woodling retains all the attacks of the base creature and gains a slam attack if it didn't already have one, dealing damage by size: Fine 1, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 2d8, Colossal 4d6.",
        category: "special-attack",
        source: `${MM3} — Woodling (p. 199)`,
        sourceUrl: MM3_PATH,
      },
      {
        key: "woodling-spell-like-abilities",
        name: "Spell-Like Abilities",
        description:
          "A woodling with a Wisdom score of 8 or higher gains cumulative spell-like abilities by Hit Dice (caster level equals HD; save DCs are Charisma-based): 1–2 HD entangle 1/day; 3–5 HD summon nature's ally II 1/day; 6–7 HD speak with plants 3/day; 8–10 HD summon nature's ally IV 1/day; 11–12 HD command plants 1/day; 13–15 HD summon nature's ally VI 1/day; 16–18 HD animate plants 1/day; 19–20 HD summon nature's ally VIII 1/day; 21+ HD control plants 1/day and summon nature's ally IX 1/day.",
        category: "special-attack",
        source: `${MM3} — Woodling (p. 199)`,
        sourceUrl: MM3_PATH,
      },
      {
        key: "woodling-plant-traits",
        name: "Plant Traits and Vulnerability to Fire",
        description:
          "A woodling gains low-light vision and full plant traits: immunity to poison, magic sleep effects, paralysis, polymorph, stunning, and mind-affecting spells and abilities (charms, compulsions, phantasms, patterns, and morale effects), and it is not subject to extra damage from critical hits. Vulnerability to fire (Ex): a woodling takes half again as much (+50%) damage from fire effects, whether or not a saving throw is allowed and regardless of the save's result.",
        category: "special-quality",
        source: `${MM3} — Woodling (p. 199)`,
        sourceUrl: MM3_PATH,
      },
    ],
  },
];
