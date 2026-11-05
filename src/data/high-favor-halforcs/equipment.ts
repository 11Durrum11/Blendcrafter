import type { EquipmentItem } from "@/engine/types";

// Heroes of High Favor: Half-Orcs (Bad Axe Games, 2002)
// Chapter 3: Skills — the chapter's two priced savage
// masterwork components for armor and shields, printed
// pp. 11-12, transcribed from Shaun's own scanned copy
// (image-only; read visually page by page, 2026-11-05).
// Filed as equipment following the same-series Heroes of
// High Favor: Dwarves pack: components are construction
// options the book treats as separate items for cost and
// creation purposes, each name carrying a "(Masterwork
// Component)" qualifier. This is a 3.0-era book: entries
// are transcribed as printed.
//
// General component rules (p. 11): the DCs and market
// values listed are for light armor and shields; for
// medium armor add +5 to the DC and double the cost;
// for heavy armor add +10 to the DC and quadruple the
// cost. Generally speaking, masterwork armor improves
// the armor check penalty by 1 and requires a second
// Craft check at DC 20 with a market value of 150.
// Savage weapons and savage armor themselves print no
// flat price or weight — only fractional market values
// (stone weapons one-third, bone weapons one-quarter,
// savage armor one-quarter of the iron counterpart) —
// so they are filed as skill-use notes in
// skills-uses.md, not as equipment records. Costs below
// are the component entries' own printed market values;
// notes are mechanical paraphrases in our own words.

const HOHO = "Heroes of High Favor: Half-Orcs";
const HOHO_PATH = "library-staging/books3p/high-favor-halforcs.pdf";

export const HOHO_EQUIPMENT: EquipmentItem[] = [
  {
    id: "savage-resistance-masterwork-component",
    name: "Resistance (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Savage masterwork component 'Resistance' (Craft DC 20 +1 per point of resistance) for armor or a shield: requires the hide of a creature with an energy sub-type, such as fire, cold, etc. You may add up to one-half of the creature's natural armor as resistance of that energy type. The market value is 300 per point of resistance. Worked example in the book: a young adult red dragon (sub-type: Fire) has +18 natural armor, so its hide could add up to Fire Resistance 9 to a suit of armor or shield, at Craft DC 29. Resistance is a supernatural ability and does not function in areas of anti-magic. Component DCs/market values are for light armor and shields; medium armor adds +5 to the DC and doubles the cost, heavy armor adds +10 to the DC and quadruples the cost.",
    source: `${HOHO}, pp. 11-12`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "naturally-tough-armor-masterwork-component",
    name: "Naturally Tough Armor (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Savage masterwork component 'Naturally Tough Armor' (Craft DC variable) for armor or a shield: the naturally tough hide of a creature is fashioned into armor giving greater protection than similar armor from lesser materials. The DC equals the normal DC for armor of its type, +5 for every point of additional protection; a given hide may include a +1 bonus for every 5 full points of natural armor of the original creature. The market value is +1000 per point of bonus AC squared. Worked example in the book: a young adult red dragon (natural armor +18) could provide up to a +3 bonus, so leather armor crafted from it provides a +5 bonus instead of the normal +2, at DC 27 (12 normal for leather armor + 15) and market value 9010. This component may also be added to shields (generally a hide stretched over a wooden frame), but the maximum bonus is limited to +1. Component DCs/market values are for light armor and shields; medium armor adds +5 to the DC and doubles the cost, heavy armor adds +10 to the DC and quadruples the cost.",
    source: `${HOHO}, p. 12`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
];
