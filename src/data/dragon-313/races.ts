import type { RaceDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #313 pack (library-staging/packs/dragon-magazine/issue-313)
// The issue's two races: the Ghost Elf ("Ghost Elves," by Kieran
// Turley, pp. 70–73) and the Mortif, the deathtouched presented with
// full player-character information in "Born of Death" (by Trent
// Troop, pp. 65–66). Transcribed from the magazine text on
// archive.org (DragonMagazine313_djvu.txt), cross-checked against
// the realmshelps.net transcriptions of the Born of Death article
// and the Crystal Keep 3.5 races index / dandwiki transcription for
// the ghost elf. Trait descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.
//
// Decisions flagged in MANIFEST.md:
//  * Ghost elf level adjustment +1: the magazine OCR garbles the
//    line; +1 is confirmed by the Crystal Keep races index and the
//    dandwiki transcription of the article.
//  * The magazine does NOT print the standard elf +2 racial saving
//    throw bonus against enchantments for ghost elves (realmshelps
//    agrees); it is not added.
//  * The mortif record is named for the specific deathtouched
//    variety presented (the planetouched precedent — aasimar is a
//    record, "planetouched" is not); the deathtouched family is
//    covered in reference.md.
//  * Mortif ability modifiers (−2 Con, +2 Wis, +4 Cha) are verified
//    arithmetically against the article's sample 1st-level warrior
//    (pre-racial array 13/11/12/10/9/8).

const DM313 = "Dragon Magazine #313";
const DM313_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt";

export const DRAGON_313_RACES: RaceDefinition[] = [
  {
    id: "ghost-elf",
    name: "Ghost Elf",
    ruleset: "core",
    source: DM313,
    sourceUrl: DM313_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Elf"],
    abilityModifiers: { dex: 2, con: -4, int: 2 },
    favoredClass: "Wizard",
    levelAdjustment: 1,
    skillBonuses: { listen: 2, search: 2, spot: 2 },
    traits: [
      {
        key: "ghost-elf-sleep-immunity",
        name: "Immunity to Sleep",
        description: "Ghost elves are immune to magic sleep effects. (As printed, the magazine grants no saving throw bonus against enchantment spells and effects.)",
        category: "special-quality",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-low-light-vision",
        name: "Low-Light Vision",
        description: "A ghost elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.",
        category: "special-quality",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-candle-glow",
        name: "Candle Glow",
        description: "A ghost elf's skin sheds a soft glow, providing light in a 5-foot radius when she is in darkness. She can suppress the glow at will as a free action, but must succeed at a DC 10 Concentration check each round (a free action) to maintain the suppression.",
        category: "special-quality",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-weapon-proficiency",
        name: "Weapon Proficiency",
        description: "Ghost elves receive the Martial Weapon Proficiency feats for the short sword and the scimitar as bonus feats. (Unlike other elves, they receive no bow proficiencies.)",
        category: "feat",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-elven-senses",
        name: "Elven Senses",
        description: "+2 racial bonus on Listen, Search, and Spot checks. A ghost elf who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if she were actively looking for it.",
        category: "trait",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-planar-knowledge",
        name: "Planar Knowledge",
        description: "Knowledge (the planes) is a racial class skill for ghost elves, in addition to any class skills their classes provide.",
        category: "trait",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-ethereal-power",
        name: "Ethereal Power (Sp)",
        description: "Once per day, a ghost elf can use one of the following spell-like abilities, at a caster level equal to her character level. She may always choose a lower-level option instead of the highest she qualifies for. 1st level: slip binding (+10 enhancement bonus on Escape Artist checks for 1 minute per level; the bonus rises to +20 at 5th level and +30 at 9th level). 4th level: see invisibility. 6th level: blink. 14th level: ethereal jaunt. 18th level: ethereal shift (as ethereal jaunt, except the ghost elf shifts herself and objects she carries to or from the Ethereal Plane and remains there until she uses the ability again or other magic transports her).",
        category: "special-attack",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "ghost-elf-languages",
        name: "Languages",
        description: "Automatic languages: Ghost Elven and Infernal. Bonus languages: Common, Dwarven, Elven, Sylvan, and Terran.",
        category: "trait",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
    ],
  },
  {
    id: "mortif",
    name: "Mortif",
    ruleset: "core",
    source: DM313,
    sourceUrl: DM313_PATH,
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native"],
    abilityModifiers: { con: -2, wis: 2, cha: 4 },
    favoredClass: "Sorcerer",
    levelAdjustment: 1,
    skillBonuses: { intimidate: 2, "move-silently": 2 },
    traits: [
      {
        key: "mortif-darkvision",
        name: "Darkvision",
        description: "Darkvision out to 60 feet.",
        category: "special-quality",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "mortif-resistances",
        name: "Resistances",
        description: "Resistance to cold 5 and electricity 5.",
        category: "special-quality",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "mortif-chill-touch",
        name: "Chill Touch (Sp)",
        description: "A mortif can use chill touch once per day, at a caster level equal to its character level or 1st level, whichever is higher.",
        category: "special-attack",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "mortif-skills",
        name: "Deathtouched Skills",
        description: "+2 racial bonus on Intimidate and Move Silently checks.",
        category: "trait",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
      {
        key: "mortif-languages",
        name: "Languages",
        description: "Automatic languages: Common. (The magazine prints no bonus language list for the mortif.)",
        category: "trait",
        source: DM313,
        sourceUrl: DM313_PATH,
      },
    ],
  },
];
