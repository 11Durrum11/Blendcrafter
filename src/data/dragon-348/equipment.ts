// Dragon Magazine #348 (October 2006) — equipment draft: 8 items.
// ALL EIGHT from "Class Acts: Mountain Ghosts" (Wolfgang Baur),
// pp. 82-86: the secret gear of a dwarven sect of stealth-masters —
// five exotic weapons (ghost spike, repeating blowgun, double
// axehead, exploding bolt, mountain chain), two armors (twisted silk,
// lead-lined breastplate), and one alchemical item (alchemical
// silence). The article's tables print on p. 86; item texts run
// pp. 82-86.
// COLLISION REPORT: the survey's "~3 items already in catalog
// (pp. 86-87)" is exactly right — ghost spike, twisted silk, and
// lead-lined breastplate stand in the live catalog as crystalkeep
// fan-index stubs sourced to this very article. Per the issue-319/331
// precedent, the full extractions stage beside the stubs under -348
// ids and the stubs stand untouched. The other five items have no
// live record and stage under plain ids (verified against all live
// barrels at extraction). Prices, damages, weights, and armor figures
// were read from the article's printed tables in the OCR stream; the
// table agrees with the fan-index stubs on every shared figure
// (ghost spike 320 gp, twisted silk 400 gp / +3 / max Dex +7 / 0 /
// 5% / 15 lb., lead breastplate 200 gp / +5 / +3 / -4 / 25% / 35 lb.),
// which cross-verifies both.
// ⚠️ SCREENING — see SCREENING.md: the mountain ghosts are framed in
// the article as "assassins, ninjas, and shadowdancers" and the ghost
// spike text names ninjas and assassins as automatically proficient —
// the gear itself is dwarven stealth equipment with no oriental
// mechanics, staged as printed with the framing flagged; the word
// "ninja" is carried only inside the proficiency note as printed.

import type { EquipmentItem } from "@/engine/types";

const SRC = "Dragon Magazine #348 — Class Acts: Mountain Ghosts (Wolfgang Baur), pp. 82-86";
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

