// Dragon Magazine #312 (Oct 2003) variant classes — integrated in the
// Dragon Magazine treatment program (issue #312 pass). Staging pack:
// ~/workspace/library-staging/packs/dragon-magazine/issue-312/
// (MANIFEST.md / SCREENING.md / reference.md).
// The issue's three "dark magus" variant base classes from the
// Necromancers article (pp. 29–38) by Michael Mearls: Deathwalker,
// Fleshcrafter, Soul Reaper. All three are wizard variants sharing
// one chassis. Sources: the Dragon #312 magazine text on archive.org
// (DragonMagazine312_djvu.txt), cross-checked against the
// realmshelps.net transcriptions of the three classes, which govern
// wherever the magazine OCR was garbled (see MANIFEST.md; note that
// realmshelps mislabels the issue as #313 in two of its three
// footers — a site error, not followed). Feature descriptions are
// faithful mechanical paraphrases in our own words; no magazine
// prose is reproduced. Records mirror the issue-311 draft shape:
// plain objects, levels 1–10 progression rows, features carrying
// their true levels (to 20).
//
// Shared dark magus rules (all three, from the article): each dark
// magus functions as a necromancer specialist wizard for
// spellcasting — he must specialize in necromancy and choose
// prohibited schools as a standard specialist wizard; he prepares
// Intelligence-based arcane spells from the sorcerer/wizard list
// from a spellbook (all 0-level wizard spells except prohibited
// schools, plus three 1st-level spells and his Intelligence bonus in
// additional 1st-level spells at 1st level, and two free spells of
// any castable level at each new level); spells per day as the
// wizard table (the printed tables exclude the bonus specialist
// necromancy spell at each spell level); he may select the Spell
// Mastery feat as a wizard can. Unlike the wizard, the dark magus
// tables grant NO wizard bonus feats at 5th/10th/15th/20th level.

import type {
  ClassDefinition,
  ClassLevelProgressionRow,
  FeatureDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  name: string;
  description: string;
  level?: number;
}

interface RawClass {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  features: RawFeature[];
}

