// Dragon Magazine #319 (May 2004) — feats.
// Transcribed from the magazine text on archive.org
// (DragonMagazine319_djvu.txt); the Faerie Mysteries Initiate
// "Carols" rite was verified against the page image (magazine
// p. 59), which shows the bonus applies to damage rolls only.
//
// Three groups stage (26 feats):
//   * "Greyhawk Feats" by Erik Mona (pp. 56–61): the TWENTY-TWO
//     regional feats that conclude the article begun in Dragon
//     #315 (whose 38 part-1 feats are already in the catalog from
//     the issue-315 pack). Region prerequisites follow the
//     issue-315 format. The Character Regions table that maps
//     regions to both parts' feats is in reference.md.
//   * "The Erudite" (p. 49): EXTRA UNIQUE POWER, the one feat
//     printed with the class.
//   * "Animal Fist: The Shen" sidebar feats (p. 71) are HELD —
//     not in this file. The Shen article (7 prestige classes, 3
//     feats, 3 weapons) is East-Asian martial-arts material held
//     out of the catalog under Shaun's 2026-11-09 oriental-removal
//     order, pending his call; the records are staged in the
//     issue-319 pack (feats-draft.ts / prestige-draft.ts /
//     equipment-draft.ts) if he orders a Southie reflavor.
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { FeatDefinition } from "@/engine/types";

const DM319_GH = "Dragon Magazine #319 — Greyhawk Feats";
const DM319_ER = "Dragon Magazine #319 — The Erudite";
const URL319 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine319_djvu.txt";

