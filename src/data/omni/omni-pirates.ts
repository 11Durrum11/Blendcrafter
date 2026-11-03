/**
 * Omni sweep wave 2 (2026-11-02): Pirates! (Avalanche Press).
 * Built: the 28 ship types of Table 4-1 whose names are not
 * already in the catalog (costs are printed in thousands of gp
 * and are converted to gp), Chapter 5's weapons and nautical
 * instruments tables, and every named magic item in Chapter 5
 * plus the Air Bubble Barrette from the Chapter 7 adventure.
 * The Enchanted Masthead's 20 powers (Table 5-3) are options of
 * a single per-power-priced item and are covered by that record.
 * Skipped as already cataloged (price conflicts noted in the
 * report): Longship, Galley, Cog, Caravel, Galleon, Keelboat and
 * Yacht among ships; the Blunderbuss (its two shot types are
 * built), the Quadrant and the Cross Staff among equipment. Not built: Chapter
 * 3's operational-cost, shipping-rate and wholesale trade-goods
 * tables (rate and bulk-cargo tables, not discrete purchasable
 * entries) and Chapter 4's custom-construction cost formulas.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const PIR_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "bag-of-sailing-fortitude",
    "name": "Bag of Sailing Fortitude",
    "category": "wondrous-slotless",
    "cost": "34,000 gp",
    "summary": "A magical bag containing just enough nails and pegs to complete one ship's construction. If all of them are used to fully complete a single vessel, that ship gains a +20% bonus to its hull hit points; if the nails are split between different vessels or projects the magic is lost. Caster level 15th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-action",
    "name": "Dagger of Action",
    "category": "artifact",
    "cost": "—",
    "summary": "Minor artifact: a +1 defending dagger of speed whose wielder gains a +4 enhancement bonus to Dexterity and the use of a dozen feats (Acrobatic, Agile, Athletic, Combat Expertise, Dodge, Improved Feint, Improved Initiative, Improved Retain, Mobility, Retain, Sailrider, and Weapon Finesse: Dagger), provided the wielder wears light armor or less and carries no shield. Caster level 20th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "daniels-barometer-of-ritual-wonderment",
    "name": "Daniel's Barometer of Ritual Wonderment",
    "category": "artifact",
    "cost": "—",
    "summary": "Minor artifact that predicts the weather for the next 24 hours with 95% accuracy, grants a +6 bonus on Arcane Ritual checks and +4 on attempts to beat spell resistance. When used in an arcane ritual the user must make a Fortitude save (DC 20) or be polymorphed into a random animal of size Small or smaller until a remove curse overcomes spell resistance 25 or the weather changes — and at each significant weather change thereafter, for the rest of the user's life. Caster level 19th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bounty-hunter",
    "name": "Bounty Hunter",
    "category": "weapon",
    "cost": "23,500 gp",
    "summary": "A +2 longsword that also deals 1d6+2 temporary Strength damage on a hit (Fortitude save DC 14 negates). An opponent reduced to 0 Strength this way cannot move her muscles and becomes completely limp. Caster level 10th. (The book's stat block prints two different market prices, 23,500 gp and 21,000 gp; the first is used.)",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cape-of-the-swashbuckler",
    "name": "Cape of the Swashbuckler",
    "category": "wondrous-shoulders",
    "cost": "6,500 gp",
    "summary": "A stylish cape that never tatters and whose colors never fade. The wearer gains a +1 dodge bonus to AC and a +2 enhancement bonus to Charisma. Caster level 10th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "captains-charm",
    "name": "Captain's Charm",
    "category": "wondrous-throat",
    "cost": "40,000 gp",
    "summary": "A 4-inch oval pendant that functions only when worn by an active ship captain, on the outermost article of clothing at lapel level. It grants a +6 bonus to Charisma, and flashes with a glaring light like sun reflected in a mirror, letting the captain cast flare 3 times per day. Caster level 14th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "davey-jones-locker",
    "name": "Davey Jones' Locker",
    "category": "wondrous-slotless",
    "cost": "55,000 gp",
    "summary": "A cursed lure created by evil water-dwelling outsiders: an open sea chest on the sea floor that seems to overflow with gold and riches. Anyone who reaches into the treasure is pulled through the chest to the creature's home dimension (Reflex save DC 25 avoids) to stand trial for attempted theft and serve 7 years; anyone who makes off with the treasure instead draws the creature to this dimension to retrieve it and punish the thief. Caster level 17th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "doctor-bag-of-the-vizier",
    "name": "Doctor Bag of the Vizier",
    "category": "wondrous-slotless",
    "cost": "20,000 gp",
    "summary": "A surgeon's kit holding 5,000 units of resources. Used for surgery, it can heal a patient beyond his normal hit point maximum, granting the excess as temporary hit points lasting 48 hours; used as a healer's kit it grants a +6 circumstance bonus on Heal checks instead of the ordinary +2 or +4. Caster level 5th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-whip",
    "name": "Dragon Whip",
    "category": "weapon",
    "cost": "32,000 gp",
    "summary": "A +2 flaming burst cat o' nine tails covered in scales, with wisps of flame dancing about its barbed tails; it gives its wielder fire resistance 30. As a standard action the wielder can crack it in the air to unleash a 50 ft cone of fire dealing 10d10 damage (Reflex DC 23 half) — each whip can do this only 9 times ever. Caster level 13th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "enchanted-masthead",
    "name": "Enchanted Masthead",
    "category": "wondrous-slotless",
    "cost": "10,000 gp + 6,500 gp per power",
    "summary": "A magical figurehead mounted on a ship's bow and ritually bound to the vessel (only one masthead per ship), granting it one or more powers chosen from the book's list — navigation, piloting, speed, maneuverability, seaworthiness, stealth mist, eagle eye lookout range, pursuit, treasure finding, ramming, stability, fire protection, hull hardness, buoyancy, and halved maintenance — at 6,500 gp per power beyond the base price. Caster level 15th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "helm-of-disguise-pir",
    "name": "Helm of Disguise",
    "category": "wondrous-head",
    "cost": "9,000 gp",
    "summary": "A helm that, once put on, lets the wearer transform her facial appearance to be that of anyone she would like. This is an actual transmutation of the head, not an illusion, though it does not change body size or shape. Caster level 5th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hendriks-glass",
    "name": "Hendrik's Glass",
    "category": "wondrous-slotless",
    "cost": "45,000 gp",
    "summary": "The cursed spyglass of the captain of the Flying Dutchman: it grants a +5 luck bonus to Spot and Piloting checks at sea, but brings bad luck — whenever weather is checked while it is in use, the weather is two steps worse than rolled, and if a hurricane results, the Flying Dutchman and her crew attack the ship, leaving only if the glass's user is killed or the glass is thrown overboard. Caster level 17th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "kalieghs-map",
    "name": "Kaliegh's Map",
    "category": "wondrous-slotless",
    "cost": "45,000 gp",
    "summary": "A gold-threaded oilcloth map (20 by 30 inches) that, when on a ship, shows the location of that ship upon the waters it depicts, and also shows the type and location of any ships floating or sunk within the last 5 years within 100 miles. Caster level 19th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-mutineers",
    "name": "The Mutineers",
    "category": "weapon",
    "cost": "72,000 gp",
    "summary": "A set of four evil falchions made for four rival pirate heirs. Each is a +2 falchion, but against the wielder's own shipmates, a sibling, or a sibling's shipmates it becomes a +5 keen weapon; after each battle in which one is used that way, the wielder suffers 1d4 permanent Charisma damage. Caster level 20th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "manacles-of-the-slaver-6-pairs",
    "name": "Manacles of the Slaver (6 Pairs)",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "A heavy black iron chain with 6 pairs of barbed manacles. When every manacle is full and locked, each prisoner suffers a -1 penalty to Will saves per person held (up to -6). Escape requires an Escape Artist check (DC 42) or a Strength check (DC 35); the locks are amazingly good (Open Locks DC 40), and the chain has hardness 15 and 12 hit points. Caster level 10th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "manacles-of-the-slaver-8-pairs",
    "name": "Manacles of the Slaver (8 Pairs)",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "A heavy black iron chain with 8 pairs of barbed manacles. When every manacle is full and locked, each prisoner suffers a -1 penalty to Will saves per person held (up to -8). Escape requires an Escape Artist check (DC 42) or a Strength check (DC 35); the locks are amazingly good (Open Locks DC 40), and the chain has hardness 15 and 16 hit points. Caster level 13th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "manacles-of-the-slaver-12-pairs",
    "name": "Manacles of the Slaver (12 Pairs)",
    "category": "wondrous-slotless",
    "cost": "24,000 gp",
    "summary": "A heavy black iron chain with 12 pairs of barbed manacles. When every manacle is full and locked, each prisoner suffers a -1 penalty to Will saves per person held (up to -12). Escape requires an Escape Artist check (DC 42) or a Strength check (DC 35); the locks are amazingly good (Open Locks DC 40), and the chain has hardness 15 and 24 hit points. Caster level 16th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "necklace-of-the-crab",
    "name": "Necklace of the Crab",
    "category": "wondrous-throat",
    "cost": "24,000 gp",
    "summary": "A necklace of solid gold that imbues the wearer with water breathing and a +5 circumstance bonus on Swim checks. Caster level 5th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pendant-of-sailing",
    "name": "Pendant of Sailing",
    "category": "wondrous-throat",
    "cost": "50,000 gp",
    "summary": "A pendant in the shape of a ship that grants a +5 circumstance bonus to Piloting and Navigation checks, and a +5 bonus to all weather-related DC checks of the wearer's ship. Caster level 3rd.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pirates-boots",
    "name": "Pirate's Boots",
    "category": "wondrous-feet",
    "cost": "12,000 gp",
    "summary": "Finely made tooled leather boots granting the wearer a +5 competence bonus to Jump, Climb and Swim checks. Caster level 5th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ram-of-deflecting",
    "name": "Ram of Deflecting",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "A ship's ram protected by a magical force that reduces by half the damage the ramming ship itself takes when it rams. Caster level 11th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-comprehension",
    "name": "Ring of Comprehension",
    "category": "ring",
    "cost": "15,000 gp",
    "summary": "A ring that lets the wearer understand and speak any one language of her choice, and identifies what language another creature is speaking after hearing a single word of it. Caster level 9th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-navigation",
    "name": "Ring of Navigation",
    "category": "ring",
    "cost": "12,500 gp",
    "summary": "A ring with a sextant inscribed on the band that continually grants the wearer a +4 competence bonus to Navigation checks. Caster level 5th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sails-of-self-propulsion-1",
    "name": "Sails of Self-Propulsion (+1)",
    "category": "wondrous-slotless",
    "cost": "Sail price +15,000 gp",
    "summary": "Sails that move a ship even when there is no wind, and add +1 knot to the ship's maximum speed when there is wind. Priced as an addition to the price of the sails themselves. Caster level 7th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sails-of-self-propulsion-2",
    "name": "Sails of Self-Propulsion (+2)",
    "category": "wondrous-slotless",
    "cost": "Sail price +35,000 gp",
    "summary": "Sails that move a ship even when there is no wind, and add +2 knots to the ship's maximum speed when there is wind. Priced as an addition to the price of the sails themselves. Caster level 7th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sails-of-self-propulsion-3",
    "name": "Sails of Self-Propulsion (+3)",
    "category": "wondrous-slotless",
    "cost": "Sail price +65,000 gp",
    "summary": "Sails that move a ship even when there is no wind, and add +3 knots to the ship's maximum speed when there is wind. Priced as an addition to the price of the sails themselves. Caster level 7th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-of-holding-xebec",
    "name": "Ship of Holding (Xebec)",
    "category": "wondrous-slotless",
    "cost": "75,000 gp",
    "summary": "An apparently ordinary xebec whose hold contains an extra-dimensional space of narrow bunks holding up to 700 medium-sized occupants (or 44 t of cargo in packages no larger than 2 by 2 by 5 feet), with a bowl of nourishing but tasteless gruel appearing daily at each occupied bunk. A command word can empty the space into the Astral Plane. Contents do not count against the ship's cargo limit or weight. Caster level 15th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-of-holding-carrack",
    "name": "Ship of Holding (Carrack)",
    "category": "wondrous-slotless",
    "cost": "150,000 gp",
    "summary": "An apparently ordinary carrack whose hold contains an extra-dimensional space of narrow bunks holding up to 1200 medium-sized occupants (or 75 t of cargo in packages no larger than 2 by 2 by 5 feet), with a bowl of nourishing but tasteless gruel appearing daily at each occupied bunk. A command word can empty the space into the Astral Plane. Contents do not count against the ship's cargo limit or weight. Caster level 15th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-of-holding-galleon",
    "name": "Ship of Holding (Galleon)",
    "category": "wondrous-slotless",
    "cost": "290,000 gp",
    "summary": "An apparently ordinary galleon whose hold contains an extra-dimensional space of narrow bunks holding up to 2000 medium-sized occupants (or 125 t of cargo in packages no larger than 2 by 2 by 5 feet), with a bowl of nourishing but tasteless gruel appearing daily at each occupied bunk. A command word can empty the space into the Astral Plane. Contents do not count against the ship's cargo limit or weight. Caster level 15th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellcatcher",
    "name": "Spellcatcher",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "A weapon special ability: the weapon can catch any spell targeted at its wielder (not area effects) whose level does not exceed the weapon's enhancement bonus, using an attack of opportunity and a Reflex save against the spell's DC with the weapon bonus added. A caught spell is absorbed with no effect and can be immediately reflected back at the caster or held in the weapon and released later as a free action on a creature the weapon strikes and damages. Caster level 13th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wetsuit-of-the-frog",
    "name": "Wetsuit of the Frog",
    "category": "wondrous-body",
    "cost": "27,500 gp",
    "summary": "A wetsuit made of frog skin that gives the wearer a +15 enhancement bonus to Jump, the ability to breathe water, and reduces cold damage taken by 5 points per round. Caster level 10th.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, pp. 82–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "air-bubble-barrette",
    "name": "Air Bubble Barrette",
    "category": "wondrous-slotless",
    "cost": "1,400 gp",
    "summary": "A device in the shape of a goldfish that, once activated (a free action), surrounds the wearer with an air bubble that cannot be popped, letting her breathe where she normally could not, as the water breathing spell. It can be used 3 times before its charges are expended. Caster level 6th.",
    "source": "Pirates! — Chapter 7: Pirate Adventures, p. 105",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const PIR_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "ship-longboat",
    "name": "Longboat",
    "category": "gear",
    "cost": "4,000 gp",
    "weight": "—",
    "notes": "A longship era ship type: 35 ft long, 10 ft beam, 4 ft depth, 9 tons, crew 3, carries 26 additional troops/passengers and 4 tons of cargo, square rigged, top speed 7 knots, 12 oarsmen. Hull 20 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-drakkar",
    "name": "Drakkar",
    "category": "gear",
    "cost": "37,500 gp",
    "weight": "—",
    "notes": "A longship era ship type: 150 ft long, 25 ft beam, 8 ft depth, 210 tons, crew 18, carries 230 additional troops/passengers and 100 tons of cargo, square rigged, top speed 7 knots, 70 oarsmen. Hull 250 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-fusta",
    "name": "Fusta",
    "category": "gear",
    "cost": "28,000 gp",
    "weight": "—",
    "notes": "A galley era ship type: 80 ft long, 13 ft beam, 5 ft depth, 37 tons, crew 8, carries 175 additional troops/passengers and 15 tons of cargo, lateen rigged, top speed 6 knots, 90 oarsmen. Hull 60 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-galleass",
    "name": "Galleass",
    "category": "gear",
    "cost": "60,000 gp",
    "weight": "—",
    "notes": "A galley era ship type: 150 ft long, 25 ft beam, 10 ft depth, 270 tons, crew 45, carries 520 additional troops/passengers and 80 tons of cargo, lateen rigged, top speed 6 knots, 210 oarsmen. Hull 320 hp, hardness 12. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-great-galley",
    "name": "Great Galley",
    "category": "gear",
    "cost": "56,000 gp",
    "weight": "—",
    "notes": "A galley era ship type: 150 ft long, 25 ft beam, 11 ft depth, 300 tons, crew 30, carries 140 additional troops/passengers and 130 tons of cargo, lateen rigged, top speed 5 knots, 90 oarsmen. Hull 320 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-brigantine",
    "name": "Brigantine",
    "category": "gear",
    "cost": "24,000 gp",
    "weight": "—",
    "notes": "A galley era ship type: 60 ft long, 15 ft beam, 8 ft depth, 50 tons, crew 12, carries 90 additional troops/passengers and 20 tons of cargo, lateen rigged, top speed 8 knots, 40 oarsmen. Hull 45 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-round-ship",
    "name": "Round Ship",
    "category": "gear",
    "cost": "31,000 gp",
    "weight": "—",
    "notes": "A early merchant ships ship type: 70 ft long, 22 ft beam, 20 ft depth, 200 tons, crew 21, carries 50 additional troops/passengers and 110 tons of cargo, lateen rigged, top speed 5 knots. Hull 120 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-grain-ship",
    "name": "Grain Ship",
    "category": "gear",
    "cost": "52,000 gp",
    "weight": "—",
    "notes": "A early merchant ships ship type: 180 ft long, 47 ft beam, 32 ft depth, 1830 tons, crew 40, carries 100 additional troops/passengers and 1080 tons of cargo, square rigged, top speed 4 knots. Hull 1000 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-small-carrack",
    "name": "Small Carrack",
    "category": "gear",
    "cost": "45,000 gp",
    "weight": "—",
    "notes": "A carrack era ship type: 80 ft long, 26 ft beam, 17 ft depth, 230 tons, crew 21, carries 50 additional troops/passengers and 135 tons of cargo, square rigged, top speed 6 knots. Hull 200 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-large-carrack",
    "name": "Large Carrack",
    "category": "gear",
    "cost": "55,000 gp",
    "weight": "—",
    "notes": "A carrack era ship type: 100 ft long, 33 ft beam, 20 ft depth, 420 tons, crew 42, carries 100 additional troops/passengers and 250 tons of cargo, square rigged, top speed 7 knots. Hull 420 hp, hardness 12. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-great-carrack",
    "name": "Great Carrack",
    "category": "gear",
    "cost": "70,000 gp",
    "weight": "—",
    "notes": "A carrack era ship type: 140 ft long, 45 ft beam, 23 ft depth, 940 tons, crew 85, carries 250 additional troops/passengers and 530 tons of cargo, square rigged, top speed 6 knots. Hull 800 hp, hardness 13. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-xebec",
    "name": "Xebec",
    "category": "gear",
    "cost": "60,000 gp",
    "weight": "—",
    "notes": "A carrack era ship type: 90 ft long, 24 ft beam, 10 ft depth, 140 tons, crew 35, carries 200 additional troops/passengers and 60 tons of cargo, lateen rigged, top speed 10 knots. Hull 200 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-merchant",
    "name": "Merchant",
    "category": "gear",
    "cost": "85,000 gp",
    "weight": "—",
    "notes": "A galleon era ship type: 180 ft long, 45 ft beam, 28 ft depth, 1550 tons, crew 150, carries 250 additional troops/passengers and 925 tons of cargo, square rigged, top speed 6 knots. Hull 1000 hp, hardness 12. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-man-o-war",
    "name": "Man-o-War",
    "category": "gear",
    "cost": "70,000 gp",
    "weight": "—",
    "notes": "A galleon era ship type: 160 ft long, 35 ft beam, 26 ft depth, 1010 tons, crew 200, carries 700 additional troops/passengers and 400 tons of cargo, square rigged, top speed 8 knots. Hull 1000 hp, hardness 14. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-royal-galleon",
    "name": "Royal Galleon",
    "category": "gear",
    "cost": "105,000 gp",
    "weight": "—",
    "notes": "A galleon era ship type: 200 ft long, 50 ft beam, 30 ft depth, 2040 tons, crew 300, carries 1600 additional troops/passengers and 750 tons of cargo, square rigged, top speed 7 knots. Hull 2000 hp, hardness 18. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-frigate",
    "name": "Frigate",
    "category": "gear",
    "cost": "50,000 gp",
    "weight": "—",
    "notes": "A galleon era ship type: 110 ft long, 30 ft beam, 15 ft depth, 330 tons, crew 45, carries 110 additional troops/passengers and 180 tons of cargo, square rigged, top speed 10 knots. Hull 350 hp, hardness 12. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-ketch",
    "name": "Ketch",
    "category": "gear",
    "cost": "18,000 gp",
    "weight": "—",
    "notes": "A small ships ship type: 65 ft long, 17 ft beam, 11 ft depth, 82 tons, crew 9, carries 20 additional troops/passengers and 50 tons of cargo, square rigged, top speed 8 knots. Hull 70 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-polacre",
    "name": "Polacre",
    "category": "gear",
    "cost": "15,000 gp",
    "weight": "—",
    "notes": "A small ships ship type: 50 ft long, 15 ft beam, 10 ft depth, 50 tons, crew 5, carries 13 additional troops/passengers and 30 tons of cargo, lateen rigged, top speed 8 knots. Hull 45 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-pinnace",
    "name": "Pinnace",
    "category": "gear",
    "cost": "16,000 gp",
    "weight": "—",
    "notes": "A small ships ship type: 45 ft long, 13 ft beam, 9 ft depth, 35 tons, crew 7, carries 25 additional troops/passengers and 17 tons of cargo, square rigged, top speed 9 knots, 12 oarsmen. Hull 30 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-fishingboat",
    "name": "Fishingboat",
    "category": "gear",
    "cost": "3,500 gp",
    "weight": "—",
    "notes": "A small ships ship type: 30 ft long, 10 ft beam, 6 ft depth, 12 tons, crew 3, carries 6 additional troops/passengers and 7 tons of cargo, lateen rigged, top speed 7 knots. Hull 15 hp, hardness 6. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-sailboat",
    "name": "Sailboat",
    "category": "gear",
    "cost": "2,500 gp",
    "weight": "—",
    "notes": "A small ships ship type: 20 ft long, 6 ft beam, 4 ft depth, 3 tons, crew 2, carries 0 additional troops/passengers and 2 tons of cargo, square rigged, top speed 6 knots, 2 oarsmen. Hull 6 hp, hardness 5. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-dwarven-knorr",
    "name": "Dwarven Knorr",
    "category": "gear",
    "cost": "23,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 50 ft long, 15 ft beam, 6 ft depth, 30 tons, crew 6, carries 25 additional troops/passengers and 15 tons of cargo, square rigged, top speed 7 knots, 8 oarsmen. Hull 50 hp, hardness 10. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-dwarven-skaid",
    "name": "Dwarven Skaid",
    "category": "gear",
    "cost": "65,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 100 ft long, 20 ft beam, 7 ft depth, 100 tons, crew 9, carries 180 additional troops/passengers and 40 tons of cargo, square rigged, top speed 8 knots, 50 oarsmen. Hull 150 hp, hardness 12. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-elven-fusta",
    "name": "Elven Fusta",
    "category": "gear",
    "cost": "52,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 100 ft long, 15 ft beam, 8 ft depth, 87 tons, crew 20, carries 285 additional troops/passengers and 10 tons of cargo, lateen rigged, top speed 7 knots, 160 oarsmen. Hull 130 hp, hardness 13. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-elven-galley",
    "name": "Elven Galley",
    "category": "gear",
    "cost": "72,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 140 ft long, 23 ft beam, 10 ft depth, 230 tons, crew 35, carries 500 additional troops/passengers and 60 tons of cargo, lateen rigged, top speed 6 knots, 240 oarsmen. Hull 350 hp, hardness 16. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-gnomish-paddlewheeler",
    "name": "Gnomish Paddlewheeler",
    "category": "gear",
    "cost": "95,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 80 ft long, 20 ft beam, 12 ft depth, 130 tons, crew 24, carries 125 additional troops/passengers and 50 tons of cargo, square rigged, top speed 5 knots. Hull 130 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-gnomish-fluit",
    "name": "Gnomish Fluit",
    "category": "gear",
    "cost": "80,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 160 ft long, 50 ft beam, 40 ft depth, 2080 tons, crew 250, carries 1100 additional troops/passengers and 1100 tons of cargo, square rigged, top speed 5 knots. Hull 2000 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ship-orcish-dromon",
    "name": "Orcish Dromon",
    "category": "gear",
    "cost": "120,000 gp",
    "weight": "—",
    "notes": "A fantastic ships ship type: 200 ft long, 55 ft beam, 12 ft depth, 880 tons, crew 30, carries 1500 additional troops/passengers and 300 tons of cargo, square rigged, top speed 2 knots, 600 oarsmen. Hull 850 hp, hardness 8. Cost is the book's average price for the type.",
    "source": "Pirates! — Chapter 4: Ship Construction, Table 4-1: Common Ship Types, p. 75",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "musketoon",
    "name": "Musketoon",
    "category": "weapon",
    "cost": "350 gp",
    "weight": "8 lbs.",
    "notes": "A shorter version of a musket with a flintlock firing mechanism, handier for fighting on the deck of a ship though less accurate and shorter-ranged than a musket. Damage 1d10, critical x3, range increment 100 ft.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "balls-musketoon-10",
    "name": "Balls, Musketoon (10)",
    "category": "ammunition",
    "cost": "3 gp",
    "weight": "2 lbs.",
    "notes": "Ammunition: ten balls for a musketoon.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "grenado",
    "name": "Grenado",
    "category": "weapon",
    "cost": "80 gp",
    "weight": "0.1 lb.",
    "notes": "A small hollow ball of iron, glass or wood, about two ounces, filled with gunpowder and thrown after its fuse is lit; it deals 2d6 damage. On a natural 1 on the attack roll the fuse was too short and it explodes in the attacker's hands. Range increment 15 ft.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stinkpot",
    "name": "Stinkpot",
    "category": "weapon",
    "cost": "70 gp",
    "weight": "1 lb.",
    "notes": "A thrown pot of chemicals that, once lit and burning, creates a 15-foot diameter cloud for ten minutes. Every creature in the cloud must make a Fortitude save (DC 14) each round or be nauseated for 1d3 rounds; the first round it affects only the square it lands in. Range increment 15 ft.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pedrero",
    "name": "Pedrero",
    "category": "weapon",
    "cost": "450 gp",
    "weight": "100 lbs.",
    "notes": "A small bronze swivel cannon with an integral powder chamber, designed to fire a stone projectile (2 lb shot, 0.75 lb powder charge). Damage 3d6, critical x4, range increment 100 ft.; reload takes 2 full rounds with a crew of 2.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "solid-shot-pedrero",
    "name": "Solid Shot, Pedrero",
    "category": "ammunition",
    "cost": "10 gp",
    "weight": "2 lbs.",
    "notes": "Ammunition: a single 2 lb stone shot for a pedrero.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lg-shot-blunderbuss-10",
    "name": "Lg Shot, Blunderbuss (10)",
    "category": "ammunition",
    "cost": "5 gp",
    "weight": "4 lbs.",
    "notes": "Ammunition: ten large shot loads for a blunderbuss, fired as a single heavy shot (2d8 damage, 70 ft. range increment).",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sm-shot-blunderbuss-10",
    "name": "Sm Shot, Blunderbuss (10)",
    "category": "ammunition",
    "cost": "10 gp",
    "weight": "4 lbs.",
    "notes": "Ammunition: ten small shot loads for a blunderbuss, fired as a spray over a 10-foot square area (30 ft. range increment); one creature in each 5-foot square is attacked for 1d6 damage.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-1: Weapons, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "backstaff",
    "name": "Backstaff",
    "category": "tool",
    "cost": "85 gp",
    "weight": "2 lbs.",
    "notes": "A navigation instrument used to gauge latitude: the navigator sights along the staff and slides the crosspiece until its top lines up with the sun or polar star and its bottom with the horizon, then converts the reading to degrees.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-2: Nautical Equipment, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chronometer",
    "name": "Chronometer",
    "category": "tool",
    "cost": "1,000 gp",
    "weight": "20-125 lbs.",
    "notes": "A precise ship's timekeeper used in navigation; the table's weight range covers sizes from portable to large mounted instruments.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-2: Nautical Equipment, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "octant",
    "name": "Octant",
    "category": "tool",
    "cost": "500 gp",
    "weight": "3 lbs.",
    "notes": "A navigation instrument for angular measurements, consisting of a triangular wooden frame with a swinging index arm pivoted at the apex and mirrors fixed at the pivot and on one limb.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-2: Nautical Equipment, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sea-astrolabe",
    "name": "Sea Astrolabe",
    "category": "tool",
    "cost": "95 gp",
    "weight": "9 lbs.",
    "notes": "A mariner's astrolabe, made heavy so it hangs vertical on the rolling deck of a ship; its alidade and degree scale let the navigator take celestial measurements.",
    "source": "Pirates! — Chapter 5: Equipment and Magic, Table 5-2: Nautical Equipment, p. 81",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
