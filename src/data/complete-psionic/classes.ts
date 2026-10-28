/**
 * Complete Psionic base classes: the book's three new standard classes —
 * Ardent (p. 5), Divine Mind (p. 9), and Lurk (p. 13) — none of which
 * existed anywhere in the recovered dataset (checked against
 * src/data/core/new-base-classes.ts and the aggregates for this batch;
 * see the REBUILD-NOTES.md Batch 6 addendum). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf
 * The PDF is a scan with no text layer; tables and class-skill lists
 * were read by OCR of the page images and cross-checked against the
 * printed tables (Tables 1-2, 1-3, and 1-5). Progression rows are the
 * printed rows for levels 1–10, matching this app's per-class level
 * cap convention. As with the spellcasting classes, psionic powers
 * are not modeled; power points and powers known are summarized in
 * each class's feature text. The book's fourth offering, the Erudite,
 * is presented as a variant psion (an option on the Expanded Psionics
 * Handbook class), not a new base class, and is not added.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const CP = "Complete Psionic";
const CP_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf";
const CH1 = `${CP} — Chapter 1: Classes`;

export const COMPLETE_PSIONIC_CLASSES: ClassDefinition[] = [
  {
    id: "ardent",
    name: "Ardent",
    ruleset: "core",
    source: `${CH1} — Ardent (pp. 5–9)`,
    sourceUrl: CP_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (all)", "Profession", "Psicraft"],
    features: [
      {
        key: "ardent-features",
        name: "Ardent Features",
        category: "trait",
        description:
          "A psionic manifester who draws power directly from universal philosophical concepts — mantles — rather than from a deity. Alignment: any. Wisdom-based manifesting (power save DC 10 + power level + Wis modifier); power points and powers known per Table 1-2 (not modeled here, as spells are not modeled for spellcasters). 1st: assume psionic mantles — choose two primary mantles; each mantle grants a list of powers and a granted ability, and you must always know at least as many powers from each primary mantle as from any secondary mantle. You assume an additional mantle at 2nd, 5th, 10th, and 15th level (and beyond, per the printed table). Proficient with all simple weapons, with all armor, and with shields (except tower shields). The class-skill list prints 'Knowledge' unqualified; recorded here as Knowledge (all), following the house convention.",
        source: `${CH1} — Ardent (pp. 5–9; Table 1-2)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "divine-mind",
    name: "Divine Mind",
    ruleset: "core",
    source: `${CH1} — Divine Mind (pp. 9–13)`,
    sourceUrl: CP_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Jump", "Knowledge (psionics)", "Knowledge (religion)", "Profession", "Psicraft", "Ride", "Swim"],
    features: [
      {
        key: "divine-mind-features",
        name: "Divine Mind Features",
        category: "trait",
        description:
          "A devout psionic warrior who adopts the mantles of a chosen deity and projects auras that aid his comrades. Alignment must not be opposed to any of his deity's alignment factors. Wisdom-based manifesting, but his manifester level equals his class level minus 4; power points and powers known per Table 1-3 (not modeled here). 1st: Wild Talent as a bonus feat; mantle (choose one of his deity's mantles from Table 1-4, gaining its granted power; a second mantle at 6th level and a third at 12th); psychic aura 5 ft. (project one aura from his mantles, growing to 10 ft. at 3rd, 15 ft. at 5th, 20 ft. at 7th, and larger thereafter). 4th: divine grace. 8th: change aura as a standard action (faster at higher levels). Proficient with all simple and martial weapons, with all armor, and with shields (except tower shields).",
        source: `${CH1} — Divine Mind (pp. 9–13; Table 1-3)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "lurk",
    name: "Lurk",
    ruleset: "core",
    source: `${CH1} — Lurk (pp. 13–17)`,
    sourceUrl: CP_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Autohypnosis", "Bluff", "Climb", "Concentration", "Craft", "Disguise", "Escape Artist", "Hide", "Jump", "Knowledge (psionics)", "Listen", "Move Silently", "Profession", "Psicraft", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Psionic Device"],
    features: [
      {
        key: "lurk-features",
        name: "Lurk Features",
        category: "trait",
        description:
          "A mentally empowered killer who dispatches enemies from the shadows. Intelligence-based manifesting; power points and powers known per Table 1-5 (not modeled here, as spells are not modeled for spellcasters). 1st: lurk augment — spend power points to augment your next attack (mental assault, planar attack, synaptic disconnect, and others on Table 1-6, unlocked by minimum level and growing with power points spent). 2nd: psionic sneak attack +1d6 (+2d6 at 7th, +3d6 at 12th, +4d6 at 17th). 6th: initiative boost. 15th: slippery mind. Proficient with all simple and martial weapons, with light armor, and with shields (except tower shields).",
        source: `${CH1} — Lurk (pp. 13–17; Table 1-5)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
];
