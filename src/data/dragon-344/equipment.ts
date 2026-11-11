// Dragon Magazine #344 (Jun 2006) — equipment draft: 10 records.
// NINE rows of the Dragon-Hunting Gear table from Class Acts, "Hunting
// the Wyrm" (Amber E. Scott), pp. 108–109 — each table row staged as its
// own record (house precedent: priced variants stand as separate
// records). ONE restraint from the issue's official Web Supplement
// ("Dreadhold" supplement, Tools of the Trade) — provenance flagged in
// MANIFEST.md; Shaun may hold it as a supplement record.
// All costs, weights, and Craft DCs verified against the rendered page
// images (folios 108–109; supplement PDF pp. 1–2); the image governs
// over the OCR stream. Item mechanics ride in `notes` (house shape).

import type { EquipmentItem } from "@/engine/types";

const SRC_WYRM = "Dragon Magazine #344 — Class Acts: Hunting the Wyrm (Amber E. Scott), pp. 108–109";
const SRC_SUPP = "Dragon Magazine #344 Web Supplement — Dreadhold: Tools of the Trade (Paizo Publishing)";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";
const SUPP_URL = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine344WebSupplement.pdf";

type EquipSeed = Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">;

function E(seed: EquipSeed): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_WYRM,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as EquipmentItem;
}

