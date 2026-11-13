import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Heroes of High Favor: Dwarves (Bad Axe Games, 2002)
// prestige classes, printed pp. 20-59, transcribed in full —
// progression tables included — from Shaun's own scanned
// copy (image-only; read visually page by page, 2026-11-04).
// The chapter presents ten prestige classes, one for each
// iconic multiclass combination with the dwarves' favored
// class, fighter. This is a 3.0-era book: entries are
// transcribed as printed, including 3.0 skills that 3.5 later
// folded into other skills (Animal Empathy, Innuendo, Intuit
// Direction, Open Lock, Read Lips, Scry, Speak Language,
// Wilderness Lore) and 3.0 feat names (Expertise,
// Ambidexterity appears among the feat prerequisites in
// Chapter 2; Improved Grab in the Stoneheart Ascetic's bonus
// feat list) — flagged in the draft report, not modernized.
// The Artificer here is a fighter-wizard prestige class,
// unrelated to the Eberron base class of the same name; its
// id is therefore "dwarven-artificer". Summaries are short
// mechanical paraphrases in our own words; no book prose is
// reproduced.

const HOFD = "Heroes of High Favor: Dwarves";
const HOFD_PATH = "/A POC DM related/Desktop/Sourcebooks/Heroes Of High Favor. Dwarves.pdf";
const BR = `${HOFD} — Battle-Rager`;
const DS = `${HOFD} — Dwarven Skald`;
const RP = `${HOFD} — Rune-Priest`;
const RW = `${HOFD} — Rock-Warden`;
const SA = `${HOFD} — Stoneheart Ascetic`;
const PA = `${HOFD} — Paragon`;
const SL = `${HOFD} — Slayer`;
const TF = `${HOFD} — Tunnel-Fighter`;
const AE = `${HOFD} — Aeldamist`;
const AR = `${HOFD} — Artificer`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: HOFD_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fbr = mk("battle-rager", BR);
const fds = mk("dwarven-skald", DS);
const frp = mk("rune-priest", RP);
const frw = mk("rock-warden", RW);
const fsa = mk("stoneheart-ascetic", SA);
const fpa = mk("paragon", PA);
const fsl = mk("slayer", SL);
const ftf = mk("tunnel-fighter", TF);
const fae = mk("aeldamist", AE);
const far = mk("dwarven-artificer", AR);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const BR_WILL = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const TF_FORT = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3];

