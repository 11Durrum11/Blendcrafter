/**
 * Homebrew pack — D&D Wiki races from Shaun's "CURRENT LIST OF
 * IN USE SRD WIKI LINKS" document (2026-11-02). The Dwelf is
 * listed under the document's "***PC CLASSES***" heading but is
 * a race, and is filed here as a RaceDefinition. Ruleset
 * "homebrew"; sourceUrl is the exact URL as written in the
 * document. Short own-words mechanical summaries throughout.
 */
import type { RaceDefinition } from "@/engine/types";

const DWELF = "D&D Wiki — Dwelf (3.5e Race)";
const DWELF_URL = "http://www.dandwiki.com/wiki/Dwelf";

export const DANDWIKI_RACES: RaceDefinition[] = [
  {
    id: "dwelf",
    name: "Dwelf",
    ruleset: "homebrew",
    source: DWELF,
    sourceUrl: DWELF_URL,
    size: "Medium",
    baseSpeed: 25,
    type: "Humanoid",
    subtypes: ["Dwarf", "Elf"],
    abilityModifiers: { dex: 2, con: 2, cha: -4 },
    favoredClass: "Any",
    levelAdjustment: 0,
    traits: [
      {
        key: "dwelf-steady",
        name: "Steady",
        description: "Base land speed is 25 feet, and is not reduced by medium armor or a medium load; the speed penalty from heavy armor or a heavy load is halved.",
        category: "trait",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-hardiness",
        name: "Hardiness",
        description: "+2 on saving throws against poison and against sleep spells and spell/spell-like effects.",
        category: "trait",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-stonecunning",
        name: "Stonecunning",
        description: "+1 racial bonus on Search checks to notice unusual stonework (the dwelf gets an automatic check when passing within 20 feet of it, and can find stonework traps as a rogue does); +2 on Survival checks while underground.",
        category: "special-quality",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-stability",
        name: "Stability",
        description: "+2 on ability checks to resist bull rush and trip attempts while standing on the ground.",
        category: "trait",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-vision",
        name: "Low-Light Vision and Darkvision",
        description: "Low-light vision (seeing roughly one and a half times as far as a human in dim light, as printed) and darkvision out to 30 feet.",
        category: "special-quality",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-weapon-training",
        name: "Weapon Training",
        description: "Martial Weapon Proficiency with the longsword, rapier, longbow (including composite), and shortbow (including composite) as bonus feats; dwarven waraxes and dwarven urgroshes are treated as martial weapons rather than exotic weapons.",
        category: "trait",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
      {
        key: "dwelf-languages",
        name: "Languages",
        description: "Automatic languages: Common, Dwarven, and Elven.",
        category: "trait",
        source: DWELF,
        sourceUrl: DWELF_URL,
      },
    ],
  },
];
