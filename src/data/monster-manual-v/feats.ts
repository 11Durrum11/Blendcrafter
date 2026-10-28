import type { FeatDefinition } from "@/engine/types";

// Monster Manual V feats: the three feats in the book's
// "Monster Feats" appendix (pp. 204–205) that are not already
// in the dataset — Hover, Snatch, and Wingover — plus the new
// feats printed inside monster entries: Battle Magic Tactics
// (hobgoblin section, p. 84), Kuo-Toan Monasticism and
// Mind-Shattering Strike (kuo-toa monitor entry, p. 97), and
// Sense Quintessence (Thoon infiltrator entry, p. 110).
// Skipped as duplicates: the appendix's Ability Focus,
// Awesome Blow, Flyby Attack, Improved Natural Attack,
// Improved Toughness, Multiattack, Powerful Charge, and
// Quicken Spell-Like Ability (all recorded from Monster
// Manual IV in this batch) and its Empower Spell-Like Ability
// (recorded from Book of Vile Darkness; the appendix printing
// allows three uses per day where the older printing allows
// two); and the entry feats Mage Slayer (Complete Arcane),
// Daunting Presence, and Brutal Throw (Complete Adventurer),
// which duplicate existing records. Short mechanical
// summaries in our own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf

const MM5 = "Monster Manual V";
const MM5_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf";
const MF = `${MM5} — Monster Feats`;
const G = "general";

export const MONSTER_MANUAL_V_FEATS: FeatDefinition[] = [
  { id: "hover", name: "Hover", category: G, ruleset: "core", prerequisites: ["Fly speed"], benefitSummary: "When flying, the creature can halt its forward motion and hover in place as a move action; it can then fly in any direction, including straight down or straight up, at half speed, regardless of its maneuverability. If the creature begins its turn hovering, it can hover in place for the turn and take a full-round action; a hovering creature cannot make wing attacks, but it can attack with all other limbs and appendages it could use in a full attack, use a breath weapon, or cast a spell instead of making physical attacks. If a creature of Large size or larger hovers within 20 feet of the ground in an area with lots of loose debris, the draft from its wings creates a hemispherical cloud with a radius of 60 feet: the winds can snuff torches, small campfires, exposed lanterns, and other small open flames of nonmagical origin; clear vision within the cloud is limited to 10 feet, creatures have concealment at 15 to 20 feet (20% miss chance), and total concealment at 25 feet or more; those caught in the cloud must succeed on a Concentration check (DC 10 + 1/2 the creature's HD) to cast a spell.", special: "Normal: Without this feat, a creature must keep moving when flying unless it has good or better maneuverability.", source: `${MF} — Hover (p. 204)`, sourceUrl: MM5_PATH },
  { id: "snatch", name: "Snatch", category: G, ruleset: "core", prerequisites: ["Size Huge or larger"], benefitSummary: "The creature can choose to start a grapple when it hits with a claw or bite attack, as though it had the improved grab special attack. If the creature gets a hold on an opponent three or more sizes smaller than itself, it can squeeze each round for its bite or claw damage. A snatched opponent held in the creature's mouth is not allowed a Reflex save against the creature's breath weapon (if any). The creature can drop an opponent it has snatched as a free action, or use a standard action to fling it aside: a flung opponent travels 1d6 × 10 feet and takes 1d6 points of damage per 10 feet traveled; if the creature flings a snatched opponent when flying, the opponent takes this amount or falling damage, whichever is greater.", source: `${MF} — Snatch (p. 205)`, sourceUrl: MM5_PATH },
  { id: "wingover", name: "Wingover", category: G, ruleset: "core", prerequisites: ["Fly speed"], benefitSummary: "A flying creature that has this feat can change direction quickly once each round as a free action, turning up to 180 degrees regardless of its maneuverability, in addition to any other turns it is normally allowed. The creature cannot gain altitude during a round when it executes a wingover, but it can dive. The change of direction consumes 10 feet of flying movement.", source: `${MF} — Wingover (p. 205)`, sourceUrl: MM5_PATH },
  { id: "battle-magic-tactics", name: "Battle Magic Tactics", category: G, ruleset: "core", prerequisites: ["Spellcraft 6 ranks", "arcane caster level 3rd"], benefitSummary: "Each time you cast a spell that requires the target to make a saving throw, that target gains a Battle Magic Tactics token after the spell resolves. A creature gains a token whether the save succeeds or fails, but a creature that avoids a spell through spell resistance does not gain a token. Each Battle Magic Tactics token imposes a cumulative –1 penalty on saving throws against the spells of spellcasters that have this feat. At the end of each round, all Battle Magic Tactics tokens disappear.", source: `${MM5} — Hobgoblin (p. 84)`, sourceUrl: MM5_PATH },
  { id: "kuo-toan-monasticism", name: "Kuo-Toan Monasticism", category: "race-specific", ruleset: "core", prerequisites: ["Kuo-toa", "flurry of blows"], benefitSummary: "As a swift action, a kuo-toa can smear a strange, sticky substance on its hands. When using flurry of blows, the kuo-toa automatically hits with one of its extra attacks if its first attack hits. A kuo-toa that has this feat uses Hit Dice, rather than character level, to determine its Stunning Fist save DC.", source: `${MM5} — Kuo-Toa Monitor (p. 97)`, sourceUrl: MM5_PATH },
  { id: "mind-shattering-strike", name: "Mind-Shattering Strike", category: "race-specific", ruleset: "core", prerequisites: ["Kuo-toa", "Kuo-Toan Monasticism", "Stunning Fist", "flurry of blows"], benefitSummary: "Before making an unarmed strike, a kuo-toa can choose to use this feat, consuming one of its daily uses of the Stunning Fist feat. If its next unarmed attack hits, the struck opponent must make a Will save (DC 10 + 1/2 the kuo-toa's HD + its Wis modifier); on a failed save, that foe attacks the closest non-kuo-toa on its next turn. This feat also grants one additional daily use of the Stunning Fist feat.", source: `${MM5} — Kuo-Toa Monitor (p. 97)`, sourceUrl: MM5_PATH },
  { id: "sense-quintessence", name: "Sense Quintessence", category: G, ruleset: "core", prerequisites: ["Detect magic (as a spell or spell-like ability)", "affiliation with Thoon"], benefitSummary: "When you use detect magic, you also detect any quantities of quintessence (a magic substance precious to Thoon) within the spell's area. The amount of information revealed depends on how long you study a particular area or subject: 1st round — presence or absence of quintessence; 2nd round — number of different quintessence sources, and the size and potency (moderate or strong) of the most powerful quintessence source; 3rd round — the location and potency of each quintessence source.", source: `${MM5} — Mind Flayers of Thoon (p. 110)`, sourceUrl: MM5_PATH },
];
