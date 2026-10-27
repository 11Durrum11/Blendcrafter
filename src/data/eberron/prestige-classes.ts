/**
 * Eberron prestige classes: all eight from Chapter 5 of the Eberron
 * Campaign Setting. Progression tables were read from the printed
 * tables in the copy in Shaun's Dropbox library:
 *   /A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the core pack. Each class carries one summary feature
 * listing what it gains at each level, taken from its table's
 * Special column.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const ECS = "Eberron Campaign Setting";
const ECS_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf";

export const EBERRON_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "dragonmark-heir",
    name: "Dragonmark Heir",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Dragonmark Heir (p. 74)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ.slice(0, 5), G.slice(0, 5), G.slice(0, 5), G.slice(0, 5)),
    classSkills: ["Appraise", "Bluff", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (nobility and royalty)", "Perform", "Ride", "Sense Motive", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Race: Member of appropriate dragonmarked race and house",
      "Skills: 7 ranks in any two skills",
      "Feats: Favored in House, Least Dragonmark",
    ],
    features: [
      {
        key: "dragonmark-heir-mastery",
        name: "Dragonmark Mastery",
        description:
          "1st: Lesser Dragonmark (as a bonus feat, without the skill rank prerequisite) and house status (use your class level as a bonus on Charisma-related checks with your own house). 2nd: additional action points (maximum per level increases by 2) and improved least dragonmark. 3rd: improved lesser dragonmark. 4th: Greater Dragonmark (bonus feat). 5th: improved greater dragonmark.",
        category: "trait",
        source: `${ECS} — The Dragonmark Heir (p. 74)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "eldeen-ranger",
    name: "Eldeen Ranger",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Eldeen Ranger (p. 75)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL.slice(0, 5), G.slice(0, 5), G.slice(0, 5), P.slice(0, 5)),
    classSkills: ["Climb", "Craft", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Move Silently", "Profession", "Ride", "Search", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Alignment: Varies by sect — Ashbound: no restriction; Children of Winter: any nongood; Gatekeepers: any nonevil; Greensingers: any chaotic; Wardens of the Wood: any nonevil",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (nature) 6 ranks, Survival 8 ranks",
      "Feat: Track",
      "Special: Favored enemy class feature; must train in the Eldeen Reaches with other members of the sect",
    ],
    features: [
      {
        key: "eldeen-ranger-sect",
        name: "Sect Abilities",
        description:
          "1st: sect ability I (a defensive ability tied to your druid sect: Ashbound resist the arcane, Children of Winter resist poison, Gatekeepers resist corruption, Greensingers resist nature's lure, Wardens of the Wood nature sense). 2nd: hated foe (spend 1 action point for a mighty attack against a favored enemy). 3rd: sect ability II. 4th: favored enemy (increase an existing favored enemy bonus as a ranger). 5th: sect ability III.",
        category: "trait",
        source: `${ECS} — The Eldeen Ranger (p. 75)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "exorcist-of-the-silver-flame",
    name: "Exorcist of the Silver Flame",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Exorcist of the Silver Flame (p. 77)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +3",
      "Skills: Knowledge (the planes) 3 ranks, Knowledge (religion) 8 ranks",
      "Spells: Able to cast 1st-level divine spells",
      "Special: Worshiper of the Silver Flame",
      "Special: Spells per day advance as +1 level of an existing divine spellcasting class at 2nd, 3rd, 5th, 6th, 8th, and 9th level",
    ],
    features: [
      {
        key: "exorcist-weapon",
        name: "Weapon of the Exorcist",
        description:
          "1st: flame of censure and weapon of the exorcist. 2nd: weapon of silver. 3rd: darkvision 30 ft., resist possession, smite evil 1/day. 4th: detect thoughts at will, weapon of good. 5th: silver exorcism. 6th: darkvision 60 ft., weapon of flame. 7th: smite evil 2/day. 8th: weapon of law. 9th: weapon of sacred flame. 10th: warding flame.",
        category: "trait",
        source: `${ECS} — The Exorcist of the Silver Flame (p. 77)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "extreme-explorer",
    name: "Extreme Explorer",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Extreme Explorer (p. 79)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ.slice(0, 5), P.slice(0, 5), G.slice(0, 5), P.slice(0, 5)),
    classSkills: ["Balance", "Climb", "Decipher Script", "Disable Device", "Escape Artist", "Jump", "Knowledge (arcana)", "Knowledge (dungeoneering)", "Knowledge (history)", "Listen", "Open Lock", "Ride", "Search", "Speak Language", "Survival", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Knowledge (dungeoneering) 4 ranks, Survival 4 ranks",
      "Feat: Action Boost",
    ],
    features: [
      {
        key: "extreme-explorer-action",
        name: "Action Hero",
        description:
          "1st: additional action points (maximum per level increases by 2) and trap sense +1. 2nd: dodge bonus +1, evasion, extreme hustle. 3rd: trap sense +2 and a bonus feat. 4th: dodge bonus +2 and extreme action. 5th: trap sense +3 and a bonus feat.",
        category: "trait",
        source: `${ECS} — The Extreme Explorer (p. 79)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "heir-of-siberys",
    name: "Heir of Siberys",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Heir of Siberys (p. 81)`,
    sourceUrl: ECS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ.slice(0, 3), G.slice(0, 3), G.slice(0, 3), G.slice(0, 3)),
    classSkills: [],
    prerequisites: [
      "Race: Dragonmarked race",
      "Skills: 15 ranks in any two skills",
      "Feats: Heroic Spirit",
      "Special: A character who has the Aberrant Dragonmark, Least Dragonmark, Lesser Dragonmark, or Greater Dragonmark feat cannot enter this class; once this class is taken, the dragonmark heir prestige class is closed to the character",
      "Class Skills: Any skill that is a class skill for one of the heir of Siberys's other classes is a class skill for this class",
      "Special: At 2nd and 3rd level, +1 level of an existing spellcasting class for spells per day — or a bonus feat instead if the heir has no spellcasting class",
    ],
    features: [
      {
        key: "heir-of-siberys-mark",
        name: "Siberys Mark",
        description:
          "1st: additional action points (maximum per level increases by 2) and a bonus feat (from Action Boost, Action Surge, Favored in House, Pursue, or Spontaneous Casting). 2nd: Siberys mark — the full Siberys dragonmark of your house, a powerful spell-like ability usable 1/day at caster level 15th. 3rd: improved Siberys mark — use the Siberys mark ability one additional time per day.",
        category: "trait",
        source: `${ECS} — The Heir of Siberys (p. 81)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "master-inquisitive",
    name: "Master Inquisitive",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Master Inquisitive (p. 82)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ.slice(0, 5), P.slice(0, 5), G.slice(0, 5), P.slice(0, 5)),
    classSkills: ["Bluff", "Decipher Script", "Gather Information", "Knowledge (local)", "Listen", "Search", "Sense Motive", "Spot"],
    prerequisites: [
      "Skills: Gather Information 6 ranks, Search 3 ranks, Sense Motive 6 ranks",
      "Feat: Investigate",
    ],
    features: [
      {
        key: "master-inquisitive-detective",
        name: "Master Detective",
        description:
          "1st: zone of truth 1/day as a spell-like ability (spend 2 action points for an additional use). 2nd: bonus feat (from the class list) and a 3rd-level contact. 3rd: discern lies. 4th: bonus feat and a 6th-level contact. 5th: true seeing.",
        category: "trait",
        source: `${ECS} — The Master Inquisitive (p. 82)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "warforged-juggernaut",
    name: "Warforged Juggernaut",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Warforged Juggernaut (pp. 84–85)`,
    sourceUrl: ECS_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ.slice(0, 5), G.slice(0, 5), P.slice(0, 5), P.slice(0, 5)),
    classSkills: ["Climb", "Craft", "Intimidate", "Jump", "Survival", "Swim"],
    prerequisites: [
      "Race: Warforged",
      "Base Attack Bonus: +5",
      "Feats: Adamantine Body, Improved Bull Rush, Power Attack",
    ],
    features: [
      {
        key: "warforged-juggernaut-perfection",
        name: "Construct Perfection",
        description:
          "1st: armor spikes 1d6, Expert Bull Rush, Powerful Charge, reserved. 2nd: charge bonus +1, construct perfection I, extended charge. 3rd: construct perfection II, healing immunity, Superior Bull Rush. 4th: armor spikes 1d8, charge bonus +2, construct perfection III. 5th: construct perfection IV, Greater Powerful Charge. Construct perfection progressively makes the juggernaut more constructlike, ending in immunity to nonlethal damage and extra damage from critical hits, and to mind-affecting spells, death effects, and necromancy.",
        category: "trait",
        source: `${ECS} — The Warforged Juggernaut (p. 85)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
  {
    id: "weretouched-master",
    name: "Weretouched Master",
    ruleset: "eberron",
    source: `${ECS} — Prestige Classes: Weretouched Master (p. 85)`,
    sourceUrl: ECS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ.slice(0, 5), G.slice(0, 5), G.slice(0, 5), P.slice(0, 5)),
    classSkills: ["Balance", "Climb", "Handle Animal", "Hide", "Intimidate", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Race: Shifter",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (nature) 5 ranks, Survival 8 ranks",
      "Feat: Any shifter feat",
    ],
    features: [
      {
        key: "weretouched-master-forms",
        name: "Weretouched",
        description:
          "1st: Weretouched I — choose a lycanthrope heritage animal (bear, boar, rat, tiger, wolf, or wolverine); while shifting you take on its aspect and gain an extra heritage benefit (claws, tusks or fangs, and a +2 bonus to one ability score). 2nd: wild empathy and a bonus shifter feat. 3rd: Weretouched II — the scent ability plus a heritage benefit while shifting. 4th: frightful shifting and a bonus shifter feat. 5th: alternate form — assume the animal or hybrid form of your heritage animal as with polymorph cast on yourself.",
        category: "trait",
        source: `${ECS} — The Weretouched Master (pp. 85–86)`,
        sourceUrl: ECS_PATH,
      },
    ],
  },
];
