import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Heroes of Horror (WotC, D&D 3.5) prestige classes,
// transcribed in full — progression tables included —
// from Shaun's own copy, 2026-11-04: Corrupt Avenger
// (pp. 88-90), Death Delver (pp. 93-94), Dread Witch
// (pp. 98-99, a 5-level class), Fiend-Blooded
// (pp. 102-103), Purifier of the Hallowed Doctrine
// (pp. 108-109), and Tainted Scholar (pp. 113-115).
// 3.5-native: no conversion. Spell-list data for the
// classes with their own lists is folded into the
// Spellcasting feature, following the Five Fingers
// Malefactor precedent. Summaries are short mechanical
// paraphrases in our own words; no book prose is
// reproduced. Printing quirks are recorded as printed:
// the Fiend-Blooded class-skill list prints
// "Intimidation" (filed here as the Intimidate skill).

const HOH = "Heroes of Horror";
const HOH_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Heroes Of Horror.pdf";
const CA = `${HOH} — Corrupt Avenger`;
const DD = `${HOH} — Death Delver`;
const DW = `${HOH} — Dread Witch`;
const FB = `${HOH} — Fiend-Blooded`;
const PUR = `${HOH} — Purifier of the Hallowed Doctrine`;
const TS = `${HOH} — Tainted Scholar`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: HOH_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const ca = mk("corrupt-avenger", CA);
const dd = mk("death-delver", DD);
const dw = mk("dread-witch", DW);
const fb = mk("fiend-blooded", FB);
const pur = mk("purifier-of-the-hallowed-doctrine", PUR);
const ts = mk("tainted-scholar", TS);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const GOOD5 = [2, 3, 3, 4, 4];
const POOR5 = [0, 0, 1, 1, 1];

