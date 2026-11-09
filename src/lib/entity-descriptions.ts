import {
  ABILITY_LABEL,
  type AbilityKey,
  type ClassDefinition,
  type EquipmentItem,
  type FeatDefinition,
  type FlawTraitDefinition,
  type MagicItemDefinition,
  type PrestigeClassDefinition,
  type RaceDefinition,
  type SkillDefinition,
  type SpellDefinition,
  type TemplateDefinition,
} from "@/engine/types";
import { raceStartingEcl } from "@/lib/race-groups";
import { ALL_SPELLS, CASTING_PROFILES_BY_ID } from "@/data/index";

const SPELL_BY_ID = new Map(ALL_SPELLS.map((sp) => [sp.id, sp]));

/**
 * Read-only detail views for the shared EntityDetailDialog. Every describe*
 * function turns a data-pack record into a titled, badged, sectioned summary
 * with its SRD citation attached.
 */

export interface EntityDetailSection {
  heading: string;
  body: string;
}

export interface EntityDetail {
  title: string;
  badges: string[];
  summary?: string;
  sections: EntityDetailSection[];
  source?: string;
  sourceUrl?: string;
}

function signed(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

const ABILITY_DESCRIPTIONS: Record<AbilityKey, string> = {
  str: "Strength measures muscle and physical power: melee attack and damage, carrying capacity, and skills like Climb, Jump, and Swim.",
  dex: "Dexterity measures agility, reflexes, and balance: Armor Class, Reflex saves, ranged attacks, and skills like Hide and Tumble.",
  con: "Constitution measures health and stamina: hit points per Hit Die and Fortitude saves. Undead and constructs have no Constitution score.",
  int: "Intelligence measures learning and reasoning: bonus languages, skill points per level, and knowledge-focused skills.",
  wis: "Wisdom measures willpower and perception: Will saves, divine spellcasting, and skills like Listen, Spot, and Survival.",
  cha: "Charisma measures force of personality: social skills, turning undead, and sorcerer/bard spellcasting.",
};

export function describeAbility(key: AbilityKey): EntityDetail {
  return {
    title: ABILITY_LABEL[key],
    badges: ["Ability Score"],
    summary: ABILITY_DESCRIPTIONS[key],
    sections: [
      {
        heading: "Modifier",
        body: "Ability modifier = (score − 10) / 2, rounded down. The modifier — not the raw score — feeds attack rolls, saves, skills, and Armor Class.",
      },
    ],
    source: "d20SRD — The Basics",
    sourceUrl: "https://www.d20srd.org/srd/theBasics.htm",
  };
}

/**
 * A flourish for a race (Shaun, 2026-11-09, correcting the first
 * pass at his "brief understanding" order: "I meant a flourishment
 * not crunch"): NOT stats — no sizes in feet, no modifiers, no
 * costs. One or two flavor sentences that say what the people ARE:
 * their feel, their gifts told as story, the path many of them
 * walk. Built from the record's own signals (type, size, trait
 * names, favored class) with a hand-written line for the
 * best-known peoples. The numbers live in the badges and sections.
 */
const RACE_FLOURISH_BY_ID: Record<string, string> = {
  human: "The everywhere people. Humans burn shorter and brighter than the elder folk — adaptable, ambitious, and impossible to keep out of any corner of the world.",
  elf: "Grace that outlives empires. Elves move through the centuries like a song that refuses to end — keen-eyed, patient, and bound to the wild green places.",
  dwarf: "Carved from the same patience as the mountains. Dwarves endure — in war, in craft, in grudges — and what they build tends to outlast the kingdoms around it.",
  halfling: "Small folk, enormous nerve. Halflings slip through the world's dangers on quick feet and quicker luck, and somehow always land near a warm meal.",
  gnome: "Curiosity with a workshop attached. Gnomes tinker, prank, and wonder their way through long lives, forever one experiment away from either brilliance or smoke.",
  "half-elf": "Between two worlds and welcome in both. Half-elves carry elven grace on a human timetable, and learn early how to belong anywhere.",
  "half-orc": "Strength that has to prove itself daily. Half-orcs live between the world's scorn and their own hearts, and most choose to answer with deeds.",
  drow: "Beauty sharpened into a weapon. The drow built a civilization in the lightless deep where cruelty is currency and only the ruthless rise.",
  "drow-dotu": "Beauty sharpened into a weapon. The drow built a civilization in the lightless deep where cruelty is currency and only the ruthless rise.",
  aasimar: "A touch of the heavens, worn quietly. Aasimar carry a thread of celestial light in the blood — most spend their lives trying to be worthy of it.",
  tiefling: "Marked by an old bargain. Tieflings walk the world under horns and suspicion, whatever their own hearts actually hold.",
  warforged: "Built for a war that ended. The warforged are living constructs — soldiers who woke to find the fighting over and a whole life still to figure out.",
  giff: "Hippopotamus folk with a soldier's bearing and a gunner's heart. The giff love discipline, loud explosions, and doing things properly.",
  kobold: "Small, quick, and certain the world underestimates them. Kobolds survive by traps, tunnels, and numbers — and dream in dragons.",
  goblin: "Chaos in a small green package. Goblins live fast, break things faster, and treat every bad idea as an invitation.",
  orc: "The storm made flesh. Orcs honor strength above every other virtue, and their war-bands have ended more dynasties than any plague.",
  lizardfolk: "Older than the kingdoms that border their swamps, and in no hurry. Lizardfolk measure worth in survival, and the marsh provides.",
  centaur: "Hooves on the open grass, hearts split between the herd and the horizon. Centaurs are the plains' own nobility, and they know it.",
  minotaur: "A labyrinth walks out of legend. Minotaurs carry a bull's fury and a navigator's gift — they are never, ever lost.",
};

const RACE_SIZE_PHRASE: Record<string, string> = {
  Fine: "small enough to overlook — a mistake, usually",
  Diminutive: "barely a handful, and twice as hard to catch",
  Tiny: "barely knee-high to most folk",
  Small: "small of frame and quick",
  Medium: "standing eye to eye with humankind",
  Large: "towering over most folk",
  Huge: "vast beyond any ordinary doorway",
  Gargantuan: "a living landmark",
  Colossal: "beyond measuring by mortal architecture",
};

const RACE_TYPE_PHRASE: Record<string, string> = {
  Humanoid: "a humanoid people",
  "Monstrous Humanoid": "kin to the wild and monstrous peoples",
  Construct: "living constructs, built rather than born",
  Undead: "the dead, walking",
  Fey: "fey folk, strange and bright",
  Outsider: "touched by the planes beyond",
  Dragon: "draconic in blood and bearing",
  Elemental: "element given will and shape",
  Giant: "of the giant kindred",
  "Magical Beast": "beasts with minds very much their own",
  Aberration: "strangers to nature's usual rules",
  Plant: "the green world, walking",
  Ooze: "formless, and patient about it",
  Vermin: "of the crawling kindred",
  Animal: "beasts of the natural order",
  Shapechanger: "never quite one shape for long",
};

const RACE_TRAIT_THEMES: [RegExp, string][] = [
  [/darkvision/i, "eyes made for the dark"],
  [/scent/i, "a hunter's nose"],
  [/fly|flight|wings/i, "the sky within reach"],
  [/swim|aquatic|water breathing/i, "deep water as a second home"],
  [/natural armor/i, "a hide that turns blades"],
  [/spell resistance/i, "a skin that shrugs off spells"],
  [/burrow|dig/i, "the earth opening for them"],
  [/climb/i, "walls treated as slow floors"],
  [/breath weapon/i, "a dragon's breath in a mortal throat"],
  [/regeneration|fast healing/i, "wounds that refuse to stay"],
  [/telepath/i, "speech without sound"],
  [/change shape|alternate form/i, "more than one shape to wear"],
  [/low-light vision/i, "eyes that drink in starlight"],
  [/stonecunning/i, "stone that speaks to them"],
  [/poison/i, "venom in the blood"],
  [/trance|sleepless|does not sleep/i, "no need of sleep's small death"],
  [/keen senses|listen|spot/i, "senses sharp enough to catch a lie's footsteps"],
];

function raceBrief(race: RaceDefinition): string {
  const curated = RACE_FLOURISH_BY_ID[race.id];
  if (curated) return curated;
  const sizePhrase = RACE_SIZE_PHRASE[race.size] ?? "of a stature with humankind";
  const typePhrase = RACE_TYPE_PHRASE[race.type] ?? `a ${race.type.toLowerCase()} people`;
  let out = `${race.name} — ${sizePhrase}, ${typePhrase}.`;
  const gifts: string[] = [];
  for (const trait of race.traits) {
    const theme = RACE_TRAIT_THEMES.find(([re]) => re.test(trait.name));
    if (theme && !gifts.includes(theme[1])) gifts.push(theme[1]);
    if (gifts.length >= 2) break;
  }
  if (gifts.length) out += ` Known for ${gifts.join(" and ")}.`;
  if (race.favoredClass && race.favoredClass.toLowerCase() !== "any") {
    const fc = race.favoredClass.charAt(0).toUpperCase() + race.favoredClass.slice(1);
    out += ` Many find their calling on the ${fc} path.`;
  }
  return out;
}

export function describeRace(race: RaceDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [
    {
      heading: "Racial Traits",
      body: race.traits.map((t) => `${t.name}: ${t.description}`).join("\n") || "No special traits.",
    },
  ];
  if (Object.keys(race.skillBonuses ?? {}).length > 0) {
    sections.push({
      heading: "Skill Bonuses",
      body: Object.entries(race.skillBonuses ?? {})
        .map(([skill, v]) => `${skill}: ${signed(v as number)}`)
        .join("\n"),
    });
  }
  return {
    title: race.name,
    badges: ["Race", `ECL ${raceStartingEcl(race)}`, race.size, `${race.baseSpeed} ft`, ...(race.favoredClass ? [`Favored class: ${race.favoredClass}`] : [])],
    summary: raceBrief(race),
    sections,
    source: race.source,
    sourceUrl: race.sourceUrl,
  };
}

/**
 * Template detail (bug sweep 2026-11-08): template cards showed
 * their summary with no way to read the rest — no info view at
 * all, unlike races/classes/feats. Built from the record's own
 * fields only: adjustments, features, prerequisites, forms.
 */
export function describeTemplate(t: TemplateDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [];
  if (t.abilityModifiers && Object.keys(t.abilityModifiers).length > 0) {
    sections.push({
      heading: "Ability Adjustments",
      body: Object.entries(t.abilityModifiers)
        .map(([k, v]) => (v === null || v === undefined ? `${k.toUpperCase()} — (score removed)` : `${k.toUpperCase()} ${signed(v as number)}`))
        .join("\n"),
    });
  }
  if (t.features && t.features.length > 0) {
    sections.push({
      heading: "Features",
      body: t.features.map((f) => `${f.name}: ${f.description}`).join("\n"),
    });
  }
  if (t.modifiers && t.modifiers.length > 0) {
    sections.push({
      heading: "Adjustments",
      body: t.modifiers.map((m) => `${m.target}: ${signed(m.value)}`).join("\n"),
    });
  }
  if (t.prerequisites && t.prerequisites.length > 0) {
    sections.push({
      heading: "Prerequisites",
      body: t.prerequisites.map((p) => p.note).join("\n"),
    });
  }
  if (t.forms && t.forms.length > 0) {
    sections.push({
      heading: "Forms",
      body: t.forms.map((f) => (f.description ? `${f.name}: ${f.description}` : f.name)).join("\n"),
    });
  }
  return {
    title: t.name,
    badges: ["Template", t.timing === "inherited" ? "Inherited" : "Acquired", `CR ${signed(t.crModifier)}`, `LA ${signed(t.levelAdjustment)}`],
    summary: t.summary,
    sections,
    source: t.source,
    sourceUrl: t.sourceUrl,
  };
}

/**
 * The FULL class breakdown (Shaun, 2026-11-03: "give an exclamation
 * point that breaks down the entire class fully"). Until now the
 * class dialog showed only the final level's numbers and no class
 * features at all. Now it carries everything the record holds:
 * the vitals, the progression table for EVERY level, every class
 * feature with its full text (level-gated features marked with the
 * level they arrive at), and the class skill list.
 */

/**
 * A flourish for a class (Shaun, 2026-11-09, correcting the first
 * pass at his "brief understanding" order: "I meant a flourishment
 * not crunch"): NOT stats — no hit dice, no progressions, no
 * numbers. One or two flavor sentences that say what the class IS:
 * its fantasy, its medium, its theme. Built from the record's own
 * signals (casting profile, source, name, features, class skills)
 * with a hand-written line for the best-known classes. The
 * mechanics live in the sections below the summary.
 */
const CLASS_FLOURISH_BY_ID: Record<string, string> = {
  barbarian: "Fury given legs. The barbarian fights the way storms break — all at once and without apology — trusting rage, instinct, and a hide that has never yet failed him.",
  bard: "A song on the road and a story for every fire. The bard's magic rides on music and memory, turning old tales into courage for the people standing beside him.",
  cleric: "A mortal voice for a god's will. The cleric carries faith into the dark places — healing the fallen, turning back the dead, and calling down judgment where prayer alone won't reach.",
  druid: "The wild speaking through a person. The druid guards grove and beast alike, wears the shapes of animals, and calls on weather, root, and claw as other folk call on steel.",
  fighter: "Master of the straightforward answer. Where others study spells or songs, the fighter studies war itself — every weapon, every stance, every way a battle can be won.",
  monk: "The body made into a weapon, the mind made still enough to aim it. A monk's discipline turns bare hands and quiet patience into something armor cannot stop.",
  paladin: "A sworn sword. The paladin binds his life to a code — protect the innocent, face the darkness, never bend — and the light answers that oath with power.",
  ranger: "At home where the roads end. The ranger reads the land like a letter, hunts chosen enemies across any ground, and is equally at ease with bow or twin blades.",
  rogue: "Never where you expected, never fighting fair. The rogue lives by quick hands and quicker judgment — locks, traps, and guards are all just puzzles with consequences.",
  sorcerer: "Magic in the blood, answered by instinct. The sorcerer never studied a spell in a book; the power was simply always there, waiting for a reason to wake.",
  wizard: "Power earned one page at a time. The wizard bends the world by study — every effect catalogued, every answer somewhere in a spellbook carried like a second heart.",
  psion: "The mind opened like a hand. The psion shapes reality by thought alone — no words, no gestures, only will focused until the world gives way.",
  "psychic-warrior": "Half soldier, half seer. The psychic warrior turns inward discipline outward, meeting steel with a mind already braced for the blow.",
  soulknife: "His weapon is the proof of his mind. The soulknife shapes raw psychic energy into a blade that is never drawn, never dropped, and never quite out of reach.",
  wilder: "Feeling everything at full volume. The wilder's power rides emotion itself — joy, fury, grief — surging brighter and wilder than any trained mind would dare.",
  warlock: "Power with a price already paid. The warlock bargained — with something — and now hurls the eldritch might that answered, as often and as hard as he pleases.",
  warmage: "Battle-magic and nothing else. The warmage skips the subtle arts entirely; when he speaks, things burn, freeze, shatter, and fall.",
  beguiler: "Why fight an enemy who can be fooled instead? The beguiler weaves illusion and charm until the battlefield believes whatever he needs it to.",
  factotum: "A little of everything, exactly when it matters. The factotum borrows the tricks of every trade — a spell here, a lock there, a sword stroke stolen from watching fighters.",
  artificer: "Magic treated as a craft, not a gift. The artificer builds wonders in a workshop — infusing gear, charging wands, and sending constructs to do the dangerous work.",
  "favored-soul": "Chosen, not trained. The favored soul carries a god's spark the way sorcerers carry blood-magic — and in time, the wings to match.",
  "spirit-shaman": "One foot in the world of spirits. The spirit shaman bargains, soothes, and battles the unseen folk who crowd just past the edge of sight.",
  crusader: "Faith with a sword arm. The crusader's devotion lands like a hammer — every blow given meaning, every wound an argument for the cause.",
  swordsage: "A scholar of the fight itself. The swordsage studies maneuvers the way wizards study spells, until blade-work becomes a language only masters speak.",
  warblade: "War as high art. The warblade fights for the joy and glory of it, turning maneuvers into flourishes and battle into reputation.",
  "dread-necromancer": "He walks with the dead, and they walk with him. The dread necromancer's power grows colder and more certain the longer he practices it.",
  hexblade: "A curse in the shape of a swordsman. The hexblade's ill luck is contagious — enemies falter simply for standing against him.",
  scout: "First to see, first to move. The scout lives ahead of the party, where the map is still blank, and hits hardest while already in motion.",
  healer: "Hands that close wounds instead of opening them. The healer walks battlefields as a mercy — proof that not all power has to hurt.",
  marshal: "A voice that turns a rabble into a regiment. The marshal's presence alone makes the line hold a heartbeat longer — and battles turn on heartbeats.",
  "dragon-shaman": "A dragon's shadow worn as a mantle. The dragon shaman breathes a hint of the wyrm's power and lends its vigor to everyone standing near.",
  ninja: "A shadow with a contract. The ninja is gone before the body falls — unseen, unheard, and already paid.",
  samurai: "Honor worn like armor, a blade worn like a signature. The samurai's life is a single long argument that discipline outranks fear.",
  "spellthief": "Why learn magic when you can steal it mid-cast? The spellthief picks the pockets of spells themselves and spends what he takes.",
  "tome-of-battle-crusader": "Faith with a sword arm. The crusader's devotion lands like a hammer — every blow given meaning, every wound an argument for the cause.",
};

const FLOURISH_THEMES: [RegExp, string][] = [
  [/dragon/, "The path runs close to dragons — their majesty borrowed, their menace earned."],
  [/\bnecro|undead|\bdeath\b|tomb|grave/, "Death is not an ending here; it is a resource, a companion, a craft."],
  [/assassin|murder/, "Every contract ends the same way, and it is never an accident."],
  [/shadow|\bnight\b/, "The work gets done in shadow, where power prefers not to be watched."],
  [/archer|\bbow\b|arrow|sniper/, "The argument is settled at a hundred paces — feathered, and final."],
  [/\bfire\b|flame|pyro/, "Fire answers when called. Eagerly."],
  [/storm|thunder|lightning|tempest/, "The temper of the sky, carried in a mortal frame."],
  [/frost|winter|\bice\b/, "Winter keeps a representative on the road."],
  [/\bsea\b|sail|pirate|\bwave\b|ocean|mariner/, "Salt water, open horizon, and no king's road anywhere in sight."],
  [/knight|\boath\b|crusad|cavalier/, "Bound by an oath — and the oath binds back."],
  [/alchem|herbal/, "Salvation measured in vials: mixed, stoppered, and thrown at exactly the right moment."],
  [/song|music|\bperform|chant|bardic/, "A voice that can steady a line of spears or empty a room of its sorrow."],
  [/beast|\bwild\b|nature|animal/, "More at home under open sky than under any roof."],
  [/psion|psychic|\bmind\b/, "Thought itself, weaponized."],
  [/rune/, "Power written down, waiting for the world to read it aloud."],
  [/blood/, "The price is blood. Whose, is a tactical question."],
  [/smite|turn undead|holy|sacred/, "Darkness is not argued with. It is answered."],
  [/thief|sneak|disable device|\block\b/, "The unwatched door, the unguarded moment — that is where the work happens."],
  [/\bgun\b|firearm|powder/, "Powder and thunder, carried at the hip."],
  [/poison|venom/, "The smallest dose writes the longest ending."],
  [/illusion|\btrick|deceiv/, "Nothing here is quite what it seems, least of all the danger."],
  [/sword|blade|duel/, "The blade is not a tool. It is the argument."],
  [/mage|magus|\bspell/, "The craft deepens here — power pursued past the point where most students stop."],
  [/battle|\bwar\b/, "War is not the backdrop. It is the medium."],
];

function flourishPick(id: string, options: string[]): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return options[Math.abs(h) % options.length];
}

