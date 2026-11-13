// Dragon Magazine #320 (June 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine320_djvu.txt) and verified against the page
// images (magazine pp. 90–94), which govern wherever the OCR
// layer garbles numbers.
//
// All ten records come from "Under Command: Forms of Legend —
// A Shapechanging Giants of Legend Preview" by Jesse Decker
// (pp. 90–94). The survey brief expected the article's spells to
// be D&D Miniatures skirmish forms; they are not — the article
// prints ten complete RPG spells (the miniatures connection is
// only the article's framing and its "New Spells" sidebar list),
// so all ten stage. The issue's #318 Under Command precedent
// (three skirmish-only commander classes staged none) does not
// apply to full stat blocks.
//
// Every one of the ten was reprinted in the Spell Compendium,
// and every reprint differs from the magazine version (levels,
// class lists, durations, or redesigned effects — see the note
// at the end of each summary). The catalog already holds the
// Spell Compendium versions (fan-index records in
// spells/spell-compendium-*.ts), so per the issue-318 rule the
// magazine versions stage suffixed -320 and both live.
//
// These spells print no Saving Throw or Spell Resistance lines
// (self-targeted form changes); both fields are carried as
// "None" / "No" per the house convention for unprinted lines.
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM320_UC = "Dragon Magazine #320 — Under Command: Forms of Legend";
const URL320 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine320_djvu.txt";

export const DRAGON_320_SPELLS: SpellDefinition[] = [
{
    id: "wild-runner-320",
    name: "Wild Runner",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 4 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a centaur (see the Monster Manual, page 32). Your creature type changes to monstrous humanoid, and your size changes to Large; you have the space and reach of a centaur (10 ft./5 ft.). You gain the Strength, Dexterity, and Constitution scores of an average centaur (Str 18, Dex 14, Con 15), but retain your own mental ability scores. Your base land speed becomes 50 feet. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You may still use any extraordinary, spell-like, and supernatural abilities possessed by your normal form. You gain all the advantages of a quadruped form (greater carrying capacity, +4 bonus to resist trip attacks, and so on); this includes the ability to fight effectively while carrying a rider. You may still use your equipment and cast spells normally.",
    source: DM320_UC,
    sourceUrl: URL320,
  }
];
