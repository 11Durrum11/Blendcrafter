// Dragon Magazine #325 (November 2004) — feat draft: 39 feats.
// Blocks: "Arcane Ancestry 2" (15 bloodline feats, pp. 46-52), "A Surge of Theurgy"
// (15 theurgic/multiclass feats, pp. 60-62), and "Heroic Feats: Getting Schooled"
// (9 specialist-wizard feats, p. 77). Bloodline feats follow the issue-311 house style:
// category "general", benefitSummary prefixed "[Bloodline feat.] ", shared base
// prerequisites and shared Special text. Every draft-internal const belongs to the draft.

import type { FeatDefinition } from "@/engine/types";

const SRC_AA = "Dragon Magazine #325 — Arcane Ancestry 2 (Scott Carter), pp. 46-52";
const SRC_SURGE = "Dragon Magazine #325 — A Surge of Theurgy (Tim Hitchcock), pp. 60-62";
const SRC_HEROIC = "Dragon Magazine #325 — Heroic Feats: Getting Schooled (Chris Perry), p. 77";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const BLOODLINE_BASE_PREREQS = ["Ability to cast arcane spells without preparation", "Ability to summon a familiar"];
const BLOODLINE_SPECIAL =
  "If you take this feat after 1st level and have already learned any of the listed spells in the class that granted you access to this feat, you gain no additional spell known at those spell levels; this does not apply to spells learned as a member of another spellcasting class. A character can have only one base bloodline feat.";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_AA,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