function classBrief(cls: ClassDefinition): string {
  const curated = CLASS_FLOURISH_BY_ID[cls.id];
  if (curated) return curated;
  const profile = CASTING_PROFILES_BY_ID[cls.id];
  const hay = `${cls.name} ${(cls.features ?? []).map((f) => f.name).join(" ")}`.toLowerCase();
  const theme = FLOURISH_THEMES.find(([re]) => re.test(hay));
  let opener: string;
  if (profile) {
    opener =
      profile.kind === "prepared-arcane"
        ? "A student of the written spell, who trusts study over luck."
        : profile.kind === "prepared-divine"
          ? "A servant of the divine, carrying faith into places steel cannot reach."
          : "Gifted rather than taught — power answers this one by instinct, not by study.";
  } else if (cls.source.startsWith("Expanded Psionics Handbook") || cls.source.startsWith("Complete Psionic")) {
    opener = "Awake in the mind's deep places, where a thought can land like a blow.";
  } else if (Array.isArray((cls as { prerequisites?: unknown }).prerequisites) && !theme) {
    // Prestige classes without a theme of their own get a line that
    // names them — every prestige path is a narrow road by design.
    opener = flourishPick(cls.id, [
      `The ${cls.name} is a narrow road, walked by few — specialization carried past the point of return.`,
      `Few take up the ${cls.name}'s path. It asks too much of most, and gives back exactly what it promised.`,
      `The ${cls.name} trades breadth for mastery, and considers it a bargain struck well.`,
      `To become a ${cls.name} is to close a hundred doors and walk through the one that remains.`,
    ]);
    return opener;
  } else if (cls.babProgression === "full") {
    opener = flourishPick(cls.id, [
      "A warrior first — the front line is home ground.",
      "Steel, nerve, and a talent for standing exactly where the fighting is worst.",
      "When the line breaks, this is who is still standing in the gap.",
    ]);
  } else if (cls.babProgression === "three-quarter") {
    opener = flourishPick(cls.id, [
      "Equal parts fighter and specialist — at home in a scrap, and just as dangerous out of one.",
      "Not the loudest blade in the room, and rarely the one you should have watched less carefully.",
      "A professional: part warrior, part expert, wholly employed when things go wrong.",
    ]);
  } else {
    opener = flourishPick(cls.id, [
      "A specialist, whose talents run deeper than they first appear — the kind of expert a party seeks out by name.",
      "Not every hero carries the biggest blade. Some carry exactly the right tool, and know the moment to use it.",
    ]);
  }
  return theme ? `${opener} ${theme[1]}` : opener;
}

