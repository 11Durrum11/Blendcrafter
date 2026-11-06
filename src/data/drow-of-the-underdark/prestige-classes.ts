import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Drow of the Underdark (WotC, D&D 3.5) Chapter 3
// prestige classes, transcribed in full — progression
// tables included — from Shaun's own copy:
// Arachnomancer (pp. 65-66, Table 3-2), Cavestalker
// (pp. 68-70, Table 3-3), Demonbinder (pp. 72-74,
// Table 3-4), Dread Fang of Lolth (pp. 76-77,
// Table 3-5), Eye of Lolth (pp. 80-81, Table 3-6),
// Insidious Corruptor (pp. 83-85, Table 3-7), and
// Kinslayer (pp. 87-88, Table 3-8). 3.5-native: no
// conversion. Tables 3-3, 3-4, 3-6, 3-7, and 3-8 read
// cleanly in the text layer; Tables 3-2 and 3-5 had
// interleaved save columns in the text layer and were
// verified cell for cell against rendered pages.
// Spellcasting-advancement columns are carried in
// the relevant feature descriptions, following the
// Cityscape/Planar Handbook precedent. Summaries are
// short mechanical paraphrases in our own words; no
// book prose is reproduced.

const DOTU = "Drow of the Underdark";
const DOTU_PATH = "library-staging/books/drow-of-the-underdark.pdf";
const CH3 = `${DOTU} — Chapter 3: Prestige Classes`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source: DOTU,
      sourceUrl: DOTU_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const arach = mk("arachnomancer");
const cave = mk("cavestalker");
const demon = mk("demonbinder");
const fang = mk("dread-fang-of-lolth");
const eye = mk("eye-of-lolth");
const corr = mk("insidious-corruptor");
const kin = mk("kinslayer");

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ8 = [0, 1, 2, 3, 3, 4, 5, 6];
const GOOD8 = [2, 3, 3, 4, 4, 5, 5, 6];
const POOR8 = [0, 0, 1, 1, 1, 2, 2, 2];