export const DRAGON_325_FEATS: FeatDefinition[] = [
  // ---- Arcane Ancestry 2: the seven base bloodline feats ----
  F({
    id: "anarchic-bloodline",
    name: "Anarchic Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — color spray; 2nd — Tasha's hideous laughter; 3rd — rage; 4th — confusion; 5th — mind fog; 6th — mislead; 7th — prismatic spray; 8th — maze; 9th — weird. You cannot learn or cast spells with the lawful descriptor, and all such spells are removed from the spell lists of all your spellcasting classes.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "axiomatic-bloodline",
    name: "Axiomatic Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — detect chaos; 2nd — locate object; 3rd — magic circle against chaos; 4th — locate creature; 5th — dismissal; 6th — true seeing; 7th — forcecage; 8th — discern location; 9th — dominate monster. You cannot learn or cast spells with the chaotic descriptor, and all such spells are removed from the spell lists of all your spellcasting classes.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "illithid-bloodline",
    name: "Illithid Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — hypnotism; 2nd — detect thoughts; 3rd — suggestion; 4th — confusion; 5th — feeblemind; 6th — mass suggestion; 7th — insanity; 8th — mind blank; 9th — dominate monster. You cannot learn or cast spells that alter an object's or creature's size or shape, such as enlarge person or the polymorph spells.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "necromantic-bloodline",
    name: "Necromantic Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — cause fear; 2nd — ghoul touch; 3rd — vampiric touch; 4th — contagion; 5th — dominate person; 6th — eyebite; 7th — control undead; 8th — trap the soul; 9th — wail of the banshee. You cannot learn or cast spells from the conjuration (healing) subschool, and all such spells are removed from the spell lists of all your spellcasting classes.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "penumbra-bloodline",
    name: "Penumbra Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — obscuring mist; 2nd — darkness; 3rd — nondetection; 4th — Evard's black tentacles; 5th — shadow evocation; 6th — shadow walk; 7th — plane shift; 8th — greater shadow evocation; 9th — etherealness. You cannot learn or cast spells with the light descriptor, and all such spells are removed from the spell lists of all your spellcasting classes.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "plant-bloodline",
    name: "Plant Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — endure elements; 2nd — false life; 3rd — water breathing; 4th — minor creation; 5th — transmute rock to mud; 6th — control water; 7th — control weather; 8th — control plants; 9th — imprisonment. You cannot learn or cast spells with the death descriptor, and all such spells are removed from the spell lists of all your spellcasting classes.",
    special: BLOODLINE_SPECIAL,
  }),
  F({
    id: "serpent-bloodline",
    name: "Serpent Bloodline",
    prerequisites: BLOODLINE_BASE_PREREQS,
    benefitSummary:
      "[Bloodline feat.] Your ancestry gives you a bonus spell known at each spell level, starting at 1st, from the following list: 1st — cause fear; 2nd — hypnotic pattern; 3rd — sepia snake sigil; 4th — phantasmal killer; 5th — dominate person; 6th — repulsion; 7th — power word blind; 8th — power word stun; 9th — power word kill. You cannot learn or cast spells intended to allow you to leave the ground, such as fly, levitate, or overland flight.",
    special: BLOODLINE_SPECIAL,
  }),
  // ---- Arcane Ancestry 2: the eight chain feats ----
  F({
    id: "familiarity",
    name: "Familiarity",
    prerequisites: ["Any bloodline feat", "Ability to summon a familiar", "Ability to cast 3rd-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] Your familiar gains abilities as if your class level in the arcane spellcasting class that granted you access to this feat were 2 levels higher.",
  }),
  F({
    id: "fickle-fate",
    name: "Fickle Fate",
    prerequisites: ["Anarchic Bloodline", "Ability to cast 2nd-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] Once per day, you may improve the results of a single d20 roll by adding the result of a 1d6 roll to it. An anarchic creature cannot be expected to leave something as important as fate to happenstance. The use of this ability must be declared before you attempt the d20 roll. This is a supernatural ability.",
  }),
  F({
    id: "grave-fiend",
    name: "Grave Fiend",
    prerequisites: ["Necromantic Bloodline", "Ability to cast 3rd-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] You gain a +2 bonus on any saving throw to resist the extraordinary and supernatural abilities of creatures of the undead type.",
  }),
  F({
    id: "green-heart",
    name: "Green Heart",
    prerequisites: ["Plant Bloodline", "Ability to cast 2nd-level arcane spells"],
    benefitSummary: "[Bloodline feat.] You gain a +2 bonus on all saving throws made to resist the effects of poisons and diseases.",
  }),
  F({
    id: "lawful-discipline",
    name: "Lawful Discipline",
    prerequisites: ["Axiomatic Bloodline", "Ability to cast 2nd-level arcane spells"],
    benefitSummary: "[Bloodline feat.] You gain a +2 bonus on Will saves made to resist mind-affecting effects.",
  }),
  F({
    id: "mind-weapon",
    name: "Mind Weapon",
    prerequisites: ["Illithid Bloodline", "Ability to cast 2nd-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] You can use daze three times per day as a spell-like ability (caster level equals your level in the arcane spellcasting class that granted you access to this feat). This ability does not affect your number of spells known or spells per day.",
  }),
  F({
    id: "venomless",
    name: "Venomless",
    prerequisites: ["Serpent Bloodline", "Ability to cast 5th-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] You can cast neutralize poison once per day as a spell-like ability (caster level equals your level in the arcane spellcasting class that granted you access to this feat). This ability does not affect your number of spells known or spells per day.",
  }),
  F({
    id: "voice-of-the-green",
    name: "Voice of the Green",
    prerequisites: ["Plant Bloodline", "Ability to cast 5th-level arcane spells"],
    benefitSummary:
      "[Bloodline feat.] You can cast speak with plants once per day as a spell-like ability (caster level equals your level in the arcane spellcasting class that granted you access to this feat). This ability does not affect your number of spells known or spells per day.",
  }),
  // ---- A Surge of Theurgy ----
  F({
    id: "aligned-theurgy",
    name: "Aligned Theurgy",
    source: SRC_SURGE,
    prerequisites: [
      "At least one alignment-based cleric domain (Chaos, Evil, Good, or Law)",
      "Ability to cast arcane spells with the same alignment descriptor as your domain",
    ],
    benefitSummary:
      "Choose one of your alignment-based cleric domains. You can cast spells with the related descriptor as if your caster level were the sum of all your spellcasting classes that grant spells with that alignment descriptor. This does not affect your spells per day or spells known.",
    special:
      "You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new alignment-based domain and spell descriptor.",
  }),
  F({
    id: "alternative-source-spell",
    name: "Alternative Source Spell",
    category: "metamagic",
    source: SRC_SURGE,
    prerequisites: ["Ability to cast both divine and arcane spells"],
    benefitSummary:
      "You can choose to prepare any of your divine spells as arcane spells or any of your arcane spells as divine spells. An alternative-sourced spell uses up a spell slot from the class that normally grants the spell and is prepared normally, but it is cast as if your caster level were 1 level lower.",
  }),
  F({
    id: "combined-empathy",
    name: "Combined Empathy",
    source: SRC_SURGE,
    prerequisites: ["Druid level 1st", "Ranger level 1st"],
    benefitSummary: "When using your wild empathy ability, add both your druid levels and your ranger levels to your roll, instead of just one of them.",
  }),
  F({
    id: "customize-domain",
    name: "Customize Domain",
    source: SRC_SURGE,
    prerequisites: ["At least one domain", "Ability to cast 3rd-level divine spells"],
    benefitSummary:
      "Choose one of your cleric domains. You permanently exchange spells on your domain spell list for similar spells from any spell list you have access to; the substituted spell must be of equal or lower level than the spell it replaces and must meet the restriction of your domain (see the special line). You customize your domain at the time you select this feat; you cannot later change your domain spells or return to the original domain spell list.",
    special:
      "You can gain this feat multiple times. Each time you take the feat, it applies to a new domain. Domain restrictions: Air: spells must have the air or electricity descriptor. Animal: spells must specifically affect animals, summon animals, or have animals in their name (such as bull's strength or owl's wisdom). Chaos: spells must have the chaotic descriptor. Death: spells must be death effects or spells dealing with undead. Destruction: spells must be damaging evocations. Earth: spells must have the earth descriptor. Evil: spells must have the evil descriptor. Fire: spells must have the fire descriptor. Good: spells must have the good descriptor. Healing: spells must be of the healing subschool. Knowledge: spells must be divinations. Law: spells must have the lawful descriptor. Luck: spells must be abjurations or spells that grant a bonus on a dice roll. Magic: spells may be of any school but count as one level lower than normal. Plant: spells must affect plants, summon plant creatures, or have plants in their name (such as tree stride). Protection: spells must be abjurations. Strength: spells must grant a Strength bonus or impose a Strength penalty. Sun: spells must have the light descriptor. Travel: spells must alter your speed or provide movement. Trickery: spells must be illusion or transmutation spells that alter your appearance. War: spells must begin with the word \u201Cmass.\u201D Water: spells must have the water descriptor or create or modify water. If a spell's descriptor varies depending on how it is cast, you may choose it as a spell of the needed descriptor if you only ever cast it in that way.",
  }),
  F({
    id: "diversified-casting",
    name: "Diversified Casting",
    source: SRC_SURGE,
    prerequisites: ["A prohibited school"],
    benefitSummary:
      "Choose a prohibited school. You may add up to three spells from that prohibited school to your spell list. This also allows you to use spell-completion and spell-trigger magic items using the spells you add to your spell list.",
    special:
      "You can gain this feat a number of times equal to the number of prohibited schools you possess. Each time you take this feat, it applies to a different prohibited school.",
  }),
  F({
    id: "druidic-theurgy",
    name: "Druidic Theurgy",
    source: SRC_SURGE,
    prerequisites: ["Ability to cast 3rd-level druid spells", "Ability to cast spells from a different spell list"],
    benefitSummary:
      "Choose a spellcasting class other than druid in which you have at least one level. When casting spells from the druid spell list that also appear on the chosen class's spell list, your caster level equals the sum of your druid levels and your levels in the chosen class. This does not affect your spells per day or spells known.",
    special:
      "You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new class.",
  }),
  F({
    id: "elemental-theurgy",
    name: "Elemental Theurgy",
    source: SRC_SURGE,
    prerequisites: [
      "At least one elemental domain (Air, Earth, Fire, or Water)",
      "Ability to cast arcane spells with the same elemental descriptor as your domain",
    ],
    benefitSummary:
      "Choose one of your elemental domains. You can cast spells with the related elemental descriptor (air, earth, fire, or water) as if your caster level were the sum of all your spellcasting classes that grant spells with that elemental descriptor. This does not affect your spells per day or spells known.",
    special:
      "You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new elemental domain and spell descriptor.",
  }),
  F({
    id: "easy-metamagic",
    name: "Easy Metamagic",
    category: "metamagic",
    source: SRC_SURGE,
    prerequisites: ["Any other metamagic feat"],
    benefitSummary:
      "Choose a metamagic feat you already have. When preparing or casting a spell modified by that metamagic feat, you can lower the spell-slot cost of the metamagic by one; you can never reduce the spell-slot cost below one level higher than the spell's actual level.",
    special: "You can gain this feat multiple times. Each time you take the feat, you must choose a new metamagic feat.",
  }),
  F({
    id: "holy-mount",
    name: "Holy Mount",
    source: SRC_SURGE,
    prerequisites: ["Ability to gain a paladin special mount", "Any other divine spellcasting class level 1st"],
    benefitSummary:
      "When determining the abilities of your paladin special mount, you can add together your paladin levels and the levels of your other divine spellcasting classes.",
  }),
  F({
    id: "hymnist",
    name: "Hymnist",
    source: SRC_SURGE,
    prerequisites: ["Bardic music ability", "Ability to cast divine spells"],
    benefitSummary:
      "Your faith strikes such a deep chord within you that Perform is always a class skill for you. You also gain a bonus on all Perform checks equal to your Wisdom bonus.",
  }),
  F({
    id: "theurgic-bond",
    name: "Theurgic Bond",
    source: SRC_SURGE,
    prerequisites: ["Ability to gain a familiar", "Ability to gain an animal companion"],
    benefitSummary:
      "Choose a familiar or animal companion you already have. When determining the abilities of your chosen familiar or animal companion, you can combine the levels of your spellcasting classes that grant either an animal companion or a familiar.",
    special:
      "You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a different familiar or animal companion.",
  }),
  F({
    id: "theurgic-creationist",
    name: "Theurgic Creationist",
    source: SRC_SURGE,
    prerequisites: ["Any item creation feat", "Able to cast spells from two different spell lists"],
    benefitSummary:
      "When acquiring an item creation feat or creating a magic item, you can add together the caster levels of all your spellcasting classes to determine your caster level.",
  }),
  F({
    id: "theurgic-empathy",
    name: "Theurgic Empathy",
    source: SRC_SURGE,
    prerequisites: ["Bardic music ability", "Druid level 1st or ranger level 1st"],
    benefitSummary: "When using your wild empathy ability, you can add your bard levels to your roll.",
  }),
  F({
    id: "theurgic-mount",
    name: "Theurgic Mount",
    source: SRC_SURGE,
    prerequisites: ["Ability to gain a paladin special mount", "Ability to cast arcane spells"],
    benefitSummary:
      "When determining the abilities of your paladin special mount, you can add together your paladin levels and the levels of your arcane spellcasting classes.",
  }),
  F({
    id: "theurgic-specialist",
    name: "Theurgic Specialist",
    source: SRC_SURGE,
    prerequisites: ["Specialist wizard level 3rd", "Any other spellcasting class level 1st"],
    benefitSummary:
      "When casting a spell from your specialist school, regardless of which of your spellcasting classes' spell lists it comes from, you can add together the caster levels of all your spellcasting classes to determine your caster level. This does not affect your spells per day or spells known.",
  }),
  // ---- Heroic Feats: Getting Schooled ----
  F({
    id: "ability-enhancer",
    name: "Ability Enhancer",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (transmutation)", "Transmuter level 1st"],
    benefitSummary:
      "Any transmutation spell you cast that enhances ability scores increases the ability scores by +2 more than it normally does: for example, bull's strength grants a +6 enhancement bonus to Strength instead of +4.",
  }),
  F({
    id: "abjurative-potency",
    name: "Abjurative Potency",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (abjuration)", "Abjurer level 1st"],
    benefitSummary:
      "Any abjuration spell you cast that provides a bonus to Armor Class adds a bonus +1 higher than normal: for example, shield grants a +5 shield bonus instead of +4.",
  }),
  F({
    id: "charmer",
    name: "Charmer",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (enchantment)", "Enchanter level 1st"],
    benefitSummary:
      "Add +1 to the Difficulty Class of all saving throws against your spells from the enchantment (charm) subschool. This bonus stacks with the bonus provided by the Spell Focus feat.",
  }),
  F({
    id: "enhanced-shadow-reality",
    name: "Enhanced Shadow Reality",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (illusion)", "Illusionist level 1st"],
    benefitSummary:
      "Your illusion (shadow) spells deal one-fifth (20%) more real damage if disbelieved: for example, a creature summoned with shadow conjuration deals two-fifths (40%) of the damage a real creature of the same kind would deal instead of one-fifth (20%).",
  }),
  F({
    id: "evocation-resistance",
    name: "Evocation Resistance",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (evocation)", "Evoker level 1st"],
    benefitSummary:
      "You take 1 less point of damage per die rolled from evocation spells: for example, a fireball cast by a 5th-level caster deals 5d6\u22125 points of damage to you.",
  }),
  F({
    id: "girded-soul",
    name: "Girded Soul",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (necromancy)", "Necromancer level 1st"],
    benefitSummary: "You receive a +4 bonus on saves made to resist the effects of any energy drain or death effect.",
  }),
  F({
    id: "heavy-teleport",
    name: "Heavy Teleport",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (conjuration)", "Conjurer level 1st"],
    benefitSummary:
      "Your conjuration (teleportation) spells can teleport one additional Medium or smaller creature. Spells that teleport objects instead of people are not affected by this feat.",
  }),
  F({
    id: "hidden-thoughts",
    name: "Hidden Thoughts",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (divination)", "Diviner level 1st"],
    benefitSummary:
      "You gain a +4 bonus on Will saves made to resist divination spells, and a +4 bonus on Intelligence checks made to notice a scrying sensor.",
  }),
  F({
    id: "potent-enchantment",
    name: "Potent Enchantment",
    source: SRC_HEROIC,
    prerequisites: ["Spell Focus (enchantment)", "Enchanter level 1st"],
    benefitSummary:
      "Enchantment spells you cast that affect a certain number of Hit Dice, such as sleep or hypnotism, affect an additional 3 Hit Dice of creatures.",
  }),
];
