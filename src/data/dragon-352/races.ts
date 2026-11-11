// Dragon Magazine #352 (February 2007) — race draft: 3 races.
// "People of Bas-Lag" (Wolfgang Baur), pp. 42-49: the CACTACAE (traits
// p. 43), the KHEPRI (traits p. 45), and the VODYANOI (traits p. 49).
// The article's fourth people, the REMADE, is an inherited template,
// not a race — it stages in templates-draft.ts. The Tardy, a Large
// cactacae variant printed as a sidebar on p. 43, and the Garuda of
// "Monsters of Bas-Lag," which prints a full "Garuda Base Traits" block
// for player characters, are carried in reference.md and flagged in
// SCREENING.md for Shaun's call rather than staged here.
// Typed RaceDefinition in the house shape of recent packs (issue-339
// precedent): traits via the t() helper, racial skill bonuses in
// skillBonuses with conditionality spelled out in the trait text.
// Every trait block was verified against rendered page images (magazine
// pp. 43, 45, 49); the image governs over the OCR stream.
// APOC framing (task brief): Bas-Lag is a non-D&D literary setting.
// Mechanics extract; Bas-Lag lore does NOT become APOC fact and is
// stripped from these records — the races stage with neutral framing
// as genuinely new peoples, with no in-world history. Setting-specific
// language names (Sunglari, Salt, Ragamoll) are printed mechanics of
// the language lines and are carried as printed.
// TYPE LINES: the article prints an explicit type only for the
// cactacae (Plant). For the khepri and vodyanoi it prints none; author
// Wolfgang Baur confirmed on the Paizo forum that both are Humanoid,
// and that the vodyanoi should also have the amphibious special
// quality — both omissions were his slip. The records carry Humanoid
// (and the vodyanoi amphibious quality) on that authority, noted here
// and in SCREENING.md rather than silently blended.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #352 — People of Bas-Lag (Wolfgang Baur), pp. 42-49";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_352_RACES: RaceDefinition[] = [
  {
    id: "cactacae",
    name: "Cactacae",
    size: "Medium",
    baseSpeed: 30,
    type: "Plant",
    subtypes: [],
    abilityModifiers: { str: 4, con: 2, dex: -4 },
    favoredClass: "Fighter",
    levelAdjustment: 2,
    skillBonuses: { craft: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "cactacae-ability-scores",
        "Ability Scores",
        "+4 Strength, +2 Constitution, −4 Dexterity.",
      ),
      t(
        "cactacae-medium",
        "Medium",
        "As Medium creatures, cactacae have no special bonuses or penalties due to their size. Cactacae base land speed is 30 feet, and a cactacae can move at this speed even when wearing medium or heavy armor or when carrying a medium or heavy load (unlike other creatures, whose speed is reduced in such situations).",
      ),
      t(
        "cactacae-natural-armor",
        "Natural Armor",
        "Cactacae gain a +1 natural armor bonus to Armor Class. This protection combines with Dexterity, magical bonuses, and worn armor.",
      ),
      t(
        "cactacae-plant-type",
        "Plant Type",
        "Cactacae are members of the Plant type and gain all of the abilities and vulnerabilities of that type, including immunity to poison, sleep effects, polymorph, paralysis, and stunning. They have low-light vision and are not subject to critical hits. Unlike other members of their type, they require sleep and are not immune to mind-affecting effects.",
      ),
      t(
        "cactacae-powerful-build",
        "Powerful Build (Ex)",
        "The physical stature of a cactacae lets it function in many ways as if it were one size category larger: whenever a cactacae is subject to a size modifier or special size modifier for an opposed check (such as during grapple checks, bull rush attempts, and trip attempts), the cactacae is treated as one size larger if doing so is advantageous to it; a cactacae can use weapons designed for a creature one size larger without penalty; however, its space and reach remain those of a creature of its actual size. The benefits of this racial trait stack with the effects of powers, abilities, and spells that change the subject's size category.",
      ),
      t(
        "cactacae-spines",
        "Spines (Ex)",
        "Thousands of tough spines cover the cactacae body. These protrusions allow a cactacae to deal 1d6 points of lethal damage (instead of 1d4 nonlethal) when it chooses to deal damage as part of a successful grapple.",
      ),
      t(
        "cactacae-weapon-familiarity",
        "Weapon Familiarity",
        "Cactacae may treat rivebows, chakri, and greatcleavers as martial weapons, rather than exotic weapons. (All three weapons stage in this issue's equipment-draft.ts.)",
      ),
      t(
        "cactacae-skills",
        "Racial Skill Bonuses",
        "Cactacae gain a +2 racial bonus on Craft checks that are related to wood (carried in skillBonuses as Craft +2; the bonus applies only to wood-related Craft checks).",
      ),
      t(
        "cactacae-languages",
        "Languages",
        "Automatic Languages: Common and Sunglari. Bonus Languages: Any (other than secret languages, such as Druidic). Favored Class: Fighter. Level Adjustment: +2.",
      ),
    ],
  },
  {
    id: "khepri",
    name: "Khepri",
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, wis: 2, con: -2, cha: -2 },
    favoredClass: "Cleric",
    levelAdjustment: 0,
    skillBonuses: { intimidate: 2, spot: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "khepri-ability-scores",
        "Ability Scores",
        "+2 Dexterity, +2 Wisdom, −2 Constitution, −2 Charisma. (The article prints no type line for the khepri; the author confirmed on the Paizo forum that khepri are Humanoid, and this record carries that type on his authority. The article likewise prints no level adjustment line, so the race carries level adjustment +0 as printed.)",
      ),
      t(
        "khepri-medium",
        "Medium",
        "As Medium creatures, khepri have no special bonuses or penalties due to their size. Khepri base land speed is 30 feet.",
      ),
      t(
        "khepri-darkvision",
        "Darkvision",
        "Khepri can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and khepri can function just fine with no light at all.",
      ),
      t(
        "khepri-enchantment-resistance",
        "Enchantment Resistance",
        "Khepri gain a +2 racial bonus on saving throws against enchantment (mind-affecting) spells: khepri minds are different enough from most creatures' minds that their thoughts are difficult to control.",
      ),
      t(
        "khepri-gaze-resistance",
        "Gaze Resistance",
        "Khepri gain a +4 racial bonus on saving throws to resist gaze attacks: the insectoid eyes of the khepri headscarab filter many harmful sight-based effects.",
      ),
      t(
        "khepri-skills",
        "Racial Skill Bonuses",
        "Khepri gain a +2 racial bonus on Intimidate and Spot checks (carried in skillBonuses).",
      ),
      t(
        "khepri-female-only",
        "Females Only as Player Characters",
        "Only female khepri are available as player characters. Khepri males are small, mindless, insectile animals, unable to do more than feed and reproduce; the females are the people of the race in every sense that matters at the table.",
      ),
      t(
        "khepri-languages",
        "Languages",
        "Automatic Language: Khepri. Bonus Languages: Common. Favored Class: Cleric. (Khepri mouthparts cannot communicate in Common or any other spoken tongue; khepri communicate among themselves by scent and chemical gusts that form a silent language other races can smell and taste but cannot understand, and speak to other races using sign language or written notes. No level adjustment is printed for the khepri.)",
      ),
    ],
  },
  {
    id: "vodyanoi",
    name: "Vodyanoi",
    size: "Medium",
    baseSpeed: 20,
    type: "Humanoid",
    subtypes: [],
    abilityModifiers: { dex: 2, cha: 2, wis: -2 },
    favoredClass: "Sorcerer",
    levelAdjustment: 1,
    skillBonuses: { concentration: 2, jump: 2, spellcraft: 2, swim: 8 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "vodyanoi-ability-scores",
        "Ability Scores",
        "+2 Dexterity, +2 Charisma, −2 Wisdom. (The article prints no type line for the vodyanoi; the author confirmed on the Paizo forum that vodyanoi are Humanoid and should have the amphibious special quality, and this record carries both on his authority.)",
      ),
      t(
        "vodyanoi-medium",
        "Medium",
        "As Medium creatures, vodyanoi have no special bonuses or penalties due to their size. Vodyanoi base land speed is 20 feet. Their swimming base speed is 40 feet.",
      ),
      t(
        "vodyanoi-swim",
        "Swim",
        "Vodyanoi have a +8 racial bonus on any Swim check to perform some special action or avoid a hazard. They can always choose to take 10 on a Swim check, even if distracted or endangered. Vodyanoi can use the run action while swimming, provided they swim in a straight line. Vodyanoi are amphibious: they are fully capable of staying underwater without needing to breathe air, and can stay on dry land for days or weeks at a time (provided they can wet down their skins with at least 1 gallon of water per day).",
      ),
      t(
        "vodyanoi-illusion-resistance",
        "Illusion Resistance",
        "Vodyanoi gain a +2 racial saving throw bonus against illusion spells or effects.",
      ),
      t(
        "vodyanoi-low-light-vision",
        "Low-Light Vision",
        "Vodyanoi can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination, retaining the ability to distinguish color and detail under these conditions.",
      ),
      t(
        "vodyanoi-watercraft",
        "Watercraft (Sp)",
        "Vodyanoi have the incredible ability to shape water to suit their needs. This ability allows a vodyanoi to affect water as per either the spell control water or stone shape (but affecting water instead of stone), cast as a sorcerer of a level equal to his class level. A vodyanoi can use this ability a number of times per day equal to his Charisma modifier. The durations of these spells changes to concentration + 3 rounds.",
      ),
      t(
        "vodyanoi-school-focus",
        "School Focus",
        "All vodyanoi gain a +1 bonus to the DC of all spells in one school chosen from divination, illusion, conjuration (summoning), or enchantment (charm). The school must be chosen when the character is created. (APOC note: the conjuration (summoning) choice is printed as written; summoning does not function in APOC — see SCREENING.md.)",
      ),
      t(
        "vodyanoi-skills",
        "Racial Skill Bonuses",
        "Vodyanoi gain a +2 racial bonus on Concentration, Jump, and Spellcraft checks (carried in skillBonuses, together with the +8 Swim bonus above). A vodyanoi who merely passes within 5 feet of a water source or permanent spell effect is entitled to a Search check to notice it; this ability does not tell the vodyanoi any details, such as the school, strength, or nature of the spell.",
      ),
      t(
        "vodyanoi-spell-like-abilities",
        "Spell-Like Abilities",
        "1/day — speak with animals (aquatic animal only, duration 1 minute). A vodyanoi with a Charisma score of at least 10 also has the following spell-like abilities: 1/day — jump, longstrider, mending. Caster level 1st; save DC 10 + vodyanoi's Cha modifier + spell level.",
      ),
      t(
        "vodyanoi-languages",
        "Languages",
        "Automatic Languages: Common and Vodyanoi. Bonus Languages: Cactacae, Druidic, Salt. Favored Class: Sorcerer. Level Adjustment: +1.",
      ),
    ],
  },
];
