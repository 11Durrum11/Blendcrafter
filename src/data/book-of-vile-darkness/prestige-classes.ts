import type { ClassLevelProgressionRow, PrestigeClassDefinition } from "@/engine/types";

// Book of Vile Darkness prestige classes: seventeen of the eighteen in
// Chapter 5 (pp. 51–76, Tables 5–1 through 5–18). Ur-Priest is NOT
// repeated here: Complete Divine reprinted it as a 3.5 class (p. 69)
// and that record is already in the data. Book of Vile Darkness is a
// 3.0-era book (2002); following the Races of Faerun precedent, records
// are written in 3.5 conventions — the 3.0 skills Alchemy, Innuendo,
// Intuit Direction, Pick Pocket, Scry, and Wilderness Lore are recorded
// as Craft, (folded into Bluff), Survival, Sleight of Hand, (folded
// into Spellcraft), and Survival, and the feat Expertise is recorded
// as Combat Expertise. Progressions are the book's printed tables,
// including the several classes whose saves are good in all three
// columns as printed. Short mechanical summaries in our own words,
// cited to book + page. (The PDF appends an unofficial fan-compiled
// FAQ/errata gathering after the book proper; it was not used as a
// source.)
// Source PDF: /A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const HALF = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const BAALZEBUL_BAB = [0, 1, 2, 3, 3, 4, 5, 6, 7, 8]; // as printed in Table 5–5 (departs from standard three-quarter at 9th–10th)
const MAMMON_BAB = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8]; // as printed in Table 5–7

const BOVD = "Book of Vile Darkness";
const BOVD_PATH = "/A POC PC related/5.Splat/D&D 3.5 - Book of Vile Darkness.pdf";
const CH5 = `${BOVD} — Chapter 5: Prestige Classes`;

