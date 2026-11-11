// Dragon Magazine #348 (October 2006) — spell draft: 7 spells.
// TWO from "Core Beliefs: Vecna" (Sean K. Reynolds and Samuel D.
// Weiss), pp. 26-27 — the article's "New Divine Spells" (the survey
// estimated ~4 feats for this article; it prints NO feats — see
// MANIFEST survey corrections). FIVE from "Spellcraft: The Tome of
// Strahd" (F. Wesley Schneider), pp. 74-76 — the spells of the Tome of
// Strahd / Expedition to Castle Ravenloft preview (the article's own
// spell list confirms exactly five: curse of the gypsies, rain of
// terror, Bloodstone's frightful joining, Strahd's baneful attractor,
// wraithform).
// Typed SpellDefinition in the house shape of recent packs:
// targetOrArea carries the printed Target/Area/Effect text without a
// label; material components ride in `note`.
// Headers read from the archive.org djvu OCR stream and cross-checked
// against the article's own spell-list sidebar (levels agree in every
// case). ⚠️ APOC FLAGS — see SCREENING.md: Bloodstone's frightful
// joining is a possession effect (magic-jar family); rain of terror's
// text says its rains are "summoned, not illusory" under a canon where
// summoning spells don't work; the Strahd spells' Ravenloft lore is
// stripped, mechanics only.

import type { SpellDefinition } from "@/engine/types";

