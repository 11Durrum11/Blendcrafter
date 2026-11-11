// Dragon Magazine #342 (April 2006) — spell draft: 29 spells.
// THREE new divine spells from "Core Beliefs: Olidammara" (Sean K.
// Reynolds), pp. 41-42. TWENTY-TWO new initiate spells from "The Power
// of Faith" (John E. Ling, Jr. and the Dragon staff), pp. 52-56 — the
// article prints 23 spell blocks; the 23rd, disguise undead, is NOT
// staged: the spell already lives in the catalog from the Spell
// Compendium, and the #342 printing's addition (Initiate of Wee Jas 2
// access) is carried in the Initiate of Wee Jas feat record instead
// (see MANIFEST.md). FOUR spells from "Spellcraft: Alien Blessings"
// (Eric Cagle), pp. 74-76; the article's fifth spell, brain slave of
// Ilsensine, is a Conjuration (Summoning) spell and screens to
// reference under the standing APOC ruling (see SCREENING.md and
// reference.md).
// ⚠️ LEVEL KEYS: the initiate spells' printed Level lines read
// "Initiate of <Deity> N" and are keyed exactly as printed. Those list
// names do NOT exist in the live CASTING_PROFILES or among live spell
// level keys — integration must add casting profiles for them (or the
// coordinator rules another keying); flagged in SCREENING.md. The
// Olidammara spells key to Cleric/Bard as printed, with the
// Olidammara-only restriction carried in `note`.
// ⚠️ PRINT CONFLICTS (spell blocks govern; all disclosed in
// MANIFEST.md): bane, greater — feat table 4th vs block Initiate of
// Hextor 3; Vecna's courier — feat table 3rd vs block Initiate of
// Vecna 4; spontaneous combustion — feat table 2nd vs block Initiate
// of Obad-Hai 3; the three Olidammara spells — Initiate of Olidammara
// feat table 1st/2nd/3rd vs their Core Beliefs blocks (Clr 2/4/5).
// Every header was verified against rendered page images (magazine
// pp. 41-42, 52-56, 74-76); the image governs over the OCR stream.

import type { SpellDefinition } from "@/engine/types";