export const DRAGON_344_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "carapace-vest",
    name: "Carapace Vest",
    cost: "35 gp",
    weight: "10 lb.",
    notes:
      "A vest of flexible wooden strips coated multiple times with sap-derived resin, worn over light or medium armor so that it forms a bubble of air between the vest and the wearer's chest. The wearer takes half damage from a dragon's initial crush attack, and the protection lets him catch his breath and muster a concentrated effort to escape the dragon's pin, granting a +4 bonus on his next grapple check made to escape the dragon's pin. After the first round of damage, the carapace vest breaks and becomes useless. Craft (Armorsmithing) DC 15.",
  }),
  E({
    id: "liquid-courage-bottle-344",
    name: "Liquid Courage (Bottle)",
    cost: "50 gp",
    weight: "1-1/2 lb.",
    notes:
      "A potent dwarven alcoholic beverage distilled from several varieties of fungus. A character who imbibes a glass of liquid courage feels brave and arrogant: the bolstering effects last for 1 hour and provide a +2 alchemical bonus on saving throws against extraordinary fear effects (such as a dragon's frightful presence) and a -2 penalty on Dexterity checks and Dexterity-based skill checks. A bottle holds enough liquid courage for five glasses. Craft (Alchemy) DC 20. (A different, third-party item also named Liquid Courage already stands in the live catalog; this is the Dragon #344 item — see SCREENING.md.)",
  }),
  E({
    id: "liquid-courage-glass-344",
    name: "Liquid Courage (Glass)",
    cost: "10 gp",
    weight: "—",
    notes:
      "A single glass of liquid courage, the dwarven fungus-distilled drink: for 1 hour the drinker gains a +2 alchemical bonus on saving throws against extraordinary fear effects (such as a dragon's frightful presence) and takes a -2 penalty on Dexterity checks and Dexterity-based skill checks. A bottle (50 gp) holds five glasses. Craft (Alchemy) DC 20. (A different, third-party item also named Liquid Courage already stands in the live catalog; this is the Dragon #344 item — see SCREENING.md.)",
  }),
  E({
    id: "plate-thinner",
    name: "Plate Thinner",
    cost: "25 gp",
    weight: "2 lb.",
    notes:
      "A clear, turpentine-like liquid that softens hard organic matter such as teeth, bones, and scales. A ranged touch attack is required to saturate the dragon with plate thinner. One dose, which comes in large glass bottles, affects a Medium dragon for 1 minute, after which time its scales dry and harden; two doses are required to coat a Large dragon, four for a Huge, eight for a Gargantuan, and sixteen for a Colossal. During that time, any critical hits scored by rolling a natural 20 against the dragon increase their damage multiplier by 1 (thus, a weapon that normally deals x2 damage instead deals x3 damage). Plate thinner affects any creature of the dragon type or reptilian subtype with a natural armor bonus. Craft (Alchemy) DC 20.",
  }),
  E({
    id: "snout-snare",
    name: "Snout Snare",
    cost: "30 gp",
    weight: "6 lb.",
    notes:
      "A 10-foot-long pole topped with a giant hoop holding open a lasso of giant-spider webbing treated with alchemical chemicals; the pole telescopes to 20 feet in length and a sliding lever tightens the noose. A snout snare requires two hands to use properly and has a reach of up to 15 feet, although it can be used against an adjacent foe as well. The wielder must successfully grapple the dragon with the snout snare (this particular grapple attempt does not provoke an attack of opportunity) and achieve a hold; the snare can hold a creature of any size, although it deals no damage. Most wielders then drop the pole; alternatively, the wielder can keep hold of the pole and try to control the dragon, in which case the dragon and the wielder make opposed Strength checks each round as free actions — if the dragon wins, it moves as it wishes; if the wielder wins, the dragon remains snared and cannot move farther than the pole's reach. To break free, a dragon can attempt a DC 17 Strength check as a free action once per round. The dragon can also elect to use a standard action to automatically remove the snout snare as long as it can use its front claws. A dragon three or more size categories larger than the snout snare's wielder and who succeeds on its opposed Strength check can fly, swim, or move normally, even if the wielder continues to dangle from the snare's pole. If used as a weapon to strike a creature, the snout snare breaks apart on a successful hit and deals no damage. Craft (Weaponsmithing) DC 18.",
  }),
  E({
    id: "snout-snare-masterwork",
    name: "Snout Snare, Masterwork",
    cost: "80 gp",
    weight: "5 lb.",
    notes:
      "A masterwork snout snare: a telescoping pole (10 feet, extending to 20 feet) with a giant-spider-webbing lasso, used in two hands with a reach of up to 15 feet (and usable against adjacent foes) to grapple a dragon's snout shut and hold it so it cannot use its breath weapon or bite, as the ordinary snout snare. A dragon snared by a masterwork snare can attempt a DC 21 Strength check as a free action once per round to break free (rather than DC 17). Craft (Weaponsmithing) DC 20.",
  }),
  E({
    id: "snout-snare-replacement-lasso",
    name: "Snout Snare, Replacement Lasso",
    cost: "7 gp",
    weight: "1 lb.",
    notes:
      "A replacement alchemically treated giant-spider-webbing lasso for a snout snare. Craft (Weaponsmithing) DC 10.",
  }),
  E({
    id: "sugar-bomb",
    name: "Sugar Bomb",
    cost: "1 gp",
    notes:
      "A poorly constructed sack of flimsy paper or parchment filled with sugar, with pockets of sticky alchemical goo to help the sugar adhere to the dragon's tongue. The wielder must make a ranged attack to hit the dragon's mouth directly (a target up to three size categories smaller than the dragon, no smaller than Fine) with the sugar bomb. A dragon hit by a sugar bomb loses its blindsense ability for 1d6 rounds. When faced with a dragon lacking blindsense, characters can make Hide and Move Silently checks normally, opposed only by the dragon's Spot and Listen checks. Craft (Alchemy) DC 10.",
  }),
  E({
    id: "wing-clip",
    name: "Wing Clip",
    cost: "40 gp",
    weight: "14 lb.",
    notes:
      "A steel-toothed clamp measuring 3 feet in diameter when open. It takes a move action to ready a wing clip. Throwing one is a ranged attack with a 10-foot range increment; a wing clip is an exotic weapon, and because of the item's awkwardness it imposes a further -2 penalty on all attack rolls made with it (thus, a nonproficient user takes a -6 penalty on his attack roll with a wing clip). On a failed attempt, the wing clip snaps shut but does not penetrate the dragon's tough hide; the clip bounces off and must be reset (most wing clips come with a 100-foot trailing cord so the thrower can easily retrieve the clip). On a successful ranged attack, a wing clip clamps down on a dragon's wing and impairs its flight ability: a single wing clip reduces the dragon's fly speed by 30 feet and decreases its maneuverability by one category; additional wing clips slow the dragon by 30 feet each and reduce its maneuverability by an additional category (to a minimum of clumsy), and a dragon can no longer fly if its movement is reduced to 0 feet. Dragons smaller than Medium cannot be affected by wing clips (they are too small), while Medium and larger dragons can be affected by a number of wing clips equal to one plus one per size category larger than Medium (minimum of one for each wing). Dragons without wings are immune to wing clips. A dragon can remove one wing clip with a standard action or all wing clips attached to it as a full-round action. Wing clips can affect any creature that flies with wings (as opposed to magical flight, such as that possessed by beholders). Craft (Weaponsmithing) DC 18.",
  }),
  E({
    id: "heavy-hand-manacles",
    name: "Heavy Hand Manacles",
    cost: "95 gp",
    weight: "15 lb.",
    notes:
      "Restraints designed to prevent arcane spellcasters from casting spells while still allowing them to use their hands for simple tasks such as eating. At a glance, heavy hand manacles look like the arms from a suit of plate mail: steel gauntlets and thick sheathes for the forearm and upper arm, bound together with chains lashed across the front and back of the wearer's torso; additional chains connect the elbows and wrists, preventing the wearer from moving his arms more than 18 inches apart. Heavy hands are considered to be medium armor: they provide a +1 armor bonus to AC, with a maximum Dex bonus of +2, an arcane spell failure chance of 80%, and an armor check penalty of -4 (increased to -8 for Sleight of Hand). A wearer also takes a -3 penalty on all attack rolls requiring the use of his hands. A character can escape a set of heavy hand manacles with a DC 40 Escape Artist check. Breaking free of the manacles requires a DC 30 Strength check. The chain harness must be bound with a lock, which is not included in the cost of the item.",
    source: SRC_SUPP,
    sourceUrl: SUPP_URL,
    ruleset: "eberron",
  }),
];
