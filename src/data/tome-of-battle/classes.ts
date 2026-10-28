/**
 * Tome of Battle base classes: the book's three martial adept
 * classes — Crusader (p. 8), Swordsage (p. 15), and Warblade
 * (p. 20) — none of which existed anywhere in the recovered
 * dataset (checked against src/data/core/new-base-classes.ts,
 * the legacy classes, and the aggregates; see the
 * REBUILD-NOTES.md Batch 8a addendum). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf
 * The PDF has a full text layer; progression tables and
 * class-skill lists were read from Tables 1–1, 1–2, and 1–3
 * directly. Progression rows are the printed rows for levels
 * 1–10, matching this app's per-class level cap convention. As
 * with the spellcasting classes, martial maneuvers and stances
 * are not modeled; maneuvers known/readied and stances known
 * are summarized in each class's feature text.
 * Printed quirk kept: the swordsage class-skill line in some
 * printings reads "×6 at 1st level" for its first-level skill
 * point multiplier; the app does not record the first-level
 * multiplier separately, and the skill points per level (6)
 * are unaffected.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const TOB = "Tome of Battle: The Book of Nine Swords";
const TOB_PATH = "/a poc dm related/desktop/Sourcebooks/Tome of Battle - The Book of Nine Swords (oef, act, bm, hq) (WTC953787200).pdf";
const CH1 = `${TOB} — Chapter 1: Disciples of the Sword`;

export const TOME_OF_BATTLE_CLASSES: ClassDefinition[] = [
  {
    id: "crusader",
    name: "Crusader",
    ruleset: "core",
    source: `${CH1} — Crusader (pp. 8–14)`,
    sourceUrl: TOB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Balance", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (religion)", "Martial Lore", "Ride"],
    features: [
      {
        key: "crusader-features",
        name: "Crusader Features",
        category: "trait",
        description:
          "A divinely inspired martial adept who fights for a cause. Maneuvers and stances are not modeled here, as spells are not modeled for spellcasters: disciplines are Devoted Spirit, Stone Dragon, and White Raven; maneuvers known 5 at 1st level rising to 9 at 10th (Table 1–1), readied 5 (6 at 10th), granted randomly in combat (2 at a time, 3 at 10th), stances known 1 at 1st, 2 at 2nd, 3 at 8th. 1st: furious counterstrike (attack/damage bonus from your delayed damage pool, up to +6) and steely resolve 5 (damage taken goes into a delayed damage pool; capacity 10 at 4th, 15 at 8th). 2nd: indomitable soul (add Cha bonus to Will saves). 3rd: zealous surge (reroll one save, 1/day). 6th: smite 1/day (Cha to attack, class level to damage; 2/day at 18th). 10th: Die Hard as a bonus feat. 13th: mettle. Proficient with all simple and martial weapons, all armor, and all shields.",
        source: `${CH1} — Crusader (pp. 8–14; Table 1–1)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "swordsage",
    name: "Swordsage",
    ruleset: "core",
    source: `${CH1} — Swordsage (pp. 15–19)`,
    sourceUrl: TOB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Heal", "Hide", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Listen", "Martial Lore", "Move Silently", "Profession", "Ride", "Sense Motive", "Swim", "Tumble"],
    features: [
      {
        key: "swordsage-features",
        name: "Swordsage Features",
        category: "trait",
        description:
          "A scholarly martial adept with the broadest maneuver access of the three adept classes. Maneuvers and stances are not modeled here, as spells are not modeled for spellcasters: disciplines are Desert Wind, Diamond Mind, Setting Sun, Shadow Hand, Stone Dragon, and Tiger Claw; maneuvers known 6 at 1st level rising to 15 at 10th (Table 1–2), readied 4 rising to 8, stances known 1 at 1st, 2 at 2nd, 3 at 5th, 4 at 9th. 1st: quick to act +1 (initiative; +2 at 5th, +3 at 10th, +4 at 15th, +5 at 20th) and discipline focus (Weapon Focus with the preferred weapons of one discipline). 2nd: AC bonus (add Wis bonus to AC in light or no armor). 4th: discipline focus (insightful strike — Wis to damage with the discipline's preferred weapons). 7th: sense magic. 8th: discipline focus (defensive stance — Wis to saves in the discipline's stance). 9th: evasion. 17th: improved evasion. 20th: dual boost 3/day. Proficient with all simple and martial weapons and with light armor.",
        source: `${CH1} — Swordsage (pp. 15–19; Table 1–2)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
  {
    id: "warblade",
    name: "Warblade",
    ruleset: "core",
    source: `${CH1} — Warblade (pp. 20–26)`,
    sourceUrl: TOB_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (history)", "Knowledge (local)", "Martial Lore", "Swim", "Tumble"],
    features: [
      {
        key: "warblade-features",
        name: "Warblade Features",
        category: "trait",
        description:
          "A pure warrior of the Sublime Way who blends intellect with swordplay. Maneuvers and stances are not modeled here, as spells are not modeled for spellcasters: disciplines are Diamond Mind, Iron Heart, Stone Dragon, Tiger Claw, and White Raven; maneuvers known 3 at 1st level rising to 8 at 10th (Table 1–3), readied 3 rising to 5, stances known 1 at 1st, 2 at 4th, 3 at 10th. 1st: battle clarity (add Int bonus to Reflex saves, up to your warblade level) and weapon aptitude (retrain weapon-specific feats each morning). 2nd: uncanny dodge. 3rd: battle ardor (Int bonus on rolls to confirm critical hits). 5th: bonus feat (again at 9th, 13th, and 17th). 6th: improved uncanny dodge. 7th: battle cunning (Int bonus on damage against flat-footed or flanked foes). 11th: battle skill (Int bonus on opposed checks such as bull rush, disarm, and trip). 15th: battle mastery (Int bonus on attacks of opportunity). 20th: stance mastery (use two stances at once). Proficient with all simple and martial weapons, light and medium armor, and shields (except tower shields).",
        source: `${CH1} — Warblade (pp. 20–26; Table 1–3)`,
        sourceUrl: TOB_PATH,
      },
    ],
  },
];
