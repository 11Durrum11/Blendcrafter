import type { FeatDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #313 pack (library-staging/packs/dragon-magazine/issue-313)
// The issue's twenty-nine feats, from four articles:
//   * "Animal Ancestry" (p. 33): ten [General] feats for
//     lycanthropes and other shapechangers.
//   * "Brain Power: Illithids" (pp. 46–52): nine [Psi-Spell] feats,
//     which enhance a spell or a power by spending the other
//     discipline's energy (power points on spells, spell levels on
//     powers). The article's shared psi-spell framework rides in
//     each feat's `special` field.
//   * "Eye Wares: Beholders" (pp. 56–57): eight [General] feats,
//     four of them beholder-only.
//   * "Faiths of Faerûn: Elder Serpents of Set": two [General]
//     feats, Spit Venom and Strong Coils.
// Transcribed from the magazine text on archive.org
// (DragonMagazine313_djvu.txt). Benefit summaries are short
// mechanical paraphrases in our own words; no magazine prose is
// reproduced.
//
// Category note: the catalog's FeatCategory union has no
// "psi-spell" value, so the nine [Psi-Spell] feats use category
// "general" with the printed feat type carried at the head of the
// benefit summary (the issue-311/312 convention for bracketed
// types).
//
// Collisions (see MANIFEST.md): Hibernate and Quick Change and
// Power Surge collide with unrelated catalog records (a Frostburn
// spell, a Races of Eberron changeling feat, and an Eberron spell)
// and are suffixed -313. The article's summary table prints the
// feat Energy Flare as "Elemental Flare"; the feat's own heading
// governs. One figure in Solid Freeze is illegible in every
// available source and is flagged inline and in MANIFEST.md.

const DM313 = "Dragon Magazine #313";
const DM313_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine313_djvu.txt";

const PSI_SPECIAL = "Psi-spell feat: the feat enhances a spell or a power with the other discipline's energy. Applied to a spell, it costs power points; applied to a power, it costs spell levels. 'Spending' a spell level means giving up prepared spells (or a spell slot) of at least that total level — preparers give the spells up at preparation time, spontaneous casters at casting time (with no increase in casting time). Both energies must be present: extra power points cannot substitute for spell levels, and extra spell levels cannot substitute for power points. Normal metamagic and metapsionic feats can still be applied to the effect as usual.";

export const DRAGON_313_FEATS: FeatDefinition[] = [
  {
    id: "crushing-hug",
    name: "Crushing Hug",
    category: "general",
    ruleset: "core",
    prerequisites: ["Str 13", "Improved grab ability", "Base attack bonus +3"],
    benefitSummary: "[General feat.] Whenever you successfully make a grapple check to deal damage with a primary attack, you apply double your Strength bonus to the damage.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "gore-toss",
    name: "Gore Toss",
    category: "general",
    ruleset: "core",
    prerequisites: ["Gore attack", "Base attack bonus +4"],
    benefitSummary: "[General feat.] After making a successful gore attack, you can attempt to trip your opponent as a free action that does not provoke an attack of opportunity. If the attempt fails, the opponent cannot react to trip you.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "hamstring-attack",
    name: "Hamstring Attack",
    category: "general",
    ruleset: "core",
    prerequisites: ["Str 13", "Dex 15", "Base attack bonus +4"],
    benefitSummary: "[General feat.] When you make a successful attack with a natural weapon while flanking, as an attack of opportunity, or against a stunned or prone opponent, you may deal Dexterity damage instead of normal damage: roll the damage normally — the result is the DC of the target's Fortitude save; failure means the target takes 1d4 points of Dexterity damage, success negates. You must declare the attempt before rolling damage.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "hibernate-313",
    name: "Hibernate",
    category: "general",
    ruleset: "core",
    prerequisites: ["Con 13", "Endurance"],
    benefitSummary: "[General feat.] With at least 6 hours of uninterrupted sleep, you regain hit points equal to twice your character level and heal 2 points of ability damage to each affected ability score; with a full day and night of uninterrupted sleep, you regain four times your character level in hit points and heal 4 points per score. (Normal: 8 hours of rest restores your character level in hit points and 1 point of ability damage per score; complete bed rest for a full day and night restores twice your level and 2 points.)",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "moonwarrior",
    name: "Moonwarrior",
    category: "general",
    ruleset: "core",
    prerequisites: ["Str 15", "Low-light vision"],
    benefitSummary: "[General feat.] In conditions of low light (starlight, torchlight, within the radius of a light spell, and so on), you gain a +1 morale bonus on attacks; in moonlight, you also gain a +1 morale bonus on damage.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "pack-feint",
    name: "Pack Feint",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 13", "Wis 13", "Bluff 3 ranks", "Base attack bonus +3"],
    benefitSummary: "[General feat.] When you succeed at a Bluff check to feint in combat, the target loses its Dexterity bonus to AC for your next attack and for the next attack of each ally who was adjacent to the foe when you made the Bluff check, provided those attacks are made on or before your next turn. (This extends the normal feint, which benefits only your own next attack.)",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "pack-tactics",
    name: "Pack Tactics",
    category: "general",
    ruleset: "core",
    prerequisites: ["Wis 13"],
    benefitSummary: "[General feat.] Whenever you flank an opponent, an ally who is not flanking that foe also gains a +1 bonus on melee attacks against it. Allies who are flanking the foe retain the usual +2 flanking bonus.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "quick-change-313",
    name: "Quick Change",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 13", "Alternate form special quality"],
    benefitSummary: "[General feat.] You can change form as a move action. (Normal: changing form is a standard action.)",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "spirit-of-the-beast",
    name: "Spirit of the Beast",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 13", "Con 13", "Quick Change", "Alternate form special quality"],
    benefitSummary: "[General feat.] As a move action, you can manifest the natural attacks of your hybrid form while in your humanoid form, dealing damage as appropriate for your size. Ending the manifestation is also a move action. This is a supernatural effect.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "sprinter",
    name: "Sprinter",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 15", "Con 15", "Run"],
    benefitSummary: "[General feat.] Three times per day, you can increase your speed by 30 feet for a number of rounds equal to your Constitution bonus.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "agitated-causticity",
    name: "Agitated Causticity",
    category: "general",
    ruleset: "core",
    prerequisites: ["Any two spells with the acid descriptor", "Matter agitation power"],
    benefitSummary: "[Psi-Spell feat.] Applies to any spell or power with the acid descriptor: for each 5 points of acid damage a target takes, it must make a Fortitude save (DC equal to the spell or power's save DC, or the DC it would have) or take a cumulative −1 penalty to Armor Class. The penalty applies to the creature, not its armor, shield, or natural armor; it decreases by 1 per day, and effects that heal ability damage reduce it equally. Cost: 3 power points per spell level (spell) or 1 spell level per power level (power).",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "astral-fire",
    name: "Astral Fire",
    category: "general",
    ruleset: "core",
    prerequisites: ["Any two spells with the fire descriptor", "Any two powers with the fire descriptor"],
    benefitSummary: "[Psi-Spell feat.] Applies to any spell or power with the fire descriptor: a creature damaged by it keeps taking fire damage for a number of rounds equal to the key ability modifier for the spell or power (minimum 1), equal to 1 point per 5 points of the original fire damage (minimum 1, unless the subject took no fire damage at all). The ectoplasmic fire cannot be smothered and water does not douse it (even submersion), though control flames works normally; time spent on the Astral Plane counts against the duration and suppresses the fire, which reignites when the creature leaves. Cost: 3 power points per spell level (spell) or 1 spell level per power level (power).",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "bioelectrical-surge",
    name: "Bioelectrical Surge",
    category: "general",
    ruleset: "core",
    prerequisites: ["Any two spells with the electricity descriptor", "Control body power"],
    benefitSummary: "[Psi-Spell feat.] Applies to any spell or power with the electricity descriptor: for each 10 points of electricity damage a target takes, it must make a Fortitude save (DC equal to the spell or power's save DC) or take 2 points of Dexterity damage. Creatures with no discernible anatomy (such as oozes, constructs, and undead) and creatures immune to electricity are immune to this effect. Cost: 3 power points per spell level (spell) or 1 spell level per power level (power).",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "solid-freeze",
    name: "Solid Freeze",
    category: "general",
    ruleset: "core",
    prerequisites: ["Any two spells with the cold descriptor", "Control flames power"],
    benefitSummary: "[Psi-Spell feat.] Applies to any spell or power with the cold descriptor: a creature that takes cold damage while in contact with a surface must make a Fortitude save (DC equal to the spell or power's save DC) or be frozen to the surface — immobile until it breaks free with a Strength check made as a full-round action (DC equal to the spell or power's DC). On a successful save the creature is not immobilized but can move at only half speed for a number of rounds [duration illegible in the magazine scan and unresolved — see the pack MANIFEST]. All objects in the effect's area become brittle for a number of rounds equal to the key ability modifier for the spell or power (minimum 1 round): their hardness is reduced by 5 (minimum 0). Creatures immune to cold or not in contact with a surface are immune to the immobilizing effect but still take damage. Cost: 4 power points per spell level (spell) or 2 spell levels per power level (power).",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "bull-blast",
    name: "Bull Blast",
    category: "general",
    ruleset: "core",
    prerequisites: ["Harden Energy"],
    benefitSummary: "[Psi-Spell feat.] Add this feat to any spell or power already enhanced by Harden Energy: the effect can bull rush any opponent within its area (a line or cone pushes along its length; a spread or burst pushes to the edge of its radius). The effect's effective Strength score for the bull rush is its save DC plus 1 per die of force damage it deals. Targets are bull rushed even if they save against the damage. Cost: 3 power points per spell level (spell) or 1 spell level per power level (power), in addition to Harden Energy's cost. Bull Blast may be combined with Concussive Blast.",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "concussive-blast",
    name: "Concussive Blast",
    category: "general",
    ruleset: "core",
    prerequisites: ["Harden Energy"],
    benefitSummary: "[Psi-Spell feat.] For every 3 power points or 1 spell level expended, add 1 die of bonus force damage to any spell or power with an energy descriptor (maximum bonus dice equal to one-half the effect's normal base damage dice). Any saving throw the effect allows applies to the bonus damage as well. The force portion ignores the incorporeal miss chance (the remaining energy damage keeps the standard 50% miss chance). Unlike other metamagic and metapsionic feats, Concussive Blast may be applied to the same effect more than once, each application costing the same again. Cost: 3 power points per spell level (spell) or 1 spell level per power level (power), per application.",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "dual-plane-summons",
    name: "Dual-Plane Summons",
    category: "general",
    ruleset: "core",
    prerequisites: ["Ability to cast any summon monster spell", "Ability to manifest any astral construct power"],
    benefitSummary: "[Psi-Spell feat.] Whenever you cast a summon monster spell, you may simultaneously manifest an astral construct power at one-half its normal power point cost (minimum 1), applying the menu abilities you could give that construct to the summoned creature instead of creating a construct.",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "energy-flare",
    name: "Energy Flare",
    category: "general",
    ruleset: "core",
    prerequisites: ["Any one of Agitated Causticity, Astral Fire, Bioelectrical Surge, or Solid Freeze"],
    benefitSummary: "[Psi-Spell feat.] Choose the energy type of your prerequisite feat (acid, fire, electricity, or cold). Applied to any spell or power with that energy descriptor, this feat increases the effect's damage die type by one step (d4 to d6, d6 to d8, and so on) without changing the number of dice. You need not combine it with its prerequisite feat. Cost: 4 power points per spell level (spell) or 2 spell levels per power level (power). Special: you can gain this feat more than once, each time for a different energy descriptor for which you have the corresponding prerequisite feat. (The article's summary table prints this feat as 'Elemental Flare'; the feat's own heading reads Energy Flare and governs.)",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "harden-energy",
    name: "Harden Energy",
    category: "general",
    ruleset: "core",
    prerequisites: ["Ability to manifest any one force power", "Ability to cast any one spell with an energy descriptor"],
    benefitSummary: "[Psi-Spell feat.] Convert any number of an effect's damage dice, up to one-half its total, to force damage (as magic missile). That portion bypasses energy resistance but remains subject to spell resistance, and it ignores the incorporeal miss chance (the remaining energy damage keeps the standard 50% miss chance). Cost: 3 power points per spell level (spell) or 1 spell level per power level (power).",
    special: PSI_SPECIAL,
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "agile-tyrant",
    name: "Agile Tyrant",
    category: "general",
    ruleset: "core",
    prerequisites: ["Beholder"],
    benefitSummary: "[General feat.] You may direct an extra eye ray into a single 90-degree arc. (Normal: a beholder can direct at most three eye rays into a single arc, a gauth at most two.)",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "maw-of-power",
    name: "Maw of Power",
    category: "general",
    ruleset: "core",
    prerequisites: ["Beholder"],
    benefitSummary: "[General feat.] You permanently move one chosen eye ray into your mouth. If you hit a foe with your bite attack, the ray automatically strikes that foe as well; alternatively, you can open your mouth to fire the ray, but only into your forward arc. Either use counts against the limit on eye rays in your forward arc, and the ray can be used only once per round.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "nimble-flier",
    name: "Nimble Flier",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 13", "Dodge", "Ability to fly with good or better maneuverability"],
    benefitSummary: "[General feat.] During any round in which you use a move action to fly, you gain a +1 dodge bonus against all nonflying foes.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "power-soar",
    name: "Power Soar",
    category: "general",
    ruleset: "core",
    prerequisites: ["Dex 13", "Dodge", "Nimble Flier", "Ability to fly with good or better maneuverability"],
    benefitSummary: "[General feat.] Flying straight up or straight down as a move action does not provoke attacks of opportunity from foes who would otherwise get them.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "power-surge-313",
    name: "Power Surge",
    category: "general",
    ruleset: "core",
    prerequisites: ["A supernatural special attack usable at least three times per day"],
    benefitSummary: "[General feat.] Choose one supernatural special attack you can use at least three times per day. When you use it, you may apply one improvement: +1 to its save DC, +1 damage per die, or +50% to its duration (not applicable to instantaneous effects). After using the improved attack, you must wait 1 round longer than normal before using that attack again. Special: you can gain this feat multiple times; each time it applies to a different supernatural special attack.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "skilled-telekinetic",
    name: "Skilled Telekinetic",
    category: "general",
    ruleset: "core",
    prerequisites: ["Beholder"],
    benefitSummary: "[General feat.] As a standard action, you can use your telekinetic eye ray to trigger a command-word, spell-completion, or spell-trigger magic item that is unattended and within the ray's reach, provided you could normally use the item while holding it. You need line of sight to the target and line of effect between the item and the target, and the item must meet telekinesis's normal limits (weight and the like).",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "tentacular-stalk",
    name: "Tentacular Stalk",
    category: "general",
    ruleset: "core",
    prerequisites: ["Beholder"],
    benefitSummary: "[General feat.] You permanently transform one of your eyestalks into a prehensile limb able to wield a light or one-handed weapon or manipulate a one-handed magic item (no proficiency is granted). You cannot fire that stalk's eye ray in any round you hold an object with it. Special: you can gain this feat multiple times — the effects do not stack; each time it applies to a new eyestalk. Normal multiweapon fighting rules apply when fighting with multiple stalks.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "versatile-tyrant",
    name: "Versatile Tyrant",
    category: "general",
    ruleset: "core",
    prerequisites: ["Beholder"],
    benefitSummary: "[General feat.] Choose one of your eye rays to duplicate. Once per round you may activate that ray from both its own eyestalk and another eyestalk in the same round; the effort costs you one fewer eye ray that round. The borrowed stalk's normal ray does not function that round but returns normally the next. A ray duplicated in one round cannot be used again the following round. This feat is a prerequisite for the Ocular Master prestige class.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "spit-venom",
    name: "Spit Venom",
    category: "general",
    ruleset: "faerun",
    prerequisites: ["Bite attack that delivers poison"],
    benefitSummary: "[General feat.] As a standard action, you can spit your venom at a single target. Range by your size: Fine 5 ft, Diminutive 10 ft, Tiny 15 ft, Small 20 ft, Medium 25 ft, Large 30 ft, Huge 35 ft, Gargantuan 40 ft, Colossal 45 ft, with no range increment. The target must make a Reflex save (DC equal to your poison's DC) or be blinded for 2d6 hours. The poison's normal effects do not apply when it is spat. A helmet (included in medium and heavy armor) or other face protection grants a +2 circumstance bonus on the save.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
  {
    id: "strong-coils",
    name: "Strong Coils",
    category: "general",
    ruleset: "faerun",
    prerequisites: ["Constrict attack"],
    benefitSummary: "[General feat.] Your constrict damage increases by one step, as if your size had increased by one category, on this scale: 1d2, 1d3, 1d4, 1d6, 1d8, 2d6, 2d8, 4d6, 4d8, 6d8, 8d8.",
    source: DM313,
    sourceUrl: DM313_PATH,
  },
];
