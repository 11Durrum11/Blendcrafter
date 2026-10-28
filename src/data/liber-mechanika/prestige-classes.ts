import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Liber Mechanika (Privateer Press, 2005) prestige classes:
// Field Mechanik (book pp. 14–15), Ironhead (pp. 16–17),
// Preceptor of Cyriss (pp. 18–20), and Mechanist (pp. 20–22).
// All progression tables were verified against page images.
// Printed quirks, recorded as printed: the Mechanist's
// Table 1–6 base attack column reads +0, +1, +2, +2, +3 —
// neither the standard half nor three-quarter column; the
// Field Mechanik's class-skill list prints "Spot (Int)"
// (Spot is a Wisdom skill in 3.5); the Preceptor of Cyriss's
// requirements print "Knowledge (arcane) 8 ranks" for the
// skill recorded here as Knowledge (arcana). Short
// mechanical summaries in our own words, cited to
// book + page.
// Source PDF: /transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf

const LM = "Liber Mechanika";
const LM_PATH = "/transfer/DnD-3.5/103250213-Iron-Kingdoms-Liber-Mechanika-by-Azamor.pdf";
const FMK = `${LM} — Field Mechanik`;
const IHD = `${LM} — Ironhead`;
const POC = `${LM} — Preceptor of Cyriss`;
const MEC = `${LM} — Mechanist`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: LM_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const GOOD5 = [2, 3, 3, 4, 4];
const POOR5 = [0, 0, 1, 1, 1];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ5 = [0, 1, 2, 3, 3];
const FULL5 = [1, 2, 3, 4, 5];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
// Table 1–6 as printed (see the header note).
const MEC_BAB = [0, 1, 2, 2, 3];

