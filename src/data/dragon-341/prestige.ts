// Dragon Magazine #341 prestige class — integrated in the Dragon
// Magazine treatment program (issue #341 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-341/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Baphomet, staged whole with its two flagged pieces per the pack SCREENING (the demon-supplication prerequisite rides as printed under the thrall precedents).
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
const SRC = "Dragon Magazine #341 — Demonomicon of Iggwilv: Baphomet (James Jacobs), pp. 25-26";

const PROGRESSION = [
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
];

const CLASS_SKILLS = [
  "Handle Animal",
  "Intimidate",
  "Knowledge (local)",
  "Knowledge (nature)",
  "Knowledge (religion)",
  "Listen",
  "Ride",
  "Search",
  "Spot",
  "Survival",
];

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-baphomet",
    name: "Thrall of Baphomet",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Base Attack Bonus: +6",
      "Skills: Handle Animal 9 ranks, Intimidate 9 ranks, Knowledge (religion) 4 ranks",
      "Feats: Great Fortitude, Improved Bull Rush, Power Attack, Thrall to Demon (Baphomet)",
      "Special: The character must possess a natural attack",
    ],
    progression: PROGRESSION,
    classSkills: CLASS_SKILLS,
    features: [
      {
        name: "Thrall of Baphomet Basics",
        description:
          "Thralls of Baphomet are brutal warriors who serve Baphomet, Prince of Beasts, as unholy champions, often leading his monstrous worshipers or hiring out as feared mercenaries and bodyguards. The class does not advance spellcasting. Weapon and Armor Proficiency: thralls of Baphomet gain no additional proficiency with weapons or armor. Entry (as printed): chaotic evil; base attack bonus +6; Handle Animal 9 ranks, Intimidate 9 ranks, Knowledge (religion) 4 ranks; Great Fortitude, Improved Bull Rush, Power Attack, and Thrall to Demon (Baphomet); and the character must possess a natural attack — characters without a racial natural attack commonly take Willing Deformity and Deformity (Clawed Hands) to qualify. Most thralls are barbarians, fighters, or rangers. APOC: Baphomet is a demon prince outside the sealed crystal sphere. The class's required feat is a formal supplication to him, and its Dark Communion feature reaches across the planes; both are staged as printed and flagged in SCREENING.md — the remaining features are self-contained and stand on their own.",
        level: 1,
      },
      {
        name: "Fiendish Animal Companion (Ex)",
        description:
          "At 1st level, the thrall gains a fiendish animal as a companion. This functions as the druid's animal companion ability, except that the companion has the fiendish template and the thrall's effective druid level equals twice his thrall of Baphomet level (the companion of a 6th-level thrall is equivalent to an 11th-level druid's companion). The thrall may select from the druid's alternative animal companion lists as a druid can, subject to the same effective-level reductions, and may not select an alternative animal that would reduce his effective druid level below 1st. Once the thrall gains this companion, he loses any other animal companions gained from other class levels and can never again benefit from the standard animal companion ability of those levels.",
        level: 1,
      },
      {
        name: "Breath of Baphomet (Su)",
        description:
          "At 2nd level, the thrall gains a breath weapon, usable once per day. When he gains the ability he chooses its energy type — acid, cold, or fire — and the choice can never be changed. The breath weapon is a line 5 feet long per class level, dealing 1d6 points of damage of the chosen type per class level; a successful Reflex save (DC 10 + the thrall's class level + his Constitution modifier) halves the damage. He can use it twice per day at 4th level, three times per day at 6th, five times per day at 8th, and at will at 10th. A thrall able to use the breath weapon more than once per day must wait 1d4 rounds between uses.",
        level: 2,
      },
      {
        name: "Blessing of the Labyrinth (Ex)",
        description:
          "At 3rd level, the thrall must inscribe his flesh with tattoos of maze patterns (or, if he has horns, carve maze patterns upon them). He is thereafter immune to the maze spell, and while within a maze or labyrinth he gains a +2 profane bonus on attack rolls, weapon damage rolls, and Will saving throws, and a +2 profane bonus to Armor Class.",
        level: 3,
      },
      {
        name: "Feral Visage (Ex)",
        description:
          "At 5th level, the thrall grows a large pair of bull's horns and gains a gore attack as a secondary natural weapon. If he already has a gore attack, he instead gains a bite attack as a secondary natural weapon; if he already has both a gore and a bite, the damage dice of those attacks increase by one category. The new natural weapon deals 1d4 points of damage if the thrall is Small, 1d6 if Medium, or 1d8 if Large (see the Dungeon Master's Guide size tables for smaller or larger thralls). The thrall also gains a +4 competence bonus on Intimidate checks.",
        level: 5,
      },
      {
        name: "Dark Communion (Sp)",
        description:
          "At 7th level, once per week, the thrall can use one of the following as a spell-like ability: commune, dream, lesser planar binding, mark of justice, nightmare, sending, or unhallow. Save DCs are 10 + the spell's level + the thrall's Charisma modifier, and the effect functions at a caster level equal to twice his thrall of Baphomet level. The thrall must use a freshly severed bull's head as an additional focus for the casting, in addition to any material components or XP costs of the spell itself. APOC: commune contacts the patron across the planes and lesser planar binding calls an outsider — both sit on severed-planar canon; flagged in SCREENING.md, record unaltered.",
        level: 7,
      },
      {
        name: "Maze (Sp)",
        description:
          "At 9th level, the thrall can use maze as a spell-like ability three times per day.",
        level: 9,
      },
      {
        name: "Bestial Blessing (Ex)",
        description:
          "At 10th level, the thrall receives final confirmation of the Prince of Beasts' approval as a potent, permanent increase to one ability score: he selects Strength, Dexterity, or Constitution and increases it by 4. This is an untyped bonus, similar to the ability increases gained every four character levels, and so stacks with all other bonuses.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_341_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
