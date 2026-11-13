/**
 * Homebrew Doc #3 pack: Shaun's house document "3. PILLS,
 * POTIONS, OILS, SALVES & INJECTIONS" (uploaded 2026-11-04 as
 * workspace/user/files/3._PILLS__POTIONS__OILS__SALVES___INJECTIONS.docx),
 * meshed into the catalog 2026-11-04 at his direction ("Mesh this
 * in"). NOT yet wired into src/data/index.ts — the parent wires
 * PILLS_POTIONS_FEATS / PILLS_POTIONS_TABLES /
 * PILLS_POTIONS_HOUSE_RULES into ALL_FEATS / ALL_RANDOM_TABLES /
 * ALL_HOUSE_RULES_INDEX.
 *
 * Contents:
 * - Three Homebrew item-creation feats: Shaun's replacement
 *   Brew Potion or Oil (caster level 1st, replacing the SRD
 *   Brew Potion feat — the SRD record keeps its own id and is
 *   untouched), Improved Brew Potion or Oil (all costs halved),
 *   and Greater Brew Potion or Oil (spells up to 5th level).
 *   Full benefit text from the document.
 * - The Potion Miscibility tables 1A and 1B, with the document's
 *   "Understanding the Table" rules and Throwing Potions rules
 *   carried as rules entries on Table 1A, and every Table 1B
 *   outcome's internal/external effect text in full. One
 *   transcription fix: the document prints Greasy Skin as
 *   89-94, overlapping Mute's 84-89 at 89; it is recorded here
 *   as 90-94.
 * - Table III: Bottles' Contents (Color / Description / Smell).
 * - Two house-rules index entries: magical vs alchemical potion
 *   timing (the document's headline rule) and potion mixing.
 *
 * Deliberately NOT converted to records (essay/campaign
 * philosophy, living in the document): the introduction and
 * "Potions, Oils, and the Campaign" argument for potion-centric
 * campaigns, the physical description of potion vials, the
 * Potion Awareness section (its consequence — accidental mixing
 * — is covered by the mixing house rule), the mixing-scenarios
 * list for villains, the note that a further feat beyond
 * Greater could open still higher spell levels, the Potion Bar
 * item text (already in the catalog as an equipment record),
 * and the document's Brew Injection feat text (Sorcery &
 * Steam's Brew Injection feat is already in the catalog; see
 * the comparison in the build report).
 */
import type { FeatDefinition, RandomTableDefinition } from "@/engine/types";
import type { HouseRuleEntry } from "./house-rules-index";

const DOC3 = "Pills, Potions, Oils, Salves & Injections — house document (Doc #3)";
const DOC3_URL = "workspace/user/files/3._PILLS__POTIONS__OILS__SALVES___INJECTIONS.docx";

