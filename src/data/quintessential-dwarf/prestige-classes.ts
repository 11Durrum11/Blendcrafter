import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// The Quintessential Dwarf (Mongoose Publishing, ©2002,
// Collectors' Series) — "The Prestige Dwarf" prestige
// classes, printed pp. 13-26, transcribed in full —
// progression tables included — from Shaun's own scanned
// copy (image-only; read visually page by page, 2026-11-04).
// This is a 3.0-era book: entries are transcribed as
// printed, including 3.0 skills later folded into other
// skills (Alchemy, Animal Empathy, Intuit Direction, Pick
// Pocket, Scry, Wilderness Lore), the "exclusive skill"
// designations, and 3.0 action language (full-attack
// action, move-equivalent action) — flagged in the draft
// report, not modernized. British spellings in the source
// (armour, defence) are kept in class and feature names.
// Where a class table and the feature text spell an
// ability differently, the feature text wins and the table
// spelling is noted in the draft report (cannoneer: table
// "Snap Shot"/"Swift Load"/"Over Load" vs text Snapshot/
// Swiftload/Overload). Spellcasting advancement is carried
// as a "Spells per Day" feature, following the catalog's
// convention. Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

const QD = "The Quintessential Dwarf";
const QD_PATH = "/A POC PC related/5.Splat/Quintessential series/The Quintessential Dwarf.pdf";
const CN = `${QD} — Cannoneer`;
const CW = `${QD} — Clan Wisdom`;
const DD = `${QD} — Deeping Druid`;
const DS = `${QD} — Degenerate Stalker`;
const FH = `${QD} — Foehammer`;
const FM = `${QD} — Forge Mage`;
const ST = `${QD} — Shock Trooper`;
const TR = `${QD} — Tunnel Rider`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: QD_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fcn = mk("cannoneer", CN);
const fcw = mk("clan-wisdom", CW);
const fdd = mk("deeping-druid", DD);
const fds = mk("degenerate-stalker", DS);
const ffh = mk("foehammer", FH);
const ffm = mk("forge-mage", FM);
const fst = mk("shock-trooper", ST);
const ftr = mk("tunnel-rider", TR);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const TQ5 = [0, 1, 2, 3, 3];
const GOOD5 = [2, 3, 3, 4, 4];
const POOR5 = [0, 0, 1, 1, 1];

