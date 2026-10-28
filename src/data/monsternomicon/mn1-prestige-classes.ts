import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Monsternomicon vol. 1 (Privateer Press, 2002) appendix
// prestige classes: Adventuring Scholar (pp. 219–223), Bone
// Grinder (pp. 224–228), and Monster Hunter (pp. 229–233).
// The book is a 3.0-era text; its skill names are recorded
// with their 3.5 equivalents where the skill was renamed or
// dropped (Alchemy = Craft (alchemy); Wilderness Lore =
// Survival; Animal Empathy folded into Handle Animal; Intuit
// Direction dropped). Two printed text/table conflicts are
// recorded as printed and noted on the records, with the
// class-features text followed (this batch's convention):
// Adventurer's Zeal (text: 3rd level; Table 1-1: 4th) and the
// monster hunter's final improved-tracking step (text: 10th
// level; Table 1-1: 9th). All progression tables were
// verified against page images. Short mechanical summaries
// in our own words, cited to book + page.
// Source PDF: /transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf

const MN1 = "Iron Kingdoms Monsternomicon, vol. 1";
const MN1_PATH = "/transfer/DnD-3.5/10937613-Iron-Kingdoms-Monsternomicon-v1.pdf";
const SCH = `${MN1} — Adventuring Scholar`;
const BGR = `${MN1} — Bone Grinder`;
const MHU = `${MN1} — Monster Hunter`;

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
    sourceUrl: MN1_PATH,
    ...(levelsNeeded ? { levelsNeeded } : {}),
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const FULL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const MONSTERNOMICON_MN1_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "adventuring-scholar",
    name: "Adventuring Scholar",
    ruleset: "iron_kingdoms",
    source: `${SCH} (pp. 219–223)`,
    sourceUrl: MN1_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ, POOR, GOOD, GOOD),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft (alchemy)", "Decipher Script",
      "Diplomacy", "Gather Information", "Jump", "Knowledge (any)", "Listen",
      "Lore (any)", "Move Silently", "Profession", "Search", "Speak Language",
      "Spot", "Swim",
    ],
    prerequisites: [
      "Skills: Knowledge or Lore (any) 5 ranks, Gather Information 4 ranks, Profession (teacher, curator, etc.) 5 ranks",
      "Feat: Skill Focus (any Lore or Knowledge skill)",
    ],
    features: [
      f("Field of Study", "Every adventuring scholar has a specific scholastic field that he or she specializes in (“general knowledge” may not be selected). The scholar will also usually have some sort of special focus within that field that is a pet subject (no additional bonuses for it, however). The book's Table 1-1 also grants this class a luck bonus column (see Against All Odds).", 1, `${SCH} (p. 222)`),
      f("Field Specialist", "At 1st level the adventuring scholar is considered a specialist and gains a +2 competence bonus to all Knowledge and Lore skill checks related to his or her field of specialization. He also receives a +1 synergy bonus to checks of other skills when they are directly involved in some way with the field of study. Furthermore, the scholar may attempt an untrained skill check on any Knowledge or Lore skill roll related to his or her field of study, even if he would not normally be allowed (i.e., if it were a trained-only check).", 1, `${SCH} (p. 222)`),
      f("Base of Operations", "The adventuring scholar also starts off with some form of base of operations, almost invariably tied to the scholar's profession and usually a university, museum, or similar institution of culture or knowledge. The scholar may draw upon this place for resources (within reason), but he must also pay it the respects he would any other place of employment; scholars who abuse their role may have it revoked (at the DM's discretion). Scholars may be sponsored by a wealthy benefactor, but may not sponsor themselves. Along with this base of operations comes a Scholarly Reputation score, measured in ranks just as a skill: its base modifier is equal to the scholar's competence bonus as a specialist, scholar, or master of his field (+2, +4, or +6 respectively), though it may be raised by penning scholarly tomes. The score may be added as a circumstance bonus to Charisma-based rolls (such as Diplomacy skill rolls or attempts to influence NPC attitudes, per the book's Table 1-2) to influence fellow scholars, students, aristocrats, and other educated individuals who would be aware of the scholar's work and importance to the scholarly community; it does not influence extraordinary, supernatural, or spell-like abilities.", 1, `${SCH} (p. 222)`),
      f("Against All Odds (Ex)", "Adventuring scholars are known for many things, but their luck is legendary. An adventuring scholar gains a luck bonus that applies to all saving throws (the Luck Bonus column of Table 1-1): +1 at 1st through 3rd level, +2 at 4th through 6th, +3 at 7th through 9th, and +4 at 10th. The bonuses are not cumulative — the value for the scholar's current level applies.", 1, `${SCH} (p. 222)`),
      f("Exotic Weapon", "In their travels, adventuring scholars are known to pick up all sorts of unusual knowledge and abilities. At 2nd level they gain a free exotic weapon feat (Exotic Weapon Proficiency in one exotic weapon). Choice of weapons varies greatly, although versatile and clever weapons are the most favored.", 2, `${SCH} (p. 222)`),
      f("Bonus Language", "In their immense amount of study, adventuring scholars pick up many languages. They gain a bonus language at levels 3, 6, and 9.", 3, `${SCH} (p. 222)`),
      f("Adventurer's Zeal (Ex)", "The adventuring scholar gains the adventurer's zeal, a thirst for adventure that pushes him beyond his normal limits through sheer bravery. He may now add his Charisma bonus to his AC. This bonus represents a preternatural level of courage and occasional wanton abandon. This bonus applies even when wearing armor, as well as when flat-footed. It does not apply if the scholar is immobilized. (The class-features text gives this ability at 3rd level; Table 1-1 lists it at 4th. The text is followed and the conflict recorded, as printed.)", 3, `${SCH} (pp. 222–223)`),
      f("Easy Allies (Ex)", "In any populated location, the scholar may make a Gather Information roll to see if he can locate an existing ally or create a new one, using the book's Easy Allies table (Table 1-2) to determine the DC: find where the NPC (either the individual being affected or the general level of the local populace) falls in the “Currently” column (Antagonist, Neutral, Friend, Confidant, Ally), then roll — the scholar may add his Gather Information ranks, as well as a +5 competence bonus, to the roll (in addition to the Cha bonus) — and look across the line to find the highest DC beaten. The most positive attitude level achieved with the roll is the type of ally found, but at 5th level the Ally column is ignored (a Confidant is the highest that may be achieved). This relationship usually only lasts the duration of a particular scene or act of an adventure. This roll may only be made once per location, per visit, and it may not be used more than once on the same NPC; the scholar may not take 10 or 20 on this roll. At 8th level the ability improves: successes in the “Ally” column are not ignored — the scholar has made a lasting ally that will continue to help the character well beyond the current adventure — and furthermore, the scholar may increase the competence bonus to +10. The same restrictions apply.", 5, `${SCH} (p. 223)`),
      f("Field Scholar", "At 5th level the adventuring scholar is considered a true scholar in his or her field. The competence and synergy bonuses for the field of study rise to +4/+2 respectively. The scholar may also now take 10 on any Knowledge or Lore skill roll related to his field of study, even if circumstances would normally prohibit him from doing so.", 5, `${SCH} (p. 222)`),
      f("Pen Scholarly Work", "At 7th level the adventuring scholar may raise his Scholarly Reputation (see Base of Operations) by writing scholarly texts. To write a text the scholar must invest a great deal of time into research, study, writing, and revising; the length of time depends on the complexity and depth intended, which also determines the DC to create the text (the book's Table 1-3: Basic tome bonus +1, DC 20, 2 months, reputation bonus +1/2, maximum 12 works; Advanced +2, DC 26, 6 months, +1, 8 works; Master +3, DC 31, 1 year, +3, 5 works; Grand Master +4, DC 37, 3 years, +5, 3 works; Legendary +5, DC 42, 10 years, +10, 1 work). Consult the table and make a Knowledge roll; the scholar absolutely must have the specific Knowledge skill relating to the subject of the intended text, and if the text is within his field of study, his field competence bonus applies to the roll as well. No synergy bonuses apply, and 10 or 20 may not be taken. The roll is made at the end of the period of work, and failure indicates a waste of time (the work is incomplete, inconsistent, or just plain wrong in some way), although the scholar may attempt the work again with a +5 competence bonus due to the previous research (no shorter time, though). Additional adventuring and work may be done during this time, although research, study, writing, and revising must be the main focus.", 7, `${SCH} (p. 223)`),
      f("Field Master", "At 10th level the scholar is a master of his or her field. The field of study bonuses rise to +6/+3 respectively, and he may now take 20 on any Knowledge or Lore skill roll related to his field of study, regardless of circumstances.", 10, `${SCH} (p. 222)`),
    ],
  },
  {
    id: "bone-grinder",
    name: "Bone Grinder",
    ruleset: "iron_kingdoms",
    source: `${BGR} (pp. 224–228)`,
    sourceUrl: MN1_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ, GOOD, POOR, GOOD),
    classSkills: [
      "Concentration", "Craft", "Craft (alchemy)", "Craft (bone grinding)",
      "Creature Lore", "Decipher Script", "Handle Animal", "Intuit Direction (3.0)",
      "Knowledge (any)", "Listen", "Move Silently", "Profession", "Search",
      "Speak Language", "Spellcraft", "Spot", "Survival",
    ],
    prerequisites: [
      "Skills: Knowledge (arcana) 6 ranks, Creature Lore 5 ranks, Craft (dissection) 4 ranks, Wilderness Lore (Survival in 3.5) 4 ranks, Alchemy (Craft (alchemy) in 3.5) 4 ranks",
      "Feat: At least one metamagic feat",
      "Spells: The ability to cast arcane spells of 3rd level or greater",
      "Special: Must find a bone grinder and convince him to teach you his secrets. Good luck.",
    ],
    features: [
      f("Track", "Bone grinders receive Track as a bonus feat.", 1, `${BGR} (p. 226)`),
      f("Favored Monster (Ex)", "At 1st level, a bone grinder may select a favored monster type — a creature type that the bone grinder is more familiar with, having gained a greater insight into its habits, mannerisms, and usefulness. He gains a +1 bonus to Bluff, Listen, Sense Motive, Spot, and Wilderness Lore (Survival) checks versus a creature of that type. This bonus also applies to damage rolls, though ranged attacks only gain the bonus when within 30 feet. Additionally, it may be added to Craft (bone grinding) rolls when crafting with parts of a favored monster. At 5th and 10th levels, the bone grinder may select a new favored monster type, and his previous bonuses rise by an additional +1.", 1, `${BGR} (p. 226)`),
      f("Bone Grinding (Su) — Enhancers", "This is a bone grinder's trademark ability. With it he can create magical enhancers and, later, magical tokens. Creation of these items is similar to the creation of other magical items, but a bit easier in some ways; in all cases, the cost of the item is set at the discretion of the bone grinder (guidelines for price are listed in the enhancer and token descriptions in the book, and most bone grinders follow those), and costs to the bone grinder himself usually involve far more labor than financial investment. All creation attempts involve a Craft (bone grinding) roll, and all items also have an XP cost which works as it does for an item creation feat, although the costs are much lower. On a failed Craft (bone grinding) roll, the bone grinder makes no progress this session; if the character fails by five or more, the bone grinder ruins the raw materials and has to pay half the original XP cost (rounded up). SPELL ENHANCERS: These enhancements usually take the form of some ground-up concoction, although there is a great deal of variation. Every enhancer has the effect of duplicating a metamagic feat. Any arcane spellcaster can use them, and they are used as material components when casting the spell; in all cases the enhancer is used up in the casting. The spell is cast as if the spellcaster himself possessed and had used the feat in question; if the feat for some reason has prerequisites, then the user must meet those prerequisites to use the enhancer. The cost in spell slots listed in the metamagic feat is multiplied as normal. If the arcane caster is required to prepare spells ahead of time, then this enhancement must be incorporated into the preparation (thus increasing the spell slots it takes up); if the caster decides to cast the spell without enhancing it, then it uses up a lower-level slot, but only if one is free — if one is not, then it uses the original higher slot. Creation restrictions: the HD of the monster the body part came from must be at least twice that of the spell it is used to modify (for example, a part from a 4 HD monster to boost a 2nd-level spell). The feat the enhancer emulates is set at its creation; the bone grinder creating it must have the feat in question. Only one feat is ever imbued in any particular enhancer, although multiple enhancers can be used simultaneously (remember, spell slot costs stack). The body part must also come from a creature type matched to the spell's school (the book's table gives the Iron Kingdoms type first and, in parentheses, the types for non-Iron Kingdoms campaigns, as the IK uses some creature types differently): Abjuration — Beasts (beasts, constructs, dragons); Conjuration — Magical beasts (magical beasts, outsiders, dragons); Divination — Animals, plants (animals, plants, elementals, dragons); Enchantment — Fey (fey, dragons); Evocation — Monstrous humanoids (monstrous humanoids, giants, dragons); Illusion — Aberration, fey (aberration, fey, dragons); Necromancy — Undead (undead, vermin, dragons); Transmutation — Shapechangers (shapechangers, oozes, dragons).", 1, `${BGR} (pp. 226–227)`),
      f("Bone Grinding (Su) — Tokens", "At 3rd level the bone grinder's bone grinding also lets him create magical tokens. Tokens work much like enhancers, except that the body part in question is usually fashioned into something that can be easily worn or carried. A Craft (bone grinding) check must still be made and an XP cost paid as well. Lesser tokens can be made of creatures of any HD, while greater tokens must be made from creatures of 6 HD or greater. There is no restriction in regards to creature type, though common sense should be used (a monkey's paw could conceivably be fashioned into a token that grants a bonus to climbing, but it probably couldn't be fashioned into a token that boosts AC). The same restrictions apply to tokens as to enhancers.", 3, `${BGR} (p. 227)`),
      f("Bonus Feat", "The bone grinder gains a bonus feat at 3rd, 6th, and 9th level (Table 1-1; the book's class-features text does not further restrict the choice).", 3, `${BGR} (p. 225)`),
      f("Spellcasting", "At 2nd, 4th, 6th, 8th, and 10th level, the bone grinder gains new spells per day and an increase in caster level (and spells known, if applicable) as if he had also gained a level in a spellcasting class he belonged to before adding the prestige class level (+1 level of existing class, per Table 1-1's Spells column); he gains no other benefit of that class.", 2, `${BGR} (p. 225)`),
    ],
  },
  {
    id: "monster-hunter",
    name: "Monster Hunter",
    ruleset: "iron_kingdoms",
    source: `${MHU} (pp. 229–233)`,
    sourceUrl: MN1_PATH,
    hitDie: "d10",
    skillPointsPerLevel: 4,
    babProgression: "full",
    goodSaves: ["fort"],
    progression: rows(FULL, GOOD, POOR, POOR),
    classSkills: [
      "Climb", "Craft", "Creature Lore", "Handle Animal", "Hide",
      "Intuit Direction (3.0)", "Jump", "Knowledge (nature)", "Listen",
      "Move Silently", "Profession", "Ride", "Search", "Spot", "Swim",
      "Use Rope", "Survival",
    ],
    prerequisites: [
      "Base Attack Bonus: +4",
      "Skills: Creature Lore 5 ranks, Wilderness Lore (Survival in 3.5) 6 ranks",
      "Feats: Skill Focus (Wilderness Lore or Creature Lore), Track",
    ],
    features: [
      f("Favored Monster (Ex)", "At 1st level, a monster hunter may select a favored monster type (for example, aberrations or magical beasts). Humanoids may not be selected as a type, but an individual humanoid species may. Dragons and outsiders may not be selected in an Iron Kingdoms campaign. This is a creature type that the monster hunter is more familiar with, having gained a greater insight into its habits, mannerisms, and combat techniques. He gains a +1 bonus to Bluff, Listen, Sense Motive, Spot, and Wilderness Lore (Survival) checks versus a creature of that type. This bonus also applies to damage rolls, though ranged attacks only gain the bonus when within 30 feet. This ability stacks with a ranger's favored enemy or other similar abilities. At 5th and 10th levels, the monster hunter may select a new favored monster type, and his previous bonuses rise by an additional +1.", 1, `${MHU} (pp. 231–232)`),
      f("Improved Tracking (Ex)", "Monster hunters are accomplished trackers and receive several bonuses to their tracking ability. At 1st level they receive a +1 competence bonus to all Track rolls (not just those versus their favored monster type). At 3rd level they receive an additional +1 bonus to all Track rolls, and they also gain the scent special quality when tracking creatures of their favored type; scent grants a +10 synergy bonus to all Track rolls, though this is reduced by –2 for every hour after the trail grows cold and an additional –2 per hour of rain (this supersedes how scent functions in the Monster Manual). At 6th level they receive an additional +1 bonus to all Track rolls and the penalty for tracking while moving at full speed drops to –2 (as opposed to –5) when tracking creatures of their favored type. At the final step they receive an additional +1, and are now no longer affected by spells such as pass without trace and similar abilities when tracking monsters of their favored type; this final manifestation of improved tracking is a supernatural ability. (The class-features text gives this final step at 10th level; Table 1-1 lists “improved track +1/immunity” at 9th. The text is followed and the conflict recorded, as printed.)", 1, `${MHU} (pp. 231–232)`),
      f("Skilled Trapper (Ex)", "A monster hunter becomes very skilled in the construction and use of mechanical traps for hunting purposes — typically the types of traps one builds on the trail to ensnare or injure a creature. A monster hunter may create simple traps at one fourth the standard cost and amount of time. He may create moderately complex traps at half the cost and time. Complex traps still require full time and financial expenditure. Furthermore, he gains a +4 competency bonus to all skill checks involved in the creation of such a trap (typically restricted to Craft checks). The book also lists example monster-hunter gear and traps (pp. 232–234), which are equipment, not character content.", 2, `${MHU} (p. 232)`),
      f("Exotic Weapon Proficiency", "Monster hunters receive Exotic Weapon Proficiency as a bonus feat at 3rd, 6th, and 9th level. This is typically used to learn some sort of specialized weapon for subduing creatures.", 3, `${MHU} (p. 232)`),
      f("Penetrating Blow (Ex)", "When fighting a creature of his favored type, a monster hunter may make a strike that exploits the creature's weaknesses, causing extra damage. At 4th level it adds 1d4+1 damage; at 8th level the damage rises to 1d6+2. This ability only affects one melee attack per round, and its use must be declared before that attack is made; if the attack misses, the ability cannot be used again until the next round. This ability may not be used versus constructs, elementals, oozes, undead, or other creatures lacking a living metabolism.", 4, `${MHU} (p. 232)`),
      f("Fearless (Ex)", "At 7th level a monster hunter is no longer affected by extraordinary, supernatural, or spell-like abilities that invoke fear that are caused by creatures with a CR equal to or less than twice the character's monster hunter levels (thus a 7th-level monster hunter would still be affected by fear-causing effects of CR 15 creatures and above). He is still affected by fear-causing spells as normal.", 7, `${MHU} (p. 232)`),
    ],
  },
];
