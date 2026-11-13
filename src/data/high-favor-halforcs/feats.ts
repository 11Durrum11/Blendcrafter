import type { FeatDefinition } from "@/engine/types";

// Heroes of High Favor: Half-Orcs (Bad Axe Games) —
// Chapter II feats, printed pp. 3-9, transcribed from Shaun's
// own scanned copy (image-only; read visually page by page,
// 2026-11-05). This is a 3.0-era book: entries are transcribed
// as printed, including 3.0 forms such as the prerequisite
// feat printed as "Improved Unarmed Attack" (not "Improved
// Unarmed Strike"), the Wilderness Lore and Animal Empathy
// skills, the Ambidexterity feat named in the Stag totem list,
// move-equivalent actions, and the "Spellcaster level 5th+"
// prerequisite form (flagged in the draft report, not
// modernized).
//
// The book's bracketed designators are suggestions for who
// may take a feat, not extra prerequisites (book, p. 3):
// [General, Fighter] feats are filed as "combat", [Item
// Creation, ...] as "item-creation", feats carrying the
// Half-orc designator (without Fighter) as "race-specific",
// and plain [General] or [General, Rage] feats as "general"
// — the Rage designator marks feats that work off a rage,
// frenzy, or similar class ability (book, p. 3), it is not a
// bonus-feat list. Prerequisites arrays carry only the
// printed Prerequisites lines; several Rage feats print no
// Prerequisites line at all, and their "already raging"
// condition appears in the printed Benefit instead.
//
// Tribal Focus / Totem Focus (pp. 7-9) is an ordinary feat,
// NOT an automatically gained style like the Dwarves book's
// fighting styles: it is printed as a [General] feat whose
// Special line says it may only be chosen at 1st level, and
// a character spends a feat to take it. It is therefore filed
// below as one ordinary feat record; the full focus rules
// and the eight printed example focuses (three tribal, five
// totem, pp. 8-9) are carried in that record so the material
// is not lost — the examples are choices made when the feat
// is taken, not separate feats.
//
// Axe Mastery, Spear Mastery, and Refined Skill Focus are
// reprinted in this book with the same text as in Heroes of
// High Favor: Dwarves; their ids carry a -hoho suffix so the
// two packs' records stay distinct.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const HOHO = "Heroes of High Favor: Half-Orcs";
const HOHO_PATH = "library-staging/books3p/high-favor-halforcs.pdf";

const TRIBAL_TOTEM_SPECIAL =
  "This feat may only be chosen at 1st level. Creating a focus (book, p. 8): choose from the examples below or, with your GM's help, create an entirely new tribal or totem focus specific to your character's background; a focus should contain 3-5 feats, and at least as many General feats as any other classification of feats (such as Fighter bonus feats, Item Creation, Metamagic, etc.). Feats marked with an asterisk (*) in the book can be found in Heroes of High Favor: Dwarves. Tribal Focus examples (book, pp. 8-9) — The Burning Eye (sworn to the service of a grim deity referred to only as \"The Eye\"): Alertness, Blind-Fight, Craft Savage Magics, Enraged Casting, Refined Skill Focus (Spellcraft). The Black Hand (fierce warriors valued and feared for marching and fighting for days at a time): Endurance, Run, Scavenger, Terrifying Physique, Weapon Focus (any). The Horse Lords (roving hordes scourging the borderlands): Leadership, Mounted Combat, Refined Skill Focus (Ride), Trample. Totem Focus examples (book, p. 9) — Boar: Boar's Hide, Cleave, Iron Will, Power Attack, Toughness. Bull: Bull's Health, Great Fortitude, Improved Bull Rush, Improved Charge*, Sturdy Back*. Stag: Alertness, Run, Stag's Heart, Two Weapon Fighting. Wolf: Dodge, Spring Attack, Track, Wolf's Cunning. Wyvern (the book heads this list \"Bonus Feat List\"): Berserk Rage, Weapon Focus (spear, any) [as printed], Wyvern's Roar.";

