import type { SkillDefinition } from "@/engine/types";

// Heroes of High Favor: Dwarves (Bad Axe Games, 2002)
// new skill, printed p. 11, transcribed from Shaun's own
// scanned copy (image-only; read visually, 2026-11-04).
// The book gives this skill a one-paragraph description
// only — no formal stat block, check DCs, or synergy
// entries are printed — so the record carries exactly what
// the book prints: a catch-all dwarven lore skill that
// bards, wizards, and all dwarves may take as a class
// skill. It is a load-bearing prerequisite across the
// book (dwarven skald, rune-priest, paragon, and slayer
// all require ranks in it). Knowledge skills are
// Intelligence-based and trained-only under the core
// rules the book builds on.

const HOFD_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Dwarves.pdf";

export const HOFD_SKILLS: SkillDefinition[] = [
  {
    id: "knowledge-dwarves",
    name: "Knowledge (Dwarves)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "core",
    source: "Heroes of High Favor: Dwarves, p. 11",
    sourceUrl: HOFD_PATH,
    description:
      "A catch-all knowledge skill covering history, arcana, religion, heraldry, and other such knowledge as it pertains to dwarves. Bards, wizards, and all dwarves may take this as a class skill. (The book prints no check DCs or synergy bonuses for it; it functions as the dwarven-lore counterpart to the other Knowledge skills and is required by several of the book's prestige classes.)",
  },
];
