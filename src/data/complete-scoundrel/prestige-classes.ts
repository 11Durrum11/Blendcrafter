/**
 * Complete Scoundrel prestige classes: all thirteen from Chapter 2 of
 * Complete Scoundrel (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf
 * Progression tables are the book's printed tables (Tables 2-2…2-15).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. Spellcasting advancement is stated in
 * each class's feature summary, following the house pattern.
 * The book presents no base classes, no races, and no templates.
 * Its 42 skill tricks (Chapter 3) are a separate system bought with
 * skill points and are not modeled in this app.
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
const G5 = [2, 3, 3, 4, 4];
const P5 = [0, 0, 1, 1, 1];
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const G3 = [2, 3, 3];
const P3 = [0, 0, 1];
const FULL3 = [1, 2, 3];
const TQ3 = [0, 1, 2];
const HALF3 = [0, 1, 1];

const CS = "Complete Scoundrel";
const CS_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Scoundrel.pdf";
const CH2 = `${CS} — Chapter 2: Prestige Classes`;

export const COMPLETE_SCOUNDREL_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "avenging-executioner",
    name: "Avenging Executioner",
    ruleset: "core",
    source: `${CH2} — Avenging Executioner (p. 24)`,
    sourceUrl: CS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ5, P5, G5, G5),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Disguise", "Escape Artist", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Profession", "Spot", "Use Rope"],
    prerequisites: [
      "Alignment: Any nongood",
      "Base Attack Bonus: +5",
      "Skills: Hide 4 ranks, Intimidate 6 ranks, Move Silently 4 ranks",
      "Special: Must have been tragically wronged in some manner",
    ],
    features: [
      {
        key: "avenging-executioner-features",
        name: "Avenging Executioner Features",
        category: "trait",
        description:
          "A tragically wronged victim turned relentless stalker, wielding dread as deftly as a blade. 1st: bloody blade (when you deal sudden strike damage with a melee weapon, the target and all opponents within 30 feet who can see it are shaken for rounds equal to your class level; Will negates, DC 10 + class level + Cha modifier; creatures with more HD than your character level are unaffected) and sudden strike +1d6 (+2d6 at 3rd, +3d6 at 5th). 2nd: rapid intimidation (demoralize as a move action). 4th: dread blade (bloody blade's fear deepens). 5th: bloody murder (your sudden strike fear escalates against the already shaken).",
        source: `${CH2} — Avenging Executioner (pp. 24–27)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "battle-trickster",
    name: "Battle Trickster",
    ruleset: "core",
    source: `${CH2} — Battle Trickster (p. 28)`,
    sourceUrl: CS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL3, G3, P3, P3),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Handle Animal", "Jump", "Profession", "Ride", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Any three skills at 6 ranks each",
      "Skill Tricks: Any two",
    ],
    features: [
      {
        key: "battle-trickster-features",
        name: "Battle Trickster Features",
        category: "trait",
        description:
          "A front-line fighter who folds skill tricks into ordinary combat. 1st: bonus trick (a bonus skill trick you qualify for, free and not counting against your limit; another at 3rd). 2nd: bonus feat (from the fighter bonus feat list). 3rd: tricky fighting (in any round when you perform a skill trick, +1 competence bonus on your next attack roll that round). Skill tricks themselves are a separate system and are not modeled in this app.",
        source: `${CH2} — Battle Trickster (pp. 28–30)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "cloaked-dancer",
    name: "Cloaked Dancer",
    ruleset: "core",
    source: `${CH2} — Cloaked Dancer (p. 31)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, P5, G5, P5),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Disguise", "Escape Artist", "Gather Information", "Jump", "Perform", "Profession", "Sense Motive", "Sleight of Hand", "Speak Language", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Skills: Hide 5 ranks, Perform (dance) 10 ranks, Sleight of Hand 5 ranks",
    ],
    features: [
      {
        key: "cloaked-dancer-features",
        name: "Cloaked Dancer Features",
        category: "trait",
        description:
          "A performer-assassin whose dance transfixes enemies. Spellcasting advances +1 level of an existing arcane spellcasting class at 2nd and 4th level. 1st: enchanting dance — beguiling dance (once per day per class level, dance to daze enemies within 30 feet who can see you, Will negates at DC 10 + class level + Cha modifier, and improve their attitude one step while you maintain the dance; requires Perform [dance] 10 ranks, light armor or none and a light load). 2nd: surprise strike +1d6 (+2d6 at 4th). 3rd: enchanting dance — wearying dance (fatigue; Perform [dance] 12 ranks). 5th: enchanting dance — frightful dance (panic).",
        source: `${CH2} — Cloaked Dancer (pp. 31–33)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "combat-trapsmith",
    name: "Combat Trapsmith",
    ruleset: "core",
    source: `${CH2} — Combat Trapsmith (p. 34)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ5, G5, G5, P5),
    classSkills: ["Appraise", "Balance", "Climb", "Concentration", "Craft", "Disable Device", "Escape Artist", "Hide", "Jump", "Knowledge (architecture and engineering)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Spot", "Tumble", "Use Rope"],
    prerequisites: [
      "Skills: Craft (trapmaking) 8 ranks, Disable Device 6 ranks, Search 6 ranks",
      "Special: Trapfinding",
    ],
    features: [
      {
        key: "combat-trapsmith-features",
        name: "Combat Trapsmith Features",
        category: "trait",
        description:
          "A trapmaker who installs temporary battlefield traps in seconds. 1st: combat trapping (build combat traps from the book's Table 2-6 as a full-round action with a trapsmith's kit; 2 traps known at 1st level, +1 per level to a maximum of 6; each functions once and lasts 1 hour; save DC 10 + class level + Int modifier, search/disable DC 20 + class level + Int modifier) and trap sense +1 (+2 at 3rd, +3 at 5th). 2nd: Skill Focus (Craft [trapmaking]) as a bonus feat. 4th: improvised materials (build combat traps from scavenged materials without the kit). 5th: expert trapsetter.",
        source: `${CH2} — Combat Trapsmith (pp. 34–37)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "fortunes-friend",
    name: "Fortune's Friend",
    ruleset: "core",
    source: `${CH2} — Fortune's Friend (p. 38)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref"],
    progression: rows(HALF5, P5, G5, P5),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Hide", "Jump", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Skills: Any one skill at 8 ranks",
      "Feats: Any luck feat",
    ],
    features: [
      {
        key: "fortunes-friend-features",
        name: "Fortune's Friend Features",
        category: "trait",
        description:
          "A carefree survivor who trusts entirely to cultivated luck. Spellcasting advances +1 level of an existing spellcasting class at 2nd and 4th level. 1st: easy luck (the swift/immediate action to use a luck feat doesn't count against your one swift action per turn), extra fortune (+1 luck reroll per day; again at 3rd and 5th), and more luck than skill (once per day as a swift action, add your class level as a luck bonus on all skill checks until your next turn). 2nd: bonus luck feat (another at 4th). 3rd: fortune's favorite (once per day as an immediate action, add your class level as a luck bonus on all saving throws until your next turn). 5th: lucky strike (once per day as a swift action, add your class level as a luck bonus on all attack rolls until your next turn).",
        source: `${CH2} — Fortune's Friend (pp. 38–39)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "gray-guard",
    name: "Gray Guard",
    ruleset: "core",
    source: `${CH2} — Gray Guard (p. 40)`,
    sourceUrl: CS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Bluff", "Concentration", "Disguise", "Forgery", "Handle Animal", "Heal", "Intimidate", "Knowledge (local)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Ride", "Sense Motive"],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Knowledge (religion) 8 ranks, Sense Motive 4 ranks",
      "Special: Lay on hands class feature; must adhere to a code of conduct that prevents the character from performing evil acts",
    ],
    features: [
      {
        key: "gray-guard-features",
        name: "Gray Guard Features",
        category: "trait",
        description:
          "A hardened paladin of a secretive order, granted measured freedom to do grim work. Divine spellcasting advances +1 level at each even-numbered level. 1st: sacrament of trust (code violations committed for your faith are a lesser infraction; atonement cast on your behalf costs the caster no XP) and lay on hands (as the paladin feature, stacking). 2nd: debilitating touch (channel lay on hands into a touch that sickens for 5 rounds, Fortitude negates, costing 5 points of healing). 3rd: smite evil 1/day (stacking for damage; 2/day at 8th). 4th: justice blade (smite chaos instead of evil). 5th: devastating touch (spend lay on hands points on a touch to deal that much damage; nonevil targets may Will-save to halve). 7th: unbound justice (half your class level as a bonus on Bluff, Disguise, and Intimidate). 9th: justice blade (all alignments). 10th: sacrament of the true faith (never lose class abilities for code violations in a just cause; gross abuse can still mean expulsion).",
        source: `${CH2} — Gray Guard (pp. 40–44)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "magical-trickster",
    name: "Magical Trickster",
    ruleset: "core",
    source: `${CH2} — Magical Trickster (p. 45)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF3, P3, P3, G3),
    classSkills: ["Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Profession", "Spellcraft", "Tumble", "Use Rope"],
    prerequisites: [
      "Feats: Any one metamagic feat",
      "Spellcasting: Ability to cast 3rd-level spells",
      "Skill Tricks: Any two",
    ],
    features: [
      {
        key: "magical-trickster-features",
        name: "Magical Trickster Features",
        category: "trait",
        description:
          "A caster who fuels an unmatched repertoire of skill tricks with spell power. Spellcasting advances +1 level of an existing spellcasting class at 2nd and 3rd level. 1st: bonus trick (a bonus skill trick, free and not counting against your limit; another at 3rd) and spontaneous trickster (channel spell slots to use skill tricks more than once per encounter). 2nd: bonus metamagic feat. 3rd: metamagic trick and tricky magic (spellcraft and tricks reinforce one another). Skill tricks themselves are a separate system and are not modeled in this app.",
        source: `${CH2} — Magical Trickster (pp. 45–47)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "malconvoker",
    name: "Malconvoker",
    ruleset: "core",
    source: `${CH2} — Malconvoker (p. 48)`,
    sourceUrl: CS_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(
      [0, 1, 1, 2, 2, 3, 3, 4, 4],
      [0, 0, 1, 1, 1, 2, 2, 2, 3],
      [0, 0, 1, 1, 1, 2, 2, 2, 3],
      [2, 3, 3, 4, 4, 5, 5, 6, 6],
    ),
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: Any non-evil",
      "Skills: Bluff 4 ranks, Knowledge (the planes) 4 ranks",
      "Languages: Celestial, Infernal",
      "Feats: Augment Summoning, Spell Focus (conjuration)",
      "Special: Ability to cast summon monster III",
    ],
    features: [
      {
        key: "malconvoker-features",
        name: "Malconvoker Features",
        category: "trait",
        description:
          "A non-evil conjurer of the Vital Pact who tricks fiends into serving good. Spellcasting advances +1 level of an existing spellcasting class at every level beyond 1st. 1st: deceptive summons (when summoning an evil creature, a free-action Bluff check opposed by its Sense Motive doubles the duration as Extend Spell — failing by 5 or more frees it, hostile; from 4th level success also grants +2 damage and 2 hp/HD, and from 7th level +2 Will saves and +2 effective caster level against dispelling) and unrestricted conjuration (ignore alignment restrictions for conjuration spells; casting evil conjurations doesn't threaten your alignment). 2nd: planar binding added to your spells (lesser at 2nd, regular at 6th, greater at 8th). 5th: fiendish legion (summon extra evil outsiders with summon monster spells).",
        source: `${CH2} — Malconvoker (pp. 48–51)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "master-of-masks",
    name: "Master of Masks",
    ruleset: "core",
    source: `${CH2} — Master of Masks (p. 52)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Appraise", "Bluff", "Craft", "Disguise", "Forgery", "Perform", "Sleight of Hand", "Speak Language"],
    prerequisites: [
      "Skills: Bluff 8 ranks, Disguise 8 ranks, Perform (act) 8 ranks",
      "Languages: Any four",
      "Special: Must have successfully impersonated an individual, fooling even that person's friends and associates",
    ],
    features: [
      {
        key: "master-of-masks-features",
        name: "Master of Masks Features",
        category: "trait",
        description:
          "An impersonator who crafts persona masks, each granting an archetype's powers and apparent alignment: angel, archmage, assassin, demon, dragon, faceless, gladiator, high priest, jester, lich, and others. Spellcasting advances +1 level of an existing spellcasting class at 2nd, 4th, 7th, and 9th level. 1st: persona masks (craft a mask in 8 hours for 100 gp; usable only by you; 2 masks known at 1st level, growing to 7 at 9th). 3rd: mask specialist. 5th: many faces (wear 2 masks, switching as a move action; 3 as a swift action at 8th; 4 as an immediate action at 10th). 6th: hidden mask.",
        source: `${CH2} — Master of Masks (pp. 52–56)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "mountebank",
    name: "Mountebank",
    ruleset: "core",
    source: `${CH2} — Mountebank (p. 57)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Appraise", "Bluff", "Concentration", "Diplomacy", "Disguise", "Escape Artist", "Forgery", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (local)", "Knowledge (psionics)", "Listen", "Sense Motive", "Sleight of Hand", "Spellcraft", "Spot", "Tumble"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Skills: Bluff 8 ranks, and Knowledge (arcana), (local), or (psionics) 4 ranks, and Spellcraft 4 ranks",
      "Feats: Deceitful",
    ],
    features: [
      {
        key: "mountebank-features",
        name: "Mountebank Features",
        category: "trait",
        description:
          "A fraud and con artist of many faces. This class grants no spellcasting advancement, as printed. 1st: tongue of the devil (add your Intelligence bonus to Bluff checks). 2nd: sneak attack +1d6 (+2d6 at 5th, +3d6 at 8th), stacking with other sources. 3rd: alter ego (an alternate identity with its own appearance; switch forms at will as alter self, but only into that identity; a second alter ego at 6th, a third at 9th). 4th: sideslip (once per day as an immediate action, teleport up to 20 feet as dimension door without carrying others; grows with level).",
        source: `${CH2} — Mountebank (pp. 57–59)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "psibond-agent",
    name: "Psibond Agent",
    ruleset: "core",
    source: `${CH2} — Psibond Agent (p. 60)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (local)", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spot", "Swim", "Tumble", "Use Psionic Device", "Use Rope"],
    prerequisites: [
      "Skills: Gather Information 8 ranks, Sense Motive 4 ranks",
      "Languages: Any three",
      "Psionics: Power point reserve of at least 1",
      "Special: Sneak attack +1d6",
    ],
    features: [
      {
        key: "psibond-agent-features",
        name: "Psibond Agent Features",
        category: "trait",
        description:
          "A psionic spy who forges a telepathic link with a subject. This class grants no manifesting advancement, as printed. 1st: psibond — forced sense link (while psionically focused, establish a psibond as a standard action; Will negates, DC 10 + class level + Cha modifier; lasts while you concentrate, up to 1 minute per level). The psibond deepens with level: nudge (2nd), empathy (4th), lingering psibond (5th), suggestion (6th), double psibond (7th, two subjects), false sensory input (8th), and dominate (10th). Sneak attack +1d6 at 3rd (+2d6 at 6th, +3d6 at 9th), stacking with other sources.",
        source: `${CH2} — Psibond Agent (pp. 60–63)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "spellwarp-sniper",
    name: "Spellwarp Sniper",
    ruleset: "core",
    source: `${CH2} — Spellwarp Sniper (p. 64)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Hide", "Intimidate", "Knowledge (arcana)", "Move Silently", "Profession", "Spellcraft", "Spot"],
    prerequisites: [
      "Skills: Concentration 8 ranks, Spellcraft 8 ranks",
      "Feat: Point Blank Shot",
      "Spellcasting: Ability to cast 3rd-level spells",
      "Special: Sneak attack or sudden strike +1d6",
    ],
    features: [
      {
        key: "spellwarp-sniper-features",
        name: "Spellwarp Sniper Features",
        category: "trait",
        description:
          "A precision caster who warps area spells into rays. Spellcasting advances +1 level of an existing spellcasting class at every level. 1st: spellwarp (as a free action when casting, turn an instantaneous area spell of range greater than touch into a ray — ranged touch attack, no Reflex save; Fortitude/Will saves still apply; maximum spell level equals your class level). 2nd: sudden raystrike +1d6 (precision damage with rays against targets denied Dexterity or flanked; +2d6 at 4th). 3rd: Precise Shot as a bonus feat. 5th: ray mastery.",
        source: `${CH2} — Spellwarp Sniper (pp. 64–66)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
  {
    id: "uncanny-trickster",
    name: "Uncanny Trickster",
    ruleset: "core",
    source: `${CH2} — Uncanny Trickster (p. 67)`,
    sourceUrl: CS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ3, P3, G3, P3),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Jump", "Listen", "Move Silently", "Open Lock", "Perform", "Profession", "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope"],
    prerequisites: [
      "Skills: Any four skills at 8 ranks each",
      "Skill Tricks: Any four",
    ],
    features: [
      {
        key: "uncanny-trickster-features",
        name: "Uncanny Trickster Features",
        category: "trait",
        description:
          "The trickster's trickster: more skill tricks than anyone, used more often. 1st: bonus trick (a bonus skill trick at each level, free and not counting against your limit) and favorite trick (at each level, choose one once-per-encounter trick you know; use it one additional time per encounter; never the same trick twice). 2nd: class features — at 2nd and 3rd level you gain class features (including spellcasting ability) as if you had gained a level in a previous class, but not its Hit Dice, attack progression, skill points, or saves. 3rd: tricky defense (in any round when you perform a skill trick, +1 competence bonus on saving throws until your next turn). Skill tricks themselves are a separate system and are not modeled in this app.",
        source: `${CH2} — Uncanny Trickster (pp. 67–70)`,
        sourceUrl: CS_PATH,
      },
    ],
  },
];
