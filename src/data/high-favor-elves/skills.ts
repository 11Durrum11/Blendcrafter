import type { SkillDefinition } from "@/engine/types";

// Heroes of High Favor: Elves (Bad Axe Games, 2002; second
// printing 2005) — new skill, printed p. 12, transcribed
// from Shaun's own copy (text layer verified against page
// renders, 2026-11-05). The book gives this skill a
// one-paragraph description only — no formal stat block,
// check DCs, or synergy entries are printed — so the
// record carries exactly what the book prints: a catch-all
// elven lore skill that bards, wizards, and all elves may
// take as a class skill. It is a load-bearing prerequisite
// across the book (ley runner, grand theurgist, veteran
// wizard, seneschal of the Great Library, and exemplar all
// require ranks in it). Knowledge skills are
// Intelligence-based and trained-only under the core rules
// the book builds on. The chapter's other skill entry,
// Knowledge (Arcana), presents only new uses for the
// existing skill (anchoring to a ley line, locating a
// remote power nexus, contesting a power nexus, and
// designing new spells — see Chapter 3 and Appendix A of
// the book), so no second record is filed for it.

const HOFE_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Elves.pdf";

export const HOFE_SKILLS: SkillDefinition[] = [
  {
    id: "knowledge-elves",
    name: "Knowledge (Elves)",
    keyAbility: "int",
    trainedOnly: true,
    ruleset: "core",
    source: "Heroes of High Favor: Elves, p. 12",
    sourceUrl: HOFE_PATH,
    description:
      "A catch-all knowledge skill covering history, arcana, religion, heraldry, customs and tactics, and other such knowledge as it pertains to elves. Bards, wizards, and all elves may take this as a class skill. (The book prints no check DCs or synergy bonuses for it; it functions as the elven-lore counterpart to the other Knowledge skills and is required by several of the book's prestige classes.)",
  },
];