export const LIBER_MECHANIKA_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "field-mechanik",
    name: "Field Mechanik",
    ruleset: "iron_kingdoms",
    source: `${FMK} (pp. 14–15)`,
    sourceUrl: LM_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ5, GOOD5, GOOD5, POOR5),
    classSkills: [
      "Climb", "Concentration", "Craft (mechanika)", "Craft (small arms)", "Craft (steam engine)",
      "Disable Device", "Jack Handling", "Knowledge (mechanika)", "Profession", "Spot",
    ],
    prerequisites: [
      "Skills: Profession (mechanik) 6 ranks",
      "Feat: Mechanikal Aptitude",
      "Special: must have the Demolish class ability",
    ],
    features: [
      f("Field Mechanik Proficiencies", "The field mechanik is proficient with all simple weapons and light armor, as well as with the rivet gun (see p. 53). Field mechaniks with arcane spell ability are still susceptible to spell failure when wearing armor and casting spells with a somatic component.", undefined, `${FMK} (p. 15)`),
      f("Combat Repair (Ex)", "At 1st level, and again at 3rd and 5th level, the field mechanik's combat repairs on warjacks and steamjacks grow stronger: combat repair is a full-round action requiring a DC 15 Craft (mechanika) check; if successful, the construct immediately gains temporary hit points (up to its current maximum) of +1d8 at 1st level, +2d8 at 3rd, and +3d8 at 5th. These hit points last for ten minutes for every field mechanik level the character has.", 1, `${FMK} (p. 15)`),
      f("Focused Mechanik (Ex)", "When making a Craft (mechanika) skill check, the field mechanik may take 10 even if stress and distractions would normally prevent him from doing so.", 2, `${FMK} (p. 15)`),
      f("Uncanny Dodge (Ex)", "Starting at 4th level, the field mechanik retains his Dexterity bonus to AC (if any) even if caught flat-footed, though he still loses it when immobilized. If he already has uncanny dodge from a different class, he automatically gains improved uncanny dodge (as per the rogue ability) instead.", 4, `${FMK} (p. 15)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "ironhead",
    name: "Ironhead",
    ruleset: "iron_kingdoms",
    source: `${IHD} (pp. 16–17)`,
    sourceUrl: LM_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL5, POOR5, GOOD5, GOOD5),
    classSkills: [
      "Appraise", "Craft (mechanika)", "Craft (steam engine)", "Disable Device", "Intimidate",
      "Jack Handling", "Knowledge (mechanika)", "Profession", "Search",
    ],
    prerequisites: [
      "Skills: Craft (mechanika) 8 ranks",
      "Feats: Craft Steam Armor, Exotic Armor Proficiency (Steam Armor)",
    ],
    features: [
      f("Ironhead Proficiencies", "The ironhead gains proficiency in martial weapons. (Table 1–4's special column calls the class's 1st-level mechanik feature simply \"mechanik\"; the feature text headings it as Mechanikal Adept.)", undefined, `${IHD} (p. 17)`),
      f("Battle Ready (Ex)", "At 1st level, an ironhead adds his ironhead class level to any Strength- or Dexterity-based skill rolls made while wearing his steam armor.", 1, `${IHD} (p. 17)`),
      f("Full Metal Arm (Ex)", "While wearing his armor, the ironhead gains the benefits of the Power Attack feat.", 1, `${IHD} (p. 17)`),
      f("Mechanikal Adept (Ex)", "From 1st level onward, the ironhead's class levels are treated as arcane mechanik levels when calculating his total fabrication score (for example, a 5th-level arcane mechanik/5th-level ironhead has the 20% fabrication score of a 10th-level arcane mechanik).", 1, `${IHD} (p. 17)`),
      f("Merge Iron (Ex)", "At 2nd level, and again at 4th level, the ironhead can add an equipment slot to his armor in any location that does not already have one (either shoulder, back, or torso). The added equipment slot does not reduce the armor's bonus hit points.", 2, `${IHD} (p. 17)`),
      f("Powerstrain", "At 2nd level, and again at 4th level, the ironhead learns one powerstrain ability, usable only when wearing steam armor as a full-round action; each use makes the armor suffer 1d8 points of damage, +2 points for each prior use of a powerstrain ability that day, and this damage ignores the armor's hardness. Powercharge (Ex): the armor's movement increases by 10 feet when charging. Mechanikal Smite (Ex): a declared melee strike that hits bestows an equipment bonus to damage equal to 5 + the ironhead's level; usable a number of times per day equal to his Intelligence modifier. Haul (Ex): a +5 circumstance bonus on Strength checks made while wearing the armor, lasting a number of rounds equal to his ironhead class level. Steam Warrior Stance (Ex): a +5 stability bonus to ability checks made to resist being bull rushed or tripped when standing on the ground, lasting a number of rounds equal to his Intelligence modifier.", 2, `${IHD} (p. 17)`),
      f("Power Tactic (Ex)", "At 3rd level, and again at 5th level, the ironhead learns any one of the following feats, but may only use them in combat while wearing his steam-powered armor: Great Cleave, Improved Bull Rush, Improved Overrun, Improved Shield Bash, or Improved Sunder.", 3, `${IHD} (p. 17)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "preceptor-of-cyriss",
    name: "Preceptor of Cyriss",
    ruleset: "iron_kingdoms",
    source: `${POC} (pp. 18–20)`,
    sourceUrl: LM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Craft (clockwork)", "Craft (mechanika)", "Craft (steam engine)",
      "Diplomacy", "Gather Information", "Knowledge (any)", "Listen", "Profession",
      "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Alignment: any lawful or true neutral",
      "Religion: Cyriss",
      "Skills: Knowledge (religion) 8 ranks, Knowledge (arcana) 8 ranks, Knowledge (astronomy) 8 ranks, Craft (any) 8 ranks, Gather Information 5 ranks",
      "Spells: must be able to cast divine or arcane spells",
    ],
    features: [
      f("Preceptor of Cyriss Proficiencies", "Preceptors of Cyriss gain no additional proficiency with weapons, armor, or shields.", undefined, `${POC} (p. 19)`),
      f("Spells per Day", "At each level, the preceptor of Cyriss gains new spells per day as if he had also gained a level in a divine or arcane spellcasting class to which he belonged before entering this prestige class, gaining no other benefits of that class except increased spellcasting level. A character with more than one divine spellcasting class must use the class that allows him access to spells from Cyriss.", 1, `${POC} (p. 19)`),
      f("Precept", "At 1st, 3rd, 5th, 7th, and 9th level, the preceptor gains a single precept ability chosen from the following. Mechanikal Mastery (Ex): a competence bonus equal to his preceptor of Cyriss level to identify, repair, and maintain mechanikal devices. Paragon's Expertise (Ex): a competence bonus equal to his preceptor level to a single specific Intelligence- or Wisdom-based skill; this ability may be taken multiple times, choosing a different skill each time. Divine Arcana (Ex): each time it is gained, an arcane-casting preceptor may learn two divine spells of a level he can currently cast from the domains of Cyriss instead of the normal two arcane spells gained for advancing a level (the spells are treated as arcane for him); a divine-casting preceptor may instead learn two arcane spells and add them to the spells he can gain through prayer (treated as divine for him, and such spells may never be faithcast); this ability may be taken multiple times. Body Control (Su): once per day, with a DC 25 Concentration check, either gain a bonus to a Fortitude saving throw equal to his preceptor class level lasting a number of rounds equal to his character level, or convert 2d4 times his preceptor class level in lethal damage he currently has to nonlethal damage.", 1, `${POC} (pp. 19–20)`),
      f("Enigma", "At 2nd, 4th, 6th, 8th, and 10th level, the preceptor gains an enigma chosen from the following. Astrometry (Su): three times per day, apply one chosen effect to a spell at the time of casting — Laris' Bane (ranged and touch attack spells have their saving throw DCs increased by +4), Calder's Boon (healing spells heal an additional +4 points of damage, which do not count toward the pain of healing; charm spells gain a +4 bonus to their saving throw DCs), Lucant's Aegis (spells reducing damage from fire or cold have their durations and effects doubled), Wanderer's Shadow (the spell succeeds regardless of arcane spell failure chance and gains the benefits of the Silent Spell and Still Spell feats), or Wurm's Wroth (ranged and touch attack spells are cast at one level higher than the caster's effective spellcasting level); Astrometry may be taken multiple times, choosing a different effect each time. Congress of Cyriss (Sp): use the spell summon servitor (p. 88) a number of times per day equal to half his preceptor of Cyriss level, and control servitors as a cleric of half his preceptor level. Biometry (Su): use his body control abilities up to three times per day on anyone he touches with a DC 25 Concentration check made first, or gain a +20 competence bonus on Heal checks without having to make a Concentration check. Cyriss-Tech (Ex): the preceptor gains the Craft Cyriss-Tech feat.", 2, `${POC} (pp. 20–21)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "mechanist",
    name: "Mechanist",
    ruleset: "iron_kingdoms",
    source: `${MEC} (pp. 20–22)`,
    sourceUrl: LM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(MEC_BAB, POOR5, POOR5, GOOD5),
    classSkills: [
      "Appraise", "Concentration", "Craft (clockwork)", "Craft (mechanika)", "Jack Handling",
      "Knowledge (mechanika)", "Listen", "Profession", "Search", "Spot",
    ],
    prerequisites: [
      "Skills: Craft (mechanika) 8 ranks",
      "Feats: Craft Mechanikal Construct, Craft Cerebral Matrix",
      "Special: must have a mechanikal familiar",
    ],
    features: [
      f("Mechanist Proficiencies and Spells per Day", "The mechanist gains no additional weapon or armor proficiencies. Each level, the mechanist gains new spells per day as if he had also gained a level in an arcane spellcasting class to which he belonged before entering this prestige class, gaining no other benefits of that class except increased spellcasting level; a character with more than one arcane spellcasting class chooses which class provides his spells per day.", undefined, `${MEC} (p. 22)`),
      f("Bond Servitor (Su)", "The mechanist can bond mechanikal servitors as familiars in addition to the mechanikal familiars he has — one additional servitor at 1st level, two at 3rd, and three at 5th — building or bonding another servitor in the same fashion as a mechanikal familiar, without any associated cost for the actual forming of the bond. A bonded servitor immediately gains the benefits of a mechanikal familiar but at reduced effect: for determining the benefits each servitor receives, the mechanist's effective level drops by 1 for each bonded servitor he has. Bonded servitors impose no negative effect on the mechanist when they are destroyed or dismissed.", 1, `${MEC} (p. 22)`),
      f("Familiar Advancement", "The mechanist's levels are considered caster levels for determining the benefits that mechanikal familiars or servitors bonded to him receive. (Table 1–6 lists familiar advancement with the 1st-level specials.)", 1, `${MEC} (p. 22)`),
      f("Skill Transference (Su)", "As long as the mechanist can witness the actions of a bonded servitor, he may attempt to use a skill through it (for instance, a Disable Device check at a distance). Such actions always receive a −4 penalty to skill checks, and the servitor must have at least one functioning manipulator and the right sort of tools for the task when performing skills requiring them. Bonded servitors may be used to perform the following skill checks with skill transference: Disable Device, Heal, Hide, Move Silently, Open Lock, and Use Rope.", 2, `${MEC} (p. 22)`),
      f("Omnipresence (Su)", "The mechanist may project his awareness to the location of one of his bonded servitors, seeing and hearing everything occurring within a 20-foot area around it, for a number of minutes equal to his Intelligence bonus + his mechanist level; the servitor must still be within 1 mile of him. While using omnipresence, the mechanist suffers phantom damage if the servitor he is viewing suffers damage: nonlethal damage equal to half the damage the servitor suffers when struck. If a bonded servitor is destroyed while he is using omnipresence through it, he must make a DC 25 Will saving throw or suffer the entire amount of damage done to the servitor as nonlethal damage and immediately be knocked unconscious for 1d6 minutes. Disconnecting from a servitor or switching from one servitor to another is a full-round action and requires a DC 20 Concentration skill check.", 4, `${MEC} (p. 22)`),
    ].map((x) => x as FeatureDefinition),
  },
];
