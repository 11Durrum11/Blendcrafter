// Dragon Magazine #331 (May 2005) — feat draft: 16 records.
// EIGHT pole arm feats — "The Point of Pole Arms" (Ari Marmell, Jason
// Bulmahn, and the Dragon staff), p. 28. For the purpose of these feats a
// pole arm is any weapon listed on the article's Complete Pole Arm Chart,
// and fighters may take any of them as bonus feats. All eight are printed
// with the [General] tag.
// EIGHT alternative familiar abilities — "Class Acts: Familiarity Breeds"
// (Hal Maclean), p. 93. ⚠️ These are NOT printed as feats: they are
// enhancements an arcane spellcaster with the Improved Familiar feat gains
// for keeping his original familiar instead of acquiring a new one, each
// gated by a minimum arcane spellcaster level and a specific familiar.
// They stage in the feats barrel because it is the catalog's only fitting
// record shape for discrete prerequisite-gated benefits (precedent: the
// issue-330 Knight Training / Crushing Coils stage-and-flag pattern);
// every record says so in its text, and the decision is flagged in
// SCREENING.md for Shaun's call.
// All feat texts verified against the rendered page images (magazine
// pp. 28 and 93); the image governs over the OCR stream.

import type { FeatDefinition } from "@/engine/types";

const SRC_POLE = "Dragon Magazine #331 — The Point of Pole Arms (Ari Marmell, Jason Bulmahn, and the Dragon staff), p. 28";
const SRC_FAMILIAR = "Dragon Magazine #331 — Class Acts: Familiarity Breeds (Hal Maclean), p. 93";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_POLE,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const FAMILIAR_FRAME =
  "Alternative familiar ability (not a printed feat — staged in the feats barrel as the catalog's only fitting record shape; see SCREENING.md). An arcane spellcaster with the Improved Familiar feat who keeps his original familiar instead of acquiring a new, more powerful one may gain this enhancement.";

