/**
 * Sorcery & Steam prestige classes: all fifteen from Chapter 2 of
 * Sorcery & Steam (Fantasy Flight Games, Legends & Lairs). Built
 * 2026-10-27 from the copy in Shaun's Dropbox library:
 *   /A POC DM related/Desktop/Sorcery & Steam.pdf
 * Progression tables are the book's printed tables. Prerequisites
 * are free text (shown in the UI, soft-checked only), matching the
 * other packs, and quote the book's own (3.0-era) skill names;
 * class-skill lists map those names to their 3.5 equivalents
 * (Alchemy = Craft (alchemy); Intuit Direction and Wilderness Lore
 * fold into Survival; Pick Pocket = Sleight of Hand; Innuendo folds
 * into Bluff). Two 3.0 exclusive skills with no 3.5 equivalent —
 * Scry and Read Lips — are omitted from class-skill lists and noted
 * in the affected classes' prerequisites/features text.
 */
import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const SS = "Sorcery & Steam";
const SS_PATH = "/A POC DM related/Desktop/Sorcery & Steam.pdf";
const CH2 = `${SS} — Chapter 2: Character Classes`;

export const SORCERY_STEAM_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "arcane-airman",
    name: "Arcane Airman",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Arcane Airman (p. 47)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Craft (alchemy)", "Balance", "Climb", "Concentration", "Craft", "Drive", "Survival", "Jump", "Knowledge (all)", "Listen", "Profession", "Ride", "Search", "Spellcraft", "Spot", "Use Rope", "Use Steamcraft Device"],
    prerequisites: [
      "Spellcasting: Able to cast 1st-level arcane spells",
      "Skills: Knowledge (steamcraft) 8 ranks, Drive 8 ranks",
      "Feat: Pilot",
      "Special: Spells per day advance as +1 level of an existing arcane spellcasting class at every level",
    ],
    features: [
      {
        key: "arcane-airman-sky-captain",
        name: "Sky Captain",
        description:
          "1st: operations expert (competence bonus equal to your class level on Bluff, Diplomacy, and Intimidate checks when dealing with your crew). 2nd: makeshift repairs. 3rd: expert aviator +2 (bonus grows to +4 at 6th and +6 at 9th). 4th: freefall (cast feather fall at will, on yourself only). 5th: pinpoint accuracy (+1 competence bonus on ranged attacks from vehicles). 7th: safe flying. 8th: push the limit. 10th: sky captain.",
        category: "trait",
        source: `${CH2} — The Arcane Airman (p. 48)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "arcane-performer",
    name: "Arcane Performer",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Arcane Performer (p. 51)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Craft (alchemy)", "Appraise", "Balance", "Bluff", "Climb", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Disguise", "Escape Artist", "Gather Information", "Hide", "Survival", "Jump", "Knowledge (all)", "Listen", "Move Silently", "Perform", "Sleight of Hand", "Profession", "Sense Motive", "Spellcraft", "Swim", "Tumble", "Use Magic Device", "Use Steamcraft Device"],
    prerequisites: [
      "Spellcasting: Able to cast 2nd-level arcane spells, including enthrall",
      "Alignment: Any non-lawful",
      "Skills: Bluff 8 ranks, Perform 8 ranks, Spellcraft 8 ranks, Craft 5 ranks (in a skill appropriate to constructing musical instruments)",
      "Feat: Child Prodigy heritage feat",
      "Special: Must create a new instrument to channel your song power, adding 1,000 gp to the raw-material cost for suitable components",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at every level",
    ],
    features: [
      {
        key: "arcane-performer-song-power",
        name: "Song Power",
        description:
          "1st: Musical Prodigy as a bonus feat, and song power I (permanently master one listed 1st-level bard spell as a song power, channeled through your instrument with a Perform check, 1/day). 2nd: masterful performance. 3rd: tool of the trade. 4th: song power II. 6th: song power III. 8th: song power IV. 9th: musical genius. 10th: song master and song power V. The book's class-skill list also names Scry, a 3.0 exclusive skill with no 3.5 equivalent, which is omitted here.",
        category: "trait",
        source: `${CH2} — The Arcane Performer (pp. 51–53)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "brawler",
    name: "Brawler",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Brawler (p. 53)`,
    sourceUrl: SS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Bluff", "Climb", "Craft", "Handle Animal", "Intimidate", "Jump", "Profession", "Ride", "Tumble"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Intimidate 5 ranks",
      "Feats: Great Fortitude, Improved Unarmed Strike",
    ],
    features: [
      {
        key: "brawler-stubborn-resolve",
        name: "Stubborn Resolve",
        description:
          "1st: stubborn resolve (while disabled or dying, down to –10 hit points, you may continue to move and attack normally). 2nd: bonus feat from the brawler list (again at 4th, 6th, 8th, and 10th level). 3rd: feinting maneuver. 5th: grappler. 7th: defensive stand. 9th: eyes of the champion. 10th: final attack.",
        category: "trait",
        source: `${CH2} — The Brawler (pp. 54–55)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "demolitionist",
    name: "Demolitionist",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Demolitionist (p. 56)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Disable Device", "Knowledge (steamcraft)", "Listen", "Move Silently", "Munitions", "Open Lock", "Profession", "Search", "Spot", "Use Steamcraft Device"],
    prerequisites: [
      "Skills: Alchemy 8 ranks, Concentration 5 ranks, Craft (explosives) 8 ranks, Disable Device 5 ranks, Munitions 8 ranks",
      "Feat: Skill Focus (Munitions)",
    ],
    features: [
      {
        key: "demolitionist-explosive-knowledge",
        name: "Explosive Knowledge",
        description:
          "1st: precise touch +1 (competence bonus on Disable Device, Munitions, and similar precision work with explosives; +2 at 5th level, +3 at 10th). 2nd: explosive knowledge +1d6 (extra damage with explosives you place; +2d6 at 4th, +3d6 at 6th, +4d6 at 8th). 9th: defusing touch. 10th: thick skin.",
        category: "trait",
        source: `${CH2} — The Demolitionist (p. 58)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "detective",
    name: "Detective",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Detective (p. 59)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Drive", "Gather Information", "Forgery", "Knowledge (all)", "Listen", "Munitions", "Profession", "Search", "Sense Motive", "Spot"],
    prerequisites: [
      "Skills: Diplomacy 5 ranks, Gather Information 8 ranks, Knowledge (local) 5 ranks, Profession (detective) 5 ranks, Search 8 ranks, Sense Motive 8 ranks",
      "Feats: Skill Focus (Search), Skill Focus (Sense Motive)",
    ],
    features: [
      {
        key: "detective-reference-material",
        name: "Reference Material",
        description:
          "1st: reference material (a +2 circumstance bonus with one chosen Knowledge skill you possess, from your access to superb research resources; a further skill at 4th, 7th, and 10th level). 2nd: eye for clues (+4 competence bonus on Search checks). 3rd: second thought (reroll one Knowledge, Search, or Spot check per day before the outcome is determined; 2/day at 6th, 3/day at 9th). 5th: experienced detective. 8th: understanding the criminal mind. 10th: master detective. The book's class-skill list also names Read Lips, a 3.0 exclusive skill with no 3.5 equivalent, which is omitted here.",
        category: "trait",
        source: `${CH2} — The Detective (pp. 59–61)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "game-hunter",
    name: "Game Hunter",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Game Hunter (p. 62)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Handle Animal", "Climb", "Craft", "Hide", "Intimidate", "Survival", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Munitions", "Profession", "Ride", "Spot", "Swim", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Hide 8 ranks, Knowledge (nature) 8 ranks, Move Silently 8 ranks, Wilderness Lore 8 ranks",
      "Feats: Track, Point Blank Shot",
    ],
    features: [
      {
        key: "game-hunter-favored-enemy",
        name: "Favored Enemy",
        description:
          "1st: favored enemy (first; a second at 5th level and a third at 10th). 2nd: scentless. 3rd: steady aim +1 and ranged sneak attack +1d6 (steady aim +2 and +2d6 at 6th; +3 and +3d6 at 9th). 4th: survivor. 7th: silent hunter. 8th: outdoorsman. 10th: death attack.",
        category: "trait",
        source: `${CH2} — The Game Hunter (p. 64)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "gun-glyph",
    name: "Gun Glyph",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Gun Glyph (p. 65)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (steamcraft)", "Munitions", "Profession", "Ride", "Search", "Spellcraft"],
    prerequisites: [
      "Spellcasting: Able to cast 3rd-level arcane spells",
      "Skills: Alchemy 8 ranks, Craft (firearms) 8 ranks, Knowledge (steamcraft) 5 ranks",
      "Feats: Weapon Proficiency (firearms), Weapon Focus (one firearm with which you are proficient)",
      "Special: Must construct one masterwork firearm for the path of the gun glyph; your gun glyph abilities function with that firearm only",
      "Special: Spells per day advance as +1 level of an existing arcane spellcasting class at 1st level and every odd level thereafter",
    ],
    features: [
      {
        key: "gun-glyph-arcane-bond",
        name: "Arcane Bond",
        description:
          "1st: armor adaptation 2% (reduce arcane spell failure from armor by 2%; 4% at 4th level, 8% at 7th). 2nd: arcane bond I (load a touch spell into your bonded firearm and deliver it with a shot; 1st-level spells at 2nd, 2nd-level at 5th as arcane bond II, 3rd-level at 8th as arcane bond III, 4th-level at 10th). 3rd: marksman +1 competence bonus on attack rolls with your firearm (+2 at 6th, +3 at 9th, +4 at 10th). 10th: gun master (armor adaptation reaches 10%).",
        category: "trait",
        source: `${CH2} — The Gun Glyph (pp. 66–67)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "hypnotist-prestige",
    name: "Hypnotist",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Hypnotist (p. 69)`,
    sourceUrl: SS_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Craft (alchemy)", "Bluff", "Concentration", "Craft", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (all)", "Perform", "Profession", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Spellcasting: Able to prepare and cast at least one 3rd-level arcane spell from the Enchantment school",
      "Skills: Bluff 5 ranks, Concentration 5 ranks, Spellcraft 8 ranks",
      "Feat: Hypnotist",
      "Special: Spells per day advance as +1 level of an existing spellcasting class at 1st level and every odd level thereafter",
    ],
    features: [
      {
        key: "hypnotist-prestige-master-of-enchantment",
        name: "Master of Enchantment",
        description:
          "1st: Spell Focus (Enchantment) as a bonus feat (if you already have it, the save DCs of your Enchantment spells increase by 1 instead). 2nd: focused mind +1 insight bonus on Will saves (+2 at 4th, +3 at 6th, +4 at 8th, +5 at 10th). 3rd: master of enchantment I (master one listed enchantment spell — prepare it without a spellbook and cast it as if Still Spell applied, without raising its level; further lists at 5th, 7th, and 9th level). 4th: Ultimate Hypnotist as a bonus feat. 10th: master of domination (dominate person as a spell-like ability a number of times per day equal to half your Intelligence modifier).",
        category: "trait",
        source: `${CH2} — The Hypnotist (pp. 69–71)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "noble-bodyguard",
    name: "Noble Bodyguard",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Noble Bodyguard (p. 72)`,
    sourceUrl: SS_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Climb", "Diplomacy", "Disguise", "Drive", "Handle Animal", "Intimidate", "Jump", "Listen", "Munitions", "Profession", "Ride", "Sense Motive", "Spot"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Intimidate 5 ranks, Sense Motive 5 ranks",
      "Feat: Improved Initiative",
    ],
    features: [
      {
        key: "noble-bodyguard-improved-defense",
        name: "Improved Defense",
        description:
          "1st: human shield (interpose yourself against attacks aimed at your charge). 3rd: improved defense +1 (+2 at 5th, +3 at 7th, +4 at 9th). 6th: uncanny dodge. 9th: defensive reflexes (+4 insight bonus on initiative checks). 10th: bastion of protection (damage reduction 2).",
        category: "trait",
        source: `${CH2} — The Noble Bodyguard (p. 73)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "physician-prestige",
    name: "Physician",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Physician (p. 75)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, G, P, G),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (nature)", "Profession", "Search"],
    prerequisites: [
      "Skills: Alchemy 8 ranks, Heal 8 ranks, Profession (surgeon) 8 ranks",
      "Feat: Physician",
    ],
    features: [
      {
        key: "physician-prestige-medicinal-knowledge",
        name: "Medicinal Knowledge",
        description:
          "1st: survey the damage (a Heal check, DC 20, as a move-equivalent action, to determine the condition of creatures near death). 2nd: healing hand and medicinal knowledge I (again at 6th and 10th level). 3rd: temporary reprieve (1d6+1/level; the per-level amount rises at 5th, 7th, and 9th level). 4th: model of health and restore health (heal temporary ability damage). 6th: hand of life. 8th: reaper's bane. 10th: master physician.",
        category: "trait",
        source: `${CH2} — The Physician (pp. 76–77)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "pilot",
    name: "Pilot",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Pilot (p. 79)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Balance", "Climb", "Craft", "Disable Device", "Drive", "Survival", "Jump", "Knowledge (steamcraft)", "Munitions", "Profession", "Spot", "Swim", "Use Rope", "Use Steamcraft Device"],
    prerequisites: [
      "Skills: Drive 8 ranks",
      "Feats: Pilot, Skill Focus (Drive)",
    ],
    features: [
      {
        key: "pilot-skilled-pilot",
        name: "Skilled Pilot",
        description:
          "1st: skilled pilot +2 (bonus on Drive checks; +4 at 5th level, +6 at 10th). 2nd: aerial evasion. 4th: combat maneuvers. 6th: master gunner. 7th: defensive piloting. 8th: greater evasion. 10th: master pilot.",
        category: "trait",
        source: `${CH2} — The Pilot (pp. 80–81)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "rocket-ace",
    name: "Rocket Ace",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Rocket Ace (p. 82)`,
    sourceUrl: SS_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["ref"],
    progression: rows(FULL, P, G, P),
    classSkills: ["Craft (alchemy)", "Balance", "Climb", "Craft", "Disable Device", "Drive", "Survival", "Jump", "Listen", "Munitions", "Profession", "Spot", "Swim", "Tumble", "Use Steamcraft Device"],
    prerequisites: [
      "Skills: Craft (steamcraft) 8 ranks, Jump 5 ranks, Drive 8 ranks",
      "Feats: Mechanical Aptitude, Pilot",
      "Special: Must construct a rocket pack with the Craft (steamcraft) skill",
    ],
    features: [
      {
        key: "rocket-ace-maneuvers",
        name: "Rocket Maneuvers",
        description:
          "1st: roll. 2nd: rocket mechanic. 3rd: dive. 4th: booster. 5th: fly-by (move, attack as a standard action, and move again, up to your rocket pack's top speed). 6th: rocket defense (in flight, a dodge bonus to AC equal to your positive Dexterity bonus). 7th: cannonball (in flight, move at least 40 feet and deal bonus damage; improved at 8th by attack of momentum). 9th: afterburner (charge the pack for a full round, then take off in a 15-foot-radius burst of 6d6 fire damage). 10th: rocket legend.",
        category: "trait",
        source: `${CH2} — The Rocket Ace (pp. 82–83)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "steamcraft-mage",
    name: "Steamcraft Mage",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Steamcraft Mage (p. 85)`,
    sourceUrl: SS_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Craft (alchemy)", "Concentration", "Craft", "Knowledge (all)", "Profession", "Spellcraft", "Use Steamcraft Device"],
    prerequisites: [
      "Spellcasting: Able to cast 3rd-level arcane spells",
      "Skills: Craft 5 ranks, Knowledge (clockworks) 8 ranks, Knowledge (steamcraft) 8 ranks, Spellcraft 8 ranks",
      "Feats: Mechanical Aptitude, Industrial Upbringing heritage feat",
      "Special: Spells per day advance as +1 level of an existing arcane spellcasting class at every level",
    ],
    features: [
      {
        key: "steamcraft-mage-spell-infusion",
        name: "Spell Infusion",
        description:
          "1st: advanced craftsman (competence bonus on Craft checks for steamcraft work; the book's examples include steam-powered carriages, rifles, and engines infused with spells). 2nd: bonus feat (again at 6th and 10th level). 3rd: spell infusion I (infuse spells into steamcraft items; spell infusion II at 6th, III at 9th). 5th: expert craftsman (the Craft competence bonus rises to +6 and your steamcraft items gain +1d6 hit points). 8th: machine mind (mentally activate or deactivate any mechanical device of your creation within 20 feet). 10th: master craftsman. The book's class-skill list also names Scry, a 3.0 exclusive skill with no 3.5 equivalent, which is omitted here.",
        category: "trait",
        source: `${CH2} — The Steamcraft Mage (pp. 85–87)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "street-runner",
    name: "Street Runner",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Street Runner (p. 89)`,
    sourceUrl: SS_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ, P, G, P),
    classSkills: ["Appraise", "Balance", "Bluff", "Climb", "Craft", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information", "Hide", "Survival", "Jump", "Listen", "Move Silently", "Munitions", "Open Lock", "Perform", "Sleight of Hand", "Search", "Sense Motive", "Spot", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Balance 5 ranks, Climb 8 ranks, Hide 5 ranks, Intuit Direction 5 ranks, Jump 8 ranks, Move Silently 5 ranks, Pick Pocket 5 ranks, Tumble 8 ranks",
      "Feat: Run",
    ],
    features: [
      {
        key: "street-runner-sneak-attack",
        name: "Sneak Attack",
        description:
          "1st: sneak attack +1d6 (+2d6 at 3rd, +3d6 at 5th, +4d6 at 7th, +5d6 at 9th). 2nd: gossip hound (access to a citywide information network). 4th: quick lift. 5th: quick change. 8th: fast talker. 10th: street lord. The book's class-skill list also names Read Lips, a 3.0 exclusive skill with no 3.5 equivalent, which is omitted here.",
        category: "trait",
        source: `${CH2} — The Street Runner (pp. 89–91)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
  {
    id: "watchman",
    name: "Watchman",
    ruleset: "sorcery_steam",
    source: `${CH2} — Prestige Classes: Watchman (p. 93)`,
    sourceUrl: SS_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Bluff", "Diplomacy", "Gather Information", "Handle Animal", "Intimidate", "Survival", "Knowledge (local)", "Knowledge (law)", "Listen", "Munitions", "Profession", "Ride", "Sense Motive", "Spot"],
    prerequisites: [
      "Base Attack Bonus: +5",
      "Skills: Intimidate 3 ranks, Knowledge (law) 3 ranks, Sense Motive 3 ranks",
      "Special: Must apply for membership, qualify, and be accepted into the city guard as a new watchman",
    ],
    features: [
      {
        key: "watchman-experience",
        name: "Watchman Experience",
        description:
          "1st: Weapon Focus as a bonus feat. 2nd: crowd control. 4th: watchman experience. 5th: bonus feat (again at 10th level). 6th: renewed vitality. 8th: presence of authority. 10th: veteran watchman.",
        category: "trait",
        source: `${CH2} — The Watchman (pp. 93–95)`,
        sourceUrl: SS_PATH,
      },
    ],
  },
];
