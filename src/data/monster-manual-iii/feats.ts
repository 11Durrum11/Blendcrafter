import type { FeatDefinition } from "@/engine/types";

// Monster Manual III feats: the book prints no general feat
// chapter; its feats appear inside the shifter entry (p. 150,
// "Shifter Feats") and the warforged entries (pp. 191–192,
// "Warforged Feats"). Of the shifter feats, Extra Shifter Trait,
// Healing Factor, and Shifter Instincts duplicate records already
// in the dataset and are skipped; Shifter Defense is new. Of the
// warforged feats, Adamantine Body and Mithral Body duplicate
// the Eberron Campaign Setting records and are skipped; Improved
// Fortification and Mithral Fluidity are new. Short mechanical
// summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 3.pdf

const MM3 = "Monster Manual III";
const MM3_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 3.pdf";
const RS = "race-specific";

export const MONSTER_MANUAL_III_FEATS: FeatDefinition[] = [
  { id: "shifter-defense", name: "Shifter Defense", category: RS, ruleset: "core", prerequisites: ["Shifter", "two other shifter feats"], benefitSummary: "While shifting, you gain damage reduction 2/silver.", special: "[Shifter] feat. Printed in the shifter entry's feat sidebar; the entry notes that additional shifter feats appear in the Eberron Campaign Setting.", source: `${MM3} — Shifter (p. 150)`, sourceUrl: MM3_PATH },
  { id: "improved-fortification", name: "Improved Fortification", category: RS, ruleset: "core", prerequisites: ["Warforged", "base attack bonus +6"], benefitSummary: "You gain immunity to sneak attacks and extra damage from critical hits, but you lose the ability to be healed by spells of the healing subschool.", special: "[Warforged] feat, printed in the warforged entries' feat sidebar.", source: `${MM3} — Warforged (p. 192)`, sourceUrl: MM3_PATH },
  { id: "mithral-fluidity", name: "Mithral Fluidity", category: RS, ruleset: "core", prerequisites: ["Warforged", "Mithral Body"], benefitSummary: "The maximum Dexterity bonus you can apply to Armor Class with the Mithral Body feat increases by 1, and the armor check penalties to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble checks are reduced by 1.", special: "[Warforged] feat, printed in the warforged entries' feat sidebar.", source: `${MM3} — Warforged (p. 192)`, sourceUrl: MM3_PATH },
];
