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
  }];
