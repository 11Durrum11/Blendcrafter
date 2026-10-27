/**
 * Sorcery & Steam base classes: the three new classes of Chapter 2 of
 * Sorcery & Steam (Fantasy Flight Games, Legends & Lairs) — Animal
 * Lord, Artificer, and Musketeer. Built 2026-10-27 from the copy in
 * Shaun's Dropbox library:
 *   /A POC DM related/Desktop/Sorcery & Steam.pdf
 *
 * The book is a 3.0-era d20 sourcebook and prints 20-level tables;
 * progression rows here are the book's printed rows for levels 1–10,
 * matching this app's per-class level cap convention (see
 * src/data/core/new-base-classes.ts). 3.0 skill names in the book's
 * class-skill lists are mapped to their 3.5 equivalents (Animal
 * Empathy and Wilderness Lore / Intuit Direction fold into Handle
 * Animal and Survival; Alchemy is Craft (alchemy)); prerequisites
 * and feature text elsewhere in this pack quote the book's own
 * names. The Artificer's Fortitude column is a nonstandard
 * progression in the book (advancing every two levels from +0);
 * the printed rows are carried explicitly, as the engine prefers
 * shipped rows over its fallback formulas.
 */
import type { ClassDefinition, ClassLevelProgressionRow } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, levels 1–10
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, levels 1–10
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const SS = "Sorcery & Steam";
const SS_PATH = "/A POC DM related/Desktop/Sorcery & Steam.pdf";
const CH2 = `${SS} — Chapter 2: Character Classes`;

export const SORCERY_STEAM_CLASSES: ClassDefinition[] = [
  {
    id: "animal-lord",
    name: "Animal Lord",
    ruleset: "sorcery_steam",
    source: `${CH2} — The Animal Lord (pp. 37–39)`,
    sourceUrl: SS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: ["Handle Animal", "Balance", "Climb", "Craft", "Escape Artist", "Hide", "Intimidate", "Survival", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Ride", "Spot", "Swim", "Tumble"],
    features: [
      {
        key: "animal-lord-totem",
        name: "Totem and Master of the Wild",
        description:
          "1st: totem (choose an animal totem — ape, bear, boar, cheetah, and others — and gain one of its listed abilities; a new totem ability at 5th, 9th, and 13th level), an animal companion, the Feral Child heritage feat, and master of the wild. 2nd: Track. 3rd: uncanny dodge (Dex bonus to AC). 4th: the Feral Athleticism feat. 6th: uncanny dodge (can't be flanked). 7th: master of the wild 2/day. 8th: the Feral Voice feat. 11th: uncanny dodge (+1 against traps). 12th: the Feral Senses feat. Proficient with all simple weapons; not proficient with armor or shields.",
        category: "trait",
        source: `${CH2} — The Animal Lord (pp. 38–39)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "artificer",
    name: "Artificer",
    ruleset: "sorcery_steam",
    source: `${CH2} — The Artificer (pp. 41–43)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "half",
    goodSaves: ["will"],
    // Printed Fortitude column is nonstandard (0,1,1,2,2,3,3,4,4,5 for
    // levels 1–10); carried explicitly rather than via goodSaves.
    progression: rows(HALF, HALF, P, G),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Diplomacy", "Disable Device", "Drive", "Heal", "Intimidate", "Knowledge (all)", "Listen", "Munitions", "Open Lock", "Profession", "Ride", "Search", "Use Rope", "Use Steamcraft Device"],
    features: [
      {
        key: "artificer-steamcraft-creations",
        name: "Sabotage and Steamcraft Creations",
        description:
          "1st: sabotage (add your class level as a bonus on Disable Device checks against non-magical devices or mechanisms) and steamcraft creations (construct any of the book's new non-magic steamcraft items, weapons, and armor, given the resources). 2nd: bonus Skill Focus for one of your class skills (again at 8th, 14th, and 20th). 5th: master craftsman +1 (temporarily improve normal items, weapons, and armor to masterwork quality with the appropriate Craft skills; the bonus rises to +2 at 8th, +3 at 11th, +4 at 14th, +5 at 17th, and +6 at 20th) and steamcraft focus (again at 12th and 19th). An artificer can disarm complex mechanical traps and devices with Disable Device DCs above 20, as a rogue can. Proficient with all simple weapons and light armor. The class-skill list's Knowledge entry is the book's 'any science or technical skills, taken individually.'",
        category: "trait",
        source: `${CH2} — The Artificer (pp. 42–43)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "musketeer",
    name: "Musketeer",
    ruleset: "sorcery_steam",
    source: `${CH2} — The Musketeer (pp. 44–46)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Disable Device", "Escape Artist", "Gather Information", "Intimidate", "Jump", "Munitions", "Profession", "Ride", "Sense Motive", "Spot", "Swim", "Tumble", "Use Rope", "Use Steamcraft Device"],
    features: [
      {
        key: "musketeer-musketry",
        name: "Musketry",
        description:
          "1st: musketry (the benefits of Combat Reload and Rapid Reload with firearms, only in light or no armor). 2nd: Reload on the Run as a bonus feat. 3rd: avoid fire (a dodge bonus to AC against ranged attacks, rising from +1 at 3rd level to +4 by 18th, lost whenever your Dexterity bonus to AC is lost). 4th: move and I'll shoot (fire a Small or smaller firearm in a threatened area without provoking an attack of opportunity). 5th: bonus feat from the musketeer list (again at 8th, 11th, 14th, 17th, and 20th). 7th: take cover (cover bonuses to AC and Reflex saves increase by +2). 10th: crack shot (reduce a foe's cover bonuses to AC and Reflex saves by 2 when attacking with a firearm). 13th: deadly aim +1d6 (careful aim as a full-round action adds bonus damage to one shot; +2d6 at 16th, +3d6 at 19th). Proficient with a martial-leaning weapon list including all firearms, and with light armor.",
        category: "trait",
        source: `${CH2} — The Musketeer (pp. 45–46)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
];