function classSections(cls: ClassDefinition): EntityDetailSection[] {
  const sections: EntityDetailSection[] = [
    {
      heading: "Overview",
      body: `Hit Die ${cls.hitDie} · ${cls.babProgression} BAB progression · ${cls.skillPointsPerLevel} + Int skill points per level.\nGood saves: ${cls.goodSaves.map((s) => s.toUpperCase()).join(", ") || "none"}.`,
    },
    {
      heading: "Progression — level by level",
      body: cls.progression
        .map(
          (r) =>
            `Level ${r.level}: BAB ${signed(r.bab)} · Fort ${signed(r.fort)} · Ref ${signed(r.ref)} · Will ${signed(r.will)}`
        )
        .join("\n"),
    },
  ];
  const features = cls.features ?? [];
  if (features.length > 0) {
    // General features (no level gate — basics, proficiencies) first,
    // then level-gated features in the order they arrive.
    const ordered = [...features].sort(
      (a, b) =>
        ((a as { levelsNeeded?: number }).levelsNeeded ?? 0) -
        ((b as { levelsNeeded?: number }).levelsNeeded ?? 0)
    );
    sections.push({
      heading: "Class Features",
      body: ordered
        .map((f) => {
          const lvl = (f as { levelsNeeded?: number }).levelsNeeded;
          return `${f.name}${lvl ? ` (from level ${lvl})` : ""}: ${f.description}`;
        })
        .join("\n"),
    });
  }
  sections.push({
    heading: "Class Skills",
    body: cls.classSkills.join(", "),
  });
  return sections;
}

