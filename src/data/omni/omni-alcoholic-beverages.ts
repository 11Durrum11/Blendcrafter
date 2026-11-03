import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

// Omni Sweep Wave 2 — Complete Guide to Alcoholic Beverages (1994 AD&D fan guide).
// This guide deliberately prints almost no prices ("Suggested prices aren't given
// because they will vary... the DM should decide the price"), so only the handful
// of entries with a printed price are built. Its ~31 magic items carry AD&D XP
// values only — not gold prices — so none are built as priced magic items, and
// BOOZE_MAGIC_ITEMS_OMNI is intentionally empty. Dragon's Blood (100 gp/glass,
// 1,000 gp/bottle) was skipped: the name already exists in the catalog as an
// unrelated raw ingredient (50 gp per raw dram, More Ultimate Equipment).

export const BOOZE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
];

export const BOOZE_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "bd-2020-blink-dog",
    "name": "BD 20/20 (Blink Dog 20/20)",
    "category": "food and drink",
    "cost": "5 cp",
    "weight": "—",
    "notes": "Price is per cup. A cheap medium-dry white wine from Kynesboro in Karameikos, secretly herb-enhanced; at great intoxication it makes objects in the drinker's view seem to blink short distances away for a few rounds, imposing attack and save penalties.",
    "source": "Complete Guide to Alcoholic Beverages — Popular & Strange Alcohols Amongst The Worlds",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rainbow-dust-additive",
    "name": "Rainbow Dust",
    "category": "alchemical gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "A drink additive made from leprechaun-captured rainbow essence: a pinch makes a drink sparkle with colored light beams and fills the drinker with restful color imagery; cut with plain dust it instead drives the drinker insane when drunk.",
    "source": "Complete Guide to Alcoholic Beverages — Alcohol Drink Additives",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-silver-wolf",
    "name": "The Silver Wolf",
    "category": "food and drink",
    "cost": "100 gp to 1,000 gp",
    "weight": "—",
    "notes": "An exotic distilled water made from wolf's blood and enchanted holy or unholy water, served in a small silver wolf-carved cup. Drinking it grants brief wolf instincts and ability boosts for a few rounds, followed by five days of intoxication; price varies with the town's wealth.",
    "source": "Complete Guide to Alcoholic Beverages — Popular & Strange Alcohols Amongst The Worlds",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "zombie-killer",
    "name": "Zombie Killer",
    "category": "food and drink",
    "cost": "1 gp",
    "weight": "—",
    "notes": "Price is per mug; house drink of the Bloody Fist, fermented from a fungus that grows on defunct zombies (a closely kept secret). The first mug ever drunk grants 1 permanent hit point; further mugs bring cumulative ability penalties and pleasant hallucinations, and bartenders cut patrons off at six.",
    "source": "Complete Guide to Alcoholic Beverages — Popular & Strange Alcohols Amongst The Worlds",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
