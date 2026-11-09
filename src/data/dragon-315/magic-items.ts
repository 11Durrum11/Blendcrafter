import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #315 pack (library-staging/packs/dragon-magazine/issue-315)
// The issue's five magic item records, all from the Planescape
// article "Exiled Factions" (pp. 44–49): three weapon special
// abilities and two inevitable grafts.
//   * Spireshard (Athar) — weapon special ability, +3 bonus.
//   * Wrecker (Doomguard) — weapon special ability, +1 bonus.
//   * Stealer (Doomguard) — weapon special ability, price line
//     truncated in the magazine OCR; carried as +1 bonus by parallel
//     with Wrecker, its companion quality in the same sidebar — see
//     MANIFEST.md.
//   * Zelekhut Wings and Kolyarut Hand (Fraternity of Order) —
//     inevitable grafts (Fiend Folio graft rules).
// Weapon special abilities follow the catalog precedent
// (MagicItemDefinition, category "weapon-special-ability", cost as a
// bonus equivalent). The grafts stage as magic items with category
// "graft" and their full short mechanics; the catalog's
// body-modifications.ts is an index-only file whose house rule is
// that full mechanics are not reproduced there, so integration may
// re-file these two into that index — flagged in MANIFEST.md.
// Transcribed from the magazine text on archive.org
// (DragonMagazine315_djvu.txt). Summaries are mechanical paraphrases
// in our own words; no magazine prose is reproduced.

const DM315 = "Dragon Magazine #315";
const DM315_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine315_djvu.txt";

export const DRAGON_315_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "spireshard",
    name: "Spireshard",
    category: "weapon-special-ability",
    cost: "+3 bonus",
    summary: "A creature dealt damage by a spireshard weapon must succeed on a DC 19 Will save or be unable to use spells or spell-like abilities for 1d6 rounds (the DM rolls the duration secretly). Spells and effects already on the creature are unaffected, and the creature cannot be affected again until it regains the ability. Strong abjuration; CL 15th; Craft Magic Arms and Armor, antimagic field. An Athar weapon quality named for the Spire at the center of the Outlands.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
  {
    id: "wrecker",
    name: "Wrecker",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary: "Bludgeoning weapons only. A wrecker weapon's strikes bypass hardness. Energy damage dealt by the weapon's other properties interacts with hardness normally. Moderate transmutation; CL 8th; Craft Magic Arms and Armor, shatter. A Doomguard weapon quality.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
  {
    id: "stealer",
    name: "Stealer",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary: "The wielder of a stealer weapon gains a +4 bonus on opposed disarm checks; on a successful disarm, the disarmed item sticks to the weapon's striking surface. As a free action, the wielder can transfer the item to an open hand or shake it to the ground in an adjacent square. Moderate transmutation; CL 6th; Craft Magic Arms and Armor, web. A Doomguard weapon quality. (Price line truncated in the magazine OCR; carried as a +1 bonus — see MANIFEST.md.)",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
  {
    id: "zelekhut-wings",
    name: "Zelekhut Wings",
    category: "graft",
    cost: "100,000 gp",
    summary: "Inevitable graft (Fraternity of Order): a pair of zelekhut wings grafted to the recipient grants a fly speed of 60 feet with average maneuverability. Prerequisites: Graft Flesh (Fiend Folio), fly; the creator must be affiliated with the inevitables.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
  {
    id: "kolyarut-hand",
    name: "Kolyarut Hand",
    category: "graft",
    cost: "86,400 gp",
    summary: "Inevitable graft (Fraternity of Order): a kolyarut's hand grafted in place of the recipient's own grants a vampiric touch attack (as the spell) usable three times per day, dealing 6d6 points of damage; the wielder gains the same amount as temporary hit points lasting 1 hour. Prerequisites: Graft Flesh (Fiend Folio), vampiric touch; the creator must be affiliated with the inevitables.",
    source: DM315,
    sourceUrl: DM315_PATH,
    ruleset: "core",
  },
];
