// Dragon Magazine #322 (August 2004) — magic items.
// All thirteen records come from "Sneaky, Stealthy, and Stylish:
// New Magic Items for Assassins, Rogues, and Bards" by Richard
// Farrese (pp. 54–58). Every value was verified against the page
// images (magazine pp. 55–58), which correct the OCR layer in
// several places: Bracers of Blocking cost 7,000 gp (OCR garbled
// the price); Dagger of Torment costs 109,100 gp; Sap of Stunning
// is CL 9th and weighs 5 lb. (OCR read CL 3rd); Amulet of Good
// Fortune costs 27,000 gp (OCR read 37,000) and its aura really
// is printed as "Strong abjuration; CL 3rd" — carried as printed;
// Sword of Murder deals an additional +2d6 damage (OCR dropped
// the die size); Drum of the Shadow Hound has a Market Price of
// 166,000 gp; the fey flutes' shared Perform bonus is +5 insight
// (OCR read "1-5"), and the Satyr Bone Flute requires Perform 4
// ranks (OCR read 5).
//
// One suffix: SAP OF STUNNING stages as sap-of-stunning-322. The
// catalog's OMNI fan index holds a stub record under the plain id
// ("Sap that stuns those it strikes (see book entry)", attributed
// there to the Arms and Equipment Guide); per the issue-319
// precedent the fan stub stands and the full magazine extraction
// stages suffixed.
//
// Aura, caster level, and construction prerequisites are folded
// into each summary, matching the live MagicItemDefinition shape.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { MagicItemDefinition } from "@/engine/types";

const DM322 = "Dragon Magazine #322 — Sneaky, Stealthy, and Stylish";
const URL322 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt";