export function describeClass(cls: ClassDefinition): EntityDetail {
  return {
    title: cls.name,
    badges: ["Class", `Hit Die ${cls.hitDie}`],
    summary: classBrief(cls),
    sections: classSections(cls),
    source: cls.source,
    sourceUrl: cls.sourceUrl,
  };
}

export function describePrestigeClass(cls: PrestigeClassDefinition): EntityDetail {
  const sections = classSections(cls);
  if (cls.prerequisites.length > 0) {
    sections.unshift({ heading: "Prerequisites", body: cls.prerequisites.join("\n") });
  }
  return {
    title: cls.name,
    badges: ["Prestige Class", `Hit Die ${cls.hitDie}`],
    summary: classBrief(cls),
    sections,
    source: cls.source,
    sourceUrl: cls.sourceUrl,
  };
}

export function describeSkill(skill: SkillDefinition): EntityDetail {
  return {
    title: skill.name,
    badges: ["Skill", `Key ability: ${ABILITY_LABEL[skill.keyAbility]}`, ...(skill.trainedOnly ? ["Trained only"] : []), ...(skill.armorCheckPenalty ? ["Armor check penalty applies"] : [])],
    summary:
      skill.description ??
      `${skill.name} is a ${ABILITY_LABEL[skill.keyAbility]}-based skill.${skill.trainedOnly ? " It cannot be used untrained." : " It can be used untrained."} Class skills cap at level + 3 ranks; cross-class ranks cost 1 point per rank (the double-cost rule is locked off at Shaun's direction) and cap at half while that cap toggle is on.`,
    sections: [],
    source: skill.source,
    sourceUrl: skill.sourceUrl,
  };
}

