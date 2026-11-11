/**
 * Omni sweep wave 2 (2026-11-02): Forbidden Arcana: A Collection
 * of Arcane Options (Ronin Arts). Item-bearing sections were
 * enumerated in full: Performance Magic's magic items (p. 53);
 * the Magical Foods chapter — its mundane cooking table (p. 70),
 * its named magical foods (pp. 71–72), and its cooking magic
 * items (pp. 72–74); the Wizards' Spellbooks chapter — four
 * specific spellbooks with printed open-market values (pp. 85–88)
 * and its wondrous items (pp. 92–93); Kelust's Tower's Magical
 * Treasures (pp. 128–129); and Magical Pipes and Tobaccos — the
 * mundane pipes and tobacco blends table (pp. 159–160) and three
 * named magical pipes (pp. 162–163). The enumeration was
 * cross-checked against the book's own index (pp. 166–167).
 * NOT built, by design: magical tobaccos and blessed-wafer-style
 * effect pricing are formulas (spell level × caster level ×
 * 50 gp), not named products — the one named product priced that
 * way, the Blessed Wafer, is built as a single record; the
 * Divining Tapestry is expressly a crystal ball variant that
 * "costs the same" and the catalog already holds the crystal
 * ball; and Kelust's Tower's Mundane Treasures and Interesting
 * Books (paintings, wine barrels, library books with Appraise
 * values) are one location's treasure, not purchasable catalog
 * entries. One price conflict: the tobacco blend "Hearthfire"
 * (1 gp here) collides by name with an unrelated Races of Stone
 * item (10 gp) already in the catalog, so it is skipped and
 * reported. Magical foods are consumable spell effects eaten as
 * food and are filed under the "potion" category. Prices are the
 * printed prices; summaries and notes are in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const FARC_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "amplificator",
    "name": "Amplificator",
    "category": "wondrous-slotless",
    "cost": "500 gp",
    "summary": "A small cone of wood or more exotic material carved in the shape of cupped hands, small enough to be concealed in a human hand. It doubles the range of any voice that speaks into it.",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fireworks-silent-image",
    "name": "Fireworks (Silent Image)",
    "category": "wondrous-slotless",
    "cost": "100 gp or 200 gp",
    "summary": "Illusion-based fireworks launched into the atmosphere to explode in massive showers of sparks; being pure illusion they can do no harm and can form almost any image. This version creates a silent image lasting a single round (the higher price covers the ghost sound or sound burst variants).",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fireworks-minor-image",
    "name": "Fireworks (Minor Image)",
    "category": "wondrous-slotless",
    "cost": "300 gp",
    "summary": "Illusion-based fireworks launched into the atmosphere to explode in massive showers of sparks; being pure illusion they can do no harm and can form almost any image. This version creates a minor image lasting two rounds.",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fireworks-major-image",
    "name": "Fireworks (Major Image)",
    "category": "wondrous-slotless",
    "cost": "750 gp",
    "summary": "Illusion-based fireworks launched into the atmosphere to explode in massive showers of sparks; being pure illusion they can do no harm and can form almost any image. This version creates a major image lasting three rounds.",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hand-fireworks",
    "name": "Hand Fireworks",
    "category": "wondrous-slotless",
    "cost": "25 gp",
    "summary": "Little cylinders meant to be held in one hand and set off with a command word, usually as a performance finale. The flare normally detonates shortly after leaving the cylinder but can travel 30 feet or more; ignited in a creature's face, it dazzles the creature for 1 minute if it fails a Fortitude save (DC 11).",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ventriliquator",
    "name": "Ventriliquator",
    "category": "wondrous-slotless",
    "cost": "500 gp",
    "summary": "A device of wood carved in the shape of a hand cupping an ear, small enough to be concealed in a human hand. It allows the user to throw his or her voice up to 30 feet in any direction.",
    "source": "Forbidden Arcana — Performance Magic: Magic Items, p. 53",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blessed-wafer",
    "name": "Blessed Wafer",
    "category": "potion",
    "cost": "Varies by effect (50 gp base)",
    "summary": "An unleavened wheat wafer stamped with the symbol of the deity in whose name it is offered, eaten as a full-round action. A wafer carries any one spell effect from the book's magical food list, at a base price by spell level: 50 gp (1st), 300 gp (2nd), 750 gp (3rd), 1,400 gp (4th), or 2,750 gp (5th); wafers of 1,400 gp or more require the Greater Magical Food feat.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bread-of-judgment",
    "name": "Bread of Judgment",
    "category": "potion",
    "cost": "1,625 gp",
    "summary": "A hand-sized loaf of unleavened bread eaten by priests, judges, and nobles for important decisions. It grants the consumer a +4 enhancement bonus to Wisdom for 10 minutes and the ability to discern lies as a 10th-level caster, which may be invoked at any time within those 10 minutes; the loaf takes one minute to consume.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "darkvision-carrot",
    "name": "Darkvision Carrot",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A magical carrot that gives the eater darkvision out to 60 feet for 3 hours. Eating the carrot takes 4 rounds.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "jumping-bean",
    "name": "Jumping Bean",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A green, brown, or black bean that grants its consumer a +10 enhancement bonus to Jump checks for 1 minute. Eating it is a full-round action.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spinach-of-power",
    "name": "Spinach of Power",
    "category": "potion",
    "cost": "500 gp",
    "summary": "A handful of magical spinach that grants the consumer a +4 enhancement bonus to Strength for 5 minutes. Eating a handful is a full-round action.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "winter-soup",
    "name": "Winter Soup",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A bowl of magical soup from the coldest climates that gives the consumer the benefits of an endure elements spell for 24 hours. Eating a bowl requires 5 rounds.",
    "source": "Forbidden Arcana — Magical Foods: Magical Foods, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-tray-full",
    "name": "Fire Tray, Full",
    "category": "wondrous-slotless",
    "cost": "1,800 gp",
    "summary": "A thin tin tray 12 inches across that, upon command, fills with flames equivalent to a full-size cooking fire; a second command extinguishes them. The flameless-fuel fire gives off no smoke and no dangerous sparks and the tray itself stays cool, though creatures making significant contact with the fire take 1d6 points of fire damage. It heats food as quickly as a normal cooking fire and works with the basic or full field kitchens.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 72",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-tray-individual",
    "name": "Fire Tray, Individual",
    "category": "wondrous-slotless",
    "cost": "600 gp",
    "summary": "A smaller version of the full fire tray, only 4 inches across, that fills with cooking flames on command. Anyone making significant contact with it suffers only 1 point of fire damage; it is used with the individual field kitchen.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flavor-all",
    "name": "Flavor-All",
    "category": "wondrous-slotless",
    "cost": "25 gp",
    "summary": "A small pouch of multi-colored granules sprinkled on food to change its taste to one pleasant to the creature eating it, regardless of the food's actual type; a creature that wishes to can make a Will saving throw (DC 11) to taste the food's true flavor. One pouch can alter the taste of ten meals for a Medium creature.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "kitchen-in-a-box",
    "name": "Kitchen-In-A-Box",
    "category": "wondrous-slotless",
    "cost": "4,500 gp",
    "summary": "A small wooden box of velvet-lined compartments holding doll-sized pots, pans, ovens, utensils, and cutlery plus a complete dinner service for eight. Any item taken out grows to full size when the command word is spoken, and a second command returns it to small size; an item not returned within 12 hours of removal remains permanently full-sized. The contents are the equivalent of a masterwork field kitchen plus the dinner service.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "self-heating-oven",
    "name": "Self-Heating Oven",
    "category": "wondrous-slotless",
    "cost": "1,800 gp",
    "summary": "A cast-iron Dutch oven whose interior heats on command to the desired temperature within 1 round — typically 220 degrees (\"boil\") or 400 degrees (\"bake\") — with a third command shutting it off. It can prepare a meal for up to 10 Medium creatures; its surfaces become as hot as its contents, dealing 1d4 points of fire damage on significant contact, and it must cool before transport.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stew-cooker",
    "name": "Stew Cooker",
    "category": "wondrous-slotless",
    "cost": "1,200 gp",
    "summary": "A cast-iron pot whose interior self-heats on command to a maximum of 220 degrees within 1 round, enough to boil water and cook stews or soup for a meal for 10 Medium creatures; a second command shuts it off. Its surfaces become as hot as its contents, dealing 1d2 points of fire damage on significant contact, and it must cool before transport.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 73",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stirring-spoon",
    "name": "Stirring Spoon",
    "category": "wondrous-slotless",
    "cost": "50 gp",
    "summary": "A sturdy wooden spoon that stirs any liquid no thicker than porridge on its own. Once the owner makes one complete stir with it and utters the command word, it continues stirring in the same manner and at the same speed until the owner grabs it and repeats the command word.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 74",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "trencher-of-feasting",
    "name": "Trencher of Feasting",
    "category": "wondrous-slotless",
    "cost": "1,800 gp",
    "summary": "A sturdy wooden trencher, three feet long and one foot wide, that upon command duplicates any food placed upon it beforehand. A portion adequate for one human for one meal is replicated five times (enough to feed six), and no more than five portions are ever created regardless of the original portion's size. It can be used once every 24 hours.",
    "source": "Forbidden Arcana — Magical Foods: Magic Items, p. 74",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infallible-compass",
    "name": "Infallible Compass",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "A wondrous item that always indicates north, in any of many forms — a divining rod that pulls the hands toward north, an arrow balanced on a finger, or a stone that vibrates more strongly as it nears north. It is only as infallible as the existence of a \"north\" to find and may not work in an extraplanar setting.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: Wondrous Items, p. 92",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "glove-of-the-damned-vampiric-touch",
    "name": "Glove of the Damned (Vampiric Touch)",
    "category": "wondrous-hands",
    "cost": "11,250 gp",
    "summary": "One of the gloves of the damned — finely made gloves, usually of black silk or leather, that store and deliver a necromantic touch spell of 4th level or lower chosen at creation; only one such glove may be worn at a time. A newly created glove has 50 charges; on command the wearer expends a charge to charge the glove with the stored spell, which then works exactly as the spell with no focus or material component, delivered by melee touch attack, and the expended glove crumbles to dust when its last charge is used. This record is the book's priced example, storing vampiric touch; other gloves are priced by the stored spell.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: Wondrous Items, p. 92",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rain-cloak",
    "name": "Rain Cloak",
    "category": "wondrous-shoulders",
    "cost": "500 gp",
    "summary": "An ordinary-appearing light wool cloak that provides its wearer and his or her equipment complete protection from rain and other precipitation, keeping the wearer dry in all weather including monsoons and hurricanes.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: Wondrous Items, p. 93",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "travelers-cloak",
    "name": "Traveler's Cloak",
    "category": "wondrous-shoulders",
    "cost": "2,000 gp",
    "summary": "An ordinary-appearing fine wool cloak combining a rain ward, an endure elements effect, and protection from insects. As long as it is worn, the creature never gets wet, is never too cold or too hot, and suffers no insect bites.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: Wondrous Items, p. 93",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "decanter-of-detection",
    "name": "Decanter of Detection",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "A large rectangular decanter of deep blue glass whose stopper is blown in the shape of a professor's hat. It detects the poisonous or magical qualities of any liquid poured into it: the glass turns bright red for a poisonous liquid, bright yellow for a magical one such as a potion, and bright orange for a liquid that is both. It does not alter the liquid in any way.",
    "source": "Forbidden Arcana — Kelust's Tower: Magical Treasures, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infinite-eye",
    "name": "Infinite Eye",
    "category": "artifact",
    "cost": "—",
    "summary": "A one-foot diameter sphere, impossibly smooth and infinitely dark, that swallows all reflection and light — a minor artifact and one of the most powerful scrying devices ever created. Using it requires a successful control check (DC 30); the subject may attempt a Will save (DC 23, modified by the user's knowledge of and connection to the subject and by the seer's skill) to defeat the scrying for 24 hours. On a failed save the user sees and hears the subject and everything within 20 feet of it anywhere, following it through any movement or travel, with true seeing and clairaudience, piercing scrying defenses as discern location; a long list of divination spells may also be cast through the Eye into the area it observes.",
    "source": "Forbidden Arcana — Kelust's Tower: Magical Treasures, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const FARC_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "cooks-outfit",
    "name": "Cook's Outfit",
    "category": "gear",
    "cost": "1 gp",
    "weight": "4 lb.",
    "notes": "A cook's working outfit: a shirt with buttons, a skirt or pants with drawstring, a cloth apron, shoes, and a cap or hat.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cookware",
    "name": "Cookware",
    "category": "gear",
    "cost": "5 sp",
    "weight": "2 lb. to 6 lb.",
    "notes": "A single item used for cooking — a pot, pan, Dutch oven, or the like.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cookware-masterwork",
    "name": "Cookware, Masterwork",
    "category": "gear",
    "cost": "10 gp",
    "weight": "2 lb. to 6 lb.",
    "notes": "A single piece of cookware of superior quality and durability. Using it adds a +2 circumstance bonus to any Profession (Cook) check that relies solely on that particular piece, or pieces, of cookware.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dining-kit-portable",
    "name": "Dining Kit, Portable",
    "category": "gear",
    "cost": "30 gp",
    "weight": "10 lb.",
    "notes": "A full dining service for four — salad, soup, and main course plates, proper utensils, napkins, and a blanket — contained in a sturdy wicker basket or wooden box, for a civilized dining experience on the road.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "everburning-logs",
    "name": "Everburning Logs (per day)",
    "category": "alchemical gear",
    "cost": "1 gp",
    "weight": "2 lb.",
    "notes": "Alchemically treated logs that, once lit, burn ten times as long as ordinary logs, reducing the need to stockpile firewood. They can be created with a successful Craft (Alchemy) check (DC 20). Priced per day's worth of burning.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "field-kitchen-basic",
    "name": "Field Kitchen, Basic",
    "category": "gear",
    "cost": "3 gp",
    "weight": "10 lb.",
    "notes": "A cooking kit sufficient for up to four people: a larger cast-iron pot, a cast-iron pan, and all the proper utensils, with everything fitting within the larger pot for portability. Items from this table weigh one-quarter as much when made for Small characters.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "field-kitchen-individual",
    "name": "Field Kitchen, Individual",
    "category": "gear",
    "cost": "6 sp",
    "weight": "2 lb.",
    "notes": "A single small pot with lid, along with a bowl and spoon that fit inside the pot — enough for one individual to cook for themselves. Items from this table weigh one-quarter as much when made for Small characters.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "field-kitchen-full",
    "name": "Field Kitchen, Full",
    "category": "gear",
    "cost": "10 gp",
    "weight": "30 lb.",
    "notes": "A complete cast-iron cooking set for large groups: a kettle, several pots and pans, an oven, and all the proper utensils. Unlike the smaller kitchens its pieces are too numerous and large to nest, so they are stored separately, usually in a wagon. Items from this table weigh one-quarter as much when made for Small characters.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "field-kitchen-masterwork",
    "name": "Field Kitchen, Masterwork",
    "category": "gear",
    "cost": "200 gp",
    "weight": "30 lb.",
    "notes": "A full field kitchen of the best quality utensils and cookware, including a kettle, multiple pans, pots, utensils, and baking trays. It grants a +2 circumstance bonus to any Profession (Cook) skill checks.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mess-kit-basic",
    "name": "Mess Kit, Basic",
    "category": "gear",
    "cost": "2 cp",
    "weight": "1/2 lb.",
    "notes": "A wooden bowl and spoon. Items from this table weigh one-quarter as much when made for Small characters.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mess-kit-standard",
    "name": "Mess Kit, Standard",
    "category": "gear",
    "cost": "4 sp",
    "weight": "1 lb.",
    "notes": "A tin plate, cup, bowl, spoon, knife, and fork, all fitting together in a handy portable package. Items from this table weigh one-quarter as much when made for Small characters.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "smokeless-logs",
    "name": "Smokeless Logs (per day)",
    "category": "alchemical gear",
    "cost": "3 gp",
    "weight": "2 lb.",
    "notes": "Alchemically treated logs that burn extremely clean and give off no smoke — a benefit for those traveling in enemy terrain — and, sharing part of the everburning log process, burn ten times as long as ordinary wood. Priced per day's worth of burning.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 70",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spice-rack-portable",
    "name": "Spice Rack, Portable",
    "category": "gear",
    "cost": "5 gp",
    "weight": "2 lb.",
    "notes": "A small wooden box holding a selection of spice bottles. Using it grants a +2 circumstance bonus to any Profession (Cook) skill checks; the spices are exhausted after ten uses.",
    "source": "Forbidden Arcana — Magical Foods: Mundane Items, p. 71",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-of-faisa-al-akbar",
    "name": "Faisa Al-Akbar's Spellbook",
    "category": "gear",
    "cost": "4,500 gp",
    "weight": "10 lb.",
    "notes": "The brassbound papyrus spellbook of Faisa Al-Akbar, a half-elf necromancer, its value being its open-market price as printed. It is secured by a good lock (Open Lock DC 30) and protected by a sepia snake sigil hidden in the cover's prayer and a fire trap that detonates if anyone but Faisa opens it. It holds necromancy-focused spells of 0 to 4th level, including the new spells skeleton claw, skeletal form, allip touch, wight touch, and wraith touch.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: The Spellbooks, pp. 85–86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "partly-burned-spellbook",
    "name": "Partly Burned Spellbook",
    "category": "gear",
    "cost": "100 gp",
    "weight": "2 lb.",
    "notes": "A spellbook with blackened, curled brown leather covers and singed pages, its melted-shut straps needing to be cut or torn (Strength DC 17). Its fire trap, cast at 9th level, still functions when the book is opened. Only fragments of its spells survive, but an intrepid wizard can reconstruct spells from it with a modified Spellcraft check (DC 10 + twice the spell's level) at half the normal research cost in time and money.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: The Spellbooks, pp. 86–87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "research-spellbook-of-professor-gorlikt",
    "name": "Professor Gorlikt's Research Spellbook",
    "category": "gear",
    "cost": "350 gp",
    "weight": "3 lb.",
    "notes": "One of the many utilitarian black-leather research spellbooks of Professor Gorlikt, human evoker of the Magic Academy. Its dense notes and annotations impose a –4 circumstance penalty on Spellcraft checks to decipher a spell (read magic grants a +10 competence bonus instead). It contains the new spells icy breath, force wave, and acid rain plus a fourth, incomplete spell; the printed value of 350 gp assumes all four spells are completed.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: The Spellbooks, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellbook-of-tyde-of-landhill",
    "name": "Tyde of Landhill's Spellbook",
    "category": "gear",
    "cost": "1,750 gp",
    "weight": "2 lb.",
    "notes": "The spellbook of Tyde of Landhill, a traveling halfling merchant and spellcaster. His spells are sandwiched among journal entries, recipes, songs, and other trivia he has collected, all written in Halfling; he keeps his business ledgers in separate books.",
    "source": "Forbidden Arcana — Wizards' Spellbooks: The Spellbooks, pp. 87–88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "briar-pipe",
    "name": "Briar Pipe",
    "category": "gear",
    "cost": "1 sp - 10 gp",
    "weight": "< 1 lb.",
    "notes": "Perhaps the most common pipe in virtually all lands, most associated with humans, halflings, and gnomes. It comes in almost infinite size and variety, from plain to heavily decorated, always following the basic pipe design.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 159",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "clay-pipe",
    "name": "Clay Pipe",
    "category": "gear",
    "cost": "1 cp - 1 sp",
    "weight": "< 1 lb.",
    "notes": "The pipe for those on a budget: usually just a clay bowl and stem fashioned as one unit, and rarely decorated.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 159",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "nose-pipe",
    "name": "Nose Pipe",
    "category": "gear",
    "cost": "1 cp - 1 sp",
    "weight": "1 lb.",
    "notes": "A pipe with a long stem and large bowl whose stem ends in a split opening designed to fit into a nostril instead of a mouthpiece. They are made from anything available, including bone and clay, and the quality of the smoke suffers accordingly.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pipe-o-the-rock",
    "name": "Pipe O' The Rock",
    "category": "gear",
    "cost": "2 gp - 10 gp",
    "weight": "1 lb.",
    "notes": "A dwarven favorite whose bowl is made of volcanic stone and stem usually of amber, and usually highly polished with little decoration beyond the occasional precious metal inlay. The stone filters less effectively than a briar pipe's wood, so it delivers a very potent and acrid smoke.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "seafoam-pipe",
    "name": "Seafoam Pipe",
    "category": "gear",
    "cost": "2 sp - 8 gp",
    "weight": "< 1 lb.",
    "notes": "A pipe made of seafoam (meerschaum), a white clay found near warm waters. It is a favorite of sailors, tending to feature a small bowl with a long stem.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "woodlands-pipe",
    "name": "Woodlands Pipe",
    "category": "gear",
    "cost": "2 gp - 15 gp",
    "weight": "< 1 lb.",
    "notes": "An elven-made pipe, usually of walnut, with a thin delicate bowl and stem often carved with images of trees and woodland animals. It is not considered well suited to adventure travel.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "forge-spark-tobacco",
    "name": "Forge Spark",
    "category": "gear",
    "cost": "5 sp",
    "weight": "1 lb.",
    "notes": "A dwarven tobacco blend, quite harsh, with an underlying metallic taste. Priced as listed in the book's mundane items table (per the table's 1 lb. measure).",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 159",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mad-wizard-tobacco",
    "name": "Mad Wizard",
    "category": "gear",
    "cost": "4 gp",
    "weight": "1 lb.",
    "notes": "A relatively spicy gnome tobacco blend, supposedly smoked by the mad wizard Thystar. Its smell tends to remind one of old and musty books.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "memory-tobacco",
    "name": "Memory",
    "category": "gear",
    "cost": "5 gp",
    "weight": "1 lb.",
    "notes": "An excellent gnomish tobacco whose processing is a strict secret, and one of the most sought-after blends. It produces a very mellow smoke that conjures up pleasant memories from those who are near it.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mountain-mist-tobacco",
    "name": "Mountain Mist",
    "category": "gear",
    "cost": "7 sp",
    "weight": "1 lb.",
    "notes": "A dwarven tobacco blend named for the resemblance its smoke supposedly bears to mist in mountain valleys on cold mornings. It is very harsh and bitter, and few people besides dwarves care to smoke it or be near it.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "old-stoutfoot-tobacco",
    "name": "Old Stoutfoot",
    "category": "gear",
    "cost": "4 gp",
    "weight": "1 lb.",
    "notes": "A fine halfling tobacco blend that produces a thick but pleasant smoke faintly redolent of spices.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poor-bastard-tobacco",
    "name": "Poor Bastard",
    "category": "gear",
    "cost": "1 cp - 1 sp",
    "weight": "1 lb.",
    "notes": "A generic term for any number of low-grade tobaccos that are the exclusive province of the poor and those down on their luck. You get what you pay for.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "springtime-glade-tobacco",
    "name": "Springtime Glade",
    "category": "gear",
    "cost": "1 gp",
    "weight": "1 lb.",
    "notes": "An elven tobacco redolent of springtime smells — a mild and pleasant smoke whose underlying flower smells only a true connoisseur can pick out.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "summer-meadow-tobacco",
    "name": "Summer Meadow",
    "category": "gear",
    "cost": "2 gp",
    "weight": "1 lb.",
    "notes": "An elven tobacco blend that produces a warm and rich smoke with a hint of wood and grassy undertones.",
    "source": "Forbidden Arcana — Magical Pipes and Tobaccos: Mundane Items, p. 160",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