export const DRAGON_322_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "armor-of-the-woodland",
    name: "Armor of the Woodland",
    category: "armor",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "75,755 gp",
    summary:
      "Body slot. A suit of +3 leather armor shaped like a vest of leaves and bark, almost as light as a wool shirt. Whenever the wearer travels through a forest, he adds 10 feet to his base land speed and gains the trackless step ability of druids. The armor's most impressive power allows its wearer to enter trees and magically transport from one to another three times per day; this ability works just like the tree stride spell as cast by a 9th-level druid. Moderate conjuration; CL 9th; Craft Magic Arms and Armor, woodland stride ability or pass without trace, tree stride. Weight: 1 lb.",
  },
  {
    id: "bracers-of-blocking",
    name: "Bracers of Blocking",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "7,000 gp",
    summary:
      "Wrists slot. Sturdy iron bracers, unnaturally light and each carved with the shape of a tiny shield. Bracers of blocking provide a +2 armor bonus to Armor Class. In addition, whenever the wearer fights defensively or uses the total defense standard action, he gains an additional +2 dodge bonus to his Armor Class. Faint conjuration and transmutation; CL 5th; Craft Wondrous Item, cat's grace, mage armor. Weight: 1 lb.",
  },
  {
    id: "dagger-of-torment",
    name: "Dagger of Torment",
    category: "weapon",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "109,100 gp",
    summary:
      "This weapon acts as a +1 keen dagger, but with every successful hit, the victim must succeed at a DC 16 Will save or be afflicted by a dreadful vision: the wielder of the blade appears as an animated, rotting corpse, often of someone the victim cares greatly about, and the victim is dazed for 1 round. This power is a mind-affecting illusion (phantasm) fear effect. Once per day, the dagger's wielder can curse a creature dazed by it (the wielder must decide to activate the curse ability after he has made a successful hit with the dagger and after he has determined if the daze effect has affected the victim): victims of this curse are plagued with flashbacks of the visions they experienced from the dagger, causing them to take a −4 penalty on all attack rolls, saving throws, ability checks, and skill checks. The curse can be lifted as per bestow curse. Creatures immune to the dagger of torment's daze ability are also immune to its bestow curse ability. Moderate illusion; CL 7th; Craft Magic Arms and Armor, bestow curse, keen edge, phantasmal killer. Weight: 1 lb.",
  },
  {
    id: "rapier-of-disarming",
    name: "Rapier of Disarming",
    category: "weapon",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "32,320 gp",
    summary:
      "When used to attack a foe, a rapier of disarming acts as a +2 rapier. When used to disarm an opponent, however, this weapon provides its wielder with an additional +4 insight bonus on the roll. The wielder of a rapier of disarming gains the use of the Improved Disarm feat, even if she doesn't meet the prerequisites for it. Moderate transmutation; CL 12th; Combat Expertise, Craft Magic Arms and Armor, Improved Disarm. Weight: 3 lb.",
  },
  {
    id: "sap-of-stunning-322",
    name: "Sap of Stunning",
    category: "weapon",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "32,301 gp",
    summary:
      "A sap of stunning is a +2 ki focus sap that deals 2d6 points of nonlethal damage with a successful hit. Moderate transmutation; CL 9th; Craft Magic Arms and Armor. Weight: 5 lb.",
  },
  {
    id: "sword-of-murder",
    name: "Sword of Murder",
    category: "weapon",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "18,310 gp",
    summary:
      "A sword of murder is a +1 scimitar. Whenever the sword is used to kill a creature with at least a 3 Intelligence that does not view the wielder as an enemy (the victim has an attitude of indifferent or better toward the wielder immediately prior to the wielder's attack), the sword deals an additional +2d6 points of damage with every successful hit for the next 24 hours. The sword of murder's wielder must complete a murder within 10 rounds of making his first attack against the unsuspecting victim to gain the benefit of the sword's additional damage. Moderate necromancy; CL 9th; Craft Magic Arms and Armor, death knell. Weight: 3 lb.",
  },
  {
    id: "amulet-of-good-fortune",
    name: "Amulet of Good Fortune",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "27,000 gp",
    summary:
      "Neck slot. Small wooden amulets that come in three distinct shapes, each demonstrating a particular set of distinct abilities. Brown Bear: the brown bear amulet of good fortune provides a +4 luck bonus on all Fortitude saving throws, and also grants the wearer low-light vision. Gray Elephant: the gray elephant amulet of good fortune gives its wearer a +4 luck bonus on all Will saving throws, and the owner also gains the Blind-Fight feat as a bonus feat as long as she wears the amulet. White Owl: the white owl amulet of good fortune provides a +4 luck bonus on all Reflex saving throws, and also grants the wearer low-light vision. Strong abjuration; CL 3rd; Craft Wondrous Item, bear's endurance (brown bear), bull's strength (gray elephant), cat's grace (white owl). Weight: —. (Aura and caster level carried exactly as printed.)",
  },
  {
    id: "brooch-of-alertness",
    name: "Brooch of Alertness",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "39,600 gp",
    summary:
      "A tiny ivory sculpture set within a silver frame, depicting the face of a human-like female bearing several animal features. A brooch of alertness grants its wearer a +4 insight bonus on all Listen, Search, Spot, and Survival skill checks. As long as its owner wears the brooch, she gains low-light vision and 60-foot darkvision. Faint transmutation; CL 3rd; Craft Wondrous Item, Alertness, darkvision. Weight: —.",
  },
  {
    id: "drum-of-the-shadow-hound",
    name: "Drum of the Shadow Hound",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "166,000 gp",
    summary:
      "To activate the power of a drum of the shadow hound, a character simply has to play it, using a standard action to do so; regardless of how many taps on the drum are required to activate an ability, a user can only use one ability per round. One Tap — Deeper Darkness (3/day): functions as the spell of the same name, with the area of effect centered upon the drum; the drummer can end this effect at any time by tapping once more upon the drum. Two Taps — Shadow Blend (2/day): in any conditions other than full daylight (or the daylight spell), the drum's user gains the effect of the greater invisibility spell; such bright conditions reveal the drummer, although the effect does not end, and the drummer can become invisible again simply by moving out of the lighted area, and may cancel the power at any time before it expires by tapping twice more upon the drum's skin. Three Taps — Summon Shadow Mastiff (1/day): functions as an extended summon monster V spell as cast by an 11th-level sorcerer, except it only summons a shadow mastiff. Four Taps — Fearful Baying (2/day): the instrument imitates the terrible baying sound of a shadow mastiff, creating an effect that functions as the fear spell, except that all evil outsiders and the drum's owner are immune to the effect; this is a sonic, mind-affecting, fear effect. Moderate conjuration; CL 9th; Craft Wondrous Item, deeper darkness, fear, greater invisibility, summon monster V. Weight: 6 lb.",
  },
  {
    id: "nixie-bone-flute",
    name: "Nixie Bone Flute",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "17,335 gp",
    summary:
      "A fey flute fashioned from the bone of a nixie. All fey flutes are masterwork musical instruments granting the usual +2 circumstance bonus on Perform checks involving their use, and a +5 insight bonus on all Perform checks made with the instrument. This flute allows the wielder to cast charm person three times per day (creatures who succeed at a DC 11 Will save are unaffected by the flute's power). In addition, the owner can also cast water breathing once per day. Faint transmutation; CL 5th; Craft Wondrous Item, Perform 7 ranks, charm person, water breathing. Weight: 1 lb.",
  },
  {
    id: "nymph-bone-flute",
    name: "Nymph Bone Flute",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "13,557 gp",
    summary:
      "A fey flute carved from the bone of a nymph. All fey flutes are masterwork musical instruments granting the usual +2 circumstance bonus on Perform checks involving their use, and a +5 insight bonus on all Perform checks made with the instrument. Three times per day, the wielder can play the flute and cause a target to become blind, as the blindness/deafness spell; the target creature must succeed at a DC 13 Fortitude save to resist the effect. Once per day, the wielder can gain unearthly grace as he plays, as if affected by the eagle's splendor spell. Faint transmutation; CL 3rd; Craft Wondrous Item, Perform 5 ranks, blindness/deafness, eagle's splendor. Weight: 1 lb.",
  },
  {
    id: "pixie-bone-flute",
    name: "Pixie Bone Flute",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "34,030 gp",
    summary:
      "A fey flute fashioned from the bone of a pixie. All fey flutes are masterwork musical instruments granting the usual +2 circumstance bonus on Perform checks involving their use, and a +5 insight bonus on all Perform checks made with the instrument. Three times per day, the user of a pixie bone flute can create a greater invisibility effect on himself, as per the spell. Moderate transmutation; CL 7th; Craft Wondrous Item, Perform 9 ranks, greater invisibility. Weight: 1 lb.",
  },
  {
    id: "satyr-bone-flute",
    name: "Satyr Bone Flute",
    category: "wondrous",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "7,460 gp",
    summary:
      "A fey flute made from the bone of a satyr. All fey flutes are masterwork musical instruments granting the usual +2 circumstance bonus on Perform checks involving their use, and a +5 insight bonus on all Perform checks made with the instrument. When he so chooses, the user of the satyr bone flute may cast cause fear, charm person, or sleep, as per the spells; each of these effects may be used once per day. Satyrs are unaffected by the flute's power. These powers are sonic, mind-affecting effects. Faint transmutation; CL 3rd; Craft Wondrous Item, Perform 4 ranks, cause fear, charm person, sleep. Weight: 1 lb.",
  },
];
