// Dragon Magazine #358 (August 2007) — feat draft: 9 feats.
// ONE smithing feat — the sidebar feat of "Master's Forge: Crafting
// Legends" (Rodney Thompson), p. 38: ARTISAN CRAFTSMAN, the gate feat of
// the article's masterwork item-quality system (the eighteen item
// qualities themselves stage in equipment-draft.ts; the system is
// digested in reference.md §3). The program survey expected "crafting
// feats/options" plural from this article; the article prints exactly
// this one feat.
// EIGHT arcane feats — "Class Acts: Arcane Feats" (Jonathan Drain, Tim
// Hitchcock, John E. Ling Jr., Hal Maclean, and Troy E. Taylor),
// pp. 86-87, a Class Acts column the program survey never itemized.
// Several of the eight can be taken as wizard bonus feats, as noted on
// each record; Forceful Spell and Slimy Spell are printed [Metamagic];
// the other six print no type tag and stage as general feats.
// All feat texts verified against rendered page images (magazine
// pp. 38, 86, 87); the image governs over the OCR stream — it confirms
// Eldritch Claws' prerequisite at eldritch blast 2d6, Grappling Blast's
// at eldritch blast 3d6, Slimy Spell's Reflex save, and Wedded to the
// Light's full level ladder (1st / 5th / 9th / 13th / 17th).
// APOC screening: Wedded to the Light keys off the Positive Energy
// Plane — in APOC, life draws healing from the positive plane, so the
// connection itself is canon-compatible; its 9th-level effect sends the
// familiar INTO that plane for 24 hours, and the feat stages as printed
// with the flag in SCREENING.md §4. Nothing else here summons, calls,
// teleports, or opens a plane.

import type { FeatDefinition } from "@/engine/types";

