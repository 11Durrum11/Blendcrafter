/**
 * Complete Warrior prestige classes: all thirty-six from Chapter 2 of
 * Complete Warrior (Wizards of the Coast). Built 2026-10-27 from
 * the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Warrior.pdf
 * The PDF is a scanned-image book with no text layer; the text was
 * recovered with OCR and every progression table was read from the
 * printed table. Prerequisites are free text (shown in the UI,
 * soft-checked only), matching the other packs.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const G5 = [2, 3, 3, 4, 4]; // good save, 5 levels
const P5 = [0, 0, 1, 1, 1]; // poor save, 5 levels
const FULL5 = [1, 2, 3, 4, 5];
const TQ5 = [0, 1, 2, 3, 3];
const HALF5 = [0, 1, 1, 2, 2];
const G3 = [2, 3, 3]; // good save, 3 levels
const P3 = [0, 0, 1]; // poor save, 3 levels
const FULL3 = [1, 2, 3];
const TQ3 = [0, 1, 2];

const CW = "Complete Warrior";
const CW_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Warrior.pdf";
const CH2 = `${CW} — Chapter 2: Prestige Classes`;

export const COMPLETE_WARRIOR_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "bear-warrior",
    name: "Bear Warrior",
    ruleset: "core",
    source: `${CH2} — Bear Warrior (p. 16)`,
    sourceUrl: CW_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Climb", "Handle Animal", "Intimidate", "Jump", "Listen", "Ride",
      "Survival", "Swim",
    ],
    prerequisites: [
      "Base Attack Bonus: +7",
      "Feats: Power Attack",
      "Special: Rage or frenzy ability",
    ],
    features: [
      {
        key: "bear-warrior-features",
        name: "Bear Warrior Features",
        category: "trait",
        description:
          "While raging or in a frenzy, he can take bear form (like polymorph): black bear 1/day at 1st (gaining +8 Str, +2 Dex, +4 Con in that form), brown bear and 2/day at 5th (+16 Str, +2 Dex, +8 Con), and dire bear and 3/day at 10th (+20 Str, +2 Dex, +8 Con). Gains the scent ability at 3rd level (in any form), and one extra daily use of rage or frenzy at 7th.",
        source: `${CH2} — Bear Warrior (pp. 16–17)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "bladesinger",
    name: "Bladesinger",
    ruleset: "core",
    source: `${CH2} — Bladesinger (p. 17)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL, P, G, G),
    classSkills: [
      "Balance", "Concentration", "Jump", "Knowledge (arcana)", "Perform",
      "Spellcraft", "Tumble",
    ],
    prerequisites: [
      "Race: Elf or half-elf",
      "Base Attack Bonus: +5",
      "Skills: Balance 2 ranks, Concentration 4 ranks, Perform (dance) 2 ranks, Perform (sing) 2 ranks, Tumble 2 ranks",
      "Feats: Combat Casting, Combat Expertise, Dodge, Weapon Focus (longsword or rapier)",
      "Spells: Able to cast 1st-level arcane spells",
    ],
    features: [
      {
        key: "bladesinger-features",
        name: "Bladesinger Features",
        category: "trait",
        description:
          "Fights with a longsword or rapier in one hand and nothing in the other: bladesong style grants a dodge bonus to AC equal to her class level (maximum her Intelligence bonus), lost in medium or heavy armor (1st). Lesser spellsong lets her take 10 on Concentration checks to cast defensively (2nd); song of celerity quickens one spell of up to 2nd level 1/day (4th; up to 4th level at 8th); greater spellsong ignores arcane spell failure in light armor (6th); song of fury adds an extra attack on a full attack at a −2 penalty to all attacks that round (10th). Advances arcane spellcasting at every odd-numbered level (1st, 3rd, 5th, 7th, 9th).",
        source: `${CH2} — Bladesinger (pp. 17–19)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "cavalier",
    name: "Cavalier",
    ruleset: "core",
    source: `${CH2} — Cavalier (p. 19)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: [
      "Diplomacy", "Handle Animal", "Intimidate",
      "Knowledge (nobility and royalty)", "Profession", "Ride",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +8",
      "Skills: Handle Animal 4 ranks, Knowledge (nobility and royalty) 4 ranks, Ride 6 ranks",
      "Feats: Mounted Combat, Ride-By Attack, Spirited Charge, Weapon Focus (lance)",
    ],
    features: [
      {
        key: "cavalier-features",
        name: "Cavalier Features",
        category: "trait",
        description:
          "The supreme mounted knight: a special mount, courtly knowledge (class level as a bonus on Knowledge (nobility and royalty)), a ride bonus (+2 at 1st, growing to +8 at 9th), and mounted weapon bonuses with the lance (+1 at 1st, +2 at 5th, +3 at 9th) and sword (+1 at 2nd, +2 at 6th, +3 at 10th). Deadly charge multiplies charge damage extra times 1/day at 2nd (growing to 4/day at 8th, and becoming unstoppable charge 5/day at 10th), burst of speed doubles his mount's speed briefly (3rd), and full mounted attack lets him move and full attack while mounted (6th).",
        source: `${CH2} — Cavalier (pp. 19–20)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "dark-hunter",
    name: "Dark Hunter",
    ruleset: "core",
    source: `${CH2} — Dark Hunter (p. 20)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: [
      "Climb", "Concentration", "Craft", "Disable Device", "Hide",
      "Knowledge (dungeoneering)", "Listen", "Move Silently", "Profession",
      "Spot", "Survival", "Swim", "Use Rope",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Craft (trapmaking) 5 ranks, Knowledge (dungeoneering) 2 ranks, Move Silently 2 ranks, Survival 2 ranks",
      "Feats: Blind-Fight, Track",
    ],
    features: [
      {
        key: "dark-hunter-features",
        name: "Dark Hunter Features",
        category: "trait",
        description:
          "A five-level underground stalker: improved stonecunning (1st), enhanced darkvision (gains darkvision 30 ft. or extends existing darkvision by 30 ft. at 2nd, and by another 30 ft. at 4th), sneak attack +1d6 (3rd), stone's hue lets her blend with stone surroundings (4th), and a death attack like an assassin's at 5th.",
        source: `${CH2} — Dark Hunter (pp. 20–22)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "darkwood-stalker",
    name: "Darkwood Stalker",
    ruleset: "core",
    source: `${CH2} — Darkwood Stalker (p. 23)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL, G, G, P),
    classSkills: [
      "Climb", "Craft", "Heal", "Hide", "Jump", "Knowledge (nature)", "Listen",
      "Move Silently", "Profession", "Ride", "Search", "Spot", "Survival",
      "Swim", "Use Rope",
    ],
    prerequisites: [
      "Race: Elf or half-elf",
      "Base Attack Bonus: +5",
      "Skills: Hide 5 ranks, Listen 5 ranks, Move Silently 5 ranks, Spot 5 ranks, Survival 5 ranks, Speak Language (Orc)",
      "Feats: Dodge, Track",
    ],
    features: [
      {
        key: "darkwood-stalker-features",
        name: "Darkwood Stalker Features",
        category: "trait",
        description:
          "An elven hunter sworn against orcs: ancient foe grants a bonus against orcs (+2 at 1st, +4 at 4th, +6 at 7th, +8 at 10th) on key checks and attacks, uncanny dodge (2nd) and improved uncanny dodge (5th), sneak attack +1d6 at 3rd (+2d6 6th, +3d6 9th), darkvision 30 ft. at 4th (60 ft. at 7th), a once-daily dodge critical that can turn a critical hit against him into a normal hit (8th), and a death attack against orcs at 10th.",
        source: `${CH2} — Darkwood Stalker (pp. 23–25)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "dervish",
    name: "Dervish",
    ruleset: "core",
    source: `${CH2} — Dervish (p. 25)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL, P, G, G),
    classSkills: [
      "Balance", "Craft", "Escape Artist", "Jump", "Listen", "Perform",
      "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Perform (dance) 3 ranks, Tumble 3 ranks",
      "Feats: Combat Expertise, Dodge, Mobility, Weapon Focus (any slashing melee weapon)",
    ],
    features: [
      {
        key: "dervish-features",
        name: "Dervish Features",
        category: "trait",
        description:
          "A whirling slashing dancer: the dervish dance (1/day at 1st, growing to 5/day at 9th) lets her make a full melee attack while moving up to her speed between strikes, with movement mastery and slashing blades (her scimitars count as light weapons) from 1st. Also gains an AC bonus while dancing (+1 at 1st, +2 at 5th, +3 at 9th), fast movement (+5 ft. at 2nd, +10 ft. at 5th, +15 ft. at 8th), Spring Attack as a bonus feat (3rd), dance of death (4th), improved reaction (6th), elaborate parry (7th), tireless dance ending the dance's fatigue (9th), and a thousand cuts (10th) — a devastating doubled full attack.",
        source: `${CH2} — Dervish (pp. 25–27)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "drunken-master",
    name: "Drunken Master",
    ruleset: "core",
    source: `${CH2} — Drunken Master (p. 27)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Escape Artist", "Hide", "Jump",
      "Listen", "Move Silently", "Perform", "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Skills: Tumble 8 ranks",
      "Feats: Dodge, Great Fortitude, Improved Unarmed Strike (or the monk's unarmed strike ability)",
      "Special: Flurry of blows ability and evasion ability",
      "Special: Must be chosen by existing drunken masters and survive a night of revelry among them",
    ],
    features: [
      {
        key: "drunken-master-features",
        name: "Drunken Master Features",
        category: "trait",
        description:
          "A staggering monk who fights with whatever is at hand: drink like a demon turns alcohol into Strength and Constitution at the cost of Intelligence, Wisdom, and Dexterity (1st), and his improvised weapons deal ever-increasing damage (1st; improved at 4th, greater at 5th, superior at 9th). Also gains stagger, a surprise charge that need not run straight (2nd), swaying waist dodge bonus (3rd), an AC bonus (+1 at 4th, +2 at 9th), Improved Feint (6th) and Improved Grapple (7th) as bonus feats, for medicinal purposes healing (8th), corkscrew rush (9th), and a breath of flame at 10th.",
        source: `${CH2} — Drunken Master (pp. 27–29)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "exotic-weapon-master",
    name: "Exotic Weapon Master",
    ruleset: "core",
    source: `${CH2} — Exotic Weapon Master (p. 30)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL3, G3, P3, P3),
    classSkills: ["Craft", "Intimidate", "Profession"],
    prerequisites: [
      "Base Attack Bonus: +6",
      "Skills: Craft (weaponsmithing) 3 ranks",
      "Feats: Exotic Weapon Proficiency (any exotic weapon), Weapon Focus (any exotic weapon)",
      "Special: A race with familiarity with an exotic weapon counts as having Exotic Weapon Proficiency with that weapon for this class",
    ],
    features: [
      {
        key: "exotic-weapon-master-features",
        name: "Exotic Weapon Master Features",
        category: "trait",
        description:
          "A three-level master of one exotic weapon: at each level he learns an exotic weapon stunt of his choice from the book's list — close quarters, exotic reach, exotic sunder, flurry of strikes, grappling strike, ranged disarm, show off, stunning blow, throw exotic weapon, trip attack, twin exotic weapon fighting, and uncanny blow among them.",
        source: `${CH2} — Exotic Weapon Master (p. 30)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "eye-of-gruumsh",
    name: "Eye of Gruumsh",
    ruleset: "core",
    source: `${CH2} — Eye of Gruumsh (p. 31)`,
    sourceUrl: CW_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Climb", "Intimidate", "Jump", "Ride", "Survival", "Swim",
    ],
    prerequisites: [
      "Race: Orc or half-orc",
      "Alignment: Chaotic evil, chaotic neutral, or neutral evil",
      "Base Attack Bonus: +6",
      "Feats: Exotic Weapon Proficiency (orc double axe), Weapon Focus (orc double axe)",
      "Special: Must worship Gruumsh and put out his own right eye in a special ceremony",
    ],
    features: [
      {
        key: "eye-of-gruumsh-features",
        name: "Eye of Gruumsh Features",
        category: "trait",
        description:
          "A one-eyed orc zealot: gains Blind-Fight as a bonus feat with no ill effects from his missing eye, command the horde over lesser nongood orcs, and rage that stacks with barbarian levels (all 1st). Also gains swing blindly (2nd), ritual scarring natural armor (+1 at 3rd, +2 at 6th, +3 at 9th), blinding spittle (2/day at 4th, 4/day at 7th), blindsight (5 ft. at 5th, 10 ft. at 8th), and the sight of Gruumsh at 10th.",
        source: `${CH2} — Eye of Gruumsh (pp. 31–33)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "frenzied-berserker",
    name: "Frenzied Berserker",
    ruleset: "core",
    source: `${CH2} — Frenzied Berserker (p. 34)`,
    sourceUrl: CW_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Intimidate", "Jump", "Ride", "Swim"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +6",
      "Feats: Cleave, Destructive Rage, Intimidating Rage, Power Attack",
    ],
    features: [
      {
        key: "frenzied-berserker-features",
        name: "Frenzied Berserker Features",
        category: "trait",
        description:
          "A slave to battle-madness: frenzy 1/day at 1st (growing to 5/day at 9th) grants Strength and speed beyond rage, with Diehard as a bonus feat (1st) and supreme cleave (2nd). Deathless frenzy keeps her fighting past lethal damage (4th), improved power attack (5th), inspire frenzy spreads the madness to allies (1/day at 6th, 2/day at 8th, 3/day at 10th), greater frenzy (8th), and tireless frenzy with supreme power attack at 10th.",
        source: `${CH2} — Frenzied Berserker (pp. 34–35)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "gnome-giant-slayer",
    name: "Gnome Giant-Slayer",
    ruleset: "core",
    source: `${CH2} — Gnome Giant-Slayer (p. 36)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Climb", "Craft", "Escape Artist", "Hide", "Intimidate", "Jump",
      "Move Silently", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Race: Gnome",
      "Base Attack Bonus: +5",
      "Skills: Escape Artist 3 ranks, Tumble 3 ranks, Speak Language (Giant)",
      "Feats: Dodge, Mobility, Spring Attack",
    ],
    features: [
      {
        key: "gnome-giant-slayer-features",
        name: "Gnome Giant-Slayer Features",
        category: "trait",
        description:
          "A small hero who brings down giants: favored enemy (giant) +2 at 1st, increasing by +2 every three levels (+4 at 4th, +6 at 7th, +8 at 10th, stacking with a ranger's favored enemy), crafty fighter (2nd), slippery — adding his class level to escape grapples against much larger creatures (3rd), close shot with ranged attacks in melee (5th), fast movement (6th), improved mobility (8th), and annoying strike (9th).",
        source: `${CH2} — Gnome Giant-Slayer (pp. 36–37)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "halfling-outrider",
    name: "Halfling Outrider",
    ruleset: "core",
    source: `${CH2} — Halfling Outrider (p. 38)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Handle Animal", "Listen", "Ride", "Spot", "Survival"],
    prerequisites: [
      "Race: Halfling",
      "Base Attack Bonus: +5",
      "Skills: Listen 3 ranks, Ride 6 ranks, Spot 3 ranks",
      "Feats: Mounted Combat, Mounted Archery",
    ],
    features: [
      {
        key: "halfling-outrider-features",
        name: "Halfling Outrider Features",
        category: "trait",
        description:
          "A mounted halfling scout: gains a mount from her community (class levels stack with paladin, druid, and ranger levels for mount/companion abilities), Alertness as a bonus feat, a ride bonus equal to her class level, and a dodge AC bonus while mounted (+1 at 1st, growing to +5 at 9th). Also gains defensive riding (2nd), unbroken charge through rough ground (3rd), stand on mount (4th), leap from the saddle (5th), evasion while mounted (7th), full mounted attack (8th), and quick turn (10th).",
        source: `${CH2} — Halfling Outrider (pp. 38–39)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "hulking-hurler",
    name: "Hulking Hurler",
    ruleset: "core",
    source: `${CH2} — Hulking Hurler (p. 40)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL3, P3, G3, P3),
    classSkills: ["Climb", "Intimidate", "Jump", "Swim"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Feats: Point Blank Shot, Power Attack, Weapon Focus (any thrown weapon)",
      "Special: Large size or larger",
    ],
    features: [
      {
        key: "hulking-hurler-features",
        name: "Hulking Hurler Features",
        category: "trait",
        description:
          "A three-level giant who throws anything: catch weapon and really throw anything (he can hurl weapons up to two size categories larger than himself, or items as heavy as a medium load) at 1st, including the book's rulings for ranged power attack, knockdown blow, meteor strike, and area attacks with huge objects. At 2nd and 3rd he learns a two-handed hurl trick of his choice (such as overburdened heave, overhead area attack, or aimed heave).",
        source: `${CH2} — Hulking Hurler (pp. 40–41)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "hunter-of-the-dead",
    name: "Hunter of the Dead",
    ruleset: "core",
    source: `${CH2} — Hunter of the Dead (p. 42)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Concentration", "Heal", "Knowledge (religion)", "Profession", "Ride",
      "Search",
    ],
    prerequisites: [
      "Alignment: Any nonevil",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (religion) 5 ranks",
      "Special: Able to turn undead",
    ],
    features: [
      {
        key: "hunter-of-the-dead-features",
        name: "Hunter of the Dead Features",
        category: "trait",
        description:
          "A sworn undead-slayer: detect undead at will (1st), smite undead 1/day (2nd; 2/day at 6th, 3/day at 10th), spurn death's touch makes him immune to energy drain and ability damage/drain from undead (3rd), truly dead foes he destroys cannot return as undead (5th), Extra Turning as a bonus feat (6th), a positive energy burst (8th), and sealed life making him immune to death effects and similar magic (10th). He also casts a handful of divine spells from his own small list, per the spells-per-day columns of the printed table.",
        source: `${CH2} — Hunter of the Dead (pp. 42–44)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "invisible-blade",
    name: "Invisible Blade",
    ruleset: "core",
    source: `${CH2} — Invisible Blade (p. 45)`,
    sourceUrl: CW_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Escape Artist", "Hide", "Innuendo",
      "Jump", "Listen", "Move Silently", "Perform", "Profession", "Sense Motive",
      "Spot", "Tumble",
    ],
    prerequisites: [
      "Skills: Bluff 8 ranks, Sense Motive 6 ranks",
      "Feats: Far Shot, Point Blank Shot, Weapon Focus (dagger, kukri, or punching dagger)",
      "Special: Must pass the class's rite-of-passage combat (see the book). As printed, the class has no base attack bonus requirement",
      "Note: The printed class skill list includes Innuendo, a 3.0-era skill folded into Bluff in 3.5; it is listed as printed",
    ],
    features: [
      {
        key: "invisible-blade-features",
        name: "Invisible Blade Features",
        category: "trait",
        description:
          "A five-level dagger duelist who fights unarmored: dagger sneak attack +1d6 at 1st (+2d6 at 3rd, +3d6 at 5th) with daggers, kukris, and punching daggers, and unfettered defense adds his Intelligence bonus to AC while unarmored (1st). Bleeding wound makes his sneak attacks bleed (2nd), uncanny feint lets him feint as a move action (3rd; as a free action at 5th), and feint mastery lets him take 10 on feint checks (4th).",
        source: `${CH2} — Invisible Blade (pp. 45–46)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "justiciar",
    name: "Justiciar",
    ruleset: "core",
    source: `${CH2} — Justiciar (p. 47)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: [
      "Bluff", "Climb", "Disguise", "Gather Information", "Heal", "Hide",
      "Intimidate", "Jump", "Knowledge", "Listen", "Move Silently", "Open Lock",
      "Ride", "Search", "Sense Motive", "Spot", "Survival", "Swim", "Use Rope",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +6",
      "Skills: Gather Information 5 ranks, Search 5 ranks, Survival 5 ranks",
      "Feats: Skill Focus (Gather Information), Track",
      "Note: The book prints the justiciar's Knowledge class skill with no specialty specified; it is entered as printed",
    ],
    features: [
      {
        key: "justiciar-features",
        name: "Justiciar Features",
        category: "trait",
        description:
          "A bounty hunter who brings them back alive: bring 'em back alive lets him deal nonlethal damage without penalty, and nonlethal strike adds +1d6 nonlethal damage (2d6 at 4th, 3d6 at 7th, 4d6 at 10th). Also gains Improved Grapple as a bonus feat and crippling strike (2nd), Exotic Weapon Proficiency (manacles) and street savvy (+2 at 3rd, growing to +6 at 9th) on Gather Information and Knowledge checks in his hunts (3rd), hog-tie to bind a pinned foe (5th), improved hog-tie (8th), and intuition to unerringly sense his quarry's direction (10th).",
        source: `${CH2} — Justiciar (pp. 47–48)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "kensai",
    name: "Kensai",
    ruleset: "core",
    source: `${CH2} — Kensai (p. 49)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Intimidate",
      "Jump", "Knowledge (local)", "Knowledge (nobility and royalty)", "Ride",
      "Sense Motive",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +5",
      "Skills: Concentration 5 ranks, Diplomacy 5 ranks, Ride 5 ranks",
      "Feats: Combat Expertise, Weapon Focus (any weapon)",
      "Special: Must complete the kensai's oath of service (to an ideal, philosophy, organization, lord, or similar cause)",
      "Note: The book lists Knowledge (local and nobility) among the class skills; both specialties are entered",
    ],
    features: [
      {
        key: "kensai-features",
        name: "Kensai Features",
        category: "trait",
        description:
          "A warrior bound by oath to a signature weapon: at 1st he chooses one masterwork weapon (or his natural weapons) and imbues it with magical enhancement by spending XP, its bonus growing with his level per the book's signature weapon table. Also gains power surge, a brief Strength boost from a Concentration check (2nd), ki projection that overawe onlookers (4th), withstand to let allies borrow his saving throws (5th), instill to lend an ally part of his own base attack bonus (8th), and ki warlord making him a natural commander (10th).",
        source: `${CH2} — Kensai (pp. 49–52)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "knight-of-the-chalice",
    name: "Knight of the Chalice",
    ruleset: "core",
    source: `${CH2} — Knight of the Chalice (p. 53)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Concentration", "Craft", "Diplomacy", "Intimidate", "Knowledge (religion)",
      "Knowledge (the planes)", "Profession", "Sense Motive",
    ],
    prerequisites: [
      "Alignment: Lawful good",
      "Base Attack Bonus: +8",
      "Skills: Knowledge (religion) 10 ranks, Knowledge (the planes) 5 ranks",
      "Spells: Able to cast divine spells, including protection from evil",
    ],
    features: [
      {
        key: "knight-of-the-chalice-features",
        name: "Knight of the Chalice Features",
        category: "trait",
        description:
          "An elite demon-hunter: fiendslaying grants +1 on attacks and +1d6 damage against evil outsiders at 1st, growing every three levels (+2/+2d6 at 3rd, +3/+3d6 at 6th, +4/+4d6 at 9th), censure demons turns demons like a cleric turns undead (2nd), and courage of heaven makes him fearless (2nd), immune to enchantments (5th), and finally radiates that courage to allies (8th). Also gains consecrated casting (4th), holy aura 1/day (10th), and his own small divine spell list per the printed table's spells-per-day columns.",
        source: `${CH2} — Knight of the Chalice (pp. 53–54)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "knight-protector",
    name: "Knight Protector",
    ruleset: "core",
    source: `${CH2} — Knight Protector (p. 55)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL, P, P, G),
    classSkills: [
      "Diplomacy", "Intimidate", "Knowledge (nobility and royalty)", "Ride", "Spot",
    ],
    prerequisites: [
      "Alignment: Lawful neutral or lawful good",
      "Base Attack Bonus: +5",
      "Skills: Diplomacy 6 ranks, Ride 6 ranks, Knowledge (nobility and royalty) 4 ranks",
      "Feats: Armor Proficiency (heavy), Cleave, Great Cleave, Mounted Combat, Power Attack",
    ],
    features: [
      {
        key: "knight-protector-features",
        name: "Knight Protector Features",
        category: "trait",
        description:
          "A chivalric bodyguard-knight: defensive stance (+2 at 1st, growing to +5 at 10th) and shining beacon make allies fight harder near him, best effort grants a once-daily skill bonus (+2 at 2nd, +3 at 5th, +4 at 8th), Iron Will as a bonus feat (2nd), supreme cleave lets him step between cleave attacks (3rd), no mercy grants extra attacks of opportunity (one at 6th, two at 9th), and retributive attack answers anyone who fells his ally (10th).",
        source: `${CH2} — Knight Protector (pp. 55–57)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "master-thrower",
    name: "Master Thrower",
    ruleset: "core",
    source: `${CH2} — Master Thrower (p. 58)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL5, P5, G5, P5),
    classSkills: [
      "Bluff", "Climb", "Concentration", "Craft", "Jump", "Perform", "Profession",
      "Sleight of Hand", "Spot", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Sleight of Hand 4 ranks",
      "Feats: Point Blank Shot, Precise Shot, Weapon Focus (any thrown weapon)",
    ],
    features: [
      {
        key: "master-thrower-features",
        name: "Master Thrower Features",
        category: "trait",
        description:
          "A five-level thrown-weapon specialist: Quick Draw as a bonus feat (1st) and a thrown weapon trick at 1st, 3rd, and 5th chosen from the book's list (deadeye shot, defensive throw, doubletoss, palm throw, sneaky shot, trip shot, tumbling toss, two with one blow, weak spot). Also gains evasion (2nd), Snatch Arrows as a bonus feat (4th), and critical throw, which improves his thrown weapons' critical threat range (5th).",
        source: `${CH2} — Master Thrower (pp. 58–59)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "master-of-the-unseen-hand",
    name: "Master of the Unseen Hand",
    ruleset: "core",
    source: `${CH2} — Master of the Unseen Hand (p. 60)`,
    sourceUrl: CW_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL5, P5, P5, G5),
    classSkills: [
      "Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Profession",
      "Spellcraft",
    ],
    prerequisites: [
      "Skills: Concentration 8 ranks",
      "Spells: Able to cast the telekinesis spell, or access to telekinesis as a spell-like or supernatural ability",
      "Note: The printed table gives this five-level class a full base attack progression despite its d4 Hit Die; it is entered as printed",
    ],
    features: [
      {
        key: "master-of-the-unseen-hand-features",
        name: "Master of the Unseen Hand Features",
        category: "trait",
        description:
          "A five-level telekinesis master: his caster level for telekinesis (only) rises by +1 per class level, and versatile telekinesis lets him use every version of the spell (1st). Also gains telekinetic wielder — fighting with a weapon moved by telekinesis — and sustained concentration, maintaining telekinesis as a move action (2nd), full attack telekinesis (3rd), improved violent thrust and telekinetic flight (4th), and fling skyward to hurl creatures straight up (5th). The class does not advance regular spellcasting.",
        source: `${CH2} — Master of the Unseen Hand (pp. 60–61)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "mindspy",
    name: "Mindspy",
    ruleset: "core",
    source: `${CH2} — Mindspy (p. 62)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL5, P5, P5, G5),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Intimidate", "Profession", "Sense Motive",
    ],
    prerequisites: [
      "Base Attack Bonus: +3",
      "Skills: Concentration 8 ranks",
      "Spells: Able to cast the detect thoughts spell or to use detect thoughts as a spell-like or supernatural ability",
    ],
    features: [
      {
        key: "mindspy-features",
        name: "Mindspy Features",
        category: "trait",
        description:
          "A five-level warrior who reads minds in combat: detect thoughts becomes a sphere centered on him (spherical detect thoughts), combat telepathy lets that read aid his fighting, and anticipate turns a foe's surface thoughts into bonuses against that foe (all 1st). Also gains faster mindscan (2nd), the ability to hold multiple creatures' surface thoughts at once (two at 3rd, four at 5th), and instant mindscan, reading thoughts without the usual rounds of study (4th).",
        source: `${CH2} — Mindspy (p. 62)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "natures-warrior",
    name: "Nature's Warrior",
    ruleset: "core",
    source: `${CH2} — Nature's Warrior (p. 63)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: [
      "Diplomacy", "Handle Animal", "Intimidate", "Jump", "Knowledge (nature)",
      "Listen", "Survival", "Swim",
    ],
    prerequisites: [
      "Alignment: Any neutral",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (nature) 8 ranks, Survival 8 ranks, Knowledge (the planes) 2 ranks",
      "Feats: Track",
      "Special: Wild shape ability",
    ],
    features: [
      {
        key: "natures-warrior-features",
        name: "Nature's Warrior Features",
        category: "trait",
        description:
          "A five-level wild-shape warrior: wilding means her nature's warrior levels stack with druid levels for wild shape, and nature's armament grants a chosen wild-shape improvement at 1st, 3rd, and 5th from the book's menu (such as blazing roar, claws of the grizzly, earth's resilience, robe of clouds, serpent's coils, or water's flow). Her divine spellcasting advances by +1 level at 2nd and 4th.",
        source: `${CH2} — Nature's Warrior (pp. 63–64)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "occult-slayer",
    name: "Occult Slayer",
    ruleset: "core",
    source: `${CH2} — Occult Slayer (p. 65)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows(FULL5, P5, P5, G5),
    classSkills: [
      "Bluff", "Craft", "Gather Information", "Knowledge (arcana)", "Profession",
      "Sense Motive", "Spellcraft",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Knowledge (arcana) 4 ranks, Spellcraft 3 ranks",
      "Feats: Improved Initiative, Weapon Focus (any weapon)",
    ],
    features: [
      {
        key: "occult-slayer-features",
        name: "Occult Slayer Features",
        category: "trait",
        description:
          "A five-level mage-hunter: magical defense grants +1 on saves against spells and spell-like abilities at 1st (+2 at 3rd, +3 at 5th), and weapon bond ties her power to one masterwork weapon whose hits disrupt spellcasters (1st). Also gains mind over magic, turning a spell back on its caster 1/day at 2nd (2/day at 4th), vicious strike doubling damage on a readied attack against a caster (2nd), auravision to see magical auras (3rd), and a nondetection cloak shielding her from divinations (5th).",
        source: `${CH2} — Occult Slayer (pp. 65–66)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "order-of-the-bow-initiate",
    name: "Order of the Bow Initiate",
    ruleset: "core",
    source: `${CH2} — Order of the Bow Initiate (p. 68)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["ref", "will"],
    progression: rows(FULL, P, G, G),
    classSkills: [
      "Climb", "Craft", "Knowledge (religion)", "Ride", "Spot", "Swim",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Craft (bowmaking) 5 ranks, Knowledge (religion) 2 ranks",
      "Feats: Point Blank Shot, Precise Shot, Rapid Shot, Weapon Focus (any bow)",
    ],
    features: [
      {
        key: "order-of-the-bow-initiate-features",
        name: "Order of the Bow Initiate Features",
        category: "trait",
        description:
          "A zen archer whose single precise shot grows deadlier with level: ranged precision adds +1d8 damage at 1st, increasing by +1d8 every two levels (+2d8 at 3rd, +3d8 at 5th, +4d8 at 7th, +5d8 at 9th). Also gains close combat shot, firing in melee without provoking attacks of opportunity (2nd), Greater Weapon Focus as a bonus feat (4th), Sharp-Shooting as a bonus feat (6th), Greater Weapon Specialization as a bonus feat (8th), and extended precision, stretching his precision damage out to 60 feet (10th).",
        source: `${CH2} — Order of the Bow Initiate (pp. 68–69)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "purple-dragon-knight",
    name: "Purple Dragon Knight",
    ruleset: "core",
    source: `${CH2} — Purple Dragon Knight (p. 70)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: [
      "Climb", "Diplomacy", "Handle Animal", "Intimidate", "Jump",
      "Knowledge (local)", "Ride", "Swim",
    ],
    prerequisites: [
      "Alignment: Lawful good, neutral good, lawful neutral, or neutral",
      "Base Attack Bonus: +5",
      "Skills: Diplomacy 1 rank or Intimidate 1 rank, Listen 2 ranks, Ride 2 ranks, Spot 2 ranks",
      "Feats: Mounted Combat, Negotiator",
      "Special: Membership in the Purple Dragon Knights (the military order of Cormyr, as printed in this book)",
    ],
    features: [
      {
        key: "purple-dragon-knight-features",
        name: "Purple Dragon Knight Features",
        category: "trait",
        description:
          "A five-level officer of Cormyr's Purple Dragons: heroic shield lets allies use his shield bonus (1st) and rallying cry heartens his troops (1st). Also gains inspire courage 1/day as a bard (2nd; 2/day at 4th), a fear effect 1/day (3rd; 2/day at 4th), oath of wrath against a chosen foe (4th), and final stand, granting nearby allies temporary hit points for a last-ditch defense (5th).",
        source: `${CH2} — Purple Dragon Knight (pp. 70–71)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "rage-mage",
    name: "Rage Mage",
    ruleset: "core",
    source: `${CH2} — Rage Mage (p. 72)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ, G, P, P),
    classSkills: ["Concentration", "Profession", "Spellcraft", "Survival"],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +4",
      "Spells: Able to cast 2nd-level arcane spells",
      "Special: Rage or frenzy ability",
    ],
    features: [
      {
        key: "rage-mage-features",
        name: "Rage Mage Features",
        category: "trait",
        description:
          "A barbarian-sorcerer who casts in a fury: spell rage (1/day at 1st, 2/day at 5th, 3/day at 10th) lets her cast spells while raging, with bonuses to her casting ability scores and caster level. Also gains overcome spell failure, ignoring arcane spell failure from armor while spell raging (2nd), extra daily uses of her base rage (3rd and 8th), spell fury (7th), tireless rage (9th), and warrior cry (10th). Her arcane spellcasting advances by +1 level at 2nd, 4th, 6th, 8th, and 10th.",
        source: `${CH2} — Rage Mage (pp. 72–73)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "ravager",
    name: "Ravager",
    ruleset: "core",
    source: `${CH2} — Ravager (p. 73)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Intimidate", "Knowledge (religion)", "Move Silently", "Profession", "Ride",
    ],
    prerequisites: [
      "Alignment: Chaotic evil or neutral evil",
      "Base Attack Bonus: +5",
      "Skills: Intimidate 3 ranks, Knowledge (religion) 3 ranks, Survival 4 ranks",
      "Feats: Improved Sunder, Power Attack",
      "Special: Must survive the ravager initiation rites (see the book's sidebar)",
    ],
    features: [
      {
        key: "ravager-features",
        name: "Ravager Features",
        category: "trait",
        description:
          "A devotee of Erythnul, god of slaughter: pain touch 1/day (1st; 2/day at 4th, 3/day at 7th) inflicts wracking pain with a touch, an aura of fear spreads around him (10 ft. at 2nd, 20 ft. at 5th, 30 ft. at 8th; usable more often as he rises), cruelest cut leaves wounds that resist healing (1/day at 3rd, 2/day at 6th, 3/day at 9th), and visage of terror at 10th makes his very face a weapon of dread.",
        source: `${CH2} — Ravager (pp. 73–75)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "reaping-mauler",
    name: "Reaping Mauler",
    ruleset: "core",
    source: `${CH2} — Reaping Mauler (p. 75)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref"],
    progression: rows(FULL5, G5, G5, P5),
    classSkills: [
      "Climb", "Craft", "Escape Artist", "Intimidate", "Jump", "Perform",
      "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Escape Artist 5 ranks, Tumble 5 ranks",
      "Feats: Clever Wrestling, Improved Unarmed Strike",
      "Special: Must have defeated at least three opponents one size category larger than himself, with his bare hands",
    ],
    features: [
      {
        key: "reaping-mauler-features",
        name: "Reaping Mauler Features",
        category: "trait",
        description:
          "A five-level pit-wrestler: Improved Grapple and Mobility as bonus feats (1st) and adept wrestling, a growing bonus on grapple and escape checks (+1 at 2nd, +2 at 4th). Also gains counter grapple, turning a foe's grapple attempt against him, and the sleeper lock to render a pinned foe unconscious (3rd), and devastating grapple, which can kill a foe held in a pin for 3 rounds (5th).",
        source: `${CH2} — Reaping Mauler (pp. 75–76)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "ronin",
    name: "Ronin",
    ruleset: "core",
    source: `${CH2} — Ronin (p. 77)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Bluff", "Craft", "Disguise", "Intimidate", "Knowledge (history)",
      "Knowledge (nobility and royalty)", "Ride", "Sense Motive",
    ],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +6",
      "Feats: Exotic Weapon Proficiency (bastard sword)",
      "Special: Must have fled or been exiled from the service of a feudal lord (the class is built for ex-samurai; the book gives rules for trading samurai levels for ronin levels)",
    ],
    features: [
      {
        key: "ronin-features",
        name: "Ronin Features",
        category: "trait",
        description:
          "A masterless samurai: infamy marks his dishonor (1st), and sneak attack +1d6 at 1st grows every three levels (+2d6 at 4th, +3d6 at 7th, +4d6 at 10th) — a disgraceful but effective style for a former samurai. Also gains banzai charge, trading his dodge for a crashing mounted or foot charge (2nd), and bonus feats at 5th and 9th.",
        source: `${CH2} — Ronin (pp. 77–78)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "spellsword",
    name: "Spellsword",
    ruleset: "core",
    source: `${CH2} — Spellsword (p. 79)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: [
      "Climb", "Concentration", "Jump", "Knowledge (arcana)", "Profession",
      "Spellcraft",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Knowledge (arcana) 6 ranks",
      "Proficiency: With all simple and martial weapons and with all armor (light, medium, and heavy)",
      "Spells: Able to cast 2nd-level arcane spells",
      "Note: The book lists the class skill simply as Knowledge; Knowledge (arcana) is entered, matching the class's requirement",
    ],
    features: [
      {
        key: "spellsword-features",
        name: "Spellsword Features",
        category: "trait",
        description:
          "An armored arcane warrior: ignore spell failure 10% at 1st, growing by 5% every two levels (15% at 3rd, 20% at 5th, 25% at 7th, 30% at 9th), a fighter-style bonus feat (2nd), and channel spell — storing a spell in his weapon and delivering it with a hit — 3/day at 4th (4/day at 6th, 5/day at 8th), becoming multiple channel spell at 10th. His arcane spellcasting advances by +1 level at 1st, 3rd, 5th, 7th, and 9th.",
        source: `${CH2} — Spellsword (pp. 79–80)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "stonelord",
    name: "Stonelord",
    ruleset: "core",
    source: `${CH2} — Stonelord (p. 81)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Climb", "Concentration", "Craft", "Knowledge", "Profession", "Spot",
      "Survival",
    ],
    prerequisites: [
      "Race: Dwarf",
      "Base Attack Bonus: +5",
      "Skills: Craft (stoneworking) 6 ranks, Speak Language (Terran)",
      "Feats: Endurance",
      "Special: Must undergo the stonelord initiation (including ingesting 1,000 gp worth of powdered gemstones; the chosen gem becomes her totem gem, which she must carry to use her stone powers)",
      "Note: The book lists the class skill simply as Knowledge; entered as printed",
    ],
    features: [
      {
        key: "stonelord-features",
        name: "Stonelord Features",
        category: "trait",
        description:
          "A dwarf bound to the earth's power, gaining spell-like stone powers: earth's blood (healing) at 1st, stone shape at 3rd, meld into stone at 5th, stone tell at 7th, and earthquake at 9th, each usable as described in the book. At every even level (2nd, 4th, 6th, 8th, 10th) she also chooses a stone power from the book's list (such as earth's endurance, earth's strength, earth magic, earth shadows, gravity, stoneskin, or summon earth elemental).",
        source: `${CH2} — Stonelord (pp. 81–82)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "tattooed-monk",
    name: "Tattooed Monk",
    ruleset: "core",
    source: `${CH2} — Tattooed Monk (p. 82)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Hide", "Jump", "Knowledge", "Listen", "Move Silently", "Perform",
      "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +3",
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Endurance, Improved Grapple, Improved Unarmed Strike",
      "Note: The book lists the class skill simply as Knowledge; entered as printed",
    ],
    features: [
      {
        key: "tattooed-monk-features",
        name: "Tattooed Monk Features",
        category: "trait",
        description:
          "A monk whose magical tattoos replace monastic discipline: his tattooed monk levels stack with monk levels for AC, unarmed damage, and speed (monk abilities, 1st), and he gains a magic tattoo at 1st and every two levels after (3rd, 5th, 7th, 9th), chosen from the book's tattoo list (arrowroot, bat, bellflower, butterfly, centipede, chrysanthemum, crab, crane, dragon, dragonfly, falcon, fern, ivy, kiwi, lion, monkey, mountain, nightingale, ocean, phoenix, pine, rooster, scorpion, spider, tiger, tortoise, unicorn, wave, white mask, and others), each granting its described power, often a number of times per day equal to his tattoo count.",
        source: `${CH2} — Tattooed Monk (pp. 82–85)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "thayan-knight",
    name: "Thayan Knight",
    ruleset: "core",
    source: `${CH2} — Thayan Knight (p. 85)`,
    sourceUrl: CW_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL5, G5, P5, P5),
    classSkills: [
      "Bluff", "Climb", "Craft", "Gather Information", "Handle Animal",
      "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (local)",
      "Profession", "Ride", "Spot", "Swim",
    ],
    prerequisites: [
      "Race: Human",
      "Alignment: Any nongood",
      "Base Attack Bonus: +5",
      "Skills: Intimidate 2 ranks, Knowledge (arcana) 2 ranks, Knowledge (local — Thay) 2 ranks",
      "Feats: Iron Will, Weapon Focus (longsword)",
      "Special: Sworn allegiance to the Red Wizards of Thay",
    ],
    features: [
      {
        key: "thayan-knight-features",
        name: "Thayan Knight Features",
        category: "trait",
        description:
          "A five-level bodyguard of the Red Wizards: horrors of Thay hardens him against fear and charm (+2 fear/+1 charm at 1st, +4/+2 at 4th) and zulkir's favor marks his rank (1st). Also gains zulkir's defender, shielding his wizard charge (2nd), a fighter bonus feat (3rd), final stand (4th), and zulkir's champion, the order's highest field rank (5th).",
        source: `${CH2} — Thayan Knight (pp. 85–86)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "war-chanter",
    name: "War Chanter",
    ruleset: "core",
    source: `${CH2} — War Chanter (p. 87)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Gather Information", "Intimidate", "Jump", "Perform", "Profession",
      "Sense Motive", "Swim",
    ],
    prerequisites: [
      "Alignment: Any nonlawful",
      "Base Attack Bonus: +4",
      "Skills: Perform (sing) or Perform (oratory) 6 ranks",
      "Feats: Combat Expertise, Weapon Focus",
      "Special: Able to use the inspire courage bardic music ability",
    ],
    features: [
      {
        key: "war-chanter-features",
        name: "War Chanter Features",
        category: "trait",
        description:
          "A battlefield bard whose war chanter music works like bardic music (levels stack with bard levels for daily uses): inspire toughness grants allies damage reduction (1st), inspire recklessness lends allies his base attack bonus at the cost of AC (3rd), combine songs runs two songs at once (5th), inspire awe frightens foes (7th), singing shout damages and deafens at range (8th), and inspire legion unites allies into one fighting force (10th).",
        source: `${CH2} — War Chanter (pp. 87–88)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "warshaper",
    name: "Warshaper",
    ruleset: "core",
    source: `${CH2} — Warshaper (p. 89)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(TQ5, G5, P5, P5),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Disguise", "Escape Artist",
      "Jump", "Swim",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Special: Must be able to change shape in one of the five ways the book lists (such as the change shape or alternate form ability, bear form, wild shape, or casting polymorph)",
    ],
    features: [
      {
        key: "warshaper-features",
        name: "Warshaper Features",
        category: "trait",
        description:
          "A five-level shapechanger who perfects his adopted forms (all abilities work only while he is in a form other than his natural one): morphic immunities make him immune to stunning and critical hits, and morphic weapons let him grow or enlarge natural weapons (1st). Also gains morphic body, +4 Strength and +4 Constitution while changed (2nd), morphic reach, +5 feet of reach (3rd), morphic healing, fast healing 2 (4th), and flashmorph (change form as a move action) or multimorph (change forms repeatedly within one polymorph effect) at 5th, depending on how he changes shape.",
        source: `${CH2} — Warshaper (pp. 89–91)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
];