export const HOHO_FEATS: FeatDefinition[] = [
  {
    id: "adrenal-healing",
    name: "Adrenal Healing",
    category: "general",
    prerequisites: [],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to gain Fast Healing: 1 for the duration of your current rage. This is an extraordinary ability. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 3`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "berserk-rage",
    name: "Berserk Rage",
    category: "general",
    prerequisites: ["Base attack bonus +3 or higher"],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to go berserk. For the duration of your current rage, you may take no action other than a melee attack or moving to the nearest creature to attack: if a creature is within reach, friend or foe, you must take a full-attack action; if none is within reach, you must move to the next closest target, friend or foe, charging if possible (given two creatures at equal range, you may choose which to attack). For the duration of your current rage you gain the Power Attack, Cleave, and Great Cleave feats. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 3`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "black-blooded",
    name: "Black-Blooded",
    category: "race-specific",
    prerequisites: [],
    benefitSummary: "Do not apply the usual half-orc racial modifiers (+2 Str, -2 Int, -2 Cha). Furthermore, for the purposes of all special abilities and effects, you are considered a full-blooded orc; however, for the purposes of such effects, you are not considered human either. (Printed as [General, Half-orc].)",
    modifiers: [],
    special: "This feat may only be chosen at 1st level.",
    source: `${HOHO}, p. 4`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "boars-hide",
    name: "Boar's Hide",
    category: "general",
    prerequisites: ["Base Fortitude save +6 or higher", "Damage reduction 1/- or better"],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to increase your damage reduction by +1/-. This stacks with any other damage reduction you may have and lasts for the duration of your current rage. You may expend multiple rages to increase your DR even further, adding +1/- for each additional rage you expend. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 4`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "bulls-health",
    name: "Bull's Health",
    category: "general",
    prerequisites: [],
    benefitSummary: "You may expend one of your daily rages to re-roll a failed saving throw against any poison or disease. You must accept the result of the second roll. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 4`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "craft-savage-magics",
    name: "Craft Savage Magics",
    category: "item-creation",
    prerequisites: ["Spellcaster level 5th+"],
    benefitSummary: "You can Craft Wondrous Items and Magical Arms and Armor from the remains of creatures slain in the wild. For wondrous items you are limited to hats, cloaks, amulets, robes, bracers, gloves, belts, and boots. You are limited to leather, studded leather, hide, and savage armors for magical armor, and to savage weapons for magic arms. (Printed as [Item Creation, Half-orc]; the book refers to its Skills section for details on savage weapons and armor.)",
    modifiers: [],
    source: `${HOHO}, p. 4`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "enraged-casting",
    name: "Enraged Casting",
    category: "general",
    prerequisites: [],
    benefitSummary: "You may cast spells even while raging, but you must make a Concentration check (DC 15 + spell level); failure means the spell is lost. If you attempt to cast defensively at the same time, increase the DC of this check by +5. The intense concentration extends the casting time of all spells: spells with a casting time of one action require a full-round action, and spells whose normal casting time is a full-round or longer require an extra round. (Printed as [General].)",
    modifiers: [],
    source: `${HOHO}, p. 4`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "extra-orcish-raging",
    name: "Extra Orcish Raging",
    category: "race-specific",
    prerequisites: [],
    benefitSummary: "You may rage an additional three times per day. You may take this feat only once. (Printed as [General, Rage, Half-Orc].)",
    modifiers: [],
    source: `${HOHO}, p. 5`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "fists-of-rage",
    name: "Fists of Rage",
    category: "general",
    prerequisites: ["Improved Unarmed Attack"],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to increase the damage of each unarmed attack: for the duration of your current rage, your unarmed damage increases by one die type — 1d2 to 1d3, 1d3 to 1d4, 1d4 to 1d6, 1d6 to 1d8, 1d8 to 2d6, 1d10 to 2d6, 1d12 to 2d8, 1d20 to 4d6. (Printed as [General, Rage]; the prerequisite feat is printed as \"Improved Unarmed Attack.\")",
    modifiers: [],
    source: `${HOHO}, p. 5`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "focused-rage",
    name: "Focused Rage",
    category: "general",
    prerequisites: ["Base attack bonus +3 or higher"],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to enter a focused rage. For the duration of your current rage, regardless of the weapon you use, you strike as though you had the Improved Critical feat. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 5`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "mark-of-the-eye",
    name: "Mark of the Eye",
    category: "race-specific",
    prerequisites: [],
    benefitSummary: "You receive a +2 bonus to Bluff, Diplomacy, Gather Information, Intimidate, and Sense Motive checks when dealing with half-orcs and orcs. (Printed as [General, Half-orc]; the feat represents being born with the \"Mark of the Eye,\" a special mark — a tattoo, odd eye color, horns or tusks — that sets you apart from others of your kind.)",
    modifiers: [],
    special: "This feat may only be chosen at 1st level.",
    source: `${HOHO}, p. 6`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "merciless-rage",
    name: "Merciless Rage",
    category: "general",
    prerequisites: [],
    benefitSummary: "If you are raging, you may perform a coup de grace as a standard action. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 6`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "savage-weapon-proficiency",
    name: "Savage Weapon Proficiency",
    category: "combat",
    prerequisites: ["Base attack bonus +1 or higher"],
    benefitSummary: "You strike normally with all savage weapons (such as those crafted from stone, bone, horn, or other crude materials) as if you were fully proficient in their use, regardless of their more general classification as simple, martial, or exotic weapons — for example, you may use a savage longspear, normally a martial weapon, even if you do not have Martial Weapon Proficiency. (Printed as [General, Fighter, Half-orc]; the book notes savage weapons are not normally available for sale or found in treasure, and advises a character with this feat to have some skill at crafting weapons for his use.)",
    modifiers: [],
    source: `${HOHO}, p. 6`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "scavenger",
    name: "Scavenger",
    category: "combat",
    prerequisites: ["Base attack bonus +1 or higher"],
    benefitSummary: "You suffer only half the normal non-proficiency penalty for using weapons and armor for which you do not have the appropriate proficiency feat: your penalty when attacking with such weapons drops to -2, and you suffer only half the armor check penalty to movement skills (such as Ride) when wearing such armor. (Printed as [General, Fighter, Half-orc].)",
    modifiers: [],
    source: `${HOHO}, p. 6`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "stags-heart",
    name: "Stag's Heart",
    category: "general",
    prerequisites: ["Base attack bonus +3 or higher"],
    benefitSummary: "If you are already raging, you may expend another of your daily rages to act with greater quickness: for the duration of your existing rage, you receive an extra move action each round. This extra action is superseded by (does not stack with) any other effect that grants an additional action, such as a haste spell or potion. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 7`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "terrifying-physique",
    name: "Terrifying Physique",
    category: "general",
    prerequisites: [],
    benefitSummary: "You may add your Strength modifier to all Intimidate checks. (Printed as [General].)",
    modifiers: [],
    source: `${HOHO}, p. 7`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "tribal-focus-totem-focus",
    name: "Tribal Focus / Totem Focus",
    category: "general",
    prerequisites: [],
    benefitSummary: "You have an inborn affinity for a certain orc tribe or animal totem. Choosing a Tribal or Totem Focus feat at 1st level (full rules, book, p. 8) gains a \"kicker\" bonus: immediately upon choosing the feat, you gain a +1 bonus to one of the skills listed for your kind of focus, and each time you later choose another feat from your Tribal or Totem Feat List, you gain another +1 bonus to one of those skills. Tribal Focus skills: Craft, Diplomacy, Handle Animal, Intimidate, Ride, Sense Motive, or Survival. Totem Focus skills: Handle Animal, Hide, Listen, Move Silently, Spot, or Survival (and Handle Animal as well, if you have it as a class skill). Because the bonus is an unnamed bonus, each bonus stacks with itself and with other bonuses — for example, a character who chooses a Tribal Focus and five feats from his Tribal Feat list may apply a +1 bonus to six different skills, a +6 bonus to a single skill, or some combination thereof. (Printed as [General]; the feat entry on p. 7 reads \"Benefit: See below, Chapter 2, page 8.\")",
    modifiers: [],
    special: TRIBAL_TOTEM_SPECIAL,
    source: `${HOHO}, p. 7`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "wolfs-cunning",
    name: "Wolf's Cunning",
    category: "general",
    prerequisites: [],
    benefitSummary: "If you are raging and you are flanking your opponent, you do not suffer the usual -2 AC penalty for raging. You suffer this penalty as normal against opponents that you are not flanking. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 7`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
  {
    id: "wyverns-roar",
    name: "Wyvern's Roar",
    category: "general",
    prerequisites: ["Charisma modifier +1 or higher"],
    benefitSummary: "You may use the Intimidate skill in combat (see the book's Skills section) as a move action. (Printed as [General, Rage].)",
    modifiers: [],
    source: `${HOHO}, p. 7`,
    sourceUrl: HOHO_PATH,
    ruleset: "core",
  },
];
