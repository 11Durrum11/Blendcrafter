// Dragon Magazine #324 (Oct 2004) prestige class — integrated in
// the Dragon Magazine treatment program (issue #324 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-324/
// (MANIFEST.md / SCREENING.md / reference.md).
// The SWORN SLAYER (Gaining Prestige, pp. 80-82): 5 levels, d10
// (the hit die is printed in the class badge; the OCR text layer
// drops it). Its sidebar Nemesis feat is identical to the catalog's
// Book of Exalted Deeds record and stays reference-only; the
// sworn-slayer adaptation rides in the class features.
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

const RAW: RawClassLike[] = [{
  "id": "sworn-slayer",
  "name": "Sworn Slayer",
  "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
  "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
  "ruleset": "core",
  "hitDie": "d10",
  "skillPointsPerLevel": 4,
  "length": 5,
  "classSkills": [
    "Bluff",
    "Gather Information",
    "Knowledge (appropriate to creature type)",
    "Listen",
    "Move Silently",
    "Search",
    "Sense Motive",
    "Spot",
    "Survival"
  ],
  "requirements": [
    { "label": "Base Attack Bonus", "value": "+6" },
    { "label": "Skills", "value": "Knowledge (appropriate to creature type) 4 ranks, Sense Motive 4 ranks" },
    { "label": "Special", "value": "A sworn slayer must swear a vow to devote his life to the destruction of all creatures of a particular kind. The oath is sworn in response to suffering a great loss at the hands of the creature kind, such as the death of a loved one, the loss of all material wealth, or the destruction of a prized family heirloom." }
  ],
  "features": [
    {
      "key": "sworn-slayer-basics",
      "name": "Sworn Slayer Basics",
      "description": "A sworn slayer is a tracker and executioner bound by a vow against one kind of creature. Weapon and armor proficiency: a sworn slayer is proficient with all simple and martial weapons, with all types of armor, and with shields (except tower shields). Class skills: Bluff, Gather Information, Knowledge (appropriate to creature type), Listen, Move Silently, Search, Sense Motive, Spot, and Survival.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "sworn-foe",
      "name": "Sworn Foe (Ex)",
      "description": "A sworn slayer must choose a type of monster to be the target of all his efforts and abilities (such as aberrations, magical beasts, or undead). Against creatures of that type he gains a +1 bonus on Bluff, Listen, Move Silently, Sense Motive, Spot, and Survival checks, as well as a +1 bonus on weapon damage rolls. This ability, when applicable, stacks with the bonuses afforded by a ranger's favored enemy class feature. The bonus increases to +2 at 3rd level and +3 at 5th level.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 1
    },
    {
      "key": "animosity",
      "name": "Animosity (Su)",
      "description": "Beginning at 2nd level, the sworn slayer designates a specific kind of creature within his sworn foe type to be the object of his intense animosity (for example, if he selected undead, he might direct his animosity at vampires or zombies). Against that kind of creature he gains an additional +3 bonus to Bluff, Listen, Move Silently, Sense Motive, Spot, and Survival checks, and to weapon damage rolls. This ability, when applicable, stacks with the bonuses afforded by sworn foe and a ranger's favored enemy. The bonus increases to +5 at 4th level.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 2
    },
    {
      "key": "determination",
      "name": "Determination (Ex)",
      "description": "Starting at 2nd level, a sworn slayer gains a +2 bonus on all saving throws against the special attacks, spells, and spell-like abilities of creatures of his sworn foe type. This bonus increases to +4 at 4th level.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 2
    },
    {
      "key": "nemesis",
      "name": "Nemesis",
      "description": "At 3rd level, the sworn slayer gains the Nemesis feat (see the Book of Exalted Deeds record in the catalog) even if he does not meet its prerequisites. The feat is applied to his sworn foe rather than a favored enemy, and he does not need to select a specific favored enemy for the feat to work. Should a neutral or evil sworn slayer gain this ability, the granted feat loses its exalted status and is treated as a regular feat; nongood sworn slayers do not radiate an aura of good from it.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 3
    },
    {
      "key": "slayer-attack",
      "name": "Slayer Attack (Su)",
      "description": "Upon reaching 5th level, a sworn slayer can execute a devastating strike against a creature of his sworn foe type. He must study a particular specimen for 3 rounds, concentrating his attention on it while it either does not detect him or does not recognize him as an enemy. He may then make a single melee attack against it, or a single ranged attack if within 30 feet; if the attack successfully deals damage, the victim must make a Fortitude save (DC 10 + sworn slayer level + the slayer's Int modifier) or die if it is a living creature, or be destroyed if it is a construct or undead creature. If the save succeeds, the attack is just a normal attack. The slayer must make the attack within 3 rounds of finishing his study; if he makes it and the target survives, or if he never takes the shot, he must study the creature for 3 new rounds before trying again.",
      "category": "prestige",
      "source": "Dragon Magazine #324 — Gaining Prestige: The Sworn Slayer (Scott Fitzgerald Gray), pp. 80-82",
      "sourceUrl": "https://archive.org/details/DragonMagazine260_201801",
      "level": 5
    }
  ],
  "progression": [
    { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
    { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
    { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
    { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
    { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 }
  ]
}];

export const DRAGON_324_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
