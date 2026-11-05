import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Five Nations (Eberron, Wizards of the Coast, 2005)
// prestige classes — the book's complete list: Knight
// Phantom (Aundair, pp. 41-43), Dark Lantern (Breland,
// pp. 69-71), Cyran Avenger (Cyre, pp. 86-87), Bone Knight
// (Karrnath, pp. 117-119), and Silver Pyromancer (Thrane,
// pp. 150-152). Transcribed from Shaun's own copy
// (text-extracted), 2026-11-05. Progression tables and
// class features are complete; feature text is a full
// mechanical summary in our own words, per house style —
// no book prose is reproduced. The rest of Five Nations is
// nation lore: it prints no new feats, no new magic items,
// and no races or templates (its Magebred Animals section,
// pp. 74-76, gives monster stat blocks built on the
// Eberron Campaign Setting's magebred template, which
// Five Nations does not reprint).

const FN = "Five Nations";
const FN_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Five Nations.pdf";
const KP = `${FN} — Knight Phantom`;
const DL = `${FN} — Dark Lantern`;
const CA = `${FN} — Cyran Avenger`;
const BK = `${FN} — Bone Knight`;
const SP = `${FN} — Silver Pyromancer`;

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
      sourceUrl: FN_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fk = mk(KP);
const fd = mk(DL);
const fc = mk(CA);
const fb = mk(BK);
const fs = mk(SP);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3];
const KP_FORT = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];

