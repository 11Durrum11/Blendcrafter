import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Liber Mechanika (Privateer Press, 2005) base class: the
// Arcane Mechanik (book pp. 9–12), the book's "revitalized and
// re-imagined" presentation of the Iron Kingdoms Character
// Guide class. No arcane mechanik record existed in the
// dataset before this batch, so the class is recorded as
// printed here. Progression rows are recorded for levels
// 1–10, per this app's convention for base classes.
// PRINTED QUIRKS, recorded as printed and verified against
// the page image of Table 1–1: the table's base attack
// column reads +0, +1, +2, +3, +3, +5, +5, +6/+1, +6/+1,
// +7/+2 for levels 1–10 — it jumps from +3 at 5th level to
// +5 at 6th (the standard three-quarter column would read
// +4 at 6th); the Reflex column is the poor progression
// (+0, +0, +1, +1, +1, +2, +2, +2, +3, +3), so Will is the
// class's only good save. Spellcasting is described in the
// features, as in the other packs. Short mechanical
// summaries in our own words, cited to book + page.
// Source PDF: /transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf

const LM = "Liber Mechanika";
const LM_PATH = "/transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf";
const AM = `${LM} — Arcane Mechanik`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: LM_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
// Table 1–1 as printed (see the header note): +5 at 6th level.
const AM_BAB = [0, 1, 2, 3, 3, 5, 5, 6, 6, 7];

export const LIBER_MECHANIKA_CLASSES: ClassDefinition[] = [
  {
    id: "arcane-mechanik",
    name: "Arcane Mechanik",
    ruleset: "iron_kingdoms",
    source: `${AM} (pp. 9–12)`,
    sourceUrl: LM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(AM_BAB, POOR, POOR, GOOD),
    classSkills: [
      "Appraise", "Concentration", "Craft", "Craft (clockwork)", "Craft (mechanika)",
      "Craft (steam engine)", "Jack Handling", "Knowledge (arcana)", "Knowledge (mechanika)",
      "Knowledge (any science or technical)", "Profession", "Profession (mechanik)",
      "Search", "Spellcraft",
    ],
    features: [
      f("Arcane Mechanik Basics", "Alignment: any. Starting funds 5d4 × 10 gp. Weapon and armor proficiencies: all simple weapons and light armor; an arcane mechanik is susceptible to arcane spell failure while casting in armor if the spell has a somatic component. The arcane mechanik is an Intelligence-based prepared arcane spellcaster: he casts from the arcane mechanik/sorcerer/wizard spell list with spells per day per Table 1–2 (0-level through 6th-level spells), preparing spells like a wizard from his spellbook, called a Liber Mechanika — the tome also holds his unique schematics. He begins with three 0-level and two 1st-level spells in the book, plus one additional 0-level and one additional 1st-level spell per point of Intelligence modifier, and learns one new spell of his choice at each new level; he can also scribe spells from another arcane mechanik's Liber Mechanika or from scrolls.", undefined, `${AM} (pp. 10–11)`),
      f("Etch Rune Plate (Ex)", "At 1st level, the arcane mechanik gains the Etch Rune Plate feat for free, regardless of prerequisites (see the feat in this pack).", 1, `${AM} (p. 11)`),
      f("Fabrication Score", "Beginning at 1st level, and again every five levels thereafter (5th, 10th, 15th, and 20th), the arcane mechanik's fabrication score decreases the experience he must pay to fabricate and draft a mechanikal item: 10% at 1st level, 15% at 5th, 20% at 10th, 25% at 15th, and 30% at 20th.", 1, `${AM} (p. 11)`),
      f("Charge Accumulator (Su)", "Beginning at 2nd level, the arcane mechanik can charge accumulators by hooking himself and the accumulator into an arcane condenser: for each spell level he expends, he places a single charge into an accumulator cell. Arcane mechaniks of 2nd level or higher never need to worry about accumulator backlash.", 2, `${AM} (p. 12)`),
      f("Bonus Feats", "At 3rd, 6th, 9th, and 12th level, the arcane mechanik gains a bonus feat chosen from: Craft Accumulator, Craft Cerebral Matrix, Craft Cortex, Craft Mechanikal Construct, Craft Mechanikal Prosthetic, Craft Wondrous Item, Mechanikal Specialty, and Union Steamo. He must still meet all prerequisites for the bonus feat, including level and feat requirements and skill rank minimums.", 3, `${AM} (p. 11)`),
      f("Mechanika Familiarity", "From 3rd level, an arcane mechanik never needs to make a Craft (mechanika) check to use a mechanikal device he has built, and he gains a competence bonus equal to his arcane mechanik level (maximum +10) to all Craft (mechanika) skill checks to use foreign mechanika, replace accumulators and rune plates, and repair damaged mechanika.", 3, `${AM} (p. 11)`),
      f("Mechanikal Familiar (Ex)", "At 5th level, the arcane mechanik can bond with a Cerebral Matrix, gaining a familiar made out of moving parts and drawing power from a clockwork engine, small steam plant, or accumulator; the creature functions as a familiar and gains all the abilities a familiar does (see Equipment: Servitors, p. 41).", 5, `${AM} (p. 12)`),
      f("Special Ability", "Starting at 8th level, and again at 12th, 16th, and 20th levels, the arcane mechanik gains a special ability of his choice from the following list. Overload (Sp): sacrifice any non-0-level prepared spell and make a ranged touch attack to overload a single mechanikal item of his construction that has an arcane accumulator installed within it. Skill Mastery: select a number of Intelligence-based skills equal to 3 + his Intelligence modifier; he may take 10 with those skills even if stress and distractions would normally prevent it (this ability may be gained multiple times, selecting additional skills each time). Attune Device (Ex): attune a foreign mechanikal device (one he did not create) so he no longer needs Craft (mechanika) checks to use it; he may have a number of attuned devices equal to his Intelligence modifier, attuning takes 5 minutes of concentration while holding the device, and breaking attunement is a full-round action after which the device may not be attuned again for 24 hours. Transfer Energy (Su): after 1 full hour of rest, hold a mechanika item he created and sacrifice a number of spell levels equal to the charges he wishes to imbue within it; the charges are retained until 8 hours have passed. Arcane Supercharger (Su): attached to an arcane condenser and an accumulator with at least 10 charges, drain the 10 charges when casting to mimic one metamagic feat (Empower Spell, Enlarge Spell, Extend Spell, or Maximize Spell, chosen when this ability is gained); it may be gained multiple times for different feats, and cannot stack with metamagic feats already applied to a spell.", 8, `${AM} (pp. 12–13)`),
    ].map((x) => x as FeatureDefinition),
  },
];
