// Dragon Magazine #333 (Jul 2005) prestige class — integrated in
// the Dragon Magazine treatment program (issue #333 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-333/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Fraz-Urb'luu (Demonomicon of Iggwilv): d8, 4+Int
// skills, three-quarter BAB, Will the only good save — full table
// verified against rendered page images. Staged as printed under
// the Thrall of Pazuzu precedent (#329); three features carry
// SCREENING flags and ride as printed unless Shaun rules: its
// prerequisite feat's benefit is calling on the demonic patron,
// Deceptive Summoning hijacks other casters' summoned monsters
// (it summons nothing itself — summoning is dead magic in APOC),
// and Skurchur Cohorts delivers demon cohorts by sacrifice.
// Fraz-Urb'luu himself (CR 28), his Aspect, and the skurchur are
// reference-only — demon princes sit outside the sealed sphere
// and the catalog has no monsters barrel.
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
const SRC = "Dragon Magazine #333 — Demonomicon of Iggwilv: Fraz-Urb'luu (James Jacobs), pp. 28-29";

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-fraz-urbluu",
    name: "Thrall of Fraz-Urb'luu",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Skills: Bluff 10 ranks, Disguise 10 ranks or Forgery 10 ranks, Knowledge (religion) 10 ranks",
      "Languages: Abyssal, Celestial",
      "Feats: Deceitful, Thrall to Demon (Fraz-Urb'luu)",
      "Spells or Invocations: Ability to cast at least five spells from the school of illusion, one of which must be 3rd level; alternatively, the ability to use three of the following warlock invocations (one of which must be a lesser invocation): beguiling influence, charm, dark one's own luck, flee the scene, frightful blast, see the unseen, or voracious dispelling",
      "Special: Must convince or trick an intelligent, non-evil creature to willingly perform an evil act without resorting to mind-affecting magic",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
      { level: 3, bab: 2, fort: 1, ref: 1, will: 3 },
      { level: 4, bab: 3, fort: 1, ref: 1, will: 4 },
      { level: 5, bab: 3, fort: 1, ref: 1, will: 4 },
      { level: 6, bab: 4, fort: 2, ref: 2, will: 5 },
      { level: 7, bab: 5, fort: 2, ref: 2, will: 5 },
      { level: 8, bab: 6, fort: 2, ref: 2, will: 6 },
      { level: 9, bab: 6, fort: 3, ref: 3, will: 6 },
      { level: 10, bab: 7, fort: 3, ref: 3, will: 7 },
    ],
    classSkills: [
      "Bluff",
      "Concentration",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Knowledge (any)",
      "Listen",
      "Perform",
      "Sense Motive",
      "Sleight of Hand",
      "Speak Language",
      "Spellcraft",
      "Use Magic Device",
    ],
    features: [
      {
        name: "Thrall of Fraz-Urb'luu Basics",
        description:
          "A thrall of Fraz-Urb'luu is the deceiver-cultist of Fraz-Urb'luu, Prince of Deception, who works behind the scenes to seduce and delude the powerful into serving the Prince's armies. Weapon and Armor Proficiency: thralls of Fraz-Urb'luu gain proficiency with the greatclub and all simple weapons; they gain no proficiency with armor or shields. Spells per Day/Spells or Invocations Known: at every level save 1st, 5th, and 9th, the thrall gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class to which he belonged before adding the prestige class level, without gaining any other benefit of that class; a character with warlock levels can instead advance invocations the same way. Key abilities: Charisma, Intelligence, and Dexterity.",
        level: 1,
      },
      {
        name: "Deception (Su)",
        description:
          "At 1st level, the thrall gains the deception ability, usable once per day, gaining one additional use per day at each odd-numbered thrall level (2/day at 3rd, 3/day at 5th, 4/day at 7th, 5/day at 9th). Activating deception is an immediate action and does not provoke attacks of opportunity. Each use is spent on one of three options. Deceptive Spell: incorporate deception into an illusion spell you cast, granting a +1 profane bonus to that spell's saving throw DC. Deceptive Summoning: as a readied action when another creature casts a spell or uses a spell-like ability with the summoning descriptor (identified with a Spellcraft check), make a level check opposed by the caster's level check; if you win, the summoned monster follows your commands for the spell's duration instead of the summoner's — you must be within 30 feet of the caster. Deceptive Will: gain a +4 profane bonus on a single Will save; if you succeed, you may immediately make a Bluff check opposed by the caster's Sense Motive check, and if you win, the caster is deceived into believing you failed the save — you may play along with the intended effect voluntarily, and you continue to receive any telepathic commands without being obligated to follow them.",
        level: 1,
      },
      {
        name: "Bonus Illusion",
        description:
          "At every even-numbered level, the thrall may select any illusion spell from the sorcerer/wizard spell list and add it to the list of spells he knows and can cast; the spell's level must be equal to or less than his thrall of Fraz-Urb'luu class level. A wizard's chosen spell manifests in his spellbook instantaneously and at no cost; a warlock instead gains the spell as a spell-like ability usable once per day; a spontaneous caster adds it to his spells known.",
        level: 2,
      },
      {
        name: "Staff Mastery (Ex)",
        description:
          "At 5th level, the thrall can wield any magic staff as if it were a +1 greatclub, at no risk of damaging the staff itself; the staff is treated as an evil weapon for the purpose of overcoming damage reduction, and he is considered proficient with it for this purpose. He can use any magic staff as if its spells were on his spell list. Additionally, he may activate a staff using his own life force instead of expending charges: for each charge the activation would normally consume, he instead takes 1 point of Constitution damage. A creature with no Constitution score, or immunity to ability score damage, cannot power a staff this way and must use its charges.",
        level: 5,
      },
      {
        name: "Skurchur Cohorts",
        description:
          "At 9th level, the thrall gains the services of two skurchur demons, as if he had taken the demons as cohorts with the Leadership feat. If a skurchur minion is slain, he can gain a replacement after undergoing a 24-hour ritual that requires the sacrifice of an intelligent creature of an ECL of at least 11. (Skurchur demon statistics are digested in the pack's reference.md.)",
        level: 9,
      },
      {
        name: "Alter Reality (Sp)",
        description:
          "At 10th level, once per day, the thrall can transform an illusion spell into reality. This duplicates the effects of a wish spell, save that it cannot grant inherent bonuses to ability scores or duplicate any spell of 8th level or higher. The reality to be created must first be manifested with an illusion spell of at least 3rd level before this ability can be used.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_333_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
