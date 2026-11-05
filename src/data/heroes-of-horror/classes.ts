import type { ClassDefinition, FeatureDefinition } from "@/engine/types";

// Heroes of Horror (WotC, D&D 3.5) base classes — the
// Archivist (pp. 82-83) and the Dread Necromancer
// (pp. 84-87), transcribed from Shaun's own copy
// (pdftotext of the full book). 3.5-native: no conversion.
// Progression arrays are levels 1-10 per this app's
// per-class level cap; class features beyond 10th level
// are recorded in the feature text where the book prints
// them. Summaries are short mechanical paraphrases in our
// own words; no book prose is reproduced.

const HOH = "Heroes of Horror";
const HOH_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Heroes Of Horror.pdf";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  levelsNeeded: number | undefined,
  source: string,
): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: HOH_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

const HALF_BAB = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD_SAVE = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR_SAVE = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

function rows(bab: number[], fort: number[], ref: number[], will: number[]) {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const ARC = `${HOH} — Archivist`;
const DN = `${HOH} — Dread Necromancer`;

export const HEROES_OF_HORROR_CLASSES: ClassDefinition[] = [
  {
    id: "archivist",
    name: "Archivist",
    ruleset: "core",
    source: `${ARC} (pp. 82-83)`,
    sourceUrl: HOH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF_BAB, GOOD_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Concentration", "Craft", "Decipher Script", "Diplomacy", "Gather Information",
      "Heal", "Knowledge (all skills, taken individually)", "Profession", "Search",
      "Spellcraft",
    ],
    features: [
      f("Archivist Basics", "Alignment: any (archivists of a lawful bent are quite common). Key abilities: Intelligence governs spellcasting and dark knowledge; Wisdom grants bonus spells; Constitution is prized for the rigors of the work. Weapon and armor proficiency: all simple weapons, light and medium armor, but not shields.", undefined, ARC),
      f("Spellcasting", "An archivist casts divine spells drawn primarily from the cleric spell list, prepared from a prayerbook. To learn, prepare, or cast a spell he needs an Intelligence score of at least 10 + the spell level; the save DC is 10 + spell level + his Int modifier; bonus spells per day come from a high Wisdom score. He prepares spells after a good night's sleep and 1 hour studying his prayerbook. Spells per day (0-level/1st/2nd/3rd/4th/5th): 1st: 3/2; 2nd: 4/3; 3rd: 4/3/2; 4th: 4/4/3; 5th: 4/4/3/2; 6th: 4/4/4/3; 7th: 4/5/4/3/2; 8th: 4/5/4/4/3; 9th: 4/5/5/4/3/2; 10th: 4/5/5/4/4/3. (The book's table continues to 20th level.)", 1, ARC),
      f("Prayerbook", "An archivist begins play with a prayerbook containing all 0-level cleric spells plus three 1st-level cleric spells of the player's choice, plus one additional 1st-level cleric spell per point of Intelligence bonus. At each new archivist level he gains two new cleric spells for his prayerbook, of any level he can cast. He can also add divine spells found on scrolls to his prayerbook (as a wizard adds spells to a spellbook), and in this fashion can learn and prepare noncleric divine spells; the two free spells per level must come from the cleric list. He can prepare read magic from memory.", 1, ARC),
      f("Dark Knowledge", "Three times per day, as a move action, an archivist draws on his knowledge of monsters to aid his allies against a creature (or all creatures of the same race) within 60 feet. It requires a Knowledge check (DC 15) of the type appropriate to the creature — Knowledge (arcana) for magical beasts, (dungeoneering) for aberrations, (religion) for undead, (the planes) for outsiders and elementals — and applies only to aberrations, elementals, magical beasts, outsiders, and undead. Effects last 1 minute. He gains one additional daily use for every three archivist levels (4/day at 3rd, 5/day at 6th, and so forth), and unlocks stronger effects as he levels: tactics (1st), puissance (5th), foe (8th), dread secret (11th), foreknowledge (14th). Each effect is usable once against any given creature.", 1, ARC),
      f("Dark Knowledge — Tactics", "On a successful check, allies gain a +1 bonus on attack rolls against the affected creature(s); +2 if the check succeeds by 10 or more, +3 if it succeeds by 20 or more.", 1, ARC),
      f("Scribe Scroll", "Archivists gain Scribe Scroll as a bonus feat.", 1, ARC),
      f("Lore Mastery", "Upon reaching 2nd level, an archivist gains a +2 bonus on all Decipher Script checks and on all checks of any one Knowledge skill of his choice. The choice cannot be changed once made. At 7th, 13th, and 17th level he chooses an additional Knowledge skill for the +2 bonus.", 2, ARC),
      f("Still Mind (Ex)", "Starting at 4th level, an archivist gains a +2 bonus on saving throws against spells and effects from the school of enchantment.", 4, ARC),
      f("Dark Knowledge — Puissance", "Starting at 5th level, allies within 60 feet gain a +1 bonus on saving throws against the affected creature's abilities; +2 if the check succeeds by 10 or more, +3 if by 20 or more.", 5, ARC),
      f("Dark Knowledge — Foe", "Starting at 8th level, on a successful check the archivist grants allies a bonus to weapon damage rolls against the target creature(s) equal to 1d6; 2d6 if the check succeeds by 10 or more, 3d6 if by 20 or more.", 8, ARC),
      f("Bonus Feat", "When an archivist reaches 10th level, and again at 20th level, he can select a free feat from the following list: Skill Focus (any Knowledge skill), Spell Focus, any metamagic feat, or any item creation feat.", 10, ARC),
      f("Dark Knowledge — Dread Secret", "From 11th level, by speaking a dread secret aloud, the archivist can dazzle a single target creature for 1 round; if the check succeeds by 10 or more the target is dazed for 1 round instead, and if by 20 or more it is stunned for 1 round (a target immune to stunning but not dazing can be dazed instead).", 11, ARC),
      f("Dark Knowledge — Foreknowledge", "Starting at 14th level, allies within 30 feet of the archivist gain a +1 insight bonus to Armor Class against attacks by the affected creature only; +2 if the check succeeds by 10 or more, +3 if by 20 or more.", 14, ARC),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dread-necromancer",
    name: "Dread Necromancer",
    ruleset: "core",
    source: `${DN} (pp. 84-87)`,
    sourceUrl: HOH_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF_BAB, POOR_SAVE, POOR_SAVE, GOOD_SAVE),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Decipher Script", "Disguise", "Hide",
      "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Profession",
      "Spellcraft",
    ],
    features: [
      f("Dread Necromancer Basics", "Alignment: no dread necromancer can have a good alignment. Key ability: Charisma determines how powerful a spell she can cast, spells per day, and save DCs; Dexterity and Constitution are also useful. Weapon and armor proficiency: all simple weapons and one martial weapon of her choice (chosen at her first dread necromancer level and unchangeable); light armor, but not shields. She can cast dread necromancer spells in light armor without arcane spell failure.", undefined, DN),
      f("Spellcasting", "A dread necromancer casts arcane spells spontaneously from the dread necromancer spell list, without preparing them. When she gains access to a new spell level, she automatically knows all the spells for that level on the class list. To cast a spell she needs a Charisma score of 10 + the spell level; save DC is 10 + spell level + her Cha modifier; bonus spells come from high Charisma. Spells per day (1st/2nd/3rd/4th/5th): 1st: 3; 2nd: 4; 3rd: 5; 4th: 6/3; 5th: 6/4; 6th: 6/5/3; 7th: 6/6/4; 8th: 6/6/5/3; 9th: 6/6/6/4; 10th: 6/6/6/5/3. (The book's table continues to 20th level; the class casts no 0-level spells.)", 1, DN),
      f("Dread Necromancer Spell List", "1st Level: bane, bestow wound*, cause fear, chill touch, detect magic, detect undead, doom, hide from undead, inflict light wounds, ray of enfeeblement, summon undead I*, undetectable alignment. 2nd Level: blindness/deafness, command undead, darkness, death knell, false life, gentle repose, ghoul touch, inflict moderate wounds, scare, spectral hand, summon swarm, summon undead II*. 3rd Level: crushing despair, death ward, halt undead, inflict serious wounds, ray of exhaustion, speak with dead, summon undead III*, vampiric touch. 4th Level: animate dead, bestow curse, contagion, death ward, dispel magic, enervation, Evard's black tentacles, fear, giant vermin, inflict critical wounds, phantasmal killer, poison, summon undead IV*. 5th Level: blight, cloudkill, fire in the blood*, greater dispel magic, insect plague, lesser planar binding, magic jar, mass inflict light wounds, nightmare, oath of blood*, slay living, summon undead V*, undeath to death, unhallow, waves of fatigue. 6th Level: acid fog, circle of death, create undead, eyebite, geas/quest, harm, mass inflict moderate wounds, planar binding, waves of exhaustion. 7th Level: control undead, destruction, finger of death, greater harm*, mass inflict serious wounds, song of discord, vile death*. 8th Level: create greater undead, horrid wilting, mass inflict critical wounds, symbol of death. 9th Level: energy drain, imprison soul*, mass harm*, plague of undead*, wail of the banshee. *New spell described in this book (see the Dread Magic section, pp. 125-133).", 1, DN),
      f("Charnel Touch (Su)", "At will, but no more than once per round, a dread necromancer can make a melee touch attack against a living foe that deals 1d8 points of damage, +1 per four class levels. This touch heals undead creatures, restoring 1 hit point per touch, +1 per four class levels. She can use the spectral hand spell to deliver this attack from a distance.", 1, DN),
      f("Rebuke Undead (Su)", "A dread necromancer can rebuke or command undead creatures by channeling negative energy through her body, as an evil cleric (see the cleric class feature, Player's Handbook p. 33).", 1, DN),
      f("Lich Body", "Starting at 2nd level, a dread necromancer gains damage reduction 2/bludgeoning and magic. This DR increases to 4 at 7th level, 6 at 11th level, and 8 at 15th level.", 2, DN),
      f("Negative Energy Burst (Su)", "Beginning at 3rd level, a dread necromancer can emit a burst of negative energy that harms living creatures within 5 feet, dealing 1d4 points of damage per class level (Will save DC 10 + 1/2 class level + Cha modifier for half). Undead within the burst are healed the same amount. Usable once per day at 3rd level, and one additional time per day for every five levels beyond 3rd (2/day at 8th, 3/day at 13th, 4/day at 18th).", 3, DN),
      f("Advanced Learning (Ex)", "At 4th level, and again at 8th, 12th, 16th, and 20th level, a dread necromancer can add a new spell to her list. The spell must be a cleric or wizard spell of the necromancy school, of a level no higher than the highest-level spell she already knows. If a spell is both a cleric and a wizard spell, she uses the lower of the two spell levels.", 4, DN),
      f("Mental Bastion", "Starting at 4th level, a dread necromancer gains a +2 bonus on saving throws made to resist sleep, stunning, paralysis, poison, or disease. This bonus increases to +4 at 14th level.", 4, DN),
      f("Fear Aura (Su)", "Beginning at 5th level, a dread necromancer radiates a 5-foot-radius fear aura as a free action. Enemies in the area must succeed on a Will save (DC 10 + 1/2 her class level + her Cha modifier) or become shaken. A creature who successfully saves cannot be affected by that dread necromancer's fear aura for 24 hours.", 5, DN),
      f("Scabrous Touch (Su)", "Starting at 6th level, once per day a dread necromancer can use her charnel touch to inflict disease on a creature she touches, as the contagion spell with no incubation period, unless the target makes a Fortitude save (DC 10 + 1/2 her class level + her Cha modifier). Activating this feature is a swift action; the effect lasts until she makes a successful charnel touch attack, and spectral hand can deliver it. Usable twice per day at 11th level and three times per day at 16th level.", 6, DN),
      f("Summon Familiar", "At 7th level or anytime thereafter, a dread necromancer can obtain a familiar, chosen from: imp (devil), quasit (demon), vargouille, or ghostly visage. The familiar gains the usual familiar benefits with two exceptions: its type does not change, and it does not gain the ability to speak with other creatures of its kind. The familiar can deliver touch spells such as charnel touch, scabrous touch, or enervating touch; the master must use a standard action to imbue the touch attack into her familiar.", 7, DN),
      f("Undead Mastery", "From 8th level, all undead creatures a dread necromancer creates gain a +4 enhancement bonus to Strength and Dexterity and 2 additional hit points per Hit Die. When she uses animate dead, she can control 4 + her Charisma bonus HD worth of undead per class level (rather than 4 HD per level); when she casts control undead, the spell targets up to (2 + her Cha bonus) HD/level of undead (rather than 2 HD/level).", 8, DN),
      f("Negative Energy Resistance", "Beginning at 9th level, a dread necromancer gains a +4 bonus on saving throws made to resist negative energy effects, including energy drain, some ability drain, and inflict spells.", 9, DN),
      f("Light Fortification", "Starting at 10th level, a dread necromancer gains 25% resistance to critical hits (as the light fortification armor special ability). At 17th level this fortification increases to 50%.", 10, DN),
      f("Enervating Touch (Su)", "From 12th level, a dread necromancer can bestow negative levels with her charnel touch attack: a total number of negative levels per day equal to one-half her class level, no more than two with a single touch. The save to remove them has a DC of 10 + 1/2 her class level + her Cha modifier. Activating is a swift action; the effect lasts until she makes a successful charnel touch attack, and spectral hand can deliver it. From 17th level, the daily total rises to equal her class level.", 12, DN),
      f("Craft Wondrous Item", "At 19th level, a dread necromancer gains Craft Wondrous Item as a bonus feat, which helps her prepare the phylactery required to become a lich.", 19, DN),
      f("Lich Transformation", "When a dread necromancer attains 20th level, she becomes a lich: her type changes to undead with all undead traits, she no longer has a Constitution score, all her existing Hit Dice become d12s and she must reroll her hit points. She need not pay experience points or gold to create her phylactery. A dread necromancer who is not humanoid does not gain this class feature.", 20, DN),
    ].map((x) => x as FeatureDefinition),
  },
];
