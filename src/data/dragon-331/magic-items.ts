// Dragon Magazine #331 (May 2005) — magic item draft: 24 records.
// ELEVEN wondrous vehicles — "Fast, Furious, and Fantastical" (Frank
// Brunner), pp. 37-39 (the article's real title; the survey listed it as
// "Wondrous Vehicles"). NINE cursed items — "Bazaar of the Bizarre:
// Insidious Items" (Timothy T. Murphy), pp. 64-67, staged as printed
// (curses are items, not lore). THREE marine magic items and ONE paladin
// item from Class Acts columns the survey did not itemize: "Marine
// Munitions" (Troy E. Taylor), p. 88, and "Knightly Effects" (Amber E.
// Scott), p. 90.
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 37-39, 65, 67, 88, 90); the folio-66 rod and
// ring lines were read from the OCR stream of a clean scan page. The
// image governs over the OCR stream.
// ⚠️ APOC FLAGS — see SCREENING.md: five vehicles fly or hover ( barred
// over the Bastion by the Melairshield; they stage as printed, as items);
// the dune yacht binds an efreeti by planar binding and the chariot of
// Sustarre works by "summoning" under severed-planar canon; the ghost
// mantle teleports itself and the walking staff casts tree stride (a
// teleportation-subschool spell, cf. the issue-330 Crushing Coils
// precedent); the mask of the sun's radiance is powered by natural
// sunlight in a world whose sky is always grey. All flagged, none
// silently altered.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_VEHICLES = "Dragon Magazine #331 — Fast, Furious, and Fantastical (Frank Brunner), pp. 37-39";
const SRC_BAZAAR = "Dragon Magazine #331 — Bazaar of the Bizarre: Insidious Items (Timothy T. Murphy), pp. 64-67";
const SRC_MARINE = "Dragon Magazine #331 — Class Acts: Marine Munitions (Troy E. Taylor), p. 88";
const SRC_KNIGHTLY = "Dragon Magazine #331 — Class Acts: Knightly Effects (Amber E. Scott), p. 90";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_VEHICLES,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_331_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Fast, Furious, and Fantastical: wondrous vehicles (11) ----
  M({
    id: "adamantine-carriage",
    name: "Adamantine Carriage",
    cost: "15,500 gp",
    summary:
      "Vehicle (wondrous item) — a carriage constructed entirely of adamantine: it has 40 hit points and hardness 20. Two heavy horses are required to pull the adamantine carriage, and it can move 30 feet per round fully loaded or 40 feet per round when empty. A version of the carriage protected by a nondetection spell requires a DC 16 caster level check to locate with divination spells or effects, and costs 45,500 gp instead of 15,500 gp. Faint abjuration; CL 5th; Craft Wondrous Item, nondetection; Weight —.",
  }),
  M({
    id: "beholder-globe",
    name: "Beholder Globe",
    cost: "120,000 gp",
    summary:
      "Vehicle (wondrous item) — a magical conveyance created from the husk of a beholder. The interior is roomy enough to hold one Medium-size or two Small creatures. Like a normal beholder, a beholder globe can fly at a speed of 15 feet per round with good maneuverability. It provides its occupants with improved cover (see page 151 of the Player's Handbook). The dead beholder's eyestalks fire eye rays with a range of 60 feet (limited to the pilot's line of sight): inflict moderate wounds, sleep, slow, and telekinesis (all Will or Fortitude DC 15, as appropriate to the ray). A beholder globe can descend up to 2,000 feet below the water's surface before the pressure crushes it or its occupants. The body of a beholder globe has AC 20, 65 hit points, and hardness 10. Moderate necromancy and enchantment; CL 11th; Craft Wondrous Item, animate objects, gentle repose, inflict moderate wounds, sleep, slow, telekinesis; Weight 5,000 lb. APOC: a flying vessel — see SCREENING.md.",
  }),
  M({
    id: "chariot-of-sustarre",
    name: "Chariot of Sustarre",
    cost: "80,000 gp",
    summary:
      "Vehicle (wondrous item) — this small, copper-colored trinket is the wondrous form of the druid spell chariot of Sustarre; when activated, it grows into a full-sized flying flame chariot drawn by fiery horses, which can fly at a speed of 100 feet with perfect maneuverability and move overland at 42 miles per hour. Riders are immune to fire, and their weapons gain the flaming burst property while aboard; other creatures within 10 feet of the chariot take 1d6 points of fire damage per round. The chariot can be activated for 12 hours, after which it requires an entire week before it can be used again. At any time, the chariot's owner can cause it to detonate as a delayed blast fireball dealing 13d6 points of fire damage (DC 20 Reflex save for half); this destroys the chariot. Strong conjuration and evocation; CL 13th; Craft Wondrous Item, animate objects, delayed blast fireball, produce flame, wall of fire, wind walk; Weight —. APOC: a flying vessel whose text works by \"summoning\" — see SCREENING.md.",
  }),
  M({
    id: "dragonfly-longship",
    name: "Dragonfly Longship",
    cost: "175,000 gp",
    summary:
      "Vehicle (wondrous item) — this strange vessel is crafted in the form of a giant dragonfly, with an ornate and beautifully decorated long tail that curves up and over its aft deck. The wings of the dragonfly longship allow it to fly at a speed of 60 feet with average maneuverability; it can sail on the surface like a normal ship and can move overland at 30 miles per hour. Every 1d4 rounds, the dragonfly longship can use its tail to spray a ball of acid, up to a range of 200 feet, that explodes in a 10-foot burst dealing 8d6 points of acid damage (DC 15 Reflex save for half). In addition, creatures that take damage from the acid continue to take 1d6 points of acid damage per round for 3 rounds unless the acid is thoroughly rinsed off (requiring a full-round action) or the creature is entirely immersed in water. Strong transmutation and evocation; CL 17th; Craft Wondrous Item, fly, limited wish, Melf's acid arrow; Weight —. APOC: a flying vessel — see SCREENING.md.",
  }),
  M({
    id: "dune-yacht",
    name: "Dune Yacht",
    cost: "150,000 gp",
    summary:
      "Vehicle (wondrous item) — this vessel is specifically designed to sail over sandy terrain, using the magic that powers it to travel over dunes and a small cushion of air that forms beneath it. An efreeti is bound to the helm of this vessel; it can be called forth to serve the ship once per week, remaining for 1 hour. If the efreeti is forced to grant a wish, the dune yacht immediately burns to the keel and the efreeti is freed; a wish granted by the dune yacht's efreeti is usually twisted to catastrophic effect. The hull and other parts of the yacht are extraordinarily tough, with 120 hit points and hardness 8 per 10-foot section. A dune yacht has fire resistance 5, which extends to its passengers. Characters on board a dune yacht require only half the normal amount of water each day. Strong transmutation and conjuration; CL 17th; Craft Wondrous Item, limited wish, move earth, planar binding, resist elements; Weight —. APOC: a bound planar creature under severed-planar canon — flagged prominently in SCREENING.md.",
  }),
  M({
    id: "juggernaut-chariot",
    name: "Juggernaut Chariot",
    cost: "10,000 gp",
    summary:
      "Vehicle (wondrous item) — this large magical chariot grants any animals or creatures pulling it the trample special attack. Trample damage for a creature pulling a juggernaut chariot is computed as a slam attack for a creature of its size plus 1-1/2 times its Strength modifier. Moderate transmutation; CL 9th; Craft Wondrous Item, bull's strength; Weight —.",
  }),
  M({
    id: "longship-of-dread-shade",
    name: "Longship of Dread Shade",
    cost: "175,000 gp",
    summary:
      "Vehicle (wondrous item) — by daylight this vessel appears to be a normal longship, but at night it can fly at a speed of 40 feet per round and gains a crew of undead sailors: twenty zombies and skeletons led by two wight lieutenants and a spectre first mate. The undead crew gains turn resistance +6 while aboard, and must kill at least one living creature each night or it turns on the captain (who must succeed at a Diplomacy check, DC 15 + the number of nights since the last kill, to avert mutiny). The captain's alignment shifts one step toward evil for each night the crew kills. The undead vanish at sunrise, and a full complement rises again at each sunset. Strong necromancy; CL 15th; Craft Wondrous Item, animate dead, create greater undead, fly; Weight —. APOC: a flying, undead-crewed vessel — see SCREENING.md.",
  }),
  M({
    id: "palanquin-of-beguilement",
    name: "Palanquin of Beguilement",
    cost: "4,800 gp",
    summary:
      "Vehicle (wondrous item) — this beautifully appointed palanquin requires four bearers to lift it. When it carries a passenger with its full complement of bearers, the rider gains a +4 enhancement bonus on all Bluff, Diplomacy, and Intimidate checks. Faint enchantment; CL 5th; Craft Wondrous Item, eagle's splendor; Weight 60 lb.",
  }),
  M({
    id: "smugglers-wagon",
    name: "Smuggler's Wagon",
    cost: "32,000 gp",
    summary:
      "Vehicle (wondrous item) — this wagon is surrounded by a permanent illusion that makes the wagon bed appear empty. Anyone interacting with the wagon (such as by putting something in it) can make a DC 18 Will save to see through the illusion. The wagon is also affected by a Nystul's magic aura spell so that it does not detect as a magic item. Aura none; CL 13th; Craft Wondrous Item, major image, Nystul's magic aura, veil; Weight —.",
  }),
  M({
    id: "snipers-carriage",
    name: "Sniper's Carriage",
    cost: "16,000 gp",
    summary:
      "Vehicle (wondrous item) — this carriage can hold two passengers standing upright. Those inside gain improved cover against attackers outside the carriage, and anyone firing a ranged weapon from within it ignores the first two range-increment penalties. Moderate divination; CL 5th; Craft Wondrous Item, clairaudience/clairvoyance; Weight —.",
  }),
  M({
    id: "worm-raft",
    name: "Worm Raft",
    cost: "20,000 gp",
    summary:
      "Vehicle (wondrous item) — this mass of disgusting grubs forms a 10-foot by 10-foot platform that can carry up to 500 pounds and moves up to 30 feet per round, hovering about 3 feet above the ground (it moves at a vocal command from its owner, like a carpet of flying). Once per day, the worm raft can disperse into a centipede swarm (which remains under its owner's control) for up to 1 hour before reforming into the raft. In raft form, the worm raft has 31 hit points and hardness 10, and heals 4 hit points of damage every day. Strong conjuration; CL 9th; Craft Wondrous Item, insect plague; Weight 300 lb. APOC: a hovering vessel — see SCREENING.md.",
  }),
  // ---- Bazaar of the Bizarre: Insidious Items (cursed) (9) ----
  M({
    id: "arrow-of-bursting",
    name: "Arrow of Bursting",
    category: "ammunition",
    cost: "100 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed ammunition — this arrow's shaft has numerous shallow carvings of flames running from its black, wrought-iron tip to its red, orange, and yellow fletching. Disguised by a Nystul's magic aura to appear as a +1 arrow (DC 11 Will save to disbelieve, if you cast identify on it), this arrow explodes in a fiery burst when nocked and drawn, burning the archer and cutting the bowstring. It deals 2d6 points of fire damage (DC 18 Reflex save for half). Failing the save snaps the bowstring, which must be replaced; a severed bowstring requires 1 round to replace. Faint evocation; CL 5th; Craft Magic Arms and Armor, burning hands, Nystul's magic aura; Weight —. Cursed item, staged as printed.",
  }),
  M({
    id: "ghost-mantle",
    name: "Ghost Mantle",
    cost: "100,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed wondrous item (cloak) — an old gray cloak, tattered and musty, with a clasp in the form of an elongated, screaming ghostly face. Once the clasp is done, the wearer (and all of his equipment) becomes incorporeal. He also gains the manifestation ability, horrific appearance, and corrupting touch attack, as per the ghost template (see page 117 of the Monster Manual). The wearer also gains the same immunity to effects that require Fort saves as a creature with the undead type. In exchange for this power, the mantle slowly feeds off the wearer's life force: immediately upon donning it the wearer suffers 1 point of Constitution drain, and he takes an additional 1 point of Constitution drain every round thereafter until slain or he removes the mantle. The mantle hides this damage from the wearer, although he can make a DC 20 Wisdom check to realize this weakening. If the wearer's Constitution score reaches 0 while wearing the ghost mantle (whether from the mantle's drain effect or from another source), the ghost mantle immediately teleports 1d100 miles in a random direction (it never appears within a solid object). An hour later, the slain wearer becomes a chaotic evil ghost who cannot be laid to rest until the cloak is destroyed. Strong necromancy and transmutation; CL 17th; Craft Wondrous Item; create greater undead; Weight 3 lb. Cursed item, staged as printed. APOC: the mantle teleports itself — see SCREENING.md.",
  }),
  M({
    id: "mask-of-the-suns-radiance",
    name: "Mask of the Sun's Radiance",
    cost: "10,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed wondrous item (face) — a beautiful mask sewn together from the petals of brightly colored flowers; when first donned it simply surrounds the wearer's face with a feathery sunburst, molding slightly to fit comfortably. The wearer can still remove the mask simply by pulling it away until the sun's rays alight upon it. Once the sun touches it, the mask bonds with the wearer's face, becoming a part of it, and can only be removed with a successful break enchantment, miracle, remove curse, or wish; any attempt to remove the bonded mask other than casting the aforementioned spells deals 1d6 points of damage to the wearer. Once the mask has bonded to his face, whenever the wearer is in natural sunlight the mask grants him a +4 enhancement bonus to Charisma. When the wearer is away from sunlight for any amount of time, he loses this bonus and suffers a -6 penalty to his Charisma score. Moderate transmutation; CL 8th; Craft Wondrous Item, bestow curse, eagle's splendor; Weight 1 lb. Cursed item, staged as printed. APOC: the mask is powered by natural sunlight in a sunless world — flagged prominently in SCREENING.md.",
  }),
  M({
    id: "ring-of-breathing-water",
    name: "Ring of Breathing Water",
    category: "ring",
    cost: "6,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed ring — the wearer of this ring can breathe water freely for an unlimited amount of time as long as he is completely underwater; however, he is unable to breathe air when above water and suffocates (see page 304 of the Dungeon Master's Guide for the rules on holding one's breath). Once placed on a finger while underwater, the ring can only be removed if a remove curse spell is cast on the wearer. Moderate transmutation; CL 12th; Forge Ring, freedom of movement, water breathing. Cursed item, staged as printed.",
  }),
  M({
    id: "rod-of-animated-dead",
    name: "Rod of Animated Dead",
    category: "rod",
    cost: "24,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed rod — made from the femur of a large humanoid, this rod can be activated up to five times per day. Each time it is activated, it functions like the animate dead spell in a 30-foot burst centered on the bearer, animating up to 10 HD of skeletons and zombies per activation, starting with the corpses closest to the wielder. The undead animated by the rod are not under the control of the rod's bearer and immediately attack any living creatures nearby, preferring to attack the rod's wielder. Moderate necromancy; CL 5th; Craft Rod, animate dead; Weight 2 lb. Cursed item, staged as printed.",
  }),
  M({
    id: "rod-of-delusions",
    name: "Rod of Delusions",
    category: "rod",
    cost: "20,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed rod — this rod appears, and identifies, as a rod of enemy detection, and functions as one: enemies scanning as hostile ping the wielder's mind. But if the wielder concentrates for a full round to pinpoint an enemy's location, he must make a DC 19 Will save or become delusional, attacking the nearest creatures (typically his allies) until all creatures he can see are dead, unconscious, or out of sight; he is fatigued once the delusion ends. The rod also functions as a +1 light mace, and a deluded wielder uses it in preference to any other weapon. Strong enchantment; CL 10th; Craft Rod, confusion, true seeing; Weight 4 lb. Cursed item, staged as printed.",
  }),
  M({
    id: "singing-ioun-stone",
    name: "Singing Ioun Stone",
    cost: "12,000 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed wondrous item (ioun stone) — disguised as another sort of ioun stone, this stone causes its victim to hear twenty drunken voices singing at all times. A victim who attempts to cast a spell must make a Concentration check (DC 20 + the level of the spell) or lose the spell; skill checks not based on Strength or Constitution take a +10 increase to their DCs, and the victim cannot take 10 or take 20 on any check. A dispel magic or protection from evil spell suppresses the song for 1 minute per caster level. The victim must make a DC 16 Fortitude save each night to gain the benefits of rest and prepare spells normally. Removing the stone forcibly causes it to freeze in place and wail, dealing 1d6 points of sonic damage to every creature within 30 feet and 1d6 points of Intelligence damage to the stone's victim; a break enchantment, miracle, remove curse, or wish spell allows the safe removal of the stone. Moderate evocation; CL 12th; Craft Wondrous Item, shout; Weight —. Cursed item, staged as printed.",
  }),
  M({
    id: "spellbook-of-dissolution",
    name: "Spellbook of Dissolution",
    cost: "6,250 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed wondrous item (book) — when one of these onerous tomes is first found, it appears to be a perfectly normal empty spellbook; a Nystul's magic aura spell masks the book's terrible magical secret. Whenever a wizard scribes a spell into a spellbook of dissolution, the spell scribed within becomes unreadable gibberish that even the wizard who scribed it cannot understand. The garbled spells resist any attempt at deciphering them, as if of too high a level for the reader to understand: Decipher Script checks automatically fail, as do any attempts to read magic. Even a wish cannot reveal what the text means (as it is ultimately magically shrouded complex gibberish). The garbling process takes 2 hours per level of the spell inscribed (a 0-level spell requires only 1 hour), and begins as soon as the spellbook is closed after the wizard first inscribes the spell. In addition, if the book is left in contact with another spellbook, the spells within the other tome begin to garble at the same rate, beginning with the lowest-level spells first; this process is halted whenever the other spellbook is moved away from the spellbook of dissolution. Moderate transmutation; CL 7th; Craft Wondrous Item, secret page; Weight 3 lb. Cursed item, staged as printed.",
  }),
  M({
    id: "walking-staff",
    name: "Walking Staff",
    category: "staff",
    cost: "39,500 gp",
    source: SRC_BAZAAR,
    summary:
      "Cursed staff — made of ash or oak, this 6-foot-long staff bears carvings of several kinds of animal tracks running its length. A walking staff allows use of the following spells: freedom of movement (1 charge), longstrider (1 charge), pass without trace (1 charge), find the path (2 charges), tree stride (2 charges). The staff carries a dangerous flaw: every time the wielder uses one of the staff's spells, there is a 3% per charge cumulative chance that she is struck by a 5d6 lightning bolt originating just above her head that strikes only her (DC 14 Reflex save for half). The chance cannot exceed 95%. Once a lightning bolt strikes, the wielder's cumulative chance of being struck by another one is cut in half (but it accumulates as normal), and a specific wielder's cumulative chance remains with her even if she uses a different walking staff. Strong varied; CL 12th; Craft Staff, find the path, freedom of movement, longstrider, pass without trace, tree stride; Weight 4 lb. Cursed item, staged as printed. APOC: the staff casts tree stride, a teleportation-subschool spell — see SCREENING.md.",
  }),
  // ---- Class Acts: Marine Munitions — magic items (3) ----
  M({
    id: "battle-rattle",
    name: "Battle Rattle",
    cost: "3,000 gp",
    source: SRC_MARINE,
    summary:
      "Wondrous item — a hollow piece of wood containing a reed attached to a handle with a gear that raps against the reed when spun. Playing the battle rattle helps inspire the crew, conferring upon all allies within 30 feet a +1 morale bonus on any one skill check or attack roll made within the next round. It is effective only once per encounter, and it has no effect outside of combat. A character using bardic music and a battle rattle in conjunction with the inspire courage ability increases the morale bonus granted by +1. Faint enchantment; CL 5th; Craft Wondrous Item, heroism; Weight 1 lb.",
  }),
  M({
    id: "captain-rogers-battle-rattle",
    name: "Captain Rogers's Battle Rattle",
    cost: "14,100 gp",
    source: SRC_MARINE,
    summary:
      "Wondrous item — this magically enhanced wood instrument summons the crew to battle stations by making a repetitive clacking sound when the head is swiveled around the handle. Captain Rogers's battle rattle grants all the bonuses of a normal battle rattle. Once per day, it can also be used to protect all allies within 30 feet with a protection from arrows spell; once activated, this effect lasts for 7 hours or until 70 points of damage have been prevented. Faint abjuration; CL 3rd; Craft Wondrous Item, protection from arrows; Weight 1 lb.",
  }),
  M({
    id: "fire-bucket",
    name: "Fire Bucket",
    cost: "3,000 gp",
    source: SRC_MARINE,
    summary:
      "Wondrous item — when held by its rough rope handle, this plain-looking wood bucket sealed with pitch magically fills with 3 gallons of fresh water. It takes one round to completely fill. The item's stat line (Weight 1 lb) disagrees with the article's Marine Gear table (2 lb. empty); the stat line is carried and the conflict disclosed in the pack MANIFEST. Faint conjuration; CL 3rd; Craft Wondrous Item, create water; Weight 1 lb.",
  }),
  // ---- Class Acts: Knightly Effects — magic item (1) ----
  M({
    id: "engraved-pommel",
    name: "Engraved Pommel",
    cost: "1,000 gp",
    source: SRC_KNIGHTLY,
    summary:
      "Weapon enhancement (magic) — warriors decorate their weapons for many reasons, but paladins often do so as a sign of piety and faith, dedicating their weapons to their deities' service. Engraving the pommel of a weapon with sacred iconography also infuses it with a small bit of divinity: a weapon with an engraved pommel deals +1 point of damage when used to make a successful smite attack. If the weapon does not possess a pommel, the paladin can engrave its blade, haft, or another suitable area. Like the other enhancement items in the column, an engraved pommel can only be applied to a masterwork or magical weapon. Faint evocation (good); CL 1st; creator must be paladin; Weight —.",
  }),
];