export const QUINTESSENTIAL_DWARF_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cannoneer",
    name: "Cannoneer",
    ruleset: "core",
    source: `${CN} (pp. 13-15)`,
    sourceUrl: QD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, POOR5, POOR5, GOOD5),
    classSkills: ["Craft (alchemy)", "Climb", "Craft", "Intimidate", "Jump", "Profession", "Spot"],
    prerequisites: [
      "Feats: Exotic Weapon Proficiency (runecannon), Point Blank Shot, Precise Shot, Quick Draw, Rapid Shot",
      "Skills: Craft (runecannon) 10 ranks",
      "Skills: Craft (runecannon ammunition) 10 ranks",
    ],
    features: [
      fcn("Cannoneer Proficiencies", "Expert in the care and use of runecannons — trained to wield the weapons but also to build and repair them. Proficient in all simple weapons, runecannon and all types of armour. Armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      fcn("Snapshot (Ex)", "The first trick taught to the cannoneer: once this ability is gained, the cannoneer can fire a runecannon as a standard attack action rather than the full-attack action normally required. (The class table spells this \"Snap Shot\".)", 1),
      fcn("Stock Smash (Ex)", "When the cannoneer runs out of ammunition or is at such close quarters it is impossible to use his weapon effectively, he may strike opponents with the stock of his weapon, causing 1d6 hit points of bludgeoning damage on a successful hit. The Weapon Focus bonus for the runecannon does apply to this attack.", 2),
      fcn("Swiftload (Ex)", "The cannoneer reloads his weapon much faster than normal: if reloading the runecannon normally requires a standard action, he may reload as a move action; if it normally requires a full-round action, he may reload as a standard action; runecannons that normally require more than one full-round action to reload require only a single full-round action. This ability does not reduce the time it requires to reload the offhand runecannon. (The class table spells this \"Swift Load\".)", 3),
      fcn("Overload (Ex)", "As a move action, the cannoneer loads a second round into the barrel of his runecannon. The next attack made with the runecannon causes double normal damage but suffers a -4 circumstance penalty on the attack roll. There is also a 10% chance that the overload will damage the barrel of the weapon, rendering it useless until it is repaired. This ability may not be used with defender or stationary runecannons. (The class table spells this \"Over Load\".)", 4),
      fcn("Scattershot (Ex)", "At the highest level of expertise, the cannoneer is able to hit more than one target with a single attack action: he rolls to hit every creature within a 15-foot-long cone in front of him. Each attack after the first suffers a -2 circumstance penalty in addition to any other penalties for multiple attacks in a single round.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "clan-wisdom",
    name: "Clan Wisdom",
    ruleset: "core",
    source: `${CW} (pp. 15-17)`,
    sourceUrl: QD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, POOR5, POOR5, GOOD5),
    classSkills: [
      "Concentration", "Decipher Script", "Diplomacy", "Gather Information", "Knowledge",
      "Perform",  "Speak Language", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Decipher Script 8 ranks",
      "Skills: Knowledge (dwarf culture) 8 ranks",
      "Skills: Perform (chant) 8 ranks",
      "Special: Must have the bardic knowledge ability",
      "Spells: Must be able to cast speak with dead",
    ],
    features: [
      fcw("Clan Wisdom Proficiencies", "A dwarf who, in addition to his duties as a priest, is also an expert on dwarven culture and history, gaining his knowledge from intensive training and direct communion with ancient dwarven spirits. Proficient in all simple weapons and all types of armour. Armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble. The class skill list includes Knowledge (all skills, taken individually) and Perform (chant); Decipher Script and Scry are exclusive skills.", undefined),
      fcw("Spells per Day", "For each clan wisdom level gained, the character gains new spells per day as if he had also gained a level in a spellcasting class he belonged to before becoming a clan wisdom (the class table grants +1 spellcasting level at every level). He does not, however, gain any other benefits of his former spellcasting class, such as metamagic feats or an improved chance of turning or rebuking undead. Characters with more than one spellcasting class must decide which class to assign each level of clan wisdom to for purposes of determining spells per day. A clan wisdom's spells all require a somatic component, even if this component is not listed in the spell's description, and may not benefit from the use of the Still Spell metamagic feat.", 1),
      fcw("Dwarven Lore (Ex)", "This ability augments the clan wisdom's existing bardic knowledge ability whenever it is used to attempt to gain information about an item, person, or place related to the dwarven people: the clan wisdom may apply his ranks of Knowledge (dwarf culture) as a bonus to any Bardic Knowledge checks regarding information related to dwarves.", 1),
      fcw("Sonorous Guidance (Ex)", "The clan wisdom can use a rhythmic chant to coordinate the efforts of two or more individuals for a skill check or attack action: when this ability is used, each helper who succeeds at a skill check to assist a leader (for a skill check) or an attack check to aid another (for an attack action) provides a +3 circumstance bonus to the leader or attacker he is assisting, rather than +2.", 2),
      fcw("Words of Wisdom (Su)", "By weaving the sacred names of dwarven runes into the somatic components of his spells, the clan wisdom increases his effective level by +2 for purposes of determining any of the spell's level-dependent variables.", 3),
      fcw("Ancestral Chant (Su)", "The clan wisdom combines his bardic training with the power of divine magic: he now determines bardic spells per day using his Wisdom bonus rather than his Charisma bonus, and the DCs of all spells the wisdom casts are calculated as 10 + Spell Level + Wisdom modifier. This does not change which spells the clan wisdom can learn or cast, which are determined as normal for each of the wisdom's spellcasting classes.", 4),
      fcw("Divine Harmony (Su)", "The clan wisdom is able to replace all somatic components of a spell with an additional verbal component. This requires a successful Concentration check (DC 10 + level of spell) and increases the time needed to cast a spell: spells which normally require one action or fewer to cast require a full-round action; spells that require a full round or more to cast normally require an additional full-round action. If the clan wisdom fails his Concentration check while using this ability, the spell is lost.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "deeping-druid",
    name: "Deeping Druid",
    ruleset: "core",
    source: `${DD} (pp. 17-19)`,
    sourceUrl: QD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ5, [2, 3, 3, 4, 4], POOR5, [2, 3, 3, 4, 4]),
    classSkills: [
       "Concentration", "Handle Animal", "Heal", "Survival",
      "Knowledge (arcana)", "Knowledge (nature)",  "Spellcraft", "Swim", 
    ],
    prerequisites: [
      "Skills: Handle Animal 7 ranks",
      "Skills: Knowledge (nature) 7 ranks",
      "Skills: Spellcraft 7 ranks",
      "Skills: Survival 7 ranks",
      "Special: A familiar, an animal companion",
    ],
    features: [
      fdd("Deeping Druid Proficiencies", "A dwarven druid of the dark wilderness of the underlands who combines the practice of arcane magic with druidic powers to bind himself to the underlands. The deeping druid prestige class offers no additional weapon or armour proficiencies. Handle Animal and Scry are exclusive skills.", undefined),
      fdd("Stone Walk (Sp)", "The deeping druid may move along stone (or earthen) surfaces, either natural or worked, as if under the effect of the spider climb spell. This ability may be used at will.", 1),
      fdd("Companion Fusion", "A portion of the deeping druid's spirit is combined with the essences of his familiar and animal companion; the three souls combine to create a deeping companion. A telepathic bond is formed between the deeping companion and its master, allowing the two to communicate telepathically as long as they remain within 500 feet of one another; as a full-round action, the deeping druid can see and hear through the senses of his companion as long as they are within range of normal telepathic contact. Regardless of the original forms of the animal companion and familiar, the fused companion has these statistics: Medium (elemental); Hit Dice 2d8; Initiative -1 (Dex); Speed 30 ft.; AC 15 (+5 natural); Attacks: Slam +5 melee; Damage: Slam 1d6+4; Space/Reach 5 ft. by 5 ft./5 ft.; Special Qualities: Earth Walk (as deeping druid), Elemental; Saves: Fort +4, Ref -1, Will +1; Abilities: Str 16, Dex 8, Con 13, Int 4, Wis 12, Cha 11; Skills: Listen +6, Spot +6; Feats: Power Attack; Challenge Rating: As master; Alignment: As master. Whenever the master gains a level of the deeping druid prestige class, the deeping companion gains a level of the warrior NPC class; for every two levels of any other class the master gains, the deeping companion gains one level of the warrior NPC class. The deeping companion may never wear armour but may wield any simple weapons provided to it by its master. As long as the deeping companion is alive, its master may not summon another familiar or animal companion; if the deeping companion dies, the master immediately loses 150 experience points for each of the companion's hit dice or levels of the warrior NPC class. The deeping companion may be raised from the dead just as any other character but does not suffer the loss of a level or Constitution point when this occurs, and the master can create another deeping companion at any time as long as he has both an animal companion and a familiar.", 2),
      fdd("Assault of Earth (Su)", "The deeping druid's connection to the stone which surrounds him becomes so strong he can will it to attack his enemies: these ranged attacks cause 1d4 hit points of damage + 1 hit point per level of the deeping druid prestige class. The deeping druid may use this ability as a full-round action and may use it up to three times a day.", 3),
      fdd("Underlands Defence (Su)", "Deeping druids with this ability have strengthened their bond with the earth to such a degree that their flesh becomes stronger and more durable, providing a +3 natural armour bonus.", 4),
      fdd("Magmic Embrace (Su)", "At 5th level the deeping druid can summon forth a small pool of magma, which fills a 10 foot cube (extending downwards from the nearest horizontal stone surface at least 10 feet square). This requires 1d4 full rounds, during which the deeping druid can do nothing but focus on calling forth the magma. Any creature, other than the deeping druid and his companion, who is immersed in the pool suffers 1d6 hit points of damage per level of the deeping druid for each round, or part of a round, it remains within the pool; the deeping druid and his companion may freely enter the pool and survive while submerged within it, and for every full hour spent submerged in the pool, the deeping druid and his companion regain 1d6 hit points. The deeping druid may dismiss the magma pool at any time, after which the pool will disappear in 1d4 rounds (the druid is harmlessly ejected from the pool if he is in it when it dissipates). The deeping druid may dismiss the pool while his companion is submerged within it; in this case, the companion is effectively removed from existence until the deeping druid uses the magmic embrace ability again, and on the next use of this ability the deeping companion emerges from the pool as soon as the magma materializes.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "degenerate-stalker",
    name: "Degenerate Stalker",
    ruleset: "core",
    source: `${DS} (pp. 19-21)`,
    sourceUrl: QD_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], [2, 3, 3, 4, 4], POOR5),
    classSkills: [
      "Balance", "Climb", "Escape Artist", "Hide", "Intimidate", "Survival", "Jump",
      "Listen", "Move Silently", "Search", "Spot", "Swim", "Tumble", 
    ],
    prerequisites: [
      "Base attack bonus +10",
      "Special: The ability to make sneak attacks, the ability to rage at least three times per day",
    ],
    features: [
      fds("Degenerate Stalker Proficiencies", "A brutal killer and scout from a degenerate dwarf clan, serving his clan as a stealthy shock trooper who unleashes the bestial fury of his people in a devastating burst of violence. The degenerate stalker prestige class provides no further skill with weapons or armour.", undefined),
      fds("Bloodthirsty Ambush (Ex)", "If the degenerate stalker is able to attack a foe from hiding, he may execute a melee sneak attack which causes a further 2d6 hit points of damage in addition to any other sneak attack damage he may gain from another character class. At the beginning of the round immediately following this ambush, the degenerate stalker enters a barbarian rage. This ability may not be used if the degenerate stalker has no further uses of his rage ability for the day. A degenerate stalker is considered to be attacking from hiding if both of the following are true: he is hidden at the moment at which he begins his attack, and there is a target within one half of a standard movement action's distance from the degenerate stalker's hiding spot (a degenerate stalker with a movement rate of 20 feet could launch an attack from hiding against any creature within 10 feet of his location but no further).", 1),
      fds("Sneaking Sunder (Ex)", "The degenerate stalker may attack an opponent's weapon at any time during which he would normally be allowed a sneak attack without incurring an attack of opportunity. In addition, the attack against the weapon receives a +2 circumstance bonus.", 2),
      fds("Berserk Ambush (Ex)", "If the degenerate stalker is able to attack a foe from hiding (see Bloodthirsty Ambush), he may execute a melee sneak attack which causes an additional 4d6 hit points of damage in addition to any other sneak attack damage the degenerate stalker may gain from another character class. At the beginning of the round immediately following this ambush, the degenerate stalker enters a barbarian rage. This ability may not be used if the degenerate stalker has no further uses of his rage ability for the day. (The feature text spells this \"Beserk Ambush\"; the class table spells it \"Berserk Ambush\".)", 3),
      fds("Weakness Rage (Ex)", "Whilst the degenerate stalker is caught up in a fit of rage, any attack made by any opponent in an area threatened by the stalker that misses its target provokes an attack of opportunity from the degenerate stalker.", 4),
      fds("Furious Ambush (Ex)", "If the degenerate stalker is able to attack a foe from hiding (see Bloodthirsty Ambush), he may execute a melee sneak attack which causes +8d6 hit points of damage. If the sneak attack causes damage to its target, the next attack made by the stalker is also considered a sneak attack, causing +4d6 hit points of damage. At the beginning of the round immediately following this ambush, the degenerate stalker enters a barbarian rage. This ability may not be used if the degenerate stalker has no further uses of his rage ability for the day, and the damage listed here does not stack with standard sneak attack damage but replaces that damage.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "foehammer",
    name: "Foehammer",
    ruleset: "core",
    source: `${FH} (pp. 21-22)`,
    sourceUrl: QD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], [2, 3, 3, 4, 4], POOR5),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Escape Artist", "Hide", "Jump",
      "Knowledge (arcana)", "Listen", "Move Silently", "Profession", "Search", "Spot",
      "Swim", "Tumble", "Survival",
    ],
    prerequisites: [
      "Base attack bonus +10",
      "Skills: Concentration 8 ranks",
      "Special: At least one favoured enemy, the Still Mind ability",
    ],
    features: [
      ffh("Foehammer Proficiencies", "Trained to combat the enemies of his people using whatever weapons are available, including his own hands and feet; those trained in the martial arts of the foehammer must swear to protect a specific area or person from harm. The foehammer prestige class offers no additional skill with weapons or armour. The class table also prints an Unarmed Attack Bonus column (+1, +2, +3, +3, +4 across the five levels).", undefined),
      ffh("Flurry of Hatred (Ex)", "When the foehammer attacks a favoured enemy with a flurry of blows, he does not suffer the normal -2 penalty to all attacks for the round.", 1),
      ffh("Hammer Hands (Ex)", "The foehammer learns to harden his hands with the internal forces captured by his martial art: all unarmed attacks made by the foehammer are treated as if they were made by +1 weapons for purposes of overcoming damage reduction (this bonus does stack with the monk ki strike ability). All unarmed attacks made by the foehammer against a favoured enemy cause an additional 1d4 hit points of damage.", 2),
      ffh("Knowledgeable Defence (Ex)", "When battling one of his favoured enemies, the foehammer may add his Intelligence modifier to his Armour Class.", 3),
      ffh("Devastating Strike (Ex)", "When the foehammer attacks one of his favoured enemies, all threats are automatically converted into critical hits.", 4),
      ffh("Foekiller (Ex)", "At this level of training, the foehammer knows his enemies so well he is able to attack more often against these foes than is normally possible: if the foehammer launches a flurry of blows against one of his favoured enemies and all of the attacks in the flurry damage the target, the foehammer is entitled to an additional unarmed attack at his full unarmed attack bonus; this attack, if it hits, is automatically a critical hit.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "forge-mage",
    name: "Forge Mage",
    ruleset: "core",
    source: `${FM} (pp. 22-24)`,
    sourceUrl: QD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ5, POOR5, POOR5, GOOD5),
    classSkills: ["Concentration", "Craft", "Knowledge", "Profession",  "Spellcraft"],
    prerequisites: [
      "Feats: Craft Magic Arms and Armour, Weapon Specialisation",
      "Skills: Alchemy 10 ranks",
      "Skills: Craft (armoursmithing) 11 ranks",
      "Skills: Craft (weaponsmithing) 11 ranks",
    ],
    features: [
      ffm("Forge Mage Proficiencies", "Combines an innate magical ability with skill at crafting arms and armour to create fantastic, durable items for the members of his clan. Proficient in all simple weapons and all types of armour. Armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble. The class skill list includes Knowledge (all skills, taken individually).", undefined),
      ffm("+1 Level Crafting", "When the forge mage gains a new level, he may add this level to the existing levels of a previous arcane spellcasting class for the purpose of meeting the crafting requirements for weapons and armour only. (The class table grants this at every level.)", 1),
      ffm("Metallurgical Expertise (Ex)", "The forge mage is adept at preparing the metal used in creating weapons or armour: a successful Alchemy check (DC 15) allows the forge mage to prepare enough materials to create one suit of metal armour or one weapon. This check requires 1d3 days and, if successful, provides a +5 bonus to the Craft check to actually make the armour or weapon.", 1),
      ffm("Exquisite Articulation (Ex)", "At this level of skill the forge mage is able to create metal armour so easy to wear it is treated as if it were one category lighter than normal for purposes of movement and other limitations. Making articulated armour takes one week longer than normal and increases the DC of the Craft check by 5. Only medium and heavy armours may be articulated.", 2),
      ffm("Master Weaponsmith (Su)", "As an expert with a particular weapon, the forge mage is able to craft magical weapons of that type more efficiently than other mages: when crafting a magical weapon with which the forge mage has the Weapon Specialisation feat, the prerequisite level is equal to one level of the forge mage prestige class per point of the weapon's enhancement bonus (thus, a third level forge mage can create weapons with a +3 enhancement bonus). In addition, the Market Price modifier is reduced by 1, with a minimum market price of +1 (for example, a forge mage with the master weaponsmith ability can create a weapon with the dancing special ability for a market price increase of +3, rather than +4, provided he has Weapon Specialisation with the weapon being created).", 3),
      ffm("Signature Ability (Su)", "Each forge mage develops an affinity for a particular weapon or armour special ability: at this level of expertise the forge mage picks this ability and now, when attempting to make a weapon or suit of armour, may reduce the Market Price of the ability by 2, to a minimum of +1.", 4),
      ffm("Forge Mastery (Su)", "When this ability is gained the forge mage has become so adept at creating magical weapons and armour he no longer suffers the normal loss of experience points: for purposes of determining the XP cost of an item only, the forge mage reduces the cost of the weapon or suit of armour by 50%.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "shock-trooper",
    name: "Shock Trooper",
    ruleset: "core",
    source: `${ST} (pp. 24-25)`,
    sourceUrl: QD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], [2, 3, 3, 4, 4], POOR5),
    classSkills: [
      "Balance", "Climb", "Craft", "Escape Artist", "Jump", "Profession", 
      "Spellcraft", "Tumble",
    ],
    prerequisites: [
      "Base attack bonus +9",
      "Feats: Two-Weapon Fighting, Weapon Finesse (spiked chain)",
      "Skills: Balance 5 ranks",
    ],
    features: [
      fst("Shock Trooper Proficiencies", "Trained in close-quarters fighting, a master of battle where space is limited and enemies are plentiful, skilled in the use of weaponry built into his armour. Proficient in all simple and martial weapons and all types of armour. Armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      fst("Armoured Adroitness (Ex)", "Any armour worn by the shock trooper is considered one category lighter for purposes of movement, skill penalties, or other abilities dependent on the type of armour worn. This ability may not reduce the armour's category below light.", 1),
      fst("Knees and Elbows (Ex)", "When grappling, the shock trooper may make a single attack with an armour blade against the foe he is grappling without suffering the normal -4 penalty to his grappling check.", 2),
      fst("Wyrm Grip (Ex)", "When this ability is gained the shock trooper is considered one size category larger than normal when grappling while armed with a spiked chain and may use his Dexterity modifier instead of his Strength modifier for all grapple checks.", 3),
      fst("Leverage (Ex)", "The shock trooper learns how to inflict the greatest possible damage when attacking with his armour blades: when this ability is gained the shock trooper may add both his Dexterity and Strength modifiers to damage caused by successful attacks with his armour blades.", 4),
      fst("Chain Grapple (Ex)", "When armed with a spiked chain the shock trooper may initiate a grapple without suffering an attack of opportunity. In addition, after the grapple begins, the shock trooper may cause 2d4 hit points of damage with a successful opposed grapple check. Finally, this ability allows the shock trooper to begin a grapple with any target within range of his chain: if the grapple check succeeds, the shock trooper moves into the square with his target to continue the grapple as normal; this does not trigger an attack of opportunity against the shock trooper. If for any reason the shock trooper may not move into the square with his target to continue the grapple, this portion of this ability may not be used.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "tunnel-rider",
    name: "Tunnel Rider",
    ruleset: "core",
    source: `${TR} (pp. 25-26)`,
    sourceUrl: QD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows([1, 2, 3, 4, 5], [2, 3, 3, 4, 4], POOR5, POOR5),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Handle Animal", "Heal", "Profession", "Ride",
    ],
    prerequisites: [
      "Feats: Mounted Combat, Ride by Attack, Spirited Charge",
      "Skills: Concentration 15 ranks",
      "Skills: Handle Animal 18 ranks",
      "Skills: Ride 18 ranks",
    ],
    features: [
      ftr("Tunnel Rider Proficiencies", "An expert at riding through the narrow, winding tunnels that crisscross the underlands, most often found as a member of a military vanguard or serving as a border patrol in particularly dangerous territory. Proficient in all simple weapons and all types of armour. Armour check penalties for armour heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      ftr("Assisting Mount (Ex)", "The tunnel rider may direct his mount's attacks to assist his own: each round he may choose to have the mount take the aid another action rather than make its normal attack.", 1),
      ftr("Riding Assault (Ex)", "Tunnel riders are adept at attacking while their mount moves, allowing them to take a full-round attack action in the same round in which their mount makes a standard movement action. In order to use this ability, the tunnel rider's mount must begin and end its movement adjacent to an enemy.", 2),
      ftr("Stone Saddle (Ex)", "Extensive training and experience give the tunnel rider the ability to remain in his saddle even when mortally wounded: when this ability is gained the tunnel rider never needs to make a Ride check in order to remain mounted and may not be removed from his saddle by any means short of a wish spell. Both mount and rider may continue fighting and moving until one or both are reduced to -10 hit points, at which point both fall lifeless to the ground.", 3),
      ftr("Mounted Concentration (Ex)", "The tunnel rider may cast spells while mounted, even if his mount moves before and after his action, without a Concentration check, unless the mount is running, in which case he must make a successful Concentration check (DC 10 + spell level) or lose the spell. If using a ranged weapon while mounted, reduce the normal penalties for mounted attacks by one half.", 4),
      ftr("Mounted Knockdown (Ex)", "While mounted, the tunnel rider's attacks are exceptionally powerful: to determine the damage done by a successful attack while mounted, add the mount's Strength modifier to the weapon's damage, along with the rider's Strength modifier. In addition, any creature of the mount's size or smaller may be knocked down by the attack if it fails a Fortitude save (DC equal to the damage caused by the attack).", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
