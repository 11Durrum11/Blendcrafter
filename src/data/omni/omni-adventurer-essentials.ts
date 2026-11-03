/**
 * Omni sweep wave 2 (2026-11-02): Adventurer Essentials (Skortched
 * Urf Studios) — one combined pack for the nine pamphlets that exist
 * in the supplied extraction (the task said ten; only nine texts are
 * present: Bastard Sword, Bedrolls, Gold Piece, Holy Water, Iron
 * Rations, Lantern, Rope, Torch, Waterskin — there is no tenth).
 * Each pamphlet details variants of a single mundane item; its
 * mundane variants are in the equipment array and its numbered magic
 * variants in the magic array, with the pamphlet named in each
 * record's source. Already in the catalog and skipped: six bastard
 * sword components (the catalog's records for them use "+N gp"
 * adder costs equal to the pamphlet's flat prices), the SRD candle,
 * bullseye and hooded lanterns, lamp oil, and sunrod (the pamphlet's
 * bullseye and hooded lantern price RANGES, 10-12 gp and 5-7 gp,
 * bracket the catalog's PHB prices), and the SRD lantern of
 * revealing at the pamphlet's identical 30,000 gp. One price
 * conflict: the pamphlet's lariat is 3 sp vs. the catalog's 5 sp
 * record. NOT built: the bastard sword pamphlet's size-variant and
 * material-by-size price grids and the rope pamphlet's
 * rope-by-diameter grids (mechanical scalings of a base entry — one
 * record per material is built at the standard diameter instead);
 * Iron Rations' racial rations and Holy Water's aspergillum (no
 * price printed anywhere); Gold Piece's coin-mage potions (priced as
 * the potions they duplicate, no price of their own); and the
 * Fortune Speaker's Coin treasure-table price of 2,900 gp, which
 * belongs to the Coin of Justified Arrogance — the coin's own stat
 * block price of 5,000 gp is used. The bastard sword pamphlet's
 * serrated blade has a three-way in-book conflict (table 3.5 gp,
 * description "Cost: 15 gp", crafting text 10% of weapon cost); the
 * table value is used and flagged. Bedroll weights are printed as
 * approximations. Prices are as printed (ranges stay ranges);
 * summaries and notes are mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const AESS_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "bed-of-the-caravan",
    "name": "Bed of the Caravan",
    "category": "wondrous-slotless",
    "cost": "18,350 gp",
    "summary": "A flying four-poster bed with overland flight: it carries 400 lb. at 30 ft. or 600 lb. at 20 ft., travels to a named destination, and comes when called within 300 yards.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bedroll-of-reconsideration",
    "name": "Bedroll of Reconsideration",
    "category": "wondrous-slotless",
    "cost": "4,200 gp",
    "summary": "On waking, the sleeper gains a pool of 10 bonus skill ranks (at most 5 in one skill, and only in skills they already have a rank in), lasting until the next rest or 24 hours.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bedroll-of-sleeping-serpents",
    "name": "Bedroll of Sleeping Serpents",
    "category": "wondrous-slotless",
    "cost": "14,350 gp",
    "summary": "Once per day the bedroll transforms into a giant constrictor snake for up to 1 hour.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dead-speak-sleep",
    "name": "Dead-speak-sleep",
    "category": "wondrous-slotless",
    "cost": "360 gp",
    "summary": "The sleeper speaks the language of the creature that last died in the roll, and before next sleeping can invoke bull's strength and remove fear as a 3rd-level cleric.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "diplomats-quilt",
    "name": "Diplomat's Quilt",
    "category": "wondrous-slotless",
    "cost": "1,650 gp",
    "summary": "After 40 nights of use, the quilt casts a semi-permanent tongues on the sleeper, lasting until the next sleep.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dream-of-plenty",
    "name": "Dream of Plenty",
    "category": "wondrous-slotless",
    "cost": "33,650 gp",
    "summary": "Once per day, up to four sleepers who rest 8 hours in it gain the benefit of heroes' feast on waking.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lace-of-the-merciful",
    "name": "Lace of the Merciful",
    "category": "wondrous-slotless",
    "cost": "120 gp",
    "summary": "Complete bed rest in it heals at triple the normal rate; the sleeper takes a −4 morale penalty on Sense Motive checks against attractive persons for 24 hours.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lone-emperors-palace",
    "name": "Lone Emperor's Palace",
    "category": "wondrous-slotless",
    "cost": "72,500 gp",
    "summary": "While the owner sleeps in it, they are protected by sequester, protection from arrows, and protection from energy (fire) until waking.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mephits-hearth",
    "name": "Mephit's Hearth",
    "category": "wondrous-slotless",
    "cost": "11,350 gp",
    "summary": "Once per day, summons a bound flame mephit for 6+1d4 hours that gives bonfire light and warmth and screams an alarm if a stranger approaches within 60 ft.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "osmotic-bedroll",
    "name": "Osmotic Bedroll",
    "category": "wondrous-slotless",
    "cost": "13,500 gp",
    "summary": "An arcane caster sleeping in it gains bonus 0-level spells equal to 1 + her Wisdom modifier and one extra 1st-level spell on waking.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "prophetess-shawl",
    "name": "Prophetess' Shawl",
    "category": "wondrous-slotless",
    "cost": "13,420 gp",
    "summary": "A female user of Intelligence 5 or more can attempt a prophetic dream once per night (a divination with a 50% base chance plus her Sense Motive or Profession (fortuneteller) ranks) and gains status on waking.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pillow-of-extremis",
    "name": "Pillow of Extremis",
    "category": "wondrous-slotless",
    "cost": "47,000 gp",
    "summary": "Once per lunar month, a 1-hour nap on this pillow counts as 8 full hours of rest, including spell recovery.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "prostitutes-pillow",
    "name": "Prostitute's Pillow",
    "category": "wondrous-slotless",
    "cost": "650 gp",
    "summary": "Grants everyone within 10 ft. a +4 holy bonus on Fortitude saves against poison and disease, and can cast remove disease once per day as a 5th-level cleric.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "roll-o-the-weavers",
    "name": "Roll o' the Weavers",
    "category": "wondrous-slotless",
    "cost": "26 gp",
    "summary": "A self-repairing bedroll that is always clean and comfortable.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-1",
    "name": "+1 Bastard Sword",
    "category": "weapon",
    "cost": "2,335 gp",
    "summary": "A +1 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-2",
    "name": "+2 Bastard Sword",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +2 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-3",
    "name": "+3 Bastard Sword",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A +3 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-4",
    "name": "+4 Bastard Sword",
    "category": "weapon",
    "cost": "32,335 gp",
    "summary": "A +4 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-5",
    "name": "+5 Bastard Sword",
    "category": "weapon",
    "cost": "50,335 gp",
    "summary": "A +5 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-6",
    "name": "+6 Bastard Sword",
    "category": "weapon",
    "cost": "720,335 gp",
    "summary": "An epic +6 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-7",
    "name": "+7 Bastard Sword",
    "category": "weapon",
    "cost": "980,335 gp",
    "summary": "An epic +7 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-8",
    "name": "+8 Bastard Sword",
    "category": "weapon",
    "cost": "1,280,335 gp",
    "summary": "An epic +8 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-9",
    "name": "+9 Bastard Sword",
    "category": "weapon",
    "cost": "1,620,335 gp",
    "summary": "An epic +9 bastard sword, priced from the pamphlet's table of magical bastard swords.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bastard-sword-plus-10-adamantine",
    "name": "+10 Adamantine Bastard Sword",
    "category": "weapon",
    "cost": "2,003,335 gp",
    "summary": "An epic +10 adamantine bastard sword; the printed price includes the 3,000 gp adamantine cost.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "adventurers-bastard-sword",
    "name": "Adventurer's Bastard Sword",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 bastard sword whose wielder acts as if proficient with bastard swords; a wielder already proficient gains a +1 circumstance bonus on attacks with it.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bandit-bastard-sword",
    "name": "Bandit",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A +1 anarchic bastard sword.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "barnacle-bastard-sword",
    "name": "Barnacle",
    "category": "weapon",
    "cost": "21,335 gp",
    "summary": "A +2 keen adamantine bastard sword.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-black-bastard-sword",
    "name": "The Black Bastard Sword",
    "category": "weapon",
    "cost": "72,335 gp",
    "summary": "A +2 unholy bastard sword: a living wielder takes 1 point of damage per round while holding it, while an undead wielder heals 1 point per round.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-blue-bastard-sword",
    "name": "The Blue Bastard Sword",
    "category": "weapon",
    "cost": "50,335 gp",
    "summary": "A +2 icy burst bastard sword; the ground around its wielder freezes, and the weapon itself has cold resistance 50.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blood-dripper",
    "name": "Blood Dripper",
    "category": "weapon",
    "cost": "50,575 gp",
    "summary": "A +4 wounding bastard sword; its printed price itemizes the wounding enhancement (50,000 gp) plus an ornate hilt, ornate guard, serrated blade, and the masterwork sword.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bloody-hands-sword",
    "name": "Bloody Hands Sword",
    "category": "weapon",
    "cost": "48,335 gp",
    "summary": "A scarlet +3 bastard sword: each time its wielder is injured in combat they must make a Fortitude save (DC 10 + damage dealt) or fly into a barbarian rage that cannot be ended while opponents are visible.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "broken-bastard-sword",
    "name": "Broken Bastard Sword",
    "category": "weapon",
    "cost": "25,335 gp",
    "summary": "A famous +5 bastard sword snapped against a pit fiend: it deals half damage (rounded up) but still bypasses damage reduction as a +5 weapon and has no attack penalty.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cho-bastard-sword",
    "name": "Cho",
    "category": "weapon",
    "cost": "134,735 gp",
    "summary": "A +4 intelligent brilliant energy bastard sword (Int 12, neutral good, empathic) that can cast major image once per day and urges its wielder to investigate mysteries.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dark-smoke",
    "name": "Dark Smoke",
    "category": "weapon",
    "cost": "131,035 gp",
    "summary": "A +4 smoking, flaming bastard sword cut from an ancient red dragon's claw; its bone blade has all the properties of adamantine.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "defending-hand",
    "name": "Defending Hand",
    "category": "weapon",
    "cost": "18,670 gp",
    "summary": "A +2 defending bastard sword of cold steel, favored by guards who can afford it.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-drunk-bastard-sword",
    "name": "The Drunk Bastard Sword",
    "category": "weapon",
    "cost": "32,335 gp",
    "summary": "An unpredictable bastard sword: at the start of each battle roll 1d6 — on a 1–5 that is its enhancement bonus for the fight; on a 6 it is a +5 flaming bastard sword.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragon-fang-bastard-sword",
    "name": "Dragon Fang",
    "category": "weapon",
    "cost": "153,615 gp",
    "summary": "A +5 bone bastard sword (the bone equals adamantine) of shape change: the wielder can use shapechange once per day as a 17th-level wizard. The intelligent, lawful good blade can also use cure moderate wounds and zone of truth three times per day and projects cause fear continuously (DC 16).",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-end-bastard-sword",
    "name": "The End",
    "category": "weapon",
    "cost": "1,227,335 gp",
    "summary": "A masterwork adamantine bastard sword of hardness 50 and energy resistance 50 that continually radiates mage's disjunction in a 40 ft. radius. Anyone possessing it long enough loses the ability to cast spells and gains spell resistance equal to their level, effects lingering 1d6 days after it is put down.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-exploding-sword",
    "name": "The Exploding Sword",
    "category": "weapon",
    "cost": "2,007,335 gp",
    "summary": "A +0 intelligent adamantine bastard sword that counts down from 9 with each hit, its enhancement bonus rising by +1 per hit; at zero it becomes +10, and its next hit explodes for 10d6 sonic damage in a 60 ft. radius (Reflex DC 30 half). The hilt survives and the blade slowly regenerates.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "falcons-bent-bastard-sword",
    "name": "Falcon's Bent Bastard Sword",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A +3 flaming bastard sword bent in a famous duel: the wielder takes a −2 penalty on attacks with it, and the blade has hardness 30.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flaking-bastard-sword",
    "name": "Flaking Bastard Sword",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "Anyone injured by this bastard sword must make a Fortitude save or contract the Shakes; the sword permanently loses 1 hit point after any encounter in which it is used.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-flying-bastard",
    "name": "The Flying Bastard",
    "category": "weapon",
    "cost": "128,335 gp",
    "summary": "A +3 distance, throwing, returning bastard sword with a 20 ft. range increment; in lawful good hands it is also holy and undead bane. The intelligent blade communicates empathically.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-firestarting-bastard",
    "name": "The Firestarting Bastard",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 flaming bastard sword that doubles as a survival tool for warmth, campfires, and light.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "frost-touch-bastard-sword",
    "name": "Frost Touch",
    "category": "weapon",
    "cost": "2,335 gp",
    "summary": "A masterwork bastard sword that emits a ray of frost each time it is swung, using the attack roll but resolving as a ranged touch attack.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-green-bastard-sword",
    "name": "The Green Bastard Sword",
    "category": "weapon",
    "cost": "50,335 gp",
    "summary": "A +2 bastard sword that becomes a bane weapon against the race its wielder most dislikes; once chosen, the bane is fixed for that wielder.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "greyblade",
    "name": "Greyblade",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 smoking bastard sword of dull, unpolished steel that always smells of wood smoke.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gyrefalcons-bastard-sword",
    "name": "GyreFalcon's Bastard Sword",
    "category": "weapon",
    "cost": "72,670 gp",
    "summary": "A +2 bastard sword that becomes a +3 holy throwing cold iron bastard sword in the hands of a paladin.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hand-slayer",
    "name": "Hand Slayer",
    "category": "weapon",
    "cost": "98,335 gp",
    "summary": "A +3 bastard sword that severs one of the opponent's hands on a critical hit; if the wielder fumbles (natural 1 on the follow-up d20), the wielder suffers the effect instead.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hand-and-a-half-holy-avenger",
    "name": "Hand and a Half Holy Avenger",
    "category": "weapon",
    "cost": "120,670 gp",
    "summary": "A +2 cold iron bastard sword that becomes a +5 holy cold iron bastard sword in a paladin's hands, granting spell resistance of 5 + the paladin's level to the wielder and adjacent allies and area greater dispel magic as a standard action each round.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  }
  ,
  {
    "id": "headhunter-bastard-sword",
    "name": "Headhunter",
    "category": "weapon",
    "cost": "72,335 gp",
    "summary": "A worn +1 vorpal bastard sword with a mild evil aura, long used by assassins.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-humming-sword",
    "name": "The Humming Sword",
    "category": "weapon",
    "cost": "38,335 gp",
    "summary": "An intelligent +1 bastard sword of speed (Int 16) that hums when drawn and grants its wielder the benefit of the Improved Initiative feat.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "knight-time",
    "name": "Knight Time",
    "category": "weapon",
    "cost": "62,335 gp",
    "summary": "A masterwork bastard sword that appears to be merely +1; in the hands of a knight or another character sworn to a code of chivalry or bushido it becomes a +4 lawful bastard sword and grants darkvision 60 ft.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "iceberg-bastard-sword",
    "name": "Iceberg",
    "category": "weapon",
    "cost": "9,035 gp",
    "summary": "A +1 frost bastard sword made of deep crystal and cold to the touch.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lawforged",
    "name": "Lawforged",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A +2 axiomatic bastard sword mass-produced for ranking law enforcement personnel.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "leadweight",
    "name": "Leadweight",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 mighty cleaving bastard sword, heavily weighted: it takes a −3 penalty on attacks but deals +3 extra damage as if the wielder used Power Attack (+6 extra damage two-handed); it does not stack with the Power Attack feat.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mercy-bastard-sword",
    "name": "Mercy",
    "category": "weapon",
    "cost": "17,835 gp",
    "summary": "A +1 intelligent merciful bastard sword that converts lethal damage it deals into nonlethal damage and heals undead it strikes as if by cure light wounds; it can cast cure moderate wounds on its wielder three times per day.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mirror-sword",
    "name": "Mirror Sword",
    "category": "weapon",
    "cost": "32,335 gp",
    "summary": "A +2 bastard sword whose blade is a perfect mirror, with mirror-tiled guard and pommel.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "missing-blade",
    "name": "Missing Blade",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A +2 bastard sword that becomes invisible on command: opponents lose their Dexterity bonus to AC against it, but the wielder cannot make precision attacks such as sneak attacks with it.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "notorious-bastard-sword",
    "name": "Notorious",
    "category": "weapon",
    "cost": "157,735 gp",
    "summary": "A +3 intelligent dancing adamantine bastard sword (Int 19) with no detectable magical aura: it can cast knock three times per day, detects legal authorities within 60 ft., and is under continuous nondetection.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "owlblade",
    "name": "Owlblade",
    "category": "weapon",
    "cost": "18,335 gp",
    "summary": "A black +1 bastard sword granting its wielder blindsense 20 ft. and a +14 bonus on Move Silently checks.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-red-bastard-sword",
    "name": "The Red Bastard Sword",
    "category": "weapon",
    "cost": "50,335 gp",
    "summary": "A +2 flaming burst bastard sword of warm red metal; combustibles within 50 ft. tend to spontaneously ignite, and the weapon itself has fire resistance 50.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "seven-fingers-of-the-monk",
    "name": "Seven Fingers of the Monk",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 ki focus bastard sword made of ironwood.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-silver-slayer",
    "name": "The Silver Slayer",
    "category": "weapon",
    "cost": "8,590 gp",
    "summary": "A +1 ghost touch silvered bastard sword with a holy symbol in its guard and a wooden stake on its pommel, built for hunting ghosts, vampires, and lycanthropes; its net damage modifier is +0.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stroke-of-zeus",
    "name": "Stroke of Zeus",
    "category": "weapon",
    "cost": "73,335 gp",
    "summary": "A +4 shocking bastard sword regarded by paladins and clerics of Zeus as a gift from the god.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spellblade-bastard-sword",
    "name": "Spellblade",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 spell storing bastard sword, popular with combat-oriented spellcasters.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thunderstruck-bastard-sword",
    "name": "Thunderstruck",
    "category": "weapon",
    "cost": "32,335 gp",
    "summary": "A +3 thundering bastard sword forged from metal struck by natural lightning.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "viciousness-bastard-sword",
    "name": "Viciousness",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 vicious bastard sword of dark, rough orc-forged steel with an evil aura.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "whistling-bastard-sword",
    "name": "Whistling Bastard Sword",
    "category": "weapon",
    "cost": "12,335 gp",
    "summary": "A notched +2 bastard sword that whistles as it swings: every character except the wielder who hears it within 15 ft. must make a Fortitude save (DC 15) or take a −2 circumstance penalty to AC.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-white-bastard-sword",
    "name": "The White Bastard Sword",
    "category": "weapon",
    "cost": "50,335 gp",
    "summary": "A +2 holy bastard sword of magic-resistant white metal: once each hour its possessor must attempt a saving throw against every ongoing spell affecting them, negating each spell on a success.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "colliding-crystal-bastard-sword",
    "name": "Colliding Crystal Bastard Sword",
    "category": "weapon",
    "cost": "32,335 gp",
    "summary": "A +3 crystal bastard sword of collision: its blade grows denser during the swing, dealing an extra 5 points of damage on a successful hit. (A psionic item from the pamphlet's psionic section.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "killing-stroke-bastard-sword",
    "name": "Killing Stroke",
    "category": "weapon",
    "cost": "73,335 gp",
    "summary": "A +1 deep crystal bastard sword of coup de grace with a sordid history among assassins. (A psionic item from the pamphlet's psionic section.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "psychokinetic-bastard-sword",
    "name": "Psychokinetic Bastard Sword",
    "category": "weapon",
    "cost": "8,335 gp",
    "summary": "A +1 psychokinetic crystal bastard sword: on command it deals an extra 1d4 points of psychokinetic damage, which bypasses damage reduction. (A psionic item from the pamphlet's psionic section.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vampiric-bastard-sword",
    "name": "Vampiric Bastard Sword",
    "category": "weapon",
    "cost": "35,335 gp",
    "summary": "A +1 bodyfeeder deep crystal bastard sword of deep crimson crystal. (A psionic item from the pamphlet's psionic section.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "the-bloody-shard",
    "name": "The Bloody Shard",
    "category": "artifact",
    "cost": "—",
    "summary": "Artifact: a +5 deep crystal bastard sword forged from a hero's blood. It grants fast healing 5 and regenerates lost limbs in 10 minutes; a critical hit drains all the victim's blood (Fortitude DC 20), killing them and reanimating them as undead. In a paladin's hands it functions as a holy avenger.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "excalibur-aess",
    "name": "Excalibur",
    "category": "artifact",
    "cost": "—",
    "summary": "Artifact: a +5 bastard sword of sharpness, effectively indestructible (hardness 50, resistance 50 to all energy, not conferred on the wielder); its sharpness severs an opponent's limb on a critical hit. Whoever can wield it has a claim to the throne of England.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "coin-of-justified-arrogance",
    "name": "Coin of Justified Arrogance",
    "category": "wondrous-slotless",
    "cost": "2,900 gp",
    "summary": "An ensorcelled coin whose bearer is warded by a field of force: sentient attackers using unarmed strikes or non-masterwork weapons take a −1 luck penalty on melee attack and damage rolls against the bearer.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "coin-of-woe",
    "name": "Coin of Woe",
    "category": "wondrous-slotless",
    "cost": "3,200 gp",
    "summary": "A cursed coin, indistinguishable from ordinary money: anyone touching it takes a −2 penalty on attack rolls, skill checks, and saving throws for 24 hours, and keeping it for over a week adds a −4 penalty on Charisma- and Wisdom-based skills until it is gone or the curse is broken.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "executioners-wages",
    "name": "Executioner's Wages",
    "category": "wondrous-slotless",
    "cost": "36,400 gp",
    "summary": "A pair of heavy gold coins placed on a corpse's eyes once per day: the creature's soul is projected beyond recall and it cannot be raised or resurrected short of divine intervention, counting as having died of old age. The coins are recovered and reusable.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "equitis-vel",
    "name": "Equitis Vel",
    "category": "artifact",
    "cost": "over 121,000 gp",
    "summary": "Minor artifact: a +3 cold iron holy greatsword that gains the vorpal quality against targets wearing more than 10,000 gp of gear or carrying more than 100 gp, and grants a +4 holy bonus to AC against such creatures. It deals no damage to good-aligned creatures. (The pamphlet gives an estimated value only: 'over 121,000 gp'.)",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fortune-speakers-coin",
    "name": "Fortune Speaker's Coin",
    "category": "wondrous-slotless",
    "cost": "5,000 gp",
    "summary": "Twice per day the owner flips this coin to cast augury with a 75% base accuracy; accuracy rises by 1% for every 5 gp worth of coin sacrificed to it.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "misers-balance",
    "name": "Miser's Balance",
    "category": "wondrous-slotless",
    "cost": "78,650 gp",
    "summary": "A crescent charm-coin: once per month, pressing it to a magic item during the early phases of construction reduces that item's raw material cost by 10%. Only one Balance can affect a given project, and it must be carried for a month before use.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "moneychangers-purse",
    "name": "Moneychanger's Purse",
    "category": "wondrous-slotless",
    "cost": "9,300 gp",
    "summary": "On the command word, coins placed inside this purse are broken down or combined into any denominations of the same total value, or transfigured into another nation's currency of equivalent value, permanently.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "showmans-coin",
    "name": "Showman's Coin",
    "category": "wondrous-slotless",
    "cost": "275 gp",
    "summary": "A large coin carved with drama masks: a bearer with at least one rank in any Perform skill can cast dancing lights and prestidigitation at will, as a 1st-level bard.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "taxmans-dodge",
    "name": "Taxman's Dodge",
    "category": "wondrous-slotless",
    "cost": "8,330 gp",
    "summary": "After being worn hidden on the body for a month, this coin can be activated once per day for up to an hour: the owner's clothing and gear appear cheap and worthless, and all their possessions within 60 ft. are similarly glamoured or hidden. The illusion is visual only.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-vitality",
    "name": "Water of Vitality",
    "category": "potion",
    "cost": "250 gp",
    "summary": "A magical holy water variant: an undead creature struck by it cannot use abilities that cause energy drain, death effects, or level loss for 1d4 rounds (Will DC 16; 1 round on a success), with a reduced splash effect on undead within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-freedom",
    "name": "Water of Freedom",
    "category": "potion",
    "cost": "60 gp",
    "summary": "A magical holy water variant: an undead creature struck by it cannot use abilities that cause paralysis for 1d4 rounds (Will DC 13; 1 round on a success), with a reduced splash effect on undead within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-health",
    "name": "Water of Health",
    "category": "potion",
    "cost": "250 gp",
    "summary": "A magical holy water variant: an undead creature struck by it cannot use abilities that cause ability damage for 1d4 rounds (Will DC 16; 1 round on a success), with a reduced splash effect on undead within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-manifestation",
    "name": "Water of Manifestation",
    "category": "potion",
    "cost": "250 gp",
    "summary": "A magical holy water variant: an incorporeal undead struck by it is forced to manifest on the Material Plane (losing its 50% miss chance) for 1d4 rounds (Will DC 16; 1 round on a success), with a reduced splash effect within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-solitude",
    "name": "Water of Solitude",
    "category": "potion",
    "cost": "1,000 gp",
    "summary": "A magical holy water variant: an evil outsider struck by it cannot use summoning abilities for 1d4 rounds (Will save; 1 round on a success), with a reduced splash effect on evil outsiders within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-of-vulnerability",
    "name": "Water of Vulnerability",
    "category": "potion",
    "cost": "400 gp",
    "summary": "A magical holy water variant: an evil outsider struck by it does not benefit from damage reduction based on special materials (cold iron, adamantine, silver, and the like) for 1d4 rounds (Will DC 18; 1 round on a success), with a reduced splash effect within 5 ft.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mace-of-the-heavens",
    "name": "Mace of the Heavens",
    "category": "weapon",
    "cost": "16,795 gp",
    "summary": "A combat-ready aspergillum functioning as a +1 heavy mace that can prepare a dose of standard holy water for delivery with a command word as a move action, five times per day; it cannot be loaded manually.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "symbols-of-blessing-faith-unity-and-cleansing",
    "name": "Symbols of Blessing, Faith, Unity, and Cleansing",
    "category": "artifact",
    "cost": "65,000 gp",
    "summary": "Four artifacts, priced as a set as printed: each symbol turns water it touches into holy water (up to 25 vials per day, or a small pond for ten rounds); joined together on a staff or mace they turn any water the relic contacts, even a river, into holy water.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "periwinkles-pot-of-plenty",
    "name": "Periwinkle's Pot of Plenty",
    "category": "wondrous-slotless",
    "cost": "2,300 gp",
    "summary": "Once per day, with water, at least a pound of organic material, a stone, and a successful DC 15 Profession (cook) check, this iron pot transforms its contents into a stew feeding up to five Medium creatures and granting each eater the benefit of cure light wounds.",
    "source": "Adventurer Essentials: Iron Rations (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "travelers-purse-aess",
    "name": "Traveler's Purse",
    "category": "wondrous-slotless",
    "cost": "1,000 gp",
    "summary": "Once per day this belt pouch creates enough nourishing but bland food to sustain three Medium creatures for a day; the food is purified and lasts 48 hours. It does not create water.",
    "source": "Adventurer Essentials: Iron Rations (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ambushers-lantern",
    "name": "Ambusher's Lantern",
    "category": "wondrous-slotless",
    "cost": "62,000 gp",
    "summary": "A heavy iron bullseye lantern that appears nonmagical to scans (its aura is suppressed) but conceals offensive spell effects including color spray, daylight, magic missile, and fireball.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "burglars-kerosene",
    "name": "Burglar's Kerosene",
    "category": "wondrous-slotless",
    "cost": "5,600 gp",
    "summary": "A small muffled lantern worn as a headband, granting a +2 luck bonus on Disable Device and Move Silently checks; as a standard action it can cast knock or arcane lock as a 5th-level sorcerer, each up to three times per night but never in daylight.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lantern-of-the-dying-whisp",
    "name": "Lantern of the Dying Whisp",
    "category": "wondrous-slotless",
    "cost": "13,500 gp",
    "summary": "A necromantic lantern that continually radiates desecrate and, once per day on command, snuffs its light to cast deeper darkness as a 5th-level cleric.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lantern-of-good-courage",
    "name": "Lantern of Good Courage",
    "category": "wondrous-slotless",
    "cost": "47,500 gp",
    "summary": "A silver bullseye lantern (90 ft. cone of clear light) whose light grants a +4 holy bonus on saves against harmful magical transformations; a corpse kept in its light for 6 hours within an hour of death will not rise as undead. It burns 12 hours per pint of oil when carried by a good cleric or paladin.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lantern-of-planar-fire",
    "name": "Lantern of Planar Fire",
    "category": "wondrous-slotless",
    "cost": "130,350 gp",
    "summary": "Once per day, all willing creatures and up to 500 lb. of matter within its clear illumination are transported to a random fiery plane (the Elemental Plane of Fire, the Nine Hells, a fire-dominant Abyssal layer, or the Positive Energy Plane), gaining fire resistance 10 for an hour after arrival.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "old-humanitys-lantern",
    "name": "Old Humanity's Lantern",
    "category": "wondrous-slotless",
    "cost": "14,400 gp",
    "summary": "A battered hooded lantern cursed against other races: any non-human who carries it gains one negative level that cannot be removed while the lantern is held. (The pamphlet's contents list calls it 'Old Humankind's Lantern'.)",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "qwiijacs-candle",
    "name": "Qwiijac's Candle",
    "category": "wondrous-slotless",
    "cost": "750 gp",
    "summary": "A single-use candle: when lit and held, its flame migrates to the user's heels, granting the benefit of haste for 3 rounds and a +4 luck bonus on Jump and Tumble checks, after which it melts away.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stonecutters-bullseye",
    "name": "Stonecutter's Bullseye",
    "category": "wondrous-slotless",
    "cost": "14,850 gp",
    "summary": "A masterwork safety bullseye lantern of dwarven make whose holder can command it to carve a tunnel 10 ft. in diameter and up to 4 ft. deep per minute through unworked natural stone only; it must be physically carried to tunnel.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "true-masters-glow",
    "name": "True Master's Glow",
    "category": "wondrous-slotless",
    "cost": "12,450 gp",
    "summary": "A finely made hooded lantern: crafters who spend at least a week working under its light gain a bonus on Craft checks while within 60 ft. of it.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "where-i-lay-my-head",
    "name": "Where I Lay My Head",
    "category": "wondrous-slotless",
    "cost": "67,200 gp",
    "summary": "A masterwork bullseye lantern on a walking stick: while it has oil and is spiked into the ground it casts Leomund's tiny hut centered on itself and conjures simple homely goods inside. Once per year, a creature dead less than a day placed within the shelter is raised at dawn.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "box-of-limitless-rope",
    "name": "Box of Limitless Rope",
    "category": "wondrous-slotless",
    "cost": "15,000 gp",
    "summary": "A wooden case that, once per hour, contains a new real and permanent 50 ft. length of 1-inch hempen rope when opened.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "portable-rope",
    "name": "Portable Rope",
    "category": "wondrous-slotless",
    "cost": "27,000 gp",
    "summary": "A rope of 50 to 200 ft. shrunken to 1/16 size with effectively no weight; on command it grows to full size, and shrinks again on command.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quicksilver-rope",
    "name": "Quicksilver Rope",
    "category": "wondrous-slotless",
    "cost": "4,000 gp",
    "summary": "A flask of quicksilver that, poured out and commanded, solidifies into silvery rope with the characteristics of 1-inch mithril-laced hempen rope; one flask holds enough for 1,000 ft. of rope, and a spoken command can bond an end to any solid object with a bond supporting up to 8,000 lb.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rope-of-many-uses",
    "name": "Rope of Many Uses",
    "category": "wondrous-slotless",
    "cost": "22,500 gp",
    "summary": "A 30 ft. rope that on command functions as animate rope (3/day), rope trick (2/day), or snare (1/day).",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rope-of-truth",
    "name": "Rope of Truth",
    "category": "wondrous-slotless",
    "cost": "24,000 gp",
    "summary": "Anyone bound with this rope is subject to a zone of truth effect, saving anew at each question; the user can tell whether the save succeeded. It can be made into a lariat, applying the effect to entangled targets.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pillage-flame",
    "name": "Pillage Flame",
    "category": "wondrous-slotless",
    "cost": "10,500 gp",
    "summary": "A tribal flame lit from a sacked community's fires: orcs who can see it within 150 ft. gain the benefit of bless, and the torch's holder can call a 30 ft. fiery ray three times per day (Reflex DC 12 or 3d4 fire damage).",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "detonation-torch",
    "name": "Detonation Torch",
    "category": "wondrous-slotless",
    "cost": "900 gp",
    "summary": "A torch flecked with bloodstone: tapping the stone three times superheats the flame so the torch detonates as a fireball dealing 1d6 damage per 10 minutes of burn time remaining (Reflex DC 13 half).",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-bedazzling",
    "name": "Pelnor's Powder Pack, Bedazzling",
    "category": "wondrous-slotless",
    "cost": "25 gp",
    "summary": "A single-use powder thrown into a flame (a move action): a strobing flash dazzles creatures within 10 ft. for 1 minute (Fortitude DC 11 negates), and the torch's burn time drops by 10 minutes.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-consecrating",
    "name": "Pelnor's Powder Pack, Consecrating",
    "category": "wondrous-slotless",
    "cost": "350 gp",
    "summary": "A single-use powder thrown into a flame: the fire's light carries a consecrate effect out to a 20 ft. radius, moving with the flame, for 4 minutes.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-desecrating",
    "name": "Pelnor's Powder Pack, Desecrating",
    "category": "wondrous-slotless",
    "cost": "350 gp",
    "summary": "A single-use powder thrown into a flame: the fire's light carries a desecrate effect out to a 20 ft. radius, moving with the flame, for 4 minutes.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-detecting",
    "name": "Pelnor's Powder Pack, Detecting",
    "category": "wondrous-slotless",
    "cost": "25 gp",
    "summary": "A single-use powder thrown into a flame: for one minute the flame sheds a purple mist in a 20 ft. radius revealing the presence or absence of magical auras, as the first round of detect magic.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-dousing",
    "name": "Pelnor's Powder Pack, Dousing",
    "category": "wondrous-slotless",
    "cost": "25 gp",
    "summary": "A single-use powder that douses a 5 ft. area of nonmagical flames or a single torch when applied (Will DC 10 if the fire is held by a creature).",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-energy-dampening",
    "name": "Pelnor's Powder Pack, Energy Dampening",
    "category": "wondrous-slotless",
    "cost": "500 gp",
    "summary": "A single-use powder, made for one energy type (acid, cold, electricity, fire, or sonic): thrown into a flame, it grants all creatures within the light's 20 ft. radius energy resistance 5 of that type for up to 50 minutes.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pelnors-powder-pack-obscuring",
    "name": "Pelnor's Powder Pack, Obscuring",
    "category": "wondrous-slotless",
    "cost": "250 gp",
    "summary": "A single-use powder thrown into a flame: gray-black smoke billows out acting exactly as an obscuring mist spell centered on the fire for 5 minutes, moving if the fire moves.",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blast-skin",
    "name": "Blast-skin",
    "category": "wondrous-slotless",
    "cost": "4,550 gp",
    "summary": "A single-use waterskin that must be full: triggered from up to 30 ft. away, it transmutes its contents to acid and explodes, dealing 10d6 acid damage in a 20 ft. radius (Reflex save for half) and leaving acid fog vapors for 11 rounds.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "breath-skin",
    "name": "Breath-skin",
    "category": "wondrous-slotless",
    "cost": "21,500 gp",
    "summary": "While at least one-quarter full, tapping its stopper rune grants all creatures touching the skin water breathing for a total of 12 hours divided evenly among them, up to three times per day.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elemental-skin",
    "name": "Elemental-skin",
    "category": "wondrous-slotless",
    "cost": "5,000 gp",
    "summary": "Once per day, if at least half full, this waterskin summons a small water elemental that bursts out and attacks the closest target for 5 rounds without leaving the skin's space; using it drains all the skin's water.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ice-skin",
    "name": "Ice-skin",
    "category": "wondrous-slotless",
    "cost": "11,000 gp",
    "summary": "Pour its water in an unbroken line (a full skin covers four 5-ft. squares), then tap the stopper rune: a wall of ice forms in those spaces, up to 700 square feet, once per day for up to 7 minutes.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "veil-skin",
    "name": "Veil-skin",
    "category": "wondrous-slotless",
    "cost": "6,050 gp",
    "summary": "Once per day, an item thoroughly doused with this skin's water is protected as by nondetection for five hours.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "waterskin-ever-full",
    "name": "Waterskin, Ever-full",
    "category": "wondrous-slotless",
    "cost": "600 gp",
    "summary": "Up to three times per day, activating this waterskin fills it completely, whether it was partially full or empty.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const AESS_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "blanket-arctic-weight",
    "name": "Blanket, Arctic Weight",
    "category": "gear",
    "cost": "1 gp",
    "weight": "5 lb.",
    "notes": "A heavy cold-weather blanket granting a +3 equipment bonus on Fortitude saves against extreme cold. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blanket-winter-weight",
    "name": "Blanket, Winter Weight",
    "category": "gear",
    "cost": "3-5 sp",
    "weight": "3 lb.",
    "notes": "A winter-weight blanket; price printed as a range. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elven-sia-aia",
    "name": "Elven Sia Aia",
    "category": "gear",
    "cost": "4-6 gp",
    "weight": "4 lb.",
    "notes": "A silken, waterproof elven sleeping cocoon; price printed as a range. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "legionnaires-bed",
    "name": "Legionnaire's Bed",
    "category": "gear",
    "cost": "10-12 gp",
    "weight": "7 lb.",
    "notes": "An armored bedroll: its sleeper wakes un-fatigued, as if with the Endurance feat. Price printed as a range. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "springing-tent",
    "name": "Springing Tent",
    "category": "gear",
    "cost": "45 gp (Small or Medium); 52 gp (Large)",
    "weight": "12 lb.",
    "notes": "A self-erecting masterwork tent, priced by size as printed. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "standard-bedroll-aess",
    "name": "Standard Bedroll",
    "category": "gear",
    "cost": "2-5 sp",
    "weight": "5 lb.",
    "notes": "The pamphlet's baseline bedroll; price printed as a range. (Weight printed as approximate.)",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "verminbane-sachet",
    "name": "Verminbane Sachet",
    "category": "gear",
    "cost": "4-5 cp",
    "weight": "Negligible",
    "notes": "Repels mundane vermin; creatures of the Vermin subtype take a −2 morale penalty on attacks, checks, and saves within 10 ft., and sprinkling it on a trail imposes a −4 penalty on scent-based tracking. Price printed as a range.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "waterproofing-aess",
    "name": "Waterproofing",
    "category": "service",
    "cost": "2-3 sp",
    "weight": "—",
    "notes": "A waterproofing treatment service for bedding and similar gear; price printed as a range.",
    "source": "Adventurer Essentials: Bedrolls (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flying-bastard-sword",
    "name": "Flying Bastard Sword",
    "category": "weapon",
    "cost": "60 gp",
    "weight": "11 lb.",
    "notes": "A bastard sword with a 5 ft. spiked chain on its hilt: it can be wielded as a bastard sword, as a spiked chain with 5 ft. reach, as a double weapon, or swung by the chain at 5–10 ft. reach.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "crystal-bastard-sword",
    "name": "Crystal Bastard Sword",
    "category": "weapon",
    "cost": "35 gp",
    "weight": "6 lb.",
    "notes": "A mundane bastard sword made of crystal; it performs no differently than a steel bastard sword but is sought after for its appearance.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "deep-crystal-bastard-sword",
    "name": "Deep Crystal Bastard Sword",
    "category": "weapon",
    "cost": "1,035 gp",
    "weight": "6 lb.",
    "notes": "A mundane bastard sword made of deep crystal, the usual base for psionic swords: 1,335 gp masterwork, and fine appearance adds circumstance bonuses to Bluff, Diplomacy, and Intimidate at higher price tiers (2,335 gp for +1 up to 6,335 gp for +5) as printed in the pamphlet.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-blade-masterwork-blood-groove",
    "name": "Sword Blade, Masterwork Blood Groove",
    "category": "gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "A sword component for masterwork blades only: the blood groove increases the blade's hit points by 50%.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-blade-serrated",
    "name": "Sword Blade, Serrated",
    "category": "gear",
    "cost": "3.5 gp",
    "weight": "—",
    "notes": "A serrated sword blade: −2 on attacks but +2 damage, threat range increased by 1, hardness reduced by 2 and hit points by 25%, and the blade sticks in the target on a critical hit. (Three-way in-book price conflict: the component table prints 3.5 gp, used here; the description prints 'Cost: 15 gp'; the crafting text prices it at 10% of the weapon's cost.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-guard-bladed",
    "name": "Sword Guard, Bladed",
    "category": "gear",
    "cost": "20 gp",
    "weight": "—",
    "notes": "A sword guard fitted with blades.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-guard-heavier-medium",
    "name": "Sword Guard, Heavier (Medium)",
    "category": "gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A heavier sword guard granting a +1 shield bonus at a −1 penalty on attacks.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-guard-heavier-heavy",
    "name": "Sword Guard, Heavier (Heavy)",
    "category": "gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A much heavier sword guard granting a +2 shield bonus at a −2 penalty on attacks.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-guard-holy",
    "name": "Sword Guard, Holy",
    "category": "gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A sword guard that functions as a holy symbol.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-guard-ring-hilt",
    "name": "Sword Guard, Ring Hilt",
    "category": "gear",
    "cost": "15 gp",
    "weight": "—",
    "notes": "A ring-hilted sword guard granting +4 AC against called shots to the fingers. (Price printed as '15g'.)",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-pommel-spiked",
    "name": "Sword Pommel, Spiked",
    "category": "gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A sword pommel fitted with a spike.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-pommel-stake",
    "name": "Sword Pommel, Stake",
    "category": "gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A sword pommel shaped as a wooden stake.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-pommel-weighted",
    "name": "Sword Pommel, Weighted",
    "category": "gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "A weighted sword pommel: after a month of practice it adds +1 damage, and a bastard sword fitted with one can be used one-handed at a −2 penalty instead of −4 without the Exotic Weapon Proficiency.",
    "source": "Adventurer Essentials: Bastard Sword (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "appraisers-kit",
    "name": "Appraiser's Kit",
    "category": "tool",
    "cost": "5 gp",
    "weight": "10 lb.",
    "notes": "A merchant's scale, measured weights, and a chapbook of coin drawings and trade law: grants a +2 circumstance bonus on Appraise checks, on Diplomacy checks during trade negotiations, and on Profession (moneylender/changer or banker) checks. A masterwork kit costs 66 gp and grants a +4 bonus.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bribe-mans-boot-heel",
    "name": "Bribe-man's Boot-heel",
    "category": "gear",
    "cost": "6 gp",
    "weight": "2-4 lb.",
    "notes": "A boot heel with a cleverly concealed watertight compartment holding any Fine or smaller object (a few coins, small lock picks, or a key); finding it requires a DC 22 Search check.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "muffled-coin-pouch",
    "name": "Muffled Coin Pouch",
    "category": "gear",
    "cost": "2 sp",
    "weight": "—",
    "notes": "A coin pouch muffled so its contents do not jingle.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "thiefs-sheen",
    "name": "Thief's Sheen",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A 1 oz. vial of golden paint (Dyskaine's Oil) coating up to two dozen coins; a counterfeiter using it gains a +2 equipment bonus on Bluff and Forgery checks to pass a falsified coin. Possession is evidence of counterfeiting in most kingdoms.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "coins-of-secret-talent-service",
    "name": "Coins of Secret Talent (Service)",
    "category": "service",
    "cost": "110% gold piece value (money changing fee)",
    "weight": "Negligible",
    "notes": "A money-changing service for Coins of Secret Talent — rune-inscribed coins worth 1,000 gp each (an 'Archmage's Talent' with an inset diamond is worth 10,000 gp) — charged at 110% of the gold piece value as printed.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "money-changing-service",
    "name": "Money Changing (Service)",
    "category": "service",
    "cost": "90%-110% gold piece value",
    "weight": "—",
    "notes": "Changing one nation's coinage for another's; the rate depends on the Diplomacy or Profession (banker/moneychanger) negotiation described in the pamphlet, as printed.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "perfumed-coins-service",
    "name": "Perfumed Coins (Service)",
    "category": "service",
    "cost": "80% gold piece value (discount)",
    "weight": "—",
    "notes": "Perfumed Guild currency, purchasable in any denomination from a Guild moneychanger for 80% of its gold piece value and spendable at Perfumed Guild inns, bordellos, and taverns, as printed.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tithing-coins-service",
    "name": "Tithing Coins (Service)",
    "category": "service",
    "cost": "120% gold piece value (money changing fee)",
    "weight": "—",
    "notes": "Temples change ordinary coins into tithing coins (wood, bone, ceramic, ivory, or precious metal) for offerings at 120% of value as printed; tithing coins have virtually no value outside the church.",
    "source": "Adventurer Essentials: Gold Piece (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sun-water",
    "name": "Sun Water",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A holy water variant made with gold dust and a daylight spell: it glows as brightly as a candle and deals 2d6 damage on a direct hit (1d6 splash) only to creatures vulnerable to sunlight. Churches produce it at cost (50 gp).",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "turning-water",
    "name": "Turning Water",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A holy water variant infused with channeled positive energy: undead of 5 HD or less struck directly are turned as by the creator's turning attempt, undead of 2 HD or less are destroyed, and splashed undead of 2 HD or less are turned. It has no effect on evil outsiders.",
    "source": "Adventurer Essentials: Holy Water (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "candle-altar-sworn",
    "name": "Candle, Altar-sworn",
    "category": "gear",
    "cost": "100 gp",
    "weight": "1½ lb.",
    "notes": "A large altar candle: clerics of the designated faith turn or rebuke undead as if one level higher while within 20 ft. of its glow.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "candelabra-hand",
    "name": "Candelabra, Hand",
    "category": "gear",
    "cost": "1 cp",
    "weight": "Negligible",
    "notes": "A small hand-held candelabra.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dwarven-foss-kalk",
    "name": "Dwarven Foss-kalk",
    "category": "alchemical gear",
    "cost": "2-3 gp",
    "weight": "1½ lb.",
    "notes": "A chemically glowing stone, usually worn as a necklace: clear light in a 30 ft. radius and shadowy illumination to 60 ft. for 2d6 hours. Quenched by water or airless conditions, it cannot ignite trapped gases. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lamp-commoners",
    "name": "Lamp, Commoner's",
    "category": "gear",
    "cost": "1-2 sp",
    "weight": "1 lb.",
    "notes": "A cheap oil bowl lamp: clear light in a 15 ft. radius, shadowy illumination to 30 ft., burning 6 hours on a pint of oil; easily quenched by wind and rain. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lamp-kerosener",
    "name": "Lamp, Kerosener",
    "category": "gear",
    "cost": "1-2 sp",
    "weight": "¼ lb.",
    "notes": "A tiny enclosed miner's lamp buckled to the skull, chest, or belt, keeping both hands free. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lamp-paper",
    "name": "Lamp, Paper",
    "category": "gear",
    "cost": "8-12 gp",
    "weight": "1 lb.",
    "notes": "A paper lantern: clear light in a 20 ft. radius and shadowy illumination to 45 ft., burning 6 hours on a pint of oil. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lamp-spiked",
    "name": "Lamp, Spiked",
    "category": "gear",
    "cost": "4-5 sp",
    "weight": "4 lb.",
    "notes": "A commoner's lamp on a 4–5 ft. spike that can be planted in the earth (a standard action), leaving the owner's hands free; otherwise as a commoner's lamp. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lantern-bullseye-masterwork",
    "name": "Lantern, Bullseye (Masterwork)",
    "category": "gear",
    "cost": "55 gp",
    "weight": "3 lb.",
    "notes": "A masterwork bullseye lantern, called a 'safety lantern', focusing light through a narrow aperture into a beam.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mage-held-lantern-service",
    "name": "Mage-held Lantern (Service)",
    "category": "service",
    "cost": "55-60 gp",
    "weight": "—",
    "notes": "The service of enchanting a lantern to be mage-held: it hovers and drifts along at 20 ft. per round, can be sent alone to a named destination, and comes when called from up to 100 ft. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "oil-half-light",
    "name": "Oil, Half-light",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "½ - 1 lb.",
    "notes": "A pint of oil whose flame's light is visible only to creatures with low-light vision or darkvision. Producing it takes a DC 20 Craft (alchemy) check and about a day's distillation.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shadowbox",
    "name": "Shadowbox",
    "category": "gear",
    "cost": "12 gp",
    "weight": "2-5 lb.",
    "notes": "Painted screens placed around a lamp or candle to project flickering shadow-plays; using one as a prop grants a +1 bonus on Perform checks (+3 for a masterwork shadowbox, 76 gp).",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "umbra-root",
    "name": "Umbra-root",
    "category": "alchemical gear",
    "cost": "5-8 gp",
    "weight": "Negligible",
    "notes": "A knuckle-sized plug of cavern root: a creature with inherent darkvision who chews it doubles its darkvision range for 1d3 hours. Price printed as a range.",
    "source": "Adventurer Essentials: Lantern (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rope-mithril-laced-hempen-50-ft",
    "name": "Rope, Mithril-Laced Hempen (50 ft.)",
    "category": "gear",
    "cost": "250 gp",
    "weight": "12 lb.",
    "notes": "Hempen rope laced with mithril thread, priced here at the standard 1-inch diameter: maximum load 6,000 lb. The pamphlet's full diameter grid runs 50 gp (1/4 in.) to 250 gp (1 in.).",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rope-spiders-web-50-ft",
    "name": "Rope, Spider's Web (50 ft.)",
    "category": "gear",
    "cost": "4 gp",
    "weight": "½ lb.",
    "notes": "Rope spun from a colossal monstrous spider's web, priced here at 1/2-inch diameter: maximum load 350 lb.; very lightweight and difficult to cut or burst. The pamphlet also lists a 1/4-inch length at 2 gp.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "block-and-tackle-two-pulley",
    "name": "Block and Tackle, Two-Pulley",
    "category": "gear",
    "cost": "5 gp",
    "weight": "5 lb.",
    "notes": "A two-pulley block and tackle, designed for standard 1-inch rope; rope is not included.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "block-and-tackle-three-pulley",
    "name": "Block and Tackle, Three-Pulley",
    "category": "gear",
    "cost": "8 gp",
    "weight": "8 lb.",
    "notes": "A three-pulley block and tackle, designed for standard 1-inch rope; rope is not included.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "block-and-tackle-four-pulley",
    "name": "Block and Tackle, Four-Pulley",
    "category": "gear",
    "cost": "12 gp",
    "weight": "12 lb.",
    "notes": "A four-pulley block and tackle, designed for standard 1-inch rope; rope is not included.",
    "source": "Adventurer Essentials: Rope (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-cedar-treated",
    "name": "Torch, Cedar (Treated)",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "An alchemically treated cedar torch: vermin within 20 ft. of the burning torch take a −1 penalty on attack rolls, and the treatment extends its burn time to 2 hours. (Craft DC 15.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-cypress-treated",
    "name": "Torch, Cypress (Treated)",
    "category": "alchemical gear",
    "cost": "3 gp, 5 sp",
    "weight": "—",
    "notes": "An alchemically treated cypress torch: divine spellcasters within 20 ft. of the burning torch gain a +1 morale bonus on Concentration checks. (Craft DC 20.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-fir-treated",
    "name": "Torch, Fir (Treated)",
    "category": "alchemical gear",
    "cost": "3 gp, 5 sp",
    "weight": "—",
    "notes": "An alchemically treated fir torch: arcane spellcasters within 20 ft. of the burning torch gain a +1 bonus on Concentration checks. (Craft DC 20.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-pine-treated",
    "name": "Torch, Pine (Treated)",
    "category": "alchemical gear",
    "cost": "13 gp",
    "weight": "—",
    "notes": "An alchemically treated pine torch: living creatures within 20 ft. of the burning torch gain a +1 bonus on Will saves. (Craft DC 20.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-spruce-treated",
    "name": "Torch, Spruce (Treated)",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "—",
    "notes": "An alchemically treated spruce torch: squeezing it hurls its burning cap and resin at a foe up to 20 ft. away (ranged touch), dealing 2 fire damage and 2 more per round for 1d4 rounds unless extinguished (Reflex DC 15). (Craft DC 15.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "torch-masterwork-incida",
    "name": "Torch, Masterwork (Incida)",
    "category": "gear",
    "cost": "320 gp",
    "weight": "—",
    "notes": "A masterwork torch of extraplanar incida wood that burns oil its glands produce from air: clear light to 30 ft. and shadowy illumination to 60 ft., lit even underwater, for up to seven days. It grants a +1 attack bonus as an improvised weapon and can be magically enhanced as a masterwork weapon. (Craft DC 30.)",
    "source": "Adventurer Essentials: Torch (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "waterskin-of-holy-water",
    "name": "Waterskin of Holy Water",
    "category": "gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A waterskin of holy water (or unholy water), marked on the stopper with a religious glyph: usable as flasks of holy water with 4 uses, a maximum range of 5 ft., one use at a time, and use provokes an attack of opportunity.",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-bacopa-leaf",
    "name": "Infuser Waterskin, Bacopa Leaf",
    "category": "alchemical gear",
    "cost": "31 gp",
    "weight": "—",
    "notes": "An infuser waterskin: squeezing its neck releases the infusion into the water, granting the drinker a +3 alchemical bonus on Will saves for 1 hour. Only one infuser waterskin of each type can benefit a creature per day. (Craft DC 15.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-jinseng-root",
    "name": "Infuser Waterskin, Jinseng Root",
    "category": "alchemical gear",
    "cost": "120 gp",
    "weight": "—",
    "notes": "An infuser waterskin granting the drinker a +1 alchemical bonus on attack and damage rolls for 2d12 minutes. Only one infuser waterskin of each type can benefit a creature per day. (Craft DC 15.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-lily-of-the-valley-flower",
    "name": "Infuser Waterskin, Lily-of-the-Valley Flower",
    "category": "alchemical gear",
    "cost": "40 gp",
    "weight": "—",
    "notes": "An infuser waterskin that confuses the drinker for 1d6 rounds unless they succeed on a Fortitude save (DC 15). Only one infuser waterskin of each type can affect a creature per day. (Craft DC 20.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-monkshood-root",
    "name": "Infuser Waterskin, Monkshood Root",
    "category": "alchemical gear",
    "cost": "80 gp",
    "weight": "—",
    "notes": "An infuser waterskin that sickens the drinker for 2d4 minutes unless they succeed on a Fortitude save (DC 15). Only one infuser waterskin of each type can affect a creature per day. (Craft DC 20.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-peppermint-root",
    "name": "Infuser Waterskin, Peppermint Root",
    "category": "alchemical gear",
    "cost": "4 gp",
    "weight": "—",
    "notes": "An infuser waterskin granting the drinker a +2 bonus on Listen and Spot checks for 2d4 minutes. Only one infuser waterskin of each type can benefit a creature per day. (Craft DC 15.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-quickroot-stem",
    "name": "Infuser Waterskin, Quickroot Stem",
    "category": "alchemical gear",
    "cost": "48 gp",
    "weight": "—",
    "notes": "An infuser waterskin granting the drinker a +2 bonus on all Dexterity-based skill checks and +5 ft. to land speed for 1d4 hours. Only one infuser waterskin of each type can benefit a creature per day. (Craft DC 30.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infuser-waterskin-teleri-leaf",
    "name": "Infuser Waterskin, Teleri Leaf",
    "category": "alchemical gear",
    "cost": "33 gp",
    "weight": "—",
    "notes": "An infuser waterskin granting the drinker fire resistance 5 for 1d4 hours. Only one infuser waterskin of each type can benefit a creature per day. (Craft DC 30.)",
    "source": "Adventurer Essentials: Waterskin (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bread-loaf-aess",
    "name": "Bread, Loaf",
    "category": "gear",
    "cost": "2 cp",
    "weight": "½ lb.",
    "notes": "A loaf of bread, from the pamphlet's breakdown of the component costs of a day's trail rations.",
    "source": "Adventurer Essentials: Iron Rations (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cheese-hunk-aess",
    "name": "Cheese, Hunk",
    "category": "gear",
    "cost": "1 sp",
    "weight": "½ lb.",
    "notes": "A hunk of cheese, from the pamphlet's breakdown of the component costs of a day's trail rations.",
    "source": "Adventurer Essentials: Iron Rations (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "meat-chunk-aess",
    "name": "Meat, Chunk",
    "category": "gear",
    "cost": "3 sp",
    "weight": "½ lb.",
    "notes": "A chunk of meat, from the pamphlet's breakdown of the component costs of a day's trail rations.",
    "source": "Adventurer Essentials: Iron Rations (Skortched Urf Studios)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
