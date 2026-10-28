/**
 * Complete Mage prestige classes: all eleven from Chapter 3 of
 * Complete Mage (Wizards of the Coast). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf
 * Progression tables are the book's printed tables (Tables 3-1…3-11).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. Spellcasting advancement is stated in
 * each class's feature summary, following the house pattern.
 * Wild Soul's Hit Die is d4 as printed (Table 3-11), verified against
 * the page image. The book presents no base classes, no races, and
 * no templates.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4];
const P5 = [0, 0, 1, 1, 1];
const FULL5 = [1, 2, 3, 4, 5];
const HALF5 = [0, 1, 1, 2, 2];

const CM = "Complete Mage";
const CM_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Mage.pdf";
const CH3 = `${CM} — Chapter 3: Prestige Classes`;

export const COMPLETE_MAGE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "abjurant-champion",
    name: "Abjurant Champion",
    ruleset: "core",
    source: `${CH3} — Abjurant Champion (p. 50)`,
    sourceUrl: CM_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL5, P5, P5, G5),
    classSkills: ["Climb", "Concentration", "Craft", "Handle Animal", "Intimidate", "Jump", "Knowledge (arcana)", "Ride", "Spellcraft", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Feat: Combat Casting",
      "Spells: Able to cast 1st-level arcane spells, including at least one abjuration spell",
      "Special: Proficient with at least one martial weapon",
    ],
    features: [
      {
        key: "abjurant-champion-features",
        name: "Abjurant Champion Features",
        category: "trait",
        description:
          "A martial arcanist who turns abjuration magic into armor. Spellcasting advances +1 level of an existing arcane spellcasting class at every level. 1st: abjurant armor (whenever you cast an abjuration spell granting an armor or shield bonus, add your class level to that bonus) and extended abjuration (your abjuration spells are extended without a level increase). 2nd: swift abjuration (cast abjuration spells of 2nd level or lower as a swift action). 4th: arcane boost (sacrifice a spell or slot as a swift action for a bonus equal to its level on attack rolls, saves, or AC for 1 round). 5th: martial arcanist (choose one arcane casting class; its caster level equals your base attack bonus).",
        source: `${CH3} — Abjurant Champion (pp. 50–52)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "eldritch-disciple",
    name: "Eldritch Disciple",
    ruleset: "core",
    source: `${CH3} — Eldritch Disciple (p. 53)`,
    sourceUrl: CM_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (religion) 8 ranks, Knowledge (the planes) 4 ranks",
      "Spells: Ability to cast 2nd-level divine spells",
      "Invocations: Ability to use least invocations",
      "Special: Ability to turn or rebuke undead; must worship a chaotic or evil deity",
    ],
    features: [
      {
        key: "eldritch-disciple-features",
        name: "Eldritch Disciple Features",
        category: "trait",
        description:
          "A warlock-cleric who worships the power behind her invocations. Invocations (and eldritch blast) advance at every level; divine spellcasting advances +1 level at every level beyond 1st. 1st: gift of the divine patron (choose a gift — corrupting blast, fiendish resilience, frightful blast, healing blast, hindering blast, protective aura, strength of will, wild frenzy, or a similar patron gift — activated by spending a turn/rebuke attempt as a swift action; choose another gift at 4th, 7th, and 10th) and turn/rebuke undead stacking. 5th: eldritch spellweave (apply an eldritch essence invocation to an arcane or divine spell, as the eldritch theurge ability). 10th: timeless body (no aging penalties, cannot be magically aged).",
        source: `${CH3} — Eldritch Disciple (pp. 53–56)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "eldritch-theurge",
    name: "Eldritch Theurge",
    ruleset: "core",
    source: `${CH3} — Eldritch Theurge (p. 57)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks, Knowledge (the planes) 8 ranks",
      "Spells: Ability to cast 2nd-level arcane spells",
      "Invocations: Ability to use least invocations",
      "Special: Eldritch blast +2d6",
    ],
    features: [
      {
        key: "eldritch-theurge-features",
        name: "Eldritch Theurge Features",
        category: "trait",
        description:
          "A warlock-arcanist who welds spells and invocations together. Both arcane spellcasting and invocations advance +1 level at every level. 1st: damage reduction 1/cold iron (2 at 4th, 3 at 7th, 4 at 10th). 3rd: spellblast (greater invocation — place an area arcane spell on your eldritch blast). 5th: eldritch spellweave (apply an eldritch essence invocation to an arcane spell of at least the essence's level that targets a creature or requires a touch attack; 3 + Cha modifier times per day). Fiendish resilience grows alongside (2 by 9th level). 10th: greatreach blast (greater invocation — place a touch arcane spell on your eldritch blast).",
        source: `${CH3} — Eldritch Theurge (pp. 57–59)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "enlightened-spirit",
    name: "Enlightened Spirit",
    ruleset: "core",
    source: `${CH3} — Enlightened Spirit (p. 60)`,
    sourceUrl: CM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Disguise", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Knowledge (the planes) 8 ranks",
      "Special: Eldritch blast 3d6",
    ],
    features: [
      {
        key: "enlightened-spirit-features",
        name: "Enlightened Spirit Features",
        category: "trait",
        description:
          "A good warlock who has repented the fiendish path. This class grants NO spellcasting or invocation advancement as printed; instead it grants fixed celestial powers. 1st: aura of courage (immunity to fear; allies within 10 feet gain +4 against fear), aura of menace (hostile creatures within 5 feet take -2 on attacks, AC, and saves for 24 hours or until they hit you), and spirit blast (+1 damage per die against undead; ignores incorporeal miss chance). 2nd: eldritch blast +1d6, and +1d6 more at every even level (to +5d6 at 10th); spirit armor (+1 sacred bonus to AC, +2 at 6th, +3 at 10th). 3rd: celestial flight. 4th: tongues (continuous). 5th: shape invocation (any least, lesser, or greater blast shape) and energy resistance 5 against two of acid, cold, electricity, and fire. 7th: holy blast. 9th: transform magic. 10th: death ward (continuous).",
        source: `${CH3} — Enlightened Spirit (pp. 60–63)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "holy-scourge",
    name: "Holy Scourge",
    ruleset: "core",
    source: `${CH3} — Holy Scourge (p. 64)`,
    sourceUrl: CM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Knowledge (religion) 2 ranks",
      "Spellcasting: Able to cast three different evocation spells, and able to cast 3rd-level arcane spells",
      "Special: Subject to a code of conduct like a paladin's",
    ],
    features: [
      {
        key: "holy-scourge-features",
        name: "Holy Scourge Features",
        category: "trait",
        description:
          "A good arcanist sworn to scourge evil with righteous evocation. Spellcasting advances +1 level of an existing arcane spellcasting class at every level beyond 1st. 1st: code of conduct (violating it costs this class's abilities until atonement), dedicated spellcaster (you may no longer learn or cast enchantment, illusion, or necromancy spells), and righteous evocation +1 (save DCs of your good evocation spells), rising to +2 at 5th. 2nd: arcane smite (smite evil through an arcane spell requiring an attack roll, 1/day; 2/day at 4th). 3rd: devoted arcanist (add your class level on caster level checks against evil creatures' spell resistance).",
        source: `${CH3} — Holy Scourge (pp. 64–66)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "lyric-thaumaturge",
    name: "Lyric Thaumaturge",
    ruleset: "core",
    source: `${CH3} — Lyric Thaumaturge (p. 67)`,
    sourceUrl: CM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge (all skills, taken individually)", "Perform", "Profession", "Sense Motive", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Skills: Knowledge (arcana) 6 ranks, Perform (any) 9 ranks, Spellcraft 6 ranks",
      "Feat: Melodic Casting",
      "Spellcasting: Ability to cast 2nd-level arcane spells",
      "Special: Bardic music 5/day",
    ],
    features: [
      {
        key: "lyric-thaumaturge-features",
        name: "Lyric Thaumaturge Features",
        category: "trait",
        description:
          "A bard of the Arcane Chord college who fuses music and magic. Bard spellcasting advances +1 level at every level, and you gain one extra daily bardic music use per class level. 1st: bonus spell (an extra 1st- and 2nd-level bard spell slot; extra 3rd/4th-level slots at 4th, a 5th-level slot at 7th, a 6th-level slot at 10th). 2nd: Captivating Melody as a bonus feat. 3rd: spell secret (add sorcerer/wizard spells to your spells known — 1st and 2nd level at 3rd, 3rd and 4th at 6th, 5th and 6th at 9th). 5th: sonic might (expend bardic music to add 1d6 sonic damage per spell level to a sonic spell).",
        source: `${CH3} — Lyric Thaumaturge (pp. 67–69)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "master-specialist",
    name: "Master Specialist",
    ruleset: "core",
    source: `${CH3} — Master Specialist (p. 70)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all skills, taken individually)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 5 ranks, Spellcraft 5 ranks",
      "Feat: Spell Focus (school of specialization)",
      "Spellcasting: Able to cast 2nd-level arcane spells",
      "Special: Must be a specialist wizard",
    ],
    features: [
      {
        key: "master-specialist-features",
        name: "Master Specialist Features",
        category: "trait",
        description:
          "A specialist wizard of unmatched depth in one school. Wizard spellcasting advances +1 level at every level. 1st: Skill Focus (Spellcraft) as a bonus feat. 2nd: expanded spellbook (add one spell of your chosen school to your spellbook; again at 5th and 8th). 3rd: Greater Spell Focus (chosen school) as a bonus feat. 4th: minor school esoterica (a school-specific benefit — for example, abjurers gain a dispel bonus, conjurers' summons gain extra hit points). 6th: caster level +1 for your chosen school (+2 at 9th). 7th: moderate school esoterica. 10th: major school esoterica.",
        source: `${CH3} — Master Specialist (pp. 70–73)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "nightmare-spinner",
    name: "Nightmare Spinner",
    ruleset: "core",
    source: `${CH3} — Nightmare Spinner (p. 74)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Intimidate", "Knowledge (all skills, taken individually)", "Profession", "Search", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Skills: Bluff 4 ranks, Intimidate 4 ranks, Sense Motive 4 ranks",
      "Spellcasting: Ability to cast 3rd-level arcane spells, including at least one fear spell and at least one mind-affecting illusion spell",
    ],
    features: [
      {
        key: "nightmare-spinner-features",
        name: "Nightmare Spinner Features",
        category: "trait",
        description:
          "A fear-weaver who feeds nightmares into her illusions. Spellcasting advances +1 level of an existing arcane spellcasting class at every level beyond 1st. 1st: bonus spells (one extra illusion spell slot per spell level each day, stacking with a specialist's school slot), immunity to fear, and inspire fear (a living creature within 30 feet is shaken for rounds equal to your class level, Will halves; 3 + Cha modifier times per day). 2nd: nightmare phantasm (weave a phantasm into a figment or glamer spell so each enemy attempting to disbelieve is shaken for 1 round; 3 + Cha modifier times per day). 3rd: spirit chill. 5th: deadly nightmare.",
        source: `${CH3} — Nightmare Spinner (pp. 74–76)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "ultimate-magus",
    name: "Ultimate Magus",
    ruleset: "core",
    source: `${CH3} — Ultimate Magus (p. 77)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all skills, taken individually)", "Profession", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Skills: Knowledge (arcana) 4 ranks, Spellcraft 8 ranks",
      "Feats: Any metamagic feat",
      "Spellcasting: Able to spontaneously cast 1st-level arcane spells, and able to prepare and cast 2nd-level arcane spells from a spellbook",
    ],
    features: [
      {
        key: "ultimate-magus-features",
        name: "Ultimate Magus Features",
        category: "trait",
        description:
          "A dual arcanist, typically wizard/sorcerer. At every level except 1st, 4th, and 7th, both a prepared and a spontaneous arcane casting class advance +1 level; at 1st, 4th, and 7th, only the arcane class with the lowest caster level advances. 1st: arcane spell power +1 (caster level for all arcane spells), rising at 4th, 7th, and 10th to +4. 2nd: expanded spell knowledge (add a spell from your spellbook to a spontaneous class's spells known; another every two levels, of a rising maximum level — 5th by 10th). 3rd: augmented casting (sacrifice a spell slot from one arcane class to apply a metamagic feat you know to a spell from the other, without a level increase).",
        source: `${CH3} — Ultimate Magus (pp. 77–80)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "unseen-seer",
    name: "Unseen Seer",
    ruleset: "core",
    source: `${CH3} — Unseen Seer (p. 81)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Disguise", "Forgery", "Gather Information", "Hide", "Knowledge (all skills, taken individually)", "Listen", "Move Silently", "Profession", "Search", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Skills: Hide 8 ranks, Search 8 ranks, Sense Motive 4 ranks, Spellcraft 4 ranks, Spot 8 ranks",
      "Spellcasting: Ability to cast 1st-level arcane spells, including at least two divination spells",
    ],
    features: [
      {
        key: "unseen-seer-features",
        name: "Unseen Seer Features",
        category: "trait",
        description:
          "A stealthy diviner who ferrets out secrets by spell and by skulking. Spellcasting advances +1 level of an existing arcane spellcasting class at every level. 1st: damage bonus +1d6 (one of sneak attack, skirmish, or sudden strike; +2d6 at 4th, +3d6 at 7th, +4d6 at 10th). 2nd: advanced learning (add a divination spell from any class list to your spells known; again at 5th and 8th) and Silent Spell as a bonus feat. 3rd: divination spell power +1 (caster level for arcane divinations; +2 at 6th, +3 at 9th) at the cost of an equal reduction to caster level for all other arcane spells. 5th: guarded mind.",
        source: `${CH3} — Unseen Seer (pp. 81–83)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
  {
    id: "wild-soul",
    name: "Wild Soul",
    ruleset: "core",
    source: `${CH3} — Wild Soul (p. 84)`,
    sourceUrl: CM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Knowledge (arcana)", "Knowledge (nature)", "Knowledge (the planes)", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Skills: Knowledge (arcana) 8 ranks, Knowledge (nature) 4 ranks",
      "Spellcasting: Ability to cast 2nd-level arcane spells",
      "Special: Must have made peaceful contact with a fey creature and peacefully spent at least a day among fey",
    ],
    features: [
      {
        key: "wild-soul-features",
        name: "Wild Soul Features",
        category: "trait",
        description:
          "A primal mage bound to the Seelie or Unseelie Court. Spellcasting advances +1 level of an existing arcane spellcasting class at every level beyond 1st. 1st: seelie courtier (choose the seelie or unseelie path — good characters cannot choose unseelie, evil cannot choose seelie; gain a bonus equal to your class level on Bluff, Diplomacy, and Intimidate checks to influence fey and magical beasts) and spontaneous spells (sacrifice a prepared spell or slot to cast specific fey-themed spells of the same level or lower; the list grows by level, from 1st–3rd-level options at 1st to 8th and 9th at 10th). 2nd: seelie bond (path benefits growing by level: immunity to sleep at 2nd, +2 against enchantments at 4th, speed +10 feet at 6th, +1 to illusion DCs at 8th, +1 to enchantment DCs at 10th — or their unseelie counterparts) and summon seelie ally (call a fey ally of your court, growing in power with level). Hit Die is d4 as printed (Table 3-11), verified against the page image.",
        source: `${CH3} — Wild Soul (pp. 84–87)`,
        sourceUrl: CM_PATH,
      },
    ],
  },
];
