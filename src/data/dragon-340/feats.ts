// Dragon Magazine #340 (February 2006) — feat draft: 31 records.
// THREE star feats — "The Stars Are Right" (Hal Maclean), New Feats
// sidebar, p. 26: Startouched / Starborn / Starblessed, the feat chain
// that unlocks the twelve signs' Optimal Career, Lucky Action, and
// Birthstone benefits staged as traits in traits-draft.ts.
// SIX sun feats — "The Eternal Light: The Sun and Its Role in D&D"
// (Chris Tulach), p. 48: three [Birth] feats and their three 6th-level
// follow-ons.
// FIVE moon [Birth] feats — "Eye of the Night: The Moon and Its Role in
// D&D" (Craig Campbell), pp. 56-57, one per moon phase.
// TEN opportunist feats — Class Acts, pp. 86-87: eight new [General]
// feats for attack-of-opportunity builds, plus the sidebar's updated
// Improved Combat Reflexes and Greater Combat Reflexes (originally from
// the "Knights of the Lich Queen" mini-game in Polyhedron #59 /
// Dungeon #100; the issue presents the update, staged here as printed).
// SEVEN harbinger feats — "Ecology of the Mooncalf" (Owen K.C.
// Stephens), pp. 62-63: monster feats for a mooncalf advanced to 28 HD
// (a "moonlord"), staged race-specific with the shared harbinger
// framework restated in each record.
// Every feat text was verified against rendered page images (magazine
// pp. 26, 48, 56-57, 62-63, 87); the image governs over the OCR stream.

import type { FeatDefinition } from "@/engine/types";

const SRC_STARS = "Dragon Magazine #340 — The Stars Are Right (Hal Maclean), p. 26";
const SRC_SUN = "Dragon Magazine #340 — The Eternal Light: The Sun and Its Role in D&D (Chris Tulach), p. 48";
const SRC_MOON = "Dragon Magazine #340 — Eye of the Night: The Moon and Its Role in D&D (Craig Campbell), pp. 56-57";
const SRC_OPP = "Dragon Magazine #340 — Class Acts: Feats for Opportunists, pp. 86-87";
const SRC_ECO = "Dragon Magazine #340 — Ecology of the Mooncalf (Owen K.C. Stephens), pp. 62-63";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_STARS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const BIRTH_SPECIAL =
  "Special: You may only take this feat at 1st level. If you take this feat, you cannot take any other birth feat.";

const HARBINGER_FRAME =
  " Harbinger feats are supernatural abilities and require an hour to use, creating an aura centered on the moonlord that lasts for 24 hours; a moonlord can use only one harbinger feat per week. Characters within an affected area may make a DC 25 Knowledge (arcana) check to realize that the omens they are seeing point toward a single, magical source for the ill fortune befalling the area.";

