// Dragon Magazine #331 (May 2005) — equipment draft: 55 items.
// TWELVE pole arms from the Complete Pole Arm Chart in "The Point of Pole
// Arms" (Ari Marmell, Jason Bulmahn, and the Dragon staff), pp. 22-28:
// of the chart's 31 weapons, 16 already stand in the catalog as full
// book-source records (the SRD/PHB weapons and the Complete Warrior,
// Frostburn, Eberron, Races of Stone, and Complete Adventurer printings)
// and go to reference as reprints; 15 exist only as crystalkeep fan-index
// stubs sourced to this very article — those stage here as full
// extractions under -331 ids beside their stubs (the issue-319
// precedent), EXCEPT the naginata, sasumata, and sodegarami, whose
// Japanese identity holds them to reference under the standing oriental
// ruling (see SCREENING.md; their stubs remain in the catalog untouched).
// SEVEN primitive weapons from "Class Acts: Archaic Armaments" (Troy E.
// Taylor), p. 84 — the barbarian proficiency-swap set.
// EIGHTEEN nonmagical alchemical items from "Alchemical Charms" (Yury
// Pavlotsky), pp. 30-35: eight charms, eight draughts, an anti-disease
// tonic, and wolfsbane.
// FOUR mundane marine items and SEVEN mundane paladin items from Class
// Acts columns the survey did not itemize ("Marine Munitions," p. 88;
// "Knightly Effects," p. 90).
// SEVEN holy symbols from "Class Acts: Tokens of Faith III" (Amber E.
// Scott), p. 86 — the series conclusion (issues #327/#329 staged the
// first fifteen; these seven complete all 22 PHB domains), staged in the
// issue-327/329 pattern.
// All prices, damages, weights, and rules verified against rendered page
// images (magazine pp. 23-26, 31, 34, 84, 86, 88, 90); the image governs
// over the OCR stream.

import type { EquipmentItem } from "@/engine/types";

const SRC_POLE = "Dragon Magazine #331 — The Point of Pole Arms (Ari Marmell, Jason Bulmahn, and the Dragon staff), pp. 22-28";
const SRC_BARBARIAN = "Dragon Magazine #331 — Class Acts: Archaic Armaments (Troy E. Taylor), p. 84";
const SRC_CHARMS = "Dragon Magazine #331 — Alchemical Charms (Yury Pavlotsky), pp. 30-35";
const SRC_MARINE = "Dragon Magazine #331 — Class Acts: Marine Munitions (Troy E. Taylor), p. 88";
const SRC_KNIGHTLY = "Dragon Magazine #331 — Class Acts: Knightly Effects (Amber E. Scott), p. 90";
const SRC_TOKENS = "Dragon Magazine #331 — Class Acts: Tokens of Faith III (Amber E. Scott), p. 86";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function E(o: Partial<EquipmentItem> & Pick<EquipmentItem, "id" | "name" | "cost">): EquipmentItem {
  return {
    category: "gear",
    weight: "—",
    source: SRC_POLE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...o,
  } as EquipmentItem;
}

const CHARM_RULE =
  "Alchemical charm (nonmagical). You draw an alchemical charm as if drawing a weapon; hitting a creature vulnerable to the charm's ingredients with a touch attack deals 1d6 points of damage and forces a DC 14 Will save or the creature is shaken for 1d4 rounds; using a charm this way destroys it. Charms take up no item slot. A creature is vulnerable to any substance that repulses it or that is required to bypass its damage reduction (if two substances are required to bypass it, the charm must contain both).";

const DRAUGHT_RULE =
  "Alchemical draught (nonmagical). A character who imbibes this draught gains a +2 alchemical bonus on saving throws against spells or abilities used by creatures vulnerable to the draught's ingredients. This effect lasts for 1 hour. Only one draught can affect a creature at a time.";

const TOKEN_FRAME =
  "Alternate holy symbol from \"Tokens of Faith III\": all the holy symbols presented in the article cost 100 gp, they are not magic items and do not take up a slot, and to gain the benefit of the item the user must be a cleric with the tied domain as one of his chosen domains — the bonus is treated as an addition to the domain's granted power.";

