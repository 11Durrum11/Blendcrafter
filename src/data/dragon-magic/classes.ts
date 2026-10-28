import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Dragon Magic base class: the Dragonfire Adept of Chapter 2
// (pp. 24–26, Table 2–1) — checked against the recovered data first
// and confirmed missing, so it is added here. The class's draconic
// invocations and breath effects (Chapter 3) are an unmodeled system,
// like spells, psionic powers, and maneuvers: the class record notes
// where they advance, and the invocation and breath-effect lists
// themselves are not converted. It is a 20-level class; per the app
// convention for base classes the progression rows record levels
// 1–10. Short mechanical summaries in our own words, cited to book +
// page.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const DMG = "Dragon Magic";
const DMG_PATH = "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf";
const CH2 = `${DMG} — Chapter 2: Dragon Aspirants`;
const F = (key: string, name: string, description: string, source: string, needed?: number[]): FeatureDefinition => ({
  key,
  name,
  category: "special-quality",
  description,
  source,
  sourceUrl: DMG_PATH,
  ...(needed ? { levelsNeeded: needed } : {}),
});

export const DRAGON_MAGIC_CLASSES: ClassDefinition[] = [
  {
    id: "dragonfire-adept",
    name: "Dragonfire Adept",
    ruleset: "core",
    source: `${CH2} — Dragonfire Adept (pp. 24–26; Table 2–1, p. 25)`,
    sourceUrl: DMG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Appraise", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Intimidate", "Jump", "Knowledge (all skills, taken individually)", "Listen", "Search", "Sense Motive", "Speak Language", "Spellcraft", "Spot", "Use Magic Device"],
    features: [
      F(
        "dragonfire-adept-breath-weapon",
        "Breath Weapon",
        "A dragonfire adept has a breath weapon — a cone or line of fire — dealing 1d6 points of fire damage at 1st level, rising by 1d6 at every odd level thereafter (2d6 at 3rd, 3d6 at 5th, up to 9d6 at 20th). At 10th level, the breath weapon's range doubles. Breath effects chosen at 2nd, 5th, 10th, 12th, 15th, and 20th level can alter the breath weapon's damage type or area, or apply a condition in place of damage (see Chapter 3: Draconic Magic; breath effects are an unmodeled system and are not converted as records).",
        `${CH2} — Dragonfire Adept (pp. 25–26; Table 2–1, p. 25)`,
      ),
      F(
        "dragonfire-adept-invocations",
        "Draconic Invocations",
        "A dragonfire adept learns draconic invocations — spell-like abilities usable at will — beginning with least invocations at 1st level (1 known), gaining access to lesser invocations at 6th level, greater invocations at 11th, and dark invocations at 16th, up to 8 invocations known at 20th level. Invocations are an unmodeled system, like spells: the invocation lists in Chapter 3 are not converted as records.",
        `${CH2} — Dragonfire Adept (p. 25; Table 2–1, p. 25)`,
        [1, 6, 11, 16],
      ),
      F(
        "dragonfire-adept-dragontouched",
        "Dragontouched",
        "At 1st level, a dragonfire adept gains Dragontouched (see the Dragon Magic feats) as a bonus feat.",
        `${CH2} — Dragonfire Adept (p. 26)`,
        [1],
      ),
      F(
        "dragonfire-adept-scales",
        "Scales (Ex)",
        "At 2nd level, the adept's skin becomes thick and scaly, granting a +2 bonus to natural armor (use the higher of this and any existing natural armor bonus). This bonus improves to +3 at 8th level, +4 at 13th, and +5 at 18th.",
        `${CH2} — Dragonfire Adept (p. 26)`,
        [2, 8, 13, 18],
      ),
      F(
        "dragonfire-adept-dragonkin",
        "Dragonkin (Ex)",
        "At 4th level, a dragonfire adept gains a +4 competence bonus on Diplomacy checks made to influence the attitude of dragons or creatures of the dragonblood subtype. He is treated as a dragon for the purpose of determining whether frightful presence can affect him.",
        `${CH2} — Dragonfire Adept (p. 26)`,
        [4],
      ),
      F(
        "dragonfire-adept-dr-immunities",
        "Damage Reduction and Immunities",
        "At 6th level, a dragonfire adept gains damage reduction 2/magic, improving to 5/magic at 16th level. At 19th level, he gains immunity to paralysis and sleep.",
        `${CH2} — Dragonfire Adept (Table 2–1, p. 25)`,
        [6, 16, 19],
      ),
    ],
  },
];
