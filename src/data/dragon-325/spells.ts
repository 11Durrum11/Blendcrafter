// Dragon Magazine #325 (November 2004) — spell draft: "Spellcraft: Myths of the Shadow."
// Typed SpellDefinition in the house shape of recent packs: targetOrArea carries the printed
// Target/Area text without a label; material/focus components ride in `note`.
// Three of these spells were later reprinted in Spell Compendium with differing mechanics
// and stage as -325 variants beside the live records; the three spell headers that print no
// Saving Throw / Spell Resistance lines stage those fields as "Not printed in source"
// (the live catalog's own convention for this situation) with the gap flagged in MANIFEST.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #325 — Spellcraft: Myths of the Shadow (Rahul Kanakia), pp. 70-72";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Divination",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_325_SPELLS: SpellDefinition[] = [
  C({
    id: "dead-end",
    name: "Dead End",
    school: "Illusion",
    subschool: "Shadow",
    levels: { Assassin: 1, Bard: 1, "Sorcerer/Wizard": 1 },
    components: "V, S, M",
    note: "Material component: a pinch of some odoriferous spice. The Black Cloaks' manual credits this spell to Black Cloak Falam.",
    range: "Touch",
    targetOrArea: "One creature/level touched",
    duration: "1 hour/level (D)",
    savingThrow: "Will negates (harmless) or Will disbelief (if interacted with); see text",
    spellResistance: "Yes or no; see text",
    summary:
      "The targets' spoor — tracks, scent, and other signs of passage — is flawlessly disguised by an illusion that defeats even taste and touch. Anyone interacting with the spoor (such as by following a Trail) makes a Will save to disbelieve, and even on a success takes a \u22125 penalty on Search, Survival, and Wisdom checks made to track. Spell resistance does not apply to the spell's effect on tracks, but creatures targeted by the spell itself get saves and spell resistance as normal.",
  }),
  C({
    id: "marked-man",
    name: "Marked Man",
    school: "Divination",
    levels: { Assassin: 2, Ranger: 1, "Sorcerer/Wizard": 2 },
    components: "V, S, F",
    note: "Arcane focus: an object owned by the creature or a piece of the creature to be tracked, such as a tuft of hair or a fingernail. The magazine header prints no Saving Throw or Spell Resistance line for this spell. The Black Cloaks' manual credits this spell to Karandras.",
    castingTime: "1 minute",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 day/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "You become attuned to the creature that most recently carried the focus item on its person for one day or longer (you do not count as this creature), gaining a +10 bonus on Search and Survival checks to track the owner or find evidence of his passage. The spell gives no insight into the creature's identity or location, provides no trail, and does not grant the Track feat.",
  })];
