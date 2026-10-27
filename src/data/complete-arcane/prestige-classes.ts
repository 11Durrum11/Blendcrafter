/**
 * Complete Arcane prestige classes: all nineteen from Chapter 2 of
 * Complete Arcane (Wizards of the Coast). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf
 * Progression tables are the book's printed tables (Tables 2–2…2–22).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. Spellcasting advancement is stated in each
 * class's feature summary, following the house pattern.
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
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const HALF3 = [0, 1, 1];
const G3 = [2, 3, 3];
const P3 = [0, 0, 1];
const G7 = [2, 3, 3, 4, 4, 5, 5]; // good save, 7 levels
const P7 = [0, 0, 1, 1, 1, 2, 2]; // poor save, 7 levels
const TQ7 = [0, 1, 2, 3, 3, 4, 5];

const CA = "Complete Arcane";
const CA_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Arcane.pdf";
const CH2 = `${CA} — Chapter 2: Prestige Classes`;

export const COMPLETE_ARCANE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "acolyte-of-the-skin",
    name: "Acolyte of the Skin",
    ruleset: "core",
    source: `${CH2} — Acolyte of the Skin (p. 19)`,
    sourceUrl: CA_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nongood",
      "Skills: Knowledge (the planes) 6 ranks",
      "Spells or Spell-Like Abilities: Caster level 5th",
      "Special: Must have made peaceful contact with a summoned evil outsider",
      "Special: Must undergo the Ritual of Bonding",
    ],
    features: [
      {
        key: "acolyte-of-the-skin-features",
        name: "Acolyte of the Skin Features",
        category: "trait",
        description:
          "Replaces his own skin with a living fiend's through the Ritual of Bonding: wear fiend (natural armor +1, +2 inherent bonus to Dexterity, darkvision 60 ft.) and poison as a spell-like ability 1/day (2/day at 5th). Resistance to fire 10 (2nd), fiendish glare 1/day (3rd), skin adaptation (5th: natural armor +2 total, +2 inherent Constitution, darkvision 120 ft.), resistance to cold 10 (6th), glare of the pit (7th), summon fiend 1/day (9th), and fiendish symbiosis at 10th (type changes to outsider, damage reduction 10/good, still raisable). Spellcasting advances +1 level of an existing spellcasting class at levels 2, 4, 6, 8, and 10 only.",
        source: `${CH2} — Acolyte of the Skin (pp. 19–20)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "alienist",
    name: "Alienist",
    ruleset: "core",
    source: `${CH2} — Alienist (p. 21)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Gather Information", "Knowledge (all)", "Listen", "Profession", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Skills: Knowledge (the planes) 8 ranks",
      "Feat: Augment Summoning",
      "Spells: Able to cast at least one summoning spell of 3rd level or higher",
      "Special: Must have made peaceful contact with an alienist or a pseudonatural creature",
    ],
    features: [
      {
        key: "alienist-features",
        name: "Alienist Features",
        category: "trait",
        description:
          "Consorts with entities of the Far Realm: summon alien (summoned creatures gain the pseudonatural template) and familiar abilities advance. Alien blessing (2nd), metamagic secret (3rd and 7th), mad certainty (4th), pseudonatural familiar (5th), extra summoning (6th), insane certainty (8th), timeless body (9th), and alien transcendence at 10th. Spellcasting advances +1 level of an existing spellcasting class at every level. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Alienist (pp. 21–23)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "argent-savant",
    name: "Argent Savant",
    ruleset: "core",
    source: `${CH2} — Argent Savant (p. 24)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 6 ranks, Spellcraft 12 ranks",
      "Spells: Able to cast at least five spells with the force descriptor, at least one of which must be 5th level or higher",
    ],
    features: [
      {
        key: "argent-savant-features",
        name: "Argent Savant Features",
        category: "trait",
        description:
          "Five-level master of force spells: force specialization (1st), force armor (2nd), extended force (3rd), ablate force (4th), and unbind force (5th) — his force spells hit harder, his force armor is stronger, and he can strip away or dissolve others' force effects. Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2–5 (not at 1st). The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Argent Savant (pp. 24–25)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "blood-magus",
    name: "Blood Magus",
    ruleset: "core",
    source: `${CH2} — Blood Magus (p. 26)`,
    sourceUrl: CA_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort"],
    progression: rows(HALF, G, P, P),
    classSkills: ["Bluff", "Concentration", "Craft", "Heal", "Spellcraft"],
    prerequisites: [
      "Alignment: Any but lawful good",
      "Skills: Concentration 4 ranks",
      "Feats: Great Fortitude, Toughness",
      "Spells or Spell-Like Abilities: Arcane caster level 5th",
      "Special: The character must have been killed, then returned to life",
    ],
    features: [
      {
        key: "blood-magus-features",
        name: "Blood Magus Features",
        category: "trait",
        description:
          "Draws power from his own blood (note the printed table: Fortitude is the good save, Will is poor, exactly as printed in Table 2–5). Blood component, durable casting, and stanch (1st); scarification (2nd); death knell (3rd); blood draught (4th); a homunculus (5th); bloodseeking spell (6th); thicker than water (7th); awaken blood (8th); infusion (9th); and bloodwalk (10th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level except 5th and 10th.",
        source: `${CH2} — Blood Magus (pp. 26–29)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "effigy-master",
    name: "Effigy Master",
    ruleset: "core",
    source: `${CH2} — Effigy Master (p. 30)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Craft (leatherworking, metalworking, or woodworking) 10 ranks, Knowledge (arcana) 5 ranks, Spellcraft 5 ranks, Use Magic Device 2 ranks",
      "Feat: Craft Wondrous Item",
      "Special: Must have the simulacrum spell on a class spell list, whether or not the character is able to cast it",
    ],
    features: [
      {
        key: "effigy-master-features",
        name: "Effigy Master Features",
        category: "trait",
        description:
          "Five-level specialist in creating effigies — construct imitations of living creatures built with a variant of the simulacrum process: craft effigy (1st), improved effigy (3rd), and effigy link (5th). Spellcasting advances +1 level of an existing spellcasting class at levels 2–5 (not at 1st). The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Effigy Master (pp. 30–31)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "elemental-savant",
    name: "Elemental Savant",
    ruleset: "core",
    source: `${CH2} — Elemental Savant (p. 32)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks, Knowledge (the planes) 4 ranks",
      "Feat: Energy Substitution (acid, cold, electricity, or fire)",
      "Spells: Able to cast at least three spells that share one of the following descriptors: acid, cold, electricity, or fire; one of the spells must be at least 3rd level",
      "Special: Must have made peaceful contact with an elemental or outsider that has an elemental subtype (air, earth, fire, or water)",
    ],
    features: [
      {
        key: "elemental-savant-features",
        name: "Elemental Savant Features",
        category: "trait",
        description:
          "Transforms into a being of his chosen element: elemental specialty and resistance to energy 5 (1st), immunity to sleep (2nd), energy penetration +2 (3rd, +4 at 8th), resistance to energy 10 (4th, 20 at 7th), energy focus +1 (5th, +2 at 10th), darkvision (6th), immunity to paralysis and poison (9th), and elemental perfection with energy immunity at 10th. Spellcasting advances +1 level of an existing spellcasting class at every level except 5th and 10th.",
        source: `${CH2} — Elemental Savant (pp. 32–34)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "enlightened-fist",
    name: "Enlightened Fist",
    ruleset: "core",
    source: `${CH2} — Enlightened Fist (p. 34)`,
    sourceUrl: CA_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Escape Artist", "Hide", "Jump",
      "Knowledge (arcana)", "Knowledge (religion)", "Listen", "Move Silently",
      "Profession", "Spellcraft", "Spot", "Swim", "Tumble",
    ],
    prerequisites: [
      "Skills: Concentration 8 ranks, Knowledge (arcana) 5 ranks, Spellcraft 5 ranks",
      "Feats: Combat Casting, Improved Unarmed Strike, Stunning Fist",
      "Spells or Spell-Like Abilities: Arcane caster level 3rd",
    ],
    features: [
      {
        key: "enlightened-fist-features",
        name: "Enlightened Fist Features",
        category: "trait",
        description:
          "Blends monk training with arcane magic: ki strike (magic) and monk abilities (unarmed damage, AC bonus, and speed advance as a monk) at 1st, fist of energy (2nd, burst at 6th), arcane fist (3rd), arcane rejuvenation (5th), hold ray (7th), and diamond soul (9th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level except 1st and 6th.",
        source: `${CH2} — Enlightened Fist (pp. 34–36)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "fatespinner",
    name: "Fatespinner",
    ruleset: "core",
    source: `${CH2} — Fatespinner (p. 37)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Appraise", "Concentration", "Craft", "Knowledge (arcana)", "Profession", "Sleight of Hand", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 10 ranks, Profession (gambler) 5 ranks",
      "Spells: Able to cast 4th-level arcane spells, including at least one divination spell of 1st level or higher",
    ],
    features: [
      {
        key: "fatespinner-features",
        name: "Fatespinner Features",
        category: "trait",
        description:
          "Five-level manipulator of probability: spin fate (1st, a pool of 'spin' spent to shift rolls), fickle finger of fate (2nd), spin destiny (3rd), deny fate and resist fate (4th), and seal fate (5th). Spellcasting advances +1 level of an existing spellcasting class at levels 1–4 (not at 5th).",
        source: `${CH2} — Fatespinner (pp. 37–38)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "geometer",
    name: "Geometer",
    ruleset: "core",
    source: `${CH2} — Geometer (p. 39)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Disable Device", "Knowledge (all)", "Profession", "Search", "Spellcraft"],
    prerequisites: [
      "Skills: Decipher Script 9 ranks, Disable Device 4 ranks, Knowledge (arcana) 9 ranks, Search 4 ranks",
      "Feat: Scribe Scroll",
      "Spells: Able to prepare and cast 3rd-level arcane spells",
    ],
    features: [
      {
        key: "geometer-features",
        name: "Geometer Features",
        category: "trait",
        description:
          "Five-level master of glyphs and sigils: glyph of warding and draw spellglyph (1st — spells captured in diagram form), book of geometry (2nd), sigilsight (3rd), pass sigil (4th), and powerful spellglyph with greater glyph of warding (5th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Geometer (pp. 39–40)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "green-star-adept",
    name: "Green Star Adept",
    ruleset: "core",
    source: `${CH2} — Green Star Adept (p. 41)`,
    sourceUrl: CA_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: [
      "Appraise", "Concentration", "Craft", "Decipher Script", "Knowledge (arcana)",
      "Knowledge (architecture and engineering)", "Knowledge (geography)",
      "Knowledge (history)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Decipher Script 2 ranks, Knowledge (arcana) 8 ranks, Knowledge (architecture and engineering) 2 ranks, Knowledge (geography) 2 ranks, Knowledge (history) 2 ranks",
    ],
    features: [
      {
        key: "green-star-adept-features",
        name: "Green Star Adept Features",
        category: "trait",
        description:
          "Infuses his flesh with starmetal (a fallen star's green metal) and slowly becomes a living construct: damage reduction that grows by level (1/adamantine at 1st, improving each level to 10/adamantine at 10th), improved caster level, starmetal dependency and starmetal rigor (Strength rises, Dexterity falls: rigor 1 at 1st, 2 at 4th, 4 at 7th, 6 at 10th), natural attack (2nd), unnatural metabolism (+2 at 2nd, +4 at 5th, +6 at 8th against poison, sleep, paralysis, stunning, disease, death and necromancy effects), fortification 25% (3rd, 50% at 6th, 75% at 9th), otherworldly vision (4th), null metabolism (7th), and emerald perfection with rapid repair at 10th (type becomes construct; no longer subject to critical hits, nonlethal damage, ability damage/drain, or energy drain; repairs 1 hp per hour of rest). Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2, 4, 6, 8, and 10 only.",
        source: `${CH2} — Green Star Adept (pp. 41–43)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "initiate-of-the-sevenfold-veil",
    name: "Initiate of the Sevenfold Veil",
    ruleset: "core",
    source: `${CH2} — Initiate of the Sevenfold Veil (p. 44)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ7, P7, P7, G7),
    classSkills: ["Appraise", "Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 12 ranks, Knowledge (nature) 4 ranks, Spellcraft 12 ranks",
      "Feats: Greater Spell Focus (abjuration), Spell Focus (abjuration), Skill Focus (Spellcraft)",
      "Spells: Able to cast five abjuration spells, including at least two of 4th level or higher",
    ],
    features: [
      {
        key: "initiate-of-the-sevenfold-veil-features",
        name: "Initiate of the Sevenfold Veil Features",
        category: "trait",
        description:
          "Seven-level master of prismatic wardings: raises warding veils patterned on a prismatic wall (a personal, immediate, or wall warding, usable 1/day at 1st, 2/day at 3rd, 3/day at 5th, 4/day at 7th) and learns a new veil each level — red (1st), orange (2nd), yellow (3rd), green (4th), blue (5th), indigo (6th), violet (7th). Also unimpeachable abjuration (add class level to the DC to dispel his abjurations), unanswerable strike +2 (2nd, +4 at 6th), reactive warding (4th), double warding (6th), and kaleidoscopic doom (7th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Initiate of the Sevenfold Veil (pp. 44–47)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "mage-of-the-arcane-order",
    name: "Mage of the Arcane Order",
    ruleset: "core",
    source: `${CH2} — Mage of the Arcane Order (p. 48)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 8 ranks",
      "Feats: Cooperative Spell and any one other metamagic feat",
      "Spells: Able to prepare and cast 2nd-level arcane spells",
      "Special: Prospective members must pay an initiation fee of 750 gp to join the Arcane Order",
    ],
    features: [
      {
        key: "mage-of-the-arcane-order-features",
        name: "Mage of the Arcane Order Features",
        category: "trait",
        description:
          "Guildmage of the Arcane Order with access to the Spellpool — a shared reservoir he can draw spells from (and owes spells back to): guild member and Spellpool I (1st), Spellpool II (4th), Spellpool III (7th); a free metamagic feat (2nd and 9th); bonus languages (3rd and 6th); new spell (5th and 8th); and regent (10th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Mage of the Arcane Order (pp. 48–50)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "master-transmogrifist",
    name: "Master Transmogrifist",
    ruleset: "core",
    source: `${CH2} — Master Transmogrifist (p. 51)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Knowledge (arcana)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Skills: Bluff 2 ranks, Disguise 5 ranks",
      "Feat: Eschew Materials",
      "Spells: Able to cast alter self and polymorph",
    ],
    features: [
      {
        key: "master-transmogrifist-features",
        name: "Master Transmogrifist Features",
        category: "trait",
        description:
          "Perfects the art of changing shape: extended change and favored shapes (1st — a list of preferred forms whose changes last longer), manifest senses (2nd), battle mastery +2 (3rd, +4 at 6th, +6 at 9th) in favored shapes, effortless change (4th), the Shapechanger subtype (5th), reflexive change (7th), manifest qualities (8th — gain extraordinary qualities of a form), and infinite variety (10th — combine the qualities of two forms). Spellcasting advances +1 level of an existing arcane spellcasting class at levels 2, 3, 5, 6, 8, and 9 only.",
        source: `${CH2} — Master Transmogrifist (pp. 51–53)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "mindbender",
    name: "Mindbender",
    ruleset: "core",
    source: `${CH2} — Mindbender (p. 54)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF, G, P, G),
    classSkills: ["Bluff", "Concentration", "Diplomacy", "Intimidate", "Knowledge (all)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nongood",
      "Skills: Bluff 4 ranks, Diplomacy 4 ranks, Intimidate 4 ranks, Sense Motive 4 ranks",
      "Spells: Able to cast charm person, use charm person as a spell-like ability, or use the charm invocation",
      "Spells or Spell-Like Abilities: Arcane caster level 5th",
    ],
    features: [
      {
        key: "mindbender-features",
        name: "Mindbender Features",
        category: "trait",
        description:
          "Trades spellcasting breadth for domination (note the printed table: Fortitude and Will are both good saves). Telepathy (1st); push the weak mind 1/day and skill boosts (2nd); mindread 2/day (3rd, 4/day at 7th); eternal charm (4th — a permanently charmed thrall; a second at 6th, third at 8th); enchantment spell power +2 (6th, +4 at 10th); and dominate (7th). Spellcasting advances +1 level of an existing arcane spellcasting class at levels 1, 3, 5, 7, and 9 only. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Mindbender (pp. 54–56)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "seeker-of-the-song",
    name: "Seeker of the Song",
    ruleset: "core",
    source: `${CH2} — Seeker of the Song (p. 56)`,
    sourceUrl: CA_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: [
      "Climb", "Concentration", "Craft", "Diplomacy", "Jump", "Knowledge (arcana)",
      "Listen", "Perform", "Profession", "Ride", "Sense Motive", "Spot", "Swim",
    ],
    prerequisites: [
      "Skills: Knowledge (arcana) 13 ranks, Perform (any one) 13 ranks",
      "Feat: Skill Focus (Perform [any one])",
      "Special: Bardic music ability",
      "Special: Must have been exposed to the primal music by hearing another seeker of the song use a seeker music ability",
    ],
    features: [
      {
        key: "seeker-of-the-song-features",
        name: "Seeker of the Song Features",
        category: "trait",
        description:
          "A bard who pursues the primal music of creation. Instead of spellcasting advancement she gains seeker music (each use costs a daily bardic music use; her levels stack with bard levels for daily uses) — a new song each level: burning melody (1st), song of unmaking (2nd), dirge of frozen loss (3rd), song of life (4th), anthem of thunder and pain (5th), hymn of spelldeath (6th), ballad of agony reborn (7th), aria of everywhere (8th), dirge of songdeath (9th), hymn of revealing (10th); most songs carry a refrain effect. Rapture of the song grows with level: +2 AC while using music (1st), +2 on saves (4th), damage reduction 2/— (7th), and freedom of movement (10th). Also combine songs (2nd) and subvocalize (5th).",
        source: `${CH2} — Seeker of the Song (pp. 56–59)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "sublime-chord",
    name: "Sublime Chord",
    ruleset: "core",
    source: `${CH2} — Sublime Chord (p. 60)`,
    sourceUrl: CA_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Diplomacy", "Knowledge (all)",
      "Listen", "Perform", "Profession", "Search", "Speak Language", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Skills: Knowledge (arcana) 13 ranks, Listen 13 ranks, Perform (any) 10 ranks, Profession (astrologer) 6 ranks, Spellcraft 6 ranks",
      "Spells: Able to cast 3rd-level arcane spells",
      "Special: Bardic music ability",
    ],
    features: [
      {
        key: "sublime-chord-features",
        name: "Sublime Chord Features",
        category: "trait",
        description:
          "A bard whose music opens onto far greater magic: she gains her own spellcasting progression (Tables 2–17/2–18) — spells known and per day drawn from the sorcerer/wizard list but only of 4th through 9th level, with her sublime chord level added to another arcane class's level for caster level. Bardic lore and bardic music continue (half her class level adds to bard level for daily music uses). Song of arcane power (2nd — boost a spell's caster level with a Perform check), song of timelessness (6th), and song of cosmic fire (10th). The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Sublime Chord (pp. 60–62)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "suel-arcanamach",
    name: "Suel Arcanamach",
    ruleset: "core",
    source: `${CH2} — Suel Arcanamach (p. 63)`,
    sourceUrl: CA_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Bluff", "Climb", "Concentration", "Craft", "Disguise", "Escape Artist", "Hide",
      "Jump", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (the planes)",
      "Listen", "Move Silently", "Profession", "Search", "Spellcraft", "Spot",
      "Swim", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Concentration 4 ranks, Jump 4 ranks, Spellcraft 5 ranks, Tumble 4 ranks",
      "Feats: Combat Casting, Iron Will",
      "Language: Ancient Suloise",
      "Special: Must be proficient with at least four martial or exotic weapons",
      "Special: Must read the Grimoire Arcanamacha, or study with a willing instructor who has done so",
    ],
    features: [
      {
        key: "suel-arcanamach-features",
        name: "Suel Arcanamach Features",
        category: "trait",
        description:
          "Mage-slaying warrior of the ancient Suel Empire with his own Charisma-based spellcasting (Tables 2–19/2–20; spells of 1st–5th level chosen from the abjuration, divination, illusion, and transmutation schools of the sorcerer/wizard list) — note the printed table: Fortitude is poor while Reflex and Will are good. Ignore spell failure chance 5% (1st, 10% at 4th, 15% at 7th, 20% at 10th) and tenacious spells (his spells are harder to dispel: +6 to the dispel DC). Dispelling strike 1/day (2nd, 2/day at 6th, 3/day at 10th — a melee hit delivers a targeted greater dispel magic) and extended spellstrength (3rd).",
        source: `${CH2} — Suel Arcanamach (pp. 63–65)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "wayfarer-guide",
    name: "Wayfarer Guide",
    ruleset: "core",
    source: `${CH2} — Wayfarer Guide (p. 65)`,
    sourceUrl: CA_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF3, P3, P3, G3),
    classSkills: ["Concentration", "Craft", "Knowledge (all)", "Profession", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (arcana) 10 ranks, Knowledge (geography) 10 ranks",
      "Spell: Able to cast teleport",
      "Special: A prospective wayfarer guide must join the Wayfarers Union (although she can later quit without losing previously acquired levels)",
    ],
    features: [
      {
        key: "wayfarer-guide-features",
        name: "Wayfarer Guide Features",
        category: "trait",
        description:
          "Three-level specialist in magical transportation for the Wayfarers Union: enhanced capacity and improved range (1st — her teleportation carries more and reaches farther), extra teleportation (2nd), and enhanced accuracy (3rd — her teleport arrivals are more precise). Spellcasting advances +1 level of an existing spellcasting class at levels 1 and 3 (not at 2nd). The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Wayfarer Guide (pp. 65–66)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
  {
    id: "wild-mage",
    name: "Wild Mage",
    ruleset: "core",
    source: `${CH2} — Wild Mage (p. 68)`,
    sourceUrl: CA_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["ref"],
    progression: rows(HALF, P, G, P),
    classSkills: ["Bluff", "Concentration", "Craft", "Intimidate", "Knowledge (all)", "Profession", "Spellcraft", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any chaotic",
      "Skills: Knowledge (the planes) 4 ranks, Spellcraft 8 ranks, Use Magic Device 4 ranks",
      "Feats: Magical Aptitude, any metamagic feat",
      "Spells or Spell-Like Abilities: Arcane caster level 1st",
    ],
    features: [
      {
        key: "wild-mage-features",
        name: "Wild Mage Features",
        category: "trait",
        description:
          "Casts through chaos (note the printed table: Reflex is the only good save). Wild magic (1st — her caster level drops by 3, but every spell she casts adds 1d6 to her caster level for that casting), random deflector 1/day (2nd, 2/day at 5th, 3/day at 8th — redirects a targeted attack or spell to a random nearby creature), student of chaos (3rd — rerolls on wild rolls), chaotic mind (6th — immunity to confusion and insanity, continuous nondetection), reckless dweomer (9th — burn a spell slot for a rod-of-wonder-like effect), and wildstrike 1/day (10th). Spellcasting advances +1 level of an existing arcane spellcasting class at every level. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Wild Mage (pp. 68–70)`,
        sourceUrl: CA_PATH,
      },
    ],
  },
];