const SRC_VECNA = "Dragon Magazine #348 — Core Beliefs: Vecna (Sean K. Reynolds and Samuel D. Weiss), pp. 26-27";
const SRC_STRAHD = "Dragon Magazine #348 — Spellcraft: The Tome of Strahd (F. Wesley Schneider), pp. 74-76";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Necromancy",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC_STRAHD,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_348_SPELLS: SpellDefinition[] = [
  // ---- Core Beliefs: Vecna — new divine spells (2) ----
  C({
    id: "skeletal-hand-348",
    name: "Skeletal Hand",
    source: SRC_VECNA,
    levels: { Cleric: 3, "Sorcerer/Wizard": 3 },
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "Disembodied skeletal limb (effect)",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "Yes",
    summary:
      "A disembodied skeletal arm and claw appears and moves as you desire, letting you attack and deliver touch spells at a distance. The hand deals 1d6 points of slashing damage per hit, +1 point per three caster levels (maximum +5 at 15th level), and any touch spell of 6th level or lower that you cast can be channeled through the hand instead of through your own hand — the hand can attack to discharge the touch spell in lieu of its regular attacks for the round. The limb is corporeal and can be harmed by any normal weapon or effect: it has improved evasion (no damage on a successful Reflex save, half on a failed save), your save bonuses, and a base AC of 12, with your Intelligence modifier applying to its AC as if it were the hand's Dexterity modifier; it has hit points equal to 5 + half your caster level. On appearing it strikes the opponent you designate, starting with one attack in the round the spell is cast and continuing each round thereafter on your turn, using your base attack bonus (possibly allowing multiple attacks per round in subsequent rounds) plus your Intelligence modifier as its attack bonus. It strikes as a spell, not as a weapon, so it can damage creatures that have damage reduction; it always strikes from your direction and neither gains nor grants a flanking bonus. Your feats and combat actions do not affect the hand. If the hand goes beyond the spell's range, goes out of your sight, or is not directed by you, it returns to you and hovers. Each round after the first you can use a move action to redirect the hand to a new target; if you do not, it keeps attacking the previous round's target, and on any round it switches targets it gets one attack. If an attacked creature has spell resistance, you make a caster level check (1d20 + caster level) against that spell resistance the first time the hand strikes it; if the hand is successfully resisted, the spell is dispelled, otherwise the hand has its full effect on that creature for the duration. (Staged under a -348 id: a fuller same-named record may stand in the live catalog — see MANIFEST; verified collision-free against the live barrels at extraction.)",
  }),
  C({
    id: "torture-348",
    name: "Torture",
    source: SRC_VECNA,
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Language-Dependent", "Mind-Affecting"],
    levels: { Cleric: 4, "Sorcerer/Wizard": 5 },
    castingTime: "1 minute",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "One living creature",
    duration: "1 round/2 levels",
    savingThrow: "Will partial",
    spellResistance: "Yes",
    summary:
      "You may ask questions of the target, who must answer them truthfully or suffer terrible pain. Once each round for the duration of the spell you can ask the target one question: if the target answers truthfully the spell has no effect that round; if the target deliberately lies or does not answer, it is wracked by excruciating pain and takes 1d6 points of Constitution damage, with a successful Will save halving this damage (minimum 1). The target must make a new save each time it fails to answer a question truthfully. The target must be conscious, able to understand you, and able to respond for the spell to function; if you ask a question the target simply does not know, you immediately become aware of that fact and the question is wasted, with the target suffering no ill effects. The target must remain within range for the entire duration of the spell, and is typically bound to prevent escape. (Staged under a -348 id because the bare name is generic; verified collision-free against the live barrels at extraction.)",
  }),
  // ---- Spellcraft: The Tome of Strahd (5) ----
  C({
    id: "bloodstones-frightful-joining",
    name: "Bloodstone's Frightful Joining",
    levels: { "Sorcerer/Wizard": 4 },
    targetOrArea: "One undead creature",
    duration: "1 hour/level or until you return to your body",
    savingThrow: "Will negates (see text)",
    spellResistance: "Yes",
    summary:
      "On casting, your soul attempts to invade the form of a nearby undead creature, leaving your body lifeless. If the target succeeds at its Will save it resists and the spell ends; if it fails, your spirit dominates the target, its own consciousness — if any — being subsumed for the duration, and you gain complete control over the target even if it was created or controlled by another being. While transferred, your body appears dead, although a DC 25 Heal check reveals it is merely in a state of suspended animation. The spell is blocked by protection from evil or similar wards that prevent possession or control. In control of the undead body you retain your Intelligence, Wisdom, Charisma, level, class, base attack bonus, base save bonuses, alignment, and mental abilities; the body retains its Strength, Dexterity, hit points, extraordinary abilities, and automatic abilities, and a body with extra limbs does not allow you to make more attacks (or more advantageous two-weapon attacks) than normal. You gain access to the body's extraordinary abilities, but the creature's supernatural abilities, spells, and spell-like abilities do not stay with the body, and you gain no access to the target's thoughts or knowledge, though you can choose to communicate with sentient undead mentally. As a standard action you can shift freely from the host's body back to your own body if within range, returning control of the undead form to its original consciousness or controller, and the spell ends. If the host body is slain you return to your body if within range and the target's animating force departs (it is dead); if the host body is slain beyond the range of the spell, both you and the host die, and any life force with nowhere to go is treated as slain. APOC: a possession effect in the magic jar family, staged as printed — see SCREENING.md.",
  }),
  C({
    id: "curse-of-the-gypsies",
    name: "Curse of the Gypsies",
    levels: { Bard: 2, Cleric: 2, Druid: 2, "Sorcerer/Wizard": 3 },
    components: "V",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "Permanent",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Speaking a vehement curse, you mark a target as an enemy of your people and of nature, choosing one of three effects. BAD LUCK: whenever the target rolls a natural 20 on any roll that requires a 20-sided die, he must reroll and accept the second result (if the second roll is also a 20, the target keeps that result); this might prevent the target from scoring critical hits unless he has a weapon or ability that threatens a critical on a 19 or lower. MARK OF THE GYPSIES: a permanent arcane mark appears on the target's forehead, invisible to all but members of your group or family (determined by you and the DM, typically fewer than one hundred others related by blood or a similarly strong bond); anyone who can see the mark immediately recognizes the bearer as cursed and shunned by your people, typically eliciting an attitude two steps lower than an NPC's normal bearing and possibly provoking open hostility. Detect magic or true seeing can also reveal the mark, but those who cannot see it naturally must make a DC 20 Knowledge (arcana) check to discern its meaning, and spells like erase cannot remove it. UNNATURAL AURA: animals, wild or domesticated, sense the target's unnatural presence at a distance of 30 feet; they do not willingly approach nearer than that and panic if forced to do so, remaining panicked while within that range. The curse cannot be dispelled, but it can be removed with break enchantment, limited wish, miracle, remove curse, or wish. The method of invoking this very rare curse is often not known outside a tightly-knit group; ancient families, druidic circles, and tribes of wandering gypsies — like the Vistani — are most likely to have access to it. (Ravenloft lore stripped to this one mechanical access note; see SCREENING.md.)",
  }),
  C({
    id: "rain-of-terror",
    name: "Rain of Terror",
    descriptors: ["Fear"],
    levels: { Cleric: 3, Druid: 3, "Sorcerer/Wizard": 3 },
    range: "100 ft.",
    targetOrArea: "100-ft.-radius emanation centered on you",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You cause a terrifying, unnatural rain to begin falling from the sky. All creatures other than you within the area take a penalty on Will saving throws made to resist fear effects (such as the fear spell or a dragon's frightful presence) equal to -1 per 4 caster levels, to a maximum penalty of -5, and you gain a +10 bonus on Intimidate checks while within the area. The rain can manifest in grotesque forms — torrents of hot blood, a hail of writhing snakes, and the like (the article prints a 1d8 table: 1 black putrid water, 2 ash, 3 steaming blood, 4 toads, 5 dead bats, 6 snakes, 7 spiders, 8 reroll for a combination of two rains, ignoring further results of 8; you may make a DC 20 Concentration check to choose the type of rain, failure meaning a random roll). Regardless of its form the rain has all the effects of normal rain: visibility is halved, a -4 penalty applies to ranged attacks and to Listen, Spot, and Search checks, unprotected flames are automatically doused, and protected flames have a 50% chance to be snuffed. The animals and effects of the rain are summoned, not illusory, but you have no control over them; living creatures that rain down are 50% likely to survive the fall (after a rain of toads, half are alive and hopping around and half are dead from the impact), and none of them are dangerous or able to harm anyone. APOC: the printed word is \"summoned\" — staged as printed and flagged in SCREENING.md, since summoning spells do not work in APOC.",
  }),
  C({
    id: "strahds-baneful-attractor",
    name: "Strahd's Baneful Attractor",
    school: "Evocation",
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    duration: "1 minute/level",
    savingThrow: "None",
    spellResistance: "Yes",
    note: "Material component: a few bits of broken glass.",
    summary:
      "You cause spells to divert from their original paths to strike your target: on casting, you surround the target with a 15-foot-diameter invisible aura that attracts spells aimed at nearby creatures. Any ranged spell that deals hit point damage and targets a specific creature (such as disintegrate, magic missile, or scorching ray) within 15 feet is diverted to strike the target of this spell instead, even if this would cause it to exceed its normal range; the aura does not pass through barriers that would impede line of effect. Ranged beneficial spells with a specific target and area-effect spells (such as fireball, flame strike, or lightning bolt) are not affected, and neither are potentially harmful spells that do not directly deal hit point damage (such as enervation, magic jar, silence, or many enchantment spells).",
  }),
  C({
    id: "wraithform-348",
    name: "Wraithform",
    school: "Transmutation",
    levels: { "Sorcerer/Wizard": 4 },
    components: "S, M",
    range: "Touch",
    targetOrArea: "One willing corporeal creature touched",
    duration: "2 min./level (D)",
    savingThrow: "None",
    spellResistance: "Yes",
    note: "Material component: a piece of gauze and a wisp of smoke.",
    summary:
      "The target becomes shadowy and ghostlike, its eyes glowing a sinister red. The spell functions as gaseous form, except that the target can move at its normal speed while affected. In addition, mindless undead (those with no Intelligence score) do not perceive the target as a threat, and even those with minds are likely to assume the target is merely a wraith or other vengeful spirit: the target gains a +10 bonus on Disguise checks to appear to be a wraith, although sentient beings may still make Spot checks to see through the disguise. (Staged under a -348 id: wraithform is a long-standing spell name with earlier-edition printings; verified collision-free against the live barrels at extraction.)",
  }),
];
