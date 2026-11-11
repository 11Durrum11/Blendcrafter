// Dragon Magazine #349 (November 2006) — magic item draft: 9 records.
//
// All nine come from the issue's Web Supplement, "The Horde:
// Barbarians of the Endless Waste" (Edward Bonny, Brian Cortijo,
// Richard Farrese, Laszlo Koller), the Paizo web enhancement for the
// issue's "The Horde" feature, bundled with the issue in the same
// archive item. Forgotten Realms material — ruleset "faerun". The
// supplement's text layer is clean; every price, aura, caster level,
// and weight below was read from it directly.
//
// The four named Horde War relics (Cormyte War-Staff, GhostStorm, Orc
// Claw, Royal Armor of Semphar) print in the supplement's "Lost in the
// Horde War" sidebar without Construction lines; their summaries
// follow the supplement's own format (aura; CL; craft feat and spells;
// price; weight).
//
// ⚠️ APOC FLAG — Axe of the Horse Lord: its once-per-day mount ability
// is expressly a conjuration (calling) effect. Under the standing
// screening, calling content screens to reference because planar
// travel is severed and the crystal sphere is sealed. The item is
// staged whole, as printed, and the conflict is flagged in
// SCREENING.md for Shaun's call rather than silently edited — compare
// the issue-331 treatment of the dune yacht's planar binding and the
// chariot of Sustarre's summoning, both staged as printed with flags.
// GhostStorm's Kara-Tur origin is a line of item lore only; the item
// itself is a standard magic longsword with no oriental mechanics, so
// it stages (the standing oriental ruling bars oriental classes,
// feats, and material — not a sword's provenance note, which is
// stripped to the mechanics here in any case).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_SUPP = "Dragon Magazine #349 Web Supplement — The Horde: Barbarians of the Endless Waste (Edward Bonny, Brian Cortijo, Richard Farrese, Laszlo Koller)";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_SUPP,
    sourceUrl: SRC_URL,
    ruleset: "faerun",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_349_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "axe-of-the-horse-lord",
    name: "Axe of the Horse Lord",
    category: "weapon",
    cost: "98,310 gp",
    summary:
      "A +3 icy burst battleaxe with a broad, serrated blade whose teeth never need sharpening. Wielded from horseback, it deals 2d8+3 points of damage and has a x3 critical modifier. Once per day as a full-round action, calling its name aloud three times conjures a magical warhorse — a conjuration (calling) effect — with the statistics of the special mount of a 10th-level paladin but an alignment matching the wielder's; the horse appears adjacent to the wielder, is absolutely loyal, and remains for up to 20 hours. Dismissing it is a free action, but it cannot be conjured again until the next day. It is the same creature each time, appears at full health regardless of previous damage, and arrives wearing or carrying any gear it had when last dismissed. Should the warhorse die, it and its gear drop to the ground, it cannot be summoned again for one week, and during that week the axe is reduced to a simple +1 battleaxe with no other special properties. Moderate conjuration and evocation; CL 10th; Craft Magic Arms and Armor, chill metal or ice storm, summon monster III; Weight 6 lb. (The calling effect conflicts with APOC's severed planar travel — staged as printed, flagged in SCREENING.md.)",
  }),
  M({
    id: "fedors-lance",
    name: "Fedor's Lance",
    category: "weapon",
    cost: "8,310 gp",
    summary:
      "A +1 lance of burgundy-stained oak, some 14 feet long, fashioned by Fedor the Mighty, the most venerated horseman of the ancient steppe barbarians. Whenever you make a mounted charge attack with Fedor's lance and hit a mounted foe, you can make a free bull rush attempt as part of your attack, gaining a +8 bonus on the opposed Strength check. If the bull rush succeeds, your target is dismounted and falls prone (in addition to taking normal damage from the attack); his mount remains in place and is unaffected. Moderate transmutation; CL 8th; Craft Magic Arms and Armor, bull's strength; Weight 10 lb.",
  }),
  M({
    id: "fedors-shield",
    name: "Fedor's Shield",
    category: "armor",
    cost: "16,157 gp",
    summary:
      "A +2 heavy wooden shield of bashing, round and burgundy with a large white star and a battered metal disk at its center, fashioned after the shield of Fedor the Mighty. It weighs only 2 pounds and confers no armor check penalty. Furthermore, if you have heavy shield proficiency, you gain a +4 bonus on checks made to resist being bull rushed or tripped whenever you wield Fedor's shield. Moderate transmutation; CL 8th; Craft Magic Arms and Armor, bull's strength, levitate; Weight 2 lb.",
  }),
  M({
    id: "horsemans-helm",
    name: "Horseman's Helm",
    cost: "12,000 gp",
    summary:
      "A golden helm of ancient design with a nose guard shaped as a horse's head. When wearing a horseman's helm, you gain the wild empathy ability with horses and horselike animals, such as donkeys, mules, and ponies (not magical beasts like hippogriffs). You gain a +4 bonus on these special wild empathy checks, as well as on Ride and Survival checks (the latter made to track down a group of horsemen). Lastly, you can use speak with animals at will and calm animals three times per day, but only with horses and horselike animals. Weak enchantment; CL 5th; Craft Wondrous Item, calm animals, charm animal, speak with animals; Weight 2 lb.",
  }),
  M({
    id: "sacred-horse-totem",
    name: "Sacred Horse Totem",
    cost: "42,000 gp",
    summary:
      "A four-inch-tall oak statuette of a horse, seeming as old and weather-beaten as the world itself. Placing it in a saddlebag activates its continuous effects: you gain an additional +1 bonus on melee attack rolls (for a total of +2) as well as a +2 bonus on damage rolls when on horseback and fighting creatures smaller than your steed, and your mount gains a +4 increase to its natural armor. Giving your horse three kicks to its flanks activates the totem's once-per-day ability, doubling your mount's move speed when you make a mounted charge (you can charge a distance of four times your move speed rather than merely double). Moderate transmutation; CL 9th; Craft Wondrous Item, barkskin, true strike; Weight 1 lb.",
  }),
  M({
    id: "cormyte-war-staff",
    name: "Cormyte War-Staff",
    category: "weapon",
    cost: "98,600 gp",
    summary:
      "A +2 spell-storing defending quarterstaff of speed, popular among accomplished, martially-minded War Wizards of Cormyr; at least three were lost during the final battle at Thesk in the Horde War. Only one head of a Cormyte war-staff is enhanced; the other is only of masterwork quality. Strong evocation; CL 12th; Craft Magic Arms and Armor, haste and shield or shield of faith, creator must be a caster of at least 12th level; Weight 4 lb.",
  }),
  M({
    id: "ghoststorm",
    name: "GhostStorm",
    category: "weapon",
    cost: "72,315 gp",
    summary:
      "A unique +3 thundering shocking burst longsword, brought back to the Endless Waste from the far eastern realm of Kara-Tur after the Horde War and currently carried by Khan Oguntar, a lesser horselord whose clan roams the southern Endless Waste. Moderate evocation; CL 8th; Craft Magic Arms and Armor, blindness/deafness and call lightning or lightning bolt; Weight 4 lb.",
  }),
  M({
    id: "orc-claw",
    name: "Orc Claw",
    category: "weapon",
    cost: "18,350 gp",
    summary:
      "A +1 keen mighty cleaving greatsword, so named by the barbarians who suffered grievously defending against them in the Horde War; such swords were carried only by elite orc warriors from Zhentil Keep. Moderate evocation; CL 8th; Craft Magic Arms and Armor, divine power, keen edge; Weight 8 lb.",
  }),
  M({
    id: "royal-armor-of-semphar",
    name: "Royal Armor of Semphar",
    category: "armor",
    cost: "64,450 gp",
    summary:
      "Ornately decorated +1 invulnerability spell resistance chainmail (SR 17) from the desert kingdom of Semphar, at the southeastern border of the Endless Waste. Yamun Khahan received three suits of this armor as tribute when his forces captured Semphar. Strong abjuration; CL 15th; Craft Magic Arms and Armor, spell resistance and miracle, stoneskin, or wish; Weight 40 lb.",
  }),
];
