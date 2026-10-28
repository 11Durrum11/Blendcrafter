/**
 * Races of Destiny prestige classes: all seven from Chapter 5 of
 * Races of Destiny (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Destiny.pdf
 * Progression tables are the book's printed tables. Prerequisites
 * are free text (shown in the UI, soft-checked only), matching the
 * other packs.
 *
 * Printed quirks kept as printed: the chameleon has all three
 * saves poor (Table 5–2); the shadow sentinel's entry requirements
 * list "Weapon Focus (any slashing weapon)" under Skills (Table
 * 5–7 text, p. 137) — it is recorded as a feat prerequisite below,
 * with the placement noted.
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

const ROD = "Races of Destiny";
const ROD_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Destiny.pdf";
const CH5 = `${ROD} — Chapter 5: Prestige Classes`;

export const RACES_OF_DESTINY_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "chameleon",
    name: "Chameleon",
    ruleset: "core",
    source: `${CH5} — Chameleon (pp. 111–113; Table 5–2, p. 112)`,
    sourceUrl: ROD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: [],
    progression: rows(TQ, P, P, P),
    classSkills: ["Bluff", "Concentration", "Craft", "Disguise", "Profession", "Sense Motive", "Swim", "Use Magic Device"],
    prerequisites: [
      "Race: Human or doppelganger",
      "Skills: Bluff 8 ranks, Disguise 8 ranks, Sense Motive 4 ranks, Spellcraft 4 ranks",
      "Feats: Able Learner",
    ],
    features: [
      {
        key: "chameleon-aptitude-focus",
        name: "Aptitude Focus (Ex)",
        description:
          "Once per day after 1 hour of meditation, adopt one of five focuses for 24 hours (usable 2/day at 5th, 3/day at 10th; you may change focus once per day at 5th, twice at 10th): arcane focus (prepare and cast arcane spells from any arcane list as a wizard, caster level twice your class level), combat focus (martial weapon proficiency, competence bonuses to attack, damage, and Fortitude saves), divine focus (prepare and cast divine spells from any divine list as a cleric, caster level twice your class level), stealth focus (trapfinding, uncanny dodge, competence bonuses to rogue skills and Reflex saves), or wild focus (wild empathy, woodland stride, competence bonuses to wilderness skills and Fortitude saves). Each focus's competence/save bonuses are +2, improving to +4 at 5th level. At 7th level you can hold two focuses at once (double aptitude), and at 8th you can refocus in 10 minutes (rapid refocus). Abilities from a focus, ability boon, or mimicked feature can't be used to qualify for feats or other options. All three of the chameleon's saves are poor, as printed in Table 5–2.",
        category: "trait",
        source: `${CH5} — Chameleon (pp. 112–113)`,
        sourceUrl: ROD_PATH,
      },
      {
        key: "chameleon-mimic",
        name: "Bonus Feat, Mimic Class Feature, Ability Boon (Ex)",
        description:
          "2nd: a bonus feat you may re-choose at the start of each day. 3rd: mimic class feature 1/day — one use of evasion, rage, smite, sneak attack (+1d6 per three class levels), or turn/rebuke undead as a character of your class level (2/day at 6th, 3/day at 9th). 4th: ability boon — a +2 competence bonus to one ability score tied to your focus (+4 at 7th, +6 at 10th).",
        category: "trait",
        source: `${CH5} — Chameleon (pp. 112–113)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "loredelver",
    name: "Loredelver",
    ruleset: "core",
    source: `${CH5} — Loredelver (pp. 117–118; Table 5–3, p. 118)`,
    sourceUrl: ROD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF, P, G, G),
    classSkills: ["Balance", "Climb", "Concentration", "Decipher Script", "Disable Device", "Jump", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (history)", "Open Lock", "Profession", "Search", "Speak Language", "Spellcraft"],
    prerequisites: [
      "Race: Illumian",
      "Skills: Decipher Script 10 ranks, Disable Device 5 ranks, Knowledge (arcana) 10 ranks, Knowledge (dungeoneering) 5 ranks",
      "Spells: Ability to cast at least one 3rd-level arcane spell from the divination school",
      "Special: Trapfinding class feature",
    ],
    features: [
      {
        key: "loredelver-delving",
        name: "Loredelver Abilities",
        description:
          "Spellcasting advances an existing arcane spellcasting class at every level except 1st. 1st: bardic knowledge (loredelver level + Int modifier) and magical insight (+5 insight bonus on Spellcraft checks to identify the school of a magical aura). 2nd: detect magic at will. 3rd: evasion. 4th: spontaneous casting — lose a prepared spell to cast knock (7th: arcane eye, from a 4th-level or higher slot; 10th: greater dispel magic, from a 6th-level or higher slot). 5th: fearless (immunity to fear). 6th: arcane sight at will. 8th: improved evasion. 9th: greater arcane sight at will.",
        category: "trait",
        source: `${CH5} — Loredelver (pp. 117–118)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "menacing-brute",
    name: "Menacing Brute",
    ruleset: "core",
    source: `${CH5} — Menacing Brute (p. 123; Table 5–4)`,
    sourceUrl: ROD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Climb", "Gather Information", "Intimidate", "Jump", "Knowledge (local)", "Listen", "Search", "Sense Motive", "Spot"],
    prerequisites: [
      "Race: Half-orc",
      "Alignment: Any nongood",
      "Base Attack Bonus: +5",
      "Skills: Intimidate 5 ranks, Knowledge (local) 2 ranks, Search 2 ranks",
      "Feats: Iron Will",
    ],
    features: [
      {
        key: "menacing-brute-abilities",
        name: "Menacing Brute Abilities",
        description:
          "1st: demoralizing stare (+4 competence bonus on Intimidate checks; a foe you demoralize stays shaken for 5 rounds). 2nd: resourceful search (once per day, find a chosen nonmagical item worth up to 200 gp for free with a Search check whose DC and time depend on the community's size). 3rd: sneak attack +1d6. 4th: ruthless cut (+4 bonus on rolls to confirm critical threats). 5th: making an example (when your melee attack drops a creature, foes within 30 feet must make a Will save, DC 15 + your Cha modifier, or cower until their next turn; +4 DC if the blow was a critical hit; mind-affecting fear).",
        category: "trait",
        source: `${CH5} — Menacing Brute (pp. 122–123)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "outcast-champion",
    name: "Outcast Champion",
    ruleset: "core",
    source: `${CH5} — Outcast Champion (pp. 126–127; Table 5–5, p. 126)`,
    sourceUrl: ROD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: ["Climb", "Craft", "Diplomacy", "Disguise", "Hide", "Intimidate", "Jump", "Knowledge (local)", "Move Silently", "Survival"],
    prerequisites: [
      "Race: Half-elf, half-orc, or half-ogre",
      "Skills: Diplomacy 8 ranks or Intimidate 8 ranks",
    ],
    features: [
      {
        key: "outcast-champion-abilities",
        name: "Outcast Champion Abilities",
        description:
          "1st: aura of confidence (you and allies within 30 feet who can see you gain a morale bonus on Will saves equal to your class level). 2nd: avenging strike (a melee attack against a creature that damaged an ally within the last hour: add your Charisma modifier to the attack roll and +1d6 damage per class level; usable once per day per point of Charisma bonus, minimum 1/day). 3rd: desperate fury (once per day, when reduced below half hit points or when fatigued or exhausted, gain +2 morale bonuses to Strength, Dexterity, and Constitution for 3 rounds + 1 per point of your improved Constitution bonus, with no rage penalties — but the fury ends if you become frightened, panicked, or cowering). 4th: teamwork (aid another bonuses from you or allies within 30 feet improve by 2, from +2 to +4). 5th: share desperate fury with allies within 30 feet.",
        category: "trait",
        source: `${CH5} — Outcast Champion (p. 127)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "scar-enforcer",
    name: "Scar Enforcer",
    ruleset: "core",
    source: `${CH5} — Scar Enforcer (pp. 130–131; Table 5–6, p. 131)`,
    sourceUrl: ROD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Disable Device", "Disguise", "Gather Information", "Hide", "Knowledge (local)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Sense Motive", "Spot", "Tumble"],
    prerequisites: [
      "Race: Half-elf",
      "Alignment: Any nongood",
      "Base Attack Bonus: +3",
      "Skills: Bluff 8 ranks, Hide 4 ranks, Move Silently 4 ranks",
    ],
    features: [
      {
        key: "scar-enforcer-abilities",
        name: "Scar Enforcer Abilities",
        description:
          "Spellcasting advances an existing spellcasting class at every even-numbered level (2nd, 4th, 6th, 8th, 10th). 1st: favored enemy (elves and humans), as the ranger feature (+2 on Bluff, Listen, Sense Motive, Spot, and Survival checks and on weapon damage rolls against them). 2nd: smite enemy 1/day — a melee attack against a human or elf adding your Charisma bonus to the attack roll and +1 damage per class level (2/day at 5th, 3/day at 8th). 3rd: sneak attack +1d6 (+2d6 at 6th, +3d6 at 9th). 4th: disguise self 3/day, only to appear human or elven. 7th: hide in plain sight in natural terrain. 10th: forgo heritage — you no longer count as an elf or a human for beneficial or harmful effects (you still count as a half-elf to qualify for this class).",
        category: "trait",
        source: `${CH5} — Scar Enforcer (pp. 130–131)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "shadow-sentinel",
    name: "Shadow Sentinel",
    ruleset: "core",
    source: `${CH5} — Shadow Sentinel (p. 137; Table 5–7)`,
    sourceUrl: ROD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Climb", "Craft", "Intimidate", "Jump", "Listen", "Ride", "Spot", "Swim"],
    prerequisites: [
      "Race: Illumian",
      "Base Attack Bonus: +5",
      "Feats: Weapon Focus (any slashing weapon) — listed under Skills in the book's entry requirements, as printed",
      "Special: Must pass a combat examination from the sentinel leaders",
    ],
    features: [
      {
        key: "shadow-sentinel-umbral-blade",
        name: "Umbral Blade and Shadow Points (Su)",
        description:
          "You receive an umbral blade (any slashing melee weapon, +1 enhancement in your hands only), whose enhancement bonus rises to +2 at 4th level, +3 at 6th, +4 at 8th, and +5 at 10th; a lost blade can be replaced by transforming a +1 slashing weapon (100 XP, 24 hours of meditation). A pool of shadow points (1 at 1st level, rising by 2 per level to 19 at 10th; spending is a swift action; the pool refills after 8 hours of rest) powers the blade: morphic blade — type (1st, 1 point: reshape it into another slashing weapon for 24 hours), material (5th, 3 points: mimic a special material for 1 minute per level), alignment (9th, 5 points: mimic an alignment for damage reduction for 1 minute per level); shadowstrike (1st, 1 point: your next attack is a touch attack that ignores cover short of total cover); shadowbane (2nd, 1 point: bane against evil outsiders and natives of the Plane of Shadow for a number of rounds); shadowsharp (3rd, 1 point: keen for a number of minutes); shadow drain (7th: each point spent, up to 3 per round, makes the blade drain 1 Strength on a melee hit).",
        category: "trait",
        source: `${CH5} — Shadow Sentinel (pp. 137–138)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
  {
    id: "urban-soul",
    name: "Urban Soul",
    ruleset: "core",
    source: `${CH5} — Urban Soul (p. 141; Table 5–8)`,
    sourceUrl: ROD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Balance", "Climb", "Escape Artist", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (architecture and engineering)", "Knowledge (local)", "Listen", "Move Silently", "Search", "Speak Language", "Spot", "Tumble"],
    prerequisites: [
      "Race: Human",
      "Skills: Knowledge (local) 10 ranks, Knowledge (architecture and engineering) 5 ranks, Gather Information 5 ranks",
      "Special: Blessing from the temple of Urbanus",
    ],
    features: [
      {
        key: "urban-soul-abilities",
        name: "Urban Soul Abilities",
        description:
          "Most abilities function only within a city (a community of more than 5,000 inhabitants). 1st: city ramparts 1/day (call on the community to fortify yourself: +4 bonus to Constitution, +2 on Will saves, and damage reduction) and urban sustenance (the city provides for you). 2nd: citybred senses +2 (+4 at 6th, +6 at 10th). 3rd: meld into city. 4th: see the city. 5th: city ramparts 2/day (3/day at 9th). 6th: urban skill mastery. 7th: hear the city 1/day (2/day at 10th). 8th: mob violence (channel a crowd's anger as a supernatural effect). 10th: citywalk.",
        category: "trait",
        source: `${CH5} — Urban Soul (pp. 141–142)`,
        sourceUrl: ROD_PATH,
      },
    ],
  },
];
