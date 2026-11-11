// Dragon Magazine #335 (September 2005) — equipment draft: 1 item.
// The DUELING CLOAK, from the "Dueling Cloaks" sidebar in "Spellcraft:
// Songsabers of Waterdeep" (Mike Mearls and the Dragon staff), p. 77.
// ⚠️ This is the survey's "1 item already in catalog (p. 77)": the live
// catalog holds a fan-index stub under the plain id `dueling-cloak`
// (src/data/core/new-equipment.json, source "Dragon Magazine #335,
// p.77 (fan index: crystalkeep.com d20 Equipment Index)"). Per the
// issue-331 pole-arm precedent, the full magazine extraction stages
// here under a -335 id beside the stub. Two stub errors are corrected
// by the printed sidebar (verified on the rendered page image,
// magazine p. 77): the cloak's +1 is a SHIELD bonus (the stub's notes
// lead with "Armor +1"), and the stub's "hardness 2; hp 5" figures
// come from the fan index — the magazine sidebar prints no hardness
// or hit points for the cloak. Table as printed: Cost 15 gp,
// Armor/Shield Bonus +1, Maximum Dex Bonus —, Armor Check Penalty -1,
// Arcane Spell Failure Chance 10%, Weight 3 lb.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #335 — Spellcraft: Songsabers of Waterdeep (Mike Mearls and the Dragon staff), p. 77";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_335_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "dueling-cloak-335",
    name: "Dueling Cloak",
    category: "armor",
    cost: "15 gp",
    weight: "3 lb.",
    acBonus: 1,
    notes:
      "Full extraction of the magazine sidebar, staged beside the live fan-index stub `dueling-cloak` (see the file header). A dueling cloak is specially made for combat and is woven of material thick enough to defend a wearer in battle. Short cloaks that sling over one shoulder, favored by members of Waterdeep's elite who also feel the need to arm themselves; the Songsabers of New Olamn make regular use of them. A dueling cloak is held in your off hand and provides a +1 shield bonus, as its heavy fabric turns aside blows. If you are proficient with light armor you are proficient with a dueling cloak. Although masterwork dueling cloaks can be crafted, these items cannot be enhanced using Craft Magic Arms and Armor (some rumors suggest that some dueling cloaks, created through the use of the Craft Wondrous Item feat, exist with a variety of flashy and particularly theatrical effects). Disarm attacks: by using it as an off-hand weapon, you can use a dueling cloak to disarm an opponent — when using a dueling cloak in this manner, you get a +2 bonus on opposed attack rolls made to disarm opponents (including the roll to avoid being disarmed if such an attack fails). For the purpose of penalties on your attack roll, treat a dueling cloak as a light weapon. If you use a dueling cloak to make a disarm attempt, you lose its AC bonus until your next action (usually the next round). Armor/Shield Bonus +1; Maximum Dex Bonus —; Armor Check Penalty -1; Arcane Spell Failure Chance 10%.",
  }),
];
