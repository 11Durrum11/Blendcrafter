import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Spells & Magic (Bastion Press, © 2002, d20 System) —
// all ten prestige classes of the book, transcribed in
// full (progression tables included) from Shaun's own
// scanned copy (read visually; the scan is image-only),
// 2026-11-04: Blood Mage (pp. 6-7), Dragon Mage
// (pp. 13-18), Faerier (pp. 19-20), Reflecting Master
// (pp. 28-29), Jewel Mage (pp. 30-34), Soul Gem Guardian
// (pp. 34-35), Rune Mage (pp. 42-44), Shadetouched
// (pp. 55-56), Spellsinger (pp. 57-58), Totem Mage
// (pp. 59-61). This is a 3.0-era book: its 3.0 notations
// were converted to 3.5 standard in the 2026-11-10
// conversion pass under Shaun's standing order (Scry
// folded into Spellcraft, Alchemy → Craft (alchemy),
// Innuendo → Bluff, Wilderness Lore → Survival, subdual
// damage → nonlethal damage). Each class group below
// is preceded by the transcription notes made for it.
// Two editorial flags: the Blood Mage's Hit Die is NOT
// printed in the book — its record carries the arcane
// default d4, flagged again in its header note and
// proficiencies feature, and needs an editorial decision
// before this pack goes live; and the Spellsinger shares
// its name with a different Races of Faerûn class already
// in the catalog, so it is built as id spellsinger-sam
// (display name unchanged). Summaries in feature text are
// mechanical paraphrases in our own words; tables and
// stat lines are the book's own.

