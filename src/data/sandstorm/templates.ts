/**
 * Sandstorm template data pack: the three playable templates of
 * Chapter 6 of Sandstorm (Wizards of the Coast) — half-janni,
 * dry lich, and dustform creature. Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Sandstorm.pdf
 *
 * The chapter's other "as characters" entries are monster or
 * cohort entries, not templates, and are not converted. Page
 * citations are the book's printed page numbers; in this PDF
 * the printed page is the PDF page minus one. (The PDF's text
 * layer is missing for printed pp. 137–164, so the dry lich and
 * dustform creature entries were read by OCR from the page
 * images and checked against them.)
 */
import type { TemplateDefinition } from "@/engine/types";

const SS = "Sandstorm";
const SS_PATH = "/A POC PC related/5.Splat/Sandstorm.pdf";
const CH6 = `${SS} — Chapter 6: Monsters and Templates`;

export const SANDSTORM_TEMPLATES: TemplateDefinition[] = [
  {
    id: "half-janni",
    name: "Half-Janni",
    ruleset: "core",
    timing: "inherited",
    summary:
      "Offspring of the jann of the waste: natural armor improves by +1, gains spell-like abilities, a once-daily planar jaunt to the Elemental Planes or the Astral Plane, and fire resistance 5.",
    source: `${CH6} — Half-Janni (pp. 165–166)`,
    sourceUrl: SS_PATH,
    crModifier: 1,
    levelAdjustment: 3,
    prerequisites: [
      {
        note: "Half-janni is an inherited template that can be added to any humanoid creature.",
      },
    ],
    abilityModifiers: { str: 2, dex: 2, int: 2, wis: 2 },
    patches: [],
    modifiers: [
      {
        id: "half-janni-natural-armor",
        source: "Half-Janni",
        sourceUrl: SS_PATH,
        target: "ac.natural",
        value: 1,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +1.",
      },
    ],
    features: [
      {
        key: "half-janni-spell-like-abilities",
        name: "Janni Spell-Like Abilities",
        description:
          "1/day — enlarge person, invisibility, reduce person, speak with animals. Caster level equals the half-janni's Hit Dice.",
        category: "special-attack",
        source: `${CH6} — Half-Janni (p. 166)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "half-janni-planar-jaunt",
        name: "Planar Jaunt (Sp)",
        description:
          "Once per day, a half-janni can transport itself to one of the Elemental Planes or the Astral Plane, as plane shift; it automatically returns after a number of minutes equal to its Hit Dice.",
        category: "special-attack",
        source: `${CH6} — Half-Janni (p. 166)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "half-janni-fire-resistance",
        name: "Fire Resistance and Bonus Feat",
        description: "Fire resistance 5. A half-janni gains Improved Initiative as a bonus feat.",
        category: "special-quality",
        source: `${CH6} — Half-Janni (p. 166)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "dry-lich",
    name: "Dry Lich",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A divine caster mummified by the Sere Rite: type becomes Undead, all Hit Dice become d12s, natural armor improves by +5, and it gains a desiccating touch, constitution drain, an aura of despair, damage reduction, fast healing in arid lands, and unholy toughness — bound to five canopic jars that hold its life force.",
    source: `${CH6} — Creating a Dry Lich (pp. 157–158)`,
    sourceUrl: SS_PATH,
    crModifier: 3,
    levelAdjustment: 5,
    prerequisites: [
      {
        note: "Dry lich is an acquired template that can be added to any living creature, provided it can create the required canopic jars and undergo the Sere Rite. In practice the path is the walker in the waste prestige class, whose 10th level grants this template through the rite.",
      },
    ],
    abilityModifiers: { str: 2, wis: 4, cha: 2, con: null },
    patches: [
      { op: "set-type", value: "Undead", note: "Type changes to Undead; the creature gains undead traits and has no Constitution score. All current and future Hit Dice change to d12s." },
    ],
    modifiers: [
      {
        id: "dry-lich-natural-armor",
        source: "Dry Lich",
        sourceUrl: SS_PATH,
        target: "ac.natural",
        value: 5,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +5.",
      },
    ],
    features: [
      {
        key: "dry-lich-desiccating-touch",
        name: "Desiccating Touch (Su)",
        description:
          "A dry lich's touch drains moisture from living creatures, dealing 5d6 points of desiccation damage (5d8 against plant creatures and elementals with the water subtype); a Fortitude save (Wisdom-based DC) halves the damage. A dry lich with natural weapons can add the desiccation damage to one natural weapon attack.",
        category: "special-attack",
        source: `${CH6} — Creating a Dry Lich (p. 157)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dry-lich-constitution-drain",
        name: "Constitution Drain (Su)",
        description:
          "Any living creature a dry lich hits with its touch attack must succeed on a Fortitude save or take 1d6 points of Constitution drain. With each successful drain, the dry lich gains 5 temporary hit points.",
        category: "special-attack",
        source: `${CH6} — Creating a Dry Lich (p. 157)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dry-lich-aura-of-despair",
        name: "Aura of Despair (Su)",
        description:
          "A dry lich is surrounded by a terrible sense of age, loss, and death: any creature within 60 feet must succeed on a Will save or be shaken for 1d4 rounds. A creature that saves successfully cannot be affected by the same dry lich's aura again for 24 hours.",
        category: "special-attack",
        source: `${CH6} — Creating a Dry Lich (p. 157)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dry-lich-qualities",
        name: "Dry Lich Qualities",
        description:
          "Damage reduction 10/bludgeoning and magic. Fast healing 2 while in an arid environment (a humid climate, water-based effects such as fog cloud, or immersion in water prevent it). Immune to dehydration, heat, polymorph (except effects it uses on itself), and mind-affecting spells and abilities. Turn resistance +6. Unholy toughness: bonus hit points equal to its Charisma bonus (minimum +1) times its Hit Dice. Water weakness: all water deals damage to a dry lich as if it were holy water. Dry liches have a +8 racial bonus on Hide, Intimidate, Listen, Move Silently, Search, and Spot checks. Alignment: any nongood.",
        category: "special-quality",
        source: `${CH6} — Creating a Dry Lich (pp. 157–158)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dry-lich-canopic-jars",
        name: "The Sere Rite and Canopic Jars",
        description:
          "To become a dry lich, a 10th-level walker in the waste must undergo the Sere Rite, which requires the participation of at least one other dry lich, and craft a set of five canopic jars to preserve its internal organs. The jars are Tiny objects of magically hardened clay or ceramic (40 hit points, hardness 20, break DC 40) with a caster level equal to the creator's at the time of creation. They retain the dry lich's life force: unless they are destroyed, a slain dry lich resurrects within 1d6 weeks of its destruction.",
        category: "special-quality",
        source: `${CH6} — The Sere Rite (p. 158)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "dustform-creature",
    name: "Dustform Creature",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A creature returned as compacted dust: type becomes Construct, all Hit Dice become d10s, natural armor improves by +5, gains a slam attack and a dust breath weapon, blindsight, and damage reduction 5/magic — but loses its Constitution and Intelligence scores and all its former special attacks.",
    source: `${CH6} — Creating a Dustform Creature (pp. 161–162)`,
    sourceUrl: SS_PATH,
    crModifier: 2,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "Dustform is an acquired template that can be added to any living creature. A dustform creature's alignment is always neutral.",
      },
    ],
    abilityModifiers: { str: 4, dex: -2, con: null, int: null },
    patches: [
      { op: "set-type", value: "Construct", note: "Type changes to Construct; the creature gains construct traits and has no Constitution or Intelligence score. All current and future Hit Dice change to d10s." },
    ],
    modifiers: [
      {
        id: "dustform-natural-armor",
        source: "Dustform Creature",
        sourceUrl: SS_PATH,
        target: "ac.natural",
        value: 5,
        mode: "improve",
        bonusType: "natural-armor",
        note: "Natural armor improves by +5.",
      },
    ],
    features: [
      {
        key: "dustform-slam",
        name: "Slam Attack",
        description:
          "A dustform creature retains all the base creature's attacks and gains a slam attack if it didn't already have one (damage by size: Fine —, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 2d8, Colossal 4d6).",
        category: "special-attack",
        source: `${CH6} — Creating a Dustform Creature (p. 161)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dustform-breath-weapon",
        name: "Breath Weapon (Su)",
        description:
          "A dustform creature loses all the special attacks of the base creature but gains a breath weapon: as a standard action every 2d4 rounds it spews a 10-foot cone of dust and sand dealing 1d6 points of damage per 2 Hit Dice (Reflex save for half; the DC is Charisma-based). If the base creature already has a breath weapon, that breath weapon instead changes to sand with a Charisma-based save DC, its other details unchanged.",
        category: "special-attack",
        source: `${CH6} — Creating a Dustform Creature (pp. 161–162)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dustform-qualities",
        name: "Dustform Qualities",
        description:
          "Blindsight 60 ft. (Ex): dustform creatures are blind but sense all creatures within 60 feet by detecting subtle vibrations in the air; beyond that range they treat all targets as having total concealment. Construct traits, including immunity to poison, sleep, paralysis, stunning, and mind-affecting effects, and no extra damage from critical hits or flanking; a dustform creature cannot be polymorphed into a nondustform creature. Damage reduction 5/magic, and its natural weapons count as magic weapons for overcoming damage reduction. +8 racial bonus on Hide checks in a sandy or dusty environment.",
        category: "special-quality",
        source: `${CH6} — Creating a Dustform Creature (p. 162)`,
        sourceUrl: SS_PATH,
      },
      {
        key: "dustform-weakness",
        name: "Dustform Weakness",
        description:
          "A critical hit with a bludgeoning weapon forces the dustform creature to make a Will save (DC 10 + damage dealt) or dissolve into lifeless dust again.",
        category: "special-quality",
        source: `${CH6} — Dustform Creature Weaknesses (p. 162)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
];
