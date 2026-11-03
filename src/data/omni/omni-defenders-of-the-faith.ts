/**
 * Omni sweep Wave 2 (2026-11-02): Defenders of the Faith (3.0) —
 * Chapter 1's sacred gear (Table 1-6) and divine magic items
 * (Tables 1-7 through 1-11, descriptions pp. 23-26). Most of the
 * sacred gear was already cataloged through Goods and Gear's
 * reprint; only the rows missing there are built here. Of the
 * armor/shield special abilities, Absorbing, Energy Drain, Undead
 * Controlling, and Undead Disrupting are already cataloged from
 * Ghostwalk; Aquatic, Feathered, and Fearsome from Arms and
 * Equipment Guide; Sacred from Book of Exalted Deeds; and Called,
 * Command (as Commander), Daylight, and Speed from Magic Item
 * Compendium flat-fee reprints — all skipped (see the omni-sweep
 * report for the pricing-model conflicts). The sacred scabbard is
 * skipped: Magic Item Compendium prints it at 4,400 gp against
 * this book's 6,400 gp. Two prices here follow the item
 * descriptions over this book's own tables: the arrow of farsight
 * (3,507 gp; Table 1-9 says 3,307 gp) and the cloak of the forest
 * (39,392 gp; Table 1-11 says 9,392 gp). The altar cloth "dyed"
 * +5 gp line is a price add-on, not a separate item.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const DOTF_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "dotf-antipathy",
    "name": "Antipathy",
    "category": "armor-special-ability",
    "cost": "+4 bonus",
    "summary": "Armor or shield special ability: the item radiates an antipathy effect against creatures of an alignment opposed to the wearer's, driving them back and penalizing those that press close.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-aquatic-water-breathing",
    "name": "Aquatic (Water Breathing)",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor special ability: beyond the freedom of movement and combat the basic aquatic ability grants underwater, the wearer can also breathe water as if it were air.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-blinding",
    "name": "Blinding",
    "category": "armor-special-ability",
    "cost": "+1 bonus",
    "summary": "Shield special ability: on command the shield emits a flash of brilliant light that can blind creatures looking toward it.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-charming",
    "name": "Charming",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor special ability: a charm effect inclines creatures dealing with the wearer to regard her favorably.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-ethereal-self-only",
    "name": "Ethereal (Self Only)",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor special ability: the wearer can become ethereal at will, as ethereal jaunt, taking only herself and her gear.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-ethereal-all-in-contact",
    "name": "Ethereal (All in Contact)",
    "category": "armor-special-ability",
    "cost": "+4 bonus",
    "summary": "Armor special ability: the wearer can become ethereal at will and bring along creatures in contact with her.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-ice",
    "name": "Ice",
    "category": "armor-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor special ability: the armor radiates supernatural cold, granting the wearer protection against fire and cold.",
    "source": "Defenders of the Faith — Chapter 1, Tables 1-7 and 1-8, pp. 22–23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-blue-armor-of-the-crystalmist-mountains",
    "name": "Blue Armor of the Crystalmist Mountains",
    "category": "armor",
    "cost": "20,960 gp",
    "summary": "A suit of +2 full plate forged for high-mountain warfare, protecting its wearer against cold and the rigors of altitude.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-9, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-equerrys-armor",
    "name": "Equerry's Armor",
    "category": "armor",
    "cost": "10,670 gp",
    "summary": "A suit of +1 chainmail made for mounted troops; its magic aids the wearer's riding and extends to protect her mount as well.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-9, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-golden-apron",
    "name": "Golden Apron",
    "category": "armor",
    "cost": "22,200 gp",
    "summary": "A golden smith's apron that counts as armor, shielding the wearer from fire and aiding her work at the forge.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-9, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-red-dragon-armor",
    "name": "Red Dragon Armor",
    "category": "armor",
    "cost": "35,200 gp",
    "summary": "Full plate fashioned from the hide of a red dragon, giving its wearer substantial resistance to fire.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-9, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-splint-mail-of-stability",
    "name": "Splint Mail of Stability",
    "category": "armor",
    "cost": "5,845 gp",
    "summary": "A suit of +1 splint mail whose wearer stands firm, gaining stability against bull rush and trip attempts.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-9, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-arrow-of-farsight",
    "name": "Arrow of Farsight",
    "category": "ammunition",
    "cost": "3,507 gp",
    "summary": "A single magic arrow that carries unerringly to a distant target the archer can see, ignoring ordinary range limits.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-10, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-battle-rod",
    "name": "Battle Rod",
    "category": "weapon",
    "cost": "35,712 gp",
    "summary": "A heavy rod built to be swung as a weapon in battle, with further powers directed against enemies of the wielder's faith.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-10, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-bolt-of-battering",
    "name": "Bolt of Battering",
    "category": "ammunition",
    "cost": "3,157 gp",
    "summary": "A magic crossbow bolt that strikes with the force of a battering ram, able to smash through doors and barricades.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-10, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-goad-of-mastery",
    "name": "Goad of Mastery",
    "category": "weapon",
    "cost": "20,980 gp",
    "summary": "A magic goad that lets its wielder command and control the animal it is applied to.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-10, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-rod-of-authority",
    "name": "Rod of Authority",
    "category": "rod",
    "cost": "20,576 gp",
    "summary": "A rod that lends weight to its bearer's commands and enhances her turning or rebuking of undead.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-amulet-of-memory",
    "name": "Amulet of Memory",
    "category": "wondrous-throat",
    "cost": "36,000 gp",
    "summary": "An amulet that preserves the wearer's mind, warding her memory against erasure or tampering.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-arm-of-nyr",
    "name": "Arm of Nyr",
    "category": "wondrous-slotless",
    "cost": "12,800 gp",
    "summary": "A magical prosthetic arm that can be grafted in place of a lost limb; it works as a living arm and enhances the bearer's strength and dexterity.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-black-patch",
    "name": "Black Patch",
    "category": "wondrous-face",
    "cost": "8,800 gp",
    "summary": "An eyepatch that lets the wearer see normally in darkness, even darkness created by magic.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-bowl-of-contemplation",
    "name": "Bowl of Contemplation",
    "category": "wondrous-slotless",
    "cost": "44,800 gp",
    "summary": "A bowl whose waters aid a cleric's meditation, deepening her communion with her deity when she prepares spells.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-bracers-of-binding",
    "name": "Bracers of Binding",
    "category": "wondrous-arms",
    "cost": "10,800 gp",
    "summary": "Bracers that can loose bands of force to bind and hold a creature fast.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-cloak-of-the-forest",
    "name": "Cloak of the Forest",
    "category": "wondrous-shoulders",
    "cost": "39,392 gp",
    "summary": "A cloak woven of leaves that camouflages the wearer in woodland and lets her move through undergrowth unhindered.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-gate-amulet",
    "name": "Gate Amulet",
    "category": "wondrous-throat",
    "cost": "64,000 gp",
    "summary": "An amulet able to open a magical gate to another plane for the wearer and her companions.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-greater-holy-symbol",
    "name": "Greater Holy Symbol",
    "category": "wondrous-slotless",
    "cost": "5,040 gp",
    "summary": "A holy symbol of superior make that enhances its bearer's turning or rebuking of undead.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-helm-of-vision",
    "name": "Helm of Vision",
    "category": "wondrous-head",
    "cost": "91,600 gp",
    "summary": "A helm that grants its wearer the benefit of true seeing, piercing illusions and disguises.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-mark-of-apostasy",
    "name": "Mark of Apostasy",
    "category": "wondrous-slotless",
    "cost": "38,880 gp",
    "summary": "A sigil borne by an apostate cleric that wards her against the powers and servants of the faith she abandoned.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-mask-of-the-dead",
    "name": "Mask of the Dead",
    "category": "wondrous-face",
    "cost": "23,400 gp",
    "summary": "A funerary mask that lets its wearer see and communicate with the spirits of the dead.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-mirror-of-revelation",
    "name": "Mirror of Revelation",
    "category": "wondrous-slotless",
    "cost": "48,000 gp",
    "summary": "A mirror that shows whatever it reflects as it truly is, stripping away illusion and disguise.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-11, p. 23",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const DOTF_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "dotf-altar-case-spruce",
    "name": "Altar Case, Spruce",
    "category": "gear",
    "cost": "20 gp",
    "weight": "5 lb.",
    "notes": "A spruce case sized to carry a portable altar and its fittings.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-altar-case-granite",
    "name": "Altar Case, Granite",
    "category": "gear",
    "cost": "40 gp",
    "weight": "40 lb.",
    "notes": "A heavy granite case for a portable altar and its fittings.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-altar-cloth-small",
    "name": "Altar Cloth, Small",
    "category": "gear",
    "cost": "3 gp",
    "weight": "—",
    "notes": "A smaller altar cloth than the standard pieces, for a portable or field altar.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-candle-vigil",
    "name": "Candle, Vigil",
    "category": "gear",
    "cost": "10 gp",
    "weight": "1/2 lb.",
    "notes": "A fat candle made to burn through a night-long vigil.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-candlestick-hand-held-silver",
    "name": "Candlestick, Hand-Held, Silver",
    "category": "gear",
    "cost": "5 sp",
    "weight": "1/2 lb.",
    "notes": "A hand-held silver candlestick with a drip guard, carried in processions.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-candlestick-hand-held-gold",
    "name": "Candlestick, Hand-Held, Gold",
    "category": "gear",
    "cost": "3 gp",
    "weight": "1 lb.",
    "notes": "A hand-held gold candlestick with a drip guard, carried in processions.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-incense-common",
    "name": "Incense, Common",
    "category": "gear",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "Ordinary incense for burning in a censer.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-prayer-book-or-scripture",
    "name": "Prayer Book or Scripture",
    "category": "gear",
    "cost": "10 gp",
    "weight": "3 lb.",
    "notes": "A bound book of the prayers or scripture of a faith.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dotf-prayer-book-or-scripture-compact",
    "name": "Prayer Book or Scripture, Compact",
    "category": "gear",
    "cost": "15 gp",
    "weight": "1 lb.",
    "notes": "A smaller, denser compact edition of a prayer book or scripture.",
    "source": "Defenders of the Faith — Chapter 1, Table 1-6, p. 20",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
