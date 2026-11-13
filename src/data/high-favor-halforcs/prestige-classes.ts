import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Heroes of High Favor: Half-Orcs (Bad Axe Games, 2002)
// prestige classes, printed pp. 20-59, transcribed in full —
// progression tables included — from Shaun's own scanned
// copy (image-only; read visually page by page, 2026-11-05).
// The chapter presents ten prestige classes, one for each
// iconic multiclass combination with the half-orcs' favored
// class, barbarian: Agitator (barbarian-bard), Favored of
// the Eye (barbarian-cleric), Moulder (barbarian-druid),
// Horde Chieftain (barbarian-fighter), Lost One
// (barbarian-monk), Fervent Antagonist (barbarian-paladin),
// Dire Stalker (barbarian-ranger), Coal-Tongue Raver
// (barbarian-rogue), Wyrd (barbarian-sorcerer), and Hoodoo
// (barbarian-wizard). This is a 3.0-era book: entries are
// transcribed as printed, including 3.0 skills that 3.5 later
// folded into other skills (Animal Empathy, Innuendo, Intuit
// Direction, Scry, Speak Language, Wilderness Lore), the
// 3.0 subdual-damage terminology, and 3.0 forms such as the
// Enraged Casting feat prerequisite and "PHB, Table 3-8 /
// 3-10" references — flagged here, not modernized. Two
// printed text-vs-table conflicts are preserved as noted in
// the affected features: Favored of the Eye's Improved
// Enraged Casting (III) is at 9th level in Table 2 but the
// text says the third domain is gained at 10th level, and
// Horde Chieftain's Inspire Horde is at 7th level in Table 4
// but the text says 8th level; in both cases the feature is
// filed at the table level. Summaries are short mechanical
// paraphrases in our own words; no book prose is reproduced.

