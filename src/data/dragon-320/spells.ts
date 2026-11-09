// Dragon Magazine #320 (June 2004) — spells.
// Transcribed from the magazine text on archive.org
// (DragonMagazine320_djvu.txt) and verified against the page
// images (magazine pp. 90–94), which govern wherever the OCR
// layer garbles numbers.
//
// All ten records come from "Under Command: Forms of Legend —
// A Shapechanging Giants of Legend Preview" by Jesse Decker
// (pp. 90–94). The survey brief expected the article's spells to
// be D&D Miniatures skirmish forms; they are not — the article
// prints ten complete RPG spells (the miniatures connection is
// only the article's framing and its "New Spells" sidebar list),
// so all ten stage. The issue's #318 Under Command precedent
// (three skirmish-only commander classes staged none) does not
// apply to full stat blocks.
//
// Every one of the ten was reprinted in the Spell Compendium,
// and every reprint differs from the magazine version (levels,
// class lists, durations, or redesigned effects — see the note
// at the end of each summary). The catalog already holds the
// Spell Compendium versions (fan-index records in
// spells/spell-compendium-*.ts), so per the issue-318 rule the
// magazine versions stage suffixed -320 and both live.
//
// These spells print no Saving Throw or Spell Resistance lines
// (self-targeted form changes); both fields are carried as
// "None" / "No" per the house convention for unprinted lines.
// Summaries are faithful mechanical paraphrases in our own
// words; no magazine prose is reproduced.

import type { SpellDefinition } from "@/engine/types";

const DM320_UC = "Dragon Magazine #320 — Under Command: Forms of Legend";
const URL320 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine320_djvu.txt";

