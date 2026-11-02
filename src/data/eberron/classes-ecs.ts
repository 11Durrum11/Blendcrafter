import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Eberron Campaign Setting (Wizards of the Coast, 2004),
// Chapter Two: Races and Classes — the ARTIFICER base class
// (pp. 29–32, Table 2–1), which was never built: the ECS pack
// carried the book's races, feats, prestige classes, spells,
// equipment and magic items, but no base class. Added
// 2026-11-02 in Shaun's missing-content batch after the audit
// flagged the gap. Everything below was read from the printed
// pages of the scanned PDF in Shaun's Dropbox library
// (progression and infusions-per-day read off the page image
// of Table 2–1, printed p. 30). Progression rows are recorded
// for levels 1–10, per this app's convention for base classes.
// Short mechanical summaries in our own words, cited to
// book + page.
// Source PDF: /A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf
//
// RECORD ID: the Sorcery & Steam pack already holds id
// "artificer" for its (different) artificer class, so this
// record is "artificer-ecs"; the casting profile in
// src/data/spells/casting-profiles.ts uses the same classId.
//
// INFUSION CASTING PROFILE — MODELED (same decision as the
// beguiler/warmage whole-list precedent). Infusions are not
// spells: they are neither arcane nor divine, and an artificer
// does not select or prepare them — the entire printed list
// (ECS pp. 103–105) is accessible to him, like a beguiler's
// list. The profile therefore uses kind "spontaneous" with
// knowsEntireList: true and the Table 2–1 infusions-per-day
// rows. FOLLOW-UP NEEDED (not done here): the printed infusion
// list has 61 entries; only the 18 ECS-new infusion records
// (this pack's spells.ts and the Races of Eberron pack) carry
// an "Artificer" list level. The remaining entries are
// Player's Handbook / Spell Compendium spells (identify, light,
// magic weapon, fabricate, wall of force, and so on) whose
// records need an "Artificer" key added in a tagging pass —
// those are existing records in other packs, outside this
// batch's append-only territory.
//
// OMISSIONS / FLAGS:
// - CANNITH WAND ADEPT is NOT built here: it is not in this
//   book. The ECS prints exactly eight prestige classes
//   (Chapter 4, pp. 73–88) and all eight are already in
//   prestige-classes.ts. The Cannith Wand Adept prestige class
//   is from Sharn: City of Towers, which is not in Shaun's
//   library. See the batch report.
// - The Metamagic Spell Completion entry records the Use
//   Magic Device DC from p. 32 but not a per-day use count;
//   the count formula was not carried in this batch's notes
//   and was left out rather than guessed.

const ECS = "Eberron Campaign Setting";
const ECS_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf";
const ARTIFICER = `${ECS} — Artificer`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string, category: F["category"] = "special-quality"): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category,
    source,
    sourceUrl: ECS_PATH,
    ...(levelsNeeded !== undefined ? { levelsNeeded } : {}),
  } as F;
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7]; // three-quarter BAB

