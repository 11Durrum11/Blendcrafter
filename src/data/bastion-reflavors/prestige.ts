/**
 * Bastion reflavors — prestige classes .
 * Two Complete Warrior prestige classes, restored at Shaun's order
 * and reframed for the Bastion's Southeast Brigade — "the
 * Southie," as everyone calls it: the Watch's detective arm,
 * private eyes, door-workers, and hard-drinking ex-Watch dicks in
 * a city where the Watch is judge and jury. See
 * SOUTHEAST-BRIGADE.md for the full lore. Mechanics are byte-identical in substance to the printed classes;
 * only names, framing, and flavor text have changed. Each record
 * keeps its original publication citation and carries the APOC
 * house reflavor line.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const CW = "Complete Warrior";
const CW_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Warrior.pdf";
const CH2 = `${CW} — Chapter 2: Prestige Classes`;

export const BASTION_PRESTIGE: PrestigeClassDefinition[] = [
  {
    id: "stillhouse-brawler",
    name: "Stillhouse Brawler",
    ruleset: "core",
    source: `${CH2} — Stillhouse Brawler (p. 27)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Escape Artist", "Hide", "Jump",
      "Listen", "Move Silently", "Perform", "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Skills: Tumble 8 ranks",
      "Feats: Dodge, Great Fortitude, Improved Unarmed Strike (or the monk's unarmed strike ability)",
      "Special: Flurry of blows ability and evasion ability",
      "Special: Must be taken in by the stillhouse circle and survive a night of drinking among them",
    ],
    features: [
      {
        key: "stillhouse-brawler-features",
        name: "Stillhouse Brawler Features",
        category: "trait",
        description:
          "A staggering pugilist — most often a burnt-out ex-Watch dick working the dockside stillhouses — who fights with whatever is at hand: drink like a demon turns strong alchemical spirits into Strength and Constitution at the cost of Intelligence, Wisdom, and Dexterity (1st), and his improvised weapons deal ever-increasing damage (1st; improved at 4th, greater at 5th, superior at 9th). Also gains stagger, a surprise charge that need not run straight (2nd), swaying waist dodge bonus (3rd), an AC bonus (+1 at 4th, +2 at 9th), Improved Feint (6th) and Improved Grapple (7th) as bonus feats, for medicinal purposes healing (8th), corkscrew rush (9th), and a breath of flame at 10th. APOC house reflavor — renamed and reframed for the Bastion.",
        source: `${CH2} — Stillhouse Brawler (pp. 27–29)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "inkbound-bruiser",
    name: "Inkbound Bruiser",
    ruleset: "core",
    source: `${CH2} — Inkbound Bruiser (p. 82)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Hide", "Jump", "Knowledge", "Listen", "Move Silently", "Perform",
      "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +3",
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Endurance, Improved Grapple, Improved Unarmed Strike",
      "Note: The book lists the class skill simply as Knowledge; entered as printed",
    ],
    features: [
      {
        key: "inkbound-bruiser-features",
        name: "Inkbound Bruiser Features",
        category: "trait",
        description:
          "A door-and-dockside bruiser of the Southie whose alchemical sigil-ink tattoos, etched by the quarter's hereditary ink-smiths, do the work of monastic discipline: his inkbound bruiser levels stack with monk levels for AC, unarmed damage, and speed (monk abilities, 1st), and he gains a sigil tattoo at 1st and every two levels after (3rd, 5th, 7th, 9th), chosen from the ink-smiths' pattern book (anchor, anvil, badge, bell, boiler, chain, cog, crane, dagger, falcon, gavel, gear, gull, key, lantern, lion, moth, net, piston, rat, raven, rope, saw, scales, scorpion, shield, spider, valve, wall, whistle, and others), each granting its described power, often a number of times per day equal to his tattoo count. APOC house reflavor — renamed and reframed for the Bastion.",
        source: `${CH2} — Inkbound Bruiser (pp. 82–85)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
];
