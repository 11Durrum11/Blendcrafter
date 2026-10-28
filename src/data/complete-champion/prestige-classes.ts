/**
 * Complete Champion prestige classes: all eleven from Chapter 2 of
 * Complete Champion (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf
 * Progression tables are the book's printed tables (Tables 2-2…2-12).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. Spellcasting advancement is stated in
 * each class's feature summary, following the house pattern.
 * The book presents no base classes, no races, and no templates.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const G5 = [2, 3, 3, 4, 4];
const P5 = [0, 0, 1, 1, 1];
const FULL5 = [1, 2, 3, 4, 5];
const G3 = [2, 3, 3];
const P3 = [0, 0, 1];
const FULL3 = [1, 2, 3];
const TQ3 = [0, 1, 2];
const HALF5 = [0, 1, 1, 2, 2];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const CC = "Complete Champion";
const CC_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Champion.pdf";
const CH2 = `${CC} — Chapter 2: Divine Character Options`;

export const COMPLETE_CHAMPION_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "fist-of-the-forest",
    name: "Fist of the Forest",
    ruleset: "core",
    source: `${CH2} — Fist of the Forest (p. 80)`,
    sourceUrl: CC_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL3, G3, G3, P3),
    classSkills: ["Balance", "Climb", "Handle Animal", "Intimidate", "Jump", "Listen", "Move Silently", "Sense Motive", "Spot", "Survival", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Handle Animal 4 ranks, Survival 4 ranks",
      "Feats: Great Fortitude, Improved Unarmed Strike, Power Attack",
      "Special: Must gain approval as a fist of the forest by the leaders of a band of Guardians of the Green, then adopt the lifestyle of an animal (primal living)",
    ],
    features: [
      {
        key: "fist-of-the-forest-features",
        name: "Fist of the Forest Features",
        category: "trait",
        description:
          "A feral ascetic defender of nature (3-level class). AC bonus (add your Constitution bonus to AC while unarmored), fast movement, feral trance 1/day (clawlike hands and a bite attack, +4 Dexterity, +2 damage with unarmed strikes; 2/day at 3rd), and primal living (you must sleep outdoors and never buy food, or lose these features until you atone). Unarmed damage 1d8 (1d10 at 3rd). 2nd: uncanny dodge and untamed strike (unarmed strikes count as magic, then as lesser ghost touch). 3rd: scent.",
        source: `${CH2} — Fist of the Forest (pp. 80–81)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "forest-reeve",
    name: "Forest Reeve",
    ruleset: "core",
    source: `${CH2} — Forest Reeve (p. 82)`,
    sourceUrl: CC_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: ["Balance", "Climb", "Craft", "Handle Animal", "Heal", "Hide", "Intimidate", "Jump", "Knowledge (geography)", "Knowledge (nature)", "Listen", "Move Silently", "Search", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Knowledge (nature) 2 ranks, Listen 4 ranks, Spot 4 ranks, Survival 6 ranks",
      "Feats: Endurance, Track",
      "Special: Must be chosen as a forest reeve by the leaders of a band of Guardians of the Green, then serve a six-month apprenticeship (waivable for an extraordinary service)",
    ],
    features: [
      {
        key: "forest-reeve-features",
        name: "Forest Reeve Features",
        category: "trait",
        description:
          "A patrol scout of the Guardians of the Green. Earth's defender: make one weapon temporarily magic 1/day (+1, rising to +2 at 3rd and +3 at 5th). Fast movement (+10 ft.). Nature's rejuvenation: after a minute touching living plants or fertile ground, gain the effect of bear's endurance, cure moderate wounds, or lesser restoration on yourself (1/day, 2/day at 3rd, 3/day at 5th). 2nd: woodland stride. 3rd: swift tracker. 4th: camouflage. 5th: whispers of the forest (the wilderness answers a simple question about current events 1/day).",
        source: `${CH2} — Forest Reeve (pp. 82–83)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "holt-warden",
    name: "Holt Warden",
    ruleset: "core",
    source: `${CH2} — Holt Warden (p. 84)`,
    sourceUrl: CC_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Hide", "Knowledge (nature)", "Knowledge (religion)", "Listen", "Move Silently", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Alignment: Any neutral",
      "Skills: Knowledge (nature) 8 ranks, Survival 4 ranks",
      "Spellcasting: Able to cast 3rd-level divine spells, including the three lowest-level spells of the Plant domain",
      "Special: Must be chosen as a holt warden by the leaders of a band of Guardians of the Green, then serve a one-year apprenticeship",
    ],
    features: [
      {
        key: "holt-warden-features",
        name: "Holt Warden Features",
        category: "trait",
        description:
          "The highest spiritual leaders of the Guardians of the Green. Nature sense (+2 on Knowledge (nature) and Survival; doubled if already possessed) and plant affinity (spontaneously cast Plant domain spells, with bonus domain spells as a cleric). 2nd: rebuke plants and woodland stride. 3rd: earth's communion (a heal effect after 10 minutes of concentration, 1/day and more often at higher levels) and trackless step. 5th: venom immunity. 6th: whispers of the forest (news; insights at 10th). 7th: web of life (an inspiring rite granting +2 Wisdom and restoring some cast spells). 9th: timeless body. Spellcasting advances +1 level of an existing divine spellcasting class at every level.",
        source: `${CH2} — Holt Warden (pp. 84–85)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "mythic-exemplar",
    name: "Mythic Exemplar",
    ruleset: "core",
    source: `${CH2} — Mythic Exemplar (p. 86)`,
    sourceUrl: CC_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: [],
    progression: rows(TQ, P, P, P),
    classSkills: ["Craft", "Knowledge (history)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Listen", "Profession", "Ride", "Spot"],
    prerequisites: [
      "Skills: Knowledge (history) 3 ranks, plus any one of Diplomacy 7 ranks, Intimidate 7 ranks, Knowledge (arcana) 7 ranks, Knowledge (religion) 7 ranks, or Move Silently 7 ranks",
      "Special: Any one of the following: base attack bonus +5, able to cast 3rd-level spells, sneak attack +2d6, or ability to grant allies a bonus on attack rolls, saves, or checks as an extraordinary ability",
      "Special: Must be a member of the Disciples of Legend",
    ],
    features: [
      {
        key: "mythic-exemplar-features",
        name: "Mythic Exemplar Features",
        category: "trait",
        description:
          "A hero who models his life on one of the legendary Six from Shadow (paragon's path, chosen at 1st level and unchangeable). Printed quirk kept as printed: the table gives NO good saving throw — all three saves use the poor progression — and the class instead grants a growing save bonus (+1 at 1st, +2 at 3rd, +3 at 5th, +4 at 7th). Paragon's gifts by path: least (2nd), lesser (4th), greater (6th), supreme (8th). Archetype advancement (3rd, 5th, 7th, 9th). 10th: ability boost and embody paragon. You can also add four class skills from one prior class to this class's skill list. Spellcasting advances +1 level of an existing spellcasting class at 2nd, 4th, 6th, and 8th level (and at the remaining levels for the Imdastri and Ktolemagne paths, per the printed table).",
        source: `${CH2} — Mythic Exemplar (pp. 86–89)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "ordained-champion",
    name: "Ordained Champion",
    ruleset: "core",
    source: `${CH2} — Ordained Champion (p. 90)`,
    sourceUrl: CC_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL5, G5, P5, G5),
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Ride", "Spellcraft"],
    prerequisites: [
      "Alignment: Any lawful, neutral good, or neutral evil",
      "Skills: Knowledge (religion) 7 ranks",
      "Feat: Weapon Focus with the deity's favored weapon",
      "Spellcasting: Able to cast magic weapon as a divine spell",
      "Special: Must worship Hextor or Heironeous",
    ],
    features: [
      {
        key: "ordained-champion-features",
        name: "Ordained Champion Features",
        category: "trait",
        description:
          "A divine warrior utterly devoted to war. Bonus domain (the War domain as a third domain, or another of the deity's domains if you already have War), combat feats (permanently trade one or two domain granted powers for fighter bonus feats), continued advancement (levels stack for turning/rebuking and domain powers), and modified spontaneous casting (clerics swap prepared spells for War domain spells instead of cure/inflict). 2nd: Diehard as a bonus feat and smite (spend a turn/rebuke use to smite any foe). 3rd: channel spell (store a spell in your melee weapon) and divine bulwark (sacrifice a spell for damage reduction/chaotic). 4th: fist of the gods (sacrifice a spell for a melee damage bonus) and rapid spontaneous casting. 5th: holy warrior (spend a turn/rebuke use to use Wisdom for attack and damage) and war caster (+2 caster level with War domain spells). Spellcasting advances +1 level of an existing divine spellcasting class at 2nd, 3rd, and 5th level.",
        source: `${CH2} — Ordained Champion (pp. 90–92)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "paragnostic-apostle",
    name: "Paragnostic Apostle",
    ruleset: "core",
    source: `${CH2} — Paragnostic Apostle (p. 94)`,
    sourceUrl: CC_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: ["Concentration", "Craft", "Decipher Script", "Knowledge (all)", "Profession", "Search", "Speak Language", "Spellcraft", "Spot"],
    prerequisites: [
      "Skills: Knowledge (arcana) 5 ranks, Knowledge (religion) 5 ranks, Knowledge (any other) 5 ranks",
      "Spellcasting: Able to cast 3rd-level spells or use spell-like abilities of equivalent level",
      "Special: Must be a member of the Paragnostic Assembly",
    ],
    features: [
      {
        key: "paragnostic-apostle-features",
        name: "Paragnostic Apostle Features",
        category: "trait",
        description:
          "A scholar-priest of the Paragnostic Assembly who bends magic with learning. Holy texts (levels stack for turning/rebuking and domain abilities) and lore (as bardic knowledge). Knowledge is power: at every level, choose one Knowledge-based spellcasting enhancement for which you meet the skill ranks — accurate retort, backhanded attack, call of worlds, discern weakness, divine understanding, energy supremacy, manifest ethos, mind over body, mind over matter, mortal coil, noble presence, penetrating insight, and others — never the same one twice in a row. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.' Spellcasting advances +1 level of an existing spellcasting class at every level.",
        source: `${CH2} — Paragnostic Apostle (pp. 94–96)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "paragnostic-initiate",
    name: "Paragnostic Initiate",
    ruleset: "core",
    source: `${CH2} — Paragnostic Initiate (p. 97)`,
    sourceUrl: CC_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL3, G3, G3, P3),
    classSkills: ["Balance", "Climb", "Craft", "Decipher Script", "Jump", "Knowledge (all)", "Listen", "Profession", "Search", "Speak Language", "Spot", "Tumble"],
    prerequisites: [
      "Skills: Knowledge (arcana) 2 ranks, Knowledge (religion) 2 ranks, Knowledge (any other) 2 ranks",
      "Special: Base attack bonus +4 or Tumble 7 ranks",
      "Special: Must be a member of the Paragnostic Assembly",
    ],
    features: [
      {
        key: "paragnostic-initiate-features",
        name: "Paragnostic Initiate Features",
        category: "trait",
        description:
          "The Paragnostic Assembly's non-spellcasting seekers (3-level class). Assist casting: aid an adjacent allied spellcaster using your Knowledge skills — penetration at 1st (+1 on caster level checks against spell resistance), target at 2nd (allied ranged spells ignore the melee penalty and your cover; foes you threaten take a Reflex penalty), distraction at 3rd (a flanked ally casts without provoking from the flanked creature). Tactical combat: at each level, choose one Knowledge-based combat or magic-augmentation ability (avoid energy, physical augmentation, resist ethos, spell disrupter, and others) for which you meet the skill ranks, never the same one twice in a row. The class-skill list's Knowledge entry is the book's 'all skills, taken individually.'",
        source: `${CH2} — Paragnostic Initiate (pp. 97–98)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "sanctified-one",
    name: "Sanctified One",
    ruleset: "core",
    source: `${CH2} — Sanctified One (p. 99)`,
    sourceUrl: CC_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows([0, 1, 2, 3, 3], G5, G5, G5),
    classSkills: ["Concentration", "Diplomacy", "Intimidate", "Knowledge (religion)", "Perform", "Sense Motive"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Alignment: Must match that of the deity chosen",
      "Skills: Knowledge (religion) 6 ranks",
      "Special: Must complete a sanctification ritual performed by a priest or other authority of the chosen deity's church",
    ],
    features: [
      {
        key: "sanctified-one-features",
        name: "Sanctified One Features",
        category: "trait",
        description:
          "A lay champion sanctified by a deity. You gain proficiency with your deity's chosen weapon (if you lack it) and the additional class skills listed for your deity; the printed table gives all three saves as good — a quirk kept as printed. Sanctified ability at 1st, 3rd, and 5th level: choose an ability from your deity's list (some can be taken repeatedly for extra daily uses). 5th: sanctified blessing. Spellcasting advances +1 level of an existing spellcasting class at 2nd and 4th level.",
        source: `${CH2} — Sanctified One (pp. 99–104)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "shadowspy",
    name: "Shadowspy",
    ruleset: "core",
    source: `${CH2} — Shadowspy (p. 105)`,
    sourceUrl: CC_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Decipher Script", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Jump", "Knowledge (local)", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock", "Search", "Sense Motive", "Speak Language", "Spot", "Tumble"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Gather Information 6 ranks, Hide 6 ranks, Move Silently 6 ranks",
      "Feat: Good Devotion, Healing Devotion, Strength Devotion, or Sun Devotion",
      "Spellcasting: Able to cast 1st-level divine spells",
      "Special: Must be a cleric or paladin of Pelor",
    ],
    features: [
      {
        key: "shadowspy-features",
        name: "Shadowspy Features",
        category: "trait",
        description:
          "A secret agent of Pelor's church working in crowds and shadow. Aura of anonymity (a bonus equal to your class level on Disguise and Hide checks in a crowd) and radiance of Pelor (double the range of light sources within 60 feet as a swift action). Bonus feat at 2nd, 5th, and 8th (from a short stealth/social list) and immunity to blindness at 2nd. 3rd: veil of Pelor (undetectable alignment at will). 4th: personal eclipse (a Hide bonus in lit areas). 6th: truth of the light (zone of truth). 7th: blinding light. 8th: sun's revelation (discern lies at will). 9th: hide in plain sight in sunlit locations. 10th: vision of Pelor (true seeing 3/day). Spellcasting advances +1 level of an existing spellcasting class at each even-numbered level.",
        source: `${CH2} — Shadowspy (pp. 105–107)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "shadowstriker",
    name: "Shadowstriker",
    ruleset: "core",
    source: `${CH2} — Shadowstriker (p. 108)`,
    sourceUrl: CC_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL3, G3, P3, G3),
    classSkills: ["Climb", "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Jump", "Knowledge (religion)", "Ride", "Search", "Sense Motive", "Spot"],
    prerequisites: [
      "Alignment: Any good",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (religion) 2 ranks",
      "Feat: Good Devotion, Healing Devotion, Law Devotion, Strength Devotion, Sun Devotion, or War Devotion",
    ],
    features: [
      {
        key: "shadowstriker-features",
        name: "Shadowstriker Features",
        category: "trait",
        description:
          "A weapon of Pelor (and Heironeous) in humanoid form, in a 3-level class. Badge of office (a special gold holy symbol granting access and authority in lands held by the two churches) and luminous weapon (imbue a melee weapon with light and a damage bonus equal to twice your class level against evil creatures and undead, a number of times per day equal to your Wisdom modifier). 2nd: smite evil 1/day and sun's blessing (your luminous weapon also deals +1d6 fire damage and sheds daylight, fueled by turn attempts, smite attempts, or spell slots). 3rd: surge of piety (undead that touch you are shaken; 1/day burst as consecrate dealing positive energy damage to undead).",
        source: `${CH2} — Shadowstriker (pp. 108–109)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
  {
    id: "squire-of-legend",
    name: "Squire of Legend",
    ruleset: "core",
    source: `${CH2} — Squire of Legend (p. 110)`,
    sourceUrl: CC_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: [],
    progression: rows(TQ3, P3, P3, P3),
    classSkills: ["Appraise", "Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist", "Gather Information", "Handle Animal", "Heal", "Jump", "Knowledge (arcana)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Listen", "Perform", "Ride", "Search", "Sense Motive", "Spot", "Swim"],
    prerequisites: [
      "Skills: Knowledge (history) 3 ranks and any one of the following: Diplomacy 7 ranks, Intimidate 7 ranks, Knowledge (arcana) 7 ranks, Knowledge (religion) 7 ranks, or Move Silently 7 ranks",
      "Special: Must be a member of the Disciples of Legend",
    ],
    features: [
      {
        key: "squire-of-legend-features",
        name: "Squire of Legend Features",
        category: "trait",
        description:
          "A 3-level support class devoted to one of the Six from Shadow (paragon's path), aiding allies rather than seeking glory. Save bonus (+1 on your paragon's saving throw, +2 at 3rd). Squire's burden abilities by paragon: least at 1st, lesser at 2nd, greater at 3rd — spell-like and supernatural aids such as sanctuary, comprehend languages, speak with animals, granting an ally an extra action, or negating a critical hit (a use of a higher burden can be spent on a lower one instead). 3rd: faithful companion (take a Reflex-save penalty to give an adjacent ally the same amount as a bonus). Like the mythic exemplar's table, the printed table gives no good save; the save bonus feature stands in for it — kept as printed. Spellcasting advances +1 level of an existing spellcasting class at 2nd and 3rd level.",
        source: `${CH2} — Squire of Legend (pp. 110–112)`,
        sourceUrl: CC_PATH,
      },
    ],
  },
];
