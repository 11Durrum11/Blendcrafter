// Dragon Magazine #335 (Sep 2005) prestige class — integrated in
// the Dragon Magazine treatment program (issue #335 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-335/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Charlatan: staged as printed and image-verified.
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
const SRC = "Dragon Magazine #335 — The Charlatan (Nicolas Logue), pp. 62-66";

const RAW: RawClassLike[] = [
  {
    id: "charlatan",
    name: "Charlatan",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    prerequisites: [
      "Skills: Bluff 8 ranks, Knowledge (arcana) 2 ranks or Knowledge (religion) 2 ranks, Perform (act) 4 ranks, Spellcraft 2 ranks",
      "Feat: Skill Focus (Bluff)",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
      { level: 3, bab: 2, fort: 1, ref: 1, will: 3 },
      { level: 4, bab: 3, fort: 1, ref: 1, will: 4 },
      { level: 5, bab: 3, fort: 1, ref: 1, will: 4 },
    ],
    classSkills: [
      "Appraise",
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Knowledge (arcana)",
      "Knowledge (local)",
      "Knowledge (religion)",
      "Listen",
      "Move Silently",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Speak Language",
      "Spellcraft",
      "Spot",
      "Use Magic Device",
    ],
    features: [
      {
        name: "Charlatan Basics",
        description:
          "The charlatan is a master pretender who mocks real spellcasters with her uncanny ability at deception, convincing nearly anyone that she is an archmage or a pious cleric while wasting no time on prayer or dusty tomes — power perceived is power achieved. She plays the part for power, profit, general mayhem, or her own inscrutable ends, and by the time anyone realizes otherwise she has long since moved on, with a faked death or a mysterious disappearance creating yet another legend. Bards and rogues most often become charlatans; sorcerers or wizards who tire of the arduous path to real power, and clerics who have fallen from grace, also take up the mantle. The charlatan is the winner of the Origins/Dragon Prestige Class Design Competition. Weapon and Armor Proficiency: the charlatan gains no proficiency with any weapons or armor. None of the charlatan's abilities are supernatural in any way: they are extraordinary effects, and therefore do not need to bypass spell resistance (although saving throws are still allowed) and are not affected by antimagic field, dispel magic, or similar effects. Unless otherwise noted, the save DC for the charlatan's effects equals 10 + her charlatan class level + her Charisma modifier. Key abilities: Charisma (the key ability for any charlatan) and Intelligence.",
        level: 1,
      },
      {
        name: "False Reputation (Ex)",
        description:
          "Every good charlatan knows that her reputation must precede her. By spreading tales of her greatness far and wide, she creates the facade of her legendary stature as a spellcaster. Anyone inquiring after the charlatan with a bardic knowledge, Gather Information, or Knowledge check turns up false tales, gossip, and specific \"facts\" which corroborate her claim to greatness, unless the check result exceeds the DC (as described in the Player's Handbook) by 10 or more.",
        level: 1,
      },
      {
        name: "Pretender (Ex)",
        description:
          "A charlatan focuses her talents on impersonating arcane and divine spellcasters. She gains a circumstance bonus on Disguise checks equal to her charlatan level when attempting to pass as a spellcaster.",
        level: 1,
      },
      {
        name: "Tricks of the Trade (Ex)",
        description:
          "A charlatan learns the creation and implementation of flash paper, smoke powder, and other alchemical mixtures that she can use to emulate the effects of certain spells. These are alchemical in nature, and therefore do not need to bypass spell resistance (although saving throws are still allowed) and are not affected by antimagic field, dispel magic, or similar effects. The charlatan can use these tricks a number of times per day equal to 1 + her charlatan level + her Charisma modifier, and her effective caster level equals her charlatan level. At 1st level the charlatan can duplicate the effects of burning hands and flare. At 3rd level she can also duplicate the effects of glitterdust, obscuring mist, and pyrotechnics.",
        level: 1,
      },
      {
        name: "Feigned Casting (Ex)",
        description:
          "At 2nd level, the time a charlatan practices imitating gestures and arcane words pays off, allowing her to pretend to cast any arcane or divine spell (as appropriate to her disguise). Onlookers must defeat the charlatan's Bluff check with an opposed Spellcraft or Sense Motive check to detect the ruse; those who fail believe the charlatan cast a spell, per her desire. Onlookers who can both see and hear the charlatan gain a +4 bonus on their opposed checks. The charlatan cannot fake a spell with an obvious visual effect, such as fireball or wall of stone, but spells such as detect magic and mind blank are perfect examples of suitable choices. The charlatan's false spell does not affect its targets, and any creature targeted knows the \"spell\" had no effect.",
        level: 2,
      },
      {
        name: "Fortune Teller's Eye (Ex)",
        description:
          "At 2nd level the charlatan learns to scrutinize a subject with the trained eye of a con artist. By picking up on a person's attire, demeanor, and habits, the charlatan may discern general facts about a subject creature. This requires 1 minute of observation and a successful DC 20 Sense Motive check; if the target attempts to conceal the truths of its nature, the charlatan's Sense Motive check is opposed by the target's Disguise check (minimum DC 20). Success allows the charlatan to discern one aspect of the target's alignment, basic class abilities, or relative power (based on level). This ability reveals only general information about the target. The charlatan can feign powers of divination with this ability by stating her mundane deductions as if ascertained through arcane power or divine revelation.",
        level: 2,
      },
      {
        name: "Steal the Credit (Ex)",
        description:
          "The charlatan learns to convince others that great deeds and astounding events are actually her doing. She gains a +4 competence bonus on any Bluff check made to take credit for naturally occurring phenomena (gathering thunderclouds, an earthquake, or even the natural end of a drought or plague) or a deed performed by another.",
        level: 2,
      },
      {
        name: "Fearsome Reputation (Ex)",
        description:
          "Beginning at 3rd level, a charlatan's false reputation increases in potency as the tales of her power become even more outrageous and terrifying. The charlatan can draw upon the reputation she has created for herself, declaring her power to all around her. As a full-round action, she may make a Bluff check to render anyone who can hear her shaken for 1d4 rounds. A creature can make an opposed Sense Motive check to resist this mind-affecting, language-dependent effect. Any creature succeeding at the Sense Motive check is immune to the charlatan's fearsome reputation ability for one week. The shaken effect does not stack with itself, so a charlatan cannot use it to make a target frightened.",
        level: 3,
      },
      {
        name: "Lesser Mind Trick (Ex)",
        description:
          "Also at 3rd level, the charlatan gains the ability to convince others that she has cast a spell that affects their minds. Through sheer force of will the charlatan can make a Bluff check as a full-round action to affect her target's mind in a way that duplicates the effect of charm person, command, scare (one creature only), or Tasha's hideous laughter. A creature can make an opposed Sense Motive check to resist this mind-affecting, language-dependent effect. Any creature succeeding at the Sense Motive check is immune to the charlatan's lesser mind trick ability for one week. The charlatan can use these tricks a number of times per day equal to 1 + her charlatan level + her Charisma modifier, and her effective caster level equals her charlatan level. Spells with durations longer than an hour fade after 1 hour has passed unless the charlatan is present to maintain them.",
        level: 3,
      },
      {
        name: "Distracting Dispel (Ex)",
        description:
          "In order to prove herself against true wielders of magic, the 4th-level charlatan learns to use every dirty trick in the book. By preparing a standard action ahead of time, a charlatan may feign a counterspell attempt against another caster: she must prepare to counterspell as normal (see Player's Handbook, page 170) and make a Bluff check, opposed by her target's Concentration check. The spellcaster gains a +2 bonus on this check if he cannot both see and hear the charlatan, and is immune to the distracting dispel if he cannot see or hear her. If she succeeds, her target loses the spell being cast as if the charlatan had counterspelled it normally. As an additional use of this ability, the charlatan can attempt to disrupt the concentration of a spellcaster concentrating on an already cast spell; the ability check is made and resisted in the manner previously described, and a successful Bluff check ends the spell being concentrated on. Because this ability requires the charlatan to reveal all her tricks, she may only use it (in either form) once per day against any particular spellcaster.",
        level: 4,
      },
      {
        name: "Fake Healing (Ex)",
        description:
          "A charlatan's powers of persuasion are so great by 4th level that she can convince the afflicted that she has cured them. The charlatan can duplicate the effects of atonement, remove curse, or remove disease a number of times per day equal to 1 + her charlatan level + her Charisma modifier, and her effective caster level equals her charlatan level. None of these abilities actually heal their targets, but unless the targets beat the charlatan at an opposed Bluff check (opposed by Sense Motive) they believe she \"healed\" them for 1d4 hours (although they still incur all penalties caused by any \"healed\" ailments).",
        level: 4,
      },
      {
        name: "Master of Lies (Ex)",
        description:
          "At 4th level the charlatan becomes so submerged in her false reputation that any divination spells cast on her reveal only information appropriate to her assumed identity and nothing about her true self.",
        level: 4,
      },
      {
        name: "Greater Mind Trick (Ex)",
        description:
          "At the height of her \"power,\" the 5th-level charlatan learns to convince others that she has cast more powerful spells. She may duplicate bestow curse (only curses that do not change the target's physical features, such as those presented in the Player's Handbook), crushing despair (one creature only), fear (one creature only), and suggestion. The charlatan can use these tricks a number of times per day equal to 1 + her charlatan level + her Charisma modifier, and her effective caster level equals her charlatan level. Spells with durations longer than an hour fade after 1 hour has passed unless the charlatan is present to maintain them.",
        level: 5,
      },
      {
        name: "Puppet Master (Ex)",
        description:
          "The charlatan's ultimate power allows her to influence the attitudes of whole population centers, bending the wills of the people to love or hate whomever the charlatan wishes. This ability requires one full day of rumor mongering, giving speeches, and assembling mobs of supporters; at the start of the next day, a successful Bluff check shifts the population center's attitude toward a chosen public figure one step (as printed, the check DC scales with community size per the table on page 137 of the Dungeon Master's Guide — DC 20 for a thorp up to DC 55 for a metropolis). Countermeasures available to the target raise the DC: spreading counter-rumors, giving speeches, or assembling mobs adds +2; distributing wealth or food to the population adds +5; devoting all of the target's time to improving his public image adds +10.",
        level: 5,
      },
    ],
  },
];

export const DRAGON_335_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
