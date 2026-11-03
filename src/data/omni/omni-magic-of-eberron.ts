/**
 * Omni sweep (2026-11-02): Magic of Eberron — Chapter 5: Magic Items
 * and Equipment (printed pp. 109-142): artificer items, dragonshard
 * items (Siberys, quori, Eberron, and Khyber shard items), elemental
 * vessels, minor schemas, daelkyr items, psionic items, warforged
 * components, grafts (deathless, elemental, and plant), and the
 * Additional Goods and Services section (weapons, armor, clothing,
 * special substances, documents, and new special materials). Prices
 * are the printed market prices from each entry's own stat block;
 * summaries are mechanical effects in our own words. Already in the
 * catalog from the Magic Item Compendium and skipped here: Cannith
 * goggles, infinite scrollcase, ring of master artifice, spare hand,
 * wand bracelet, empowered spellshard, truelight lantern, bracers of
 * wind, earthplate armor, fiery tunic, gloves of flame, rock boots,
 * water cloak, water whip, and shirt of the leech — where the MIC
 * price differs from Magic of Eberron's, the conflict is recorded in
 * the omni-sweep report (the chapter's summary tables on pp. 111 and
 * 124 also disagree with several entries' own stat blocks; the stat
 * blocks govern). Grafts are not magic items and occupy no body
 * slot; they are filed as slotless wondrous entries so their prices
 * and effects are in the catalog, with the graft location and graft
 * sacrifice noted in each summary. The earth sled and tumbler are
 * filed as equipment, matching their sibling elemental vessels from
 * the Eberron Campaign Setting. Symbionts (Chapter 6) are creatures,
 * not purchasable items, and are not built.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const MOE_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "blasting-chime",
    "name": "Blasting Chime",
    "category": "wondrous-slotless",
    "cost": "19,440 gp",
    "summary": "A Siberys shard hand bell that releases a 120-foot line of sonic energy dealing 6d6 points of sonic damage (Reflex DC 15 half); sonic energy ignores hardness, making it useful against doors and fortifications. Usable three times per day, or four times per day by a character with the Least Mark of Detection. A thunderbolt chime variant deals electricity damage instead.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 112",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "dragonmark-rod",
    "name": "Dragonmark Rod",
    "category": "rod",
    "cost": "30,000 gp (Scribing); 35,000 gp (Detection); 40,000 gp (Handling); 45,000 gp (Finding or Making); 50,000 gp (Hospitality, Passage, or Sentinel); 55,000 gp (Healing, Storm, or Warding); 60,000 gp (Shadow)",
    "summary": "A densewood rod topped with a Siberys shard and the carving of one of the twelve dragonmarks. It functions only for a character bearing the matching dragonmark, and grants the spell-like abilities of that mark: least abilities up to three times per day, lesser abilities twice per day, and a greater ability once per day, at the bearer's effective dragonmark caster level (Siberys mark abilities are not granted). The bearer must supply any costly material component or focus.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 113",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "image-projector",
    "name": "Image Projector",
    "category": "wondrous-slotless",
    "cost": "1,200 gp",
    "summary": "A Siberys shard suspended in a silver hoop, usable only with the minor image ability of the least Mark of Shadow. It records up to 1 minute of an illusion you generate or of activity within 10 feet of the projector (with a recording delay of up to 1 hour), then plays the scene back as a minor image, optionally looping for up to 10 minutes; playback replicates rough sound but not intelligible speech.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 113",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "reparation-apparatus",
    "name": "Reparation Apparatus",
    "category": "wondrous-hands",
    "cost": "3,000 gp",
    "summary": "A fingerless gauntlet of repair implements set with a Siberys shard. It functions only for a character with the repair light damage ability of the least Mark of Making or the repair serious damage ability of the lesser mark; whenever the wearer uses a repair damage spell, infusion, or spell-like ability, his effective caster level for that effect increases by 4.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 114",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "truth-chime",
    "name": "Truth Chime",
    "category": "wondrous-slotless",
    "cost": "36,000 gp",
    "summary": "A hand bell struck with a Siberys shard scepter, usable once per day. Its tone produces an area dispel magic in a 30-foot radius (dispel check 1d20 + 10) and gives the wielder true seeing for 1 round within that area. It is completely ineffective against characters with the Least Mark of Detection; the recalling chime variant instead affects only Medani dragonmarked creatures, sending up to six of them plus the wielder to the Warning Guild in Wroat as by word of recall (usable once every two days).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 114",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "fuel-shard",
    "name": "Fuel Shard",
    "category": "wondrous-slotless",
    "cost": "225 gp (least); 350 gp (lesser); 800 gp (greater); 1,800 gp (Siberys)",
    "summary": "A single-use Siberys dragonshard attuned to your dragonmark. Held in hand while you use a dragonmark ability of the shard's tier or lower, it enhances that one use in a single chosen way: the variable numeric effects increase by one half (as Empower Spell), the duration doubles (as Extend Spell), or any associated DC increases by 2. The shard then crumbles to dust.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 115",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "combat-instructor",
    "name": "Combat Instructor",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "Quori embedded shard (must be implanted in a kalashtar or Inspired). Three times per day as a standard action, it grants an offensive precognition effect for 1 minute, giving a +1 insight bonus on attack rolls.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 115",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "power-link",
    "name": "Power Link",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "Quori embedded shard (must be implanted in a kalashtar or Inspired). Up to three times per day as a free action while manifesting a psionic power, the shard augments that power by 2 power points beyond your own augmentation; each additional implanted power link shard drawn on in the same action adds a further 2 power points.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 115",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "sustainer",
    "name": "Sustainer",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Quori embedded shard (must be implanted in a kalashtar or Inspired). Once implanted it is continually active, bestowing a sustenance effect: the bearer needs no food or water.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 115",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "power-repository",
    "name": "Power Repository",
    "category": "wondrous",
    "cost": "3,000 gp (1st-level power); 12,000 gp (2nd); 27,000 gp (3rd); 48,000 gp (4th)",
    "summary": "Quori embedded shard (must be implanted in a kalashtar or Inspired) storing a psionic power. Once per day, after 1 hour of meditation, you can exchange a power you know of the same level for the power stored in the shard, losing access to your own power until you meditate to swap back. The shard's tier sets the highest power level it can hold (up to 4th).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 116",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "ring-of-the-stalker",
    "name": "Ring of the Stalker",
    "category": "ring",
    "cost": "15,500 gp",
    "summary": "A ring formed from a Khyber dragonshard with an invisible stalker bound within. Once per day as a full-round action you designate one creature as your prey, gaining a +5 competence bonus on Listen, Search, Spot, and Survival checks made to locate or find it. Three times per day you can also become invisible to that prey alone (as invisibility) for 10 minutes per use.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 118",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "minor-schema",
    "name": "Minor Schema",
    "category": "scroll",
    "cost": "400 gp (1st level); 2,400 gp (2nd); 6,000 gp (3rd); 11,200 gp (4th); 18,000 gp (5th); 26,400 gp (6th)",
    "summary": "An Eberron schema: a durable strip of metal or wood etched with a magical pattern storing a single spell or infusion of up to 6th level, usable once per day as a spell completion item by any character with the spell on his class list (artificers must use Use Magic Device, as must anyone without the spell on their list; no minimum ability score is required). Spells or infusions with a costly material component, costly focus, or XP cost cannot be stored. A failed activation check leaves the schema dormant for 1d6 days.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 122",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "husk-of-infinite-worlds",
    "name": "Husk of Infinite Worlds",
    "category": "artifact",
    "cost": "—",
    "summary": "Daelkyr artifact: a 10-foot egglike mass grown from a quiescent daelkyr. A Large or smaller seed creature placed inside is exposed to rapidly spinning pseudo-realities and mutates; any creature within 20 feet of an activated husk must succeed on a DC 20 Will save each round or be affected as by a confusion spell. Properly controlling the husk requires a DC 45 Knowledge (arcana) check; uncontrolled seed creatures risk devolving into protoplasm, while rare survivors gain new abilities determined by the DM.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 123",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "monocle-of-tolerance",
    "name": "Monocle of Tolerance",
    "category": "wondrous-face",
    "cost": "3,500 gp",
    "summary": "A monocle of purplish quartz made for use near a husk of infinite worlds. Fitted to one eye as part of a move action, its glass turns black; within 60 feet of a husk you can see through it normally, see in regular and magical darkness to 20 feet, and are immune to the husk's external confusion effect. Away from a husk, nothing can be seen through the activated monocle.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 123-124",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "truth-lens",
    "name": "Truth Lens",
    "category": "wondrous-face",
    "cost": "13,000 gp",
    "summary": "A crystal lens worn in one eye, activated once per week as a standard action while visualizing a question. It reveals the direction to the nearest sentient creature within 500 feet that knows the answer (or tells you at once that no such creature is in range), and identifies that creature when you come within 5 feet of it; it grants no other information and no way to compel an answer.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 124",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "amulet-of-enemy-detection",
    "name": "Amulet of Enemy Detection",
    "category": "wondrous-throat",
    "cost": "18,000 gp",
    "summary": "A Riedran crysteel amulet attuned to its wearer by 1 hour of meditation. It bestows a continual detect hostile intent effect: you sense the presence and direction of creatures within 30 feet that intend you harm, cannot be surprised or caught flat-footed by creatures within 30 feet that are susceptible to mind-affecting powers, and can make a Sense Motive check as a free action against any creature within 30 feet.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 124",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "galvanic-crysteel-blade",
    "name": "Galvanic Crysteel Blade",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "A Riedran crysteel weapon that can be charged with psionic power (a standard action, once per day; the blade stores up to 20 power points). On a melee attack you may allocate up to 5 stored power points before rolling, adding that many points as a bonus on the damage roll if the attack hits (the points are lost on a miss). The crysteel itself also grants +1 enhancement bonus on damage while you have at least 1 power point.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 125",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "expanded-reservoir",
    "name": "Expanded Reservoir",
    "category": "wondrous-throat",
    "cost": "18,000 gp",
    "summary": "Warforged component: a crystal shard embedded in the chest or skull of a warforged with the Psiforged Body feat (occupying the amulet or headband body slot, respectively). It increases the storage capacity of the psiforged body by 6 power points.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 125",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "power-crystal",
    "name": "Power Crystal",
    "category": "wondrous",
    "cost": "400 gp (1st-level power); 1,600 gp (2nd); 3,600 gp (3rd); 6,400 gp (4th); 10,000 gp (5th); 14,400 gp (6th); 19,200 gp (7th); 25,600 gp (8th); 32,400 gp (9th)",
    "summary": "Warforged component: a psionically resonant crystal attached to the warforged's chest, head, or hand (occupying the amulet, headband, or gloves body slot). It stores the imprint of a single psionic power; once per day the warforged can manifest that power using his own power point reserve (or points stored in a psiforged body), but the power cannot be augmented or enhanced with metapsionic feats.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 126",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "psychic-generator",
    "name": "Psychic Generator",
    "category": "wondrous-slotless",
    "cost": "2,500 gp",
    "summary": "Warforged component: a cluster of psionically resonant crystals embedded in the warforged's upper torso, taking up no body slot. Beginning 24 hours after installation, it increases the bearer's daily power point reserve by 1 power point, which can be spent normally or stored in a psiforged body or cognizance crystal.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 126",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "arm-of-the-ancestor",
    "name": "Arm of the Ancestor",
    "category": "wondrous-slotless",
    "cost": "8,500 gp",
    "summary": "Deathless graft (arms; sacrifice 4 hp and -2 Dexterity): flesh from an undying ancestor's arm grants +1 on Climb and Swim checks, +1 on grapple checks, and +1 on damage rolls with melee weapons wielded by that arm. Once per hour you can channel positive energy through it as a standard action: living creatures touched gain fast healing 3, undead touched take 3 damage per round, lasting a number of rounds equal to half your Hit Dice.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bone-plating",
    "name": "Bone Plating",
    "category": "wondrous-slotless",
    "cost": "9,000 gp",
    "summary": "Deathless graft (skin; sacrifice 4 hp): layers of bone grown from a deathless donor cover your vulnerable areas. Your natural armor bonus to AC improves by 1 (stacking with enhancement bonuses to natural armor), and you gain resistance to cold 5 (or increase existing cold resistance by 5).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "deathless-flesh",
    "name": "Deathless Flesh",
    "category": "wondrous-slotless",
    "cost": "33,000 gp",
    "summary": "Deathless graft (flesh; sacrifice -2 Constitution): deathless tissue fused through your muscles and subdermal tissues. Whenever you would take the extra damage of a critical hit or sneak attack, there is a 50% chance you ignore that extra damage, and whenever you are subjected to a death effect there is a 50% chance you ignore it as if immune.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 128",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "deathless-visage",
    "name": "Deathless Visage",
    "category": "wondrous-slotless",
    "cost": "32,000 gp",
    "summary": "Deathless graft (head; sacrifice 6 hp and -2 on Bluff, Diplomacy, Gather Information, and Intimidate checks against all but Aereni elves and deathless creatures; recipient must have a maximum lifespan of at least 200 years). As a standard action you can fix a terrifying glare on one creature within 30 feet: it is frightened for 1d4 rounds (Will DC 10 + 1/2 your HD + your Charisma modifier; shaken for 1 round on a successful save, and immune for 24 hours after saving). You also gain a +2 insight bonus on all Knowledge checks from ancestral memory.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 128-129",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "legs-of-the-undying-marcher",
    "name": "Legs of the Undying Marcher",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "Deathless graft (legs; sacrifice 2 hp): flesh from an undying donor's legs fused to your own. Your legs never tire while walking (no Constitution checks to avoid nonlethal damage or fatigue from a forced march), you gain a +2 bonus on all Reflex saves, and a +4 bonus on checks to resist being bull rushed or tripped.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 128-129",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "aqueous-body",
    "name": "Aqueous Body",
    "category": "wondrous-slotless",
    "cost": "13,000 gp",
    "summary": "Elemental graft [water] (flesh; sacrifice 6 hp and -2 Dexterity): the substance of a water elemental grafted through your body. While underwater you gain concealment (20% miss chance), can use the Hide skill without cover or concealment, and can breathe water indefinitely as by a permanent water breathing effect.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 130",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "breath-of-the-waves",
    "name": "Breath of the Waves",
    "category": "wondrous-slotless",
    "cost": "9,000 gp",
    "summary": "Elemental graft [water] (head; sacrifice 4 hp): your mouth and throat are replaced with water elemental substance. You are immune to dehydration (including horrid wilting) and never need to drink. Once per hour as a standard action, your breath confers revitalizing water on yourself or an adjacent creature, instantly negating any of: exhausted, fatigued, nauseated, paralyzed, sickened, or stunned; a dying creature breathed on stabilizes automatically.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 130-131",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "buffeting-fists",
    "name": "Buffeting Fists",
    "category": "wondrous-slotless",
    "cost": "13,000 gp",
    "summary": "Elemental graft [air] (arms; sacrifice 4 hp): air elemental essence bound into your hands. You can deflect ranged attacks as if you had the Deflect Arrows feat, except you can deflect a number of attacks per round equal to 1 + your Dexterity modifier. Once per day as a standard action you can slam your fists together to buffet all enemies within 10 feet with a bull rush from a Large wind with a Strength score equal to yours + 10 (pushing them back up to 5 feet).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 131",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "dust-form",
    "name": "Dust Form",
    "category": "wondrous-slotless",
    "cost": "7,000 gp",
    "summary": "Elemental graft [air] (legs; sacrifice 4 hp and -2 on Climb, Jump, and Swim checks): once per minute as a move action, your legs briefly become a whirlwind that stirs up dust and debris; all living creatures adjacent to you must succeed on a Fortitude save (DC 10 + 1/2 your HD + your Constitution modifier) or be blinded for 1 round. Does not function underwater.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 131",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "earth-glider",
    "name": "Earth Glider",
    "category": "wondrous-slotless",
    "cost": "113,000 gp",
    "summary": "Elemental graft [earth] (arms; sacrifice 6 hp and -2 Dexterity): your arms become burrowing tools of earth elemental flesh. After a full-round action to attune them, you can glide through stone, dirt, and almost any earth (but not metal) at your normal land speed, leaving no tunnel, for up to a number of consecutive rounds equal to one-third your Hit Dice; if the effect ends while you are inside a solid object you are shunted to the nearest open space, taking 1d6 damage per 5 feet traveled.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 131",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "elemental-flesh",
    "name": "Elemental Flesh",
    "category": "wondrous-slotless",
    "cost": "31,000 gp",
    "summary": "Elemental graft [any] (flesh; sacrifice 8 hp; requires at least one other elemental graft, and counts as a graft of the donor element's type): elemental essence takes over many vital functions. You have a 50% chance to ignore the extra damage of a critical hit or sneak attack, and a 50% chance to resist any effect that would stun you (other effects accompanying the stunning still apply).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 132",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "hands-of-flame",
    "name": "Hands of Flame",
    "category": "wondrous-slotless",
    "cost": "13,000 gp",
    "summary": "Elemental graft [fire] (arms; sacrifice 4 hp): your hands hold liquid fire. As a swift action, your hands grow white hot for 1 round: your touch deals 1d6 points of fire damage and can ignite flammable objects, and metallic weapons you hold deal an extra 1d6 points of fire damage.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 132",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "incendiary-skin",
    "name": "Incendiary Skin",
    "category": "wondrous-slotless",
    "cost": "17,000 gp",
    "summary": "Elemental graft [fire] (skin; sacrifice 4 hp): fire elemental essence beneath your skin grants resistance to fire 5 at all times. As an immediate action you can blaze until the start of your next turn: anyone striking you with a natural weapon or unarmed strike takes 1d6 points of fire damage (Reflex negates; DC 10 + 1/2 your HD + your Constitution modifier), and you take 1 point of damage each time you activate the blaze.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 132",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "oceanic-adaptation",
    "name": "Oceanic Adaptation",
    "category": "wondrous-slotless",
    "cost": "8,000 gp",
    "summary": "Elemental graft [water] (arms; sacrifice 4 hp): patches of water elemental flesh along your arms. While underwater you move as if under a freedom of movement effect (even wading through shallow water does not slow you), and you gain a +2 bonus on weapon damage rolls when both you and your opponent are immersed in at least 1 foot of water.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 133",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "scorching-gaze",
    "name": "Scorching Gaze",
    "category": "wondrous-slotless",
    "cost": "7,000 gp",
    "summary": "Elemental graft [fire] (head; sacrifice 4 hp and -2 on Search and Spot checks): your eyes burn with elemental fire, giving you a gaze attack with a 30-foot range that deals 1d6 points of fire damage (Fortitude save negates; DC 10 + 1/2 your HD + your Constitution modifier). As a full-round action you can focus the gaze on a combustible object within 30 feet to set it on fire (attended or magic items get a DC 15 Reflex save to avoid it).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 133",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "stony-plating",
    "name": "Stony Plating",
    "category": "wondrous-slotless",
    "cost": "2,800 gp",
    "summary": "Elemental graft [earth] (skin; sacrifice 4 hp): stony hide from a Large or larger earth elemental fused over key areas of your body. Your natural armor bonus to AC improves by 1 (stacking with enhancement bonuses to natural armor).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 133",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "tremor-graft",
    "name": "Tremor Graft",
    "category": "wondrous-slotless",
    "cost": "6,000 gp",
    "summary": "Elemental graft [earth] (legs; sacrifice 2 hp and -5 feet of land speed): earth elemental skin grown down your sides and legs. As long as you are touching the ground, you can take a move action to sense the number and exact location of all creatures within 20 feet.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 133",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "whirlwind-form",
    "name": "Whirlwind Form",
    "category": "wondrous-slotless",
    "cost": "58,000 gp",
    "summary": "Elemental graft [air] (skin; sacrifice -2 Constitution): your body is wreathed in a whirlwind when the graft is activated (a standard action). While active you gain a fly speed of 20 feet with perfect maneuverability, but take a -4 penalty on Listen, Search, Spot, Hide, and Move Silently checks. Does not function underwater.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 133-134",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "darkwood-flesh",
    "name": "Darkwood Flesh",
    "category": "wondrous-slotless",
    "cost": "19,000 gp",
    "summary": "Plant graft (flesh; sacrifice 4 hp and -2 Dexterity): your flesh is partly darkwood. Whenever a critical hit is confirmed or a sneak attack succeeds against you, you have a 25% chance to ignore the extra damage; if the extra damage is not ignored, the graft immediately grants you fast healing 3 for a number of rounds equal to one-third the damage dealt by the attack (multiple activations stack).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 134",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "healing-nodules",
    "name": "Healing Nodules",
    "category": "wondrous-slotless",
    "cost": "21,000 gp",
    "summary": "Plant graft (skin; sacrifice 6 hp and -2 on Fortitude saves): curative fungal nodules sprout from your skin. Breaking off a nodule is a move action and consuming one (a standard action) grants the benefit of a cure serious wounds spell at a caster level equal to your character level; at most one nodule per hour carries the cure. Once per day a nodule can instead act as remove disease, but then no curative nodules can be grown for 24 hours.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 134",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "fatigue-spores",
    "name": "Fatigue Spores",
    "category": "wondrous-slotless",
    "cost": "12,000 gp",
    "summary": "Plant graft (skin; sacrifice 4 hp): spore-producing fungus grown from a living treant covers your skin. Once per minute as a swift action you release a cloud of toxic spores: all living creatures adjacent to you must succeed on a Fortitude save (DC 10 + 1/2 your HD + your Constitution modifier) or become fatigued; a creature that saves is immune to your spores for 24 hours, and poison immunity or resistance applies.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 135",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "grappling-vine",
    "name": "Grappling Vine",
    "category": "wondrous-slotless",
    "cost": "7,000 gp",
    "summary": "Plant graft (arms; sacrifice 4 hp): a living vine housed in either arm, launched as a standard action. Make a ranged touch attack with 10-foot reach; on a hit you can start a grapple as a free action (the vine has the improved grab ability and Improved Grapple, using your grapple modifier) against a creature of your size or smaller, pulling it into your space and dealing constrict damage of 1d6 + your Strength modifier on successful grapple checks in later rounds. The vine can also snatch unattended one-handed objects within 10 feet; it has hardness 5 and 20 hit points, heals fully in 8 hours, and regrows in a week if severed.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 135",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "perception-seed",
    "name": "Perception Seed",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "Plant graft (head; sacrifice 2 hp): a seed from an awakened tree implanted in your eyes and bound to your optic nerves. You gain low-light vision (triple the normal range if you already have low-light vision) and a +2 competence bonus on Spot and Search checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 135",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "rootlegs",
    "name": "Rootlegs",
    "category": "wondrous-slotless",
    "cost": "7,000 gp",
    "summary": "Plant graft (legs; sacrifice 4 hp, -2 Dexterity, and -2 on Climb and Jump checks): thick roots hidden in your legs. As an immediate action, usable a number of times per day equal to 3 + your Constitution modifier (minimum 1), roots anchor you to the ground until the end of your next turn: your speed drops to 5 feet and you cannot take a 5-foot step, but you gain a +8 bonus on checks and saves to resist being moved (bull rush, trip, or grapple attempts that would move you), and if you are standing on earth you also gain fast healing 3 for 1 round.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 135-136",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "treebark-carapace",
    "name": "Treebark Carapace",
    "category": "wondrous-slotless",
    "cost": "3,200 gp",
    "summary": "Plant graft (skin; sacrifice 4 hp): the tough flesh of a living tree fused over key areas of your body. Your natural armor bonus to AC improves by 1 (stacking with enhancement bonuses to natural armor), and you gain a +4 bonus on saves against polymorph effects.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 136",
    "sourceUrl": "",
    "ruleset": "eberron"
  }
];

export const MOE_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "alchemy-blade",
    "name": "Alchemy Blade",
    "category": "weapon",
    "cost": "310 gp",
    "weight": "2 lb.",
    "notes": "Exotic light melee weapon (1d4 Small / 1d6 Medium, 19-20/x2, piercing). Its pommel accepts a flask of alchemist's fire or alchemist's frost; priming it is a standard action that provokes attacks of opportunity. A target struck by a primed blade also takes damage as if hit by the attached flask (no splash damage); unprimed, the blade deals damage as a short sword, and with Exotic Weapon Proficiency (alchemy blade) it counts as a short sword for feats and abilities. Making one requires a DC 20 Craft (alchemy) check in addition to the normal weaponsmithing checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 137",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "spear-spikard",
    "name": "Spear Spikard",
    "category": "weapon",
    "cost": "200 gp",
    "weight": "3 lb.",
    "notes": "Exotic one-handed melee weapon (1d4 Small / 1d6 Medium, x2, piercing; can be thrown as a shortspear, 20 ft. range increment). The hollow shaft holds a spring mechanism loaded with a crossbow bolt (loading as a light crossbow). With Exotic Weapon Proficiency (spear spikard), a successful melee hit automatically discharges the bolt into the target for extra piercing damage equal to the weapon's base damage (not multiplied on a critical hit); it cannot fire the bolt at range or when thrown. Making one requires a DC 20 Craft (weaponsmithing) check.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 137",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "war-spikard",
    "name": "War Spikard",
    "category": "weapon",
    "cost": "350 gp",
    "weight": "9 lb.",
    "notes": "Exotic two-handed melee weapon (1d6 Small / 1d8 Medium, x2, bludgeoning and piercing) built like an oversized warhammer with a bolt channel through its head. Loading works as loading a light crossbow. With Exotic Weapon Proficiency (war spikard), a successful melee hit automatically discharges the loaded bolt into the target for extra piercing damage equal to the weapon's base damage (not multiplied on a critical hit); it cannot fire the bolt as a ranged attack. Making one requires a DC 20 Craft (weaponsmithing) check.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 138",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bolts-spikard",
    "name": "Bolts, Spikard (10)",
    "category": "ammunition",
    "cost": "1 gp",
    "weight": "1 lb.",
    "notes": "Ammunition for spear spikards and war spikards. Spikard bolts and ordinary crossbow bolts are functionally equivalent and can be used interchangeably.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 137",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "studded-impact-armor",
    "name": "Studded Impact Armor",
    "category": "armor",
    "cost": "765 gp",
    "weight": "20 lb.",
    "notes": "Light armor (armor bonus +3, maximum Dex bonus +5, armor check penalty -1). The metal studs are an alchemical impact-sensitive alloy that stiffens when struck: the wearer gains damage reduction 1/piercing against weapon attacks (including the triggering attack), but his base speed drops to 10 feet until the end of his next turn. Making impact armor requires a DC 25 Craft (alchemy) check in addition to the normal armorsmithing checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "chain-impact-armor",
    "name": "Chain Impact Armor",
    "category": "armor",
    "cost": "1,290 gp",
    "weight": "40 lb.",
    "notes": "Medium armor (armor bonus +5, maximum Dex bonus +2, armor check penalty -5). The chain links are an alchemical impact-sensitive alloy that stiffens when struck: the wearer gains damage reduction 2/piercing against weapon attacks (including the triggering attack), but his base speed drops to 10 feet until the end of his next turn. Making impact armor requires a DC 25 Craft (alchemy) check in addition to the normal armorsmithing checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "half-plate-impact-armor",
    "name": "Half-Plate Impact Armor",
    "category": "armor",
    "cost": "2,450 gp",
    "weight": "50 lb.",
    "notes": "Heavy armor (armor bonus +7, maximum Dex bonus +0, armor check penalty -7). The metal strips are an alchemical impact-sensitive alloy that stiffens when struck: the wearer gains damage reduction 3/piercing against weapon attacks (including the triggering attack), but his base speed drops to 10 feet until the end of his next turn. Making impact armor requires a DC 25 Craft (alchemy) check in addition to the normal armorsmithing checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "clothing-chameleoweave",
    "name": "Clothing, Chameleoweave",
    "category": "gear",
    "cost": "+100 gp",
    "weight": "See text",
    "notes": "Chameleoweave fabric added to an outfit (price is in addition to the outfit's cost; the outfit weighs 1 pound less than normal, or 1/4 pound less for Small characters). The cloth mimics fabrics worn with it, granting the wearer a +1 circumstance bonus on Disguise checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "clothing-dolweave",
    "name": "Clothing, Dolweave",
    "category": "gear",
    "cost": "+150 gp",
    "weight": "See text",
    "notes": "Dolweave fabric added to an outfit (price is in addition to the outfit's cost; the outfit weighs 1 pound more than normal, or 1/4 pound more for Small characters). The coarse cloth darkens with the wearer's violent emotions, granting a +1 circumstance bonus on Intimidate checks.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bloodspike-defiling",
    "name": "Bloodspike, Defiling",
    "category": "alchemical gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "Alchemical bloodspike: a needle-pointed vial jabbed into flesh (1 point of piercing damage, ignoring damage reduction) or thrown as a ranged weapon (5 ft. range increment), a standard action that provokes attacks of opportunity. The defiling mixture absorbed into the target's blood leaves the target nauseated for 1 round (Fortitude DC 12 negates). Bloodspike effects do not stack, and constructs, elementals, oozes, plants, and undead are unaffected by bloodspikes.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 139",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bloodspike-glowbug",
    "name": "Bloodspike, Glowbug",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "Alchemical bloodspike: a needle-pointed vial jabbed into flesh (1 point of piercing damage, ignoring damage reduction) or thrown as a ranged weapon (5 ft. range increment), a standard action that provokes attacks of opportunity. For 1 hour the user's skin sheds bright light to 10 feet and shadowy illumination to 20 feet (while any skin is exposed); as a swift action the user can exhaust the light in a flash that dazzles all creatures within 30 feet for 1 minute (Fortitude DC 11 negates), ending the effect.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, pp. 139-140",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bloodspike-spatter",
    "name": "Bloodspike, Spatter",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "Alchemical bloodspike: a needle-pointed vial jabbed into flesh (1 point of piercing damage, ignoring damage reduction) or thrown as a ranged weapon (5 ft. range increment), a standard action that provokes attacks of opportunity. For 1 hour the user's bite attack deals an extra 1 point of acid damage; at any time during that hour the user can spit acid at an adjacent creature as a free action (ranged touch attack) for 1d6 points of acid damage, which ends the effect.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 140",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bloodspike-tempo",
    "name": "Bloodspike, Tempo",
    "category": "alchemical gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "Alchemical bloodspike: a needle-pointed vial jabbed into flesh (1 point of piercing damage, ignoring damage reduction) or thrown as a ranged weapon (5 ft. range increment), a standard action that provokes attacks of opportunity. At any time within 1 hour after use, the user can draw on the stored energy to take one additional move action on his turn; if unused within the hour, the effect is lost.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 140",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "bloodspike-thickener",
    "name": "Bloodspike, Thickener",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "Alchemical bloodspike: a needle-pointed vial jabbed into flesh (1 point of piercing damage, ignoring damage reduction) or thrown as a ranged weapon (5 ft. range increment), a standard action that provokes attacks of opportunity. For 1 hour, any weapon damage dealt to the user is reduced by 1 point (to a minimum of 1 point of damage).",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 140",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "indulgence",
    "name": "Indulgence",
    "category": "gear",
    "cost": "1,000 gp",
    "weight": "—",
    "notes": "A document sold by Aundair, Breland, Karrnath, Thrane, Zilargo, or the Mror Holds (base price shown; the actual sum rises with the offense). It is not absolution: the issuing nation promises not to prosecute the purchaser for one offense if he instead performs an assigned mission or penance; once the service is adequately performed, no further legal remedies are pursued. An indulgence can normally be purchased only within the nation where the offense was committed.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 140",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "lenience",
    "name": "Lenience",
    "category": "gear",
    "cost": "250 gp",
    "weight": "—",
    "notes": "Documentation plus a dated banner purchased ahead of time and displayed on a carriage, ship, skyship, or other conveyance. While the banner is affixed and the dates are current, the conveyance may proceed at any speed without regard to caution, speed laws, or rights of way; other travelers are responsible for getting out of its way. Only a limited number of leniences are granted in an area at one time.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 141",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "calomel",
    "name": "Calomel",
    "category": "gear",
    "cost": "Weapons ×2 cost (a double weapon with only one calomel end costs +50%)",
    "weight": "—",
    "notes": "New special material: a hard white ore from Argonnessen (hardness 10, 30 hit points per inch of thickness). A calomel weapon overcomes the damage reduction of creatures with the fire subtype as if it were a magic weapon, even without an enhancement bonus. Only items with metal parts can be made of calomel.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 141",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "mournlode-purple",
    "name": "Mournlode, Purple",
    "category": "gear",
    "cost": "Weapons and armor +700 gp; holy symbol 400 gp",
    "weight": "—",
    "notes": "New special material: purple-veined iron from the Mournland with the physical properties of iron (hardness 10, 30 hit points per inch of thickness). A mournlode weapon overcomes the damage reduction of undead as if it were cold iron or alchemical silver, whichever is more appropriate; mournlode armor grants a +1 resistance bonus on saving throws against spells, spell-like abilities, and supernatural abilities used by undead; turning undead with a mournlode holy symbol deals damage equal to the bearer's turning level to each undead successfully turned.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 141",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "earth-sled",
    "name": "Earth Sled",
    "category": "gear",
    "cost": "24,000 gp",
    "weight": "—",
    "notes": "Elemental vessel: a 30-foot barge-like skiff carried a foot or two above the ground by a bound Huge earth elemental. It moves at a constant 6 miles per hour regardless of terrain, can traverse shallow water and bogs and climb natural sheer surfaces, and carries up to twenty Medium creatures or 5,600 pounds of passengers and cargo. It is directed from a steering podium by a character with any Mark of Passage dragonmark.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 120",
    "sourceUrl": "",
    "ruleset": "eberron"
  },
  {
    "id": "tumbler",
    "name": "Tumbler",
    "category": "gear",
    "cost": "200,000 gp",
    "weight": "—",
    "notes": "Elemental vessel: a spherical stone craft holding twelve Medium or smaller creatures, propelled by a bound Huge earth elemental (a second, Small air elemental refreshes its air for ten days). It rolls overland at 10 miles per hour and can earth glide through stone or dirt (not metal) at 2 miles per hour, leaving no tunnel; piloting it underground requires a DC 25 Profession (pilot) check. A move earth spell cast on its area flings it back 30 feet, deals 4d6 damage to those inside (no save), and leaves it powerless for 1 minute.",
    "source": "Magic of Eberron, Chapter 5: Magic Items and Equipment, p. 121",
    "sourceUrl": "",
    "ruleset": "eberron"
  }
];
