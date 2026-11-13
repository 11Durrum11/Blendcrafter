// Dragon Magazine #358 (August 2007) — equipment draft: 29 items.
// EIGHTEEN masterwork item qualities from "Master's Forge: Crafting
// Legends" (Rodney Thompson), pp. 38-43 — nonmagical qualities a master
// craftsman who knows them (via the article's Artisan Craftsman feat,
// staged in feats-draft.ts) can add to a masterwork weapon or suit of
// armor when its masterwork component is crafted, each modifying the
// masterwork component's cost and Craft DC. They stage as equipment
// records under category "masterwork item quality" — the catalog's
// closest record shape for priced, gated item modifications; the shape
// choice is flagged in SCREENING.md §2. Every cost, Craft DC, and
// restriction was verified against the article's summary table on the
// rendered page image (magazine p. 43), which governs over both the
// OCR stream and the individual entries' cost lines where the scan's
// column flow interleaves them; every effect was verified against its
// entry text on pp. 39-42.
// ONE weapon from "Checkmate" (Kevin Baase and Eric Jansing),
// pp. 45-57: the DIRE MACE, the king chaturan's weapon, described in a
// sidebar on p. 56 with full weapon statistics. The article's six
// chaturani themselves are monsters and digest in reference.md §4.
// TEN psionic alchemical substances from "Class Acts: Psionic Alchemy"
// (Mark A. Hart), pp. 90-91 — a Class Acts column the program survey
// never itemized. Prices, weights, and Craft DCs verified against the
// column's Psionic Alchemical Substances table on the rendered page
// image (magazine p. 91); effects verified against the entry texts on
// pp. 90-91.

import type { EquipmentItem } from "@/engine/types";

const SRC_FORGE = "Dragon Magazine #358 — Master's Forge: Crafting Legends (Rodney Thompson), pp. 38-43";
const SRC_CHECKMATE = "Dragon Magazine #358 — Checkmate (Kevin Baase and Eric Jansing), p. 56";
const SRC_PSIONIC = "Dragon Magazine #358 — Class Acts: Psionic Alchemy (Mark A. Hart), pp. 90-91";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_FORGE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const QUALITY_FRAME =
  "Masterwork item quality (nonmagical), from the Master's Forge system: a craftsman who knows this quality (via the Artisan Craftsman feat) may apply it when crafting an item's masterwork component; the quality modifies the cost and Craft DC of the masterwork component as listed here. ";

