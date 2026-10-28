import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

// Expanded Psionics Handbook base classes (Chapter 2). All four were checked
// against the recovered dataset first: NO Psion, Psychic Warrior, Soulknife,
// or Wilder record exists there (the parent brief believed a Psion record
// existed — it does not; "Psion" appears only as the kalashtar favored-class
// string), so all four are added here. Short mechanical summaries in our own
// words, cited to book + page. Psionic powers, power points, and powers known
// are a system the app does not model; the tables' power-point and
// powers-known columns are summarized as text on each record, mirroring how
// spellcasting classes note their unmodeled spell progressions.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf

const XPH = "Expanded Psionics Handbook";
const XPH_PATH =
  "/a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf";

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const HALF: number[] = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ: number[] = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

export const EXPANDED_PSIONICS_CLASSES: ClassDefinition[] = [
  {
    id: "psion",
    name: "Psion",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Knowledge (psionics)", "Profession", "Psicraft"],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "psion-manifesting",
        name: "Power Points and Powers Known (not modeled)",
        description:
          "A psion manifests psionic powers from a daily pool of power points (2 at 1st level, rising to 343 at 20th, plus bonus points for high Intelligence) and knows 3 powers at 1st level, rising to 36 at 20th; maximum power level known rises from 1st to 9th at 17th level (Table 2–3). Powers are a system this app does not model.",
        category: "special-quality",
        source: `${XPH}, pp. 19–20`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "psion-discipline",
        name: "Discipline",
        description:
          "At 1st level a psion chooses one discipline — Clairsentience (Seer), Metacreativity (Shaper), Psychokinesis (Kineticist), Psychometabolism (Egoist), Psychoportation (Nomad), or Telepathy (Telepath) — gaining that discipline's extra class skills (for example, a Seer gains Gather Information, Listen, and Spot; a Shaper gains Bluff, Disguise, and Use Psionic Device; a Telepath gains Bluff, Diplomacy, Gather Information, and Sense Motive) and access to its restricted powers, but cannot learn powers restricted to other disciplines.",
        category: "special-quality",
        source: `${XPH}, pp. 19–21`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "psion-bonus-feats",
        name: "Bonus Feats",
        description:
          "A psion gains a bonus psionic feat at 1st, 5th, 10th, 15th, and 20th level.",
        category: "feat",
        source: `${XPH}, p. 20`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 19–23 (Table 2–3, p. 20)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "psychic-warrior",
    name: "Psychic Warrior",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Jump", "Knowledge (psionics)", "Profession", "Ride", "Search", "Swim"],
    progression: rows(TQ, G, P, P),
    features: [
      {
        key: "psychic-warrior-manifesting",
        name: "Power Points and Powers Known (not modeled)",
        description:
          "A psychic warrior manifests powers from the psychic warrior list: no class power points at 1st level (bonus points from high Wisdom, race, or feats still apply), rising to 127 power points/day at 20th, and 1 power known at 1st level rising to 20 at 20th; maximum power level known reaches 6th at 16th level (Table 2–4). Powers are a system this app does not model. Proficient with all simple and martial weapons, all armor, and shields (except tower shields).",
        category: "special-quality",
        source: `${XPH}, pp. 24–25`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "psychic-warrior-bonus-feats",
        name: "Bonus Feats",
        description:
          "A psychic warrior gains a bonus feat at 1st and 2nd level and every three levels thereafter (5th, 8th, 11th, 14th, 17th, 20th), chosen from the fighter bonus feat list or the psionic feat list.",
        category: "feat",
        source: `${XPH}, p. 25`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 24–26 (Table 2–4, p. 25)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "soulknife",
    name: "Soulknife",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Hide", "Jump", "Knowledge (psionics)", "Listen", "Move Silently", "Profession", "Spot", "Tumble"],
    progression: rows(TQ, P, G, G),
    features: [
      {
        key: "soulknife-mind-blade",
        name: "Mind Blade",
        description:
          "A soulknife materializes a semisolid blade of psychic energy (as a move action; a free action from 5th level) that functions as a short sword, gaining a cumulative +1 enhancement bonus at 4th level and every four levels thereafter (+5 at 20th), separate mind blade enhancement abilities (+1 at 6th, rising to +4 at 18th), and the ability to throw it (2nd level), shape it into a longsword or bastard sword form (5th), and throw multiple blades (17th). The soulknife gains Weapon Focus (mind blade) and Wild Talent as bonus feats at 1st level.",
        category: "special-attack",
        source: `${XPH}, pp. 26–28`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "soulknife-psychic-strike",
        name: "Psychic Strike",
        description:
          "A charged mind blade deals an extra +1d8 damage at 3rd level, increasing by +1d8 every four levels thereafter (+5d8 at 19th), against a living, non-mindless target with an Intelligence score. Other features: Speed of Thought as a bonus feat at 6th level, bladewind and Greater Weapon Focus (mind blade) at 9th, and knife to the soul at 13th (psychic strike damage can instead deal Intelligence, Wisdom, or Charisma damage). PRINTED QUIRK: Table 3–1 (p. 35) lists soulknife skill points as (2 + Int) × 4 / 2 + Int, contradicting the class entry's (4 + Int) × 4 / 4 + Int used here.",
        category: "special-attack",
        source: `${XPH}, pp. 26–28 (Table 2–5, p. 27)`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 26–29 (Table 2–5, p. 27)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "wilder",
    name: "Wilder",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    classSkills: ["Autohypnosis", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Escape Artist", "Intimidate", "Jump", "Knowledge (psionics)", "Listen", "Profession", "Psicraft", "Sense Motive", "Spot", "Swim", "Tumble"],
    progression: rows(TQ, P, P, G),
    features: [
      {
        key: "wilder-manifesting",
        name: "Power Points and Powers Known (not modeled)",
        description:
          "A wilder manifests powers spontaneously from a daily pool (2 power points at 1st level, rising to 343 at 20th, plus bonus points for high Charisma) but knows very few powers: 1 at 1st level, rising to only 11 at 20th; maximum power level known reaches 9th at 18th level (Table 2–6). Powers are a system this app does not model. Proficient with all simple weapons, light armor, and shields (except tower shields).",
        category: "special-quality",
        source: `${XPH}, pp. 29–30`,
        sourceUrl: XPH_PATH,
      },
      {
        key: "wilder-wild-surge",
        name: "Wild Surge and Psychic Enervation",
        description:
          "When manifesting a power, a wilder can invoke a wild surge to raise her effective manifester level by +1 (at 1st level, rising to +6 at 19th) at no extra power point cost — but each surge risks psychic enervation (a chance equal to 5% per manifester level added of becoming dazed until the end of her next turn and losing power points equal to her wilder level). Related features: elude touch (2nd), surging euphoria (4th, +1 rising to +3), and volatile mind (5th, growing cost imposed on telepathy powers used against her).",
        category: "special-quality",
        source: `${XPH}, pp. 30–32`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 29–32 (Table 2–6, p. 30)`,
    sourceUrl: XPH_PATH,
  },
];
