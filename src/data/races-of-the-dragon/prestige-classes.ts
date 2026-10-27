/**
 * Races of the Dragon prestige classes: all five from Chapter 5 of
 * Races of the Dragon (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf
 * Progression tables are the book's printed tables. Prerequisites
 * are free text (shown in the UI, soft-checked only), matching the
 * other packs.
 *
 * Printed quirk kept as printed: the dragon devotee's Hit Die is d6
 * (Table 5–4 header, verified against the printed page), despite the
 * class's martial flavor and ability-score increases.
 * The disciple of the eye is unusual in having all three saves good
 * (Table 5–2); that is also as printed.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const TQ5 = [0, 1, 2, 3, 3];

const ROTD = "Races of the Dragon";
const ROTD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of the Dragon.pdf";
const CH5 = `${ROTD} — Chapter 5: Prestige Classes`;

export const RACES_OF_THE_DRAGON_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "disciple-of-the-eye",
    name: "Disciple of the Eye",
    ruleset: "core",
    source: `${CH5} — Disciple of the Eye (p. 75; Table 5–2)`,
    sourceUrl: ROTD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ5, G5, G5, G5),
    classSkills: ["Concentration", "Climb", "Craft", "Diplomacy", "Gather Information", "Hide", "Jump", "Intimidate", "Knowledge (arcana)", "Knowledge (geography)", "Listen", "Move Silently", "Profession", "Sense Motive", "Spot", "Survival", "Swim", "Tumble"],
    prerequisites: [
      "Type/Subtype: Dragonblood subtype",
      "Alignment: Any lawful",
      "Skills: Concentration 8 ranks, Spot 8 ranks",
      "Feats: Improved Unarmed Strike",
    ],
    features: [
      {
        key: "disciple-of-the-eye-arts",
        name: "Draconic Martial Arts",
        description:
          "1st: fast movement and flurry of blows (both stack with the monk class features of the same name), and wandering eyes (create a Fine, dragon-shaped magical sensor as the arcane eye spell, for up to 1 minute per day per class level, divided as you wish). 2nd: frightful attack and natural armor +1 (4th: +2). 3rd: keen senses. 4th: glare of the enraged dragon. 5th: blindsense.",
        category: "trait",
        source: `${CH5} — Disciple of the Eye (pp. 75–78)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
  {
    id: "dracolexi",
    name: "Dracolexi",
    ruleset: "core",
    source: `${CH5} — Dracolexi (p. 79; Table 5–3)`,
    sourceUrl: ROTD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Climb", "Craft", "Decipher Script", "Gather Information", "Jump", "Knowledge (all)", "Profession", "Sense Motive", "Spellcraft", "Search", "Speak Language", "Swim", "Use Magic Device"],
    prerequisites: [
      "Feats: Eschew Materials or Still Spell",
      "Skills: Knowledge (arcana) 8 ranks, Perform (oratory) 4 ranks, Spellcraft 4 ranks",
      "Spells: Able to spontaneously cast 2nd-level arcane spells and know at least one language-dependent spell",
      "Languages: Draconic, plus any two of Auran, Dwarven, Elven, and Ignan",
    ],
    features: [
      {
        key: "dracolexi-words",
        name: "Words of Draconic Power",
        description:
          "Spellcasting advances an existing arcane spellcasting class at every level except 1st. 1st: learn one Draconic word (supernatural spoken effects such as renthisj [speak] and ssifisv [rest]); further words at 4th, 7th, and 10th. 2nd: bonus feat. 3rd: learn power word spells more efficiently (again at 6th and 9th). 5th: bonus spells known. 8th: voice in silence (your words function even in areas of magical silence).",
        category: "trait",
        source: `${CH5} — Dracolexi (pp. 79–83)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
  {
    id: "dragon-devotee",
    name: "Dragon Devotee",
    ruleset: "core",
    source: `${CH5} — Dragon Devotee (p. 84; Table 5–4, p. 85)`,
    sourceUrl: ROTD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ5, G5, P5, P5),
    classSkills: ["Climb", "Concentration", "Intimidate", "Jump", "Knowledge (arcana)", "Listen", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Race: Nondragon, and cannot already have the draconic template",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (arcana) 1 rank",
      "Languages: Draconic",
    ],
    features: [
      {
        key: "dragon-devotee-awakening",
        name: "Draconic Awakening",
        description:
          "1st: ability increase (+2 Charisma) and natural armor +1. 2nd: combat technique (choose a fighter bonus feat, or improve sneak attack, skirmish, or sudden strike by +1d6 if you already have it; chosen again at 4th) and draconic resistance (+4 bonus on saves against paralysis and magic sleep effects). 3rd: ability increase (+2 Constitution) and ignore spell failure for 0- and 1st-level arcane spells. 4th: two claw attacks (damage by size, as the draconic creature template). 5th: ability increase (+2 Strength) and gain the full draconic creature template (p. 74) without applying its level adjustment. Spellcasting: +1 level of sorcerer at 3rd and 5th (a devotee with no sorcerer levels casts as a 1st-level sorcerer from 3rd; magic fang and greater magic fang join the sorcerer spell list). Hit Die is d6 as printed in Table 5–4.",
        category: "trait",
        source: `${CH5} — Dragon Devotee (pp. 84–85)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
  {
    id: "dragonheart-mage",
    name: "Dragonheart Mage",
    ruleset: "core",
    source: `${CH5} — Dragonheart Mage (p. 88; Table 5–5, p. 89)`,
    sourceUrl: ROTD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Bluff", "Concentration", "Gather Information", "Knowledge (all)", "Listen", "Speak Language", "Search", "Spellcraft", "Spot"],
    prerequisites: [
      "Spells: Able to spontaneously cast arcane spells",
      "Skills: Knowledge (arcana) 8 ranks",
      "Feats: Draconic Heritage",
      "Languages: Draconic",
    ],
    features: [
      {
        key: "dragonheart-mage-breath",
        name: "Draconic Breath and Feats",
        description:
          "Spellcasting advances an existing spellcasting class at every level except 1st and 6th. 1st: gain the Draconic Breath feat as a bonus feat, with the damage per spell level sacrificed improved at 6th (2d8 per spell level) and 10th (3d6 per spell level). 2nd, 4th, and 8th: bonus draconic feat.",
        category: "trait",
        source: `${CH5} — Dragonheart Mage (pp. 88–90)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
  {
    id: "singer-of-concordance",
    name: "Singer of Concordance",
    ruleset: "core",
    source: `${CH5} — Singer of Concordance (p. 91; Table 5–6)`,
    sourceUrl: ROTD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Concentration", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft", "Survival"],
    prerequisites: [
      "Type/Subtype: Dragonblood subtype",
      "Spells: Able to cast 3rd-level divine spells",
      "Skills: Knowledge (religion) 8 ranks",
      "Deity: Io",
    ],
    features: [
      {
        key: "singer-of-concordance-sphere",
        name: "Sphere of Concordance",
        description:
          "Spellcasting advances an existing spellcasting class at every level. The singer projects aspects of a Sphere of Concordance, a sanctuary aligned with Io, and can run several aspects at once: 1st aspect of peace; 2nd bonus domain (Dragon, Healing, Knowledge, Magic, Strength, Travel, or Wealth); 3rd aspect of refuge; 5th aspect of exclusion 1/day (8th: 2/day); 6th aspect of healing; 9th aspect of safety 1/day; 10th the full Sphere of Concordance.",
        category: "trait",
        source: `${CH5} — Singer of Concordance (pp. 91–95)`,
        sourceUrl: ROTD_PATH,
      },
    ],
  },
];
