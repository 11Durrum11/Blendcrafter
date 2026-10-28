import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Tome of Magic prestige classes (the pact magic classes of Chapter 1, the
// shadow magic classes of Chapter 2, and the truename magic classes of
// Chapter 4 — fifteen in all). All checked against the existing aggregates
// first: none exist there. Short mechanical summaries in our own words,
// cited to book + page. Soul binding advancement ("soul binding +1 level of
// binder") is not a spellcasting progression and is not modeled by the app;
// it is noted in each feature summary. The source PDF is image-only, so this
// pack was built from OCR with ambiguous table cells settled against page
// images (the Tenebrous Apostate requirements and advancement text were read
// directly from p. 63).
// Source PDF: /A POC PC related/5.Splat/Tome of Magic.pdf

const TOM = "Tome of Magic";
const TOM_PATH = "/A POC PC related/5.Splat/Tome of Magic.pdf";

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const FULL: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const HALF: number[] = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ: number[] = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const G5 = [2, 3, 3, 4, 4];
const P5 = [0, 0, 1, 1, 1];
const FULL5: number[] = [1, 2, 3, 4, 5];
const TQ5: number[] = [0, 1, 2, 3, 3];

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

export const TOME_OF_MAGIC_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  // ---- Pact magic prestige classes (Chapter 1) ----
  {
    id: "anima-mage",
    name: "Anima Mage",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Diplomacy", "Intimidate", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Knowledge (psionics)", "Profession", "Spellcraft"],
    prerequisites: [
      "Any nongood",
      "Intimidate 4 ranks, Knowledge (the planes) 4 ranks",
      "Any metamagic feat",
      "Ability to cast 2nd-level arcane spells",
      "Ability to bind a 2nd-level vestige",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "anima-mage-vestige-metamagic",
        name: "Exploit Vestige and Vestige Metamagic",
        description:
          "The anima mage coerces bound vestiges into augmenting her arcane magic: exploit vestige (1st) trades a vestige-granted ability for a spell slot; vestigial awareness (3rd) grants a +2 bonus on initiative checks on a good pact; vestige metamagic (5th, 1/day; 2/day at 8th and 3/day at 10th) applies a metamagic feat she possesses to a spell without increasing its spell level, at the cost of access to the chosen vestige's abilities for 5 rounds; and vestige casting (10th) casts a prepared or available spell as an immediate action, as if modified by Silent Spell and Still Spell, once per day. +1 level of existing arcane spellcasting class at every level; soul binding also improves by +1 level of binder at every level (binding advancement is not modeled by this app).",
        category: "special-quality",
        source: `${TOM}, pp. 50–51`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 50–53 (Table 1–3, p. 51)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "knight-of-the-sacred-seal",
    name: "Knight of the Sacred Seal",
    ruleset: "core",
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort"],
    classSkills: ["Bluff", "Climb", "Concentration", "Craft", "Diplomacy", "Intimidate", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Ride", "Sense Motive", "Swim"],
    prerequisites: [
      "Any nonchaotic",
      "Base attack bonus +4",
      "Knowledge (arcana), Knowledge (religion), or Knowledge (the planes) 5 ranks",
      "Weapon Focus (any weapon)",
      "Soul binding class feature",
    ],
    progression: rows(FULL5, G5, P5, P5),
    features: [
      {
        key: "knight-of-the-sacred-seal-patron",
        name: "Patron Vestige",
        description:
          "On entering the class the knight selects one vestige he has previously bound as his patron, gaining aligned strike and never risking a poor pact with that vestige; if he expels the patron or fails to renew its pact on any day, he loses access to the class's supernatural features until he contacts it again (he may bind other vestiges meanwhile with no added benefit). Soul binding improves by +1 level of binder at every level (not modeled). Further features: vestige's protection (2nd, a swift-action insight bonus to AC equal to his Cha bonus that also applies on Reflex saves, extended to designated adjacent allies as an aura at 3rd), vestige's power (4th), and apotheosis (5th).",
        category: "special-quality",
        source: `${TOM}, pp. 54–56`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 54–58 (Table 1–4, p. 55)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "scion-of-dantalion",
    name: "Scion of Dantalion",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (architecture and engineering)", "Knowledge (dungeoneering)", "Knowledge (geography)", "Knowledge (history)", "Knowledge (local)", "Knowledge (nature)", "Knowledge (nobility and royalty)", "Knowledge (religion)", "Knowledge (the planes)", "Knowledge (psionics)", "Profession", "Sense Motive", "Speak Language"],
    prerequisites: [
      "Knowledge (nobility and royalty) 2 ranks",
      "Race: Half-elf, half-orc, or human",
      "Ability to bind Dantalion",
    ],
    progression: rows(TQ5, G5, P5, G5),
    features: [
      {
        key: "scion-of-dantalion-favored",
        name: "Favored of Dantalion",
        description:
          "The scion is favored by the vestige Dantalion, gaining his scholarship (a bonus on Knowledge checks) and inaccessible mind, and ever-deepening use of Dantalion's read thoughts ability: improved read thoughts and swift awe of Dantalion (2nd), overwhelming thoughts (3rd, daze a creature whose thoughts are being read), Dantalion's glare and improved thought travel (4th), and read multiple thoughts (5th). Soul binding improves by +1 level of binder at every level (not modeled).",
        category: "special-quality",
        source: `${TOM}, pp. 59–61`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 59–62 (Table 1–5, p. 60)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "tenebrous-apostate",
    name: "Tenebrous Apostate",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    classSkills: ["Bluff", "Concentration", "Craft", "Diplomacy", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (the planes)", "Knowledge (religion)", "Profession", "Sense Motive"],
    prerequisites: [
      "Any nongood",
      "Knowledge (religion) 5 ranks, Knowledge (the planes) 8 ranks",
      "Ability to bind Tenebrous",
      "Ability to turn or rebuke undead",
      "Must worship Tenebrous as a god",
    ],
    progression: rows(TQ5, G5, P5, G5),
    features: [
      {
        key: "tenebrous-apostate-rebuke",
        name: "Eternal Bondage and Tenebrous's Rebuke",
        description:
          "The apostate is bound to Tenebrous constantly (eternal bondage) and channels his turn or rebuke attempts through the vestige: Tenebrous's rebuke (1st) lets a turn attempt deal 1d6 damage per effective turning level to every undead within 30 feet (Will save for half), while a rebuke attempt instead cures undead of that damage; further features are visage of the dead (2nd), destroy/empower undead (3rd), umbral body (4th), and blast of the void (5th). Ceasing to revere Tenebrous as a god makes an ex-Tenebrous apostate, stripping these features and most cleric class features. +1 level of existing divine spellcasting class at each level beyond 1st; soul binding likewise improves by +1 level of binder at each level beyond 1st (binding advancement is not modeled by this app).",
        category: "special-quality",
        source: `${TOM}, pp. 63–65`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 63–66 (Table 1–6, p. 65)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "witch-slayer",
    name: "Witch Slayer",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Gather Information", "Intimidate", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (local)", "Knowledge (religion)", "Knowledge (the planes)", "Listen", "Profession", "Search", "Sense Motive", "Spellcraft", "Spot", "Survival"],
    prerequisites: [
      "Base attack bonus +5",
      "Knowledge (religion) 4 ranks, Sense Motive 4 ranks",
      "Must have fought a binder or possessed creature",
    ],
    progression: rows(FULL5, G5, P5, G5),
    features: [
      {
        key: "witch-slayer-smite-spirit-sharer",
        name: "Smite Spirit Sharer",
        description:
          "Once per day per witch slayer level, the witch slayer can smite a binder with a bound vestige or any creature possessed by another (by malevolence, a dual mind, or a similar ability) with a normal melee attack, adding his Charisma bonus to the attack roll and 1 extra point of damage per witch slayer level (a smite against a creature that is neither possessed nor bound has no effect but is still used up). Further features: mettle (2nd), locate possession (3rd), slippery mind (4th), and momentary disjunction (5th).",
        category: "special-attack",
        source: `${TOM}, pp. 67–69`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 67–71 (Table 1–7, p. 68)`,
    sourceUrl: TOM_PATH,
  },
  // ---- Shadow magic prestige classes (Chapter 2) ----
  {
    id: "child-of-night",
    name: "Child of Night",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Hide", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Move Silently", "Profession", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Knowledge (arcana) 8 ranks, Knowledge (the planes) 8 ranks",
      "Ability to cast mysteries, or ability to cast spells with the darkness descriptor or from the shadow subschool",
      "Must have visited the Plane of Shadow",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "child-of-night-cloak-of-shadows",
        name: "Cloak of Shadows and Night Form",
        description:
          "As the child of night advances, her physiology becomes more shadow and less mortal flesh: a cloak of shadows (blur, growing from 1/day to continuous, and displacement 2/day at 10th), cold resistance 5 (rising to 10 at 5th and 15 at 9th), sustaining shadow on the shadowcaster's schedule (eat one meal/week, then sleep 1 hour/day, immunity to poison and disease, and finally no need to breathe, eat, or sleep), dancing shadows, and night form at 10th level. +1 level of existing casting class (mysteries or spellcasting) at each level beyond 1st.",
        category: "special-quality",
        source: `${TOM}, pp. 117–119`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 117–120 (Table 2–3, p. 118)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "master-of-shadow",
    name: "Master of Shadow",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    classSkills: ["Concentration", "Craft", "Intimidate", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Knowledge (arcana) 5 ranks, Knowledge (the planes) 8 ranks",
      "Shadow Familiar",
      "Caster level 5th (mysteries or spellcasting)",
    ],
    progression: rows(HALF, G, P, G),
    features: [
      {
        key: "master-of-shadow-shadow-servant",
        name: "Shadow Servant",
        description:
          "The master's shadow familiar permanently transforms into a Medium shadow elemental servant that cannot travel farther from him than 30 feet + 10 feet per class level and is replaced 24 hours after it dies. With master's bidding he grants it a special ability for 1 round (interact with corporeal, fast healing 1, extra attack, cold damage 1d8, and stronger options as he advances) — as a standard action at 1st level, a move action at 5th, and a swift action at 10th. He also gains resistance to cold 5 (2nd, rising to 10 at 4th and 20 at 7th), immunity to cold at 9th level (when master's bidding also improves to a swift action), and rapid shadow at 10th. +1 level of existing casting class (mysteries or spellcasting) at every level.",
        category: "special-quality",
        source: `${TOM}, pp. 121–123`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 121–124 (Table 2–4, p. 122)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "noctumancer",
    name: "Noctumancer",
    ruleset: "core",
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Knowledge (arcana)", "Knowledge (the planes)", "Profession", "Spellcraft"],
    prerequisites: [
      "Knowledge (arcana) 6 ranks, Spellcraft 6 ranks",
      "Able to cast 2nd-level mysteries",
      "Able to cast 2nd-level arcane spells",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "noctumancer-innate-counterspell",
        name: "Innate Counterspell and Capture Magic's Shadow",
        description:
          "The noctumancer controls all magic in the area around him: capture magic's shadow (1st), innate counterspell (1/day at 1st level, 2/day at 5th, 3/day at 8th, gaining the ability to retain the countered power at 7th), eldritch disruption (6th), and eldritch vortex with shadow's persistence (10th). +1 level of existing mystery-using class AND +1 level of existing arcane spellcasting class at every level (dual progression, Table 2–5).",
        category: "special-quality",
        source: `${TOM}, pp. 125–127`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 125–128 (Table 2–5, p. 126)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "shadowblade",
    name: "Shadowblade",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    classSkills: ["Bluff", "Climb", "Craft", "Handle Animal", "Hide", "Intimidate", "Jump", "Move Silently", "Profession", "Ride", "Swim"],
    prerequisites: [
      "Base attack bonus +5",
      "Bluff 5 ranks, Hide 5 ranks, Move Silently 5 ranks",
      "Blind-Fight",
      "Must have been exposed to shadow at some point prior to taking this class, either through travel on the Plane of Shadow, being subject to a mystery or a spell with the darkness descriptor, or through physical contact with a shadow or dark creature (such as a shadow mastiff or a dark lion)",
    ],
    progression: rows(TQ, G, P, P),
    features: [
      {
        key: "shadowblade-unseen-weapon",
        name: "Unseen Weapon and Sudden Strike",
        description:
          "The shadowblade manipulates shadow to strike swiftly and fatally: his unseen weapon gains a new property at most odd levels (unerring strike at 1st, unexpected strike at 3rd, ephemeral weapon at 5th, shadowy strike at 7th, far shadow at 9th, and use as a free action at 10th), and he deals sudden strike extra damage (+1d6 at 3rd, rising to +5d6 at 10th) under the printed conditions. He also gains shadow and stealth (2nd), shadowvision (3rd), and see in darkness (7th).",
        category: "special-attack",
        source: `${TOM}, pp. 129–131`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 129–131 (Table 2–6, p. 130)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "shadow-smith",
    name: "Shadow Smith",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "full",
    goodSaves: ["ref"],
    classSkills: ["Climb", "Concentration", "Craft", "Hide", "Jump", "Knowledge (arcana)", "Knowledge (the planes)", "Move Silently", "Profession"],
    prerequisites: [
      "Craft (armorsmithing, blacksmithing, or weaponsmithing) 5 ranks, Knowledge (arcana) 3 ranks, Knowledge (the planes) 3 ranks",
      "Must have been exposed to shadow at some point prior to taking this class, either through travel on the Plane of Shadow, being subject to a mystery or a spell with the darkness descriptor, or through physical contact with a shadow or dark creature (such as a shadow mastiff or a dark lion)",
    ],
    progression: rows(FULL, P, G, P),
    features: [
      {
        key: "shadow-smith-shadow-craft",
        name: "Shadow Craft and Touch of Shadow",
        description:
          "The shadow smith crafts equipment from shadow itself: touch of shadow (1st), shadow craft in growing forms (basic items at 2nd, enchanted creations at 5th — imbuing a shadow-crafted weapon or shield with an enhancement bonus equal to his class level − 5 — armor at 7th, quickened crafting at 8th, and shadow striking at 10th), a shroud of shadow (3rd, widened at 5th), and armor of shadow (+2 at 4th, improving thereafter). The class learns a small number of mysteries of its own (one at 2nd level, rising to three at 9th; Table 2–7's Mysteries Known column) — mysteries are not modeled by this app.",
        category: "special-quality",
        source: `${TOM}, pp. 132–134`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 132–135 (Table 2–7, p. 133)`,
    sourceUrl: TOM_PATH,
  },

  // ---- Truename prestige classes (Chapter 3) ----
  {
    id: "acolyte-of-the-ego",
    name: "Acolyte of the Ego",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    classSkills: ["Knowledge (all)", "Concentration", "Diplomacy", "Intimidate", "Perform", "Speak Language", "Truespeak"],
    prerequisites: [
      "Type: Humanoid",
      "Skills: Truespeak 9 ranks",
      "Languages: Must speak at least four languages",
    ],
    progression: rows(FULL, G, P, P),
    features: [
      {
        key: "acolyte-of-the-ego-morphic-cadence",
        name: "Known Personal Truename and Morphic Cadences",
        description:
          "An acolyte of the ego knows his own personal truename (pronouncing it requires a Truespeak check, DC 15 + 2 × HD + 2, with a +4 bonus because it is his own). Starting at 2nd level and every even level thereafter, he learns a morphic cadence — a way of pronouncing his truename that alters his personal reality (dimension door on himself, spell resistance, frightening foes, damage reduction, and similar); activating a cadence is a standard action requiring a successful Truespeak check, and the Law of Resistance applies. He also gains resonant voice (3rd), cadence mastery (5th), and the ability to alter his personal truename (7th, −4; 9th, −8) with a bonus recitation feat at 7th level.",
        category: "special-quality",
        source: `${TOM}, pp. 204–208 (Table 3–4, p. 204)`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 204–208 (Table 3–4, p. 204)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "bereft",
    name: "Bereft",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    classSkills: ["Knowledge (all)", "Concentration", "Intimidate", "Listen", "Sense Motive", "Speak Language", "Truespeak"],
    prerequisites: [
      "Alignment: Any neutral",
      "Skills: Truespeak 13 ranks",
      "Languages: Must speak at least three languages",
      "Special: Must have been the subject of the ritual of renaming spell",
    ],
    progression: rows(TQ5, P5, P5, G5),
    features: [
      {
        key: "bereft-word-of-unmaking",
        name: "Word of Unmaking (syllables)",
        description:
          "A bereft learns to unmake reality syllable by syllable. He gains obscure personal truename at 1st level, and one syllable of the word of unmaking at every level: detachment (1st; target takes a −2 penalty on attack rolls, saves, and checks for a number of rounds equal to class level), affliction (2nd; temporarily erase one of the target's senses), dissolution (3rd; as maze for 1 round), enervation (4th), and the completed word of unmaking (5th). Each syllable requires a Truespeak check and allows a Will save (DC 10 + class level + Cha modifier); each is the equivalent of a spell of increasing level.",
        category: "special-quality",
        source: `${TOM}, pp. 208–212 (Table 3–5, p. 209)`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 208–212 (Table 3–5, p. 209)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "brimstone-speaker",
    name: "Brimstone Speaker",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    classSkills: ["Concentration", "Craft", "Heal", "Intimidate", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft", "Truespeak"],
    prerequisites: [
      "Alignment: Any good",
      "Skills: Truespeak 10 ranks",
      "Special: Worshiper of a deity that provides access to the Fire or Good domain",
    ],
    progression: rows(TQ, G, P, G),
    features: [
      {
        key: "brimstone-speaker-tongue-of-fire",
        name: "Tongue of Fire and Heavenly Entreaties; Spellcasting",
        description:
          "A brimstone speaker gains a fiery breath weapon (tongue of fire, 3d6 fire damage at 1st level, rising to 8d6 at 10th) and the power to call celestials by truename: lesser heavenly entreaty (3rd; summon a bralani eladrin on a DC 27 Truespeak check), heavenly entreaty (6th; a word archon on a DC 33 check), and greater heavenly entreaty (9th), usable a number of times per day equal to class level from a shared pool. The Law of Resistance applies. He also advances divine spellcasting at every level except 1st, 3rd, 7th, and 9th.",
        category: "special-quality",
        source: `${TOM}, pp. 212–215 (Table 3–6, p. 213)`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 212–215 (Table 3–6, p. 213)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "disciple-of-the-word",
    name: "Disciple of the Word",
    ruleset: "core",
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    classSkills: ["Balance", "Climb", "Concentration", "Escape Artist", "Jump", "Move Silently", "Truespeak", "Tumble"],
    prerequisites: [
      "Alignment: Any lawful",
      "Base attack bonus +4",
      "Skills: Truespeak 4 ranks",
      "Feats: Improved Unarmed Strike, Stunning Fist",
      "Special: Evasion",
    ],
    progression: rows(TQ, G, G, G),
    features: [
      {
        key: "disciple-of-the-word-words",
        name: "Known Personal Truename, Monk Abilities, and Words",
        description:
          "A disciple of the word knows his own personal truename and adds his class level to his monk level for his class-based AC bonus, unarmed damage, unarmored speed bonus, flurry of blows penalty, and daily Stunning Fist attempts (a disciple with no monk levels still gains the monk AC bonus, without the Wisdom bonus). At every level he learns a word of Truespeech powered by his ki — spending a daily Stunning Fist use and substituting a Truespeak check: word of movement sublime (1st), word of the stance unyielding (2nd), word of health restored (3rd), word of movement perfected (4th), word of reflexes exalted (5th), word of the strike unstoppable (6th), word of the fist unraveling (7th), word of harm avoided (8th), word of mystic deflection (9th), and word of speed unfettered (10th).",
        category: "special-quality",
        source: `${TOM}, pp. 216–220 (Table 3–7, p. 217)`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 216–220 (Table 3–7, p. 217)`,
    sourceUrl: TOM_PATH,
  },
  {
    id: "fiendbinder",
    name: "Fiendbinder",
    ruleset: "core",
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    classSkills: ["Concentration", "Craft", "Diplomacy", "Heal", "Knowledge (arcana)", "Knowledge (history)", "Knowledge (religion)", "Knowledge (the planes)", "Profession", "Spellcraft", "Truespeak"],
    prerequisites: [
      "Alignment: Any nongood",
      "Skills: Knowledge (the planes) 10 ranks, Truespeak 10 ranks",
      "Languages: Speak Language (Abyssal), Speak Language (Infernal)",
      "Spells: Ability to cast summon monster IV",
    ],
    progression: rows(HALF, P, P, G),
    features: [
      {
        key: "fiendbinder-bind-fiend",
        name: "Bind Fiend; Spellcasting",
        description:
          "A fiendbinder performs an 8-hour ritual (cost per Table 3–9) to bind a fiend whose truename he knows into his service: commanding it is a standard action requiring a Truespeak check against the fiend's DC, and a bound fiend performs one command at a time, remains within 10 feet unless commanded otherwise, and is truly dead if slain. He also gains call forth fiend (3rd), bind tormented soul (5th), gift of the archfiend and double command (9th), and archfiend's favor and summon fiends (10th). He advances an existing spellcasting class at every level except 1st, 5th, and 9th.",
        category: "special-quality",
        source: `${TOM}, pp. 221–227 (Table 3–8, p. 222)`,
        sourceUrl: TOM_PATH,
      },
    ],
    source: `${TOM}, pp. 221–227 (Table 3–8, p. 222)`,
    sourceUrl: TOM_PATH,
  },
];
