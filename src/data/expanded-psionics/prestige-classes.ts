import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Expanded Psionics Handbook prestige classes (Chapter 6). All nine checked
// against the existing aggregates first: none exist there. Short mechanical
// summaries in our own words, cited to book + page. Manifesting advancement
// (+1 level of an existing manifesting class, or an independent power-point
// progression) is recorded in the app's existing spellcastingAdvancement /
// independentProgression fields, mirroring the magic/psionic dual classes.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf

const XPH = "Expanded Psionics Handbook";
const XPH_PATH =
  "/a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf";

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const FULL: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const HALF: number[] = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ: number[] = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const MANIFEST_EXISTING = "+1 level of existing manifesting class";

export const EXPANDED_PSIONICS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cerebremancer",
    name: "Cerebremancer",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (arcana)", "Knowledge (psionics)", "Profession", "Psicraft", "Spellcraft"],
    prerequisites: [
      "Knowledge (arcana) 6 ranks, Knowledge (psionics) 6 ranks",
      "Able to cast 2nd-level arcane spells",
      "Able to manifest 2nd-level powers",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "cerebremancer-dual-progression",
        name: "Spells per Day / Powers Known",
        description:
          "At each cerebremancer level the character gains new spells per day as if gaining a level in an arcane spellcasting class she belonged to before, and additional power points per day and new powers as if gaining a level in a manifesting class she belonged to before — but no other benefits of either class (bonus feats, familiar or psicrystal advancement, and so on). This dual manifesting progression is recorded in the note; psionic powers themselves are not modeled by this app. +1 level of existing arcane spellcasting class AND +1 level of existing manifesting class at every level (dual progression, Table 6–1).",
        category: "special-quality",
        source: `${XPH}, p. 142`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 141–142 (Table 6–1)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "elocater",
    name: "Elocater",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    classSkills: ["Autohypnosis", "Balance", "Climb", "Concentration", "Craft", "Disable Device", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (local)", "Knowledge (psionics)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Psicraft", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Psionic Device", "Use Rope"],
    prerequisites: [
      "Base attack bonus +3",
      "Concentration 8 ranks",
      "Mobility",
      "Spring Attack",
      "Able to manifest 1st-level powers",
    ],
    progression: rows(TQ, P, G, G),
    features: [
      {
        key: "elocater-scorn-earth",
        name: "Scorn Earth and Mobility Features",
        description:
          "The elocater floats a foot above the ground (scorn earth) and gains Sidestep Charge as a bonus feat at 1st level; an opportunistic strike insight bonus (+2 at 2nd, +4 at 5th, +6 at 8th) on her first attack each round against an opponent dealt melee damage by another character since her last action; dimension step (3rd), the flanker ability (4th), transporter — learning psionic teleport and psionic plane shift as 3rd-level powers (6th), an extra 5-foot step (7th), dimension spring attack (9th), and accelerated action (10th). +1 level of existing manifesting class at 1st, 3rd, 4th, 6th, 7th, 9th, and 10th level.",
        category: "special-quality",
        source: `${XPH}, pp. 142–144`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 142–144 (Table 6–2)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "fist-of-zuoken",
    name: "Fist of Zuoken",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Escape Artist", "Hide", "Jump", "Knowledge (psionics)", "Knowledge (religion)", "Listen", "Move Silently", "Psicraft", "Sense Motive", "Spot", "Tumble"],
    prerequisites: [
      "Base attack bonus +4",
      "Concentration 9 ranks",
      "Wild Talent",
      "Still mind class feature",
    ],
    progression: rows(TQ, P, G, G),
    features: [
      {
        key: "fist-of-zuoken-monk-and-manifesting",
        name: "Monk Abilities and Independent Manifesting",
        description:
          "Fist of Zuoken levels stack with monk levels for unarmed damage, AC bonus, and unarmored speed (but not flurry of blows, slow fall, and similar features), and a monk may keep advancing as a monk after taking this class. The class has its own manifesting progression from the psychic warrior power list: power points/day 1 at 1st level rising to 71 at 10th, one power known per level, and maximum power level known rising to 5th at 9th level (Table 6–3) — powers are not modeled by this app. Bonus psionic feats at 5th and 10th level.",
        category: "special-quality",
        source: `${XPH}, pp. 144–145`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 144–145 (Table 6–3)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "illithid-slayer",
    name: "Illithid Slayer",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    classSkills: ["Bluff", "Concentration", "Knowledge (dungeoneering)", "Listen", "Psicraft", "Sense Motive", "Spot", "Survival"],
    prerequisites: [
      "Base attack bonus +4",
      "Knowledge (dungeoneering) 4 ranks",
      "Track",
      "Must have a power point reserve of at least 1 power point",
      "Must have killed an illithid, either individually or as part of a group of no more than six members",
    ],
    progression: rows(FULL, P, P, G),
    features: [
      {
        key: "illithid-slayer-favored-enemy",
        name: "Favored Enemy (Illithid) and Mind Blank Defenses",
        description:
          "The slayer formally declares illithids and illithidkin her favored enemy (+2 at 1st level, rising to +8 at 10th, on Bluff, Listen, Sense Motive, Spot, and Survival checks and weapon damage rolls against them), plus illithid sense (1st), brain nausea (2nd), lucid buffer (3rd, +4 competence bonus on saves against compulsions and mind-affecting effects), cerebral blind (6th), breach power resistance (8th), cerebral immunity (9th), and blast feedback (10th). +1 level of existing manifesting class at every level except 1st (a character with no manifesting class before taking this class gains no manifesting levels).",
        category: "special-quality",
        source: `${XPH}, pp. 145–147`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 145–147 (Table 6–4)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "metamind",
    name: "Metamind",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Knowledge (psionics)", "Psicraft"],
    prerequisites: [
      "Knowledge (psionics) 8 ranks, Psicraft 4 ranks",
      "Psicrystal Affinity",
      "Manifester level 4th",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "metamind-free-manifesting",
        name: "Free Manifesting and Font of Power",
        description:
          "A metamind can manifest certain powers for free a limited number of times per day: 1st-level powers 3/day at 1st level, then 2nd-level (3rd), 3rd-level (5th), 4th-level (7th), and 5th-level powers (9th) at reduced frequency; his psicrystal becomes a cognizance crystal storing 5 power points at 2nd level, rising to 11 at 8th; at 10th level, font of power lets him act as a living cognizance crystal with a seemingly endless supply of power points for 1 minute per day. +1 level of existing manifesting class at 2nd, 4th, 6th, 8th, and 10th level.",
        category: "special-quality",
        source: `${XPH}, pp. 147–148`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 147–148 (Table 6–5)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "psion-uncarnate",
    name: "Psion Uncarnate",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Autohypnosis", "Bluff", "Concentration", "Craft", "Disguise", "Knowledge (the planes)", "Knowledge (psionics)", "Psicraft", "Sense Motive"],
    prerequisites: [
      "Knowledge (psionics) 8 ranks, Psicraft 8 ranks",
      "Psionic Body",
      "Able to manifest 3rd-level powers",
      "Must have had some instruction by another psion uncarnate, have access to teachings of the Golden Mind, or belong to an organization that has access to or is administered by the Golden Mind",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "psion-uncarnate-shed-body",
        name: "Shed Body",
        description:
          "The psion uncarnate progressively abandons physicality: incorporeal touch attacks (1d6 at 1st, 2d6 at 5th, 3d6 at 9th) and uncarnate armor at 1st level; shed body — becoming incorporeal for up to 1 minute, 1/day at 2nd and 2/day at 6th — with assume equipment (3rd), assume likeness (4th), telekinetic force (7th), and uncarnate bridge (8th), culminating in permanently becoming uncarnate at 10th level. +1 level of existing manifesting class at 2nd, 3rd, 5th, 6th, 8th, and 9th level.",
        category: "special-quality",
        source: `${XPH}, pp. 148–151`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 148–151 (Table 6–6)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "pyrokineticist",
    name: "Pyrokineticist",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    classSkills: ["Climb", "Concentration", "Craft", "Intimidate", "Jump", "Psicraft"],
    prerequisites: [
      "Any chaotic",
      "Concentration 8 ranks, Craft (alchemy) 1 rank, Knowledge (psionics) 2 ranks",
      "Must have a power point reserve of at least 1 power point",
      "Must have set fire to a structure of any size just to watch it burn",
    ],
    progression: rows(TQ, G, G, P),
    features: [
      {
        key: "pyrokineticist-fire-powers",
        name: "Fire Lash and Fire Abilities (Ps)",
        description:
          "The pyrokineticist wields psionic fire without manifesting powers: fire lash (1st, a whip of fire), fire adaptation and hand afire (2nd), bolt of fire (3rd), weapon afire (4th), nimbus (5th), firewalk (6th), fear no fire (7th), greater weapon afire (8th), heat death (9th), and conflagration (10th). The class advances no manifesting class.",
        category: "special-attack",
        source: `${XPH}, pp. 151–153`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 151–153 (Table 6–7)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "thrallherd",
    name: "Thrallherd",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Autohypnosis", "Bluff", "Concentration", "Craft", "Diplomacy", "Knowledge (psionics)", "Psicraft", "Sense Motive"],
    prerequisites: [
      "Diplomacy 4 ranks, Knowledge (psionics) 8 ranks",
      "Inquisitor",
      "Manifester level 5th and able to manifest mindlink",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "thrallherd-thrallherd",
        name: "Thrallherd",
        description:
          "A hidden psychic resonance draws a thrall and believers to the thrallherd (akin to the Leadership feat, but the thrallherd's Leadership score is her character level + Cha modifier + her thrallherd level, counting her thrallherd level twice, and lost thralls and believers are replaced within 24 hours); she also gains psionic charm (3rd), psionic dominate (5th), greater dominate (7th), and superior dominate (9th) as free manifestations, and a second thrall at 10th (twofold master). +1 level of existing manifesting class at every level except 1st and 10th.",
        category: "special-quality",
        source: `${XPH}, pp. 153–155`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 153–155 (Table 6–8)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "war-mind",
    name: "War Mind",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    classSkills: ["Autohypnosis", "Concentration", "Intimidate", "Knowledge (history)", "Knowledge (psionics)", "Psicraft"],
    prerequisites: [
      "Any nonchaotic",
      "Base attack bonus +3",
      "Knowledge (history) 2 ranks, Knowledge (psionics) 8 ranks",
      "Must have a power point reserve of at least 1 power point",
      "Must have had some instruction by another war mind, have access to Talariic texts, or belong to an organization that has access to Talariic texts",
    ],
    progression: rows(FULL, G, G, P),
    features: [
      {
        key: "war-mind-chains",
        name: "Chains of Warfare and Independent Manifesting",
        description:
          "The war mind masters the Talariic principles: chain of personal superiority (+2 insight bonus to Strength and Constitution at 1st, +4 at 7th), chain of defensive posture (+2 insight bonus to AC and Reflex saves at 2nd, +4 at 8th), enduring body (DR 1/— at 3rd, 2/— at 6th, 3/— at 9th), sweeping strike (5th), and chain of overwhelming force (10th). The class has its own manifesting progression from the psychic warrior power list: power points/day 2 at 1st level rising to 70 at 10th, powers known 1 rising to 6, and maximum power level known rising to 5th at 10th level (Table 6–9) — powers are not modeled by this app.",
        category: "special-quality",
        source: `${XPH}, pp. 155–156`,
        sourceUrl: XPH_PATH,
      },
    ],
    source: `${XPH}, pp. 155–156 (Table 6–9)`,
    sourceUrl: XPH_PATH,
  },
];
