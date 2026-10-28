import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Ghostwalk base classes: the two ghost-only base classes of Chapter 1
// (pp. 15–18, Tables 1–1 and 1–2). Ghostwalk is a 3.0-era book (2003);
// following the Races of Faerun precedent, records are written in 3.5
// conventions — the 3.0 skills Intuit Direction and Scry are recorded
// as Survival and (dropped, folded into Spellcraft). Both classes are
// for ghost characters in the Manifest campaign setting; each is a
// 20-level class, and per the app convention for base classes the
// progression rows record levels 1–10. A ghost character must take
// levels in eidolon or eidoloncer (or a normal class, which provides
// no ghost powers); on being raised, a ghost has a life epiphany and
// may convert those levels into levels of another class. Short
// mechanical summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/5.Splat/Ghostwalk.pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const GW = "Ghostwalk";
const GW_PATH = "/A POC PC related/5.Splat/Ghostwalk.pdf";
const CH1 = `${GW} — Chapter 1: All About Ghosts`;
const F = (key: string, name: string, description: string, source: string, needed?: number[]): FeatureDefinition => ({
  key,
  name,
  category: "special-quality",
  description,
  source,
  sourceUrl: GW_PATH,
  ...(needed ? { levelsNeeded: needed } : {}),
});

export const GHOSTWALK_CLASSES: ClassDefinition[] = [
  {
    id: "eidolon",
    name: "Eidolon",
    ruleset: "core",
    source: `${CH1} — Eidolon (pp. 15–16; Table 1–1, p. 16)`,
    sourceUrl: GW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: ["Balance", "Bluff", "Concentration", "Hide", "Intimidate", "Knowledge (the planes)", "Listen", "Sense Motive", "Spot", "Survival"],
    features: [
      F(
        "eidolon-proficiencies",
        "Weapon and Armor Proficiency",
        "An eidolon gains no proficiency in any kind of weapons, armor, or shields.",
        `${CH1} — Eidolon (p. 16)`,
      ),
      F(
        "eidolon-free-multiclassing",
        "Free Multiclassing",
        "Taking the eidolon class does not incur the experience point penalties normally associated with multiclassing (although it does not negate any existing penalties the character may have incurred from multiclassing in standard classes).",
        `${CH1} — Eidolon (p. 16)`,
      ),
      F(
        "eidolon-ghost-feats",
        "Ghost Feats",
        "At 1st level, an eidolon gets a bonus feat; he gains an additional bonus feat at 2nd level and every two levels thereafter. These bonus feats must be feats with the [Ghost] descriptor, and he must still meet all prerequisites for a feat, including ability-score minimums. His ghost feats — the abilities granted by them are commonly called ghost powers — define his path (Corrupter, Dominator, Haunt, Poltergeist, Shaper, or Traveler); see the [Ghost] feats in the Ghostwalk feats.",
        `${CH1} — Eidolon (p. 16; Table 1–1, p. 16)`,
      ),
    ],
  },
  {
    id: "eidoloncer",
    name: "Eidoloncer",
    ruleset: "core",
    source: `${CH1} — Eidoloncer (pp. 17–18; Table 1–2, p. 17)`,
    sourceUrl: GW_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (the planes)", "Knowledge (religion)", "Spellcraft"],
    features: [
      F(
        "eidoloncer-proficiencies",
        "Weapon and Armor Proficiency",
        "An eidoloncer gains no proficiency in any kind of weapons, armor, or shields. An eidoloncer follows all the same rules as an eidolon.",
        `${CH1} — Eidoloncer (p. 18)`,
      ),
      F(
        "eidoloncer-free-multiclassing",
        "Free Multiclassing",
        "Taking the eidoloncer class does not incur the experience point penalties normally associated with multiclassing (although it does not negate any existing penalties the character may have incurred from multiclassing in standard classes).",
        `${CH1} — Eidoloncer (p. 18)`,
      ),
      F(
        "eidoloncer-ghost-feats",
        "Ghost Feats",
        "At 1st level, an eidoloncer gets a bonus feat, which must be a feat with the [Ghost] descriptor; she must still meet all prerequisites for a feat, including ability-score minimums. She gains another bonus ghost feat at 5th level and every five levels after that; see the [Ghost] feats in the Ghostwalk feats.",
        `${CH1} — Eidoloncer (p. 18; Table 1–2, p. 17)`,
        [1, 5, 10, 15, 20],
      ),
      F(
        "eidoloncer-spellcasting",
        "Spellcasting",
        "An eidoloncer advances her spellcasting ability at every level in the eidoloncer class: when a new eidoloncer level is gained, she gains new spells known and spells per day as if she had also gained a level in a spellcasting class she belonged to before gaining the eidoloncer level, and determines spells per day and caster level accordingly. She does not gain any other benefit that class would have given her (improved turning, metamagic or item creation feats, familiar advancement, and so on). When an eidoloncer has a life epiphany, converted eidoloncer levels become levels in the spellcasting class she was advancing, gaining that class's non-spellcasting benefits as well.",
        `${CH1} — Eidoloncer (p. 18)`,
      ),
    ],
  },
];
