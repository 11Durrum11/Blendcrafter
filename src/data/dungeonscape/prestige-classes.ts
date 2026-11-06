import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Dungeonscape (WotC, D&D 3.5) prestige classes — the
// Beast Heart Adept and the Trapsmith (Chapter 3,
// printed pp. 48-56), transcribed from Shaun's own copy.
// 3.5-native: no conversion. Tables 3-2, 3-3, and 3-4
// were verified against rendered pages because the text
// layer interleaves the trapsmith table's spells-per-day
// columns and the quick fingers table (printed p. 55).
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.
//
// A third prestige class in the book, the Dungeon Lord
// (Chapter 5, pp. 108-111), is written for NPC villains
// and monsters — the book presents it as a class for the
// creatures that rule a dungeon, and Chapter 5 is DM
// material outside this pack's scope. It is documented
// in reference.md in this staging folder.

const DS = "Dungeonscape";
const DS_PATH = "workspace/library-staging/books/dungeonscape.pdf";

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(prefix: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key: prefix + "-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source: DS,
      sourceUrl: DS_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fbha = mk("beast-heart-adept");
const ftrp = mk("trapsmith");

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const FULL10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const HALF5 = [0, 1, 2, 3, 3];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const GOOD5 = [2, 3, 3, 4, 4];
const POOR5 = [0, 0, 1, 1, 1];

export const DUNGEONSCAPE_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "beast-heart-adept",
    name: "Beast Heart Adept",
    ruleset: "core",
    source: DS,
    sourceUrl: DS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL10, GOOD10, POOR10, GOOD10),
    classSkills: ["Climb", "Concentration", "Craft", "Diplomacy", "Handle Animal", "Heal", "Jump", "Knowledge (arcana)", "Knowledge (dungeoneering)", "Knowledge (nature)", "Knowledge (the planes)", "Profession", "Ride", "Survival", "Swim"],
    prerequisites: [
      "Skills: Handle Animal 8 ranks",
      "Skills: Knowledge (arcana) 4 ranks",
      "Skills: Knowledge (dungeoneering) 4 ranks",
      "Feats: Animal Affinity",
      "Special: spend at least one week living alone in a dungeon complex",
    ],
    features: [
      fbha("Monstrous Companion (Ex)", "You gain the service of a monstrous companion, similar to a druid's animal companion except that it is a magical beast or aberration rather than an animal. Choose one: ankheg, blink dog, giant eagle, giant owl, hippogriff (4 Hit Dice), krenshar (4 Hit Dice), otyugh, owlbear, pegasus, or worg. Except for the hippogriff and krenshar, which are larger than normal, the monster is typical of its kind; if its Intelligence is greater than 2, it has the same alignment as you. Levels in other classes that grant an animal companion do not stack with your beast heart adept levels for this ability. The companion improves with your class level: at class levels 1st-2nd it gains +0 bonus HD, +0 natural armor adjustment, +0 Str/Con adjustment, 1 bonus trick, and the link special; at 3rd-4th, +2/+2/+2, 2 tricks, and evasion; at 5th-6th, +4/+4/+4, 3 tricks, and devotion (+4 morale bonus on Will saves against enchantment spells and effects); at 7th-8th, +6/+6/+6 and 4 tricks; at 9th-10th, +8/+8/+8, 5 tricks, and improved evasion. Bonus HD improve the companion's base attack bonus, saves, feats, and skill points, but companions do not increase in size from extra HD. Link: you can handle a monstrous companion as a free action or push it as a move action, and you gain a +4 circumstance bonus on monster empathy and Handle Animal checks regarding it.", 1),
      fbha("Monster Empathy (Ex)", "You can improve the attitude of a magical beast (such as a chimera or a gorgon) as the druid's wild empathy, except that it affects magical beasts regardless of their Intelligence score. You can also use it on an animal or on an aberration with an Intelligence score of 1 or 2, but you take a -4 penalty on the check. If you have wild empathy from another class, add those levels to your beast heart adept level for magical beasts and animals, and you no longer take the penalty for animals. With 5 or more ranks in Handle Animal, you gain a +2 bonus on monster empathy checks.", 1),
      fbha("Monster Handler (Ex)", "You can make Handle Animal checks with regard to magical beasts and aberrations without penalty. This applies only to creatures with an Intelligence score of 1 or 2; magical beasts and aberrations with higher Intelligence cannot be controlled by Handle Animal at all.", 1),
      fbha("Monster Lore (Ex)", "At 2nd level, you can make a special monster lore check to identify any living creature or its special abilities or vulnerabilities, functioning as a Knowledge check with a bonus equal to your beast heart adept level + your Int modifier. You can attempt this check in addition to the relevant Knowledge check. Bard or loremaster levels add to your beast heart adept levels for the bonus.", 2),
      fbha("Alternative Monstrous Companion (Ex)", "At 3rd level or higher, you can select a monstrous companion from alternative lists, applying the indicated adjustment to your beast heart adept level when determining the monster's characteristics and special abilities: 3rd level or higher (level -2): digester, girallon, manticore, winter wolf. 5th level or higher (level -4): chimera, wyvern. 7th level or higher (level -6): chuul, destrachan, dragonne. 9th level or higher (level -8): behir, gray render, yrthak.", 3),
      fbha("Monstrous Flank (Ex)", "At 4th level, when you form a flank with one of your monstrous companions, both you and the companion gain an additional +2 bonus on attack rolls and damage rolls against the flanked opponent.", 4),
      fbha("Extra Monstrous Companion (Ex)", "At 5th level, you gain a second monstrous companion, chosen from the list available to a 1st-level beast heart adept; treat your class level as four levels lower for its abilities (and for selecting an alternative companion). At 9th level, you gain a third monstrous companion from the same list, treating your class level as eight levels lower for its abilities.", 5),
      fbha("Monstrous Tactics (Ex)", "Starting at 7th level, when one of your monstrous companions strikes an opponent with a melee attack, the target provokes an attack of opportunity from you; you can make an attack of opportunity against a particular target only once per round with this ability. In addition, your companions do not grant cover against your enemies when you use ranged attacks or spells.", 7),
      fbha("Monstrous Team-Up (Ex)", "At 10th level, all members of your adventuring party gain the benefits of your monstrous flank and monstrous tactics abilities; references to 'you' in those abilities now include your allies.", 10),
    ],
  },
  {
    id: "trapsmith",
    name: "Trapsmith",
    ruleset: "core",
    source: DS,
    sourceUrl: DS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "half",
    goodSaves: ["ref"],
    progression: rows(HALF5, POOR5, GOOD5, POOR5),
    classSkills: ["Appraise", "Craft", "Disable Device", "Escape Artist", "Knowledge (architecture and engineering)", "Listen", "Open Lock", "Profession", "Search", "Sleight of Hand", "Spot", "Use Rope"],
    prerequisites: [
      "Skills: Craft (trapmaking) 8 ranks",
      "Skills: Disable Device 8 ranks",
      "Skills: Open Lock 5 ranks",
      "Skills: Search 8 ranks",
      "Special: trapfinding class feature",
    ],
    features: [
      ftrp("Booby Traps (Ex)", "You can quickly set up booby traps to harm and hinder your foes. When setting up a trap, make a Craft (trapmaking) check: the result is the Search DC to find the trap, and half the result is the Disable Device DC to disarm it. Setting up a booby trap is usually a full-round action. All booby traps are mechanical traps with a touch trigger; you can disable and disassemble one of your own traps without a check in about 1 minute. The base cost covers reusable parts; the cost per use covers parts expended when the trap is set off. Simple booby traps: Alarm trap — bells on a trip wire; creatures nearby attempt a DC -5 Listen check to notice, and anyone who runs into it can make a Reflex save (DC equal to 1/2 your Craft [trapmaking] result) to avoid setting it off; setup 1 round per 10 feet of wire; base cost 1 gp/10 ft., no cost per use. Bolt trap — fires a light or heavy crossbow at one target that breaks a trip wire, attacking with a bonus equal to 1/2 your check result; covers a line up to 20 feet; base cost 35 gp (light crossbow) or 50 gp (heavy), +300 gp for a masterwork crossbow; cost per use is the ammunition if masterwork or magic. Drop trap — a rigged item falls on anyone crossing a trip line, making a touch attack with a bonus equal to 1/2 your check result; an alchemical item deals its normal damage, a heavy object such as a stone deals 1d6 bludgeoning; covers one 5-foot square; base cost 1 sp, cost per use varies with the dropped item. Trip rope trap — a taut rope makes a trip attempt with a bonus equal to 1/2 your check result against the first creature to cross, then goes slack until reset; covers a line up to 20 feet; base cost 10 gp, no cost per use. From 3rd level you can build advanced versions: an advanced alarm trap sets the Reflex save DC equal to your full check result; an advanced bolt trap fires up to three bolts from three separate crossbows (setup 2 rounds, tripled base cost); an advanced drop trap can drop up to three alchemical items, a very heavy object (3d6 bludgeoning), or a net (target can move freely but needs a DC 20 Escape Artist check to get out); an advanced trip rope trap uses your full check result for the opposed trip check and can trip another creature that crosses afterward.", 1),
      ftrp("Master Disarmer (Ex)", "When dealing with a trap, add your trapsmith level to your Search checks, Disable Device checks, and Open Lock checks.", 1),
      ftrp("Trap Sense (Ex)", "You gain trap sense +1 at 1st level, +2 at 3rd level, and +3 at 5th level, as the barbarian class feature. Trap sense from other sources (such as barbarian or rogue levels) stacks with this benefit.", 1),
      ftrp("Spellcasting", "You cast arcane spells as a bard does (spontaneously), drawn from the trapsmith spell list. To cast a spell you need an Intelligence score of at least 10 + the spell's level; bonus spells are based on Intelligence; the save DC is 10 + the spell's level + your Int bonus. Spells per day (1st/2nd/3rd): 1st level: 1/-/-; 2nd: 2/-/-; 3rd: 2/1/-; 4th: 3/2/-; 5th: 3/2/1. Spells known (1st/2nd/3rd): 1st level: 2/-/-; 2nd: 3/-/-; 3rd: 3/2/-; 4th: 4/3/-; 5th: 4/3/2. Spell list — 1st: arcane sight, cat's grace, clairaudience/clairvoyance, dispel magic, fox's cunning, gaseous form, haste, knock, protection from energy. 2nd: arcane eye, dimension door, lesser globe of invulnerability, Otiluke's resilient sphere, stone shape, stoneskin. 3rd: Bigby's interposing hand, break enchantment, fabricate, greater dispel magic, wall of stone.", 1),
      ftrp("Arrow Proof (Su)", "Starting at 2nd level, when a trap activates you know how to lessen the impact: you gain damage reduction 5/- against the effects of traps. The reduction applies only to damage from physical attacks, such as arrows, crushing blocks, or pits; damage from spells or magical effects is not reduced. Damage reduction from multiple sources stacks for this purpose, but only for damage dealt by a trap.", 2),
      ftrp("Quick Fingers (Ex)", "Starting at 2nd level, you can disarm traps more quickly. When you attempt a Disable Device check, use this table in place of the one in the Player's Handbook: Simple device (DC 10): 1 standard action. Tricky device (DC 15): 1 full-round action. Difficult device (DC 20): 1d4 rounds. Wicked device (DC 25+): 1d4 rounds. If you also have the quick fingers alternative class feature, reduce the time for difficult and wicked traps to 1d3 rounds.", 2),
      ftrp("Unweave (Su)", "At 3rd level, you can unweave the magic of a magic trap as if targeting it with dispel magic, with a caster level equal to 5 + your trapsmith level. Usable three times per day; it works only against magic traps, though spells such as alarm, glyph of warding, and the symbol spells are valid targets.", 3),
      ftrp("Dance through Danger (Ex)", "Starting at 4th level, when you make a Search check to find a trap and your result exceeds the DC by 5 or more, you can move past the trap without setting it off. This benefit applies only to you.", 4),
      ftrp("Spell Proof (Su)", "Starting at 4th level, you gain spell resistance equal to 15 + your trapsmith level, which applies only against magic traps — including spells such as fire trap, explosive runes, glyph of warding, and the symbol spells.", 4),
      ftrp("Avoid Disaster (Su)", "At 5th level, once per day when a trap is sprung, you can make a Disable Device check as an immediate action. If the check succeeds, you quickly disable the trap and avoid its effects; if it fails, the trap activates as normal.", 5),
    ],
  },
];
