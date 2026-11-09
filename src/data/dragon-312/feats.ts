import type { FeatDefinition } from "@/engine/types";

// Dragon Magazine #312 (WotC/Paizo, D&D 3.5) feats — fourteen in
// all: the ten necromancer feats from the Necromancers article
// (pp. 37–38) and the four enchanter feats from the Mind
// Controllers article (pp. 50–51). Transcribed from the magazine
// text on archive.org. Prerequisites arrays carry only the printed
// Prerequisites lines — the necromancer feats print none.
// Benefit summaries are short mechanical paraphrases in our own
// words; no magazine prose is reproduced.
//
// Category note: the catalog's FeatCategory union has no
// "necromantic" value, so the eight [Necromantic] feats use
// category "general" with the printed feat type carried at the
// head of the benefit summary (the issue-311 convention for
// bracketed types). The article's framing rules for necromantic
// feats ride in each such feat's `special` field: they are applied
// to a corpse or skeleton before it is animated with animate dead;
// each costs preparation as listed in the feat; each raises the
// created undead's effective Hit Dice for control purposes only
// (it does not affect turning), stacking with other necromantic
// feats but never with itself on the same creature; a necromancer
// specialist may select necromantic feats as wizard bonus feats.

const DM312 = "Dragon Magazine #312";
const DM312_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt";

const NECROMANTIC_SPECIAL = "Necromantic feat: applied to a corpse or skeleton before animate dead is cast on it, with the preparation given in the feat. The feat raises the undead's effective Hit Dice for control purposes only (not for turning); multiple different necromantic feats stack on one creature, but the same feat cannot be applied twice to the same creature. A necromancer specialist may take necromantic feats as wizard bonus feats.";

export const DRAGON_312_FEATS: FeatDefinition[] = [
  // ---- Metamagic feats (Necromancers article, p. 37) ----
  {
    id: "fell-energy-spell",
    name: "Fell Energy Spell",
    category: "metamagic",
    prerequisites: [],
    benefitSummary: "[Metamagic] Any numerical bonus a spell grants is increased by +2 when the spell is cast on undead targets — bonuses to ability scores, AC, saving throws, attack rolls, and the like. The increase does not apply to a spell's range, saving throw DC, or any healing it provides. A fell energy spell takes up a spell slot one level higher than the spell's actual level, and it affects only undead: cast on a mixed group, only the undead targets receive the increased bonus.",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "song-of-the-dead",
    name: "Song of the Dead",
    category: "metamagic",
    prerequisites: [],
    benefitSummary: "[Metamagic] A mind-affecting spell modified by this feat works on intelligent undead creatures as though they were living, but has no effect on living creatures or constructs. The spell's school changes to necromancy. A song of the dead spell takes up a spell slot one level higher than the spell's actual level.",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  // ---- Necromantic feats (Necromancers article, pp. 37–38) ----
  {
    id: "bolster-power",
    name: "Bolster Power",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains +1 turn resistance. Preparation: none beyond the base animate dead components. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "death-curse",
    name: "Death Curse",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] When the prepared undead is destroyed, it detonates in a burst that deals 1d3 points of damage per Hit Die of the undead to everything in a 10-foot spread (Reflex DC 15 for half). Preparation: 1 day and 25 gp of materials. Effective Hit Dice for control: +2.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "graveborn-expert",
    name: "Graveborn Expert",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains a +4 bonus on one Strength- or Dexterity-based skill, chosen when the feat is applied. The feat does not let it use a trained-only skill untrained. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "graveborn-warrior",
    name: "Graveborn Warrior",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains one bonus feat of the creator's choice for which it qualifies. Preparation: 25 gp of crushed gems added to the material components of animate dead. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "heightened-agility",
    name: "Heightened Agility",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains a +4 bonus to Dexterity. Preparation: 1 day, a successful DC 13 Heal check, and 25 gp of crushed gems worked into the body. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "heightened-strength",
    name: "Heightened Strength",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains a +4 bonus to Strength. Preparation: 1 day, parts taken from a corpse of the same size, a successful DC 13 Heal check, and 25 gp of crushed gems. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "uncanny-speed",
    name: "Uncanny Speed",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains a +2 bonus on initiative checks and +10 feet of speed. Preparation: 1 day, parts taken from another corpse, a successful DC 16 Heal check, and 50 gp of crushed gems; a body looted for this feat's parts cannot itself be animated. Effective Hit Dice for control: +2.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "vicious-claws",
    name: "Vicious Claws",
    category: "general",
    prerequisites: [],
    benefitSummary: "[Necromantic] The prepared undead gains a +1 bonus on damage rolls with its natural weapons, and a zombie so prepared deals slashing damage with its slam attack as well. Preparation: 1 day and 5 gp worth of bladed weapons worked into the body. Effective Hit Dice for control: +1.",
    special: NECROMANTIC_SPECIAL,
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  // ---- Enchanter feats (Mind Controllers article, pp. 50–51) ----
  {
    id: "charming",
    name: "Charming",
    category: "general",
    prerequisites: ["Cha 13", "Negotiator"],
    benefitSummary: "You gain a +3 bonus on all Charisma checks made to exert control over the target of one of your mind-affecting spells, including opposed Charisma checks between rival casters competing for control of the same creature.",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "combat-charm",
    name: "Combat Charm",
    category: "general",
    prerequisites: ["Wis 13"],
    benefitSummary: "Creatures threatened by you or your allies gain no +5 bonus on their saving throws against your charm spells — being in combat or threatened does not make your charms any easier to resist.",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "commanding",
    name: "Commanding",
    category: "general",
    prerequisites: ["Cha 15", "Persuasive"],
    benefitSummary: "The saving throw DC of every compulsion spell you cast increases by +1. This bonus stacks with Spell Focus (enchantment) and Greater Spell Focus (enchantment).",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
  {
    id: "puppet-master",
    name: "Puppet Master",
    category: "general",
    prerequisites: ["Wis 13"],
    benefitSummary: "Your mental influence is harder to notice: the Sense Motive DC to detect that a creature is under the effect of one of your mind-affecting spells increases by +5 (to DC 30 for most such spells, or DC 20 for dominate person and dominate monster).",
    source: DM312,
    sourceUrl: DM312_PATH,
    ruleset: "core",
  },
];
