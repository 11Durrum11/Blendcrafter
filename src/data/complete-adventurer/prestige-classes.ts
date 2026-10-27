/**
 * Complete Adventurer prestige classes: all twenty-six from Chapter 2 of
 * Complete Adventurer (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf
 * Progression tables are the book's printed tables (including the
 * Fochlucan lyrist's full base attack progression, exactly as printed).
 * Prerequisites are free text (shown in the UI, soft-checked only),
 * matching the other packs. The Spymaster is a 7-level class as printed.
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
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const G3 = [2, 3, 3]; // good save, 3 levels
const P3 = [0, 0, 1]; // poor save, 3 levels
const FULL3 = [1, 2, 3];
const G7 = [2, 3, 3, 4, 4, 5, 5]; // good save, 7 levels
const P7 = [0, 0, 1, 1, 1, 2, 2]; // poor save, 7 levels
const TQ7 = [0, 1, 2, 3, 3, 4, 5];

const CADV = "Complete Adventurer";
const CADV_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Adventurer.pdf";
const CH2 = `${CADV} — Chapter 2: Prestige Classes`;

export const COMPLETE_ADVENTURER_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    // Distinct from the Sorcery & Steam base class of the same name (id "animal-lord").
    id: "animal-lord-cadv",
    name: "Animal Lord",
    ruleset: "core",
    source: `${CH2} — Animal Lord (p. 23)`,
    sourceUrl: CADV_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: [
      "Climb", "Escape Artist", "Handle Animal", "Heal", "Hide", "Intimidate",
      "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Spot",
      "Survival", "Swim",
    ],
    prerequisites: [
      "Alignment: Any neutral (neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil)",
      "Base Attack Bonus: +5",
      "Skills: Handle Animal 4 ranks, Knowledge (nature) 2 ranks, and 4 ranks in one skill from the chosen animal group's skill list",
      "Feats: One feat from the chosen animal group's feat list",
      "Special: Must have befriended an animal or tamed a wild animal of the chosen group",
    ],
    features: [
      {
        key: "animal-lord-features",
        name: "Animal Lord Features",
        category: "trait",
        description:
          "Bonds with one animal group (ape, bear, bird, cat, horse, shark, snake, or wolf): gains an animal bond and wild empathy keyed to that group, detect animals at will, and a totem aspect of the group (1st totem 2nd, 2nd 6th, 3rd 10th) plus low-light vision (2nd). Wild aspect usable 1/day at 3rd, 2/day at 6th, 3/day at 9th. Also gains speak with animals (4th), summon animal (5th), animal growth (7th), and animal telepathy (8th).",
        source: `${CH2} — Animal Lord (p. 23)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "beastmaster",
    name: "Beastmaster",
    ruleset: "core",
    source: `${CH2} — Beastmaster (p. 26)`,
    sourceUrl: CADV_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: [
      "Climb", "Handle Animal", "Heal", "Hide", "Jump", "Knowledge (nature)",
      "Listen", "Ride", "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Skills: Handle Animal 8 ranks, Survival 4 ranks",
      "Feats: Skill Focus (Handle Animal)",
      "Special: Animal companion class feature or a special mount",
    ],
    features: [
      {
        key: "beastmaster-features",
        name: "Beastmaster Features",
        category: "trait",
        description:
          "His animal companion grows stronger (class levels stack) and he gains wild empathy. Alertness as a bonus feat (2nd), speak with animals 1/day at 3rd (2/day at 6th, 3/day at 9th), an extra animal companion at 4th (treated as 3 levels lower), 7th (6 lower), and 10th (9 lower), low-light vision (5th), and scent (8th).",
        source: `${CH2} — Beastmaster (p. 26)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    ruleset: "core",
    source: `${CH2} — Bloodhound (p. 28)`,
    sourceUrl: CADV_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: [
      "Bluff", "Climb", "Diplomacy", "Disguise", "Gather Information", "Heal",
      "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock",
      "Ride", "Search", "Sense Motive", "Spot", "Survival", "Swim", "Use Rope",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Gather Information 4 ranks, Move Silently 4 ranks, Survival 4 ranks",
      "Feats: Endurance, Track",
    ],
    features: [
      {
        key: "bloodhound-features",
        name: "Bloodhound Features",
        category: "trait",
        description:
          "Designates a quarry with a mark — 1 mark at 1st, 2 at 4th, 3 at 7th, 4 at 10th — gaining bonuses to track, find, and subdue it, plus swift tracker (1st). Also gains nonlethal force and ready and waiting (2nd), bring 'em back alive and tenacious pursuit (+10 ft. speed at 3rd, +20 ft. at 6th, +30 ft. at 9th) (3rd), hunter's dedication and move like the wind (4th), crippling strike and track the trackless (5th), see invisibility, shielded mind (6th), locate creature (7th), freedom of movement (8th), scent (9th), and find the path (10th) against his marks.",
        source: `${CH2} — Bloodhound (p. 28)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "daggerspell-mage",
    name: "Daggerspell Mage",
    ruleset: "core",
    source: `${CH2} — Daggerspell Mage (p. 32)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Handle Animal", "Heal",
      "Hide", "Jump", "Knowledge (arcana)", "Listen", "Move Silently",
      "Profession", "Ride", "Spellcraft", "Spot", "Survival", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any nonevil",
      "Skills: Concentration 8 ranks",
      "Feats: Two-Weapon Fighting, Weapon Focus (dagger)",
      "Spells: Arcane caster level 5th",
      "Special: Sneak attack +1d6",
    ],
    features: [
      {
        key: "daggerspell-mage-features",
        name: "Daggerspell Mage Features",
        category: "trait",
        description:
          "Blends arcane magic with paired daggers: daggercast stores a touch spell in a dagger (1st), invocation of the knife converts a prepared spell into extra dagger damage (2nd), sneak attack +1d6 at 3rd (+2d6 6th, +3d6 9th), double daggercast stores a spell in each dagger (5th), arcane infusion (7th), arcane throw delivers touch spells with thrown daggers (8th), and daggerspell flurry (10th). Advances arcane spellcasting at every level except 1st.",
        source: `${CH2} — Daggerspell Mage (p. 32)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "daggerspell-shaper",
    name: "Daggerspell Shaper",
    ruleset: "core",
    source: `${CH2} — Daggerspell Shaper (p. 36)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Handle Animal", "Heal",
      "Hide", "Jump", "Knowledge (nature)", "Listen", "Move Silently",
      "Profession", "Ride", "Spellcraft", "Spot", "Survival", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any nonevil",
      "Skills: Concentration 8 ranks",
      "Feats: Two-Weapon Fighting, Weapon Focus (dagger)",
      "Special: Wild shape class feature",
      "Special: Sneak attack or skirmish +1d6",
    ],
    features: [
      {
        key: "daggerspell-shaper-features",
        name: "Daggerspell Shaper Features",
        category: "trait",
        description:
          "A wild-shaping counterpart to the daggerspell mage: daggercast in animal form (1st) while wild shape improves (extra daily use at 1st, 5th, and 10th; Tiny forms at 2nd, Large at 4th), dagger claws make his natural weapons count as magical daggers (2nd), sneak attack +1d6 at 3rd (+2d6 6th, +3d6 9th), fast wild shape (7th), enhanced wild shape grants his forms magical qualities (8th), and daggerspell flurry (10th). Advances divine spellcasting at every level except 1st.",
        source: `${CH2} — Daggerspell Shaper (p. 36)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "dread-pirate",
    name: "Dread Pirate",
    ruleset: "core",
    source: `${CH2} — Dread Pirate (p. 39)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Craft", "Gather Information",
      "Intimidate", "Jump", "Listen", "Perform", "Profession", "Search",
      "Sense Motive", "Sleight of Hand", "Spot", "Swim", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +4",
      "Skills: Appraise 8 ranks, Profession (sailor) 8 ranks, Swim 4 ranks, Use Rope 4 ranks",
      "Feats: Quick Draw, Weapon Finesse",
      "Special: Must own a ship worth at least 10,000 gp",
    ],
    features: [
      {
        key: "dread-pirate-features",
        name: "Dread Pirate Features",
        category: "trait",
        description:
          "A feared (or beloved) ship's captain: seamanship and two-weapon fighting (1st), fearsome reputation growing from +2 to +6 (2nd, 6th, 10th), acrobatic charge and steady stance (4th), and skill mastery (8th). Honorable pirates gain rally the crew (+1 at 3rd, +2 at 7th), luck of the wind (5th), and fight to the death (9th); dishonorable pirates gain sneak attack instead (+1d6 at 3rd, +2d6 at 7th), scourge of the seas (5th), motivate the scum (9th), and the pirate king capstone (10th).",
        source: `${CH2} — Dread Pirate (p. 39)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "dungeon-delver",
    name: "Dungeon Delver",
    ruleset: "core",
    source: `${CH2} — Dungeon Delver (p. 42)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: [
      "Appraise", "Balance", "Climb", "Craft", "Disable Device", "Hide", "Jump",
      "Knowledge (dungeoneering)", "Listen", "Move Silently", "Open Lock",
      "Search", "Spot", "Survival", "Swim", "Tumble", "Use Magic Device",
      "Use Rope",
    ],
    prerequisites: [
      "Skills: Climb 5 ranks, Craft (stonemasonry) 5 ranks, Disable Device 7 ranks, Jump 5 ranks, Knowledge (architecture and engineering) 5 ranks, Knowledge (dungeoneering) 5 ranks, Listen 5 ranks, Search 7 ranks, Spot 5 ranks",
      "Feats: Alertness, Blind-Fight",
      "Special: Trapfinding class feature",
      "Special: Must have survived a great trial underground (set by the DM)",
    ],
    features: [
      {
        key: "dungeon-delver-features",
        name: "Dungeon Delver Features",
        category: "trait",
        description:
          "A veteran of the deepest delves: darkvision, deep survival, and trap sense +1 (1st, improving to +2 at 4th, +3 at 7th, +4 at 10th), reduce and stonecunning (2nd), augury 1/day and skill mastery (3rd; augury 2/day at 6th, 3/day at 9th), evasion (4th), blindsense 1/day (5th; 2/day at 10th), passwall (6th), find the path (8th), and phase door (9th).",
        source: `${CH2} — Dungeon Delver (p. 42)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "exemplar",
    name: "Exemplar",
    ruleset: "core",
    source: `${CH2} — Exemplar (p. 45)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft",
      "Decipher Script", "Diplomacy", "Disable Device", "Disguise",
      "Escape Artist", "Forgery", "Gather Information", "Handle Animal",
      "Heal", "Hide", "Intimidate", "Jump", "Knowledge (arcana)",
      "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)",
      "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)",
      "Knowledge (nature)", "Knowledge (nobility and royalty)",
      "Knowledge (religion)", "Knowledge (the planes)", "Listen",
      "Move Silently", "Open Lock", "Perform", "Profession", "Ride", "Search",
      "Sense Motive", "Sleight of Hand", "Speak Language", "Spellcraft", "Spot",
      "Survival", "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Skills: Diplomacy 6 ranks, any other single skill 13 ranks",
      "Feats: Skill Focus in the skill chosen for the 13 ranks",
      "Special: All skills are class skills for an exemplar; the skills above list every skill in the SRD to represent that",
    ],
    features: [
      {
        key: "exemplar-features",
        name: "Exemplar Features",
        category: "trait",
        description:
          "A master of one chosen skill whose expertise inspires others: skill artistry gives a competence bonus in the chosen skill (1st, and additional skills at 4th, 7th, and 10th) and skill mastery lets her take 10 with them (1st). Lend talent shares half her bonus with allies at a penalty to herself (2nd; the penalty vanishes at 8th), bonus feats at 3rd, 6th, and 9th, sustaining presence (4th), persuasive performance (5th), intellectual agility (8th), and perfect self (10th).",
        source: `${CH2} — Exemplar (p. 45)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "fochlucan-lyrist",
    name: "Fochlucan Lyrist",
    ruleset: "core",
    source: `${CH2} — Fochlucan Lyrist (p. 47)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL, P, G, G),
    classSkills: [
      "Appraise", "Bluff", "Concentration", "Craft", "Decipher Script",
      "Diplomacy", "Disguise", "Gather Information", "Handle Animal", "Heal",
      "Hide", "Knowledge (all)", "Listen", "Move Silently", "Perform",
      "Profession", "Ride", "Sense Motive", "Sleight of Hand", "Speak Language",
      "Spellcraft", "Survival", "Swim", "Use Magic Device",
    ],
    prerequisites: [
      "Alignment: Neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil",
      "Skills: Decipher Script 7 ranks, Diplomacy 7 ranks, Gather Information 7 ranks, Knowledge (nature) 7 ranks, Perform (string instruments) 13 ranks, Sleight of Hand 7 ranks, Speak Language (Druidic)",
      "Spells: Able to cast 1st-level arcane spells and 1st-level divine spells",
      "Special: Bardic knowledge and evasion class features",
    ],
    features: [
      {
        key: "fochlucan-lyrist-features",
        name: "Fochlucan Lyrist Features",
        category: "trait",
        description:
          "A druid-bard of the old Fochlucan college: keeps bardic knowledge and bardic music advancing, gains unbound (free of the druid's usual oath restrictions), and advances both an arcane spellcasting class and a divine spellcasting class at every level. (The book prints a full base attack progression for this class; it is entered as printed.)",
        source: `${CH2} — Fochlucan Lyrist (p. 47)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "ghost-faced-killer",
    name: "Ghost-Faced Killer",
    ruleset: "core",
    source: `${CH2} — Ghost-Faced Killer (p. 52)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: [
      "Bluff", "Climb", "Concentration", "Hide", "Intimidate", "Jump", "Listen",
      "Move Silently", "Open Lock", "Search", "Spot", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +5",
      "Skills: Concentration 4 ranks, Hide 6 ranks, Intimidate 8 ranks, Move Silently 6 ranks",
      "Feats: Improved Initiative, Power Attack",
    ],
    features: [
      {
        key: "ghost-faced-killer-features",
        name: "Ghost-Faced Killer Features",
        category: "trait",
        description:
          "A terrifying unseen assassin: ghost step lets him turn invisible (later greater invisibility and ethereal jaunt, up to 4/day at 10th), sudden strike damage grows as he levels, frightful attack forces Will saves against fear on his sudden strikes (with frightful cleave at 10th), and ghost sight sees invisible and ethereal creatures.",
        source: `${CH2} — Ghost-Faced Killer (p. 52)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "highland-stalker",
    name: "Highland Stalker",
    ruleset: "core",
    source: `${CH2} — Highland Stalker (p. 54)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Balance", "Climb", "Craft", "Hide", "Jump", "Knowledge (geography)",
      "Knowledge (nature)", "Listen", "Move Silently", "Search", "Spot",
      "Survival",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Listen 8 ranks, Spot 8 ranks, Survival 8 ranks",
      "Feats: Track",
      "Special: Skirmish or sneak attack class feature",
    ],
    features: [
      {
        key: "highland-stalker-features",
        name: "Highland Stalker Features",
        category: "trait",
        description:
          "A mountain scout who hits on the move: mountain stride crosses rough highland terrain without penalty (1st), skirmish damage and AC grow across the class (from +1d6/+1 at 1st up to +3d6/+3 at 9th, per the book), swift tracker (5th), surefooted footing on slopes and scree, and camouflage (9th) to hide in natural terrain.",
        source: `${CH2} — Highland Stalker (p. 54)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "maester",
    name: "Maester",
    ruleset: "core",
    source: `${CH2} — Maester (p. 56)`,
    sourceUrl: CADV_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, P5, P5, G5),
    classSkills: [
      "Appraise", "Concentration", "Craft", "Disable Device",
      "Knowledge (arcana)", "Knowledge (architecture and engineering)",
      "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Race: Gnome",
      "Skills: Craft (any) 8 ranks, Use Magic Device 4 ranks",
      "Feats: Any two item creation feats",
      "Spells: Arcane caster level 5th",
    ],
    features: [
      {
        key: "maester-features",
        name: "Maester Features",
        category: "trait",
        description:
          "A gnome master crafter of magic items: bonus item creation feat at 1st and 5th, quick crafting halves the time his item creation takes (1st), and identification lets him identify magic items with a Spellcraft check (3rd). Advances arcane spellcasting at levels 2 through 5.",
        source: `${CH2} — Maester (p. 56)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "master-of-many-forms",
    name: "Master of Many Forms",
    ruleset: "core",
    source: `${CH2} — Master of Many Forms (p. 59)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: [
      "Climb", "Concentration", "Craft", "Diplomacy", "Disguise",
      "Handle Animal", "Hide", "Jump", "Knowledge (nature)", "Listen", "Spot",
      "Survival", "Swim",
    ],
    prerequisites: [
      "Feats: Alertness, Endurance",
      "Special: Wild shape class feature",
    ],
    features: [
      {
        key: "master-of-many-forms-features",
        name: "Master of Many Forms Features",
        category: "trait",
        description:
          "A wild shape specialist who becomes ever more kinds of creature: improved wild shape opens new creature types and sizes as he advances (humanoid, giant, monstrous humanoid, fey, vermin, aberration, plant, ooze, elemental, and dragon), with shifter's speech (1st), fast wild shape (3rd), extraordinary wild shape granting the form's extraordinary abilities (7th), and evershifting form (10th).",
        source: `${CH2} — Master of Many Forms (p. 59)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "nightsong-enforcer",
    name: "Nightsong Enforcer",
    ruleset: "core",
    source: `${CH2} — Nightsong Enforcer (p. 60)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: [
      "Balance", "Climb", "Disable Device", "Disguise", "Escape Artist", "Hide",
      "Intimidate", "Jump", "Listen", "Move Silently", "Open Lock", "Profession",
      "Ride", "Search", "Spot", "Swim", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Hide 10 ranks, Move Silently 10 ranks",
      "Feats: Improved Initiative",
      "Special: Evasion class feature",
      "Special: Must undergo testing by the Nightsong Guild (see the book)",
    ],
    features: [
      {
        key: "nightsong-enforcer-features",
        name: "Nightsong Enforcer Features",
        category: "trait",
        description:
          "The muscle of a Nightsong Guild team: sneak attack +1d6 at 1st (+2d6 4th, +3d6 7th, +4d6 10th), teamwork lets allies benefit from her senses (1st), agility training (2nd), skill teamwork grants allies a +2 bonus with her skills (3rd, +4 at 7th), flanking teamwork (5th), opportunist (6th), improved evasion (8th), and teamwork (status) at 9th keeps her aware of her team's condition.",
        source: `${CH2} — Nightsong Enforcer (p. 60)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "nightsong-infiltrator",
    name: "Nightsong Infiltrator",
    ruleset: "core",
    source: `${CH2} — Nightsong Infiltrator (p. 63)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script",
      "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery",
      "Gather Information", "Hide", "Jump", "Listen", "Move Silently",
      "Open Lock", "Profession", "Ride", "Search", "Sleight of Hand", "Spot",
      "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Skills: Climb 10 ranks, Disable Device 5 ranks, Open Lock 5 ranks, Search 5 ranks",
      "Feats: Alertness",
      "Special: Evasion class feature",
      "Special: Must undergo testing by the Nightsong Guild (see the book)",
    ],
    features: [
      {
        key: "nightsong-infiltrator-features",
        name: "Nightsong Infiltrator Features",
        category: "trait",
        description:
          "A guild thief who makes her whole team stealthier: teamwork trap sense (+1 at 1st, growing to +4 at 10th) and trapfinding (1st), steady stance and teamwork infiltration +2 (2nd, +4 at 8th), break away and trackless step for herself (3rd; extends to allies at 7th), detect magic and teamwork sneak attack +1d6 (4th, +2d6 at 8th), defensive roll and grant move action 1/day (5th; 2/day at 9th), improved evasion, skill mastery, and specialized tools (6th), and hide in plain sight (10th).",
        source: `${CH2} — Nightsong Infiltrator (p. 63)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "ollam",
    name: "Ollam",
    ruleset: "core",
    source: `${CH2} — Ollam (p. 66)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, P5, P5, G5),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Diplomacy",
      "Gather Information", "Heal", "Knowledge (all)", "Listen", "Perform",
      "Search", "Sense Motive", "Speak Language", "Spellcraft",
    ],
    prerequisites: [
      "Race: Dwarf",
      "Alignment: Lawful good",
      "Skills: Knowledge (history) 10 ranks, Knowledge (any other) 10 ranks, Perform (oratory) 5 ranks",
    ],
    features: [
      {
        key: "ollam-features",
        name: "Ollam Features",
        category: "trait",
        description:
          "A dwarven keeper of lore and orator-priest: lore works like bardic knowledge (1st), inspire competence boosts allies' skill checks (3rd), and inspire resilience hardens them (5th). Advances an existing spellcasting class at 2nd, 3rd, and 4th level.",
        source: `${CH2} — Ollam (p. 66)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "shadowbane-inquisitor",
    name: "Shadowbane Inquisitor",
    ruleset: "core",
    source: `${CH2} — Shadowbane Inquisitor (p. 68)`,
    sourceUrl: CADV_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Climb", "Concentration", "Craft", "Decipher Script", "Gather Information",
      "Heal", "Hide", "Jump", "Knowledge (religion)", "Move Silently",
      "Profession", "Search", "Sense Motive", "Swim",
    ],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +5",
      "Skills: Gather Information 4 ranks, Knowledge (religion) 2 ranks, Sense Motive 8 ranks",
      "Feats: Power Attack",
      "Special: Detect evil and turn undead class features, sneak attack class feature",
    ],
    features: [
      {
        key: "shadowbane-inquisitor-features",
        name: "Shadowbane Inquisitor Features",
        category: "trait",
        description:
          "A ruthless hunter of hidden evil for the Order of Illumination: absolute conviction and pierce shadows (seeing through darkness and concealment) at 1st, sacred stealth (+4 at 2nd, +8 at 7th) and smite 1/day (2nd; 2/day 6th, 3/day 10th), Improved Sunder as a bonus feat (3rd), sneak attack +1d6 at 4th (+2d6 7th, +3d6 10th), merciless purity (5th), righteous fervor (8th), and burning light (9th). May multiclass freely between paladin and rogue while remaining lawful good.",
        source: `${CH2} — Shadowbane Inquisitor (p. 68)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "shadowbane-stalker",
    name: "Shadowbane Stalker",
    ruleset: "core",
    source: `${CH2} — Shadowbane Stalker (p. 72)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Appraise", "Balance", "Climb", "Concentration", "Craft", "Decipher Script",
      "Disable Device", "Escape Artist", "Gather Information", "Heal", "Hide",
      "Jump", "Knowledge (history)", "Knowledge (nature)",
      "Knowledge (religion)", "Knowledge (the planes)", "Listen",
      "Move Silently", "Open Lock", "Profession", "Search", "Sense Motive",
      "Sleight of Hand", "Spellcraft", "Spot", "Tumble", "Use Magic Device",
      "Use Rope",
    ],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Gather Information 8 ranks, Search 4 ranks, Sense Motive 4 ranks",
      "Special: Detect evil class feature, sneak attack +1d6",
    ],
    features: [
      {
        key: "shadowbane-stalker-features",
        name: "Shadowbane Stalker Features",
        category: "trait",
        description:
          "A stealthy divine agent of the Order of Illumination: detect evil and sacred stealth +4 (1st; +8 at 7th), discover subterfuge (+2 at 2nd, +4 at 5th, +6 at 8th) on Sense Motive and Gather Information checks, sneak attack +1d6 at 3rd (+2d6 6th, +3d6 9th), sacred defense (4th), and sacred strike (10th). Advances divine spellcasting at every level except 4th and 9th.",
        source: `${CH2} — Shadowbane Stalker (p. 72)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "shadowmind",
    name: "Shadowmind",
    ruleset: "core",
    source: `${CH2} — Shadowmind (p. 74)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Autohypnosis", "Bluff", "Concentration", "Craft", "Disable Device",
      "Escape Artist", "Hide", "Jump", "Knowledge (psionics)", "Listen",
      "Move Silently", "Open Lock", "Psicraft", "Search", "Sense Motive",
      "Sleight of Hand", "Spot", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Skills: Hide 5 ranks, Move Silently 5 ranks, Sleight of Hand 3 ranks",
      "Special: Manifester level 3rd",
      "Special: Able to manifest the concealing amorpha power",
      "Note: Class skill names are as printed in the book (Expanded Psionics Handbook skills)",
    ],
    features: [
      {
        key: "shadowmind-features",
        name: "Shadowmind Features",
        category: "trait",
        description:
          "A psionic infiltrator who works through minds: read thoughts at will and conceal thoughts guarding his own mind (1st), sneak attack +1d6 at 2nd (+2d6 5th, +3d6 8th), cloud mind makes others overlook him altogether (3rd), mass cloud mind extends it to groups (9th), and mind stab turns a read mind against its owner (10th). Advances manifesting at levels 1, 3, 4, 6, 7, 9, and 10.",
        source: `${CH2} — Shadowmind (p. 74)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "spymaster",
    name: "Spymaster",
    ruleset: "core",
    source: `${CH2} — Spymaster (p. 77)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ7, P7, G7, P7),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Climb", "Decipher Script", "Diplomacy",
      "Disable Device", "Disguise", "Escape Artist", "Forgery",
      "Gather Information", "Hide", "Intimidate", "Jump",
      "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)",
      "Knowledge (nobility and royalty)", "Listen", "Move Silently", "Open Lock",
      "Search", "Sense Motive", "Sleight of Hand", "Speak Language", "Spot",
      "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Skills: Bluff 8 ranks, Diplomacy 4 ranks, Disguise 8 ranks, Forgery 4 ranks, Gather Information 4 ranks, Sense Motive 4 ranks",
      "Feats: Skill Focus (Bluff)",
    ],
    features: [
      {
        key: "spymaster-features",
        name: "Spymaster Features",
        category: "trait",
        description:
          "A master of false identities (a 7-level class): cover identity and always-on undetectable alignment (1st; additional cover identities at 4th and 7th), quick change disguises and scrying defense (2nd), magic aura at will and sneak attack +1d6 (3rd; +2d6 at 6th), slippery mind (4th), dispel scrying (5th), and deep cover — divination reveals only what fits the assumed identity (7th).",
        source: `${CH2} — Spymaster (p. 77)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "streetfighter",
    name: "Streetfighter",
    ruleset: "core",
    source: `${CH2} — Streetfighter (p. 79)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: [
      "Bluff", "Climb", "Disable Device", "Hide", "Intimidate", "Jump",
      "Knowledge (local)", "Listen", "Move Silently", "Open Lock", "Ride",
      "Search", "Spot", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Bluff 5 ranks, Intimidate 5 ranks, Knowledge (local) 5 ranks",
      "Feats: Combat Expertise, Improved Feint",
    ],
    features: [
      {
        key: "streetfighter-features",
        name: "Streetfighter Features",
        category: "trait",
        description:
          "A dirty-fighting urban brawler (5 levels): always ready initiative bonus (+1 at 1st, +2 at 3rd, +3 at 5th) and streetwise bonuses to Gather Information and Knowledge (local) (1st), stand tough shrugs off damage 1/day (2nd; 2/day at 4th), sneak attack +1d6 (3rd), and uncanny dodge (5th).",
        source: `${CH2} — Streetfighter (p. 79)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "tempest",
    name: "Tempest",
    ruleset: "core",
    source: `${CH2} — Tempest (p. 81)`,
    sourceUrl: CADV_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: [
      "Balance", "Climb", "Craft", "Jump", "Sleight of Hand", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Feats: Dodge, Improved Two-Weapon Fighting, Mobility, Spring Attack, Two-Weapon Fighting",
    ],
    features: [
      {
        key: "tempest-features",
        name: "Tempest Features",
        category: "trait",
        description:
          "The pinnacle of two-weapon fighting (5 levels): tempest defense grants a dodge bonus to AC while fighting with two weapons (+1 at 1st, +2 at 3rd, +3 at 5th), ambidexterity steadily reduces his two-weapon fighting penalties (2nd and 4th), two-weapon versatility lets his feats apply to both weapons (3rd), and two-weapon spring attack (5th) lets him attack with both weapons on a spring attack.",
        source: `${CH2} — Tempest (p. 81)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "thief-acrobat",
    name: "Thief-Acrobat",
    ruleset: "core",
    source: `${CH2} — Thief-Acrobat (p. 83)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ5, P5, G5, P5),
    classSkills: [
      "Appraise", "Balance", "Climb", "Craft", "Disable Device", "Escape Artist",
      "Hide", "Jump", "Move Silently", "Open Lock", "Perform", "Search",
      "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Skills: Balance 8 ranks, Climb 8 ranks, Jump 8 ranks, Tumble 8 ranks",
      "Special: Evasion class feature",
    ],
    features: [
      {
        key: "thief-acrobat-features",
        name: "Thief-Acrobat Features",
        category: "trait",
        description:
          "A rooftop-running second-story thief (5 levels): fast acrobatics, kip up, and steady stance (1st); agile fighting (+1 dodge AC/+2 on attacks of opportunity at 2nd, improving at 4th) and slow fall 20 ft. (2nd; 30 ft. at 4th); acrobatic charge and defensive roll 1/day (3rd; 2/day at 5th); skill mastery (4th); and improved evasion (5th).",
        source: `${CH2} — Thief-Acrobat (p. 83)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "vigilante",
    name: "Vigilante",
    ruleset: "core",
    source: `${CH2} — Vigilante (p. 85)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, P, G, G),
    classSkills: [
      "Balance", "Climb", "Craft", "Disable Device", "Disguise", "Escape Artist",
      "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (local)",
      "Move Silently", "Open Lock", "Perform", "Search", "Sense Motive",
      "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any nonevil",
      "Base Attack Bonus: +4",
      "Skills: Gather Information 8 ranks, Intimidate 4 ranks, Knowledge (local) 8 ranks, Search 4 ranks, Sense Motive 8 ranks",
      "Feats: Alertness",
    ],
    features: [
      {
        key: "vigilante-features",
        name: "Vigilante Features",
        category: "trait",
        description:
          "A street-justice spellcaster: detect evil and streetwise +2 (1st; +4 at 7th), smite the guilty 1/day (2nd; 2/day 6th, 3/day 10th), quick search (3rd), speak with dead (4th), quick hide (5th), dimensional anchor (8th), and mettle (9th). Casts a small list of arcane spells from his own progression printed in the book (spells per day columns of Table 2-26), Charisma-based, like a bard's advancement but a fixed vigilante list.",
        source: `${CH2} — Vigilante (p. 85)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "virtuoso",
    name: "Virtuoso",
    ruleset: "core",
    source: `${CH2} — Virtuoso (p. 89)`,
    sourceUrl: CADV_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: [
      "Balance", "Bluff", "Concentration", "Craft", "Diplomacy", "Disguise",
      "Escape Artist", "Gather Information", "Intimidate", "Jump", "Perform",
      "Spellcraft", "Tumble",
    ],
    prerequisites: [
      "Skills: Diplomacy 4 ranks, Intimidate 4 ranks, Perform (any) 10 ranks",
      "Spells: Arcane caster level 1st",
    ],
    features: [
      {
        key: "virtuoso-features",
        name: "Virtuoso Features",
        category: "trait",
        description:
          "A performer whose music bends minds: bardic music (fascinate) from 1st, and virtuoso performances that grow with level — persuasive song (1st), sustaining song (3rd), jarring song (5th), song of fury (7th), and revealing melody (9th). Advances arcane spellcasting at every level except 1st.",
        source: `${CH2} — Virtuoso (p. 89)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
  {
    id: "wild-plains-outrider",
    name: "Wild Plains Outrider",
    ruleset: "core",
    source: `${CH2} — Wild Plains Outrider (p. 93)`,
    sourceUrl: CADV_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL3, G3, P3, P3),
    classSkills: [
      "Balance", "Handle Animal", "Jump", "Knowledge (nature)", "Listen",
      "Move Silently", "Ride", "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Skills: Ride 9 ranks",
      "Feats: Mounted Combat, Track",
      "Special: Animal companion or special mount at least one size category larger than the character",
    ],
    features: [
      {
        key: "wild-plains-outrider-features",
        name: "Wild Plains Outrider Features",
        category: "trait",
        description:
          "A mounted plains scout (3 levels): his animal companion or special mount keeps advancing, he adds his class level as a ride bonus with that mount, and wild plains stalker lets mount and rider move stealthily together (1st); wild plains swiftness speeds the mount (2nd); wild plains offensive lets the mount attack during a ride-by (3rd).",
        source: `${CH2} — Wild Plains Outrider (p. 93)`,
        sourceUrl: CADV_PATH,
      },
    ],
  },
];
