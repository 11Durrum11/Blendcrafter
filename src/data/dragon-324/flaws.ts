// Dragon #324 — Class Acts flaws by Richard Pocklington, staged
// 2026-11-09: Flaws for Druids (p. 93), Flaws for Paladins (p. 96),
// Flaws for Bards (p. 98). All twenty-five page-image verified.
// Shape: FlawTraitDefinition (the catalog's Personality-step flaws
// barrel). Shared printed rule: a character can have a maximum of two
// flaws, selected at 1st level, and each flaw grants an additional
// feat at 1st level (carried in the SCREENING/MANIFEST, not per
// record). No `modifiers` are modeled: every effect here is
// conditional, situational, or a subset penalty, which the flaw
// type's own accounting leaves unmodeled.
//
// Collisions vs the live flaws barrel (probe 2026-11-09): the catalog
// already carries D&D Wiki homebrew flaws named Cold-Blooded,
// Hot-Blooded, Love of Nature, and Coward whose mechanics DIFFER from
// the printed magazine flaws (e.g. the wiki Cold-Blooded adds its fire
// damage per die; the wiki Love of Nature restricts attacks to
// nonlethal damage) — the magazine versions stage suffixed -324.
// City Slicker and Arcane Performer exist only in other barrels (a
// Races of Destiny feat; a Sorcery & Steam prestige class) —
// cross-barrel id reuse is established catalog practice (87 live
// cases), so the flaws stage unsuffixed.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC93 = "Dragon Magazine #324 — Class Acts: Flaws for Druids (Richard Pocklington), p. 93";
const SRC96 = "Dragon Magazine #324 — Class Acts: Flaws for Paladins (Richard Pocklington), p. 96";
const SRC98 = "Dragon Magazine #324 — Class Acts: Flaws for Bards (Richard Pocklington), p. 98";
const URL = "https://archive.org/details/DragonMagazine260_201801";

function F(o: Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description" | "source">): FlawTraitDefinition {
  return { kind: "flaw", ruleset: "core", sourceUrl: URL, ...o } as FlawTraitDefinition;
}