export const FIVE_NATIONS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "knight-phantom",
    name: "Knight Phantom",
    ruleset: "eberron",
    source: `${KP} (pp. 41-43)`,
    sourceUrl: FN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, KP_FORT, POOR10, POOR10),
    classSkills: [
      "Concentration", "Craft", "Intimidate", "Knowledge (arcana)",
      "Knowledge (geography)", "Ride", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Feats: Still Spell",
      "Skills: Ride 4 ranks",
      "Special: Proficiency in all martial weapons",
      "Special: Ability to cast phantom steed",
      "Special: Citizen of Aundair, member of the Order of the Knights Arcane",
    ],
    features: [
      fk("Knight Phantom Spellcasting", "Specialized light cavalry of Aundair's Knights Arcane who ride phantom steeds to the critical point of a battle, then win it with spellcasting and martial prowess. At each level except 1st, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in an arcane spellcasting class to which you belonged before adding the prestige class level; you gain no other benefit of that class, and with more than one arcane class you must choose which one each level advances.", undefined),
      fk("Phantom Steed (Sp)", "Once per knight phantom level per day, conjure a phantom steed to act as a mount for you or someone else you designate; willing it into existence is a standard action. Add your knight phantom levels and your highest-level arcane spellcasting class levels to determine the caster level of this effect (setting the steeds' duration and whether they can cross difficult ground or fly).", 1),
      fk("Somatic Prowess (Ex)", "Cast arcane spells while wearing light armor without incurring the normal arcane spell failure chance. Medium or heavy armor, or a shield, still incurs arcane spell failure for spells with somatic components.", 1),
      fk("Aspect of the Phantom (Su)", "For a number of rounds per day equal to your knight phantom level, take on the gray, semi-insubstantial appearance of your steed: you hover just above the ground and can ignore swampy ground, difficult terrain, and other impediments that don't extend more than a few inches above the ground, and can even walk across water or other liquids safely. Activate or deactivate as a free action; the rounds need not be consecutive.", 4),
      fk("Countenance of the Phantom (Su)", "For a number of rounds equal to your knight phantom level, take on a ghostly pallor as gray tendrils of mist cling to your form, gaining the concealment of a blur spell (20% miss chance). Your eyes glow a baleful red: at the beginning of your turn, each creature within 10 feet must succeed on a Will save (DC 10 + your knight phantom level + your Cha modifier) or be shaken for 1 round; this does not stack with other fear effects and has no effect on a creature already shaken. You are immune to the fear effect of other knight phantoms. Works only while the ability is in effect; activate or deactivate as a free action, dividing the rounds as you wish.", 7),
      fk("Blade of the Phantom (Su)", "For a number of rounds equal to your knight phantom level, bestow the brilliant energy quality on a melee weapon you wield; the weapon turns gray and semi-insubstantial instead of glowing, but otherwise ignores armor bonuses to AC (Dexterity, deflection, dodge, natural armor, and other bonuses still apply), and undead, constructs, and objects are unharmed by it. The weapon otherwise functions normally, including any magic enhancements. Activate or deactivate as a free action; the rounds need not be consecutive.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dark-lantern",
    name: "Dark Lantern",
    ruleset: "eberron",
    source: `${DL} (pp. 69-71)`,
    sourceUrl: FN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Appraise", "Balance", "Bluff", "Diplomacy", "Disable Device", "Disguise",
      "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate",
      "Knowledge (any)", "Listen", "Move Silently", "Open Lock", "Perform (any)",
      "Search", "Sense Motive", "Speak Language", "Spot", "Use Magic Device",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Bluff 4 ranks, Diplomacy 4 ranks, Gather Information 4 ranks",
      "Region of Origin: Breland",
      "Special: Cannot be illiterate or affiliated with a religion",
      "Special: Member of the King's Dark Lanterns, having proven your worth by completing at least one important mission for the organization and the crown",
    ],
    features: [
      fd("Dark Lantern Proficiencies", "The Dark Lanterns serve the crown of Breland as spies and assassins, the intelligence division of the King's Citadel, with an unwritten license to eliminate threats to the nation, its sovereign, or its citizens. As a Dark Lantern, you gain no proficiency with any weapon or armor. On taking your first level you receive forged identification and travel papers, money for bare expenses, and refuge in any Brelish embassy or Citadel safe house, plus access to the organization's network of agents and informants; members can buy single-use or charged items from a standard list at Dark Lantern headquarters or safe houses at a 20% discount.", undefined),
      fd("Citadel Training", "At 1st level, gain a +2 insight bonus on all Diplomacy, Gather Information, Search, and Sense Motive checks.", 1),
      fd("Sneak Attack (Ex)", "Strike a vital spot for extra damage whenever the target would be denied its Dexterity bonus to AC or when you flank it: +1d6 at 2nd level and an additional +1d6 every two levels thereafter (+2d6 at 4th, +3d6 at 6th, +4d6 at 8th, +5d6 at 10th). Otherwise identical to the rogue's sneak attack, and cumulative with sneak attack from other classes.", 2),
      fd("Nondetection (Sp)", "Starting at 3rd level, you benefit from a permanent nondetection effect (as the spell). If a divination is attempted against you or anything you carry, the divination's caster must succeed on a caster level check (1d20 + caster level) against a DC of 15 + your Dark Lantern class level.", 3),
      fd("Skill Mastery (Ex)", "At 5th level, when making a Climb, Disable Device, Open Lock, or Search check, you can take 10 even if stress and distractions would normally prevent you from doing so.", 5),
      fd("Slippery Mind (Ex)", "At 7th level, if you are affected by an enchantment spell or effect and fail your saving throw, you can attempt a new save 1 round later at the same DC; you get only one extra chance. You can also spend an action point to automatically break free of the enchantment spell or effect.", 7),
      fd("Hide in Plain Sight (Ex)", "Beginning at 9th level, you can use the Hide skill even while being observed.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "cyran-avenger",
    name: "Cyran Avenger",
    ruleset: "eberron",
    source: `${CA} (pp. 86-87)`,
    sourceUrl: FN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1]),
    classSkills: [
      "Bluff", "Concentration", "Disguise", "Gather Information", "Hide",
      "Listen", "Move Silently", "Search", "Sense Motive", "Spot", "Survival",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Gather Information 4 ranks, Sense Motive 4 ranks, Survival 8 ranks",
      "Feats: Track",
      "Region of Origin: Cyre",
      "Special: Former native of Cyre",
    ],
    features: [
      fc("Cyran Avenger Spellcasting", "Displaced Cyran nationals sworn to vengeance against the enemies of their destroyed homeland. As a Cyran avenger, you gain no proficiency with any weapon or armor. At each level except 1st, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had gained a level in a spellcasting class to which you belonged before adding the prestige class level; you gain no other benefit of that class, and with more than one spellcasting class you must choose which one each level advances.", undefined),
      fc("Avenging Strike (Ex)", "Starting at 1st level, attempt an avenging strike on an enemy who has dealt damage to a Cyran native or ally of yours within the last hour: add your Charisma modifier (if positive) to the attack roll and deal an extra 1d6 points of damage per Cyran avenger class level. If the target has not dealt damage to an ally within the last hour, the strike has no effect but the use is still expended. You can use an avenging strike once per day per point of Charisma bonus (minimum 1/day), and can also spend an action point to use it (declared before the attack roll). At 3rd level, you can deliver an avenging strike with a ranged attack as well as a melee attack.", 1),
      fc("Heroic Spirit", "At 1st level, you gain Heroic Spirit (Eberron Campaign Setting, p. 55) as a bonus feat.", 1),
      fc("Discern Lies (Sp)", "Starting at 2nd level, you can use discern lies once per day. Your caster level equals your character level.", 2),
      fc("Enemy Region (Ex)", "At 2nd level, select a nation from the following list: Aundair, Breland, Darguun, Karrnath, the Mournland, the Talenta Plains, Thrane, Valenar, Zilargo. While in this region, you gain a +2 bonus on Bluff, Gather Information, Intimidate, Sense Motive, and Survival checks and a +2 bonus on weapon damage rolls; this bonus stacks with the ranger's favored enemy bonus. You can permanently change an enemy region by taking a free action and spending 2 action points. Select a second enemy region at 5th level.", 2),
      fc("Speak with Dead (Sp)", "Starting at 4th level, you can use speak with dead once per day. Your caster level equals your class level.", 4),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "bone-knight",
    name: "Bone Knight",
    ruleset: "eberron",
    source: `${BK} (pp. 117-119)`,
    sourceUrl: FN_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Craft (armorsmithing)", "Craft (weaponsmithing)", "Handle Animal",
      "Intimidate", "Knowledge (nobility and royalty)", "Knowledge (religion)",
      "Ride",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Skills: Craft (armorsmithing) 6 ranks, Knowledge (religion) 4 ranks, Ride 6 ranks",
      "Special: Ability to turn or rebuke undead",
      "Special: Ability to cast 1st-level divine spells",
    ],
    features: [
      fb("Bone Knight Proficiencies and Spellcasting", "Karrn patriots who fight alongside their nation's undead legions, commanding the walking dead with tactical expertise. Bone knights are proficient with all simple and martial weapons and with all armor and shields (including tower shields). Beginning at 2nd level, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in a divine spellcasting class to which you belonged before adding the prestige class level; you gain no other benefit of that class, and with more than one divine class you must choose which one each level advances.", undefined),
      fb("Bonecraft Armor (Ex)", "At 1st level, you learn to make and wear the order's distinctive bonecraft armor: you can produce a suit of bonecraft medium or heavy armor that would normally be composed mostly of metal, at the same cost and creation time as normal armor of that type, and can spend additional time and money to produce spiked or masterwork bonecraft armor, which may then be further enhanced through magic. Only a character with this ability can effectively wear bonecraft armor. While you wear it, you gain a +4 bonus on Intimidate checks and damage reduction 1/bludgeoning (medium armor) or 2/bludgeoning (heavy armor). Bonecraft armor is not metallic and is not subject to spells such as chill metal or to special attacks that target metal, such as a rust monster's touch.", 1),
      fb("Paladin Conversion", "If you were a paladin or ex-paladin before becoming a bone knight, you can never again advance levels as a paladin, but you retain (or regain) divine grace, lay on hands, aura of courage, divine health, and spellcasting. You cannot detect evil, smite evil, or remove disease; you can use lay on hands to cure living or undead creatures; and you lose the service of your special mount (but see summon skeletal steed, below). If your only divine spellcasting ability prior to becoming a bone knight was as a paladin, you continue to advance your paladin spellcasting as normal and add these spells to your paladin spell list: 1st — bane, deathwatch, doom; 2nd — death knell, desecrate, gentle repose; 3rd — bestow curse.", 1),
      fb("Rebuke Undead (Su)", "At 1st level, you gain the ability to rebuke undead as a cleric of your bone knight level. If you already had the ability to turn or rebuke undead, add your previous effective cleric level to your bone knight level to determine your effective cleric level for rebuking undead. You can no longer turn undead once you gain this ability.", 1),
      fb("Bone March (Su)", "At 2nd level, you can assume control of animated undead from a willing caster as a standard action; you must be within 60 feet of both the caster and the undead. The maximum total Hit Dice you may command in this manner is equal to four times your class level, and you may not control any individual undead creature with more Hit Dice than your class level.", 2),
      fb("Summon Skeletal Steed (Sp)", "At 2nd level, you gain the services of a skeletal steed: a heavy warhorse with the skeleton template applied (or a war pony with the skeleton template for Small bone knights). You may call this steed in the same fashion as a paladin whose level equals your paladin level plus your bone knight level, and the steed gains the same special abilities as a paladin's special mount at the same effective level. A skeletal steed cannot be turned while its bone knight master rides it.", 2),
      fb("Master of the White Banner (Su)", "Beginning at 3rd level, you grant any undead under your control turn resistance equal to your Charisma bonus (if any) as long as they are within 60 feet of you.", 3),
      fb("Improved Bonecraft Armor (Ex)", "At 4th, 7th, and 10th levels, the damage reduction afforded by your bonecraft armor increases by 1. At 4th level, your bonecraft armor grants you immunity to stunning attacks and nonlethal damage. At 7th level, your bonecraft armor has a 50% chance of negating any critical hit or sneak attack made against you, and allows you to act and fight without penalty even while disabled or dying. At 10th level, your bonecraft armor grants you immunity to extra damage from critical hits and sneak attacks.", 4),
      fb("Fill the Ranks (Sp)", "At 5th level, you can use a limited form of animate dead once per day: the target corpse rises as either a Karrnathi skeleton or a Karrnathi zombie (Eberron Campaign Setting, pp. 292-293), depending on the condition of the corpse and your preference. This undead's Hit Dice count against the maximum number of undead you can control at once with your bone march ability.", 5),
      fb("Bonecraft Weapon (Ex)", "At 6th level, if you have at least 6 ranks in Craft (weaponsmithing), you can craft weapons with pieces of bone worked into the design, at the same cost and creation time as a normal weapon of that type; a masterwork bonecraft weapon is possible and may be further enhanced through magic. In the hands of a bone knight of 6th level or higher, a bonecraft weapon deals +1d6 points of damage against living creatures; a bonecraft ranged weapon bestows this benefit on its ammunition.", 6),
      fb("Exoskeleton of Undeath (Ex)", "At 8th level, your bonecraft armor fuses to your body and cannot be removed without killing you. In return, you gain immunity to poison, sleep effects, paralysis, disease, death effects, fatigue, exhaustion, ability damage to your physical ability scores, ability drain, energy drain, and death from massive damage.", 8),
      fb("Death Strike (Su)", "At 9th level, once per day, you may use a bonecraft weapon to strike down a living foe. You must decide to use this ability before the attack roll is made. If the attack succeeds, the target must succeed on a Fortitude save (DC 10 + your bone knight level + your Cha modifier) or die. This is a necromantic death effect.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "silver-pyromancer",
    name: "Silver Pyromancer",
    ruleset: "eberron",
    source: `${SP} (pp. 150-152)`,
    sourceUrl: FN_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows([0, 1, 1, 2, 2], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], [2, 3, 3, 4, 4]),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)",
      "Knowledge (nobility and royalty)", "Knowledge (religion)", "Profession",
      "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: Lawful good",
      "Skills: Knowledge (religion) 4 ranks",
      "Special: Ability to cast 3rd-level arcane spells",
      "Special: Ability to turn undead",
    ],
    features: [
      fs("Silver Pyromancer Spellcasting", "Arcane champions of the Church of the Silver Flame who cast fire spells tinged with holy power, members of the Order of the Pure. When you gain a new silver pyromancer level after 1st, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in whatever arcane spellcasting class in which you could cast 3rd-level spells before becoming a silver pyromancer; you gain no other benefit of that class, and with more than one such class you must choose which one each level advances. In addition, starting at 1st level, you can treat spells from the paladin spell list as though they were arcane spells on that class's spell list, adding them to your spellbook or spells known normally (but not to a warmage-style list that freely accesses its whole class list). Ex-silver pyromancers: if you cease to be lawful good or willfully commit an evil act, you lose all silver pyromancer abilities (including access to paladin spells) and cannot advance further in the class until you atone.", undefined),
      fs("Pyromancer", "Whenever you cast a spell with the fire descriptor, use your character level as your caster level.", 1),
      fs("Purge Undead (Su)", "Starting at 1st level, you can use your turn undead ability to deal damage to undead by channeling positive energy infused with fiery divine wrath: all undead creatures within 30 feet of you take 1d6 points of damage per effective cleric level, where your effective cleric level for this purpose is your effective cleric level for turning undead plus your arcane caster level. Affected undead can attempt a Will save (DC 10 + one-half your effective cleric level + your Charisma modifier) to reduce the damage by half, and undead with turn resistance subtract its value from the damage they take. This ability is not subject to the normal 50% chance of not affecting incorporeal undead. Using it counts as a use of your turn undead ability for the day, and it does not increase your effective cleric level for purposes of turning undead.", 1),
      fs("Bow Proficiency", "At 1st level, you gain proficiency with the longbow and shortbow.", 1),
      fs("Sacred Flame (Su)", "Beginning at 2nd level, you can lace your fire spells with sacred energy that is not subject to resistance to fire-based attacks or even fire immunity: half of the damage your fire spells deal results from this sacred energy, while the rest is normal fire damage. You can choose not to use this ability. At 5th level (improved sacred flame), you can instead choose to make a fire spell deal no fire damage at all, dealing its full normal damage from sacred power — but a spell so converted cannot also be made a smiting spell and your persistent fire ability does not apply to it.", 2),
      fs("Smiting Spell (Su)", "Beginning at 3rd level, you can imbue your fire spells with additional holy power against evil creatures, once per day, declared before you cast the spell (if you lose the spell for any reason, the daily use is still expended). With a smiting spell, you gain a +4 bonus on caster level checks to bypass the spell resistance of evil creatures, the spell's damage is increased by 50% against evil creatures (as if the Empower Spell feat had been applied), and evil creatures take a -2 penalty on their saving throws against it; actually applying Empower Spell as well deals double damage (+50% twice) to evil creatures. At 5th level, you can use this ability three times per day, and an evil creature that fails its saving throw against a smiting spell you cast is blinded for 1 round.", 3),
      fs("Persistent Fire (Su)", "Beginning at 4th level, when a creature fails its saving throw against one of your fire spells, it takes an additional 1d6 points of fire damage on your turn in the next round as the fire from the spell continues to smolder in the creature's clothing, hair, or even flesh. This is similar to catching on fire, but the fire is automatically extinguished after 1 round.", 4),
    ].map((x) => x as FeatureDefinition),
  },
];
