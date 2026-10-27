/**
 * Eberron feat data pack: the signature feats of Chapter 3 of the
 * Eberron Campaign Setting (dragonmark feats, action point feats,
 * warforged body feats, and the investigator/bard feats the setting's
 * prestige classes build on). Built 2026-10-26 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf
 * Benefit summaries are short mechanical summaries, per house style.
 */
import type { FeatDefinition } from "@/engine/types";

const ECS = "Eberron Campaign Setting";
const ECS_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf";
const CH3 = `${ECS} — Chapter 3: Heroic Characteristics`;

export const EBERRON_FEATS: FeatDefinition[] = [
  {
    id: "aberrant-dragonmark",
    name: "Aberrant Dragonmark",
    category: "setting-specific",
    prerequisites: ["Dragonmarked race (human, dwarf, elf, gnome, halfling, half-elf, or half-orc)"],
    benefitSummary:
      "Manifest an aberrant dragonmark: choose one aberrant dragonmark spell-like ability, usable 1/day, at a caster level equal to 1/2 your character level (save DC 10 + spell level + your Cha modifier). The mark can never be improved and you can never gain a second mark.",
    modifiers: [],
    source: `${ECS} — Feats: Aberrant Dragonmark (p. 46)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
    special: "A character with a true dragonmark (least, lesser, or greater) cannot select this feat, and a character with this feat cannot later select a true dragonmark feat.",
  },
  {
    id: "action-boost",
    name: "Action Boost",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "When you spend an action point to alter the result of an attack roll, a skill check, a saving throw, or another d20 roll, roll d8s instead of d6s.",
    modifiers: [],
    source: `${ECS} — Feats: Action Boost (p. 47)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "action-surge",
    name: "Action Surge",
    category: "general",
    prerequisites: ["Base attack bonus +3"],
    benefitSummary: "Spend 2 action points to take an extra move action or standard action in a round.",
    modifiers: [],
    source: `${ECS} — Feats: Action Surge (p. 47)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "adamantine-body",
    name: "Adamantine Body",
    category: "race-specific",
    prerequisites: ["Warforged", "1st level only"],
    benefitSummary:
      "Your composite plating is crafted with adamantine: your armor bonus increases to +8 and you gain damage reduction 2/adamantine, but your base land speed drops to 20 feet and you are considered to be wearing heavy armor (maximum Dexterity bonus +1, armor check penalty –5, arcane spell failure chance 35%).",
    modifiers: [],
    source: `${ECS} — Feats: Adamantine Body (p. 50)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
    special:
      "Unlike most feats, this feat must be taken at 1st level, during character creation. Warforged druids who take this feat cannot cast druid spells or use any of the druid's supernatural or spell-like class features, and the feat blocks class features prohibited to a character wearing heavy armor.",
  },
  {
    id: "favored-in-house",
    name: "Favored in House",
    category: "general",
    prerequisites: ["Member of appropriate dragonmarked race and house"],
    benefitSummary:
      "Call in favors from your dragonmarked house: make a favor check (d20 + a bonus based on your character level, against a DC set by the scope of the favor) to gain important information without a Gather Information check, or to acquire the loan of equipment or documents from influential acquaintances.",
    modifiers: [],
    source: `${CH3} — Feats: Favored in House`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "greater-dragonmark",
    name: "Greater Dragonmark",
    category: "setting-specific",
    prerequisites: ["Member of appropriate dragonmarked race and house", "Least Dragonmark", "Lesser Dragonmark", "12 ranks in any two skills"],
    benefitSummary:
      "You gain a greater dragonmark and the use of one spell-like ability associated with the greater dragonmark of your house, and you can use your least and lesser dragonmark spell-like abilities one additional time per day. Your caster level for dragonmark spell-like abilities is 10 + your dragonmark heir level (if any); save DC 10 + spell level + your Cha modifier.",
    modifiers: [],
    source: `${CH3} — Feats: Greater Dragonmark`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "haunting-melody",
    name: "Haunting Melody",
    category: "general",
    prerequisites: ["Bardic music class feature", "Perform 9 ranks"],
    benefitSummary:
      "When you sing or use some other Perform skill, you can unnerve enemies within 30 feet of you, sowing fear through your music.",
    modifiers: [],
    source: `${ECS} — Feats: Haunting Melody (p. 54)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "healing-factor",
    name: "Healing Factor",
    category: "race-specific",
    prerequisites: ["Shifter", "Constitution 13"],
    benefitSummary:
      "When your shifting ends, you heal a number of hit points equal to your character level (the number of class levels you have). This fast healing is an extraordinary ability.",
    modifiers: [],
    source: `${CH3} — Feats: Healing Factor`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "heroic-spirit",
    name: "Heroic Spirit",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Your action point maximum per level is increased by 3: you gain (and can hold) a number of action points equal to 8 + 1/2 your character level at each new level.",
    modifiers: [],
    source: `${ECS} — Feats: Heroic Spirit (p. 55)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
    special: "NPCs normally do not have action points; an NPC who takes this feat gains and can use 3 action points every level.",
  },
  {
    id: "investigate",
    name: "Investigate",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Use the Search skill to find and analyze clues at the scene of a crime or mystery. This use of Search is a full-round action; clues are physical evidence that stands out from the area's normal features and points toward the solution.",
    modifiers: [],
    source: `${ECS} — Feats: Investigate (p. 55)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "least-dragonmark",
    name: "Least Dragonmark",
    category: "setting-specific",
    prerequisites: ["Member of appropriate dragonmarked race and house"],
    benefitSummary:
      "You gain a least dragonmark and the use of one spell-like ability associated with the least dragonmark of your house. Your caster level for the ability is 1 + your dragonmark heir level (if any); save DC 10 + spell level + your Cha modifier.",
    modifiers: [],
    source: `${ECS} — Feats: Least Dragonmark (p. 56)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "lesser-dragonmark",
    name: "Lesser Dragonmark",
    category: "setting-specific",
    prerequisites: ["Member of appropriate dragonmarked race and house", "Least Dragonmark", "9 ranks in any two skills"],
    benefitSummary:
      "You gain a lesser dragonmark and the use of one spell-like ability associated with the lesser dragonmark of your house.",
    modifiers: [],
    source: `${ECS} — Feats: Lesser Dragonmark (p. 56)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "mithral-body",
    name: "Mithral Body",
    category: "race-specific",
    prerequisites: ["Warforged", "1st level only"],
    benefitSummary:
      "Your composite plating is crafted with mithral: your armor bonus increases to +5 and you are considered to be wearing light armor, with a maximum Dexterity bonus of +5, an armor check penalty of –2, and an arcane spell failure chance of 15%.",
    modifiers: [],
    source: `${ECS} — Feats: Mithral Body (p. 57)`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
    special:
      "Unlike most feats, this feat must be taken at 1st level, during character creation. Warforged druids who take this feat cannot cast druid spells or use any of their druid supernatural or spell-like class abilities, and the feat blocks class features prohibited to a character wearing light armor.",
  },
  {
    id: "research",
    name: "Research",
    category: "general",
    prerequisites: [],
    benefitSummary:
      "Use your Knowledge skills to extract information from books, scrolls, and other repositories: navigate a library, filing system, or records store to research a topic, given time (usually 1d4 hours) and a successful skill check; the better the check, the more detailed the information found.",
    modifiers: [],
    source: `${CH3} — Feats: Research`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "song-of-the-heart",
    name: "Song of the Heart",
    category: "general",
    prerequisites: ["Bardic music class feature", "Inspire competence ability", "Perform 6 ranks"],
    benefitSummary:
      "When you use inspire courage, inspire competence, inspire greatness, or inspire heroics, any bonus granted by your music increases by +1; when you use fascinate, suggestion, or mass suggestion, the saving throw DC increases by 1.",
    modifiers: [],
    source: `${CH3} — Feats: Song of the Heart`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "spontaneous-casting",
    name: "Spontaneous Casting",
    category: "general",
    prerequisites: ["Caster level 5th"],
    benefitSummary:
      "Spend 2 action points to swap one of your prepared spells for another spell of the same level, casting it spontaneously instead of the spell you prepared.",
    modifiers: [],
    source: `${CH3} — Feats: Spontaneous Casting`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
  {
    id: "undead-empathy",
    name: "Undead Empathy",
    category: "general",
    prerequisites: ["Charisma 13"],
    benefitSummary:
      "You gain a +4 bonus on Diplomacy checks made to influence the reactions of intelligent undead, and you can also use Diplomacy to influence the actions of mindless undead (in that case without the +4 bonus).",
    modifiers: [],
    source: `${CH3} — Feats: Undead Empathy`,
    sourceUrl: ECS_PATH,
    ruleset: "eberron",
  },
];
