/**
 * Omni sweep (2026-11-02): Eberron Campaign Setting — Chapter 6:
 * Adventuring Equipment (printed pp. 119-128) and Chapter 10: Magic
 * Items (printed pp. 259-274). Most of both chapters was already in
 * the catalog (the Chapter 6 gear tables, the dragonmark focus
 * items, channeling rods, greater dragonshard focus items, quori
 * embedded shards, bound-elemental armor and weapon properties,
 * Aureon's spellshard, everbright lantern, eternal wand, oil of
 * repair, circle of sound, and orrery of the planes) and is skipped
 * here. What was missing, and is built below: the Chapter 6 special
 * materials, specialty clothing, mounts, and letter of credit; the
 * warforged components (basic, docent, and artifact components);
 * and the Dhakaani artifacts. Prices are the printed market prices;
 * summaries are mechanical effects in our own words. Not built:
 * conductor stone (presented in Chapter 10 with no price or stat
 * block), wondrous locations and eldritch machines (immovable
 * places/plot devices, not purchasable items). Scrying shard is
 * already in the catalog from the Magic Item Compendium at a
 * different price; the conflict is recorded in the omni-sweep
 * report.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const ECS_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "armblade",
    "name": "Armblade",
    "category": "weapon",
    "cost": "2,300 gp",
    "summary": "Warforged component (attached): a +1 bastard sword fitted over the warforged's hand and forearm. While attached the warforged cannot be disarmed, gains a +2 bonus on opposed attack rolls to disarm an opponent, and deals double damage when the armblade is set against a charge. Requires Exotic Weapon Proficiency (bastard sword) to use without penalty.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 268",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "armbow",
    "name": "Armbow",
    "category": "weapon",
    "cost": "20,000 gp",
    "summary": "Warforged component (attached): a +2 repeating light crossbow of densewood that covers the warforged's hand and fires by thought as a standard action. It magically creates its own bolts (case holds 5), up to 20 per day for free; further bolts cost 1 hit point each, and 3 hit points make a bolt aligned as by align weapon. It cannot fire normal bolts.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 268",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "battlefist",
    "name": "Battlefist",
    "category": "weapon",
    "cost": "2,600 gp",
    "summary": "Warforged component (attached): a +1 oversized spiked gauntlet locked over the warforged's hand. It raises the warforged's natural slam damage to 1d8 (Medium), and a warforged monk using one deals unarmed damage as though one size larger and adds its enhancement bonus to unarmed attack and damage rolls.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, pp. 268-269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "disk-of-energy-resistance",
    "name": "Disk of Energy Resistance",
    "category": "wondrous-throat",
    "cost": "12,000 gp (minor); 28,000 gp (major); 44,000 gp (greater)",
    "summary": "Warforged component (embedded, occupies the body as an amulet): a rune-engraved metallic disk set into the warforged's chest that grants resistance to one chosen energy type (acid, cold, electricity, fire, or sonic) — 10 points for a minor disk, 20 for a major disk, and 30 for a greater disk.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "essence-of-the-scout",
    "name": "Essence of the Scout",
    "category": "wondrous-throat",
    "cost": "5,000 gp",
    "summary": "Warforged component (embedded, occupies the body as an amulet): a dark metal disk engraved with symbols of silence and stealth that grants the warforged a +5 competence bonus on Hide and Move Silently checks.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "essence-of-the-scout-improved",
    "name": "Essence of the Scout, Improved",
    "category": "wondrous-throat",
    "cost": "20,000 gp",
    "summary": "Warforged component (embedded, occupies the body as an amulet): as essence of the scout, except it grants a +10 competence bonus on Hide and Move Silently checks.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "essence-of-the-scout-greater",
    "name": "Essence of the Scout, Greater",
    "category": "wondrous-throat",
    "cost": "45,000 gp",
    "summary": "Warforged component (embedded, occupies the body as an amulet): as essence of the scout, except it grants a +15 competence bonus on Hide and Move Silently checks.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "final-messenger",
    "name": "Final Messenger",
    "category": "wondrous-throat",
    "cost": "6,000 gp",
    "summary": "Warforged component (embedded, occupies space as an amulet): a clockwork-and-filigree construct the host can load with a destination, a target individual, an image of what the host currently sees, and a message of up to 25 words, then release to fly (60 ft., perfect) and deliver it to any warforged who attaches it. If the host is destroyed, it flies out at once carrying the last thing the slain warforged saw; unattached it stays active for up to 8 hours, recharging 1 minute per minute attached.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "wand-sheath",
    "name": "Wand Sheath",
    "category": "wondrous-arms",
    "cost": "4,000 gp",
    "summary": "Warforged component (embedded, occupies the body as a bracer): a narrow sheath in the forearm and hand into which a single normal wand is inserted and merges with the warforged's body. The sheathed wand can be activated without retrieving it — even in silence or while grappling — and drops out of the sheath once all its charges are used, after which a new wand can be inserted.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 269",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "docent",
    "name": "Docent",
    "category": "wondrous-throat",
    "cost": "2,500 gp (base price, plus docent power modifiers)",
    "summary": "Warforged component (attached, occupies the body as an amulet): an intelligent metal sphere from Xen'drik that advises its warforged host telepathically and serves as a translator (all docents speak Giant and Common, plus more languages as its Intelligence allows). Each docent has 1d4 powers rolled or chosen from the docent powers table (for example deathwatch continually, detect magic at will, 10 ranks in a skill, or haste on its owner 1/day), each adding its listed price modifier. A warforged can attach only one docent at a time.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, pp. 269-270",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "circlet-of-preservation",
    "name": "Circlet of Preservation",
    "category": "artifact",
    "cost": "—",
    "summary": "Artifact warforged component (attached): a torc of spell-hardened adamantine (hardness 25, 50 hp, self-repairing 1 hp per round) worn at the neck. It absorbs the consciousness of a warforged whose body is critically damaged and restores 1 hit point every 10 minutes, even from below -9 hp; once the bearer rises above -9 hp his consciousness returns. A stored mind acts as a docent, and if another warforged dons the circlet the two minds contest control of the body with opposed Will saves, repeatable once every 24 hours.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 270",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "tauric-belt",
    "name": "Tauric Belt",
    "category": "artifact",
    "cost": "—",
    "summary": "Artifact warforged component (attached): a belt of woven mithral threads that lets the warforged transform its lower body into a leonine construct form as a standard action. In tauric form the warforged grows one size category, gains +10 feet of base speed, +4 Strength, +2 Constitution, and two secondary claw attacks dealing 1d4 damage.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 270",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "ash-spear-of-thakash-rin",
    "name": "Ash Spear of Thakash Rin",
    "category": "artifact",
    "cost": "—",
    "summary": "Dhakaani artifact: a +4 aberration bane spear carved from densewood, once borne by an orc Gatekeeper. A wielder with the Repel Aberration feat can use it to smite aberrations up to three times per day, adding his Charisma bonus to the attack roll and his druid level to the damage.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, pp. 271-272",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "breastplate-of-kamvuul-norek",
    "name": "Breastplate of Kamvuul Norek",
    "category": "artifact",
    "cost": "—",
    "summary": "Dhakaani artifact: a +3 medium fortification adamantine breastplate that also grants its wearer power resistance 17. If the wearer makes a successful saving throw against a mind blast attack, the mind blast rebounds on the attacker without affecting the wearer.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "ghaalduur-the-mighty-dirge",
    "name": "Ghaal'duur, the Mighty Dirge",
    "category": "artifact",
    "cost": "—",
    "summary": "Dhakaani artifact: a 3-foot horn carved from a red dragon's horn tip, banded with adamantine; using it properly requires at least 12 ranks in Perform. A bard who sounds it gains a +5 bonus on Perform checks involving music, the saving throw DCs of his bard spells and spell-like abilities used with the horn rise by 3, those spells are enlarged and extended, and his inspire courage morale bonus increases by +2 out to 1,000 feet while enemies within 1,000 feet take a -2 morale penalty on attack rolls, damage rolls, and saves against charm and fear — bonuses and penalties doubled against goblinoids.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "mace-of-thundering-vengeance",
    "name": "Mace of Thundering Vengeance",
    "category": "artifact",
    "cost": "—",
    "summary": "Dhakaani artifact: a +6 aberration bane thundering heavy mace made of byeshk, forged for the war against the daelkyr. In addition to its thundering property, the wielder can strike it against the ground to create an effect identical to the shout spell, sounding as rumbling thunder.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "resplendent-armor-of-dhaakaan",
    "name": "Resplendent Armor of Dhakaan",
    "category": "artifact",
    "cost": "—",
    "summary": "Dhakaani artifact: a suit of +4 heavy fortification full plate with spell resistance 19, forged for an ancient hobgoblin emperor. The armor itself is under a permanent nondetection effect (warding the armor only, not its wearer), and it grants the wearer a +10 enhancement bonus to Charisma and the use of heroism at will at caster level 20th.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "eberron"
  }
];

export const ECS_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "clothing-darkweave",
    "name": "Clothing, Darkweave",
    "category": "gear",
    "cost": "+100 gp",
    "weight": "—",
    "notes": "Darkweave cloth added to an outfit (price is in addition to the outfit's cost). Grants the wearer a +1 circumstance bonus on Hide checks while in shadowy illumination or darkness.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "clothing-glamerweave",
    "name": "Clothing, Glamerweave",
    "category": "gear",
    "cost": "+100 gp",
    "weight": "—",
    "notes": "Glamerweave cloth added to an outfit (price is in addition to the outfit's cost). Grants the wearer a +1 circumstance bonus on Diplomacy checks, and a glamerweave outfit weighs 1 pound less than a normal outfit of the same type.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "letter-of-credit",
    "name": "Letter of Credit",
    "category": "gear",
    "cost": "Special",
    "weight": "—",
    "notes": "A bank note issued by House Kundarak recording a deposit, redeemable at any Kundarak enclave. Letters of credit are issued free of charge and are practically impossible to forge, making them the standard way to move large sums safely across Khorvaire.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "carver",
    "name": "Carver",
    "category": "gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "A domesticated dinosaur of the Talenta Plains, raised by halfling tribes as a mount and food animal. Mount (see the Eberron Campaign Setting for its statistics).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "clawfoot",
    "name": "Clawfoot",
    "category": "gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "A two-legged predatory dinosaur used as a riding mount by the halflings of the Talenta Plains. Mount (see the Eberron Campaign Setting for its statistics).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "fastieth",
    "name": "Fastieth",
    "category": "gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A small, swift bipedal dinosaur used as a riding mount by the halflings of the Talenta Plains. Mount (see the Eberron Campaign Setting for its statistics).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "glidewing",
    "name": "Glidewing",
    "category": "gear",
    "cost": "800 gp",
    "weight": "—",
    "notes": "A pterosaur used as a flying mount by the halflings of the Talenta Plains; requires an exotic saddle. Mount (see the Eberron Campaign Setting for its statistics).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "valenar-riding-horse",
    "name": "Valenar Riding Horse",
    "category": "gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "A riding horse bred by the elves of Valenar, prized across Khorvaire for its speed and endurance. Mount (see the Eberron Campaign Setting for its statistics).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "magebred-animal",
    "name": "Magebred Animal",
    "category": "gear",
    "cost": "×2 (twice the price of the mundane animal)",
    "weight": "—",
    "notes": "An animal bred by House Vadalis using arcane techniques; a magebred animal costs twice the price of the equivalent mundane animal and is superior to it (typically hardier and easier to train, per the magebred traits in the Eberron Campaign Setting).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bronzewood",
    "name": "Bronzewood",
    "category": "gear",
    "cost": "Medium armor +4,000 gp; heavy armor +9,000 gp; other items +500 gp per lb.",
    "weight": "—",
    "notes": "Special material: a dense hardwood of Aerenal with the strength of metal (hardness 10, 20 hit points per inch of thickness). Bronzewood items weigh 10% less than steel equivalents, and the armor check penalty of bronzewood armor does not apply to Hide checks made in woodland settings.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "byeshk",
    "name": "Byeshk",
    "category": "gear",
    "cost": "Weapons +1,500 gp",
    "weight": "—",
    "notes": "Special material: a heavy purple-black metal from the Byeshk mountains (hardness 17, 35 hit points per inch of thickness), weighing 50% more than steel. A bludgeoning weapon made of byeshk gains a +1 enhancement bonus on damage rolls (this does not stack with the weapon's own enhancement bonus), and byeshk weapons overcome the damage reduction of daelkyr and their creations.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "densewood",
    "name": "Densewood",
    "category": "gear",
    "cost": "×2 (item costs twice as much)",
    "weight": "—",
    "notes": "Special material: an exceptionally hard, heavy wood (hardness 8, 20 hit points per inch of thickness). A densewood item weighs twice as much as a normal wooden item, costs twice as much, and its break DC increases by 5. Only the wooden parts of an item can be made of densewood.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "dragonshard-material",
    "name": "Dragonshard",
    "category": "gear",
    "cost": "Special",
    "weight": "—",
    "notes": "Special material: dragonshard crystal (hardness 10, or 8 when attuned; 20 hit points per inch of thickness). Dragonshards are the raw material of dragonshard items: Siberys shards focus dragonmarks, Eberron shards store spells and psionic energy, and Khyber shards bind creatures and elementals. Price varies with the shard's type, size, and purity.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "flametouched-iron",
    "name": "Flametouched Iron",
    "category": "gear",
    "cost": "Weapons and armor +1,000 gp; holy symbol 750 gp",
    "weight": "—",
    "notes": "Special material: iron mined around Thrane and blessed by the Church of the Silver Flame (hardness 10, 30 hit points per inch of thickness). Flametouched iron weapons count as good-aligned for overcoming damage reduction; flametouched iron armor grants a +1 resistance bonus on saving throws against the spells and abilities of evil outsiders; a flametouched iron holy symbol lets its bearer turn or censure as if one level higher.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "livewood",
    "name": "Livewood",
    "category": "gear",
    "cost": "×1.5 (item costs half again as much)",
    "weight": "—",
    "notes": "Special material: greenwood harvested in Aerenal that remains alive after being cut and worked (hardness 6, 10 hit points per inch of thickness). Livewood items cost half again as much as normal wooden items.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "riedran-crysteel",
    "name": "Riedran Crysteel",
    "category": "gear",
    "cost": "Weapons +1,500 gp",
    "weight": "—",
    "notes": "Special material: a Sarlonan alloy of metal and crystal (hardness 10, 20 hit points per inch of thickness). A crysteel weapon grants a wielder who has at least 1 power point a +1 enhancement bonus on damage rolls (this does not stack with the weapon's own enhancement bonus), and crysteel grants a +4 bonus on saving throws against shatter effects.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood",
    "name": "Soarwood",
    "category": "gear",
    "cost": "Boats and ships ×4 cost",
    "weight": "—",
    "notes": "Special material: exceptionally light, buoyant wood from Aerenal (hardness 5, 10 hit points per inch of thickness), weighing only 75% as much as normal wood. A vessel built with soarwood costs four times as much as normal but travels at twice its usual speed. (Specific soarwood vessels are listed separately in the equipment catalog.)",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "targath",
    "name": "Targath",
    "category": "gear",
    "cost": "Ammunition +3 gp; light weapon +30 gp; one-handed weapon or one head of a double weapon +100 gp; two-handed weapon or both heads of a double weapon +200 gp",
    "weight": "—",
    "notes": "Special material: cold iron mined in the Mror Holds and treated by the dwarves to resist the touch of the deathless (hardness 9, 20 hit points per inch of thickness). A creature wearing or carrying a targath item gains a +2 resistance bonus on Fortitude saves against disease, and targath weapons overcome the damage reduction of deathless; targath weapons take a -1 penalty on attack and damage rolls.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment",
    "sourceUrl": "",
    "ruleset": "eberron"
  }
];
