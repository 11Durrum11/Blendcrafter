import type { EquipmentItem } from "@/engine/types";

// Heroes of High Favor: Dwarves (Bad Axe Games, 2002)
// masterwork components and one new item, printed
// pp. 12-15, transcribed from Shaun's own scanned copy
// (image-only; read visually page by page, 2026-11-04).
// Filed as equipment following the same-series Heroes of
// High Favor: Elves pack: components are construction
// options the book treats as separate items for cost and
// creation purposes, each name carrying a "(Masterwork
// Component)" qualifier because several printed names
// (Hardened, Mobility) are single generic words. Two ids
// needed disambiguation: the Elves pack already owns
// "hardened-masterwork-component" (a different component:
// 150 gp, hardness +2), so the dwarven Hardened — hardness
// +5 — is "dwarven-hardened-masterwork-component"; and
// bare "mobility" is the core feat, so the component is
// "mobility-masterwork-component".
//
// General component rules (pp. 11-12): each component —
// including the item itself — is crafted individually
// using the normal Craft rules (pay raw materials equal
// to one-third the market value; weekly Craft check;
// check result × DC must reach market value × 10).
// Components may NOT be added to existing armor or
// weapons; all components must be decided before the job
// begins. Adding components qualifies the item as
// "masterwork" regardless of final effect. DCs and
// market values are given for light armor unless
// otherwise specified: for medium armor increase the DC
// by 5 and multiply the cost by 2; for heavy armor
// increase the DC by 10 and multiply the cost by 4.
// Dwarven blacksmiths may also add the Durability,
// Hardened, and Reduced Weight components to any metal
// item they craft (locks, chains, spikes, etc.), and any
// item may include a Maker's Mark. Costs below are the
// component entry texts' own printed market values;
// notes are mechanical paraphrases in our own words.

const HOFD_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Dwarves.pdf";
const SRC = "Heroes of High Favor: Dwarves";

