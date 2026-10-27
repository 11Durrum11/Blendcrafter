/**
 * Races of the Wild prestige classes: all eight from Chapter 5
 * of Races of the Wild (Wizards of the Coast). Built 2026-10-27
 * from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Wild.pdf
 * Progression tables are the book's printed tables.
 * Prerequisites are free text (shown in the UI, soft-checked
 * only), matching the other packs. The book is a 3.5 source, so
 * no skill-name mapping was needed.
 *
 * Note: this PDF is a two-page-spread scan (its PDF pages after
 * the front matter duplicate spreads); all page citations below
 * are the book's printed folios, read from the page footers.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G3 = [2, 3, 3]; // good save, 3 levels
const P3 = [0, 0, 1]; // poor save, 3 levels
const TQ3 = [0, 1, 2];

const ROTW = "Races of the Wild";
const ROTW_PATH = "/A POC PC related/5.Splat/Races of series/Races of the Wild.pdf";
const CH5 = `${ROTW} — Chapter 5: Prestige Classes`;

export const RACES_OF_THE_WILD_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arcane-hierophant",
    name: "Arcane Hierophant",
    ruleset: "core",
    source: `${CH5} — Arcane Hierophant (p. 108)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Knowledge (arcana)", "Knowledge (nature)", "Listen", "Profession", "Ride", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (arcana) 8 ranks, Knowledge (nature) 8 ranks",
      "Spells: Ability to cast 2nd-level arcane spells and 2nd-level divine spells",
      "Special: Trackless step class feature",
      "Special: Spells per day advance as +1 level of an existing arcane spellcasting class AND +1 level of an existing divine spellcasting class at every level",
    ],
    features: [
      {
        key: "arcane-hierophant-companion-familiar",
        name: "Companion Familiar",
        description:
          "1st: companion familiar (your animal companion and familiar merge into a single creature, a magical beast (augmented animal) that combines both feature sets; if it is killed or dismissed, you lose no XP and can summon a new one with 24 hours of prayer) and ignore arcane spell failure (you ignore the arcane spell failure chance for nonmetallic light or medium armor, but you abide by the druid's armor restrictions and lose your divine spellcasting ability if you violate them). Wild shape: your arcane hierophant levels stack with your druid levels for wild shape, and if you do not already possess the ability, you gain it. 4th: channel animal 2/day (cast spells as if originating from a touched animal, including delivering touch spells through it). 6th: channel plant 1/day (the same conduit through a plant). 8th: channel animal 4/day. 10th: channel plant 2/day.",
        category: "trait",
        source: `${CH5} — Arcane Hierophant (pp. 108–112)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "champion-of-corellon-larethian",
    name: "Champion of Corellon Larethian",
    ruleset: "core",
    source: `${CH5} — Champion of Corellon Larethian (p. 113)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Knowledge (any)", "Profession", "Ride", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Alignment: Any nonevil",
      "Base Attack Bonus: +7",
      "Skills: Diplomacy 4 ranks, Knowledge (religion) 2 ranks",
      "Feats: Proficient with all martial weapons and heavy armor, Combat Expertise, Dodge, Mounted Combat",
      "Special: Must worship Corellon Larethian",
      "Special: Must also take either Weapon Focus (longsword) or Exotic Weapon Proficiency (elven thinblade or elven courtblade)",
    ],
    features: [
      {
        key: "champion-of-corellon-blessing",
        name: "Corellon's Blessing",
        description:
          "1st: Corellon's blessing (heal wounds by touch, like a paladin's lay on hands: a total per day equal to your champion level × your Charisma modifier, minimum 1; the healing can instead damage undead on a successful melee touch attack; paladin levels stack with champion levels for this ability) and a bonus feat. Bonus feats also at 4th, 7th, and 10th: each must be a fighter bonus feat that has Combat Expertise, Dodge, or Mounted Combat as a prerequisite. 2nd: elegant strike (add your Dexterity bonus to damage rolls, in addition to Strength, with the longsword, rapier, elven thinblade, elven lightblade, elven court sword, or scimitar; creatures immune to sneak attacks or critical hits are immune). 3rd: superior defense +1 (the maximum Dexterity bonus of medium or heavy armor you wear increases by 1; +2 at 6th, +3 at 9th). 5th: unimpeded movement (medium or heavy armor no longer reduces your movement).",
        category: "trait",
        source: `${CH5} — Champion of Corellon Larethian (pp. 113–117)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "luckstealer",
    name: "Luckstealer",
    ruleset: "core",
    source: `${CH5} — Luckstealer (p. 118)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Appraise", "Bluff", "Concentration", "Craft", "Knowledge (local)", "Profession", "Sense Motive", "Sleight of Hand", "Spellcraft"],
    prerequisites: [
      "Race: Halfling",
      "Skills: Profession (gambler) 9 ranks",
      "Feats: Dallah Thaun's Luck",
      "Spells: Ability to cast 3rd-level arcane or divine spells",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at levels 2–6, 8, and 9 (not at 1st, 7th, or 10th)",
    ],
    features: [
      {
        key: "luckstealer-curses",
        name: "Luck Curses",
        description:
          "1st: curse of the fatespurned and subtle magic. 4th: lucky magic and desperate recall 1/day. 7th: curse of the black cloud 1/day. 10th: curse of the black cloud 2/day.",
        category: "trait",
        source: `${CH5} — Luckstealer (pp. 118–121)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "ruathar",
    name: "Ruathar",
    ruleset: "core",
    source: `${CH5} — Ruathar (p. 122)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ3, P3, G3, G3),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Hide", "Knowledge (all)", "Listen", "Move Silently", "Profession", "Search", "Sense Motive", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Base Attack Bonus: +6, OR any skill 9 ranks, OR ability to cast 3rd-level spells",
      "Special: Must have performed a great service to an elf community, such as participating in the defeat of a monster of at least CR 10, recovering a valuable elven magic item, or risking death to save elven lives",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at every level",
    ],
    features: [
      {
        key: "ruathar-elf-friend",
        name: "Elf Friend",
        description:
          "1st: word of friendship (a short magical phrase learned from the elves) and gift of the elves. 2nd: low-light vision and elfwise. 3rd: star blessing and Arvandor's grace.",
        category: "trait",
        source: `${CH5} — Ruathar (pp. 122–125)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "skypledged",
    name: "Skypledged",
    ruleset: "core",
    source: `${CH5} — Skypledged (p. 126)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Concentration", "Craft", "Handle Animal", "Heal", "Intimidate", "Knowledge (nature)", "Knowledge (the planes)", "Listen", "Profession", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Race: Raptoran",
      "Spells: Ability to cast summon monster IV or summon nature's ally IV",
      "Special: Flight extraordinary ability",
      "Special: Spells per day advance as +1 level of an existing divine spellcasting class at every level",
    ],
    features: [
      {
        key: "skypledged-spellpool",
        name: "Divine Spellpool",
        description:
          "1st: skypledge (you forswear earth, fire, and water spells) and divine spellpool I (call spells from a shared pool of wind-lord magic; the spellpool grows at 4th — divine spellpool II — and 7th — divine spellpool III). 2nd: beckon breeze. 3rd: instant supplication. 5th: beckon winds. 6th: servant supplication. 8th: beckon gale. 9th: assumptive supplication. 10th: cyclonic doom.",
        category: "trait",
        source: `${CH5} — Skypledged (pp. 126–130)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "stormtalon",
    name: "Stormtalon",
    ruleset: "core",
    source: `${CH5} — Stormtalon (p. 131)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Balance", "Climb", "Craft", "Intimidate", "Jump", "Spot", "Tumble"],
    prerequisites: [
      "Race: Raptoran",
      "Base Attack Bonus: +5",
      "Special: Flight extraordinary ability",
    ],
    features: [
      {
        key: "stormtalon-aerial",
        name: "Aerial Elite",
        description:
          "1st: foot talons (fight with the talons on your feet). 2nd, 4th, 6th, 8th, 10th: bonus aerial feat. 3rd: fast flight (+10 feet to your fly speed). 5th: fast flight (+20 feet). 7th: improved foot talons. 9th: fast flight (+40 feet).",
        category: "trait",
        source: `${CH5} — Stormtalon (pp. 131–134)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "whisperknife",
    name: "Whisperknife",
    ruleset: "core",
    source: `${CH5} — Whisperknife (p. 135)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Disable Device", "Handle Animal", "Hide", "Intimidate", "Jump", "Knowledge (local)", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Race: Halfling",
      "Base Attack Bonus: +4",
      "Skills: Balance 3 ranks, Climb 3 ranks, Hide 6 ranks, Jump 3 ranks, Move Silently 6 ranks, Tumble 3 ranks",
      "Feats: Point-Blank Shot, Quick Draw, Two-Weapon Fighting, Weapon Finesse",
      "Special: Sneak attack +1d6",
    ],
    features: [
      {
        key: "whisperknife-thrown",
        name: "Thrown-Blade Duellist",
        description:
          "1st: Rapid Shot as a bonus feat and uncanny dodge. 2nd: sneak attack +1d6. 3rd: defensive throw and improved catch. 4th: close defense. 5th: sneak attack +2d6. 6th: fast movement and poison use. 7th: vengeful strike 1/day. 8th: superior catch and sneak attack +3d6. 9th: improved uncanny dodge. 10th: vengeful strike 3/day.",
        category: "trait",
        source: `${CH5} — Whisperknife (pp. 135–138)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
  {
    id: "wildrunner",
    name: "Wildrunner",
    ruleset: "core",
    source: `${CH5} — Wildrunner (p. 139)`,
    sourceUrl: ROTW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Balance", "Climb", "Handle Animal", "Hide", "Intimidate", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Alignment: Any good or chaotic",
      "Skills: Hide 5 ranks, Knowledge (nature) 5 ranks, Move Silently 5 ranks, Survival 8 ranks",
      "Feats: Endurance",
    ],
    features: [
      {
        key: "wildrunner-primal-scream",
        name: "Primal Scream",
        description:
          "1st: fast movement and trackless step. 2nd: primal scream and scent. 3rd: endure elements. 4th: primal scream (enemies shaken). 5th: hide in plain sight. 6th: primal scream (pounce). 7th: unfettered stride. 8th: primal scream (enemies cower). 9th: feyheart. 10th: primal scream (fast healing).",
        category: "trait",
        source: `${CH5} — Wildrunner (pp. 139–144)`,
        sourceUrl: ROTW_PATH,
      },
    ],
  },
];
