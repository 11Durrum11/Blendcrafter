import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Bastards and Bloodlines: A Guidebook to Half-Breeds
// (Green Ronin Publishing, ©2003, d20 System) —
// "Bloodline Prestige Classes," printed pp. 94-102,
// transcribed in full — progression tables included —
// from Shaun's own scanned copy (read visually;
// the scan is image-only), 2026-11-04. This is a
// 3.0-era book: class skill lists are transcribed with
// their printed 3.0 skill names (Alchemy, Animal
// Empathy, Innuendo, Intuit Direction, Pick Pocket is
// not a class skill here but appears in a feature,
// Scry, Wilderness Lore) rather than modernized to 3.5.
// Progression rows are transcribed exactly as printed
// in Tables 4-2 through 4-5 and cross-checked against
// the Appendix reprints of the same tables (p. 110):
// the Autarkic has all three saves on the good
// progression as printed, and the Changeling has all
// three saves on the poor progression as printed, so
// its goodSaves list is empty. The Changeling prestige
// class id is "changeling-bb" because "changeling" is
// already the Eberron race in the catalog. Summaries
// are short mechanical paraphrases in our own words;
// no book prose is reproduced.

const BB = "Bastards and Bloodlines";
const BB_PATH = "/A POC PC related/2.Alchemy & steampunk flavored material/Bastards And Bloodlines A Guidebook To Half Breeds.pdf";
const AUT = `${BB} — Autarkic`;
const BRS = `${BB} — Brood Sorcerer`;
const BRC = `${BB} — Brood Champion`;
const CHG = `${BB} — Changeling`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string, source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: BB_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fa = mk("autarkic", AUT);
const fs = mk("brood-sorcerer", BRS);
const fc = mk("brood-champion", BRC);
const fg = mk("changeling-bb", CHG);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];

