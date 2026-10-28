/**
 * Core Books Audit (2026-10-28): DMG prestige classes missing from the
 * recovered core data. The recovered src/data/core/prestige-classes.ts
 * holds 8 of the 15 DMG prestige classes; these are the other 7, taken
 * from the SRD (the practical completeness checklist for the DMG).
 * Same conventions as the recovered file: free-text prerequisites,
 * progression rows capped at the class's maximum level, and one
 * summary features entry per class. Blackguard's own divine spell
 * list and spells/day are carried in its features summary because the
 * app models prestige-class spellcasting advancement only as text.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const U = "https://www.d20srd.org/srd/prestigeClasses/";

export const CORE_AUDIT_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arcane-archer",
    name: "Arcane Archer",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Arcane Archer",
    sourceUrl: `${U}arcaneArcher.htm`,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Craft", "Hide", "Listen", "Move Silently", "Ride", "Spot", "Survival", "Use Rope"],
    prerequisites: [
      "Race: Elf or half-elf",
      "Base Attack Bonus: +6",
      "Feats: Point Blank Shot, Precise Shot, Weapon Focus (longbow or shortbow)",
      "Spells: Able to cast 1st-level arcane spells",
    ],
    features: [
      {
        key: "arcane-archer-features",
        name: "Arcane Archer Features",
        description:
          "Proficient with all simple and martial weapons, light and medium armor, and shields. Every nonmagical arrow fired gains an enhancement bonus: +1 at 1st level, rising to +2 at 3rd, +3 at 5th, +4 at 7th, and +5 at 9th (non-stacking with magical arrows). Imbue Arrow (2nd): place an area spell on an arrow and fire it, using the arrow's range and centering the spell where the arrow lands. Seeker Arrow (4th, 1/day): an arrow unerringly flies around obstacles to a known target. Phase Arrow (6th, 1/day): an arrow passes through nonmagical material to its target. Hail of Arrows (8th, 1/day): fire one arrow at each of several targets (max = class level) at full attack bonus. Arrow of Death (10th): craft an arrow that forces a DC 20 Fortitude save or slays the target.",
        category: "trait",
        source: "d20SRD — Prestige Classes: Arcane Archer",
        sourceUrl: `${U}arcaneArcher.htm`,
      },
    ],
  },
  {
    id: "blackguard",
    name: "Blackguard",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Blackguard",
    sourceUrl: `${U}blackguard.htm`,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Hide", "Intimidate", "Knowledge (religion)", "Profession", "Ride"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +6",
      "Skills: Hide 5 ranks, Knowledge (religion) 2 ranks",
      "Feats: Cleave, Improved Sunder, Power Attack",
      "Special: Must have made peaceful contact with an evil outsider summoned by the character or by someone else",
    ],
    features: [
      {
        key: "blackguard-features",
        name: "Blackguard Features",
        description:
          "Proficient with all simple and martial weapons, all armor, and shields. Aura of Evil (power as a cleric of class level); Detect Good at will (spell-like); Poison Use (never risks poisoning oneself). Dark Blessing (2nd): Charisma bonus on all saving throws. Smite Good 1/day at 2nd level (2/day at 5th, 3/day at 10th). Command Undead (3rd) as a cleric of level minus 2; Aura of Despair (3rd): enemies within 10 ft. take -2 on all saving throws. Sneak Attack +1d6 at 4th level (+2d6 at 7th, +3d6 at 10th). Fiendish Servant (5th): a fiendish companion that grows with the blackguard. The blackguard casts divine spells (Wisdom-based, prepared like a cleric): spells/day by level — 1st: 0,1,1,1,1,1,2,2,2,2; 2nd: —,—,0,1,1,1,1,1,2,2; 3rd: —,—,—,—,0,1,1,1,1,2; 4th: —,—,—,—,—,—,0,1,1,1. Spell list — 1st: cause fear, corrupt weapon, cure light wounds, doom, inflict light wounds, magic weapon, summon monster I; 2nd: bull's strength, cure moderate wounds, darkness, death knell, eagle's splendor, inflict moderate wounds, shatter, summon monster II; 3rd: contagion, cure serious wounds, deeper darkness, inflict serious wounds, protection from energy, summon monster III; 4th: cure critical wounds, freedom of movement, inflict critical wounds, poison, summon monster IV (summon monster spells call evil creatures only). Fallen paladins who become blackguards gain extra abilities by exchanged paladin level (see the SRD entry).",
        category: "trait",
        source: "d20SRD — Prestige Classes: Blackguard",
        sourceUrl: `${U}blackguard.htm`,
      },
    ],
  },
  {
    id: "duelist",
    name: "Duelist",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Duelist",
    sourceUrl: `${U}duelist.htm`,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Balance", "Bluff", "Escape Artist", "Jump", "Listen", "Perform", "Sense Motive", "Spot", "Tumble"],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Perform 3 ranks, Tumble 5 ranks",
      "Feats: Dodge, Mobility, Weapon Finesse",
    ],
    features: [
      {
        key: "duelist-features",
        name: "Duelist Features",
        description:
          "Proficient with all simple and martial weapons, but no armor or shields. Canny Defense (1st): when unarmored and wielding a melee weapon, add Intelligence bonus (capped by duelist level) to AC. Improved Reaction +2 on initiative at 2nd level (+4 at 8th). Enhanced Mobility (3rd): +4 AC against attacks of opportunity from moving. Grace (4th): +2 competence bonus on Reflex saves. Precise Strike +1d6 damage at 5th level (+2d6 at 10th) with a light or one-handed piercing weapon, against creatures susceptible to critical hits. Acrobatic Charge (6th): charge across difficult terrain and around obstacles. Elaborate Parry (7th): when fighting defensively or in total defense, gain an extra +4 AC. Deflect Arrows (9th): as the feat, using a light or one-handed piercing weapon.",
        category: "trait",
        source: "d20SRD — Prestige Classes: Duelist",
        sourceUrl: `${U}duelist.htm`,
      },
    ],
  },
  {
    id: "dwarven-defender",
    name: "Dwarven Defender",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Dwarven Defender",
    sourceUrl: `${U}dwarvenDefender.htm`,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Craft", "Listen", "Sense Motive", "Spot"],
    prerequisites: [
      "Race: Dwarf",
      "Alignment: Any lawful",
      "Base Attack Bonus: +7",
      "Feats: Dodge, Endurance, Toughness",
    ],
    features: [
      {
        key: "dwarven-defender-features",
        name: "Dwarven Defender Features",
        description:
          "Proficient with all simple and martial weapons, all armor, and shields. Dodge bonus to AC by level: +1 at levels 1-3, +2 at 4-6, +3 at 7-9, +4 at 10th. Defensive Stance: 1/day at 1st level, +1 use/day every two levels after (2/day at 3rd, 3/day at 5th, 4/day at 7th, 5/day at 9th) — while standing in place, gain +2 Strength, +4 Constitution, a +2 resistance bonus on all saves, and a +4 dodge bonus to AC; the stance leaves the defender winded when it ends. Uncanny Dodge (2nd); Trap Sense +1 at 4th level (+2 at 8th); Damage Reduction 3/- at 6th level, improving to 6/- at 10th; Improved Uncanny Dodge (6th); Mobile Defense (8th): take one 5-foot step per round while in a defensive stance.",
        category: "trait",
        source: "d20SRD — Prestige Classes: Dwarven Defender",
        sourceUrl: `${U}dwarvenDefender.htm`,
      },
    ],
  },
  {
    id: "hierophant",
    name: "Hierophant",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Hierophant",
    sourceUrl: `${U}hierophant.htm`,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF.slice(0, 5), G.slice(0, 5), P.slice(0, 5), G.slice(0, 5)),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft"],
    prerequisites: [
      "Skills: Knowledge (religion) 15 ranks",
      "Feats: Any metamagic feat",
      "Spells: Able to cast 7th-level divine spells",
    ],
    features: [
      {
        key: "hierophant-features",
        name: "Hierophant Features",
        description:
          "No new weapon or armor proficiencies. Hierophant levels stack with the character's divine spellcasting class for caster level, but the class grants NO new spells per day or spells known. At each level the hierophant chooses one special ability: Blast Infidel (negative energy bursts harm non-worshippers of the hierophant's deity for extra damage); Divine Reach (deliver touch spells at 30 ft. range; 60 ft. if chosen twice); Faith Healing (healing spells on worshippers of the same deity are maximized); Gift of the Divine (transfer prepared spells to another divine caster; cleric levels only); Mastery of Energy (improved turning; cleric levels only); Metamagic Feat (any one metamagic feat, prerequisites permitting); Power of Nature (transfer spell slots to a druid's spontaneous summoning; druid levels only); Spell Power (+1 effective caster level for one spell's effects, stackable); Spell-Like Ability (give up a spell slot to use one of your spells as a spell-like ability twice per day).",
        category: "trait",
        source: "d20SRD — Prestige Classes: Hierophant",
        sourceUrl: `${U}hierophant.htm`,
      },
    ],
  },
  {
    id: "horizon-walker",
    name: "Horizon Walker",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Horizon Walker",
    sourceUrl: `${U}horizonWalker.htm`,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Balance", "Climb", "Diplomacy", "Handle Animal", "Hide", "Knowledge (geography)", "Listen", "Move Silently", "Profession", "Ride", "Speak Language", "Spot", "Survival"],
    prerequisites: [
      "Skills: Knowledge (geography) 8 ranks",
      "Feats: Endurance",
    ],
    features: [
      {
        key: "horizon-walker-features",
        name: "Horizon Walker Features",
        description:
          "No new weapon or armor proficiencies. Terrain Mastery: at each of levels 1-5 choose one terrain (Aquatic, Desert, Forest, Hills, Marsh, Mountains, Plains, or Underground) and gain its benefit — a +4 competence bonus on a terrain-appropriate skill (or an equivalent benefit such as immunity to fatigue in the desert) — plus a +1 insight bonus on attack and damage rolls against creatures of that terrain; the mastery bonuses apply everywhere, not only in that terrain. Planar Terrain Mastery: at each of levels 6-10 choose a planar terrain instead (or another regular terrain mastery): examples include Fiery (fire resistance 20), Cold (cold resistance 20), Weightless (fly in low gravity, ignoring harsh planar traits as printed), Shifting (dimension door as a spell-like ability once per 1d4 rounds), Aligned (ignore an aligned plane's alignment trait), and Cavernous (tremorsense 30 ft.).",
        category: "trait",
        source: "d20SRD — Prestige Classes: Horizon Walker",
        sourceUrl: `${U}horizonWalker.htm`,
      },
    ],
  },
  {
    id: "thaumaturgist",
    name: "Thaumaturgist",
    ruleset: "core",
    source: "d20SRD — Prestige Classes: Thaumaturgist",
    sourceUrl: `${U}thaumaturgist.htm`,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows([0, 1, 1, 2, 2], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], G.slice(0, 5)),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Feats: Spell Focus (conjuration)",
      "Spells: Able to cast lesser planar ally",
    ],
    features: [
      {
        key: "thaumaturgist-features",
        name: "Thaumaturgist Features",
        description:
          "No new weapon or armor proficiencies. Every level advances an existing spellcasting class (+1 level of existing spellcasting class for spells per day and caster level). Improved Ally (1st): when casting a planar ally spell, a successful Diplomacy check that makes the called creature helpful halves its fee, if the task is not against its nature and the ally shares an alignment aspect with the thaumaturgist. Augment Summoning (2nd): gain the Augment Summoning feat. Extended Summoning (3rd): all summoning spells are doubled in duration as if Extended, without a level change (stacks with the Extend Spell feat). Contingent Conjuration (4th): prepare one summoning or calling spell to trigger on a set condition, as the contingency spell. Planar Cohort (5th): use a planar ally spell to call a cohort (offering 1,000 gp per HD; cohort's HD and ECL capped by the thaumaturgist's level).",
        category: "trait",
        source: "d20SRD — Prestige Classes: Thaumaturgist",
        sourceUrl: `${U}thaumaturgist.htm`,
      },
    ],
  },
];
