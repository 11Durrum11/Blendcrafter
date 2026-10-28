import type { SkillDefinition } from "../../engine/types";

// Expanded Psionics Handbook new skills (Chapter 3). Checked against the
// existing aggregates first: none of Autohypnosis, Psicraft, Use Psionic
// Device, or Knowledge (psionics) existed as skill records (Complete Psionic
// class records referenced them by id). Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf

const XPH = "Expanded Psionics Handbook";
const XPH_PATH =
  "/a poc dm related/desktop/Sourcebooks/Expanded Psionics Handbook (ocr,bookmarked,WE).pdf";

export const EXPANDED_PSIONICS_SKILLS: SkillDefinition[] = [
  {
    id: "autohypnosis",
    name: "Autohypnosis",
    ruleset: "core",
    keyAbility: "wis",
    trainedOnly: true,
    armorCheckPenalty: false,
    description:
      "Mastery over your own mind and body: ignore a caltrop wound (DC 18), memorize a page of text (DC 15), substitute this check for the roll to stabilize when dying (DC 20 in the text of the 'resist dying' use), resist a fear effect by beating its DC after failing the save, tolerate a poison's secondary damage by beating its DC, and act normally while disabled at 0 hit points (DC 20). Synergy: 5 ranks give +2 on Knowledge (psionics) checks; 5 ranks in Concentration give +2 here.",
    source: `${XPH}, p. 36`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "knowledge-psionics",
    name: "Knowledge (psionics)",
    ruleset: "core",
    keyAbility: "int",
    trainedOnly: true,
    armorCheckPenalty: false,
    description:
      "The psionics field of the Knowledge skill: psionic history, lore, creatures, disciplines, and phenomena, answered with the standard Knowledge DCs. Synergy: 5 ranks in Psicraft give +2 on Use Psionic Device checks involving power stones, and 5 ranks in Autohypnosis give +2 here.",
    source: `${XPH}, pp. 35–38 (Table 3–3, p. 36)`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "psicraft",
    name: "Psicraft",
    ruleset: "core",
    keyAbility: "int",
    trainedOnly: true,
    armorCheckPenalty: false,
    description:
      "The psionic counterpart of Spellcraft: identify a power as it manifests (DC 15 + power level), identify powers and effects already in place, address a power stone to learn the powers it holds, and similar tasks per the printed DC table. Synergy: 5 ranks give +2 on Use Psionic Device checks involving power stones.",
    source: `${XPH}, p. 38`,
    sourceUrl: XPH_PATH,
  },
  {
    id: "use-psionic-device",
    name: "Use Psionic Device",
    ruleset: "core",
    keyAbility: "cha",
    trainedOnly: true,
    armorCheckPenalty: false,
    description:
      "Activate psionic items blindly, activate a dorje or power stone whose power you don't know or can't normally use, use a power stone, emulate a class feature, ability score, race, or alignment to make an item work, per the printed DC table. Synergy: 5 ranks in Psicraft give +2 on this skill's checks involving power stones (does not stack with itself).",
    source: `${XPH}, p. 38`,
    sourceUrl: XPH_PATH,
  },
];
