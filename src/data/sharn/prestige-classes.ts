import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Sharn: City of Towers (Eberron, WotC) prestige classes,
// printed pp. 162-167, transcribed in full — progression
// tables included — from Shaun's own scanned copy (read
// visually; the scan is image-only), 2026-11-04. The book
// prints exactly three prestige classes: the Cannith wand
// adept (3 levels), the Citadel elite (5 levels), and the
// Sharn skymage (5 levels). The "Other Prestige Classes
// for Sharn" list (p. 167) is a bibliography of classes
// from other supplements, not new records, and the Urban
// Adept sidebar (p. 167) is a variant spell list for the
// DMG adept, not a new class; neither is built here.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const SHARN = "Sharn: City of Towers";
const SHARN_PATH = "/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Sharn - City of Towers.pdf";
const CWA = `${SHARN} — Cannith Wand Adept`;
const CE = `${SHARN} — Citadel Elite`;
const SS = `${SHARN} — Sharn Skymage`;

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
      sourceUrl: SHARN_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fc = mk(CWA);
const fe = mk(CE);
const fs = mk(SS);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const POOR3 = [0, 0, 1];
const POOR5 = [0, 0, 1, 1, 1];
const GOOD3 = [2, 3, 3];
const GOOD5 = [2, 3, 3, 4, 4];

