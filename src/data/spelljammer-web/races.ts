// Spelljammer — the six Monstrous Compendium races whose sheets are MISSING
// from Shaun's copy of Spelljammer: Adventures in Space, researched from the
// printed AD&D 2e sheets on the web and converted to D&D 3.5 on the exact
// pattern of src/data/spelljammer/races.ts (Dracon, Giff):
//   speed = 2e MV × 2.5 ft, rounded to the nearest 5 ft where the product is
//   not exact; natural armor from 2e AC (3.5 AC = 20 − 2e AC, less the
//   Dexterity/size a normal creature of that kind carries); ability
//   adjustments from the PRINTED racial tables in The Complete Spacefarer's
//   Handbook (CGR1) where given — 2e ±1 steps doubled to the 3.5 even scale,
//   printed ±2 steps kept — with conversion judgments flagged in the trait
//   text the way Dracon's +2 Intelligence was; racial hit dice and level
//   adjustment on the Dracon/Giff pattern; favored class from the sheet's
//   printed class information.
// Primary sources (full audit in
// ~/workspace/library-staging/spelljammer-web-races-draft.md):
//   MC Appendix I (MC7, TSR 2109) full text — archive.org; the same sheets
//   transcribed at completecompendium.com and mojobob.com/roleplay/monstrousmanual.
//   MC Appendix II (MC9, TSR 2119) — completecompendium.com transcriptions.
//   CGR1 The Complete Spacefarer's Handbook, ch. 2 (printed PC adjustments,
//   class limits, min/max scores) — transcribed at 1d6chan.miraheze.org and
//   adnd2e.fandom.com, tables cross-checked against the book's OCR text.
// These records join ALL_RACES under the Core ruleset the same way Dracon
// and Giff did, and surface in the Spelljamming section because their source
// strings begin with "Spelljammer".

import type { FeatureCategory, FeatureDefinition, RaceDefinition } from "@/engine/types";

type Trait = Omit<FeatureDefinition, "id">;

const SJ_PATH =
  "/A POC PC related/3.All to do with ships/spelljammer adventures in space.pdf";

const trait = (
  key: string,
  name: string,
  description: string,
  category: FeatureCategory,
  source: string,
): Trait => ({
  key,
  name,
  description,
  category,
  source,
  sourceUrl: SJ_PATH,
});

const MC7 = (race: string, tail: string) =>
  `Spelljammer: Monstrous Compendium Appendix I (MC7), "${race}" entry (converted to 3.5; sheet missing from Shaun's copy — ${tail})`;
const MC9 = (race: string, tail: string) =>
  `Spelljammer: Monstrous Compendium Appendix II (MC9), "${race}" entry (converted to 3.5; sheet missing from Shaun's copy — ${tail})`;

