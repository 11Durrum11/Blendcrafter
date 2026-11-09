import type { RaceDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #323 pack (library-staging/packs/dragon-magazine/issue-323)
// The two cyclopean subraces from "Winning Races: Cyclopeans" by
// Eric Cagle (pp. 92–95). Both trait blocks were verified against
// the page images (magazine p. 95), which correct the OCR layer:
// the Menta block's ability line reads +2 Constitution, −2
// Dexterity (OCR garbled the signs), and both blocks print
// Level Adjustment +0.
//
// Adjudications (see MANIFEST.md):
//   * The article prints TWO complete racial trait blocks — the
//     peaceful MENTA cyclopeans and the savage FERAL-KIND
//     cyclopeans — so two records stage. Neither name exists in
//     the catalog.
//   * The magazine prints no type line. Cyclopeans are staged as
//     Humanoid with the Giant subtype: they are a PC race of
//     Medium humanoids descended from the cyclopes (giants),
//     with no racial Hit Dice; the printed darkvision is their
//     own trait, carried below, not a type trait.
//   * The Single Eye penalties (−2 on ranged attack rolls,
//     Search checks, and Spot checks) are carried in
//     skillBonuses for the two skills, mirroring the issue-319
//     aarakocra handling of racial skill modifiers, and stated
//     in full in the trait text.
//   * The article's prose (history, personality, physical
//     description, relations, alignment, religion, names,
//     adventurers) and the Cyclopean Vital Statistics tables
//     (starting ages, aging effects, height and weight, p. 94)
//     are in reference.md.
// Trait descriptions are faithful mechanical paraphrases in our
// own words; no magazine prose is reproduced.

const DM323 = "Dragon Magazine #323";
const DM323_PATH =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine323_djvu.txt";
const SRC = `${DM323} — Winning Races: Cyclopeans`;

export const DRAGON_323_RACES: RaceDefinition[] = [
  {
    id: "menta-cyclopean",
    name: "Menta Cyclopean",
    ruleset: "core",
    source: SRC,
    sourceUrl: DM323_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Giant"],
    abilityModifiers: { con: 2, dex: -2 },
    favoredClass: "Wizard",
    levelAdjustment: 0,
    skillBonuses: { search: -2, spot: -2 },
    traits: [
      {
        key: "menta-cyclopean-humanoid-giant",
        name: "Humanoid (Giant)",
        description:
          "Menta cyclopeans are humanoids with the giant subtype, descended from the cyclopes. (The magazine prints no type line; staged as Humanoid (Giant) per their printed descent — see the pack MANIFEST.md.)",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "menta-cyclopean-darkvision",
        name: "Darkvision",
        description:
          "Cyclopeans can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight. Menta cyclopeans function fine with no light at all.",
        category: "special-quality",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "menta-cyclopean-future-sight",
        name: "Future Sight (Su)",
        description:
          "Three times per day, a Menta cyclopean may spend a full-round action to peer into the future of a creature. This functions as the augury spell, except it does not require any components and cannot predict the future of the cyclopean himself. The cyclopean must touch the target creature for the full round. The Menta cyclopean may only use this ability once per creature per day.",
        category: "special-quality",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "menta-cyclopean-single-eye",
        name: "Single Eye",
        description:
          "Because they only have one eye, cyclopeans lack depth perception. Cyclopeans suffer a −2 penalty on all ranged attack rolls, Search checks, and Spot checks (the Search and Spot penalties are included in this race's skill bonuses).",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "menta-cyclopean-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Giant. Bonus Languages: Dwarven, Gnome, Sylvan, and Terran. Cyclopeans live close to the earth and often learn the languages of those attuned to it.",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
    ],
  },
  {
    id: "feral-kind-cyclopean",
    name: "Feral-Kind Cyclopean",
    ruleset: "core",
    source: SRC,
    sourceUrl: DM323_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Giant"],
    abilityModifiers: { str: 2, con: 2, dex: -2, int: -2 },
    favoredClass: "Barbarian",
    levelAdjustment: 0,
    skillBonuses: { search: -2, spot: -2 },
    traits: [
      {
        key: "feral-kind-cyclopean-humanoid-giant",
        name: "Humanoid (Giant)",
        description:
          "Feral-kind cyclopeans are humanoids with the giant subtype, descended from the cyclopes. (The magazine prints no type line; staged as Humanoid (Giant) per their printed descent — see the pack MANIFEST.md.)",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "feral-kind-cyclopean-darkvision",
        name: "Darkvision",
        description:
          "Cyclopeans can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight. Feral-kind cyclopeans function fine with no light at all.",
        category: "special-quality",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "feral-kind-cyclopean-glimpse-the-future",
        name: "Glimpse the Future (Su)",
        description:
          "Feral-kind cyclopeans lack the full future sight ability of their Menta cyclopean kin. Instead, they can see brief snatches of the future that let them react to danger better. Feral-kind cyclopeans get a +1 insight bonus on Initiative checks and Reflex saves.",
        category: "special-quality",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "feral-kind-cyclopean-single-eye",
        name: "Single Eye",
        description:
          "Because they only have one eye, cyclopeans lack depth perception. Cyclopeans suffer a −2 penalty on all ranged attack rolls, Search checks, and Spot checks (the Search and Spot penalties are included in this race's skill bonuses).",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
      {
        key: "feral-kind-cyclopean-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Giant. Bonus Languages: Dwarven, Gnome, Sylvan, and Terran. Cyclopeans live close to the earth and often learn the languages of those attuned to it.",
        category: "trait",
        source: SRC,
        sourceUrl: DM323_PATH,
      },
    ],
  },
];
