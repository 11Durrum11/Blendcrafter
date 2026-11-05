import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Explorer's Handbook (Eberron, Wizards of the Coast, 2005)
// prestige classes — the book's complete list, per its own
// Table 2-3: New Prestige Classes (p. 58): Cataclysm Mage
// (pp. 58-63), Thunder Guide (pp. 64-69), and Windwright
// Captain (pp. 70-75). Transcribed from Shaun's own copy
// (text-extracted), 2026-11-05. Progression tables and class
// features are complete; feature text is a full mechanical
// summary in our own words, per house style — no book prose
// is reproduced. The Thunder Guide's Table 2-5 interleaves
// its first three rows in the text layer; those rows are
// reconstructed from the standard progressions the table's
// clean rows (4th-10th) follow exactly. The Extreme
// Explorer sometimes associated with this book is actually
// from the Eberron Campaign Setting and is already in the
// catalog there.

const EH = "Explorer's Handbook";
const EH_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Explorer's Handbook.pdf";
const CM = `${EH} — Cataclysm Mage`;
const TG = `${EH} — Thunder Guide`;
const WC = `${EH} — Windwright Captain`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: EH_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fc = mk(CM);
const ft = mk(TG);
const fw = mk(WC);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

export const EXPLORERS_HANDBOOK_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cataclysm-mage",
    name: "Cataclysm Mage",
    ruleset: "eberron",
    source: `${CM} (pp. 58-63)`,
    sourceUrl: EH_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Knowledge (arcana)",
      "Knowledge (history)", "Knowledge (the planes)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Knowledge (history) 8 ranks, Knowledge (the planes) 8 ranks",
      "Spells or Spell-Like Abilities: Ability to cast 3rd-level arcane spells",
      "Special: Character must have received a vision, such as those from a dusk hag, the Pond of Shadows in the Shadow Marches, or a demon glass oracle",
    ],
    features: [
      fc("Cataclysm Mage", "A seeker of the mysteries of Eberron's past ages and their cataclysms. As the cataclysm mage grows in power, he uncovers the secrets of each past age in order: the Age of Monsters, the Age of Giants, and the Age of Demons. No cataclysm mage has yet progressed to study the end of the Age of Dragons; the dragons of Argonnessen mark those who attempt it for death.", undefined),
      fc("Spellcasting", "At every level except 1st, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in an arcane spellcasting class to which you belonged before adding the prestige class level. You do not gain any other benefit a character of that class would have gained. If you had more than one arcane spellcasting class before becoming a cataclysm mage, you must decide to which class to add each level.", 2),
      fc("Dhakaani Secret (Ex)", "The Dhakaani were powerful artificers of arms and armor. When you create magic weapons with the Craft Magic Arms and Armor feat, you can imbue the weapon with one of the following special abilities at no experience point cost: bane, keen, mighty cleaving, thundering, or vicious. When you create magic armor or shields with the feat, you can imbue the armor or shield with one of the following special abilities at no experience point cost: arrow catching, bashing, blinding, light fortification, shadow, or silent moves. You still pay the experience point cost for the item's other abilities as normal, and the gold piece cost of creating the item is unchanged.", 1),
      fc("Personal Prophecy", "At 1st level and every three levels thereafter (4th, 7th, 10th), you receive and create a personal prophecy (rolled on the book's d12 table or chosen by the DM). After you fulfill your prophecy, fate smiles on you: your next four action points spent use d8s rather than d6s. At the DM's option, you might not be allowed to progress past the next cataclysm level until you have fulfilled your personal prophecy. Only cataclysm mages can benefit from a personal prophecy; if the last level you gained was in another class, you cannot earn or use the benefits of a personal prophecy until you take another level of cataclysm mage.", 1),
      fc("Xoriat Secret (Ex)", "From 2nd level on, your study of the cataclysm that ended the Age of Monsters grants you immunity to confusion and insanity effects.", 2),
      fc("Cataclysm of Flesh (Sp)", "At 3rd level, once per day (spell-like ability), you tear a hole in the fabric of the planes and let the madness of Xoriat corrupt all it touches. Range 25 feet + 5 feet per class level; duration 1 round per class level. All creatures within a 20-foot radius of the effect's center must succeed on a Reflex save (DC 14 + your Int modifier) or have their flesh melt away: an affected creature cannot hold or use any item (including clothing, armor, and magic items), can ooze forward with gelatinous pseudopods at a speed of 10 feet, has its other movement modes reduced by 30 feet (to a minimum of 0, losing the mode until it regains its normal form), attacks with natural weapons at a -4 penalty with a 50% miss chance, and must succeed on a Concentration check (DC 25 + spell level) to cast a spell or use a spell-like ability (and cannot cast spells requiring material components). The victim regains its normal form when the effect ends.", 3),
      fc("Cor'dran Secret (Ex)", "At 4th level, you commence your study of the Age of Giants with the Cor'dran Empire. Once per day, you can maximize one repair damage spell you cast (as if under the effect of the Maximize Spell feat) without affecting the level of the spell or its casting time.", 4),
      fc("Dal Quor Secret (Ex)", "Starting at 5th level, from your study of the quori you gain a +2 resistance bonus on any saving throw made to resist a psionic effect or psi-like ability.", 5),
      fc("Cataclysm of Dreams (Sp)", "At 6th level, once per day, you cause earth and dreams alike to quake. All those standing on the ground within a 20-foot radius around you must succeed on a DC 20 Balance check or fall prone. Any structures within the area take 75 points of damage (hardness does not reduce this damage, nor is it halved as damage dealt to objects normally is). At the same time, intelligent creatures within 20 feet see fearsome ghostly tsucora quori rise from fissures in the earth: those who fail a Will save (DC 16 + your Int modifier) are panicked; those who succeed are shaken. Both effects last 1d4 rounds. The nightmare (but not the earth tremors) is a mind-affecting fear effect.", 6),
      fc("Ashtakalan Secret (Ex)", "At 7th level, your study of the Age of Demons begins with the demonic city of Ashtakala. Add +1 to the DC for all saving throws against enchantment (charm) spells you cast. This bonus stacks with any similar bonus, such as from Spell Focus.", 7),
      fc("Haka'torvhak Secret (Ex)", "From 8th level on, you gain a +2 insight bonus on caster level checks made to overcome a demon's spell resistance (including checks made when a bound demon attempts to break free from one of your magic circles, as might happen after you cast a planar binding spell).", 8),
      fc("Cataclysm of Silver (Sp)", "At 9th level, once per day, you generate a flood of silver flame, creating a river of holy fire 20 feet wide and 20 feet high that sweeps you along at its head. You move at a speed of 40 feet per round; the path you and the river move along burns for the duration. The silver flame deals damage equal to 1d6 points + your cataclysm mage level each round to any creature in the area; half the damage is fire damage and half is positive energy damage. Buildings and objects do not halve the damage. The river continues to flow for up to 1 round per class level, or until dismissed. While guiding the river you can take no other actions; if you stop guiding it, the effect ends immediately. Creatures can only be affected once per round; if the river overlaps its previous course, creatures in the overlap take damage as normal. While the ability is active, you are immune to damage from any cataclysm of silver, including another cataclysm mage's. Your movement at the head of the river provokes attacks of opportunity as normal.", 9),
      fc("Dragonmark Secret (Ex)", "At 10th level, at the beginning of each day you can choose to manifest one least, lesser, or greater dragonmark for the entire day, gaining the use of the spell-like ability associated with the mark you manifest. If you already have a dragonmark, you do not gain the ability to manifest two dragonmarks at once; instead, you gain the ability to change your dragonmark at the beginning of each day.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "thunder-guide",
    name: "Thunder Guide",
    ruleset: "eberron",
    source: `${TG} (pp. 64-69)`,
    sourceUrl: EH_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ, G, P, P),
    classSkills: [
      "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Gather Information",
      "Intimidate", "Jump", "Knowledge (geography)", "Knowledge (local)", "Profession",
      "Ride", "Sense Motive", "Speak Language", "Spot", "Survival", "Swim",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Diplomacy 3 ranks",
      "Special: Must have adventured in at least two of the following areas: Aerenal, Argonnessen, Seren, Shargon's Teeth, the Thunder Sea, Xen'drik",
      "Special: Must speak at least one of the following languages: Aquan, Argon, Elven, Draconic, Drow, Giant, Sahuagin",
    ],
    features: [
      ft("Thunder Guide", "A multilingual daredevil guide who travels to the wildest places in Eberron — bodyguard to nobles on safari and shepherd to spelunking university professors around the Thunder Sea. As a thunder guide advances, he learns the secrets of swordplay and commerce in, under, and around the Thunder Sea, from Sharn and Shargon's Teeth in the west to Argonnessen and the southern tip of Seren in the east.", undefined),
      ft("Speak Language", "At 1st level and at every third level thereafter (4th, 7th, 10th), you learn to speak a new language from the following list: Aquan, Argon, Celestial, Elven, Draconic, Drow, Giant, Sahuagin, Undercommon.", 1),
      ft("Thunder Lore", "At every even-numbered class level (2nd, 4th, 6th, 8th, 10th), you learn one secret from your contacts among the civilizations of the Thunder Sea; pick one ability from this list each time. Aereni Crystalmancy (Sp): with an Irian crystal as a focus, use false life once per day as a spell-like ability (CL 3rd); 15% chance the crystal shatters. Breath of Shargon (Ex): hold your breath for 1 minute per point of Constitution before making Constitution checks. Dragonsong (Ex): immune to the captivating song of harpies, the fascinate and suggestion spell-like abilities of a bard, and similar lesser songs; +4 insight bonus on saves against any other charm effect. Eye of the Chamber (Ex): study one opponent as a standard action to gain a +1 bonus on attack rolls against that opponent (lost if you go an hour without attacking it). Ghost of Xen'drik: in any jungle environment, +4 competence bonus on Hide, Move Silently, and Survival checks. Malenti Pearl Trick (Sp): with a pearl of at least 100 gp value as a focus, use charm person once per day as a spell-like ability (CL 3rd). Pandin Temn (Ex): +1 dodge bonus to AC and +1 bonus on attack rolls when fighting any creature Large or larger. Savage of the Mists (Sp): use obscuring mist once per day as a spell-like ability (CL 3rd); when fighting in mist or fog thick enough to grant concealment, +2 bonus on weapon damage rolls. Savage of the Storm (Su): once per day, gain a +2 bonus to Strength for 1 minute; activating is a full-round action that provokes attacks of opportunity. Seren Hide (Ex): +1 natural armor bonus. Vicious Barbarism (Ex): any time one of your melee attacks reduces an opponent to less than 1 hit point per Hit Die she possesses, roll 1d4 + 1 per three thunder guide levels; if the result exceeds the target's remaining hit points, the target takes that much extra damage. Xen'drik Boomerang Expert: gain Exotic Weapon Proficiency (Xen'drik boomerang); when you throw a Xen'drik boomerang, its range increment increases to 30 feet and you never fail your attack roll to catch a returning one.", 2),
      ft("Native Ties", "At 3rd level and every three levels thereafter (6th, 9th), you bond with the natives of a particular region whose language you speak. Each time, choose a new culture and gain a +2 competence bonus on Diplomacy, Gather Information, and Sense Motive checks made with members of that culture, plus a culture-specific benefit. Drow of Xen'drik: an adoptive drow family within 50 miles of the Thunder Sea coast furnishes you, when you visit, with up to two of: vials of antitoxin, glyphbooks, flasks of acidic fire, Mabar crystals, noxious smokesticks; with a DC 15 Diplomacy check they will also cast one of dispel magic, remove curse, or remove disease (all CL 5th) for you. Elves of Pylas Talaear: free accommodation in the elven port; the governor subsidizes half the cost of any House Lyrandar airship or galleon trip to or from Pylas Talaear; with a DC 15 Charisma check you can buy kieros leaves and covadish leaves at half price. Elves of the Northern Steppes: the Tairnadal recognize you as one of their own; in the northern plains of Aerenal you can purchase Tairnadal steeds (as Valenar riding horses but Str 16, Dex 16, all trained for war) for 1,200 gp. Sahuagin of Shargon's Teeth: right of passage through Shargon's Teeth; make a DC 20 Diplomacy check to raise attacking sahuagin raiders' attitude from hostile to unfriendly; you can hire aquatic mercenaries (sahuagin, merrow, scrags, locathah) for no less than 70 gp each per day. Seren Barbarians: trade with the Seren barbarians as if you bore a dragonmark; with a DC 15 Diplomacy check with the village's Shroud of Scales, purchase up to two potions (2nd-level or lower) at half price; with a DC 20 Diplomacy check, purchase one Quaal's feather token at half price. Storm Giants of Xen'drik: a befriended giant in ruins within 50 miles of the Thunder Sea coast will conduct arcane research at your request, as if casting a legend lore spell. Stormreach Irregulars: +4 circumstance bonus on Gather Information checks and a +2 circumstance bonus on Sleight of Hand checks within Stormreach; you treat the city as a large town for Urban Tracking check DCs and the number of checks required.", 3),
      ft("Lionized in the Press", "Starting at 5th level, the Korranberg Chronicle and other news chronicles recount your adventures. You gain a +2 circumstance bonus on Diplomacy checks when dealing with members of the press, nobility, and dragonmarked houses in Khorvaire. At the University of Wynarn, Morgrave University, or the Korranberg Library, you can present a lecture, earning 200 gp for your appearance with a successful DC 10 Perform (oratory) check (no more than one such speech per month).", 5),
      ft("Rescue Artist", "From 6th level, you automatically succeed on Climb check attempts made to catch a falling character. You also gain a +4 competence bonus on all Strength-based skill checks made when carrying or supporting another person (such as Climb checks to swing on a rope while holding another person, Jump checks to dismount from a swinging rope with another in your grasp, and Swim checks made while supporting a foundering swimmer). When using the Ride skill, you can make a DC 15 Ride check to lift a willing person into the saddle as a special standard action that can occur in the middle of your move action.", 6),
      ft("Serial Hero", "At 8th level, a famed Korranberg Chronicle reporter writes a serialized account of your adventures appearing over the course of thirteen weeks. You earn 1,000 gp per point of your Charisma bonus for the rights to your story (minimum 1,000 gp).", 8),
      ft("Society Peer", "At 10th level, you are entitled to use the prefix \"Lord\" in Aundair, Breland, Karrnath, and Thrane. Your circumstance bonus on Diplomacy checks when dealing with nobility and members of the dragonmarked houses increases to +3. House Lyrandar and House Orien grant you unrestricted traveling privileges at no cost on their lines.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "windwright-captain",
    name: "Windwright Captain",
    ruleset: "eberron",
    source: `${WC} (pp. 70-75)`,
    sourceUrl: EH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ.slice(0, 5), P.slice(0, 5), G.slice(0, 5), G.slice(0, 5)),
    classSkills: [
      "Balance", "Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Hide", "Jump", "Knowledge (geography)", "Listen", "Move Silently", "Profession",
      "Spot", "Swim", "Tumble", "Use Magic Device", "Use Rope",
    ],
    prerequisites: [
      "Race: Half-elf",
      "Skills: Balance 4 ranks, Profession (sailor) 10 ranks, Use Magic Device 6 ranks",
      "Feats: Lesser Dragonmark (Mark of Storm; must have selected the wind's favor ability)",
      "Special: Ability to cast 1st-level arcane spells or imbue 1st-level infusions. Must have piloted an airship or wind galleon at least once while in the service of House Lyrandar",
    ],
    features: [
      fw("Weapon and Armor Proficiency", "You gain proficiency with the short sword and the rapier, but not with any armor or shield. Windwright captains slowly bond with a single elemental-powered vessel, becoming its absolute master.", undefined),
      fw("Spellcasting/Infusions", "At each odd-numbered level (1st, 3rd, 5th), you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in an arcane spellcasting class to which you belonged before adding the prestige class level; alternatively, you gain new infusions per day as if you had gained a level in an infusion-imbuing class to which you belonged. You do not gain any other benefit a character of that class would have gained. If you are capable of both, or had more than one such class, you must decide to which class to add each level.", 1),
      fw("Dragonmark Control (Ex)", "Levels in the windwright captain prestige class count as levels in the dragonmark heir prestige class when determining the caster level for the spell-like abilities of your dragonmarks. The bond also gives you an increased understanding of elementals in general and an improved ability to use more traditional forms of magic.", 1),
      fw("Master Pilot (Ex)", "While piloting a vehicle powered by a bound elemental, you can add your windwright captain class level to your Profession (sailor) checks.", 1),
      fw("Shipboard Fighter (Ex)", "At 1st level and beyond, you can take 10 on Balance and Climb checks even if threatened and distracted. You also do not lose your Dexterity bonus to Armor Class when balancing or climbing.", 1),
      fw("Acquire Ship", "Starting at 2nd level, House Lyrandar lends you a standard airship or wind galleon (your choice) for your indefinite use, with enough House Lyrandar crew members to properly operate it (each a half-elf expert 1 with maximum ranks in Profession [sailor]). As long as you remain in good standing with House Lyrandar, you can use the vessel as you see fit, with one condition: one-fifth of your gross income from the use of the ship must be tithed back to Lyrandar, including any treasure retrieved during explorations for which the ship was utilized. At any time after acquiring the ship, you can purchase it outright for the standard airship cost of 92,000 gp; doing so voids the tithe but the house begins charging fees for the use of the crew.", 2),
      fw("Uncanny Dodge (Ex)", "Starting at 2nd level, you cannot be caught flat-footed and react to danger before your senses would normally allow you to do so (as the barbarian class feature).", 2),
      fw("Rebuke Elementals (Su)", "Choose one type of elemental bound by House Lyrandar ships (either air or fire). At 3rd level, you gain the ability to rebuke, command, or bolster elementals of that type, as an evil cleric rebukes undead. Use your character level in place of your cleric level when determining how many Hit Dice of elementals you can affect. Bound elementals under your command through a wheel of wind and water, lesser shipbond, or greater shipbond do not count toward the total Hit Dice of elementals commanded.", 3),
      fw("Lesser Shipbond (Su)", "At 4th level, you can forge a magical bond with a single vessel powered by a bound elemental. The process requires raw materials costing 1/25 of the vessel's value (3,680 gp for a standard airship, 2,560 gp for a wind galleon), experience points equal to 1/10 of the vessel's value (9,200 XP for an airship, 6,400 XP for a wind galleon), and a full day of uninterrupted meditation. Once established: you no longer require a wheel of wind and water to use your dragonmark to control the bound elemental; you can telepathically communicate with it from anywhere aboard the ship and give it orders as a move action; the vessel's top speed increases by +20 feet while you are at the helm (an enhancement bonus — a standard airship or wind galleon reaches 24 miles per hour overland, or 576 miles per day); the elemental accepts your dominance, becoming a trusted ally that can initiate telepathic contact with you while you are aboard and warns you of approaching danger; others attempting to control the elemental without a dragonmark take a -8 penalty on their Charisma check, a dragonmark heir using a wheel of wind and water must succeed on a Charisma check, and the elemental gains a +4 circumstance bonus on saves against spells or infusions that would grant control to anyone other than you. You can have a lesser shipbond with only one vessel at a time; ending a bond (or losing the vessel) requires a DC 15 Fortitude save — failure means you lose 200 XP per windwright captain level, success halves the loss.", 4),
      fw("Greater Shipbond (Su)", "At 5th level, your bond to your chosen ship increases in power. You can telepathically communicate with your vessel's bound elemental at any range, up to 1 mile per point of your Charisma bonus. You can even order the elemental to begin moving the ship while you are not aboard (using the elemental's Profession [sailor] check, usually +0, instead of yours). If you are aboard, you and the elemental act almost as one, allowing you to command it as a free action instead of a move action.", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
