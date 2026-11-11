import type {
  ClassDefinition,
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// New NPC Class: the Thug, printed pp. 31-33 — the book's
// section introduction (p. 31) designates the NPC class's name
// and game statistics as Open Content. Transcribed from
// Shaun's own scanned copy (image-only; pages read visually,
// 2026-11-04). The full 20-level table is carried because the
// book prints all twenty levels. Summaries are short
// mechanical paraphrases in our own words; no book prose is
// reproduced. 3.0-era terminology was converted to 3.5
// standard in the 2026-11-10 conversion pass under Shaun's
// standing order (the book itself prints the class's
// "Hit Die: 1d6" in its game statistics; the Thug's Forgery
// skill is keyed to Wisdom as printed).

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const THUG_SOURCE = "Way of the Rogue — New NPC Class: Thug (pp. 31-33)";

function rows(
  bab: number[],
  fort: number[],
  ref: number[],
  will: number[]
): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({
    level: i + 1,
    bab: b,
    fort: fort[i],
    ref: ref[i],
    will: will[i],
  }));
}

function f(name: string, description: string): FeatureDefinition {
  return {
    key:
      "thug-" +
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source: THUG_SOURCE,
    sourceUrl: WOTR_PATH,
  };
}

export const WAY_OF_THE_ROGUE_CLASSES: ClassDefinition[] = [
  {
    id: "thug",
    name: "Thug",
    ruleset: "core",
    source: THUG_SOURCE,
    sourceUrl: WOTR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(
      [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
      [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
      [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12],
      [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    ),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Craft", "Disable Device",
      "Disguise", "Escape Artist", "Forgery", "Gather Information",
      "Hide",  "Intimidate", "Survival", "Jump",
      "Listen", "Move Silently", "Open Lock", "Profession", "Search",
      "Sense Motive", "Spot", "Swim", "Tumble", "Use Rope", "Urban Lore",
    ],
    features: [
      f("NPC Class Basics", "The thug is an NPC class — 'thugs are to rogues what warriors are to fighters.' Skill points are 4 + Int modifier per level (x4 at 1st level). In the book's skill list, Forgery is printed as a Wisdom-keyed skill for this class — a printing quirk kept here as printed."),
      f("Weapon and Armor Proficiency", "Thugs are proficient with the crossbow (hand, light), dagger, dart, light mace, sap, shortbow, and short sword. Medium thugs are also proficient with the club, heavy crossbow, heavy mace, morningstar, quarterstaff, and rapier. They are proficient with light armor but not with shields. Armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble."),
      f("Backstab", "At 1st level, a thug deals +1d4 points of backstab damage, rising to +2d4 at 5th level, +3d4 at 10th, +4d4 at 15th, and +5d4 at 20th. Backstab damage applies only against a foe who is denied his Dexterity bonus to AC — it does not apply against flanked foes, and it cannot be used at range. All the other limits of the rogue's sneak attack apply."),
      f("Combat Feat", "At 10th level and again at 20th level, the thug gains a bonus combat feat chosen from the fighter bonus feat list, except that Weapon Specialization is not available to thugs."),
      f("Special Ability", "At 15th level, the thug chooses one special ability from the rogue's list: crippling strike, defensive roll, or opportunist."),
    ],
  },
];
