import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Familiars: Crouching Monkey, Hidden Toad (Encyclopaedia
// Arcane, Mongoose Publishing, MGP 1017, ©2003) — the six
// prestige classes of The Masters – Bound and Unbound,
// printed pp. 42–53, transcribed in full (progression tables
// included) from Shaun's own scanned copy (read visually,
// 2026-11-04). The PDF is image-only; printed page = PDF
// page − 2 throughout. 3.0-era presentation is kept as
// printed and noted, not modernised: class skill lists
// include the 3.0 skills Alchemy, Intuit Direction, Scry and
// Wilderness Lore where the book prints them, and the classes
// are written in the 3.0 prestige format (Requirements, no
// separate spells-known tables). Printing quirks are recorded
// as printed: the Ooze Lord's table gives all three saves the
// poor progression (+0/+0/+1/+1/+1), and the Acolyte of the
// Ghost's 5th level transforms the character using the 3.0
// ghost template printed in the class text. Feature texts are
// short mechanical paraphrases in our own words; no book
// prose is reproduced.
// Source PDF: /A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf

const FAM = "Familiars: Crouching Monkey, Hidden Toad";
const FAM_URL =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf";
const AOG = `${FAM} — Acolyte of the Ghost`;
const BEA = `${FAM} — Beastheart`;
const LIB = `${FAM} — Libertine Darktongue`;
const MAG = `${FAM} — True Magi`;
const OOZ = `${FAM} — Ooze Lord`;
const TRE = `${FAM} — Treantblood`;

function mk(source: string) {
  return function f(
    name: string,
    description: string,
    category: FeatureDefinition["category"] = "special-quality",
  ): FeatureDefinition {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category,
      source,
      sourceUrl: FAM_URL,
    };
  };
}

const fa = mk(AOG);
const fb = mk(BEA);
const fl = mk(LIB);
const fm = mk(MAG);
const fo = mk(OOZ);
const ft = mk(TRE);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const HALF5 = [0, 1, 1, 2, 2];
const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const POOR5 = [0, 0, 1, 1, 1];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const GOOD5 = [2, 3, 3, 4, 4];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const TRE_FORT = [2, 3, 3, 4, 4];

