import type { SpellDefinition } from "@/engine/types";

// Explorer's Handbook (Eberron, Wizards of the Coast, 2005):
// the book prints exactly one new spell-like record — the
// artificer infusion Invoke Elemental, presented as a
// "New Infusion" sidebar in the Windwright Captain section
// (p. 75). Transcribed from Shaun's own copy
// (text-extracted), 2026-11-05. The book prints no other
// new spells and no new feats. Summary is a short
// mechanical paraphrase in our own words, per house style.

export const EXPLORERS_HANDBOOK_SPELLS: SpellDefinition[] = [
  {
    id: "invoke-elemental",
    name: "Invoke Elemental",
    ruleset: "eberron",
    school: "Conjuration",
    descriptors: [],
    levels: {
      "Artificer": 5,
    },
    components: "V, S",
    castingTime: "1 round",
    range: "Touch",
    targetOrArea: "Vehicle with a bound elemental touched",
    duration: "1 round/level (D)",
    savingThrow: "Will negates; see text",
    spellResistance: "No",
    summary: "You temporarily release a bound elemental from the vehicle you touch and compel it to obey you. The elemental appears adjacent to you when the casting is complete and acts immediately on your turn, attacking your opponents to the best of its ability; you can verbally direct it. While invoked, the elemental is no longer bound to the vehicle, which is treated as if its elemental is suppressed until the infusion ends. If the elemental is destroyed or affected by a spell that would send it back to its home plane while invoked, it vanishes and remains suppressed for 24 hours, during which it cannot be invoked again. You can dismiss the effect as a free action on your turn, returning the elemental to its bound state. If the elemental is uncontrolled (or controlled by someone other than you) when the infusion is imbued, it receives a Will saving throw to resist the infusion.",
    source: "Explorer's Handbook, p. 75",
    sourceUrl: "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Explorer's Handbook.pdf",
  },
];
