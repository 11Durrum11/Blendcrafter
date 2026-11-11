/**
 * Omni sweep Wave 2 (2026-11-02): Tome and Blood (3.0) —
 * Chapter 4: Tools of the Trade. Of Table 4-1's wizard gear, the
 * arcane lab and (from Table 4-2) suregrip were already
 * cataloged at the same prices; the rest is built here. The
 * healing salve is a price conflict and is skipped: this book
 * (and Goods and Gear) print 50 gp, while Magic Item Compendium's
 * catalog record says 2,250 gp. All ten of the chapter's
 * metamagic rods are skipped: chaining, cooperation, sculpting,
 * and substitution are cataloged from Complete Arcane at this
 * book's exact prices, and enlargement, extension, silence,
 * empowerment, maximization, and quickening are cataloged from
 * the DMG at LOWER prices than this book prints (see the report).
 * The belt of many pockets, belt of spell resistance, rug of
 * welcome, and vest of resistance line are likewise cataloged at
 * the same prices. The four golem manuals are skipped as price
 * conflicts against their SRD records. The staff of abjuration's
 * price follows its description and worked example (99,000 gp);
 * Table 4-4 prints 98,000 gp. Golem construction costs in the
 * same chapter are a crafting process, not purchasable goods.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const TNB_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "tnb-staff-of-illumination",
    "name": "Staff of Illumination",
    "category": "staff",
    "cost": "51,000 gp",
    "summary": "A staff charged with spells of light and radiance, shedding illumination and striking at the darkness.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-abjuration",
    "name": "Staff of Abjuration",
    "category": "staff",
    "cost": "99,000 gp",
    "summary": "A staff charged with spells of the abjuration school, holding protective and banishing magic for its wielder.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-conjuration",
    "name": "Staff of Conjuration",
    "category": "staff",
    "cost": "102,000 gp",
    "summary": "A staff charged with spells of the conjuration school, calling creatures and substances to its wielder's aid.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-divination",
    "name": "Staff of Divination",
    "category": "staff",
    "cost": "102,000 gp",
    "summary": "A staff charged with spells of the divination school, revealing secrets and distant sights to its wielder.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-enchantment",
    "name": "Staff of Enchantment",
    "category": "staff",
    "cost": "101,000 gp",
    "summary": "A staff charged with spells of the enchantment school, bending the minds and wills of others.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-evocation",
    "name": "Staff of Evocation",
    "category": "staff",
    "cost": "98,000 gp",
    "summary": "A staff charged with spells of the evocation school, loosing raw destructive energy.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-illusion",
    "name": "Staff of Illusion",
    "category": "staff",
    "cost": "102,000 gp",
    "summary": "A staff charged with spells of the illusion school, weaving figments and glamers.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-necromancy",
    "name": "Staff of Necromancy",
    "category": "staff",
    "cost": "101,000 gp",
    "summary": "A staff charged with spells of the necromancy school, wielding the powers of death and undeath.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-staff-of-transmutation",
    "name": "Staff of Transmutation",
    "category": "staff",
    "cost": "101,000 gp",
    "summary": "A staff charged with spells of the transmutation school, altering the forms and properties of creatures and things.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-4, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const TNB_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "tnb-arcane-library",
    "name": "Arcane Library",
    "category": "gear",
    "cost": "10,000 gp",
    "weight": "600 lb.",
    "notes": "A working arcane reference library of tomes on magic and spellcraft.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-familiar-carrier-fine",
    "name": "Familiar Carrier (Fine)",
    "category": "gear",
    "cost": "8 gp",
    "weight": "8 lb.",
    "notes": "A small carrier cage sized for a Fine familiar.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-familiar-carrier-diminutive",
    "name": "Familiar Carrier (Diminutive)",
    "category": "gear",
    "cost": "15 gp",
    "weight": "18 lb.",
    "notes": "A carrier cage sized for a Diminutive familiar.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-familiar-carrier-tiny",
    "name": "Familiar Carrier (Tiny)",
    "category": "gear",
    "cost": "30 gp",
    "weight": "40 lb.",
    "notes": "A carrier cage sized for a Tiny familiar.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-familiar-carrier-small",
    "name": "Familiar Carrier (Small)",
    "category": "gear",
    "cost": "60 gp",
    "weight": "90 lb.",
    "notes": "A carrier cage sized for a Small familiar.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-familiar-carrier-medium-size",
    "name": "Familiar Carrier (Medium-Size)",
    "category": "gear",
    "cost": "120 gp",
    "weight": "200 lb.",
    "notes": "A carrier cage sized for a Medium familiar.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-portable-writing-desk",
    "name": "Portable Writing Desk",
    "category": "gear",
    "cost": "30 gp",
    "weight": "8 lb.",
    "notes": "A folding writing desk with compartments for inks, quills, and parchment.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-reading-lamp",
    "name": "Reading Lamp",
    "category": "gear",
    "cost": "15 gp",
    "weight": "3 lb.",
    "notes": "A hooded lamp giving a steady, shielded light for reading and scribing.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-scroll-organizer",
    "name": "Scroll Organizer",
    "category": "gear",
    "cost": "5 gp",
    "weight": "1/2 lb.",
    "notes": "A case with slots that keeps scrolls sorted and ready to hand.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-secret-component-compartment",
    "name": "Secret Component Compartment",
    "category": "gear",
    "cost": "15 gp",
    "weight": "—",
    "notes": "A hidden compartment fitted into a larger item to conceal spell components.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-secret-component-pocket",
    "name": "Secret Component Pocket",
    "category": "gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A concealed pocket sewn into a garment to hide small spell components.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-1, pp. 71–72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-disappearing-ink",
    "name": "Disappearing Ink",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "Ink whose writing fades and disappears a short time after it dries.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-flashpellet",
    "name": "Flashpellet",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A small pellet that bursts in a bright flash of light when thrown or crushed, dazzling onlookers.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-glowpowder",
    "name": "Glowpowder",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A powder that glows when disturbed, marking whatever passes through or touches it.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-phantom-ink-firelight",
    "name": "Phantom Ink (Firelight)",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Ink that is invisible except when read by firelight.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-phantom-ink-magical-light",
    "name": "Phantom Ink (Magical Light)",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Ink that is invisible except when read by magical light.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-phantom-ink-moonlight",
    "name": "Phantom Ink (Moonlight)",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Ink that is invisible except when read by moonlight.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-phantom-ink-starlight",
    "name": "Phantom Ink (Starlight)",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Ink that is invisible except when read by starlight.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tnb-scentbreaker",
    "name": "Scentbreaker",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A strong-smelling preparation that breaks a trail, foiling scent-based tracking for a time.",
    "source": "Tome and Blood — Chapter 4: Tools of the Trade, Table 4-2, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
];