const SRC_FORGE = "Dragon Magazine #358 — Master's Forge: Crafting Legends (Rodney Thompson), p. 38";
const SRC_ARCANE = "Dragon Magazine #358 — Class Acts: Arcane Feats (Jonathan Drain, Tim Hitchcock, John E. Ling Jr., Hal Maclean, and Troy E. Taylor), pp. 86-87";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_ARCANE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_358_FEATS: FeatDefinition[] = [
  F({
    id: "artisan-craftsman",
    name: "Artisan Craftsman",
    source: SRC_FORGE,
    prerequisites: ["Craft (armorsmithing, bowmaking, or weaponsmithing) 4 ranks"],
    benefitSummary:
      "Your craftsmanship is unique, imprinting every item you create with your signature style. Prerequisite: Craft (armorsmithing, bowmaking, or weaponsmithing) 4 ranks. Benefit: Choose one of the following Craft skills in which you have at least 4 ranks: armorsmithing, bowmaking, or weaponsmithing. Whenever you craft a masterwork item using the chosen skill, you may apply any or all of the item qualities you know to the item. You know one item quality plus one additional item quality per 5 ranks in the chosen skill, to a maximum of five item qualities at 20 ranks. Once you select an item quality you may not exchange it later for a different one. Special: You can gain this feat multiple times; its effects do not stack. Each time you take the feat, it applies to a different Craft skill. (Gate feat of the Master's Forge masterwork item-quality system — the eighteen item qualities stage in the pack's equipment draft; see the pack's reference.md §3.)",
  }),
  F({
    id: "arcane-focus-item",
    name: "Arcane Focus Item",
    prerequisites: ["Craft Wondrous Item", "Any metamagic feat", "Arcane caster level 3rd"],
    benefitSummary:
      "You can craft a unique signature staff or other item that serves as a focus for your magic. Prerequisites: Craft Wondrous Item, any metamagic feat, arcane caster level 3rd. Benefit: You create a personal arcane device that you carry with you, typically a staff but optionally another item like a pocket watch or amulet. This device serves as a focus for magical energy, improving your ability to apply metamagic effects to spells. You must hold the item in your hand in order to gain its benefits. If you spontaneously cast spells (as a sorcerer does), three times per day the focus allows you to apply a metamagic feat to a spell without increasing its casting time. If you prepare spells (as a wizard does), three times per day you may spontaneously convert any spell into a metamagic-enhanced version of any lower-level spell you currently have prepared; converting a spell in this way forces you to lose the higher-level spell, which must be of the appropriate spell level for the spell you cast and the metamagic feat you use, and you must have the metamagic feat you wish to use in this way — for example, you may spontaneously lose a prepared fireball spell in order to cast an empowered magic missile, but only if you have both a normal fireball and a normal magic missile spell prepared. In addition, you may treat the item as an arcane focus in place of any spell components worth 1 gp or less, and a hand in which you hold the device is considered your free hand for the purpose of casting somatic components. You may also use magic item creation feats such as Craft Magic Arms and Armor, Craft Staff, and Craft Wondrous Item to enhance the device as an item of its type. If you lose your arcane device or it is not on you, all your spells suffer a -1 penalty to caster level until you recover it or create a new one. If you have your device on you but aren't wearing or wielding it actively, you suffer no ill effects but neither do you gain any benefits. Creating an arcane device costs 100 gp and takes 24 hours. A wizard may take Arcane Focus Item as a wizard bonus feat.",
  }),
  F({
    id: "arcane-shorthand",
    name: "Arcane Shorthand",
    benefitSummary:
      "You discovered a shorthand method for recording spells in spellbooks. Benefit: You scribe spells in a spellbook using a shorthand that lets you transcribe faster and to occupy less space than normal. This shorthand cuts in half the time required to write a spell in a spellbook. Such spells also take up half as many pages and require half as much of the special materials normally used. The Spellcraft DC to learn or prepare a spell from a borrowed spellbook written in shorthand equals 25 + spell level. Special: A spellbook written with this method holds more spells and is thus worth more than a normal spellbook of the same number of pages. A wizard may take Arcane Shorthand as a wizard bonus feat. Normal: The Spellcraft DC to learn or prepare a spell from a borrowed spellbook equals 15 + spell level.",
  }),
  F({
    id: "book-smart",
    name: "Book Smart",
    prerequisites: ["Int 15", "Knowledge (any three) 6 ranks", "Ability to cast at least three arcane divination spells"],
    benefitSummary:
      "You've read books on a variety of subjects, and have a knack for cross-referencing the information quickly in your mind. Prerequisites: Int 15, Knowledge (any three) 6 ranks, ability to cast at least three arcane divination spells. Benefit: You may make untrained Knowledge checks for DCs higher than 10. Normal: Untrained Knowledge checks are limited to those with a DC of 10 or less.",
  }),
  F({
    id: "eldritch-claws",
    name: "Eldritch Claws",
    prerequisites: ["Eldritch blast 2d6"],
    benefitSummary:
      "You can deliver your eldritch blast as a melee attack. Prerequisite: Eldritch blast 2d6. Benefit: As a free action, you can form the energy of your eldritch blast into a set of claws extending almost an entire foot from your hands. While your eldritch claws exist you may make up to two claw attacks as natural weapons. You are automatically proficient with your eldritch claws. On a successful attack with an eldritch claw, you deal your normal amount of unarmed strike damage plus your eldritch blast damage. Once you form your eldritch claws they remain until just before the beginning of your next turn. You cannot use your normal eldritch blast ability while your eldritch claws exist. A monk may not use eldritch claws as part of her flurry of blows.",
  }),
  F({
    id: "forceful-spell",
    name: "Forceful Spell",
    category: "metamagic",
    benefitSummary:
      "[Metamagic.] Your spells slam their targets with irresistible force. Benefit: Only spells that target one or more creatures can be made forceful. An opponent struck by a forceful spell must make a Fortitude save at the same DC as the spell or be knocked prone and stunned for 1 round. If the spell affects more than one target, the forceful effect affects only one target (of your choice). A forceful spell uses up a spell slot one level higher than the spell's actual level.",
  }),
  F({
    id: "grappling-blast",
    name: "Grappling Blast",
    prerequisites: ["Improved Grapple", "Eldritch blast 3d6"],
    benefitSummary:
      "While grappling a foe, you can discharge your eldritch blast. Prerequisites: Improved Grapple, eldritch blast 3d6. Benefit: Whenever you make a successful grapple check to deal damage, you may also discharge your eldritch blast against the foe you're grappling. You also gain a circumstance bonus on your next grapple check made within the next round equal to half the damage you deal with your eldritch blast. You may not add any blast shape invocations to your eldritch blast when using it in this manner.",
  }),
  F({
    id: "slimy-spell",
    name: "Slimy Spell",
    category: "metamagic",
    benefitSummary:
      "[Metamagic.] Your spells douse opponents with a nauseating slime. Benefit: Only spells that target one or more creatures can be made slimy. An opponent struck by a slimy spell must make a Reflex save at the same DC as the spell or be covered in a temporary layer of slime that renders the target nauseated for 1 round. If the spell affects more than one target, the slimy effect affects only one target (of your choice). A slimy spell uses up a spell slot one level higher than the spell's actual level.",
  }),
  F({
    id: "wedded-to-the-light",
    name: "Wedded to the Light",
    prerequisites: ["Good alignment", "Ability to summon a familiar"],
    benefitSummary:
      "Your connection to the Positive Energy Plane and the forces of life itself allow you to turn your familiar into a living vessel of light and energy. Prerequisite: Good alignment, ability to summon a familiar. Benefit: As you advance in levels you gain a number of additional abilities when interacting with your familiar; these abilities are in addition to those normally granted to or by your familiar. At 1st level, you can, at will, order your familiar to glow as a free action, producing light equal to a torch. Beginning at 5th level, you can, once per day, touch your familiar and channel a surge of positive energy that heals it for 1d6 points of damage + 1 per class level; this requires a move action. At 9th level, you can, once per day, convert your familiar into pure positive energy for 1 minute: during that time, your familiar emits positive energy in a 20-foot-radius emanation — undead within the emanation take 1 point of damage per round, while living creatures other than you or your familiar gain fast healing 1 while within this aura; after producing this emanation for 1 minute, your familiar disappears into the Positive Energy Plane for 24 hours, during which time you gain no benefits of having a familiar; activating this ability is a standard action. Beginning at 13th level, your familiar's loyalty and devotion, when coupled with its connection to the Positive Energy Plane, allows it to sacrifice itself to save your life: if able to reach your body within 1 round of your death, your familiar can unleash a conflagration of positive energy that consumes it utterly but returns you to life, stable but at -1 hit points; you suffer none of the ill effects that normally come from returning to life (including level loss), but you automatically lose the full 200 XP per class level for the death of your familiar, and due to the special nature of its sacrifice you can summon a new familiar after waiting only one month. At 17th level, you and your familiar gain fast healing 1 as long as you both have at least 1 hit point and are within 5 feet of one another. Special: Whenever you cast a spell with the darkness, death, or evil descriptor you lose access to all benefits of this feat for the next 24 hours. A wizard may take Wedded to the Light as a wizard bonus feat. (APOC note: the familiar's 9th-level disappearance is a planar transfer of the familiar, not a summoning or calling effect; the feat stages as printed — see SCREENING.md §4.)",
  }),
];
