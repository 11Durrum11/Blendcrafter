// Dragon Magazine #340 prestige class — integrated in the Dragon
// Magazine treatment program (issue #340 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-340/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Master Astrologer prestige class, staged as printed. The issue's substitution levels (Illuminated Monk, Paladin of Light, Moon-Warded Ranger, Lunar Rogue) are digested in full in the pack reference, not staged as records.
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
const SRC = "Dragon Magazine #340 — The Master Astrologer (E.W. Morton), pp. 36-41";

const RAW: RawClassLike[] = [
  {
    id: "master-astrologer",
    name: "Master Astrologer",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    prerequisites: [
      "Skills: Knowledge (the planes) 4 ranks, Sense Motive 4 ranks, Profession (astrologer) 8 ranks",
      "Feats: Skill Focus (Profession [astrologer])",
      "Spells: Able to prepare spells",
    ],
    progression: [
      { level: 1, bab: 0, fort: 0, ref: 0, will: 2 },
      { level: 2, bab: 1, fort: 0, ref: 0, will: 3 },
      { level: 3, bab: 1, fort: 1, ref: 1, will: 3 },
      { level: 4, bab: 2, fort: 1, ref: 1, will: 4 },
      { level: 5, bab: 2, fort: 1, ref: 1, will: 4 },
      { level: 6, bab: 3, fort: 2, ref: 2, will: 5 },
      { level: 7, bab: 3, fort: 2, ref: 2, will: 5 },
      { level: 8, bab: 4, fort: 2, ref: 2, will: 6 },
      { level: 9, bab: 4, fort: 3, ref: 3, will: 6 },
      { level: 10, bab: 5, fort: 3, ref: 3, will: 7 },
    ],
    classSkills: [
      "Concentration",
      "Craft",
      "Knowledge (arcana)",
      "Knowledge (nature)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Profession",
      "Sense Motive",
      "Spellcraft",
      "Spot",
    ],
    features: [
      {
        name: "Master Astrologer Basics",
        description:
          "Master astrologers are spellcasters devoted to studying astrology and its influence upon the cosmos, reading the cyclical shifts of the heavens as reflections of the workings of magic and the arrangement of the planes. Weapon and Armor Proficiency: the master astrologer gains no proficiency with any weapons or armor. Spells per Day: at each level after 1st, you gain new spells per day (and spells known, if applicable) as if you had also gained a level in a spellcasting class to which you belonged before adding the prestige class level; you do not, however, gain any other benefit a character of that class would have gained. If you had more than one spellcasting class before becoming a master astrologer, you must decide to which class to add each level for the purpose of determining spells per day and spells known. Most spellcasters can easily qualify for the class by 5th level. Key abilities: the ability score governing your spellcasting, and Wisdom for the class's Sense Motive and Profession (astrologer) requirements.",
        level: 1,
      },
      {
        name: "Stargazer (Ex)",
        description:
          "Whenever you have access to a spyglass and an unobstructed view of the stars, you may prepare spells in half the usual amount of time. Typically, this means it takes you only 30 minutes to prepare spells.",
        level: 1,
      },
      {
        name: "Zodiac Sense (Ex)",
        description:
          "You understand the ways in which the stars influence behavior. You gain a competence bonus equal to your master astrologer level on all Sense Motive checks. Also, as a full-round action, you can make a DC 20 Sense Motive check to determine the astrological sign of any one creature to which you have line of effect. You may instead make this check as a move action or as a free action, but doing so increases the DC of the Sense Motive check (to DC 35 and DC 50, respectively).",
        level: 1,
      },
      {
        name: "Numerology (Ex)",
        description:
          "Starting at 2nd level, your spells are more potent against creatures whose astrological signs you know. Against all such creatures, you gain a +1 insight bonus on caster level checks to overcome spell resistance and your spells' save DCs increase by +1. At 5th level, these bonuses increase to +2. At 8th level they become +3.",
        level: 2,
      },
      {
        name: "Bonus Feats",
        description:
          "At 3rd level, and again at 6th and 9th level, you tap into the mystical power of your astrological sign to enhance your own natural aptitudes, gaining a bonus feat at each of those levels. You must meet a feat's prerequisites before selecting it as a bonus feat. As your bonus feat you may select Greater Spell Focus (divination), Spell Focus (divination), or a feat from the following list that corresponds to your astrological sign. Beholder: Alertness, Investigator, Iron Will, Negotiator, Obscure Lore (from Complete Adventurer), Quick Reconnoiter (from Complete Adventurer), Self-Sufficient, or Skill Focus (any Knowledge or Spot). Harpy: Cooperative Spell (from Complete Arcane), Deceitful, Greater Spell Focus (illusion), Negotiator, Persuasive, Skill Focus (Bluff or Diplomacy), Spell Focus (illusion), or Sudden Quicken (from Complete Arcane). Ettin: Chant of Fortitude (from Complete Adventurer), Deceitful, Great Fortitude, Greater Two-Weapon Fighting, Improved Two-Weapon Fighting, Persuasive, Twin Spell (from Complete Arcane), or Two-Weapon Fighting. Dryad: Diehard, Endurance, Great Fortitude, Greater Spell Focus (abjuration), Iron Will, Sanctum Spell (from Complete Arcane), Self-Sufficient, or Spell Focus (abjuration). Stirge: Arcane Mastery, Combat Casting, Diligent, Greater Spell Penetration, Investigator, Skill Focus (Concentration or any Craft), Spell Penetration, or Track. Wyvern: Agile, Greater Spell Focus (conjuration), Reckless Wand Wielder (from Complete Arcane), Run, Self-Sufficient, Spell Mastery (named in the printed list; that feat is a declined record in this catalog and is not staged — see SCREENING.md), Spell Focus (conjuration), or Sudden Quicken (from Complete Arcane). Dragon: Alertness, Appraise Magic Value (from Complete Adventurer), Diligent, Draconic Heritage (from Complete Arcane), Iron Will, Leadership, Skill Focus (any Craft or Profession), or Toughness. Unicorn: Acrobatic, Athletic, Battle Caster (from Complete Arcane), Combat Reflexes, Dodge, Mobility, Spring Attack, or Toughness. Hydra: Deceitful, Deft Hands, Diehard, Endurance, Fortify Spell (from Complete Arcane), Guardian Spirit (from Complete Arcane), Iron Will, or Persuasive. Chimera: Communicator (from Complete Arcane), Cooperative Spell (from Complete Arcane), Iron Will, Leadership, Lightning Reflexes, Negotiator, Skill Focus (Diplomacy), or Stealthy. Kraken: Athletic, Delay Spell (from Complete Arcane), Greater Spell Focus (enchantment), Improved Initiative, Investigator, Jack of All Trades (from Complete Adventurer), Persuasive, or Spell Focus (enchantment). Basilisk: Combat Casting, Extend Spell, Insightful (from Complete Arcane), Investigator, Iron Will, Persistent Spell (from Complete Arcane), Self-Sufficient, or Skill Focus (Concentration or Intimidate).",
        level: 3,
      },
      {
        name: "Astrological Communication (Su)",
        description:
          "At 4th level you learn to shift the apparent alignment of the celestial bodies in the sky, forming messages for others versed in the ways of astrology. Once per night per master astrologer level, you can use this ability to send a message, as the message spell, with the recipients being all other master astrologers who happen to be viewing the sky at the time. This message remains visible in the sky for 1 hour before the stars resume their normal positions.",
        level: 4,
      },
      {
        name: "Planetary Alignment (Ex)",
        description:
          "At 7th level you learn to take advantage of the alignments of the planets to empower your spells with metamagic effects. Each day, you may spontaneously apply a total of 1d6 levels' worth of metamagic feats you know to spells you cast, without increasing the spells' levels. You may split these levels among as many spells as you like (for example, applying a +1-level feat to six different spells, or a +3-level feat to two spells).",
        level: 7,
      },
      {
        name: "The Stars Are Right",
        description:
          "At 10th level, once per day as a standard action, you can exert your will to force the stars to appear to come into alignment. This effect lasts until the end of the following round. While it lasts, you may cast a spell with a +4 bonus to your caster level and a +4 bonus to the spell's save DC (if any), and all of the spell's numerical effects (including range, duration, area, damage, healing, and number of targets) are increased by one-half.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_340_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
