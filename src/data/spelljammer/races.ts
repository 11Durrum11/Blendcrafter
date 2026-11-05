import type { RaceDefinition } from "@/engine/types";

// Spelljammer races, converted from AD&D 2e to 3.5 (Shaun,
// 2026-11-04: "give me the spelljammer box sets but advanced
// them to 3.5, put everything where it has to be"). Source:
// Shaun's own copy of Spelljammer: Adventures in Space
// (Lorebook of the Void), read page by page from his scan.
//
// The Lorebook's Monstrous Compendium appendix, as scanned,
// holds only two playable-race entries: Dracon and Giff. The
// loose-leaf sheets for Grommam, Hadozee, Hurwaet, Rastipede,
// Scro, and Xixchil are missing from this copy of the boxed
// set (the Ephemeral sheet is in it twice instead), and no
// stats are invented for them here — if the missing sheets
// turn up, they convert on the same pattern as these two.
// Spacefaring lizard men get a prose section only (Lorebook
// p. 57): smarter and more adaptable than their groundling
// kin, but no stat block is printed, so the standard
// lizardfolk record stands for them. The Arcane have a full
// entry but are helm-dealers, never a character race.
//
// Conversion method: racial HD as printed; base speed = 2e
// movement x 2.5 ft; natural armor from the 2e AC (3.5 AC =
// 20 - 2e AC, less Dex/size). Ability modifiers and favored
// class are judged from each entry's own text and marked as
// conversion judgments in the pack notes; level adjustments
// are judged from racial HD plus the trait package. House
// style: short mechanical summaries written for this dataset;
// the book's text is not reproduced.

const LOV = "Spelljammer: Adventures in Space — Lorebook of the Void";
const SJ_PATH = "/A POC PC related/3.All to do with ships/spelljammer adventures in space.pdf";
const MCA = `${LOV}, Monstrous Compendium appendix`;

export const SPELLJAMMER_RACES: RaceDefinition[] = [
  {
    id: "dracon",
    name: "Dracon",
    ruleset: "core",
    source: `${MCA}, "Dracon" entry (converted to 3.5)`,
    sourceUrl: SJ_PATH,
    size: "Large",
    baseSpeed: 40,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 4, con: 2, int: 2 },
    favoredClass: "Cleric",
    levelAdjustment: 2,
    racialHitDice: 6,
    hitDie: "d8",
    naturalArmor: 6,
    traits: [
      {
        key: "dracon-thumb-claws",
        name: "Thumb-Claws",
        description: "Two claw attacks (1d4). The dracon's six-digit hands end in long thumb-claws that make it dangerous in hand-to-hand combat and adept at holds and wrestling.",
        category: "special-attack",
        source: `${MCA}, "Dracon" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "dracon-dueling-code",
        name: "Dueling Code",
        description: "Dracons settle disputes by a stylized dueling code — the challenged party chooses weapons and names the place and time, the challenger names the terms (to the death, first blood, half hit points, three falls). A dracon is honor-bound by terms offered to it, even by outsiders.",
        category: "trait",
        source: `${MCA}, "Dracon" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "dracon-herd-instinct",
        name: "Herd Instinct",
        description: "Dracons live in familial herds led by a kaba; one separated from its family sickens unless it can build or join a new family unit (they sometimes adopt non-dracons into the herd). Every herd, however small, keeps a shalla — a high priest — as its second office.",
        category: "trait",
        source: `${MCA}, "Dracon" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "dracon-languages",
        name: "Languages",
        description: "Dracon and Draconic; most speak Common only haltingly and with a thick accent, in a formal, ceremonial register.",
        category: "trait",
        source: `${MCA}, "Dracon" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
    ],
  },
  {
    id: "giff",
    name: "Giff",
    ruleset: "core",
    source: `${MCA}, "Giff" entry (converted to 3.5)`,
    sourceUrl: SJ_PATH,
    size: "Large",
    baseSpeed: 20,
    type: "Monstrous Humanoid",
    subtypes: [],
    abilityModifiers: { str: 6, con: 2, int: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    racialHitDice: 4,
    hitDie: "d8",
    naturalArmor: 5,
    traits: [
      {
        key: "giff-head-butt",
        name: "Head Butt",
        description: "A giff's head and snout are plated with thick, flexible chitin that acts as a natural helmet. On a charge, a giff can head butt for 2d6 damage.",
        category: "special-attack",
        source: `${MCA}, "Giff" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "giff-magic-resistance",
        name: "Magic Resistance",
        description: "The 2e entry gives giff 10% magic resistance; converted here as spell resistance equal to 5 + character level.",
        category: "special-quality",
        source: `${MCA}, "Giff" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "giff-magically-inert",
        name: "Magically Inert",
        description: "The giff have no spellcasters and are magically inert: spelljamming helms (even mind flayer series helms) have no effect on them, so a giff can never serve as a helmsman. They are deeply suspicious of magic and magical devices.",
        category: "special-quality",
        source: `${MCA}, "Giff" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "giff-smoke-powder-affinity",
        name: "Smoke Powder Affinity",
        description: "Giff prize firearms and explosives above all other weapons; any given giff stands a good chance of carrying an arquebus or (rarely) a wheel lock with smoke powder, and giff mercenaries traditionally take their pay in smoke powder charges (a standard hire is seven charges for a week — one a day).",
        category: "trait",
        source: `${MCA}, "Giff" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
      {
        key: "giff-platoon-and-rank",
        name: "Platoon and Rank",
        description: "Every giff holds a rank in its platoon, marked by tattoos, badges, and colored insignia recording past jobs and victories; giff obey their chain of command absolutely.",
        category: "trait",
        source: `${MCA}, "Giff" entry (converted to 3.5)`,
        sourceUrl: SJ_PATH,
      },
    ],
  },
];