export const EBERRON_CLASSES: ClassDefinition[] = [
  {
    id: "artificer-ecs",
    name: "Artificer",
    ruleset: "eberron",
    source: `${ECS} — Artificer (pp. 29–32)`,
    sourceUrl: ECS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: [
      "Appraise",
      "Concentration",
      "Craft",
      "Disable Device",
      "Knowledge (arcana)",
      "Knowledge (architecture and engineering)",
      "Knowledge (the planes)",
      "Open Lock",
      "Profession",
      "Search",
      "Spellcraft",
      "Use Magic Device",
    ],
    features: [
      f(
        "Artificer Basics",
        "Alignment: any. Key abilities: Charisma powers his Use Magic Device checks, and Intelligence governs his infusions. Weapon and armor proficiency: all simple weapons, light and medium armor, and shields (except tower shields).",
        undefined,
        `${ARTIFICER} (p. 29)`,
        "trait",
      ),
      f(
        "Infusions",
        "An artificer does not cast spells; he imbues infusions into items and constructs. Infusions are neither arcane nor divine, are drawn from the artificer infusion list (pp. 103–105), and every infusion on that list is available to him — he neither prepares nor selects known infusions (modeled in the Spells section from Table 2–1: 1st 2/day at 1st level, rising to 1st 3, 2nd 3, 3rd 3, 4th 2 by 10th level; higher infusion levels open at 3rd (2nd), 5th (3rd), 8th (4th), 11th (5th) and 14th (6th) class level). He needs an Intelligence score of at least 10 + the infusion's level to imbue it, and gains bonus infusions per day for a high Intelligence score. Imbuing normally takes 1 minute; by spending 1 action point he can imbue an infusion in a single round. He regains his daily infusions after 8 hours of rest and 15 minutes of focusing his mind on his craft. He can also attempt an infusion that is not on the artificer list with a Spellcraft check (DC 20 + the infusion's level).",
        1,
        `${ARTIFICER} (pp. 29–31)`,
      ),
      f(
        "Artificer Knowledge",
        "By examining an item for 1 minute, the artificer can learn whether it carries a magical aura, as with detect magic: he makes a check using his artificer level + his Intelligence modifier against DC 15.",
        1,
        `${ARTIFICER} (p. 31)`,
      ),
      f(
        "Artisan Bonus",
        "+2 bonus on Use Magic Device checks involving an item of a kind for which the artificer has the relevant item creation feat (for example, scrolls once he has Scribe Scroll).",
        1,
        `${ARTIFICER} (p. 31)`,
      ),
      f(
        "Disable Trap",
        "The artificer can use Search to find traps with a DC higher than 20, including magic traps (DC 25 + the level of the spell used to create it), and Disable Device to disarm them, just like a rogue.",
        1,
        `${ARTIFICER} (p. 31)`,
      ),
      f(
        "Item Creation",
        "When creating a magic item, the artificer can emulate spells he does not know with a Use Magic Device check (DC 20 + the spell's caster level) for each prerequisite spell; for the purpose of meeting item creation prerequisites his effective caster level is his artificer level + 2. His infusions do not count as spells for meeting prerequisites, and he cannot emulate skill or feat prerequisites this way.",
        1,
        `${ARTIFICER} (p. 31)`,
      ),
      f(
        "Craft Reserve",
        "A pool of points the artificer spends in place of his own experience points when creating magic items. The pool by level is: 20 (1st), 40 (2nd), 60 (3rd), 80 (4th), 100 (5th), 150 (6th), 200 (7th), 250 (8th), 300 (9th), 400 (10th), 500 (11th), 700 (12th), 900 (13th), 1,200 (14th), 1,500 (15th), 2,000 (16th), 2,500 (17th), 3,000 (18th), 4,000 (19th), 5,000 (20th). Unspent points do not carry over — each level brings a fresh pool.",
        1,
        `${ARTIFICER} (pp. 30–31)`,
      ),
      f(
        "Scribe Scroll",
        "The artificer gains Scribe Scroll as a bonus feat.",
        1,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Brew Potion",
        "The artificer gains Brew Potion as a bonus feat.",
        2,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Craft Wondrous Item",
        "The artificer gains Craft Wondrous Item as a bonus feat.",
        3,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Craft Homunculus",
        "The artificer can create a homunculus as though he possessed the Craft Construct feat, emulating the required spells (arcane eye, mending, and mirror image) with Use Magic Device checks as for his other item creation.",
        4,
        `${ARTIFICER} (p. 31)`,
      ),
      f(
        "Bonus Feat",
        "At 4th level, and again every four levels thereafter (8th, 12th, 16th, and 20th), the artificer gains a bonus feat: a metamagic feat or a feat from the following list — Attune Magic Weapon, Craft Construct, Exceptional Artisan, Extra Rings, Extraordinary Artisan, Legendary Artisan, Wand Mastery. He must meet the feat's prerequisites as normal.",
        4,
        `${ARTIFICER} (p. 32)`,
        "feat",
      ),
      f(
        "Craft Magic Arms and Armor",
        "The artificer gains Craft Magic Arms and Armor as a bonus feat.",
        5,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Retain Essence",
        "The artificer can spend a day taking a magic item apart and recover the experience points used in its creation, adding them to his craft reserve.",
        5,
        `${ARTIFICER} (p. 32)`,
      ),
      f(
        "Metamagic Spell Trigger",
        "The artificer can apply a metamagic feat he knows to a spell trigger item (such as a wand) by spending extra charges from the item equal to the feat's spell-level increase.",
        6,
        `${ARTIFICER} (p. 32)`,
      ),
      f(
        "Craft Wand",
        "The artificer gains Craft Wand as a bonus feat.",
        7,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Craft Rod",
        "The artificer gains Craft Rod as a bonus feat.",
        9,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Metamagic Spell Completion",
        "The artificer can apply a metamagic feat he knows to a spell completion item (such as a scroll) by making a Use Magic Device check (DC 20 + 3 × the spell's modified level).",
        11,
        `${ARTIFICER} (p. 32)`,
      ),
      f(
        "Craft Staff",
        "The artificer gains Craft Staff as a bonus feat.",
        12,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
      f(
        "Skill Mastery",
        "The artificer can take 10 on Spellcraft and Use Magic Device checks even when conditions would normally prevent it.",
        13,
        `${ARTIFICER} (p. 32)`,
      ),
      f(
        "Forge Ring",
        "The artificer gains Forge Ring as a bonus feat.",
        14,
        `${ARTIFICER} (Table 2–1, p. 30)`,
        "feat",
      ),
    ],
  },
];
