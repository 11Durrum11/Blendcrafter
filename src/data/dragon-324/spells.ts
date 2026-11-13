// Dragon #324 — "Spellcraft: Hidden Book — Illusions of the Mind" by
// Rich Burlew (pp. 70-72), staged 2026-11-09. All six spell headers and
// texts page-image verified; the article's spell-list sidebar
// misspells two names ("Sensory Depravation," "Shadowy Crappler") —
// the spell headers govern.
//
// Shape notes (live SpellDefinition): `targetOrArea` carries the
// printed Target/Area/Effect text without its label; material and
// focus components ride in `note`. Three of the six headers print no
// Target line (Sensory Deprivation, Shadowy Grappler, Solipsism) —
// those records carry "One creature" from the spell's text, disclosed
// in their notes. Shadowy Grappler also prints NO Casting Time line —
// staged as printed.
//
// Collision adjudication vs the live Spell Compendium fan-index
// records (probe 2026-11-09): Chalkboard and Shadowy Grappler are new.
// The other four differ from their Spell Compendium reprints and stage
// as -324 variants per the differing-reprint rule: Delusions of
// Grandeur (the SpC version grants a Charisma bonus per the live
// record's summary; the magazine version does not), Phantom Foe (Will
// negates here; Will disbelief in SpC), Sensory Deprivation (Sor/Wiz 3
// and Will negates here; Sor/Wiz 4 and Will disbelief in SpC),
// Solipsism (Sor/Wiz 6 here; Sor/Wiz 7 in SpC).

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #324 — Spellcraft: Hidden Book (Rich Burlew)";
const URL = "https://archive.org/details/DragonMagazine260_201801";

function C(o: Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary" | "targetOrArea">): SpellDefinition {
  return {
    school: "Illusion",
    descriptors: [],
    castingTime: "1 standard action",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: URL,
    ruleset: "core",
    ...o,
  } as SpellDefinition;
}

export const DRAGON_324_SPELLS: SpellDefinition[] = [
  C({
    id: "chalkboard",
    name: "Chalkboard",
    summary: "Conjures an illusory chalkboard up to 10 feet square that floats before you; you can write or draw on it in any color, erase it with a gesture, and move it about as you concentrate.",
    subschool: "Figment",
    levels: { "Sorcerer/Wizard": 0 },
    components: "S, M",
    note: "Material component: a piece of colored chalk.",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Figment of chalkboard up to 10 ft. by 10 ft. square",
    duration: "Concentration + 1 round/level",
    savingThrow: "Will disbelief (if interacted with)",
    spellResistance: "No",
  }),
  C({
    id: "shadowy-grappler",
    name: "Shadowy Grappler",
    summary: "A shadowy force that only the target can perceive seizes and grapples it, making a grapple check each round on your turn and working to pin it with its mouth covered; no other creature can join the grapple.",
    subschool: "Shadow",
    descriptors: ["Mind-Affecting"],
    levels: { "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    note: "Material component: a dried squid tentacle. The printed header has no Target line; the spell affects one creature, per its text.",
    castingTime: "Not printed in source.",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "1 round/level (D)",
    savingThrow: "Will partial (see text)",
    spellResistance: "Yes",
  })];
