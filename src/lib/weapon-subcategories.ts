import type { EquipmentItem } from "@/engine/types";

/**
 * Weapon subcategories (Shaun, 2026-11-03: split the Weapons section
 * into Melee / Ranged / Firearms, chosen with subcategory buttons).
 *
 * EquipmentItem carries no structured weapon-type field — the books'
 * own melee/ranged table split was never transcribed — so the split
 * is classified here from the record's name and notes, and verified
 * name-by-name over the whole catalog on 2026-11-03 (1,662 weapons:
 * Melee 1,445 · Ranged 159 · Firearms 58). Judgment calls, by the
 * books where the books speak:
 * - Firearms: the printed firearm statistics in the notes (the word
 *   "firearm" / a misfire range) or gun vocabulary in the name. A
 *   blowgun is not a firearm; a steambow is a bow; gunpowder siege
 *   (cannons, bombards) are firearms, rope-and-counterweight siege
 *   (ballista, catapult, trebuchet) are ranged.
 * - Ranged: projectile and thrown-only weapons by name — bows,
 *   crossbows, slings, blowguns, shuriken, bolas, nets, darts,
 *   chakram, boomerangs, atlatl, harpoons, skiprock, lasso, siege.
 * - Melee: everything else, including weapons the books list on the
 *   melee tables even though they can be thrown (dagger, javelin,
 *   throwing axe) and blades that merely attach to a bow, crossbow,
 *   or firearm (bayonets, bow blades, crossbow blades), a club made
 *   from a gun stock, and the Bowie knife.
 *
 * Standing ruling (Shaun, 2026-11-03): under the general rules,
 * firearms are SIMPLE weapons — the skill comes in reloading them,
 * tinkering with them, and trick shots. The Firearms list in the
 * Equipment step carries that note; the books' own printed
 * proficiency lines in individual records are not rewritten.
 */
export type WeaponSubcategory = "melee" | "ranged" | "firearms";

export const WEAPON_SUBCATEGORIES: { key: WeaponSubcategory; label: string }[] = [
  { key: "melee", label: "Melee" },
  { key: "ranged", label: "Ranged" },
  { key: "firearms", label: "Firearms" },
];

// Swung, not shot, despite the name: checked before everything else.
const MELEE_FIRST = /bayonet|gun stock club|sling-out baton|(bow|crossbow) blade/i;
const GUN_NAME =
  /\b(pistol|revolver|musket|rifle|shotgun|blunderbuss|carbine|cannon|arquebus|pepperbox|derringer|scattergun|handgonne|culverin|falconet|bombard|musketoon)\b/i;
const RANGED_NAME =
  /(crossbow|arbalest|longbow|shortbow|steelbow|flintbow|gearbow|bowstaff|swordbow|harpbow|sling|shuriken|bolas|blowgun|chakram|boomerang|atlatl|ballista|catapult|trebuchet|harpoon|skiprock|lasso)/i;

function isFirearm(item: EquipmentItem): boolean {
  if (MELEE_FIRST.test(item.name)) return false;
  if (/steambow/i.test(item.name)) return false; // a bow, despite the steam
  if (/firearm|misfire/i.test(item.notes)) return true;
  if (GUN_NAME.test(item.name)) return true;
  if (!/blowgun/i.test(item.name) && (/\bgun\b/i.test(item.name) || /gun$/i.test(item.name.trim()))) return true;
  return false;
}

function isRanged(item: EquipmentItem): boolean {
  if (MELEE_FIRST.test(item.name)) return false;
  if (RANGED_NAME.test(item.name)) return true;
  if (/bow$/i.test(item.name.trim()) && !/elbow/i.test(item.name)) return true;
  if (/(^|[\s,])bow([\s,]|$)/i.test(item.name)) return true;
  if (/(^|\s)net(\s|,|$)/i.test(item.name)) return true;
  if (/^darts?\b/i.test(item.name)) return true;
  return false;
}

export function weaponSubcategory(item: EquipmentItem): WeaponSubcategory {
  if (isFirearm(item)) return "firearms";
  if (isRanged(item)) return "ranged";
  return "melee";
}
