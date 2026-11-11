// Dragon Magazine #330 (Apr 2005) prestige class — integrated in
// the Dragon Magazine treatment program (issue #330 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-330/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Jester (Gaining Prestige, Richard Pett, pp. 74-77): d6,
// 6+Int skills, three-quarter BAB, Reflex the only good save —
// header and table verified against rendered page images.
// The issue's Umbragen and Far Realm features screen entirely to
// reference (SCREENING.md): drow do not exist in APOC, and the Far
// Realm sits outside the sealed crystal sphere.
// Feature descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

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
const SRC = "Dragon Magazine #330 — Gaining Prestige: The Jester (Richard Pett), pp. 74-77";

const RAW: RawClassLike[] = [
  {
    id: "jester",
    name: "Jester",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    prerequisites: [
      "Skills: Perform (comedy) 13 ranks, Perform (any other) 13 ranks, Bluff 6 ranks",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 2, will: 0 },
      { level: 2, bab: 1, fort: 0, ref: 3, will: 0 },
      { level: 3, bab: 2, fort: 1, ref: 3, will: 1 },
      { level: 4, bab: 3, fort: 1, ref: 4, will: 1 },
      { level: 5, bab: 3, fort: 1, ref: 4, will: 1 },
      { level: 6, bab: 4, fort: 2, ref: 5, will: 2 },
      { level: 7, bab: 5, fort: 2, ref: 5, will: 2 },
      { level: 8, bab: 6, fort: 2, ref: 6, will: 2 },
      { level: 9, bab: 6, fort: 3, ref: 6, will: 3 },
      { level: 10, bab: 7, fort: 3, ref: 7, will: 3 },
    ],
    classSkills: [
      "Balance",
      "Bluff",
      "Climb",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Knowledge (local)",
      "Knowledge (nobility and royalty)",
      "Perform",
      "Sense Motive",
      "Sleight of Hand",
      "Tumble",
    ],
    features: [
      {
        name: "Jester Basics",
        description:
          "The jester is the trusted clown of the noble court, the comic actor everyone flocks to see, or the juggler on the street corner — irreverent, witty, and roguish, playing the fool while laughter does his work. Weapon and Armor Proficiency: the jester gains no proficiency with any weapons or armor. Spell-Like Abilities: as he advances, the jester gains abilities in Perform that make his spells more potent, plus a number of spell-like abilities to complement them. For all of the jester's spell-like abilities, his caster level equals his jester levels plus his bard levels (if any), and the DCs equal 10 + spell level + his Charisma modifier. The bard class provides the easiest path to the jester; monks and rogues also make good entry paths. Key abilities: Charisma (for Perform checks and spellcasting) and Dexterity.",
        level: 1,
      },
      {
        name: "Enhanced Perform (Ex)",
        description:
          "Select one Perform skill in which you have at least 13 ranks. You gain a bonus on all checks of the appropriate Perform skill equal to your jester level. Your exceptional talent allows you to make unequalled performances, as shown in the article's Enhanced Perform Check sidebar: results beyond the PHB's DC 30 'extraordinary performance' scale up through memorable (DC 40) and masterful (DC 50) performances to a DC 75 'performance of a lifetime,' whose effects can include audiences remembering the show for the rest of their lives, strangers recognizing the performer on sight, and onlookers changing alignment under the performance's sway.",
        level: 1,
      },
      {
        name: "Enthrall (Sp)",
        description:
          "You can cast enthrall once per day per two jester levels (minimum once per day).",
        level: 1,
      },
      {
        name: "Tasha's Hideous Laughter (Sp)",
        description:
          "You can cast Tasha's hideous laughter once per day per jester level.",
        level: 1,
      },
      {
        name: "Vice Versa (Ex)",
        description:
          "At 2nd level your special training enables you to use your act as a tool to befriend, befuddle, or belittle. Once per day per two jester levels you can choose to use the result of a Perform skill check in place of a Bluff, Diplomacy, or Intimidate check.",
        level: 2,
      },
      {
        name: "Little Spell (Sp)",
        description:
          "At 2nd level and again at 3rd level, choose a spell from the following list to cast as a spell-like ability once per day: dominate person, modify memory, phantasmal killer, or shout. Once you have chosen a spell for this ability you may not change it later.",
        level: 2,
      },
      {
        name: "Ridicule of Persuasion (Sp)",
        description:
          "Beginning at 3rd level you gain the ability to infuse your jests and wordplay with magical energy. These ridicules take several different forms: a ridicule simulates a specific spell, but it has only a verbal component and it is a language-dependent, mind-affecting effect. The least powerful ridicule, the ridicule of persuasion, mimics the effects of the charm monster spell, with the modifications common to all ridicules. At 3rd level, you may use only one ridicule per day (in total, across all of your ridicules).",
        level: 3,
      },
      {
        name: "Silently Enthralling Laugh (Su)",
        description:
          "At 4th level you gain the ability to cast silent versions of your enthrall and Tasha's hideous laughter spell-like abilities, as if you were using the Silent Spell metamagic feat. This does not increase the number of spell-like abilities you may use in one day.",
        level: 4,
      },
      {
        name: "Middling Spell (Sp)",
        description:
          "At 5th level and again at 6th level, choose a spell from the following list to cast as a spell-like ability once per day: mind fog, mislead, song of discord, or mass suggestion. Once you have chosen a spell for this ability you may not change it later.",
        level: 5,
      },
      {
        name: "Ridicule of Insanity (Sp)",
        description:
          "Beginning at 6th level you gain access to the ridicule of insanity, which mimics the effects of the insanity spell, with the modifications common to all ridicules. At 6th level, you may use a total of two ridicules per day.",
        level: 6,
      },
      {
        name: "Quick Enthralling Laugh (Su)",
        description:
          "At 7th level, once per day you may choose to cast a quickened version of your enthrall and Tasha's hideous laughter spell-like abilities in place of a silent version, as if you were using the Quickened Spell metamagic feat. This does not increase the number of spell-like abilities you may use in one day.",
        level: 7,
      },
      {
        name: "Mighty Spell (Sp)",
        description:
          "At 8th level and again at 10th level, choose a spell from the following list to cast as a spell-like ability once per day: demand, Otto's irresistible dance, scintillating pattern, or greater shout. Once you have chosen a spell for this ability you may not change it later.",
        level: 8,
      },
      {
        name: "Quick and Silently Enthralling Laugh (Su)",
        description:
          "At 9th level you may cast quickened, silent versions of your enthrall and Tasha's hideous laughter spell-like abilities three times per day in place of normal, silent, or quickened versions. This does not increase the number of spell-like abilities you may use in one day.",
        level: 9,
      },
      {
        name: "Ridicule of Death (Sp)",
        description:
          "At 10th level you gain access to the ridicule of death, which mimics the effects of the power word kill spell, with the modifications common to all ridicules. At 10th level, you may use a total of three ridicules per day.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_330_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
