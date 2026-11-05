import type { EquipmentItem } from "@/engine/types";

// Sharn: City of Towers (Eberron, WotC) — the Chapter 6
// equipment: alchemical substances (Table 6-1, p. 158),
// drugs (Table 6-4, pp. 160-161), and goods (Table 6-2,
// pp. 158-159), transcribed from Shaun's own scanned copy
// (read visually; the scan is image-only), 2026-11-04.
// Every substance and drug can be made with the Craft
// (alchemy) skill at the DC noted. The addiction system
// behind the drugs (Table 6-3, p. 160) is a rules system,
// not an item, and is summarized inside the drug entries
// only where a single dose's effects require it. The
// Services and Spellcasting table (Table 6-5, p. 161:
// hireling barrister, House Kundarak arcane seal service,
// House Sivis mark of the living parchment service) lists
// services rather than purchasable gear and is not built;
// skycoach travel (Chapter 1, p. 24) is likewise a fare —
// 1 sp per mile — not a priced vehicle. Notes are short
// mechanical paraphrases in our own words; no book prose
// is reproduced.

const SHARN = "Sharn: City of Towers";
const SHARN_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Sharn - City of Towers.pdf";

export const SHARN_EQUIPMENT: EquipmentItem[] = [
  {
    id: "aelias-tonic",
    name: "Aelia's Tonic",
    category: "alchemical gear",
    cost: "5 gp",
    weight: "—",
    notes: "Alchemical substance (Craft (alchemy) DC 25). A foul, murky liquid designed to complement darkeye, enhancing the strength of the visions — though also increasing the risk to the drinker. A character who consumes a glass takes a -2 circumstance penalty on all saving throws against ingested poisons for the next hour; this penalty is increased to -4 if the saving throw is made to resist the effects of darkeye. A full dose (4 ounces) is required to have any effect.",
    source: `${SHARN}, Chapter 6: Alchemical Substances, p. 158`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "darkeye",
    name: "Darkeye",
    category: "alchemical gear",
    cost: "50 gp",
    weight: "—",
    notes: "Alchemical substance (Craft (alchemy) DC 25) that acts as an ingested poison: Fortitude DC 12, initial damage paralysis, secondary damage 1 Con. If the victim fails his saving throw against the secondary damage, the paralysis continues and he must make another save after a minute has passed; if he fails, he remains paralyzed, loses another point of Constitution, and must save again the following minute, continuing until the victim makes a successful saving throw. For an hour after consuming darkeye, the victim gains +1 effective caster level when casting any necromantic spell, increased to +5 when casting speak with dead. A full dose (2 ounces) is required to have any effect.",
    source: `${SHARN}, Chapter 6: Alchemical Substances, pp. 158-159`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "heartflow",
    name: "Heartflow",
    category: "alchemical gear",
    cost: "15 gp",
    weight: "—",
    notes: "Alchemical substance (Craft (alchemy) DC 20). A clear fluid and powerful aphrodisiac that primarily enhances sensation but also leaves the user vulnerable to seduction: for three hours after using heartflow, a character receives a -3 penalty on saving throws against charm person, suggestion, or other mind-altering effects that inspire love or trust, and a -3 penalty on Sense Motive checks made to oppose Diplomacy or Bluff. A character who receives a dose without his knowledge or against his will can make a DC 15 Fortitude save to resist this effect.",
    source: `${SHARN}, Chapter 6: Alchemical Substances, p. 158`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "absentia",
    name: "Absentia",
    category: "alchemical gear",
    cost: "200 gp",
    weight: "—",
    notes: "Drug (Craft (alchemy) DC 30; Will save DC 16 rather than Fortitude; addiction rating Negligible). A magical drug — its positive effects do not take hold in an antimagic field, but its secondary effects and addiction remain. Illegal in Sharn; the creator must also have access to the remote viewing psionic power. Initial effect: the user falls into a comatose state for one hour, perceiving the world through the senses of another (similar to scrying, concentrated on an individual, all five senses; the target is selected randomly from anyone within one mile, and the potion cannot affect anyone protected by mind blank or a similar effect). Secondary effect: none. Side effects: during the coma, a Quori spirit can possess the user's body regardless of the Charisma score of the victim or his willingness to be possessed. Overdose: none.",
    source: `${SHARN}, Chapter 6: Drugs, pp. 160-161`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "dragons-blood-black",
    name: "Dragon's Blood, Black",
    category: "alchemical gear",
    cost: "240 gp",
    weight: "—",
    notes: "Drug (Craft (alchemy) DC 30; Fortitude DC 15; addiction rating Medium). A magical drug — its positive effects do not take hold in an antimagic field, but its negative aspects, secondary effects and addiction remain. A character can only gain the benefits of one elixir of dragon's blood per day, and any use can potentially lead to an overdose if the user fails a Will save; aberrant dragonmarks are considered to be least dragonmarks for its purposes. Initial effect: the next use of a least dragonmark or a sorcerer spell of 2nd level or lower is enhanced with the effects of Enlarge Spell and Extend Spell; this effect lasts for ten minutes or until the user casts a spell or uses a dragonmark. Secondary effect: 1d4 points of Charisma damage. Side effects: none. Overdose: DC 18 Will save or take 2d6 points of damage.",
    source: `${SHARN}, Chapter 6: Drugs, p. 161`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "dragons-blood-blue",
    name: "Dragon's Blood, Blue",
    category: "alchemical gear",
    cost: "750 gp",
    weight: "—",
    notes: "Drug (Craft (alchemy) DC 30; Fortitude DC 18; addiction rating High). A magical drug — its positive effects do not take hold in an antimagic field, but its negative aspects, secondary effects and addiction remain. A character can only gain the benefits of one elixir of dragon's blood per day, and any use can potentially lead to an overdose if the user fails a Will save; aberrant dragonmarks are considered to be least dragonmarks for its purposes. Initial effect: the next use of a least or lesser dragonmark or a sorcerer spell of 4th level or lower does not use up a daily spell slot or a daily use of a dragonmark ability; this effect lasts for ten minutes or until the user casts a spell or uses a dragonmark, whichever comes first. Secondary effect: 1d4+1 points of Charisma damage. Side effects: none. Overdose: DC 20 Will save or take 4d6 points of damage.",
    source: `${SHARN}, Chapter 6: Drugs, p. 161`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "dragons-blood-red",
    name: "Dragon's Blood, Red",
    category: "alchemical gear",
    cost: "1,200 gp",
    weight: "—",
    notes: "Drug (Craft (alchemy) DC 30; Fortitude DC 20; addiction rating Extreme). A magical drug — its positive effects do not take hold in an antimagic field, but its negative aspects, secondary effects and addiction remain. A character can only gain the benefits of one elixir of dragon's blood per day, and any use can potentially lead to an overdose if the user fails a Will save; aberrant dragonmarks are considered to be least dragonmarks for its purposes. Initial effect: all least or lesser dragonmark abilities and all sorcerer spells of 3rd level or lower are enhanced for the next minute — if the spell or dragonmark ability has a variable numeric element, it gains the benefit of Maximize Spell; if not, the user's effective caster level is increased by 3. Secondary effect: 1d6+1 points of Charisma damage. Side effects: none. Overdose: DC 22 Will save or take 8d6 points of damage.",
    source: `${SHARN}, Chapter 6: Drugs, p. 161`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "dreamlily",
    name: "Dreamlily",
    category: "alchemical gear",
    cost: "1 gp",
    weight: "—",
    notes: "Drug (Craft (alchemy) DC 25; Fortitude DC 12; addiction rating High). Essence of dreamlily is an iridescent, psionically active opiate liquid. Initial effect: the user feels completely at peace for 8 hours, and nothing — not even physical injury — can disturb him; the user can operate normally while he has 0 to -4 hit points, at -5 hit points he is disabled, and at -6 or below he becomes unconscious, and he is immune to fear and similar supernatural effects. Secondary effect: 1d4 points of Wisdom damage. Side effects: the user can take only a single action each round while under the influence of dreamlily. Overdose: DC 10 Will save or take 2d4 points of damage. Special: a dreamlily addict takes a -2 penalty on all Will saving throws until he manages to break the addiction.",
    source: `${SHARN}, Chapter 6: Drugs, p. 161`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "clothing-clebdecher-glamerweave",
    name: "Clothing, Clebdecher Glamerweave",
    category: "gear",
    cost: "500 gp, plus twice the standard price of the outfit",
    weight: "—",
    notes: "A specially tailored Clebdecher outfit compares to normal glamerweave as glamerweave compares to mundane clothing; it must be personally designed and fitted to the intended wearer, which takes time. It provides its wearer with a +2 circumstance bonus on Diplomacy checks, and carries a certain status among those who recognize the designer's work.",
    source: `${SHARN}, Chapter 6: Goods, p. 158`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "house-sivis-notarized-document-blank",
    name: "House Sivis Notarized Document, Blank",
    category: "gear",
    cost: "2 gp",
    weight: "—",
    notes: "A blank sheet of parchment inscribed with the distinctive arcane mark of a House Sivis heir (only an heir with the Least Mark of Scribing can produce one). The arcane mark makes things very difficult for forgers, but unscrupulous members of House Sivis sell blank sheets, allowing forgers to produce whatever documents they require. Because of their role in counterfeiting, blank Sivis documents are considered contraband; an heir caught producing them is immediately disinherited and held in a Sivis jail for treason against the interests of the house.",
    source: `${SHARN}, Chapter 6: Goods, pp. 158-159`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "potion-bracer",
    name: "Potion Bracer",
    category: "gear",
    cost: "50 gp",
    weight: "1.5 lb.",
    notes: "A leather band reinforced with strips of steel, with slots for three potion vials, worn on the forearm for instant hands-free access to the three potions. Drinking a potion from the bracer is a standard action, but it does not provoke an attack of opportunity or require a warrior to put down his weapon. The bracer is obvious to observers and can be directly attacked: a character can make a sunder attack against the bracer (AC 14 + wearer's Dexterity modifier); it has hardness 8 and 5 hit points, and any attack that deals 5 or more hit points of damage shatters one of the potion vials (chosen randomly) even if the bracer itself is untouched. Due to the weight placed on the forearm, a potion bracer has an arcane spell failure chance of 5%.",
    source: `${SHARN}, Chapter 6: Goods, p. 159`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
  {
    id: "resilient-document",
    name: "Resilient Document (1 page)",
    category: "gear",
    cost: "1 gp",
    weight: "—",
    notes: "A document made from a material far stronger than paper or parchment, developed by the Library of Korranberg using alchemical techniques and the exotic woods of Aerenal. A resilient document has hardness 3 and 3 hit points (a resilient book has hardness 3 and 7 hit points per inch of thickness); it is not adversely affected by exposure to water and has fire resistance 3, allowing it to survive temporary exposure to fire without serious damage. The listed price is added to the base cost of that sort of document; a resilient book (such as a wizard's spellbook) costs an additional 100 gp.",
    source: `${SHARN}, Chapter 6: Goods, p. 159`,
    sourceUrl: SHARN_PATH,
    ruleset: "eberron",
  },
];
