import type { TemplateDefinition } from "@/engine/types";

// Monster Manual IV template: Lolth-Touched, the one template
// in the book that prints a level adjustment (entry pp. 92–94;
// the template itself pp. 93–94). The book's other template,
// Web Mummy (pp. 165–166), prints "Level Adjustment: —" in its
// Creating a Web Mummy block and is not converted. Short
// mechanical summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 4.pdf

const MM4 = "Monster Manual IV";
const MM4_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 4.pdf";

export const MONSTER_MANUAL_IV_TEMPLATES: TemplateDefinition[] = [
  {
    id: "lolth-touched",
    name: "Lolth-Touched",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A creature marked by the Spider Queen herself: it gains great strength and vigor (+6 Strength, +6 Constitution), a +4 racial bonus on Hide and Move Silently checks, and total immunity to fear, at the price of its soul — its alignment becomes chaotic evil.",
    source: `${MM4} — Lolth-Touched (pp. 93–94)`,
    sourceUrl: MM4_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Lolth-touched” is an acquired template that can be added to any nongood, nonlawful, corporeal living creature (referred to hereafter as the base creature). The base creature's level adjustment increases by +1. Alignment changes to chaotic evil. The creature retains the base creature's special qualities (the template adds none beyond those below).",
      },
    ],
    abilityModifiers: { str: 6, con: 6 },
    patches: [],
    features: [
      {
        key: "lolth-touched-fearless",
        name: "Fearless (Ex)",
        description:
          "A Lolth-touched creature is immune to all fear effects. It also gains a +4 racial bonus on Hide checks and Move Silently checks.",
        category: "special-quality",
        source: `${MM4} — Lolth-Touched (p. 94)`,
        sourceUrl: MM4_PATH,
      },
    ],
  },
];
