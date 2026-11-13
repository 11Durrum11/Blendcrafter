// Dragon Magazine #318 (April 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine318_djvu.txt).
//
// All eight records come from "Children of Ka" (lizardfolk and
// dinosaur material). Each was compared against its Spell
// Compendium reprint: every reprint differs from the magazine
// version (levels, effects, or both), so the magazine versions
// stage suffixed -318 where the base id is taken; Swamp Stride
// has no Spell Compendium record and stages unsuffixed.
// The Oriental Adventures Update's one fully printed spell,
// Honorable Weapon, is NOT staged — it is held to reference.md
// in full under Shaun's 2026-11-09 removal order (all Oriental
// Adventures / oriental-themed material out — see MANIFEST.md).
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM318_KA = "Dragon Magazine #318 — Children of Ka";
const URL318 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine318_djvu.txt";

export const DRAGON_318_SPELLS: SpellDefinition[] = [
  {
    id: "swamp-lung-318",
    name: "Swamp Lung",
    ruleset: "core",
    school: "Necromancy",
    descriptors: [],
    levels: { Druid: 5 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    summary:
      "The creature targeted begins coughing violently for 1d6 rounds, becoming helpless, and is exposed to the filth fever disease in addition to the coughing. Material component: a bit of rotten plant material from a swamp.",
    source: DM318_KA,
    sourceUrl: URL318,
  },
  {
    id: "swamp-stride",
    name: "Swamp Stride",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Teleportation",
    descriptors: [],
    levels: { Druid: 5, Ranger: 4 },
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level or until expended",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "As tree stride, but you travel through pools of water at least 1 foot deep rather than trees, to a maximum of 500 feet per jump. This spell is still considered rare in Ka's church and among other faiths and druids, though it is becoming more common.",
    source: DM318_KA,
    sourceUrl: URL318,
  }];