export const HEROES_OF_HORROR_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "corrupt-avenger",
    name: "Corrupt Avenger",
    ruleset: "core",
    source: `${CA} (pp. 88-90)`,
    sourceUrl: HOH_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Bluff", "Climb", "Concentration", "Diplomacy", "Intimidate", "Jump",
      "Knowledge (local)", "Listen", "Ride", "Sense Motive", "Spot", "Survival",
    ],
    prerequisites: [
      "Alignment: non-evil",
      "Base attack bonus +6",
      "Taint: moderate corruption",
    ],
    features: [
      ca("Spellcasting", "The corrupt avenger casts a small number of arcane spells, prepared from a spellbook like a wizard. To cast a spell he must have a corruption score equal to or greater than the spell's level; bonus spells are based on a number equal to 10 + his corruption score, and save DCs are 10 + spell level + his Cha modifier. A 0 on the table means bonus spells only. He can also prepare and cast corrupt spells (p. 125). At 1st level his spellbook contains two 1st-level spells of his choice from the class list; at each new level he gains two new spells of any level he can cast. Spells per day (1st/2nd/3rd/4th): 1st: 0; 2nd: 1; 3rd: 1/0; 4th: 1/1; 5th: 1/1/0; 6th: 1/1/1; 7th: 2/1/1/0; 8th: 2/1/1/1; 9th: 2/2/1/1; 10th: 2/2/2/1. Corrupt avenger spell list — 1st: cause fear, detect magic, detect poison, detect taint*, detect undead, doom, endure elements, magic weapon, read magic, resistance. 2nd: bear's endurance, bull's strength, darkness, death knell, false life, resist energy, scare, shatter, summon swarm, undetectable alignment, vampiric touch. 3rd: bestow curse, deeper darkness, discern lies, dispel magic, fear, greater magic weapon, haste, protection from energy, remove curse, slow, speak with dead. 4th: cloak of hate*, crushing despair, death ward, enervation, Evard's black tentacles, freedom of movement, phantasmal killer, pronouncement of fate*. *New spell in this book.", 1),
      ca("Armored Casting", "Because the somatic components of corrupt avenger spells are simple, he can cast them in light armor without the normal arcane spell failure chance. Medium or heavy armor, or a shield, imposes the normal failure chance, as does light armor for arcane spells from other classes.", 1),
      ca("Detect Sworn Foe (Sp)", "At will, detect the presence of his sworn foe, as the detect evil spell in range, area, and duration: 1st round of concentration shows presence, 2nd round the number of foes and the power of the strongest, 3rd round the strength and location of each.", 1),
      ca("Sworn Foe (Ex)", "At 1st level he chooses a specific kind of monster or an organization as his sworn foe — not a broad category such as aberrations, but a single creature type (like bugbears) or group. He gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks relating to his sworn foe, rising to +4 at 4th level, +6 at 7th, and +8 at 10th. Unlike a ranger's favored enemy, he gains no damage bonus. Whenever he faces his sworn foe in combat, he enters a ragelike fury: +2 to Strength and Constitution, lasting a number of rounds equal to his corruption score or until no sworn foes remain within sight (or within 60 feet if hidden). At the fury's end he must make a Fortitude save (DC 15 + 1 per round in the fury) or his corruption score increases by 1.", 1),
      ca("Taint Suppression", "His corruption need not show: he can replace any physical symptom of corruption with the internal corruption symptom, though his depravity manifests normally. If he enters a tainted area, his corruption manifests externally again; the physical symptoms disappear 1d4 days after he leaves a tainted area.", 1),
      ca("Tainted Strike (Ex)", "From 2nd level, he can infuse a melee attack with the power of his taint, adding 1/2 his class level to the damage dealt. Against a creature immune to taint (such as an undead creature or one with the evil subtype), the tainted strike has no effect. Usable once per day at 2nd level, twice per day at 6th, and three times per day at 10th.", 2),
      ca("Grim Resolve (Ex)", "Starting at 3rd level, he gains a bonus equal to his Charisma bonus (if any) on all saving throws. This does not stack with other effects that add Charisma to saves (such as divine grace).", 3),
      ca("Frightful Fury (Ex)", "Beginning at 5th level, when he enters his fury against his sworn foe, all opponents within 30 feet must succeed on a Will save (DC 10 + his corrupt avenger level + his Cha modifier) or become shaken (–2 on attack rolls, saving throws, skill checks, and ability checks).", 5),
      ca("Unnerving Fury (Ex)", "At 9th level, opponents within 30 feet who fail the Will save against his fury become unnerved instead, taking a –4 penalty on attack rolls, saving throws, skill checks, and ability checks.", 9),
      ca("Fallen Paladin Benefits", "A fallen paladin who becomes a corrupt avenger gains extra abilities by paladin levels held: 1-2: tainted strike 1/day (additional, stacks). 3-4: lay on hands once per day, curing damage equal to one-half his corruption score + his combined corrupt avenger and paladin levels. 5-6: one additional daily tainted strike, and his sworn foe bonus increases by +2 (stacking). 7-8: a bonus tainted feat from the tainted feats list (p. 119) for which he meets the prerequisites. 9-10: death knell whenever he uses a coup de grace to kill a living creature, plus one additional daily tainted strike.", undefined),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "death-delver",
    name: "Death Delver",
    ruleset: "core",
    source: `${DD} (pp. 93-94)`,
    sourceUrl: HOH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Gather Information", "Knowledge (arcana)",
      "Knowledge (religion)", "Listen", "Profession", "Search", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Base Will save +2",
      "Skills: Concentration 8 ranks",
      "Skills: Heal 2 ranks",
      "Skills: Knowledge (religion) 4 ranks",
      "Special: must have had at least one near-death experience (fallen below 0 hit points and lived)",
    ],
    features: [
      dd("Spellcasting", "The death delver casts a small number of divine spells, prepared like a cleric, drawing on the death delver list. To cast a spell he needs a Wisdom score of at least 10 + the spell's level; bonus spells are based on Wisdom, and save DCs are 10 + spell level + his Wis modifier. A 0 on the table means bonus spells only. He must spend 1 hour each night in contemplation of death to regain spells; rest has no impact on preparation. Spells per day (1st/2nd/3rd/4th): 1st: 0; 2nd: 1; 3rd: 1/0; 4th: 1/1; 5th: 1/1/0; 6th: 1/1/1; 7th: 2/1/1/0; 8th: 2/1/1/1; 9th: 2/2/1/1; 10th: 2/2/2/1. Death delver spell list — 1st: bless, cause fear, detect poison, detect undead, hide from undead, lesser restoration, remove fear. 2nd: bear's endurance, bull's strength, command undead, delay poison, remove paralysis, resist energy, rigor mortis*. 3rd: animate dead, deep slumber, halt undead, protection from energy, remove blindness/deafness, remove disease, speak with dead. 4th: break enchantment, death ward, enervation, fear, freedom of movement, neutralize poison, restoration. *New spell in this book.", 1),
      dd("Deathsense (Ex)", "He can detect the presence and condition of nearby life, as the deathwatch spell, invoked at will at no cost as a swift action.", 1),
      dd("Rebuke Undead", "Like an evil cleric, he can rebuke undead, using his death delver level as the cleric level, a number of times per day equal to 3 + his Charisma modifier. He can take Extra Turning for more attempts; if he already rebukes undead from another class, death delver levels stack with those levels for rebuking.", 1),
      dd("Deadened Soul (Ex)", "Upon reaching 2nd level, he is immune to fear effects of any kind.", 2),
      dd("Spontaneous Casting", "From 2nd level, like a cleric he can lose any prepared spell to cast a cure spell of the same level or lower. An evil death delver can only convert to inflict spells; a neutral death delver must choose cure or inflict and can never change the choice.", 2),
      dd("Death Ward (Su)", "At 3rd level, he can protect himself or another as the death ward spell, except the duration is 1 hour per death delver level. Using it is a standard action. He gains an additional daily use at 6th level and again at 9th level.", 3),
      dd("Diehard", "Death delvers of at least 4th level gain the benefit of the Diehard feat, even if they do not meet the prerequisites.", 4),
      dd("Fear Aura (Su)", "Starting at 5th level, once per day he can emanate an aura of fear in a 30-foot radius for a number of rounds equal to his class level. Enemies (not allies) in the area must make a Will save (DC 10 + class level + his Cha modifier) or be affected as if by a fear spell.", 5),
      dd("Cheat Death (Ex)", "From 7th level, whenever anyone attempts a coup de grace on him, he automatically makes the subsequent Fortitude save (the attacker still deals normal damage). Likewise, when he takes massive damage (50 or more from a single attack), he automatically succeeds on the Fortitude save to survive the trauma, though sheer damage can still kill him.", 7),
      dd("Mantle of Life (Su)", "Beginning at 8th level, as a full-round action he can send a surge of vitality through all companions within 60 feet, granting every ally in the area (including himself) a +4 bonus on Will saves for 1 minute per class level.", 8),
      dd("Nine Lives (Ex)", "At 10th level he gains nine bonus lives. Every time a single attack, spell, or effect would drop him below –10 hit points or otherwise kill him, he loses one of his nine lives instead and drops to –9 hit points, stable. Continuing sources of damage (lava, drowning) burn through lives quickly. Once the lives are gone, they are gone.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dread-witch",
    name: "Dread Witch",
    ruleset: "core",
    source: `${DW} (pp. 98-99)`,
    sourceUrl: HOH_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, POOR5, POOR5, GOOD5),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Intimidate", "Knowledge (arcana)",
      "Knowledge (the planes)", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Base Will save +4",
      "Skills: Knowledge (arcana) 3 ranks",
      "Spellcasting: ability to cast cause fear and scare",
      "Special: must have suffered at least one fear effect against which she failed her save",
    ],
    features: [
      dw("Spellcasting", "At every dread witch level except 1st, she gains new spells per day and an increase in caster level (and spells known, if applicable) as if she had also gained a level in a spellcasting class she belonged to before. She gains no other benefit of that class.", 2),
      dw("Master of Terror (Ex)", "Her fear spells become more potent: the save DC of any spell she casts with the fear descriptor increases by 1 (stacking with Spell Focus). She adds bane and doom to her arcane spellcaster list as 2nd-level spells, and gains a bonus on all Intimidate checks equal to +2 per class level.", 1),
      dw("Unnatural Will", "She gains the Unnatural Will feat (p. 124) as a bonus feat, even if she does not meet the prerequisites.", 1),
      dw("Absorb Fear (Su)", "Starting at 2nd level, she turns her own fear into power. Any time she is exposed to a condition that could make her shaken, all her spells function at +1 caster level; frightened, +2; panicked, +3. The bonuses last for the fear effect's duration or a number of rounds equal to her Charisma modifier, whichever is less, and are treated as though she had failed the save (she gains the panicked bonus even if she saves to be merely frightened). Instead of the bonuses, she may choose to cast a single extra spell without using a spell slot — a cantrip if shaken, a 1st-level spell if frightened, a 2nd-level spell if panicked — decided the instant she is subject to the fear effect and cast within a number of rounds equal to her Charisma modifier. She can benefit from only one fear effect at a time.", 2),
      dw("Fearful Empowerment (Su)", "Starting at 3rd level, once per day she can add the fear descriptor to any spell she casts that has some sort of visual manifestation (not, for example, charm person). Creatures targeted by the spell must make a Will save (DC 10 + her class level + her Cha modifier) or become shaken for 1d4 rounds, in addition to the spell's other effects; her master of terror DC bonuses apply. At 5th level she can use this power twice per day.", 3),
      dw("Delay Fear (Su)", "Starting at 4th level, she can delay the onset of any fear effect she imposes (such as by casting cause fear) by up to a number of minutes equal to her Charisma modifier, chosen when casting and unchangeable later. She can likewise delay fear effects affecting herself — onset postponed a number of rounds equal to her Charisma modifier, while still gaining the absorb fear benefits — twice per day.", 4),
      dw("Greater Master of Terror (Ex)", "Beginning at 4th level, the save DC increase for all her spells with the fear descriptor rises from +1 to +2. Her fear spells can now affect individuals normally immune to fear, such as paladins (they still gain a saving throw); only a target whose HD exceed her caster level by 4 or more is immune to her mastery of terror.", 4),
      dw("Horrific Aura (Su)", "At 5th level she radiates an aura of terror. Creatures with 6 or fewer HD must succeed on a Will save (DC 10 + her class level + her Cha modifier) or remain shaken while within 10 feet of her; a successful save grants immunity for 24 hours, and creatures above 6 HD are unaffected. Once per day per point of Charisma modifier, she can channel this aura into a potent touch attack: creatures struck who fail their Will save are panicked for 1d4+1 rounds, and those who succeed are shaken for 1 round. Unlike the aura, the touch functions against creatures of any HD and can even affect individuals normally immune to fear.", 5),
      dw("Reflective Fear (Su)", "At 5th level, any fear effect against which she successfully saves is immediately targeted back at its source, and she still gains the absorb fear benefits. If the source fails its save, everyone else who might have been subject to the fear effect gains a second saving throw to shake it off.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "fiend-blooded",
    name: "Fiend-Blooded",
    ruleset: "core",
    source: `${FB} (pp. 102-103)`,
    sourceUrl: HOH_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Intimidate", "Knowledge (arcana)",
      "Knowledge (the planes)", "Spellcraft",
    ],
    prerequisites: [
      "Race: any humanoid race (cannot already be a half-fiend)",
      "Alignment: any nongood alignment",
      "Skills: Concentration 8 ranks",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Knowledge (the planes) 8 ranks",
      "Feats: Blood Calls to Blood, Eschew Materials",
      "Spellcasting: must be able to cast 2nd-level arcane spells without preparation",
    ],
    features: [
      fb("Spellcasting", "At each new fiend-blooded level except 10th, she gains new spells per day and an increase in caster level (and spells known, if applicable) as if she had gained a level in a spellcasting class she belonged to before. She gains no other benefit of that class, except that fiend-blooded levels stack with other arcane spellcaster levels for determining familiar abilities. With more than one prior spellcasting class, she chooses which class each level advances.", 1),
      fb("Fiendish Companion", "Her familiar benefits from her fiendish heritage: the fiendish template (Monster Manual, p. 108) can be applied to her familiar if she desires. Because this is a sympathetic link rather than possession, the familiar's alignment need not shift to evil.", 1),
      fb("Fiendish Heritage (Ex)", "She draws strength from her fiendish ancestor's essence as she masters her lineage: at 1st level a +1 natural armor bonus to AC; at 3rd level +1 to Charisma; at 5th level +1 to Intelligence; at 7th level +1 to Dexterity; at 9th level +1 to Constitution.", 1),
      fb("Fiendish Sorcery", "At 2nd level, and again at 4th, 6th, 8th, and 10th level, she adds one additional spell to her spells known list. Each new spell must be of a level she can cast, and must carry the fire descriptor or belong to the schools of enchantment, illusion, or necromancy — it can even be a divine spell otherwise unavailable to her (such as speak with dead), but not, for example, lightning bolt.", 2),
      fb("Blood of Fiends (Ex)", "From 3rd level, she gains a +1 bonus on saves against poison and reduces any damage taken from poison (hit point or ability damage) by 1 point. At 6th level she gains resistance to cold and fire 5. At 9th level she gains resistance to acid and electricity 5.", 3),
      fb("Smiting Spell (Su)", "From 4th level, as a free action once per day she can invest a portion of her fiendish power into any damaging spell she casts: the spell deals additional damage equal to her fiend-blooded class level + her Charisma modifier to all within the spell's area. From 8th level she can use smiting spell twice per day.", 4),
      fb("Fiendish Exaltation (Ex)", "At 10th level she unlocks the final secrets of her lineage: in addition to the fiendish heritage boosts, she gains a further +1 to Dexterity, Constitution, and Intelligence, and +2 to Strength, plus complete immunity to poison and damage reduction 10/magic.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "purifier-of-the-hallowed-doctrine",
    name: "Purifier of the Hallowed Doctrine",
    ruleset: "core",
    source: `${PUR} (pp. 108-109)`,
    sourceUrl: HOH_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)",
      "Knowledge (history)", "Knowledge (religion)", "Knowledge (the planes)",
      "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: any good alignment or true neutral",
      "Skills: Knowledge (arcana) 4 ranks",
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Pure Soul",
      "Special: ability to turn undead",
    ],
    features: [
      pur("Tainted Creatures", "For purposes of his special abilities, a tainted creature includes any creature with a corruption or depravity score of 1 or more, any creature with a tainted feat, and any creature that has the ability to bestow corruption or depravity on another creature.", undefined),
      pur("Spellcasting", "At every odd-numbered level (1st, 3rd, 5th, 7th, 9th), he gains new spell levels and an increase in caster level (and spells known, if applicable) as if he had also gained a level in a divine spellcasting class he belonged to before. He gains no other benefit of that class; with more than one prior divine class, he decides which each level advances.", 1),
      pur("Aura of Purity (Ex)", "He radiates an aura of holiness that makes his nature hard to hide: tainted creatures recognize him for what he is (or at least as a threat) with a successful Spot check at DC 20 minus his purifier class level.", 1),
      pur("Detect Taint (Sp)", "At will, he can use detect taint (see the spell, p. 128).", 1),
      pur("Turn Undead (Su)", "His purifier class levels stack with any cleric or paladin levels he has for purposes of turning undead.", 1),
      pur("Lay on Hands (Su)", "Starting at 2nd level, he can lay on hands as a paladin of his class level. If he also has paladin levels, the levels stack.", 2),
      pur("Smite Taint (Su)", "Beginning at 3rd level, he can smite tainted creatures as a paladin smites evil. If he has another smite ability (such as smite evil), he can choose as need dictates to use that power to smite taint instead. He gains additional daily uses at higher levels: 2/day at 6th level and 3/day at 9th level.", 3),
      pur("Aura of Sanctity (Su)", "Starting at 4th level, all allies within 10 feet of him gain a +2 sacred bonus on saves made to resist acquiring taint. This bonus rises to +4 at 10th level.", 4),
      pur("Turn Tainted (Su)", "At 5th level, he can turn any tainted creature as though it were an undead equal to the creature's HD + 4.", 5),
      pur("Purify Soul (Su)", "Beginning at 6th level, he can cure a living being of 1 point of corruption or depravity by touching the individual and spending a use of his turn undead ability. Unwilling creatures may save — Fortitude against curing corruption, Will against curing depravity — at DC 10 + his purifier class level + his Cha modifier. This cannot remove so much taint that it would move the target to a lower taint category, and innately tainted creatures are unaffected. From 8th level the touch cures 2 points; from 10th level, 3 points.", 6),
      pur("Cleansing Flame (Su)", "Starting at 7th level, three times per day he can cast any offensive spell against a tainted creature as though it were maximized (as the metamagic feat), without preparing in advance and without increasing the spell's slot. The spell functions as maximized only against tainted creatures; against any other creature in its area it functions normally.", 7),
      pur("Shield of Purity (Su)", "At 8th level, by spending a use of his turn undead ability, he can surround himself and his companions with a shield of holy energy covering up to a 10-foot radius around him, lasting a number of rounds equal to his Charisma modifier (minimum 1). Any creature with even a single point of taint cannot enter the area, and all within gain a +6 sacred bonus on saves against spells or magical attacks made by tainted creatures from a distance.", 8),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "tainted-scholar",
    name: "Tainted Scholar",
    ruleset: "core",
    source: `${TS} (pp. 113-115)`,
    sourceUrl: HOH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Intimidate",
      "Knowledge (all skills, taken individually)", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Concentration 8 ranks",
      "Skills: Knowledge (arcana) 4 ranks",
      "Spellcasting: ability to cast 1st-level arcane spells or use least invocations (warlock)",
      "Taint: moderate or greater depravity",
    ],
    features: [
      ts("Spellcasting", "At each level, he gains new spells per day and an increase in caster level (and spells known, if applicable) as if he had also gained a level in an arcane spellcasting class to which he belonged before. He gains no other benefit of that class; with more than one prior arcane class, he chooses which each level advances.", 1),
      ts("Tainted Spellcasting (Su)", "He uses his corruption and depravity scores instead of a key ability score for spellcasting. To cast a spell he must have a depravity score at least equal to the spell's level. Bonus spells are based on a number equal to his depravity score + 10, and saving throws against his spells have a DC of 10 + spell level + 1/2 his corruption score. Each time he casts an arcane spell, he must make a Will save (DC 10 + spell level) or increase his depravity score by 1. All arcane spells he casts are evil spells.", 1),
      ts("Taint Suppression", "He can replace any physical symptom of corruption with the internal corruption symptom, though his depravity manifests normally. If he enters a tainted area, his corruption manifests externally again; the physical symptoms disappear again 1d4 days after he leaves a tainted area.", 1),
      ts("Blood Component (Su)", "He can substitute a drop of his own blood for a spell's material component (if any), increasing the spell's power. Drawing the blood is a free action that becomes a normal part of casting and deals 1 point of damage to him (damage reduction does not apply), but raises the spell's caster level by 1. Costly material components (over 1 gp) must still be provided, though the ability can still enhance such a spell; it can also enhance a spell with no material component.", 1),
      ts("Level Advancement", "The power of taint is seductive: to advance a level in another class after taking his first tainted scholar level, he must succeed on a Will save (DC 10 + his depravity score). On a failure he must advance another level in tainted scholar instead, and must attempt the save again at the next level. Once he reaches 10th level as a tainted scholar, he can freely advance in other classes.", 1),
      ts("Secret", "At 2nd level, and again at 4th, 6th, 8th, and 10th level, he chooses a secret from the tainted scholar secrets table. His class level plus his depravity score determines which secrets he can choose (minimum level + depravity): 1 Blooded metamagic; 2 Stanch; 3 Death knell; 4 Clarity of true madness; 5 Wholesome corruption; 6 Bloodseeking spell; 7 Thicker than water; 8 Tainted knowledge; 9 Forbidden arcana; 10 Greater forbidden arcana. The same secret cannot be chosen twice.", 2),
      ts("Secret — Blooded Metamagic", "He can apply a metamagic feat he knows to a spell by paying in blood instead of a higher-level spell slot: Constitution damage equal to the feat's spell slot adjustment. He cannot enhance a spell to a level higher than he can cast, and without a Constitution score he cannot use this ability.", 2),
      ts("Secret — Stanch (Ex)", "He becomes stable automatically when his hit points drop below 0. He still dies at –10 hit points or below.", 2),
      ts("Secret — Death Knell (Sp)", "He can use death knell once per day as a spell-like ability.", 2),
      ts("Secret — Clarity of True Madness (Su)", "Once per day, he can add his depravity score as a bonus on one Wisdom-based skill check or Will save, chosen before the roll.", 2),
      ts("Secret — Wholesome Corruption (Su)", "Once per day, he can add his corruption score as a bonus on one Concentration check or Fortitude save, chosen before the roll.", 2),
      ts("Secret — Bloodseeking Spell (Su)", "By inflicting a minor wound on himself (a free action dealing 3 points of damage to him, ignoring damage reduction) as part of casting, he imbues a spell with blood-drawing power: it deals an extra 1d6 points of damage to each target that takes hit point damage from the spell. It cannot apply to spells that deal no hit point damage; constructs, elementals, oozes, plants, undead, and creatures without blood are immune.", 2),
      ts("Secret — Thicker Than Water (Su)", "His blood withdraws from wounds, preventing some damage: he gains damage reduction 1/piercing and slashing.", 2),
      ts("Secret — Tainted Knowledge", "He gains a bonus tainted feat, chosen from the list of tainted feats (p. 121).", 2),
      ts("Secret — Forbidden Arcana", "He gains the use of one additional 1st-level spell per day, as if gained through a high ability or depravity score.", 2),
      ts("Secret — Greater Forbidden Arcana", "He gains the use of one additional 2nd-level spell per day, as if gained through a high ability or depravity score.", 2),
      ts("Lore", "At 3rd level, he gains lore as a bard's bardic knowledge, adding his tainted scholar class level and Intelligence modifier to the check. He can add his depravity score instead of his Intelligence modifier to any lore check dealing with supernatural, horrific, tainted, or otherwise forbidden subjects, at the DM's discretion.", 3),
      ts("Outré Lore (Sp)", "Beginning at 5th level, once per day he can use contact other plane as a spell-like ability. If his Intelligence and Charisma temporarily decrease as a result, he must make a Will save (DC = the spell's Intelligence-check DC + 10) or have his depravity score increased by 1.", 5),
      ts("Aberrant Lore", "At 7th level, by concentrating as a full-round action on a creature, object, or specific site within 60 feet, he can determine whether it carries or transmits taint. For a creature, he can also determine the strength of its higher taint score (corruption or depravity): mild, moderate, or severe.", 7),
      ts("Heretical Lore", "Beginning at 9th level, his contacts among the evil creatures of the planes can rescue him from extreme situations or grant his wishes: once per day he can call upon them for a limited wish with no XP cost. Using this ability increases his corruption and depravity scores by 1d3 points each and imposes a geas/quest requiring him to perform some evil act in repayment.", 9),
    ].map((x) => x as FeatureDefinition),
  },
];