export const SPELLJAMMER_WEB_RACES: RaceDefinition[] = [
  // ---------------------------------------------------------------- Grommam
  {
    id: "grommam",
    name: "Grommam",
    ruleset: "core",
    source: MC7(
      "Grommam",
      "stats from the MC7 full text at archive.org, cross-checked at completecompendium.com; PC adjustments from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    // MV 9 × 2.5 = 22.5 ft, rounded down to 20 ft (conversion judgment —
    // flagged in the report); they move at MV 15 in trees.
    baseSpeed: 20,
    type: "Monstrous Humanoid",
    subtypes: [],
    // The Complete Spacefarer's Handbook prints the male profile at +2
    // Strength, +2 Dexterity, −1 Intelligence, −1 Wisdom (2e scale); the −1
    // steps are doubled to the 3.5 even scale. The sheet's own generation
    // rolls agree in shape: males 2d4+10 Strength, −2 to Intelligence and
    // Wisdom rolls. The female profile is printed in the Dimorphism trait.
    abilityModifiers: { str: 2, dex: 2, int: -2, wis: -2 },
    favoredClass: "Fighter",
    levelAdjustment: 1,
    racialHitDice: 2,
    hitDie: "d8",
    // The printed AC 5 is the chain mail the sheet says they wear almost
    // exclusively; unarmored they are AC 10, so they carry no natural armor.
    naturalArmor: 0,
    skillBonuses: { climb: 8 },
    traits: [
      trait(
        "grommam-climb-walls",
        "Climb Walls",
        "Grommams climb extremely well: the sheet gives them an 85% climb walls ability, +1% per class level to a maximum of 99%. Converted: a grommam has a climb speed of 20 ft (they move at full arboreal speed in trees) and the +8 racial bonus on Climb checks that a climb speed grants.",
        "special-quality",
        "MC7, Grommam",
      ),
      trait(
        "grommam-ambidexterity",
        "Ambidexterity",
        "A grommam is ambidextrous and normally fights with a weapon in either hand rather than a shield, taking no penalty for doing so (as printed; the sheet notes shields can be used but most grommams prefer the second weapon).",
        "special-quality",
        "MC7, Grommam",
      ),
      trait(
        "grommam-anti-magical",
        "Anti-Magical",
        "Grommams are very anti-magical: any nonweapon magical item a grommam uses has a 40% chance to malfunction, exactly as the 2nd Edition dwarf rule the sheet cites. Grommam spellcasters are rare for the same reason — one in eight grommams can take a character class at all.",
        "special-quality",
        "MC7, Grommam",
      ),
      trait(
        "grommam-dimorphism",
        "Dimorphism",
        "The printed adjustments above are the MALE profile. A female grommam uses the Spacefarer's Handbook's female profile instead: +2 Intelligence, +2 Wisdom, −2 Strength, −2 Dexterity (the sheet generates female Strength as 2d6+4 with a +2 bonus to Intelligence and Wisdom rolls), and females may not take fighter or thief levels. Either sex suffers −2 Charisma when dealing with races other than grommams and other ape-like species. Males may be fighters or thieves to 20th level and both sexes clerics to 10th; grommams cannot multiclass (2e class limits, kept as printed flavor).",
        "trait",
        "MC7, Grommam; CGR1, Grommams",
      ),
      trait(
        "grommam-languages",
        "Languages",
        "Grommams speak Grommish, a gestural and finger-sign language filled out with postures, facial expressions, hoots, screams, grunts, and calls. A grommam family is ruled day to day by its females under a living demigod, and most grommams are lawful good.",
        "trait",
        "MC7, Grommam",
      ),
    ],
  },

  // ----------------------------------------------------------------- Hadozee
  {
    id: "hadozee",
    name: "Hadozee",
    ruleset: "core",
    source: MC7(
      "Hadozee",
      "stats from the MC7 full text at archive.org, cross-checked at completecompendium.com; PC adjustments from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    baseSpeed: 30, // MV 12 × 2.5 ft
    type: "Monstrous Humanoid",
    subtypes: [],
    // The Complete Spacefarer's Handbook prints +1 Dexterity, −2 Charisma
    // (2e scale); converted to the 3.5 even scale. WotC's own official 3.5
    // hadozee (Stormwrack) prints the identical +2 Dexterity, −2 Charisma.
    abilityModifiers: { dex: 2, cha: -2 },
    // The Spacefarer's Handbook lets hadozee reach 15th level as thieves,
    // their highest class limit, and Stormwrack likewise names rogue; the
    // MC sheet calls them born warriors, so fighter is the close second.
    favoredClass: "Rogue",
    levelAdjustment: 1,
    racialHitDice: 3,
    hitDie: "d8",
    naturalArmor: 4, // from 2e AC 6 by the pack formula
    skillBonuses: { climb: 8 },
    traits: [
      trait(
        "hadozee-gliding",
        "Gliding",
        "A membrane of skin hangs from a hadozee's arms and legs; raised overhead it stretches taut and the hadozee glides, traveling one foot forward for every foot of height lost (glide movement 18, maneuverability D in the Spacefarer's Handbook). Hadozee exploit a ship's gravity plane in boarding actions: they dive at an enemy deck, and if they find no landing they pass through the gravity plane and soar back up a distance equal to three-quarters of their descent, coming around to dive again from the other side.",
        "special-quality",
        "MC7, Hadozee; CGR1, Hadozee",
      ),
      trait(
        "hadozee-climbing",
        "Climbing",
        "Hadozee are very nimble and climb trees, ropes, poles, and sheer surfaces as 10th-level thieves. Converted: a hadozee has a climb speed of 30 ft and the +8 racial bonus on Climb checks that a climb speed grants.",
        "special-quality",
        "MC7, Hadozee",
      ),
      trait(
        "hadozee-dexterous-feet",
        "Dexterous Feet",
        "A hadozee's feet are fully as dexterous as its hands, even to having opposable thumbs. A hadozee can wield a weapon in each hand — or in a hand and a foot — without penalty for two-weapon combat (as printed; the membranes mean a hadozee cannot use a shield larger than a buckler).",
        "special-quality",
        "MC7, Hadozee; CGR1, Hadozee",
      ),
      trait(
        "hadozee-deck-apes",
        "Deck Apes",
        "Hadozee are born warriors who hire out in companies as mercenary crews and ship's warriors — 'deck apes' — and have been allied with the elves since the Unhuman Wars, the highest honor for a hadozee being to serve aboard an elven vessel. They have no spelljamming capability of their own.",
        "trait",
        "MC7, Hadozee",
      ),
    ],
  },

  // ----------------------------------------------------------------- Hurwaet
  {
    id: "hurwaet",
    name: "Hurwaet",
    ruleset: "core",
    source: MC7(
      "Wiggle",
      "the Hurwaet column of the three-column sheet, from the MC7 full text at archive.org; PC adjustments from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    // MV 9 × 2.5 = 22.5 ft, rounded down to 20 ft (conversion judgment —
    // flagged in the report). The sheet also prints Sw 12 (see Amphibious
    // Body below).
    baseSpeed: 20,
    type: "Monstrous Humanoid",
    subtypes: [],
    // The Complete Spacefarer's Handbook prints +1 Wisdom, −1 Constitution
    // (2e scale), doubled to the 3.5 even scale.
    abilityModifiers: { wis: 2, con: -2 },
    // The Spacefarer's Handbook caps hurwaeti at thief 14 against fighter
    // 12, and forbids them multiclassing; the MC sheet adds that hurwaets
    // have no native spellcasters.
    favoredClass: "Rogue",
    levelAdjustment: 1,
    racialHitDice: 3,
    hitDie: "d8",
    // The sheet's AC line reads 4 (5): its own text resolves it — a hurwaet's
    // scaled hide is AC 5 and a shield improves that by 1. Base natural
    // armor 5 by the pack formula; the Spacefarer's Handbook agrees (a
    // hurwaet PC uses whichever of natural AC 5 or worn armor is better,
    // and their armor must be custom-made at +50% cost).
    naturalArmor: 5,
    traits: [
      trait(
        "hurwaet-scales",
        "Thick Scales",
        "A hurwaet is covered in thick, small, hard scales that give it a natural armor class of 5 (2e) before any equipment; a shield improves that by one step, and worn armor is useless to a hurwaet unless it improves on the scales (Spacefarer's Handbook: use the better of the natural armor or the armor's protection, and hurwaet armor is custom-made at +50% cost).",
        "special-quality",
        "MC7, Wiggle (Hurwaet); CGR1, Hurwaeti",
      ),
      trait(
        "hurwaet-fog-cloud",
        "Fog Cloud",
        "Each adult hurwaet can cast fog cloud once per day as a 9th-level caster (Spacefarer's Handbook: a bank 60 ft on a side and 20 ft high). The ability is biological, not magical — it cannot be dispelled, though wind breaks it up normally — and hurwaets use it to refresh fouled ship air: one hurwaet can restore 10 tons of a ship's atmosphere, which is why spelljamming crews prize them.",
        "special-quality",
        "MC7, Wiggle (Hurwaet); CGR1, Hurwaeti",
      ),
      trait(
        "hurwaet-amphibious-body",
        "Amphibious Body",
        "Hurwaets have webbed fingers and toes and long, frog-like legs: swim movement 12 in the sheet (a 30 ft swim speed), and they can leap 8 ft straight up or 20 ft forward.",
        "special-quality",
        "MC7, Wiggle (Hurwaet)",
      ),
      trait(
        "hurwaet-holdout",
        "Never Surrender",
        "Hurwaets will not willingly surrender to neogi, mind flayers, or beholders, who prize them as slaves and worse; they have no native spellcasters and power their own ships with series helms instead. Male hurwaets incubate the eggs in an abdominal pouch for eight months, and the race lives some 300 years.",
        "trait",
        "MC7, Wiggle (Hurwaet)",
      ),
    ],
  },

  // --------------------------------------------------------------- Rastipede
  {
    id: "rastipede",
    name: "Rastipede",
    ruleset: "core",
    source: MC7(
      "Rastipede",
      "stats from the MC7 text at archive.org (spelljammer.org mirrors the same sheet); PC adjustments and class limits from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    // MV 15 × 2.5 = 37.5 ft, rounded up to 40 ft (conversion judgment —
    // flagged in the report).
    baseSpeed: 40,
    type: "Monstrous Humanoid",
    subtypes: [],
    // The Complete Spacefarer's Handbook prints +1 Constitution, −1
    // Dexterity (2e scale) — its own rastipede text says the solid body
    // 'adds 1 to their Constitution scores' while preventing delicate
    // movement (−1 Dexterity); doubled to the 3.5 even scale.
    abilityModifiers: { con: 2, dex: -2 },
    // The Spacefarer's Handbook caps rastipedes at thief 11, fighter 8,
    // bard 6, mage 4 — thief is the highest road, and the race's living is
    // trade; the MC sheet stresses their mage-helmsmen instead, so wizard
    // is the close second.
    favoredClass: "Rogue",
    levelAdjustment: 2,
    racialHitDice: 5,
    hitDie: "d8",
    naturalArmor: 7, // from 2e AC 3 by the pack formula
    traits: [
      trait(
        "rastipede-hard-shell",
        "Hard Shell",
        "A rastipede's chitinous shell gives it an armor class of 3 (2e) — natural armor +7 converted — but its odd shape (eight legs, humanoid torso) makes standard armor impossible to wear. The shell also arms it: sharp claws for 1d2 damage, rising to 1d4 at 4th character level and 1d6 at 7th (Spacefarer's Handbook PC figures; the MC monster line prints 2 attacks at 1–10 damage).",
        "special-quality",
        "MC7, Rastipede; CGR1, Rastipedes",
      ),
      trait(
        "rastipede-keen-scent",
        "Keen Scent",
        "A rastipede's antennae give it a keen sense of smell: it cannot be surprised by any odor-exuding creature approaching from behind it, and its fully double-jointed body lets it use the entire range of human weapons despite its shape. Rastipedes are ambidextrous.",
        "special-quality",
        "MC7, Rastipede",
      ),
      trait(
        "rastipede-tunnel-sense",
        "Tunnel Sense",
        "Rastipedes spend their first decade underground and are tunnelers of exceptional merit: by concentrating for one round, a rastipede can determine its approximate depth underground (4-in-6), and from 3rd level detect the grade or slope of a nearby passage (5-in-6) and unsafe walls, ceilings, and floors (7-in-10).",
        "special-quality",
        "CGR1, Rastipedes",
      ),
      trait(
        "rastipede-helm-affinity",
        "Helm Affinity",
        "A spelljamming helm operated by a rastipede performs as if operated by a spellcaster of three times the rastipede's actual spellcasting level — a 4th-level rastipede mage (their printed class cap) runs a helm like a 12th-level mage. The gift has a hard edge: no rastipede ever learns spells above 2nd level.",
        "special-quality",
        "MC7, Rastipede; CGR1, Rastipedes",
      ),
      trait(
        "rastipede-traders",
        "Traders of the Spheres",
        "Rastipedes are the penultimate traders of the Known Spheres — only the Arcane out-bargain them — taught literature and mathematics, inherently peaceful but not cowardly, and prized as the Arcane's favored henchmen and go-betweens. They rarely renege on a bargain once struck, and deliver to the letter — count your money, your crew, and your limbs.",
        "trait",
        "MC7, Rastipede",
      ),
    ],
  },

  // --------------------------------------------------------------------- Scro
  {
    id: "scro",
    name: "Scro",
    ruleset: "core",
    source: MC9(
      "Scro",
      "stats from completecompendium.com's MC9 transcription; PC adjustments from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    // The sheet prints movement 9 (12): the parenthetical is the unarmored /
    // hurried rate (the same (armored) convention as its AC 4 (8) line), so
    // base speed uses 12 × 2.5 = 30 ft. Conversion judgment — flagged.
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Orc"],
    // The Complete Spacefarer's Handbook prints +1 Strength, −2 Charisma
    // (2e scale); Strength doubled to the 3.5 even scale. The +2
    // Constitution is a conversion judgment from the MC text: most adult
    // scro have Strength of at least 16 and Constitution of at least 15.
    // Dragon #339's official 3.5 scro (+4 Str, +2 Dex, +2 Con, LA +2, no
    // racial hit dice) is the alternative — see the build report.
    abilityModifiers: { str: 2, con: 2, cha: -2 },
    // The Spacefarer's Handbook caps scro at fighter 15 (cleric, wizard,
    // and rogue only 5); Dragon #339's 3.5 conversion names monk instead.
    favoredClass: "Fighter",
    levelAdjustment: 1,
    racialHitDice: 3,
    hitDie: "d8",
    // From the sheet's AC 4 (8) line: 8 is the unarmored value, and 20 − 8 −
    // 10 = +2 natural armor by the pack formula. Conversion judgment —
    // flagged in the report.
    naturalArmor: 2,
    traits: [
      trait(
        "scro-spell-resistance",
        "Spell Resistance",
        "The sheet prints magic resistance 10% for ordinary scro. Converted on the Giff pattern in this pack: spell resistance equal to 5 + character level.",
        "special-quality",
        "MC9, Scro",
      ),
      trait(
        "scro-darkvision",
        "Darkvision",
        "Scro have infravision to 60 ft — darkvision 60 ft converted. Unlike their orc ancestors, direct sunlight does not affect them in any way. They keep the Elven language alive fanatically, the better to understand their chosen enemies.",
        "special-quality",
        "MC9, Scro; CGR1, Scro",
      ),
      trait(
        "scro-unarmed-combat",
        "Unarmed Combat",
        "Nearly all scro (95%) specialize in unarmed combat: two punches per round at +1 to hit, each inflicting 1d3 damage plus Strength bonus, and they fight in spiked studded-leather armor whose spikes add 1d4 damage on a successful smash. A scro also bites for 1d3 damage — and if its torekh, the necklace of an enemy's teeth worn as a badge of rank, is stolen, the scro flies into a berserk rage to recover it and kills the thief without mercy.",
        "special-attack",
        "MC9, Scro",
      ),
      trait(
        "scro-orc-blood",
        "Orc Blood",
        "Scro are a militaristic, lawful orc-descended people from the sphere of Dukagsh, bred and drilled into disciplined soldiers: for all effects related to race, a scro is considered an orc. (WotC's later official 3.5 conversion in Dragon #339 also gives them +1 on attack rolls against elves, the ancient enemy.)",
        "trait",
        "MC9, Scro",
      ),
    ],
  },

  // ------------------------------------------------------------------ Xixchil
  {
    id: "xixchil",
    name: "Xixchil",
    ruleset: "core",
    source: MC9(
      "Xixchil",
      "stats from completecompendium.com's MC9 transcription; PC adjustments and class limits from The Complete Spacefarer's Handbook",
    ),
    sourceUrl: SJ_PATH,
    size: "Medium",
    baseSpeed: 30, // MV 12 × 2.5 ft
    type: "Monstrous Humanoid",
    subtypes: [],
    // The Complete Spacefarer's Handbook prints +1 Dexterity, +1
    // Constitution, −2 Charisma (2e scale), doubled where a step was ±1.
    abilityModifiers: { dex: 2, con: 2, cha: -2 },
    // The Spacefarer's Handbook caps xixchil at fighter 14 and thief 14,
    // mage 5; rogue is named for the assassin-surgeon the race produces —
    // fighter is the tied alternative. Flagged in the report.
    favoredClass: "Rogue",
    levelAdjustment: 2,
    racialHitDice: 1,
    hitDie: "d8",
    // The sheet: an unadorned xixchil's exoskeleton is AC 5 (natural armor
    // +5 by the pack formula); battle-hardened xixchil buy modifications
    // down to AC −4.
    naturalArmor: 5,
    traits: [
      trait(
        "xixchil-blade-forelimbs",
        "Blade Forelimbs",
        "A xixchil's bladed arms slap for 2d6 damage each (2d4 against smaller prey in the Spacefarer's Handbook's PC framing — the MC figure is kept), and a xixchil can wield both arm-blades as a dual-wielder without penalty; it cannot wield normal weapons. Xixchil fighters can have weapons surgically installed in their limbs at five times the weapon's price per limb, gaining +1 attack per installed limb.",
        "special-attack",
        "MC9, Xixchil; CGR1, Xixchil",
      ),
      trait(
        "xixchil-tailored-venom",
        "Tailored Venom",
        "Once a xixchil has tasted a victim's essence, its next bite delivers a poison or anesthetic tailored to that victim alone, usable from the following round; it can instead spit the substance onto its finger blades, where it stays potent for 10 turns. As printed, the victim saves against poison at −4 and, failing, is paralyzed or dies within a round (converted as a Fortitude save at the standard poison DC of 10 + half the xixchil's Hit Dice + its Constitution modifier, with the printed −4 penalty applied to the victim's save). The race's teeth, toxin glands, and spines make even its unarmed bite deadly.",
        "special-attack",
        "MC9, Xixchil",
      ),
      trait(
        "xixchil-body-modification",
        "Body Modification",
        "'The body is like a house' — a xixchil may add rooms or knock down walls. Surgical body modification is the xixchil religion: their surgeons (2d10 × 100 gp per change) graft pouches, spines, armor plating, and weapons onto living xixchil; the changes are non-magical, irreversible, and must remain functional. Plating brings the exoskeleton from AC 5 down to AC 1 at double the normal armor cost, and each point below that costs 8,000 gp plus 4,000 gp per point, to a floor of AC −4.",
        "special-quality",
        "MC9, Xixchil; CGR1, Xixchil",
      ),
      trait(
        "xixchil-exoskeleton",
        "Exoskeleton",
        "A xixchil wears no armor — its exoskeleton is its armor, improved only through the body modification above. Newly hatched xixchil (10d10 eggs to a clutch) devour one another until only one or two remain: survival of the fittest is the race's first and last law.",
        "special-quality",
        "MC9, Xixchil",
      ),
    ],
  },
];