export const DRAGON_324_FLAWS: FlawTraitDefinition[] = [
  // ---- Flaws for Druids (p. 93) ----
  F({
    id: "bestial-instinct",
    name: "Bestial Instinct",
    summary: "You take a −2 penalty to hit while using anything other than unarmed strikes or natural weapons.",
    description: "You are more comfortable combating foes with tooth and claw than with weaponry. You take a −2 penalty to hit when using anything other than your unarmed strikes or natural weapons.",
    source: SRC93,
  }),
  F({
    id: "city-slicker",
    name: "City Slicker",
    prerequisite: "Survival as a class skill.",
    summary: "You take a −4 penalty on all Handle Animal, Knowledge (nature), and Survival checks.",
    description: "You are most comfortable in urban environments. You take a −4 penalty on all Handle Animal, Knowledge (nature), and Survival checks.",
    source: SRC93,
  }),
  F({
    id: "claustrophobia",
    name: "Claustrophobia",
    summary: "You become shaken in cramped spaces — within 10 feet of a wall or solid surface on two or more sides, or under a ceiling less than 10 feet overhead.",
    description: "You feel extremely uncomfortable in cramped spaces. You become shaken while in any space where you are within 10 feet of a wall or other solid surface on 2 or more sides, or if the ceiling is less than 10 feet above your head. Spells and effects that remove fear do not remove this condition.",
    source: SRC93,
  }),
  F({
    id: "cold-blooded-324",
    name: "Cold-Blooded",
    summary: "You automatically fail Fortitude saves against high temperatures, and fire-based effects deal 2 extra points of fire damage to you.",
    description: "You were raised in the arctic and cannot tolerate heat. You automatically fail all Fortitude saves made to overcome the effects of high temperatures. Fire-based effects deal an additional 2 points of fire damage to you.",
    source: SRC93,
  }),
  F({
    id: "forlorn-of-men",
    name: "Forlorn of Men",
    summary: "You become shaken whenever more than one humanoid is within 30 feet of you, friends and party members included.",
    description: "You shy away from the presence of others. You become shaken if there is more than one humanoid within 30 feet of you, including party members and friends. Spells and effects that remove fear do not remove this condition.",
    source: SRC93,
  }),
  F({
    id: "hot-blooded-324",
    name: "Hot-Blooded",
    summary: "You automatically fail Fortitude saves against low temperatures, and cold-based effects deal 2 extra points of cold damage to you.",
    description: "You were raised in the desert and cannot tolerate cold. You automatically fail all Fortitude saves made to overcome the effects of low temperatures. Cold-based effects deal an additional 2 points of cold damage to you.",
    source: SRC93,
  }),
  F({
    id: "love-of-nature-324",
    name: "Love of Nature",
    summary: "You must succeed at a DC 12 Will save before attacking any animal, plant, or vermin, or lose your action.",
    description: "You do not wish harm upon any natural creature. You must succeed at a DC 12 Will save before you can attack any creature with the animal, plant, or vermin type, or you lose your action that round. Such creatures may attack you without penalty.",
    source: SRC93,
  }),
  F({
    id: "metal-intolerance",
    name: "Metal Intolerance",
    summary: "Metal weapons deal 1 additional point of damage to you, as do the natural attacks of creatures composed of metal.",
    description: "Your body has a bad reaction to metal. You suffer an additional point of damage when struck by metal weapons. The natural attacks of inevitables, iron golems, and other creatures composed primarily of metal also deal this additional damage to you.",
    source: SRC93,
  }),
  F({
    id: "no-time-for-book-learning",
    name: "No Time for Book Learning",
    summary: "You are illiterate and can never learn to read, and take a −2 penalty on all Knowledge checks except Knowledge (nature).",
    description: "You spent your formative years enjoying the great outdoors. However, this came at the cost of your education. You are illiterate and can never learn to read any language. You take a −2 penalty on all Knowledge checks except Knowledge (nature).",
    source: SRC93,
  }),
  // ---- Flaws for Paladins (p. 96) ----
  F({
    id: "chivalrous-courtesy",
    name: "Chivalrous Courtesy",
    prerequisite: "Good or lawful alignment.",
    summary: "You take a −4 penalty on attack rolls against a creature you can tell is of the opposite gender.",
    description: "Your rigid code demands that you extend special courtesy to those of the opposite gender. You take a −4 penalty on attack rolls to hit a creature you can tell is of the opposite gender from you.",
    source: SRC96,
  }),
  F({
    id: "code-of-arms",
    name: "Code of Arms",
    prerequisite: "Good or lawful alignment.",
    summary: "You take a −4 penalty on attack rolls against an enemy not armed with a melee weapon, until it attacks you with a natural weapon.",
    description: "Your rigid code forbids you from striking an opponent that is not armed as you are. You suffer a −4 penalty on attack rolls against an enemy who is not armed with a melee weapon. If your enemy uses a natural attack against you, you may attack that enemy without the penalty.",
    source: SRC96,
  }),
  F({
    id: "honorable-challenge",
    name: "Honorable Challenge",
    prerequisite: "Lawful alignment.",
    summary: "You take a −4 penalty on attack rolls against creatures that have not explicitly challenged you or attacked you.",
    description: "Your rigid code demands you only fight those who wish to fight you. You suffer a −4 penalty on attack rolls against creatures that have not explicitly challenged you or that have not made an attack against you. (An attack includes any action that would end an invisibility spell, as defined in the spell's description, PH page 245.)",
    source: SRC96,
  }),
  F({
    id: "honor-of-the-duel",
    name: "Honor of the Duel",
    prerequisite: "Good or lawful alignment.",
    summary: "To attack a creature threatened by one of its other foes you must pass a Will save (DC 10 + your level), and even then attack at −2.",
    description: "Your rigid code forbids you from taking advantage of an enemy who is distracted by other foes. You must make a Will save (DC 10 + your level) to attack a creature in a square threatened by one of its other foes; if you succeed, you take a −2 penalty on the attack, and if you fail you may not attack that creature.",
    source: SRC96,
  }),
  F({
    id: "mounted-warrior",
    name: "Mounted Warrior",
    prerequisite: "Ride 1 rank.",
    summary: "You take a −2 penalty on attack rolls made while not riding a mount.",
    description: "You are so accustomed to fighting mounted that you have difficulty facing a foe on foot. You take a −2 penalty on attack rolls made while not riding a mount.",
    source: SRC96,
  }),
  F({
    id: "pride-of-arms",
    name: "Pride of Arms",
    prerequisite: "Proficiency in all martial weapons.",
    summary: "You take a −4 penalty on attack rolls with exotic weapons, simple weapons, unarmed attacks, and touch attacks.",
    description: "Your rigid code forbids you from using any weapon that is not a martial weapon. You take a −4 penalty on all attack rolls made with exotic weapons, simple weapons, unarmed attacks, and touch attacks.",
    source: SRC96,
  }),
  F({
    id: "solitary-paragon",
    name: "Solitary Paragon",
    summary: "You gain no benefit from flanking and instead take a −4 penalty on attack rolls against a foe you flank.",
    description: "Your rigid code demands you always face your foes alone. You gain no benefit from flanking a foe and instead suffer a −4 penalty on attack rolls made against a foe you flank.",
    source: SRC96,
  }),
  F({
    id: "warrior-of-the-phalanx",
    name: "Warrior of the Phalanx",
    summary: "You take a −4 penalty on attack rolls made when not adjacent to an ally.",
    description: "You are so accustomed to fighting as part of a unit that you have difficulty attacking a foe when you are on your own. You suffer a −4 penalty on attack rolls you make when not adjacent to an ally.",
    source: SRC96,
  }),
  // ---- Flaws for Bards (p. 98) ----
  F({
    id: "arcane-performer",
    name: "Arcane Performer",
    prerequisite: "Ability to cast arcane spells without preparation, Perform 1 rank.",
    summary: "To cast a spell you must succeed at a Perform check (DC 10 + spell level) or lose the spell.",
    description: "You incorporate your spells into your performances in an elaborate way, lengthening the casting. To cast any spell, you must succeed at a Perform check (DC 10 + the level of the spell being cast). If you fail, you lose the spell.",
    source: SRC98,
  }),
  F({
    id: "brash",
    name: "Brash",
    summary: "You take a −6 penalty to Armor Class against attacks of opportunity.",
    description: "You are overly eager to enter battle and leave yourself exposed. You take a −6 penalty to your Armor Class against attacks of opportunity.",
    source: SRC98,
  }),
  F({
    id: "coward-324",
    name: "Coward",
    summary: "You automatically fail all saves against fear effects; if an ability would make you immune to fear, you instead get a saving throw at −4.",
    description: "A shiver of fear runs through you whenever you are in danger. You automatically fail all saves against fear effects. An ability that would otherwise make you immune to fear (such as a paladin's aura of courage) instead grants you a saving throw against such effects, but at a −4 penalty.",
    source: SRC98,
  }),
  F({
    id: "fool",
    name: "Fool",
    prerequisite: "Bardic music.",
    summary: "You lose the inspire courage, inspire competence, inspire greatness, and inspire heroics bardic music abilities.",
    description: "Your performances never convey any meaning deeper than the audience's base reactions of laughter or derision. You lose the inspire courage, inspire competence, inspire greatness, and inspire heroics bardic music abilities.",
    source: SRC98,
  }),
  F({
    id: "frivolous-performer",
    name: "Frivolous Performer",
    prerequisite: "Bardic knowledge.",
    summary: "You take a −10 penalty on bardic knowledge checks, except where the knowledge involves your best Perform skill.",
    description: "Your shows focus on lighthearted entertainment and cajolery that brings you little real knowledge. You take a −10 penalty on all bardic knowledge checks, except when the relevant knowledge involves the Perform skill in which you have the most ranks.",
    source: SRC98,
  }),
  F({
    id: "loudmouth",
    name: "Loudmouth",
    summary: "You take a −4 penalty on all Diplomacy and Move Silently checks.",
    description: "You have a very loud and bombastic manner of speaking. You take a −4 penalty on all Diplomacy and Move Silently checks.",
    source: SRC98,
  }),
  F({
    id: "meticulous-performer",
    name: "Meticulous Performer",
    prerequisite: "Bardic music.",
    summary: "Initiating or maintaining any bardic music ability is a full-round action for you.",
    description: "You execute every performance with extreme care and attention to detail. Initiating or maintaining any bardic music ability is a full-round action for you.",
    source: SRC98,
  }),
  F({
    id: "trivial-performer",
    name: "Trivial Performer",
    prerequisite: "Bardic music.",
    summary: "Save DCs against your fascinate, suggestion, and mass suggestion are half normal, and your inspiration benefits end the moment you stop performing.",
    description: "Your performances are shallow and easily forgotten. The saving throw DC against your fascinate, suggestion, and mass suggestion abilities is half of what it would normally be (rounded down). The benefits of your inspire courage, inspire greatness, and inspire heroics abilities end as soon as you stop performing rather than lasting for 5 additional rounds.",
    source: SRC98,
  }),
];
