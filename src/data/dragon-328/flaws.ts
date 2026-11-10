// Dragon Magazine #328 (February 2005) — flaw draft: "Nobody's Perfect: New Flaws
// for Nonhumans" (Richard Pocklington), pp. 40-44. Typed FlawTraitDefinition records
// in the house shape of the issue-327 flaws draft (same author, same column series).
// TWENTY-FOUR flaws print — four each for dwarves, elves, gnomes, half-elves,
// half-orcs, and halflings; the program survey estimated ~15-20 (see MANIFEST).
// Standing flaw rules carried in MANIFEST, not per record: a character may take up
// to two flaws, flaws must be selected at 1st level, and each flaw taken grants an
// additional feat. Although designed specifically with nonhumans in mind, any
// character may select from these flaws if he meets the appropriate prerequisites,
// as printed. Verified against rendered page images (pp. 42-44) and the issue text;
// the image governs — the dwarf flaw's heading prints STUBBY FINGERS (the external
// feat/flaw index and the flavor line agree; an early OCR read of "Sturdy" was a
// misread of the display type).

import type { FlawTraitDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #328 — Nobody's Perfect: New Flaws for Nonhumans (Richard Pocklington), pp. 40-44";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FlawSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function F(seed: FlawSeed): FlawTraitDefinition {
  return {
    kind: "flaw",
    ruleset: "core",
    source: SRC,
    sourceUrl: SRC_URL,
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_328_FLAWS: FlawTraitDefinition[] = [
  // ---- Flaws for Dwarves ----
  F({
    id: "glory-hound",
    name: "Glory-Hound",
    prerequisite: "Base attack bonus +1.",
    summary: "You suffer a -2 penalty to AC during combat until you drop an opponent; this penalty does not apply if the combat is against a single opponent.",
    description:
      "You have an insatiable desire for glorious combat, fighting recklessly to prove yourself. You suffer a -2 penalty to AC during combat until you drop an opponent. This penalty does not apply if the combat is against a single opponent.",
  }),
  F({
    id: "grudge-keeper",
    name: "Grudge Keeper",
    summary:
      "If you are damaged in combat, you suffer a -2 penalty on attack rolls, skill checks, saving throws, and ability checks until you damage the foe who caused the harm; the penalty disappears when the combat ends.",
    description:
      "You have an overpowering need for vengeance and have difficulty letting go of grudges. If you are damaged in combat, you suffer a -2 penalty on attack rolls, skill checks, saving throws, and ability checks until you damage the foe who caused you harm. This penalty does not apply if you cannot discern the source of the damage. This penalty disappears when the combat ends.",
  }),
  F({
    id: "implacable",
    name: "Implacable",
    prerequisite: "Base attack bonus +1.",
    summary: "If you move out of melee combat for any reason, you suffer a -2 penalty on all attack rolls, skill checks, and saving throws for 1 hour.",
    description:
      "You refuse to retreat from even the most deadly of confrontations. If you move out of melee combat for any reason, you suffer a -2 penalty on all attack rolls, skill checks, and saving throws for 1 hour.",
  }),
  F({
    id: "stubby-fingers",
    name: "Stubby Fingers",
    prerequisite: "Dwarf, gnome, or halfling.",
    summary:
      "You suffer a -4 penalty on all attack rolls made with a light or one-handed weapon (natural weapons and unarmed attacks do not incur this penalty), and a -4 penalty on all Disable Device, Open Lock, Sleight of Hand, and Use Rope checks.",
    description:
      "You have short stubby fingers, which are not well-suited for grasping. You suffer a -4 penalty on all attack rolls made when you use a light or one-handed weapon (natural weapons and unarmed attacks do not incur this penalty). In addition, you suffer a -4 penalty on all Disable Device, Open Lock, Sleight of Hand, and Use Rope checks.",
  }),
  // ---- Flaws for Elves ----
  F({
    id: "elven-pride-of-arms",
    name: "Elven Pride of Arms",
    prerequisite: "Elven blood.",
    summary:
      "You suffer a -4 penalty on attack rolls when using a weapon other than a longsword, rapier, or bow (long, short, or composite); attacks made while fighting unarmed, touch attacks (including ranged touch attacks), and attacks made with natural weaponry also incur this penalty.",
    description:
      "You only consider those weapons designed specifically for use by the noblest of elves to be fit to wield; using any other object as a weapon is beneath your dignity. You suffer a -4 penalty on attack rolls when using a weapon other than a longsword, rapier, or bow (long, short, or composite). Attacks made while fighting unarmed, touch attacks (including ranged touch attacks), or attacks made with natural weaponry also incur this penalty.",
  }),
  F({
    id: "frail-328",
    name: "Frail",
    prerequisite: "Constitution 11 or lower.",
    summary:
      "Whenever you fail a Fortitude save, you become fatigued until you get 8 hours of complete rest; this flaw applies only once to any given source requiring a Fortitude save, and failing a Fortitude save while fatigued causes you to become exhausted.",
    description:
      "You become fatigued when your body is assaulted by poison or magic. Whenever you fail a Fortitude save, in addition to any other effects you might suffer, you become fatigued. This condition lasts until you get 8 hours of complete rest. This flaw applies only once to any given source that requires a Fortitude save. Failing a Fortitude save while fatigued causes you to become exhausted.",
  }),
  F({
    id: "fussy",
    name: "Fussy",
    summary:
      "You become sickened (no saving throw allowed) upon ingestion of any sort of potion for the duration of its effect — potions with an instantaneous duration sicken you for a number of minutes equal to the potion's caster level — and you suffer a -4 penalty on saving throws made against ingested poisons.",
    description:
      "You are uncomfortable ingesting anything but a small range of preferred foods and drinks. You become sickened (no saving throw allowed) upon ingestion of any sort of potion for the duration of its effect. Potions with an instantaneous duration cause you to be sickened for a period of time equal to the potion's caster level in minutes. You also suffer a -4 penalty on saving throws made against ingested poisons.",
  }),
  F({
    id: "slow-healing",
    name: "Slow Healing",
    prerequisite: "Constitution 13 or lower.",
    summary:
      "You do not normally recover hit points or temporary ability damage through natural healing; a full day of complete bed rest lets you recover either 1 hit point or 1 point of temporary ability damage, and any conjuration (healing) spell cast upon you works at only half its caster level.",
    description:
      "You do not heal quickly. You do not normally recover hit points or temporary ability damage through natural healing. If you undergo complete bed rest for a full day, you may recover either 1 hit point or 1 point of temporary ability damage. In addition, any conjuration (healing) spell cast upon you works at only half its caster level: for example, a cure moderate wounds spell cast upon you by an 8th-level cleric would only heal 2d8+4 points of damage, instead of 2d8+8 points of damage.",
  }),
  // ---- Flaws for Gnomes ----
  F({
    id: "arcane-conundrum",
    name: "Arcane Conundrum",
    prerequisite: "Gnome, Cha 10+.",
    summary: "You may never use any spell-like abilities under any circumstances, and you suffer a -2 penalty on saving throws versus spells of the illusion school.",
    description:
      "You are unable to use your inborn magical abilities. You may never use any spell-like abilities under any circumstances. In addition, you suffer a -2 penalty on saving throws versus spells of the illusion school.",
  }),
  F({
    id: "curious",
    name: "Curious",
    summary: "You suffer a -2 penalty on Listen and Spot checks, and a -2 penalty on initiative rolls.",
    description:
      "You are easily distracted by the sights and sounds around you. You suffer a -2 penalty on Listen and Spot checks. You also suffer a -2 penalty on initiative rolls.",
  }),
  F({
    id: "magical-fascination",
    name: "Magical Fascination",
    summary:
      "You suffer a -2 penalty on attack rolls and skill checks while in sight of a visible magical effect with a duration greater than instantaneous (such as a dancing lights, spiritual weapon, or wall of fire spell).",
    description:
      "You have a tendency to become fascinated by spells and elaborate magical effects. You suffer a -2 penalty on attack rolls and skill checks while in sight of a visible magical effect with a duration greater than instantaneous (such as a dancing lights, spiritual weapon, or wall of fire spell).",
  }),
  F({
    id: "short-attention-span-328",
    name: "Short Attention Span",
    summary:
      "You suffer a -2 penalty on all skill checks made to retry an action you previously failed (cumulative, increasing by -2 for every failed attempt), and you may not take 20 on any skill check.",
    description:
      "You have little patience, causing you to have difficulty concentrating on repetitive tasks. You suffer a -2 penalty on all skill checks made to retry an action that you previously failed. This penalty is cumulative, increasing by -2 for every failed attempt. In addition, you may not take 20 on any skill check.",
  }),
  // ---- Flaws for Half-Elves ----
  F({
    id: "free-spirited",
    name: "Free-Spirited",
    prerequisite: "Chaotic alignment.",
    summary:
      "The weight of any gear you carry is considered double for the purposes of determining your load, and any armor check penalties you have are also doubled (tripled in the case of a Swim check).",
    description:
      "You seek to live your life freely, unburdened by excessive material possessions. The weight of any gear you carry is considered double for the purposes of determining your load: for example, a half-elf with a Strength of 10 and 30 pounds of gear is treated as carrying 60 pounds, which is a medium load. In addition, any armor check penalties you have are also doubled (or tripled, in the case of making a Swim check).",
  }),
  F({
    id: "half-blood-outcast",
    name: "Half-Blood Outcast",
    prerequisite: "Half-elf or half-orc.",
    summary:
      "You suffer a -2 penalty on all attack rolls, saving throws, and skill checks when within line of sight of an elf (if you are a half-elf) or an orc (if you are a half-orc).",
    description:
      "You despise your nonhuman side. You suffer a -2 penalty on all attack rolls, saving throws, and skill checks when within line of sight of an elf (if you are a half-elf) or an orc (if you are a half-orc).",
  }),
  F({
    id: "insomniac",
    name: "Insomniac",
    summary:
      "To get a full night of rest you must succeed at a DC 15 Fortitude save, and if you are woken during the night you must make an additional save at the same DC to return to sleep; if you fail, you are fatigued when you rise in the morning (with bonuses to the save for being fatigued or exhausted and for comfortable or poor conditions).",
    description:
      "You have great difficulty achieving a full and restful sleep. In order to get a full night of rest you must succeed at a DC 15 Fortitude save. If you are sleeping and a disturbance wakes you during the night, you must make an additional save (at the same DC) to return to sleep. If you fail the Fortitude save you are fatigued when you rise in the morning. If you are fatigued when you try to sleep, you gain a +2 bonus on your save; if you are exhausted, you gain a +6 bonus. Comfortable conditions, such as most inns, grant you a +4 bonus on this save; poor conditions, such as sleeping on the ground or in armor, give you a -4 penalty on this save. Even if you sleep poorly, you may prepare arcane spells as normal after 8 hours of fitful rest.",
  }),
  F({
    id: "quarter-elf",
    name: "Quarter Elf",
    prerequisite: "Half-elf.",
    summary:
      "You are not immune to sleep spells and do not gain a racial bonus on saving throws against enchantment spells or effects, and you are not considered to have elven blood.",
    description:
      "Elven blood is not particularly strong in your veins and its features are barely noticeable. You are not immune to sleep spells and do not gain a racial bonus on saving throws against enchantment spells or effects. You are not considered to have elven blood.",
  }),
  // ---- Flaws for Half-Orcs ----
  F({
    id: "beady-eyes-328",
    name: "Beady Eyes",
    prerequisite: "Darkvision.",
    summary: "You do not have darkvision; instead you possess low-light vision, and you suffer a -2 penalty on all Search and Spot checks.",
    description:
      "You have narrow beady eyes that do not catch the light as well as they should. You do not have darkvision; instead you possess low-light vision. In addition, you suffer a -2 penalty on all Search and Spot checks.",
  }),
  F({
    id: "bravado",
    name: "Bravado",
    summary:
      "You may not gain the benefit of any kind of dodge bonuses to your Armor Class — spells, items, and effects that provide a dodge bonus provide no benefit for you — and you cannot use the withdraw action during combat.",
    description:
      "You are rash in combat, refusing to show weakness by falling back from your enemies' blows. You may not gain the benefit of any kind of dodge bonuses to your Armor Class. Spells, items, and effects that provide a dodge bonus provide no benefit for you. You cannot use the withdraw action during combat.",
  }),
  F({
    id: "light-sensitivity",
    name: "Light Sensitivity",
    prerequisite: "Darkvision.",
    summary:
      "You become dazzled in bright sunlight or within the radius of a daylight spell; a dazzled creature takes a -1 penalty on attack rolls, Search checks, and Spot checks.",
    description:
      "Accustomed only to the darker places in the world, your eyes open much wider than normal, making it difficult for you to see in bright light. You become dazzled in bright sunlight or within the radius of a daylight spell. A dazzled creature takes a -1 penalty on attack rolls, Search checks, and Spot checks.",
  }),
  F({
    id: "short-temper-328",
    name: "Short Temper",
    summary:
      "If you suffer any damage during combat, you must make a DC 15 Will save or become enraged for a number of rounds equal to 3 + your Constitution modifier: -2 AC, no Charisma-, Dexterity-, or Intelligence-based skills (except Balance, Escape Artist, Intimidate, and Ride), no Concentration, spellcasting, or command-word, spell-trigger, or spell-completion items, and no Combat Expertise, item creation, or metamagic feats; the state cannot be ended prematurely and its AC penalty stacks with barbarian rage.",
    description:
      "You become angry and flustered under stressful circumstances. If you suffer any damage during combat, you must make a DC 15 Will save or become enraged. While enraged you suffer a -2 penalty to your Armor Class and you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration. You cannot cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. You can use any feat you possess except Combat Expertise, item creation feats, and metamagic feats. This enraged state lasts for a number of rounds equal to 3 + your Constitution modifier and cannot be ended prematurely. This penalty stacks with those from the use of the barbarian rage ability, resulting in a -4 AC penalty.",
  }),
  // ---- Flaws for Halflings ----
  F({
    id: "cautious-328",
    name: "Cautious",
    summary:
      "You must spend twice as long performing any skill that requires an action (the Concentration skill is not affected, as it does not require an action), and you suffer a -2 penalty on initiative checks.",
    description:
      "You are uneasy engaging in behavior that carries a chance of failure. You must spend twice as long performing any skill that requires an action: for example, deciphering a page of text would take 2 minutes for you instead of 1, while the Concentration skill is not affected by this flaw as it does not require an action. You also suffer a -2 penalty on initiative checks.",
  }),
  F({
    id: "lightweight",
    name: "Lightweight",
    prerequisite: "Constitution 13 or lower, you may not be Obese.",
    summary:
      "You have half the base weight of a normal character of your race (height and weight modifiers are added normally), suffer a -4 penalty when making or resisting bull rushes, grapples, overruns, or trip attacks, and gain no attack bonus when you charge — although you do suffer the -2 Armor Class penalty and take double damage from weapons set against charges you make.",
    description:
      "You are light for your size. You have half the base weight of a normal character of your race. Height and weight modifiers are added normally. You suffer a -4 penalty when making or resisting bull rushes, grapples, overruns, or trip attacks. You gain no attack bonus when you charge, but you do suffer the -2 Armor Class penalty and take double damage from weapons set against charges you make. Normal: Characters receive a +2 bonus on attack rolls when charging.",
  }),
  F({
    id: "obese-328",
    name: "Obese",
    prerequisite: "Small size, Dexterity 13 or lower, you may not be Lightweight.",
    summary:
      "You have double the base weight of a character of your race (height and weight modifiers are added normally), lose your +1 size bonus to Armor Class and on attack rolls and your +4 size bonus on Hide checks, and must pay double the cost for armor (but not for magical enhancements), which does not weigh half the normal amount.",
    description:
      "Your great bulk can sometimes impede your actions. You have double the base weight of a character of your race. Height and weight modifiers are added normally. You lose your +1 bonus to Armor Class and on attack rolls, as well as your +4 bonus on Hide checks. You must pay double the cost for armor but not for any magical enhancements the armor might have. Such armor does not weigh half the normal amount. Normal: Small characters receive a +1 bonus to Armor Class and on attack rolls, as well as a +4 bonus on Hide checks. Armor for small characters weighs half the normal amount.",
  }),
  F({
    id: "skulker",
    name: "Skulker",
    summary:
      "You must make a DC 15 Will save or become shaken whenever a foe engages you in melee — the penalty takes effect as soon as an enemy attacks you while you are within its threatened area — and you recover from your fear as soon as you are not within an area threatened by foes.",
    description:
      "You are not prepared to stand face to face with your foes. You must make a DC 15 Will save or become shaken whenever a foe engages you in melee. This penalty takes effect as soon as an enemy attacks you while you are within its threatened area. You recover from your fear as soon as you are not within an area threatened by foes.",
  }),
];