export const BASTARDS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "autarkic",
    name: "Autarkic",
    ruleset: "core",
    source: `${AUT} (pp. 94-96)`,
    sourceUrl: BB_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ10, GOOD10, GOOD10, GOOD10),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Disable Device", "Escape Artist",
      "Handle Animal", "Heal", "Hide", "Intimidate", "Survival", "Jump",
      "Knowledge (arcana)", "Knowledge (nature)", "Listen", "Move Silently", "Open Lock",
      "Ride", "Search", "Sense Motive", "Spot", "Swim", "Tumble", "Use Rope",
      
    ],
    prerequisites: [
      "Race: Any half-breed",
      "Survival: 8 ranks",
      "Special: No fewer than 50 hit points",
    ],
    features: [
      fa("Autarkic Proficiencies", "Masters of self-reliance who strive toward one goal — survival — drawing on the abilities of multiple bloodlines to adapt to various dangers. Autarkics are proficient with all simple and martial weapons, with all armors, and with shields.", undefined),
      fa("Uncanny Dodge (Ex)", "At 1st level, retain Dexterity bonus to AC (if any) regardless of being caught flat-footed or struck by an invisible attacker (still lost if immobilized). At 3rd level, can no longer be flanked (a rogue at least 4 levels higher can still flank him). At 5th level, gain a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks by traps; at 7th level these bonuses rise to +2, and at 9th, they rise to +4 (table prints +4 against traps at 9th).", 1),
      fa("Survival Trait", "At 1st level, and at every other level thereafter (3rd, 5th, 7th, and 9th), choose a new survival trait from Damage Reduction, Energy Resistance, Heal Self, Immunity, and Regeneration; unless otherwise noted, the same survival trait can't be chosen more than once.", 1),
      fa("Damage Reduction (Ex)", "Survival trait option: gain damage reduction of (1/2 the autarkic's base Fortitude save)/—; the amount of damage absorbed improves along with the base Fortitude save.", 1),
      fa("Energy Resistance (Ex)", "Survival trait option: gain resistance 3 against one form of energy attack (acid, cold, electricity, fire, or sonic); may be selected multiple times, either increasing an existing energy resistance by 3 (including innate resistance) or gaining resistance 3 against a new form of attack.", 1),
      fa("Heal Self (Su)", "Survival trait option: cure himself of a number of hit points per day equal to his Charisma bonus (if any) times his level (as printed); this is a standard action, and damage can be healed in any increment, as long as he never exceeds his daily maximum.", 1),
      fa("Immunity (Ex)", "Survival trait option: choose one of the following effects: blindness, charm, deafness, death effects, fear, or sleep; the autarkic is immune to attacks based on the chosen effect, and once chosen the immunity may not be changed. May be selected multiple times, gaining a different immunity each time.", 1),
      fa("Regeneration (Su)", "Survival trait option that can be chosen only at 7th or 9th level: gain regeneration of 1 hit point/hour; the autarkic takes normal damage from energy attacks (acid, cold, electricity, fire, and sonic), can regrow lost limbs within a day, or reattach a severed limb immediately by holding it against the stump.", 7),
      fa("Evasion (Ex)", "At 2nd level, if exposed to any effect that normally allows a Reflex saving throw for half damage, take no damage with a successful saving throw; evasion can only be used if wearing light armor or no armor.", 2),
      fa("Will to Live (Ex)", "At 4th level, automatically stabilize when bleeding to death, gain a +3 bonus on all Fortitude saves against death effects (including death from massive damage and coup de grace attempts), and don't die until reaching a number of negative hit points equal to his Constitution score (if his Constitution score is less than 10, he dies at -10 hit points as normal).", 4),
      fa("Improved Evasion (Ex)", "At 6th level, works like evasion, except that while the autarkic still takes no damage on a successful Reflex save, he takes only half damage on a failed save.", 6),
      fa("Defensive Roll (Ex)", "At 8th level, roll with a potentially lethal blow to take less damage from it: once per day, when the autarkic would be reduced to 0 hit points or less by damage in combat (from a weapon or other blow, not a spell or special ability), he can attempt a Reflex saving throw (DC = damage dealt) and, if successful, takes only half damage from the blow. He must be aware of the attack and able to react to it — if he is denied his Dexterity bonus to AC, he can't roll — and his evasion ability does not apply to the defensive roll.", 8),
      fa("Spell Resistance (Su)", "At 10th level, gain spell resistance equal to 10 + autarkic level + the autarkic's Constitution modifier; this value adjusts along with any changes to the autarkic's Constitution score.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "brood-sorcerer",
    name: "Brood Sorcerer",
    ruleset: "core",
    source: `${BRS} (pp. 96-98)`,
    sourceUrl: BB_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Bluff", "Concentration", "Craft", "Diplomacy", "Heal", "Intimidate",
      "Knowledge (all skills, taken separately)", "Listen", "Profession", 
      "Speak Language", "Spellcraft",
    ],
    prerequisites: [
      "Race: Half-breed or monstrous humanoid",
      "Special: Able to cast 3rd-level arcane spells without preparation",
    ],
    features: [
      fs("Brood Sorcerer Proficiencies", "Crossbreeds (and some pureblood monsters) who blend their innate abilities with sorcery, using the arts of sorcery to augment and enhance their own innate abilities and to open a doorway to new spells and powers. Brood sorcerers gain no proficiency with any weapons, armor, or shields.", undefined),
      fs("Spellcasting", "+1 level of existing class at 2nd, 3rd, 5th, 6th, 8th, and 9th level, as printed in Table 4-3's Spellcasting column: when a new brood sorcerer level is gained at one of those levels, the character gains new spells known and spells per day as if she had also gained a level in an arcane spellcasting class she belonged to before adding the prestige class (adding the brood sorcerer level to that class's level to determine spells per day, spells known, and caster level); she does not, however, gain any other benefit a character of that class would have gained (metamagic or item creation feats, and so on).", 2),
      fs("Innate Metamagic (Su)", "At 1st level, gain new spells that are innately enhanced with metamagic feats and can thus be cast without requiring a full-round action; the brood sorcerer must already have the appropriate metamagic feat, and the enhanced spell occupies a slot at a level equal to its level + the additional levels required for the metamagic feat (printed example: a brood sorcerer with the Quicken Spell feat could select quickened magic missile as one of her 5th-level spells known).", 1),
      fs("Specialization", "At 1st level, a brood sorcerer can specialize in a school of magic as wizards can (the GM has final say over what school she may specialize in). A specialized brood sorcerer must choose three schools of magic to which she no longer gains access; spells of those schools she already knows are immediately lost and must be replaced with new spells from her allowed schools. She knows one additional spell per level, but half of all spells known at each level must be from her chosen school; where there are not enough spells of a given school to fill all the required spells known, innate metamagic spells of lower levels (see Innate Metamagic) can fill them. Once she has specialized she may not reverse that decision, even if she takes more levels of the sorcerer class.", 1),
      fs("Brood Power", "At 2nd level and every other level thereafter (4th, 6th, 8th, and 10th), gain a special power: select one of the brood powers (Brood Spell or Channel Spell), or take a bonus feat from the following list (if she meets its prerequisites): any metamagic feat, Empower Bloodright, Enlarge Bloodright, Focus Bloodright, Lost Tradition, Mystic Legacy, Prodigy, and Quicken Bloodright.", 2),
      fs("Brood Spell (Su)", "Brood power option: once per day, a brood sorcerer with innate spellcasting, spell-like abilities, gaze attacks, or breath weapons may exchange a spellcasting slot for one additional use of one such ability; she must sacrifice the highest-level spell casting slot she has left, and it must be at least 1st level. This power can be selected multiple times, each time adding one to the number of additional daily uses of an ability.", 2),
      fs("Channel Spell (Su)", "Brood power option: once per day, channel a spell through an innate gaze attack, breath weapon, or touch attack; this counts as a use of both the spell and the special ability, and replaces the special ability's normal effect. Only spells with an area defined in feet or that specify multiple targets, and that have a casting time of 1 action, may be channeled; channeling requires a standard action and does not provoke attacks of opportunity, the spell keeps its normal saving throw, and instead of using its normal area or targets, the channeled spell affects targets in the same way as the gaze attack, breath weapon, or touch attack.", 2),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "brood-champion",
    name: "Brood Champion",
    ruleset: "core",
    source: `${BRC} (pp. 98-100)`,
    sourceUrl: BB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ10, GOOD10, GOOD10, POOR10),
    classSkills: [
      "Handle Animal", "Balance", "Bluff", "Climb", "Hide", "Intimidate",
      "Survival", "Jump", "Knowledge (nature)", "Listen", "Move Silently",
      "Sense Motive", "Spot", "Swim", 
    ],
    prerequisites: [
      "Race: Half-breed or monstrous humanoid",
      "Base Attack Bonus: +5",
    ],
    features: [
      fc("Brood Champion Proficiencies", "Leaders of savage bands and monstrous humanoids, expert at using fang, claw, and naturally heightened senses, who train with their natural abilities the way more civilized fighters practice with traditional weapons. Brood champions are proficient with all simple and martial weapons; they gain no proficiency with any type of armor, or with shields.", undefined),
      fc("Brood Trait", "At 1st level and every other level thereafter (3rd, 5th, 7th, and 9th), gain a brood trait from Cunning, Fury, Improved Scent, Invulnerable Hide, Natural Weapon Focus, Natural Weapon Specialization, Retractable Claws, and Toughened Hide — new or enhanced natural abilities deriving from a more primitive ancestry; once a brood trait has been selected, it cannot be changed, and unless otherwise noted, the same brood trait can't be chosen more than once.", 1),
      fc("Cunning (Ex)", "Brood trait option: +2 racial bonus on Bluff, Intimidate, Survival, Sense Motive, and Survival checks.", 1),
      fc("Fury (Ex)", "Brood trait option: once per day, able to fly into a screaming fury, but only after taking damage in combat; the fury lasts 1 round per brood champion level, cannot be voluntarily ended (though it ends immediately if he is fully healed), grants a +4 bonus to Strength and Constitution and a -2 penalty to AC, and he suffers no penalties at the end of the fury. This trait may be selected multiple times, each time granting one additional daily use.", 1),
      fc("Improved Scent (Ex)", "Brood trait option: the brood champion must have the scent special ability to select this trait; gain a +4 racial bonus on all Search and Spot checks where smell might play a part.", 1),
      fc("Invulnerable Hide (Ex)", "Brood trait option that may only be selected by a brood champion who has taken the Toughened Hide brood trait three times: it grants damage reduction 2/—, and if the brood champion already has innate damage reduction (not as the result of a magic item or spell), its value increases by +2/—. This trait may be selected twice and its effects stack.", 1),
      fc("Natural Weapon Focus (Ex)", "Brood trait option: +1 racial bonus on attacks with all his natural weapons.", 1),
      fc("Natural Weapon Specialization (Ex)", "Brood trait option: +2 racial bonus on damage dealt by his natural weapons that benefit from either the Weapon Focus feat or the Natural Weapon Focus brood trait.", 1),
      fc("Retractable Claws (Ex)", "Brood trait option: conceal his claws (they sink into the flesh at the fingertip or knuckle, or lie flat against his hand), making them nearly impossible to detect — the claws cannot be spotted without a careful examination of the brood champion (Search check, DC 30). Having retracted claws reduces by half any penalties on Diplomacy, Gather Information, or Perform checks the brood champion might otherwise incur due to prejudice against his breed; claws cannot make attacks while retracted.", 1),
      fc("Toughened Hide (Ex)", "Brood trait option: gain a +2 natural armor bonus to AC; if the brood champion already has innate natural armor (not as the result of a magic item or spell), that natural armor bonus improves by +1 instead. This trait may be selected up to three times and its effects stack.", 1),
      fc("Bonus Feat", "At 2nd level and every other level thereafter (4th, 6th, 8th, and 10th), gain a bonus feat from the following list, in addition to the normal feat all characters get every 3 levels, and the brood champion does not have to meet the normal prerequisites for these bonus feats: Alertness, Bite, Blind-Fight, Claws, Endurance, Great Fortitude, Improved Initiative, Improved Natural Weapon, Large, Leadership, Lightning Reflexes, Multiattack, Natural Fighter, Run, Scent, and Track.", 2),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "changeling-bb",
    name: "Changeling",
    ruleset: "core",
    source: `${CHG} (pp. 100-102)`,
    sourceUrl: BB_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: [],
    progression: rows(TQ10, POOR10, POOR10, POOR10),
    classSkills: [
      "Craft (alchemy)", "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft",
      "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Forgery",
      "Gather Information", "Handle Animal", "Hide", 
      "Knowledge (all skills, taken individually)", "Move Silently", "Open Lock",
      "Perform", "Profession", "Speak Language", "Swim", "Tumble",
    ],
    prerequisites: [
      "Race: Half-breed or monstrous humanoid",
      "Disguise: 8 ranks",
      "Special: Innate ability to use alter self, polymorph, shapechange, or wild shape (this does not include innate size-changing ability such as that of a trixie)",
    ],
    features: [
      fg("Changeling Proficiencies", "Shapechangers — many of them half-breeds who never truly feel comfortable in their own forms — who overcome the innate discomfort of walking around in a strange body and delve into all that new shapes can offer, using their varied forms for attack, defense, movement, and even healing, and eschewing the use of spells or external weapons and armor. Changelings gain no proficiency with any weapons, armor, or shields. (This prestige class is unrelated to the Eberron changeling race.)", undefined),
      fg("Match Form (Su)", "At 1st level, a changeling using any spell or ability to change form may choose to match the appearance of a specific individual who has that form, making the Disguise check with a +10 circumstance bonus and not suffering any penalties for changing sex, race, age category, or class; this circumstance bonus stacks with any bonus granted by various forms of shapechanging (printed example: a changeling using alter self to mimic a specific human gains a total bonus of +20 on the Disguise check).", 1),
      fg("Formshift (Ex)", "At 2nd level, if the changeling already has the innate ability to polymorph or shapechange (such as a druid's wild shape class feature), he gains an additional two daily uses of that ability; if the changeling's formshifting is less powerful (such as half-doppelgangers' alter self ability), he gains the ability to polymorph once per day as the spell cast by a 9th-level sorcerer. At 5th level, the changeling either gains an additional two daily uses of an innate shapeshifting ability or can now polymorph twice per day as the spell cast by a 12th-level sorcerer. At 7th level, in addition to his other shapechanging abilities, the changeling can polymorph as a free action twice per day as the spell cast by a 15th-level sorcerer. (Table 4-5 lists Formshift (2/day) at 2nd, Formshift (4/day) at 5th, and Formshift (free polymorph) at 7th.)", 2),
      fg("Voiceshift (Ex)", "At 3rd level, a changeling who takes on another creature's form can speak to other creatures of that kind in its native tongue: if the creature has a listed language, the changeling can speak that language while in that form, and if it does not, he can naturally communicate with members of that species (this does not allow casting spells that require verbal components, and special abilities innate to the changeling that depend on voice cannot be used in the new form). Beginning at 8th level, the changeling retains the ability to speak with his natural voice regardless of what shape he takes, in any language he knows. (Table 4-5 lists Voiceshift (speak language of other form) at 3rd and Voiceshift (speak in any form) at 8th.)", 3),
      fg("Minor Change (Su)", "At 4th level, make minor changes to body shape or appearance as often as desired, without taking on an entirely new form — matching color to surrounding materials, lengthening fingers to find better climbing grips, growing a tail to improve balance, or even enlarging ears to catch a faint sound; when so changed, receive a +4 circumstance bonus on one of the following skills, as appropriate: Balance, Climb, Escape Artist, Hide, Jump, Listen, Move Silently, Sleight of Hand, Search, Spot, and Swim.", 4),
      fg("Major Change (Su)", "At 6th level, make major changes to body shape or appearance as often as desired, without taking on an entirely new form — growing webbed hands or feet, thickening skin into tough hide, sprouting claws, or developing cat's eyes; as a free action, gain one of the following extraordinary abilities when so changed: climb (speed 20 feet), darkvision, fly (speed 30 feet, average maneuverability), low-light vision, natural armor +6, or swim (speed 30 feet). Alternatively, gain a natural weapon attack instead of wielding a weapon — a single bite, claw, gore, or slam dealing 1d8 points of damage, or two natural attacks each dealing 1d4 points of damage. A changeling may only have one major change in effect at a time, though he may mix a major change with a minor change.", 6),
      fg("Many Changes (Su)", "At 9th level, the changeling can have four minor changes, two major changes, or one major and two minor changes in effect at the same time; as a free action, he can alter up to two minor changes or one major change, or switch all changes as a standard action.", 9),
      fg("Greater Shapechange (Su)", "At 10th level, whenever the changeling uses innate or class-based form-altering abilities or is the subject of polymorph or shapechange spells, he gains additional advantages: rather than changing into a typical physical specimen, he assumes a physique as if he had been born into the new form — instead of gaining average Strength, Dexterity, and Constitution scores, he adjusts his own scores by that form's racial modifier (the even number of points above or below 10 or 11). In addition, if the changeling assumes a form that is not a construct, dragon, elemental, outsider, or undead, whose total Hit Dice or Challenge Rating does not exceed his own Hit Dice, he gains all the abilities and powers of that form, including innate spellcasting, supernatural abilities, spell resistance, and damage reduction.", 10),
    ].map((x) => x as FeatureDefinition),
  },
];