export const DRAGON_348_EQUIPMENT: EquipmentItem[] = [
  E({
    id: "ghost-spike-348",
    name: "Ghost Spike",
    category: "weapon",
    cost: "320 gp",
    weight: "2 lb.",
    notes:
      "Exotic one-handed melee weapon (double weapon). Damage 1d6/1d6 (Medium; 1d4/1d4 Small), critical 19-20/x2 (one end) and x3 (the other), type piercing. A masterwork shortsword forged with techniques held secret by the mountain ghost clan, resembling a short sword with a spike in place of the pommel; each possesses an individual name (the article gives the Dwarven equivalents of Firetooth, Greyjoy, Whiteheart, and Widow). Each is typically made from silver or cold iron. A ghost spike is a double weapon: you can fight with it as if fighting with two weapons, incurring all the normal attack penalties as if using a one-handed weapon and a light weapon; both ends deal piercing damage, and you can use either head as the primary weapon. Ninjas and assassins are automatically proficient with ghost spikes; other classes treat them as exotic weapons. (Full extraction beside the fan-index stub 'ghost-spike' — see SCREENING.md.)",
  }),
  E({
    id: "blowgun-repeating",
    name: "Blowgun, Repeating",
    category: "weapon",
    cost: "100 gp",
    weight: "1 lb.",
    notes:
      "Exotic ranged weapon. Damage 1d3 (Medium; 1d2 Small), critical x2, range increment 40 ft., type piercing. This blowgun includes a sliding mechanism that resembles a six-note pan pipe; each pipe is preloaded with a blowgun dart, allowing the user to fire up to two blowgun darts per round rather than the usual one per round (assuming the user has the ability to make at least two attacks in a round). The repeating blowgun holds six blowgun darts; as long as it holds darts, you can reload it by pushing the cartridge up as a free action and take a second shot. Loading a new cartridge of six darts requires a full-round action that provokes attacks of opportunity. You can fire a repeating blowgun with one hand but you can only fire one per round; you must use two hands to load a new cartridge.",
  }),
  E({
    id: "double-axehead",
    name: "Double Axehead",
    category: "weapon",
    cost: "30 gp",
    weight: "2 lb.",
    notes:
      "Exotic ranged weapon (thrown). Damage 2d4 (Medium; 2d3 Small), critical x2, range increment 20 ft., type slashing. A thin, double-bladed axehead with no handle, a weapon the mountain ghosts jealously guard the technique of throwing; the weapons have better range and damage than simple hand axes.",
  }),
  E({
    id: "exploding-bolt",
    name: "Exploding Bolt",
    category: "weapon",
    cost: "60 gp",
    weight: "2 lb.",
    notes:
      "Exotic ranged ammunition (crossbow bolt). Damage 2d12 fire, no critical, range increment 3/4 normal. These powerful and extremely dangerous alchemical bolts contain reactive agents that explode in a 5-foot radius when they strike; the explosion deals 2d12 points of fire damage. A creature struck by the bolt can make a DC 20 Reflex save for half; those caught in the explosion can make a DC 15 Reflex save to negate the damage. Because of their awkward shape and weight, an exploding crossbow bolt can only be fired from a heavy crossbow and its range increment is reduced to 3/4 normal. The formula is unknown outside the strongholds of the mountain ghosts, but the bolts are sometimes sold to \"reliable\" allies for five times the listed cost, typically in small lots of no more than four to six bolts at a time.",
  }),
  E({
    id: "mountain-chain",
    name: "Mountain Chain",
    category: "weapon",
    cost: "25 gp",
    weight: "2 lb.",
    notes:
      "Exotic ranged ammunition (crossbow). No damage of its own (see text), range increment 1/2 normal. Comprised of three balls linked by stout chain, a mountain chain resembles a set of bolas; you must fire it from a light or heavy crossbow, and it is made in such a way that it can be fired from a normal crossbow without penalty. You can use this weapon to make a ranged trip attack against an opponent, and you can't be tripped during your own trip attempt when using a set of mountain chain. It deals only nonlethal damage. Because of the mountain chain's awkward shape, a crossbow firing it has its range increment reduced to 1/2 normal.",
  }),
  E({
    id: "twisted-silk-348",
    name: "Twisted Silk",
    category: "armor",
    cost: "400 gp",
    weight: "15 lb.",
    notes:
      "Light armor. Armor bonus +3, maximum Dexterity bonus +7, armor check penalty 0, arcane spell failure chance 5%, speed 30 ft. / 20 ft. Rare and valuable, twisted silk armor uses silk wound around strands of mithral to generate protection with very little weight; it superficially resembles a very well made form of padded armor but offers much greater defense — the silk keeps it silent and the twisted strands are surprisingly durable. (Full extraction beside the fan-index stub 'twisted-silk' — see SCREENING.md.)",
  }),
  E({
    id: "lead-lined-breastplate-348",
    name: "Lead-Lined Breastplate",
    category: "armor",
    cost: "200 gp",
    weight: "35 lb.",
    notes:
      "Medium armor. Armor bonus +5, maximum Dexterity bonus +3, armor check penalty -4, arcane spell failure chance 25%, speed 20 ft. / 15 ft. A thin layer of soft lead added to the interior of this breastplate (and often to a skullcap as well) helps protect the mountain ghosts from divinations and mind-affecting enchantments: the armor provides a +1 circumstance bonus on saving throws made to resist such spells. (Full extraction beside the fan-index stub 'lead-lined-breastplate', whose name the article's table shortens to \"Lead breastplate\" — see SCREENING.md.)",
  }),
  E({
    id: "alchemical-silence",
    name: "Alchemical Silence",
    category: "gear",
    cost: "350 gp",
    weight: "1/2 lb.",
    notes:
      "Alchemical item (nonmagical). When applied to boots and armor, this noise-dampening oil provides a +2 alchemical bonus on Move Silently checks. You can throw a flask of alchemical silence as a splash weapon: treat this attack as a ranged touch attack with a range increment of 10 feet. A creature struck by a thrown flask cannot speak louder than a whisper, and indeed some of his words become completely muffled; if thrown on a spellcaster, the target suffers a 20% chance of spell failure when casting any spell with a verbal component for 2 rounds. The struck creature, however, does gain the benefits of the alchemical silence as detailed above.",
  }),
];