export const DRAGON_319_FEATS: FeatDefinition[] = [
  // ---- Greyhawk Feats, part 2 (pp. 56–61) ----
  {
    id: "deepseer",
    name: "Deepseer",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Deep gnome, stout halfling, mountain dwarf"],
    benefitSummary:
      "You gain darkvision with a range of 30 feet. If you already have darkvision, add 30 feet to your darkvision range.",
  },
  {
    id: "desert-fighter",
    name: "Desert Fighter",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Bright Lands"],
    benefitSummary:
      "When fighting in desert terrain, you gain a +2 dodge bonus to AC. A fighter may select this feat as one of his bonus feats (the region prerequisite still applies).",
  },
  {
    id: "elemental-focus",
    name: "Elemental Focus",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Baklunish"],
    benefitSummary:
      "Add +1 to the Difficulty Class of all saving throws against spells you cast with the air, earth, fire, or water descriptors. This bonus stacks with the similar bonuses granted by Spell Focus and Greater Spell Focus.",
  },
  {
    id: "exercises-of-arnd",
    name: "Exercises of Arnd",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Toughness", "Regions: Furyondy, Nyrond, Oeridian, Ratik"],
    benefitSummary:
      "You practice a daily regimen of exercises (after 8 hours of rest to clear the mind, as for preparing spells but without needing to sleep; each interruption adds 1 hour, and you need at least 1 hour of uninterrupted rest immediately before the exercises). Choose one benefit before conducting the exercises; it lasts until the next time you perform them. Rite of Battle: +1 morale bonus on melee attack rolls with a specific weapon incorporated into the exercise. Rite of Calm: +1 resistance bonus on all saving throws. Rite of Fitness: +6 temporary hit points. A fighter may select this feat as one of his bonus feats (the region prerequisite still applies).",
  },
  {
    id: "faerie-mysteries-initiate",
    name: "Faerie Mysteries Initiate",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Celene, gray elf, high elf, Lendore Isles, tallfellow halfling, Verbobonc, wild elf, wood elf"],
    benefitSummary:
      "You and a partner who also has this feat practice a 15-minute regimen of cultural rituals after 4 hours of trance (rest) to clear the mind. Both practitioners must agree on the rite and receive the same bonus, which lasts until the next time you perform the Faerie Mysteries. Carols: when fighting orcs or goblins, a +1 competence bonus on damage rolls with melee attacks and with ranged attacks at ranges of up to 30 feet, and you act as if you had the Improved Critical feat for the weapon you are using (does not stack with Improved Critical or other threat-range effects). Frolics: +4 insight bonus on Perform (dance) and Tumble checks. Gyres: +1 resistance bonus on all saving throws. Passions: you may use your Intelligence modifier instead of your Constitution modifier to determine bonus hit points.",
  },
  {
    id: "heir-of-lendore",
    name: "Heir of Lendore",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Suel"],
    benefitSummary:
      "Add +2 to the Difficulty Class for all saving throws against divination spells you cast. This bonus stacks with those granted by Spell Focus and Greater Spell Focus. (Your eyes are milky white and bear no pupils, although you see normally.)",
  },
  {
    id: "jinnbond",
    name: "Jinnbond",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Baklunish", "Must be taken at 1st level"],
    benefitSummary:
      "Select one type of genie ancestor; benefits vary by type. Dao: +4 bonus on saving throws against earth effects and Fortitude saves to resist petrification, and add to the DC of saving throws for any spell with the earth descriptor that you cast as a sorcerer (stacks with Spell Focus and Greater Spell Focus if the spell is from your chosen school). Djinni: +4 bonus on saving throws against air effects and against acid fog, call lightning, cloudkill, stinking cloud, and storm of vengeance, and add +2 to the DC of saving throws for spells with the air descriptor that you cast as a sorcerer (same stacking). Efreeti: +4 bonus on saving throws against fire effects, and add +2 to the DC of saving throws for spells with the fire descriptor that you cast as a sorcerer (same stacking). Marid: +4 bonus on saving throws against water effects and against acid fog, cone of cold, horrid wilting, ice storm, and sleet storm; +2 bonus on Constitution checks to resist drowning; and add +2 to the DC of saving throws for spells with the water descriptor that you cast as a sorcerer (same stacking).",
  },
  {
    id: "nexus-method",
    name: "Nexus Method",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Ability to prepare and cast arcane spells", "Region: Solnor Compact"],
    benefitSummary:
      "You can channel stored spell energy into summon monster spells you did not prepare ahead of time: you can \"lose\" any prepared spell that is not a conjuration spell in order to cast a summon monster spell of the same level or lower. Add the following to the list of feats you may select as a bonus wizard feat: Augment Summoning, Fiendsign, Greater Spell Focus, Greater Spell Penetration, Spell Focus, Spell Penetration.",
  },
  {
    id: "pureblooded-suel",
    name: "Pureblooded Suel",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Suel", "Must be selected at 1st level"],
    benefitSummary:
      "You gain a +1 bonus on Intimidate checks and a +1 bonus on all saving throws against spells and spell-like effects. You also receive a +2 bonus on Charisma-based skill checks made against members of the Scarlet Brotherhood.",
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Ahlissa, Furyondy, Keoland, Nyrond, rock gnome, Sunndi, Urnst States, Veluna"],
    benefitSummary:
      "You suffer no penalties on Diplomacy checks related to social class, and upper-class NPCs tend to view you as a charming rube — no threat to them whatsoever. Others suffer a −2 penalty on Sense Motive checks made against you.",
  },
  {
    id: "sagacious-method",
    name: "Sagacious Method",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Ability to prepare and cast arcane spells", "Region: Nyrond"],
    benefitSummary:
      "You receive a +4 bonus on Spellcraft checks to decipher the writing on scrolls, and a +4 bonus on caster level checks to successfully cast a scroll spell with a caster level higher than your level. Add the following to the list of feats you may select as a bonus wizard feat: Eschew Materials, Greater Spell Focus, Greater Spell Penetration, Magical Aptitude, Spell Focus, Spell Penetration.",
  },
  {
    id: "second-sight",
    name: "Second Sight",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Rhennee"],
    benefitSummary:
      "Once per day, you can cast augury as a 3rd-level cleric. This is a spell-like ability.",
  },
  {
    id: "shadowbound",
    name: "Shadowbound",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Valley of the Mage"],
    benefitSummary:
      "You can cloak yourself in an umbra of shadowstuff, granting you a +2 bonus on Hide checks. Once per day you may cast a spell with the shadow descriptor as though it was prepared with the Empower Spell feat, without requiring a higher-level spell slot.",
  },
  {
    id: "silent-method",
    name: "Silent Method",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Keoland"],
    benefitSummary:
      "You get a +2 bonus on all dispel checks and on caster level checks (1d20 + caster level) made for the break enchantment spell. Add the following to the list of feats you may select as a bonus wizard feat: Combat Casting, Greater Spell Focus, Greater Spell Penetration, Magical Aptitude, Spell Focus, Spell Penetration.",
  },
  {
    id: "spirit-of-the-sea",
    name: "Spirit of the Sea",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Ekbir, Lendore Isles, Lordship of the Isles, Scarlet Brotherhood, Sea Barons, Sea Princes, Wild Coast, Zeif"],
    benefitSummary:
      "You get a +8 bonus on all Survival checks made while aboard a boat or ship.",
  },
  {
    id: "tested",
    name: "Tested",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Faerie Mysteries Initiate", "Character level 10th", "Regions: Gray elf, high elf, wild elf, wood elf"],
    benefitSummary:
      "You receive a +2 bonus on Charisma-based skill checks made against elves, increasing to +4 on checks made against other elves with the Tested feat. Additionally, choose one of the following powers when you select this feat. Gift of Prophesy: once per day, while in trance, you can cast commune as a 10th-level cleric (supernatural ability). Gift of Sight: once per day, you can cast true seeing as a 10th-level cleric (spell-like ability). Ye'Cind's Ear: once per day, you may add a +6 bonus to your effective bard level for purposes of bardic music effects (supernatural ability).",
  },
  {
    id: "troll-blooded",
    name: "Troll Blooded",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Toughness", "Regions: Frost Barbarians, Ice Barbarians, Pale, Snow Barbarians", "Must be taken at 1st level only"],
    benefitSummary:
      "You gain regeneration 1 as an extraordinary ability. Fire and acid deal normal damage to you. If you lose a limb or body part, the lost portion regrows in 3d6 days; you can reattach a severed member as a full-round action by holding it to the stump. You are fatigued while exposed to sunlight.",
  },
  {
    id: "vathrin-stigmata",
    name: "Vathrin Stigmata",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Patron deity: Vathris", "Region: Bright Lands"],
    benefitSummary:
      "Once per day, you can cause your chest to seep a black, tarry substance from a psychosomatic spear wound. If consumed within an hour of collection, the substance detoxifies any poison (as neutralize poison) and cures any disease (as remove disease); your wound seeps enough for only one application per day, and the substance is treated as caster level 5 for dispel checks. Manifesting the stigmata causes you to become exhausted. This is a supernatural ability.",
  },
  {
    id: "vatuns-touch",
    name: "Vatun's Touch",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Frost Barbarians, Ice Barbarians, Ratik, Snow Barbarians, Stonehold"],
    benefitSummary:
      "You don't need protection when operating in cold weather and automatically succeed at saves to stave off nonlethal damage from cold. You do not add the cumulative +1 to the DC of checks to resist cold weather effects.",
  },
  {
    id: "well-traveled",
    name: "Well Traveled",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Half-elf, lightfoot halfling, Rhennee, stout halfling, tallfellow halfling"],
    benefitSummary:
      "You gain 2 ranks in the Knowledge (local) skill. When dealing with a non-hostile creature that you can communicate with, you can use your Knowledge (local) skill in place of your Diplomacy skill.",
  },
  {
    id: "world-weary",
    name: "World Weary",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Regions: Ahlissa, Bandit Kingdoms, Bone March, Geoff, Iuz, North Kingdom, Pomarj, Rovers of the Barrens, Scarlet Brotherhood, Sea Princes, Shield Lands, Sterich, Tenh"],
    benefitSummary:
      "You receive a +4 competence bonus on saves against fear. Treat fear conditions as one rank lower: an effect that would make you panicked instead makes you frightened, and an effect that would make you frightened merely leaves you shaken. Effects that make you shaken affect you as normal.",
  },
  {
    id: "zagygs-favor",
    name: "Zagyg's Favor",
    category: "general",
    ruleset: "core",
    source: DM319_GH,
    sourceUrl: URL319,
    prerequisites: ["Region: Greyhawk"],
    benefitSummary:
      "You receive a +4 bonus on Will saves against compulsion effects (confusion, dominate person, insanity, and so on).",
  },
  // ---- The Erudite (p. 49) ----
  {
    id: "extra-unique-power",
    name: "Extra Unique Power",
    category: "general",
    ruleset: "core",
    source: DM319_ER,
    sourceUrl: URL319,
    prerequisites: ["Possess the unique powers per day class ability"],
    benefitSummary:
      "Psionic feat. Choose a power level from which you can already manifest powers (1st through 9th). From now on, you can manifest one more unique power per day from among the powers you know of this level. You can take this feat multiple times, but no more than once per character level.",
  },
  // (The Shen sidebar feats are held — see the header note.)
];