export const PILLS_POTIONS_FEATS: FeatDefinition[] = [
  {
    id: "brew-potion-or-oil-house",
    name: "Brew Potion or Oil",
    category: "item-creation",
    prerequisites: ["Caster level 1st"],
    benefitSummary:
      "You can create a potion or oil of any spell of 3rd level or lower that you know and that targets one or more creatures. Brewing a potion or oil takes one day for each 1,000 gp in its base price. When you create a potion or oil, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. The base price of a potion or oil is its spell level × its caster level × 50 gp. To brew a potion or oil, you must spend 1/25 of this base price in XP and use up raw materials costing one-half this base price. When you create a potion or oil, you make any choices that you would normally make when casting the spell. Whoever imbibes or applies the potion or oil is the target of the spell. Any potion or oil that stores a spell with a costly material component or an XP cost also carries a commensurate cost: in addition to the costs derived from the base price, you must expend the material component or pay the XP when creating the potion or oil. A 1st-level wizard can choose whether he or she wants Brew Potion or Scribe Scroll as the 1st-level bonus feat.",
    modifiers: [],
    source: DOC3,
    sourceUrl: DOC3_URL,
    ruleset: "homebrew",
    special:
      "The replacement version of the Brew Potion feat (\"Instead of the original version\") — essentially a fusion of the Brew Potion feat with the Scribe Scroll feat, so a beginning spellcaster can brew potions even at 1st level and have them available for his fellow adventurers.",
  },
  {
    id: "improved-brew-potion-or-oil-house",
    name: "Improved Brew Potion or Oil",
    category: "item-creation",
    prerequisites: ["Brew Potion", "Caster level 5th", "Craft (alchemy) 5 ranks"],
    benefitSummary:
      "As Brew Potion, except that all costs are halved. When you create a potion using this feat, the base price of the potion you create is its spell level × its caster level × 25 gp.",
    modifiers: [],
    source: DOC3,
    sourceUrl: DOC3_URL,
    ruleset: "homebrew",
    special:
      "The document lists the prerequisite feat as \"Brew Potion.\" The Craft (alchemy) requirement ensures the spellcaster has invested heavily in the skill — sacrificing skill points for improvement in the art.",
  },
  {
    id: "greater-brew-potion-or-oil-house",
    name: "Greater Brew Potion or Oil",
    category: "item-creation",
    prerequisites: ["Brew Potion or Oil", "Improved Brew Potion or Oil", "Caster level 9th", "Craft (alchemy) 7 ranks"],
    benefitSummary:
      "As Brew Potion or Oil, except that spells of up to 5th level or lower that you know and that target one or more creatures can be used. The cost for using spells of up to 3rd level is determined as with the Improved Brew Potion or Oil feat (spell level × caster level × 25 gp), but spells of 4th or 5th level cost the same as with the Brew Potion or Oil feat (spell level × caster level × 50 gp).",
    modifiers: [],
    source: DOC3,
    sourceUrl: DOC3_URL,
    ruleset: "homebrew",
  },
];

