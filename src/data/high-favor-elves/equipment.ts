import type { EquipmentItem } from "@/engine/types";

// Heroes of High Favor: Elves (Bad Axe Games, 2002; second
// printing 2005) — the elven masterwork components printed
// in the Skills section of Chapter 2, pp. 11-12, transcribed
// from Shaun's own copy (text layer verified against page
// renders, 2026-11-05). The book treats each component as
// a separate item for purposes of creation times and cost,
// so they are filed as equipment, following the sibling
// Heroes of High Favor: Dwarves pack; each name carries a
// "(Masterwork Component)" qualifier because several
// printed names (Hardened, Green) are single generic
// words. This pack's Hardened (150 gp, hardness +2, for
// wooden items) owns the id "hardened-masterwork-
// component"; the dwarven Hardened (hardness +5) is filed
// separately in the Dwarves pack.
//
// The components are organized by the Craft skill used to
// add them: Craft (Armorsmithing) adds Arcane Conductor
// to armor and shields (the book notes that masterwork
// armor ordinarily improves the armor check penalty by 1
// and requires a second Craft check at DC 20 with a market
// value of 150); Craft (Bowmaking) adds Seeking, Increased
// Range, and Arrow Resiliency to bows and arrows; Craft
// (Carpentry) adds Green, Hardened, and Darkened to wooden
// items; Craft (Weaponsmithing) adds Weapon of Finesse
// and the Elven War Arrow; and an elf with the Life
// Sculptor feat (Chapter 2) can add Living Creation with
// Craft (various). Costs below are the components' own
// printed market values; notes are mechanical paraphrases
// in our own words.

const HOFE_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Elves.pdf";
const SRC = "Heroes of High Favor: Elves";

export const HOFE_EQUIPMENT: EquipmentItem[] = [
  {
    id: "arcane-conductor-masterwork-component",
    name: "Arcane Conductor (Masterwork Component)",
    category: "gear",
    cost: "300 gp",
    weight: "—",
    notes:
      "Masterwork component 'Arcane Conductor' (Craft (Armorsmithing) DC 20) for armor or a shield: elven armorsmiths may fashion armor that reduces the chance of arcane spell failure by 5%. The component may be purchased for the same armor or shield more than once for a cumulative effect, reducing the arcane spell failure chance to a minimum of 10%. The market value of this component is doubled for medium armor and the DC increases by +5; the market value for heavy armor is quadrupled and the DC increases by +10.",
    source: `${SRC}, p. 11`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "seeking-masterwork-component",
    name: "Seeking (Masterwork Component)",
    category: "gear",
    cost: "300 gp",
    weight: "—",
    notes:
      "Masterwork component 'Seeking' (Craft (Bowmaking) DC 20) for any bow: the bow is crafted with notched sights around the upper grip, which a skilled bowman can use to greatly improve his aim over long distances — a bow with the seeking component suffers only half the normal range penalty. This component may be added only once.",
    source: `${SRC}, p. 11`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "increased-range-masterwork-component",
    name: "Increased Range (Masterwork Component)",
    category: "gear",
    cost: "75 gp",
    weight: "—",
    notes:
      "Masterwork component 'Increased Range' (Craft (Bowmaking) DC 20) for any bow: bows with this masterwork component increase their range increment by +10 feet. This component may be added up to three times for a total improvement of +30 feet.",
    source: `${SRC}, p. 11`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "arrow-resiliency-masterwork-component",
    name: "Arrow Resiliency (Masterwork Component)",
    category: "gear",
    cost: "3 gp per 20 arrows",
    weight: "—",
    notes:
      "Masterwork component 'Arrow Resiliency' (Craft (Bowmaking) DC 20) for arrows: the arrows are made from thin layers of wood fused together and intertwined in complex patterns, making them more durable — an arrow with this component has a 25% chance of being recoverable if it strikes its target and a 75% chance of survival if the shot missed.",
    source: `${SRC}, p. 11`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "green-masterwork-component",
    name: "Green (Masterwork Component)",
    category: "gear",
    cost: "75 gp",
    weight: "—",
    notes:
      "Masterwork component 'Green' (Craft (Carpentry) DC 20) for a wooden item: elves can preserve the natural fire resistance of green, healthy wood — the item gains fire resistance 5. It does not confer this bonus to the wielder in any way.",
    source: `${SRC}, p. 11`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "hardened-masterwork-component",
    name: "Hardened (Masterwork Component)",
    category: "gear",
    cost: "150 gp",
    weight: "—",
    notes:
      "Masterwork component 'Hardened' (Craft (Carpentry) DC 20) for a wooden item: elves frequently treat their wooden items with a natural lacquer that coats and suffuses the wood, adding beauty as well as hardness — for each hardened component, the item's hardness is increased by +2. This component may be added twice for a total increase of +4. (Different from the dwarven Hardened component in Heroes of High Favor: Dwarves, which grants +5 hardness.)",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "darkened-masterwork-component",
    name: "Darkened (Masterwork Component)",
    category: "gear",
    cost: "varies (see notes)",
    weight: "—",
    notes:
      "Masterwork component 'Darkened' (Craft (Carpentry) DC 25) for a wooden item: through a process of petrification and fire-treatment, elves can preserve the hardness and resilience of wood at a fraction of the weight — this component reduces the weight of the item by 10%. This component may be added up to five times for a total reduction of 50% of the original weight of the item. The market value of each component is 3 x the weight of the item in pounds.",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "weapon-of-finesse-masterwork-component",
    name: "Weapon of Finesse (Masterwork Component)",
    category: "gear",
    cost: "300 gp",
    weight: "—",
    notes:
      "Masterwork component 'Weapon of Finesse' (Craft (Weaponsmithing) DC 25) for any melee weapon: elven weapons are expertly balanced to make use of their racial advantages in grace and dexterity — any weapon weighing 5 pounds or less may be crafted with this component to allow its use with the Weapon Finesse feat. (Many elven weapons are crafted of mithral or otherwise lightened to take advantage of this masterwork component.)",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "elven-war-arrow-masterwork-component",
    name: "Elven War Arrow (Masterwork Component)",
    category: "gear",
    cost: "30 gp per 20 arrows",
    weight: "—",
    notes:
      "Masterwork component 'Elven War Arrow' (Craft (Weaponsmithing) DC 20) for arrows: skilled elven weaponsmiths forge arrowheads designed for war, wickedly barbed and razor-sharp — these arrows improve the threat rating to 19-20, but the damage die drops by one category (d8 becomes d6, d6 becomes d4, etc.). The crit multiplier remains at x3.",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
  {
    id: "living-creation-masterwork-component",
    name: "Living Creation (Masterwork Component)",
    category: "gear",
    cost: "300 gp",
    weight: "—",
    notes:
      "Masterwork component 'Living Creation' (Craft (various) DC 25): an elf with the Life Sculptor feat can craft items that remain alive and growing. If properly tended by the owner, a living item can repair damage it has sustained at the rate of 1 HP per day; an item completely destroyed cannot repair itself. The market value listed is for creation times only — such an item would never be sold on the open market, and the elves reserve severe punishment for those who would do so.",
    source: `${SRC}, p. 12`,
    sourceUrl: HOFE_PATH,
    ruleset: "core",
  },
];
