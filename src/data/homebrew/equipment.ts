/**
 * Homebrew equipment pack: the alchemical cure potions (Shaun,
 * 2026-11-04, on a live voice call).
 *
 * Shaun's potion rule: magic-item potions work immediately upon
 * consumption. ALCHEMICAL potions are brewed, not magic, and do
 * NOT work instantly — they deliver their effect spread evenly
 * over a number of rounds equal to the spell's level. The cure
 * line therefore heals Nd8+N total at 1d8+1 per round:
 * Light 1 round, Moderate 2 rounds, Serious 3 rounds,
 * Critical 4 rounds. The magic-item versions already live in
 * Magic Items (Potions); these alchemical versions are
 * Equipment / Alchemical Gear, the way the catalog files
 * alchemical items, under the Homebrew rule set.
 *
 * Prices match the magic-item potions for Light / Moderate /
 * Serious (50 / 300 / 750 gp); Critical, which has no
 * magic-item version (potions cap at 3rd-level spells), uses
 * the potion price formula, spell level x caster level x
 * 50 gp = 4 x 7 x 50 = 1,400 gp. Pricing is a modeling choice
 * Shaun can adjust.
 */
import type { EquipmentItem } from "@/engine/types";

const ALCHEMICAL_RULE =
  "Alchemical potion — brewed, not a magic item, so it does not work instantly the way a magic-item potion does: the healing spreads evenly over a number of rounds equal to the spell's level, one share per round.";

export const HOMEBREW_EQUIPMENT: EquipmentItem[] = [
  {
    "id": "alchemical-potion-of-cure-light-wounds",
    "name": "Potion of Cure Light Wounds (Alchemical)",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "0.1 lb.",
    "notes": `${ALCHEMICAL_RULE} Heals 1d8+1 hit points over 1 round — the full amount lands at the end of that round.`,
    "source": "Homebrew — APOC alchemical potion rule (Shaun, 2026-11-04)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "alchemical-potion-of-cure-moderate-wounds",
    "name": "Potion of Cure Moderate Wounds (Alchemical)",
    "category": "alchemical gear",
    "cost": "300 gp",
    "weight": "0.1 lb.",
    "notes": `${ALCHEMICAL_RULE} Heals 2d8+2 hit points over 2 rounds — 1d8+1 per round.`,
    "source": "Homebrew — APOC alchemical potion rule (Shaun, 2026-11-04)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "alchemical-potion-of-cure-serious-wounds",
    "name": "Potion of Cure Serious Wounds (Alchemical)",
    "category": "alchemical gear",
    "cost": "750 gp",
    "weight": "0.1 lb.",
    "notes": `${ALCHEMICAL_RULE} Heals 3d8+3 hit points over 3 rounds — 1d8+1 per round.`,
    "source": "Homebrew — APOC alchemical potion rule (Shaun, 2026-11-04)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  },
  {
    "id": "alchemical-potion-of-cure-critical-wounds",
    "name": "Potion of Cure Critical Wounds (Alchemical)",
    "category": "alchemical gear",
    "cost": "1,400 gp",
    "weight": "0.1 lb.",
    "notes": `${ALCHEMICAL_RULE} Heals 4d8+4 hit points over 4 rounds — 1d8+1 per round (a quarter of the total each round). No magic-item version of this potion exists; magic-item potions cap at 3rd-level spells.`,
    "source": "Homebrew — APOC alchemical potion rule (Shaun, 2026-11-04)",
    "sourceUrl": "",
    "ruleset": "homebrew"
  }
];