export const DRAGON_331_FEATS: FeatDefinition[] = [
  F({
    id: "braced-for-charge",
    name: "Braced for Charge",
    prerequisites: ["Base attack bonus +1"],
    benefitSummary:
      "[General.] When receiving a charge, you know how to strike where it truly hurts. Benefit: You can ready an action to set any pole arm against a charge. This attack deals double damage on a successful hit against a charging character. This feat grants no bonus to weapons that already grant double damage when set against a charge. Normal: Only specific weapons do double damage when readied against a charge. Special: A fighter may select Braced for Charge as one of his fighter bonus feats. (For the purpose of this feat, a pole arm is any weapon on the Complete Pole Arm Chart in the same article.)",
  }),
  F({
    id: "haft-strike",
    name: "Haft Strike",
    prerequisites: ["Two-Weapon Fighting"],
    benefitSummary:
      "[General.] You have learned to fight with both ends of a pole arm. Benefit: When wielding a pole arm two-handed you may choose to attack with the haft of the weapon. You may only perform this attack as part of a full-attack action. This additional attack is at your highest attack bonus and deals damage like a club of the same size as the pole arm. Although the haft does not possess any of the bonuses associated with the weapon (such as flaming), it does count as magic for the purposes of overcoming damage reduction if the weapon is enchanted. When using this feat, each attack you make in that round (the extra one and the normal ones) suffers a -2 penalty. You only receive half your Strength bonus on damage rolls with this attack. This feat cannot be used with a double weapon. Normal: The haft of a non-double weapon is considered an improvised weapon and cannot be used as part of a full-attack action. Special: A fighter may select Haft Strike as one of his fighter bonus feats.",
  }),
  F({
    id: "long-strike",
    name: "Long Strike",
    prerequisites: ["Base attack bonus +2"],
    benefitSummary:
      "[General.] You have practiced grasping a pole arm farther down the haft than normal, granting you extended reach. Benefit: As a full-attack action, you can make one attack with a pole arm as if it had reach, allowing you to strike an opponent 10 feet away. If the pole arm already grants reach, treat its reach as if it extended 5 feet further. Normal: Only reach weapons allow you to attack foes more than 5 feet away. Special: A fighter may select Long Strike as one of his fighter bonus feats.",
  }),
  F({
    id: "pole-balance",
    name: "Pole Balance",
    benefitSummary:
      "[General.] You can use your pole arm to brace yourself against impact and prevent you from falling. Benefit: When wielding a pole arm two-handed you gain a +4 circumstance bonus to resist being bull rushed or tripped, and on any Balance checks to avoid losing your footing. You may not use this feat if you are flat-footed or if you are in a precarious position (such as on a tightrope or while climbing) that does not provide you a solid surface against which to prop the weapon. Special: A fighter may select Pole Balance as one of his fighter bonus feats.",
  }),
  F({
    id: "pole-fighter",
    name: "Pole Fighter",
    prerequisites: ["Proficiency with the selected weapon", "Weapon Focus with the selected weapon", "Flurry of blows class feature"],
    benefitSummary:
      "[General.] Your monastic training included extensive work with pole arms and other similar weapons. Benefit: Choose a pole arm from the Complete Pole Arm Chart. You can treat that weapon as a special monk weapon, allowing you to perform a flurry of blows with it. Special: A fighter may select Pole Fighter as one of his fighter bonus feats.",
  }),
  F({
    id: "shorten-grip",
    name: "Shorten Grip",
    benefitSummary:
      "[General.] You know how to alter your grip on a reach weapon to use it against nearby opponents. Benefit: When wielding a pole arm with reach that you are proficient with, you may treat the weapon as if it did not have reach. The weapon is unwieldy when used in this fashion and you suffer a -2 penalty on attack rolls when attacking an opponent you normally could not. You cannot use this feat with the awl pike. Normal: Reach weapons cannot be used against adjacent foes. Special: A fighter may select Shorten Grip as one of his fighter bonus feats.",
  }),
  F({
    id: "spinning-defense",
    name: "Spinning Defense",
    prerequisites: ["Combat Expertise", "Deflect Arrows"],
    benefitSummary:
      "[General.] You can spin a pole arm around you, deflecting attacks. Benefit: While wielding a pole arm during a total defense action, you receive a +1 dodge bonus to your AC (that stacks with the bonuses from total defense) and you can use the Deflect Arrows feat any number of times until your next turn (you do not need an open hand to deflect ranged weapons while using this feat). While using this feat, you cannot catch any of the weapons through the Snatch Arrows feat. Normal: You can only use the Deflect Arrows feat once per round. Special: A fighter may select Spinning Defense as one of his fighter bonus feats.",
  }),
  F({
    id: "vault",
    name: "Vault",
    prerequisites: ["Str 13", "Jump 4 ranks"],
    benefitSummary:
      "[General.] While wielding a pole arm you can jump great distances. Benefit: When wielding a pole arm two-handed, the DC for a long jump is reduced by 5 (printed \"reduced by -5\"). In addition, the DC for a high jump is equal to three times the distance to be cleared. If you jump up to grab something, you must drop the pole arm to grab the target. Normal: The DC for a high jump is equal to four times the distance to be cleared. Special: A fighter may select Vault as one of his fighter bonus feats.",
  }),
  F({
    id: "familiar-blindsense",
    name: "Blindsense (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 12th", "Bat familiar"],
    benefitSummary:
      "[Alternative familiar ability (Ex).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 12th, bat familiar. Benefit: You gain blindsense out to 20 feet. Using nonvisual senses, such as acute smell or hearing, you notice things others cannot see (see the Monster Manual description of blindsense).",
  }),
  F({
    id: "familiar-hallucinatory-perspiration",
    name: "Hallucinatory Perspiration (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 9th", "Toad familiar"],
    benefitSummary:
      "[Alternative familiar ability (Ex).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 9th, toad familiar. Benefit: Your sweat causes creatures rash enough to bite you to suffer violent hallucinations. Whenever a creature vulnerable to poison bites you, it must succeed at a Fortitude save (DC 10 + 1/2 your arcane spellcaster class levels + your Constitution modifier) or be affected by the confusion spell for 1d4 rounds.",
  }),
  F({
    id: "familiar-nine-lives",
    name: "Nine Lives (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 5th", "Cat familiar"],
    benefitSummary:
      "[Alternative familiar ability (Su).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 5th, cat familiar. Benefit: When you roll to stabilize, you have a 50% chance of success instead of the standard 10% chance.",
  }),
  F({
    id: "familiar-regrow",
    name: "Regrow (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 7th", "Lizard familiar"],
    benefitSummary:
      "[Alternative familiar ability (Ex).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 7th, lizard familiar. Benefit: You can heal your own wounds as a paladin lays on hands. Each day you can heal a total number of hit points of damage equal to half your arcane spellcasting level x your Charisma modifier.",
  }),
  F({
    id: "familiar-scent",
    name: "Scent (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 7th", "Snake or weasel familiar"],
    benefitSummary:
      "[Alternative familiar ability (Su).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 7th, snake or weasel familiar. Benefit: You gain the scent ability. You can identify familiar odors just as normal humans do familiar sights (see the Monster Manual description of scent).",
  }),
  F({
    id: "familiar-second-memory",
    name: "Second Memory (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 5th", "Raven familiar"],
    benefitSummary:
      "[Alternative familiar ability (Ex).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 5th, raven familiar. Benefit: You may seek your familiar's sometimes dubious advice. Whenever you attempt a Knowledge check for a Knowledge skill in which you have at least 1 rank, your raven familiar attempts to assist you. It need only make a DC 10 Intelligence check to do so. If it succeeds, you receive the standard +2 bonus on your skill check.",
  }),
  F({
    id: "familiar-self-cannibalize",
    name: "Self-Cannibalize (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 9th", "Rat familiar"],
    benefitSummary:
      "[Alternative familiar ability (Su).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 9th, rat familiar. Benefit: Your will to survive allows you to feed upon your magic. Once per day you may, as a free action, sacrifice one of your available spell slots or prepared spells to convert some lethal damage you take from an attack or spell into nonlethal damage. The level of the spell sacrificed represents the number of hit points converted into nonlethal damage.",
  }),
  F({
    id: "familiar-tracker",
    name: "Tracker (Familiar Ability)",
    source: SRC_FAMILIAR,
    prerequisites: ["Improved Familiar", "Arcane spellcaster level 9th", "Hawk or owl familiar"],
    benefitSummary:
      "[Alternative familiar ability (Su).] " +
      FAMILIAR_FRAME +
      " Prerequisites as printed: arcane spellcaster level 9th, hawk or owl familiar. Benefit: You gain a +2 bonus on Move Silently checks. You also gain low-light vision. If you already have low-light vision, you can see three times as far as a normal human in starlight, moonlight, torchlight, and similar conditions of poor illumination.",
  }),
];