export const PILLS_POTIONS_TABLES: RandomTableDefinition[] = [
  {
    id: "potion-miscibility-1a-house",
    name: "Potion Miscibility — Table 1A",
    ruleset: "homebrew",
    die: "d100",
    source: DOC3,
    sourceUrl: DOC3_URL,
    entries: [
      { roll: "01-50", title: "Both Potions Work", effect: "Internal: Both potions function normally without problems. External: No effect — roll again." },
      { roll: "51-60", title: "One Potion Has Primacy", effect: "Internal: One of the two potions overrides the other — either the potion already active continues to work normally while the second potion has no effect and is wasted, or the second potion works normally with the potion that was already active immediately ceasing to have an effect. External: No effect — roll again." },
      { roll: "61-70", title: "Duration Doubled", effect: "Internal: One of the potions involved has its duration doubled while the other is cancelled — either the active potion has its duration doubled while the second potion has no effect and is wasted, or the second potion takes immediate effect and has its duration doubled while the active potion is immediately cancelled. If the second potion has an instantaneous duration, such as a cure potion, its variable component is maximized as per the Maximize Spell feat. External: No effect — roll again." },
      { roll: "71-80", title: "Neither Potion Works", effect: "Internal: The active potion is immediately cancelled and the newly imbibed potion has no effect; it is wasted. External: The active potion is immediately cancelled and the newly imbibed potion has no effect; it is wasted." },
      { roll: "81-99", title: "Roll on Table 1B", effect: "Roll on Potion Miscibility — Table 1B for the mixture's effect." },
      { roll: "100", title: "Permanent Effect (for one)", effect: "Internal: One of the potions (selected randomly) becomes a permanent part of the creature's makeup, performing normally and cancelling out the other potion imbibed. Starting 24 hours later, the creature may mentally invoke the effect once per day; the effect acts as if the creature had drunk the potion in terms of caster level and all other aspects, but it is not a potion — it is a permanent spell-like effect (not subject to the rules of potion mixology). External: Area-of-effect effects are permanent." },
      {
        roll: "—",
        title: "Understanding the Table (rules)",
        effect:
          "Roll on Table 1A every time a mixture occurs — whenever two or more potions are mixed together, or a creature imbibes a potion while another is already active within its person. Alternatively, the DM can note which particular mixture produced which effect; that same effect then occurs every time those particular potions are mixed, and such knowledge can be used by PCs and other creatures alike (for example, two potion vials tied together so their fluids mix when they break, as improvised grenades). Each entry has an internal effect (a creature imbibes a second potion while a previous one is still active) and an external effect (potions mixed outside a creature, as in a beaker or through broken vials). Unless otherwise stated: (1) The listed effect takes the place of any effects the potions would have provided — any active potion effects cease immediately; the potions' spell energies power the new effect and are nullified in the process. (2) Any internal effect occurs within, and solely affects, the creature that has imbibed the potions. (3) Any external effect spreads in a spherical radius of 20 feet plus 5 feet per total spell levels of the potions involved, centered on where the mixture occurred. (4) All saving throw DCs against an effect, internal or external, are 10 + total spell levels of the potions mixed. (5) A number of entries have no external effect listed; if an external mixing selects one of these, the DM may either allow the potions to have no effect or re-roll until an external effect is rolled. (6) Any cloud effect obscures vision within the area as a fog cloud spell (all sight including darkvision obscured beyond 5 feet; creatures within 5 feet have concealment, creatures beyond 5 feet have total concealment). (7) Any cloud effect is dispersed by a moderate wind (11+ mph) within 4 rounds; a strong wind (21+ mph) disperses the cloud in 1 round. (8) Cloud effects require a saving throw for every round that a creature is within the area of effect. (9) Spell resistance applies to all of these effects, with the effective caster level of the potions being 1d20 + total spell levels of the potions involved in creating the effect — except that a creature voluntarily or accidentally mixing two potions internally is considered to have voluntarily lowered its spell resistance, so spell resistance does not apply.",
      },
      {
        roll: "—",
        title: "Throwing Potions (rules)",
        effect:
          "Taking two potions and throwing them to the ground is a standard action that provokes an attack of opportunity; it is exactly like drinking a potion except that instead of being imbibed, the potion is thrown. Throwing a potion against an object or into a particular space, but not at a creature, is a ranged touch attack against AC 5. Thrown potion containers have a range increment of 10 feet and break whenever they strike a hard surface such as rock, hard earth, or metal. Potions can be thrown at creatures, but this requires a ranged touch attack against the creature's AC. Because of their small size, and the fact that they do not cause any physical damage, a creature of Small size or larger may throw two potion vials at once by grasping them in one hand. A single attack roll is made and, if it is successful, the two vials break and the liquids mix, causing one of the effects listed in the table. If the attack roll fails, then one or both of the vials fails to break and the containers roll off in a random direction: roll 1d8 for each unbroken vial, with 1 being straight back at you and 2 through 8 counting clockwise around the target; the vials roll 10 feet in that direction and come to a stop.",
      },
    ],
  },
  {
    id: "potion-miscibility-1b-house",
    name: "Potion Miscibility — Table 1B",
    ruleset: "homebrew",
    die: "d100",
    source: DOC3,
    sourceUrl: DOC3_URL,
    entries: [
      { roll: "01-02", title: "Acid Burst", effect: "Internal: The creature suffers 1d8 points of internal acid damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of acid damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "03-04", title: "Cold Burst", effect: "Internal: The creature suffers 1d8 points of internal cold damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of cold damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "05-06", title: "Electric Burst", effect: "Internal: The creature suffers 1d8 points of internal electricity damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of electricity damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "07-08", title: "Fire Burst", effect: "Internal: The creature suffers 1d8 points of internal fire damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of fire damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "09-10", title: "Force Burst", effect: "Internal: The creature suffers 1d8 points of internal force damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of force damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "11-12", title: "Sonic Burst", effect: "Internal: The creature suffers 1d8 points of internal sonic damage for each spell level of potion both active and imbibed; a successful Fortitude save reduces this damage to one-half. External: All creatures within the effect radius take 1d4 points of sonic damage for each spell level of potion involved in the mixture; a successful Reflex save reduces this damage to one-half." },
      { roll: "13-18", title: "Poison", effect: "Internal: The potions combine to make a potent poison — initial damage 3d6 Con and secondary damage 3d6 Con. External: A poison gas cloud pervades the area, remaining for 1 minute per spell level of potions mixed. Any creature within or entering the cloud must succeed at a Fortitude save or take 1d2 points of Constitution damage each round it is within the cloud." },
      { roll: "19-24", title: "Paralysis", effect: "Internal: The creature must succeed at a Fortitude save or be paralyzed for 1 minute per spell level involved. External: A noxious gas cloud pervades the area, remaining for 1 minute per spell level of potions mixed. Any creature within or entering the cloud must succeed at a Fortitude save or be paralyzed for 1d4+1 rounds. Once the paralysis ends, the creature is no longer affected by the cloud and can move about within it normally." },
      { roll: "25-30", title: "Stench", effect: "Internal: Evil fumes emanate from the body of the imbiber. While the imbiber is merely very unpleasant for others to stand next to, the imbiber must succeed at a Fortitude save or be considered nauseated; even if the save is made, the creature is still considered sickened for the duration of the effect. The effect lasts for 1 minute per spell level of potion both active and imbibed. External: Evil fumes pervade the area, forcing all those within, or entering, to succeed at a Fortitude save or become sickened. The cloud remains for 1 minute per spell level of potions mixed. Creatures who are sickened and leave the area of effect remain so for 1d4+1 rounds thereafter." },
      { roll: "31-36", title: "Fatigue", effect: "Internal: The creature must succeed at a Fortitude save or become exhausted; succeeding at the save merely makes the creature fatigued. If the creature was already fatigued and is fatigued again, it is now exhausted. If the creature was already exhausted prior to either effect, its Strength and Dexterity scores immediately drop to 0, effectively rendering the creature helpless. The effect lasts for 1 minute per spell level of potion both active and imbibed. External: A brownish cloud pours sluggishly forth. All creatures that are within or enter the cloud must succeed at a Fortitude save or become fatigued; creatures that are already fatigued become exhausted, and exhausted creatures have their Strength and Dexterity scores reduced to 0 and are effectively helpless. The cloud remains for 1 minute per spell level of potions mixed." },
      { roll: "37-42", title: "Skin Color", effect: "Internal: The creature's skin color changes to a different color, usually a bright neon or cool pastel. There is no saving throw. The creature's skin remains the color for 1 minute per spell level of potion both active and imbibed. DMs may wish to assign a circumstance penalty of no more than -4 to all Hide checks if the color clashes with the surroundings. External: A colorful burst fills the effect area and then is no more. All creatures within the area of effect have their skin color changed to some other color unless they succeed at a Reflex save, in which case they are unaffected. The skin color remains changed for 1 minute per spell level of potions mixed." },
      { roll: "43-48", title: "Glowing Skin", effect: "Internal: The affected creature glows from within. Soft light emanates from every inch of the creature, peeking out through every chink of armor and thin cloth. Unless completely able to be covered from head to toe, the creature suffers a -5 circumstance penalty to any Hide checks, -10 in areas of shadow or darkness. The light remains for 1 minute per spell level of potion both active and imbibed. The glow is not enough to read accurately or see by. External: Beams of brilliant light shoot through the area and then disappear. All creatures that fail a Reflex save are touched by one of the beams of light and are affected as above until the expiration of the effect, after 1 minute per spell level of potions mixed." },
      { roll: "49-54", title: "Confusion", effect: "Internal: The creature is affected as if by a confusion spell (substitute \"attack nearest creature\" for the 01-10 result) for 1 round per spell level of potion both active and imbibed. A successful Will save still leaves the creature shaken for the duration of the effect. External: An unseen but felt wave of confusion washes over the area of effect and then is gone. Creatures within the area must succeed at a Will save or be affected as above. Those who succeed are otherwise unaffected." },
      { roll: "55-59", title: "Eye Lights", effect: "Internal: The creature's eyes are filled with light, effectively rendering it blind for 1 round per spell level of potion both active and imbibed. There is no save against this effect. If the creature's eyes are closed, the light merely glows behind the eyelids and imposes a -2 circumstance penalty to all Hide checks in areas of shadow or darkness. If the creature's eyes are open, the light beams act like a bull's-eye lantern, making it virtually impossible to hide in areas of shadow or darkness (-20 circumstance penalty on all Hide checks). External: No effect — roll again — or as per the glowing skin effect." },
      { roll: "60-65", title: "Petrification", effect: "Internal: The creature is turned to stone unless it succeeds at a Fortitude saving throw. If the save is successful, the creature is affected as if by a slow spell for 1d4 rounds per spell level of potion both active and imbibed. External: A gray cloud hangs about the area. Anyone entering the cloud must succeed at a Fortitude save or be affected as if by a slow spell while they are within the cloud. The cloud remains for 1d4 rounds per spell level of potions mixed. Exiting the cloud removes the slow effect within 1d4 rounds." },
      { roll: "66-71", title: "Hemorrhage", effect: "Internal: Blood begins to pour from the affected creature's mouth, nose, ears, and even eyes. The creature takes 1d8 points of negative energy damage per spell level of potion both active and imbibed, as with an inflict spell. Succeeding at a Fortitude save reduces this damage by one-half. External: A blast of pure darkness shoots through the effect area. All creatures within the effect radius suffer 1d4 points of negative energy damage (as if receiving an inflict spell) per spell level of potions mixed, although they may attempt a Fortitude saving throw to take only half damage." },
      { roll: "72-77", title: "Healing", effect: "Internal: Positive energy courses through the creature, curing up to 1d8 points of previously suffered damage per spell level of potion both active and imbibed. If the subject wishes, it may succeed at a Fortitude save to reduce this curing to one-half. External: A blast of pure light shoots through the area, curing up to 1d4 points of previously suffered damage per spell level of potions mixed. Subjects may resist the influx of positive energy with a successful Fortitude save, which reduces the curing by one-half." },
      { roll: "78-83", title: "Fear", effect: "Internal: The subject suffers abject fear. If the subject fails a Will saving throw, it is panicked for 1 round per spell level of potion both active and imbibed. If the subject succeeds at the Will save, it is still frightened for the effect's duration. External: A wild howling flows through the area and is gone. All creatures within the area of effect become frightened for 1 round per spell level of potions mixed unless they succeed at a Will save, in which case they are considered shaken for the duration of the effect." },
      { roll: "84-89", title: "Mute", effect: "Internal: The creature is rendered mute for 1 minute per spell level of potion both active and imbibed. The creature's vocal capabilities are rendered completely non-functional; it cannot make any sound, not even a grunt. There is no save against this effect. External: The area is under a silence effect that lasts for one minute per spell level of potions mixed." },
      { roll: "90-94", title: "Greasy Skin", effect: "Internal: The creature's pores begin to ooze grease, covering the body and any worn or held items in a thin gray coating. Any items held by the creature at the time of the effect are immediately dropped. Subsequent attempts to grasp or use items require a successful Reflex saving throw. The affected creature does gain a +10 circumstance bonus to all Escape Artist checks and on grapple checks made to resist or escape a grapple or pin. The effect lasts 1 round per spell level of potion active and imbibed. External: The grease spreads out from the mixing area to the maximum radius and is identical in its effects to the grease spell. It lasts for 1 round per spell level of potions mixed." },
      { roll: "95-100", title: "Maniacal Laughter", effect: "Internal: The affected creature begins to laugh uncontrollably unless it succeeds at a Will save. While laughing, the creature cannot take any actions although it is not helpless (it is effectively dazed for the duration). If the save is successful, the creature only snickers or giggles for the duration of the effect and suffers the same adverse effects as if it were sickened. The duration of the effect is 1 round per spell level of potion both active and imbibed. External: A gas cloud shoots into the area and dissipates almost instantly. All those within the area of effect must succeed at a Will save or start to giggle uncontrollably, becoming sickened for 1 round per spell level of potions mixed. Those who succeed at the Will save are unaffected." },
    ],
  },
  {
    id: "bottles-contents-house",
    name: "Bottles' Contents — Table III",
    ruleset: "homebrew",
    die: "d20",
    source: DOC3,
    sourceUrl: DOC3_URL,
    entries: [
      { roll: "1", title: "Black", effect: "Color: Black · Description: Bubbling · Smell: Alcohol" },
      { roll: "2", title: "Blood Red", effect: "Color: Blood Red · Description: Curdled · Smell: Bitter" },
      { roll: "3", title: "Brown", effect: "Color: Brown · Description: Chunky · Smell: Burnt" },
      { roll: "4", title: "Dark Blue", effect: "Color: Dark Blue · Description: Cold · Smell: Coppery" },
      { roll: "5", title: "Dark Green", effect: "Color: Dark Green · Description: Effervescing · Smell: Crisp" },
      { roll: "6", title: "Gold", effect: "Color: Gold · Description: Floating Herbs · Smell: Earthy" },
      { roll: "7", title: "Gray", effect: "Color: Gray · Description: Gel · Smell: Flowery" },
      { roll: "8", title: "Light Blue", effect: "Color: Light Blue · Description: Warm · Smell: Fruity" },
      { roll: "9", title: "Light Purple", effect: "Color: Light Purple · Description: Made of solid fog · Smell: Sweet" },
      { roll: "10", title: "Light Red", effect: "Color: Light Red · Description: Mud-Like · Smell: Minty" },
      { roll: "11", title: "Mint Green", effect: "Color: Mint Green · Description: Pasty · Smell: Nutty" },
      { roll: "12", title: "Orange", effect: "Color: Orange · Description: Syrupy · Smell: Odorless" },
      { roll: "13", title: "Pale Yellow", effect: "Color: Pale Yellow · Description: Smoking · Smell: Pungent" },
      { roll: "14", title: "Pink", effect: "Color: Pink · Description: Smooth · Smell: Rich" },
      { roll: "15", title: "Rainbow", effect: "Color: Rainbow · Description: Soupy · Smell: Savory" },
      { roll: "16", title: "Silver", effect: "Color: Silver · Description: Watery · Smell: Sharp" },
      { roll: "17", title: "Violet", effect: "Color: Violet · Description: Thick · Smell: Sour" },
      { roll: "18", title: "White", effect: "Color: White · Description: Viscous · Smell: Spicy" },
      { roll: "19", title: "Swirled (Roll Twice)", effect: "Color: Swirled (Roll Twice) · Description: Has Gold Beads Suspended in it · Smell: Sulfurous" },
      { roll: "20", title: "Changing Color (Roll Twice)", effect: "Color: Changing Color (Roll Twice) · Description: Has Ice Crystals Floating in it · Smell: Hydrocarbon (Gas)" },
    ],
  },
];

function docRule(section: string, id: string, name: string, summary: string): HouseRuleEntry {
  return { id, name, section, ruleset: "homebrew", summary, source: DOC3, sourceUrl: DOC3_URL };
}

export const PILLS_POTIONS_HOUSE_RULES: HouseRuleEntry[] = [
  docRule(
    "Magical vs Alchemical Potions",
    "house-potions-magical-vs-alchemical",
    "Potions: Magical vs Alchemical",
    "Potions differ between magical and alchemical. Magical potion effects happen instantaneously, whereas alchemical ones happen over the course of time (rounds) — the document's example is healing: magical potion healing effects happen instantaneously, alchemical healing happens over the course of rounds."
  ),
  docRule(
    "Mixing Potions",
    "house-potions-mixing-miscibility",
    "Mixing Potions: Potion Miscibility",
    "Whenever two or more potions are mixed together, or a creature imbibes a potion while another potion is already active within its person, roll on the Potion Miscibility tables (Table 1A, then Table 1B on a roll of 81-99) to determine the random effect — anything from both potions working normally to bursts, poison, petrification, or a permanent effect. A creature is aware of a potion working within it, but in the heat of battle it can forget one is active; DMs should not let players claim the second potion would not have been imbibed because the character would have known. Potions mixed by throwing them use the Throwing Potions rules carried on Table 1A."
  ),
];
