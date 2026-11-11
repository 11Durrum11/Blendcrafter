// Dragon Magazine #353 prestige class — integrated in the Dragon
// Magazine treatment program (issue #353 pass, combined
// #336-#359 integration). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-353/
// (MANIFEST.md / SCREENING.md / reference.md).
// The Thrall of Malcanthet, staged as printed under the thrall precedents; its OCR-derived Hit Die and BAB carry the pack's disclosed verification caveats.
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
const SRC = "Dragon Magazine #353 — Demonomicon of Iggwilv: Malcanthet (James Jacobs), pp. 28-29";

const RAW: RawClassLike[] = [
  {
    id: "thrall-of-malcanthet",
    name: "Thrall of Malcanthet",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["will"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Gender: Female",
      "Skills: Bluff 9 ranks, Diplomacy 9 ranks, Perform (any two) 5 ranks",
      "Feats: Persuasive, Spell Focus (enchantment), Thrall to Demon (Malcanthet)",
      "Special: Must willingly murder someone who loves you",
      "Special: Must have permanently lost at least one experience level from a succubus's energy drain attack (restoring the level with greater restoration after taking the first thrall level does not disqualify the character)",
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
      "Balance",
      "Bluff",
      "Concentration",
      "Craft",
      "Diplomacy",
      "Disguise",
      "Escape Artist",
      "Forgery",
      "Gather Information",
      "Intimidate",
      "Knowledge (nobility and royalty)",
      "Knowledge (religion)",
      "Knowledge (the planes)",
      "Perform",
      "Profession",
      "Sense Motive",
      "Sleight of Hand",
      "Speak Language",
      "Tumble",
      "Use Magic Device",
      "Use Rope",
    ],
    features: [
      {
        name: "Thrall of Malcanthet Basics",
        description:
          "A thrall of Malcanthet is a mortal hedonist and seducer who has given her life over to the Queen of Succubi; Malcanthet allows only women to become her thralls, and her thralls often lead her Material Plane cults or work in secret in brothels and harems. Weapon and Armor Proficiency: thralls of Malcanthet gain Exotic Weapon Proficiency (whip) and Exotic Weapon Proficiency (scourge) as bonus feats. Spells per Day: at every level except 1st, 5th, and 9th, the thrall gains new spells per day as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class; she gains no other benefit of that class except an increased effective level for spellcasting, and with more than one prior spellcasting class she must choose which one each advancing level applies to. APOC note: the prerequisite feat Thrall to Demon (Malcanthet) is flagged in the pack's SCREENING.md; the class itself calls, summons, and contacts nothing. Key abilities: Charisma, Dexterity, and Wisdom.",
        level: 1,
      },
      {
        name: "Profane Beauty (Su)",
        description:
          "As long as the thrall wears no armor and wields no shield, she gains a deflection bonus to her Armor Class equal to her Charisma bonus, to a maximum bonus equal to her thrall of Malcanthet class level.",
        level: 1,
      },
      {
        name: "Telepathic Gaze (Ex)",
        description:
          "The thrall can communicate via telepathy with any creature within 100 feet that meets her gaze. While communicating in this manner she can read the creature's surface thoughts as if she had cast detect thoughts and concentrated on the target for 3 rounds; the target may resist with a Will save (DC 10 + the thrall's class level + her Charisma modifier). If she reads the target's surface thoughts, she gains a +5 circumstance bonus on Bluff, Diplomacy, and Intimidate checks made against that opponent.",
        level: 1,
      },
      {
        name: "Betrayal (Su)",
        description:
          "At 2nd level, the thrall's attacks are particularly devastating to those who believe her to be an ally: if she ever deals damage to an ally with a weapon or spell, the ally must make a Will saving throw (DC 10 + the thrall's class level + her Charisma modifier) or be stunned for 1d4 rounds.",
        level: 2,
      },
      {
        name: "Sneak Attack (Ex)",
        description:
          "Beginning at 3rd level, the thrall deals an extra 1d6 points of damage whenever a foe is denied its Dexterity bonus to Armor Class or is flanked by the thrall, as the rogue ability. This increases to 2d6 at 6th level and 3d6 at 9th level, and stacks with sneak attack damage from other sources.",
        level: 3,
      },
      {
        name: "Charming Voice (Su)",
        description:
          "At 4th level, the thrall's voice becomes beguiling: she gains a +4 competence bonus on Bluff, Diplomacy, and Intimidate checks, and the save DC of any language-dependent spell she casts gains a +1 profane bonus. Once per day, she may attempt to charm a creature of her own type as a spell-like ability, provided the creature can hear and understand her voice; this otherwise duplicates charm monster (caster level equals her thrall level).",
        level: 4,
      },
      {
        name: "Draining Kiss (Su)",
        description:
          "At 5th level, the thrall can drain energy from a creature she lures into some act of passion, or by simply planting a kiss on the victim; an unwilling target must first be grappled. The kiss bestows 1 negative level; the victim must succeed on a Fortitude save (DC 10 + the thrall's class level + her Charisma modifier) to remove the negative level. This ability may be used up to three times per day (in succubus form it is usable at will; see Succubus Form). This is the succubus energy-drain mechanic operating in-world; it stages on its mechanics — see SCREENING.md.",
        level: 5,
      },
      {
        name: "Sinner's Beauty (Su)",
        description:
          "At 5th level, the thrall's appearance takes on an otherworldly and arousing beauty and her Charisma score increases by 2 points. At 10th level, her beauty increases even more and her Charisma score increases by another 2 points (+4 total).",
        level: 5,
      },
      {
        name: "Reflect Enchantment (Ex)",
        description:
          "At 7th level, the thrall can reflexively reflect enchantment spells that target her and fail to affect her: up to three times per day, as an immediate action, a thrall who makes her saving throw to resist a spell of the enchantment school may immediately reflect that spell back at its source, as if she had cast the spell on the target. This defense works only against enchantment spells negated by a successful saving throw.",
        level: 7,
      },
      {
        name: "Dominating Voice (Su)",
        description:
          "At 8th level, the thrall's charming voice becomes more potent: her competence bonus on Bluff, Diplomacy, and Intimidate checks rises to +8, and the save DC of any language-dependent spell she casts gains a +2 profane bonus. Once per day, she may attempt to dominate a creature of her own type as a spell-like ability, provided that creature can hear and understand her voice; this otherwise duplicates dominate monster (caster level equals her thrall level).",
        level: 8,
      },
      {
        name: "Succubus Form (Su)",
        description:
          "At 10th level, the thrall gains the supernatural ability to transform into a succubus-like creature once per day. The transformation requires a full-round action and lasts for 1 hour. During this time she gains +2 Strength, +2 Dexterity, +2 Constitution, +6 Intelligence, +4 Wisdom, and +16 Charisma; a +9 natural armor bonus; wings granting a fly speed of 50 feet (average); damage reduction 10/cold iron or good; darkvision 60 feet; immunity to electricity and poison; resistance to acid 10, cold 10, and fire 10; and spell resistance 18. She can use her draining kiss ability at will while in this form, and those uses do not count against her regular limit of 3 per day.",
        level: 10,
      },
    ],
  },
];

export const DRAGON_353_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
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
