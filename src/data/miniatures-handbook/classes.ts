/**
 * Miniatures Handbook base classes: of the book's four new
 * standard classes, the Favored Soul (p. 5), Marshal (p. 11),
 * and Warmage (p. 14) already exist in the recovered core data
 * (src/data/core/new-base-classes.ts). They were verified
 * against the printed Miniatures Handbook originals for this
 * batch (see the REBUILD-NOTES.md Batch 4 addendum): the
 * Favored Soul and Warmage records match the book exactly, but
 * the Marshal record does NOT — the book's Table 1–5 gives the
 * marshal a three-quarter base attack bonus, not the record's
 * full progression, and the book's class-skill list includes
 * Speak Language and Survival (and not Profession), where the
 * record lists Profession and omits the other two. Neither
 * record was modified.
 *
 * The Healer (p. 8) was NOT present anywhere in the dataset —
 * contrary to this batch's original premise — so it is added
 * here, built 2026-10-27 from the copy in Shaun's Dropbox
 * library:
 *   /A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf
 * Progression rows are the printed Table 1–4 rows for levels
 * 1–10, matching this app's per-class level cap convention.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const MH = "Miniatures Handbook";
const MH_PATH = "/A POC DM related/Desktop/Sourcebooks/Miniatures Handbook.pdf";
const CH1 = `${MH} — Chapter 1: Characters`;

export const MINIATURES_HANDBOOK_CLASSES: ClassDefinition[] = [
  {
    id: "healer",
    name: "Healer",
    ruleset: "core",
    source: `${CH1} — Healer (pp. 8–10)`,
    sourceUrl: MH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (nature)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft", "Survival"],
    features: [
      {
        key: "healer-features",
        name: "Healer Features",
        description:
          "A good-aligned divine spellcaster who prepares spells from the healer spell list (Wisdom-based; as printed, her spell save DCs are Charisma-based). Healing hands (1st: add her Charisma modifier to hit points cured by healing-subschool spells she casts as a healer), Skill Focus (Heal) as a bonus feat (2nd), and a chain of once-daily cleanses as the matching remove spells: cleanse paralysis (3rd), cleanse disease (4th), cleanse fear (5th), cleanse poison (6th), then cleanse blindness (9th), cleanse spirit (10th), and cleanse petrification (13th). Effortless healing at 7th (her healing spells do not provoke attacks of opportunity) and a unicorn companion at 8th (a celestial unicorn she can call once per day for 2 hours per level; alternative celestial companions open up at 12th level), new limb (15th), and new life (20th). Proficient with all simple weapons and light armor, but her oath forbids metal armor and shields: wearing either suppresses her healer spellcasting and supernatural and spell-like class features until 24 hours after it is removed.",
        category: "trait",
        source: `${CH1} — Healer (pp. 8–10)`,
        sourceUrl: MH_PATH,
      },
    ],
  },
];