export const SHARN_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cannith-wand-adept",
    name: "Cannith Wand Adept",
    ruleset: "eberron",
    source: `${CWA} (pp. 162-163)`,
    sourceUrl: SHARN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows([0, 1, 2], POOR3, POOR3, GOOD3),
    classSkills: [
      "Appraise", "Concentration", "Craft", "Disable Device",
      "Knowledge (arcana)", "Profession", "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Skills: Spellcraft 6 ranks",
      "Skills: Use Magic Device 8 ranks",
      "Feats: Craft Wand, Wand Mastery, Favored in House (Cannith) or Least Dragonmark (Mark of Making)",
    ],
    features: [
      fc("Wand Adept Proficiencies", "A House Cannith artificer (or other spellcaster) who masters wands utterly — identifying their spells, drawing and firing two at once, and siphoning their charges to alter fate. Cannith wand adepts gain no proficiency with any weapon or armor.", undefined),
      fc("Identify Wand (Ex)", "Identify the spell stored in a wand by handling and examining the wand for 1 minute and making a successful Spellcraft check (DC 30 + the level of the stored spell). No retry is allowed on this check.", 1),
      fc("Wand Focus (Ex)", "Add your class level to the saving throw DC and caster level of any wand you use; this benefit stacks with that of the Wand Mastery feat. In addition, you gain a +1 bonus on attack rolls made when casting any spell from a wand, whether the spell is a ray, a touch spell, or a spell that requires a normal attack roll; this bonus stacks with the benefit of Weapon Focus (ray) and similar feats.", 1),
      fc("Wand Quick Draw (Ex)", "At 2nd level, produce a wand stored at your belt or in a bandolier as a free action, as if you were drawing a weapon using the Quick Draw feat.", 2),
      fc("Dual Wand Use (Su)", "At 2nd level, activate two wands nearly simultaneously as a full-round action; you must hold a wand in each hand to activate both wands. Activating two wands in this way consumes 1d4 charges from each wand rather than just 1 charge. If using this ability would require more charges than the wand has remaining, the wand fails to activate and loses all of its remaining charges.", 2),
      fc("Siphon Charge (Su)", "At 3rd level, use charges from a wand in your hand much as if they were a single action point, to improve a single d20 roll used to make an attack, a skill check, an ability check, a level check, or a saving throw. You must make a Use Magic Device check (DC 25) to activate the wand in this way, which you can do as a free action once per round. The wand must have at least 6 charges. With a successful check, you drain 1d6 charges from the wand; if the wand holds 1st-level spells, you add 1d6 to your d20 roll, just as if you had spent an action point; wands that hold higher-level spells roll a number of dice equal to the spell level contained in the wand and add the highest result to the d20 roll, and if the wand contains 0-level spells, you roll 1d4 instead. You cannot use this ability to replicate any other use of an action point.", 3),
      fc("Improved Dragonmark", "At 3rd level, gain Least Dragonmark (Mark of Making) as a bonus feat. If you already have one or more dragonmarks, you can use your least powerful dragonmark one additional time per day.", 3),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "citadel-elite",
    name: "Citadel Elite",
    ruleset: "eberron",
    source: `${CE} (pp. 163-165)`,
    sourceUrl: SHARN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows([1, 2, 3, 4, 5], POOR5, POOR5, GOOD5),
    classSkills: [
      "Bluff", "Decipher Script", "Diplomacy", "Gather Information",
      "Knowledge (local)", "Knowledge (nobility and royalty)", "Listen",
      "Search", "Sense Motive", "Spot",
    ],
    prerequisites: [
      "Region of Origin: Breland",
      "Alignment: Any lawful",
      "Base attack bonus +7",
      "Skills: Diplomacy 3 ranks",
      "Skills: Gather Information 3 ranks",
    ],
    features: [
      fe("Citadel Elite Proficiencies", "The best of the Crown's operatives — part spy, part inquisitive, part soldier, serving as the eyes, ears, and sword of the king of Breland. Citadel elites are proficient with all simple and martial weapons, and with all armor and shields.", undefined),
      fe("Citadel Training", "The Citadel Academy is one of the best training facilities in all of Khorvaire: gain a +2 insight bonus at 1st level on all Diplomacy, Gather Information, Search, and Sense Motive checks.", 1),
      fe("Additional Action Points", "Your maximum action points per level increase by 1.", 1),
      fe("Combat Sense (Ex)", "Starting at 2nd level, gain an insight bonus to AC equal to your class level (+2 at 2nd level, +3 at 3rd level, and so on). Beginning at 4th level, apply this same intuitive sense to striking opponents in combat as well as avoiding blows: you do not gain a bonus on your attack roll, but you can ignore the target's Dexterity and dodge bonuses to AC, to a maximum of your class level in total bonuses negated.", 2),
      fe("Bonus Feats", "At 2nd level, and again at 4th level, gain a bonus feat of your choice. At either or both levels, you can choose to increase your effective spellcasting ability in another spellcasting class you possess instead of taking a bonus feat.", 2),
      fe("Diplomatic Protection", "At 3rd level, receive a signet (a ring or a brooch) from the King of Breland denoting your favored connection to Crown and Nation. In Breland this protection is absolute (though violating the laws of the land can lead to trouble). In the neighboring lands of Aundair, Thrane, Karrnath, and Zilargo, treaties and long-established agreements protect agents of the Citadel who do not push their luck; in other realms, a Citadel elite's diplomatic protection is meaningless.", 3),
      fe("Royal Contact", "At 3rd level, you have a contact close to the crown who provides information, assistance, and resources on an infrequent basis in exchange for the completion of missions and assignments that personally benefit the Breliish king. As a general rule, this contact can perform the same function as a Gather Information check, a bardic knowledge check, any Knowledge skill check, a Profession skill check (to accomplish a specific task, not simply to earn money), or sufficient Craft skill checks to make or repair a single item; other functions are possible at the DM's discretion. You can call upon this royal contact no more than once per adventure.", 3),
      fe("Disciplined Mind (Ex)", "At 5th level, gain complete immunity to fear effects. You also add your Wisdom bonus (if any) to all Fortitude saving throws, in addition to your Constitution modifier.", 5),
      fe("Focused Smite (Su)", "Once per day, beginning at 5th level, attempt a focused smite with one normal melee attack: add your Wisdom bonus (if any) to your attack roll and deal 1 extra point of damage per character level. You must declare the smite before making the attack roll.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "sharn-skymage",
    name: "Sharn Skymage",
    ruleset: "eberron",
    source: `${SS} (pp. 165-167)`,
    sourceUrl: SHARN_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows([0, 1, 1, 2, 2], POOR5, POOR5, GOOD5),
    classSkills: [
      "Balance", "Concentration", "Craft", "Jump",
      "Knowledge (arcana)", "Knowledge (the planes)", "Profession",
      "Ride", "Spellcraft", "Tumble",
    ],
    prerequisites: [
      "Skills: Knowledge (the planes) 4 ranks",
      "Skills: Spellcraft 8 ranks",
      "Feats: Any metamagic feat",
      "Special: Flight — the character must have the ability to fly, either by casting a spell (such as fly) or as a natural ability; using a magic item that grants flight does not meet this requirement, while the ability to change shape into a form with a fly speed does",
    ],
    features: [
      fs("Skymage Proficiencies", "A spellcaster who studies Sharn's manifest zone linked to Syrania, the Azure Sky, to increase her speed and maneuverability in flight, apply metamagic effects to her flying-related spells, and cast other spells more easily while flying. Sharn skymages gain no proficiency with any weapon or armor.", undefined),
      fs("Natural Flyer (Ex)", "You are considered to have a fly speed for purposes of prerequisites for feats and prestige classes (for example, you could take the Wingover feat, which has the prerequisite of a fly speed).", 1),
      fs("Improved Flight (Ex)", "Add your class level to your caster level when you cast any spell that grants flight. Spells that fall into this category are air walk, alter self*, baleful polymorph*, feather fall, fly, gaseous form, jump, levitate, overland flight, polymorph*, polymorph any object*, reverse gravity, shapechange*, and wind walk (spells marked with an asterisk apply only when the form assumed has wings).", 1),
      fs("Spells Per Day", "At 2nd level, and again at 4th level, gain new spells per day as if you had also gained a level in whatever spellcasting class you belonged to before you added the prestige class (no other benefits of that class). If you had more than one spellcasting class, decide to which class to add each such level.", 2),
      fs("Flyby Attack (Ex)", "At 2nd level, gain Flyby Attack (described in the Monster Manual) as a bonus feat.", 2),
      fs("Extend Flight (Su)", "Whenever a Sharn skymage of 2nd level or higher casts a spell that grants flight, the spell's duration is doubled, as if the skymage had applied the Extend Spell feat to the spell.", 2),
      fs("Improved Maneuverability (Ex)", "When a 3rd-level Sharn skymage gains or grants the ability to fly by any means (including using a magic item), his (or the spell's target's) maneuverability is one step better than it would normally be.", 3),
      fs("Tenacious Flight (Su)", "When a Sharn skymage of 3rd level or higher casts a spell that grants flight, the DC for another spellcaster to dispel that spell using dispel magic is 15 + the skymage's caster level.", 3),
      fs("Quicken Flight (Su)", "A Sharn skymage of 4th level or higher can cast a spell that grants flight as a free action, as if the skymage had applied the Quicken Spell feat to the spell. However, this ability functions only if the spell is targeted on the skymage himself.", 4),
      fs("Fast Flight (Ex)", "At 5th level, when a Sharn skymage gains or grants the ability to fly by any means (including using a magic item), his (or the spell's target's) fly speed increases by 10 feet.", 5),
      fs("Reflexive Flight (Su)", "A 5th-level Sharn skymage can cast a spell that grants flight to himself as a free action, even when it is not his turn, if he is falling. The skymage cannot use this reflexive ability in other situations, only when he is falling.", 5),
    ].map((x) => x as FeatureDefinition),
  },
];