const HOHO = "Heroes of High Favor: Half-Orcs";
const HOHO_PATH = "library-staging/books3p/high-favor-halforcs.pdf";
const AG = `${HOHO} — Agitator`;
const FE = `${HOHO} — Favored of the Eye`;
const MO = `${HOHO} — Moulder`;
const HC = `${HOHO} — Horde Chieftain`;
const LO = `${HOHO} — Lost One`;
const AN = `${HOHO} — Fervent Antagonist`;
const DI = `${HOHO} — Dire Stalker`;
const CO = `${HOHO} — Coal-Tongue Raver`;
const WY = `${HOHO} — Wyrd`;
const HD = `${HOHO} — Hoodoo`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: HOHO_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fag = mk("agitator", AG);
const ffe = mk("favored-of-the-eye", FE);
const fmo = mk("moulder", MO);
const fhc = mk("horde-chieftain", HC);
const flo = mk("lost-one", LO);
const fant = mk("fervent-antagonist", AN);
const fdire = mk("dire-stalker", DI);
const fcoal = mk("coal-tongue-raver", CO);
const fwyrd = mk("wyrd", WY);
const fhoo = mk("hoodoo", HD);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const HOHO_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "agitator",
    name: "Agitator",
    ruleset: "core",
    source: `${HOHO}, p. 20`,
    sourceUrl: HOHO_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Bluff", "Climb", "Craft", "Diplomacy", "Disguise", "Gather Information",
      "Hide",  "Intimidate", "Jump", "Listen", "Move Silently",
      "Perform", "Ride", "Search", "Sense Motive", "Speak Language", "Spot",
      "Swim", "Tumble", "Survival",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Bluff 6 ranks",
      "Skills: Diplomacy 6 ranks",
      "Skills: Intimidate 6 ranks",
      "Skills: Perform 6 ranks (must include chant, drums, epic, and storytelling)",
      "Skills: Sense Motive 6 ranks",
      "Skills: Speak Language: any 3 languages",
      "Special: rage; inspire courage bardic ability",
    ],
    features: [
      fag("Agitator Proficiencies", "Barbarian-bard prestige class — the hot-blooded mouthpiece of savage powers, sowing violence and discord among enemy and ally alike. Proficient with all simple weapons, light and medium armor, and shields. Per Table 1 (p. 23), 9th level grants no new ability.", undefined),
      fag("Bardic Abilities", "The agitator continues his mastery of bardic performances and has access to inspire courage, countersong, fascinate, inspire competence, suggestion, inspire greatness, and the auras listed below. His effective bardic level increases with each level of agitator: add his agitator class level to any previous bard levels to determine number of bardic performances per day and all level-dependent effects of those abilities. No spellcasting advancement is stated for this class.", 1),
      fag("Zealous Performance", "The agitator can use his bardic abilities even while raging (normally, certain abilities such as fascinate require concentration). The DC of his bardic performances increases by +2 if performed while the agitator is raging. Some bardic performances cannot be used while the target is in combat; while the presence of combat still negates these abilities, the agitator's rage does not constitute 'combat.'", 1),
      fag("Additional Rage", "The agitator may enter a rage an additional time each day (again at 6th and at 10th level, per Table 1).", 2),
      fag("Uncanny Dodge", "At 2nd level the agitator gains the uncanny dodge ability. If he has this ability from another class, add his agitator class levels to his previous class levels and determine his uncanny dodge ability on that basis. At 5th level this becomes uncanny dodge (can't be flanked), per Table 1.", 2),
      fag("Aura of Fury", "A bardic performance, a full-round action that may be used even while in combat. The agitator can affect one target per effective bardic level; targets must be within 30 feet and all must be able to see, hear, and understand him. Willing targets receive +2 Strength, +2 Constitution, +1 to Will saves, and -1 AC. The effect lasts as long as the agitator continues the performance + 1 round/agitator class level thereafter.", 3),
      fag("Aura of Doom", "The agitator uses a slow war chant or deep, foreboding drums to cause a sense of doom in his foes. This bardic performance is a full-round action. All foes able to hear the performance must make a Will save (DC 10 + bardic level + 1/2 Cha bonus); creatures who fail are shaken (see DMG, Condition Summary). The effect lasts as long as the agitator continues the performance + 1 round/agitator class level thereafter.", 4),
      fag("Aura of Rage", "A more powerful version of the aura of fury: the bonuses increase to +4 Str, +4 Con, +2 Will saves, and -2 AC. All affected targets must be within 10 feet of the agitator and must be able to see, hear, and understand him. The effect lasts for 1 round/agitator class level, after which all affected targets are fatigued for the rest of the encounter.", 7),
      fag("Aura of Fear", "A more powerful version of the aura of doom, affecting one target per bardic level. All targets must be within 30 feet of the agitator. Opponents who fail their saving throws are frightened (see DMG, Condition Summary).", 8),
      fag("Aura of Panic", "A more powerful version of the aura of fear. All targets must be within 10 feet of the agitator. Opponents who fail their saving throws are panicked (see DMG, Condition Summary). At 10th level the agitator also gains an additional rage, per Table 1.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "favored-of-the-eye",
    name: "Favored of the Eye",
    ruleset: "core",
    source: `${HOHO}, p. 24`,
    sourceUrl: HOHO_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Climb", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal",
      "Intimidate", "Survival", "Jump", "Knowledge (arcana)",
      "Knowledge (religion)", "Listen", "Ride",  "Spellcraft", "Swim",
      
    ],
    prerequisites: [
      "Base attack bonus +6",
      "Skills: Concentration 6 ranks",
      "Skills: Diplomacy 6 ranks",
      "Skills: Intimidate 6 ranks",
      "Skills: Knowledge (half-orcs) 6 ranks",
      "Feats: Combat Casting, Enraged Casting, Weapon Focus (spear, axe, or other favored weapon) (any)",
      "Special: rage; ability to cast 2nd level divine spells; access to any two Orc domains",
    ],
    features: [
      ffe("Favored of the Eye Proficiencies", "Barbarian-cleric prestige class — among the clerics, adepts, and shamans who worship the god of the orcs, the Favored of the Eye is especially blessed. Proficient with all simple weapons, light and medium armor, and shields, and with all martial versions of his deity's favored weapon (for example, spears or axes). He is prohibited from using any weapon other than his deity's favored weapon; if he breaks this stricture, he loses all spellcasting and class abilities until he receives an atonement.", undefined),
      ffe("Spellcasting", "The Favored of the Eye continues to advance in spellcasting ability: add his class level to any previous divine spellcasting class levels to determine spells known, spells per day, and divine spellcaster level. He does not gain any other benefit a character of his previous class would have gained (ability to turn or rebuke undead, etc.). Per Table 2 (p. 27), 5th and 8th level grant no new ability beyond this advancement.", 1),
      ffe("Additional Domain", "The Favored of the Eye gains access to an additional domain and an additional granted power. The additional domain must be chosen from the list of Orc domains available to his deity.", 1),
      ffe("Additional Rage", "The Favored of the Eye may rage an additional time each day (again at 6th and at 10th level, per Table 2).", 2),
      ffe("Improved Enraged Casting", "The Favored of the Eye gains the ability to cast spells even while raging. At 3rd level he chooses one of his three domains; he may cast spells from that domain list even while raging, without having to make a Concentration check and without extending the time required to cast. This applies only to the Concentration check normally required by Enraged Casting; he must make a Concentration check as normal if he attempts to cast defensively, takes damage that would otherwise disrupt spellcasting, etc., and it applies to all spells that appear on his domain list, not merely his chosen daily domain spells. At 6th level he may choose a second domain. Table 2 places the third stage, Improved Enraged Casting (III), at 9th level; the text (p. 27) instead says he gains this ability with his third domain at 10th level — the conflict is transcribed as printed, and the feature is filed at the table level.", 3),
      ffe("Smite (Su)", "When wielding a spear, axe, or other appropriate favored weapon of his deity, the Favored of the Eye may smite his opponent: the attack is resolved with a +4 bonus to hit and a damage bonus equal to his class level. If the character has a smite ability from a previous class, add his previous class levels to his Favored of the Eye class levels and determine the damage bonus on that basis; the bonus to hit does not change. Usable 1/day at 4th level, 2/day at 7th level, and 3/day at 10th level, per Table 2.", 4),
      ffe("Divine Inspiration (Su)", "The Favored of the Eye may call upon his gods to enhance his spellcasting: as a free action, he can expend one of his daily turning attempts (if any) to increase his divine spellcasting ability for the current round. For all level-dependent effects of the next domain spell he casts, he may use his character level as his caster level and determine the effect of the spell based on the improved caster level. This increase only affects level-dependent effects of the spell being cast; it does not grant access to new spells or spell levels.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "moulder",
    name: "Moulder",
    ruleset: "core",
    source: `${HOHO}, p. 28`,
    sourceUrl: HOHO_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
       "Climb", "Concentration", "Craft", "Handle Animal",
      "Heal", "Intimidate", "Survival", "Jump", "Knowledge (nature)",
      "Listen", "Ride",  "Spellcraft", "Spot", "Swim", 
    ],
    prerequisites: [
      "Alignment: any chaotic or non-good",
      "Base Fortitude save +6",
      "Skills: Handle Animal 8 ranks",
      "Skills: Handle Animal 8 ranks",
      "Skills: Knowledge (nature) 8 ranks",
      "Skills: Survival 8 ranks",
      "Special: rage; wild shape class ability",
    ],
    features: [
      fmo("Moulder Proficiencies", "Barbarian-druid prestige class — the moulder twists nature to his own needs, accelerating the growth process and corrupting both himself and the animals in his care. The moulder does not gain any new proficiency with weapons or armor.", undefined),
      fmo("Spellcasting", "The moulder casts spells as a druid: add the moulder's class level to any druid levels and determine spellcasting ability according to PHB, Table 3-8. He has access to all druid spells.", 1),
      fmo("Animal Companions", "Like a druid, the moulder can attract animal companions. Include the moulder's class level when determining the maximum HD of his animal companions.", 1),
      fmo("Additional Wild Shape", "The moulder gains the ability to wild shape an additional time each day (again at 5th and at 8th level, per Table 3). This does not improve the scope of his wild shape ability in any way.", 2),
      fmo("Additional Rage", "The moulder may rage an additional time each day (again at 5th and at 8th level, per Table 3).", 2),
      fmo("Enrage Companion", "At 3rd level the moulder gains the ability to enrage one of his animal companions. If the moulder is already raging, he may expend an additional daily rage to enrage a single animal companion, granting it the normal benefits for rage. At 9th level (enrage animal companion (improved) in Table 3) the moulder can enrage all of his animal companions at once by expending a single additional rage.", 3),
      fmo("Ritual of Moulding (Su)", "At 4th level the moulder can perform his first Ritual of Moulding: a week-long ritual that lets him wild shape and merge his form with one of his companions; the animal companion is subsumed into the moulder's own body and is effectively destroyed. This has no effect on the loyalty of his current companions or his ability to gain additional companions, but the subsumed animal continues to count against his HD limit of animal companions. When the ritual is complete, the moulder permanently gains a single ability chosen from the animal's special abilities; access to this ability is a supernatural effect (details in the MM or in Chapter 3 of the book). Each ability may be chosen only once; they do not stack. Ritual of Moulding (I) choices: camouflage, enhanced senses, ferocity, low-light vision, improved unarmed attack, rage. At 7th level, Ritual of Moulding (II) adds: improved grab, scent, or sprint. At 10th level, Ritual of Moulding (III) adds: blindsight, poison, or pounce.", 4),
      fmo("Mould Animal Companions", "The moulder may perform a ritual to fuse two of his animal companions into a single beast. The ritual takes one week and costs 100 XP per HD of the combined companions; at the end of that time the moulder must make a Handle Animal check (DC 10 + the combined HD of both creatures), and may not take 10 on this check. If the check is failed, both creatures are destroyed. If it succeeds, he chooses one companion as the base form and the other as the donor: the base animal's type changes to magical beast but it remains loyal as an animal companion, retains all of its characteristics, and gains +2 HD, +1 natural armor, and a single extraordinary ability chosen from the donor. The player is free to determine the appearance of the new creature, subject to GM approval.", 6),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "horde-chieftain",
    name: "Horde Chieftain",
    ruleset: "core",
    source: `${HOHO}, p. 32`,
    sourceUrl: HOHO_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Climb", "Craft", "Handle Animal", "Intimidate", "Survival",
      "Jump", "Listen", "Ride", "Swim", 
    ],
    prerequisites: [
      "Base attack bonus +6",
      "Skills: Intimidate 9 ranks",
      "Skills: Ride 9 ranks",
      "Skills: Survival 9 ranks",
      "Feats: Leadership, Weapon Specialization (any spear, great axe, or orc double axe)",
      "Special: rage class ability",
    ],
    features: [
      fhc("Horde Chieftain Proficiencies", "Barbarian-fighter prestige class — the scourge of civilized folks, a charismatic leader able to summon hordes of savages to his side to engage in pillage and plunder. Proficient with all simple and martial weapons, all armor, and shields.", undefined),
      fhc("Inspire Bodyguard", "The horde chieftain's closest followers zealously emulate his fiercest abilities: if he is already raging, he may expend an additional rage to grant his followers the use of a bonus fighter feat (chosen from his own feats) for the duration of his rage. He cannot grant access to any feat for which the followers do not have the prerequisites. This ability applies only to the character's normal followers gained through the Leadership feat; it does not apply to cohorts or to any current horde warriors.", 1),
      fhc("Additional Rage", "The horde chieftain can rage an additional time each day (again at 4th, 7th, and 10th level, per Table 4).", 1),
      fhc("Bonus Feat", "At 1st, 5th, and 9th level, the horde chieftain gains a bonus feat chosen from the list of bonus fighter feats.", 1),
      fhc("Enrage Bodyguard", "If the horde chieftain is already raging, he may expend an additional rage to send all of his followers within 90 feet into a barbarian rage: they gain +4 Strength, +4 Constitution, +2 Will saves, and -2 AC. At the end of the horde chieftain's own rage, his bodyguard will cease raging and become fatigued. This ability applies only to his own normal followers, not to any cohorts or horde followers.", 2),
      fhc("Summon Horde", "Once per adventure (at the GM's discretion) the horde chieftain can muster a barbarian horde to assist him: he attracts an additional number of 1st level warriors (over and above his normal followers) equal to his current Leadership score. He must wait in a fixed location for the horde followers to arrive over the next d4+1 days. The horde remains with him until the completion of his task or d4+1 days have passed; he can extend this time with an Intimidate check (DC 15 +1 per additional day, cumulative), and if the check is failed, the horde disperses. At 7th level he summons a number of additional horde followers equal to twice his Leadership score; at 10th level, equal to four times his Leadership score. Despite the printed name, this is a mundane mustering of followers who travel to him, not a magical summoning.", 3),
      fhc("Horde Frenzy", "If the horde chieftain is already raging, he may expend an additional rage to send his horde followers into a frenzy: they gain +2 Strength, +2 Constitution, and -1 AC for the duration of his current rage, and are not fatigued at the end of this frenzy.", 5),
      fhc("Barbarian Bodyguard", "At 6th level, the horde chieftain may replace his normal complement of 1st level warrior followers with 1st level barbarians. This does not apply to cohorts or horde followers.", 6),
      fhc("Inspire Horde", "Table 4 places Inspire Horde at 7th level (with an additional rage); the text (p. 35) says 8th level — the conflict is transcribed as printed, and the feature is filed at the table level. If the horde chieftain is already raging, he may expend an additional rage to grant all of his horde followers the use of a bonus fighter feat (chosen from his own feats) for the duration of his rage. He cannot grant access to any feat for which the followers do not have the prerequisites.", 7),
      fhc("Improved Rage", "At 8th level the horde chieftain's rage bonuses rise to +6 Strength, +6 Constitution, +3 Will saves, and -2 AC. At 10th level the horde chieftain is no longer fatigued at the end of his rage (Table 4 lists improved rage again at 10th level, with barbarian horde and an additional rage).", 8),
      fhc("Barbarian Horde", "At 10th level, when the horde chieftain uses his Summon Horde ability, all 1st level horde followers he attracts are upgraded to 1st level barbarians.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "lost-one",
    name: "Lost One",
    ruleset: "core",
    source: `${HOHO}, p. 36`,
    sourceUrl: HOHO_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(FULL10, GOOD10, GOOD10, GOOD10),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Handle Animal", "Hide", "Intimidate", "Survival", "Jump",
      "Knowledge (arcana)", "Listen", "Move Silently", "Ride", "Spot", "Swim",
      "Tumble", 
    ],
    prerequisites: [
      "Base Will save +4",
      "Skills: Diplomacy 6 ranks",
      "Feats: Improved Unarmed Strike, Stunning Fist (or equivalent class ability)",
      "Special: rage, frenzy, or ki class ability; must be literate in at least one language",
    ],
    features: [
      flo("Lost One Proficiencies", "Barbarian-monk prestige class — caught between the civilized world and his savage heritage, the lost one struggles to find his identity and contain the rage within. Lost ones do not gain any new proficiency with weapons or armor.", undefined),
      flo("Unarmed Fighting", "The lost one continues to study the unarmed fighting techniques of the monk and gains the improved rate of unarmed attacks of a monk: he adds his class level to any monk levels to determine unarmed damage, AC bonus, and unarmored speed (fast movement). (See PHB, table 3-10.)", 1),
      flo("Flurry of Blows", "The lost one can strike with a flurry of blows, as per the monk ability of the same name.", 1),
      flo("Uncanny Dodge", "At 2nd level the lost one gains the uncanny dodge ability. If he has this ability from another class, add his lost one class levels to his previous class levels and determine his uncanny dodge ability on that basis. At 5th level this becomes uncanny dodge (can't be flanked), per Table 5.", 2),
      flo("Furious Strike", "The lost one may harness his inner fury to add to the damage of his unarmed attacks — though at the expense of AC. Until the start of his next action, he may add his monk's AC bonus (per PHB table 3-10, including any Wisdom bonus) to his unarmed damage instead of to his AC.", 2),
      flo("Damage Reduction", "The lost one gains the extraordinary ability to shrug off some amount of injury from each blow or attack: subtract 1 from the damage he takes each time he is dealt damage (damage reduction 1/-). At 6th level this rises to 2/-; at 9th level, to 3/-. This ability stacks with any DR the character may gain from other class abilities.", 3),
      flo("Resist Subdual (Ex)", "As a free action, the lost one can steel his body and mind, gaining total immunity to nonlethal damage for a number of rounds equal to his current Constitution modifier. This has no effect on nonlethal damage previously taken; it merely prevents him from taking additional nonlethal damage for the duration of the effect. Usable 1/day at 3rd level, 2/day at 6th level, and 3/day at 9th level, per Table 5.", 3),
      flo("Improved Grapple", "At 4th level the lost one gains the improved grapple ability: if he succeeds with an unarmed attack, he may immediately attempt to start a grapple as a free action.", 4),
      flo("Evasion", "At 4th level, the lost one gains evasion, as per the rogue ability of the same name.", 4),
      flo("Mighty Grapple", "At 7th level the lost one gains incredible prowess while grappling: he gains a bonus to all grapple checks equal to his class level.", 7),
      flo("Mental Fortress", "At 8th level the lost one may re-roll any failed mind-affecting Will save. He must accept the result of the second roll.", 8),
      flo("Improved Evasion", "At 10th level the lost one gains improved evasion, as per the rogue ability of the same name: he takes only half damage on a failed Reflex save and no damage on a successful save.", 10),
      flo("Improved Stunning Attack", "At 10th level the lost one is capable of incredibly powerful stunning attacks: he adds his Str modifier to the DC of his stunning attack effect.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "fervent-antagonist",
    name: "Fervent Antagonist",
    ruleset: "core",
    source: `${AN}, p. 40-43`,
    sourceUrl: HOHO_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Handle Animal", "Intimidate",
      "Knowledge (religion)", "Ride",
    ],
    prerequisites: [
      "Base attack bonus +7",
      "Skills: Diplomacy 5 ranks",
      "Skills: Handle Animal 5 ranks",
      "Skills: Intimidate 5 ranks",
      "Skills: Knowledge (religion) 5 ranks",
      "Skills: Ride 5 ranks",
      "Feats: Merciless Rage",
    ],
    features: [
      fant("Fervent Antagonist Proficiencies", "Barbarian-paladin prestige class — the fervent antagonist serves his deity as an agent of divine retribution, infused with divine authority rivaling other paladins but seasoned with savage religious fervor, and with no alignment restrictions of the usual paladin kind. He gains no new proficiency with weapons or armor. (The book prints the word for his patron as 'diety' in this entry and in Table 6; it is filed here under the standard spelling.)", undefined),
      fant("Patron Deity", "The fervent antagonist must choose a patron deity of his own alignment. At 1st level, he gains the granted power from one of his patron deity's domains. If the fervent antagonist changes alignment, he loses all class abilities until he receives an atonement.", 1),
      fant("Spellcasting", "The fervent antagonist casts spells as a paladin, gaining spells per day according to PHB Table 3-12. He may choose spells from any of his deity's domain spell lists. Spellcasting and bonus spells are based on Wisdom, and his caster level is equal to one-half his fervent antagonist class level. If he has paladin or ex-paladin levels, he may add these to his fervent antagonist class levels and determine his spellcasting ability on that basis.", 1),
      fant("Aura of Courage", "The fervent antagonist is immune to fear. Allies within 10 feet of him receive a +4 bonus to saving throws vs. fear, as the paladin ability of the same name.", 1),
      fant("Divine Grace", "The fervent antagonist adds his Charisma bonus (if positive) as a modifier to all saving throws.", 2),
      fant("Relentless Assault", "The fervent antagonist never suffers more than a -2 penalty to his AC for charging and/or raging. At 9th level (relentless assault, improved, per Table 6) he is nearly impossible to stop: if he is raging, he may declare a charge with as little as a 5 foot step. He must still move directly towards the enemy.", 2),
      fant("Rage", "The fervent antagonist can rage as the barbarian ability of the same name: 1/day at 2nd level, 2/day at 6th level, and 3/day at 10th level per Table 6. If he has the rage ability from another class, add his fervent antagonist rages per day to his total number of rages per day.", 2),
      fant("Special Mount", "At 3rd level, the fervent antagonist can call for a special mount (if he does not already have one). This ability is identical to the paladin ability of the same name, but he may choose from some additional mounts, depending on his alignment and background. (Neutral characters should use the non-neutral portion of their alignment; true neutral characters can choose from any of the options.) Lawful: horse, bull. Chaotic or good: wolf, stag. Evil: boar, lizard. These mounts enjoy the usual benefit of the paladin's mount, including increased HD, Intelligence, and size, if necessary, to properly serve as a mount.", 3),
      fant("Smite (Su)", "The fervent antagonist is sworn to defeat the enemies of his patron deity. He may smite opponents of a diametrically opposed alignment, as the paladin ability of the same name: 1/day at 4th level, 2/day at 7th level, and 3/day at 10th level per Table 6. He adds his Charisma modifier (if positive) to his attack roll and deals an extra 1 point of damage per class level. If he has paladin or ex-paladin levels, add them to his fervent antagonist class level and determine his smite ability on that basis. (True neutral characters smite opponents of the axis alignments: LG, CG, LE, and CE.)", 4),
      fant("Enrage Mount", "If the fervent antagonist rages while mounted on his special mount, his mount is enraged as well.", 5),
      fant("Improved Merciless Rage", "If the fervent antagonist is raging, he may perform a coup de grace as a free action when combined with a full attack.", 5),
      fant("Improved Rage", "At 8th level the fervent antagonist's bonuses for raging rise to +6 Str, +6 Con, +3 Will saves, and -2 AC. At 10th level, he is no longer fatigued after raging (Table 6 lists improved rage again at 10th level).", 8),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dire-stalker",
    name: "Dire Stalker",
    ruleset: "core",
    source: `${DI}, p. 44-47`,
    sourceUrl: HOHO_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
       "Climb", "Craft", "Handle Animal", "Heal", "Hide",
      "Intimidate", "Survival", "Jump", "Knowledge (nature)", "Listen",
      "Move Silently", "Ride", "Search", "Spot", "Swim", "Use Rope",
      
    ],
    prerequisites: [
      "Base attack bonus +6",
      "Skills: Climb 6 ranks",
      "Skills: Hide 6 ranks",
      "Skills: Intimidate 6 ranks",
      "Skills: Survival 6 ranks",
      "Skills: Listen 6 ranks",
      "Skills: Move Silently 6 ranks",
      "Skills: Spot 6 ranks",
      "Skills: Survival 6 ranks",
      "Feats: Run, Track",
      "Special: favored enemy (any humanoid)",
    ],
    features: [
      fdire("Dire Stalker Proficiencies", "Barbarian-ranger prestige class — guided by a feral totem spirit, the dire stalker pursues his enemies with blind fury. Proficient with all simple and martial weapons, with light and medium armor, and with shields.", undefined),
      fdire("Totem Focus", "At 1st level the dire stalker immediately gains a Totem Focus (see Chapter 2, Feats) and two bonus feats chosen from his Totem Feat List. He gains a third bonus feat chosen from this list at 3rd level (Table 7: bonus totem feat). The dire stalker loses access to any previous 'virtual feats' he may have had access to (such as a ranger's Two Weapon Fighting ability).", 1),
      fdire("Favored Enemies", "Add the dire stalker's class level to any ranger levels he may have and determine his favored enemy abilities on that basis (refer to PHB, Table 3-13).", 1),
      fdire("Stalk Enemy", "At 2nd level, the dire stalker may add his favored enemy bonus to the skills Hide and Move Silently.", 2),
      fdire("Fleet of Foot", "The dire stalker receives a +5 bonus to his Hide, Move Silently, and Survival checks when moving at full speed. (This bonus offsets the normal -5 penalty.)", 2),
      fdire("Bloodlust", "Beginning at 4th level, the dire stalker enters into a rage upon sight of any favored enemy. He may suppress this effect with a Will save (DC 20 + favored enemy bonus). If he suppresses his rage, he cannot rage again for 24 hours. This rage is otherwise identical to the barbarian ability, though it lasts as long as there is a favored enemy within sight. As soon as all favored enemies within sight are slain, the rage ends; the dire stalker is automatically fatigued for a duration equal to the duration of the rage. At 8th level (bloodlust, improved, per Table 7) the bonus from bloodlust improves to +6 Strength, +6 Constitution, +3 to Will saves, -2 AC.", 4),
      fdire("Master Huntsman", "If the prevailing conditions (snow, rain, attempts to hide the trail, etc.) increase the DC modifier to Track, the dire stalker may add a bonus equal to his class level to offset those modifiers. The total of his bonus can never exceed the total modifier to the track DC.", 5),
      fdire("Grim Feast (Su)", "The dire stalker may feast upon the heart of a favored enemy to gain power from its spirit in the form of a morale bonus to skills, saving throws, or even attributes. The enemy must be freshly slain by his own hand (subject to the GM's decision). Roll a d6, add the CR of the favored enemy, subtract the dire stalker's total character level, and consult the following table — Result / Effect: -4 or less, no effect; -3 to 0, +1 to skill checks; 1-2, +1 to saving throws; 3-4, +1 to attacks and damage; 5-6, +1 to INT, WIS, or CHA; 7-8, +1 to STR, DEX, or CON; 9-10, choose one result from this table; 11+, roll twice on this table and re-roll duplicates or further 11+ results. These benefits last for 24 hours. During this time, additional grim feasts have no further effect. At 10th level (grim feast, improved, per Table 7) the dire stalker receives twice the normal benefit from the grim feast (+2 morale bonus).", 6),
      fdire("Scent (Ex)", "At 7th level the dire stalker gains the scent ability.", 7),
      fdire("Sense Enemies (Su)", "At 10th level, if the dire stalker succeeds at an Survival check (DC 20), he can determine the general direction to the nearest favored enemy.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "coal-tongue-raver",
    name: "Coal-Tongue Raver",
    ruleset: "core",
    source: `${CO}, p. 48-51`,
    sourceUrl: HOHO_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ10, GOOD10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Escape Artist", "Handle Animal",
      "Hide", "Intimidate", "Survival", "Jump", "Listen",
      "Move Silently", "Ride", "Search", "Sense Motive", "Spot", "Swim",
      "Tumble", 
    ],
    prerequisites: [
      "Alignment: any non-lawful, non-good",
      "Base attack bonus +5",
      "Base Fortitude save +5",
      "Skills: Handle Animal 9 ranks",
      "Skills: Intimidate 9 ranks",
      "Skills: Survival 9 ranks",
      "Special: sneak attack +1d6 or better; must have suffered ability score loss (temporary or permanent) due to poison",
    ],
    features: [
      fcoal("Coal-Tongue Raver Proficiencies", "Barbarian-rogue prestige class — the coal-tongue raver subjects his body to countless poisons, reveling in the madness that they bring. Proficient with light armor and shields. (The entry as printed grants no weapon proficiencies.)", undefined),
      fcoal("Poison Resistance", "If the character fails a saving throw vs. poison, he suffers only half the normal ability score damage. This resistance has no effect on poisons that do not do ability score damage.", 1),
      fcoal("Sneak Attack", "At 1st level and every other level thereafter, the coal-tongue raver gains bonus sneak attack dice: +1d6 at 1st level, +2d6 at 3rd, +3d6 at 5th, +4d6 at 7th, and +5d6 at 9th per Table 8. These dice stack with any sneak attack dice the character receives from any other class.", 1),
      fcoal("Poison Rage", "If the coal-tongue raver suffers a poison attack that causes ability score damage, he immediately flies into a rage. This rage follows all of the normal rules for a barbarian rage but does not count against his limit of rages per day.", 2),
      fcoal("Evasion (Ex)", "At 2nd level, the coal-tongue raver gains evasion as the rogue ability of the same name. At 8th level he gains improved evasion (Table 8).", 2),
      fcoal("Poison Addiction", "By 3rd level the coal-tongue raver becomes addicted to the poisons that fuel his abilities. He must ingest or inject poison into his body at least once a day; many ravers keep small vipers, centipedes, or spiders as pets for this very purpose. (Typical poisons and their costs are listed in the DMG.) Each day that the character goes without poison, he loses 1d4 Wisdom from withdrawal. If he is reduced to 0 Wisdom, he enters a catatonic state full of nightmares; each day he may make a Fortitude save (DC 20 + coal-tongue raver class level). Success means that the character has purged his system of poisons: he immediately regains all lost Wisdom, but loses all 'Poison' class abilities. In any case, a single dose of poison administered as a 'fix' restores all lost Wisdom and class abilities.", 3),
      fcoal("Poison Blood (Ex)", "Any creature that bites or swallows the coal-tongue raver risks ingesting the poison in his veins. The creature must make a Fortitude save (DC 10 + coal-tongue raver class level) or suffer 1 point of Constitution damage (no secondary effect). Animals, vermin, and non-intelligent creatures thus aware of the raver's poison blood will not attempt to bite him again, and will ignore him in favor of other targets. The creature may still attack with claws or other weapons that do not risk ingesting the poison.", 4),
      fcoal("Slippery Mind (Ex)", "The coal-tongue raver's poison-fueled madness grants him the slippery mind ability (as per the rogue ability of the same name).", 6),
      fcoal("Poison Tongue (Ex)", "The coal-tongue raver's body becomes desperate to rid itself of excess poison, and it oozes its way out through his saliva. As a move action, he may lick a slashing or piercing weapon to apply a single dose of venom; he never risks poisoning himself with his own venom. The effects of this venom are as listed for his poison blood (Fortitude save DC 10 + class level or 1 point of Constitution damage). The poison loses its potency after one strike or one minute.", 7),
      fcoal("Poison Spittle (Ex)", "By 10th level the character has enough poison in his spittle to make a poison attack. He may make a ranged touch attack against any opponent within 5 feet (this does not provoke an attack of opportunity). The target must make a Reflex save (DC = raver's attack result) or be blinded for 1d4 rounds; in addition, a creature that fails its Reflex save must also make a Fortitude save against the venom (effects as listed for his poison blood). Creatures that are immune to critical hits and creatures without discernible eyes are immune to this attack.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "wyrd",
    name: "Wyrd",
    ruleset: "core",
    source: `${WY}, p. 52-55`,
    sourceUrl: HOHO_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Climb", "Concentration", "Craft", "Handle Animal", "Intimidate",
      "Survival", "Jump", "Knowledge (arcana)", "Listen", "Ride",
       "Spellcraft", "Swim", 
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Skills: Concentration 6 ranks",
      "Skills: Spellcraft 6 ranks",
      "Feats: Empower Spell, Enlarge Spell, Maximize Spell (any two)",
      "Special: rage; ability to cast 1st level arcane spells without preparation",
    ],
    features: [
      fwyrd("Wyrd Proficiencies", "Barbarian-sorcerer prestige class — the wyrd empathically channels the rage around him into more powerful spells. Proficient with all simple and martial weapons, with light and medium armor, and with shields.", undefined),
      fwyrd("Offset Spellcasting", "The wyrd continues to advance in spellcasting ability as a sorcerer, albeit at a slower rate; Table 9's Abilities Gained column names this ability only at 1st level and is blank thereafter, the advancement below being given in the text. At 1st level and every odd level thereafter, the wyrd gains an additional spellcaster level for purposes of spells known, according to PHB, Table 3-17. His caster level does not increase. At 2nd level and every even level thereafter, the wyrd gains an additional caster level for purposes of determining spells per day (according to PHB Table 3-16) and for all level dependent spell effects (range, duration, etc.). He does not gain any additional spells known. If the wyrd has arcane spellcaster levels from a previous class, they count as full caster levels, and he may include them to determine spells per day, spell effect, and spells known.", 1),
      fwyrd("Empathic Sensitivity", "The wyrd is susceptible to the empathic ripples caused by anger, violence, and rage. Each time the character senses empathic ripples from a violent event, he gains a rage token. He may expend these rage tokens to 'burn off' excess rage and increase the potency of his spells. The wyrd gains one rage token each time that: a) he is charged by an enemy; b) a rage effect is activated within 30 feet (including friend, foe, or himself); c) at the start of his action, there is a raging combatant within 5 feet. The wyrd may spend rage tokens to increase his caster level for the purposes of spell effect: for each rage token he spends, he adds 1 to his caster level. The wyrd may also spend rage tokens to power any metamagic feats he knows: he may spend a rage token instead of increasing the spell level (for example, to cast an Empowered spell, which normally uses up a slot two levels higher, he may instead spend two rage tokens and cast the spell at its normal level), and he may spend 1 additional rage token in order to cast a metamagicked spell with a normal casting time (instead of a full round). All rage tokens are lost at the end of the encounter. Drawbacks: first, the wyrd may never spend more rage tokens on a single spell than his Cha modifier. Second, at the start of his action, if the wyrd has more rage tokens than his current wyrd class level, he must roll on the following chart, adding 1 to the roll for every excess rage token he has — d6 roll / Result: up to 4, no effect; 5-6, dazed for 1 round; 7-8, confused for 1 round; 9-10, rage; 11-12, internal feedback; 13-14, external feedback; 15+, catastrophic feedback. A rage result means the wyrd enters a rage, as the barbarian ability of the same name; this does not count against his limit of rages/day (if any), but he cannot end this rage voluntarily. A feedback result does 1d6 magical force damage per excess rage token: internal feedback affects only the wyrd; external feedback is a 30 foot radius blast centered on the wyrd; in either case, the wyrd loses the excess rage tokens as they burn off. Catastrophic feedback does 1d6 damage per rage token (total, not merely excess tokens) to all creatures within 30 feet, and he loses all rage tokens as they burn off.", 1),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "hoodoo",
    name: "Hoodoo",
    ruleset: "core",
    source: `${HD}, p. 56-59`,
    sourceUrl: HOHO_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Climb", "Concentration", "Craft", "Diplomacy",
      "Handle Animal", "Heal", "Intimidate", "Survival", "Jump",
      "Knowledge (arcana)", "Listen", "Ride",  "Spellcraft", "Spot",
      "Swim", 
    ],
    prerequisites: [
      "Base Fortitude save +4",
      "Base Will save +4",
      "Skills: Knowledge (arcana) 8 ranks",
      "Skills: Scry 8 ranks",
      "Skills: Speak Language (Abyssal, Aquan, Auran, Celestial, Draconic, Ignan, Infernal or Terran — any one)",
      "Special: rage; ability to prepare 2nd level arcane spells",
    ],
    features: [
      fhoo("Hoodoo Proficiencies", "Barbarian-wizard prestige class — the hoodoo consorts with savage, otherworldly spirits to perform arcane miracles for her tribe. She gains no new proficiency with armor or weapons.", undefined),
      fhoo("Spellcasting", "The hoodoo casts spells as a wizard, though she does not keep a spellbook per se. Instead, she may keep a sacred pouch or phylactery full of small bones, feathers, and arcane fetishes; each of these small fetishes grants the ability to prepare one of her arcane spells. It is in all ways otherwise identical to a spellbook, though it may not be noticeable as such to the uninitiated: a Knowledge (arcana) check at DC 10 will reveal the item for what it is. The hoodoo continues to advance in spellcasting ability, albeit at a slower rate: add half the hoodoo's class level to any previous arcane spellcaster levels to determine spells per day, spells known, and spellcaster level. She does not gain any other ability a character of her previous class would have gained.", 1),
      fhoo("Bonus Language", "The hoodoo must consort with spirits and outsiders. At 1st level, she learns a bonus language chosen from the following list: Abyssal, Aquan, Auran, Celestial, Draconic, Ignan, Infernal or Terran. She learns an additional language at 4th, 7th, and 10th level.", 1),
      fhoo("Arcane Pact", "The hoodoo can channel stored spell energy into summoning spells that she hasn't prepared ahead of time. She can convert any prepared spell into a summon monster spell of the same level or lower. She does not need to have the requisite summon monster spell in her spellbook.", 1),
      fhoo("Enraged Summoning", "The hoodoo can expend one of her daily rages as she casts any summon monster spell. When the summoned creature arrives, it gains the benefits of the rage instead. The act of summoning and controlling the enraged creature leaves the hoodoo fatigued for the duration of the summon monster spell. If the hoodoo is fatigued, she cannot activate her own rage ability, though she may continue to summon enraged creatures. At 8th level (enraged summoning, improved, per Table 10) the hoodoo summons creatures with improved rage (+6 Str, +6 Con, +3 Will saves, and -2 AC). At 10th level (Table 10 again lists enraged summoning, improved) she is no longer fatigued by summoning enraged creatures.", 2),
      fhoo("Additional Rage", "At 2nd, 6th, and 10th level, the hoodoo may rage an additional time each day. She may use this rage herself or bestow it on her summoned creatures.", 2),
      fhoo("Arcane Sight", "At 3rd level the hoodoo learns to interpret the whisperings of her otherworldly contacts. She may cast augury once/day. At 5th level she may cast scry once/day. At 7th level she may cast divination once/day, and at 9th level she may cast contact other plane once/day. The hoodoo is particularly adept at these spells: when determining the effect of these spells, her caster level is equal to her character level.", 3),
      fhoo("Uncanny Dodge", "The hoodoo learns to heed the warnings of her otherworldly contacts and gains an almost precognitive sense. At 3rd level she gains the uncanny dodge ability. If the hoodoo already has this ability from another class, add her hoodoo class levels to her previous class levels and determine her uncanny dodge ability on that basis. At 6th level the hoodoo can no longer be flanked (Table 10 lists uncanny dodge again at 6th level).", 3),
      fhoo("Arcane Healing", "At 6th level the hoodoo gains a limited ability to heal wounds. As a standard action, she may convert a prepared spell into 1 hp of healing per spell level: for example, she can convert a prepared 3rd level spell to cure 3 hp of damage.", 6),
    ].map((x) => x as FeatureDefinition),
  },
];
