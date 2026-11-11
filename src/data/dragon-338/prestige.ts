// Dragon Magazine #338 prestige class — integrated in the Dragon
// Magazine treatment program (issue #338 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-338/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Wormhunter prestige class, staged as printed.
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
const SRC = "Dragon Magazine #338 — Wormfood: The Wormhunter (James Jacobs), pp. 70-73";

const RAW: RawClassLike[] = [
  {
    id: "wormhunter",
    name: "Wormhunter",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    prerequisites: [
      "Special: Must have suffered at least 4 points of Intelligence damage from a worm of Kyuss (this damage need not be inflicted by a single worm)",
      "Special: Must meet at least two of the following five conditions: base attack bonus +7; ability to cast 4th-level divine spells; Knowledge (religion) 10 ranks; base Fortitude save +4; sneak attack +4d6",
      "Special: Must have read through a copy of the Apostolic Scrolls",
    ],
    progression: [
      { level: 1, bab: 0, fort: 2, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 3, ref: 0, will: 3 },
      { level: 3, bab: 2, fort: 3, ref: 1, will: 3 },
      { level: 4, bab: 3, fort: 4, ref: 1, will: 4 },
      { level: 5, bab: 3, fort: 4, ref: 1, will: 4 },
    ],
    classSkills: [
      "Concentration",
      "Decipher Script",
      "Gather Information",
      "Heal",
      "Intimidate",
      "Knowledge (arcana)",
      "Knowledge (history)",
      "Knowledge (religion)",
      "Search",
      "Sense Motive",
      "Spellcraft",
      "Survival",
    ],
    features: [
      {
        name: "Wormhunter Basics",
        description:
          "A wormhunter gains no new weapon or armor proficiencies. Several of the class's powers key on the \"minions of Kyuss,\" a category that includes all cultists of Kyuss, any creatures that work directly for Kyuss (such as avolakias), and undead created by or associated with Kyuss (such as the spawn of Kyuss or the ulgurstasta). The class's signature mechanic is the gift of the worm (below): each gift requires the wormhunter to obtain a Kyuss worm. A wormhunter can harvest a worm from a slain spawn of Kyuss, but most find it easier to buy one: a preserved Kyuss worm costs 1,800 gp (this includes the cost of the potion of gentle repose the dormant worm is stored in), is usually considered an illegal (at worst) or controlled (at best) commodity, and probably requires at least a DC 25 Gather Information check to track down a seller; even then, Kyuss worms are generally not for sale in any settlement smaller than a large town.",
        level: 1,
      },
      {
        name: "Gift of the Worm (Ex)",
        description:
          "By consuming a Kyuss worm, or by allowing one to burrow into his body, a wormhunter can gain a supernatural power at the cost of a portion of his sanity. If he allows a worm to burrow into him, the worm inflicts 1 point of damage per round for 1d4+1 rounds until it reaches his brain, at which point his body absorbs the worm's essence; the worm is killed in the process and does not inflict the Intelligence damage that normally results from a worm reaching the brain. Immediately upon absorbing a worm's essence in this manner, the wormhunter selects one gift from the list below, and must also select one form of madness (see the Madness of the Worm feature); the madness cannot be cured or removed by magic. He gains a second gift (requiring another worm) at 3rd level and a third at 5th level. Once a wormhunter selects a gift and its attendant form of madness, he cannot later change that gift or madness; likewise, he cannot select a gift or madness more than once. THE GIFTS: Cannibalization — you gain a +1 bonus to one ability score of your choice, but take a −1 penalty to two other ability scores or a −2 penalty to one other score. Increased Spellcasting — you gain new spells per day as if you had also gained levels in a spellcasting class you belonged to before adding this prestige class, the number of such levels equal to your current total number of gifts of the worm including this one; selecting this gift more than once does not increase this total (later gains take into account only your current number of gifts, not any that might be gained in the future). Regained Lore — you gain a number of bonus feats equal to your current total number of gifts of the worm including this one (you need not meet the feats' prerequisites); selecting this gift more than once does not increase the total. Sinister Smite (requires the spiritual conduit gift and the ability to rebuke or control undead) — all inflict wounds spells cast upon you function as if affected by both the Empower Spell and Maximize Spell feats (you gain the maximum possible additional hit points), and whenever you successfully sneak attack or score a critical hit against a living creature, you also deal 2 points of Strength damage to the target. Smite Undead (requires the spiritual conduit gift and the ability to turn undead) — all cure wounds spells cast upon you function as if affected by both the Empower Spell and Maximize Spell feats, and you can score critical hits and sneak attack undead creatures as if they were living creatures. Spiritual Conduit — all cure wounds and inflict wounds spells cast on you function as if affected by the Empower Spell feat, and your effective level for turning or rebuking undead increases by a number equal to your current total number of gifts of the worm including this one; selecting this gift more than once does not increase this total.",
        level: 1,
      },
      {
        name: "Madness of the Worm",
        description:
          "Each gift of the worm also inflicts one permanent form of madness, chosen when the gift is gained; the madness cannot be cured or removed by magic, and no madness may be selected more than once. THE MADNESSES: Hypersomnia — you have extreme difficulty staying awake: a constant −2 penalty on all Wisdom-based skill checks, and whenever you are engaged in a repetitive activity (such as using Craft or Profession checks) you must make a DC 10 Will save (up to once per hour) to avoid falling asleep for an hour. Insomnia — you have extreme difficulty falling asleep: each time you try to rest, you must make a DC 20 Will save; failure indicates that your sleep wasn't restful and you awaken fatigued. Paranoia — you are convinced that the world and all that dwells within are out to do you harm: you cannot take the aid another action, nor can you ever receive bonuses on your own checks from an aid another action, and you take a −2 penalty on Bluff and Diplomacy checks. Schizophrenia — constant hallucinations make you appear erratic, chaotic, and unpredictable: a −2 penalty on all Charisma-based skill checks, and if you ever roll a natural 1 when making any Charisma-based check, you must make a DC 15 Will save to avoid becoming confused for 1d4 rounds. Teratophobia — an irrational fear of a type of monster: select one monster type from the list of ranger favored enemies (Player's Handbook, p. 47); you take a −2 penalty on attack rolls, skill checks, and Will saving throws made against these monsters, and if you possess immunity to fear from some other source, that immunity does not apply to fear attacks generated by monsters from this category. Tic Disorder — nervous, often violent spasms cause a constant −1 penalty on all Reflex saving throws and Dexterity-based skill checks.",
        level: 1,
      },
      {
        name: "Kyussbane (Ex)",
        description:
          "A wormhunter is particularly skilled at fighting against the minions of Kyuss. He gains a bonus on all weapon damage rolls and checks to overcome spell resistance made against these creatures equal to his wormhunter level.",
        level: 1,
      },
      {
        name: "Detect Minion (Sp)",
        description:
          "If the wormhunter concentrates, he can sense the proximity of minions of Kyuss via a subtle tingling in his scars. This functions as the spell detect undead, but it only detects minions of Kyuss (be they undead or living). A wormhunter may use this ability at will.",
        level: 2,
      },
      {
        name: "Wormscarred (Su)",
        description:
          "At 2nd level, the wormhunter's body begins to develop patches of scarring, as much physical scars left from being infested by Kyuss worms as they are manifestations of the wormhunter's growing taint and lurking madness. The wormscarred wormhunter is immune to disease and gains a +2 bonus on all saving throws against poison.",
        level: 2,
      },
      {
        name: "Wormeaten (Su)",
        description:
          "At 4th level, a wormhunter's body carries the taint of Kyuss, detectable as a faint magic aura. It grants the wormhunter a +4 bonus on Bluff, Diplomacy, and Disguise checks made against or opposed by undead creatures, as other undead are strangely comforted and lulled by the taint, and a +2 bonus on saving throws made against attacks or spells from any minion of Kyuss. A wormeaten wormhunter need never fear infestation by Kyuss worms again — the worms interpret the taint as indication that the character is already a spawn of Kyuss, and do not attempt to infest him. Wormeaten wormhunters are immune to fear effects generated by the minions of Kyuss. However, a wormeaten wormhunter takes a −2 penalty on all Bluff and Diplomacy checks made against living creatures (save for those made against other wormhunters), since the taint is somewhat unsettling to the living.",
        level: 4,
      },
    ],
  },
];

export const DRAGON_338_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