export const DRAGON_320_SPELLS: SpellDefinition[] = [
  {
    id: "aspect-of-the-earth-hunter-320",
    name: "Aspect of the Earth Hunter",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 6 },
    components: "V, S, M, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a bulette (see the Monster Manual, page 30). Your creature type changes to magical beast, and your size changes to Huge; you have the space and reach of a bulette (15 ft./10 ft.). You gain the Strength, Dexterity, and Constitution scores of an average bulette (Str 27, Dex 15, Con 20), but retain your own mental ability scores. Your base land speed becomes 40 feet, and you gain a burrow speed of 10 feet. You gain darkvision (60 feet even in total darkness), low-light vision, scent, and tremorsense to 60 feet. Your class and level, hit points, alignment, base attack bonus, and base saving throw bonuses all remain the same. You lose any extraordinary special abilities of your own form, as well as spell-like and supernatural abilities; you keep all extraordinary special attacks derived from class levels (such as a barbarian's rage or a rogue's sneak attack), but lose any from your normal form that are not derived from class levels. You cannot speak or cast spells while in bulette form; if you have the Natural Spell feat, you may cast spells normally. Your natural armor bonus becomes +12, regardless of any natural armor bonus from your normal form. You can make two claw attacks, which are natural weapons that deal 2d8+8 points of damage; while in bulette form you gain the bulette's leap extraordinary attack form, allowing you to make four claw attacks instead of two. Your equipment melds into your new form and becomes nonfunctional. Material component: a small piece of a bulette's armored shell. (The Spell Compendium version, p. 16, is Druid 6 / Ranger 4; the magazine version has no Ranger listing, so it stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "aspect-of-the-wolf-320",
    name: "Aspect of the Wolf",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 1, "Sorcerer/Wizard": 1 },
    components: "V, S, M/DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a wolf (see the Monster Manual, page 283). Your creature type changes to animal, and your size changes to Medium; you have the space and reach of a wolf (5 ft./5 ft.). You gain the Strength, Dexterity, and Constitution scores of an average wolf (Str 13, Dex 15, Con 15), but retain your own mental ability scores. Your base land speed becomes 50 feet, and you gain low-light vision and scent. Your class and level, hit points, alignment, base attack bonus, and base saving throw bonuses all remain the same. You lose any extraordinary special abilities of your own form, as well as spell-like and supernatural abilities; you keep all extraordinary special attacks derived from class levels (such as a barbarian's rage or a rogue's sneak attack), but lose any from your normal form that are not derived from class levels. You cannot speak or cast spells while in wolf form; if you have the Natural Spell feat, you may cast spells normally. Your natural armor bonus becomes +2, regardless of any natural armor bonus from your normal form. You gain a bite attack, which is a primary natural attack that deals 1d6+1 points of damage with each successful hit. While in wolf form, you gain the wolf's trip extraordinary attack form, allowing you to make a free trip attempt against any opponent that you hit with your bite attack. Your equipment melds into your new form and becomes nonfunctional. Arcane material component: a whisker from a wolf. (The Spell Compendium version, p. 16, is Druid 1 / Ranger 1 with no Sorcerer/Wizard listing, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "body-of-war-320",
    name: "Body of War",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a warforged titan (see the Eberron Campaign Setting). Your creature type changes to construct, and your size changes to Huge; you have the space and reach of a warforged titan (15 ft./15 ft.). Your mindset changes so that you relish combat and cannot cast spells, even from magic items. You gain the Strength and Dexterity scores of an average warforged titan (Str 28, Dex 8), but retain your own mental ability scores; you have no Constitution score while affected by this spell. Your base land speed becomes 50 feet. You gain darkvision (60 feet even in total darkness) and low-light vision. Your class and level, hit points, alignment, base attack bonus, and base saving throw bonuses all remain the same. You lose any extraordinary special abilities of your own form, as well as spell-like and supernatural abilities; you keep all extraordinary special attacks derived from class levels (such as a barbarian's rage or a rogue's sneak attack), but lose any from your normal form that are not derived from class levels. You cannot speak or cast spells while in warforged titan form. Your natural armor bonus becomes +18, regardless of any natural armor bonus from your normal form. As a construct, you have the following qualities: immunity to all mind-affecting effects, poison, sleep effects, paralysis, stunning, disease, death effects, necromancy effects, critical hits, nonlethal damage, ability damage, ability drain, fatigue, exhaustion, and energy drain, and to any effect that requires a Fortitude save (unless the effect also works on objects or is harmless). You also gain the warforged titan's two attack forms (axe and maul), along with the trample special ability (damage 1d8+13; Reflex half DC 25). The axe deals 2d8 points of slashing damage and has a x3 critical modifier; its maul (essentially a huge warhammer) deals 2d8 points of bludgeoning damage and also has a x3 critical modifier. Your equipment melds into your new form and becomes nonfunctional. Material component: a miniature bronze hammer. (The Spell Compendium version, p. 35, is Sorcerer/Wizard 7 with a redesigned effect, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "displacer-form-320",
    name: "Displacer Form",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a displacer beast (see the Monster Manual, page 66). Your creature type changes to magical beast, and your size changes to Large; you have the space and reach of a displacer beast (15 ft./5 ft. [10 ft. with tentacles]). You gain the Strength, Dexterity, and Constitution scores of an average displacer beast (Str 18, Dex 15, Con 16), but retain your own mental ability scores. Your base land speed becomes 40 feet. You gain darkvision (60 feet even in total darkness) and low-light vision. Your class and level, hit points, alignment, base attack bonus, and base saving throw bonuses all remain the same. You lose any spell-like abilities of your own form, and you lose any extraordinary special abilities from your normal form that are not derived from class levels; you retain your supernatural abilities, and you keep all extraordinary special attacks derived from class levels (such as a barbarian's rage or a rogue's sneak attack). You can speak and cast spells while in displacer beast form, but you must physically touch any necessary material components. Your natural armor bonus becomes +5, regardless of any natural armor bonus from your normal form. While in displacer beast form, you gain the displacer beast's displacement and resistance to ranged attacks abilities. Your equipment melds into your new form and becomes nonfunctional. Material component: a single claw from a displacer beast. (The Spell Compendium version, p. 67, rewrites the effect, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "holy-transformation-320",
    name: "Holy Transformation",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Good"],
    levels: { Cleric: 7 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a hound archon (see the Monster Manual, page 18). Your creature type changes to outsider (archon, good, lawful), and your size changes to Medium; you have the space and reach of a hound archon (5 ft./5 ft.). You gain a +4 sacred bonus to Strength and Constitution. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You gain a +4 sacred bonus on all saving throws. You gain damage reduction 5/evil. Evil creatures within 10 feet of you suffer a -2 penalty to attacks and saving throws. You gain the ability to speak and understand Celestial. (The Spell Compendium version, p. 116, redesigns the transformation — it grants wings and a different quality set — so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "holy-transformation-lesser-320",
    name: "Holy Transformation, Lesser",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Good"],
    levels: { Cleric: 4 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a protectar (see the Miniatures Handbook, page 66). Your creature type changes to outsider (good), and your size changes to Medium; you have the space and reach of a protectar (5 ft./5 ft.). You gain a +2 sacred bonus to Strength and Constitution. You gain a fly speed of 60 feet, with good maneuverability. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You gain a +2 sacred bonus on all saving throws. You gain the ability to speak and understand Celestial. (The Spell Compendium version, p. 116, redesigns the lesser transformation, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "infernal-transformation-320",
    name: "Infernal Transformation",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Evil"],
    levels: { Cleric: 7 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a bone devil (see the Monster Manual, page 52). Your creature type changes to outsider (baatezu, evil, lawful), and your size changes to Large; you have the space and reach of a bone devil (5 ft./10 ft.). You gain a +4 profane bonus to Strength and Constitution. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You gain damage reduction 5/good. You also grow a tail like a scorpion's: whenever you take the full-attack action, you can use the tail to make an additional attack each round at your highest attack bonus. A successful tail attack deals 3d4 points of damage, plus your Strength modifier; this attack overcomes damage reduction as if it were an evil weapon. Creatures hit by the tail attack must make a Fortitude saving throw (DC 10 + 1/2 your character level + your Constitution modifier) or be subjected to poison (injury; initial damage 1d6 Str, secondary damage 2d6 Str). Your equipment grows to match your new size and form, allowing the tail attack to function even if you are wearing heavy armor or other restrictive clothing. You gain the ability to speak and understand Infernal. (The Spell Compendium version, p. 122, redesigns the transformation, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "infernal-transformation-lesser-320",
    name: "Infernal Transformation, Lesser",
    ruleset: "core",
    school: "Transmutation",
    descriptors: ["Evil"],
    levels: { Cleric: 4 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a bearded devil (see the Monster Manual, page 52). Your creature type changes to outsider (baatezu, evil, lawful), and your size changes to Medium; you have the space and reach of a bearded devil (5 ft./5 ft.). You gain a +2 profane bonus to Strength and Constitution. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You grow a snaky beard: whenever you take the full-attack action, you can use the beard to make an additional attack each round at your highest attack bonus plus all appropriate modifiers. A successful beard attack deals 1d8 points of damage, plus your Strength modifier; this attack overcomes damage reduction as if it were an evil weapon. Creatures hit by the beard attack must make a Fortitude saving throw (DC 10 + 1/2 your character level + your Constitution modifier) or be affected by the devil chills disease (see the Dungeon Master's Guide). You gain the ability to speak and understand Infernal. (The Spell Compendium version, p. 122, redesigns the lesser transformation, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "primal-form-320",
    name: "Primal Form",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 3, "Sorcerer/Wizard": 3 },
    components: "V, S, DF/F",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "When you cast this spell, you choose an element (air, earth, fire, or water), and assume the physical appearance and many of the qualities and abilities of a Medium elemental of the chosen element (see the Monster Manual, pages 95-100). Primal form also grants you the elemental subtype appropriate to the chosen element. You gain a +4 bonus on saving throws against mind-affecting effects. You gain a 25% resistance to critical hits and sneak attacks, as if you were wearing armor with the light fortification special property (see the Dungeon Master's Guide). You cannot cast spells, and you lose any spell-like, supernatural, and extraordinary abilities of your own form. You gain additional abilities depending on the element you chose when you cast the spell: Air: fly speed 20 feet (perfect). Earth: damage reduction 5/-. Fire: 1d4 fire damage, fire resistance 10, burn. Water: swim 90 feet, drench. Your equipment melds into your new form and becomes nonfunctional. (The Spell Compendium version, p. 161, shortens the duration and redesigns the form, so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
  {
    id: "wild-runner-320",
    name: "Wild Runner",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Druid: 4 },
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Personal",
    targetOrArea: "You",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You assume the physical appearance and many of the qualities and abilities of a centaur (see the Monster Manual, page 32). Your creature type changes to monstrous humanoid, and your size changes to Large; you have the space and reach of a centaur (10 ft./5 ft.). You gain the Strength, Dexterity, and Constitution scores of an average centaur (Str 18, Dex 14, Con 15), but retain your own mental ability scores. Your base land speed becomes 50 feet. You gain darkvision, granting you the ability to see 60 feet even in total darkness. You may still use any extraordinary, spell-like, and supernatural abilities possessed by your normal form. You gain all the advantages of a quadruped form (greater carrying capacity, +4 bonus to resist trip attacks, and so on); this includes the ability to fight effectively while carrying a rider. You may still use your equipment and cast spells normally. (The Spell Compendium spell of this name, p. 239, is a different spell — a Druid 4 / Ranger 4 movement and endurance buff, not a centaur transformation — so the magazine version stages suffixed.)",
    source: DM320_UC,
    sourceUrl: URL320,
  },
];
