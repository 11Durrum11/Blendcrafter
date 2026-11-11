// Dragon Magazine #345 prestige class — integrated in the Dragon
// Magazine treatment program (issue #345 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-345/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Kostchtchie, staged as printed under the thrall precedents.
// Records carry levels 1-10 progression rows on the class chassis
// with features at their true levels (prestige classes derive
// BAB/saves from their printed tables). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced.

import type { PrestigeClassDefinition } from "@/engine/types";
import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  key?: string;
  name: string;
  category?: string;
  source?: string;
  sourceUrl?: string;
  description: string;
  level?: number;
}

interface RawClassLike {
  id: string;
  name: string;
  role?: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression?: string;
  goodSaves?: string[];
  requirements?: { label: string; value: string }[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  prerequisites?: string[];
  length?: number;
  features: RawFeature[];
}


function deriveBab(rows: ClassLevelProgressionRow[]): string {
  const last = rows[rows.length - 1];
  if (!last) return "half";
  if (last.bab >= last.level) return "full";
  if (last.bab >= Math.floor((last.level * 3) / 4)) return "three-quarter";
  return "half";
}

function deriveSaves(rows: ClassLevelProgressionRow[]): string[] {
  const good = (v: number, lvl: number) => v >= 2 + Math.floor(lvl / 2) - 1;
  const out: string[] = [];
  const last = rows[rows.length - 1];
  if (!last) return out;
  if (good(last.fort, last.level)) out.push("fort");
  if (good(last.ref, last.level)) out.push("ref");
  if (good(last.will, last.level)) out.push("will");
  return out;
}






const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SRC = "Dragon Magazine #345 — Demonomicon of Iggwilv: Kostchtchie (James Jacobs), pp. 27-28";

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-kostchtchie",
    name: "Thrall of Kostchtchie",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Gender: Male",
      "Skills: Intimidate 9 ranks, Knowledge (religion) 4 ranks",
      "Feats: Power Attack, Thrall to Demon (Kostchtchie), Weapon Focus (any bludgeoning weapon)",
      "Special: Ability to rage as a class ability, racial ability, or by being able to cast rage",
      "Special: Must seek out a male frost giant and convince him to convert to the worship of Kostchtchie, or must kill no fewer than ten frost giants who refuse to convert",
    ],
    progression: [
      { level: 1, bab: 1, fort: 2, ref: 0, will: 0 },
      { level: 2, bab: 2, fort: 3, ref: 0, will: 0 },
      { level: 3, bab: 3, fort: 3, ref: 1, will: 1 },
      { level: 4, bab: 4, fort: 4, ref: 1, will: 1 },
      { level: 5, bab: 5, fort: 4, ref: 1, will: 1 },
      { level: 6, bab: 6, fort: 5, ref: 2, will: 2 },
      { level: 7, bab: 7, fort: 5, ref: 2, will: 2 },
      { level: 8, bab: 8, fort: 6, ref: 2, will: 2 },
      { level: 9, bab: 9, fort: 6, ref: 3, will: 3 },
      { level: 10, bab: 10, fort: 7, ref: 3, will: 3 },
    ],
    classSkills: [
      "Climb",
      "Intimidate",
      "Jump",
      "Knowledge (religion)",
      "Listen",
      "Ride",
      "Spot",
      "Survival",
      "Swim",
    ],
    features: [
      {
        name: "Thrall of Kostchtchie Basics",
        description:
          "A thrall of Kostchtchie is a savage barbarian-cultist of Kostchtchie, Prince of Wrath — one of the lone proselytizers and tribal leaders who carry the Prince's worship among the frost giants and other brutes of the cold wastes. Weapon and Armor Proficiency: thralls of Kostchtchie gain no additional proficiency with weapons or armor. The class grants no spellcasting advancement; its power is rage, growing size and strength, and cold immunity's lesser kin. Key abilities: Strength and Constitution.",
        level: 1,
      },
      {
        name: "Disfigured (Ex)",
        description:
          "On becoming a thrall of Kostchtchie, the character's appearance twists and deforms into hideous ugliness. He permanently takes a penalty equal to his class level on Diplomacy, Disguise, and Gather Information checks, but gains an equal bonus on all Intimidate checks. The saving throw DCs of any fear effects he creates increase by 2.",
        level: 1,
      },
      {
        name: "Ability Increases",
        description:
          "As the thrall gains levels, his Strength and Constitution scores improve as shown on the class table (+2 Str at 1st, 4th, 8th, and 10th level; +2 Con at 6th and 10th level). These are ability score increases exactly like those gained every four character levels, and they stack with all other modifiers.",
        level: 1,
      },
      {
        name: "Rage (Ex)",
        description:
          "At 2nd level, the thrall can rage as a barbarian once per day; he may rage twice per day at 5th level and three times per day at 8th level. If he gains the rage ability from another class, these rages stack with those gained from the other class, and his rages can be modified by class abilities such as greater rage and tireless rage.",
        level: 2,
      },
      {
        name: "Resist Cold (Ex)",
        description:
          "At 2nd level, the thrall gains cold resistance 10. This increases by 10 points at 5th level (resistance 20) and by another 10 points at 8th level (resistance 30).",
        level: 2,
      },
      {
        name: "Wrathful Rage (Ex)",
        description:
          "At 3rd level, whenever the thrall enters a rage he can select a favored enemy, using the list of choices available to the ranger when making his selection. Against creatures of his favored enemy type, the thrall gains a +4 bonus on weapon damage rolls while raging.",
        level: 3,
      },
      {
        name: "Thick Skin (Ex)",
        description:
          "At 4th level, the thrall's disfigurement grows to incorporate thickened skin, improving his natural armor bonus by 2.",
        level: 4,
      },
      {
        name: "Unfettered Anger (Ex)",
        description:
          "At 6th level, the thrall becomes immune to the effects of the calm emotions spell. While in a rage, he is immune to charm effects and gains a +4 bonus on saving throws against compulsion effects.",
        level: 6,
      },
      {
        name: "Fiendish Rage (Su)",
        description:
          "At 7th level, the thrall gains the fiendish creature template whenever he rages, for the duration of the rage.",
        level: 7,
      },
      {
        name: "Summon Hound of Kostchtchie (Sp)",
        description:
          "At 9th level, the thrall can summon one of the Prince of Wrath's leucrotta hounds to serve him for 10 rounds in combat, once per day. Summoning the hound is a full-round action; when it arrives, it follows the thrall's spoken commands, and if no commands are given it instinctively attacks the thrall's enemies. (The hound's statistics are digested in the pack's reference.md. APOC: this is a summoning ability — flagged in SCREENING.md; summoning magic does not work in APOC.)",
        level: 9,
      },
      {
        name: "Wrathful Apotheosis (Su)",
        description:
          "At 10th level, the thrall's body undergoes a terrific transformation: his size increases by one category as he grows larger and more muscular. This increase does not impart any changes to his ability scores (those changes are spread out over the course of the thrall's class levels — see Ability Increases), but his new size category does impact his Armor Class and attack rolls as appropriate. His natural armor bonus increases by +2, and his space and reach increase to match his new size category. The thrall gains the cold subtype when he undergoes his wrathful apotheosis. If the thrall was originally a humanoid or monstrous humanoid, his type changes to giant.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_345_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: (c.babProgression ?? deriveBab(c.progression)) as PrestigeClassDefinition["babProgression"],
  goodSaves: (c.goodSaves ?? deriveSaves(c.progression)) as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites ?? (c.requirements ?? []).map((r) => `${r.label}: ${r.value}`),
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