export const DRAGON_340_FEATS: FeatDefinition[] = [
  // ---- The Stars Are Right: star feats (3) ----
  F({
    id: "startouched",
    name: "Startouched",
    prerequisites: ["Born under the appropriate astrological sign"],
    benefitSummary:
      "[General.] Your destiny is intertwined with your astrological sign, giving you an innate talent for certain tasks. Prerequisite: Born under the appropriate astrological sign. Benefit: You gain the +2 bonus on skill checks involving your sign's optimal career (see the star sign traits in this issue). Special: This feat also allows you to use and create star forged items of your astrological sign. You may only take this feat at 1st level; you must choose the sign of your birth when you take it, and once chosen your astrological sign cannot be changed.",
  }),
  F({
    id: "starborn",
    name: "Starborn",
    prerequisites: ["Startouched"],
    benefitSummary:
      "[General.] The personality and temperament of your sign exerts an even greater influence upon your destiny, endowing you with spectacular luck when performing certain actions. Prerequisite: Startouched. Benefit: You gain the +2 bonus whenever you perform the lucky action of your sign (see the star sign traits in this issue). Further, you may reroll a skill check involving your lucky action once per day. You must decide whether or not to use this ability before the DM declares whether the roll results in success or failure. You must take the result of the reroll, even if it's worse than the original roll.",
  }),
  F({
    id: "starblessed",
    name: "Starblessed",
    prerequisites: ["Starborn", "Startouched"],
    benefitSummary:
      "[General.] Your connection with your sign reaches deep within the very fabric of your soul, giving you the protective powers of your birthstone. Prerequisites: Starborn, Startouched. Benefit: You benefit from your birthstone's special defensive properties whenever you carry a gemstone of the appropriate type worth 100 gp or more (see the star sign traits in this issue). You may also use the reroll ability of the Starborn feat one additional time each day.",
  }),
  // ---- The Eternal Light: sun birth feats and follow-ons (6) ----
  F({
    id: "born-under-a-rising-sun",
    name: "Born Under a Rising Sun",
    source: SRC_SUN,
    benefitSummary:
      "[Birth.] You were born at the moment of sunrise. Benefit: You gain a +1 bonus on Heal checks and a +1 bonus on Will saves. You gain an additional +1 bonus on Will saves made to resist fear effects (for a total of +2). " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-a-high-sun",
    name: "Born Under a High Sun",
    source: SRC_SUN,
    benefitSummary:
      "[Birth.] You were born at high noon, when the sun rides at its zenith. Benefit: You gain a +1 bonus on Intimidate checks and a +1 bonus on Fortitude saves. You gain an additional +1 bonus on Fortitude saves made to resist fire effects (for a total of +2). " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-a-setting-sun",
    name: "Born Under a Setting Sun",
    source: SRC_SUN,
    benefitSummary:
      "[Birth.] You were born at the moment of sunset, as the sun dips beneath the horizon. Benefit: You gain a +1 bonus on any two Knowledge skills of your choice. In addition, Concentration is always a class skill for you. " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "secrets-of-dusk",
    name: "Secrets of Dusk",
    source: SRC_SUN,
    prerequisites: ["Born Under a Setting Sun", "Skill Focus (any one Knowledge skill)", "Character level 6th"],
    benefitSummary:
      "[General.] Prerequisites: Born Under a Setting Sun, Skill Focus (any one Knowledge skill), character level 6th. Benefit: You may take 10 on Concentration checks at any time. In addition, once per day you may take 20 on a Knowledge check; you must possess the Skill Focus feat for that particular Knowledge skill.",
  }),
  F({
    id: "spirit-of-dawn",
    name: "Spirit of Dawn",
    source: SRC_SUN,
    prerequisites: ["Diplomacy 2 ranks", "Born Under a Rising Sun", "Character level 6th"],
    benefitSummary:
      "[General.] Prerequisites: Diplomacy 2 ranks, Born Under a Rising Sun, character level 6th. Benefit: Your bonus on Will saves made to resist fear effects increases to +4. In addition, once per day as a swift action you can shout so that all allies who can hear and understand you (including yourself) gain a +2 morale bonus on Will saves for a number of rounds equal to your Charisma modifier (minimum 1 round).",
  }),
  F({
    id: "vengeance-of-noon",
    name: "Vengeance of Noon",
    source: SRC_SUN,
    prerequisites: ["Born Under a High Sun", "Power Attack", "Character level 6th"],
    benefitSummary:
      "[General.] Prerequisites: Born Under a High Sun, Power Attack, character level 6th. Benefit: Your bonus on Fortitude saves made to resist fire effects increases to +4. In addition, once per day as a swift action you can cause one weapon you hold to gain the flaming special ability for a number of rounds equal to your Charisma modifier (minimum 1 round). If the weapon is a projectile weapon, it bestows the property upon its ammunition.",
  }),
  // ---- Eye of the Night: moon birth feats (5) ----
  F({
    id: "born-under-the-new-moon",
    name: "Born Under the New Moon",
    source: SRC_MOON,
    benefitSummary:
      "[Birth.] You were born under the new moon; the invisible moon allows you to more easily hide your actions and your true form from others. Benefit: You gain a +1 bonus on Hide and Sleight of Hand checks and, once per day, you can use disguise self as a spell-like ability. Your caster level for this spell-like ability is your character level. " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-the-crescent-moon",
    name: "Born Under the Crescent Moon",
    source: SRC_MOON,
    benefitSummary:
      "[Birth.] You were born under the crescent moon; the seer moon allows you to more easily see and understand others and their emotional states. Benefit: You gain a +1 bonus on Sense Motive and Spot checks and, once per day, you can use detect thoughts as a spell-like ability. Your caster level for this spell-like ability is your character level. A saving throw against this spell-like ability has a DC of 10 + 1/2 your character level + your Charisma modifier. " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-the-half-moon",
    name: "Born Under the Half Moon",
    source: SRC_MOON,
    benefitSummary:
      "[Birth.] You were born under the half moon; the balanced moon allows you to more easily balance your body and mind and avoid conflict. Benefit: You gain a +1 bonus on Balance and Concentration checks and, once per day, you can use expeditious retreat as a spell-like ability. Your caster level for this spell-like ability is your character level. " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-the-gibbous-moon",
    name: "Born Under the Gibbous Moon",
    source: SRC_MOON,
    benefitSummary:
      "[Birth.] You were born under the gibbous moon, the emotional moon. Benefit: You gain a +1 bonus on Bluff and Gather Information checks and, once per day, you can use calm animals as a spell-like ability. Your caster level for this spell-like ability is your character level. A saving throw against this spell-like ability has a DC of 10 + 1/2 your character level + your Charisma modifier. " +
      BIRTH_SPECIAL,
  }),
  F({
    id: "born-under-the-full-moon",
    name: "Born Under the Full Moon",
    source: SRC_MOON,
    benefitSummary:
      "[Birth.] You were born under the full moon, the empowered moon. Benefit: You gain a +1 bonus on Intimidate and Use Magic Device checks and, once per day, you can use command as a spell-like ability. Your caster level for this spell-like ability is your character level. A saving throw against this spell-like ability has a DC of 10 + 1/2 your character level + your Charisma modifier. " +
      BIRTH_SPECIAL,
  }),
  // ---- Class Acts: feats for opportunists (10) ----
  F({
    id: "backstab",
    name: "Backstab",
    source: SRC_OPP,
    prerequisites: ["Combat Reflexes"],
    benefitSummary:
      "[General.] You can strike quickly when your opponent's back is turned. Prerequisite: Combat Reflexes. Benefit: Once per round, you may make an attack of opportunity against an opponent you flank who attacks a target other than you. Special: A fighter may select Backstab as one of his fighter bonus feats.",
  }),
  F({
    id: "canny-opportunist",
    name: "Canny Opportunist",
    source: SRC_OPP,
    prerequisites: ["Dex 13", "Int 13", "Combat Expertise"],
    benefitSummary:
      "[General.] You have studied many special combat maneuvers to recognize them and react quickly to your opponent's tactics. Prerequisites: Dex 13, Int 13, Combat Expertise. Benefit: You may make an attack of opportunity whenever an opponent you threaten draws a weapon, readies or looses a shield, or attempts to feint in combat. You may make attacks of opportunity even when flat-footed. Special: A fighter may select Canny Opportunist as one of his fighter bonus feats.",
  }),
  F({
    id: "defensive-opportunist",
    name: "Defensive Opportunist",
    source: SRC_OPP,
    prerequisites: ["Int 13", "Tumble 5 ranks", "Combat Expertise"],
    benefitSummary:
      "[General.] You patiently parry and avoid your opponent's blows while waiting for just the right opening. Prerequisites: Int 13, Tumble 5 ranks, Combat Expertise. Benefit: The penalty on attack rolls imposed by fighting defensively does not apply to any attacks of opportunity you make. Special: A fighter may select Defensive Opportunist as one of his fighter bonus feats.",
  }),
  F({
    id: "exploit-adjustment",
    name: "Exploit Adjustment",
    source: SRC_OPP,
    prerequisites: ["Int 13", "Canny Opportunist", "Combat Expertise"],
    benefitSummary:
      "[General.] Your skill at finding and exploiting opportunities is such that you can find openings in even the smallest movements. Prerequisites: Int 13, Canny Opportunist, Combat Expertise. Benefit: You may make an attack of opportunity against any opponent who moves from one square adjacent to you to another square adjacent to you. Normal: Taking a 5-foot step does not provoke attacks of opportunity. Special: A fighter may select Exploit Adjustment as one of his fighter bonus feats.",
  }),
  F({
    id: "occult-opportunist",
    name: "Occult Opportunist",
    source: SRC_OPP,
    prerequisites: ["Knowledge (arcana) 5 ranks", "Spellcraft 5 ranks"],
    benefitSummary:
      "[General.] Your knowledge of the supernatural allows you to exploit most attempts to manipulate magical energies. Prerequisites: Knowledge (arcana) 5 ranks, Spellcraft 5 ranks. Benefit: You may make an attack of opportunity against an opponent you threaten who dismisses a spell, directs or redirects an active spell, casts a quickened or swift spell, or attempts to turn or rebuke undead. If your attack is successful, your opponent must make a Concentration check (DC 10 + damage dealt) or lose the action that provoked the attack of opportunity.",
  }),
  F({
    id: "opportunistic-tactician",
    name: "Opportunistic Tactician",
    source: SRC_OPP,
    prerequisites: ["Combat Reflexes", "Dodge", "Mobility"],
    benefitSummary:
      "[General.] You are able to use your opponent's missteps to reposition yourself to your advantage. Prerequisites: Combat Reflexes, Dodge, Mobility. Benefit: You may make a free 5-foot step after making an attack of opportunity (as long as you can actually make a 5-foot step). Special: A fighter may select Opportunistic Tactician as one of his fighter bonus feats.",
  }),
  F({
    id: "sneak-attack-of-opportunity",
    name: "Sneak Attack of Opportunity",
    source: SRC_OPP,
    prerequisites: ["Combat Reflexes", "Sneak attack +3d6"],
    benefitSummary:
      "[General.] When your opponent leaves you an opening, you can strike with deadly accuracy. Prerequisites: Combat Reflexes, sneak attack +3d6. Benefit: When you make a successful attack of opportunity against an opponent, you also deal sneak attack damage to that opponent. This extra damage only applies to the first attack of opportunity you make in a round.",
  }),
  F({
    id: "two-weapon-attack-of-opportunity",
    name: "Two-Weapon Attack of Opportunity",
    source: SRC_OPP,
    prerequisites: ["Dex 17", "Combat Reflexes", "Two-Weapon Fighting"],
    benefitSummary:
      "[General.] You can exploit an opponent's opening in combat with two weapons. Prerequisites: Dex 17, Combat Reflexes, Two-Weapon Fighting. Benefit: If you are wielding two weapons and you make an attack of opportunity, you may make a single melee attack with both weapons. You still suffer the normal penalties for two-weapon fighting. You still cannot exceed your normal maximum number of attacks of opportunity in a round. Using this feat requires two such attacks. Normal: You may only attack with a single weapon as an attack of opportunity. Special: A fighter may select Two-Weapon Attack of Opportunity as one of his fighter bonus feats.",
  }),
  F({
    id: "improved-combat-reflexes",
    name: "Improved Combat Reflexes",
    source: SRC_OPP,
    prerequisites: ["Dex 13", "Combat Reflexes", "Base attack bonus +6"],
    benefitSummary:
      "[General.] You react to any drop in your opponents' guard with lightning speed. Prerequisites: Dex 13, Combat Reflexes, base attack bonus +6. Benefit: For any given opportunity in melee combat, you can make two attacks of opportunity. The second attack is at a -5 penalty, just like your second normal attack in any given round. You still cannot exceed your normal maximum number of attacks of opportunity in a round. (Updated in this issue from the feat of the same name in the \"Knights of the Lich Queen\" mini-game, Polyhedron #59 / Dungeon #100.)",
  }),
  F({
    id: "greater-combat-reflexes",
    name: "Greater Combat Reflexes",
    source: SRC_OPP,
    prerequisites: ["Dex 15", "Combat Reflexes", "Improved Combat Reflexes", "Base attack bonus +11"],
    benefitSummary:
      "[General.] You react to any drop in your opponents' guard with blinding speed. Prerequisites: Dex 15, Combat Reflexes, Improved Combat Reflexes, base attack bonus +11. Benefit: For any given opportunity in melee combat, you can make three attacks of opportunity. The second attack is at a -5 penalty, just like your second normal attack in any given round. The third attack is at a -10 penalty, just like your third normal attack in any given round. You still cannot exceed your normal maximum number of attacks of opportunity in a round. (Updated in this issue from the feat of the same name in the \"Knights of the Lich Queen\" mini-game, Polyhedron #59 / Dungeon #100.)",
  }),
  // ---- Ecology of the Mooncalf: harbinger feats (7) ----
  F({
    id: "mixed-omens",
    name: "Mixed Omens",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Any three harbinger feats", "Mooncalf 28 HD"],
    benefitSummary:
      "Multiple bad signs appear throughout the land. Prerequisites: Any three harbinger feats, mooncalf 28 HD. Benefit: A mooncalf with Mixed Omens can use two different harbinger feats in one week. The feats may be used concurrently. Normal: A mooncalf can only use one harbinger feat a week." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-bones",
    name: "Omen of Bones",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "A faint breath of rot pervades the land; ghostly glimpses, distorted reflections, and eerie mirages haunt an area under an Omen of Bones. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with this feat taints the region in an aura of death. All undead within a 50-mile radius gain turn resistance +2. This stacks with any turn resistance the creature might already possess." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-crows",
    name: "Omen of Crows",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "The land seems dark, as though it were but one vast graveyard; an area under an Omen of Crows is often infested with crows or similar scavenging birds. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with Omen of Crows can create an aura that dampens healing magic. Within a 50-mile radius, all cure spells heal one less hit point of damage per casting." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-flies",
    name: "Omen of Flies",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "Pestilence spreads through the land; an area under an Omen of Flies is often infested with flies, maggots, and other insectile vermin. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with Omen of Flies can create an aura that strengthens diseases of all kinds. Within a 50-mile radius, all saving throws against disease take a -2 penalty." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-loss",
    name: "Omen of Loss",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "Memories become lost and history fades away; a thick mist and haunting lights settle over a land afflicted by an Omen of Loss. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with Omen of Loss can create an aura of forgetfulness. All creatures within a 50-mile radius take a -2 penalty on all bardic knowledge rolls and Knowledge skill checks." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-snakes",
    name: "Omen of Snakes",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "Poison becomes more virulent; an area under an Omen of Snakes is often infested with snakes. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with Omen of Snakes can create an aura that strengthens poisons and venoms of all kinds. Within a 50-mile radius, all saving throws against poison take a -2 penalty." +
      HARBINGER_FRAME,
  }),
  F({
    id: "omen-of-storms",
    name: "Omen of Storms",
    source: SRC_ECO,
    category: "race-specific",
    prerequisites: ["Mooncalf 28 HD"],
    benefitSummary:
      "A feeling of dread settles over the land, and an area under an Omen of Storms has cloudy, stormy weather. Prerequisite: Mooncalf 28 HD. Benefit: A mooncalf with Omen of Storms can create an aura that spreads fear and unease. Within a 50-mile radius, all creatures with an Intelligence score of 3 or lower must make a DC 15 Will save or be shaken for the whole day." +
      HARBINGER_FRAME,
  }),
];
