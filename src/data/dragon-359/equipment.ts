// Dragon Magazine #359 (September 2007) — equipment draft: 7 records.
// All seven from "Class Acts — Warrior: The Universal Key" (Jeremy
// Walker), p. 122-123: mundane tools and alchemical acids for getting
// past locked doors and chests when the party has no rogue — "more
// specialized versions of items found in Arms and Equipment Guide and
// Dungeonscape," per the article. The article's "Existing Keys" sidebar
// (reprinted tools from Arms and Equipment Guide, Complete Adventurer,
// Complete Scoundrel, and Dungeonscape) is reference-only and digested
// in reference.md.
//
// ⚠️ OCR CAUTION: extracted from the archive.org OCR text stream. The
// article's Universal Keys price/weight table is partially garbled in
// the stream: adamantine bolt cutter (250 gp, 2 lb.), adamantine
// sledge (2,500 gp, 35 lb.), and adamantine toolkit (750 gp, 5 lb.)
// read cleanly; the acid injector's price and the three specialty
// acids' prices/weights are reconstructed from table fragments and
// are marked VERIFY in each record. Image verification is listed as
// an integration step in SCREENING.md.

import type { EquipmentItem } from "@/engine/types";

const SRC_KEY = "Dragon Magazine #359 — Class Acts: The Universal Key (Jeremy Walker), pp. 122-123";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_KEY,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

export const DRAGON_359_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "acid-injector",
    name: "Acid Injector",
    cost: "35 gp (VERIFY — price garbled in the source scan)",
    notes:
      "Tool. This simple device resembles a long funnel (generally made of glass or some other acid-resistant material) with a narrow tube at one end and a large storage container at the other. It delivers a powerful acid to burn through the hinges or locks of chests, safes, and other containers, without wasting acid or damaging the contents of these containers. It takes 2 minutes to use an acid injector to apply acid to a surface. When you use it to bypass a lock, hinge, or other vulnerable point on an object's surface, the precise delivery doubles the damage of the acid used. (Price read from a garbled table fragment — VERIFY against the page image at integration.)",
  }),
  E({
    id: "adamantine-bolt-cutter",
    name: "Adamantine Bolt Cutter",
    cost: "250 gp",
    weight: "2 lb.",
    notes:
      "Tool. This resembles an oversized pair of pruning shears with a serrated inner blade, specifically designed to cut through metal bars, bolts, and other obstructions with ease. It allows the wielder to attempt to cut through any bar less than 2 inches in diameter with a hardness less than 20 (threshold partially garbled in the source scan — VERIFY). Adamantine bolt cutters deal 20 points of damage plus 1-1/2 times the wielder's Strength modifier per round to the bar. Bolt cutters make poor weapons, serving only as clumsy clubs (-2 on attack rolls).",
  }),
  E({
    id: "adamantine-sledge",
    name: "Adamantine Sledge",
    cost: "2,500 gp",
    weight: "35 lb.",
    notes:
      "Tool. For the serious basher, this simple sledgehammer is perfectly balanced and crafted from solid adamantine. When you use it to attack a door, wall, container, or other object, it is a two-handed weapon (its object-damage line is partially garbled in the source scan — VERIFY). Despite its force, it is difficult to use as a weapon in combat, and you suffer a -2 penalty on attack rolls with it.",
  }),
  E({
    id: "adamantine-toolkit",
    name: "Adamantine Toolkit",
    cost: "750 gp",
    weight: "5 lb.",
    notes:
      "Tool kit. This kit contains an adamantine file, an adamantine drill (with bits of varying sizes), and a small adamantine hacksaw. It is specifically designed to allow nonprofessionals to bypass locked doors and open locked chests, and the tools are simple and straightforward (if somewhat slow). The drill in this kit allows a character to bore a 1/2-inch-diameter hole in any object 3 inches thick or less and with a hardness less than 20 with a standard action; this is often sufficient to remove the locking mechanism from a door or container. The hacksaw can saw through up to 1 inch of material with hardness less than 20 with a standard action.",
  }),
  E({
    id: "ironbane-acid",
    name: "Ironbane Acid",
    cost: "200 gp (VERIFY — price/weight from a garbled table fragment)",
    weight: "1 lb. (VERIFY)",
    notes:
      "Alchemical item. This special form of acid affects only iron and other metals weaker than adamantine. One flask of this acid deals 3d10 points of acid damage to a metal object or creature made entirely of metal (such as an iron golem) and ignores hardness. Ironbane acid has no effect on adamantine or magically reinforced or enchanted metal. You can throw ironbane acid as a grenadelike weapon, in which case it deals full damage to any nonmagical metal armor, weapon, or shield that your target might be wearing or wielding.",
  }),
  E({
    id: "woodripper-acid",
    name: "Woodripper Acid",
    cost: "200 gp (VERIFY — price/weight lost in the source scan's table)",
    weight: "1 lb. (VERIFY)",
    notes:
      "Alchemical item. This special form of acid affects only wood and plant creatures. One flask of this acid deals 3d10 points of acid damage to a wood object or plant creature and ignores hardness. Woodripper acid has no effect on magically reinforced or enchanted wood. You can throw woodripper acid as a grenadelike weapon, in which case it deals full damage to any nonmagical wooden armor, weapon, or shield that your target might be wearing or wielding.",
  })];
