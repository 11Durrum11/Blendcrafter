// Dragon Magazine #351 (January 2007) — powers draft: 1 psionic power.
// The issue's Dark Sun article (Chris Flipse), pp. 32-35, prints one
// psionic power for its oasis adventure: acceptance. Per the brief's
// Dark Sun line, mechanics stage with lore stripped; the Athasian
// framing digests in reference.md §3.
// Modeled as a SpellDefinition record exactly as the catalog models
// psionic powers (Expanded Psionics Handbook powers precedent; see
// the issue-317 powers draft): the "school" is the power's discipline
// with a "(psionic power)" tag, the printed subschool rides in the
// subschool field, Display rides in components, Manifesting Time in
// castingTime, and Power Resistance in spellResistance. Power Points
// and Augment text ride in the summary and description. Summary and
// description are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.
// 3.5 form: the power is printed in full XPH (3.5) form — discipline,
// display, power points, augment — no 3.0 psionics conversion is
// needed; see SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const DM351 = "Dragon Magazine #351";
const DM351_PATH = "https://archive.org/details/DragonMagazine260_201801";

export const DRAGON_351_POWERS: SpellDefinition[] = [
  {
    id: "acceptance",
    name: "Acceptance",
    ruleset: "core",
    school: "Telepathy (psionic power)",
    subschool: "Charm",
    descriptors: ["Mind-Affecting"],
    levels: { "Telepath": 2 },
    components: "Display: Material and mental",
    castingTime: "1 round",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature",
    duration: "1 hour/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary: "Power Points: 3. As calm emotions, except as noted in the description: a 1-round manifesting time, a single target at Close range, and a 1 hour/level duration. Augment: for every 2 additional power points you spend, this power's save DC increases by 1 and its duration increases by 1 hour; for every 2 additional power points you spend, you can affect one additional target (all targets must be within 15 feet of at least one other target).",
    description: "This power functions like the calm emotions spell, except as noted here. It calms a single creature at Close range, suppressing strong emotion and negating confusion, morale penalties, and similar effects as calm emotions does, over a duration of 1 hour/level. Augment: you can augment this power in one or both of the following ways — 1. For every 2 additional power points you spend, this power's save DC increases by 1 and its duration increases by 1 hour. 2. For every 2 additional power points you spend, you can affect one additional target; all targets must be within 15 feet of at least one other target.",
    source: DM351,
    sourceUrl: DM351_PATH,
  },
];