export const HOFD_EQUIPMENT: EquipmentItem[] = [
  {
    id: "custom-fit-masterwork-component",
    name: "Custom Fit (Masterwork Component)",
    category: "gear",
    cost: "150 gp",
    weight: "—",
    notes:
      "Masterwork component 'Custom Fit' (Craft DC 20) for armor or a shield: the standard \"masterwork\" quality of armor, a custom fit for comfort while moving — the armor check penalty is reduced by 1. An armor or shield may include up to three Custom Fit components, reducing the overall armor check penalty by up to 3 points. The 150 gp is added to the item's market value.",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "durability-masterwork-component",
    name: "Durability (Masterwork Component)",
    category: "gear",
    cost: "100 gp",
    weight: "—",
    notes:
      "Masterwork component 'Durability' (Craft DC equal to the original item's Craft DC) for armor, a shield, or a weapon: each Durability component adds +2 HP to the item. Up to five Durability components may be added, for a final HP adjustment of +10.",
    source: `${SRC}, pp. 12-13`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "enhanced-alloy-masterwork-component",
    name: "Enhanced Alloy (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Masterwork component 'Enhanced Alloy' (Craft DC varies) for armor, a shield, or a weapon: rare meteoric metals form an alloy harder than normal iron, granting a natural (nonmagical) enhancement bonus that works even where magic does not function. Armor and shields: light armor and shields can receive a +1 enhancement (DC 20, market value 2,000 gp); medium armors may include a second component (DC 25, +3,000 gp); heavy armors can withstand a third (DC 30, +5,000 gp) — a suit of full plate with a +3 enhancement thus needs three checks at DC 20, 25, and 30 and has a final added market value of +10,000 gp. Armor with this component may not include Custom Fit, Mobility, or Superb Balance. Weapons: a single component (DC 20, market value 3,000 gp) gives a +1 enhancement bonus; a second component (+6,000 gp, second check at DC 25) imparts a total enhancement bonus of +2.",
    source: `${SRC}, p. 13`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "dwarven-hardened-masterwork-component",
    name: "Hardened (Masterwork Component, Dwarves)",
    category: "gear",
    cost: "150 gp",
    weight: "—",
    notes:
      "Masterwork component 'Hardened' (Craft DC 20) for armor, a shield, or a weapon: a special tempering process increases the metal's effective hardness by +5. An item may include up to two Hardened components, for a final hardness of +10. (Different from the elven Hardened component in Heroes of High Favor: Elves, which grants +2 hardness.) Also applied in the book's worked examples: a Hardened chain has hardness 15 and needs a DC 28 Strength check to burst (a second component: hardness 20, DC 30); Hardened manacles require a DC 28 Strength check to burst; masterwork spiderwire is Hardened and requires DC 17 to burst.",
    source: `${SRC}, p. 13`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "makers-mark-masterwork-component",
    name: "Maker's Mark (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Masterwork component 'Maker's Mark' (Craft DC = 10 + the maker's Craft skill ranks) for any item: the craftsman's personal mark — runework, gems and jewels, intricate hilts, and so forth. The craftsman freely sets the value of raw materials he wishes to include; the final market price is equal to three times the amount invested in raw materials. Note your Craft ranks when the item is made: add that number to the Appraise check of any viewer trying to recognize your work and appraise its value, and that same number is the DC for forgers trying to imitate your mark.",
    source: `${SRC}, p. 13`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "mobility-masterwork-component",
    name: "Mobility (Masterwork Component)",
    category: "gear",
    cost: "1,000 gp",
    weight: "—",
    notes:
      "Masterwork component 'Mobility' (Craft DC 25) for armor only: a lighter, more flexible alloy. It may be included only once; armor with Mobility counts as one category lighter for the purposes of movement and other limitations — medium armor becomes light, heavy armor becomes medium. There is no benefit to adding it to light armor (though it may be included simply to increase market value).",
    source: `${SRC}, pp. 13-14`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "reduced-weight-masterwork-component",
    name: "Reduced Weight (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Masterwork component 'Reduced Weight' (Craft DC 20) for any weapon — and other non-armor, non-shield items: a lighter alloy. It may be included only once and reduces the item's weight by half. The final cost depends on the amount of material used: multiply the item's HP by 10 to determine market value. If the Durability component is also included, calculate the Reduced Weight market value from the item's final HP.",
    source: `${SRC}, p. 14`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "superb-balance-masterwork-component",
    name: "Superb Balance (Masterwork Component)",
    category: "gear",
    cost: "200 gp",
    weight: "—",
    notes:
      "Masterwork component 'Superb Balance' (Craft DC 25) for armor only: the armor is jointed and balanced to afford greater range of motion — the armor's maximum Dexterity bonus is increased by +1. A suit of armor may include this component twice, for a maximum bonus of +2.",
    source: `${SRC}, p. 14`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "tempered-edge-masterwork-component",
    name: "Tempered Edge (Masterwork Component)",
    category: "gear",
    cost: "300 gp",
    weight: "—",
    notes:
      "Masterwork component 'Tempered Edge' (Craft DC 20) for a weapon only: the standard \"masterwork\" component for weapons — a tempered edge offers a +1 bonus to attack. This is not a magical bonus, nor does it stack with any enhancement bonus. In the book's worked examples, caltrops improved with Tempered Edge gain a +1 bonus to hit.",
    source: `${SRC}, p. 14`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "custom-toolset-masterwork-component",
    name: "Custom Toolset (Masterwork Component)",
    category: "gear",
    cost: "100 gp",
    weight: "—",
    notes:
      "Masterwork component 'Custom Toolset' (Craft DC 20) for tools only: unless otherwise specified, custom tools are considered masterwork and provide a +2 circumstance bonus. Worked examples in the book: a masterwork crowbar adds a +2 circumstance bonus when used to jimmy a door, break a chain, or topple a statue; a hammer with this component adds a +2 circumstance bonus to tasks such as smashing open a chest or shattering a lock (stacking with a masterwork crowbar); horseshoes with this component add a +2 circumstance bonus to the animal's Balance and Climb checks. For items with a normal market value of less than 50 gp, a single masterwork component (of any kind) raises the item's total value to 100 gp and requires a single Craft: Blacksmithing check; additional components beyond the first use their normal market values and require additional checks, and costs are calculated on the most expensive components included (only the least expensive component is folded into the combined cost and Craft check).",
    source: `${SRC}, p. 14`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
  {
    id: "spiderwire",
    name: "Spiderwire",
    category: "gear",
    cost: "30 gp",
    weight: "—",
    notes:
      "Extremely fine, light, and sturdy wire, strung low across a corridor as a tripwire or used as a garrote. Creatures moving at over half speed have little chance to notice spiderwire (Spot DC 25); any creature moving slower spots it automatically as it moves through it without harm. Spiderwire can be broken with a Strength check (DC 15), though it causes 1d4 damage to unarmored flesh for each burst attempt. It can support 20 lbs before breaking. Cost is for a 10-foot spindle of wire; weight is negligible. Masterwork spiderwire is Hardened and requires DC 17 to burst.",
    source: `${SRC}, p. 15`,
    sourceUrl: HOFD_PATH,
    ruleset: "core",
  },
];
