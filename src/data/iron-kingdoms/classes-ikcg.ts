import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

// Iron Kingdoms Character Guide (Privateer Press, 2004),
// Chapter Two: Characters & Classes — the three "New Classes"
// entries that were never built in the original program: the
// Bodger (pp. 93–100), the Fell Caller (pp. 100–104), and the
// Gun Mage (pp. 104–111). The chapter's fourth new class, the
// Arcane Mechanik (p. 88), already has a record from Liber
// Mechanika in the liber-mechanika pack. Added 2026-11-02 at
// Shaun's order ("Build Bodger, Fell Caller, and Gun Mage
// now") after the skills audit flagged the gap. Everything
// below was read from the printed pages of the scanned PDF
// (progression tables verified against the page images of
// Tables 2–3, 2–4, 2–5, and 2–6). Progression rows are
// recorded for levels 1–10, per this app's convention for
// base classes. Short mechanical summaries in our own words,
// cited to book + page.
// Source PDF: /A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf
//
// OMISSIONS / FLAGS:
// - The Mechanik's Wrench callout (p. 100) is a weapon
//   (simple, one-handed melee, 20 gp, 1d6/1d4, ×2, 5 lb.,
//   bludgeoning or piercing, double weapon), not a class
//   feature; it belongs to an equipment batch and is not
//   folded into the Bodger record.
// - GUN MAGE CASTING PROFILE — NOT modeled. The gun mage has
//   his own spell list (pp. 110–111: 191 printed entries —
//   17 0-level, 28 1st, 40 2nd, 29 3rd, 26 4th, 24 5th,
//   27 6th). Most entries are SRD spells whose records carry
//   no "Gun Mage" list level, and the list's new Iron
//   Kingdoms spells (printed in boldface in the book; the
//   ones legible as boldface in the scan are arcane bullet
//   (1st), wraith (4th), and death bullet (6th); full text
//   in Chapter Five: Iron Kingdoms Spells, pp. 352–367) have
//   no records in the app at all. Modeling the profile needs
//   a follow-up batch: the IKCG spell records plus a
//   "Gun Mage" list level on the ~188 shared spells. The
//   casting is recorded faithfully in the Spells feature
//   below in the meantime (the Paingiver/Mortitheurge
//   precedent), with both of the book's casting tables
//   transcribed for levels 1–10.

const IKCG = "Iron Kingdoms Character Guide";
const IKCG_PATH =
  "/A POC PC related/1.D&D 3rd ed.-Iron Kingdoms-Character Guide (Rules Sourcebook).pdf";
const BODGER = `${IKCG} — Bodger`;
const FELL_CALLER = `${IKCG} — Fell Caller`;
const GUN_MAGE = `${IKCG} — Gun Mage`;

type F = FeatureDefinition & { levelsNeeded?: number };

