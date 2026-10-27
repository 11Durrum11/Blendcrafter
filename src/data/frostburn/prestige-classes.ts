/**
 * Frostburn prestige classes: all ten from Chapter 3 of Frostburn
 * (Wizards of the Coast). Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Frostburn.pdf
 * Progression tables are the book's printed tables (Tables 3–2…
 * 3–11). Prerequisites are free text (shown in the UI,
 * soft-checked only), matching the other packs. Spellcasting
 * advancement is stated in each class's feature summary,
 * following the house pattern.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const FULL5 = [1, 2, 3, 4, 5];

const FB = "Frostburn";
const FB_PATH = "/A POC PC related/5.Splat/Frostburn.pdf";
const CH3 = `${FB} — Chapter 3: Prestige Classes`;

export const FROSTBURN_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cloud-anchorite",
    name: "Cloud Anchorite",
    ruleset: "core",
    source: `${CH3} — Cloud Anchorite (p. 52)`,
    sourceUrl: FB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Escape Artist", "Jump", "Knowledge (nature)", "Knowledge (religion)", "Listen", "Spot", "Survival", "Tumble", "Use Rope"],
    prerequisites: [
      "Alignment: Any nonchaotic",
      "Base Save Bonus: Base Fortitude save bonus +5",
      "Skills: Climb 9 ranks, Jump 9 ranks, Knowledge (religion) 9 ranks, Survival 4 ranks",
      "Feats: Improved Unarmed Strike, Mountaineer (the book's requirements list prints the first feat as \"Improved Unarmed Combat\")",
      "Special: Must have survived for one week at an altitude of 12,000 feet or higher, alone and without magical aid",
    ],
    features: [
      {
        key: "cloud-anchorite-features",
        name: "Cloud Anchorite Features",
        category: "trait",
        description:
          "A monastic ascetic of the high peaks whose monk abilities (unarmed damage, AC bonus, movement) continue to advance. Gains a climb speed, wisdom of the mountain, and slow breath (1st); cold resistance 5 (4th, improving to 10 at 8th); bonus feats at 3rd and 7th; fast movement and empty stride; acrobatic charge; walk on the clouds (9th); and immortality of the mountain at 10th.",
        source: `${CH3} — Cloud Anchorite (pp. 52–53)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "cryokineticist",
    name: "Cryokineticist",
    ruleset: "core",
    source: `${CH3} — Cryokineticist (p. 54)`,
    sourceUrl: FB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Climb", "Concentration", "Craft", "Intimidate", "Jump", "Knowledge (psionics)", "Psicraft"],
    prerequisites: [
      "Alignment: Any lawful",
      "Skills: Concentration 8 ranks, Craft (alchemy) 1 rank, Knowledge (psionics) 2 ranks",
      "Psionics: Able to manifest the energy emanation power (as printed; the Expanded Psionics Handbook power list names the corresponding power energy burst)",
    ],
    features: [
      {
        key: "cryokineticist-features",
        name: "Cryokineticist Features",
        category: "trait",
        description:
          "A psionic master of cold (requires the Expanded Psionics Handbook). Gains glacial ray (1st), cold adaptation (2nd), frozen fist (3rd), bolt of cold (4th), weapon afrost (5th; greater weapon afrost at 9th), frostfell creature insight (6th), cold walk (7th), fear no cold (8th), wall of ice (9th), and bone chill (10th). This class does not advance manifesting.",
        source: `${CH3} — Cryokineticist (pp. 54–55)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "disciple-of-thrym",
    name: "Disciple of Thrym",
    ruleset: "core",
    source: `${CH3} — Disciple of Thrym (p. 56)`,
    sourceUrl: FB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive", "Speak Language", "Spellcraft", "Survival"],
    prerequisites: [
      "Alignment: Any nongood",
      "Base Attack Bonus: +4",
      "Skills: Intimidate 4 ranks, Survival 8 ranks",
      "Feats: Weapon Focus (greataxe)",
      "Special: Cold Endurance feat or the cold subtype",
    ],
    features: [
      {
        key: "disciple-of-thrym-features",
        name: "Disciple of Thrym Features",
        category: "trait",
        description:
          "A militant priest of the frost giant god Thrym with its own Wisdom-based divine spellcasting (a cleric-like list with its own spells per day for 1st- through 5th-level spells, Table 3–4) — this class does not advance another class's spellcasting. Gains detect fire (1st), protection of winter (2nd), fire resistance 5 (3rd, improving to 10 at 7th), powerful grip (4th), frost greataxe (5th), agonizing strike (6th), dispel fire (8th), icy greataxe (9th), and immunity to fire at 10th.",
        source: `${CH3} — Disciple of Thrym (pp. 56–57)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "frost-mage",
    name: "Frost Mage",
    ruleset: "core",
    source: `${CH3} — Frost Mage (p. 58)`,
    sourceUrl: FB_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Search", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks",
      "Feats: Frozen Magic",
      "Spells: Able to cast 1st-level arcane spells",
      "Special: The character must have spent at least 24 hours unprotected in a blizzard and survived",
    ],
    features: [
      {
        key: "frost-mage-features",
        name: "Frost Mage Features",
        category: "trait",
        description:
          "An arcane caster remade by the cold. Natural armor increase +1 (1st, rising to +2 at 4th, +3 at 7th, and +4 at 10th), cold resistance 10 (2nd), gain knowledge (bonus cold spells known, including conjure ice beast I–IV, as the class advances), Piercing Cold as a bonus feat (4th), and one with cold at 10th. Spellcasting advances +1 level of an existing arcane spellcasting class at every level.",
        source: `${CH3} — Frost Mage (pp. 58–59)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "frostrager",
    name: "Frostrager",
    ruleset: "core",
    source: `${CH3} — Frostrager (p. 60)`,
    sourceUrl: FB_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Climb", "Intimidate", "Jump", "Listen", "Survival", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Intimidate 4 ranks, Survival 4 ranks",
      "Feats: Frozen Berserker, Improved Unarmed Strike, Power Attack",
      "Special: Rage ability",
      "Special: Must have been reduced below 0 hit points by cold damage at some point in the past",
    ],
    features: [
      {
        key: "frostrager-features",
        name: "Frostrager Features",
        category: "trait",
        description:
          "A five-level class for barbarians whose rage turns to ice. Frostrage with freezing blood (1st: while raging, unarmed strikes deal cold damage and his blood freezes attackers), one-two punch (2nd), absorb cold (3rd), improved frostrage (4th), and rend at 5th.",
        source: `${CH3} — Frostrager (pp. 60–61)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "knight-of-the-iron-glacier",
    name: "Knight of the Iron Glacier",
    ruleset: "core",
    source: `${CH3} — Knight of the Iron Glacier (p. 62)`,
    sourceUrl: FB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Listen", "Ride", "Sense Motive", "Spot", "Survival"],
    prerequisites: [
      "Alignment: Lawful good or lawful neutral",
      "Skills: Handle Animal 5 ranks, Ride 9 ranks, Survival 2 ranks",
      "Feats: Animal Affinity, Exotic Weapon Proficiency (bastard sword), Mounted Combat, Ride-By Attack",
      "Special: Must complete a quest for the Order of the Iron Glacier",
    ],
    features: [
      {
        key: "knight-of-the-iron-glacier-features",
        name: "Knight of the Iron Glacier Features",
        category: "trait",
        description:
          "A mounted knight of a frostfell order, bonded to a war megaloceros warmount (which can replace and stack with a paladin's special mount). Frostfell awareness +2 (2nd, rising to +4 at 5th and +6 at 8th), rally the troops (4th), oath of wrath (7th), and overwhelming odds at 10th. (The book's class-skill list prints \"Craft (Wis)\" — a key-ability misprint; Craft is Intelligence-based as usual.)",
        source: `${CH3} — Knight of the Iron Glacier (pp. 62–64)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "primeval",
    name: "Primeval",
    ruleset: "core",
    source: `${CH3} — Primeval (p. 65)`,
    sourceUrl: FB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Concentration", "Handle Animal", "Intimidate", "Jump", "Knowledge (nature)", "Listen", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +8",
      "Skills: Handle Animal 5 ranks, Knowledge (nature) 5 ranks, Survival 5 ranks",
      "Feats: Endurance, Self-Sufficient, Toughness",
    ],
    features: [
      {
        key: "primeval-features",
        name: "Primeval Features",
        category: "trait",
        description:
          "A warrior who reverts to a prehistoric beast form. Primeval form 1/day (1st; an additional daily use at 4th, 7th, and 10th), animal empathy (1st), regression 1 (2nd; regression 2 at 5th and regression 3 at 8th — ability scores shift toward the beast with each step), low-light vision (2nd), feral power (3rd, doubling at 6th and tripling at 9th), scent (5th), and fast movement (8th).",
        source: `${CH3} — Primeval (pp. 65–66)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "rimefire-witch",
    name: "Rimefire Witch",
    ruleset: "core",
    source: `${CH3} — Rimefire Witch (p. 67)`,
    sourceUrl: FB_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Climb", "Concentration", "Diplomacy", "Gather Information", "Heal", "Jump", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (religion)", "Sense Motive", "Spellcraft", "Swim"],
    prerequisites: [
      "Skills: Concentration 6 ranks, Knowledge (history) 6 ranks, Knowledge (religion) 9 ranks, Spellcraft 6 ranks",
      "Feats: Iron Will, Mark of Hleid",
      "Spells: Able to cast 1st-level divine spells",
      "Patron: Hleid",
      "Special: Must answer the rimefire call by completing a quest for Hleid or her church",
    ],
    features: [
      {
        key: "rimefire-witch-features",
        name: "Rimefire Witch Features",
        category: "trait",
        description:
          "A divine servant of the forgotten goddess Hleid, hunting the servants of Iborighu. Rimefire bond and detect minion of Iborighu (1st), rimefire bolt 1d6 (3rd; 2d6 at 6th and 3d6 at 9th), ice skate (4th), word of recall (7th), and iceberg and rimefire apotheosis at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH3} — Rimefire Witch (pp. 67–69)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "stormsinger",
    name: "Stormsinger",
    ruleset: "core",
    source: `${CH3} — Stormsinger (p. 70)`,
    sourceUrl: FB_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Jump", "Knowledge (arcana)", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Perform", "Profession", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Skills: Concentration 8 ranks, Knowledge (arcana) 8 ranks, Knowledge (geography) 4 ranks, Knowledge (nature) 4 ranks, Perform (sing) 8 ranks, Spellcraft 4 ranks",
      "Feats: Magical Aptitude, Storm Magic",
      "Special: Bardic music ability",
    ],
    features: [
      {
        key: "stormsinger-features",
        name: "Stormsinger Features",
        category: "trait",
        description:
          "A bard whose stormsongs command the weather; bardic music abilities stack with bard levels. Stormsong powers arrive as the class advances: gust of wind (1st), thunderstrike (3rd), control winds (5th), winter's ballad (7th), great thunderstrike (9th), and storm of vengeance (10th); stormpower (2nd) and electricity resistance 5 (4th, rising to 10 at 6th and 15 at 8th). Spellcasting advances +1 level of an existing spellcasting class at every level.",
        source: `${CH3} — Stormsinger (pp. 70–71)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
  {
    id: "winterhaunt-of-iborighu",
    name: "Winterhaunt of Iborighu",
    ruleset: "core",
    source: `${CH3} — Winterhaunt of Iborighu (p. 72)`,
    sourceUrl: FB_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Chaotic neutral, chaotic evil, or neutral evil",
      "Skills: Concentration 8 ranks, Knowledge (arcana) 5 ranks, Knowledge (religion) 8 ranks",
      "Feats: Chosen of Iborighu, Craft Wondrous Item, Piercing Cold",
      "Spells: Able to cast 1st-level divine spells",
      "Patron: Iborighu",
      "Special: Must create an iceheart (a wondrous item described in Chapter 5)",
    ],
    features: [
      {
        key: "winterhaunt-of-iborighu-features",
        name: "Winterhaunt of Iborighu Features",
        category: "trait",
        description:
          "A divine devotee of the evil winter god Iborighu, slowly becoming one with the cold. Cloak of winter's chill (1st), cold resistance 5 (2nd, improving to 10 at 5th), frozen skin (3rd), coldstrike +1d6 (4th, rising to +2d6 at 8th), constant Piercing Cold (6th), cold subtype (7th), summon the entombed (9th), and wintry apotheosis at 10th (type becomes elemental, with the evil subtype). Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH3} — Winterhaunt of Iborighu (pp. 72–74)`,
        sourceUrl: FB_PATH,
      },
    ],
  },
];
