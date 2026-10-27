/**
 * Races of Eberron prestige classes: all eight from Chapter 7 of
 * Races of Eberron (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Eberron.pdf
 * All records carry ruleset "eberron". Progression tables are the
 * book's printed tables (printed page numbers are used; in this
 * PDF the printed page is the PDF page minus one). Prerequisites
 * are free text (shown in the UI, soft-checked only), matching the
 * other packs.
 *
 * The moonspeaker is a 12-level class as printed (Table 7–3). The
 * app caps class progressions at 10 rows (the same treatment the
 * 13-level void disciple received in the Complete Divine pack), so
 * levels 1–10 are recorded and the final two levels are noted in
 * the feature text.
 *
 * Quori nightmare and atavist class skills include the Expanded
 * Psionics Handbook skills Autohypnosis, Knowledge (psionics), and
 * Psicraft, which the app's skill list does not carry; they are
 * listed by name as printed, as this pack does not add skill
 * records.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const FULL5 = [1, 2, 3, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const G3 = [2, 3, 3]; // good save, 3 levels
const P3 = [0, 0, 1]; // poor save, 3 levels
const TQ3 = [0, 1, 2];

const ROE = "Races of Eberron";
const ROE_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Eberron.pdf";
const CH7 = `${ROE} — Chapter 7: Prestige Classes`;

export const RACES_OF_EBERRON_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "atavist",
    name: "Atavist",
    ruleset: "eberron",
    source: `${CH7} — Atavist (p. 133; Table 7–1, p. 135)`,
    sourceUrl: ROE_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Knowledge (history)", "Knowledge (the planes)", "Knowledge (psionics)", "Perform", "Profession"],
    prerequisites: [
      "Race: Kalashtar",
      "Alignment: Lawful good or lawful neutral",
      "Skills: Concentration 8 ranks",
      "Feats: Improved Unarmed Strike, or the mind blade class feature",
    ],
    features: [
      {
        key: "atavist-lineage",
        name: "Spiritual Lineage",
        description:
          "1st: call to mind, spiritual lineage (choose a quori spirit lineage, granting additional class skills and benefits), and your unarmed strike or mind blade improves as you advance. 2nd: augmented mindlink and defensive insight. 3rd: supportive mindlink +1 (improving to +2 at 6th and +3 at 9th). 4th: detect possession. 5th: spiritual focus. 7th: quori hunter. 8th: dismissing strike. 9th: personal mind blank. 10th: spiritual union. The class grants no spellcasting or manifesting advancement.",
        category: "trait",
        source: `${CH7} — Atavist (pp. 133–137)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "cabinet-trickster",
    name: "Cabinet Trickster",
    ruleset: "eberron",
    source: `${CH7} — Cabinet Trickster (p. 138; Table 7–2)`,
    sourceUrl: ROE_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ5, P5, G5, G5),
    classSkills: ["Bluff", "Craft", "Diplomacy", "Disguise", "Gather Information", "Intimidate", "Knowledge (local)", "Listen", "Perform", "Profession", "Sense Motive", "Spot"],
    prerequisites: [
      "Race: Changeling",
      "Skills: Disguise 9 ranks",
      "Feats: Persona Immersion (new feat, p. 110)",
      "Special: Must complete a trial assignment for the Cabinet of Faces",
    ],
    features: [
      {
        key: "cabinet-trickster-thought-tricks",
        name: "Thought Tricks",
        description:
          "1st: detect thoughts 2/day (caster level equals character level) and doppelganger insights. 2nd: thought trick (daze) and a bonus feat. 3rd: detect thoughts 4/day and thought trick (disrupt — foil an action requiring Concentration). 4th: thought trick (confuse) and a bonus feat. 5th: change shape as a true doppelganger, detect thoughts at will, and thought trick (stun). Thought tricks work only while reading a creature's thoughts with Hit Dice no greater than your character level; Will save DC 10 + class level + Cha modifier negates (disrupt allows a Concentration check against the same DC instead).",
        category: "trait",
        source: `${CH7} — Cabinet Trickster (pp. 138–142)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "moonspeaker",
    name: "Moonspeaker",
    ruleset: "eberron",
    source: `${CH7} — Moonspeaker (p. 143; Table 7–3)`,
    sourceUrl: ROE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (nature)", "Knowledge (religion)", "Listen", "Profession", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Race: Shifter",
      "Skills: Knowledge (nature) 11 ranks, Knowledge (religion) 4 ranks",
      "Spells: Ability to cast 2nd-level divine spells",
    ],
    features: [
      {
        key: "moonspeaker-blessings",
        name: "Blessings of the Twelve Moons",
        description:
          "Spellcasting advances an existing divine spellcasting class at every level. 1st: Augment Summoning as a bonus feat and moonspeaker shifting (item creation, metamagic, and wild feats count as shifter feats for shifting uses and duration). 2nd: energy resistance 10 to one energy type (a second type at 7th). 3rd: extended summoning (summoning durations doubled, stacking with Extend Spell). 4th: Thelanis tie (add invisibility and deep slumber to your spell list). 5th: wild shape as a 5th-level druid, animals only (stacking with druid levels at class level –4). 6th: shifter integration — your primary shifter trait's ability bonus applies even when not shifting. 7th: Improved Natural Attack. 8th: damage reduction. 9th: extra shifter trait. 10th: energy immunity to one of your resisted types. The printed class runs to 12th level: 11th shifter integration (gain a second trait's benefit), 12th Lamannia calling — beyond the app's 10-row progression cap, noted here only.",
        category: "trait",
        source: `${CH7} — Moonspeaker (pp. 143–147)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "quori-nightmare",
    name: "Quori Nightmare",
    ruleset: "eberron",
    source: `${CH7} — Quori Nightmare (p. 148; Table 7–4)`,
    sourceUrl: ROE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Autohypnosis", "Bluff", "Concentration", "Disguise", "Hide", "Intimidate", "Knowledge (psionics)", "Listen", "Move Silently", "Psicraft", "Sense Motive", "Spot"],
    prerequisites: [
      "Race: Kalashtar or Inspired",
      "Skills: Concentration 8 ranks, Intimidate 4 ranks",
      "Feats: Any one psionic feat",
    ],
    features: [
      {
        key: "quori-nightmare-touch",
        name: "Terrors of the Subconscious",
        description:
          "Manifesting advances an existing manifesting class at every level except 1st. 1st: disturbing touch (melee touch dealing 1d6 damage and sowing fear, augmentable with power points). 2nd: nightmare shroud (a horrific ectoplasmic image granting an Intimidate bonus and a deflection bonus to AC, each equal to your class level; spending 4 power points thickens it to grant concealment). 3rd: nightmare touch (victims of your disturbing touch suffer implanted fears in their sleep). 4th: terror. 5th: embodiment of nightmares (1/day, expend psionic focus: a subject that fails its Will save against your enhanced disturbing touch dies of fear; success instead takes an additional 5d6 damage).",
        category: "trait",
        source: `${CH7} — Quori Nightmare (pp. 148–152)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "reachrunner",
    name: "Reachrunner",
    ruleset: "eberron",
    source: `${CH7} — Reachrunner (p. 153; Table 7–5)`,
    sourceUrl: ROE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL5, G5, G5, P5),
    classSkills: ["Climb", "Craft", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Move Silently", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Race: Shifter",
      "Base Attack Bonus: +5",
      "Skills: Listen 5 ranks, Spot 4 ranks, Survival 8 ranks",
      "Feats: Endurance, Track",
    ],
    features: [
      {
        key: "reachrunner-tracker",
        name: "Master Tracker",
        description:
          "1st: athletics, fast movement (+5 feet), and wild senses. 2nd: nature's stride. 3rd: swift tracker and shifter endurance. 4th: fast movement improves to +10 feet, and Run as a bonus feat. 5th: pouncing ambush.",
        category: "trait",
        source: `${CH7} — Reachrunner (pp. 153–156)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "recaster",
    name: "Recaster",
    ruleset: "eberron",
    source: `${CH7} — Recaster (p. 157; Table 7–6)`,
    sourceUrl: ROE_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Disguise", "Knowledge (all)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Race: Changeling",
      "Skills: Knowledge (arcana) 4 ranks, Spellcraft 8 ranks",
      "Feats: Any two metamagic feats",
      "Spells: Ability to cast 3rd-level arcane spells",
    ],
    features: [
      {
        key: "recaster-metamorphic-spell",
        name: "Metamorphic Spell",
        description:
          "Spellcasting advances an existing arcane spellcasting class at every level except 1st. 1st: metamorphic spell (components) — alter a spell's components a limited number of times per day. 2nd: expanded knowledge and sudden metamagic (again at 4th). 3rd: metamorphic spell (time) — alter a spell's casting time, duration, and similar traits (the spell's duration becomes 1 round when its time traits are changed). 5th: metamorphic spell (space) — up to five times per day, change a spell's spatial characteristics, such as turning a touch spell into a 30-foot ranged touch or carving safe spaces out of an area spell.",
        category: "trait",
        source: `${CH7} — Recaster (pp. 157–160)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "reforged",
    name: "Reforged",
    ruleset: "eberron",
    source: `${CH7} — Reforged (p. 161; Table 7–7)`,
    sourceUrl: ROE_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ3, P3, P3, G3),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Diplomacy", "Heal", "Gather Information", "Jump", "Listen", "Profession", "Spot", "Search", "Sense Motive", "Survival", "Swim"],
    prerequisites: [
      "Race: Warforged",
      "Skills: Craft or Profession 8 ranks, Sense Motive 4 ranks",
    ],
    features: [
      {
        key: "reforged-rebirth",
        name: "Reforging",
        description:
          "1st: extroverted and natural healing (recover hit points naturally as a living creature). 2nd: reforged insight and magical healing (full benefit from healing magic). 3rd: embrace emotion and final reforging — you lose any warforged feats you possess (composite plating, armor spikes, tracery, and the like) and the ability to use warforged components, and gain an equal number of bonus feats in their place, plus Unarmored Body as an additional bonus feat (ignoring its 1st-level-only prerequisite).",
        category: "trait",
        source: `${CH7} — Reforged (pp. 161–165)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
  {
    id: "spellcarved-soldier",
    name: "Spellcarved Soldier",
    ruleset: "eberron",
    source: `${CH7} — Spellcarved Soldier (p. 166; Table 7–8)`,
    sourceUrl: ROE_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL5, G5, P5, G5),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Spellcraft", "Swim"],
    prerequisites: [
      "Race: Warforged",
      "Base Attack Bonus: +6",
      "Skills: Spellcraft 4 ranks",
      "Feats: Silver Tracery",
      "Spells: Ability to cast 1st-level arcane spells or imbue 1st-level infusions",
    ],
    features: [
      {
        key: "spellcarved-soldier-runes",
        name: "Spellcarved Runes",
        description:
          "You carve a rune into your own body, activating one rune at a time: 1st spellcarved runes and the rune of extension; 2nd rune of resistance; 3rd rune of fortification; 4th rune of the archmage (while active, benefit from up to three magic rings and magic robes, and add your class level to your caster level for arcane spells and infusions you cast); 5th rune of warding.",
        category: "trait",
        source: `${CH7} — Spellcarved Soldier (pp. 166–170)`,
        sourceUrl: ROE_PATH,
      },
    ],
  },
];
