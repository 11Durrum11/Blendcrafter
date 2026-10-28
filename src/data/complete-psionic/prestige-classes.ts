/**
 * Complete Psionic prestige classes: all eight from Chapter 2 of
 * Complete Psionic (Wizards of the Coast). Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf
 * The PDF is a scan with no text layer; progression tables, entry
 * requirements, and class-skill lists were read by OCR of the page
 * images (Tables 2-1…2-8) and cross-checked where extraction was
 * ambiguous (the Flayerspawn Psychic's manifesting column was settled
 * against a cropped page image). Prerequisites are free text (shown
 * in the UI, soft-checked only), matching the other packs.
 * Manifesting advancement is stated in each class's feature summary,
 * following the house pattern (the app does not model power points).
 * The book presents no races and no templates for characters in this
 * chapter.
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
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const FULL5 = [1, 2, 3, 4, 5];

const CP = "Complete Psionic";
const CP_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf";
const CH2 = `${CP} — Chapter 2: Prestige Classes`;

export const COMPLETE_PSIONIC_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "anarchic-initiate",
    name: "Anarchic Initiate",
    ruleset: "core",
    source: `${CH2} — Anarchic Initiate (p. 19)`,
    sourceUrl: CP_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Autohypnosis", "Bluff", "Concentration", "Diplomacy", "Intimidate", "Knowledge (the planes)", "Knowledge (psionics)", "Listen", "Psicraft", "Sense Motive", "Spot"],
    prerequisites: [
      "Alignment: Any chaotic",
      "Skills: Knowledge (psionics) 8 ranks, Knowledge (the planes) 8 ranks",
      "Special: Wild surge class feature or the Overchannel feat",
    ],
    features: [
      {
        key: "anarchic-initiate-features",
        name: "Anarchic Initiate Features",
        category: "trait",
        description:
          "A wilder (or Overchannel user) devoted to chaos itself. Manifesting advances +1 level of an existing manifesting class at every level. 1st: chaotic surge (when you use wild surge or Overchannel, roll on the chaotic surge table — the power's numeric variables may shrink by 50%, grow by 50%, or double). 2nd: anarchic grace (a luck bonus on saves fueled by chaos) and wild surge +1 with psychic enervation, growing to wild surge +2 at 7th. 4th: clarity of confusion. 6th: chaotic breach, minor (punch a temporary hole toward Limbo). 8th: postpone enervation. 10th: chaotic breach, complete (once per day, pierce reality fully into Limbo).",
        source: `${CH2} — Anarchic Initiate (pp. 19–21; Table 2-1)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "ebon-saint",
    name: "Ebon Saint",
    ruleset: "core",
    source: `${CH2} — Ebon Saint (p. 22)`,
    sourceUrl: CP_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ5, P5, G5, G5),
    classSkills: ["Bluff", "Climb", "Concentration", "Disguise", "Escape Artist", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Psicraft", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble"],
    prerequisites: [
      "Skills: Bluff 8 ranks, Disguise 8 ranks, Hide 8 ranks, Move Silently 8 ranks",
      "Feats: Combat Expertise, Improved Feint",
      "Psionics: Power point reserve of at least 1 power point",
      "Special: Sneak attack +1d6 or psionic sneak attack +1d6",
    ],
    features: [
      {
        key: "ebon-saint-features",
        name: "Ebon Saint Features",
        category: "trait",
        description:
          "An ideologue of the darkness who unlocks secrets by dire strikes, usually entered from the lurk class. Manifesting advances +1 level of an existing manifesting class at every level beyond 1st. 1st: dire strike (spend power points on augments to a strike against a flat-footed or flanked foe, beginning with a bonus to attack and AC) and shadow friend. 2nd: thought theft (a dire augment that reads the target's surface thoughts). 3rd: mind interrogation (combine two dire augments in a single dire strike). 4th: steal form. 5th: disappear from the mind (erase yourself from a target's memory and perception).",
        source: `${CH2} — Ebon Saint (pp. 22–24; Table 2-2)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "ectopic-adept",
    name: "Ectopic Adept",
    ruleset: "core",
    source: `${CH2} — Ectopic Adept (p. 25)`,
    sourceUrl: CP_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Bluff", "Concentration", "Craft (sculpting)", "Disguise", "Knowledge (all skills, taken individually)", "Profession", "Psicraft", "Use Psionic Device"],
    prerequisites: [
      "Skills: Psicraft 8 ranks",
      "Feats: Skill Focus (Craft [sculpting]), Ectopic Form (any)",
      "Powers: Must be able to manifest the astral construct power",
    ],
    features: [
      {
        key: "ectopic-adept-features",
        name: "Ectopic Adept Features",
        category: "trait",
        description:
          "A sculptor of ectoplasm who specializes in altering astral constructs. Manifesting advances +1 level of an existing manifesting class at every level beyond 1st. 1st: resilient construct (your astral constructs gain damage reduction and resilience). 2nd: Ectopic Form as a bonus feat (any one; another at 4th). 3rd: rapid creation (manifest astral construct faster). 5th: double creation (shape two constructs at once).",
        source: `${CH2} — Ectopic Adept (pp. 25–27; Table 2-3)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "flayerspawn-psychic",
    name: "Flayerspawn Psychic",
    ruleset: "core",
    source: `${CH2} — Flayerspawn Psychic (p. 28)`,
    sourceUrl: CP_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Disguise", "Hide", "Intimidate", "Knowledge (all skills, taken individually)", "Listen", "Move Silently", "Psicraft", "Sense Motive", "Spot", "Use Psionic Device"],
    prerequisites: [
      "Skills: Knowledge (psionics) 8 ranks",
      "Feats: Illithid Heritage",
      "Language: Undercommon",
      "Powers: Ability to manifest psionic charm",
      "Special: Only psions and erudites possess the proper frame of mind to become flayerspawn psychics (see the book)",
    ],
    features: [
      {
        key: "flayerspawn-psychic-features",
        name: "Flayerspawn Psychic Features",
        category: "trait",
        description:
          "A psionic character slowly embracing a secret mind flayer heritage, trading manifesting breadth for illithid power. Manifesting advances +1 level of an existing manifesting class at 2nd, 4th, 5th, 7th, 9th, and 10th level (per Table 2-4, settled against the page image). 1st: Illithid Blast (channel power points into a mind blast: 15-foot cone, stun 1d4 rounds; usable 2/day at 3rd, 3/day at 5th, 4/day at 7th, 5/day at 9th; at 6th the cone grows to 30 feet and stuns 2d4 rounds, and at 10th to 60 feet and 3d4 rounds). 2nd: bonus illithid feat (another at 4th and at 8th).",
        source: `${CH2} — Flayerspawn Psychic (pp. 28–30; Table 2-4)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "illumine-soul",
    name: "Illumine Soul",
    ruleset: "core",
    source: `${CH2} — Illumine Soul (p. 31)`,
    sourceUrl: CP_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ5, G5, P5, G5),
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Heal", "Hide", "Jump", "Knowledge (psionics)", "Knowledge (religion)", "Listen", "Move Silently", "Profession", "Spot", "Tumble"],
    prerequisites: [
      "Alignment: Any non-evil",
      "Skills: Knowledge (psionics) 8 ranks, Knowledge (religion) 4 ranks",
      "Special: Mind blade and psychic strike +1d8 class features",
    ],
    features: [
      {
        key: "illumine-soul-features",
        name: "Illumine Soul Features",
        category: "trait",
        description:
          "A soulknife who opens a conduit to the Positive Energy Plane to destroy undead. This class grants no manifesting advancement, as printed. 1st: positive energy conduit, improved mind blade, and psychic strike +1d8 (stacking). 2nd: positive energy ray and death ward. 3rd: undead mind bane (your mind blade permanently gains the undead bane special ability). 4th: positive energy healing (once per day, the first time your hit points drop to 0 or lower, positive energy automatically heals you 5d8+5, provided you are at -9 or higher). 5th: positive energy flare (expend psionic focus as a standard action to deal 2d6 damage per class level to all undead within 30 feet, as printed).",
        source: `${CH2} — Illumine Soul (pp. 31–33; Table 2-5)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "soulbow",
    name: "Soulbow",
    ruleset: "core",
    source: `${CH2} — Soulbow (p. 34)`,
    sourceUrl: CP_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Autohypnosis", "Climb", "Concentration", "Craft", "Hide", "Jump", "Knowledge (psionics)", "Listen", "Move Silently", "Profession", "Spot", "Tumble"],
    prerequisites: [
      "Skills: Autohypnosis 8 ranks",
      "Feats: Point Blank Shot",
      "Special: Throw mind blade class feature",
    ],
    features: [
      {
        key: "soulbow-features",
        name: "Soulbow Features",
        category: "trait",
        description:
          "A soulknife who shapes her mind blade into a bow of mind arrows. This class grants no manifesting advancement, as printed. 1st: mind arrow (form arrows of psychic energy that can carry a psychic strike; each dissipates 1 round after being shot) and a bonus feat from a short archery list (Far Shot, Precise Shot, Psionic Shot, Greater Psionic Shot, Fell Shot, Rapid Shot, Manyshot, Greater Manyshot, and similar; more bonus feats at 3rd, 7th, and 9th). 2nd: mind arrow enhancement +1 equivalent ability (growing at 4th and 6th, and to a +3 bonus at 10th; mind arrows gain a +1 enhancement bonus at 3rd level and +2 at 7th, stacking with soulknife enhancement). 8th: phase arrow (shoot through cover and barriers). Even in a null psionics field you can attempt a DC 20 Will save to produce mind arrows for a number of rounds equal to your class level.",
        source: `${CH2} — Soulbow (pp. 34–37; Table 2-6)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "storm-disciple",
    name: "Storm Disciple",
    ruleset: "core",
    source: `${CH2} — Storm Disciple (p. 38)`,
    sourceUrl: CP_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL5, G5, P5, G5),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Intimidate", "Knowledge (religion)", "Psicraft", "Sense Motive"],
    prerequisites: [
      "Alignment: Any chaotic",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (religion) 8 ranks",
      "Special: Energy mantle or Natural World mantle",
    ],
    features: [
      {
        key: "storm-disciple-features",
        name: "Storm Disciple Features",
        category: "trait",
        description:
          "A chaotic divine-minded manifester who embodies the storm, often entered from ardent or divine mind. Manifesting advances +1 level of an existing manifesting class at every level beyond 1st. 1st: shocking aura 5 ft. (an aura of crackling electricity from your mantle). 2nd: resistance to electricity 5. 3rd: shocking aura 10 ft. and stormwalker (unhindered movement through storm conditions). 5th: thunderblade (your weapon gains the thundering special ability).",
        source: `${CH2} — Storm Disciple (pp. 38–40; Table 2-7)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
  {
    id: "zerth-cenobite",
    name: "Zerth Cenobite",
    ruleset: "core",
    source: `${CH2} — Zerth Cenobite (p. 41)`,
    sourceUrl: CP_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Autohypnosis", "Concentration", "Craft", "Escape Artist", "Hide", "Jump", "Knowledge (psionics)", "Knowledge (religion)", "Listen", "Move Silently", "Psicraft", "Sense Motive", "Spot", "Tumble"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Concentration 9 ranks",
      "Manifesting: Power point reserve of at least 2",
      "Special: Still mind class feature",
    ],
    features: [
      {
        key: "zerth-cenobite-features",
        name: "Zerth Cenobite Features",
        category: "trait",
        description:
          "A githzerai monk who develops an innate, Wisdom-based manifesting talent of his own (power points, powers known, and maximum power level per Table 2-8 — not modeled here, as spells are not modeled for spellcasters). 1st: monk abilities (your levels stack with monk levels for unarmed damage, AC bonus, and unarmored speed) and temporal distillation (move action) — distill a moment of future time for use now. 2nd: backslip 1/day and timeless step. 3rd: precognition 1/day (2/day at 7th). 4th: timeless body. 8th: temporal strike. 9th: precognitive surge.",
        source: `${CH2} — Zerth Cenobite (pp. 41–43; Table 2-8)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
];
