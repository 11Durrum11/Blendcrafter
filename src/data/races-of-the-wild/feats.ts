/**
 * Races of the Wild feat data pack: all thirty-one feats of
 * Chapter 6 of Races of the Wild (Wizards of the Coast), as
 * listed in Table 6–1: Feats (pp. 148–149). Built 2026-10-27
 * from the copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of the Wild.pdf
 *
 * Prerequisites and benefit summaries are the feat table's own,
 * condensed in house style; where the table itself says "See
 * feat description" (the four tactical feats), the benefit
 * summary says so rather than inventing one. Race-gated feats
 * are "race-specific"; the tactical feats are "combat" with the
 * book's grouping named in the special field.
 *
 * Note: this PDF is a two-page-spread scan; page citations are
 * the book's printed folios.
 */
import type { FeatDefinition } from "@/engine/types";

const ROTW = "Races of the Wild";
const ROTW_PATH = "/A POC PC related/5.Splat/Races of series/Races of the Wild.pdf";
const T61 = `${ROTW} — Chapter 6: Character Options, Table 6–1: Feats (pp. 148–149)`;

export const RACES_OF_THE_WILD_FEATS: FeatDefinition[] = [
  // ---- General feats ----
  { id: "able-sniper", name: "Able Sniper", category: "combat", ruleset: "core", prerequisites: ["Dex 13", "Hide 5 ranks"], benefitSummary: "+2 bonus on ranged attack rolls against flat-footed targets at least 30 feet away, and a +4 bonus on Hide checks made to hide again after a sniping attack.", source: T61, sourceUrl: ROTW_PATH },
  { id: "aerial-reflexes", name: "Aerial Reflexes", category: "general", ruleset: "core", prerequisites: [], benefitSummary: "While flying, gain a bonus on Reflex saves based on your maneuverability: clumsy +0, poor +1, average +2, good +3, perfect +4.", source: T61, sourceUrl: ROTW_PATH },
  { id: "aerial-superiority", name: "Aerial Superiority", category: "combat", ruleset: "core", prerequisites: [], benefitSummary: "While flying, gain a +1 dodge bonus to Armor Class against opponents who cannot fly or who have a lower maneuverability than you.", source: T61, sourceUrl: ROTW_PATH },
  { id: "agile-athlete", name: "Agile Athlete", category: "general", ruleset: "core", prerequisites: ["Climb 1 rank", "Jump 1 rank"], benefitSummary: "When making a Climb or Jump check, use your Dexterity modifier in place of your Strength modifier.", source: T61, sourceUrl: ROTW_PATH },
  { id: "battle-casting", name: "Battle Casting", category: "general", ruleset: "core", prerequisites: ["Dex 13", "Concentration 5 ranks", "Combat Casting"], benefitSummary: "While casting a spell, gain a +2 dodge bonus to Armor Class until the beginning of your next turn; you cannot make attacks of opportunity while claiming this bonus.", source: T61, sourceUrl: ROTW_PATH },
  { id: "born-flyer", name: "Born Flyer", category: "general", ruleset: "core", prerequisites: ["Dex 13"], benefitSummary: "+4 competence bonus on saves and checks made to maneuver in the air or stay aloft. If you have no natural fly speed, this feat lets you take feats that require one.", source: T61, sourceUrl: ROTW_PATH },
  { id: "catfolk-pounce", name: "Catfolk Pounce", category: "race-specific", ruleset: "core", prerequisites: ["Catfolk", "Dex 13"], benefitSummary: "If you charge a flat-footed opponent, you can make a full attack at the end of the charge.", special: "A catfolk fighter may select Catfolk Pounce as a bonus feat.", source: T61, sourceUrl: ROTW_PATH },
  { id: "centaur-trample", name: "Centaur Trample", category: "race-specific", ruleset: "core", prerequisites: ["Centaur", "Dex 15"], benefitSummary: "When you overrun an opponent, the target may not choose to avoid you, and you may make one hoof attack against any target you knock down.", special: "A centaur fighter may select Centaur Trample as a bonus feat.", source: T61, sourceUrl: ROTW_PATH },
  { id: "coordinated-strike", name: "Coordinated Strike", category: "general", ruleset: "core", prerequisites: ["Animal companion or special mount class feature", "Handle Animal 5 ranks"], benefitSummary: "During any round in which your animal companion or special mount makes a melee attack against a target, you gain a +1 bonus on attacks against the same target.", source: T61, sourceUrl: ROTW_PATH },
  { id: "dallah-thauns-luck", name: "Dallah Thaun's Luck", category: "race-specific", ruleset: "core", prerequisites: ["Halfling", "Cha 13"], benefitSummary: "Once per day, gain a +5 luck bonus on a single saving throw; if you use this ability, you take a –2 penalty on all other saving throws until sunrise the next morning.", source: T61, sourceUrl: ROTW_PATH },
  { id: "defensive-archery", name: "Defensive Archery", category: "combat", ruleset: "core", prerequisites: ["Point Blank Shot"], benefitSummary: "+4 dodge bonus to Armor Class against attacks of opportunity.", source: T61, sourceUrl: ROTW_PATH },
  { id: "diving-charge", name: "Diving Charge", category: "combat", ruleset: "core", prerequisites: [], benefitSummary: "Gain extra damage when diving to attack while flying.", source: T61, sourceUrl: ROTW_PATH },
  { id: "elf-dilettante", name: "Elf Dilettante", category: "race-specific", ruleset: "core", prerequisites: ["Elf", "Int 13"], benefitSummary: "+1 bonus on all untrained skill checks.", source: T61, sourceUrl: ROTW_PATH },
  { id: "expeditious-dodge", name: "Expeditious Dodge", category: "combat", ruleset: "core", prerequisites: ["Dex 13"], benefitSummary: "Gain a +2 dodge bonus to Armor Class in any round in which you move at least 40 feet.", source: T61, sourceUrl: ROTW_PATH },
  { id: "flick-of-the-wrist", name: "Flick of the Wrist", category: "combat", ruleset: "core", prerequisites: ["Dex 17", "Sleight of Hand 5 ranks", "Quick Draw"], benefitSummary: "Catch your opponent flat-footed by drawing your weapon and attacking in the same round.", source: T61, sourceUrl: ROTW_PATH },
  { id: "focused-mind", name: "Focused Mind", category: "race-specific", ruleset: "core", prerequisites: ["Elf", "Concentration 2 ranks"], benefitSummary: "+2 bonus when taking 10 or taking 20 on Intelligence checks.", source: T61, sourceUrl: ROTW_PATH },
  { id: "gnoll-ferocity", name: "Gnoll Ferocity", category: "race-specific", ruleset: "core", prerequisites: ["Gnoll", "rage or frenzy ability"], benefitSummary: "Gain a bite attack that deals 1d6 points of damage.", source: T61, sourceUrl: ROTW_PATH },
  { id: "improved-flight", name: "Improved Flight", category: "general", ruleset: "core", prerequisites: ["Natural fly speed"], benefitSummary: "Your maneuverability class improves by one category.", source: T61, sourceUrl: ROTW_PATH },
  { id: "killoren-ancient", name: "Killoren Ancient", category: "race-specific", ruleset: "core", prerequisites: ["Killoren"], benefitSummary: "+4 insight bonus on Knowledge checks.", source: T61, sourceUrl: ROTW_PATH },
  { id: "killoren-destroyer", name: "Killoren Destroyer", category: "race-specific", ruleset: "core", prerequisites: ["Killoren"], benefitSummary: "Daze foes with your killoren smite attack.", source: T61, sourceUrl: ROTW_PATH },
  { id: "killoren-hunter", name: "Killoren Hunter", category: "race-specific", ruleset: "core", prerequisites: ["Killoren"], benefitSummary: "Pinpoint the location of living creatures.", source: T61, sourceUrl: ROTW_PATH },
  { id: "lightfeet", name: "Lightfeet", category: "race-specific", ruleset: "core", prerequisites: ["Elf", "Dex 13", "Balance 2 ranks", "Move Silently 2 ranks"], benefitSummary: "Move quietly, leaving behind few traces.", source: T61, sourceUrl: ROTW_PATH },
  { id: "magic-of-the-land", name: "Magic of the Land", category: "general", ruleset: "core", prerequisites: ["Ability to cast 1st-level spells", "Concentration 5 ranks", "Knowledge (nature) 5 ranks", "Spellcraft 5 ranks"], benefitSummary: "Draw on nature's power to infuse your spells with positive energy, curing 2 points of damage per spell level.", source: T61, sourceUrl: ROTW_PATH },
  { id: "plunging-shot", name: "Plunging Shot", category: "combat", ruleset: "core", prerequisites: ["Dex 13", "Point Blank Shot"], benefitSummary: "Deal an additional 1d6 points of damage against targets at least 30 feet below you.", source: T61, sourceUrl: ROTW_PATH },
  { id: "shared-fury", name: "Shared Fury", category: "general", ruleset: "core", prerequisites: ["Animal companion class feature", "rage class feature", "Handle Animal 4 ranks"], benefitSummary: "Your animal companion rages with you.", source: T61, sourceUrl: ROTW_PATH },
  { id: "underfoot-combat", name: "Underfoot Combat", category: "combat", ruleset: "core", prerequisites: ["Small or smaller", "Tumble 10 ranks"], benefitSummary: "Occupy the same square as a Large or larger creature, gaining a +4 bonus to Armor Class.", source: T61, sourceUrl: ROTW_PATH },
  { id: "yondallas-sense", name: "Yondalla's Sense", category: "race-specific", ruleset: "core", prerequisites: ["Halfling"], benefitSummary: "Add your Wisdom bonus on initiative checks.", source: T61, sourceUrl: ROTW_PATH },

  // ---- Tactical feats (benefit column of Table 6–1 reads "See feat description") ----
  { id: "confound-the-big-folk", name: "Confound the Big Folk", category: "combat", ruleset: "core", prerequisites: ["Small or smaller", "Tumble 10 ranks", "Underfoot Combat"], benefitSummary: "See the feat description (Table 6–1 gives no summary benefit for tactical feats).", special: "Tactical feat.", source: T61, sourceUrl: ROTW_PATH },
  { id: "winged-warrior", name: "Winged Warrior", category: "combat", ruleset: "core", prerequisites: ["Hover", "must have wings", "base attack bonus +4"], benefitSummary: "See the feat description (Table 6–1 gives no summary benefit for tactical feats).", special: "Tactical feat.", source: T61, sourceUrl: ROTW_PATH },
  { id: "wolfpack", name: "Wolfpack", category: "combat", ruleset: "core", prerequisites: ["Dex 15", "Dodge", "Mobility", "Spring Attack", "base attack bonus +6"], benefitSummary: "See the feat description (Table 6–1 gives no summary benefit for tactical feats).", special: "Tactical feat.", source: T61, sourceUrl: ROTW_PATH },
  { id: "woodland-archer", name: "Woodland Archer", category: "combat", ruleset: "core", prerequisites: ["Point Blank Shot", "base attack bonus +6"], benefitSummary: "See the feat description (Table 6–1 gives no summary benefit for tactical feats).", special: "Tactical feat.", source: T61, sourceUrl: ROTW_PATH },
];