function f(name: string, description: string, levelsNeeded: number | undefined, source: string): F {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl: IKCG_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const THREE_QUARTER = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

export const IRON_KINGDOMS_CLASSES: ClassDefinition[] = [
  {
    id: "bodger",
    name: "Bodger",
    ruleset: "iron_kingdoms",
    source: `${BODGER} (pp. 93–100)`,
    sourceUrl: IKCG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(THREE_QUARTER, GOOD, GOOD, POOR),
    classSkills: [
      "Appraise", "Climb", "Craft", "Craft (clockwork)", "Craft (mechanika)",
      "Craft (small arms)", "Craft (steam engine)", "Disable Device", "Jump",
      "Knowledge (local)", "Knowledge (mechanika)", "Knowledge (any science or technical)",
      "Open Lock", "Profession (mechanik)", "Search", "Spot", "Use Rope",
    ],
    features: [
      f("Bodger Basics", "Alignment: any. Intelligence is crucial to a bodger (a smart bodger is a skilled bodger); Constitution and Charisma are also valuable. Weapon and armor proficiencies: all simple weapons and light armor, but not shields.", undefined, `${BODGER} (p. 97)`),
      f("Bodging", "A bodger has a nearly preternatural gift for making useful gizmos from spare parts and patching up mechanika. When repairing mechanika, he adds one-half his bodger class levels as a competence bonus to Craft (tools), Craft (mechanika), and Craft (steam engine) checks. Bodging together a makeshift tool or weapon: scrounge for parts for a number of rounds equal to the Craft (tools) DC, then pass a Search check (DC 15) to have the needed parts; assembly takes another number of rounds equal to the DC, followed by the Craft (tools) check — on a failed check he may rebuild once (same time) and check again, and a second failure means the parts are wrong. The Craft (tools) DC is 10 plus modifiers (+2 per size category larger than Tiny; +2 one-handed or smaller weapons; +4 two-handed or ranged weapons; +6 weapons too large for a Medium creature; +10 simple tool or weapon; +15 complex tool or weapon; +20 outlandish tool or weapon; extra components for a multi-purpose device add further). Bodged tools hold together for 10 minutes of continuous use or four successive skill checks (or attacks, for a weapon), and bodged equipment imposes a −2 penalty on any check or roll made with it. Bodged repairs cost 1/10 the item's price in raw materials (normal repairs cost 1/5) and take half the time of normal repairs, but need one hour of maintenance daily to keep working (for extremely complicated machinery, hours equal to 1/5 the repair DC); a machine left unmaintained breaks down, and repairing previously bodged machinery raises the Craft (mechanika) or Craft (steam engine) DC by +5 (+10 if complicated). Scrounging (urban areas with junkyards and scrap heaps): after 1d4 hours and a successful Search check (DC 15), parts found reduce the cost of a construction or repair by 25%; succeeding by 5 or more and passing an Appraise check (DC 12) raises the reduction to 35%; scrounged parts cannot be sold for profit.", 1, `${BODGER} (pp. 97–98)`),
      f("Jackwrench (Ex)", "By kicking, striking, and swearing at machinery, a bodger can make a broken machine function for 1d4 rounds; in combat this is a full-round action. A piece of mechanika can only be jackwrenched 1d3 times before it needs a successful repair to function again; if it breaks down again after repairs, it can be convinced to work once more. Jackwrenching can also enhance a Use Magic Device or Use Mechanikal Device check: jackwrenching a magical or mechanikal device (such as a wand or rod) grants a +10 circumstance bonus to the relevant skill check, but each time a device is jackwrenched this way there is a 20% chance it discharges as desired and then ceases to function completely, plus an additional +5% chance per charge expended that the device is broken; it cannot be used to decipher a written spell or to cast a spell from a scroll.", 1, `${BODGER} (pp. 98–99)`),
      f("Evasion (Ex)", "Beginning at 2nd level, when exposed to any effect that normally allows a Reflex saving throw for half damage, the bodger takes no damage on a successful saving throw (but still takes full damage on a failed save, as printed). Evasion can only be used in light armor or no armor.", 2, `${BODGER} (p. 99)`),
      f("Tinkering (Ex)", "With a sturdy blunt or piercing weapon, a bodger tears apart functioning machinery with great efficiency. From 2nd level he can use Disable Device to disarm standard and mechanikal traps, but not purely magical ones (mechanikal traps generally have DCs of 25 or higher). At 5th level he adds half his class level to Search checks to find mechanical/mechanikal traps, and at 10th level half his class level to Disable Device checks to disarm such traps. Beating a trap's DC by 10 or more with a Disable Device check lets him study the trap, learn its design, figure out how it works, and remove it without activating it, or bypass it (with his party) without disarming it.", 2, `${BODGER} (p. 99)`),
      f("Demolish (Ex)", "At 3rd level, a bodger strikes constructs or creatures largely comprised of mechanikal parts for an additional +1d6 damage when using a sturdy blunt or piercing weapon; this increases by +1d6 every three levels after 3rd (+2d6 at 6th, +3d6 at 9th, +4d6 at 12th, +5d6 at 15th, +6d6 at 18th in the full table). He deals the same extra damage to regular machinery, though the machine's hardness still applies.", 3, `${BODGER} (p. 99)`),
      f("Give It a Good Kick (Ex)", "At 5th level, the bodger's jackwrenching forces a machine to operate for 2d4 rounds plus one per three class levels. The ability can also squeeze power from an 'empty' charged magic or mechanikal device: the DM secretly rolls 1d3 for the number of additional charges available, and each charge requires a successful Use Magic Device or Use Mechanikal Device activation check (with the +10 circumstance bonus from jackwrenching); once the additional charges are used up, or a check is missed, the device completely ceases to function.", 5, `${BODGER} (p. 99)`),
      f("Toss a Hammer at It (Ex)", "At 8th level, once per day the bodger can use the jackwrench ability as a ranged attack within 30 feet.", 8, `${BODGER} (p. 99)`),
      f("Master Mechanik", "At 11th level, and again at 14th, 17th, and 20th levels, the bodger chooses one of the following abilities. Improved Evasion: as per the rogue special ability (PHB). Master Bodger: always decrease the cost of repairs or construction by 25%, and maintenance takes only half-an-hour per day for normal machinery and an hour for complex machines. Precise Timing: never caught flat-footed by a construct or mechanikal adversary, and gains a +4 dodge bonus against them. Skill Mastery: as per the rogue special ability (PHB). Wrench Tosser (Ex): use Toss a Hammer at It an additional time per day (this ability can be taken more than once). Feat: a feat may be chosen in place of a Master Mechanik ability.", 11, `${BODGER} (pp. 99–100)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "fell-caller",
    name: "Fell Caller",
    ruleset: "iron_kingdoms",
    source: `${FELL_CALLER} (pp. 100–104)`,
    sourceUrl: IKCG_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort"],
    progression: rows(THREE_QUARTER, GOOD, POOR, POOR),
    classSkills: [
      "Climb", "Concentration", "Craft", "Intimidate", "Jump", "Listen",
      "Perform", "Ride", "Spot", "Survival", "Swim",
    ],
    features: [
      f("Fell Caller Basics", "Race: trollkin only — all fell callers are trollkin, born in all trollkin bloodlines with Bragg's Gift. Alignment: any nonlawful (their fiery blood and impetuous nature prevent a lawful alignment). Charisma is important, as it determines the success of his Perform checks and his fell call save DCs; Strength, Constitution, and Dexterity are also valuable. Weapon and armor proficiencies: all simple and martial weapons, light armor, medium armor, and shields. A rare trollkin born with Bragg's Gift who does not pursue it as a career may still use the fell call ability once per day, but a character created as such must give up one feat slot to retain the ability.", undefined, `${FELL_CALLER} (pp. 101–102)`),
      f("Fell Calls (Sp)", "A fell caller may make 2 calls per level per day (2 at 1st level, rising to 40 at 20th); some calls use up more than one slot. Fell callers may use the musical abilities of the bard class, though they are made as shouted fell calls, not songs, and in addition gain the fell calls listed below, most of them gated by Perform (and sometimes Intimidate) ranks rather than by class level alone. Where a call allows a save, the DC is 10 + 1/2 the fell caller's level + his Charisma modifier. When a fell caller uses an immediate effect call (stunning blast, fell howl, sonic blast, or doom's quaking call) he decides the effective level of the call (up to his fell caller class level); after performing it he takes nonlethal damage equal to the effective level, and a successful Fortitude save (DC 10 + the effective call level) halves that damage.", 1, `${FELL_CALLER} (pp. 102–104)`),
      f("Fell Call", "Requires at least 3 ranks in Perform and 1 rank in Intimidate. Enemies who hear the calling for a full round are afflicted with great dread: a −2 morale penalty to saving throws against charm and fear effects and a −1 morale penalty to attack and damage rolls, lasting as long as the trollkin howls and for 5 rounds after. A supernatural, mind-affecting ability.", 1, `${FELL_CALLER} (p. 103)`),
      f("Signal Call", "Requires at least 3 ranks in Perform. A powerful call with no special effect other than range: it can be heard in a radius of 1 mile per two levels of the fell caller, and is typically used for military signaling; complex intonations such as words cannot be made with it. An extraordinary ability that lasts as long as the fell caller continues to call.", 1, `${FELL_CALLER} (p. 103)`),
      f("Stay Death", "Requires at least 4 ranks in Perform. While this croon is made, all allies within earshot do not become disabled at 0 hp and may continue fighting to −10 hp unhindered (at −10 hp they die as normal); subjects caught between 0 and −10 hp when the call ends suffer the normal effects. A supernatural ability that lasts as long as the fell caller continues to croon.", 1, `${FELL_CALLER} (p. 103)`),
      f("Stunning Blast", "Requires at least 6 ranks in Perform (earliest at 3rd class level). A sharp call extending in a cone 5 ft. per level; all caught in it suffer 1d6 nonlethal damage per level of the fell caller, with a Fortitude save (DC 10 + 1/2 fell caller's level + fell caller's Cha mod) for half damage. An immediate effect call; a supernatural sonic attack.", 3, `${FELL_CALLER} (p. 103)`),
      f("Bonus Feats", "Fell callers gain a bonus feat every four levels (4th, 8th, 12th, 16th, and 20th), which may be chosen from the list of bonus feats for fighters, with the exceptions of Greater Weapon Focus, Weapon Specialization, and Greater Weapon Specialization.", 4, `${FELL_CALLER} (p. 103)`),
      f("Fell Howl", "Requires at least 8 ranks in Perform and 8 ranks in Intimidate (earliest at 5th class level). All opponents within 30 ft. must make a Will save (DC 10 + 1/2 fell caller's level + fell caller's Cha mod) or become frightened for 3d6 rounds; creatures and opponents with more HD than the fell caller are not affected (see the frightful presence ability in the MM). An immediate effect call; an extraordinary ability.", 5, `${FELL_CALLER} (p. 103)`),
      f("Sonic Blast", "A fell caller of at least 7th level and with at least 8 ranks in Perform and 5 ranks in Intimidate can release a destructive vocal blast that damages objects and opponents, identical to the spell shout except that the damage increases by 1d6 for every level of the fell caller beyond 7th, to a maximum of 10d6. An immediate effect call; a supernatural sonic attack.", 7, `${FELL_CALLER} (p. 103)`),
      f("Confusion Call", "A fell caller of at least 7th level and with at least 9 ranks in Perform may sound a strange call that confuses enemies: identical to the spell confusion, except that the radius is 5 ft. per two levels and only opponents are affected. A supernatural, mind-affecting ability that lasts as long as the fell caller continues to croon.", 7, `${FELL_CALLER} (p. 103)`),
      f("Chorus Call", "At 9th level, the fell caller may sustain two calls at once — either two continuous calls, or one continuous call punctuated by immediate effect calls (such as sonic blast); he may not perform two immediate effect calls simultaneously. Using a chorus call costs one additional daily slot, paid any time a second call is activated, be it continuous or instant.", 9, `${FELL_CALLER} (p. 103)`),
      f("Doom's Quaking Call", "A fell caller of at least 10th level and with at least 12 ranks in Perform may let forth a booming, subsonic bellow that shatters physical objects, released in a cone 5 ft. long per level. All objects with a hardness equal to or less than half the fell caller's level are affected (objects with hit points exceeding three times the fell caller's level are immune); attended items may make a Fortitude save as usual (DC 10 + 1/2 fell caller's level + fell caller's Charisma modifier), and magical items are not affected. An immediate effect call; a supernatural sonic attack.", 10, `${FELL_CALLER} (pp. 103–104)`),
      f("Greater Fell Call", "A fell caller of at least 12th level and with at least 15 ranks in Perform and 12 ranks in Intimidate releases an even more potent fell call, identical to the lesser fell call except that the penalties are −6 (saving throws) and −3 (attack and damage) respectively. Using this ability takes up two daily call slots. A supernatural, mind-affecting ability.", 12, `${FELL_CALLER} (p. 104)`),
      f("Greater Chorus Call", "At 15th level, the fell caller may sustain three calls at once — three continuous calls, or two continuous calls punctuated by immediate effect calls (such as sonic blast); he may not perform two or three immediate effect calls simultaneously. A triple chorus call costs two additional daily slots: one additional slot when the second call is activated and the second additional slot any time a third call is activated, be it continuous or instant.", 15, `${FELL_CALLER} (p. 104)`),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "gun-mage",
    name: "Gun Mage",
    ruleset: "iron_kingdoms",
    source: `${GUN_MAGE} (pp. 104–111)`,
    sourceUrl: IKCG_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(THREE_QUARTER, POOR, GOOD, POOR),
    classSkills: [
      "Bluff", "Climb", "Concentration", "Craft", "Craft (small arms)",
      "Intimidate", "Jump", "Knowledge (arcana)", "Listen", "Spellcraft",
      "Spot", "Swim",
    ],
    features: [
      f("Gun Mage Basics", "Alignment: any (gun mages tend to be free spirits, less rigidly ordered and far more chaotic than their arcane brethren). Charisma determines how powerful a spell a gun mage can cast, how many spells he can cast per day, and how hard those spells are to resist; Intelligence is important for several class skills, and Dexterity determines his ability with his pistol. Weapon and armor proficiencies: all simple weapons and all pistols; light armor, but not shields.", undefined, `${GUN_MAGE} (pp. 106–107)`),
      f("Spells", "Gun mages cast arcane spells like sorcerers — spontaneously, without preparing them beforehand or keeping a spellbook — but from their own spell list (pp. 110–111; 191 printed entries: 17 0-level, 28 1st-level, 40 2nd-level, 29 3rd-level, 26 4th-level, 24 5th-level, 27 6th-level). A gun mage must have a Charisma score of at least 10 + the spell's level to cast a spell, receives bonus spells per day for high Charisma, and the Difficulty Class of a saving throw against his spells is 10 + the spell's level + his Charisma modifier. He begins play knowing four 0-level spells, and gains new spells known per Table 2–6 (spells known are fixed and not affected by Charisma): spells known at levels 1–10 are, for 0-level spells, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6; for 1st-level, —, 2*, 3, 3, 4, 4, 4, 4, 4, 4; for 2nd-level, —, —, —, 2*, 3, 3, 4, 4, 4, 4; for 3rd-level, —, —, —, —, —, —, 2*, 3, 3, 4; for 4th-level, 2* at 10th (*provided the gun mage's Charisma grants a bonus spell of that level); 5th- and 6th-level spells known arrive at 13th and 16th level in the full table. Spells per day (Table 2–5) at levels 1–10: 0-level 2, 3, 3, 4, 4, 4, 5, 5, 5, 6; 1st-level —, 0, 1, 2, 3, 3, 4, 4, 5, 5; 2nd-level —, —, —, 0, 1, 2, 2, 3, 3, 4; 3rd-level — through 6th, then 0, 1, 2, 2; 4th-level 0 at 10th; 5th- and 6th-level spells per day arrive at 13th and 16th level in the full table. The gun mage's pistol can substitute as an arcane spell focus for any spell requiring a focus. This list is modeled as a casting profile in the Spells section (added 2026-11-02): the shared spells carry Gun Mage list levels and the new Iron Kingdoms spells (boldface in the book, full text at pp. 352–367) have their own records. One printed entry, resilient sphere, has no spell record in the data — an SRD spell that was never built (see REBUILD-NOTES.md).", 1, `${GUN_MAGE} (pp. 107–108, 110–111)`),
      f("Arcane Focus", "A gun mage channels arcane magic through a pistol: with a functioning pistol he always has the arcane focus necessary to cast his spells, and he can make do without inexpensive material components, though any component worth 100 gp or more must be supplied. Any ray spell he casts can be focused through the barrel of his pistol, allowing him to use his pistol ranged attack bonus (and any ensuing bonuses from Weapon Focus or other feats) to determine the ranged touch attack bonus for resolving the ray; he cannot cast a spell and fire his pistol at the same time. Normal pistols are not built to withstand this: for every two spell levels cast through the pistol it loses one point of hardness (rounding up for odd level spells), and when its hardness reaches 0 it is destroyed, consumed by the arcane forces; a common pistol has a hardness of 10 and 5 hit points. This damage only applies to spells directly channeled into the pistol (ray spells and spells linked to rune bullets), and magelock pistols are immune to it.", 1, `${GUN_MAGE} (pp. 107–108)`),
      f("Bond with Magelock Pistol", "A gun mage can bond with the strange metal used to create magelock pistols: bonding takes a full day and uses up alchemical materials costing 100 gp, and the bonded weapon becomes an extension of the gun mage. He can bond to a number of magelock pistols equal to his Charisma ability modifier. As the master's gun mage levels increase, the bonded pistol grows more durable (Table 2–7): a standard magelock pistol begins with hardness 10 and 8 hit points, gaining a hardness bonus of +1 at levels 1–2 that rises by +1 every two levels (to +10 at 19th–20th) and a hit point bonus of +2 at levels 1–2 rising by +2 every two levels (to +20 at 19th–20th), and special abilities by level band — Alertness and spell link (1st–2nd), ranged touch (3rd–4th), touch (5th–6th), sighting link (7th–8th), call pistol (9th–10th), and scry (13th–14th). Levels of sorcerer, wizard, warcaster, or any other spellcasting class do not stack for determining the master's level for a bonded magelock pistol unless the class specifically states that it does. If the bonded pistol is destroyed, the master must attempt a Fortitude saving throw (DC 15): on a failure he loses 200 experience points per class level, and a successful save reduces the loss to half (his experience point total can never go below zero from this).", 1, `${GUN_MAGE} (pp. 108–109)`),
      f("Bonded Pistol: Spell Link", "Due to the magic channeling and absorbing properties of magelock metal, any personal spell cast by the master also affects his bonded magelock pistol if the pistol is within 5 feet at the time; if the spell has a duration other than instantaneous, the spell stops affecting the pistol if it is moved farther than 5 feet away, and the effect is not restored even if the master retrieves the pistol before the duration would have ended. The master and the pistol can share spells even if the spells do not normally affect items.", 1, `${GUN_MAGE} (pp. 109–110)`),
      f("Reinforcing Runes", "At 2nd level, the gun mage learns arcane secrets for reinforcing his pistols to withstand the punishment of channeling magical energies: for every 50 gp in materials and one day spent carefully carving runes into a pistol, he can increase the pistol's hardness by 1 point, to a maximum hardness of 15; for every 100 gp and one day's time, the pistol's hit points can be increased by 1 point, to a maximum of 16. These reinforcing runes stack with the bonuses to a bonded magelock pistol.", 2, `${GUN_MAGE} (p. 108)`),
      f("Cast Rune Bullet", "At 3rd level, the gun mage learns to craft special bullets that channel spell energy. When firing a rune-cast bullet, he can, as a free action, channel a spell into the bullet; if the bullet hits its target, it does an additional +1d6 force damage per level of the spell channeled into it (cantrips only add +1d3 damage). From 6th level, his rune-cast bullets are treated as having a +1 enhancement bonus when spell levels are channeled into the bullet, increasing by +1 for every 6 levels in the class (+2 at 12th, +3 at 18th). He may not channel a spell into a bullet that is delivering either a ranged touch attack or a touch attack spell. Casting rune bullets is an intensive process requiring a properly equipped gunner's kit and an appropriate skill check (see the Firearms-related Skills callout, p. 146); the material cost, in addition to the standard pistol charge cost, is 1 gp for each rune-cast bullet (lead with gold shavings or dust). A gun mage can normally cast and etch 5 bullets per hour; every hour after the first requires a Concentration check (DC 12), and on a failure he is fatigued and must wait a full day before casting more bullets. Etching imposes a temporary −1 penalty to all his ranged attacks per hour spent, recovering at 1 point every 2 hours once he stops.", 3, `${GUN_MAGE} (p. 108)`),
      f("Bonded Pistol: Ranged Touch", "If the master is 3rd level or higher, his magelock pistol can be used to deliver ranged touch spells: a rune-cast bullet must already be loaded in the pistol, and when the master casts a ranged touch spell the loaded bullet is designated as the 'toucher' (the master must be holding the pistol at the time of casting). The spell is delivered as a ranged touch attack made with the gun mage's pistol attack bonus (and any ensuing bonuses from Weapon Focus or other feats); if the attack would also succeed as a normal ranged attack, the pistol damage is also applied. The bullet holds the charge until the pistol is fired, but casting another spell before discharging it dissipates the touch spell. Casting a touch spell into a rune-cast bullet and firing the magelock are never a single action: the spell keeps its normal casting time and firing the pistol requires a separate standard action.", 3, `${GUN_MAGE} (p. 110)`),
      f("Bonded Pistol: Touch", "If the master is 5th level or higher, the magelock pistol can be used to deliver touch spells at range, handled exactly as the Ranged Touch ability.", 5, `${GUN_MAGE} (p. 110)`),
      f("Bonus Feats", "At 5th level and every five levels thereafter (10th, 15th, 20th), a gun mage gains a bonus feat chosen from the following list: any Metamagic feat, Combat Casting, Combat Loading (Improved Combat Loading), Dodge (Mobility), Improved Initiative, Point Blank Shot (Far Shot, Improved Precise Shot, Precise Shot, Rapid Shot, Shot on the Run), Quick Draw, Skill Focus (Craft [small arms]), Spell Focus (Greater Spell Focus), Spell Penetration (Greater Spell Penetration), Weapon Focus (pistol).", 5, `${GUN_MAGE} (p. 109)`),
      f("Bonded Pistol: Sighting Link", "If the master is 7th level or higher, as a free action with a successful Concentration check (DC 15) he can see as if looking out from his pistol's sights (or the end of the barrel if it has no sights) instead of using his own eyes, allowing him to aim the pistol without looking.", 7, `${GUN_MAGE} (p. 110)`),
      f("Bonded Pistol: Call Pistol", "At 9th level, the master can summon his magelock pistol to his hand: when separated from it, with a successful Concentration check (DC 18) he causes the pistol to fly into his hand, so long as it is not gripped by another and can be seen by its master. This is a move action, though a gun mage with the Quick Draw feat can call, as a free action, as many bonded pistols as he has hands.", 9, `${GUN_MAGE} (p. 110)`),
      f("Bonded Pistol: Gun Scrye", "If the master is 13th level or higher, he may scry on his pistol (as if casting the spell scrying) once per day — a spell-like ability requiring no material components or focus that lets him see his bonded pistol and its surroundings if they are ever separated.", 13, `${GUN_MAGE} (p. 110)`),
    ].map((x) => x as FeatureDefinition),
  },
];
