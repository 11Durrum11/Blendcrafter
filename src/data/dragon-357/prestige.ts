// Dragon Magazine #357 prestige class — integrated in the Dragon
// Magazine treatment program (issue #357 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-357/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Demogorgon, updated printing, staged as the -357 record beside the live Book of Vile Darkness record under the side-by-side pairs rule; its summoning features and Demogorgon's Will are held to the pack reference. The printed GOOD Will save diverges from the live record's poor Will — flagged in the pack, the live record untouched.
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
const SRC = "Dragon Magazine #357 — Demonomicon of Iggwilv: Demogorgon (James Jacobs), pp. 27-29";

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-demogorgon-357",
    name: "Thrall of Demogorgon",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (religion) 2 ranks, Knowledge (the planes) 4 ranks, Knowledge (any other) 2 ranks",
      "Feats: Thrall to Demon (Demogorgon), Willing Deformity",
      "Special: Must be able to cast 1st-level spells or use sneak attack (+1d6)",
      "Special: Must have been initiated into the cult of Demogorgon in the rite known as the Feast of the Self",
    ],
    progression: [
      { level: 1, bab: 1, fort: 2, ref: 0, will: 2 },
      { level: 2, bab: 2, fort: 3, ref: 0, will: 3 },
      { level: 3, bab: 3, fort: 3, ref: 1, will: 3 },
      { level: 4, bab: 4, fort: 4, ref: 1, will: 4 },
      { level: 5, bab: 5, fort: 4, ref: 1, will: 4 },
      { level: 6, bab: 6, fort: 5, ref: 2, will: 5 },
      { level: 7, bab: 7, fort: 5, ref: 2, will: 5 },
      { level: 8, bab: 8, fort: 6, ref: 2, will: 6 },
      { level: 9, bab: 9, fort: 6, ref: 3, will: 6 },
      { level: 10, bab: 10, fort: 7, ref: 3, will: 7 },
    ],
    classSkills: [
      "Bluff",
      "Climb",
      "Concentration",
      "Hide",
      "Intimidate",
      "Jump",
      "Knowledge (any)",
      "Move Silently",
      "Profession",
      "Search",
      "Sense Motive",
      "Spot",
      "Survival",
      "Swim",
      "Use Rope",
    ],
    features: [
      {
        name: "Thrall of Demogorgon Basics",
        description:
          "The thrall of Demogorgon is the devoted cultist of the Prince of Demons, the two-headed lord of the Abyss; this record is the article's updated version of the Book of Vile Darkness prestige class of the same name. Weapon and Armor Proficiency: a thrall is proficient with all simple and martial weapons, with all types of armor, and with all shields (except tower shields). Three of the class's printed features — summon minor demon (5th), summon major demon (9th), and Demogorgon's will (10th) — are held out of this staged record under APOC screening (summoning does not work in APOC, and Demogorgon's will is a petition to a power outside the sealed crystal sphere); they are carried in full in the pack's reference.md for Shaun's call at integration. Key abilities: Charisma (sets the DCs of the thrall's supernatural and spell-like features) and Strength.",
        level: 1,
      },
      {
        name: "Spellcasting or Feat",
        description:
          "At 1st, 4th, 7th, and 10th level the thrall chooses one of two benefits: his spellcasting advances (+1 level of an existing spellcasting class — new spells per day and an increased effective level of spellcasting only, no other benefit of that class), or he gains a bonus feat of his choice (he must meet the feat's prerequisites). The choice can differ each time it arises: a thrall may take the bonus feat at one opportunity and the spellcasting level at the next.",
        level: 1,
      },
      {
        name: "Scaly Flesh (Ex)",
        description:
          "The thrall's flesh turns dark and scaly, raising his natural armor bonus by +1. The bonus grows by a further +1 every three levels beyond 1st (+2 at 4th, +3 at 7th, +4 at 10th). It stacks with natural armor gained from the thrall's creature type, but not with natural armor provided by magic.",
        level: 1,
      },
      {
        name: "Hypnosis (Sp)",
        description:
          "Once per day, a thrall of 1st level or higher can attempt to hypnotize one creature, functioning as the hypnosis spell with these changes: the effect lasts as long as the thrall spends a full-round action each round maintaining his gaze on the victim and the victim is bound or otherwise securely restrained; a successful Will save (DC 10 + thrall level + Charisma modifier) negates it. While hypnotized, the victim answers the thrall's questions as truthfully as it is able and cannot intentionally lie, though it gains no new saving throw for being questioned. When the effect ends the victim remembers the conversation only as a dream. Using this ability is an evil act.",
        level: 1,
      },
      {
        name: "Touch of Fear (Su)",
        description:
          "From 2nd level, the thrall can unnerve a foe with a touch: a successful melee touch attack forces the target to save (Will, DC 10 + thrall level + Charisma modifier) or be affected as by a fear spell cast at the thrall's class level. The thrall can use this ability once per day per two thrall levels. Using it is an evil act.",
        level: 2,
      },
      {
        name: "Reaching Touch (Su)",
        description:
          "From 3rd level, the thrall can deliver touch spells and touch abilities (including touch of fear, rotting touch, and death touch) as if his reach were 10 feet greater than normal (usually 15 feet), without physically moving or stretching; making such an attack provokes attacks of opportunity as a ranged attack made while in melee does. He may instead extend natural-weapon or weapon attacks by the same 10 feet, but then takes a -4 penalty on all his attack rolls for 1 round.",
        level: 3,
      },
      {
        name: "Dual Actions (Ex)",
        description:
          "From 4th level, when the thrall benefits from a haste spell or a similar speed-enhancing effect, he may take two full rounds' worth of actions on his turn (or any lesser combination) in place of the extra action such effects normally grant.",
        level: 4,
      },
      {
        name: "Rotting Touch (Su)",
        description:
          "Once per day from 6th level, the thrall's melee touch makes a victim's flesh wither and rot on contact, dealing 1d6 points of Strength damage, 1d6 points of Constitution damage, and 1d4 points of Charisma damage.",
        level: 6,
      },
      {
        name: "Two Personas (Su)",
        description:
          "At 8th level the thrall's single mind divides into two distinct personas sharing one body, echoing his two-headed master. He can take two rounds' worth of actions on his turn, as with dual actions, without needing a haste effect, and effects that target, read, or control a single mind do not automatically reach both personas; the second persona has its own mental outlook, rolled and tracked as printed in the article (see the pack's reference.md for the full text).",
        level: 8,
      },
      {
        name: "Death Touch (Su)",
        description:
          "Once per day from 8th level, the thrall can slay with a touch: a successful melee touch attack forces the target to save (Fortitude, DC 10 + thrall level + Charisma modifier) or die. A target that makes the save still takes 5d6 points of damage.",
        level: 8,
      },
    ],
  },
];

export const DRAGON_357_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
