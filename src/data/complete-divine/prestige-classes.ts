/**
 * Complete Divine prestige classes: all twenty-four from Chapter 2 of
 * Complete Divine (Wizards of the Coast). Built 2026-10-27 from the copy
 * in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf
 * The PDF is a scan with no text layer; the data below comes from OCR of
 * the printed pages, with ambiguous table cells settled against the
 * page images. Progression tables are the book's printed tables
 * (Tables 2-2…2-25; the book's own list of tables misnumbers the last
 * two as "Table 2-24" twice). Prerequisites are free text (shown in
 * the UI, soft-checked only), matching the other packs. Spellcasting
 * advancement is stated in each class's feature summary, following the
 * house pattern.
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

const CD = "Complete Divine";
const CD_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Divine.pdf";
const CH2 = `${CD} — Chapter 2: Prestige Classes`;

export const COMPLETE_DIVINE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "black-flame-zealot",
    name: "Black Flame Zealot",
    ruleset: "core",
    source: `${CH2} — Black Flame Zealot (p. 21)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Escape Artist", "Hide", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Sleight of Hand", "Spellcraft", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Alignment: Any nongood",
      "Skills: Hide 8 ranks, Knowledge (religion) 8 ranks, Move Silently 8 ranks",
      "Feats: Exotic Weapon Proficiency (kukri), Iron Will",
      "Spells: Able to cast 2nd-level divine spells",
      "Special: Sneak attack damage +1d6",
      "Special: Must worship the deity to whom the Order of the Black Flame is dedicated, and must slay an enemy of the faith for no other reason than to join the Order",
    ],
    features: [
      {
        key: "black-flame-zealot-features",
        name: "Black Flame Zealot Features",
        category: "trait",
        description:
          "A holy assassin of the Order of the Black Flame: death attack and zealous heart at 1st level, poison use at 2nd, sneak attack +1d6 at 3rd (rising to +2d6 at 6th and +3d6 at 9th, stacking with other sources), fateful stride at 5th, sacred flame at 7th (bestow flaming or flaming burst on a weapon 1/day), and unholy immolation at 10th (creatures killed by his death attack or sneak attack are consumed by unholy fire). Spellcasting advances +1 level of an existing divine spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH2} — Black Flame Zealot (pp. 21–23)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "blighter",
    name: "Blighter",
    ruleset: "core",
    source: `${CH2} — Blighter (p. 23)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (nature)", "Listen", "Profession", "Spellcraft", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Alignment: Any nongood",
      "Base Attack Bonus: +4",
      "Special: The character must be an ex-druid previously capable of casting 3rd-level druid spells",
    ],
    features: [
      {
        key: "blighter-features",
        name: "Blighter Features",
        category: "trait",
        description:
          "An ex-druid who draws power from despoiling nature. Casts spells from the blighter spell list with her own accelerated spells-per-day progression (Table 2-3, spells of 0-9th level reached by 10th level; Wisdom-based; caster level equals blighter level plus druid level). She must deforest a swath of land daily to prepare spells (deforestation, 1st). Sustenance at 2nd (needs no food or water); undead wild shape 1/day at 3rd, rising in uses and size (Large at 5th, Huge at 9th, 5/day at 10th); speak with dead animal at 4th; contagious touch 1/day at 5th (2/day at 7th, 3/day at 9th); animate dead animal at 6th; unbond at 8th; and plague at 10th.",
        source: `${CH2} — Blighter (pp. 23–26)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "church-inquisitor",
    name: "Church Inquisitor",
    ruleset: "core",
    source: `${CH2} — Church Inquisitor (p. 26)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (local)", "Knowledge (the planes)", "Knowledge (religion)", "Search", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Lawful good or lawful neutral",
      "Base Save Bonus: Will +3",
      "Skills: Knowledge (arcana) 4 ranks, Knowledge (religion) 4 ranks, Spellcraft 4 ranks",
      "Spells: Able to cast zone of truth as a divine spell",
    ],
    features: [
      {
        key: "church-inquisitor-features",
        name: "Church Inquisitor Features",
        category: "trait",
        description:
          "A hunter of corruption within the church: detect evil at will and the Inquisition domain at 1st level, immunity to charms at 2nd, pierce illusion at 3rd, pierce disguise at 4th, immunity to compulsions at 5th, force shapechange at 6th, immunity to possession at 8th, discern lies at 9th, and learn the truth at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH2} — Church Inquisitor (pp. 26–29)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "consecrated-harrier",
    name: "Consecrated Harrier",
    ruleset: "core",
    source: `${CH2} — Consecrated Harrier (p. 29)`,
    sourceUrl: CD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: ["Bluff", "Climb", "Diplomacy", "Disguise", "Gather Information", "Intimidate", "Knowledge (local)", "Profession", "Ride", "Search", "Use Rope"],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +5",
      "Skills: Disguise 5 ranks, Gather Information 5 ranks",
      "Feats: Track",
      "Special: The candidate must accept an assignment from her church to locate and destroy a specific, individual blasphemer",
    ],
    features: [
      {
        key: "consecrated-harrier-features",
        name: "Consecrated Harrier Features",
        category: "trait",
        description:
          "A church-sanctioned hunter of blasphemers. Casts divine spells from the consecrated harrier spell list with her own spells-per-day progression (Table 2-5, spells of 1st-4th level, Wisdom-based). Blessing of scripture (+2 on checks against her quarry's faith) at 1st, rising to +4 at 5th and +6 at 10th, and detect chaos at 1st; sanctified sight at 2nd; dispel magic at 3rd; crushing despair at 4th; false vision at 6th; implacable hunt at 8th; and faultless hunt at 10th. A harrier who fails to act according to her code of conduct must atone before gaining further levels.",
        source: `${CH2} — Consecrated Harrier (pp. 29–30)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "contemplative",
    name: "Contemplative",
    ruleset: "core",
    source: `${CH2} — Contemplative (p. 30)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (religion) 13 ranks",
      "Spells: Able to cast 1st-level divine spells",
      "Special: Must have had direct contact with one's patron deity or a direct servant of that deity",
    ],
    features: [
      {
        key: "contemplative-features",
        name: "Contemplative Features",
        category: "trait",
        description:
          "A mystic in direct communion with her deity: a bonus domain and divine health (immunity to all diseases) at 1st level, slippery mind at 2nd, divine wholeness (heal herself 2 × class level hit points per day) at 3rd, divine body (immunity to poisons) at 5th, a second bonus domain at 6th, divine soul (spell resistance) at 7th, eternal body (no longer ages) at 9th, and mystic union at 10th (type changes to outsider, native). Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH2} — Contemplative (pp. 30–33)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "divine-crusader",
    name: "Divine Crusader",
    ruleset: "core",
    source: `${CH2} — Divine Crusader (p. 33)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (religion)", "Ride", "Swim"],
    prerequisites: [
      "Alignment: Must match chosen deity",
      "Base Attack Bonus: +7",
      "Skills: Knowledge (religion) 2 ranks",
      "Feats: Weapon Focus (in chosen deity's favored weapon)",
    ],
    features: [
      {
        key: "divine-crusader-features",
        name: "Divine Crusader Features",
        category: "trait",
        description:
          "A champion embodying one aspect of her deity. Casts divine spells from the spell list of a single domain offered by her deity, with her own accelerated spells-per-day progression (Table 2-7, spells of 1st-9th level reached by 10th level; Charisma-based). Aura at 1st (as the cleric aura of her alignment), resistance to electricity 5 at 3rd, Weapon Specialization with the deity's favored weapon at 5th, resistance to acid 5 at 6th, darkvision at 7th, resistances rising to acid 10 and electricity 10 at 9th, and perfect self at 10th (type changes to outsider, native, with damage reduction 10/magic). A divine crusader who fails her deity can be refused by every other deity (see the class text).",
        source: `${CH2} — Divine Crusader (pp. 33–34)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "divine-oracle",
    name: "Divine Oracle",
    ruleset: "core",
    source: `${CH2} — Divine Oracle (p. 34)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Skill Focus (Knowledge [religion])",
      "Spells: Able to cast at least two divination spells, one of which must be 3rd level or higher",
    ],
    features: [
      {
        key: "divine-oracle-features",
        name: "Divine Oracle Features",
        category: "trait",
        description:
          "A master of divination: the Oracle domain and a scry bonus at 1st level, prescient sense (a form of evasion that works in armor) and trap sense +1 at 2nd, divination enhancement at 3rd (cast divinations at +2 caster level and reroll a percentage miss chance for a divination), uncanny dodge at 4th, trap sense +2 at 5th, improved uncanny dodge at 6th, trap sense +3 at 8th, and immune to surprise at 10th. Spellcasting advances +1 level of an existing spellcasting class (arcane or divine) at every level.",
        source: `${CH2} — Divine Oracle (pp. 34–36)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "entropomancer",
    name: "Entropomancer",
    ruleset: "core",
    source: `${CH2} — Entropomancer (p. 36)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (local)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nongood",
      "Skills: Concentration 5 ranks, Knowledge (arcana) 5 ranks",
      "Feats: Great Fortitude, Magical Aptitude",
      "Spells: Able to cast 4th-level divine spells",
    ],
    features: [
      {
        key: "entropomancer-features",
        name: "Entropomancer Features",
        category: "trait",
        description:
          "A priest of entropy and dissolution: shard of entropy 2/day at 1st (a movable chunk of absolute blackness dealing 3d6 damage, rising to 5d6 at 5th and 7d6 and consuming at 9th), entropic field 2/day at 2nd (auras that can force rerolls, later gaining a reroll improvement at 5th and a wounding effect at 7th), and control sphere at 10th (control a sphere of annihilation). Spellcasting advances +1 level of an existing divine spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH2} — Entropomancer (pp. 36–39)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "evangelist",
    name: "Evangelist",
    ruleset: "core",
    source: `${CH2} — Evangelist (p. 39)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Bluff", "Craft", "Diplomacy", "Disguise", "Escape Artist", "Intimidate", "Knowledge (all skills, taken individually)", "Listen", "Perform", "Profession", "Sense Motive", "Speak Language"],
    prerequisites: [
      "Alignment: Same alignment restrictions as a cleric of a particular deity",
      "Skills: Bluff 8 ranks, Gather Information 5 ranks, Knowledge (religion) 5 ranks, Perform (oratory) 6 ranks, Sense Motive 5 ranks",
      "Feats: Negotiator or Persuasive",
    ],
    features: [
      {
        key: "evangelist-features",
        name: "Evangelist Features",
        category: "trait",
        description:
          "A five-level class of inspired oratory (great orator): inspire hope or inspire dread at 1st level, fast talk at 2nd, inflame the righteous at 3rd, skill mastery at 4th, and convert the unfaithful at 5th (requires 13 ranks in Perform [oratory]; a single enemy within 30 feet must make a Will save or shift alignment toward the evangelist's faith). Oratory requires a full-round action and concentration each round, and lasts while he speaks and for 3 rounds thereafter. The evangelist gains no spellcasting advancement — members trade in their spellcasting abilities for this class's powers.",
        source: `${CH2} — Evangelist (pp. 39–41)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "geomancer",
    name: "Geomancer",
    ruleset: "core",
    source: `${CH2} — Geomancer (p. 41)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (arcana)", "Knowledge (geography)", "Knowledge (nature)", "Scry", "Spellcraft", "Survival", "Swim"],
    prerequisites: [
      "Skills: Knowledge (arcana) 6 ranks, Knowledge (nature) 6 ranks",
      "Spells: Able to cast 2nd-level arcane spells and 2nd-level divine spells",
    ],
    features: [
      {
        key: "geomancer-features",
        name: "Geomancer Features",
        category: "trait",
        description:
          "A caster who blends arcane and divine magic through the power of ley lines. Spell versatility from 1st level: he may prepare and cast spells using either his arcane or divine spell slots, up to a spell level equal to his spell versatility score (rising from 0-equivalent at 1st level to 9 at 10th, per Table 2-11), and his spells are not subject to arcane spell failure from armor. Drift: a growing list of terrain-linked changes chosen from the book's drift list (drift 1 at 1st and 2nd levels, drift 2 at 3rd, drift 3 at 5th, drift 4 at 7th, drift 5 at 9th), and ley lines (+1 caster level in a chosen terrain at 2nd, +2 at 6th, +3 at 10th). Spellcasting advances +1 level of an existing class at every level. (The printed class-skill list includes Scry, a 3.0 skill removed in the 3.5 revision; it is kept here as printed.)",
        source: `${CH2} — Geomancer (pp. 41–45)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "holy-liberator",
    name: "Holy Liberator",
    ruleset: "core",
    source: `${CH2} — Holy Liberator (p. 45)`,
    sourceUrl: CD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Knowledge (religion)", "Profession", "Ride", "Sense Motive"],
    prerequisites: [
      "Alignment: Chaotic good",
      "Base Attack Bonus: +5",
      "Skills: Diplomacy 5 ranks, Sense Motive 5 ranks",
    ],
    features: [
      {
        key: "holy-liberator-features",
        name: "Holy Liberator Features",
        category: "trait",
        description:
          "A celestial champion of freedom. Casts divine spells from the holy liberator spell list with his own spells-per-day progression (Table 2-12, spells of 1st-4th level, Charisma-based), beginning with 0 spells per day at 1st level (bonus spells only). Aura of good, detect evil, and smite evil 1/day at 1st (2/day at 5th, 3/day at 9th); remove fatigue at 2nd; aura of resolve at 3rd; break enchantment 1/week and divine grace at 4th (2/week at 8th); and a celestial companion at 6th.",
        source: `${CH2} — Holy Liberator (pp. 45–48)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "hospitaler",
    name: "Hospitaler",
    ruleset: "core",
    source: `${CH2} — Hospitaler (p. 48)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Knowledge (religion)", "Profession", "Ride"],
    prerequisites: [
      "Alignment: Any nonchaotic",
      "Base Attack Bonus: +5",
      "Skills: Handle Animal 5 ranks, Ride 5 ranks",
      "Feats: Mounted Combat, Ride-By Attack",
      "Spells: Able to cast 1st-level divine spells",
    ],
    features: [
      {
        key: "hospitaler-features",
        name: "Hospitaler Features",
        category: "trait",
        description:
          "A knight of a religious order sworn to poverty, obedience, and defense of those in her care: a bonus feat and lay on hands at 1st level (bonus feats also at 5th and 9th), remove disease 1/week at 3rd (2/week at 7th). Spellcasting advances +1 level of an existing divine spellcasting class at levels 2, 3, 4, 6, 7, 8, and 10. Once a hospitaler has turned off the path, she may never return (see the code of conduct in the class text).",
        source: `${CH2} — Hospitaler (pp. 48–50)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "pious-templar",
    name: "Pious Templar",
    ruleset: "core",
    source: `${CH2} — Pious Templar (p. 50)`,
    sourceUrl: CD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Climb", "Concentration", "Craft", "Heal", "Jump", "Knowledge (religion)", "Profession", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Knowledge (religion) 4 ranks",
      "Feats: True Believer (new feat, Chapter 3 of this book), Weapon Focus (with her deity's favored weapon)",
    ],
    features: [
      {
        key: "pious-templar-features",
        name: "Pious Templar Features",
        category: "trait",
        description:
          "Sworn defender of a temple site. Casts divine spells with her own spells-per-day progression (Table 2-14, spells of 1st-4th level, Wisdom-based; paladin-like, from the cleric spell list as described in the class text). Mettle at 1st (shake off partial Fortitude/Will effects); smite 1/day at 2nd (2/day at 6th, 3/day at 10th); damage reduction 1/— and Weapon Specialization with the deity's favored weapon at 3rd (damage reduction rises to 2/— at 7th); and a bonus feat at 4th and 8th.",
        source: `${CH2} — Pious Templar (pp. 50–52)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "radiant-servant-of-pelor",
    name: "Radiant Servant of Pelor",
    ruleset: "core",
    source: `${CH2} — Radiant Servant of Pelor (p. 52)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Neutral good",
      "Base Save Bonus: Will +5",
      "Skills: Heal 5 ranks, Knowledge (religion) 9 ranks",
      "Feats: Extra Turning",
      "Spells: Able to cast 1st-level divine spells and have access to the Sun domain",
      "Special: Patron deity Pelor",
    ],
    features: [
      {
        key: "radiant-servant-of-pelor-features",
        name: "Radiant Servant of Pelor Features",
        category: "trait",
        description:
          "A cleric of the sun god devoted to healing and destroying undead: turn undead (levels stack), extra greater turning, and radiance (a shining aura that increases the level of light spells) at 1st level; divine health and empower healing at 2nd; aura of warding at 3rd; a bonus domain (Glory or Purification) at 5th; maximize healing at 6th; positive energy burst at 8th; and supreme healing at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH2} — Radiant Servant of Pelor (pp. 52–54)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "rainbow-servant",
    name: "Rainbow Servant",
    ruleset: "core",
    source: `${CH2} — Rainbow Servant (p. 54)`,
    sourceUrl: CD_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Any nonevil and nonchaotic",
      "Skills: Knowledge (arcana) 4 ranks",
      "Spells: Able to cast 3rd-level arcane spells",
      "Special: Must find the hidden jungle temples of the couatls",
    ],
    features: [
      {
        key: "rainbow-servant-features",
        name: "Rainbow Servant Features",
        category: "trait",
        description:
          "A servant of the couatls: detect evil and the Good domain (extra domain) at 1st level; grow wings at 4th, with the Air domain; detect chaos and the Law domain at 7th; and at 10th, cleric spell access (learn and cast spells from the cleric list as divine spells) and detect thoughts. The printed progression table grants +1 level of arcane spellcasting only at levels 2, 3, 5, 6, 8, and 9 — not at 1st, 4th, 7th, or 10th — and is kept as printed.",
        source: `${CH2} — Rainbow Servant (pp. 54–56)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "sacred-exorcist",
    name: "Sacred Exorcist",
    ruleset: "core",
    source: `${CH2} — Sacred Exorcist (p. 56)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Knowledge (the planes) 10 ranks, Knowledge (religion) 7 ranks",
      "Spells: Able to cast dismissal or dispel evil",
      "Special: Adopting this prestige class requires the sanction of a church or order that ordains sacred exorcists",
    ],
    features: [
      {
        key: "sacred-exorcist-features",
        name: "Sacred Exorcist Features",
        category: "trait",
        description:
          "A specialist in driving out possessing entities: exorcism and turn undead at 1st level (levels stack for turning), detect evil and resist possession at 2nd, chosen foe +1 at 3rd (a bonus against a chosen type of evil outsider, rising to +2 at 6th and +3 at 9th), dispel evil 1/week at 4th (2/week at 7th, 3/week at 10th), consecrated presence at 5th (her presence negates desecrate and functions as consecrate), and holy aura 1/day at 8th. Spellcasting advances +1 level of an existing spellcasting class at every level.",
        source: `${CH2} — Sacred Exorcist (pp. 56–59)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "sacred-fist",
    name: "Sacred Fist",
    ruleset: "core",
    source: `${CH2} — Sacred Fist (p. 59)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Balance", "Concentration", "Escape Artist", "Heal", "Jump", "Profession", "Spellcraft", "Tumble"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Combat Casting, Combat Reflexes, Improved Unarmed Strike, Stunning Fist",
      "Spells: Able to cast 1st-level divine spells",
    ],
    features: [
      {
        key: "sacred-fist-features",
        name: "Sacred Fist Features",
        category: "trait",
        description:
          "An ascetic holy warrior who has forsworn weapons and shields (see the code of conduct in the class text): unarmed damage, AC bonus, and unarmored speed bonus as a monk of his sacred fist level (Table 2-18: AC bonus rising to +3, speed bonus to +30 ft.), fast movement from 3rd, sacred flames 1/day at 4th (hands and feet wreathed in fire adding class level + Wisdom modifier damage; 2/day at 8th), blindsense 10 ft. at 6th, and inner armor at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level except 4th and 8th, as printed.",
        source: `${CH2} — Sacred Fist (pp. 59–61)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "seeker-of-the-misty-isle",
    name: "Seeker of the Misty Isle",
    ruleset: "core",
    source: `${CH2} — Seeker of the Misty Isle (p. 61)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Hide", "Jump", "Knowledge (geography)", "Knowledge (religion)", "Listen", "Move Silently", "Ride", "Speak Language", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Skills: Knowledge (religion) 4 ranks, Survival 8 ranks",
      "Spells: Able to cast 2nd-level divine spells",
      "Special: Must be inducted into the order by another member",
    ],
    features: [
      {
        key: "seeker-of-the-misty-isle-features",
        name: "Seeker of the Misty Isle Features",
        category: "trait",
        description:
          "An elven seeker hunting the lost Misty Isle: the Travel domain (extra domain) at 1st level, swiftfooted at 4th, Corellon's perception and surefooted at 5th, find the path at 6th, the Magic domain (extra domain) at 7th, arcane sight at 9th, and discern location at 10th. Spellcasting advances +1 level of an existing spellcasting class at every level except 5th and 10th, as printed.",
        source: `${CH2} — Seeker of the Misty Isle (pp. 61–63)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "shining-blade-of-heironeous",
    name: "Shining Blade of Heironeous",
    ruleset: "core",
    source: `${CH2} — Shining Blade of Heironeous (p. 63)`,
    sourceUrl: CD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +7",
      "Base Save Bonus: Will +3",
      "Skills: Knowledge (religion) 7 ranks",
      "Spells: Able to cast 1st-level divine spells",
      "Special: Must have Heironeous as patron deity",
    ],
    features: [
      {
        key: "shining-blade-of-heironeous-features",
        name: "Shining Blade of Heironeous Features",
        category: "trait",
        description:
          "A knight whose blade carries Heironeous's lightning: as a standard action he can make a weapon he holds a shock weapon (2/day at 1st level, 3/day at 3rd); from 5th level he can instead make it a holy weapon (4/day, then 5/day at 7th); and from 9th level he can make it a brilliant energy weapon (6/day). Uses overlap but a weapon cannot be made doubly holy or doubly shocking, and the effect ends if he is disarmed or gives the weapon away. Spellcasting advances +1 level of an existing divine spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th).",
        source: `${CH2} — Shining Blade of Heironeous (pp. 63–65)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "stormlord",
    name: "Stormlord",
    ruleset: "core",
    source: `${CH2} — Stormlord (p. 65)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Disguise", "Gather Information", "Intimidate", "Knowledge (nature)", "Knowledge (religion)", "Survival", "Swim"],
    prerequisites: [
      "Base Save Bonus: Fort +4",
      "Feats: Endurance, Great Fortitude, Weapon Focus (any spear or javelin)",
      "Spells: Able to cast 3rd-level divine spells",
      "Patron: Talos",
    ],
    features: [
      {
        key: "stormlord-features",
        name: "Stormlord Features",
        category: "trait",
        description:
          "A priest of Talos wreathed in storms: enhanced javelins +1 and resistance to electricity 5 at 1st level; shock weapon at 2nd (any spear or javelin he uses deals +1d6 electricity damage); storm walk at 3rd; resistance to electricity 10 at 4th; thundering weapon at 5th; storm ride and enhanced javelins +2 at 6th; resistance to electricity 15 at 7th; shocking burst weapon at 8th; immunity to electricity and enhanced javelins +3 at 9th; and storm of elemental fury 1/day at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH2} — Stormlord (pp. 65–67)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "temple-raider-of-oliddammara",
    name: "Temple Raider of Olidammara",
    ruleset: "core",
    source: `${CH2} — Temple Raider of Olidammara (p. 67)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Appraise", "Climb", "Craft", "Decipher Script", "Disable Device", "Hide", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock", "Search", "Spot", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Alignment: Any chaotic",
      "Base Attack Bonus: +5",
      "Skills: Disable Device 4 ranks, Knowledge (religion) 1 rank, Open Lock 4 ranks, Search 8 ranks",
      "Special: The character must worship Olidammara and be invited to join the ranks of the temple raiders by at least three current members of the prestige class",
    ],
    features: [
      {
        key: "temple-raider-of-oliddammara-features",
        name: "Temple Raider of Olidammara Features",
        category: "trait",
        description:
          "An elite thief-priest of the Laughing Rogue. Casts divine spells (granted by Olidammara) with his own spells-per-day progression (Table 2-22, spells of 1st-4th level, Wisdom-based). Trapfinding and trap sense +1 at 1st level (trap sense rises to +2 at 4th, +3 at 7th, +4 at 10th); sneak attack +1d6 at 2nd (stacking with other sources, +2d6 at 5th, +3d6 at 8th); uncanny dodge at 3rd; improved uncanny dodge at 6th; skill mastery at 9th; and the Luck domain at 10th.",
        source: `${CH2} — Temple Raider of Olidammara (pp. 67–69)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "ur-priest",
    name: "Ur-Priest",
    ruleset: "core",
    source: `${CH2} — Ur-Priest (p. 69)`,
    sourceUrl: CD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Save Bonuses: Fort +3, Will +3",
      "Skills: Bluff 6 ranks, Knowledge (arcana) 5 ranks, Knowledge (the planes) 5 ranks, Knowledge (religion) 8 ranks, Spellcraft 8 ranks",
      "Feats: Iron Will, Spell Focus (evil)",
      "Special: Must forsake all divine worship and connection to any deity (see the class text)",
    ],
    features: [
      {
        key: "ur-priest-features",
        name: "Ur-Priest Features",
        category: "trait",
        description:
          "A blasphemer who steals spell power from the gods rather than praying for it. Casts divine spells from the cleric spell list (no domains, no spontaneous cure/inflict) with his own accelerated spells-per-day progression (Table 2-23, spells of 0-9th level reached by 10th level; Wisdom-based; caster level equals ur-priest level plus half his levels in other spellcasting classes). Rebuke undead at 2nd; divine spell resistance 15 at 4th (20 at 8th); siphon spell power at 6th (sacrifice a prepared spell or slot to use a lower-level spell from another's repertoire, per the class text); and steal spell-like ability at 10th.",
        source: `${CH2} — Ur-Priest (pp. 69–71)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "void-disciple",
    name: "Void Disciple",
    ruleset: "core",
    source: `${CH2} — Void Disciple (p. 71)`,
    sourceUrl: CD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (all skills, taken individually)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any neutral",
      "Skills: Spellcraft 10 ranks",
      "Feats: Heighten Spell, Spell Penetration",
      "Spells: Able to cast 3rd-level arcane or divine spells",
    ],
    features: [
      {
        key: "void-disciple-features",
        name: "Void Disciple Features",
        category: "trait",
        description:
          "A master of the void between the elements. Sense void: extend her consciousness to perceive a distant area or creature with her physical senses (1/day at 1st level, 2/day at 3rd; magical senses 3/day at 5th; 4/day at 7th; empathic senses 5/day at 9th), with a Spellcraft check set by distance rather than familiarity. Moment of clarity 2/day at 4th (grant an ally — or herself — a surge of clarity; 3/day at 8th) and altering the course at 7th. In the book this is a thirteen-level class; levels 1-10 are recorded here per this dataset's level-cap convention — levels 11-13 add sense void 6/day, void suppression, and further specials (see Table 2-24). Spellcasting advances +1 level of an existing spellcasting class at levels 2, 4, 5, 6, 8, and 10 (within the recorded levels), as printed.",
        source: `${CH2} — Void Disciple (pp. 71–74)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
  {
    id: "warpriest",
    name: "Warpriest",
    ruleset: "core",
    source: `${CH2} — Warpriest (p. 74)`,
    sourceUrl: CD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Knowledge (history)", "Ride", "Sense Motive", "Spellcraft", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Diplomacy 8 ranks, Sense Motive 5 ranks",
      "Feats: Combat Casting",
      "Spells: Able to cast at least one divine spell from one of the following domains' spell lists: Destruction, Protection, Strength, or War",
    ],
    features: [
      {
        key: "warpriest-features",
        name: "Warpriest Features",
        category: "trait",
        description:
          "A battlefield leader-priest: a bonus domain, rally, and turn or rebuke undead (as his deity allows) at 1st level; inflame +2 at 2nd (a morale bonus to allies, rising to +4 at 4th, +6 at 6th, and +8 at 10th); mass cure light wounds at 3rd; fear aura at 5th; heroes' feast at 6th; haste at 7th; mass heal at 9th; and implacable foe at 10th. Spellcasting advances +1 level of an existing divine spellcasting class at even levels (2nd, 4th, 6th, 8th, 10th). (The book's list of tables prints this class's table as a second \"Table 2-24\"; it is Table 2-25 in the chapter's sequence.)",
        source: `${CH2} — Warpriest (pp. 74–76)`,
        sourceUrl: CD_PATH,
      },
    ],
  },
];