export const DOTU_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arachnomancer",
    name: "Arachnomancer",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ8, POOR8, GOOD8, POOR8),
    classSkills: [
      "Climb", "Concentration", "Craft", "Handle Animal", "Hide", "Jump", "Knowledge (dungeoneering)",
      "Knowledge (nature)", "Knowledge (religion)", "Move Silently", "Spellcraft", "Spot", "Survival",
    ],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Climb 4 ranks, Knowledge (nature) 4 ranks, Knowledge (religion) 8 ranks",
      "Feat: Verminfriend",
      "Spells: Ability to cast spider climb, summon swarm, or web as an arcane spell",
    ],
    features: [
      arach("Spellcasting", "At 1st, 3rd, 4th, 6th, and 7th level, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in a spellcasting class to which you belonged before adding the prestige class level. You do not gain any other benefit a character of that class would have gained. If you had more than one arcane spellcasting class before becoming an arachnomancer, you must decide to which class to add each level for the purpose of determining spells per day, caster level, and spells known.", 1),
      arach("Poison Save Bonus", "You gain a bonus on saving throws against poison equal to your class level.", 1),
      arach("Handle Spiders", "You gain a +5 bonus on skill checks to use the Handle Animal skill with spiders.", 1),
      arach("Spider Domain", "You gain access to the Spider domain and the granted power associated with the domain (rebuke spiders as an evil cleric rebukes undead, a number of times per day equal to 3 + your Cha modifier). If you already have access to one or more domains, you can now choose spells from this domain as your daily domain spells. If you do not already have a domain, each day you can prepare one domain spell for each level you can cast, from 1st on up.", 1),
      arach("Spider Shape", "At 2nd level, you can change into a Small, Medium, or Large monstrous spider (either hunting or web-spinning) and back again three times per day. At 5th level, you can also take the form of a Tiny or Huge monstrous spider, and at 8th level, you can take the form of a Gargantuan monstrous spider. The effect lasts for 1 hour per arachnomancer level. This ability functions as wild shape, so you can select and use the Natural Spell feat.", 2),
      arach("Tremorsense", "Starting at 3rd level, you can detect and pinpoint any creature or object within 20 feet. At 6th level, your tremorsense extends to 60 feet. You can use this ability five times per day. Activating this ability is a swift action, and it lasts for a number of rounds equal to your arachnomancer class level.", 3),
      arach("Webwalking", "Starting at 4th level, you can ignore webs (magical or nonmagical) as if you were under the effect of a freedom of movement spell. You can climb webs at your normal land speed without needing to make Climb checks and walk along webs without needing to make Balance checks.", 4),
      arach("Climb Speed", "At 7th level, you gain a climb speed equal to your normal land speed. In addition, you gain a +8 bonus on Climb checks and you can always choose to take 10 on these checks, even if rushed or threatened.", 7),
    ],
    source: `${CH3} (pp. 65-66)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "cavestalker",
    name: "Cavestalker",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL10, GOOD10, GOOD10, POOR10),
    classSkills: [
      "Balance", "Climb", "Heal", "Hide", "Jump", "Knowledge (dungeoneering)", "Knowledge (geography)",
      "Knowledge (Underdark local)", "Listen", "Move Silently", "Profession", "Search", "Sense Motive",
      "Spot", "Swim", "Survival", "Use Rope",
    ],
    prerequisites: [
      "Skills: Knowledge (dungeoneering) 4 ranks, Survival 8 ranks",
      "Feat: Track",
      "Base Attack Bonus: +2",
      "Special: The candidate must have natural darkvision to allow successful navigation of Underdark tunnels",
    ],
    features: [
      cave("Advanced Spelunker", "You gain a +2 circumstance bonus on Balance, Climb, Escape Artist, and Jump checks in natural subterranean surroundings.", 1),
      cave("Underdark Affinity", "At 2nd level, your adaptation to the Underdark allows you to use your nature-themed class abilities in natural subterranean surroundings as well, including the druid and ranger abilities of camouflage, hide in plain sight, trackless step, and woodland stride. If you already have wild empathy, you can now use it to affect vermin. If you have the wild shape ability, add vermin to the types of creatures you can become (subject to all the size and frequency limitations of that ability). If you do not already have these underlying abilities, Underdark affinity does not grant them to you; it only augments those you already have.", 2),
      cave("Hide of Stone", "Your skin hardens and becomes flinty, granting you a natural armor bonus in addition to a circumstance bonus on Hide checks when in natural subterranean surroundings: +1 at 2nd level, increasing at 6th level (+2) and again at 10th level (+3), per Table 3-3. The feature text does not separately quantify the Hide circumstance bonus beyond the table's +1/+2/+3 steps.", 2),
      cave("Lesser Cavesense", "At 3rd level, you gain darkvision out to 120 feet; if you already have darkvision out to 120 feet, your darkvision extends an additional 60 feet. You also gain a +4 competence bonus on Listen checks made in subterranean surroundings.", 3),
      cave("Exotic Combat Style", "At 4th level, you gain mastery of a specific exotic combat style, either the spiked chain style or the hand crossbow style. If you are not a ranger or have not already selected a ranger combat style, choose one of these two styles; you gain proficiency in that exotic weapon if you do not already have it. If you already have selected two-weapon combat as a ranger combat style, the exotic combat style provides you with the Exotic Weapon Proficiency (spiked chain) feat and permits the use of a spiked chain as a one-handed weapon. If you already have selected archery as a ranger combat style, it provides you with the Exotic Weapon Proficiency (hand crossbow) feat and grants you the Rapid Reload feat, even if you do not meet its prerequisites. If you acquire a ranger combat style afterward, the two styles must correspond: two-weapon combat after the spiked chain style, or archery after the hand crossbow style. The benefits apply only when you wear light or no armor.", 4),
      cave("Expert Spelunker", "Upon reaching 5th level, you retain your Dexterity bonus even when climbing or when in a cramped space. Furthermore, you negotiate cramped spaces better, lowering Escape Artist DCs, move penalties, and attack penalties by one category (see Table 6-1: Cramped Spaces, p. 159).", 5),
      cave("Gaseous Form", "At 6th level, you gain the ability to traverse the Underdark by assuming gaseous form once per day (caster level 12th).", 6),
      cave("Improved Exotic Combat Style", "At 7th level, your aptitude for your chosen exotic combat style increases. If you do not already have a combat style from the ranger class, the improved style grants you one of those ranger combat styles — archery if you have the hand crossbow style, two-weapon combat if you have the spiked chain style. Selecting archery treats you as having the Rapid Shot feat without its prerequisites; selecting two-weapon combat treats you as having the Two-Weapon Fighting feat without its prerequisites. If you already have the ranger two-weapon combat style and the spiked chain exotic combat style, you can treat a spiked chain as one size category smaller for the purpose of use in a cramped space. If you already have the ranger archery style and the hand crossbow exotic combat style, you are treated as having the Manyshot feat without its prerequisites, usable in conjunction with a hand crossbow. Benefits apply only in light or no armor.", 7),
      cave("Greater Cavesense", "When you reach 8th level, your mystical connection to the Underdark increases, granting you tremorsense out to 30 feet.", 8),
      cave("Void in Space", "When you reach 9th level, you warp the sounds, scents, and vibrations you give off, making you invisible to creatures that rely on senses other than sight: you are effectively undetectable to blindsense, blindsight, and tremorsense. You still make noises and vibrations (though a successful Move Silently check can mask the sounds), but creatures that cannot see are incapable of determining your true location and believe that you are 30 feet in a random direction from where you are actually located. In addition, this ability nullifies the effect of the Blind-Fight feat against you.", 9),
      cave("Master Spelunker", "By 10th level, your affinity for the terrain of the Underdark lets you use spider climb (as the spell) on any natural stone surface at will. In addition, you can use meld into stone (as the spell) with any surface of unworked stone three times per day.", 10),
    ],
    source: `${CH3} (pp. 68-70)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "demonbinder",
    name: "Demonbinder",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Disguise", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)",
      "Knowledge (religion)", "Sense Motive", "Spellcraft", "Use Magic Device",
    ],
    prerequisites: [
      "Race: Drow",
      "Alignment: Chaotic evil",
      "Skills: Bluff 4 ranks, Knowledge (the planes) 8 ranks, Sense Motive 4 ranks",
      "Language: Abyssal",
      "Invocations: Baleful utterance plus any two others",
    ],
    features: [
      demon("Invocations Known", "At each level above 1st, you gain new invocations as if you had also gained a level in the warlock class. You do not gain any other benefits a warlock would have otherwise gained.", 2),
      demon("Damnation Points", "You gain a number of damnation points equal to your Charisma modifier plus your class level. You use damnation points to activate your demonbind abilities. You cannot spend damnation points when in the area of a consecrate, hallow, or magic circle against evil spell. You regain all spent damnation points after 5 minutes of rest.", 1),
      demon("Demonbind", "Once per day per class level, you can spend damnation points to invoke the essence of a demon and bind it to your soul (full-round action; lasts 10 rounds). Invoking a second demonbind replaces the active one, and temporary hit points granted by a demonbind vanish when it ends or is replaced. While under a demonbind, you gain telepathy out to 100 feet and the evil subtype if you don't have it already. If you are targeted by a banishment or dismissal spell, you instantly lose your demonbind; entering an area protected by hallow or consecrate suppresses the demonbind while you remain there. Each demonbind is the equivalent of a spell whose level equals its damnation point cost. Optional extra benefits within a demonbind cost extra points, last until the start of your next turn or until the demonbind ends, and allow saves at DC 10 + class level + Cha modifier. The binds: Dretch (1 point): 5 temporary hit points; resistance to acid 5, cold 5, and fire 5. Babau (2 points): 10 temporary hit points and sneak attack +1d6; spend 1 point as a swift action to lace your eldritch blast with caustic slime for 5 extra points of acid damage. Succubus (3 points): 15 temporary hit points and the benefits of tongues; spend 1 point as a swift action for a +5 competence bonus on Bluff and Diplomacy checks. Yochlol (4 points): 20 temporary hit points and a 25% chance to ignore the extra damage from a critical hit or sneak attack; spend 1 point as a swift action to use gaseous form on yourself. Bebilith (4 points): 20 temporary hit points and the scent ability; spend 1 point as a swift action to gain a climb speed equal to your land speed. Vrock (5 points): 25 temporary hit points; spend 1 point as a swift action to augment your eldritch blast with screeching sonic energy — a struck target takes an additional 10 points of sonic damage and is deafened for 5 rounds (Fort negates deafness). Glabrezu (6 points): 30 temporary hit points and a +5 competence bonus on Bluff checks; spend 1 point as a swift action to gain the benefit of a true seeing spell. Nalfeshnee (7 points): 35 temporary hit points and resistance to acid 5, cold 5, and fire 5; spend 1 point as a swift action to lace your eldritch blast with a nalfeshnee's smite — nonevil targets with fewer HD than your character level who are struck are dazed for 1 round (Will negates). Marilith (8 points): 40 temporary hit points, and two extra sets of arms grow from your body (your original arms are primary; the new limbs are secondary and attacks with them are treated as off-hand attacks); spend 1 point as a swift action to use one of the new limbs to fire an eldritch blast at a -5 penalty on the attack roll, with no essence, shape, or other modifications applied. Balor (9 points): 45 temporary hit points and a fly speed equal to your land speed (good maneuverability); spend 1 point as a swift action to make a melee touch attack that deals fire damage equal to your eldritch blast damage.", 1),
      demon("Damage Reduction", "Starting at 2nd level, you gain damage reduction 2/good. At 6th level, your damage reduction improves to 4/good, and at 10th level to 6/good.", 2),
      demon("Resistance to Electricity", "Beginning at 3rd level, you gain resistance to electricity 5. At 5th level, this resistance increases to 10. This resistance stacks with the energy resistance class feature gained by the warlock.", 3),
      demon("Immunity to Poison", "At 7th level, you gain immunity to all types of poison, even magical poison.", 7),
      demon("Immunity to Electricity", "At 9th level, your resistance to electricity is replaced by immunity to electricity.", 9),
    ],
    source: `${CH3} (pp. 72-74)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "dread-fang-of-lolth",
    name: "Dread Fang of Lolth",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Balance", "Climb", "Escape Artist", "Hide", "Intimidate", "Jump", "Listen", "Move Silently",
      "Spot", "Tumble",
    ],
    prerequisites: [
      "Alignment: Lawful evil",
      "Race: Drow",
      "Base Attack Bonus: +5",
      "Skills: Hide 4 ranks, Listen 2 ranks, Move Silently 4 ranks, Spot 2 ranks",
      "Special: Evasion",
      "Special: Sneak attack +2d6",
    ],
    features: [
      fang("Lolth's Will", "Your racial bonus on Will saves against spells and spell-like abilities increases to +4.", 1),
      fang("Lolth's Whispers", "You gain a +2 insight bonus on damage rolls. As a swift action, you can give up this bonus and bestow it on an ally within 30 feet that you can clearly see; the ally's bonus lasts for 1 round.", 1),
      fang("Sudden Strike", "You deal extra damage at any time when the target would be denied its Dexterity bonus, as the ninja's sudden strike class feature; it applies to ranged attacks only if the target is within 30 feet, can't deliver nonlethal damage, and stacks with sneak attack whenever both would apply. The extra damage is +1d6 at 1st level, increasing by 1d6 at each odd-numbered level beyond 1st (+2d6 at 3rd, +3d6 at 5th, +4d6 at 7th, +5d6 at 9th).", 1),
      fang("Poison Use", "Starting at 2nd level, you never risk accidentally poisoning yourself when applying poison to a weapon.", 2),
      fang("Team Maneuverability", "Also at 2nd level, you add one-half your class level as an insight bonus on Climb and Jump checks. All allies within 30 feet gain a +2 competence bonus on these checks if they can see you.", 2),
      fang("Uncanny Dodge", "At 3rd level, you cannot be caught flat-footed, as the barbarian ability of the same name. If you already have this ability, you gain improved uncanny dodge instead.", 3),
      fang("Improved Evasion", "Beginning at 4th level, you can avoid damage from certain attacks with a successful Reflex save and take only half damage on a failed save, as the monk ability of the same name.", 4),
      fang("Team Defense", "At 4th level, you gain a +1 dodge bonus to Armor Class. As a swift action, you can give up and bestow this bonus onto an ally within 30 feet that you can clearly see; the ally's bonus lasts for 1 round. The dodge bonus increases to +2 at 8th level.", 4),
      fang("Spider Bite", "By 6th level, when you attack with a poisoned weapon, the save DC to resist the initial effect of the poison increases by 2.", 6),
      fang("Opportunist", "At 7th level, once per round, you can make an attack of opportunity against an opponent who has just been injured in melee by another character, as the rogue ability of the same name.", 7),
      fang("Improved Uncanny Dodge", "From 9th level on, you can no longer be flanked, as the barbarian ability of the same name.", 9),
      fang("Ambush", "At 10th level, during a surprise round, you can act normally if aware of your opponents; you are not restricted to just a standard action and can perform a full-round action, standard and move action, and so on. If you are surprised, you can still take a standard action.", 10),
    ],
    source: `${CH3} (pp. 76-77)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "eye-of-lolth",
    name: "Eye of Lolth",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Disguise", "Gather Information", "Hide", "Intimidate",
      "Knowledge (local)", "Knowledge (religion)", "Listen", "Move Silently", "Search", "Sense Motive", "Spot",
    ],
    prerequisites: [
      "Race: Drow",
      "Skills: Hide 8 ranks, Knowledge (religion) 4 ranks, Listen 8 ranks, Spot 8 ranks",
      "Feat: Cautious Attack",
      "Domain: Trickery",
      "Special: Evasion",
      "Special: Sneak attack +2d6 or skirmish +2d6",
    ],
    features: [
      eye("Spellcasting", "At each even-numbered level, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in a divine spellcasting class to which you belonged before adding the prestige class level. You do not gain any other benefit a character of that class would have gained. If you had more than one divine spellcasting class before becoming an eye of Lolth, you must decide to which class to add each level for the purpose of determining spells per day, caster level, and spells known.", 2),
      eye("Aura of Truth", "You emit a 20-foot-radius aura that prevents other creatures from speaking falsehoods, as if they were in the area of a zone of truth spell. Creatures are entitled to a Will save (DC 10 + your class level + your Cha modifier) to resist this effect. As with the spell, characters that move beyond the range of your aura are free to speak as they choose.", 1),
      eye("Blindsense", "You gain blindsense out to 10 feet. At 4th, 7th, and 9th level, the extent of your blindsense increases by an additional 10 feet (20 feet at 4th, 30 feet at 7th, 40 feet at 9th).", 1),
      eye("Lolth's Vision", "You add your class level to Spot checks. You can grant this bonus to an ally within 30 feet as a swift action; this bonus lasts for 1 round.", 1),
      eye("Sneak Attack", "Beginning at 2nd level, you deal an extra 1d6 points of damage when you are flanking an opponent or at any time when the target would be denied its Dexterity bonus, as the rogue class feature; this extra damage applies to ranged attacks only if the target is within 30 feet. This damage increases by 1d6 at 5th level and again at 8th level.", 2),
      eye("Teamwork Observation", "From 3rd level onward, if you spend 1 minute taking no other action than observing a single target, you gain a +2 bonus on attack rolls and weapon damage rolls against that target for 5 rounds. All allies within 30 feet gain the same bonus (the allies need not be present while you study the target). At 7th level, this bonus increases to +4.", 3),
      eye("Hide in Plain Sight", "Beginning at 6th level, as long as you are within 10 feet of some sort of a shadow, you can use the Hide skill even when being observed, as the assassin class feature of the same name.", 6),
      eye("Team Sense", "At 6th level, you gain a +2 insight bonus on initiative checks and Listen, Search, and Spot checks. All allies within 30 feet of you also gain this bonus.", 6),
      eye("Team Stealth", "Beginning at 9th level, you take no penalty on Hide and Move Silently checks when moving faster than one-half your normal speed but less than your full speed, and you take only a -10 penalty on Hide and Move Silently checks when moving your full speed. As a swift action, you can grant this benefit to another character within 30 feet for 1 round.", 9),
      eye("Vanish", "At 10th level, as a swift action you can become invisible for 5 rounds. You can use this ability at will, but you must wait 1 minute between uses.", 10),
    ],
    source: `${CH3} (pp. 80-81)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "insidious-corruptor",
    name: "Insidious Corruptor",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Diplomacy", "Disguise", "Forgery", "Gather Information", "Intimidate",
      "Knowledge (arcana)", "Knowledge (local)", "Listen", "Search", "Sense Motive", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Race: Drow",
      "Alignment: Any evil",
      "Skills: Bluff 9 ranks, Diplomacy 4 ranks, Sense Motive 4 ranks",
      "Feat: Persuasive",
      "Spells: Ability to cast dominate person",
    ],
    features: [
      corr("Spellcasting", "At each even-numbered level, you gain new spells per day and an increase in caster level (and spells known, if applicable) as if you had also gained a level in a spellcasting class to which you belonged before adding the prestige class level. You do not gain any other benefit a character of that class would have gained. If you had more than one spellcasting class before becoming an insidious corruptor, you must decide to which class to add each level for the purpose of determining spells per day, caster level, and spells known.", 2),
      corr("Claws of Influence", "At will, as a standard action, you can select a single living creature within 30 feet that you can see and that has an Intelligence score of at least 3. The target must succeed on a Will save (DC 10 + your class level + your Cha modifier) or become vulnerable to your coercions: you gain your class level as an insight bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks made against targets that fail their save against this ability. At 1st level you can affect one target at a time; at 3rd level and every three levels thereafter, you gain an additional target (2 at 3rd, 3 at 6th, 4 at 9th). The claws of influence remain until you release the subject (a swift action) or until it is more than 30 feet away from you, at which point it is instantly freed from your influence.", 1),
      corr("Manipulate Senses", "As a swift action, you can alter the senses of a creature affected by claws of influence: you can grant an insight bonus or penalty, of any amount up to your class level, to its Listen, Search, and Spot checks for 1 minute.", 1),
      corr("Probe Thoughts", "Starting at 2nd level, as a standard action you can violate the thoughts of any creature currently under the effect of claws of influence. This ability functions like the detect thoughts spell, except the target does not get a saving throw, and you gain information as if you had spent 3 rounds in concentration. After you use this ability, the target becomes confused (as the confusion spell) for 1 round.", 2),
      corr("Manipulation", "At 3rd level, as an immediate action you can telepathically urge a single creature under the effect of claws of influence to take one of the following specific actions on its next turn — Attack (uses a standard action to make a single attack), Cast (casts a spell with a casting time of 1 standard action or less), or Move (spends a move action to move at a rate equal to its speed). The target is free to choose the target of its attack or spell, or where and how it moves, and is under no compulsion to obey; if it chooses not to obey, it takes a -4 insight penalty on all attack rolls, weapon damage rolls, saving throws, and checks for 1 round.", 3),
      corr("Minion", "Beginning at 4th level, as a standard action you can select a single creature under the effect of claws of influence and affect it with a dominate monster spell for 1 round. As with the spell, if you force the target to do something against its nature, it can immediately make another saving throw against claws of influence with a +2 bonus to break free from this effect.", 4),
      corr("Swift Enchantment", "Starting at 5th level, as an immediate action you can release a subject under the effect of claws of influence to cast an enchantment spell as a swift action.", 5),
      corr("Irresistible Charm", "At 6th level, as a swift action you can release a subject under the effect of claws of influence to increase the save DC of the next enchantment (charm) spell you cast by an amount equal to your Charisma modifier (minimum +1).", 6),
      corr("Greater Manipulation", "Beginning at 7th level, you can issue commands to creatures under the sway of claws of influence with greater effect: Attack — the target attacks another creature that you indicate, and if it does, it gains a +4 bonus on attack rolls and damage rolls; Cast — the target casts a spell at a target you indicate, and if it does, the save DC increases by 2; Move — the target moves where you indicate, and if it does, it gains a +10 enhancement bonus to its speed for 1 round. As with manipulation, subjects are not forced to abide by your directives, but choosing some other action incurs the penalties prescribed by manipulation.", 7),
      corr("Greater Minion", "Starting at 8th level, as a standard action you can force any and all creatures under the effect of claws of influence to act as if under the influence of a dominate monster spell for 1 round. This ability otherwise functions as the minion ability. (Table 3-7 names this feature 'Greater minion'; the feature text heading prints 'Greater Minions.')", 8),
      corr("Irresistible Compulsion", "At 9th level, as a swift action you can release a subject under the effect of claws of influence to increase the save DC of the next enchantment (compulsion) spell you cast by an amount equal to your Charisma modifier (minimum +1).", 9),
      corr("Master Manipulator", "At 10th level you can use claws of influence as a swift action. If you use it as a standard action, the save DC to resist it increases by 4.", 10),
    ],
    source: `${CH3} (pp. 83-85)`,
    sourceUrl: DOTU_PATH,
  },
  {
    id: "kinslayer-dotu",
    name: "Kinslayer",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Bluff", "Disguise", "Hide", "Intimidate", "Jump", "Knowledge (geography)", "Knowledge (history)",
      "Listen", "Move Silently", "Search", "Sense Motive", "Spot", "Survival",
    ],
    prerequisites: [
      "Race: Drow",
      "Feats: Endurance, Diehard, Unspeakable Vow, Vow of Vengeance",
    ],
    features: [
      kin("Mettle", "Whenever you make a successful Fortitude or Will saving throw that would normally lessen (rather than negate) the effect of a spell or other magical ability, it has no effect on you at all. Any spell that is normally negated by a successful saving throw is unaffected by this ability.", 1),
      kin("Rage", "You can fly into a screaming blood frenzy, as the barbarian rage class feature. You gain additional uses of this ability at 5th and 9th levels (1/day at 1st, 2/day at 5th, 3/day at 9th). If you already have a rage or frenzy ability from another source, the uses per day stack with the rage granted by this class feature.", 1),
      kin("Surge of Hate", "Whenever you begin a combat in which you see elves among your enemies, add your class level as a morale bonus on your initiative check.", 1),
      kin("Inured to Sunlight", "Starting at 2nd level, you no longer suffer from the detrimental effects of bright light, such as sunlight or the daylight spell.", 2),
      kin("Smite Elves", "Beginning at 2nd level, you can smite elves once per day. This ability functions like the smite evil paladin class feature, but the smite affects only elves or half-elves. You gain additional uses of this ability at 5th and 8th levels (2/day at 5th, 3/day at 8th).", 2),
      kin("Elf Bane", "Beginning at 3rd level, when using a weapon to attack an elf, you gain a +1 insight bonus on your attack rolls and deal an extra 1d6 points of damage.", 3),
      kin("Shameful Strike", "At 4th level, you can make a shameful strike as a full-round action: a normal melee attack, but at a -4 penalty. If you hit, the target becomes sickened for 1 round per class level.", 4),
      kin("Deny Elf Magic", "From 6th level on, whenever you are targeted by a spell or spell-like ability cast by another elf, you can make a level check (using your total character level) as an immediate action. If the result is higher than your spell resistance, it replaces your spell resistance for the purpose of negating that spell.", 6),
      kin("Disguise Heritage", "Beginning at 7th level, you can alter your appearance to that of a surface elf, as if using the disguise self spell. This affects your body but not your possessions. It is not an illusory effect, but a minor physical alteration of your appearance within the limits described for the spell.", 7),
      kin("Fey Bane", "Starting at 8th level, when using a weapon to attack a creature of the fey type, you gain a +1 insight bonus on your attack rolls and deal an extra 1d6 points of damage.", 8),
      kin("Vengeful Strike", "At 10th level, whenever an elf deals damage to you, you gain a +4 morale bonus on attack and weapon damage rolls on your first melee attack against that individual in the following round.", 10),
      kin("Lolth's Curse", "At 10th level, you can bestow a powerful curse on a single elf as a full-round action. You must sacrifice two of your daily uses of smite or rage (or a combination of both) to use this ability. Any single elf within 30 feet that you can see clearly must succeed on a Will save (DC 20 + your Cha modifier) or gain the light blindness special quality as well as assuming the appearance of a drow. The target gains no other drow abilities. The effects are permanent and can only be lifted by a remove curse spell or more powerful magic.", 10),
    ],
    source: `${CH3} (pp. 87-88)`,
    sourceUrl: DOTU_PATH,
  },
];
