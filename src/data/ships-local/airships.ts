import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
  PrestigeClassDefinition,
} from "@/engine/types";

// Airships (Bastion Press, ©2002) — the ONE genuinely new
// record from Shaun's copy. His file ("A POC PC related/
// 2.Alchemy & steampunk flavored material/d20 Bastion Press
// Airships.pdf") is the free 36-page "e-Ships" PREVIEW of the
// 96-page book, not the full book.
//
// DEDUPE FINDING (this sweep): the preview's seven sample
// airships, its ten engine types (Table 1.4), and its three
// constant-price components (Reactive Map, Engine Swivel,
// Fire Thrower) are ALREADY in the catalog —
// src/data/omni/omni-airships.ts, wired into the barrel —
// so they are NOT rebuilt here. What the omni pass did not
// take is the preview's one full prestige class, the Airship
// Saboteur (preview pp. 21-22, Table 8.1), built below with
// its table verified against the printed page (the PDF's text
// layer drops the table's numbers; they were read from the
// page image).
//
// The omni ship records carry one-line notes; this sweep's
// full stat-block transcriptions (every bracketed component
// price, crew list and space figure, with two figures in the
// earlier working notes corrected against the book — Sprint
// Freighter crew quarters 24 / open deck 66 tons, and the
// Asherake Sunshadow's complete tail) are preserved in
// ~/workspace/library-staging/ships-local-draft.md if the
// integrator wants to enrich those notes.

const AIR = "Airships (Bastion Press)";
const AIR_PATH =
  "/A POC PC related/2.Alchemy & steampunk flavored material/d20 Bastion Press Airships.pdf (e-Ships preview, 36 pp)";

type F = FeatureDefinition & { levelsNeeded?: number };

const SAB = `${AIR} — Airship Saboteur`;
function sf(name: string, description: string, levelsNeeded?: number): F {
  return {
    key:
      "airship-saboteur-" +
      name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source: SAB,
    sourceUrl: AIR_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(
  bab: number[],
  fort: number[],
  ref: number[],
  will: number[],
): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({
    level: i + 1,
    bab: b,
    fort: fort[i],
    ref: ref[i],
    will: will[i],
  }));
}

export const AIRSHIP_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "airship-saboteur",
    name: "Airship Saboteur",
    ruleset: "core",
    source: `${SAB} (preview pp. 21-22, Table 8.1)`,
    sourceUrl: AIR_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(
      [0, 1, 2, 3, 3, 4, 5, 6, 6, 7],
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3],
      [2, 3, 3, 4, 4, 5, 5, 6, 6, 7],
      [0, 0, 1, 1, 1, 2, 2, 2, 3, 3],
    ),
    classSkills: [
      "Craft (alchemy)", "Balance", "Craft", "Disable Device", "Disguise", "Hide",
      "Jump", "Move Silently", "Open Lock", "Profession", "Search", "Spot",
      "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Skills: Balance 6 ranks",
      "Skills: Disable Device 10 ranks",
      "Skills: Disguise 8 ranks",
      "Skills: Move Silently 6 ranks",
      "Skills: Alchemy 4 ranks",
      "Feat: Alertness",
    ],
    features: [
      sf(
        "Weapon and Armor Proficiency",
        "Proficient with all simple and martial weapons, but gains no additional proficiency with armor or shields he is not already familiar with. Many of the saboteur's skills suffer penalties if he wears armor heavier than light armor.",
        1,
      ),
      sf(
        "Wing Use (Ex)",
        "Saboteurs are masters at using airman wings (see the full book's Ch. 6: Aerial Equipment). The airman is able to increase the range of his wings, falling a mere 5 feet for every 20 feet traveled, rather than 5 feet per 10 feet.",
        1,
      ),
      sf(
        "Aerial Hiding (Ex)",
        "While flying using airman wings, the saboteur may hide from those on a specific airship — by flying below the airship, or by getting above it so he remains hidden by the bright light of the sun. This ability does not work at night, unless the saboteur is hiding below an airship. It is treated the same as a standard check for the Hide skill and is opposed by the Spot skill of anyone looking for the saboteur.",
        1,
      ),
      sf(
        "Explosives (Ex)",
        "With 8 hours of work and a successful Alchemy skill check (DC 20), an airship saboteur can concoct an explosive that causes severe hull damage when mounted on an airship's hull. The explosive costs 500 gp per application, and causes 3d8 hull points of damage per application when properly placed. To place it, the saboteur must be in contact with the exterior hull for 5 minutes, then make an Alchemy skill check (DC 25) to put the explosive into place; it detonates 2d4 rounds later and, if properly mounted, causes the damage above. If improperly mounted, the explosive makes a colorful blast of light and throws debris around, but causes no hull damage. The explosive may instead be detonated on the ground or on the deck of an airship, causing 2d6 hit points of damage to all creatures within a 10-foot radius, with a Reflex save (DC 15) needed to avoid half the damage.",
        3,
      ),
      sf(
        "Locate Officer (Ex)",
        "A successful Wisdom check (DC 12) allows an airship saboteur to locate an airship officer on the deck if within 100 feet of the officer. This does not require an action and is an automatic ability that functions anytime the saboteur is within range of an officer. It does not tell the saboteur what the officer's rank is, only that he is an officer.",
        4,
      ),
      sf(
        "Feather Fall (Sp)",
        "The saboteur has learned to cast the feather fall spell once per day as if he were a 10th-level wizard. The saboteur actually casts this spell, though he may not augment the spell with any metamagic feats.",
        5,
      ),
      sf(
        "Sneak Attack +1d6",
        "The saboteur gains a 1d6 sneak attack that works identically to a rogue's sneak attack ability. If the saboteur has an existing sneak attack ability, another 1d6 is added to the damage caused by that sneak attack ability.",
        6,
      ),
      sf(
        "Fly (Sp)",
        "The saboteur has mastered the ability to cast the fly spell at this level, and may use it once per day as if he were a 10th-level wizard. The saboteur actually casts this spell, though he may not augment the spell with any metamagic feats.",
        7,
      ),
      sf(
        "Engine Wrecker (Ex)",
        "By spending one full round of work on an airship engine, the saboteur is allowed to make a Disable Device skill check (DC equal to the Repair DC of the engine). If this check succeeds, the saboteur may cause 1d8 hull points of damage to the engine. This ability may not be used more than once on a single engine. When used, the damage is held in waiting — the saboteur may decide to have it delayed by one minute per level of this prestige class. When the time expires, all accumulated damage is applied at once.",
        8,
      ),
      sf(
        "Take Down (Ex)",
        "This attack must be made during a surprise round. It is resolved as a standard melee attack that, if successful, immediately inflicts enough nonlethal damage to the target to render him unconscious. This attack only works against targets that are normally affected by sneak attacks. Due to the intense concentration needed to execute this attack, the saboteur is left exposed during the round immediately following its use and is denied his Dexterity bonus while he attempts to regain his bearings.",
        9,
      ),
      sf(
        "Ship Killer (Ex)",
        "Similar to engine wrecker, but one round of work is enough to completely disable a single engine, reducing its hull points to zero if the skill check is successful. If the skill check fails, however, the engine immediately suffers 1d8 hull points of damage and the saboteur suffers 1d4 hull points of damage per lift factor as the engine blasts flares of energy from its surface.",
        10,
      ),
    ],
  },
];