const RAW: RawClass[] = [
  {
    "id": "deathwalker",
    "name": "Deathwalker",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Bluff",
      "Concentration",
      "Craft",
      "Knowledge (all skills, taken individually)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      { "name": "Deathwalker Basics", "description": "A dark magus — a wizard variant devoted to necromancy (see the shared dark magus rules for this article): a necromancer specialist who must specialize in necromancy, prepares Intelligence-based arcane spells from the sorcerer/wizard list out of a spellbook, and may select Spell Mastery. Key ability: Intelligence. Weapon and armor proficiencies: club, dagger, heavy crossbow, light crossbow, and quarterstaff; no armor or shields. The deathwalker walks the road to undeath herself, slowly trading her living body for an undead one across twenty levels." },
      { "name": "Spells", "description": "The deathwalker casts arcane spells drawn from the sorcerer/wizard spell list, prepared ahead of time like a wizard, with the wizard's spells per day (plus the bonus necromancy spell of a specialist at each spell level). To learn, prepare, or cast a spell she needs an Intelligence score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + her Intelligence modifier.", "level": 1 },
      { "name": "Master of the Dead (Sp)", "description": "The deathwalker can bind skeletons and zombies to her service, controlling them as though with animate dead. Upon confronting a skeleton or zombie that neither she nor her allies have attacked, she may attempt a Charisma check (DC 15 + the undead's Hit Dice) to command it; if she or an ally attacks a controlled creature, control of that creature breaks at once. The maximum total Hit Dice of mindless undead she can control by any means — including animate dead — is 5 times her deathwalker level (5 HD at 1st level, rising to 100 HD at 20th); undead under 1 HD count as 1 HD. Taking this power leaves her pale and cold, and she takes a -2 penalty on Fortitude saves to resist negative levels.", "level": 1 },
      { "name": "Undead Familiar", "description": "The deathwalker's familiar is always an undead creature: she gains it by the standard wizard familiar rules, but the creature that arrives immediately becomes undead — its type changes to undead, its Hit Dice become d12s (hit point total unchanged), it loses its Constitution score, it gains darkvision 60 feet if it did not have it, and it gains the standard undead traits. Its Hit Dice count as its master's for turn, rebuke, and bolster attempts, and it cannot be commanded by anyone except its master.", "level": 1 },
      { "name": "Aura of the Grave (Ex)", "description": "The deathwalker no longer needs to sleep and becomes immune to sleep effects and to all diseases. Her deadened nerves dull her sense of pain and touch. Her skin draws tight and hollow; a Knowledge (arcana) check (DC 25) reveals her path to an observer.", "level": 5 },
      { "name": "Shroud of Death (Ex)", "description": "The deathwalker gains a +4 circumstance bonus on saves against poison, paralysis, and mind-affecting effects. Because her organs have largely ceased functioning, there is a 50% chance that the extra damage of a critical hit or sneak attack does not affect her (as the fortification armor quality). She no longer needs to eat or drink, though she must still breathe. The stench of her decay imposes a -2 penalty on Charisma, Bluff, and Diplomacy checks against any creatures except undead.", "level": 10 },
      { "name": "Mastery of Undeath (Su)", "description": "The deathwalker can rebuke or command undead as an evil cleric of her deathwalker level, a number of times per day equal to 1 + her Charisma bonus (if any).", "level": 15 },
      { "name": "Mantle of Undeath", "description": "The deathwalker completes her transformation and becomes an undead creature: she loses her Constitution score and any bonus hit points it granted, her Hit Die type becomes d12 (her hit point total does not change), her type changes to undead, and she gains the standard undead traits. She keeps her racial traits, and her attack bonuses, save bonuses, and other statistics are not recalculated.", "level": 20 }
    ]
  },
  {
    "id": "fleshcrafter",
    "name": "Fleshcrafter",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Heal",
      "Knowledge (all skills, taken individually)",
      "Spellcraft"
    ],
    "features": [
      { "name": "Fleshcrafter Basics", "description": "A dark magus — a wizard variant devoted to necromancy (see the shared dark magus rules for this article): a necromancer specialist who must specialize in necromancy, prepares Intelligence-based arcane spells from the sorcerer/wizard list out of a spellbook, and may select Spell Mastery. Key ability: Intelligence. Weapon and armor proficiencies: club, dagger, heavy crossbow, light crossbow, and quarterstaff; no armor or shields. The fleshcrafter treats the living and the dead alike as raw material for his constructions." },
      { "name": "Spells", "description": "The fleshcrafter casts arcane spells drawn from the sorcerer/wizard spell list, prepared ahead of time like a wizard, with the wizard's spells per day (plus the bonus necromancy spell of a specialist at each spell level). To learn, prepare, or cast a spell he needs an Intelligence score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + his Intelligence modifier.", "level": 1 },
      { "name": "Craft Construct", "description": "The fleshcrafter gains Craft Construct as a bonus feat.", "level": 1 },
      { "name": "Reaper's Touch (Ex)", "description": "When the fleshcrafter uses the Heal skill to treat another creature, he may instead double any hit point or ability score damage the patient takes from conditions it already suffers; the Heal DC decreases by 5 for this use, and the effect lasts 24 hours. A creature below 0 hit points so treated loses 2 hit points per round instead of 1 and cannot stabilize while the extra damage continues. An observer can notice the sabotage with an opposed Heal check; a successful opposed Heal check or any healing magic ends the effect.", "level": 1 },
      { "name": "Stitched Flesh Familiar", "description": "The fleshcrafter builds his own familiar: a construct worth 300 gp assembled from body parts taken from three Medium humanoids he has killed, requiring successful DC 18 Craft checks and a further 100 gp of life-force components (a failed check wastes the materials and money). He cannot create another while one lives. The familiar gains the abilities on the Stitched Flesh Familiar table by master level (standard familiar abilities at a slower rate: natural armor +1 to +10 and Intelligence rising 6 to 15 across levels 1–20; empathic link, improved evasion, and uncanny likeness at 1st–2nd; alertness and share spells at 3rd–4th; speak with master and deliver touch spells at 5th–6th; spell resistance at 11th–12th; scry on familiar at 13th–14th). At master level 9th–10th it gains Sustained Spirit: a replacement familiar carries its predecessor's memories and personality. Corpse substitution for this class's body requirements: one Small corpse counts as 1/2 of a Medium corpse, Large as 4, Huge as 16, Gargantuan as 64, and Colossal as 256.", "level": 1 },
      { "name": "Brink of Life and Death (Ex)", "description": "The fleshcrafter can make a coup de grace attack as a standard action. He can extend this ability to his stitched flesh familiar within empathic-link range by concentrating as a full-round action; the coup de grace remains a standard action for the familiar.", "level": 5 },
      { "name": "Forge Flesh", "description": "The fleshcrafter can build custom animated objects from harvested body parts. For each 2 HD of the animated object, he needs body parts from one Medium creature, a successful DC 20 Craft check, and 200 gp of chemicals, fluids, and herbs. The finished object obeys him without question; he may control animated objects totaling no more than twice his fleshcrafter level in HD.", "level": 10 },
      { "name": "Master of Life and Death (Su)", "description": "When the fleshcrafter affects a living creature (anything other than a construct or undead) with a spell, the saving throw DC (if any) increases by +1.", "level": 15 },
      { "name": "Forge Life (Ex)", "description": "The fleshcrafter can create a flesh golem for only 5,000 gp, provided he still meets the remaining prerequisites and spends the standard time and XP for a flesh golem, and collects body parts from at least twenty different Medium humanoids he personally killed. He can create any number of flesh golems this way.", "level": 20 }
    ]
  },
  {
    "id": "soul-reaper",
    "name": "Soul Reaper",
    "ruleset": "core",
    "source": "Dragon Magazine #312",
    "sourceUrl": "https://archive.org/download/DragonMagazine260_201801/DragonMagazine312_djvu.txt",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "babProgression": "half",
    "goodSaves": [
      "will"
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 1, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 2, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 3, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 4, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 4, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 5, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Concentration",
      "Craft",
      "Knowledge (all skills, taken individually)",
      "Profession",
      "Spellcraft"
    ],
    "features": [
      { "name": "Soul Reaper Basics", "description": "A dark magus — a wizard variant devoted to necromancy (see the shared dark magus rules for this article): a necromancer specialist who must specialize in necromancy, prepares Intelligence-based arcane spells from the sorcerer/wizard list out of a spellbook, and may select Spell Mastery. Key ability: Intelligence. Weapon and armor proficiencies: club, dagger, heavy crossbow, light crossbow, and quarterstaff; no armor or shields. The soul reaper snatches spirits at the moment of death and binds them to her service." },
      { "name": "Spells", "description": "The soul reaper casts arcane spells drawn from the sorcerer/wizard spell list, prepared ahead of time like a wizard, with the wizard's spells per day (plus the bonus necromancy spell of a specialist at each spell level). To learn, prepare, or cast a spell she needs an Intelligence score of at least 10 + the spell's level; the saving throw DC is 10 + the spell's level + her Intelligence modifier.", "level": 1 },
      { "name": "Inquisitor of the Grave (Sp)", "description": "Once per day, the soul reaper can use speak with dead as a spell-like ability, following all the guidelines and restrictions of the spell.", "level": 1 },
      { "name": "Spiritual Vassal", "description": "Through a ritual requiring 100 gp of materials (chiefly blood and bone taken from outsiders) and a humanoid creature slain by ritual sacrifice, the soul reaper compels a host of minor spirits into a single entity that serves her as a familiar, kept obedient by her power to inflict wracking agony on it as a free action (immobilizing it, no save, until she ends the effect, also a free action). If the vassal is destroyed, she suffers the drawbacks of a wizard whose familiar is slain. The vassal gains the standard familiar abilities by master level at the rates on the Spiritual Vassal table (natural armor +1 rising to +10; Intelligence 10 at 1st–2nd rising by 1 every two master levels to 19 at 19th–20th; alertness, empathic link, improved evasion, and share spells at 1st–2nd; deliver touch spells at 3rd–4th; speak with master at 5th–6th). An unbonded vassal is a Tiny undead (HD 1/2d12, hp 2; speed 10 ft., fly 30 ft. (perfect); AC 14; slam +1 melee for 1-1 damage; undead traits; alignment neutral; Fort +0, Ref +1, Will +3; Str 8, Dex 12, Con —, Int 10, Wis 12, Cha 10), appearing as a small sphere of pale, glowing light.", "level": 1 },
      { "name": "Ancestral Knowledge (Sp)", "description": "The soul reaper can draw on her spiritual vassal's memories, choosing one of the following once per day; she gains an additional daily use at 9th, 13th, and 17th level (four per day at most), mixing them freely, and the vassal must be able to communicate with her. Memories of Past Lives: a +5 competence bonus on checks with one chosen skill for 1 minute. Speech of the Ancients: speak and read one chosen language for 1 minute. Talents of the Elders: gain temporary use of one feat she qualifies for, for 1 minute.", "level": 5 },
      { "name": "Bind Spirit (Su)", "description": "The soul reaper can capture the spirit of a dying creature in a gem or crystal worth at least 500 gp: she readies a standard action to use it at the moment the victim reaches -10 hit points or is destroyed, and the victim may resist with a Will save (DC 15 + her Intelligence modifier). A bound spirit stays in the gem for 1 day per soul reaper level or until the gem is broken or destroyed, and the victim cannot be restored to life in any manner while bound, nor contacted except through this ability. Once per day while a soul is bound she may choose one benefit: compel the soul to answer one yes-or-no question truthfully; speak any one language the soul knows for 1 hour; or use the soul's ranks in one skill in place of her own for 1 minute (she counts as trained). The soul is automatically released when the duration ends; destroying the gem frees it immediately.", "level": 5 },
      { "name": "Bonus Feat", "description": "The soul reaper gains a bonus feat, chosen from any metamagic, item creation, or necromantic feat for which she meets the prerequisites. She gains another such bonus feat at 20th level.", "level": 10 },
      { "name": "Spawn Undead Servitor", "description": "The soul reaper can force a soul captured with bind spirit into the body of a skeleton or zombie through a ritual costing 500 gp per Hit Die of the undead. The undead permanently gains the trapped soul's base attack bonus (if higher), skill ranks, weapon and armor proficiencies, and feats, as well as the victim's Intelligence, Wisdom, and Charisma scores; class abilities, special attacks, and special qualities do not transfer. The servitor's alignment becomes the reaper's, it counts as 1 1/2 times its actual Hit Dice for turning or rebuking, and its CR equals its base CR plus 1/4 of the bound spirit's CR. The trapped soul is freed to the afterlife when the ritual completes, and the reaper gains no special control over servitors she does not already command.", "level": 15 }
    ]
  }
];

export const DRAGON_312_CLASSES: ClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as ClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as ClassDefinition["babProgression"],
  goodSaves: c.goodSaves as ClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