export const DRAGON_331_EQUIPMENT: EquipmentItem[] = [
  // ---- The Point of Pole Arms: full extractions beside fan-index stubs (12) ----
  E({
    id: "fauchard-331",
    name: "Fauchard",
    category: "weapon",
    cost: "7 gp",
    weight: "10 lb.",
    notes:
      "Simple two-handed melee weapon. Damage 1d8 (Medium; 1d6 Small), critical x3, type slashing. A simple pole arm with a curved, slashing blade, not unlike a gently curved sickle. It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. (Full extraction beside the fan-index stub 'fauchard' — see SCREENING.md.)",
  }),
  E({
    id: "bardiche-331",
    name: "Bardiche",
    category: "weapon",
    cost: "9 gp",
    weight: "12 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 1d10 (Medium; 1d8 Small), critical x3, type slashing. This weapon combines a pole with a long curving cleaver blade, mounted near the tip. A bardiche is cumbersome and unwieldy but devastating when it strikes. (Note: unlike most chart weapons, the bardiche is printed without the reach footnote. Full extraction beside the fan-index stub 'bardiche'.)",
  }),
  E({
    id: "duom-331",
    name: "Duom",
    category: "weapon",
    cost: "20 gp",
    weight: "8 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 1d8 (Medium; 1d6 Small), critical x3, type piercing. The duom is a longspear with a standard spearhead, as well as two blades curved so that they point backward along the shaft. The weapon has reach, allowing you to strike opponents 10 feet away with it. Those proficient with the duom can also attack adjacent foes with the reversed heads using a practiced \"reversed strike\": apply a -2 penalty on the attack roll if you use the duom to attack a second adjacent opponent in the same round you attacked the first opponent. (Full extraction beside the fan-index stub 'duom'.)",
  }),
  E({
    id: "lucerne-hammer-331",
    name: "Lucerne Hammer",
    category: "weapon",
    cost: "12 gp",
    weight: "10 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 2d4 (Medium; 1d6 Small), critical x4, type bludgeoning or piercing. The lucerne hammer is similar to the halberd, but with a longer spike and a smaller three-pronged hammerhead instead of an axe blade. It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. (Full extraction beside the fan-index stub 'lucerne-hammer'.)",
  }),
  E({
    id: "partisan-331",
    name: "Partisan",
    category: "weapon",
    cost: "12 gp",
    weight: "12 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 2d4 (Medium; 1d6 Small), critical x3, type piercing or slashing. The partisan consists of a central spike with two slashing axelike spikes protruding from the sides of the main blade; it is sometimes called a \"bohemian ear-spoon.\" It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. (Full extraction beside the fan-index stub 'partisan'.)",
  }),
  E({
    id: "pilum-331",
    name: "Pilum",
    category: "weapon",
    cost: "5 gp",
    weight: "6 lb.",
    notes:
      "Martial two-handed melee weapon (also thrown, range increment 20 ft.). Damage 1d8 (Medium; 1d6 Small), critical x3, type piercing. A pilum is a thin spear, over a foot of its length metal. It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. A pilum can be used to attack an enemy's shield (and only a shield) as a sunder attempt; this attempt can be made at range, and if attempted in melee combat it draws an attack of opportunity unless you have the Improved Sunder feat. If the pilum deals more damage than the shield's hardness, the spear is stuck in the shield; this deals only 1 point of damage to the shield regardless of how much damage was actually done over the hardness. Removing a pilum takes 2d4 rounds. While the pilum is attached to a shield, the target must drop the shield or suffer a -2 circumstance penalty to Armor Class and on attack rolls and Reflex saves due to the added weight and awkwardness. Obviously, you lose use of the pilum while it is attached in this way. (Full extraction beside the fan-index stub 'pilum'.)",
  }),
  E({
    id: "spetum-331",
    name: "Spetum",
    category: "weapon",
    cost: "10 gp",
    weight: "8 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 2d4 (Medium; 1d6 Small), critical x3, type piercing. A long pole arm with a central blade and two lateral prongs at its base. The spetum grants a +2 bonus on disarm attacks (the chart's only special rule for it; unlike most chart weapons, it is printed without the reach footnote). (Full extraction beside the fan-index stub 'spetum'.)",
  }),
  E({
    id: "voulge-331",
    name: "Voulge",
    category: "weapon",
    cost: "10 gp",
    weight: "14 lb.",
    notes:
      "Martial two-handed melee weapon. Damage 1d10 (Medium; 1d8 Small), critical x3, type slashing. The voulge is simply a long cleaver blade mounted on the end of a long pole. It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. (Full extraction beside the fan-index stub 'voulge'.)",
  }),
  E({
    id: "ankus-331",
    name: "Ankus",
    category: "weapon",
    cost: "15 gp",
    weight: "15 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 2d4 (Medium; 1d6 Small), critical x2, type bludgeoning. The ankus is made up of a long dull hook along with a blunt point attached to a pole. An ankus has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. You can use an ankus to make trip attacks; if you are tripped during your own trip attempt, you can drop the ankus to avoid being tripped. (Full extraction beside the fan-index stub 'ankus'.)",
  }),
  E({
    id: "awl-pike-331",
    name: "Awl Pike",
    category: "weapon",
    cost: "10 gp",
    weight: "10 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 1d8 (Medium; 1d6 Small), critical x3, type piercing. Built similarly to a longspear, the awl pike is almost 15 feet long. You can strike opponents 15 feet away with it, but you can't use it against foes closer than that. If you use a ready action to set an awl pike against a charge, you deal double damage on a successful hit against a charging character. (Full extraction beside the fan-index stub 'awl-pike'; the awl pike is also bundled into the unrelated 'pike-and-awl-pike' record from Gary Gygax's World Builder.)",
  }),
  E({
    id: "bec-de-corbin-331",
    name: "Bec de Corbin",
    category: "weapon",
    cost: "28 gp",
    weight: "14 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 2d4 (Medium; 1d6 Small), critical x4, type piercing. Also called a \"raven's beak,\" the bec de corbin has both the head of an exceptionally heavy pick and a spear blade. A bec de corbin has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. If you use a ready action to set a bec de corbin against a charge, you deal double damage on a successful hit against a charging character. (Full extraction beside the fan-index stub 'bec-de-corbin'; a second full record from the Ultimate Equipment Guide stands at 'bec-de-corbin-ueg1'.)",
  }),
  E({
    id: "lochaber-axe-331",
    name: "Lochaber Axe",
    category: "weapon",
    cost: "18 gp",
    weight: "15 lb.",
    notes:
      "Exotic two-handed melee weapon. Damage 1d10 (Medium; 1d8 Small), critical x3, type slashing. An axe-headed weapon with a hook for tripping, the lochaber axe is essentially a larger halberd lacking the top-spike. It has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. You can also use a lochaber axe to make trip attacks; if you are tripped during your own trip attempt, you can drop the lochaber axe to avoid being tripped. (Full extraction beside the fan-index stub 'lochaber-axe'; a second record from Gary Gygax's World Builder stands at 'axe-lochaber'.)",
  }),
  // ---- Class Acts: Archaic Armaments — barbarian weapons (7) ----
  E({
    id: "stone-handaxe-331",
    name: "Stone Handaxe",
    category: "weapon",
    cost: "5 sp",
    weight: "2 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic light melee weapon (barbarian archaic armament). Damage 1d6 (Medium; 1d4 Small), critical x2, type slashing. This stone has a chipped edge for cutting that fits into the palm; warriors carry stone handaxes for sentimental or superstitious reasons even after flint-edge knives and steel daggers have made them obsolete, and a young hunter traditionally receives one from a village elder on passing an initiation into adulthood. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village. (Full extraction beside the fan-index stub 'stone-handaxe'.)",
  }),
  E({
    id: "stone-celt-331",
    name: "Stone Celt",
    category: "weapon",
    cost: "5 sp",
    weight: "10 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic one-handed melee weapon (barbarian archaic armament). Damage 1d8 (Medium; 1d6 Small), critical 19-20/x2, type bludgeoning. This L-shaped wood club has a stone head attached, making it the forerunner of the heavy mace. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village. (Full extraction beside the fan-index stub 'stone-celt'.)",
  }),
  E({
    id: "microlith-barbed-longspear-331",
    name: "Microlith Barbed Longspear",
    category: "weapon",
    cost: "5 gp",
    weight: "9 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic two-handed melee weapon (barbarian archaic armament). Damage 1d10 (Medium; 1d8 Small), critical x3, type piercing. Microliths are small triangular-shaped stones with sharp edges wedged into the shaft of a spear just beneath the tip, effectively creating a serrated edge and causing more damage than the normal longspear. A microlith barbed longspear has reach: you can strike opponents 10 feet away with it, but you can't use it against an adjacent foe. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village. (Full extraction beside the fan-index stub 'microlith-barbed-longspear'.)",
  }),
  E({
    id: "atlatl-331",
    name: "Atlatl",
    category: "weapon",
    cost: "4 gp",
    weight: "2 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic ranged weapon (barbarian archaic armament) — a spear-thrower: a flexible wooden stick about 2 feet long, sometimes decorated with elaborate carvings, with a small stone attached to the shaft as a counterweight. The projectile is either a stone-tipped dart or a stone-tipped javelin, its butt placed in a hooked groove at the end of the atlatl; the thrower snaps his forearm forward to launch it. The atlatl deals no damage itself; it launches atlatl darts and atlatl javelins (see those records). A character trying to use the atlatl without proficiency suffers a -2 penalty on attack rolls in addition to the normal -4 nonproficiency penalty. It is the barbarian's first choice against creatures of size Large or greater. (A different treatment of the atlatl, from Sandstorm, stands at 'atlatl'/'atlatl-spear'; this is the issue's own exotic-weapon version — see SCREENING.md.)",
  }),
  E({
    id: "atlatl-dart-331",
    name: "Atlatl Dart",
    category: "weapon",
    cost: "5 sp",
    weight: "1/2 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic ranged weapon (barbarian archaic armament) — a stone-tipped dart launched from an atlatl. Damage 1d6 (Medium; 1d4 Small), critical 19-20/x2, range increment 80 ft., type piercing. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village.",
  }),
  E({
    id: "atlatl-javelin-331",
    name: "Atlatl Javelin",
    category: "weapon",
    cost: "1 gp",
    weight: "1/2 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic ranged weapon (barbarian archaic armament) — a stone-tipped javelin launched from an atlatl. Damage 1d8 (Medium; 1d6 Small), critical x3, range increment 120 ft., type piercing. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village.",
  }),
  E({
    id: "hunting-boomerang",
    name: "Hunting Boomerang",
    category: "weapon",
    cost: "15 gp",
    weight: "2 lb.",
    source: SRC_BARBARIAN,
    notes:
      "Exotic ranged weapon (barbarian archaic armament). Damage 1d6 (Medium; 1d4 Small), critical x2, range increment 25 ft., type bludgeoning. Similar in shape to the boomerang from page 155 of Complete Warrior, this weapon does not return to the thrower, has slightly greater range, and deals lethal damage. The listed cost is for creating the item with the Craft (weaponsmithing) skill; such items are rarely available for purchase in any settlement larger than a village. (Distinct from the returning Complete Warrior 'boomerang' record.)",
  }),
  // ---- Alchemical Charms: charms (8) ----
  E({
    id: "charm-anarchic",
    name: "Charm, Anarchic",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm consists of several small lengths of ribbon that swirl around each other in an impossible knot, worn on a colorful leather cord. It is used against creatures vulnerable to chaos. Craft (alchemy) DC 20; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "charm-axiomatic",
    name: "Charm, Axiomatic",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm consists of several unusually geometric shapes made of various materials affixed to a fine steel chain. It is used against creatures vulnerable to law. Craft (alchemy) DC 20; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "charm-cold-iron",
    name: "Charm, Cold Iron",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm is little more than a cold iron trinket, often horseshoe-shaped. It is used against creatures vulnerable to cold iron. Craft (alchemy) DC 20.",
  }),
  E({
    id: "charm-combination",
    name: "Charm, Combination",
    category: "alchemical gear",
    cost: "40 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " A combination charm is crafted either from a mixture of metal (such as silver and cold iron) or a mixture of a metal and an aligned substance, emitting a slight glow similar to a magic aura. Making a touch attack with a combination charm against a creature vulnerable to at least one of its components deals damage as a normal charm; if the creature is vulnerable to both components, it is shaken for twice the normal duration (2d4 rounds). Craft (alchemy) DC 25; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "charm-garlic",
    name: "Charm, Garlic",
    category: "alchemical gear",
    cost: "5 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm consists of a woody vine (often hawthorn) with several cloves of garlic affixed to it. It is used against creatures repulsed by garlic, such as vampires. Craft (alchemy) DC 15.",
  }),
  E({
    id: "charm-holy",
    name: "Charm, Holy",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm is nothing more than a finely crafted wooden image of a holy symbol. It is used against creatures vulnerable to holiness. A holy charm can also be used as a divine focus. Craft (alchemy) DC 20; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "charm-silver",
    name: "Charm, Silver",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " This charm is little more than a small silver object, often a tiny mirror or a small statue. It is used against creatures vulnerable to silver. Craft (alchemy) DC 20.",
  }),
  E({
    id: "charm-unholy",
    name: "Charm, Unholy",
    category: "alchemical gear",
    cost: "30 gp",
    weight: "1 lb.",
    source: SRC_CHARMS,
    notes:
      CHARM_RULE +
      " An unholy charm functions like a holy charm, but it is constructed in an opposite manner, using foul or impure materials. It is used against creatures vulnerable to evil (repelled by unholiness). Craft (alchemy) DC 20; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  // ---- Alchemical Charms: draughts (8), tonic, wolfsbane ----
  E({
    id: "draught-anarchic",
    name: "Draught, Anarchic",
    category: "alchemical gear",
    cost: "50 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This draught is used against creatures vulnerable to chaos. (The article's price and craft tables list this draught but print no individual description paragraph; staged from the table entry and the general draught rule — see MANIFEST.) Craft (alchemy) DC 25; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "draught-axiomatic",
    name: "Draught, Axiomatic",
    category: "alchemical gear",
    cost: "50 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This draught is used against creatures vulnerable to law. (The article's price and craft tables list this draught but print no individual description paragraph; staged from the table entry and the general draught rule — see MANIFEST.) Craft (alchemy) DC 25; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "draught-cold-iron",
    name: "Draught, Cold Iron",
    category: "alchemical gear",
    cost: "75 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This bluish draught has a metallic aftertaste. It is used against creatures vulnerable to cold iron. Craft (alchemy) DC 25.",
  }),
  E({
    id: "draught-combination",
    name: "Draught, Combination",
    category: "alchemical gear",
    cost: "150 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " A combination draught mixes the components of two draughts (two metals, or a metal and an aligned substance), and protects against creatures vulnerable to either. Craft (alchemy) DC 28.",
  }),
  E({
    id: "draught-garlic",
    name: "Draught, Garlic",
    category: "alchemical gear",
    cost: "50 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This draught is used against creatures repulsed by garlic, such as vampires. Craft (alchemy) DC 20.",
  }),
  E({
    id: "draught-holy",
    name: "Draught, Holy",
    category: "alchemical gear",
    cost: "50 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This draught is made with a base of holy water rather than normal water. It is used against creatures vulnerable to holiness. Craft (alchemy) DC 25; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "draught-silver",
    name: "Draught, Silver",
    category: "alchemical gear",
    cost: "75 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " This draught is used against creatures vulnerable to silver. In addition, the draught's bonus also applies to saving throws to avoid contracting lycanthropy. Craft (alchemy) DC 25.",
  }),
  E({
    id: "draught-unholy",
    name: "Draught, Unholy",
    category: "alchemical gear",
    cost: "50 gp",
    source: SRC_CHARMS,
    notes:
      DRAUGHT_RULE +
      " An unholy draught functions like a holy draught, but it is constructed in an opposite manner. It is used against creatures vulnerable to evil (repelled by unholiness). Craft (alchemy) DC 25; creating it requires a blessing by a divine spellcaster of the appropriate alignment (a prayer, not a spell).",
  }),
  E({
    id: "anti-disease-tonic",
    name: "Anti-Disease Tonic",
    category: "alchemical gear",
    cost: "100 gp",
    source: SRC_CHARMS,
    notes:
      "Alchemical tonic (nonmagical). You gain a +5 alchemical bonus on all saving throws against disease for one day after drinking this tonic. (Legend among alchemists holds that the original recipe's secret ingredient was an otyugh's tongue; modern tonics make do with less exotic components.) Craft (alchemy) DC 25. (Distinct from the 'Antitoxin' of the Player's Handbook; no other record of this item name stands in the catalog.)",
  }),
  E({
    id: "wolfsbane",
    name: "Wolfsbane",
    category: "alchemical gear",
    cost: "5 gp",
    source: SRC_CHARMS,
    notes:
      "Alchemical plant (nonmagical). Wolfsbane (also called belladonna in the article; the catalog's 'aconite' record from Alchemy & Herbalists covers the same plant as an herb/poison — this record carries the issue's weapon use). As printed in the Monster Manual, a character who eats wolfsbane within an hour of a lycanthrope's attack may gain a saving throw to shake off the curse of lycanthropy. A wolfsbane plant can also be used as a weapon: you must use a fresh sprig, plucked within a week, and make a touch attack against a lycanthrope; the creature must make a DC 12 Will save or flee for 1d4 rounds as if affected by a cause fear spell (the plant is destroyed by the use). Locating and harvesting suitable wolfsbane requires a DC 15 Knowledge (nature) or Survival check.",
  }),
  // ---- Class Acts: Marine Munitions — mundane gear (4) ----
  E({
    id: "corvus",
    name: "Corvus",
    cost: "10 gp",
    weight: "60 lb.",
    source: SRC_MARINE,
    notes:
      "Ship's boarding gear. This 15- to 20-foot-long plank has iron spikes affixed to one end and is held in an upright position on the main deck. When an opposing ship is close enough the crew cuts loose the corvus, which swings down onto the other ship's deck. The plank enables boarders to traverse the space between ships more easily, requiring only a DC 5 Balance check to do so.",
  }),
  E({
    id: "dragons-teeth",
    name: "Dragon's Teeth",
    cost: "100 gp",
    weight: "200 lb.",
    source: SRC_MARINE,
    notes:
      "Ship's ramming gear. Also called \"skeggs,\" this row of iron spikes affixes to the prow of a small raiding ship, such as a longboat. When the ship rams another, the dragon's teeth dig into the wood of the other ship, holding the two ships together and making boarding easier. It takes three DC 23 Strength checks made with crowbars to disengage.",
  }),
  E({
    id: "drogue",
    name: "Drogue",
    cost: "1 gp",
    weight: "2 lb.",
    source: SRC_MARINE,
    notes:
      "Harpoon float. The drogue is a float, usually a sealed wood drum or an inflated seal skin attached halfway along a harpoon's 30-foot line. It works just like a bobber on a fishing line, preventing a creature from diving deep. Instead of the creature making an opposed Strength check against the person holding the harpoon line, it must make a DC 20 Strength check against the float. Each additional drogue adds +5 to the Strength DC. Every Strength check (whether it fails or succeeds) requires a Constitution check (DC 10 + 1 per previous check); after a failed Constitution check the creature becomes fatigued.",
  }),
  E({
    id: "stink-pot",
    name: "Stink Pot",
    category: "alchemical gear",
    cost: "35 gp",
    weight: "30 lb.",
    source: SRC_MARINE,
    notes:
      "Thrown noxious grenade. This earthenware jug is stuffed with saltpeter, sulfur, a type of gum resin called asafetida, and decayed fish. Using the stink pot requires lighting the oxtail wick and hurling it (traditionally down onto the opposing ship from the main-tree, a stand on the main mast). Inhaling the foul mixture forces everyone within 10 feet of where it lands to make a DC 15 Fortitude save or become sickened for 1d4 minutes.",
  }),
  // ---- Class Acts: Knightly Effects — mundane gear (7) ----
  E({
    id: "barding-elvencraft",
    name: "Barding, Elvencraft",
    cost: "special",
    weight: "special",
    source: SRC_KNIGHTLY,
    notes:
      "Armor modification. Elvencraft barding costs 150 gp more than regular masterwork barding. The rider of a mount wearing elvencraft barding gains a +2 circumstance bonus on Ride checks when coaxing her mount to make a leap. Elvencraft barding weighs 5 pounds less than regular barding (to a minimum of 5 lb.). Removing and fitting elvencraft barding only takes three times as long as it would take to remove or don regular armor, instead of five times. Like the other enhancement-type items in the column, it applies to masterwork barding.",
  }),
  E({
    id: "cartulary",
    name: "Cartulary",
    cost: "10 gp",
    weight: "1 lb.",
    source: SRC_KNIGHTLY,
    notes:
      "Book. A cartulary is a bound book of inspirational religious texts, church documents, and prayers. It is not a complete scripture such as the prayer books clerics might carry, but a more personal document that illustrates and reinforces the tenets of the paladin's code. A paladin sometimes carries multiple cartularies so she can hand out copies to souls in need of guidance.",
  }),
  E({
    id: "lantern-silvern-bullseye",
    name: "Lantern, Silvern Bullseye",
    cost: "22 gp",
    weight: "3 lb.",
    source: SRC_KNIGHTLY,
    notes:
      "Light source (nonmagical). A silvern lantern resembles an ordinary bullseye lantern, but glass plates set in the interior of the lantern cause it to cast a brilliant silver light instead of the ordinary yellow glow. Travelers who see such a glow at night can assume that the party bearing the light will be peaceful and offer assistance to those in need. A silvern bullseye lantern generates the same light radius as a regular bullseye lantern.",
  }),
  E({
    id: "lantern-silvern-hooded",
    name: "Lantern, Silvern Hooded",
    cost: "17 gp",
    weight: "2 lb.",
    source: SRC_KNIGHTLY,
    notes:
      "Light source (nonmagical). A silvern lantern resembles an ordinary hooded lantern, but glass plates set in the interior of the lantern cause it to cast a brilliant silver light instead of the ordinary yellow glow. Travelers who see such a glow at night can assume that the party bearing the light will be peaceful and offer assistance to those in need. A silvern hooded lantern generates the same light radius as a regular hooded lantern.",
  }),
  E({
    id: "patents-of-nobility",
    name: "Patents of Nobility",
    cost: "250 gp",
    source: SRC_KNIGHTLY,
    notes:
      "Documents. The monarch or ruler of a land grants these documents, which contain a stylized family tree notarizing a knight's lineage. A paladin who presents her patents of nobility at court, or in any setting where nobility is present, gains a +1 circumstance bonus on Diplomacy checks made in that setting. The cost listed represents the item's value to a collector or sage: you cannot purchase a legitimate patent of nobility; it must be given to you.",
  }),
  E({
    id: "tabard-knights-331",
    name: "Tabard, Knight's",
    cost: "5 gp",
    source: SRC_KNIGHTLY,
    notes:
      "Clothing. A paladin wears this short, sleeveless tunic over her armor, usually emblazoned with either her family's coat-of-arms or the symbol of her temple, deity, or creed. Anyone viewing a paladin's tabard gains a +2 circumstance bonus on any Knowledge (nobility and royalty) or Knowledge (religion) checks to identify the paladin's allegiance or religion. (Suffixed id: the plain 'tabard' id is held by a generic clothing record from Goods and Gear; this is the issue's paladin-specific item.)",
  }),
  E({
    id: "tabard-mounts-331",
    name: "Tabard, Mount's",
    cost: "7 gp",
    weight: "2 lb.",
    source: SRC_KNIGHTLY,
    notes:
      "Clothing (mount). A paladin can also procure a tabard for her mount. This works exactly like a knight's tabard (viewers gain a +2 circumstance bonus on Knowledge (nobility and royalty) or Knowledge (religion) checks to identify the allegiance or religion), but the circumstance bonuses do not stack.",
  }),
  // ---- Class Acts: Tokens of Faith III — holy symbols (7) ----
  E({
    id: "holy-symbol-of-animal",
    name: "Holy Symbol of Animal",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " Four finger holes in this thin piece of wood allow the cleric to wear it over his knuckles; the smooth and polished wood supports four small claws jutting out over the cleric's fingers when he wears the item, sometimes decorated with feathers, beads, or etchings of animals. Wearing this symbol allows the cleric to use his domain's speak with animals spell-like ability at +1 caster level.",
  }),
  E({
    id: "holy-symbol-of-earth",
    name: "Holy Symbol of Earth",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " This stone cuisse is cunningly carved to be thin and light yet durable — an oval-shaped plate 3 to 10 inches long with a rough exterior surface, threads of gold and silver winking from the folds of rock and tiny gems no bigger than a pinhead studding the surface irregularly. The cleric straps the cuisse to his thigh and while wearing it gains a +1 circumstance bonus on Strength checks made to resist a trip attempt.",
  }),
  E({
    id: "holy-symbol-of-evil",
    name: "Holy Symbol of Evil",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " This symbol takes the form of a hood of any color or material; the lining, however, is always of fine black silk. When folded back, the edge of the hood reveals a band of silver runes and one large, bone-white symbol positioned over the cleric's brow. The cleric who wears this hood gains a +1 profane bonus on Knowledge (the planes) checks when dealing with good outsiders.",
  }),
  E({
    id: "holy-symbol-of-law",
    name: "Holy Symbol of Law",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " Dozens of tiny rings made from different types of precious metal form this symbol; the rings link together intricately to form a downward-pointing triangle, and a leather collar the cleric wears around his neck attaches to the top edge of the triangle. The wearer of this symbol gains a +1 circumstance bonus on saving throws made to resist spells with the compulsion subtype.",
  }),
  E({
    id: "holy-symbol-of-luck",
    name: "Holy Symbol of Luck",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " This thin belt is made of many small squares of colorful fabric sewn onto a leather backing; the patchwork belt usually has symbols for fortune or for a particular deity known for luck worked into its pattern, and the cleric fastens it with a bright golden buckle. Once per day, the belt's wearer may reroll a percentile die roll made to stabilize.",
  }),
  E({
    id: "holy-symbol-of-protection",
    name: "Holy Symbol of Protection",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " A cleric can wear this two-inch-long badge in one of three places: on a collar around his neck with the badge against his throat, on a band around his wrist with the badge against the vein, or pinned over his heart. The shield-shaped badge is made of polished cherry-red wood. The cleric who wears this badge gains a +1 circumstance bonus on his attack roll when using the aid another action to grant an ally an Armor Class bonus.",
  }),
  E({
    id: "holy-symbol-of-trickery",
    name: "Holy Symbol of Trickery",
    cost: "100 gp",
    source: SRC_TOKENS,
    notes:
      TOKEN_FRAME +
      " One side of this large, square piece of cloth is ordinary gray cotton, while the other side is brilliantly-colored silk (usually crimson or emerald green). A cleric can wear the cloth around his neck as a scarf, on his head as a kerchief, in his pocket as a handkerchief, around a limb as a bandage, or any of a dozen other ways. A cleric who uses the cloth as part of a disguise gains a +1 circumstance bonus on his Disguise check.",
  }),
];
