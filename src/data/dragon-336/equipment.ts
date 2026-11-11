// Dragon Magazine #336 (October 2005) — equipment draft: 5 records.
// "Class Acts: Herbal Remedies" (Greg Marks), p. 98 — the barbarian
// column the survey never itemized (it named only the ranger and
// sorcerer columns at p. 98, which is in fact this department's folio).
// Five nonmagical herbs that barbarian tribes utilize, each with a
// Survival DC to locate it (an attempt to locate an herb requires 1
// hour and a successful Survival check), the terrain it grows in, and a
// Market Price. They stage as mundane equipment (herbal/alchemical
// gear) beside the catalog's Alchemy & Herbalists material.
// All prices, DCs, and effects verified against the rendered page image
// (magazine p. 98); the image governs over the OCR stream — it confirms
// tereeka root's 150 gp price (the issue's priciest herb by far) and
// goldencup's confusion side-effect save (DC 10 Will, on entering
// combat). Weights are not printed in the article; the house "—" is
// carried, as for the issue-331 charm items.
// Descriptions are faithful paraphrases in our own words; no magazine
// prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #336 — Class Acts: Herbal Remedies (Greg Marks), p. 98";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const HERB_RULE =
  "Nonmagical herb. An attempt to locate an herb in its terrain requires 1 hour and a successful Survival check at the listed DC.";

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

export const DRAGON_336_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "fleshshiver-336",
    name: "Fleshshiver",
    cost: "25 gp",
    notes:
      HERB_RULE +
      " Survival DC 20; warm forest; Market Price 25 gp. The tan fleshshiver mushroom grows in the rich soil between the roots of tropical fruit trees. Pieces of fleshshiver mixed in a cool mud compress applied to the head of fever victims give a +2 alchemical bonus on Fortitude saving throws made to resist nonmagical diseases, lasting for one day.",
  }),
  E({
    id: "goldencup",
    name: "Goldencup",
    cost: "50 gp",
    notes:
      HERB_RULE +
      " Survival DC 25; cold plains; Market Price 50 gp. This oily yellow moss grows in low spots on tundra rocks where small amounts of water collect. Chewing dried goldencup moss creates a mild euphoria that strengthens one's resolve: chewing it for 1 minute grants a +2 alchemical bonus on saving throws against fear and compulsion effects (other than the moss's own confusion side-effect) for 30 minutes. As soon as the imbiber enters combat he must succeed on a DC 10 Will save or suffer the effects of the confusion spell for the remaining duration of the herb's protection.",
  }),
  E({
    id: "lish-nut",
    name: "Lish Nut",
    cost: "10 gp",
    notes:
      HERB_RULE +
      " Survival DC 10; temperate mountain; Market Price 10 gp. The nut from the small lish tree (which grows dozens of nuts in bunches of three to five during the spring) is quite nutritious and a mere handful can provide an entire day's worth of sustenance. In addition, the smell of the lish nut repels most vermin: for 2 hours after eating a nut (which requires a full-round action) the consumer emits the nut's odor, forcing vermin to make a DC 11 Will save or become sickened for 2d4 rounds after touching (such as when making a natural attack) the creature.",
  }),
  E({
    id: "tereeka-root",
    name: "Tereeka Root",
    cost: "150 gp",
    notes:
      HERB_RULE +
      " Survival DC 30; temperate forest; Market Price 150 gp. This slim white tuber, found in temperate climes growing in shaded sandy soils, has a bitter taste that makes it unsuitable for meals, but warriors greatly value its medicinal properties: the tereeka plant's root removes pain and increases the body's natural healing rate. Chewing the root allows the user to remain conscious to -5 hit points and regain hit point damage while resting as though under the care of a trained healer (regaining 2 hit points per level). One dose lasts for 12 hours and takes 1 minute to chew.",
  }),
  E({
    id: "visma-paste",
    name: "Visma Paste",
    cost: "30 gp",
    notes:
      HERB_RULE +
      " Survival DC 15; warm marsh; Market Price 30 gp. The dark, broad leaves of the tropical visma bush, when boiled into a thick foul-smelling paste, soothe burns (especially sunburn): application of visma paste to the skin heals 1d3 points of nonlethal damage to a victim of heat exposure (see page 303 of the Dungeon Master's Guide) and grants a +2 alchemical bonus on the user's next save made to resist further environmental heat damage. If no further saves are required within an hour, the user's body fully absorbs the paste and another dose must be applied.",
  }),
];
