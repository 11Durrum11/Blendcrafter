import type { SkillDefinition } from "@/engine/types";

// Iron Kingdoms Character Guide skills: the "Skills" half of the
// Skills & Feats section of Chapter Two: Characters & Classes
// (pp. 142–150). Added in the 2026-11-02 skills audit (Shaun:
// "Look for all the skills from all the books — list them").
// The section opens: "This section describes new skills
// appropriate to the setting." Each entry below is a skill the
// book gives its own headed write-up — key ability and
// trained-only status in the header, its own Check/Special/
// Synergy rules text — including eight Craft specialties whose
// trained-only status and DC tables differ from the generic
// Craft skill, so they are recorded as their own skills,
// following the precedent of Sorcery & Steam's Knowledge and
// Profession specialty records and Monsternomicon vol. 2's
// Profession (Torturer). Short mechanical summaries in our own
// words, cited to book + page.
// Source PDF: /A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf
// (scanned-image PDF; every write-up read from the printed page.)
//
// NOT given records (table-only mentions in the book's
// Table 2-15: Skills, with no write-up in the section — they
// remain specialties of their family skills): Craft
// (blacksmithing), Craft (weaponsmithing), Knowledge (law),
// Knowledge (mechanika), Knowledge (tactics). Creature Lore is
// reprinted in this section (p. 149) but originates in
// Monsternomicon vol. 1; its record lives in the Monsternomicon
// pack (skills-mn1.ts).

const IKCG = "Iron Kingdoms Character Guide";
const IKCG_PATH =
  "/A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf";
const SKILLS = `${IKCG} — Chapter Two: Characters & Classes, Skills & Feats: Skills`;

