// Dragon Magazine #327 (January 2005) — race draft: the diabolus.
// Typed RaceDefinition in the house shape of recent packs (issue-325 lupin precedent):
// traits via the t() helper, racial skill bonuses and penalties in skillBonuses with
// conditionality spelled out in the trait text. The printed trait list (p. 65) contains
// NO ability-score adjustment and NO level-adjustment line — staged exactly as printed
// (abilityModifiers {}, levelAdjustment 0); see MANIFEST.
// ⚠️ APOC FLAG — see SCREENING.md: the diabolus is a fiend-blooded race (devil-descended
// in the survey's words; the article itself presents chaotic-good natives of the
// Demiplane of Nightmares who look like devils). It stages as a record; whether it is
// APOC-grayed like the tiefling is Shaun's call at screening. Not decided here.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #327 — Winning Races: Diaboli (Mike McArtor), pp. 62-65";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

// Trait helper in the live FeatureDefinition shape (key + source/sourceUrl baked in),
// matching the integrated dragon-324/325 races files.
function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_327_RACES: RaceDefinition[] = [
  {
    id: "diabolus",
    name: "Diabolus",
    size: "Medium",
    baseSpeed: 30,
    type: "Outsider",
    subtypes: ["Native", "Chaotic"],
    abilityModifiers: {},
    favoredClass: "Sorcerer",
    levelAdjustment: 0,
    skillBonuses: { intimidate: 2, diplomacy: -2, "handle-animal": -2, perform: -2, "sense-motive": -2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    traits: [
      t(
        "diabolus-outsider-native",
        "Outsider (Native)",
        "Diaboli are outsiders with the native subtype. Diaboli have a knack for making themselves at home on new planes.",
      ),
      t(
        "diabolus-chaotic-subtype",
        "Chaotic Subtype",
        "Diaboli have the chaotic subtype.",
      ),
      t(
        "diabolus-medium",
        "Medium",
        "As Medium creatures, diaboli have no special bonuses or penalties due to their size. Diaboli base land speed is 30 feet.",
      ),
      t(
        "diabolus-darkvision",
        "Darkvision",
        "Diaboli can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and diaboli can function just fine with no light at all.",
      ),
      t(
        "diabolus-magic-resistance",
        "Resistance to Magic",
        "Diaboli gain a +2 racial bonus on all saving throws against spells and spell-like effects: diaboli come from a demiplane slightly out of phase with other planes, which gives them some resistance to magical effects.",
      ),
      t(
        "diabolus-intimidating-presence",
        "Intimidating Presence",
        "Diaboli gain a +2 racial bonus on Intimidate checks made against animals and humanoids (carried in skillBonuses). The frightful appearance and alien psychology of diaboli make them particularly good at coercing Material Plane natives. This bonus does not apply when dealing with other diaboli.",
      ),
      t(
        "diabolus-alien-mannerisms",
        "Alien Mannerisms",
        "Diaboli suffer a −2 penalty on Diplomacy, Handle Animal, Perform, and Sense Motive checks (carried in skillBonuses). The hideous appearance and strange mannerisms of the diaboli make it difficult for them to interact peaceably with native humanoids and animals of the Material Plane. These penalties do not apply when dealing with other diaboli.",
      ),
      t(
        "diabolus-weapon-familiarity",
        "Weapon Familiarity",
        "Diaboli treat tridents as simple weapons rather than martial weapons.",
      ),
      t(
        "diabolus-tail-attack",
        "Natural Attack: Tail",
        "A diabolus can make a secondary natural attack with its tail (at a −5 penalty on attack rolls). This attack deals 1d4 points of damage and injects its target with a mild poison (DC 10 + 1/2 HD + Constitution modifier). The poison's initial damage causes its victim to become sickened for 2d4 rounds; it has no secondary damage. A sickened creature suffers a −2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.",
      ),
      t(
        "diabolus-languages",
        "Languages",
        "Automatic Languages: Diabolan and diaboli tail code. Bonus Languages: Abyssal, Common, Draconic, and Infernal. Diaboli learn the languages easiest for them to pronounce as well as the most frequently used languages near their adopted homes. Many diaboli also communicate by twirling and positioning their tails in an elaborate visual code: it takes roughly twice as long to express something in the tail code as in a spoken language, any creature that can see a diabolus using it can make a DC 10 Intelligence check to realize the diabolus is attempting to communicate, and any creature can learn the code, although only those with a tail of their own can \"speak\" it.",
      ),
    ],
  },
];
