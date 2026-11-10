// Dragon Magazine #327 (January 2005) — equipment draft: 7 items.
// "Class Acts: Tokens of Faith" (Amber E. Scott), p. 86 — alternate holy symbols, one
// per domain presented (Chaos, Destruction, Fire, Healing, Knowledge, Magic, Travel;
// the article ends with the Travel symbol). Printed framework, verified against the
// rendered page image: "All the holy symbols presented here cost 100 gp"; the symbols
// are not magic items and do not take up a slot; to gain the benefit of the item, the
// user must be a cleric with the domain the symbol is tied to as one of his chosen
// domains; the bonus is treated as an addition to the domain's granted power. The
// program survey did not itemize this column; it stages per the standing full-text
// rule (see MANIFEST). House shape mirrors the issue-324 equipment draft.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #327 — Class Acts: Tokens of Faith (Amber E. Scott), p. 86";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const FRAME =
  "Alternate holy symbol from \"Tokens of Faith\": all the holy symbols presented in the article cost 100 gp, they are not magic items and do not take up a slot, and to gain the benefit of the item the user must be a cleric with the tied domain as one of his chosen domains — the bonus is treated as an addition to the domain's granted power.";

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

export const DRAGON_327_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "holy-symbol-of-chaos",
    name: "Holy Symbol of Chaos",
    cost: "100 gp",
    notes:
      FRAME +
      " This fist-sized amulet seems geometrically shaped at first glance, but the random placement of straight edges and corners makes it seem a square from one angle, a hexagon from another, and even a circle if held a certain way and viewed with a squint; it is a mosaic of small tiles made of iridescent seashells, glass beads, and multifaceted colored crystals. A cleric wearing this holy symbol gains a +1 sacred bonus on all saving throws to resist spells and effects that would change his form, such as baleful polymorph or flesh to stone.",
  }),
  E({
    id: "holy-symbol-of-destruction",
    name: "Holy Symbol of Destruction",
    cost: "100 gp",
    notes:
      FRAME +
      " Dust and ash continually swirl within this teardrop-shaped pendant made of dusky gray glass, with small pieces of red glass or gemstones embedded within the amulet that catch the light, flaring like little fireballs amidst the churning ashes. A cleric who worships the forces of destruction and wears this holy symbol gains a +1 sacred bonus on attack rolls made to sunder weapons, armor, or equipment worn or carried by another creature.",
  }),
  E({
    id: "holy-symbol-of-fire",
    name: "Holy Symbol of Fire",
    cost: "100 gp",
    notes:
      FRAME +
      " These fingerless gloves are made of crimson leather and extend partway up the forearm, fastened by red glass buttons with elaborate gold embroidery that suggests flickering flames covering the leather; the palms of the gloves bear the elemental symbol for fire, embroidered in gold, bronze, and copper-colored thread that glints in even the dimmest light. A cleric devoted to the gods of fire who wears these holy symbols gains a +1 sacred bonus on Fortitude saves to resist cold weather and spells with the cold descriptor.",
  }),
  E({
    id: "holy-symbol-of-healing",
    name: "Holy Symbol of Healing",
    cost: "100 gp",
    notes:
      FRAME +
      " Dangling from this leather strap is a cluster of tiny, transparent glass globes, each filled with a mix of colored powders; an arcane symbol for healing or restoration marks each globe and emits a distinctive, soothing aroma. A worshiper of the powers of healing who uses the scent of this holy symbol in his ministrations adds a +1 sacred bonus on Heal checks made to administer first aid to stabilize an ally.",
  }),
  E({
    id: "holy-symbol-of-knowledge",
    name: "Holy Symbol of Knowledge",
    cost: "100 gp",
    notes:
      FRAME +
      " Rather than just one pendant, this slender silver chain has numerous objects dangling from it, with small squares of parchment with runes drawn upon them spaced evenly around the chain and metallic colored inks of gold, silver, red, violet, and pearly white outlining each rune; when worn, the parchment squares overlap and fan around a character's neck like a broad collar. The scholarly cleric who wears this holy symbol receives a +1 sacred bonus on Spellcraft checks made to decipher magic writings.",
  }),
  E({
    id: "holy-symbol-of-magic",
    name: "Holy Symbol of Magic",
    cost: "100 gp",
    notes:
      FRAME +
      " A cleric wraps this long chain of tiny gold and silver coins — each one engraved with a five-pointed star — around his hand several times like a choker; the chain catches light, winking and glittering as if it were made of actual stars. Wearing this holy symbol grants a cleric with the Magic domain a +1 sacred bonus on Spellcraft checks made to determine an aura's school of magic when using the detect magic spell.",
  }),
  E({
    id: "holy-symbol-of-travel",
    name: "Holy Symbol of Travel",
    cost: "100 gp",
    notes:
      FRAME +
      " These epaulets are made of dozens of tiny feathers sewn together on a leather backing, the feathers iridescent black, blue, and green and fashioned to look like small, sweeping wings; fashioned in pairs, these holy adornments pin securely to a cleric's sleeves. Travel gods bless their followers who wear such holy symbols with a +1 sacred bonus on Survival checks made to predict the weather or avoid getting lost.",
  }),
];
