// Dragon Magazine #339 (January 2006) — magic item draft: 3 records.
// "Class Acts: Hexblade Curses" (Luke Fleeman), p. 93, sidebar "New Armor
// and Weapon Special Abilities": Bladejinx (armor), Hexburst (weapon),
// and Vexing (weapon) — special abilities built for hexblades, staged as
// magic records under the weapon/armor-special-ability categories per
// the issue-330 precedent (Phasing, Silent Strike). All three require
// the creator to be a hexblade or to use bestow curse, as printed.
// Every price, aura, and CL line was verified against the rendered page
// image (magazine p. 93); the image governs over the OCR stream.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #339 — Class Acts: Hexblade Curses (Luke Fleeman), p. 93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_339_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "bladejinx",
    name: "Bladejinx",
    category: "armor-special-ability",
    cost: "+2 bonus",
    summary:
      "Armor special ability — bladejinx armor harnesses the hexblade's power to manipulate fortune. A hexblade wearing bladejinx armor can, up to three times per day, force an enemy who just confirmed a critical hit to reroll his confirmation roll; the foe must take the result of the second roll. Moderate abjuration; CL 9th; Craft Magic Arms and Armor, creator must be a hexblade; Price +2 bonus.",
  }),
  M({
    id: "hexburst",
    name: "Hexburst",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary:
      "Weapon special ability — a hexburst weapon can channel the power of the hexblade's curse directly into damage. Any time a hexblade scores a critical hit with a hexburst weapon he may expend a daily use of his hexblade's curse to deal an additional +2d6 points of damage. He may only expend one daily use of his hexblade's curse in this manner. Faint evocation; CL 5th; Craft Magic Arms and Armor, creator must be a hexblade; Price +1 bonus.",
  }),
  M({
    id: "vexing",
    name: "Vexing",
    category: "weapon-special-ability",
    cost: "+1 bonus",
    summary:
      "Weapon special ability — when wielded by a hexblade, a vexing weapon allows the wielder to transfer some or all of the weapon's enhancement bonus into a penalty on an opponent. As a free action, the wielder chooses how to allocate the weapon's enhancement bonus at the start of his turn before using the weapon; he must then succeed at a touch attack against his intended target, and if he succeeds at this touch attack he deals no damage but instead applies the penalty he has chosen to his target. This penalty affects the target's attack rolls, skill checks, ability checks, and Armor Class, and lasts until the end of the wielder's next turn. Strong necromancy; CL 14th; Craft Magic Arms and Armor, bestow curse; Price +1 bonus.",
  }),
];