const SRC_CORE = "Dragon Magazine #342 — Core Beliefs: Olidammara (Sean K. Reynolds), pp. 32-43";
const SRC_FAITH = "Dragon Magazine #342 — The Power of Faith: Initiate Feats of the Core Deities (John E. Ling, Jr. and the Dragon staff), pp. 49-56";
const SRC_ALIEN = "Dragon Magazine #342 — Spellcraft: Alien Blessings (Eric Cagle), pp. 74-77";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_FAITH,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_342_SPELLS: SpellDefinition[] = [
  // ---- Core Beliefs: Olidammara (3) ----
  C({
    id: "festival-feast",
    name: "Festival Feast",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Bard: 2, Cleric: 2 },
    components: "V, S, DF",
    castingTime: "10 minutes",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Food and drink to feed three humans/level for one meal",
    duration: "2 or 24 hours; see text",
    source: SRC_CORE,
    note: "Available only to worshipers of Olidammara (printed level line: Brd 2/Clr 2 (Olidammara)); also granted by the Initiate of Olidammara feat in this issue.",
    summary:
      "You create a meal of good food, wine, ale, and beer. The food smells and tastes wonderful, while being nourishing and satisfying to eat; the drinks are tasty but not strong enough to cause intoxication. The food and drink so created decays and becomes inedible within 2 hours if it is not consumed, although it can be kept fresh for 24 hours by casting a purify food and drink spell on it.",
  }),
  C({
    id: "olidammaras-bard-spell",
    name: "Olidammara's Bard Spell",
    levels: { Cleric: 4 },
    components: "V, S, DF",
    castingTime: "10 minutes",
    duration: "Instantaneous",
    source: SRC_CORE,
    note: "Available only to worshipers of Olidammara (printed level line: Clr 4 (Olidammara)); also granted by the Initiate of Olidammara feat in this issue.",
    summary:
      "Casting this spell allows you to prepare and cast a limited number of bard spells as if they were cleric spells. Each casting lets you prepare up to three levels of bard spells (these cannot be combined to prepare bard spells higher than 3rd level; a cantrip counts as 1/2 level for this purpose). You may spontaneously convert these prepared bard spells to cure or inflict spells just as you would any other non-domain spell. These spells are considered divine spells; you use your Wisdom modifier for the DC instead of your Charisma modifier, and they always have a verbal component (either singing or music) just like an actual bard spell. If the bard spell has a material component or XP cost, you must pay that cost when you cast it. Normally you can only prepare common bard spells (those listed in the Player's Handbook); you may prepare more exotic bard spells (such as unique spells or spells from other books) if you have a scroll of the spell or a bard on hand who knows the spell — preparing from a scroll destroys the scroll, but preparing with a bard's help does not expend any of the bard's spell slots.",
  }),
  C({
    id: "olidammaras-carapace",
    name: "Olidammara's Carapace",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Cleric: 5 },
    components: "V, S",
    targetOrArea: "5-ft.-radius protective carapace",
    duration: "Instantaneous and 1 round (see text)",
    source: SRC_CORE,
    note: "Available only to worshipers of Olidammara (printed level line: Clr 5 (Olidammara)); also granted by the Initiate of Olidammara feat in this issue. APOC: the escape option is a dimension door effect (teleportation) — staged as printed, flagged in SCREENING.md.",
    summary:
      "This spell functions like wall of stone, except it always forms a 5-foot-radius immobile hemispherical shell around you that fuses with the ground. Before the beginning of your next turn, you may dimension door away from inside the shell as a swift action, leaving the shell behind to confuse and distract your enemies; if you do not, the shell remains for 1 round and then crumbles.",
  }),
  // ---- The Power of Faith: initiate spells (22) ----
  C({
    id: "bane-greater",
    name: "Bane, Greater",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { "Initiate of Hextor": 3 },
    range: "50 ft.",
    targetOrArea: "All enemies within 50 ft.",
    duration: "1 minute/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: "Print conflict: the Initiate of Hextor feat table lists this spell at 4th level; the spell's own block (Initiate of Hextor 3) governs.",
    summary:
      "This spell functions like bane, except that the penalty is equal to -1 per three caster levels, to a maximum of -5.",
  }),
  C({
    id: "bless-greater",
    name: "Bless, Greater",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { "Initiate of Heironeous": 3, "Initiate of Pelor": 3 },
    range: "50 ft.",
    targetOrArea: "All allies within 50 ft.",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    note: "The feat tables' one-line blurbs describe the bonus as '+1 per 4 levels'; the spell's own block (per three caster levels, maximum +5) governs.",
    summary:
      "This spell functions like bless except that the bonus is equal to +1 per three caster levels, to a maximum of +5.",
  }),
  C({
    id: "cause-fear-greater",
    name: "Cause Fear, Greater",
    school: "Necromancy",
    descriptors: ["Fear", "Mind-Affecting"],
    levels: { "Initiate of Erythnul": 2, "Initiate of Nerull": 2 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One living creature with 15 or fewer HD; see text",
    duration: "1d4 rounds or 1 round; see text",
    savingThrow: "Will partial",
    spellResistance: "Yes",
    summary:
      "This spell is as cause fear, except that you can affect one creature whose Hit Dice are equal to or fewer than yours, to a maximum of 15 HD. Creatures with more Hit Dice than you or with 16 or more HD are immune to this spell.",
  }),
  C({
    id: "champion-of-kord",
    name: "Champion of Kord",
    levels: { "Initiate of Kord": 4 },
    range: "Touch",
    targetOrArea: "One creature",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "Kord empowers the target to perform great acts of strength. The target receives a sacred bonus equal to your caster level (maximum +10) on all bull rush, disarm, grapple, overrun, sunder, and trip attempts. The target receives these bonuses on checks he initiates, as well as those made as a reaction to other creatures.",
  }),
  C({
    id: "erythnuls-slaughter",
    name: "Erythnul's Slaughter",
    levels: { "Initiate of Erythnul": 5 },
    targetOrArea: "30-ft.-radius emanation around you",
    summary:
      "The bloody eye of Erythnul casts its gaze upon the battlefield. The melee weapons of all creatures within 30 feet of you have their threat ranges doubled, as per the spell keen edge. This spell affects both enemies and allies alike. In addition, creatures within the area of effect that are reduced to negative hit points cannot stabilize naturally: these creatures do not roll d% to become stable and automatically lose 1 hit point every round until they die at -10 hit points. A successful Heal check or magical healing can stabilize a creature as normal.",
  }),
  C({
    id: "immolate-the-wicked",
    name: "Immolate the Wicked",
    school: "Evocation",
    descriptors: ["Fire"],
    levels: { "Initiate of Pelor": 4 },
    duration: "1 round/level",
    spellResistance: "Yes",
    summary:
      "Pelor fills your turning checks with holy power. While under the effects of this spell, whenever you successfully turn an undead creature it bursts into flames in addition to being turned. These flames deal 2d6 points of damage per three caster levels, to a maximum of 10d6. Half the damage is fire damage, but the other half results directly from divine power and is therefore not subject to being reduced by resistance to fire-based attacks.",
  }),
  C({
    id: "kords-greeting",
    name: "Kord's Greeting",
    levels: { "Initiate of Kord": 2 },
    range: "Touch",
    targetOrArea: "One creature",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "Kord grants his favor to those who recklessly put faith in their own strength. For the duration of this spell, the target gains a +4 bonus on attack rolls while charging, rather than the normal +2. In addition, the target only takes a -1 AC penalty rather than the normal -2.",
  }),
  C({
    id: "kords-power-surge",
    name: "Kord's Power Surge",
    levels: { "Initiate of Kord": 1 },
    range: "Touch",
    targetOrArea: "One creature",
    duration: "1 round/level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "Kord temporarily infuses the target with great strength. The target receives an enhancement bonus to its Strength score equal to twice your caster level, maximum +10, that applies only when making skill and ability checks. After the spell expires, the target is fatigued for 1d4 minutes.",
  }),
  C({
    id: "mark-of-justice-lesser",
    name: "Mark of Justice, Lesser",
    school: "Necromancy",
    levels: { "Initiate of Heironeous": 2 },
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "Permanent; see text",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "This spell is identical to mark of justice except as indicated here. Choose one of the following three effects: a -3 decrease to an ability score (minimum 1); a -2 penalty on attack rolls, saves, ability checks, and skill checks; or each round, the target has a 25% chance to take no action, otherwise it acts normally.",
  }),
  C({
    id: "memory-jar",
    name: "Memory Jar",
    levels: { "Initiate of Boccob": 1 },
    range: "Touch",
    targetOrArea: "One creature",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "This spell allows the target to recall bits and pieces of knowledge she might otherwise forget. She receives a +1 competence bonus per two caster levels (maximum +5) on all knowledge-related checks made for the duration of the spell; this includes Knowledge skill checks, bardic knowledge, and similar abilities. In addition, the target may reroll one Knowledge skill check that it has failed within the last minute.",
  }),
  C({
    id: "nerulls-scythe",
    name: "Nerull's Scythe",
    school: "Conjuration",
    subschool: "Creation",
    levels: { "Initiate of Nerull": 3 },
    castingTime: "1 round",
    range: "0 ft.",
    targetOrArea: "One scythe",
    duration: "1 minute/level (see text)",
    summary:
      "You call forth a lesser aspect of Nerull's chosen weapon, 'Lifecutter.' This +1 keen scythe appears in your hands or at your feet (your choice). Nerull's scythe only functions at its full potential for a follower of Nerull; if a non-believer picks up the weapon, it is treated merely as a normal scythe.",
  }),
  C({
    id: "quicksand",
    name: "Quicksand",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Earth"],
    levels: { "Initiate of Obad-Hai": 3 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "5-ft. radius per 2 levels",
    duration: "Instantaneous",
    savingThrow: "Reflex negates (see text)",
    spellResistance: "None",
    summary:
      "With this spell, you create a patch of quicksand. The surface upon which you cast quicksand must be natural — rock, dirt, and so on. Any creature in the area of effect is entitled to a Reflex save to avoid the effects. For information on the effects of quicksand, see page 88 of the Dungeon Master's Guide.",
  }),
  C({
    id: "rage-mass",
    name: "Rage, Mass",
    levels: { "Initiate of Erythnul": 6 },
    components: "V, S",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One creature/level, no two of which can be more than 30 ft. apart",
    duration: "Concentration + 1d6 rounds",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    note: "The printed header lists no components line beyond the level/range/target shown in the article's compressed block; components, duration, save, and SR follow the base rage spell the block invokes ('works like rage, except that it affects multiple creatures').",
    summary: "Mass rage works like rage, except that it affects multiple creatures.",
  }),
  C({
    id: "research-aid",
    name: "Research Aid",
    levels: { "Initiate of Boccob": 4 },
    castingTime: "1 hour",
    duration: "1 day/level",
    summary:
      "Originally created by a servant of Boccob performing important research, Boccob now grants this spell to his most dedicated clerics. After casting this spell, your mind achieves a level of clarity that permits you to perform research at a faster pace. While this spell is active, you receive the following benefits: the casting time of legend lore and identify is halved; you gain a +5 circumstance bonus on Spellcraft checks made to research new spells; only half the normal amount of time is required to research a new spell; crafting magic items takes half the normal amount of time.",
  }),
  C({
    id: "retributive-strike",
    name: "Retributive Strike",
    school: "Abjuration",
    levels: { "Initiate of St. Cuthbert": 3 },
    duration: "1 round/level",
    summary:
      "This spell surrounds you with a flickering silver aura that seems to reach out to those nearby. While in effect, any adjacent opponent who successfully strikes you with a melee weapon provokes an attack of opportunity from you. This spell does not grant you the ability to make additional attacks of opportunity in 1 round. Opponents who take other actions that provoke attacks of opportunity draw them normally from those who threaten them.",
  }),
  C({
    id: "righteousness-of-heironeous",
    name: "Righteousness of Heironeous",
    levels: { "Initiate of Heironeous": 4 },
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "Heironeous aids you in defeating those who would do the most evil in the world. For the duration of this spell, you deal 2d4 points of damage against evil targets with your longsword rather than the normal 1d4 granted by the Initiate of Heironeous feat. If the target is an evil outsider, you instead deal an additional 2d6 points of damage. This bonus damage only applies to attacks made using a longsword.",
  }),
  C({
    id: "spontaneous-combustion",
    name: "Spontaneous Combustion",
    school: "Evocation",
    descriptors: ["Fire"],
    levels: { "Initiate of Obad-Hai": 3 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "1 creature or object",
    duration: "Instantaneous (see text)",
    savingThrow: "Reflex negates (see text)",
    spellResistance: "Yes",
    note: "Print conflicts: the Initiate of Obad-Hai feat table lists this spell at 2nd level (block prints 3rd; block governs), and the block's Saving Throw line is printed 'Yes (see text)' — the text makes the save a Reflex save to avoid the effect, carried here in standard form.",
    summary:
      "You point at a creature or object, causing white-hot flames to burst from the target. Creatures and attended objects receive a Reflex saving throw to avoid the affect; objects that are not flammable (such as a stone wall) are unaffected by this spell. The flames produced are much hotter than normal flames. Targets take 3d6 points of fire damage the first round, and 2d6 every subsequent round until the target extinguishes the flames. Creatures can attempt a new Reflex save every round to extinguish the flames. Subjects can opt to spend a full-round action that provokes an attack of opportunity to smother the flames, gaining a +4 bonus on their next Reflex save. Submerging the target completely in water automatically douses the flames. A creature can extinguish a burning unattended object as a full-round action that provokes an attack of opportunity.",
  }),
  C({
    id: "summer-breezes",
    name: "Summer Breezes",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: ["Air"],
    levels: { "Initiate of Obad-Hai": 1 },
    components: "V, DF",
    targetOrArea: "20-ft.-radius emanation from caster",
    duration: "1 hour/level",
    summary:
      "This spell conjures forth light, cool breezes around the caster. These breezes make hot environs much more comfortable, reducing the effective temperature within the area of effect by 20 degrees. In addition, the swirling nature of the winds makes it more difficult for creatures that rely on scent: within the area of effect, creatures using only the scent ability to target you suffer a 20% miss chance.",
  }),
  C({
    id: "true-turning",
    name: "True Turning",
    school: "Divination",
    levels: { "Initiate of Pelor": 1 },
    components: "V, DF",
    duration: "See text",
    summary:
      "Pelor's radiance inspires your holy symbol to the bane of undead. Your next turning check (if it is made before the end of the next round) gains a +4 insight bonus. In addition, you may add your cleric level x 2 (to a maximum of 10) to your turning damage.",
  }),
  C({
    id: "vecnas-courier",
    name: "Vecna's Courier",
    school: "Enchantment",
    descriptors: ["Mind-Affecting"],
    levels: { "Initiate of Vecna": 4 },
    castingTime: "1 round",
    range: "Touch",
    targetOrArea: "One intelligent creature",
    duration: "1 day/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: "Print conflict: the Initiate of Vecna feat table lists this spell at 3rd level; the spell's own block (Initiate of Vecna 4) governs.",
    summary:
      "Upon casting this spell, you can embed a message of up to 25 words + 1 word per caster level into the target's mind. The target cannot recall the message by any means short of a limited wish, wish, or miracle. When the target hears a predetermined word or phrase, he enters a trance-like state and recites the message word for word — even if he doesn't speak the language the message is in. After delivering the message, the target exits the trance, with no memory of having delivered the secret message.",
  }),
  C({
    id: "waves-of-destruction",
    name: "Waves of Destruction",
    school: "Evocation",
    descriptors: ["Water"],
    levels: { "Initiate of Obad-Hai": 5 },
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "40 ft. radius",
    duration: "Instantaneous",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    summary:
      "You call forth a large volume of water that batters the area. Salt water crashes down from above, drenching everything within the area of effect that is unprotected. The water automatically extinguishes nonmagical fires, as well as magical flames produced by spells of a lower level. All creatures within the area of effect take 1d6 points of nonlethal damage per caster level, to a maximum of 15d6, with a Reflex save for half damage. Creatures with the fire subtype take lethal damage instead.",
  }),
  C({
    id: "wrath-of-hextor",
    name: "Wrath of Hextor",
    levels: { "Initiate of Hextor": 4 },
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    summary:
      "Hextor's unholy rage and lust for battle provokes you to destroy those who most inspire his wrath. For the duration of this spell, you deal 2d4 points of damage against good targets with your flail rather than the normal 1d4 granted by the Initiate of Hextor feat. If the target is a good outsider, you instead deal an additional 2d6 points of damage. This bonus damage only applies to attacks made using a flail.",
  }),
  // ---- Spellcraft: Alien Blessings (4 of 5; brain slave screens to reference) ----
  C({
    id: "black-stench-of-laogzed",
    name: "Black Stench of Laogzed",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Cleric: 4, "Sorcerer/Wizard": 5 },
    components: "V, S, M/DF",
    targetOrArea: "Cloud spreads in a 20-ft. radius from you, 20 ft. high",
    duration: "1 round/level",
    savingThrow: "Fortitude half (see text)",
    source: SRC_ALIEN,
    note: "Arcane material component: a piece of a troglodyte's tail. One of the spells of the monstrous deities (Laogzed, god of the troglodytes); the article's deity table digests in reference.md.",
    summary:
      "You produce a cloud of utterly black, acidic, and horrific-smelling gas centered on you, a breath of foul air belched by the stinking god Laogzed himself. Living creatures in the cloud become nauseated, and take 1d6 points of acid damage per two caster levels per round (maximum 5d6); a successful Fortitude save negates the nausea and halves the damage. In addition, this gas obscures all sight, including darkvision, beyond 5 feet: a creature 5 feet away has concealment (attacks have a 20% miss chance), creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target), and creatures that rely on the scent ability cannot locate the caster while this spell is in effect. While you are immune to the stench and acid damage of your own spell, you are affected by this spell's darkness. Holding one's breath does not help to avoid the effects of this spell. A moderate wind (11+ mph) disperses this gas in 4 rounds; a strong or greater wind (21+ mph), such as from a gust of wind spell, disperses this gas in 1 round. A fireball, flame strike, or similar spell burns away the gas in its area of effect, and a wall of fire burns away the gas in the area into which it deals damage. This spell does not function underwater. For the duration of this spell, any stench or scent-based ability you or creatures in the area of effect possess is overwhelmed and does not function.",
  }),
  C({
    id: "nails-of-luthic",
    name: "Nails of Luthic",
    levels: { Cleric: 5 },
    components: "V, S",
    source: SRC_ALIEN,
    note: "The printed header carries no Saving Throw or Spell Resistance line. One of the spells of the monstrous deities (Luthic, goddess of the orcs).",
    summary:
      "The nails on your hands grow long, extremely tough, and turn a deep purple, black, similar to those of the orc goddess, Luthic. Your nails also exude a thick, black, viscous poison. These nails act as natural weapons that deal 1d6 points of damage and have a threat range of 19-20. You are considered armed while this spell is in effect. If you are Small, your nails deal 1d4 points of damage; if you are Large, they deal 1d8 points of damage. Add your Strength modifier to your attacks with these nails. Attacks with your transformed hands do not hinder your manual dexterity or spellcasting, although the nails do not replace any slam or claw attack you might possess for the duration of the spell. In addition, any creature that takes damage from your nails risks being poisoned — injury poison, Fortitude resists, with initial and secondary damage of 1d4 Dexterity.",
  }),
  C({
    id: "throwing-arm-of-iallanis",
    name: "Throwing Arm of Iallanis",
    levels: { Cleric: 4, Druid: 5 },
    components: "V, S, DF",
    range: "Touch",
    targetOrArea: "Creature touched",
    duration: "1 round/5 levels",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    source: SRC_ALIEN,
    note: "One of the spells of the monstrous deities (Iallanis, goddess of the giants).",
    summary:
      "The affected creature gains the ability to throw massive rocks. Upon casting this spell a giant stone materializes in one of the target's empty hands (the spell fails if the target does not have an empty hand). Although this rock would probably be too heavy to heft under normal conditions, the target can fling this projectile as a giant one size category larger than himself. The rock has a range increment and deals damage as noted: Medium target — 120 ft., 2d6; Large — 140 ft., 2d8; Huge — 160 ft., 3d6; Gargantuan — 180 ft., 3d8; Colossal — 200 ft., 4d6. The rock created by this spell cannot be used in any way other than to make a ranged attack. For every round this spell lasts a new rock materializes in one of the target's empty hands, which he is then capable of throwing on his next turn (up to a maximum of 4 rocks). If the target already possesses the rock throwing ability, he gains a +4 bonus on attacks made using the rocks created by this spell in addition to any racial bonuses to rock throwing. Creatures of Small size or smaller are beneath Iallanis's notice and gain no benefit from this spell.",
  }),
  C({
    id: "touch-of-blibdoolpoolp",
    name: "Touch of Blibdoolpoolp",
    levels: { Cleric: 3, Druid: 3 },
    components: "V, S, DF",
    duration: "1 min./level",
    source: SRC_ALIEN,
    note: "The printed header carries no Saving Throw or Spell Resistance line. One of the spells of the monstrous deities (Blibdoolpoolp, goddess of the kuo-toa).",
    summary:
      "Your hand turns into an enormous lobsterlike claw. This claw gives you a natural attack with reach and deals bludgeoning damage as indicated: Fine — 1 damage, 0 ft. reach, -12 size bonus; Diminutive — 1, 0 ft., -8; Tiny — 1d3, 5 ft., -4; Small — 1d4, 5 ft., +0; Medium — 1d6, 10 ft., +4; Large — 1d8, 15 ft., +8; Huge — 2d6, 20 ft., +12; Gargantuan — 2d8, 40 ft., +16; Colossal — 4d6, 60 ft., +20. If you attack only with the claw, making it your primary attack, the claw adds 1-1/2 times your Strength modifier to damage. The claw can also be used as a secondary attack in conjunction with a manufactured weapon; such secondary attacks do not interfere with your primary attack as attacking with an off-hand weapon would, but you take the usual -5 penalty and add only half your Strength modifier to damage. Regardless of how you use the claw, you are considered armed while this spell is in effect. If you hit with this claw attack, you can attempt a grapple check against your opponent without provoking an attack of opportunity and as if you were one size category larger; if you succeed, the claw establishes a hold and deals additional damage, as described on the table, each round with a successful grapple check. The claw's size bonus applies on all disarm, grapple, and trip attempts made with the claw. A creature that already possesses a claw attack may use its own claw damage or that granted by the spell, whichever is greater. You cannot hold any objects with your transformed hand or cast spells with somatic components while your hand is in this shape.",
  }),
];