export function describeFeat(feat: FeatDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [];
  if (feat.prerequisites.length > 0) {
    sections.push({ heading: "Prerequisites", body: feat.prerequisites.join("\n") });
  }
  if (feat.modifiers && feat.modifiers.length > 0) {
    sections.push({
      heading: "Modeled Effect",
      body: feat.modifiers.map((m) => `${m.target}: ${signed(m.value)} (${m.bonusType})`).join("\n"),
    });
  }
  if (feat.special) sections.push({ heading: "Special", body: feat.special });
  return {
    title: feat.name,
    badges: ["Feat", feat.category],
    summary: feat.benefitSummary,
    sections,
    source: feat.source,
    sourceUrl: feat.sourceUrl,
  };
}

export function describeFlawTrait(entry: FlawTraitDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [
    { heading: "Full Description", body: entry.description },
  ];
  if (entry.prerequisite) {
    sections.push({ heading: "Prerequisite", body: entry.prerequisite });
  }
  return {
    title: entry.name,
    badges: [entry.kind === "flaw" ? "Flaw" : "Trait"],
    summary: entry.summary,
    sections,
    source: entry.source,
    sourceUrl: entry.sourceUrl,
  };
}

export function describeEquipment(item: EquipmentItem): EntityDetail {
  return {
    title: item.name,
    badges: ["Equipment", item.category, ...(typeof item.acBonus === "number" ? [`AC +${item.acBonus} when equipped`] : [])],
    summary: `${item.cost} · ${item.weight}`,
    sections: [{ heading: "Notes", body: item.notes }],
    source: item.source,
    sourceUrl: item.sourceUrl,
  };
}