export const DRAGON_358_EQUIPMENT: EquipmentItem[] = [
  // ---- Master's Forge: the eighteen item qualities ----
  E({
    id: "acid-washed",
    name: "Acid Washed (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp (light armor and weapons), +200 gp (medium and heavy armor)",
    notes:
      QUALITY_FRAME +
      "Swords made from two or more metals are acid washed to bring out the contrast between the metals; the process creates elaborate patterns on the surface. An item with this quality gains a +4 bonus on saving throws made against acid, rust, or disintegration. Restriction: may only be applied to metal weapons and armor. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "basket-hilt",
    name: "Basket Hilt (Item Quality)",
    category: "masterwork item quality",
    cost: "+50 gp",
    notes:
      QUALITY_FRAME +
      "An elaborate guard piece that protects the hand holding the sword, ranging from a nearly solid curved shield of metal to an elaborate woven pattern. A basket hilt grants a +4 bonus on opposed attack rolls made to resist disarm attempts. Restriction: may only be applied to swords. Craft DC modifier: +3 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "blood-groove",
    name: "Blood Groove (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp",
    notes:
      QUALITY_FRAME +
      "The fuller, also known as the blood groove, is a furrow that travels down the length of the blade from the hilt to just before the tip, designed to reduce the weight of the blade and increase its strength. The fuller reduces the weight of the weapon by 20%, or 1/2 pound, whichever is greater, and increases its hardness by 2. Restriction: may only be applied to swords. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "caster-armor",
    name: "Caster Armor (Item Quality)",
    category: "masterwork item quality",
    cost: "+400 gp (light), +800 gp (medium), +1,000 gp (heavy)",
    notes:
      QUALITY_FRAME +
      "Armor specifically designed for the needs of spellcasters, made more flexible to allow the complicated movements of somatic components. A suit of armor with this quality reduces the chance of arcane spell failure by 5%. Restriction: may only be applied to armor with an arcane spell failure chance. Craft DC modifier: +7 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "deceptive-quality",
    name: "Deceptive (Item Quality)",
    category: "masterwork item quality",
    cost: "+800 gp",
    notes:
      QUALITY_FRAME +
      "A weapon made to look like another item entirely — a bow that slides into a wooden container resembling a walking stick, or a sword and sheath that appear as a cane. A deceptive weapon grants its bearer a +4 circumstance bonus on Sleight of Hand checks made to hide or otherwise disguise the weapon. Restriction: may only be applied to weapons. Craft DC modifier: +7 to the Craft DC of the masterwork component. (Suffixed id: the plain adjective is kept off the weapon-name space; see SCREENING.md §2.)",
  }),
  E({
    id: "enhanced-bracing",
    name: "Enhanced Bracing (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp",
    notes:
      QUALITY_FRAME +
      "Spears and pole arms with special bases designed to dig into the ground, preventing the weapon from becoming dislodged when striking a charging foe. A weapon with this quality provides a +2 circumstance bonus on damage rolls when set against a charge. Restriction: may only be applied to spears and pole arms that can be braced against a charge. Craft DC modifier: +3 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "environmentally-designed",
    name: "Environmentally Designed (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp",
    notes:
      QUALITY_FRAME +
      "Armor adapted to extreme weather — well-ventilated suits for hot locales, insulated suits for cold climates. A suit of armor with this quality provides a +2 circumstance bonus on saving throws against harsh environmental conditions in either extreme heat or extreme cold (determined at the time the armor is created). Restriction: may only be applied to armor. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "folded-metal",
    name: "Folded Metal (Item Quality)",
    category: "masterwork item quality",
    cost: "+200 gp",
    notes:
      QUALITY_FRAME +
      "A technique that folds two or more heated metals onto each other numerous times during forging, making for highly durable weapons. A weapon crafted with this quality gains a +4 bonus to its hardness. Restriction: may only be applied to metal weapons. Craft DC modifier: +7 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "lightweight-quality",
    name: "Lightweight (Item Quality)",
    category: "masterwork item quality",
    cost: "+200 gp (light and medium), +500 gp (heavy)",
    notes:
      QUALITY_FRAME +
      "Armor made lighter without sacrificing any of the protection it provides. The overall weight of a suit of armor with this quality is reduced by 20%, or 1 pound, whichever is greater. Restriction: may only be applied to armor. Craft DC modifier: +7 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "long-range-quality",
    name: "Long-Range (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp",
    notes:
      QUALITY_FRAME +
      "The secrets of making long-range bows and crossbows, learned after long trials. A weapon with this quality increases its range increment by 20 feet. Restriction: may only be applied to bows and crossbows. Craft DC modifier: +3 to the Craft DC of the masterwork component. (Suffixed id to keep the quality's name distinct in the equipment barrel; see SCREENING.md §2.)",
  }),
  E({
    id: "ornate-quality",
    name: "Ornate (Item Quality)",
    category: "masterwork item quality",
    cost: "+400 gp (light), +600 gp (medium and heavy), +500 gp (weapon)",
    notes:
      QUALITY_FRAME +
      "An item made both utilitarian and beautiful, carrying a certain amount of prestige as a sign of great honor or station. Ornate weapons and armor grant the owner a +2 circumstance bonus on Diplomacy or Intimidate checks (chosen when the weapon or armor is crafted) when wielded or worn in an appropriate setting. Restriction: may be applied to any weapon or suit of armor. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "perfect-balance",
    name: "Perfect Balance (Item Quality)",
    category: "masterwork item quality",
    cost: "+100 gp",
    notes:
      QUALITY_FRAME +
      "A weapon with perfectly distributed weight, helping a combatant remain effective even when unstable. A melee weapon with this quality grants its wielder an additional +1 bonus to AC when taking the total defense action. Restriction: may only be applied to melee weapons. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "razor-sharp",
    name: "Razor Sharp (Item Quality)",
    category: "masterwork item quality",
    cost: "+1,000 gp",
    notes:
      QUALITY_FRAME +
      "A superior edge coaxed from a blade, slicing into opponents more easily and sticking within foes less frequently. A bladed weapon with this quality deals an extra +1 point of damage. Restriction: may only be applied to bladed slashing weapons. Craft DC modifier: +6 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "reinforced-quality",
    name: "Reinforced (Item Quality)",
    category: "masterwork item quality",
    cost: "+800 gp (light), +1,000 gp (medium), +1,200 gp (heavy)",
    notes:
      QUALITY_FRAME +
      "Armor lined with toughened leather, small metal plates, or other hardened material, providing a little extra defense without compromising flexibility. Armor with this quality increases its armor bonus by +1, but it weighs 10% more (minimum 2 pounds). Restriction: may only be applied to armor. Craft DC modifier: +10 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "resilient-quality",
    name: "Resilient (Item Quality)",
    category: "masterwork item quality",
    cost: "+200 gp",
    notes:
      QUALITY_FRAME +
      "Weapons and armor created to stand up to damage and constant usage. Weapons and armors with this quality have 5 more hit points (regardless of the original material they were made from) than standard items of the same type. Restriction: may be applied to all weapons and armor. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "segmented-quality",
    name: "Segmented (Item Quality)",
    category: "masterwork item quality",
    cost: "+200 gp (light and medium), +300 gp (heavy)",
    notes:
      QUALITY_FRAME +
      "Armor segmented to create more points of articulation, increasing its flexibility. A suit of armor with this quality increases its maximum Dexterity bonus by +1. Restriction: may only be applied to armor. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "serrated-quality",
    name: "Serrated (Item Quality)",
    category: "masterwork item quality",
    cost: "+600 gp",
    notes:
      QUALITY_FRAME +
      "Small notches along the weapon's edge that tear the flesh, causing excessive bleeding beyond the initial damage. Weapons with this quality deal 1 point of damage each round for 1d4 rounds following a successful critical hit. This repeating damage does not apply to creatures immune to critical hits. Restriction: may only be applied to piercing or slashing weapons. Craft DC modifier: +5 to the Craft DC of the masterwork component.",
  }),
  E({
    id: "vital-coverage",
    name: "Vital Coverage (Item Quality)",
    category: "masterwork item quality",
    cost: "+200 gp (light), +400 gp (medium), +1,000 gp (heavy)",
    notes:
      QUALITY_FRAME +
      "Reinforced panels that block attacks against exposed flesh and seal up vulnerabilities that could lead to a devastating attack. Any suit of armor with this quality grants an additional +2 armor bonus against attacks made to confirm critical hits. Restriction: may only be applied to armor. Craft DC modifier: +7 to the Craft DC of the masterwork component.",
  }),
  // ---- Checkmate: the king's weapon ----
  E({
    id: "dire-mace",
    name: "Dire Mace",
    category: "weapon",
    cost: "35 gp",
    weight: "12 lb.",
    source: SRC_CHECKMATE,
    notes:
      "Exotic two-handed melee weapon (usable two-handed as a martial weapon; too large to use in one hand without the Exotic Weapon Proficiency (dire mace) feat). Damage 1d10 (Medium), critical 20/x2, type bludgeoning. A dire mace resembles a heavy mace, but with a longer shaft and a more massive head. As printed in the king chaturan's entry in the same article, a king wielding a dire mace has reach (the king's stat block lists Reach 5 ft., 10 ft. with dire mace).",
  }),
  // ---- Class Acts: Psionic Alchemy — the ten substances ----
  E({
    id: "aura-gel",
    name: "Aura Gel",
    category: "alchemical gear",
    cost: "25 gp",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a flask. To activate this clear, viscous gel, you must first tear away the vial's thin lead covering and expose it to a psionic aura. When within 60 feet of active psionic powers or psi-like abilities, the gel emits a colorful glow, with the color based on the strongest aura within range (lesser auras are ignored): clairsentience yellow, metacreativity gray, psychokinesis red, psychometabolism blue, psychoportation black, telepathy white. The glow increases or fades as it moves closer to or farther from a psionic aura, regardless of the strength of the strongest aura. After 1 minute of exposure to psionic energy, the gel turns to dust. Aura gel reacts only to psionic energy; it does not react in the presence of magic. Craft DC 20.",
  }),
  E({
    id: "cerebral-serum",
    name: "Cerebral Serum",
    category: "alchemical gear",
    cost: "150 gp",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a vial. Few concoctions boast as vile and acrid a taste as cerebral serum — black as tar and lumpy as oatmeal, it helps inoculate the imbiber against psionic mental attacks and effects. If you drink the serum, you gain a +2 alchemical bonus on Will saves against mind-affecting psionic powers and psi-like abilities for 1 hour. Craft DC 30.",
  }),
  E({
    id: "ectoplasmic-skin",
    name: "Ectoplasmic Skin",
    category: "alchemical gear",
    cost: "25 gp",
    weight: "1 lb.",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a flask. A sealed flask of ectoplasmic skin contains a syrupy, silvery liquid. Once you remove the seal, the liquid begins to crystallize and evaporates within 1 minute. At any time before then, you may apply the liquid to your skin as a full-round action. The ectoplasm forms a translucent second skin over your body, providing you with damage reduction 2/magic for up to 1 minute. You cannot wear a psychic skin in conjunction with ectoplasmic skin. Craft DC 25.",
  }),
  E({
    id: "intuition-vapor",
    name: "Intuition Vapor",
    category: "alchemical gear",
    cost: "75 gp",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a vial. When you uncork this vial, a cloud of pale yellow vapors billows forth and fills the air with the scent of cinnamon. It contains enough vapors to fill four 5-foot squares. Only creatures with psionic powers or psi-like powers occupying the affected squares gain the vapor's benefits: each affected creature receives a +4 alchemical bonus on Concentration, Listen, and Search checks for the next 10 minutes. As a side effect, the vapor slows the reactions of affected creatures for its duration: each affected creature takes a -2 penalty on Spot and initiative checks. A psionic creature may make a DC 12 Fortitude save to resist the effects (both positive and negative) of the vapors. Craft DC 30.",
  }),
  E({
    id: "liquid-stone",
    name: "Liquid Stone",
    category: "alchemical gear",
    cost: "25 gp",
    weight: "1 lb.",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a flask. A flask of this substance holds a thick gray liquid with the consistency of watery mud. Even when exposed to air, liquid stone retains its wet consistency for up to 8 hours before turning to powder. When you expend your psionic focus while holding a flask of liquid stone, it slowly hardens into stone over 1 minute, during which time you may sculpt the mud however you choose. Once it dries, liquid stone retains the same properties as normal rock with a hardness of 8 and 15 hit points. It (or anything sealed by it) has a burst DC of 30. A flask of liquid stone covers an area 1-foot-square with 1 inch of stone. Craft DC 15.",
  }),
  E({
    id: "mimic-clay",
    name: "Mimic Clay",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical). This substance possesses a dull gray color and the consistency of natural clay. To activate mimic clay, you must touch it and expend your psionic focus. The clay takes on a translucent color and its consistency softens. When you visualize a hand-sized tool or object, the clay changes shape, texture, and color to duplicate the visualized item within 1 round. The clay retains the same mass and weight regardless of its transformation, so you must use an amount of clay equal to the weight of the object you wish to duplicate. The clay has the potential to mimic any mundane object of Tiny or smaller size, although it cannot duplicate items with multiple parts or complex, moving pieces. If you wish to duplicate a precise item such as a key, you must make a DC 15 Craft check of the appropriate type (such as locksmithing). A successful DC 20 Appraise check reveals an item created using mimic clay as a facsimile. The clay crumbles to dust 1 hour after activation. Craft DC 25.",
  }),
  E({
    id: "psi-block",
    name: "Psi Block",
    category: "alchemical gear",
    cost: "25 gp",
    weight: "1 lb.",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical). A small clay pot holds one application of psi block. The substance resembles a glossy, thin paste sticky to the touch. To use psi block, you must apply a thin, even coat of the paste over an object or creature; one pot contains enough psi block to coat a Medium creature or object. Psi block acts like a thin sheet of lead: it prevents psionic powers and psi-like abilities such as detect hostile intent or detect psionics from noticing the creature or object. Psi block only blocks psionic detection powers and psi-like abilities. The paste hardens and flakes off the subject 1 hour after application; before that time you may remove the paste with alcohol or a similar solvent, which requires 1 minute. Craft DC 20.",
  }),
  E({
    id: "psionic-ichor",
    name: "Psionic Ichor",
    category: "alchemical gear",
    cost: "60 gp",
    weight: "1 lb.",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a flask. In its natural state, psionic ichor resembles green slime. In the presence of a psionic aura, the slime boils and bubbles, although it remains at room temperature. You can throw a flask of psionic ichor as a grenade-like weapon, although it only affects creatures with a direct hit; treat this as a ranged touch attack with a range increment of 10 feet. A direct hit with the ichor only affects creatures with psionic powers: a psionic creature doused by the substance must expend 1 additional power point for each psionic power he manifests. The effect of psionic ichor lasts for 1 hour. A target may use a full-round action to wipe the ichor from his body. Multiple applications on the same target have no additional effect. Craft DC 30.",
  }),
  E({
    id: "rejuvenation-essence",
    name: "Rejuvenation Essence",
    category: "alchemical gear",
    cost: "30 gp",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a vial. When consumed, this fine, bluish-white powder grants you exceptional rest. You rejuvenate power points after as little as 4 hours of rest instead of the usual 8 hours. In addition, you may ignore a single interruption during your rest cycle, thus avoiding adding another hour to your total sleep requirement. Craft DC 20.",
  }),
  E({
    id: "xephs-blood",
    name: "Xeph's Blood",
    category: "alchemical gear",
    cost: "40 gp",
    source: SRC_PSIONIC,
    notes:
      "Psionic alchemical substance (nonmagical), sold as a vial. This blood-colored liquid contains the essence of a xeph's speed burst. When you drink xeph's blood while holding psionic focus, you gain a momentary burst of speed: the mixture grants you an alchemical bonus of 10 feet to your base speed, lasting for 3 rounds. If you consume more than one dose of xeph's blood per day, you become fatigued with the second dose. If you consume a third dose in a day, you immediately become exhausted and gain no benefits from the xeph's blood. Craft DC 30.",
  }),
];
