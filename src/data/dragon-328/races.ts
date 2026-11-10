// Dragon Magazine #328 (February 2005) — race draft: the saurian shifter.
// "Winning Races: Saurian Shifters" (Nicholas J. Thallasinos), pp. 60-63. Typed
// RaceDefinition in the house shape of recent packs (issue-327 races precedent):
// traits via the t() helper, racial skill bonuses in skillBonuses with conditionality
// spelled out in the trait text. The printed trait block (p. 62) lists no level
// adjustment — staged as levelAdjustment 0, exactly as printed.
// PRINT TENSION (see MANIFEST): the Shifting trait bullet (p. 62) says each saurian
// shifter "has one of the following shifter traits," but the shifter-traits section
// lead-in (p. 63) says each saurian shifter "receives two of the following special
// traits, which are selected when the character is created and cannot be changed
// thereafter." The specific section governs; the record stages the two-trait rule
// and notes the one-trait wording in the Shifting trait text.
// ⚠️ APOC FLAG — see SCREENING.md: this is an Eberron-lineage race (the shifter
// mechanics and the "Shifting in Eberron" sidebar). Standing rule: Eberron sources
// contribute mechanics only, with lore stripped. The record stages the mechanics
// (ruleset "eberron"); the Isle of Dread / Thanaclan origin lore is digested in
// reference.md only. Shifter feats (Eberron Campaign Setting) are available to
// saurian shifters as if they were normal shifters, per the sidebar — the duration /
// uses-per-day scaling rule rides in the Shifting trait text.

import type { RaceDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #328 — Winning Races: Saurian Shifters (Nicholas J. Thallasinos), pp. 60-63";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

function t(key: string, name: string, description: string) {
  return { key, name, description, category: "trait" as const, source: SRC, sourceUrl: SRC_URL };
}

export const DRAGON_328_RACES: RaceDefinition[] = [
  {
    id: "saurian-shifter",
    name: "Saurian Shifter",
    size: "Medium",
    baseSpeed: 30,
    type: "Humanoid",
    subtypes: ["Reptilian", "Shapechanger"],
    abilityModifiers: { con: 2, int: -2, cha: -2 },
    favoredClass: "Ranger",
    levelAdjustment: 0,
    skillBonuses: { balance: 2, climb: 2, jump: 2 },
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "eberron",
    traits: [
      t(
        "saurian-shifter-subtypes",
        "Reptilian and Shapechanger Subtypes",
        "Saurian shifters are humanoids with both the reptilian and shapechanger subtypes.",
      ),
      t(
        "saurian-shifter-ability-scores",
        "Ability Scores",
        "+2 Constitution, -2 Intelligence, -2 Charisma: saurian shifters are hearty and resilient, but their inherent reptilian nature detracts from both their reasoning ability and their social interaction.",
      ),
      t(
        "saurian-shifter-medium",
        "Medium",
        "As Medium creatures, saurian shifters have no special bonuses or penalties due to their size. Saurian shifter base land speed is 30 feet.",
      ),
      t(
        "saurian-shifter-shifting",
        "Shifting (Su)",
        "A saurian shifter can tap into his lycanthrope heritage to gain short bursts of physical power. Once per day, as a free action, a saurian shifter can enter a state that is superficially similar to a barbarian's rage, lasting for a number of rounds equal to 3 + the saurian shifter's Constitution modifier (if a shifter trait or other effect increases the character's Con modifier, use the newly improved modifier). Each shifter trait provides a +2 bonus to one of the character's physical ability scores (Strength, Dexterity, or Constitution) and grants some other advantage as well, and a saurian shifter also has access to the common shifter traits in addition to the traits unique to saurian shifters (see the Saurian Shifter Traits trait). Shifting, although related to and developed from lycanthropy, is neither an affliction nor a curse: it is not passed on by bite or claw attacks, and a saurian shifter can't be cured — shifting is a natural ability for the race. Saurian shifters qualify for shifter feats as if they were normal shifters (the Eberron Campaign Setting is not required to use this race): each shifter feat a saurian shifter possesses increases the duration of his shifting by 1 round, and he gains one additional use of shifting per day for every two shifter feats he possesses.",
      ),
      t(
        "saurian-shifter-traits-list",
        "Saurian Shifter Traits",
        "Each saurian shifter receives two of the following special traits, which are selected when the character is created and cannot be changed thereafter. (The Shifting trait bullet on p. 62 says each shifter 'has one of the following shifter traits'; the traits section itself, staged here, grants two.) BEASTHIDE: While shifting, a beasthide saurian shifter gains a +2 bonus to Constitution and thick skin that provides a +2 natural armor bonus. BROADWING: While shifting, a broadwing saurian shifter gains a +2 bonus to Dexterity and can slow his descent while falling; a shifter using this ability takes damage from a fall as if it were 40 feet shorter than it actually is. JUNGLERUNNER: While shifting, a junglerunner saurian shifter gains a +2 bonus to Dexterity and increases his base land speed by 20 feet. LONGTOOTH: While shifting, a longtooth saurian shifter gains a +2 bonus to Strength and grows fangs that can be used as a natural weapon, dealing 1d6 points of damage (plus an additional +1 for every four character levels he has) with a successful bite attack; he cannot attack more than once per round with his bite, even if his base attack bonus is high enough to give him multiple attacks, but he can use his bite as a secondary attack (taking a -5 penalty on his attack roll) while wielding a weapon. RAPTORLEAP: While shifting, a raptorleap saurian shifter gains a +2 bonus to Strength, a +4 bonus on Jump checks, and treats all Jump checks as though he had a running start. RAZORCLAW: While shifting, a razorclaw saurian shifter gains a +2 bonus to Strength and grows claws that can be used as natural weapons, dealing 1d4 points of damage (plus an additional +1 for every four character levels he has) with each successful attack; he can attack with one claw as a standard action or with two claws as a full attack action (as a primary natural weapon), cannot attack more than once per round with a single claw, and can attack with a claw as a light off-hand weapon while wielding a weapon in his primary hand, but all his attacks in that round suffer a -2 penalty. WIDETAIL: While shifting, a widetail saurian shifter gains a +2 bonus to Constitution and grows a thick tail that can be used as a natural weapon, dealing 1d6 points of bludgeoning damage (plus an additional +1 for every four character levels he has) with a successful tail slap attack; he cannot attack more than once per round with his tail slap, but he can use his tail slap as a secondary attack (taking a -5 penalty on his attack roll) while wielding a weapon.",
      ),
      t(
        "saurian-shifter-low-light-vision",
        "Low-Light Vision",
        "Saurian shifters can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. They retain the ability to distinguish color and detail under these conditions.",
      ),
      t(
        "saurian-shifter-skills",
        "Racial Skill Bonuses",
        "Saurian shifters gain a +2 racial bonus on Balance, Climb, and Jump checks (carried in skillBonuses): a saurian shifter's reptilian heritage enhances many of his physical skills.",
      ),
      t(
        "saurian-shifter-languages",
        "Languages",
        "Automatic languages: Common and Draconic. Bonus languages: Elven, Gnome, Halfling, and Sylvan. Saurian shifters living in seclusion speak Draconic with a thick accent — an ancient dialect of the language — although they understand the need to know Common in order to pass themselves off as humans.",
      ),
      t(
        "saurian-shifter-favored-class",
        "Favored Class: Ranger",
        "A multiclass saurian shifter's ranger class doesn't count when determining whether he takes an experience point penalty for multiclassing.",
      ),
    ],
  },
];
