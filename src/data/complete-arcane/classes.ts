/**
 * Complete Arcane base classes: of the book's three new standard classes,
 * the Warlock (p. 5) and Warmage (p. 10) already exist in the recovered
 * core data (src/data/core/new-base-classes.ts) and were verified against
 * the printed book for this batch (see the REBUILD-NOTES.md Batch 3
 * addendum — the recovered Warlock record is missing Knowledge
 * (religion) from its class-skill list; neither record was modified).
 * The Wu Jen (p. 14) was NOT present anywhere in the dataset, so it is
 * added here, built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf
 * Progression rows are the printed Table 1–3 rows for levels 1–10,
 * matching this app's per-class level cap convention.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const CA = "Complete Arcane";
const CA_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf";
const CH1 = `${CA} — Chapter 1: Classes`;

export const COMPLETE_ARCANE_CLASSES: ClassDefinition[] = [
  {
    id: "wu-jen",
    name: "Wu Jen",
    ruleset: "core",
    source: `${CH1} — Wu Jen (pp. 14–16)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Spellcraft"],
    features: [
      {
        key: "wu-jen-features",
        name: "Wu Jen Features",
        description:
          "Arcane spellcaster who prepares spells from a spellbook (Intelligence-based), drawing on the wu jen spell list of elemental magic (earth, fire, metal, water, wood). Alignment: any nonlawful. 1st: watchful spirit (reroll an initiative roll 1/day, take the better result) and a bonus metamagic feat. 3rd and every three levels thereafter: spell secret — one known spell becomes permanently modified as if by Enlarge, Extend, Still, or Silent Spell with no level change. 6th: elemental mastery in place of a spell secret (+2 effective caster level with the chosen element's spells and +2 on saves against that element). Must observe taboos (one at 1st level, one more per spell secret); violating a taboo ends her spellcasting for the day. Proficient with all simple weapons; no armor or shield proficiency. Bonus languages can include Draconic or Giant. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        category: "trait",
        source: `${CH1} — Wu Jen (pp. 15–16)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
];
