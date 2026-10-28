import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Dragon Magic prestige classes: the seven of Chapter 2 (Tables 2–3
// through 2–9), with progressions, class skills, and entry
// requirements as printed. Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const PB_BAB = [0, 1, 1, 2, 2]; // Pact-Bound Adept, 5 levels
const PB_P = [0, 0, 1, 1, 1];
const PB_G = [2, 3, 3, 4, 4];

const DMG = "Dragon Magic";
const DMG_PATH = "/a poc dm related/desktop/Sourcebooks/Dragon Magic (oef, act, bm, hq) (WTC953837200).pdf";
const CH2 = `${DMG} — Chapter 2: Dragon Aspirants`;

export const DRAGON_MAGIC_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "diamond-dragon",
    name: "Diamond Dragon",
    ruleset: "core",
    source: `${CH2} — Diamond Dragon (pp. 30–32; Table 2–3, p. 31)`,
    sourceUrl: DMG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Autohypnosis", "Balance", "Climb", "Concentration", "Craft", "Jump", "Knowledge (arcana)", "Knowledge (psionics)", "Profession", "Psicraft", "Ride", "Search", "Swim", "Use Psionic Device"],
    prerequisites: [
      "Alignment: Neutral good, neutral evil, lawful neutral, chaotic neutral, or neutral",
      "Base Attack Bonus: +3",
      "Skills: Knowledge (arcana) 3 ranks",
      "Languages: Draconic",
      "Special: Ability to manifest 3rd-level psionic powers",
    ],
    features: [
      {
        key: "diamond-dragon-features",
        name: "Diamond Dragon Features",
        category: "trait",
        description:
          "A psionic manifester who taps into the energies of the minds of dragons, becoming more like a dragon than a humanoid. Manifesting advances +1 level of an existing manifesting class at every level except 1st and 6th. Dragon augmentation and sleep/paralysis neutralization come at 1st level (further dragon augmentations at 5th and 10th), letting him spend power points to enhance his draconic form. He channels dragon body parts as he advances: channel dragon claws (2nd), a breath weapon (4th), channel dragon wings (6th), channel dragon tail (8th), and a frightful presence aura (10th).",
        source: `${CH2} — Diamond Dragon (pp. 30–32; Table 2–3, p. 31)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "dragon-descendant",
    name: "Dragon Descendant",
    ruleset: "core",
    source: `${CH2} — Dragon Descendant (pp. 33–35; Table 2–4, p. 33)`,
    sourceUrl: DMG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Hide", "Jump", "Knowledge (history)", "Knowledge (religion)", "Listen", "Move Silently", "Profession", "Sense Motive", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Skills: Concentration 8 ranks",
      "Feats: Combat Reflexes, Dragontouched or Draconic Heritage (any chromatic dragon), Improved Unarmed Strike",
      "Special: Still mind class feature",
    ],
    features: [
      {
        key: "dragon-descendant-features",
        name: "Dragon Descendant Features",
        category: "trait",
        description:
          "A monk who channels the spirits of draconic ancestors. His monk abilities continue to advance (Table 2–4's monk-abilities entry: his levels stack for the monk class features the book specifies). His ancestors aid him in a growing procession: rampaging ancestor (1st), ancestral lore (2nd), subtle ancestor (3rd), slippery mind (4th), eldritch ancestor (5th), rapid calling (6th), enduring ancestor (7th), detect dragonblood (8th), ancient ancestor (9th), and double synthesis (10th).",
        source: `${CH2} — Dragon Descendant (pp. 33–35; Table 2–4, p. 33)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "dragon-lord",
    name: "Dragon Lord",
    ruleset: "core",
    source: `${CH2} — Dragon Lord (pp. 36–39; Table 2–5, p. 37)`,
    sourceUrl: DMG_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Intimidate 9 ranks",
    ],
    features: [
      {
        key: "dragon-lord-features",
        name: "Dragon Lord Features",
        category: "trait",
        description:
          "A master of battlefield warfare who has studied the tactics and abilities of dragons and emulates them. He projects draconic auras (see the Draconic Aura feat): 1 aura known at 1st level, rising to 4 at 10th, with the aura's bonus growing from +1 (1st) to +2 (5th) and +3 (9th). Reckless devotion once per day at 2nd level (twice at 6th, three times at 10th), divide and conquer (3rd), dragon leadership (4th), and crushing defeat (8th).",
        source: `${CH2} — Dragon Lord (pp. 36–39; Table 2–5, p. 37)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "hand-of-the-winged-masters",
    name: "Hand of the Winged Masters",
    ruleset: "core",
    source: `${CH2} — Hand of the Winged Masters (pp. 40–43; Table 2–6, p. 41)`,
    sourceUrl: DMG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (local)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Survival", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Bluff 4 ranks, Hide 4 ranks, Move Silently 4 ranks, Knowledge (arcana) 4 ranks, Sense Motive 4 ranks",
      "Languages: Draconic",
      "Feats: Dragontouched",
      "Special: Sneak attack, sudden strike, or skirmish +2d6",
    ],
    features: [
      {
        key: "hand-of-the-winged-masters-features",
        name: "Hand of the Winged Masters Features",
        category: "trait",
        description:
          "A stealthy agent of dragonkind who strikes from concealment with draconic fire. Draconic Senses at 1st level (see the feat of the same name in the Dragon Magic feats). His special attack (sneak attack, sudden strike, or skirmish, as applicable) increases by +1d6 at 2nd level, +2d6 at 5th, and +3d6 at 8th. Dragonfire Strike at 3rd level (as the feat), master's gift (7th), improved dragonfire strike (9th), and true stealth at 10th level — he can take a –10 penalty on Hide or Move Silently checks to conceal himself even from scent, tremorsense, blindsense, and blindsight.",
        source: `${CH2} — Hand of the Winged Masters (pp. 40–43; Table 2–6, p. 41)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "pact-bound-adept",
    name: "Pact-Bound Adept",
    ruleset: "core",
    source: `${CH2} — Pact-Bound Adept (pp. 46–48; Table 2–7, p. 47)`,
    sourceUrl: DMG_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(PB_BAB, PB_P, PB_G, PB_G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Knowledge (arcana)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 9 ranks, Spellcraft 9 ranks",
      "Feats: Draconic Heritage",
      "Spellcasting: Must be able to cast 3rd-level arcane spells",
      "Special: Must have an active dragonpact (see the book, p. 87) with a dragon",
    ],
    features: [
      {
        key: "pact-bound-adept-features",
        name: "Pact-Bound Adept Features",
        category: "trait",
        description:
          "An arcane spellcaster bound by a dragonpact to a true dragon, shifting his spellcasting style to match that of dragons — casting by instinct rather than study. Spellcasting advances +1 level of an existing arcane spellcasting class at 2nd, 3rd, and 5th level. Improved pact +1 at 1st level (rising to +2 at 4th) strengthens the benefits of his dragonpact; dragoncast (2nd), Eschew Materials as a bonus feat (3rd), and a bonus dragonpact (5th) round out the class.",
        source: `${CH2} — Pact-Bound Adept (pp. 46–48; Table 2–7, p. 47)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "swift-wing",
    name: "Swift Wing",
    ruleset: "core",
    source: `${CH2} — Swift Wing (pp. 50–52; Table 2–8, p. 51)`,
    sourceUrl: DMG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Appraise", "Bluff", "Concentration", "Diplomacy", "Gather Information", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Listen", "Spellcraft", "Spot"],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Languages: Draconic",
      "Spellcasting: Ability to cast 3rd-level divine spells",
      "Special: Ability to turn undead",
    ],
    features: [
      {
        key: "swift-wing-features",
        name: "Swift Wing Features",
        category: "trait",
        description:
          "A divine spellcaster who trades some spellcasting advancement for dragonlike powers, remaining able to heal allies while gaining draconic versatility. Spellcasting advances +1 level of an existing divine spellcasting class at every level except 1st and 5th. Dragon affinity and access to the Dragon domain come at 1st level, then Draconic Senses (2nd, as the feat), breath of life (3rd), energy resistance (4th), wings (5th), damage reduction 5/magic (7th), energy immunity (9th), and draconic surge (10th).",
        source: `${CH2} — Swift Wing (pp. 50–52; Table 2–8, p. 51)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
  {
    id: "wyrm-wizard",
    name: "Wyrm Wizard",
    ruleset: "core",
    source: `${CH2} — Wyrm Wizard (pp. 54–56; Table 2–9, p. 55)`,
    sourceUrl: DMG_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all skills, taken individually)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 9 ranks, Spellcraft 9 ranks",
      "Languages: Draconic",
      "Feats: Any metamagic feat",
      "Spellcasting: Ability to prepare and cast 1st-level arcane spells",
    ],
    features: [
      {
        key: "wyrm-wizard-features",
        name: "Wyrm Wizard Features",
        category: "trait",
        description:
          "A wizard who studies magic the way dragons do, learning spells beyond his own tradition. Spellcasting advances +1 level of an existing arcane spellcasting class at every level except 2nd, 4th, and 6th. Knowledge of the wyrm (1st, and again at 5th). Spell research at 2nd level and every even level thereafter: he can research and learn a spell from any class's spell list — the levels given up to spell research are the cost of this breadth. Draconic discovery lets him add a spell to his spellbook at 3rd level (of up to 2nd level), 6th (4th), and 9th (6th). Also: convert counterspell (7th) and break spell resistance (10th).",
        source: `${CH2} — Wyrm Wizard (pp. 54–56; Table 2–9, p. 55)`,
        sourceUrl: DMG_PATH,
      },
    ],
  },
];
