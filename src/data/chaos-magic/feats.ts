import type { FeatDefinition } from "@/engine/types";

// Chaos Magic: Wild Sorcery (Encyclopaedia Arcane,
// Mongoose Publishing, 2001) — Feats of Chaos, printed
// p. 46, transcribed from Shaun's own scanned copy
// (read visually; the scan is image-only), 2026-11-04.
// This is a 3.0-era book: entries are transcribed as
// printed. Only wanton or chaos magic users who meet
// the listed prerequisites of each feat may select
// them (chapter rule, p. 46). Four of the six feats
// print the type designator (Chaos) after their names;
// that designator is noted at the end of each such
// feat's benefit, following the Five Fingers
// precedent — the app's feat category union has no
// chaos type, so all six are filed as "general".
// Summaries are short mechanical paraphrases in our
// own words; no book prose is reproduced.

const CM = "Chaos Magic: Wild Sorcery";
const CM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Encyclopaedia Arcane/Chaos Magic - Wild Sorcery.pdf";
const FEATS = `${CM} — Feats of Chaos, p. 46`;

export const CHAOS_MAGIC_FEATS: FeatDefinition[] = [
  {
    id: "casting-focus",
    name: "Casting Focus",
    category: "general",
    prerequisites: ["Ability to cast chaos magic spells"],
    benefitSummary: "You receive a +2 circumstance bonus to any Casting checks made while casting chaos magic spells. (Printed as a (Chaos) feat.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
  },
  {
    id: "specialised-focus",
    name: "Specialised Focus",
    category: "general",
    prerequisites: ["Casting Focus", "Caster level 8+"],
    benefitSummary: "Choose one effect element, such as damage or materialisation, as described on p. 19. You receive a +5 circumstance bonus to any Casting checks made whilst casting chaos magic spells with this effect element. This feat does not stack with Casting Focus. (Printed as a (Chaos) feat.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
    special: "You may take this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new effect element.",
  },
  {
    id: "blood-of-chaos",
    name: "Blood of Chaos",
    category: "general",
    prerequisites: ["Ability to cast chaos magic spells or use a wanton talent"],
    benefitSummary: "You suffer one less point of damage every time you cast a chaos magic spell or suffer a backlash. (Printed as a (Chaos) feat.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
  },
  {
    id: "chaotic-healing",
    name: "Chaotic Healing",
    category: "general",
    prerequisites: ["Blood of Chaos"],
    benefitSummary: "You heal erratically whilst resting. Instead of using normal healing rules, the powers of chaos restore 1d6-2 hit points per character level to you after each day of full rest. The minimum damage healed is 1 hit point — it is impossible to suffer damage through the use of this feat. (Printed as a (Chaos) feat.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
  },
  {
    id: "immutable-will",
    name: "Immutable Will",
    category: "general",
    prerequisites: ["Ability to cast chaos magic spells", "Iron Will", "Caster level 7+"],
    benefitSummary: "You pay only half of the normal experience cost necessary to use the Purge Chaos class feature, as described on p. 17. (Printed without a (Chaos) designator.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
  },
  {
    id: "attune-other",
    name: "Attune Other",
    category: "general",
    prerequisites: ["The ability to craft chaos magic items"],
    benefitSummary: "You may now create chaos magic items for other users, attuning them to your creations. The process for doing so is the same as noted on p. 58, but the item's intended user, rather than the chaos mage, must suffer the ability reduction to use the item. (Printed without a (Chaos) designator.)",
    modifiers: [],
    source: FEATS,
    sourceUrl: CM_PATH,
    ruleset: "core",
  },
];
