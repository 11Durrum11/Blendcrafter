// Dragon Magazine #330 (April 2005) — spell draft: 7 spells.
// "Spellcraft: Volume Veneficus" (Mike Mearls), pp. 70-73 — the spells of
// the Volume Veneficus, the yuan-ti's serpent holy text (the program
// survey estimated ~6; the article prints seven). Typed SpellDefinition
// in the house shape of recent packs: targetOrArea carries the printed
// Target/Area/Effect text without a label; focus components ride in
// `note`.
// Every header was verified against rendered page images (magazine
// pp. 70-73); the image governs over the OCR stream. Snake Shield's
// header prints NO Saving Throw / Spell Resistance lines; those fields
// stage as "Not printed in source" (the live catalog's own convention)
// with the gap disclosed in the record's note. The article's sidebar
// spell list also files Merrshaulk's Kiss under 3rd-level cleric spells,
// but the spell's own header (image-verified, p. 71) prints Clr 4 — the
// header governs; see MANIFEST.
// ALL SEVEN spells require a live snake as a focus, under the article's
// "Serpentine Foci" rules (p. 71): the snake must be the caster's
// familiar, magically coerced (e.g. charm animal or hypnotism), or
// trained with Handle Animal (a single trick teaching it to help complete
// a spell); dead serpents and material representations do not qualify;
// the snake retains its normal statistics unless noted, the spell ends
// immediately if the focus snake dies, only animal-type snakes qualify,
// and a focus snake cannot be more than one size category larger than
// the caster nor have more Hit Dice than the caster's level. Each
// record's note carries its printed Focus line.
// ⚠️ APOC NOTE — see SCREENING.md: Crushing Coils is a Conjuration
// (Teleportation) spell — it teleports the focus snake within the plane,
// onto a target. It stages as printed with the subschool carried on the
// record; flagged prominently for Shaun because APOC treats teleport
// magic carefully (intra-plane teleport records already live in the
// catalog). The other six are ordinary spells; none summons, calls, or
// opens a plane.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #330 — Spellcraft: Volume Veneficus (Mike Mearls), pp. 70-73";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Transmutation",
    descriptors: [],
    levels: {},
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Touch",
    targetOrArea: "One snake",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_330_SPELLS: SpellDefinition[] = [
  C({
    id: "crushing-coils",
    name: "Crushing Coils",
    school: "Conjuration",
    subschool: "Teleportation",
    levels: { Druid: 3, "Sorcerer/Wizard": 4 },
    range: "Medium (100 ft. + 10 ft./level), see text",
    targetOrArea: "One snake teleported to constrict target",
    duration: "1 round/level",
    note: "Focus: a constrictor snake that is no more than one size category larger than you. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md). APOC: a teleportation-subschool spell — see SCREENING.md.",
    summary:
      "You teleport the snake that serves as this spell's focus around an opponent, allowing the serpent to crush the creature within its grasp. The snake can be teleported to any space within the spell's range and moves to attack the nearest opponent. If it is teleported into another creature's space it may immediately initiate a grapple that does not provoke an attack of opportunity; if the snake succeeds at this grapple check it establishes a hold and can immediately constrict. If the snake fails to grapple the target it enters an empty space adjacent to the target creature and attacks every round on your initiative in an attempt to use its improved grapple ability. The snake gains a bonus on its grapple check and its constriction damage equal to half your caster level. The snake gains no bonus on its attack roll or bite damage, although it does gain DR 10/magic for the duration of the spell. As a move action, you can call the snake back to you, causing it to move at its full speed to the closest adjacent square to you. Once it has returned, you can teleport the snake elsewhere or against a different target as a standard action, provided the spell's duration has not yet expired. Once the spell expires you can no longer teleport the focus snake, and it loses its bonuses on grapple checks and constriction damage as well as its damage reduction.",
  }),
  C({
    id: "fang-blade",
    name: "Fang Blade",
    school: "Transmutation",
    levels: { Cleric: 4, Druid: 3, Ranger: 3, "Sorcerer/Wizard": 4 },
    targetOrArea: "Transforms snake into weapon",
    duration: "1 minute/level (D)",
    savingThrow: "See text",
    note: "Focus: a live snake of any type that is no more than one size category larger than you. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md).",
    summary:
      "You transform the snake that serves as the focus of this spell into a steel blade. The snake's scales glisten with a metallic sheen and the weapon's point consists of the snake's fanged maw. This weapon is a longsword appropriate to your size. You are automatically proficient with this weapon, as the snake moves and weaves to aid you in handling it. In addition to normal longsword damage, the fang blade injects any poison it delivers with its bite with a successful strike. If the snake is non-poisonous, the blade does not deliver any venom. Only you can wield a fang blade. If anyone else attempts to wield it, the blade snaps at him with its bite attack at the beginning of each of his turns. This attack uses the statistics of the snake that served as the spell's focus. At the end of the spell's duration, the snake returns to normal. If anyone attempts to sunder the weapon, it has hardness 8 and hit points equal to the snake's total at the time of the spell's casting.",
  }),
  C({
    id: "merrshaulks-kiss",
    name: "Merrshaulk's Kiss",
    school: "Enchantment",
    levels: { Cleric: 4, Druid: 3 },
    targetOrArea: "Up to one snake per two levels, no two of which can be more than 30 ft. apart",
    duration: "1 min./level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    note: "Focus: a live snake. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md). The spell's heading prints the name 'Merrshaulk's Kiss' (image-verified, p. 71); the article's sidebar spell list spells it 'Mershaulk's Kiss' and also lists it among 3rd-level cleric spells — the header's name and Clr 4 govern (see MANIFEST).",
    summary:
      "You call upon the venomous might of Merrshaulk to bless and enhance a number of living snakes. This spell only affects creatures with the animal type. Yuan-ti and other snakelike creatures are not valid targets. Snakes affected by this spell gain a number of bonuses. Snakes with a poison special attack receive a +2 morale bonus to their poison's DC. Snakes with the constrict special attack gain a +2 morale bonus on all grapple checks. In addition, all snakes targeted by this spell gain a +1 morale bonus on attack rolls, saves, and skill checks.",
  }),
  C({
    id: "serpent-storm",
    name: "Serpent Storm",
    school: "Evocation",
    levels: { Cleric: 6, Druid: 5 },
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "20-ft.-radius spread",
    duration: "1 round/level (D)",
    savingThrow: "See text",
    spellResistance: "Yes",
    note: "Focus: one snake that is no more than one size larger than you. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md).",
    summary:
      "This spell causes the affected area to fill with a storm of deadly snakes that rain from above and form a dense carpet upon the ground. Anyone inside the area takes 1d6 points of damage per two levels of the caster from dozens of bites and scratches per round. A Reflex save halves this damage. In addition, creatures caught inside the area must succeed at a Fortitude save or be poisoned by the bites. This poison deals an initial 1d4 points of Constitution damage and has no secondary damage. Creatures that avoid all of the bite damage avoid the poison as well. Creatures that remain in the area are subject to the poison damage each round. Finally, the area covered by this spell is treated as difficult terrain for the duration of the spell. The snakes that make up this spell appear just like the focus snake, but they are magical in nature and cannot be harmed.",
  }),
  C({
    id: "snake-shield",
    name: "Snake Shield",
    school: "Evocation",
    levels: { Cleric: 3, Druid: 3 },
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    note: "Focus: a living snake. The magazine header prints no Saving Throw or Spell Resistance line for this spell (image-verified, p. 72). One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md).",
    summary:
      "Grasping a snake in your hands, you infuse it with magical energy that creates a shimmering field containing the essence of its predatory instincts and stinging fangs. To observers, it appears as a cloud of ghostly snakes floating in a tight spiral around you. Anyone who attempts to touch you, either to deliver a spell or to strike you with a weapon, suffers an attack from these snakes. These snakes attack with the focus snake's normal bite attack bonus. If it has any special abilities, such as constrict, improved grab, or poison, it may use them against its target as normal (although it may only make a grapple check to hold and constrict for 1 round, and may not maintain a grapple in subsequent rounds). The snake can attack a single target once per round, but there is no limit to the number of different targets it can attempt to strike.",
  }),
  C({
    id: "spitting-cobra",
    name: "Spitting Cobra",
    school: "Transmutation",
    levels: { Druid: 4, "Sorcerer/Wizard": 5 },
    range: "0 ft.",
    targetOrArea: "Venom concentrated within the focus snake",
    duration: "1 min./level (D)",
    savingThrow: "Fortitude negates",
    note: "Focus: a live, venomous snake no larger than your size category. A non-poisonous snake causes the spell to fail. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md).",
    summary:
      "You siphon forth the venom of the focus snake and distill it into a deadly toxin. For the duration of the spell you can spray forth this venom from your outstretched hand. This allows you to make a ranged touch attack once per round at a target within 120 feet. This attack delivers the focus snake's poison as a blast of concentrated venom. Upon a successful attack, the target is affected by the poison as if bitten by the focus snake and is allowed a Fortitude save equal to the spell's DC. Use the snake's type to determine initial and secondary poison damage as normal (1d6 Con damage, initial and secondary, for a normal viper). This attack gains no benefit from a successful critical hit. Each attack you make reduces the spell's remaining duration by 2 minutes. If an attack reduces the remaining duration to 0 minutes or less, the spell ends after the attack is resolved. The focus snake used for this spell must be willing and it loses its poison attack for the duration of the spell.",
  }),
  C({
    id: "venomous-volley",
    name: "Venomous Volley",
    school: "Evocation",
    levels: { Cleric: 2, Druid: 2, "Sorcerer/Wizard": 2 },
    range: "15 ft.",
    targetOrArea: "Cone-shaped burst",
    duration: "Instantaneous; see text",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    note: "Focus: a living snake. One of the Volume Veneficus spells: the focus must be a live snake under the article's Serpentine Foci rules (see the pack's reference.md).",
    summary:
      "A cone of venomous fangs shoots from your fingertips. Any creature in the area of the cone takes 1d6 points of damage per two caster levels (maximum 5d6). A Reflex save halves this damage. In addition, anyone caught in the area of this spell suffers a -4 penalty on all Fortitude saves to resist poison for 1 minute per caster level. There is no save versus this effect, although spell resistance does apply.",
  }),
];