export const BOOK_OF_VILE_DARKNESS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "cancer-mage",
    name: "Cancer Mage",
    ruleset: "core",
    source: `${CH5} — Cancer Mage (p. 52)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: ["Balance", "Bluff", "Climb", "Craft", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Heal", "Hide", "Intimidate", "Jump", "Knowledge (nature)", "Listen", "Move Silently", "Profession", "Ride", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Survival", "Swim", "Tumble", "Use Rope"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Save Bonus: Fort +5",
      "Skills: Heal 3 ranks, Hide 6 ranks, Knowledge (nature) 2 ranks, Move Silently 6 ranks",
      "Feats: Great Fortitude, Poison Immunity, Toughness",
      "Special: Must have fallen victim to the ravages of a disease and must have taken damage from a poison",
    ],
    features: [
      {
        key: "cancer-mage-features",
        name: "Cancer Mage Features",
        category: "trait",
        description:
          "A filth-dwelling adept of disease and decay who strikes from darkness and lets contaminated wounds fester. Proficient with all simple and martial weapons, all armor, and shields. Sneak attack +1d6 at 1st level, rising to +2d6 at 5th and +3d6 at 9th. He hosts disease without harm (disease host, 1st) and spreads it (contagion, 2nd; infected wound, 6th; viral agent, 5th; viral ally, 8th), gains a cancerous companion (2nd) — a sentient tumor whose Intelligence and powers grow with his level, up to warning him of danger (evasion, then uncanny dodge) and wielding his spell-like abilities through a flesh tendril — and further powers: tatterdemalion and poison (3rd), children of the night (4th), insect plague and insect armor (7th), and disease form (10th).",
        source: `${CH5} — Cancer Mage (pp. 52–54; Table 5–1, p. 52)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "demonologist",
    name: "Demonologist",
    ruleset: "core",
    source: `${CH5} — Demonologist (p. 54)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Decipher Script", "Forgery", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Knowledge (religion)", "Ride", "Sense Motive", "Spellcraft"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Skills: Knowledge (arcana) 4 ranks, Knowledge (the planes) 8 ranks",
      "Feats: Evil Brand, Sacrificial Mastery, Malign Spell Focus",
      "Special: Must be able to cast at least six arcane spells of the Conjuration school, one of which must be at least 3rd level",
    ],
    features: [
      {
        key: "demonologist-features",
        name: "Demonologist Features",
        category: "trait",
        description:
          "A scholar of demons who deals with them on as equal a footing as a mortal can. He casts from his own Charisma-based spontaneous spell list (1st–4th level spells, advancing every level per Table 5–2; the list is built from summon monster spells and demon-themed magic such as demonflesh, abyssal might, and planar binding). Spell-like powers over chaotic evil outsiders scale with level: charm demon (1st, once per day; no spell resistance, Will DC 11 + Cha modifier), hold demon (7th; DC 12 + Cha modifier), and dominate demon (10th; DC 15 + Cha modifier). Also: a quasit familiar (2nd — it devours any existing familiar, with no XP loss), summoning mastery (3rd, his summon monster spells use a list two levels higher for chaotic evil creatures, rising to three levels higher at 6th and four at 9th), resistances (4th: acid 10, cold 10, fire 10, electricity 20), poison immunity (5th), and telepathy (8th, 100 feet, as a tanar'ri).",
        source: `${CH5} — Demonologist (pp. 54–56; Table 5–2, p. 54)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "diabolist",
    name: "Diabolist",
    ruleset: "core",
    source: `${CH5} — Diabolist (p. 56)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Diplomacy", "Intimidate", "Knowledge (arcana)", "Knowledge (the planes)", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Lawful evil",
      "Base Save Bonus: Will +5",
      "Skills: Bluff 3 ranks, Intimidate 3 ranks, Knowledge (the planes) 8 ranks",
      "Feats: Evil Brand, Corrupt Spell",
      "Special: Must be able to cast shriveling",
      "Special: Must offer her soul — but not necessarily her loyalty — to the forces of hell in exchange for power; when she dies permanently, her soul becomes the possession of a powerful devil",
    ],
    features: [
      {
        key: "diabolist-features",
        name: "Diabolist Features",
        category: "trait",
        description:
          "A mortal who has thrown in her lot with the forces of hell — not to serve a specific archdevil, but because she wants to become one. Spellcasting advances +1 level of an existing spellcasting class at every level. Diabolism: once per day plus one additional time per three class levels, she can grant one of her spells that affects a target or area (not herself) the evil descriptor and +1d6 points of extra damage — rising to +2d6 at 5th level and +3d6 at 10th — and at 8th level vile diabolism makes that extra damage vile damage. An imp familiar joins her at 2nd level.",
        source: `${CH5} — Diabolist (p. 56; Table 5–3, p. 56)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "disciple-of-asmodeus",
    name: "Disciple of Asmodeus",
    ruleset: "core",
    source: `${CH5} — Disciple of Asmodeus (p. 57)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ, P, P, G),
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Gather Information", "Hide", "Intimidate", "Knowledge (any)", "Listen", "Search", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Lawful evil or neutral evil",
      "Skills: Bluff 4 ranks, Diplomacy 5 ranks, Sense Motive 4 ranks",
      "Feats: Disciple of Darkness, Evil Brand, Leadership",
      "Special: Initiation requires a horrific rite involving the sacrifice of an intelligent being of royal blood or similar political significance",
    ],
    features: [
      {
        key: "disciple-of-asmodeus-features",
        name: "Disciple of Asmodeus Features",
        category: "trait",
        description:
          "A ranking member of Asmodeus's secretive, world-spanning hierarchy, bent on domination. Spellcasting advances +1 level of an existing spellcasting class at 1st level and at every other level thereafter (the feature text governs; Table 5–4 also prints +1 level at 10th level, which is not followed here). At 1st level he gains charm and the first of his learn secret uses (extracting secrets by trickery and deceit — 1/week at 1st, rising to 2/week at 3rd, 3/week at 5th, 4/week at 7th, and 1/day at 9th), then command (2nd), summon hellcat (4th), evil authority (6th), summon major devil (8th), greater command (9th), and dread might (10th).",
        source: `${CH5} — Disciple of Asmodeus (pp. 57–58; Table 5–4, p. 57)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "disciple-of-baalzebul",
    name: "Disciple of Baalzebul",
    ruleset: "core",
    source: `${CH5} — Disciple of Baalzebul (p. 58)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(BAALZEBUL_BAB, P, G, G),
    classSkills: ["Appraise", "Balance", "Climb", "Decipher Script", "Diplomacy", "Disable Device", "Disguise", "Escape Artist", "Gather Information", "Hide", "Intimidate", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Open Lock", "Profession", "Ride", "Search", "Sense Motive", "Sleight of Hand", "Spot", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Bluff 10 ranks, Diplomacy 4 ranks, Gather Information 4 ranks",
      "Feats: Disciple of Darkness",
      "Special: Initiation requires a terrible ritual involving the sacrifice of an intelligent being, performed in the victim's home",
    ],
    features: [
      {
        key: "disciple-of-baalzebul-features",
        name: "Disciple of Baalzebul Features",
        category: "trait",
        description:
          "A silver-tongued betrayer in the service of the Lord of Lies, proficient with all simple and martial weapons and light armor. Tongue of the devil (1st): she adds her Intelligence modifier as well as her Charisma modifier to Bluff checks. Sneak attack +1d6 at 2nd level, +2d6 at 5th, and +3d6 at 8th. Also: suggestion (3rd), summon osyluth (4th), insect plague (6th), beguiling nature (7th), summon cornugon (9th), and king of lies (10th, a +4 inherent bonus to Charisma). Table 5–5 prints a base attack bonus of +7 at 9th level and +8 at 10th, departing from the standard three-quarter progression; the table is recorded as written.",
        source: `${CH5} — Disciple of Baalzebul (pp. 58–59; Table 5–5, p. 59)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "disciple-of-dispater",
    name: "Disciple of Dispater",
    ruleset: "core",
    source: `${CH5} — Disciple of Dispater (p. 60)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(FULL, G, G, G),
    classSkills: ["Balance", "Climb", "Disable Device", "Disguise", "Escape Artist", "Hide", "Intimidate", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Profession", "Ride", "Search", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +6",
      "Feats: Disciple of Darkness, Combat Expertise (printed as Expertise), Power Attack",
      "Special: Initiation requires a terrible ritual involving the sacrifice of an intelligent being atop an altar of iron, in the presence of an erinyes",
    ],
    features: [
      {
        key: "disciple-of-dispater-features",
        name: "Disciple of Dispater Features",
        category: "trait",
        description:
          "A defensive-minded warlike general of evil with mystical power over iron. His iron-themed powers build level by level: device lore (1st), iron hews (2nd), rusting grasp (3rd), iron power +1 (4th, rising to +2 at 8th), summon erinyes (5th), greater iron hews (6th), ironskin (7th), and iron body (10th). Table 5–6 prints good Fortitude, Reflex, and Will saves; the table is recorded as written.",
        source: `${CH5} — Disciple of Dispater (p. 60; Table 5–6, p. 60)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "disciple-of-mammon",
    name: "Disciple of Mammon",
    ruleset: "core",
    source: `${CH5} — Disciple of Mammon (p. 60)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(MAMMON_BAB, P, G, G),
    classSkills: ["Appraise", "Balance", "Disable Device", "Disguise", "Escape Artist", "Forgery", "Hide", "Intimidate", "Knowledge (any)", "Listen", "Move Silently", "Open Lock", "Profession", "Search", "Sleight of Hand", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +4",
      "Skills: Appraise 6 ranks, Open Lock 4 ranks, Sleight of Hand 4 ranks (printed as Pick Pocket)",
      "Feats: Disciple of Darkness",
      "Special: Must undergo a disgusting and humiliating sexual ritual and betray her closest friend to an evil end before she can properly serve her new master",
    ],
    features: [
      {
        key: "disciple-of-mammon-features",
        name: "Disciple of Mammon Features",
        category: "trait",
        description:
          "A disciple of the prince of greed, forever one step ahead of those she has cheated and robbed; proficient with all simple and martial weapons but no armor or shields. Lie (1st, supernatural): a +4 competence bonus on Bluff checks and spell resistance of 11 + class level against spells that reveal falsehood, such as zone of truth and discern lies, even where spell resistance is normally not allowed. Cheat (1st, spell-like): produce a cheat effect (as a 15th-level caster) once per day per class level. Thief (3rd): +4 competence bonus on Sleight of Hand and Open Lock checks. Steal (3rd, spell-like): call a single unattended object of up to 5 pounds to her hand, as telekinesis from a 15th-level caster. Also: divert attack (4th), summon osyluth (5th), take object (6th), enhance value (7th), divert spell (8th), nondetection (9th), and summon gelugon (10th). Table 5–7 prints a base attack bonus beginning at +1; the table is recorded as written.",
        source: `${CH5} — Disciple of Mammon (pp. 60–61; Table 5–7, p. 61)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "disciple-of-mephistopheles",
    name: "Disciple of Mephistopheles",
    ruleset: "core",
    source: `${CH5} — Disciple of Mephistopheles (p. 62)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(FULL, G, G, G),
    classSkills: ["Balance", "Climb", "Disable Device", "Disguise", "Escape Artist", "Hide", "Intimidate", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Profession", "Ride", "Search", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +6",
      "Feats: Disciple of Darkness, Evil Brand",
      "Special: Initiation requires a terrible ritual involving the sacrifice of an intelligent being in magical fire",
    ],
    features: [
      {
        key: "disciple-of-mephistopheles-features",
        name: "Disciple of Mephistopheles Features",
        category: "trait",
        description:
          "A disciple of the Lord of Hellfire, at home among hell hounds, salamanders, and other evil fire creatures; proficient with all simple and martial weapons, all armor, and shields. Hellfire grasp (1st): deal 1d6 points of fire damage as a touch attack at will, added to unarmed attack damage. Fire adept (1st): +1 caster level with spells bearing the fire descriptor. Fire resistance 10 at 2nd level, rising to 20 at 6th. Hellfire blast (3rd): a gout of hellfire at will, 4d6 fire damage as a ranged touch attack with a range of 30 feet. Flare (4th, spell-like, as a 15th-level caster, once per day per class level), summon hamatula (5th; 1d4 hamatulas at 9th), hellfire (6th, three times per day), fire shield (7th, twice per day), and hellfire storm (8th, twice per day) — all as spells cast by a 15th-level caster. Body of flame (10th): transform into flame for up to 10 minutes once per day, gaining fire immunity and damage reduction 30/+1 (a 3.0 damage reduction notation, as printed); creatures touching or striking him risk catching fire (Reflex DC 15). Table 5–8 prints good Fortitude, Reflex, and Will saves; the table is recorded as written.",
        source: `${CH5} — Disciple of Mephistopheles (pp. 62–63; Table 5–8, p. 62)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "lifedrinker",
    name: "Lifedrinker",
    ruleset: "core",
    source: `${CH5} — Lifedrinker (p. 63)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d12",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: ["Bluff", "Hide", "Knowledge (arcana)", "Listen", "Move Silently", "Profession", "Search", "Sense Motive", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Knowledge (arcana) 6 ranks, Spellcraft 6 ranks",
      "Special: Must be a vampire",
    ],
    features: [
      {
        key: "lifedrinker-features",
        name: "Lifedrinker Features",
        category: "trait",
        description:
          "An ancient vampire who turns stolen blood and life energy into magical power. Lifewell (1st): a reservoir of stolen life energy — each negative level he bestows with energy drain grants 2 lifewell points and each point of Constitution he drains grants 1 — which he spends on his other powers, beginning with invigorate (1st). Spell boost lets him spend lifewell points to apply metamagic-like improvements to his spells: empower (2nd), heighten (3rd), maximize (6th), and quicken (8th). Special attack boost does the same for his special attacks: empower (3rd), heighten (4th), and maximize (7th). Also: blood servant (5th), boost defenses (5th), greater blood drain (7th), greater invigorate (9th), and blood revel (10th). Table 5–9 prints good Fortitude, Reflex, and Will saves; the table is recorded as written.",
        source: `${CH5} — Lifedrinker (pp. 63–64; Table 5–9, p. 63)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "mortal-hunter",
    name: "Mortal Hunter",
    ruleset: "core",
    source: `${CH5} — Mortal Hunter (p. 64)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Bluff", "Climb", "Concentration", "Disguise", "Hide", "Jump", "Knowledge (arcana)", "Knowledge (religion)", "Knowledge (the planes)", "Listen", "Move Silently", "Search", "Sense Motive", "Spot", "Survival"],
    prerequisites: [
      "Type: Any outsider",
      "Alignment: Any evil",
      "Base Attack Bonus: +5",
      "Skills: Move Silently 3 ranks, Speak Language (Common), Survival 5 ranks (printed as Wilderness Lore)",
      "Feats: Alertness, Mortalbane, Track",
    ],
    features: [
      {
        key: "mortal-hunter-features",
        name: "Mortal Hunter Features",
        category: "trait",
        description:
          "A fiend that hunts mortals while wearing their skin. He casts from his own Charisma-based spontaneous spell list (1st–4th level spells per Table 5–10; the list runs to cause fear, hold person, flesh ripper, phantasmal killer, and similar hunter's magic). Mortal hunting grants a +1 bonus on attack and damage rolls against mortals and on Bluff, Listen, Sense Motive, Spot, and Survival checks against them, rising by +1 at 3rd, 6th, and 9th level (stacking with a ranger's favored enemy bonus; the damage bonus applies to ranged weapons only within 30 feet and not against creatures immune to critical hits). Mortal skin (1st) lets him graft mortal flesh to transform, as polymorph self, into a humanoid mortal form once per day — any nondragon mortal form at 5th level and any mortal form at 8th, with duration depending on the flesh used. Also: detect mortals at will and Boost Spell-Like Ability as a bonus feat (2nd), smite mortals (4th, once per day: Wisdom modifier to the attack roll and 2 points of damage per class level), spurn mortal magic (5th, Wisdom modifier as an extra bonus on saves against mortals' spells and spell-like abilities), claws of the overfiend (7th, natural attack damage increases one step), mortalbane shout (8th, once per day: mortals within 50 feet are stunned for 1 round, Fortitude DC 10 + Cha bonus + class levels), and slay mortal (10th, once per day by touch, Fortitude DC 10 + class level + Cha modifier or die).",
        source: `${CH5} — Mortal Hunter (pp. 64–66; Table 5–10, p. 65)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "soul-eater",
    name: "Soul Eater",
    ruleset: "core",
    source: `${CH5} — Soul Eater (p. 66)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(FULL, G, G, G),
    classSkills: ["Climb", "Concentration", "Hide", "Intimidate", "Jump", "Listen", "Move Silently", "Profession", "Search", "Spellcraft", "Spot", "Swim", "Use Rope"],
    prerequisites: [
      "Type: Any living nonhumanoid (monstrous humanoid is acceptable)",
      "Alignment: Any evil",
      "Base Attack Bonus: +5",
      "Skills: Knowledge (arcana) 2 ranks",
      "Feats: Alertness, Weapon Focus (claw or other natural weapon)",
      "Special: Usually created against his will — an emissary of an evil god or a powerful fiend offers continued life in exchange for feeding on souls thereafter",
    ],
    features: [
      {
        key: "soul-eater-features",
        name: "Soul Eater Features",
        category: "trait",
        description:
          "A living monster — never an undead — that feeds on the very essence of life force. Energy drain (1st): his touch bestows one negative level on its target, rising to two negative levels at 7th level. The stolen energy fuels a ladder of soul powers: soul strength (2nd), soul blast (3rd), soul enhancement (4th), soul endurance (5th), soul radiance (6th), soul agility (8th), soul slave (9th), and soul power (10th). Table 5–11 prints good Fortitude, Reflex, and Will saves; the table is recorded as written.",
        source: `${CH5} — Soul Eater (p. 66; Table 5–11, p. 66)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "thrall-of-demogorgon",
    name: "Thrall of Demogorgon",
    ruleset: "core",
    source: `${CH5} — Thrall of Demogorgon (p. 67)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, G, P, P),
    classSkills: ["Bluff", "Climb", "Concentration", "Hide", "Intimidate", "Jump", "Knowledge (any)", "Move Silently", "Profession", "Search", "Sense Motive", "Spot", "Survival", "Swim", "Use Rope"],
    prerequisites: [
      "Alignment: Chaotic evil",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (arcana) 2 ranks, Knowledge (religion) 2 ranks, Knowledge (any other) 2 ranks",
      "Feats: Willing Deformity, Thrall to Demon",
      "Special: Must be able to cast 1st-level spells or make sneak attacks",
      "Special: Initiation requires a horrific rite involving the sacrifice of an intelligent being dedicated to Demogorgon, on unhallowed ground at night in the presence of a demon",
    ],
    features: [
      {
        key: "thrall-of-demogorgon-features",
        name: "Thrall of Demogorgon Features",
        category: "trait",
        description:
          "A thrall of the Prince of Demons, proficient with all simple and martial weapons, all armor, and shields. At 1st, 4th, 7th, and 10th level he chooses either a bonus feat of his choice or +1 level of existing spellcasting (non-spellcasters must take the feat; he may mix the two choices across levels). Scaly flesh grants a +1 natural armor bonus at 1st level, rising by +1 at 4th, 7th, and 10th (stacking with natural armor from creature type, but not from magic). Also: hypnosis (1st, once per day, as the spell), touch of fear (2nd), reaching touch (3rd), dual actions (4th), summon minor demon (5th), rotting touch (6th), two personas (8th), death touch (8th), summon major demon (9th), and Demogorgon's will (10th).",
        source: `${CH5} — Thrall of Demogorgon (pp. 67–68; Table 5–12, p. 67)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "thrall-of-grazzt",
    name: "Thrall of Graz'zt",
    ruleset: "core",
    source: `${CH5} — Thrall of Graz'zt (p. 68)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Concentration", "Decipher Script", "Diplomacy", "Gather Information", "Hide", "Knowledge (any)", "Listen", "Move Silently", "Open Lock", "Perform", "Search", "Sense Motive", "Sleight of Hand", "Spellcraft", "Spot", "Use Magic Device"],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Knowledge (arcana) 5 ranks, Bluff 2 ranks, Diplomacy 2 ranks",
      "Feats: Thrall to Demon, Violate Spell",
      "Special: Must be able to cast 3rd-level spells with the evil descriptor",
      "Special: Initiation requires a horrific rite involving the sacrifice of an intelligent being, within an area of magical darkness under a desecrate or unhallow spell",
    ],
    features: [
      {
        key: "thrall-of-grazzt-features",
        name: "Thrall of Graz'zt Features",
        category: "trait",
        description:
          "A power-hungry thrall of the Dark Prince who works through secret organizations and criminal underworlds. Spellcasting advances +1 level of an existing spellcasting class at 1st level and every two levels thereafter, plus 10th level (1st, 3rd, 5th, 7th, 9th, 10th). Charm at 1st level. Spell betrayal deals an extra +1d6 points of damage with a spell against threatened targets at 2nd level, rising by +1d6 at 4th, 6th, 8th, and 10th (to +5d6), and spellstrike adds a further +1d6 at 6th level and +2d6 at 8th against such targets. Dark Charisma grants a +1 bonus at 3rd level, rising to +2 at 5th and +3 at 7th. Also: summon minor demon (4th) and summon major demon (9th).",
        source: `${CH5} — Thrall of Graz'zt (pp. 68–69; Table 5–13, p. 69)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "thrall-of-juiblex",
    name: "Thrall of Juiblex",
    ruleset: "core",
    source: `${CH5} — Thrall of Juiblex (p. 70)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(FULL, G, G, G),
    classSkills: ["Climb", "Disguise", "Escape Artist", "Intimidate", "Jump", "Knowledge (religion)", "Listen", "Move Silently", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Save Bonus: Fort +6",
      "Skills: Escape Artist 5 ranks",
      "Feats: Thrall to Demon, Willing Deformity",
      "Special: Must have been polymorphed or experienced some sort of shapechanging experience",
      "Special: Initiation requires a horrific rite involving the sacrifice of an intelligent being dissolved in acid, with at least three oozes, slimes, or puddings present",
    ],
    features: [
      {
        key: "thrall-of-juiblex-features",
        name: "Thrall of Juiblex Features",
        category: "trait",
        description:
          "A thrall of the Faceless Lord who oozes slime and reeks unbearably, proficient with all simple and martial weapons, all armor, and shields. His corruption deepens level by level: sickening slime (1st), corrosive touch (2nd), summon ooze (3rd), contagion and alter self (4th), summon minor demon (5th), corrosive spew (6th), summon pudding (7th), polymorph self (8th), summon major demon (9th), and no discernible anatomy (10th). Table 5–14 prints good Fortitude, Reflex, and Will saves; the table is recorded as written.",
        source: `${CH5} — Thrall of Juiblex (p. 70; Table 5–14, p. 70)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "thrall-of-orcus",
    name: "Thrall of Orcus",
    ruleset: "core",
    source: `${CH5} — Thrall of Orcus (p. 71)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Bluff", "Concentration", "Craft", "Hide", "Intimidate", "Knowledge (any)", "Move Silently", "Profession", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +4",
      "Skills: Knowledge (arcana) 2 ranks, Knowledge (religion) 2 ranks",
      "Feats: Lichloved, Thrall to Demon",
      "Special: Must be able to cast a spell of the Necromancy school",
      "Special: Initiation centers on the sacrifice of an intelligent being, in complete darkness atop an altar made of at least thirty skulls",
    ],
    features: [
      {
        key: "thrall-of-orcus-features",
        name: "Thrall of Orcus Features",
        category: "trait",
        description:
          "A thrall of the Prince of the Undead, member of a cabal of necromancers consorting with undead and demons; proficient with all simple and martial weapons, all armor, and shields. At 1st, 4th, 7th, and 10th level she chooses either a bonus feat of her choice or +1 level of existing spellcasting (non-spellcasters must take the feat; she may mix the two choices across levels). Carrion stench (1st): she can emit a terrible smell in a 10-foot radius. Also: touch of fear (2nd), demon wings (3rd, and at will at 7th), massive girth or skeletal visage (4th), summon minor undead (5th), pallor of death (6th), death touch (8th), summon major undead (9th), and summon nightwing (10th).",
        source: `${CH5} — Thrall of Orcus (p. 71; Table 5–15, p. 71)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "vermin-lord",
    name: "Vermin Lord",
    ruleset: "core",
    source: `${CH5} — Vermin Lord (p. 73)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF, P, P, G),
    classSkills: ["Bluff", "Climb", "Concentration", "Hide", "Knowledge (nature)", "Listen", "Move Silently", "Perform", "Search", "Sleight of Hand", "Spellcraft", "Spot"],
    prerequisites: [
      "Alignment: Any evil",
      "Skills: Hide 3 ranks, Knowledge (nature) 2 ranks, Move Silently 3 ranks",
      "Feats: Verminfriend",
      "Special: Must be able to cast the giant vermin spell",
      "Special: Must be ordained by an intelligent evil creature with a physical resemblance to vermin (a drider, chasme, gelugon, aranea, bebilith, phase spider, evil formian, or similar creature), which will demand service or payment in return",
    ],
    features: [
      {
        key: "vermin-lord-features",
        name: "Vermin Lord Features",
        category: "trait",
        description:
          "An entity who offers itself as host to swarming vermin and revels in the infestation. Spellcasting advances +1 level of an existing spellcasting class at 1st level and every two levels thereafter, plus 10th level (1st, 3rd, 5th, 7th, 9th, 10th). Chitin grants a natural armor bonus of +1 at 1st level, rising to +2 at 4th, +3 at 7th, and +4 at 10th. A vermin servant joins him at 1st level (1 HD), growing to 4 HD at 5th and 16 HD at 9th. Also: blood drain (2nd), spider hand (3rd), swarm armor (4th — the covering insects absorb up to 10 points of damage from any single attack, and up to 5 points per class level per day), wings of the vermin (5th: sprout insectoid wings once per day, flying at his land speed with average maneuverability for 1 hour), spider legs (6th), spew vermin (7th), poison and pincer claws (8th), and hivemind (10th).",
        source: `${CH5} — Vermin Lord (pp. 73–74; Table 5–17, p. 74)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
  {
    id: "warrior-of-darkness",
    name: "Warrior of Darkness",
    ruleset: "core",
    source: `${CH5} — Warrior of Darkness (p. 75)`,
    sourceUrl: BOVD_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(FULL, G, P, G),
    classSkills: ["Bluff", "Climb", "Concentration", "Craft", "Hide", "Jump", "Knowledge (arcana)", "Knowledge (the planes)", "Move Silently", "Ride", "Spellcraft"],
    prerequisites: [
      "Alignment: Any evil",
      "Base Attack Bonus: +5",
      "Skills: Craft (alchemy) 3 ranks (printed as Alchemy), Knowledge (arcana) 3 ranks, Speak Language (Abyssal) or Speak Language (Infernal), Spellcraft 1 rank",
      "Feats: Iron Will",
      "Special: Must endure a week of painful and scarring black magic rituals performed in solitude, the secrets of which take months to study and research successfully",
    ],
    features: [
      {
        key: "warrior-of-darkness-features",
        name: "Warrior of Darkness Features",
        category: "trait",
        description:
          "A chilling compromise of physical might and intelligent sophistication who improves his combat prowess with black magic; proficient with all simple and martial weapons, all armor, and shields. Black magic oil (1st, and again at 4th, 7th, and 10th): he creates a single dose of a forbidden oil that works only on him, anointing himself with dark power. Black magic elixir at 3rd, 6th, and 9th level. Also: darkling weapon (2nd), scarred flesh (5th), and repellent flesh (8th).",
        source: `${CH5} — Warrior of Darkness (pp. 75–76; Table 5–18, p. 76)`,
        sourceUrl: BOVD_PATH,
      },
    ],
  },
];
