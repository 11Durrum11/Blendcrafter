// Dragon Magazine #348 (October 2006) — template draft: 4 records.
// THREE from "Bloodlines: Vampire Variants" (Michael J. Montesano),
// pp. 36-47 (article header in the OCR stream reads "Variant
// Vampires"): SAVAGE VAMPIRE, SHADOW VAMPIRE, TERROR VAMPIRE — each a
// full acquired template printed with a complete "Creating a …"
// block and an example creature. ONE more from the Vecna article's
// "Kas's Legacy" sidebar (p. 28): the KASIAN VAMPIRE, printed as prose
// adjustments to the standard vampire template rather than a full
// template block — staged as a fourth template record and FLAGGED in
// SCREENING.md for Shaun's call (pull it to reference if he rules the
// sidebar is flavor, not a template).
// Completed-TemplateDefinition form per the issue-326/336 precedent.
// Every CR/LA figure, ability increase, DR line, resistance, and save
// formula below was read from the archive.org djvu OCR stream's
// template blocks and cross-checked against the three printed example
// stat blocks (ogre savage vampire CR 4; 5th-level human fighter
// shadow vampire CR 7; 7th-level elf sorcerer terror vampire CR 10 —
// all three CRs reconcile exactly with base CR + the template's CR
// modifier). ⚠️ APOC: staged as printed — Shaun's APOC undead house
// rules (maximized hit points, +4 to withstand turning/control
// stacking with published turn resistance, re-roll each round) apply
// ON TOP at play and are NOT baked into these records. The shadow
// vampire's Plane of Shadow framing is lore, stripped; its shadow
// jump is a dimension-door effect (teleportation family), flagged in
// SCREENING.md. The terror vampire's spell-like ability table is
// summarized from the printed table's structure and the example
// creature (7 HD: cause fear, dancing lights, disguise self, ghost
// sound, silent image 3/day; displacement, misdirection 1/day); the
// full HD-by-HD table is transcribed in reference.md as far as the
// OCR stream preserves it — see SCREENING.md.
// Feature descriptions are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { TemplateDefinition } from "@/engine/types";

const SRC_VAMP = "Dragon Magazine #348 — Bloodlines: Vampire Variants (Michael J. Montesano), pp. 36-47";
const SRC_KAS = "Dragon Magazine #348 — Core Beliefs: Vecna: Kas's Legacy sidebar (Sean K. Reynolds and Samuel D. Weiss), p. 28";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function T(seed: Partial<TemplateDefinition> & Pick<TemplateDefinition, "id" | "name" | "summary">): TemplateDefinition {
  return {
    ruleset: "core",
    timing: "acquired",
    source: SRC_VAMP,
    sourceUrl: SRC_URL,
    crModifier: 2,
    levelAdjustment: 8,
    prerequisites: [],
    patches: [],
    ...seed,
  } as TemplateDefinition;
}

