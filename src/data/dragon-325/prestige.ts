// Dragon Magazine #325 (Nov 2004) prestige class — integrated in
// the Dragon Magazine treatment program (issue #325 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-325/
// (MANIFEST.md / SCREENING.md / reference.md).
// The BOWMAN CHARGER (Gaining Prestige, pp. 80-82): 10 levels, d10,
// full BAB, Reflex good — prerequisites, class skills, and the full
// progression image-verified against the class table (p. 81). The
// "Different Bowman Chargers" sidebar is reference.md material.
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

const RAW: RawClassLike[] = [{
  "id": "bowman-charger",
  "name": "Bowman Charger",
  "ruleset": "core",
  "source": "Dragon Magazine #325 — Gaining Prestige: Bowman Charger (Thomas M. Costa), pp. 80-82",
  "sourceUrl": SRC_URL,
  "hitDie": "d10",
  "skillPointsPerLevel": 2,
  "babProgression": "full",
  "goodSaves": ["ref"],
  "prerequisites": [
    "Base Attack Bonus: +6",
    "Skills: Handle Animal 8 ranks, Ride 8 ranks",
    "Feats: Mounted Archery, Mounted Combat, Ride-By Attack, Weapon Focus (composite shortbow)"
  ],
  "progression": [
    { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
    { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
    { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
    { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
    { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 },
    { "level": 6, "bab": 6, "fort": 2, "ref": 5, "will": 2 },
    { "level": 7, "bab": 7, "fort": 2, "ref": 5, "will": 2 },
    { "level": 8, "bab": 8, "fort": 2, "ref": 6, "will": 2 },
    { "level": 9, "bab": 9, "fort": 3, "ref": 6, "will": 3 },
    { "level": 10, "bab": 10, "fort": 3, "ref": 7, "will": 3 }
  ],
  "classSkills": ["Craft", "Handle Animal", "Intimidate", "Ride", "Spot", "Survival"],
  "features": [
    {
      "name": "Basics",
      "description": "Hit Die d10. Weapon and Armor Proficiency: bowman chargers are proficient with all simple and martial weapons, and with light and medium armor and bucklers. Bowman chargers are mounted archers of the steppe nomads, born and raised in the saddle; they fight almost entirely from horseback, retreating from melee to shoot their enemies from a safe distance, and the weapons they almost exclusively use — the composite shortbow, the scimitar, and the spear — are all suited to their mobile style of combat. Class skills: Craft, Handle Animal, Intimidate, Ride, Spot, and Survival.",
      "level": 1
    },
    {
      "name": "Burst of Speed (Ex)",
      "description": "The bowman charger can urge her mount to greater than normal speeds, doubling the distance of the mount's normal charge movement; the mount must charge to use this ability. She can use this ability once per day without risk of injury to her mount. She can try to use it more than once per day by \u201Cpushing\u201D her mount as per the Handle Animal skill (see page 74 of the Player's Handbook). If she succeeds at the skill check, the mount makes an additional charge attack using burst of speed but must make a DC 20 Fortitude save after the charge concludes: on a success the mount becomes fatigued, and on a failure the mount becomes fatigued and takes 2d6 points of damage.",
      "level": 1
    },
    {
      "name": "Two as One (Ex)",
      "description": "At 1st level, the bowman charger can attune herself to her mount, spending two weeks alone with the mount and bringing no food or water for herself or for it — both must eat and drink when and where they can, and she must learn to eat and sleep in the saddle to attune herself to her mount's ways. At the end of the two-week period they become attuned to one another: she gains a bonus on all future Handle Animal checks made to influence her attuned mount equal to her bowman charger level, and the pair gain further benefits at 2nd (Riding Mastery), 4th (Speed of Trust), 6th (Elusive), 8th (Riding Dervish), and 10th level (Horse Sense). She gains these benefits only when riding her attuned mount, and the mount gains them only when ridden by the bowman charger to whom it is attuned. A bowman charger can't be attuned to multiple mounts at the same time; she can decide to attune herself to a different mount, but it takes another two weeks as described to do so.",
      "level": 1
    },
    {
      "name": "Riding Mastery (Ex)",
      "description": "A benefit of the two as one ability: the bowman charger gains a bonus on her Ride checks equal to her bowman charger level.",
      "level": 2
    },
    {
      "name": "Improved Mounted Archery (Ex)",
      "description": "At 3rd level, a bowman charger suffers no penalty when using a ranged weapon from horseback while her mount is making a double move and a \u22122 penalty while her mount is running.",
      "level": 3
    },
    {
      "name": "Speed of Trust (Ex)",
      "description": "A benefit of the two as one ability: the bowman charger gains a bonus on her initiative checks equal to half her bowman charger level when she begins combat on her attuned mount. In addition, her mount gains the use of the Dodge feat as long as the bowman charger is riding it, and the mount can choose to dodge a different foe than the bowman charger does.",
      "level": 4
    },
    {
      "name": "Weapon Specialization (Ex)",
      "description": "At 5th level, the bowman charger gains Weapon Specialization (composite shortbow) as a bonus feat.",
      "level": 5
    },
    {
      "name": "Elusive (Ex)",
      "description": "A benefit of the two as one ability: once per round, when her mount is affected by an effect that allows a Reflex save, the bowman charger may make a Reflex save (using her bonus) instead, and the result of her save becomes the result of her mount's save. She must declare that she is going to use this ability before she makes the roll.",
      "level": 6
    },
    {
      "name": "Improved Critical (Ex)",
      "description": "At 7th level, the bowman charger gains Improved Critical (composite shortbow) as a bonus feat.",
      "level": 7
    },
    {
      "name": "Riding Dervish (Ex)",
      "description": "A benefit of the two as one ability: when the bowman charger is riding in a straight line as a full-round action, she can move up to her mount's speed and make a melee attack against any foe adjacent to her final position or within reach at any point along her path, each such foe imposing a cumulative \u22121 penalty on her attacks. She must declare the number of attacks she will make before beginning the move (minimum two foes). In return she gives up her regular attacks, and neither she nor her mount draws any attacks of opportunity, even when moving through threatened squares. Her mount gains the use of the Mobility feat as long as she is riding it.",
      "level": 8
    },
    {
      "name": "Greater Weapon Specialization (Ex)",
      "description": "At 9th level, the bowman charger gains Greater Weapon Specialization (composite shortbow) as a bonus feat.",
      "level": 9
    },
    {
      "name": "Horse Sense (Su)",
      "description": "A benefit of the two as one ability: as Elusive, above, except this ability applies to effects that allow a Will save instead of effects that allow a Reflex save. (Printed as a supernatural ability, unlike the other two as one benefits.)",
      "level": 10
    },
    {
      "name": "Great Khan (Ex)",
      "description": "At 10th level, the bowman charger gains Leadership as a bonus feat and a +2 bonus on her leadership score. In addition, all of her cohorts, followers, and allies within 60 feet of a mounted bowman charger gain a +1 morale bonus on attack rolls while mounted.",
      "level": 10
    }
  ]
}];

export const DRAGON_325_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
