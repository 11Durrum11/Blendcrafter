// Dragon Magazine #329 (Mar 2005) prestige class — integrated in
// the Dragon Magazine treatment program (issue #329 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-329/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Pazuzu (Demonomicon of Iggwilv: Pazuzu, James
// Jacobs, pp. 62-64): 10 levels, d8, three-quarter BAB, Reflex the
// only good save — header and table verified cell-by-cell against
// rendered page images. Its "Spells Per Day" column grants no
// casting: at 3rd/6th/9th/10th the thrall picks a bonus feat or
// +1 level of an existing class.
// ⚠️ APOC FLAGS (SCREENING.md): Pazuzu himself is a planar-calling
// engine and stays reference-only — planar travel is severed and
// summoning does not work in APOC. The thrall stages as printed,
// including its conjuration-flavored swarm features; the
// prerequisite feat Thrall to Demon is Book of Vile Darkness, with
// the article's own Iron Will fallback carried.
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
const SRC = "Dragon Magazine #329 — Demonomicon of Iggwilv: Pazuzu (James Jacobs), pp. 62-64";

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-pazuzu",
    name: "Thrall of Pazuzu",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Skills: Bluff 9 ranks, Diplomacy 9 ranks, Knowledge (the planes) 5 ranks, Sense Motive 5 ranks",
      "Feats: Persuasive, Thrall to Demon (Book of Vile Darkness; if that book is unavailable, replace Thrall to Demon with Iron Will, as printed)",
      "Special: Must be able to fly naturally, or must be able to cast at least 2 different spells that grant flight or the ability to move upward through the air (feather fall does not qualify; levitate and air walk do; alter self, polymorph, and the wild shape ability each fulfill one of the spell requirements)",
      "Special: Must have convinced another creature to call upon Pazuzu's aid without having resorted to magic",
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
      "Bluff",
      "Diplomacy",
      "Forgery",
      "Gather Information",
      "Intimidate",
      "Knowledge (any)",
      "Listen",
      "Sense Motive",
      "Spot",
    ],
    features: [
      {
        name: "Thrall of Pazuzu Basics",
        description:
          "A thrall of Pazuzu is the devoted cultist of Pazuzu, Prince of the Lower Aerial Kingdoms, who spreads his name so that the desperate call upon him and are corrupted by his aid. Weapon and Armor Proficiency: thralls of Pazuzu are proficient with no weapons, armor, or shields. Spellcasting: the class grants no spellcasting of its own; at 3rd, 6th, 9th, and 10th level the thrall instead chooses either a bonus feat or +1 level of an existing spellcasting class (see Bonus Feat or Spells). Key abilities: Charisma, Dexterity, and Constitution.",
        level: 1,
      },
      {
        name: "Temptation (Ex)",
        description:
          "The thrall of Pazuzu is a master of temptation: she gains a +2 profane bonus on any Bluff, Diplomacy, or Intimidate checks made to attempt to convince a creature to perform an action against its nature. Additionally, when she casts a spell or uses a spell-like ability from the school of Enchantment, she adds +1 to the DC to resist the spell's effects and +2 on any rolls made to penetrate spell resistance.",
        level: 1,
      },
      {
        name: "Breath of Pazuzu I (Su)",
        description:
          "Once per day, the thrall of Pazuzu may exhale a single locust swarm (Monster Manual p. 239) from her mouth as a standard action. The locust swarm persists for a number of rounds equal to the thrall's class level plus her Charisma modifier, or until it is slain. At least one square of the swarm's space must be adjacent to the thrall's space, and she can create the swarm so it occupies the space of creatures (including herself). This swarm never distracts, damages, or otherwise harms the thrall who created it.",
        level: 1,
      },
      {
        name: "Flight (Ex)",
        description:
          "At 2nd level, the thrall of Pazuzu grows a single pair of black raven wings, gaining a fly speed of 20 feet (average). If the thrall already has a fly speed, her fly speed increases by +20 feet and her wings (if she has any) change to look like black raven wings.",
        level: 2,
      },
      {
        name: "Speak with Avian (Sp)",
        description:
          "A thrall of Pazuzu can communicate with any creature that has a natural fly speed as if with the tongues spell.",
        level: 2,
      },
      {
        name: "Bonus Feat or Spells",
        description:
          "When a thrall of Pazuzu attains 3rd, 6th, 9th, and 10th level, she gains new spells per day as if she had also gained a level in whatever spellcasting class she belonged to before she added this prestige class, or else she gains a bonus feat of her choice. If she chooses the +1 spellcasting level, she does not gain any other benefit a character of that class would have gained: she adds the new level to the level of her other spellcasting class and determines spells per day, spells known, and caster level accordingly. If she had more than one spellcasting class before becoming a thrall of Pazuzu, she must decide to which class she adds the level. She is free to choose the bonus feat at one opportunity and the spellcasting level at the next, or vice versa. Characters who are not spellcasters must choose the bonus feat.",
        level: 3,
      },
      {
        name: "Swarmform (Su)",
        description:
          "At 3rd level, a thrall of Pazuzu can assume the form of a locust swarm as a standard action, 1/day. This ability functions similarly to a druid's wild shape ability, save that only one form can be assumed, and the thrall can maintain the swarmform for only 1 minute per thrall of Pazuzu level. She can use swarmform 2/day at 6th level and 3/day at 9th level.",
        level: 3,
      },
      {
        name: "Charm Avian (Sp)",
        description:
          "At 4th level, a thrall of Pazuzu may use charm monster as a spell-like ability. She can use this ability a number of times per day equal to half her thrall of Pazuzu level, and she can only target creatures with a natural fly speed with this ability.",
        level: 4,
      },
      {
        name: "Breath of Pazuzu II (Su)",
        description:
          "At 5th level, the thrall of Pazuzu may use her breath of Pazuzu ability twice per day, and each time she does so she creates two locust swarms.",
        level: 5,
      },
      {
        name: "Swarm Mastery (Su)",
        description:
          "At 7th level, the thrall of Pazuzu forms an unholy bond with creatures of the swarm subtype. She never becomes distracted by swarms and never takes damage from swarms. Further, any swarms she summons or conjures gain the fiendish creature template.",
        level: 7,
      },
      {
        name: "Dominate Avian (Sp)",
        description:
          "At 8th level, the thrall of Pazuzu can replace two daily uses of her charm avian spell-like ability with dominate avian. This functions as dominate monster, yet can only be used to target creatures with a natural fly speed.",
        level: 8,
      },
      {
        name: "Improved Flight (Ex)",
        description:
          "At 10th level, the thrall of Pazuzu's fly speed increases by +30 feet, and her maneuverability rating improves to perfect. While flying, she gains a +4 insight bonus on initiative checks.",
        level: 10,
      },
      {
        name: "Breath of Pazuzu III (Su)",
        description:
          "At 10th level, the thrall of Pazuzu may use her breath of Pazuzu ability three times per day, and each time she does so she creates three locust swarms. Alternatively, she can substitute a 30-foot cone of acidic gas for the locust swarm effect. This cone of gas inflicts 10d6 points of acid damage to all those caught in its area; a successful Reflex save (DC 20 + the thrall of Pazuzu's Constitution modifier) halves the damage.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_329_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