export const DRAGON_348_TEMPLATES: TemplateDefinition[] = [
  T({
    id: "savage-vampire",
    name: "Savage Vampire",
    crModifier: 2,
    levelAdjustment: 6,
    prerequisites: [{ note: "Acquired template; can be added to any fey, giant, humanoid, or monstrous humanoid creature (the base creature)." }],
    abilityModifiers: { str: 6, dex: 4, cha: 4 },
    summary:
      "A feral, brutish strain of vampirism: the creature's type changes to undead (augmented subtype), all Hit Dice become d12s, natural armor increases by +4, and it gains two claw attacks carrying energy drain, blood drain, zombie spawn in place of create spawn, the children of the wild and a druid-like wild shape, damage reduction 10/magic, fast healing 3, resistance to acid 10, cold 10, and fire 10, scent, +2 turn resistance, and no coffin — it rests in any place of absolute darkness. Ability increases: Str +6, Dex +4, Cha +4 (no Constitution score as undead). Challenge rating: base +2. Level adjustment: base +6. Example in the article: ogre savage vampire, CR 4.",
    features: [
      {
        key: "savage-vampire-basics",
        name: "Savage Vampire Basics",
        description:
          "Size and type: the creature's type changes to undead and it gains the augmented subtype; do not recalculate base attack bonus, saves, or skill points; size is unchanged. Hit Dice: increase all current and future Hit Dice to d12s. Alignment: always evil (any). Armor Class: the base creature's natural armor bonus increases by +4. Attack: the savage vampire retains all the attacks of the base creature and also gains two claw attacks if it didn't already have them; if the base creature can use weapons it retains this ability, and a creature with natural weapons retains those weapons. A savage vampire fighting without weapons uses either its claw attacks or its primary natural weapon (if any); a savage vampire armed with a weapon uses its claws or a weapon, as it desires. Damage: claw damage by size — Fine 1, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 2d8, Colossal 4d6; creatures that have other kinds of natural weapons retain their old damage values or use the table value, whichever is better. Advancement: by character class.",
        category: "trait",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "savage-vampire-attacks",
        name: "Blood Drain, Energy Drain, and Zombie Spawn",
        description:
          "Blood Drain (Ex): as the vampire entry in the Monster Manual (p. 250) — suck blood from a living victim with its fangs on a successful grapple check; if it pins the foe it drains blood, dealing 1d4 points of Constitution drain each round the pin is maintained, gaining 5 temporary hit points on each such successful attack. Energy Drain (Su): living creatures hit by a savage vampire's claw attack (or any other natural weapon it possesses) gain one negative level; for each negative level bestowed, the savage vampire gains 5 temporary hit points (the Fortitude save to remove a negative level is Charisma-based, as standard). Zombie Spawn (Su): any creature slain by a savage vampire's energy drain rises as a zombie 1d4 hours later; spawn are under the command of the savage vampire that created them and remain enslaved until its death, and they do not possess any of the abilities they had in life.",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "savage-vampire-children-wild-shape",
        name: "Children of the Wild and Wild Shape",
        description:
          "Children of the Wild (Su): savage vampires command the rabid, starving creatures of the world and once per day can call forth 1d2 brown bears, 1d4 Medium constrictor snakes, 1d4 crocodiles, 1d6+1 rat swarms, 1d4 Large sharks, or a pack of 3d6 hyenas as a standard action (if the base creature is not terrestrial, this power might summon other creatures of similar power). These creatures arrive in 2d6 rounds and serve the savage vampire for up to 1 hour; creatures will not answer a call that would force them to enter an environment they cannot survive in (thus, sharks will not come to a savage vampire on land). Wild Shape (Su): a savage vampire can transform into an animal as if it were a druid of a level equal to 10 + half the savage vampire's Hit Dice; regardless of its HD, it cannot use wild shape to turn into elementals or plants (for example, a 15-HD savage vampire could wild shape into any Huge, Large, Medium, Small, or Tiny animal five times per day). Any animal a savage vampire transforms into looks sickly and starving. APOC note: Children of the Wild is printed as a calling effect — staged as printed, flagged in SCREENING.md (summoning/calling under severed-planar canon).",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "savage-vampire-qualities",
        name: "Damage Reduction, Fast Healing, Resistances, Unbound",
        description:
          "Damage Reduction (Su): damage reduction 10/magic; a savage vampire's natural weapons are treated as magic weapons for the purpose of overcoming damage reduction. Fast Healing (Ex): a savage vampire heals 3 points of damage each round so long as it has at least 1 hit point; if reduced to 0 hit points in combat it automatically assumes a swift animal form and attempts to escape, and this form cannot be changed until it heals back to at least 1 hit point — it can still be damaged in this animal form, keeping track of all additional damage until it can rest; once at rest in an appropriately dark place it is helpless, regaining 1 hit point per hour until it is back to 0 hit points, at which point it is no longer helpless and resumes healing at 3 hit points per round. Resistances (Ex): resistance to acid 10, cold 10, and fire 10. Scent (Ex): the savage vampire can track creatures by scent. Turn Resistance (Ex): +2 turn resistance (before the APOC house-rule +4, which applies on top at play). Unbound: savage vampires do not have coffins like normal vampires and are capable of resting in any area of absolute darkness. Feats: savage vampires gain Alertness, Combat Reflexes, Run, and Track as bonus feats, assuming the base creature meets the prerequisites and doesn't already have these feats. Skills: +8 racial bonus on Hide, Intimidate, Listen, Move Silently, Search, Spot, and Survival checks; otherwise same as the base creature.",
        category: "special-quality",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "shadow-vampire",
    name: "Shadow Vampire",
    crModifier: 2,
    levelAdjustment: 10,
    prerequisites: [{ note: "Acquired template; can be added to any humanoid or monstrous humanoid creature (the base creature)." }],
    abilityModifiers: { str: 4, dex: 6, int: 2, wis: 2, cha: 4 },
    summary:
      "A vampire attuned to darkness and shadow: type changes to undead (augmented subtype), all Hit Dice become d12s, natural armor increases by +6, and it gains a slam attack carrying Strength damage, blood drain, create spawn, dominate, the ability to summon shadows, darkness as a spell-like ability, damage reduction 10/silver and magic, fast healing 2 (5 in shadowy illumination or darkness), resistance to cold 10 and electricity 10, +4 turn resistance, shadow form, and shadow jump — offset by light weakness. Ability increases: Str +4, Dex +6, Int +2, Wis +2, Cha +4 (no Constitution score as undead). Challenge rating: base +2. Level adjustment: base +10. Example in the article: shadow vampire, 5th-level human fighter, CR 7.",
    features: [
      {
        key: "shadow-vampire-basics",
        name: "Shadow Vampire Basics",
        description:
          "Size and type: the creature's type changes to undead and it gains the augmented subtype; do not recalculate base attack bonus, saves, or skill points; size is unchanged. Hit Dice: increase all current and future Hit Dice to d12s. Alignment: always evil (any). Armor Class: the base creature's natural armor bonus increases by +6. Attack: the shadow vampire retains all the attacks of the base creature and also gains a slam attack if it didn't already have one; weapon use and natural weapons are retained as for the savage vampire. Damage: slam damage by size — Fine 1, Diminutive 1d2, Tiny 1d3, Small 1d4, Medium 1d6, Large 1d8, Huge 2d6, Gargantuan 2d8, Colossal 4d6; creatures with other natural weapons retain their old damage or use the table value, whichever is better. Advancement: by character class.",
        category: "trait",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "shadow-vampire-attacks",
        name: "Blood Drain, Create Spawn, and Strength Damage",
        description:
          "Blood Drain (Ex) and Create Spawn (Su): as the vampire entry in the Monster Manual (p. 250) — blood drain deals 1d4 points of Constitution drain per round while a pin is maintained, gaining 5 temporary hit points per successful attack. Strength Damage (Su): living creatures hit by a shadow vampire's slam attack (or any other natural weapon it possesses) take 1 point of Strength damage; for each point of Strength damage dealt, the shadow vampire gains 5 temporary hit points. A shadow vampire can use its Strength damage ability once per round.",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "shadow-vampire-dominate-summon",
        name: "Dominate and Summon Shadows",
        description:
          "Dominate (Su): a shadow vampire can crush an opponent's will just by looking into his or her eyes — similar to a gaze attack, except that the shadow vampire must use a standard action and those merely looking at it are not affected. Anyone the shadow vampire targets must succeed on a Will save (DC 10 + 1/2 the shadow vampire's HD + its Charisma modifier) or fall instantly under its influence as though by a dominate person spell (caster level 12th); the ability has a range of 30 feet. Summon Shadows (Su): a shadow vampire can summon 1d4+1 shadows to serve it, once per day; these creatures arrive in 2d6 rounds and serve the shadow vampire for up to 1 hour. APOC note: Summon Shadows is printed as a summoning effect — staged as printed, flagged in SCREENING.md (summoning spells do not work in APOC).",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "shadow-vampire-qualities",
        name: "Darkness, Fast Healing, Shadow Form, Shadow Jump, Light Weakness",
        description:
          "Darkness (Sp): a shadow vampire can cast darkness a number of times per day equal to its Charisma modifier (minimum 1/day); caster level equals the creature's HD. Damage Reduction (Su): damage reduction 10/silver and magic; natural weapons are treated as magic weapons for overcoming damage reduction. Fast Healing (Ex): heals 2 points of damage each round so long as it has at least 1 hit point, increasing to 5 points each round if it is in an area of shadowy illumination or darker; if reduced to 0 hit points it automatically assumes shadow form and attempts to escape, must reach its coffin home within 2 hours or be utterly destroyed (it can travel up to 9 miles in 2 hours), takes no effect from additional damage while forced into shadow form, and once at rest in its coffin is helpless, regaining 1 hit point after 1 hour and then resuming healing at the normal rate per round. Light Weakness: besides the vulnerability to true sunlight that all vampires share, shadow vampires are sickened by exposure to magical sunlight (such as daylight), and take a -2 penalty on saving throws against all light-related effects, such as spells with the light descriptor or alchemical items like flash pellets (Complete Adventurer, p. 118). Shadow Form (Su): as a standard action, a shadow vampire can change into an animate shadow, gaining a +4 competence bonus on Escape Artist, Hide, and Move Silently checks and concealment; this shadowy concealment is not negated by see invisibility but is counteracted by true seeing, and standing within the radius of a daylight spell or in bright natural sunlight temporarily suppresses the concealment effect. Shadow Jump (Su): a shadow vampire can travel between shadows as if by means of a dimension door spell, the transport beginning and ending in an area with at least some shadow, up to a total of 100 feet each day (a single 100-foot jump, two 50-foot jumps, or any number of smaller leaps up to the total). Resistances (Ex): resistance to cold 10 and electricity 10. Turn Resistance (Ex): +4 turn resistance (before the APOC house-rule +4, which applies on top at play). Feats: Alertness, Combat Reflexes, Dodge, Improved Initiative, and Lightning Reflexes as bonus feats, assuming prerequisites are met and the feats not already possessed. Skills: +8 racial bonus on Bluff, Hide, Listen, Move Silently, Search, and Spot checks; otherwise same as the base creature. APOC note: shadow jump is a dimension-door (teleportation-family) effect and the article's Plane of Shadow framing is stripped as lore — see SCREENING.md.",
        category: "special-quality",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "terror-vampire",
    name: "Terror Vampire",
    crModifier: 3,
    levelAdjustment: 10,
    prerequisites: [{ note: "Acquired template; can be added to any humanoid or monstrous humanoid creature (the base creature)." }],
    abilityModifiers: { dex: 6, int: 2, wis: 2, cha: 8 },
    summary:
      "A vampire that hungers for fear as much as blood, a master of horror and illusion: type changes to undead (augmented subtype), all Hit Dice become d12s, natural armor increases by +6, and it gains a slam attack carrying Wisdom damage, blood drain, create spawn, an eyebite gaze, spell-like abilities by Hit Dice, damage reduction 10/silver and magic, fast healing 5, gaseous form, resistance to cold 10 and fire 10, +4 turn resistance, and vampiric repression — the power to suppress all its vampiric traits and pass as a normal mortal for a number of rounds per day equal to twice its Charisma modifier. Ability increases: Dex +6, Int +2, Wis +2, Cha +8 (no Constitution score as undead). Challenge rating: base +3. Level adjustment: base +10. Example in the article: terror vampire, 7th-level elf sorcerer, CR 10.",
    features: [
      {
        key: "terror-vampire-basics",
        name: "Terror Vampire Basics",
        description:
          "Size and type: the creature's type changes to undead and it gains the augmented subtype; do not recalculate base attack bonus, saves, or skill points; size is unchanged. Hit Dice: increase all current and future Hit Dice to d12s. Alignment: always evil (any). Armor Class: the base creature's natural armor bonus increases by +6. Attack and Damage: as the shadow vampire — the terror vampire retains all the base creature's attacks and gains a slam attack if it didn't already have one, with slam damage by size as on the shadow vampire's table (Medium 1d6, Large 1d8, and so on). Advancement: by character class.",
        category: "trait",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "terror-vampire-attacks",
        name: "Blood Drain, Create Spawn, and Wisdom Damage",
        description:
          "Blood Drain (Ex) and Create Spawn (Su): as the vampire entry in the Monster Manual (p. 250) — blood drain deals 1d4 points of Constitution drain per round while a pin is maintained, gaining 5 temporary hit points per successful attack. Wisdom Damage (Su): living creatures hit by a terror vampire's slam attack (or any other natural weapon it possesses) take 1d4 points of Wisdom damage; for each point of Wisdom damage dealt, the terror vampire gains 5 temporary hit points. A terror vampire can use its Wisdom damage ability once per round.",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "terror-vampire-eyebite-sla",
        name: "Eyebite and Spell-Like Abilities",
        description:
          "Eyebite (Su): a terror vampire can cripple an opponent's mind just by looking into his or her eyes — similar to a gaze attack, except that the terror vampire must use a standard action and those merely looking at it are not affected. Anyone the terror vampire targets must succeed on a Will save (DC 10 + 1/2 the terror vampire's HD + its Charisma modifier) or immediately be affected as if by the spell eyebite (caster level 12th); the ability has a range of 30 feet. Special Actions saves generally have a DC of 10 + 1/2 the terror vampire's HD + its Charisma modifier unless noted otherwise. Spell-Like Abilities: a terror vampire with a Charisma score of 8 or higher has one or more spell-like abilities depending on its Hit Dice, as indicated on the article's Terror Vampire Special Abilities table; the abilities are cumulative (the article's example: a derro terror vampire, 3 HD, can use dancing lights, disguise self, and ghost sound each 3 times per day), usable once per day unless otherwise noted, with caster level equal to the creature's HD and Charisma-based save DCs. The article's example creature (7 HD) carries: 3/day — cause fear, dancing lights, disguise self, ghost sound, silent image; 1/day — displacement, misdirection. The full printed HD table is transcribed in the pack's reference.md as far as the OCR stream preserves it.",
        category: "special-attack",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
      {
        key: "terror-vampire-qualities",
        name: "Fast Healing, Gaseous Form, Resistances, Vampiric Repression",
        description:
          "Damage Reduction (Su): damage reduction 10/silver and magic; natural weapons are treated as magic weapons for overcoming damage reduction. Fast Healing (Ex): heals 5 points of damage each round so long as it has at least 1 hit point; if reduced to 0 hit points it automatically assumes gaseous form and attempts to escape, must reach its coffin home within 2 hours or be utterly destroyed (it can travel up to 9 miles in 2 hours), takes no effect from additional damage while in gaseous form, and once at rest in its coffin is helpless, regaining 1 hit point after 1 hour and then resuming healing at 5 hit points per round. Gaseous Form (Su): as a standard action, a terror vampire can assume gaseous form at will as the spell (caster level 5th), but it can remain gaseous indefinitely and has a fly speed of 20 feet with perfect maneuverability. Resistances (Ex): resistance to cold 10 and fire 10. Turn Resistance (Ex): +4 turn resistance (before the APOC house-rule +4, which applies on top at play). Vampiric Repression (Su): a terror vampire can repress all of its vampiric traits and abilities and appear to be a normal mortal for a number of rounds equal to twice its Charisma modifier every day (minimum 2); during this time it is unaffected by its normal vampiric weaknesses but also loses the benefits of its special attacks and qualities (for example, it could stand in full daylight, but would lose its special attacks, fast healing, and similar abilities). It is still undead while this power is in effect and can be turned as normal, and the ability does not deceive spells like detect undead. It can activate and deactivate this ability as a free action and may use it any number of times per day so long as the total rounds used do not exceed twice its Charisma modifier. Feats: Alertness, Improved Initiative, Lightning Reflexes, and Persuasive as bonus feats, assuming prerequisites are met and the feats not already possessed. Skills: +8 racial bonus on Bluff, Hide, Intimidate, Listen, Move Silently, Search, Sense Motive, and Spot checks; otherwise same as the base creature.",
        category: "special-quality",
        source: SRC_VAMP,
        sourceUrl: SRC_URL,
      },
    ],
  }),
  T({
    id: "kasian-vampire",
    name: "Kasian Vampire",
    source: SRC_KAS,
    crModifier: 2,
    levelAdjustment: 8,
    prerequisites: [{ note: "Variant of the standard vampire template (Monster Manual), printed as prose adjustments in the \"Kas's Legacy\" sidebar, p. 28 — apply the vampire template with the changes in this record. ⚠️ Staged from a sidebar, not a full template block; flagged in SCREENING.md. CR and LA are the standard vampire template's (+2 / +8); the sidebar states neither figure." }],
    abilityModifiers: { str: 8 },
    summary:
      "Vampires sired by Kas the Bloody-Handed, Vecna's vampiric lieutenant, carrying a legacy of his nature and the magic Vecna used to make him: as the standard vampire template except Strength increases by +8 (instead of the template's normal +6), the vampire gains electricity resistance 30, it gains 5 temporary hit points whenever a weapon it wields that bestows negative levels (such as a nine lives stealer or life drinker) or causes excessive bleeding (such as a weapon with the wounding property) successfully triggers that ability — just as if it had used its own blood drain or energy drain — and while holding the Sword of Kas its fast healing increases to 10. Its control over others is limited: spawn it creates are bound with a geas of cooperation rather than utter enslavement, and its dominate ability works like suggestion rather than dominate person, which has kept the number of Kasian vampires low.",
    features: [
      {
        key: "kasian-vampire-deltas",
        name: "Kasian Vampire Adjustments",
        description:
          "Apply the standard vampire template (Monster Manual) with these changes. Ability increase: Strength +8 instead of the vampire template's normal +6 (other vampire ability increases as the standard template). Resistances: electricity resistance 30 (in place of / in addition to the standard vampire resistances as printed in the sidebar — the sidebar lists electricity resistance 30 without restating the standard cold/electricity line; carried as printed and flagged in SCREENING.md). Weapon-fed healing: when using a weapon that bestows negative energy levels (such as a nine lives stealer or life drinker) or causes excessive bleeding (such as a weapon with the wounding property), the vampire gains 5 temporary hit points whenever one of those abilities successfully triggers, just as if it had used its own blood drain or energy drain ability on the target. Sword of Kas: when holding the Sword of Kas, the vampire's fast healing increases to 10. Limited control: spawn created by a Kasian vampire are bound with a geas of cooperation rather than utter enslavement, and its dominate ability works like suggestion rather than dominate person — this drawback makes Kasian vampires less likely to create spawn powerful enough to challenge them (as there is the risk of betrayal), which has kept their numbers low.",
        category: "trait",
        source: SRC_KAS,
        sourceUrl: SRC_URL,
      },
    ],
  }),
];
