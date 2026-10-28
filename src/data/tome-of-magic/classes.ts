import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

// Tome of Magic base classes. All three were checked against the recovered
// dataset first: NO Binder, Shadowcaster, or Truenamer record exists there,
// so all three are added here (precedent: Wu Jen, Shugenja, Healer, Ardent).
// Short mechanical summaries in our own words, cited to book + page. Each
// class's signature system — vestiges and soul binding, shadow mysteries,
// truename utterances — is a system the app does not model (like spells);
// it is summarized as text on each record. The source PDF is image-only, so
// this pack was built from OCR of the relevant pages with ambiguous table
// cells settled against page images (the Binder table on p. 11 was read
// directly from the printed page).
// Source PDF: /A POC PC related/5.Splat/Tome of Magic.pdf

const TOM = "Tome of Magic";
const TOM_PATH = "/A POC PC related/5.Splat/Tome of Magic.pdf";

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const HALF: number[] = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ: number[] = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

export const TOME_OF_MAGIC_CLASSES: ClassDefinition[] = [
  {
    id: "binder",
    name: "Binder",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive"],
    progression: rows(TQ, G, P, G),
    features: [
      {
        key: "binder-soul-binding",
        name: "Soul Binding (vestiges not modeled)",
        description:
          "A binder makes pacts with vestiges — beings beyond life, death, and the gods — gaining the powers each vestige grants for 24 hours (a binding check, 1d20 + effective binder level + Cha modifier, against the vestige's binding DC determines a good or poor pact). He can bind one vestige at 1st level, two at 8th, three at 14th, and four at 20th; the maximum vestige level available rises from 1st at 1st level to 8th at 17th (Table 1–1). Vestiges and their granted abilities are a system this app does not model. The save DC for a supernatural power granted by a vestige is 10 + 1/2 effective binder level + Cha modifier.",
        category: "special-quality",
        source: `${TOM}, pp. 9–11 (Table 1–1, p. 11)`,
        sourceUrl: TOM_PATH,
      },
      {
        key: "binder-pact-augmentation",
        name: "Pact Augmentation and Soul Guardian",
        description:
          "From 2nd level, while bound to at least one vestige the binder chooses one pact augmentation ability (energy resistance 5, +5 hit points, DR 1/—, or a +1 insight bonus to saves, AC, attack rolls, or damage rolls, or +2 on initiative checks), gaining an additional selection at 5th, 10th, 16th, and 20th level (chosen again each time he rebinds). Also: suppress sign (2nd, hide a good pact's physical sign at will), bonus feats at 4th, 11th, and 18th level, and soul guardian — immunity to fear (6th), slippery mind (9th), immunity to energy drain and negative levels (13th), and mind blank (19th), each active while bound to a vestige.",
        category: "special-quality",
        source: `${TOM}, pp. 11–12`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 9–15 (Table 1–1, p. 11)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "shadowcaster",
    name: "Shadowcaster",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    classSkills: ["Concentration", "Craft", "Hide", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Move Silently", "Profession", "Spellcraft", "Spot"],
    progression: rows(HALF, G, P, G),
    features: [
      {
        key: "shadowcaster-mysteries",
        name: "Mysteries and Paths (not modeled)",
        description:
          "A shadowcaster invokes shadow magic mysteries arranged in paths, rather than casting spells: he begins with three fundamentals of shadow (basic supernatural powers usable three times per day, unlimited from 14th level) and knows one mystery at 1st level and one additional mystery every class level. Up to 6th level he can learn only apprentice mysteries; initiate mysteries open at 7th level and master mysteries at 13th. Mysteries deepen as they ingrain: apprentice mysteries function as arcane spells, become spell-like abilities at 7th level, and supernatural abilities at 13th; uses per day per mystery rise accordingly (Table 2–2). Within a category he can learn a mystery of a new level only after learning at least two mysteries of the previous level, and must know all previous mysteries within a path. Casting a mystery requires Intelligence of at least 10 + the mystery's level; the save DC is 10 + mystery level + Cha modifier. Mysteries are a system this app does not model. Proficient with all simple weapons, but no armor or shields — armor interferes with mystery gestures.",
        category: "special-quality",
        source: `${TOM}, pp. 112–114 (Table 2–1, p. 112; Table 2–2, p. 113)`,
        sourceUrl: TOM_PATH,
      },
      {
        key: "shadowcaster-umbral-sight",
        name: "Umbral Sight and Sustaining Shadow",
        description:
          "Umbral sight (3rd) grants darkvision 30 feet (or extends existing darkvision by 30 feet), improving at 11th level to the ability to see perfectly in complete darkness, even magical darkness, out to 60 feet. Sustaining shadow (5th) progressively frees the shadowcaster from bodily needs: eating one meal per week suffices at 5th level, only 1 hour of sleep per night is needed at 10th, immunity to poison and disease at 15th, and no need to breathe, eat, or sleep at 19th. Bonus feats at 2nd level and on completing paths, and a bonus fundamental at 4th level and every four levels thereafter, round out the class.",
        category: "special-quality",
        source: `${TOM}, pp. 112–113`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 111–116 (Table 2–1, p. 112)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "truenamer",
    name: "Truenamer",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Perform", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Knowledge (psionics)", "Truespeak", "Use Magic Device"],
    progression: rows(TQ, P, P, G),
    features: [
      {
        key: "truenamer-utterances",
        name: "Utterances and Lexicons (not modeled)",
        description:
          "A truenamer speaks utterances — fragments of Truespeak, the language of creation — by making a Truespeak skill check (DC 15 + 2 × the target's CR for creatures, with the Law of Resistance raising the DC by 2 after each successful use against the same target in a day, and the Law of Sequence barring simultaneous copies of the same utterance). He learns utterances from three lexicons: the Lexicon of the Evolving Mind (creatures) from 1st level, the Lexicon of the Crafted Tool (objects) from 4th level, and the Lexicon of the Perfected Map (places) from 8th level, with the maximum utterance level known rising by lexicon per Table 3–3. Utterances are a system this app does not model. The save DC for his utterances is 10 + 1/2 truenamer level + Cha modifier.",
        category: "special-quality",
        source: `${TOM}, pp. 198–200 (Table 3–2, p. 199; Table 3–3, p. 200)`,
        sourceUrl: TOM_PATH,
      },
      {
        key: "truenamer-knowledge-focus",
        name: "Known Personal Truename and Knowledge Focus",
        description:
          "A truenamer begins play knowing his own personal truename (granting a +4 bonus on Truespeak checks to say it, and making him harder to affect with the truenames of others). Knowledge focus grants a growing bonus on Knowledge checks as he advances (gained repeatedly across his career), joined by see the named (8th), a sending ability (12th), speak unto the masses (17th, affect a group of creatures of the same type with a single utterance), say my name and I am there (20th), and bonus recitation feats at 9th and 15th level.",
        category: "special-quality",
        source: `${TOM}, pp. 199–203`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 198–203 (Table 3–2, p. 199)`,
    sourceUrl: TOM_PATH,
  },
];