export const FAMILIARS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "acolyte-of-the-ghost",
    name: "Acolyte of the Ghost",
    ruleset: "core",
    source: `${AOG} (pp. 42–45)`,
    sourceUrl: FAM_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, POOR5, POOR5, GOOD5),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Hide", "Knowledge", "Listen",
      "Move Silently", "Profession", "Search", "Sense Motive", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Alignment: any non-good",
      "Skills: Knowledge (arcana) 15 ranks",
      "Feats: Cultivate Link (undead), Unbroken Bond (undead)",
      "Special: must have an undead familiar",
    ],
    features: [
      fa("Weapon and Armour Proficiency", "Acolytes of the ghost gain no new weapon or armour proficiencies.", "trait"),
      fa("Spells per Day", "At 1st, 3rd and 5th level the acolyte gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      fa("The Coming Death", "On entering this class the acolyte contracts the coming death, a disease he automatically fails his save against; incubation takes only a round. Initial damage: 2 permanent points drained from both Strength and Constitution (no save). Thereafter he must make a Fortitude save (DC 20) every day or take 1d4 points of temporary Strength and Constitution damage as a secondary effect; failing a further save (DC 20) against that effect makes 1 point of the loss permanent, and temporary losses are cured only by a successful save against the secondary effect (permanent loss is never restored). He may use no magical healing while infected — if he does, he immediately loses a level in this class, his experience total set to the midpoint of the previous level. His skin becomes deathly pale and dried; if killed by the disease he immediately becomes a wight. If he survives, once per week he can use a special touch attack to deliver the coming death to another creature (initial Fortitude save DC 20 to avoid infection, a day's incubation, a save against the initial damage, and it may be cured by magical means without ill effect).", "special-quality"),
      fa("The Maddening", "On reaching 2nd level the acolyte contracts the maddening, a second disease he automatically fails his save against; incubation takes only a round. Initial damage: 2 permanent points drained from Wisdom (no save). Thereafter he must make a Fortitude save (DC 20) every day or take 1d4 points of temporary Wisdom damage; failing a further save (DC 20) makes 1 point of the loss permanent, and as with the coming death he may use no magical healing while infected on pain of immediately losing a class level, and temporary losses clear only after a successful save against the secondary effect. His skin becomes almost pitch black; if brought to 0 Wisdom by the disease he dies and immediately becomes an allip. If he survives, once per week he can use a special touch attack to deliver the maddening to another creature (an initial save avoids infection, incubation takes a day, the victim is allowed a save against the initial damage, and it may be cured by magical means without ill effect).", "special-quality"),
      fa("Death of the Flesh", "At 4th level the acolyte is forevermore treated as an undead creature: immune to mind-affecting effects, poison, sleep, paralysis, stunning, disease, death effects, nonlethal damage, ability damage, ability drain, energy drain and critical hits. He loses his Constitution score and is therefore immune to anything requiring a Fortitude save (unless it affects objects); he uses his Charisma modifier for Concentration checks. He is immune to death from massive damage, but is immediately destroyed if reduced to 0 hit points.", "special-quality"),
      fa("Ghost Form", "At 5th level the acolyte sheds its material form and essentially becomes a ghost. Hit Dice become d12. Speed: fly 30 feet (or the base creature's higher fly speed) with perfect manoeuvrability. AC: natural armour applies only in ethereal encounters; when manifested, natural armour is +0 but the acolyte gains a deflection bonus equal to its Charisma modifier or +1, whichever is higher. It retains the base creature's attacks and special attacks except those relying on physical contact, which do not affect non-ethereal creatures, and gains the incorporeal subtype and the manifestation ability plus the special attacks below (their saves have a DC of 15 + the acolyte's Charisma modifier). Abilities: no Constitution score, and Charisma increases by +4. Skills: +8 racial bonus to Hide, Listen, Search and Spot checks. Manifestation (Su): as an ethereal creature the acolyte cannot affect or be affected by the material world until it manifests, becoming visible but remaining incorporeal; a manifested acolyte stays on the Ethereal Plane but can be attacked from both planes, can strike with a touch attack or a ghost touch weapon, and its spells affect ethereal targets and — unless they rely on touch — material targets normally, though its touch spells and supernatural abilities (including the two disease touch attacks) do not work on material targets; an unmanifested spellcasting acolyte's spells cannot affect the Material Plane at all. Corrupting Touch (Su): an incorporeal attack that hits a living target deals 1d4 damage (against ethereal opponents the acolyte adds its Strength modifier to attack and damage; against material opponents its Dexterity modifier to attack rolls only). Horrific Appearance (Su): three times per day, any living creature within 60 feet that views the acolyte must make a Fortitude save or suffer 1d4 points of permanent Strength, Constitution and Wisdom drain; a successful save grants immunity to that acolyte's appearance for one day, and a creature killed by the Constitution drain may be raised as a wight, or one drained to 0 Wisdom as an allip — the acolyte can raise and control only a number of wights or allips equal to its Charisma modifier. Telekinesis (Su): telekinesis once per round as a free action, as cast by a sorcerer whose level equals the acolyte's HD. Rejuvenation (Su): a 'destroyed' acolyte's spirit usually restores itself in five days; one that would otherwise be destroyed returns to its remains with a successful level check (1d20 + HD) against DC 30 — destroying the remains is the only sure way to be rid of it. The remains (and favoured items) are hidden in a place only the acolyte knows, usually guarded by it and its minions: touching them requires a Fortitude save (DC 20) or contracts the touch-attack form of the coming death, and destroying them (by submersion in blessed water) forces all within 60 feet to save (DC 20) or contract the maddening likewise. Turn Resistance (Ex): +4 turn resistance; the acolyte's familiar also gains this resistance while within 30 feet. Ghostly Equipment: at 5th level all the acolyte's equipment and carried items usually become ethereal with it, and it retains five particularly valued items as ethereal copies that work normally on the Ethereal Plane and pass harmlessly through material objects and creatures (a +1 or better weapon can still harm material creatures when the acolyte manifests, and enchanted weapons can harm the acolyte); the original material items remain behind with the acolyte's remains, and if another creature seizes an original, its ethereal copy fades away.", "special-quality"),
    ],
  },
  {
    id: "beastheart",
    name: "Beastheart",
    ruleset: "core",
    source: `${BEA} (pp. 45–47)`,
    sourceUrl: FAM_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF5, POOR5, POOR5, GOOD5),
    classSkills: ["Concentration", "Craft", "Handle Animal", "Knowledge", "Profession", "Spellcraft"],
    prerequisites: [
      "Alignment: any",
      "Skills: Knowledge (arcana) 15 ranks",
      "Feats: Cultivate Link (magical beast), Unbroken Bond (magical beast)",
      "Special: must have a magical beast familiar",
    ],
    features: [
      fb("Weapon and Armour Proficiency", "Beasthearts gain no new weapon or armour proficiencies.", "trait"),
      fb("Spells per Day", "At 1st, 3rd and 5th level the beastheart gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      fb("Bestial Property", "At 1st, 3rd and 5th level the beastheart gains a bestial property drawn from his familiar, and takes on some physical aspect of the familiar as a side effect: Attack Bonus — +1 bonus to attacks; he cannot gain an attack bonus greater than that of the familiar's base creature (so with a dog familiar, attack bonus +2, this property could be taken at most twice); Natural Armor — +1 natural armor, never more than the familiar's base creature's unmodified natural armor, and his skin takes on aspects of the familiar's hide; Natural Weapon — gains one of the familiar's natural weapon attack types (damage by the beastheart's size: Small bite 1d4 / claw 1d3 / gore 1d4 / slam 1d2; Medium 1d6 / 1d4 / 1d6 / 1d3; Large 1d8 / 1d6 / 1d8 / 1d4), gaining an appropriate physical aspect; Racial Saves — +2 to either Fortitude or Reflex saves, but no save may be raised beyond the bonus the familiar's base creature has in it; Racial Skills — gains one of the familiar's base creature's racial skill bonuses (if the bonus rests on one of the familiar's special qualities, that quality must be taken first), with any physical aspects that grant it; Racial Feats — gains one of the feats of the familiar's base creature (may only be taken once); Special Qualities — gains one of the special qualities of the familiar's base creature, usually with its physical aspects.", "special-quality"),
      fb("Special Qualities", "At 2nd and 4th level the beastheart gains one of the special qualities from his familiar's base creature, usually taking on the physical aspects, if any, that grant his familiar that quality.", "special-quality"),
      fb("Bestial Self", "At 5th level the beastheart is forevermore treated as a magical beast and gains the spell-like ability to resurrect his magical beast familiar from the dead once per year, as per the resurrection spell: he must spend ten minutes in meditation and sprinkle 500 gp worth of diamond dust or some other precious material over the dead familiar or the place of its death. The beastheart still suffers the XP loss associated with his familiar's death.", "special-quality"),
    ],
  },
  {
    id: "libertine-darktongue",
    name: "Libertine Darktongue",
    ruleset: "core",
    source: `${LIB} (pp. 47–48)`,
    sourceUrl: FAM_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Disguise", "Escape Artist", "Hide",
      "Intimidate", "Knowledge", "Move Silently", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: chaotic evil",
      "Ability scores: Intelligence 15+, Charisma 15+",
      "Skills: Concentration 13 ranks, Knowledge (arcana) 13 ranks, Spellcraft 10 ranks",
      "Feats: at least two metamagic feats, Spell Penetration, Skill Focus (Knowledge (arcana))",
      "Spells: able to cast 5th-level arcane spells and know alter self, bestow curse, blindness/deafness, charm person, confusion, magic circle against good/law, and suggestion",
      "Special: must have successfully performed the ritual of power",
    ],
    features: [
      fl("Weapon and Armour Proficiency", "Libertine darktongues gain no new weapon or armour proficiencies.", "trait"),
      fl("Spells per Day", "At every level except 2nd, 5th and 8th the libertine darktongue gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      fl("Suggestive Tone", "At 1st level, the libertine darktongue can make a suggestion to all those within a 30-foot radius, as per the suggestion spell, a number of times per day equal to his Charisma modifier. He also becomes immune to suggestion and charm effects.", "special-attack"),
      fl("Form Coven", "At 2nd level, the libertine darktongue can bond himself with a number of libertine darktongues equal to his level in this class. While within a coven he gains access to a shared pool of spells — alter self, bestow curse, blindness/deafness, charm person, confusion, suggestion and magic circle against good/law — which members of the coven may cast a total number of times per day equal to half the current number of members (rounded down). He also gains additional hit points equal to the number of current members in the coven, which replenish whenever he rests for at least eight hours.", "special-quality"),
      fl("Bonus Feat", "At 3rd level and every three levels thereafter (6th and 9th), the libertine darktongue gains a bonus feat from the following list: metamagic feats, item creation feats, Combat Casting, or Spell Focus.", "feat"),
      fl("Confusing Tongue", "At 5th level, the libertine darktongue gains the supernatural ability to sow confusion in all who are within 30 feet, as per the confusion spell, a number of times per day equal to his Charisma modifier. He also becomes immune to confusion spells and their effects.", "special-attack"),
      fl("Cursed Voice", "At 8th level, the libertine darktongue gains the supernatural ability to curse all those within 30 feet, as per the bestow curse spell, a number of times per day equal to his Charisma modifier. He also becomes immune to curse spells and their effects.", "special-attack"),
      fl("Evil Word", "At 10th level, the libertine darktongue gains the supernatural ability to kill a single creature within 30 feet with a mere word, usable once per day; the victim must make a successful Fortitude save (DC 15 + the libertine darktongue's Charisma modifier) or die. He also gains immunity to death effects.", "special-attack"),
    ],
  },
  {
    id: "true-magi",
    name: "True Magi",
    ruleset: "core",
    source: `${MAG} (pp. 48–50)`,
    sourceUrl: FAM_URL,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Knowledge", "Profession",  "Spellcraft",
    ],
    prerequisites: [
      "Alignment: any",
      "Skills: Concentration 13 ranks, Knowledge (arcana) 13 ranks, Spellcraft 13 ranks",
      "Spells: able to cast 5th-level arcane spells",
      "Feats: at least two metamagic feats, Spell Penetration, Skill Focus (Knowledge (arcana))",
      "Special: must have successfully performed the ritual of independence",
    ],
    features: [
      fm("Weapon and Armour Proficiency", "True magi gain no new weapon or armour proficiencies.", "trait"),
      fm("Spells per Day", "At every level the true magi (the class text also uses the singular 'true magus') gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      fm("Aura of Resistance", "At 1st level the true magi gains spell resistance of 10 + his current level in the true magus class. This is a supernatural ability.", "special-quality"),
      fm("Arcane Secret", "At 4th, 7th and 10th level the true magi gains one of the following special abilities. Arcane Defense: a +1 insight bonus to all saving throws involving spells and spell-like abilities (may only be taken once). Arcane Feat: a bonus feat from the following list — metamagic feats, item creation feats, Combat Casting, or Spell Focus (may be taken multiple times). Arcane Focus: a +3 insight bonus to the Difficulty Class for all saving throws against spells from a certain school of magic (may only be taken once). Arcane Penetration: a +3 insight bonus to caster level checks to beat spell resistance (may only be taken once). Arcane Resistance: +2 points of spell resistance (may only be taken once). Arcane Skill: a +3 insight bonus to one of his class skills (may only be taken once).", "special-quality"),
      fm("Arcane Insight", "At 5th level the true magi gains a +2 insight bonus to his primary spellcasting ability — Charisma for sorcerers and Intelligence for wizards.", "special-quality"),
    ],
  },
  {
    id: "ooze-lord",
    name: "Ooze Lord",
    ruleset: "core",
    source: `${OOZ} (pp. 50–52)`,
    sourceUrl: FAM_URL,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: [],
    progression: rows(TQ5, POOR5, POOR5, POOR5),
    classSkills: [
      "Concentration", "Craft", "Disguise", "Escape Artist", "Knowledge", "Profession", "Spellcraft",
    ],
    prerequisites: [
      "Alignment: any neutral",
      "Skills: Knowledge (arcana) 15 ranks",
      "Feats: Cultivate Link (ooze), Unbroken Bond (ooze)",
      "Special: must have an ooze familiar",
    ],
    features: [
      fo("Weapon and Armour Proficiency", "Ooze lords gain no new weapon or armour proficiencies. (Note: the class table prints all three saving throws on the poor progression — recorded as printed.)", "trait"),
      fo("Spells per Day", "At 1st, 3rd and 5th level the ooze lord gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      fo("Aspect of the Ooze — Extra Hit Points", "All Aspect of the Ooze abilities are extraordinary. At 1st level the ooze lord gains extra hit points depending on his size: Small 5, Medium 10, Large 15.", "special-quality"),
      fo("Aspect of the Ooze — Natural Weapon", "At 2nd level the ooze lord gains the natural weapon attacks of his familiar: a slam whose damage is set by the ooze lord's size (Small 1d4, Medium 1d6, Large 1d8) plus the normal secondary effect associated with his familiar's ooze type (such as 1d6 points of acid damage for a gray ooze), which applies only to slam attacks. His skin becomes more viscous to the touch, and he suffers a −2 penalty to Charisma-based checks.", "special-attack"),
      fo("Aspect of the Ooze — Blindsight", "At 3rd level the ooze lord gains blindsight out to 60 feet and can detect the whereabouts of others by scent and vibration. As a side effect he suffers a −2 penalty to Wisdom-based checks due to his higher dependency upon this ability.", "special-quality"),
      fo("Aspect of the Ooze — Alter Form", "At 4th level the ooze lord gains the spell-like ability to alter his appearance at will, exactly like the alter self spell as cast by a 16th-level caster.", "special-quality"),
      fo("Ooze Lord", "At 5th level the ooze lord is forevermore treated as an ooze and gains the following benefits: immune to mind-affecting effects, poison, sleep, paralysis, stunning, polymorphing, and critical hits. He also suffers a −2 penalty to Intelligence-based checks from the strange effect becoming an ooze has upon him.", "special-quality"),
      fo("Viscous Form", "At 5th level the ooze lord gains the ability to squeeze his way through openings of fine size, though not less than half an inch around. Activating the ability takes a full-round action; while in viscous form he cannot cast spells with verbal, somatic, material, or focus components (though he can use any metamagic feats that might negate this restriction), he loses his supernatural abilities, his touch spells are suppressed, and he moves at a base speed of 10 feet. Returning to normal form also takes a full-round action.", "special-quality"),
    ],
  },
  {
    id: "treantblood",
    name: "Treantblood",
    ruleset: "core",
    source: `${TRE} (pp. 52–53)`,
    sourceUrl: FAM_URL,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ5, TRE_FORT, POOR5, POOR5),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Intimidate", "Survival", "Knowledge",
      "Listen", "Profession",  "Sense Motive", "Spellcraft", "Spot", 
    ],
    prerequisites: [
      "Alignment: any good",
      "Skills: Knowledge (arcana) 15 ranks",
      "Feats: Cultivate Link (plant), Unbroken Bond (plant)",
      "Special: must have a treant familiar",
    ],
    features: [
      ft("Weapon and Armour Proficiency", "Treantbloods gain no new weapon or armour proficiencies. Class skills: Craft (alchemy) (Int) and Survival (Wis).", "trait"),
      ft("Spells per Day", "At 1st, 3rd and 5th level the treantblood gains new spells per day (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class; he gains no other benefit of that class (such as metamagic or item creation feats).", "trait"),
      ft("Treant Trait — Natural Armor", "All Treant Trait abilities are extraordinary. At 1st level the treantblood gains a natural armor bonus equal to his current levels in the treantblood class; as a side effect his skin becomes tough like wood.", "special-quality"),
      ft("Treant Trait — Natural Weapon", "At 2nd level the treantblood gains a slam attack dealing damage by his size (Small 1d4, Medium 1d6, Large 1d8); he does double damage against objects and structures when taking a full round attack. As a side effect his hands become knotted and wooden.", "special-attack"),
      ft("Treant Trait — Piercing Resistance", "At 3rd level the treantblood only suffers half damage from piercing weapons (minimum of 1 point of damage).", "special-quality"),
      ft("Treant Trait — Treant Growth", "At 4th level the treantblood increases its size category by one, with the matching increase to its slam damage (Medium 1d6, Large 1d8, Huge 1d10), and gains the ability to trample creatures of a certain size category or smaller (a Medium treantblood tramples Tiny creatures, Large tramples Small, Huge tramples Medium size). Trampling deals double damage plus one and a half times its Strength modifier; opponents who do not make attacks of opportunity (at −4 to hit) against the treantblood can make a Reflex save (DC 10 + one for each treantblood class level + its Strength modifier) to avoid the trample.", "special-attack"),
      ft("Treant Form", "At 5th level the treantblood is forevermore treated as a plant and gains the following benefits: immune to mind-affecting effects, poison, sleep, paralysis, stunning, polymorphing, and critical hits. He also gains the spell-like ability to polymorph into a treant once per day, the fire vulnerability weakness, and −2 to his Dexterity.", "special-quality"),
    ],
  },
];
