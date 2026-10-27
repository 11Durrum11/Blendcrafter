/**
 * Complete Divine base classes: of the book's three new standard
 * classes, the Favored Soul (p. 6) and Spirit Shaman (p. 14) already
 * exist in the recovered core data (src/data/core/new-base-classes.ts)
 * and were verified against the printed book for this batch (see the
 * REBUILD-NOTES.md Batch 3 addendum — both recovered records carry one
 * class skill the book does not list: Knowledge (religion) for the
 * Favored Soul, Knowledge (arcana) for the Spirit Shaman; neither
 * record was modified). The Shugenja (p. 10) was NOT present anywhere
 * in the dataset, so it is added here, built 2026-10-27 from the copy
 * in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf
 * The PDF is a scan with no text layer; values below come from OCR of
 * the printed pages, with table cells settled against the page images.
 * Progression rows are the printed Table 1-3 rows for levels 1-10,
 * matching this app's per-class level cap convention.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1-10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1-10
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const CD = "Complete Divine";
const CD_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf";
const CH1 = `${CD} — Chapter 1: Classes`;

export const COMPLETE_DIVINE_CLASSES: ClassDefinition[] = [
  {
    id: "shugenja",
    name: "Shugenja",
    ruleset: "core",
    source: `${CH1} — Shugenja (pp. 10–13)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (all skills, taken individually)", "Profession", "Spellcraft"],
    features: [
      {
        key: "shugenja-spellcasting",
        name: "Shugenja Spellcasting",
        category: "trait",
        description:
          "Casts divine spells spontaneously from the shugenja spell list, Charisma-based (Charisma sets both spells per day and save DCs), with spells known per Table 1-4. One spell of each level is fixed by the shugenja's order, and half of the spells he chooses must be of his favored element. From 4th level, and every even level after, he may swap one known spell for another of the same level at least two levels below the highest he can cast.",
        source: `${CH1} — Shugenja (pp. 11–13)`,
        sourceUrl: CD_PATH,
      },
      {
        key: "shugenja-element-focus",
        name: "Element Focus",
        category: "trait",
        description:
          "At 1st level the shugenja chooses a favored element — air, earth, fire, or water — tied to his order; half of his spells known must be spells of that element (see Table 1-4).",
        source: `${CH1} — Shugenja (p. 11)`,
        sourceUrl: CD_PATH,
      },
      {
        key: "shugenja-sense-elements",
        name: "Sense Elements (Sp)",
        category: "trait",
        description:
          "As a full-round action, the shugenja becomes aware of all sources of one chosen element (air, earth, fire, or water) within 10 feet, learning their size but not their precise location or nature; concentrating longer extends the range (see the class text).",
        source: `${CH1} — Shugenja (p. 13)`,
        sourceUrl: CD_PATH,
      },
      {
        key: "shugenja-proficiencies",
        name: "Shugenja Proficiencies",
        category: "trait",
        description:
          "Proficient with all simple weapons and with the short sword (often a masterwork wakizashi); not proficient with any armor or shields. Spells are written on ofuda scrolls that serve as the divine focus. Alignment: any (see the class text).",
        source: `${CH1} — Shugenja (pp. 11–13)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
];
