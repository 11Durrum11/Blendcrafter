/**
 * Omni sweep wave 2 (2026-11-02): Frostburn — Chapter 4's equipment
 * (printed pp. 75-82) and Chapter 5's magic items (pp. 109-112).
 * Chapter 4 was already cataloged by the book's own pack: all 11
 * weapons, all 8 gear items, all 8 alchemical items, the 4 magical
 * vehicle augmentations (filed as magic items), and the 6 priced
 * vehicles, all at matching prices. Not built from Chapter 4: the
 * exotic materials blue ice, rimefire ice, and stygian ice (priced
 * only as item cost modifiers, not standalone items) and the iceberg
 * and skyberg vehicles (both printed with Cost —). Chapter 5's magic
 * items were almost entirely missing from the catalog and are built
 * here. Three Chapter 5 items already exist as Magic Item Compendium
 * reprints and are skipped: gloves of the uldra savant (Frostburn
 * 12,700 gp vs. MIC 3,100 gp), ring of the icy soul (Frostburn
 * 100,000 gp vs. MIC 18,000 gp), and ring of floating (2,000 gp in
 * both). The skull talisman has no printed market price (its cost
 * depends on the spell stored in it), so it is not built. Prices are
 * the printed market prices; summaries are mechanical effects in our
 * own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const FROST_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "crystal-tear",
    "name": "Crystal Tear",
    "category": "artifact",
    "cost": "—",
    "summary": "A minor artifact: a large tear of ice holding a fragment of the goddess Hleid's power. It constantly emanates either crushing despair or good hope (the holder's choice, changed as a free action) in a 15-foot radius; creatures in the emanation can attempt a DC 16 Will save to avoid the effect. The holder is immune to mind-affecting spells and abilities but takes a –2 penalty on all Charisma-based skill checks. The tear can be melted only by a spell of at least 5th level with the fire descriptor, which it absorbs completely; drinking the melt before it evaporates grants a +4 inherent bonus to one randomly determined ability score. Weight 4 lb.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 109",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostfell-figurine-basalt-glyptodon",
    "name": "Frostfell Figurine of Wondrous Power (Basalt Glyptodon)",
    "category": "wondrous-slotless",
    "cost": "32,000 gp",
    "summary": "A frostfell figurine of wondrous power: carrying it in statuette form grants resistance to cold 10. On command it becomes a living glyptodon under the owner's control, except that it has damage reduction 5/—. It can be used once per week for up to 6 hours per use.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 109–110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostfell-figurine-coral-zeuglodon",
    "name": "Frostfell Figurine of Wondrous Power (Coral Zeuglodon)",
    "category": "wondrous-slotless",
    "cost": "42,000 gp",
    "summary": "A frostfell figurine of wondrous power: carrying it in statuette form grants resistance to cold 10. It can be animated only in a body of water large enough to hold the creature, becoming a brightly colored zeuglodon with a swim speed of 120 feet under the owner's command. It can be used up to twice per week for up to 4 hours per use, and the statuette magically reappears in the owner's hand when it reverts.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 109–110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostfell-figurine-diamond-ice-toad",
    "name": "Frostfell Figurine of Wondrous Power (Diamond Ice Toad)",
    "category": "wondrous-slotless",
    "cost": "33,000 gp",
    "summary": "A frostfell figurine of wondrous power: carrying it in statuette form grants resistance to cold 10. On command it becomes a normal ice toad under the owner's command, except that it remains transparent and crystalline, gaining concealment (20% miss chance). It can be used up to twice per week for up to 1 hour per use.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 109–110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostfell-figurine-iron-megaloceros",
    "name": "Frostfell Figurine of Wondrous Power (Iron Megaloceros)",
    "category": "wondrous-slotless",
    "cost": "27,000 gp",
    "summary": "A frostfell figurine of wondrous power: carrying it in statuette form grants resistance to cold 10. On command it becomes a megaloceros-shaped iron construct (63 hit points) with damage reduction 5/adamantine and construct immunities, under the owner's command. It can be used up to twice per week for up to 6 hours per use.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 109–110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frostfell-figurine-malachite-smilodon",
    "name": "Frostfell Figurine of Wondrous Power (Malachite Smilodon)",
    "category": "wondrous-slotless",
    "cost": "36,000 gp",
    "summary": "A frostfell figurine of wondrous power: carrying it in statuette form grants resistance to cold 10. On command it becomes a smilodon under the owner's command whose fangs threaten a critical hit on a roll of 17–20 and deal ×3 damage on a critical hit. It can be used once per day for up to 2 hours; if slain in animal form, it cannot be brought back from statuette form for one full week.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 109–110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "iceheart-minor",
    "name": "Iceheart, Minor",
    "category": "wondrous-slotless",
    "cost": "24,000 gp",
    "summary": "A fist-sized lump of magical ice infused with winter storms. On command it can produce ray of frost (at will), fog cloud (3/day), and sleet storm (3/day). Weight 1 lb.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "iceheart-major",
    "name": "Iceheart, Major",
    "category": "wondrous-slotless",
    "cost": "140,000 gp",
    "summary": "A fist-sized lump of magical ice wreathed in a swirling vortex of snow; merely holding it deals the holder 1d4+1 points of cold damage per round. On command it can produce ray of frost (at will), cone of cold (3/day), fog cloud (3/day), ice storm (3/day), sleet storm (3/day), and polar ray (1/day). Once per day it can create a fimbulwinter — and it casts the spell automatically at sunset if it has not already been used that day — generating a 15-mile-radius zone of eternal winter around it. Weight 1 lb.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 110",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "icicle-rod",
    "name": "Icicle Rod",
    "category": "rod",
    "cost": "120,000 gp",
    "summary": "A 3-foot-long icicle that never melts. While held, the wielder gains resistance to cold 10, and the rod can be wielded in melee as a +1 frost short sword. Three times per day the wielder can fire a small icicle as a ranged touch attack (maximum range 1,000 feet) dealing 2d4 points of cold damage, plus 2d4 more points of cold damage each round for five additional rounds as the frost spreads. The rod can also produce entomb (1/day) and a maximized ice storm (1/day).",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 110–111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "instant-igloo",
    "name": "Instant Igloo",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "An unmelting snowball that, when hurled to the ground within 20 feet, transforms into a large igloo identical to that created by Leomund's tiny igloo except with a 10-foot radius, sheltering up to 2 Large, 8 Medium, 32 Small, or 128 Tiny or smaller creatures. The igloo lasts 16 hours before reverting to snowball form, after which it cannot be used again for 8 hours.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mantle-of-hidden-faith",
    "name": "Mantle of Hidden Faith",
    "category": "wondrous-shoulders",
    "cost": "15,000 gp",
    "summary": "A plain gray mantle that shields the wearer's faith, alignment, and patron deity from magical detection while worn. It grants no bonus to skill checks used to disguise or lie about the wearer's faith and beliefs.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pick-of-iceparting",
    "name": "Pick of Iceparting",
    "category": "weapon",
    "cost": "30,000 gp",
    "summary": "A +2 cold bane heavy pick that can score critical hits against creatures of the cold subtype normally immune to critical hits. Once per day it can be swung at an icy surface as a standard action, sending three fractures radiating to chosen points within 50 feet connected by a solid sheet of ice; the ice at each point explodes, dealing 3d6 points of piercing damage to creatures within 5 feet (Reflex DC 14 half). Weight 6 lb.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-the-white-wyrm",
    "name": "Ring of the White Wyrm",
    "category": "ring",
    "cost": "64,000 gp",
    "summary": "A ring fashioned from the tooth of a great wyrm white dragon. On command it produces icewalking (at will, as spider climb on icy surfaces), freezing fog (2/day, as solid fog that also coats surfaces with grease-like ice; the wearer is immune), and wall of ice (1/day). The wearer can speak and understand Draconic and gains resistance to cold 10. Once per day, as a full-round action, the wearer can transform into a half-dragon for 1 hour, gaining a +4 natural armor bonus, bite and claw attacks, a breath weapon (30-ft. cone, 3d6 cold, Reflex DC 16 half, once per transformation), immunity to cold, and racial bonuses of +8 Strength and +2 Constitution, Intelligence, and Charisma. Dragons and half-dragons cannot benefit from the transformation.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-piercing-cold-lesser",
    "name": "Rod of Piercing Cold, Lesser",
    "category": "rod",
    "cost": "21,430 gp",
    "summary": "A metamagic rod of ice ending in a needle-sharp point, usable in combat as a +2 frost dagger. Up to three times per day, its owner can enhance one spell she casts with the Piercing Cold metamagic feat with no alteration to the spell's effective level; this lesser rod works with spells of 3rd level or lower. A caster may use only one metamagic rod on a spell at a time.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-piercing-cold",
    "name": "Rod of Piercing Cold",
    "category": "rod",
    "cost": "29,300 gp",
    "summary": "A metamagic rod of ice ending in a needle-sharp point, usable in combat as a +2 frost dagger. Up to three times per day, its owner can enhance one spell she casts with the Piercing Cold metamagic feat with no alteration to the spell's effective level; this normal rod works with spells of 6th level or lower. A caster may use only one metamagic rod on a spell at a time.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-piercing-cold-greater",
    "name": "Rod of Piercing Cold, Greater",
    "category": "rod",
    "cost": "42,800 gp",
    "summary": "A metamagic rod of ice ending in a needle-sharp point, usable in combat as a +2 frost dagger. Up to three times per day, its owner can enhance one spell she casts with the Piercing Cold metamagic feat with no alteration to the spell's effective level; this greater rod works with spells of 9th level or lower. A caster may use only one metamagic rod on a spell at a time.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 111",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "simulacrum-elixir",
    "name": "Simulacrum Elixir",
    "category": "wondrous-slotless",
    "cost": "21,000 gp",
    "summary": "A small vial of clear fluid holding a potent magical charge. When poured over a body part of a creature — even something as small as a fingernail clipping or a single hair — the liquid grows into a simulacrum of that creature, functioning as the simulacrum spell and remaining under the absolute command of the person who created it. The duplicate cannot be of a creature with more than 26 HD or levels, and its likeness to the original is crude. One vial contains enough fluid to create a single simulacrum.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), pp. 111–112",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-iceberg",
    "name": "Staff of the Iceberg",
    "category": "staff",
    "cost": "138,000 gp",
    "summary": "A staff of solid ice topped with a tangled mass of ice crystals. It allows the use of snow walk (1 charge), entomb (2 charges), ice ship (2 charges), ice castle (3 charges), and iceberg (5 charges). It can also be wielded as a +2 icy burst quarterstaff (only one end bears the magic) and lets its wielder move across icy surfaces without fear of slipping or falling; these two abilities continue to function after all the charges are expended.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 112",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-winter",
    "name": "Staff of Winter",
    "category": "staff",
    "cost": "58,000 gp",
    "summary": "A staff of bleached white wood topped with a large crystalline snowflake. It allows the use of boreal wind (1 charge), obscuring snow (1 charge), winter's embrace (1 charge), and whiteout (2 charges).",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 112",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vial-of-icy-sheets",
    "name": "Vial of Icy Sheets",
    "category": "wondrous-slotless",
    "cost": "2,000 gp",
    "summary": "A vial of clear fluid that, poured on the ground as a standard action, coats a 10-foot radius with a thin sheet of slippery ice: creatures in the area must make a DC 11 Reflex save or fall, and must save again each round to avoid falling and to move (at half speed). Poured on an object instead, it encases the object in slippery ice, forcing a DC 11 Reflex save each round to avoid dropping it. The ice lasts 5 rounds before evaporating, and the vial replenishes its fluid once every day. If swallowed, the contents deal 6d6 points of cold damage (Fortitude DC 20 half). Weight 1 lb.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell (Magic Items), p. 112",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const FROST_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "coldfire-vial",
    "name": "Coldfire (Vial)",
    "category": "gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A vial of coldfire, a rare source of pure elemental cold energy. Spells of the frostfell that draw on coldfire list 'Coldfire' among their components and are marked with a superscript C in Chapter 5's spell lists.",
    "source": "Frostburn — Chapter 5: Magic of the Frostfell, p. 83",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