export const IRON_KINGDOMS_SKILLS: SkillDefinition[] = [
  {
    id: "craft-cannoneer",
    name: "Craft (cannoneer)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "Training in the loading, firing, and cleaning of cannons. Check: a successful check loads a cannon — reloading takes a number of standard actions depending on the type of cannon, and reloading actions provoke attacks of opportunity; if the check fails or the process is interrupted, reloading must begin anew, and failing by 5 or more ruins the ammunition. The skill also primes and sets grenades: a successful check (DC 6), taking 1 standard action and provoking attacks of opportunity. Synergy: 5 or more ranks give a +2 bonus on related Appraise checks. In the Iron Kingdoms this is a class skill for fighters, rangers, and paladins.",
    source: `${SKILLS} — Craft (cannoneer) (p. 142)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-clockwork",
    name: "Craft (clockwork)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "Constructing clocks and clockwork mechanisms. Check: follows the standard guidelines of the Craft skill, with construction and repair DCs by complexity — simple clockwork (a timer that counts down in 1-second intervals and triggers an alarm or another device) DC 15, 25 gp; complex clockwork (clocks and other spring-wound devices) DC 25, 75 gp; advanced clockwork (pocket watches, miniaturized power sources, near-lifelike clockwork animals) DC 35+, 150+ gp. Rigging a timer to trigger another device takes a second Craft (clockwork) check (DC 15), and each extra round of timer duration raises the DC by 1. Synergy: 5 or more ranks give a +2 bonus on Craft (gunsmithing) checks and on Appraise checks related to clockwork devices. Class skill for arcane mechaniks and bodgers.",
    source: `${SKILLS} — Craft (clockwork) (p. 143)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-demolitions",
    name: "Craft (demolitions)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "Thorough training in the use of explosives, including grenades. Check: on a successful check, based on the type of demolitions being used, the character can prime and set the demolitions; grenades have a DC of 6 and require 1 standard action to prime and set. Special: while most skills can succeed even on a roll of 1, a roll of 1 while priming and setting demolitions is a critical failure — the explosives detonate immediately, with disastrous results for the character and all those within the standard blast radius. Synergy: 5 or more ranks in Craft (alchemy) give a +2 bonus on Craft (demolitions) checks; 5 or more ranks here give a +2 bonus on related Appraise checks. Class skill for fighters, rangers, and paladins.",
    source: `${SKILLS} — Craft (demolitions) (p. 143)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-gunsmithing",
    name: "Craft (gunsmithing)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "Crafting firearms from raw materials — a complicated art combining basic carpentry, blacksmithing, weaponsmithing, and clockwork construction. Check: follows the standard guidelines of the Craft skill; the book's table gives construction and repair DCs and material costs per firearm (for example: grappling gun DC 15, musket DC 15, military carbine DC 18, military pistol DC 16, double-barreled military pistol DC 18, long rifle DC 20, military rifle DC 20, double-barreled long rifle DC 22). A skilled gunsmith can also modify existing firearms; the DC is the same as the original DC to construct the firearm. Setting up a gunsmith's shop costs 1,000 gp and requires a permanent structure. Synergy: 5 or more ranks in Craft (clockwork) or in Craft (weaponsmithing) each give a +2 bonus on Craft (gunsmithing) checks, and the two bonuses stack; 5 or more ranks here give a +2 bonus on Craft (small arms) checks and on Appraise checks related to firearms.",
    source: `${SKILLS} — Craft (gunsmithing) (p. 146)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-mechanika",
    name: "Craft (mechanika)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "The general use, upkeep, and repair of mechanika, as well as the drafting of schematics and the assembly of new devices. Check: works much the same as any other Craft skill with exceptions — to begin with, any character who wishes to use a mechanika device must make a Craft (mechanika) check to properly activate it, and a failure by 5 or more damages the device's accumulator. Task DCs: activate a common mechanika device 6; replace an empty accumulator with a fresh one 8; extract a burned-out accumulator 12; remove and replace a rune plate 15 (failing by 5 or more damages the arcane conduits); modifiers: +5 complex mechanika (two or more functions), +15 unique mechanika, +5 foreign construction or design, –5 for a familiar item. Assembly of a mechanika item has a base DC of 15 modified by the item's complexity (a pre-fabricated schematic eliminates the increase) and takes a number of days equal to the components in its construction. Drafting a schematic costs 1/20th the item's theoretical cost and 1 XP per component, and takes 1 day per component. Reverse engineering a mechanikal item is base DC 20, modified by the number of components, the item's condition, and other complicating factors. To make or repair a mechanika item the character must be an arcane spellcaster with access to mechanik's tools (bodgers are the exception for repairs — see the bodger class); a mechanik's shop costs 1,000 gp and grants a +2 competence bonus on Craft (mechanika) checks. Synergy: 5 or more ranks in Knowledge (mechanika) give a +2 bonus on Craft (mechanika) checks to draft a schematic; 5 or more ranks here give a +2 bonus on Appraise checks related to mechanikal devices. Class skill for arcane mechaniks, bodgers, and wizards.",
    source: `${SKILLS} — Craft (mechanika) (pp. 146–148)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-small-arms",
    name: "Craft (small arms)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: false,
    description:
      "Familiarity with the workings of firearms — how to load and care for them. Check: a successful check is required to load a firearm; reloading takes a number of standard actions and a check depending on the type of firearm, and reloading actions provoke attacks of opportunity. If the check succeeds, the weapon is reloaded after the necessary actions are spent; if the check fails or the process is interrupted, reloading must begin anew, and if the check is failed by 5 or more, the ammunition is ruined. (Cleaning and loading small arms — pistols and rifles — is this skill's job; constructing one from scratch is Craft (gunsmithing).) Synergy: 5 or more ranks in Craft (gunsmithing) give a +2 bonus on Craft (small arms) checks; 5 or more ranks here give a +2 bonus on Appraise checks related to firearms. Class skill for arcane mechaniks, bodgers, fighters, gun mages, rangers, paladins, rogues, and war-bards.",
    source: `${SKILLS} — Craft (small arms) (p. 148)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-steam-engine",
    name: "Craft (steam engine)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: true,
    description:
      "The exacting art of constructing steam engines and steam turbines. Check: follows the standard guidelines of the Craft skill, with construction and repair DCs by complexity — simple steam engine (little more than a boiler with a narrow steam vent) DC 15, 300 gp; complex steam engine (piston engines, as used in locomotives and steamboats and to power basic labor 'jacks) DC 25, 600 gp; advanced steam engine (miniaturization and tremendous power, as in warcaster armor and the engines of warjacks) DC 35+, 1,200+ gp. Synergy: 5 or more ranks give a +2 bonus on Appraise checks related to steam engines. Class skill for arcane mechaniks and bodgers.",
    source: `${SKILLS} — Craft (steam engine) (p. 148)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "craft-tools",
    name: "Craft (tools)",
    ruleset: "iron_kingdoms",
    keyAbility: "int",
    trainedOnly: false,
    description:
      "Making simple tools or devices to help with a manual task — such as a set of key blanks or a magnet on a stick. A simple tool provides a +1 circumstance bonus (+2 if masterwork) on checks for which a tool is reasonable, including Climb, Craft, Disable Device, Listen, Open Lock, Profession, and Use Rope, and perhaps even Balance, but not skills such as Disguise or Gather Information; a character cannot make tools to aid the Craft (tools) skill itself. Check: simple tool DC 10, 5 gp (each tool weighs about 1/2 lb.); with 5 or more ranks the character can make toolkits (DC 15, 50 gp) that give a circumstance bonus on all checks for a particular skill; clockwork toolkits (DC 25, 500 gp) also need 6 ranks in Craft (clockwork), mechanikal toolkits (DC 25, 450 gp) need 10 ranks here and 8 ranks in Craft (mechanika), and a mechanikal device takes DC 20 with 5 ranks in Craft (mechanika). Synergy: 5 or more ranks give a +2 bonus on related Appraise checks.",
    source: `${SKILLS} — Craft (tools) (pp. 148–149)`,
    sourceUrl: IKCG_PATH,
  },
  {
    id: "jack-handling",
    name: "Jack Handling",
    ruleset: "iron_kingdoms",
    keyAbility: "cha",
    trainedOnly: true,
    description:
      "Conveying simple and complex instructions to steamjacks; steamos, junkers, mechaniks, and 'jack handlers use this skill. Handle a steamjack: commanding a steamjack to perform a task that it knows — handling is automatic for a designated controller with whom the 'jack is familiar (familiarity is gained after one week of working with the 'jack); until the 'jack becomes accustomed to a new handler, the handler must make a 'Jack Handling check every time he issues an order and is considered to be pushing the 'jack. \"Push\" a steamjack: getting it to perform a task that it doesn't know, to accept orders from an unfamiliar handler, or to march or hustle; if the check succeeds, the steamjack performs the task on its next action. A check is otherwise needed only when the command comes from an unfamiliar handler, is overly complicated, or would violate a steamjack's built-in rules (the command would damage or harm the steamjack, force it to ignore attacks upon it, render it inoperative, or harm its handler). Action: handling a steamjack is a move action, while pushing a steamjack is a full-round action; using hand signals increases the DC by 5, while yelling and hitting the 'jack or calling it by name decreases the DC by 5; for particularly complicated tasks with specific times, the handler must spend half the time ordering the 'jack through the task. Try again: yes — if a 'jack does not follow the instructions, the handler can attempt to persuade it again in the following round. Special: a warcaster never needs to make 'Jack Handling checks while commanding 'jacks under his control. Untrained: an arcane mechanik or bodger with no ranks in 'Jack Handling can use a Charisma check to handle and push a steamjack. (The book's Table 2-15 lists this skill's key ability as Wisdom; the skill's own write-up header and untrained rule are Charisma-based, and the write-up governs — the same convention as Sorcery & Steam's Munitions.)",
    source: `${SKILLS} — 'Jack Handling (p. 150)`,
    sourceUrl: IKCG_PATH,
  },
];