export function describeMagicItem(item: MagicItemDefinition): EntityDetail {
  const sections: EntityDetailSection[] = [{ heading: "Cost", body: item.cost }];
  // Generated wands and scrolls (2026-11-02): the item IS a spell in a
  // stick / on a page, so its detail view carries the spell's full
  // crunch — description where the spell record has one, plus the
  // full stat block (lists, casting time, components, range, target,
  // duration, saving throw, spell resistance). The three hand-built
  // scrolls pick the same treatment up by the same id join.
  const spellId = item.id.startsWith("wand-of-")
    ? item.id.slice("wand-of-".length)
    : item.id.startsWith("scroll-of-")
      ? item.id.slice("scroll-of-".length)
      : null;
  const spell = spellId ? SPELL_BY_ID.get(spellId) : undefined;
  if (spell) {
    if (spell.description) sections.push({ heading: "Spell Description", body: spell.description });
    sections.push(
      {
        heading: "Spell Lists",
        body: Object.entries(spell.levels)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([list, lvl]) => `${list} ${lvl}`)
          .join("\n"),
      },
      { heading: "Casting Time", body: spell.castingTime },
      { heading: "Components", body: spell.components },
      { heading: "Range", body: spell.range },
      { heading: "Target / Area / Effect", body: spell.targetOrArea },
      { heading: "Duration", body: spell.duration },
      { heading: "Saving Throw", body: spell.savingThrow },
      { heading: "Spell Resistance", body: spell.spellResistance }
    );
  }
  return {
    title: item.name,
    badges: ["Magic Item", item.category],
    summary: item.summary,
    sections,
    source: item.source,
    sourceUrl: item.sourceUrl,
  };
}

