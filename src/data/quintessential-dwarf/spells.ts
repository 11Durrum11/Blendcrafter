import type { SpellDefinition } from "@/engine/types";

// The Quintessential Dwarf (Mongoose Publishing, ©2002,
// Collectors' Series) — "Spells of the Dwarves," the
// complete spell list closing the Dwarven Magic chapter
// (printed pp. 81-82), transcribed from Shaun's own
// scanned copy (image-only; read visually page by page,
// 2026-11-04). This is a 3.0-era book: casting times
// print as "1 action," and level lines print abbreviated
// class names (Sor/Wiz, Brd — expanded here to the
// catalog's list names Sorcerer/Wizard and Bard, per the
// Bastards and Bloodlines pack precedent). Two spells
// also appear on the book's Mining and Smith domain lists
// (see the Religion chapter, printed pp. 83-88); the
// domain entries are recorded in the levels map exactly
// as printed. Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

const QD = "The Quintessential Dwarf";
const QD_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Dwarf.pdf";

export const QUINTESSENTIAL_DWARF_SPELLS: SpellDefinition[] = [
  {
    id: "detect-hazard",
    name: "Detect Hazard",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 2, "Bard": 2, "Mining": 1 },
    components: "V, M",
    castingTime: "5 minutes",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "Quarter circle emanating from caster to the edge of the range",
    duration: "Concentration, up to 1 minute/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary: "You are able to detect the following mining hazards: magma flows, 100 gallons or more of water, and pockets of naturally occurring, hazardous gas. As long as this spell is cast once a week in a mine tunnel, any of these mining events is instead treated as 'Vein Ends' when rolling on the Mining Tunnel Events Table. This spell may also be used to detect the presence of traps using gas, water or magma within the spell's range, provided they are naturally occurring or are stored in the area rather than being magically created. Material component: a bit of diamond dust worth 100 gp.",
    source: `${QD}, pp. 81-82`,
    sourceUrl: QD_PATH,
  },
  {
    id: "extract-ore",
    name: "Extract Ore",
    ruleset: "core",
    school: "Conjuration (Summoning)",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 3, "Druid": 4, "Mining": 3 },
    components: "V, S",
    castingTime: "1 hour",
    range: "Touch",
    targetOrArea: "Up to 100 pounds of mined rock per level",
    duration: "1 hour/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "Casting this spell extracts purified ore from the products of a mine, processing 100 pounds of rock for every hour of the spell's duration. The ore is removed from the rock and assembled into refined ingots in a pile within 20 feet of the caster. This ore is identical to professionally smelted ore, in both quality of the ingots and purity of the metal, and is ready to sell. While much slower than traditional smelting, this spell has the advantages of a lower overhead and no need for employees other than the wizard or cleric casting the spell himself.",
    source: `${QD}, p. 82`,
    sourceUrl: QD_PATH,
  },
  {
    id: "forge-mastery",
    name: "Forge Mastery",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 1, "Bard": 1, "Smith": 1 },
    components: "V, S",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "Self",
    duration: "1 hour/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "This spell provides a +2 enhancement bonus to any skill checks made using the Craft (weaponsmith), Craft (armoursmith), or Craft (jewellery) skills.",
    source: `${QD}, p. 82`,
    sourceUrl: QD_PATH,
  },
  {
    id: "pick-hands",
    name: "Pick Hands",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 5, "Mining": 4 },
    components: "V, S, M",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "One willing creature",
    duration: "1 hour/level",
    savingThrow: "None",
    spellResistance: "No",
    summary: "The hands and forearms of this spell's target transform themselves into +1 light picks (damage 1d4, critical x4), with which the character is considered proficient. If the character uses his transformed appendages while mining, he is able to tunnel through an additional cubic foot of stone each hour. Material component: a pair of light picks which must be held by the target of the spell.",
    source: `${QD}, p. 82`,
    sourceUrl: QD_PATH,
  },
];
