/**
 * Complete Psionic race data pack: the synad, the book's one new
 * playable race, from the "New Psionic Race: Synad" section of
 * Chapter 6 of Complete Psionic (Wizards of the Coast).
 * Built 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf
 * The PDF is a scan with no text layer; the traits were read by OCR
 * of the page images. Printed page numbers are used; in this PDF the
 * printed page is the PDF page minus one.
 *
 * Complete Psionic is a generic D&D 3.5 supplement, so the record
 * carries ruleset "core". As printed, synads have no ability score
 * modifiers and no level adjustment. The chapter's other character
 * material is not race data: the Talaire humans of the Six Hidden
 * Houses use the human race with a house-specific Wild Talent
 * variant (no separate record), and the chapter's racial classes
 * are a separate leveling system the app does not model.
 */
import type { RaceDefinition } from "@/engine/types";

const CP = "Complete Psionic";
const CP_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Psionic.pdf";
const CH6 = `${CP} — Chapter 6: Psionic Character Options`;

export const COMPLETE_PSIONIC_RACES: RaceDefinition[] = [
  {
    id: "synad",
    name: "Synad",
    ruleset: "core",
    source: `${CH6} — New Psionic Race: Synad (pp. 139–141)`,
    sourceUrl: CP_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Aberration",
    subtypes: [],
    abilityModifiers: {},
    favoredClass: "Any",
    levelAdjustment: 0,
    traits: [
      {
        key: "synad-aberration-type",
        name: "Aberration Type",
        description:
          "Synads are aberrations, not humanoids, despite their near-human appearance: they are not subject to spells or effects that affect only humanoids.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 140)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-darkvision",
        name: "Darkvision",
        description:
          "Synads can see in the dark out to 60 feet.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 140)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-naturally-psionic",
        name: "Naturally Psionic",
        description:
          "Synads gain 3 bonus power points at 1st level — one each for the overmind, the collective, and the oracle. This does not grant the ability to manifest powers unless they gain that ability through another source, such as levels in a psionic class.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 140)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-threefold-mind",
        name: "Threefold Mind (Su)",
        description:
          "The part of a synad's mind known as the oracle grants a daily precognitive edge: a +2 insight bonus that the synad can apply to an initiative check, an attack roll, or a saving throw. For an attack roll or saving throw, the synad can elect to apply the bonus after determining whether the unmodified roll succeeds. A synad can apply only one precognitive edge per day.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 140)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-collective",
        name: "Collective (Su)",
        description:
          "The part of a synad's mind known as the collective lets him tap into a racial network of knowledge and information: by spending 1 power point as a free action, the synad gains a +2 bonus on any Knowledge or Psicraft check he makes.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 141)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-multitask",
        name: "Multitask (Su)",
        description:
          "Once per day, a synad's threefold mind can temporarily separate, allowing him to take more than a single mental action in a round (such as manifesting a power), as described in the book.",
        category: "special-quality",
        source: `${CH6} — Synad Racial Traits (p. 141)`,
        sourceUrl: CP_PATH,
      },
      {
        key: "synad-languages",
        name: "Languages",
        description:
          "Automatic Languages: Common and Synad. Bonus Languages: Any (other than secret languages, such as Druidic). Favored Class: Any — a multiclass synad's first chosen new class does not count when determining whether he takes an XP penalty for multiclassing.",
        category: "trait",
        source: `${CH6} — Synads as Characters (p. 141)`,
        sourceUrl: CP_PATH,
      },
    ],
  },
];
