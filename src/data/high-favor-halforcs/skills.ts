import type { SkillDefinition } from "@/engine/types";

// Heroes of High Favor: Half-Orcs (Bad Axe Games, 2002)
// Chapter 3: Skills — one genuinely new skill, printed
// p. 17, transcribed from Shaun's own scanned copy
// (image-only; read visually, 2026-11-05). This is a
// 3.0-era book: the entry is transcribed as printed.
// The book gives this skill a one-paragraph description
// only — no formal stat block, check DCs, or synergy
// entries are printed — so the record carries exactly
// what the book prints: a catch-all half-orc/orc lore
// skill that bards, wizards, and all half-orcs may take
// as a class skill. It is the direct counterpart to
// Knowledge (Dwarves) in Heroes of High Favor: Dwarves.
// Knowledge skills are Intelligence-based and
// trained-only under the core rules the book builds on.
// All other Chapter 3 material is new USES of existing
// skills (Craft, Handle Animal, Intimidate, Wilderness
// Lore) and is filed as reference notes in
// skills-uses.md in this pack folder, not as records.

const HOHO = "Heroes of High Favor: Half-Orcs";
const HOHO_PATH = "library-staging/books3p/high-favor-halforcs.pdf";

export const HOHO_SKILLS: SkillDefinition[] = [
  {
    id: "knowledge-half-orcs",
    name: "Knowledge (Half-Orcs)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "core",
    source: `${HOHO}, p. 17`,
    sourceUrl: HOHO_PATH,
    description:
      "A catch-all knowledge skill covering history, arcana, religion, heraldry, customs and tactics, and other such knowledge as it pertains to half-orcs and orcs. Bards, wizards, and all half-orcs may take this as a class skill. (The book prints no check DCs or synergy bonuses for it; it functions as the half-orc/orc-lore counterpart to the other Knowledge skills.)",
  },
];