export const HOFD_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "battle-rager",
    name: "Battle-Rager",
    ruleset: "core",
    source: `${BR} (pp. 20-23)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL10, GOOD10, POOR10, BR_WILL),
    classSkills: ["Climb", "Craft", "Intimidate", "Jump", "Swim", "Tumble"],
    prerequisites: [
      "Base attack bonus +5",
      "Alignment: any non-lawful",
      "Feats: Cleave, Iron Will, Power Attack, Toughness",
      "Special: rage, frenzy, or similar class ability",
    ],
    features: [
      fbr("Battle-Rager Proficiencies", "Fighter-barbarian prestige class — the wild dwarven battle-rager, answering a divine calling to heedless fury. Proficient with all simple and martial weapons; retains any proficiency with armor and shields received from prior classes but gains no new proficiency. Battle-ragers who wear armor or use a shield lose the favor of the dwarven gods: all special battle-rager class abilities are lost until the character receives an atonement from a dwarven cleric.", undefined),
      fbr("Against the Odds (Ex)", "The battle-rager is at his best when the odds are against him: for every melee opponent who threatens the space occupied by the battle-rager, the battle-rager receives a +1 morale bonus to AC.", 1),
      fbr("Bonus Feat", "At 2nd level and every four levels thereafter (6th, 10th), the battle-rager can choose a bonus feat from the list of fighter bonus feats.", 2),
      fbr("Fearsome Visage", "Beginning at 2nd level, the battle-rager adds his class level to all Bluff, Diplomacy, and Intimidate checks. This bonus only applies if the battle-rager's scars are visible — if invisible, disguised, etc., he loses this bonus.", 2),
      fbr("Frenzied Charge", "The battle-rager does not apply a -2 penalty to his AC when he performs a charge.", 3),
      fbr("Additional Rage", "The battle-rager may enter into a rage an additional time each day (again at 6th and at 9th level). Add any additional rage from the battle-rager class to any other class rage ability.", 3),
      fbr("Damage Reduction", "Beginning at 4th level the battle-rager gains damage reduction 1/-; at 8th level this damage reduction rises to 2/-. This stacks with any damage reduction the battle-rager may receive from barbarian or other class levels.", 4),
      fbr("Indomitable Will", "If the battle-rager successfully saves against a spell that normally allows a Will: half or Will: partial saving throw, he suffers no effect.", 5),
      fbr("Improved Rage", "Beginning at 7th level, the battle-rager's bonus to Str and Con when raging rises to +6 each, his Will save bonus increases to +3, and his AC penalty remains constant at -2. At 10th level, the battle-rager no longer suffers any ill-effects from fatigue at the end of his rage (normally -2 to Strength, -2 to Dexterity, and cannot run or charge).", 7),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dwarven-skald",
    name: "Dwarven Skald",
    ruleset: "core",
    source: `${DS} (pp. 24-27)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Appraise", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script",
      "Diplomacy", "Gather Information", "Hide", "Intimidate", "Survival",
      "Jump", "Knowledge", "Listen", "Move Silently", "Profession", "Sense Motive",
      "Speak Language", "Spellcraft", "Swim", "Use Magic Device",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Decipher Script 4 ranks",
      "Skills: Gather Information 4 ranks",
      "Skills: Knowledge (Dwarves) 6 ranks",
      "Skills: Perform 3 ranks (chant, epic, storytelling)",
    ],
    features: [
      fds("Dwarven Skald Proficiencies", "Fighter-bard prestige class — a skald steeped in tradition, focused solely on his people and their epic struggles. Proficient with all simple and martial weapons, and with light armor, medium armor, and shields. Armor check penalties apply to certain skills when wearing armor heavier than leather. The class skill list includes Knowledge (all skills, taken individually).", undefined),
      fds("Bardic Study", "A dwarven skald adds his dwarven skald levels to any bard levels for all level-dependent abilities, including bardic performances and bardic knowledge. Although the dwarven skald does not gain Perform as a class skill, he adds his class level to all Perform skill checks. At 1st level, the dwarven skald gains access to the bard abilities inspire courage, countersong, and fascinate (if he did not already have them); at 4th level he gains access to inspire competence; at 7th level he gains access to suggestion; and at 10th level he gains access to inspire greatness. Dwarven skalds do not continue to advance in spellcasting ability, and dwarven skald class levels do not count towards caster level.", 1),
      fds("Invoke Curse (Su)", "Invoking a curse is a standard action that does not provoke an attack of opportunity. The target of the curse need not be present, but it must be an individual known to the skald by name or deed. Until that enemy is slain, the skald receives a +2 bonus to all attacks and damage against that opponent, and the DC of his bardic abilities, spells, and spell-like abilities increases by 2 against that enemy. He may not curse more than one enemy at a time, and he may not invoke another curse for one week after his enemy is slain.", 2),
      fds("Captivate (Su)", "At 5th level the skald may use his fascinate abilities to weave a tale that can affect an entire audience. Captivate counts as a single bardic performance, but the fascinate check applies to all creatures within 90 feet who witness the performance.", 5),
      fds("Instill Fear (Su)", "Instill fear is a standard action that does not provoke an attack of opportunity, and counts against the skald's limit of daily bardic performances. Any creature within 10 feet who can hear and see the dwarven skald must succeed at a Will saving throw with a DC equal to the dwarven skald's Perform check; the creatures need not understand the language spoken, and, unlike other bardic abilities, creatures in combat do not receive any bonus to their saving throw. If the saving throw succeeds, that creature is unaffected and is immune to the dwarven skald's fear effect for 1 day. If the saving throw fails, the creature is panicked for 1 round per level of the dwarven skald. Creatures whose levels or Hit Dice exceed the dwarven skald's character level are immune to his instill fear ability.", 8),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "rune-priest",
    name: "Rune-Priest",
    ruleset: "core",
    source: `${RP} (pp. 28-31)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Heal",
      "Jump", "Knowledge (arcana)", "Knowledge (religion)",  "Spellcraft",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Skills: Craft 4 ranks each in any two of armorsmithing, weaponsmithing, blacksmithing, or stonemasonry",
      "Skills: Knowledge (Dwarves) 6 ranks",
      "Feats: Martial Weapon Proficiency (all), dwarven Rune feat (any one), Weapon Focus (favored weapon of patron deity)",
      "Special: must receive granted powers from any two dwarven domains",
    ],
    features: [
      frp("Rune-Priest Proficiencies", "Fighter-cleric prestige class — the rune-priest battles to victory with divine guidance, adorning his weapons and armor with powerful runes. Proficient with all simple and martial weapons, with all armor, and with shields. Armor check penalties apply to certain skills when wearing armor heavier than leather.", undefined),
      frp("Rune-Priest Spells Per Day", "A rune-priest has the ability to cast a small number of divine spells, chosen from the rune-priest spell list below or from his list of dwarven domain spells. This spellcasting ability is separate from any spellcasting ability he may receive from any other class. Rune-priests cast divine spells as a cleric, and receive bonus spells for high Wisdom. When the rune-priest gains 0 spells of a given level (such as 0 2nd-level spells at 2nd level), he gains only bonus spells. Spells per day (columns 1st-5th) — L1: 1/-/-/-/-; L2: 2/0/-/-/-; L3: 2/1/-/-/-; L4: 3/2/0/-/-; L5: 3/2/1/-/-; L6: 3/3/2/0/-; L7: 3/3/2/1/-; L8: 3/3/3/2/0; L9: 3/3/3/2/1; L10: 3/3/3/3/2. Rune-priest spell list — 1st: Bless, Command, Cure Light Wounds, Deathwatch, Divine Favor, Doom, Entropic Shield, Erase, Magic Weapon, Remove Fear, Shield of Faith. 2nd: Aid, Augury, Bull's Strength, Cure Moderate Wounds, Endurance, Gentle Repose, Remove Paralysis, Shield Other, Spiritual Weapon. 3rd: Cure Serious Wounds, Dispel Magic, Greater Magic Weapon, Glyph of Warding, Magic Vestment, Prayer. 4th: Cure Critical Wounds, Death Ward, Divination, Divine Power, Explosive Runes, Neutralize Poison, Sending, Status, Tongues. 5th: Atonement, Commune, Flame Strike, Greater Command, Hallow, Healing Circle, Mark of Justice, Raise Dead, Righteous Might, Scrying, Spell Resistance, True Seeing. (All are existing cleric spells, so the list lives in this feature rather than as new spell records.)", 1),
      frp("Additional Domain", "The rune-priest gains access to an additional domain chosen from his deity's list of domains. The rune-priest gains the granted power of the additional domain and may add the spells from the new domain to the rune-priest spell list.", 1),
      frp("Bonus Rune Feat", "At 2nd level and every other level thereafter (4th, 6th, 8th, 10th), the rune-priest may choose a bonus Rune feat (found in Chapter 2 of the book). The character must otherwise meet all the prerequisites of the chosen feat.", 2),
      frp("Runecraft", "Beginning at 3rd level, a rune-priest may add his class level to his Craft check when attempting to add a Rune to an item. The bonus applies only to the Rune itself, not to any other masterwork component.", 3),
      frp("Divine Inspiration", "The rune-priest may call upon the favor of the gods to enhance his spellcasting. As a free action, the rune-priest can expend one of his daily turning attempts (if any) to increase his divine spellcasting ability for the current round: for all level-dependent effects of the next divine spell he casts, the rune-priest may add his rune-priest caster level to any other divine caster levels he may have from other classes, and determine the effect of the spell based on the improved caster level. This increase in caster level only affects level-dependent effects of the spell being cast; it does not grant access to new spell levels.", 7),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "rock-warden",
    name: "Rock-Warden",
    ruleset: "core",
    source: `${RW} (pp. 32-35)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
       "Climb", "Concentration", "Craft", "Handle Animal", "Heal",
      "Survival", "Knowledge (nature)",  "Spellcraft", "Swim",
      
    ],
    prerequisites: [
      "Base Fortitude save +6",
      "Skills: Handle Animal 8 ranks",
      "Skills: Scry 8 ranks",
      "Skills: Speak Language (Terran)",
      "Skills: Survival 8 ranks",
      "Feats: Blind-Fight",
      "Special: ability to cast 2nd level divine spells",
    ],
    features: [
      frw("Rock-Warden Proficiencies", "Fighter-druid prestige class — the rock-warden protects the ecology of the deep earth. Proficient with the club, dagger, dart, halfspear, light pick, greatclub, heavy pick, longspear, quarterstaff, scimitar, shortspear, sickle, and sling, and with light and medium armor and shields. Rock-wardens may only use weapons, armor, and shields made of wood, bone, hide, rock, mithral, or adamantite — all other metals are prohibited, and a rock-warden who uses a prohibited weapon or armor loses all class abilities immediately and for 24 hours thereafter.", undefined),
      frw("Spellcasting", "A rock-warden casts spells as a druid. Add the rock-warden's class levels to any druid levels and determine spellcasting ability according to Core Rulebook I, Table 3-8. He has access to all Druid and Earth spells.", 1),
      frw("Animal Companion", "Like druids, the rock-warden can keep one or more animal companions. Include the rock-warden's class level when determining the maximum HD of his animal companions, including those gained from any previous class.", 1),
      frw("Wild Shape", "At 2nd level the rock-warden gains a limited form of the druid ability wild shape, 1/day. The ability is identical to the druid's except that the form assumed must be one of the following natural underground animals/vermin: bat, badger, rat, snake (viper, Small or Medium), and all vermin (Small or Medium). At 4th level he may use it 2/day and can also assume the form of a Tiny creature including: snake (viper, Tiny), and all vermin (Tiny). At 6th level, 3/day, he can assume the Large-sized form of any of the above animals or vermin, if applicable, and the form of any fungus (Small to Large size). At 8th level, 4/day, he can assume the dire form of any of the following animals: bat, badger, bear, rat, and the form of any ooze (Small to Large size). At 10th level, 5/day, he can assume the form of an earth elemental (Small to Large size) and gains all special abilities of the elemental form.", 2),
      frw("Stony Stride (Ex)", "Beginning at 3rd level the rock-warden can cross natural areas of dangerous rock at his normal speed without suffering injury or other impediments. This includes areas of \"razor-rock,\" wet or slippery rock, etc. This ability does not include areas of rock made dangerous by magical means (spike stones, grease, etc.).", 3),
      frw("Blindsight (Ex)", "At 5th level the rock-warden can \"see\" in the dark, similar to the ability possessed by bats. He gains Blindsight within a range of 60 feet. Like a bat, any form of magical silence negates this ability, although the rock-warden may always rely on normal vision.", 5),
      frw("Subterranean Empathy", "Beginning at 7th level, the rock-warden can use Handle Animal to calm earth elementals, fungi, vermin, and oozes, and can even use charm animal to bond them as companions. The subterranean creature counts towards the rock-warden's HD limit as normal.", 7),
      frw("Poison Immunity", "At 9th level the rock-warden becomes immune to all organic poisons, including monster poison, mineral poisons, fungal spores, and poison gas.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "stoneheart-ascetic",
    name: "Stoneheart Ascetic",
    ruleset: "core",
    source: `${SA} (pp. 36-39)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ10, GOOD10, GOOD10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Heal", "Hide", "Survival",
      "Knowledge (arcana)", "Knowledge (religion)", "Listen", "Move Silently",
      "Sense Motive", "Spot",
    ],
    prerequisites: [
      "Base unarmed damage 1d8 or better",
      "Base Fortitude save +6 or better",
      "Skills: Concentration 6 ranks",
      "Skills: Sense Motive 4 ranks",
      "Feats: Endurance, Improved Unarmed Strike, Stunning Fist, Weapon Focus (unarmed)",
    ],
    features: [
      fsa("Stoneheart Ascetic Proficiencies", "Fighter-monk prestige class — the stoneheart ascetic seeks the deep, dark places to seek oneness with the heart of the earth. He does not gain any new proficiency with weapons or armor. In fact, he must avoid the use of any kind of armor and most clothing, preferring to keep his hands and feet free to touch the living stone around him. He cannot wear any kind of armor, gauntlets, gloves, or footwear, and if he breaks this stricture, he loses access to all class abilities until he receives an atonement.", undefined),
      fsa("Ascetic Lifestyle", "The stoneheart ascetic eschews most personal belongings, owning only what he can carry on his own person. All other wealth and possessions are donated to the Order.", undefined),
      fsa("Monk Abilities", "From 1st level onward, the stoneheart ascetic continues to advance in unarmed fighting techniques as a monk. When determining his unarmed damage, improved rate of unarmed attacks, and AC bonus, add his class levels to any monk levels and determine his ability according to Table 3-10 in Core Rulebook I. He also gains a Wisdom bonus to AC. At 2nd level the stoneheart ascetic gains access to the monk abilities still mind and purity of body. At 3rd level he gains access to wholeness of body. These abilities are identical to the monk abilities of the same name. Furthermore, for any level-dependent abilities that replicate a monk ability (still mind, purity of body, wholeness of body), the stoneheart ascetic may add any monk levels to his stoneheart ascetic class levels and determine his ability on that basis.", 1),
      fsa("Bonus Feat", "At 1st level and every three levels thereafter (4th, 7th, 10th), the stoneheart ascetic chooses a bonus feat from the list below: Deflect Arrows, Dodge, Improved Disarm, Improved Grab, Improved Bull Rush, Improved Trip, Power Attack, Toughness. The character gains access to this feat as a result of his training, and is not required to meet any prerequisites for the feat.", 1),
      fsa("Stone Step (Su)", "While the stoneheart ascetic is in contact with stone or earth, he is affected as if by a spider climb spell (caster level equal to his stoneheart ascetic class level).", 3),
      fsa("Tremorsense (Ex)", "As long as he is in contact with a stone surface, the stoneheart ascetic gains tremorsense with a range of 5 feet per class level.", 4),
      fsa("Stone Slumber (Su)", "The character can enter a state of suspended animation, assuming a look and feel indistinguishable from solid stone. While in this state he does not require food, drink, air, nor sleep, nor does he age. Before entering this state he must specify a duration for his slumber, after which time he will awaken naturally. During this time he is aware of his surroundings but is otherwise powerless to act.", 5),
      fsa("Stone Heart (Su)", "At 6th level the stoneheart ascetic is immune to poison of all kinds.", 6),
      fsa("Stone Soul", "The character gains spell resistance equal to his class level + 10.", 8),
      fsa("Timeless Body", "The stoneheart ascetic gains the monk ability of the same name.", 9),
      fsa("Stone Body (Su)", "Once per day the stoneheart ascetic can transform his body into living stone, an effect in all ways otherwise similar to the spell iron body, with a caster level equal to his stoneheart ascetic class level.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "paragon",
    name: "Paragon",
    ruleset: "core",
    source: `${PA} (pp. 40-43)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)",
      "Knowledge (religion)",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Alignment: as patron deity",
      "Skills: Craft 8 ranks in armorsmithing or weaponsmithing",
      "Skills: Knowledge (Dwarves) 8 ranks",
      "Feats: Sunder, Weapon Specialization (favored weapon of patron deity)",
      "Special: must have lay on hands class ability",
    ],
    features: [
      fpa("Paragon Proficiencies", "Fighter-paladin prestige class — the paragon exemplifies the dwarven spirit, master of the battlefield and the forge. Proficient with all simple and martial weapons, with all armor, and with shields.", undefined),
      fpa("Lay on Hands", "Paragons can heal wounds by touch, exactly as a paladin. If the paragon has this ability from a previous class, add his paragon levels to his previous class levels and determine his lay on hands ability on that basis.", 1),
      fpa("Smite", "The paragon can call upon his patron deity to smite his enemies. The paragon adds his Charisma modifier (if positive) to his attack roll, and deals 1 extra point of damage per class level. If the paragon has the smite or smite evil ability from another class, he may combine those levels with his paragon levels to determine the effect of his paragon smite ability. Per the class table, the smite is usable 2/day at 4th level, 3/day at 7th level, and 4/day at 10th level.", 1),
      fpa("Divine Spellcasting", "A paragon continues to advance in divine spellcasting abilities, though at a slower rate. The character adds half his paragon level (rounding down) to any previous divine spellcasting class level to determine spells per day and spellcaster level. He does not gain any other benefit a character of his previous class would have gained.", 1),
      fpa("Forge Mastery", "The paragon may add his class level to all Craft: Weaponsmithing or Craft: Armorsmithing rolls when forging weapons or armor made of metal. The paragon may use his lay on hands ability to repair any metal weapon or armor; this ability cannot be used if the weapon or armor is completely destroyed, only to \"heal\" damage done. Finally, the paragon subtracts half his class level from the hardness of any forged weapon when he attacks using his Sunder ability, and he may add half his class level to the hardness of any weapon he wields or armor he wears.", 2),
      fpa("Ancestral Weapon", "Beginning at 3rd level or anytime thereafter, a dwarven paragon may undertake a special quest to locate an ancestral weapon (instead of calling for a special mount, if applicable). The weapon is bound with an intelligent spirit, usually a dwarven ancestor or a powerful agent of his deity, which will reveal ever greater powers to the paragon as he is deemed worthy. The ancestral weapon has mental ability scores as detailed in Core Rulebook II (pp. 228-230): one at 3d6, and two at 2d6 + paragon's level; once set, these scores do not increase, and the highest attribute should be assigned to Wis, the next highest to Int, and the lowest to Cha. Primary abilities may be chosen, rolled randomly, or determined by the GM. At 3rd level, the ancestral weapon has 1 primary ability and can communicate with the paragon through empathy. At 6th level, the ancestral weapon adds a second primary ability and can now communicate by speech; the number of languages spoken will depend on the item's intelligence, and will generally include dwarven, celestial, common, or perhaps the language of a particularly hated enemy. At 9th level, the ancestral weapon gains its third primary ability and can communicate directly with the wielder through telepathy. An ancestral weapon, if lost, cannot be replaced. If it is damaged, the paragon may use his forge mastery to repair it; if the weapon is completely destroyed, the paragon may still be able to repair it at his forge, provided he can recover all the pieces. If the paragon has chosen to call a special mount, he may not also acquire an ancestral weapon.", 3),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "slayer",
    name: "Slayer",
    ruleset: "core",
    source: `${SL} (pp. 44-47)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Climb", "Concentration", "Craft", "Heal", "Hide", "Survival", "Jump",
      "Listen", "Move Silently", "Search", "Spot", "Swim", "Tumble", "Use Rope",
      
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Knowledge (Dwarves) 8 ranks",
      "Skills: Spot 8 ranks",
      "Skills: Survival 8 ranks",
      "Feats: Track, Weapon Focus (any), Weapon Specialization (any)",
      "Special: must have at least one favored enemy",
    ],
    features: [
      fsl("Slayer Proficiencies", "Fighter-ranger prestige class — the slayer is the bane of his enemies, having studied their strengths and weaknesses. Proficient with all simple and martial weapons, with light and medium armor, and with shields.", undefined),
      fsl("Favored Enemy", "The slayer is skilled at seeking out and destroying favored enemies. Add the slayer's class level to any ranger levels he may have and determine his favored enemy abilities on that basis (refer to Core Rulebook I, Table 3-13).", 1),
      fsl("Bonus Feat", "Beginning at 1st level, the slayer's intense study of his chosen enemies allows him to gain bonus feats at a rapid rate, but he may apply them only when fighting against his favored enemies. Each level, the slayer gains an additional \"virtual\" feat from the list below. He does not need to meet the prerequisites for these feats, nor can he use these feats to meet the prerequisite of any other feat. The slayer continues to gain feats normally at every 3rd character level; if he chooses a duplicate feat, it supercedes the virtual feat. Such feats never \"stack.\" The list: Cleave — the slayer must drop a favored enemy, and the additional attack must likewise be applied against a favored enemy. Dodge — the slayer must apply the +1 AC bonus against a favored enemy. Expertise — the slayer may use Expertise to increase his AC against favored enemies. Great Cleave — additional attacks must be applied against favored enemies, and the slayer must have chosen the Cleave virtual feat before he can choose Great Cleave. Great Fortitude, Lightning Reflexes, Iron Will (choose one) — the slayer receives a +2 bonus to applicable saving throws against all attacks, spells, and spell-like effects originating from his favored enemy. Improved Charge — when performing the charge action against a favored enemy, the slayer receives a +2 bonus to damage (see Chapter Two). Improved Critical — the slayer's threat range when striking favored enemies is doubled; this feat may only be taken once, but it applies regardless of the weapon he is using. Mobility — when moving out of or through threatened squares, the slayer receives a +4 dodge bonus to AC against favored enemies; other enemies strike as normal. Point Blank Shot — the slayer must apply the bonus to hit and damage against a favored enemy. Power Attack — the additional damage from Power Attack applies only against a favored enemy. Precise Shot — the slayer does not suffer the normal -4 penalty when making a ranged attack against a favored enemy in melee.", 1),
      fsl("Skill Mastery", "Choose a class skill. When making this skill check, you may take 10 even if stress or distractions would normally prevent you from doing so. The slayer may choose another skill at 6th level and a third skill at 10th level.", 2),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "tunnel-fighter",
    name: "Tunnel-Fighter",
    ruleset: "core",
    source: `${TF} (pp. 48-51)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, TF_FORT, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Disable Device", "Disguise",
      "Escape Artist", "Hide",  "Intimidate", "Survival", "Jump",
      "Listen", "Move Silently", "Open Lock", "Profession",  "Search",
      "Sense Motive", "Spot", "Swim", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Craft (Trapmaking) 6 ranks",
      "Skills: Hide 6 ranks",
      "Skills: Survival 6 ranks",
      "Skills: Move Silently 6 ranks",
      "Skills: Spot 6 ranks",
      "Skills: Tumble 6 ranks",
      "Feats: Alertness, Improved Initiative, Point Blank Shot",
      "Race: dwarf, gnome, or any small-sized \"underground\" humanoid (kobold, goblin, etc.)",
    ],
    features: [
      ftf("Tunnel-Fighter Proficiencies", "Fighter-rogue prestige class — the tunnel-fighter protects the dwarven borders with ruthless stealth and cunning. Proficient with all simple and martial weapons, and with light armor.", undefined),
      ftf("Ambush Expert", "A tunnel-fighter who is set up in ambush of a foe receives an additional +4 initiative bonus. To gain this bonus the tunnel-fighter must prepare the ambush at least 10 minutes in advance of the foe's arrival, scouting out a suitable observation point, hiding his presence, and so on.", 1),
      ftf("Quick and Quiet", "Tunnel-fighters receive a +5 bonus to Move Silently when moving over half speed (offsetting the normal -5 penalty for full movement and reducing the normal -20 penalty for running or charging). This ability may only be used when wearing light or no armor.", 1),
      ftf("Sneak Attack", "A tunnel-fighter gains the sneak attack ability: +1d6 at 2nd level, +2d6 at 4th, +3d6 at 6th, and +4d6 at 8th. If he already has this ability, the damage bonuses stack.", 2),
      ftf("Uncanny Dodge (Ex)", "A tunnel-fighter gains the uncanny dodge ability. If the tunnel-fighter has another class that grants the uncanny dodge ability, add together all the applicable class levels and determine the ability on that basis. At 5th level this becomes uncanny dodge (can't be flanked), per the class table.", 2),
      ftf("Tunnel Fighting", "The tunnel-fighter is adept at fighting in cramped spaces where they can confine and trap their opponents. At 3rd level a tunnel-fighter is considered flanking against a melee opponent who is completely bounded by walls on three facings (for example, at the end of a narrow dead-end tunnel), and may use his sneak attack ability, if otherwise applicable. At 7th level the tunnel-fighter is considered flanking against a melee opponent who is completely bounded by walls on at least two facings (for example, when backed into a corner). At 10th level the tunnel-fighter is considered flanking against an opponent who is completely bounded by a wall on even one facing (for example, when backed up against a wall). The tunnel-fighter may only use this ability when wearing light or no armor.", 3),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "aeldamist",
    name: "Aeldamist",
    ruleset: "core",
    source: `${AE} (pp. 52-55)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Intimidate", "Knowledge (arcana)",
       "Spellcraft",
    ],
    prerequisites: [
      "Base Fortitude save +4",
      "Skills: Concentration 6 ranks",
      "Skills: Knowledge (Arcana) 6 ranks",
      "Skills: Spellcraft 6 ranks",
      "Feats: Armor Proficiency (all), Combat Casting, Dodge, Improved Initiative",
      "Special: ability to cast 3rd level arcane spells without preparation",
    ],
    features: [
      fae("Aeldamist Proficiencies", "Fighter-sorcerer prestige class — the aeldamist appears but rarely on the dwarven battlefields, but such instances haunt the nightmares of friend and foe alike. He does not gain any new proficiency with armor or weapons.", undefined),
      fae("Spellcasting", "The aeldamist continues to advance in arcane spellcasting ability, albeit at a slower rate. The character adds half his aeldamist level (rounding down) to his previous arcane spellcaster level to determine spells per day, spells known, and spellcaster level. He does not gain any other benefit a character of his previous class would have gained.", 1),
      fae("Arcane Mysteries", "At 1st level and every level thereafter, the aeldamist learns a new arcane mystery chosen from the list below. Ancestral Lore — the aeldamist may add a new spell to his list of spells known; the spell must be of a level he can cast. Armored Casting — choose light, medium, or heavy armor; when wearing armor of that type, your arcane spell failure chance is reduced by 5%. You may take this arcane mystery multiple times; each time, you may either choose a new category of armor, or you may apply an additional 5% reduction to a previously chosen armor category. Blood Magic — instead of casting a metamagicked spell from a higher level slot, you may lose 1 point of Constitution for each level increase normally associated with the metamagic feat (for example, cast a Maximized spell at its normal level, losing 3 points of Constitution instead of increasing the spell level); you may not sacrifice more Constitution with a single spell than your class level, and this ability loss cannot be healed by normal or magical means, but all ability points lost in this way return when you prepare your mind for a new day of spellcasting (8 hours rest, etc.). Fellblade Magic — choose a spell from your list of spells known with a range of Touch; you may combine the casting of this spell with a melee attack, and the spell is delivered upon a successful attack, either as a normal melee attack (in which case the weapon's damage will be added to any effect of the spell) or as a touch attack as normal. Signature Metaspell — each time you choose this arcane mystery, choose a spell from your list of spells known and any single metamagic feat; whenever you cast the chosen spell, you may elect to use the chosen metamagic feat (unless you have mastered the arcane mystery Blood Magic, your metamagicked spell must take up a higher level slot, as normal), and the use of metamagic does not increase the casting time, as is normally the case with metamagic spells cast without preparation. Signature Spell Focus — choose a spell from your list of spells known; you may cast this spell as if you had the benefit of the Spell Focus feat, adding +2 to the DC of all saving throws against this spell. Signature Spell Immunity — choose a spell from your list of spells known to which spell resistance normally applies; when you cast this spell, you are immune to its effects, as if by spell resistance. Signature Spell Penetration — choose a spell from your list of spells known; with this spell, you get a +2 bonus to caster level checks to beat spell resistance.", 1),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dwarven-artificer",
    name: "Artificer",
    ruleset: "core",
    source: `${AR} (pp. 56-59)`,
    sourceUrl: HOFD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Knowledge (arcana)", "Profession",
       "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Skills: Alchemy 9 ranks",
      "Skills: Craft (Armorsmithing) 9 ranks",
      "Skills: Craft (Weaponsmithing) 9 ranks",
      "Skills: Spellcraft 9 ranks",
      "Feats: all Simple and Martial Weapon Proficiencies; all Armor Proficiencies; Shield Proficiency; Craft Magic Arms and Armor",
    ],
    features: [
      far("Artificer Proficiencies", "Fighter-wizard prestige class — a master craftsman of all things magical (not the Eberron base class of the same name). He does not gain any new proficiency with armor or weapons. Note: the book prints the class skill as \"Use Magical Device (Cha)\"; it is filed here under the standard skill name Use Magic Device.", undefined),
      far("Spellcasting", "The artificer continues to advance in spellcasting ability, albeit at a slower rate. The character adds half his artificer level (rounding down) to any previous spellcasting class level to determine spells per day, spells known, and spellcaster level. He does not gain any other benefit a character of his previous class would have gained.", 1),
      far("Magical Craftsman", "For the purposes of item creation only, the artificer adds his class level to his previous spellcasting classes to determine caster level. In addition, the artificer can create magic items in half the normal time. For scrolls and items with a value of 1000 or less, he can create two per day.", 1),
      far("Curse Resistance", "The artificer may choose to re-roll any failed saving throw as a result of handling a cursed item.", 2),
      far("Bonus Feat", "The artificer receives a bonus Item Creation feat at 2nd level and every other level thereafter (4th, 6th, 8th, 10th). The artificer must otherwise meet all prerequisites of the chosen feat.", 2),
      far("Magical Familiarity", "The artificer becomes adept at triggering magical devices to aid in item creation. He adds his artificer class level to all Use Magic Device skill checks.", 3),
      far("Magical Deconstruction", "The artificer is able to reduce magical items to their most basic elements, preserving some of their magical essence for infusion into new items of his own creation. The process must be performed when the artificer is creating a new magic item. In order to successfully deconstruct an item, he must succeed at an Alchemy check; the DC for this check is 20 + caster level of the target item. Regardless of the success of this check, the item is drained of magical essence and destroyed. If the check succeeds, a portion of the item's essence is preserved and transferred to the newly created item: the artificer preserves 25% of the XP cost of the drained item and may apply this against the XP cost to create the new item. At 7th level he can preserve 50% of an item's XP cost during the deconstruction; at 9th level he can preserve 75%. The artificer may only deconstruct a single item at a time, and may not deconstruct an item with a greater market value than the item he is creating. In addition, the item must be of an identical type to the item being created — drain a wand to create a wand, drain a weapon to create a weapon, and so forth.", 5),
      far("Spell Resistance", "The artificer can sense magical essences and act to \"ground\" them before he is affected. At 8th level the artificer gains spell resistance against any spell or spell-like ability. This SR is equal to 10 + artificer's Intelligence bonus.", 8),
      far("Spell Absorption", "At 10th level the artificer gains a limited form of spell absorption. Anytime the artificer's spell resistance successfully acts to ground magical energy, the artificer can immediately harness that energy for his own use. The artificer may add a single charge to any item he is holding whose spell effect is equal or less than the incoming spell.", 10),
    ].map((x) => x as FeatureDefinition),
  },
];