/**
 * Full crunch for one spell. When a list name is given (the library and the
 * picking cards browse one list at a time), its level on that list is badged.
 */
export function describeSpell(spell: SpellDefinition, listName?: string): EntityDetail {
  const schoolLine = `${spell.school}${spell.subschool ? ` (${spell.subschool})` : ""}${
    spell.descriptors.length > 0 ? ` [${spell.descriptors.join(", ")}]` : ""
  }`;
  const levelOnList = listName ? spell.levels[listName] : undefined;
  const sections: EntityDetailSection[] = [
    ...(spell.description ? [{ heading: "Description", body: spell.description }] : []),
    {
      heading: "Spell Lists",
      body: Object.entries(spell.levels)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([list, lvl]) => `${list} ${lvl}`)
        .join("\n"),
    },
    { heading: "Casting Time", body: spell.castingTime },
    { heading: "Components", body: spell.components },
    { heading: "Range", body: spell.range },
    { heading: "Target / Area / Effect", body: spell.targetOrArea },
    { heading: "Duration", body: spell.duration },
    { heading: "Saving Throw", body: spell.savingThrow },
    { heading: "Spell Resistance", body: spell.spellResistance },
  ];
  if (spell.note) sections.push({ heading: "Note", body: spell.note });
  return {
    title: spell.name,
    badges: ["Spell", schoolLine, ...(levelOnList !== undefined && listName ? [`${listName} ${levelOnList}`] : [])],
    summary: spell.summary,
    sections,
    source: spell.source,
    sourceUrl: spell.sourceUrl,
  };
}
