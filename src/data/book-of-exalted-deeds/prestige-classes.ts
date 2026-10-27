/**
 * Book of Exalted Deeds prestige classes: all twenty-two from Chapter 5
 * of Book of Exalted Deeds (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Book of Exalted Deeds.pdf
 * Progression tables are the book's printed tables (Tables 5–1…5–23).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. Spellcasting advancement is stated in each
 * class's feature summary, following the house pattern. Every class in
 * this book requires a good alignment, as printed.
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
const HALF5 = [0, 1, 1, 2, 2];
const HALF3 = [0, 1, 1];
const FULL3 = [1, 2, 3];
const G3 = [2, 3, 3];
const P3 = [0, 0, 1];

const BOED = "Book of Exalted Deeds";
const BOED_PATH = "/A POC PC related/5.Splat/Book of Exalted Deeds.pdf";
const CH5 = `${BOED} — Chapter 5: Prestige Classes`;

export const BOOK_OF_EXALTED_DEEDS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "anointed-knight",
    name: "Anointed Knight",
    ruleset: "core",
    source: `${CH5} — Anointed Knight (p. 49)`,
    sourceUrl: BOED_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Climb", "Concentration", "Craft (alchemy)", "Heal", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Ride", "Spellcraft"],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +5",
      "Skills: Craft (alchemy) 5 ranks, Knowledge (arcana) 3 ranks, Spellcraft 3 ranks",
      "Feats: Ancestral Relic",
    ],
    features: [
      {
        key: "anointed-knight-features",
        name: "Anointed Knight Features",
        category: "trait",
        description:
          "Anoints herself and her ancestral weapon with magically crafted oils: anoint self at 1st level and every 3 levels thereafter (4th, 7th, 10th; oils grant abilities such as improved low-light vision, sustenance, or ability-score boosts per Table 5-1's anointing list), anoint ancestral weapon at 2nd level and every 3 levels thereafter (5th, 8th; the weapon gains abilities such as sentience or unholy bane properties against evil), and a bonus feat at 3rd, 6th, and 9th levels.",
        source: `${CH5} — Anointed Knight (pp. 49–50)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "apostle-of-peace",
    name: "Apostle of Peace",
    ruleset: "core",
    source: `${CH5} — Apostle of Peace (p. 51)`,
    sourceUrl: BOED_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(HALF, G, G, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Gather Information", "Handle Animal", "Heal", "Knowledge (all skills, taken individually)", "Listen", "Perform", "Profession", "Search", "Sense Motive", "Speak Language", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Any good",
      "Base Saves: Will +5",
      "Skills: Concentration 10 ranks, Diplomacy 6 ranks",
      "Feats: Sacred Vow, Vow of Nonviolence, Vow of Peace, Vow of Poverty",
    ],
    features: [
      {
        key: "apostle-of-peace-features",
        name: "Apostle of Peace Features",
        category: "trait",
        description:
          "Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-2, spells of 0-9th level, Wisdom-based). Turn undead at 1st level (stacks with cleric levels), pacifying touch at 2nd (a calming touch that can end conflicts), and censure fiends at 4th (turn evil outsiders as undead). Bound by the vows: may use no magic items beyond bare necessities.",
        source: `${CH5} — Apostle of Peace (pp. 51–53)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "beloved-of-valarian",
    name: "Beloved of Valarian",
    ruleset: "core",
    source: `${CH5} — Beloved of Valarian (p. 53)`,
    sourceUrl: BOED_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Diplomacy", "Handle Animal", "Heal", "Knowledge (nature)", "Ride", "Sense Motive", "Survival"],
    prerequisites: [
      "Gender: Female",
      "Alignment: Any good",
      "Base Attack Bonus: +7",
      "Skills: Knowledge (nature) 5 ranks, Ride 10 ranks",
    ],
    features: [
      {
        key: "beloved-of-valarian-features",
        name: "Beloved of Valarian Features",
        category: "trait",
        description:
          "Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-3, spells of 1st-4th level, Wisdom-based). At 1st level she can call a unicorn companion, form a telepathic bond with it, and becomes timeless (does not age). Further levels deepen the unicorn bond and add spell-like powers, culminating in mass baleful polymorph at 10th level.",
        source: `${CH5} — Beloved of Valarian (pp. 53–54)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "celestial-mystic",
    name: "Celestial Mystic",
    ruleset: "core",
    source: `${CH5} — Celestial Mystic (p. 55)`,
    sourceUrl: BOED_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Spellcraft"],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Knowledge (arcana) 4 ranks, Knowledge (the planes) 4 ranks, Knowledge (religion) 6 ranks, Spellcraft 6 ranks",
      "Feats: Servant of the Heavens, Sacred Vow, Vow of Abstinence",
      "Spells: Able to cast 4th-level spells",
    ],
    features: [
      {
        key: "celestial-mystic-features",
        name: "Celestial Mystic Features",
        category: "trait",
        description:
          "Receives blessings of the heavens at odd levels and at 8th, 9th, and 10th (choice of celestial gifts such as fire resistance, flight, or spell-like abilities, per the class text). Spellcasting advances +1 level of an existing spellcasting class at every level except 1st.",
        source: `${CH5} — Celestial Mystic (pp. 55–56)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "champion-of-gwynharwyf",
    name: "Champion of Gwynharwyf",
    ruleset: "core",
    source: `${CH5} — Champion of Gwynharwyf (p. 56)`,
    sourceUrl: BOED_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Listen", "Ride", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Chaotic good",
      "Base Attack Bonus: +6",
      "Skills: Intimidate 9 ranks",
      "Feats: Knight of Stars, Righteous Wrath",
    ],
    features: [
      {
        key: "champion-of-gwynharwyf-features",
        name: "Champion of Gwynharwyf Features",
        category: "trait",
        description:
          "A blessed barbarian: keeps and improves rage while gaining divine grace, smite evil (1/day at 2nd, 2/day at 5th, 3/day at 9th), detect evil, damage reduction that grows to 5/— at 10th, and energy resistance rising to 10 at 10th. Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-5, spells of 1st-4th level, Charisma-based).",
        source: `${CH5} — Champion of Gwynharwyf (pp. 56–58)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "defender-of-sealtiel",
    name: "Defender of Sealtiel",
    ruleset: "core",
    source: `${CH5} — Defender of Sealtiel (p. 58)`,
    sourceUrl: BOED_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Craft", "Listen", "Sense Motive", "Spot"],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +7",
      "Skills: Listen 5 ranks",
      "Feats: Diehard, Endurance, Servant of the Heavens",
    ],
    features: [
      {
        key: "defender-of-sealtiel-features",
        name: "Defender of Sealtiel Features",
        category: "trait",
        description:
          "A warden of holy places: defensive stance (as the dwarven defender ability), usable once more per day at every odd level; at 2nd level magic circle against evil and shield other 1/day; blood of the martyr 1/day at 4th; protective aura 1/day at 6th (2/day at 10th); and glory of the martyr 1/day at 8th.",
        source: `${CH5} — Defender of Sealtiel (pp. 58–59)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "emissary-of-barachiel",
    name: "Emissary of Barachiel",
    ruleset: "core",
    source: `${CH5} — Emissary of Barachiel (p. 59)`,
    sourceUrl: BOED_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Diplomacy", "Gather Information", "Knowledge (all skills, taken individually)", "Listen", "Perform", "Profession", "Sense Motive", "Speak Language", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Diplomacy 8 ranks, Knowledge (the planes) 4 ranks",
      "Feats: Servant of the Heavens, Words of Creation",
    ],
    features: [
      {
        key: "emissary-of-barachiel-features",
        name: "Emissary of Barachiel Features",
        category: "trait",
        description:
          "Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-7, spells of 1st-4th level, Charisma-based). The Calling at 1st level (summon archons to aid), Conversion at 3rd (a compelling celestial proclamation), and Sustenance at 5th (needs no food, water, or sleep).",
        source: `${CH5} — Emissary of Barachiel (pp. 59–61)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "exalted-arcanist",
    name: "Exalted Arcanist",
    ruleset: "core",
    source: `${CH5} — Exalted Arcanist (p. 61)`,
    sourceUrl: BOED_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge (arcana)", "Knowledge (religion)", "Perform", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any good",
      "Base Saves: Will +5",
      "Skills: Knowledge (arcana) 9 ranks, Knowledge (religion) 4 ranks",
      "Feats: Consecrate Spell, Purify Spell",
      "Spells: Able to spontaneously cast 3rd-level arcane spells",
    ],
    features: [
      {
        key: "exalted-arcanist-features",
        name: "Exalted Arcanist Features",
        category: "trait",
        description:
          "Gains access to the exalted spell list (adds the spells on the book's exalted spells list to her spells known by spell level: 3rd-level spells at class level 1, 5th at 2nd, 7th at 3rd, 9th at 4th), a bonus exalted feat at 3rd and 5th levels, and the ability to cast sanctified spells at 5th. Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2-5.",
        source: `${CH5} — Exalted Arcanist (pp. 61–62)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "fist-of-raziel",
    name: "Fist of Raziel",
    ruleset: "core",
    source: `${CH5} — Fist of Raziel (p. 62)`,
    sourceUrl: BOED_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive"],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +6",
      "Skills: Diplomacy 5 ranks, Knowledge (religion) 5 ranks",
      "Feats: Power Attack, Servant of the Heavens",
      "Spells: Able to cast divine favor",
    ],
    features: [
      {
        key: "fist-of-raziel-features",
        name: "Fist of Raziel Features",
        category: "trait",
        description:
          "A smiting holy warrior: smite evil grows from 1/day to 5/day and gains the good-aligned (1st), confirming (3rd), holy (5th), and fiendsmite (7th) qualities, with chain smite at 9th and holy martial strike at 10th; Sanctify Martial Strike as a bonus feat at 4th and sunder evil item at 6th. Spellcasting advances +1 level of an existing divine spellcasting class at every level except 1st.",
        source: `${CH5} — Fist of Raziel (pp. 62–64)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "initiate-of-pistis-sophia",
    name: "Initiate of Pistis Sophia",
    ruleset: "core",
    source: `${CH5} — Initiate of Pistis Sophia (p. 64)`,
    sourceUrl: BOED_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Hide", "Jump", "Knowledge (the planes)", "Knowledge (religion)", "Listen", "Move Silently", "Perform", "Profession", "Sense Motive", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Saves: Fort +5, Ref +5, Will +5",
      "Skills: Concentration 9 ranks",
      "Feats: Sacred Vow, Sanctify Ki Strike, Servant of the Heavens",
    ],
    features: [
      {
        key: "initiate-of-pistis-sophia-features",
        name: "Initiate of Pistis Sophia Features",
        category: "trait",
        description:
          "An exalted monk: unarmed strike progression as a monk, Fist of the Heavens at 1st, smite evil that grows with level, electricity resistance 5 at 4th and 10 at 7th, sacred vow bonuses at 4th, 7th, and 10th, and celestial transformation at 10th level (type changes to outsider). No spellcasting.",
        source: `${CH5} — Initiate of Pistis Sophia (pp. 64–65)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "lion-of-talisid",
    name: "Lion of Talisid",
    ruleset: "core",
    source: `${CH5} — Lion of Talisid (p. 65)`,
    sourceUrl: BOED_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Listen", "Knowledge (nature)", "Ride", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Neutral good",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (nature) 9 ranks, Survival 9 ranks",
      "Feats: Favored of the Companions",
      "Spells: Able to cast summon nature's ally II",
      "Special: Animal companion class feature",
    ],
    features: [
      {
        key: "lion-of-talisid-features",
        name: "Lion of Talisid Features",
        category: "trait",
        description:
          "An exalted druidic champion: animal companion advances as a druid, wild shape continues to progress, Exalted Companion at 4th, and the leonal's roar at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH5} — Lion of Talisid (pp. 65–66)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "prophet-of-erathaol",
    name: "Prophet of Erathaol",
    ruleset: "core",
    source: `${CH5} — Prophet of Erathaol (p. 66)`,
    sourceUrl: BOED_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(HALF, G, G, G),
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Knowledge (arcana) 5 ranks, Spellcraft 10 ranks",
      "Feats: Sacred Vow, Servant of the Heavens, Spell Focus (Divination), Vow of Chastity",
      "Spells: Able to cast 4th-level arcane or divine spells",
    ],
    features: [
      {
        key: "prophet-of-erathaol-features",
        name: "Prophet of Erathaol Features",
        category: "trait",
        description:
          "A seer lost in celestial ecstasy: her only class special is Ecstasy at 1st level (she drifts in and out of prophetic trances, with the benefits and drawbacks given in the class text). Spellcasting advances +1 level of an existing spellcasting class at every level except 1st.",
        source: `${CH5} — Prophet of Erathaol (pp. 66–68)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "risen-martyr",
    name: "Risen Martyr",
    ruleset: "core",
    source: `${CH5} — Risen Martyr (p. 68)`,
    sourceUrl: BOED_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Diplomacy", "Gather Information", "Heal", "Knowledge (the planes)", "Knowledge (religion)", "Listen", "Sense Motive", "Spot"],
    prerequisites: [
      "Alignment: Any good",
      "Base Saves: Fort +2, Ref +2, Will +2",
      "Skills: Any one skill 9 ranks",
      "Languages: Speak Language (Celestial)",
      "Feats: Nimbus of Light, plus one other exalted feat",
      "Special: The character must have died in the service of good and been chosen to return (see the class text)",
    ],
    features: [
      {
        key: "risen-martyr-features",
        name: "Risen Martyr Features",
        category: "trait",
        description:
          "A good soul returned from death in a spiritual body: the printed table begins with a level-0 step (spiritual body — the martyr returns as a deathless spirit) before levels 1-10. Charisma increases and a deflection bonus grow with level; holy purpose; bless and magic circle against evil at 2nd; daylight at 3rd; acid immunity and detect evil at 4th; protective aura at 5th; shield other at 6th; celestial brilliance and cold immunity at 7th; holy aura at 8th; electricity immunity at 9th; and perfection and final ascension at 10th, when the martyr's service ends.",
        source: `${CH5} — Risen Martyr (pp. 68–69)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "sentinel-of-bharrai",
    name: "Sentinel of Bharrai",
    ruleset: "core",
    source: `${CH5} — Sentinel of Bharrai (p. 69)`,
    sourceUrl: BOED_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft (alchemy)", "Decipher Script", "Gather Information", "Handle Animal", "Heal", "Knowledge (all skills, taken individually)", "Profession", "Speak Language", "Spellcraft", "Survival", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Knowledge (arcana) 8 ranks, Knowledge (nature) 8 ranks, Spellcraft 8 ranks",
      "Feats: Sacred Vow, Vow of Obedience",
    ],
    features: [
      {
        key: "sentinel-of-bharrai-features",
        name: "Sentinel of Bharrai Features",
        category: "trait",
        description:
          "A guardian of nature in Bharrai's service: Track and nature-friendly spells at 1st; energy resistance 10 to a chosen energy type at 2nd, and again for another type at 4th, 6th, and 8th; bear shape and quickened call lightning at 3rd; nature's veil at 5th; dire bear shape and ursinal's touch at 7th; cavalry of dire bears 1/week at 9th; and quickened lightning storm 1/day at 10th. Spellcasting advances +1 level of an existing spellcasting class at every level. (The printed skill list carries 3.0 holdovers — \"Alchemy,\" exclusive-skill tags, and \"Read/Write Language\" — mapped here to 3.5 skills: Craft (alchemy), with Read/Write Language folded into Speak Language.)",
        source: `${CH5} — Sentinel of Bharrai (pp. 69–71)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "skylord",
    name: "Skylord",
    ruleset: "core",
    source: `${CH5} — Skylord (p. 71)`,
    sourceUrl: BOED_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Balance", "Handle Animal", "Heal", "Knowledge (all skills, taken individually)", "Listen", "Ride", "Spot", "Survival"],
    prerequisites: [
      "Alignment: Any good",
      "Race: Elf or half-elf",
      "Base Attack Bonus: +7",
      "Skills: Handle Animal 10 ranks, Ride 10 ranks",
      "Feats: Mounted Combat, either Mounted Archery or Ride-By Attack, plus one exalted feat",
      "Special: Must spend one week meditating atop a mountain",
    ],
    features: [
      {
        key: "skylord-features",
        name: "Skylord Features",
        category: "trait",
        description:
          "A mounted lord of the skies: call flying mount and eyes of the eagle at 1st; ride the wind at 2nd; improved mounted combat bonuses (+2 at 3rd, +4 at 5th, +6 at 7th, +8 at 9th); deadly charge at 4th; storm kinship at 6th; and summon tempest at 10th. Spellcasting advances +1 level of an existing spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH5} — Skylord (pp. 71–73)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "slayer-of-domiel",
    name: "Slayer of Domiel",
    ruleset: "core",
    source: `${CH5} — Slayer of Domiel (p. 73)`,
    sourceUrl: BOED_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Gather Information", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Spot", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Hide 8 ranks, Move Silently 8 ranks",
      "Feats: Sanctify Martial Strike, Servant of the Heavens",
      "Special: Sneak attack +3d6 and the evasion class feature",
    ],
    features: [
      {
        key: "slayer-of-domiel-features",
        name: "Slayer of Domiel Features",
        category: "trait",
        description:
          "A holy assassin: death touch 1/day at 1st (rising to 4/day at 10th), sneak attack +1d6 at 2nd and every 2 levels thereafter (+5d6 at 10th), divine grace at 2nd, and improved evasion at 6th. Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-17, spells of 1st-4th level, Wisdom-based).",
        source: `${CH5} — Slayer of Domiel (pp. 73–75)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "stalker-of-kharash",
    name: "Stalker of Kharash",
    ruleset: "core",
    source: `${CH5} — Stalker of Kharash (p. 75)`,
    sourceUrl: BOED_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Climb", "Concentration", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Move Silently", "Ride", "Search", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Alignment: Neutral good",
      "Skills: Hide 8 ranks, Move Silently 8 ranks",
      "Feats: Alertness, Favored of the Companions, Track",
    ],
    features: [
      {
        key: "stalker-of-kharash-features",
        name: "Stalker of Kharash Features",
        category: "trait",
        description:
          "A hunter of evil: scent of evil at 1st; favored enemy (evil) at 2nd, improving with level; hide in plain sight at 4th; track evil at 5th; and smite evil 1/day at 6th (2/day at 8th, 3/day at 10th). Spellcasting advances +1 level of ranger spellcasting at every level.",
        source: `${CH5} — Stalker of Kharash (pp. 75–76)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "swanmay",
    name: "Swanmay",
    ruleset: "core",
    source: `${CH5} — Swanmay (p. 76)`,
    sourceUrl: BOED_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Handle Animal", "Heal", "Hide", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Profession", "Ride", "Search", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Gender: Female",
      "Alignment: Any good",
      "Skills: Knowledge (nature) 8 ranks, Survival 8 ranks",
      "Languages: Speak Language (Sylvan)",
      "Feats: Sacred Vow, Vow of Purity",
      "Spells: Able to cast speak with animals",
      "Special: Wild empathy class feature",
      "Special: Must have performed a great service for another swanmay",
    ],
    features: [
      {
        key: "swanmay-features",
        name: "Swanmay Features",
        category: "trait",
        description:
          "A fey guardian who shifts into swan form: shifting 1/day at 1st, rising to 5/day; spell resistance 12 + class level; wild empathy that continues to improve; voice of the swanmay (charm person and charm monster); and fey transformation at 10th (becomes a fey, with damage reduction 5/cold iron in swan form). Spellcasting advances +1 level of an existing spellcasting class at every level except 1st.",
        source: `${CH5} — Swanmay (pp. 76–77)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "sword-of-righteousness",
    name: "Sword of Righteousness",
    ruleset: "core",
    source: `${CH5} — Sword of Righteousness (p. 77)`,
    sourceUrl: BOED_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL3, G3, P3, G3),
    classSkills: ["Climb", "Craft", "Diplomacy", "Handle Animal", "Intimidate", "Jump", "Knowledge (nature)", "Knowledge (religion)", "Profession", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +6",
      "Feats: Favored of the Companions, Knight of Stars, or Servant of the Heavens, plus one additional exalted feat",
    ],
    features: [
      {
        key: "sword-of-righteousness-features",
        name: "Sword of Righteousness Features",
        category: "trait",
        description:
          "A short three-level class for good warriors: its only special is a bonus exalted feat at each level (1st, 2nd, and 3rd). No spellcasting.",
        source: `${CH5} — Sword of Righteousness (pp. 77–78)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "troubadour-of-stars",
    name: "Troubadour of Stars",
    ruleset: "core",
    source: `${CH5} — Troubadour of Stars (p. 78)`,
    sourceUrl: BOED_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Knowledge (all skills, taken individually)", "Listen", "Move Silently", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Speak Language", "Spellcraft", "Swim", "Tumble", "Use Magic Device"],
    prerequisites: [
      "Alignment: Chaotic good",
      "Skills: Perform 6 ranks",
      "Feats: Knight of Stars",
      "Spells: Able to spontaneously cast 4th-level arcane spells",
    ],
    features: [
      {
        key: "troubadour-of-stars-features",
        name: "Troubadour of Stars Features",
        category: "trait",
        description:
          "An exalted bard: bardic music (levels stack with bard levels) and detect evil at 1st; holy cacophony and celestial spells at 2nd; starmantle at 3rd; song of hope at 5th; sanctified spells at 6th; eladrin form at 7th; celestial symphony at 9th; and celestial ascension at 10th. Spellcasting advances +1 level of an existing arcane spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH5} — Troubadour of Stars (pp. 78–80)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "vassal-of-bahamut",
    name: "Vassal of Bahamut",
    ruleset: "core",
    source: `${CH5} — Vassal of Bahamut (p. 80)`,
    sourceUrl: BOED_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Bluff", "Concentration", "Craft (armorsmithing)", "Craft (weaponsmithing)", "Diplomacy", "Heal", "Intimidate", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Ride", "Sense Motive"],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +7",
      "Skills: Craft (armorsmithing) 5 ranks, Diplomacy 5 ranks",
      "Feats: Sacred Vow, Vow of Obedience",
      "Special: Must have single-handedly slain a juvenile (or older) red dragon",
    ],
    features: [
      {
        key: "vassal-of-bahamut-features",
        name: "Vassal of Bahamut Features",
        category: "trait",
        description:
          "A sworn knight of the Platinum Dragon: imperious aura and platinum armor at 1st; dragon senses and a shared trove at 2nd (the trove grows at 5th and 8th); a bonus feat at 3rd, 6th, and 9th; and dragonwrack, dealing escalating extra damage to evil dragons (+2d6 at 4th, +3d6 at 7th, +4d6 at 10th, with the vassal taking a smaller share). Casts divine spells from its own spell list with its own spells-per-day progression (Table 5-22, spells of 1st-4th level, Wisdom-based).",
        source: `${CH5} — Vassal of Bahamut (pp. 80–82)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
  {
    id: "wonderworker",
    name: "Wonderworker",
    ruleset: "core",
    source: `${CH5} — Wonderworker (p. 82)`,
    sourceUrl: BOED_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF3, P3, P3, G3),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Any good",
      "Base Saves: Will +5",
      "Feats: One exalted feat, plus one of Favored of the Companions, Knight of Stars, or Servant of the Heavens",
    ],
    features: [
      {
        key: "wonderworker-features",
        name: "Wonderworker Features",
        category: "trait",
        description:
          "A short three-level class: a bonus exalted feat at each level (1st, 2nd, and 3rd), plus bonus spells per day (or bonus power points for psionic characters) granted per Table 5-23, instead of normal spellcasting advancement.",
        source: `${CH5} — Wonderworker (pp. 82–83)`,
        sourceUrl: BOED_PATH,
      },
    ],
  },
];