const SAM = "Spells & Magic";
const SAM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Spells & Magic.pdf";
const BLOOD = `${SAM} — Blood Mage`;
const DRAGON = `${SAM} — Dragon Mage`;
const FAERIER = `${SAM} — Faerier`;
const RMA = `${SAM} — Reflecting Master`;
const JMA = `${SAM} — Jewel Mage`;
const SGG = `${SAM} — Soul Gem Guardian`;
const RUM = `${SAM} — Rune Mage`;
const SHADE = `${SAM} — Shadetouched`;
const SINGER = `${SAM} — Spellsinger`;
const TOTEM = `${SAM} — Totem Mage`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string, keyBase?: string) {
  const base = keyBase ?? source.split("\u2014 ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        base +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: SAM_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fb = mk(BLOOD);
const fd = mk(DRAGON);
const ff = mk(FAERIER);
const fr = mk(RMA);
const fj = mk(JMA);
const fsg = mk(SGG);
const fu = mk(RUM);
const fsh = mk(SHADE);
const fg = mk(SINGER, "spellsinger-sam");
const ft = mk(TOTEM);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const HALF10 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ15 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const GOOD15 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
const POOR15 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];

export const SPELLS_AND_MAGIC_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [

  // ===== Blood Mage, Dragon Mage, Faerier =====

// Spells & Magic (Bastion Press, © 2002, d20 System)
// prestige classes, printed pp. 6-20, transcribed in full
// — progression tables included — from Shaun's own scanned
// copy (read visually, 2026-11-04). This is a 3.0-era
// third-party book, and 3.0 notations are kept as printed:
// skills such as Scry and Innuendo appear in class skill
// lists as printed, and the faerier's requirements use the
// 3.0 Fey language / Bardic Knowledge wording. Printing
// quirks are recorded as printed, not silently resolved:
// the Blood Mage entry prints NO Hit Die line on pp. 6-7
// (the d4 recorded below is the arcane-caster default,
// flagged in the staging notes for verification, not a
// transcription); the Dragon Mage is a single class with
// FOUR different printed progression tables (Tables 3-6),
// one per trove attunement — Breath, Scales, Talon, and
// Wings — with a different Hit Die for each attunement
// (d4/d10/d8/d6); the definition's progression and hitDie
// fields carry the first-printed Breath table, and the
// other three tables are transcribed in full in the
// Dragon Mage Attunement Tables feature. The faerier is a
// 5-level class whose printed base attack bonus starts at
// +1 at 1st level. Summaries are short mechanical
// paraphrases in our own words; no book prose is
// reproduced.

  {
    id: "blood-mage",
    name: "Blood Mage",
    ruleset: "core",
    source: `${BLOOD} (pp. 6–7)`,
    sourceUrl: SAM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF10, GOOD10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Heal", "Knowledge (Arcana)",
      "Knowledge (Anatomy)", "Profession",  "Spellcraft",
    ],
    prerequisites: [
      "Spellcasting Ability: ability to cast 3rd level arcane spells",
      "Skills: Spellcraft 8 ranks",
      "Feats: Blood Power, Toughness",
    ],
    features: [
      fb("Blood Mage Proficiencies", "Arcane spellcasters who power their spells with their own life force, practising in secret cabals because blood mages are feared and hunted. Blood mages gain no proficiency in any weapons or armor. Armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble. NOTE: the Blood Mage entry prints no Hit Die line on pp. 6-7; the d4 in this record is the arcane-caster default, flagged for verification in the staging notes — it is not transcribed from the book.", undefined),
      fb("Spells per Day", "Blood mages continue their training in arcane magic as per their original class, except now they can increase the power of these spells through blood magic: when a new blood mage level is gained, the character gains new spells per day as if she had also gained a level in an arcane spellcasting class she belonged to before becoming a blood mage (Table 2 gives +1 level of existing class at every level, 1st through 10th). The blood mage does not gain any other benefit a character of that class would have gained, such as class abilities, saving throws, or attack bonus.", 1),
      fb("Blood Fuel (Su)", "While any mage may pick up the Blood Power feat, only blood mages truly excel at using their life force to power spells. Each level of this ability reduces the hit point damage per spell level of using the Blood Power feat by 1 hit point: Blood Fuel I (1st level) — 4 hit points of damage per spell level; Blood Fuel II (5th level) — 3 hit points per spell level; Blood Fuel III (9th level) — 2 hit points per spell level. A blood mage naturally heals 1 hit point less each day for every level of the Blood Fuel ability he possesses, and any spell that restores hit points to him restores 1 hit point less per level of the Blood Fuel ability he possesses; this reduction is cumulative with any other reduction caused by blood magic abilities or the Blood Power feat. (Worked example, p. 6: a wizard with Blood Fuel I casting a maximized lightning bolt prepared as a 3rd-level spell takes 12 hit points of damage — 4 per spell level for the three missing levels.)", 1),
      fb("Ability Fuel (Su)", "The blood mage learns to feed not just on the raw life force energy of his body, but also the other energies contained in the body: he can drain points from his ability scores to power spells. Ability Fuel I (2nd level) causes 2 points of temporary ability damage to the caster per level of the spell being fueled; once the blood mage learns Ability Fuel II (6th level) he only suffers 1 point of temporary ability damage per level of the spell. These points return at the normal rate of 1 ability point per day.", 2),
      fb("Blood Mixing (Su)", "Knowing the potency and power contained in their blood, experienced blood mages use their blood as a component when crafting potions or scrolls: a blood mage may reduce the monetary cost of a potion or scroll by 100 gp for every hit point of blood mixed into the item being made. Damage taken while using Blood Mixing does not heal normally, and healing spells restore only one-half the normal number of hit points to targets suffering from damage caused by Blood Mixing; this reduction is cumulative with any other reduction caused by blood magic abilities.", 3),
      fb("Bonus Blood Feat", "At 3rd, 7th, and 10th level the blood mage receives a bonus blood feat, which may only be used to purchase metamagic feats. These metamagic feats may be used to modify any spell the blood mage casts by paying the appropriate amount of hit points or ability score points to fuel the levels required by the feat; modifying a spell in such a fashion requires no extra time. These feats cannot be used to cast a metamagic modified spell in the normal fashion.", 3),
      fb("Blood Mastery (Su)", "The blood mage now has such control over his art he can power his spells with the life force of others, in two main applications: willing victims and unwilling victims. In either case the victim suffers 5 hit points of damage per spell level. Willing victims simply suffer the damage and the blood mage casts the spell; the victim must be touching the blood mage when the spell is cast and cannot be taking any other actions that round. Unwilling victims must be restrained in such a way that they are unable to take any actions; the blood mage must then touch the victim and the two make opposed Will saves — if the blood mage wins, the victim suffers the appropriate damage and the spell is cast; if the victim wins, the blood mage suffers the damage the victim would have taken and the spell slot is lost.", 4),
      fb("Fortitude Fuel (Su)", "At 5th level the blood mage learns to use his resistance to physical threats as a fuel for his magic, gaining a penalty to his Fortitude save to cast more spells: for each level of spell cast using this ability, the blood mage gains a -1 penalty to all Fortitude saves. This penalty is reduced by 1 each day. If the penalty for this ability ever exceeds the blood mage's Base Fortitude Save, the blood mage dies, as per the Blood Power feat.", 5),
      fb("Blood Burn (Su)", "Once a blood mage reaches 8th level he can permanently sacrifice part of his life force to gain temporary power: the blood mage may permanently sacrifice hit points to gain additional spell slots. These hit points are permanently lost and may only be regained through the use of a wish spell — however, if a wish spell is used to restore the points, the additional spell slots gained by the sacrifice are lost. The character gains an additional spell slot for use each day equal to the number of hit points sacrificed divided by three; no more than 9 hit points may be sacrificed for each spell slot, limiting the maximum spell level of the slot to 3rd level.", 8),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "dragon-mage",
    name: "Dragon Mage",
    ruleset: "core",
    source: `${DRAGON} (pp. 13–18)`,
    sourceUrl: SAM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 3,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [],
    prerequisites: [
      "Skills: Spellcraft 13 ranks",
      "Skills: Knowledge (Arcana) 10 ranks",
      "Skills: Knowledge (Dragons) 10 ranks",
      "Spells: ability to cast any 1st level spells",
      "Special: the character must have undergone the trovebond ritual and have the required amount of treasure in his trove, as shown on the class tables (6,750 gp at 1st level, rising to 195,000 gp at 10th level)",
    ],
    features: [
      fd("Dragon Mage Proficiencies", "The only way for characters to make use of dragon magic is to enter this prestige class: performing the trovebond does little good until the character takes his first level of dragon mage. Unlike many other prestige classes, the benefits gained from advancing as a dragon mage are variable — the character only gains the hit points, abilities, spells, saves, and base attack bonus appropriate to the current attunement of his trove. Dragon mages gain no additional proficiency with any armor, but any dragon mage with a trove currently attuned to the Scale aspect suffers no arcane spell failure for wearing armor (lost if the attunement changes until the trove is re-attuned to Scale). Dragon mages with a trove currently attuned to the Talon aspect gain proficiency with all simple and martial weapons (likewise lost on a change of attunement). Class skills: the dragon mage's class skills are the same as the class skills of his highest-level non-prestige character class; if there is a tie among classes, the dragon mage must choose one for purposes of skills — so this record's classSkills list is intentionally empty. Skill Points at Each Additional Level: 3 + Int bonus, as printed.", undefined),
      fd("Dragon Mage Attunement Tables", "Hit Dice by attunement: Breath d4, Scales d10, Talon d8, Wings d6. Required Trove Value is the same on all four tables: L1 6,750 gp; L2 9,750 gp; L3 14,250 gp; L4 20,250 gp; L5 27,500 gp; L6 46,750 gp; L7 82,500 gp; L8 112,500 gp; L9 150,000 gp; L10 195,000 gp. Spells/day on all four tables: as base spellcasting class +1 at every level. Attuning a trove to an aspect requires at least 40% of the trove's value to consist of: Breath — arcane magical items other than weapons or armor; Scales — magical armor or shields; Talons — magical weapons; Wings — divine magical items (the god to whom the items are consecrated is not important; it is their value and divine resonance that is necessary). TABLE 3, BREATH (the table in this record's progression field): BAB 0/1/1/2/2/3/3/4/4/5, Fort 0/0/1/1/1/2/2/2/3/3, Ref 0/0/1/1/1/2/2/2/3/3, Will 2/3/3/4/4/5/5/6/6/7. Special: L1 Trove Awareness; L2 Siphon Magic; L3 Stored Spell; L5 Distant Scrolls; L7 Attuned Staffs; L10 Return to Trove. TABLE 4, SCALES: BAB 0/1/2/3/3/4/5/6/6/7 (printed +6/+1 at 8th-9th and +7/+2 at 10th), Fort 2/3/3/4/4/5/5/6/6/7, Ref 2/3/3/4/4/5/5/6/6/7, Will 2/3/3/4/4/5/5/6/6/7. Special: L1 Trove Awareness; L2 +2 racial bonus to Spot checks; L3 Damage Reduction 2/+1; L5 Damage Reduction 3/+1; L6 +1 increase to Constitution; L7 Damage Reduction 5/+1; L8 cannot be caught flatfooted; L9 Damage Reduction 10/+2; L10 cannot be flanked. TABLE 5, TALON: BAB 1/2/3/4/5/6/7/8/9/10 (full; printed +6/+1, +7/+2, +8/+3, +9/+4, +10/+5 from 6th), Fort 2/3/3/4/4/5/5/6/6/7, Ref 0/0/1/1/1/2/2/2/3/3, Will 0/0/1/1/1/2/2/2/3/3. Special: L1 Trove Awareness; L2 Improved Flyby; L4 Hop Attack; L6 Stunning Grapple; L7 +1 size category increase; L8 Brutal Knockdown; L10 Fracture. TABLE 6, WINGS: BAB 0/1/2/3/3/4/5/6/6/7 (printed +6/+1 at 8th-9th and +7/+2 at 10th), Fort 2/3/3/4/4/5/5/6/6/7, Ref 0/0/1/1/1/2/2/2/3/3, Will 2/3/3/4/4/5/5/6/6/7. Special: L1 Trove Awareness; L2 Siphon Magic; L5 Distant Potions; L7 Attuned Rings; L9 Healing Sacrifice.", 1),
      fd("Spell Ability", "When a level of dragon mage is gained, the character receives new spells per day as if he had also gained a level of the divine or arcane spellcasting class he belonged to before this prestige class; the character does not gain any other abilities associated with gaining a level in the previous class, however. If the dragon mage had more than one appropriate caster class before taking this prestige class, he must decide which class to apply the new level to for purposes of determining new spells each day.", 1),
      fd("Trove Awareness (Su)", "The first ability gained after undergoing the trovebond: an instinctual knowledge of the trove's location and condition. The character can find his trove at any time and knows instantly if it is being tampered with in any way, regardless of distance; though no detailed information is sensed, the trovebound character knows the instant anyone touches his trove. This ability even works across planar boundaries, and continues to function regardless of what aspect the character's trove is currently attuned to, even if the attunement changes.", 1),
      fd("Siphon Magic (Su)", "The core of dragon magic, gained at 2nd level; its careless use can actually destroy a trove, burning up the items that provide the energy. It provides as many as three benefits. First, it allows spell casters to ignore the need for material components worth up to 100 gp per dragon mage level; to replace a component exceeding that value, one half of the component's value is immediately removed from the trove itself, destroying many items. Second, it is the means to exceed the daily allotment of spells: the extra spell levels per day and the maximum spell level depend on the size of the trove, per Table 8: Siphon Magic (p. 18) — Trove Value / Extra Spell Levels per Day / Max. Spell Level: 6,750 gp/1/1; 9,750 gp/2/1; 14,250 gp/3/1; 20,250 gp/4/2; 27,000 gp/5/2; 46,750 gp/6/2; 49,500 gp/7/3; 66,000 gp/8/3; 82,500 gp/9/3; 112,500 gp/10/4; 150,000 gp/11/4; 195,000 gp/12/4; 255,000 gp/13/5; 330,000 gp/14/5; 435,000 gp/15/5; 570,000 gp/16/6. The extra spell levels may only power spells the caster has already memorized (or prayed for) that day or is capable of casting as spontaneous magic; a cleric can use them to cast healing (or harming) magic as per spontaneous casting, even with no spells to convert. Third, exercised either when a spell is prepared or at the moment it is cast: use at preparation extends the preparation time by 10 minutes per extra spell level used; use at the moment of casting triples the casting time. The extra spell levels may also pay the cost of metamagic feats — a number of extra spell levels equal to the original level of the spell for each one-level increase required by the feat. The last two uses draw from the same pool of extra spell levels each day.", 2),
      fd("Stored Spell (Su)", "Any single arcane spell may be cast and its effect stored in the trovebond for up to 24 hours; at any time within those 24 hours, the caster may designate a target and release the stored spell as a free action. If the caster is a dragon, the upper limit to the spell that may be stored is 9th level or the highest spell level the dragon is able to cast, whichever is lower; non-dragons may only store a spell of up to 3rd level in power, or the highest level they are able to cast, whichever is lower. (Listed on the Breath table at 3rd level.)", 3),
      fd("Distant Scrolls (Su)", "The dragon mage may use this ability to cast a spell from his trove as if he were physically holding it; activating this ability requires a full-round action, after which the spell from the scroll is cast as normal. (Listed on the Breath table at 5th level.)", 5),
      fd("Distant Potions (Su)", "Activated with a full-round action, after which the dragon mage may use a potion within his trove as if he actually held the potion in his hand; this immediately reduces the value of the trove by the value of the potion. The dragon mage may imbibe the potion himself or administer it to another (the target must be within 5 ft. of the dragon mage and accept the potion willingly); if the target refuses the potion, it is still lost from the trove but no one gains its benefits. (Listed on the Wings table at 5th level.)", 5),
      fd("Attuned Rings (Su)", "As a full-round action, the dragon mage can activate one of the rings he has attuned himself to, and be thereafter treated as if he were actually wearing the ring; the dragon mage may only attune one ring per two levels of the dragon mage prestige class, and must not be currently wearing any other magical rings to 'wear' an attuned ring. If the dragon mage activates a second ring while 'wearing' an attuned ring, the effects of the first ring end immediately and the effects of the second ring begin. For every attuned ring after the first that is 'worn' in a given day, there is a 10% chance that a flare of energy through the trovebond destroys the last-attempted ring in the trove; dragons, with their perfected trovebond, never destroy one of their rings in this way. (Listed on the Wings table at 7th level.)", 7),
      fd("Attuned Staffs (Su)", "Using this ability requires the dragon mage to create a proxy staff attuned to other staffs in the dragon mage's trove: the proxy staff may be attuned to one other staff for every three levels of the dragon mage prestige class, its value must be at least equal to 3,000 gp per staff to be attuned, and it can have no other magical enhancements or abilities of its own — it is merely a conduit. Attuning takes 24 hours, during which the dragon mage, the proxy staff, and the staff to be attuned must all remain within 100 ft. of the dragon mage's trove; at the end of that time the proxy staff is attuned and the magical staff may be returned to its place in the trove. The dragon mage spends a full-round action to activate the powers of an attuned staff, and from that point on the proxy staff acts as if it were the attuned staff until the dragon mage activates another attuned staff or chooses to end the effect. For every staff, after the first, activated in a given day, there is a 10% chance that a flare of energy through the trovebond destroys the just-activated staff; dragons never destroy one of their staffs in this way. (Listed on the Breath table at 7th level.)", 7),
      fd("Healing Sacrifice (Sp)", "Dragon mages able to cast healing magic may sacrifice from their trove to gain additional healing spells in a day; these additional spells may only come from Table 7: Healing Sacrifice (p. 16) and do not count against the extra spell levels each day granted through the trovebond and the siphon magic ability. Table 7 — Spell / Sacrifice: cure light wounds 500 gp (1/2 mundane, 1/2 magical); cure moderate wounds 1,000 gp (1/2 mundane, 1/2 magical); cure serious wounds 2,000 gp (1/2 mundane, 1/2 magical); cure critical wounds 3,000 gp (1/2 mundane, 1/2 magical); healing circle 3,000 gp (all magical); heal 4,000 gp (all magical); regenerate 4,500 gp (all magical); mass heal 5,000 gp (all magical); true resurrection 10,000 gp (all magical). (Listed on the Wings table at 9th level.)", 9),
      fd("Return to Trove (Sp)", "This ability may only be activated once per week: as a standard action, the dragon mage returns to its trove instantly and without error. The ability works across planes and through magical and physical barriers — it cannot be thwarted through any known mundane or magical means. The dragon mage can take himself and up to 100 pounds of objects/creatures. (Listed on the Breath table at 10th level.)", 10),
      fd("Scales Abilities", "Abilities from the Scales table (Table 4), beyond Trove Awareness: +2 racial bonus to Spot checks (2nd level). Damage Reduction (Ex): if the creature already possesses damage reduction from another ability, this ability adds to the amount of damage ignored from the attack and to the type of weapon required to negate the ability — Damage Reduction 2/magic at 3rd level, 3/magic at 5th, 5/magic at 7th, and 10/magic at 9th. +1 increase to Constitution (6th level). Cannot be caught flatfooted (8th level). Cannot be flanked (10th level).", 2),
      fd("Talon Abilities", "Abilities from the Talon table (Table 5), beyond Trove Awareness: Improved Flyby (Ex) (2nd level) — dragons with the Flyby Attack feat gain +1 to all attacks made using this feat; for creatures without the flyby attack, this ability enables them to move both before and after an action if the total distance moved is not greater than their speed, though using this ability does allow an attack of opportunity. Hop Attack (Ex) (4th level) — creatures with the hover feat may make an attack with their bite, all four feet, tail, and wings all in the same round, but cannot move during the round in which this is used; creatures without the hover feat leap off the ground to exert greater force through a single attack, doubling their strength bonus to damage for a single attack, taking only a 5 ft. step in the same round but performing the rest of their attacks as normal. Stunning Grapple (Ex) (6th level) — see the Stunning Grapple feature. +1 size category increase (7th level). Brutal Knockdown (Ex) (8th level) — improves the tail sweep attack, allowing dragons to apply 3 times their strength bonus to any tail sweep attack; creatures without a tail sweep attack may use a more primitive form, using a full-round action to perform a trip attack against all opponents within 5 feet (not usable in conjunction with the improved trip feat). Fracture (Ex) (10th level) — see the Fracture feature.", 2),
      fd("Stunning Grapple (Ex)", "If a creature has the snatch feat, this ability enables them to exert extra force during the initial grapple attempt, possibly stunning their foes: creatures hit by a snatch attack must make a successful Fortitude Save (DC 10 + attacker's Hit Dice or levels) or be stunned for 1 round (until just before the attacker's next action); the stunning grapple ability may be used once per day for every 5 Hit Dice or levels and must be declared before the attack is made. If the attacker does not have the snatch feat, they may attempt to stun their foes with a ferocious attack: if the attack hits, the foe must make a Fortitude Save (DC 10 + 1/2 the attacker's Hit Dice or levels) or be stunned for one round; the attacker must declare their use of the ability before making the attack, and may use this ability once per day for every 5 Hit Dice or levels the attacker has attained. (Listed on the Talon table at 6th level.)", 6),
      fd("Fracture (Ex)", "Creatures with this ability have an innate knack for damaging objects: any time this ability is used to strike at an inanimate object, the attacker may add twice his strength bonus to damage caused by the attack. See Attacking Objects in the Player's Handbook. (Listed on the Talon table at 10th level.)", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "faerier",
    name: "Faerier",
    ruleset: "core",
    source: `${FAERIER} (pp. 19–20)`,
    sourceUrl: SAM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["will"],
    progression: rows([1, 2, 3, 4, 5], [0, 0, 1, 1, 1], [0, 0, 1, 1, 1], [2, 3, 3, 4, 4]),
    classSkills: [
      "Balance", "Bluff", "Diplomacy", "Disguise", "Gather Information", "Hide",
       "Knowledge (Nature and Fey)", "Listen", "Move Silently",
      "Sense Motive", "Spellcraft", "Spot",
    ],
    prerequisites: [
      "Size: Medium or smaller",
      "Languages: Fey",
      "Feat: Alertness",
      "Skills: Diplomacy 8 ranks, Perform 8 ranks, Sense Motive 8 ranks",
      "Knowledge: 8 ranks in Knowledge (Nature) or Knowledge (Fey), or Bardic Knowledge bonus of +6",
      "Spellcasting: ability to cast magic spells or use magic devices",
    ],
    features: [
      ff("Faerier Proficiencies", "Those who devote themselves to the study of fey creatures; almost all faeriers come from the ranks of bards, druids, and rangers, with a few rogues and a scattering of barbarians. The faerier gains no armor or weapons proficiencies beyond those he already possesses. Hit Dice: d6, as printed. This is a 5-level prestige class (Table 9); its printed base attack bonus runs +1/+2/+3/+4/+5, recorded as printed.", undefined),
      ff("Fey Sense (Su)", "The faerier develops a special sensitivity to the presence of fey beings: as a free action, the faerier can detect the presence of fey creatures within 100 feet. The faerier does not know the type or specific location of the fey creatures, and this ability does not give the faerier the ability to see invisible fey creatures; the faerier senses the number and general direction of all fey within range. Gained at 1st level.", 1),
      ff("Fey Arts (Sp)", "The faerier's study allows him to adopt some of the magical traits of a fey being. When taking his first Art, the faerier must choose whether to study the magic of Seelie or Unseelie faeries: faeriers of Evil alignment may not study Seelie magic and those of Good alignment may not study Unseelie magic. Once the choice is made, the faerier must select his Arts from among the corresponding list of Seelie or Unseelie Arts, and may not switch between these studies at any later time. At 1st, 3rd, and 5th levels, the faerier chooses a new Art from the appropriate list (the text calls each pick a Seelie Art even for the Unseelie list — recorded as printed); he must choose a new Art each time and may not select the same Art more than once. These are special abilities.", 1),
      ff("Seelie Arts", "The Seelie Art options: Grig Fiddle — once per day, play an enchanting tune on a fiddle or other stringed instrument; while the tune is played, all non-fey creatures within 60 feet must make a Will save (DC 15 + levels of the faerier prestige class) or be affected as if by Otto's irresistible dance, ending when the playing stops, and any creature attacked while affected stops dancing at the beginning of the following round. Nixie Breath — three times per day, cast water breathing as if cast by a 6th-level sorcerer. Dryad Form — once per day, cast tree shape as if cast by a 6th-level druid. Hybsil Sight — three times per day, as a free action, choose to see invisible objects and creatures for 10 minutes. Gnome Brew — once per day, as a full-round action, imbue up to 1 barrel of liquor with an enchanting potency; creatures that drink a mug of the enhanced liquor must make a Fortitude Save (DC 11 + levels of the faerier prestige class) or immediately fall asleep for 1d4 days, not suffering starvation or dehydration while asleep, and waking if they receive a damage-causing blow; the DC increases by 1 for each mug consumed without failing the Fortitude Save, and dwarves and fey creatures are not affected. Hanid Hiding — once per day, as a full-round action, become immaterial and house your spirit in any plant within 10 feet (clothing and gear become immaterial as well and rematerialize when you do), remaining hidden in the plant for up to 3 hours; emerging requires a full-round action, and if a plant in which you are hiding is killed, you must succeed at a Fortitude Save (DC 15) or die, a successful save rematerializing you at a randomly determined location within 10 feet.", 1),
      ff("Unseelie Arts", "The Unseelie Art options: Satyr Pipes — once per day, play an enchanting tune on pipes or another wind instrument; while the tune is played, all non-fey creatures within 60 feet must make a Will save (DC 15 + levels of the faerier prestige class) or be affected as if by Fear, ending when the playing stops. Pixie Invisibility — three times per day, become invisible for up to 10 minutes, remaining invisible even while casting spells or attacking but becoming visible if successfully attacked or otherwise suffering damage. Hob Lick — once per day, as a full-round action, lick an edged weapon to imbue it with fey poison; a successful hit with that weapon requires the target to make a Fortitude Save (DC 13 + levels of the faerier prestige class) or temporarily lose 1d4 points of Constitution (initial and secondary), and the fey poison lasts 5 minutes or until an attack using the weapon causes damage. Siren Song — once per day, call out to a creature, which must make a Will save (DC 22, -2 for every 20 feet of distance from you) or feel compelled to walk toward you in a straight line, disregarding all other considerations; if a dangerous obstacle appears in the creature's path (such as the edge of a cliff or a body of water), the target is immediately allowed another Will save with a +5 natural bonus, and on a failure ignores any obstacles, walking the entire distance at normal movement rate without running, flying, or swimming. Bogan's Fog — three times per day, as a full-round action, cause a cloud of fog to form, centered on your location at activation and extending to a 40-foot radius, providing 100 percent cover to everything inside the cloud, dissipating in 2d4 minutes. Sprite Charm — three times per day, cast charm person or charm animal as a 6th-level druid.", 1),
      ff("Fey Friend (Ex)", "Fey creatures come to see the faerier as a sympathetic being: crossroads guardians treat the faerier as if he was a fey creature, and the faerier gains a +4 circumstance bonus to Bluff, Diplomacy, Gather Information, Perform, and Sense Motive checks when interacting with fey creatures. Gained at 2nd level.", 2),
      ff("Detect Crossroads and Backroads (Su)", "The faerier gains an innate sense for the presence of fey crossroads: once per day per faerier level, the faerier can detect nearby crossroads and backroads as if casting the spell of the same name. Gained at 3rd level.", 3),
      ff("Create Crossroads and Backroad (Sp)", "As his familiarity with the fey arts grows, the faerier gains the ability to create crossroads and a connecting backroad once every 10 days, as if he was a fey creature; this ability works like the spell of the same name and requires the faerier to pay the listed XP cost. Gained at 4th level.", 4),
      ff("Fey Form (Su)", "At the culmination of his study of fey beings, the faerier may assume the form of a fey creature once per day; this special ability works like a druid's Wild Shape ability, but the form is limited to that of a fey creature within one size increment of the faerier. Gained at 5th level.", 5),
    ].map((x) => x as FeatureDefinition),
  },

  // ===== Reflecting Master, Jewel Mage, Soul Gem Guardian, Rune Mage =====

// Spells & Magic (Bastion Press, © 2002, d20 System) prestige
// classes, part B — Reflecting Master, Jewel Mage, Soul Gem
// Guardian, and Rune Mage — transcribed in full, progression
// tables included, from Shaun's own scanned copy (read
// visually, 2026-11-04). This is a 3.0-era book: 3.0 notations
// are kept as printed, including the Scry exclusive skill,
// Alchemy as a skill, Pick Pocket / Intuit Direction /
// Wilderness Lore skill names, Ride keyed to Dexterity for
// the soul gem guardian, "cast as a sorcerer" phrasing, and
// the rune mage's unusual 15-level progression. Printing
// quirks are recorded as printed, not silently resolved: the
// reflecting master's requirements ask for Craft (Mirrors)
// 10 ranks while its class-skill list prints Craft (Mirror);
// its skill line reads "Skill Points at Each Additional
// Level: 3 + Int Modifier"; the jewel mage's Soul Gem feature
// (10th level) runs onto printed p. 34; the soul gem guardian
// runs onto printed p. 35; the rune mage's Draw Rune,
// Create Runestaff, and Rune Mastery text runs onto printed
// p. 44; and no spells-per-day table is printed for the rune
// mage anywhere in pp. 39-44 — the only printed slot numbers
// are the 1st-level example in its class text (see Rune
// Spells, below), so no higher-level slot numbers are
// invented here. Summaries are short mechanical paraphrases
// in our own words; no book prose is reproduced.

  {
    id: "reflecting-master",
    name: "Reflecting Master",
    ruleset: "core",
    source: `${RMA} (pp. 28–29)`,
    sourceUrl: SAM_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 3,
    babProgression: "half",
    goodSaves: ["ref", "will"],
    progression: rows(HALF10, POOR10, GOOD10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Appraise", "Craft (Mirror)", "Knowledge (Arcana)",  "Spellcraft",
    ],
    prerequisites: [
      "Skills: Knowledge (arcana) 10 ranks",
      "Skills: Alchemy 10 ranks",
      "Skills: Craft (Mirrors) 10 ranks",
      "Spells: Able to cast a divine or arcane spell of 4th level or higher",
    ],
    features: [
      fr("Reflecting Master Proficiencies", "Mirror mage — a master of mirror magic (Chapter 5); only members of this prestige class can make use of mirror magic. Class skills and their key abilities: Craft (alchemy) (Int), Appraise (Int), Craft (Mirror) (Int), Knowledge (Arcana) (Int), and Spellcraft (Int). Skill points as printed: 'Skill Points at Each Additional Level: 3 + Int Modifier.' The reflecting master gains no additional proficiency with any weapons or armor.", undefined),
      fr("Spell Ability", "Table 15 spells per day: +1 level of existing class at every reflecting master level (1st-10th). When a level of reflecting master is gained, the character receives new spells per day as if he had also gained a level of the spellcasting class he belonged to before taking this prestige class; he does not gain any other abilities associated with gaining a level in the previous class. If the reflecting master had more than one caster class before taking this prestige class, he must decide which class to apply the new level to for purposes of determining new spells each day.", 1),
      fr("Mirror Magic", "The character gains the ability to perform mirror magic as outlined in Chapter 5 (absorption, reflection, and storing of spells in mirrors). Only characters that take this prestige class can perform this type of magic.", 1),
      fr("Enhanced Proficiency (Ex)", "Gained at 2nd, 4th, 6th, 8th, and 10th level (Table 15). When this ability is gained, the character must choose which of the three aspects of mirror magic he becomes more proficient in: absorption, reflection, or storing. Absorption: the first time taken, a +2 expertise bonus to all attempts to absorb incoming spells; each consecutive time this enhanced proficiency is taken for absorption, the expertise bonus increases by +1. Reflection: the first time taken, the character is able to reduce the level of all spells to be reflected by 1 level; each consecutive time taken for deflection, the character may reduce any excess spell levels remaining after a reflection by 1 additional level. Storing: the first time taken, a bonus 1st- and 2nd-level spell; the second time, bonus 3rd- and 4th-level spells; the third time, bonus 5th- and 6th-level spells; the fourth time, bonus 7th- and 8th-level spells; the last time, a bonus 9th-level spell. If a character does not choose to take the same proficiency improvement consecutively, he may never return to the prior proficiency (for example, a first proficiency in absorption followed by one in reflection means the character may never again gain additional proficiency in absorption).", 2),
      fr("Shatter Darkness (Su)", "Any spell that would inhibit the light available to the mirror mage is automatically dispelled on the round following its casting; thus a darkness spell cast on the mage is effective for exactly one round, at the end of which it dissipates. This ability is automatic.", 3),
      fr("Mirror Dependence", "At this level the mirror mage is completely dependent on his mirrors: regardless of his previous spellcasting career, the reflecting master must now prepare all of his spells using his mirrors.", 5),
      fr("Enduring Spells (Ex)", "While most mirror mages lose all of the spells stored in their mirrors at dawn of the following day, the reflecting master can retain one spell in one mirror each day: when dawn comes and wipes clean the spells locked in this mage's mirrors, the highest-level spell still stored within the mage's largest mirror (the reflecting master may choose which mirror if there are two of the largest size) stays in the mirror until the following dawn.", 7),
      fr("Bonded Mirror (Ex)", "When this ability is gained, the largest mirror the reflecting master owns becomes intimately bonded to its master's magical aura. The mirror master may, at his discretion, suffer any hit point damage that would have been suffered by the mirror himself, allowing him to protect at least one mirror from disaster and providing him with a supply of spells if all else fails.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "jewel-mage",
    name: "Jewel Mage",
    ruleset: "core",
    source: `${JMA} (pp. 30–34)`,
    sourceUrl: SAM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["will"],
    progression: rows(HALF10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Appraise", "Craft: Gemcutting", "Knowledge: Arcana", "Knowledge: Geology",  "Spellcraft",
    ],
    prerequisites: [
      "Skills: Alchemy 10 ranks",
      "Skills: Craft: Gemcutting 10 ranks",
      "Skills: Knowledge: Arcana 8 ranks",
      "Spellcasting: ability to cast 3rd level spells, transmutation cannot be opposed school",
      "Feats: Craft Wondrous Item, any two metamagic feats",
    ],
    features: [
      fj("Jewel Mage Proficiencies", "Spellcaster who relies on Alchemically altered gems to augment spellcasting (Chapter 6: The Path of Jewels). Class skills and their key abilities as printed: Alchemy (Int), Appraise (Int), Craft: Gemcutting (Int), Knowledge: Arcana (Int), Knowledge: Geology (Int), Scry (Int), and Spellcraft (Int). Skill Points at Each Level: 4 + Int modifier. The jewel mage gains no proficiency in any weapon or armor; armor of any type restricts a jewel mage's movement, which can interfere with his ability to cast spells with somatic components (unless those somatic components have been replaced by an attuned jewel), and armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      fj("Spells per Day", "Table 16 spells per day: +1 level of existing class at every jewel mage level (1st-10th). When a jewel mage advances in level, she gains new spells as if she had advanced a level in any spellcasting class she belonged to before she became a jewel mage; she does not gain any other class benefits that a member of that class would have gained.", 1),
      fj("Rebuke Earth Creatures", "At 1st level, a jewel mage can rebuke or command earth creatures as an evil cleric of her jewel mage level rebukes or commands undead. She may use this ability a total number of times per day equal to 2 + her Charisma modifier.", 1),
      fj("Jewel Mage Techniques", "General rules for the jewel techniques below: both a masterwork Alchemist's lab and a well-stocked magical library are required for the use of these class techniques. The caster level for the jewels created is the same as the jewel creator's current spellcaster level (the creator's jewel mage levels stack with whatever spellcaster levels he had achieved before taking up the prestige class). No one but the jewels' creator can use them; to anyone else they are merely finely crafted gems with an odd glow. All jewels must be in physical contact with their creator to operate, and no more than two may be operational at one time, unless placed in a jewelstaff or similar item. Altering a gem involves both an Alchemy check and a Craft: Gemcutting check (DCs under each technique); if either check fails, the gem is ruined beyond salvaging.", 1),
      fj("Create Attunement Jewel", "At 1st level, create attunement jewels: Alchemically altered gems used as a spell focus to replace one type of spell component (vocal, somatic, or material) for spells from a particular school of magic. An attunement jewel that replaces material components cannot replace a material component worth more than 50 gp, and cannot replace the divine focus component of divine spells. Table 17 Primary Gems and Attunements: Amber — Conjuration; Amethyst — Enchantment; Cat's Eye Chrysoberyl — Divination; Garnet — Transmutation; Jade — Abjuration; Jet — Necromancy; Pearl — Illusion; Spinel — Evocation. Creation: take a gem of the type appropriate to the school and determine which component type the jewel replaces; Alchemy check DC 25 and Craft: Gemcutting check DC 25 (either failure utterly ruins the gem); the gem must be worth at least 100 gp, and every 100 gp of value over the base value lowers both check DCs by 1; then expend 1,000 gp worth of materials and invest 40 XP in a ritual that takes 1 day. Attunement jewels cannot be used by anyone other than the jewel mage who created them, and he must be in direct physical contact with the jewel as he casts the spell. Spells cast using an attunement jewel add +5 to the DC of a Spellcraft check attempting to identify them as they are cast.", 1),
      fj("Create Greater Attunement Jewel", "Table 16 lists this at 3rd level as 'Greater Create Attunement Jewel'; the feature heading prints 'Create Greater Attunement Jewel.' At 3rd level, create greater attunement jewels: Alchemically altered gems used as a spell focus to replace two types of spell components (vocal, somatic, or material) for spells from a particular school of magic. One that replaces material components cannot replace a material component worth more than 100 gp, and cannot replace the divine focus component of divine spells. Creation: Alchemy check DC 30 and Craft: Gemcutting check DC 30 (either failure utterly ruins the gem); the gem must be worth at least 300 gp, and every 300 gp of value over the base value lowers both check DCs by 1; then expend 5,000 gp worth of materials and invest 200 XP in a ritual that takes 5 days. Only the creator can use one, in direct physical contact as he casts. Spells cast using a greater attunement jewel add +10 to the DC of a Spellcraft check to identify them as they are cast, unless the spell in question has only two components and both have been replaced by the jewel — in that case attempts to identify the spell being cast are futile, though attempts may be made afterwards to identify the effects, adding +5 to the DC of the Spellcraft check.", 3),
      fj("Create Encoded Jewel", "At 5th level, create encoded jewels, of two types: descriptor encoded jewels (Alchemically altered gems containing up to three spells with a common spell descriptor — acid, chaotic, cold, etc.) and school encoded jewels (up to two spells of the same school that have no descriptor). The combined levels of the encoded spells cannot exceed the creator's jewel mage level at the time of the jewel's creation. The jewel mage can activate any of the encoded spells as a standard action without provoking an attack of opportunity; the spell activated is treated as though cast by the jewel mage at his current level for determining save DCs and effects. The encoded jewel is powered by casting spells matching its encoded descriptor or school into it — every level of a spell cast into it is stored as a level for powering the encoded spells — and an encoded jewel can store twice the combined levels of the encoded spells in spell power. Absorption: an encoded jewel can absorb any spell cast at its bearer that shares its descriptor or school — first identify the spell being cast with a Spellcraft check as if counterspelling, ready the appropriate encoded jewel, then make another Spellcraft check DC 15 + the level of the spell being absorbed, using Dexterity as the base instead of Intelligence; absorbed spells are stored as power as if the jewel mage had cast them into the jewel himself. Overload: if an encoded jewel absorbs more spell levels than it can hold, it must make a Fortitude save DC 10 + the level of the spell that overloaded it to avoid exploding; on a success it releases the excess spell energy in a harmless display of light, and on a failure it explodes, doing 1d6 damage for every spell level contained within to all within 10 ft. who fail a Reflex save DC 15 + the number of spell levels within, and its creator must make a Fortitude save DC 10 + the combined level of the spells encoded within the jewel or take an additional point of damage for every spell level contained within. Readying a jewel from a belt pouch is a free action; from an inside pocket it is a move action. Creation: gem of the type appropriate to the descriptor or school; Alchemy check DC 35 and Craft: Gemcutting check DC 30 (either failure utterly ruins the gem); gem worth at least 500 gp, every 500 gp over lowering both DCs by 1; expend 4,000 gp per total spell level of the spells to be encoded for materials and invest 160 XP per total spell level in a ritual that takes 3 days per total spell level. Only the creator can use one, in direct physical contact as he activates the spell encoded within; because the spells are released rather than cast, Spellcraft attempts to identify them while being activated are futile (afterwards, +5 to the DC).", 5),
      fj("Create Binding Jewel", "At 7th level, create binding jewels: Alchemically altered gems that allow the jewel mage to trap creatures within them; creatures trapped within can be summoned forth and forced to serve him. To trap a creature the jewel mage makes a Charisma check opposed by the target's Will save, adding half his jewel mage levels to his Charisma check; if the target succeeds, then it and the jewel mage are both stunned for 1d4 rounds from mental shock, and if the target fails it is pulled irresistibly into the heart of the binding jewel. Three times per week the jewel mage can call the jewelbound creature forth to serve him for a total of 24 hours per week; every time he calls it forth he must make another Charisma check opposed by its Will save to maintain control, but once the creature has become jewelbound he adds all his jewel mage levels to his Charisma check. Jewelbound creatures automatically receive the Crystalline template when called forth (removed if the creature breaks the jewel mage's control or is freed by him). Sentient creatures are sometimes bargained with by more ethical jewel mages for voluntary service, negating the need for Charisma checks upon being trapped or called forth. Jewelbound creatures receive a bonus to their Will save equal to the jewel mage's level, which does not apply to checks made against the jewel mage. Binding is a full round action; calling a jewelbound creature forth, or freeing one, is a standard action. Jewelbound creatures are dimly visible inside the binding jewel, but while inside they do not experience the passage of time, either consciously or physically. Table 18 Binding Jewel Types: Corundum — Animal, Beast, Magical Beast, Plant, Vermin; Emerald — Dragon; Opal — Aberration, Ooze, Shapechanger; Ruby — Outsider; Sapphire — Fey, Giant, Humanoid, Monstrous Humanoid. Creation: gem of the type appropriate to the type of creature to be bound; Alchemy check DC 30 and Craft: Gemcutting check DC 30 (either failure utterly ruins the gem); gem worth at least 1,000 gp, every 1,000 gp over lowering both DCs by 1; expend 50,000 gp worth of materials and invest 2,000 XP in a ritual that takes 50 days. Only the creator can use one, in direct physical contact as he binds, calls forth, or frees a creature.", 7),
      fj("Soul Gem", "At 10th level, the jewel mage reaches the pinnacle of her power with the creation of her Soul Gem (the feature text runs onto printed p. 34). She acquires a diamond of at least 10,000-gp value and makes an Alchemy check DC 40 and a Craft: Gemcutting check DC 35 to prepare it for enchantment (any failure ruins the gem beyond repair); she then expends 100,000 gp of materials and 4,000 XP in a ritual that takes 100 days, following the same rules for the creation of a wondrous item. At the end she casts magic jar, mind blank, and permanency onto the gem and makes a Will save DC 25; if she fails she goes mad, as the spell insanity, for 1d12 months. On a success her soul is bound into her Soul Gem: the Soul Gem is Tiny with hardness 20, 40 hit points, and a break DC of 35. With the Soul Gem she can cast magic jar 1 + her Charisma modifier times per day, and she is affected by a permanent mind blank effect so long as the Soul Gem is within 100 ft. + 10 ft./level of her. Since her soul is no longer in her body she is immune to energy drain attacks of any kind, and she retains consciousness and the ability to act normally when reduced below 0 hit points until she reaches -10 hit points, at which point she dies. When the jewel mage dies, her soul remains in the Soul Gem and the magic jar power has no duration limit; a Soul Gemmed jewel mage can detect thoughts as the spell at will, and three times per day she can share senses with any creature within 30 ft. of her Soul Gem that fails a Will save DC 20.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "soul-gem-guardian",
    name: "Soul Gem Guardian",
    ruleset: "core",
    source: `${SGG} (pp. 34–35)`,
    sourceUrl: SAM_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 2,
    babProgression: "full",
    goodSaves: ["fort", "will"],
    progression: rows(
      [1, 2, 3, 4, 5],
      [2, 3, 3, 4, 4],
      [0, 0, 1, 1, 1],
      [2, 3, 3, 4, 4],
    ),
    classSkills: [
      "Climb", "Handle Animal", "Jump", "Ride", "Swim",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +6",
      "Skills: Knowledge: Arcana 4 ranks",
      "Feat: Iron Will",
      "Special: Must swear to protect and serve the jewel mage whose Soul Gem he bears",
    ],
    features: [
      fsg("Soul Gem Guardian Proficiencies", "Member of an elite order sworn to protect and serve jewel mages who have taken the final step beyond mortal life (a Soul Gemmed jewel mage's Soul Gem he bears). Class skills and their key abilities as printed: Climb (Str), Handle Animal (Cha), Jump (Str), Ride (Dex), and Swim (Str). Skill Points at Each Level: 2 + Int modifier. Soul gem guardians are proficient with all simple and martial weapons and all types of armor and shields; armor of any type may restrict a soul gem guardian's movement, interfering with his ability to cast spells with somatic components (unless those somatic components have been replaced by an attuned jewel), and armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      fsg("Initial Bond", "At 1st level the soul gem guardian has made his vows to his chosen patron and has become bonded to the patron's Soul Gem: the Soul Gem is magically set into his forehead and cannot be involuntarily removed unless the soul gem guardian fails a Will save DC 15, though he can remove or replace it voluntarily as a standard action. The patron can share senses with his protector at will and can communicate telepathically with him while the Soul Gem is within 100 ft. + 10 ft. per soul gem guardian level his protector possesses. The soul gem guardian automatically fails to save against his patron's magic jar ability, and he can use any magical jewels created by his patron, whether attunement jewels, greater attunement jewels, encoded jewels, or binding jewels.", 1),
      fsg("Shared Spells", "At 1st level, the bond between the soul gem guardian and her patron allows her to select three 1st level spells that her patron knows, which she can now cast as a sorcerer of twice her soul gem guardian level; these spells must be chosen at the time of bonding and cannot be changed. At 3rd level she gains two 2nd level spells (Table 19: '2 2nd level spells'), chosen at the time she gains this level and not changeable later. At 5th level she gains one 3rd level spell (Table 19: '1 3rd level spell'), chosen at the time she gains this level and not changeable later.", 1),
      fsg("Crystalline Form", "At 2nd level the soul gem guardian can take on crystalline form as the template (Crystalline Creatures, pp. 35-38) once per day, for one minute per level of soul gem guardian he possesses; the soul gem guardian can only adopt this form while carrying his patron. At 4th level he can take on crystalline form twice per day (Table 19).", 2),
      fsg("Final Bond", "At 5th level the bond between patron and protector becomes complete: the Soul Gem cannot be removed while the soul gem guardian still lives. The jewel mage patron can now share her consciousness with her protector without resorting to her magic jar ability (she can still use it on others within range), and the soul gem guardian is now protected by the mind blank ability.", 5),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "rune-mage",
    name: "Rune Mage",
    ruleset: "core",
    source: `${RUM} (pp. 42–44)`,
    sourceUrl: SAM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ15, GOOD15, POOR15, GOOD15),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Decipher Script", "Survival",
      "Knowledge (Arcana)", "Knowledge (Runes)", "Knowledge (Nature)", "Profession",
       "Spellcraft", 
    ],
    prerequisites: [
      "Spellcasting: Ability to cast second level arcane spells and second level divine spells",
      "Constitution: 12+",
      "Skills: Knowledge (Arcana) 4 ranks",
      "Skills: Knowledge (Nature) 2 ranks",
      "Will Save: +5",
    ],
    features: [
      fu("Rune Mage Proficiencies", "Master (also called a rune caster) of rune magic (Chapter 7) — a 15-level prestige class per Table 21. Class skills and their key abilities as printed: Alchemy (Int), Concentration (Con), Craft (Int), Decipher Script (Int), Intuit Direction (Wis), Knowledge (Arcana) (Int), Knowledge (Runes) (Int), Knowledge (Nature) (Int), Profession (Wis), Scry (Int), Spellcraft (Int), and Survival (Wis). Skill Points at Each Additional Level: 2 + Int modifier. The rune mage is proficient with simple weapons but not armor or shields; armor of any type interferes with a rune mage's arcane gestures, which can cause his spells to fail, armor check penalties for armor heavier than leather apply to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble, and Swim checks suffer a -1 penalty for every five pounds of armor and equipment carried.", undefined),
      fu("Rune Spells (Ex)", "Rune mages cast spells using runes to focus magical energies; these spells are a mixture of the arcane and divine. A rune mage's spells are limited to those made available by runes he is currently attuned to: he may only be attuned to a number of runes equal to his level in the Attune Rune class ability plus his Constitution bonus, and each rune has a list of ten spells, one of each level, available to the rune mage attuned to it. Rune spell slots: no spells-per-day table is printed for this class — the class text example gives a 1st level rune mage 5 0-level rune spell slots and 3 1st level rune spell slots, plus bonus rune spells based on his Wisdom, Charisma, or Intelligence, whichever is higher (so Arik, with an 18 Wisdom, has a bonus 1st, 2nd, 3rd, and 4th level spell). The rune mage does need to prepare these spells beforehand. A rune mage may cast a lower level spell using a higher-level slot if desired; for Concentration checks and saving throws the spell level is considered that of the lower level spell, but the higher-level spell slot is used. To cast a spell from an attuned rune the rune mage must have an Intelligence or Charisma (whichever was the primary attribute of the rune mage's arcane magic class) and Wisdom equal to 10 + the spell's level; the saving throw DC against rune mage spells is 10 + the spell's level + the Intelligence, Charisma, or Wisdom modifier of the rune mage, whichever is higher. Metamagic applied to a rune spell: if the spell takes 1 standard action to cast he must instead spend a full round action casting it, and if the spell requires more than a standard action an extra full round action is added to its casting time. Original casting: wizards, bards, and clerics keep their original spellcasting abilities and may use them normally; druids and sorcerers may keep theirs if they choose, or can choose to transfer their caster levels to rune magic — when they take their first level in rune mage they may reduce their caster level in their original classes and add them to their caster level in rune mage (this does not affect the class abilities, Hit Dice, saving throws, or attack bonuses of the character, merely their effective caster level and number of spell slots). Each level in rune mage increases his rune mage caster level by one, increasing the number of available spell slots.", 1),
      fu("Runecasting (Ex)", "In addition to using runes to work magic, rune mages may use the runes to perform a type of divination called runecasting (Table 21, 1st level): it does not actually predict the future, but lets the rune mage look back on what he has done, see what he is doing, and what path he is on, and then choose to try to alter this path. Casting runestones takes at least ten minutes of uninterrupted concentration: the rune mage sits comfortably, concentrates, and tosses all of his runestones to the ground, reading their placement and orientation, then makes a Knowledge (Runes) check (DC 15); on a success he gains a +1 insight bonus to 1) all skill checks, 2) all attack rolls, or 3) all saving throws for a 24-hour period, at the rune mage's discretion, and once chosen the bonus cannot be switched. Runecastings may be performed for others as well, but they do not receive the inspiration bonus unless the DM feels they have a suitable faith in the runes (anyone with the rune mage prestige class or who has the Activate Rune feat qualifies).", 1),
      fu("Create Runestone (Ex)", "Rune mages (except the highest levels) cannot work their magic without runestones (Table 21, 1st level): small stones, about the size of a coin, inscribed with a single rune on one side, made from smooth stone but possibly metal, wood, or even bone. A rune mage may only attune to runes for which he has an appropriate runestone (or runestaff), and when using a runestone made by someone else rune mages suffer a -1 penalty to attunement checks. Creating a runestone requires a complete day of work during which the rune mage may cast no spells and undertake no strenuous activity or travel: eight hours meditating and carefully carving the rune, then a Knowledge (Runes) check (DC 10) — if successful the runestone is properly made and the rune mage spends 100 XP to bind it to him; if the check fails, the rune mage starts again another day and the material used is destroyed. Runestones made from materials with some link to the rune (such as a Hagalaz rune inscribed on wood from a tree struck by lightning) can add anywhere from +1 to +5 bonus to attunement checks when using that runestone, costing 500 XP per point of bonus.", 1),
      fu("Attune Rune (Su)", "A rune mage may know many runes but can only use a certain number at a time. Each level of Attune Rune allows the rune mage to attune to one rune, enabling him to use the powers of that rune; a rune mage may only attune to a number of runes equal to his level in Attune Rune plus his Constitution bonus. Table 21 progression: Attune Rune I at 1st level, Attune Rune II at 5th, Attune Rune III at 10th, and Attune Rune IV at 15th.", 1),
      fu("Inscribe Rune (Ex)", "At third level a rune mage is able to inscribe runes, as detailed in the chapter rules (pp. 41-42): the rune caster must be attuned to a rune that would allow him to cast the spell to be inscribed, uses a full round action per spell level to draw the rune on the item on which the spell is to be stored (some form of mark must be left on the surface — the rune mage cannot simply run his finger over a surface to inscribe a rune; where the rune is already drawn, such as carved into a wall or a shield, he need only trace it), uses one of his rune spell slots of the spell level to be inscribed to cast the spell into the rune, and spends XP equal to the spell level times (caster level of the rune mage x5) to power the rune (the printed example: Arik, a 6th level rune mage inscribing a 3rd level rune, pays 90 XP — 3x6x5 — and inscribing the rune takes 3 rounds). Once the experience points are spent the rune is inscribed and remains active for a year per caster level or until the rune is used; if a rune is carved into an item, destruction of that item destroys the rune and its power. Once inscribed, a rune may be activated by anyone capable of casting rune spells (or anyone with the Activate Rune feat) as a full-round action.", 3),
      fu("Draw Rune (Sp)", "Once a rune mage reaches 8th level they are no longer tied down by needing runestones (Table 21): if the rune mage does not have the correct type of runestone on hand, he simply draws the rune on any available surface. The rune must be visible — a rune mage cannot simply run his fingers over a surface — and this takes a standard action; the rune mage then attunes the rune (as long as he is within ten feet of the drawn rune and the rune remains intact). Any marring of the drawn rune destroys it, and any creature within 5 ft. of a rune may take a standard action to render it useless. (Text runs onto printed p. 44.)", 8),
      fu("Create Runestaff (Ex)", "At 11th level (Table 21), powerful rune mages create rune staves, enabling them to attune to runes in greater numbers; a runestaff is one foot long for each rune they carry. The staff must be made out of a very stout substance such as oak, metal, or stone (most runestaves are wood). The rune mage spends one day per rune inscribing each rune carefully on the staff, making a Knowledge (Runes) check at the end of each day at DC 25 plus the number of runes on the staff — if successful he spends 1,000 XP to empower the rune and continues to the next; if the roll fails the staff is ruined and must be started over completely, any XP spent thus far lost. If all the runes are inscribed correctly, the staff is enchanted over the course of five days, during which the rune mage must fast; at the end he makes a Knowledge (Runes) check (DC 25 + the number of runes on the runestaff) and a Fortitude Save (DC 15 + the number of runes on the staff), and if both are successful the runestaff is complete (if either fails he starts again from scratch and any XP or material costs are lost). Once created, a runestaff allows the rune mage who constructed it to attune to all the runes on the runestaff by simply attuning to the staff once, which counts as a single rune in terms of how many runes the rune mage may attune to; a rune mage may only attune to one runestaff at a time. A rune mage who finds a runestaff built by another mage may attune himself to it by spending one full day in meditation and 500 XP per rune on the staff; until then he cannot use the staff. In combat, runestaves with 1-3 runes count as clubs and those with 4-5 runes count as staves; a finished runestaff is treated as having an enhancement bonus equal to the number of runes inscribed upon it when determining if the runestaff breaks, and other enchantments may be added later, up to a maximum of 5 runes, by the same process. (Text on printed p. 44.)", 11),
      fu("Rune Mastery (Su)", "Rune Mastery I at 12th level and Rune Mastery II at 15th level (Table 21). The most powerful rune mages learn to find the power of the runes inside themselves, allowing them to permanently attune themselves to a rune — one that in some way embodies the beliefs of the rune mage. Mastering a rune requires permanently inscribing the rune on the surface of the rune mage's body (tattoos or scarring); the rune mage then retires to an area to which his chosen rune is linked, invokes his chosen rune pulling its power into himself, and meditates and prays for five days. Each day he must make a Fortitude save (DC 20 + the number of previous days spent in meditation) to withstand the energy of the rune seeping into him; failure causes a number of hit points of damage equal to the amount by which the rune mage failed his Fortitude save. After making five successful saves in a row, the rune mage is permanently linked with the rune and gains mastery of it: he is permanently attuned to this rune, which does not count against his normal allotment of attuned runes. Rune Mastery II allows the rune mage to forge a permanent bond with a second rune if desired, using the same process. (Text on printed p. 44.)", 12),
    ].map((x) => x as FeatureDefinition),
  },

  // ===== Shadetouched, Spellsinger, Totem Mage =====

// Spells & Magic (Bastion Press, © 2002, d20 System)
// prestige classes, printed pp. 55-61, transcribed in full
// — progression tables included — from Shaun's own scanned
// copy (read visually, 2026-11-04). This is a 3.0-era
// third-party book, and 3.0 notations are kept as printed:
// skills such as Alchemy, Animal Empathy, Intuit Direction,
// Scry, and Wilderness Lore; "subdual damage"; the totem
// mage's Totem Shape keyed to the book's changeform spell
// (p. 67); the totem mage's Listen printed with key ability
// (Dex). Printing quirks are recorded as printed, not
// silently resolved: the Shadetouched class text calls its
// members "Shadeseers" throughout while the class and its
// table (Table 24) are titled Shadetouched; the Shadetouched
// Will save advances on the poor track as printed; and the
// Spellsinger's worked Singing Radius example (p. 58) puts
// a 1st-level Mage Armor prepared with Singing Radius III
// in a 4th-level slot even though Radius III is printed as
// costing four spell levels. This book's Spellsinger is a
// different class from the Races of Faerûn Spellsinger
// already in the catalog under id "spellsinger", so this
// one takes id "spellsinger-sam" and its feature keys take
// the "spellsinger-sam" prefix. Summaries are short
// mechanical paraphrases in our own words; no book prose
// is reproduced.

  {
    id: "shadetouched",
    name: "Shadetouched",
    ruleset: "core",
    source: `${SHADE} (pp. 55–56)`,
    sourceUrl: SAM_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "half",
    goodSaves: ["fort"],
    progression: rows(HALF10, GOOD10, POOR10, POOR10),
    classSkills: [
      "Concentration", "Knowledge (arcana)", "Knowledge (the planes)", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Knowledge (Arcana) 10 ranks",
      "Skills: Knowledge (The Planes) 10 ranks",
      "Feats: Shadesight",
      "Special: cannot have positive energy alignment; if a specialist wizard, cannot have necromancy as an opposed school",
    ],
    features: [
      fsh("Shadetouched Proficiencies", "Changed by the forces of the eternal void, developing the granted abilities to their fullest; the class text calls members of this class Shadeseers throughout (the class and Table 24 are titled Shadetouched — recorded as printed). The Shadeseer gains no proficiency in any weapon or armor. Armor of any type may restrict a Shadeseer's movement, which can interfere with his ability to cast spells with somatic components; armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble.", undefined),
      fsh("Spells per Day", "A Shadeseer who has a prior class with spellcasting abilities continues to study spellcasting even as she develops her Shadeseer abilities, but progress is slowed by her focus on less theoretical manipulations of arcane energy: every other level, starting at level 2 (levels 2, 4, 6, 8, and 10 per Table 24), she gains another level of spells as if she had advanced a level in any spellcasting class she belonged to before she became a Shadeseer. She does not gain any other class benefits that a member of that class would have gained.", 1),
      fsh("Enhanced Shadetouched Feats", "Shadeseers automatically receive specific Shadetouched feats at 1st, 3rd, and 5th level (Shadehand, Shadetongue, and Shadecall respectively — see the entries below) and are not required to meet the prerequisites for these feats; their enhanced versions are more powerful than the ordinary versions attainable by non-Shadeseers. If a Shadeseer has already taken a particular feat before gaining it as a class ability, he does not gain another feat in its place; until he reaches the level that grants him the feat in question, the feat operates as usual. (The Shadetouched feats — Craft Necromantic Focus, Shadecall, Shadehand, Shadesight, and Shadetongue, listed in Chapter 1: Feats & Skills — are powered by channeling necromantic energy that drains the user's life force: using one causes nonlethal damage as listed in the feat's description unless the player rolls a natural 1 on her ability check, in which case the damage becomes normal damage and the attempt fails; each feat may be used a number of times per day equal to 2 + the character's ability bonus in the ability required for the feat.)", 1),
      fsh("Enhanced Shadehand Feat", "The Shadeseer automatically gains the Shadehand feat at 1st level, even if she does not meet the prerequisites. Whenever she uses this feat, she can add her Shadeseer level to the ability check to activate it.", 1),
      fsh("Enhanced Shadetongue Feat", "The Shadeseer automatically gains the Shadetongue feat at 3rd level, even if he does not meet the prerequisites. Whenever he uses this feat, he may rebuke or command undead as if he were an evil cleric of 2 levels lower than his total character levels.", 3),
      fsh("Energy Drain Attack", "At 3rd level, the Shadeseer can make an energy drain attack once per day: a touch attack that, if successful, automatically inflicts 1d4 negative levels on the target. Twenty-four hours later, the target must attempt a Will save (DC 10 + 1/2 the Shadeseer's level + the Shadeseer's Charisma bonus) — success removes the negative level without harming the target, but failure reduces the target's level by one; the target must make one Will save for every negative level received. Every negative level inflicted heals 5 hit points of damage to the Shadeseer (10 on a critical hit); if this heals the Shadeseer over any damage he has suffered, the excess hit points are gained as temporary hit points, vanishing after one minute. At 7th level, the Shadeseer can make 2 energy drain attacks per day.", 3),
      fsh("Enhanced Shadecall Feat", "The Shadeseer automatically gains the Shadecall feat at 5th level, even if she does not meet the prerequisites. Whenever she uses this feat, she can add her Shadeseer level to the ability check, and she may control up to 1 HD of undead per character level.", 5),
      fsh("Undead Servitor", "At 9th level, the Shadeseer acquires an undead servitor, attracted to her by the necromantic aura she projects. This servitor is utterly loyal to the Shadeseer, and cannot be turned or rebuked by another. This servitor can be a Ghast, Ghoul, Shadow, Skeleton, Wight, Wraith, or Zombie.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "spellsinger-sam",
    name: "Spellsinger",
    ruleset: "core",
    source: `${SINGER} (pp. 57–58)`,
    sourceUrl: SAM_PATH,
    hitDie: "d4",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(TQ10, POOR10, POOR10, GOOD10),
    classSkills: [
      "Craft (alchemy)", "Concentration", "Craft", "Knowledge", "Listen", "Perform",
      "Profession",  "Speak Language", "Spellcraft",
    ],
    prerequisites: [
      "Skills: Knowledge (Music) 8 ranks",
      "Skills: Perform 10 ranks",
      "Skills: Spellcraft 8 ranks",
      "Feats: any one metamagic feat",
      "Spellcasting: ability to cast 3rd level arcane spells",
      "Special: Bardic Music class ability",
    ],
    features: [
      fg("Spellsinger Proficiencies", "Workers of magic through song, weaving spells by creating music instead of mystic gestures and words. A spellsinger does not gain proficiency in weapons, armor, or shields, and must rely on the proficiencies gained from her other classes. Armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble; Swim checks also suffer a -1 penalty for every 5 pounds of armor or equipment carried. The spellsinger is an arcane spellcaster but does not suffer from the standard chances of arcane spell failure (see the Spellsinging ability).", undefined),
      fg("Spellsongs", "Spellsingers continue their training in arcane magic as per their original class, except now they can work their magic through song: when a new spellsinger level is gained, the character gains new spell slots per day as if he had also gained a level in an arcane spellcasting class she belonged to before becoming a spellsinger (Table 25 gives +1 level of existing class at every level, 1st through 10th). She does not gain any other benefit a character of that class would have gained, such as class abilities, saving throws, or attack bonus.", 1),
      fg("Spellsinging", "The art of weaving arcane spells using song instead of mystic gestures and ancient phrases. Once a character takes a level of spellsinger they may specify any of their prepared spells as spellsongs instead of normal spells; this does not change the level of the spell slot required, like metamagic feats do. If the character does not prepare spells, such as bards and sorcerers, they may choose at the time of casting to make any spell a spellsong. Characters who sing treat all their spellsongs as having no somatic components and instead they all have verbal components — singers do not suffer the chance of arcane spell failure associated with armor, but wearing any type of helmet inflicts a 10% chance of spell failure due to sound distortions caused by a helmet. Characters that play instruments treat their spellsongs as having a somatic and verbal component: they suffer the normal chance for spell failure but receive a +1 bonus to their effective caster level, and the character must have the appropriate instrument on hand to make use of this ability. To cast a spellsong, the character must still meet the spell component requirements of the spell (which makes silence incredibly effective against spellsingers): the spellsinger must make a Perform check against a DC of 10 + the spell level of the spell being cast — if this fails, the spellsong is expended for the day but it does not go off, much like a failed Concentration check; if the Perform check succeeds, the spellsinger then makes whatever Concentration checks are necessary and suffers all appropriate attacks of opportunity, and if the Concentration checks are successful, the spell is cast. A spellsinger casting spells appears to most people to simply be singing or playing a musical instrument, but anyone may make a Spellcraft check (DC 20 plus the level of the spell being cast) to notice arcane undertones in the song. Any spellsong with a duration of concentration requires the caster to keep making music of some type while concentrating; if the spellsinger is affected by silence while concentrating, any spells being maintained end immediately.", 1),
      fg("Bardic Music", "A spellsinger's class levels add to her bard levels for determining the character's total number of uses per day for the Bardic Music ability.", 1),
      fg("Greater Countersong", "Spellsingers are able to counter the effects of sound-based magic more effectively than normal bards: any Perform checks made in order to use the Countersong ability receive a +5 competence bonus.", 2),
      fg("Pierce Silence", "Spellsingers receive a +2 natural bonus to any saving throw made to resist magical silence. This is a supernatural ability.", 3),
      fg("Singing Radius", "When preparing spells (or when casting them for sorcerers and bards), the spellsinger may choose to increase the range of her spells to effect everyone nearby. This acts as a metamagic feat that increases the spell slot required for the spell, and the spell must be prepared or cast as a spellsong; using this ability in all ways functions exactly like using a metamagic feat, and everyone within the radius is affected by the spell, be they friend or foe. Singing Radius I (4th level) allows the spellsinger to cast spells with a range of Personal with a radius of 10' at a cost of two spell levels higher than the original spell. Singing Radius II (7th level) allows the spellsinger to cast spells with a range of Personal or Touch with a radius of 20' at a cost of three levels higher than the original spell. Singing Radius III (10th level) allows the spellsinger to cast spells with a range of Personal, Touch or Close with a radius of 30' at a cost of four levels higher than the original spell. (The book's worked example, p. 58, prepares the 1st-level Mage Armor using Singing Radius III in a 4th-level spell slot — recorded as printed; it does not match the +4-level cost stated above.)", 4),
      fg("Spell Shout", "Once per day the spellsinger may use the spell shout ability to break through a magical silence for one round: the spellsinger may make noise for one round and then returns to being silenced. This is a spell-like ability.", 5),
      fg("Accompaniment", "When accompanied by other musicians the magical power of the spellsinger grows, allowing her to perform much greater magical feats when working with a large group of magicians. To use this ability the characters accompanying the music of the spellsinger must spend a standard action in the same round to accompany the spellsinger, and must also succeed at a Perform check (DC 15); if the accompanist's Perform check is successful, the spellsinger's effective caster level is boosted by +1 for that spell for each person accompanying the spellsinger. Accompanying a spellsinger provokes an attack of opportunity.", 6),
      fg("Pierce Countersong", "When Countersong is used against the spellsinger, the person using Countersong suffers a -10 circumstance penalty to their roll when using it against the spellsinger's spellsongs. This is a supernatural ability.", 8),
      fg("Orchestrate Spellsong", "The spellsinger can now create spell sheet music, or arcane orchestras as they are more commonly called. These function as scrolls but require a Perform check (DC 15 + the level of the spell) to cast from the sheet music successfully. Anyone with the Perform skill may use spell sheet music, even if they are not able to cast arcane spells or do not have the Use Magic Device skill. Creating a piece of spell sheet music follows the same rules as creating a scroll.", 9),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "totem-mage",
    name: "Totem Mage",
    ruleset: "core",
    source: `${TOTEM} (pp. 59–61)`,
    sourceUrl: SAM_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "half",
    goodSaves: ["fort", "will"],
    progression: rows(HALF10, GOOD10, POOR10, GOOD10),
    classSkills: [
       "Climb", "Concentration", "Handle Animal", "Heal",
      "Survival", "Listen", "Knowledge (Nature)", "Spellcraft", 
    ],
    prerequisites: [
      "Shapechange, Wildshape: either by spellcasting ability or class ability, such as the druid's wild shape, the character must be able to transform into her chosen totem",
      "Skills: Handle Animal 8 ranks",
      "Skills: Handle Animal 8 ranks",
      "Feats: Totem Link",
      "Will Save: +4",
    ],
    features: [
      ft("Totem Mage Proficiencies", "Spellcasters who have answered the call of their totem creature, using their totemic connection to awaken new magical talents. Totem mages gain proficiency in simple weapons and light armor. Armor check penalties for armor heavier than leather apply to the skills Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand and Tumble.", undefined),
      ft("Totem Link (Su)", "A totem mage must choose a single animal to link to, and this must be the same animal they chose for the Totem Link feat. Once the character becomes a totem mage, they gain enlarged spell selections and some special abilities based on their totem (see the Totems feature). Once chosen, a totem cannot be changed short of taking the Totem Link feat again with another animal and starting all over again, taking levels in totem mage with the second totem.", 1),
      ft("Spells per Day", "Totem mages are able to cast divine spells by channeling power through their totem — the energy comes from the very source of the totem, essentially the spirit of the species of the totem (the spirits that grant these abilities are not gods, but are the true incarnation of the totem; totem mages cannot spontaneously cast cure or inflict spells). To cast spells the totem mage must have a Charisma of at least 10 + the spell's level; saving throws against a totem mage's spells have a DC of 10 + spell level plus the totem mage's Charisma modifier. The totem mage gains spells each day by communing with his totem, which requires behavior appropriate to the totem (Weasel totem mages may play with shiny objects while Dog totem mages may gnaw bones or chase small animals); these actions cannot involve combat, skill checks, saving throws, or spell casting, the communion can only be done after eight hours of rest, and it takes fifteen minutes. Each day, the totem mage gets a number of spell slots as indicated on Table 27 plus bonus spell slots dependant on the totem mage's Charisma. Table 27 spells per day (by class level, spell levels 0/1/2/3/4/5): L1: 5/3; L2: 6/4; L3: 6/5; L4: 6/6/3; L5: 6/6/4; L6: 6/6/5/3; L7: 6/6/6/4; L8: 6/6/6/5/3; L9: 6/6/6/6/4; L10: 6/6/6/6/5/3. The totem mage's spell slots from her totem mage levels are only used to prepare the spells on the totem mage spell list; the totem mage may also prepare spells on her totem's spell list (see the Totems feature). Totem Mage Spell List (available to all totem mages): 0th — cure minor wounds, detect poison, guidance, know direction, purify food and drink, resistance, virtue. 1st — animal friendship, calm animals, cure light wounds, endure elements, invisibility to animals, magic fang, pass without trace, summon nature's ally I. 2nd — animal messenger, animal trance, charm person or animal, delay poison, hold animal, lesser restoration, speak with animals, summon nature's ally II. 3rd — cure moderate wounds, dominate animal, greater magic fang, neutralize poison, protection from elements, remove disease, summon nature's ally III. 4th — cure serious wounds, dispel magic, giant vermin, reincarnate, repel vermin, summon nature's ally IV. 5th — animal growth, awaken, commune with nature, cure critical wounds, hallow, summon nature's ally V.", 1),
      ft("Totem Shape (Sp)", "This ability functions as the spell changeform (detailed on page 67 of the book) except that the only form the totem mage can assume is that of their totem (the exact forms available by level are given under each totem in the Totems feature). Uses per day per Table 26: 1/day at 1st level, 2/day at 2nd, 3/day at 4th, 4/day at 6th, 5/day at 8th, and 6/day at 10th. At 5th level, the totem mage gains the ability to change into a dire version of their totem; if the creature does not have a dire version, add to the normal version of the creature 3 Hit Dice, +2 to all saving throws and attack bonuses, increase speed by 10 ft. per round, increase the damage die of the creature by one die type, and increase the size category to Large. Totem mages may cast spells while in totem form so long as the spell does not require a material component.", 1),
      ft("Totem Friendship (Sp)", "The totem mage may use the equivalent of animal friendship and speak with animals at will on animals of his totem. This requires a standard action and is a spell-like ability.", 1),
      ft("Totem Companion (Ex)", "If the totem mage has not already done so, he or she automatically attracts a familiar of the same species as the totem mage's totem. The familiar gains abilities based on the totem mage's character level as if he or she was a sorcerer with a +4 to the level, and the creature has maximum hit points for its species. If the totem mage already has a familiar of his totem it gains these bonuses immediately. (Table 26 lists Totem Companion among the 1st-level class features.)", 1),
      ft("Totem Fear (Sp)", "Once per day per class level, the totem mage may cast a fear spell as a spell-like effect but it only affects creatures that fear the totem mage's totem — animals may flee from a Wolf totem mage while men may run from a Bear totem mage. The caster level is equal to the class level of the totem mage, and it is up to the DM to determine what is afraid of each totem at a given time.", 3),
      ft("Totem Facet (Sp)", "At fifth level, the totem mage gains the ability to partially change her shape, taking on a part of the totem's abilities: when using the totem facet ability, the totem mage gains one ability score, saving throw, natural weapon, skill bonus, or movement rate from the statistics for her totem, and may use this facet instead of her own statistics for a number of rounds equal to her class level. Only one facet may be adopted at a time, and each separate facet requires a use of this ability. The totem mage also adopts aspects of the appearance of her totem (a Bear totem mage who gains the claws of her totem suddenly develops oversized, claw-bearing hands, while a totem mage of the horse totem who increases his speed may have his legs grow and gain hooves). This is a supernatural ability. Uses per day per Table 26: 1/day at 5th level, 2/day at 7th, and 3/day at 9th.", 5),
      ft("Totem Ability (Ex)", "At 9th level, the totem mage gains access to a special ability granted by their totem, which is described in the totem descriptions (see the Totems feature).", 9),
      ft("Totems", "Each totem listed below grants unique abilities that directly relate to its animal; the DM is free to create new totems to expand this list, and players are encouraged to work with their DM to create totems that match their character concepts. Each totem gives the forms its totem shape can take (by totem mage level), an added spell list (one spell per spell level, 1st-5th, prepared with the totem mage's slots), and the Totem Ability gained at 9th level. BEAR — Totem shape: black bear at 1st level, brown bear at 3rd level, polar bear at 5th level. Spells: 1. remove fear; 2. endurance; 3. negative energy protection; 4. restoration; 5. righteous might. Totem Ability: +2 bonus to Constitution. BOAR — no separate totem-shape line is printed for the boar (totem shape gives the boar form). Spells: 1. divine favor; 2. bull's strength; 3. magic vestment; 4. divine power; 5. righteous might. Totem Ability: +2 bonus to Strength. CAT — Totem shape: a normal cat at 1st level, a lion at 3rd level, a tiger at 5th level. Spells: 1. detect snares and pits; 2. cat's grace; 3. haste; 4. freedom of movement; 5. true seeing. Totem Ability: +2 bonus to Dexterity. DOG — Totem shape: a normal dog at 1st level and a riding dog at 2nd level. Spells: 1. bless; 2. zone of truth; 3. prayer; 4. discern lies; 5. atonement. Totem Ability: +1 luck bonus to all saving throws. EAGLE — Totem shape: a normal eagle at 1st level and a giant eagle at 3rd level. Spells: 1. deathwatch; 2. sound burst; 3. fly; 4. air walk; 5. commune. Totem Ability: +2 bonus to Intelligence. HORSE — Totem shape: a light warhorse at 1st level and a heavy warhorse at 2nd level. Spells: 1. mount; 2. endurance; 3. phantom steed; 4. freedom of movement; 5. plane shift. Totem Ability: 10 ft. to the character's base movement. INSECT — Totem shape: a giant worker ant or giant bee at 1st level; a giant soldier ant, giant praying mantis, or giant bombardier beetle at 2nd level; a giant wasp at 3rd level; a giant stag beetle at 4th level. Spells: 1. cause fear; 2. summon swarm; 3. poison; 4. death ward; 5. insect plague. Totem Ability: may use spider climb as a spell-like ability at will, with a caster level equal to his class level. RAT — Totem shape: a normal rat at 1st level. Spells: 1. obscuring mist; 2. darkness; 3. contagion; 4. poison; 5. slay living. Totem Ability: Move Silently, Hide, Spot and Search become class skills for the totem mage. WOLF — Totem shape: a wolf at 1st level. Spells: 1. magic weapon; 2. spiritual weapon; 3. prayer; 4. greater magic weapon; 5. mark of justice. Totem Ability: gains the Scent ability.", 1),
    ].map((x) => x as FeatureDefinition),
  },
];
