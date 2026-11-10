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
    id: "appraising-touch-325",
    name: "Appraising Touch",
    school: "Divination",
    levels: { Bard: 1, "Sorcerer/Wizard": 1 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 min./level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "The magazine header prints no Saving Throw or Spell Resistance line for this spell. The Black Cloaks' manual credits this spell to Black Cloak Ahren, the Unblinking Eye.",
    summary:
      "You gain an insight bonus equal to your caster level on Appraise checks to determine the value of items you touch. Even when you fail the Appraise check, you never misestimate the actual market value of an item by more than 50%.",
  }),
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
  }),
  C({
    id: "serene-visage-325",
    name: "Serene Visage",
    school: "Illusion",
    subschool: "Glamer",
    levels: { Assassin: 1, Bard: 1, "Sorcerer/Wizard": 1 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 min./level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "The magazine header prints no Saving Throw or Spell Resistance line for this spell. The Black Cloaks' manual credits this spell to Saernavar.",
    summary: "You assume a calm, serene visage, gaining an insight bonus equal to your caster level on all Bluff checks.",
  }),
  C({
    id: "shock-and-awe-325",
    name: "Shock and Awe",
    school: "Enchantment",
    descriptors: ["Mind-Affecting"],
    levels: { Assassin: 1, Bard: 1, "Sorcerer/Wizard": 1 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "1 flat-footed creature/level, no two of which can be more than 30 ft. apart",
    duration: "1 round",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Cast only in the surprise round and only against flat-footed creatures: each affected creature takes a \u221210 penalty on its next initiative roll. A creature that cannot be caught flat-footed (such as one with uncanny dodge) is not affected.",
  }),
  C({
    id: "spontaneous-search-325",
    name: "Spontaneous Search",
    school: "Divination",
    levels: { "Sorcerer/Wizard": 1 },
    components: "V, S, M",
    note: "Material component: a silk glove. The Black Cloaks' manual credits this spell to Master Traijin.",
    castingTime: "1 round",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One 30-ft.-cube",
    duration: "Instantaneous",
    savingThrow: "Will negates or none (object); see text",
    spellResistance: "Yes or no (object); see text",
    summary:
      "Upon casting, you become aware of the location and types of all inanimate objects within the area, as though you had taken 10 on a Search check over the entire area; the spell also reveals the contents of containers (even locked ones) if your Search result exceeds the DC of the Open Lock check needed to open them. The search is purely mental: it does not reveal traps, secret doors, or the contents of books or scrolls, and does not grant possession of any object found. Creatures in the area can make Will saves to conceal the objects they possess.",
  }),
];
