// Dragon Magazine #351 (January 2007) — feat draft: 10 records.
// SEVEN arcane-focus feats — "Class Acts: Arcane Focus" (Mark A. Hart),
// pp. 87-89: the Arcane Focus feat itself plus six [Arcane] feats that
// expend arcane focus (a mental state modeled on psionic focus).
// ONE Dark Sun feat — the issue's Dark Sun article
// (Chris Flipse), pp. 32-35: Defiler [General]. Staged with the
// defiling-inseparability flag the brief requires (SCREENING.md §8):
// the feat's Special line makes arcane casting on Athas impossible
// without it, and the benefit is the defiling mechanic itself.
// ONE Clockwork Disciple feat — "Class Acts: The Clockwork Disciple"
// (Stephanie Vergamini), pp. 92-93: Technomagical Implant [General],
// the gateway feat for the fifteen implants in magic-items-draft.ts.
// ONE Dragonmarks feat — "Dragonmarks: Sorcerers in Eberron" (Keith
// Baker), pp. 76-79: Dragonmarked Sorcerer [General]. Eberron-keyed
// (its prerequisite is membership in a dragonmarked house, and its
// benefit draws on the houses' dragonmark spell lists, which live in
// the Eberron Campaign Setting); staged mechanics-only with the flag
// at SCREENING.md §7 — it does not stand as cleanly alone as the three
// Blood variants, and the call is Shaun's.
// HELD, not staged: the seven ninja/ki feats of "Class Acts: Historical
// Ninjas" (Paul Leach), pp. 84-87 — oriental material under the
// standing ruling plus the declined Ninja base class; full texts in
// reference.md §12.
// Feat texts are faithful mechanical paraphrases in our own words; no
// magazine prose is reproduced. Defiler's [General] type is confirmed
// by the realmshelps feat index (source: Dragon #351); the printed
// 0-level defiling area is carried as read in the issue text (one
// 5-foot square) — the index's "1-foot square" reading is noted as a
// discrepancy in MANIFEST.md.

import type { FeatDefinition } from "@/engine/types";

const SRC_FOCUS = "Dragon Magazine #351 — Class Acts: Arcane Focus (Mark A. Hart), pp. 87-89";
const SRC_DARKSUN = "Dragon Magazine #351 — Dark Sun article (Chris Flipse), pp. 32-35";
const SRC_CLOCKWORK = "Dragon Magazine #351 — Class Acts: The Clockwork Disciple (Stephanie Vergamini), pp. 92-93";
const SRC_DRAGONMARKS = "Dragon Magazine #351 — Dragonmarks: Sorcerers in Eberron (Keith Baker), pp. 76-79";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type FeatSeed = Partial<FeatDefinition> & Pick<FeatDefinition, "id" | "name" | "benefitSummary">;

function F(seed: FeatSeed): FeatDefinition {
  return {
    category: "general",
    prerequisites: [],
    source: SRC_FOCUS,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as FeatDefinition;
}

const FOCUS_FRAME =
  "Arcane focus works like psionic focus: to gain it you must have an available arcane spell slot and succeed at a Concentration check (DC 20) as a full-round action that provokes attacks of opportunity. You may expend your arcane focus as a swift action to treat a Concentration check as if you had rolled a 15, or to activate an [Arcane] feat. A wizard may select any of these feats as a wizard bonus feat.";

export const DRAGON_351_FEATS: FeatDefinition[] = [
  // ---- Class Acts: Arcane Focus (7) ----
  F({
    id: "arcane-focus",
    name: "Arcane Focus",
    prerequisites: ["Ability to cast 1st-level arcane spells"],
    benefitSummary:
      "[General.] Through concentration and preparation your mind can hold special magical energy. Benefit: You can gain arcane focus. " +
      FOCUS_FRAME,
  }),
  F({
    id: "arcane-watchfulness",
    name: "Arcane Watchfulness",
    prerequisites: ["Wis 13", "Arcane Focus"],
    benefitSummary:
      "[Arcane.] Your focused mind heightens your awareness of your surroundings and of other minds. Benefit: Expend your arcane focus to gain a +4 circumstance bonus for 1 minute on one of the following, chosen when you expend it: Spot checks (\"Danger Sense\"), Sense Motive checks (\"Empathic Potential\"), or Search checks (\"Spatial Awareness\"). Special: " +
      FOCUS_FRAME +
      " (Print note: the feat's heading reads \"Arcane Watchfulness\" while its own Special line names a \"Watchful Alertness\" feat — a print inconsistency, staged under the heading name; see MANIFEST.md.)",
  }),
  F({
    id: "body-awareness",
    name: "Body Awareness",
    prerequisites: ["Wis 13", "Arcane Focus"],
    benefitSummary:
      "[Arcane.] Focus grants you command over your own body's state. Benefit: Expend your arcane focus to gain one of the following effects, chosen when you expend it: (1) Ignore the effects of being fatigued, nauseated, shaken, or sickened for a number of rounds equal to your Wisdom bonus (minimum 1), or reduce exhausted to fatigued and frightened to shaken for the same duration; (2) slow your breathing so that you appear dead (a DC 20 Heal check detects that you live), gain a +4 bonus on Fortitude saves against toxic fumes and inhaled poisons, and have each 1 minute of held breath count as only 5 rounds; or (3) make a sudden effort, gaining a +4 circumstance bonus to Strength, Dexterity, or Constitution until the beginning of your next turn — repeated daily use of this option causes fatigue, then exhaustion. Special: " +
      FOCUS_FRAME,
  }),
  F({
    id: "defensive-magic",
    name: "Defensive Magic",
    prerequisites: ["Arcane Focus"],
    benefitSummary:
      "[Arcane.] You can burn focused arcane energy to shield yourself. Benefit: Expend your arcane focus to gain one of the following effects, chosen when you expend it: (1) Absorb damage — as an immediate action, lose a prepared spell or available spell slot to gain damage reduction equal to the level of the spell lost (DR spell level/—) until just before your next turn; (2) iron magic — each spell currently on you that grants an armor bonus or shield bonus grants +2 more until the beginning of your next turn; or (3) protective aura — as an immediate action, dismiss one spell you cast that is currently affecting you to gain an enhancement bonus equal to that spell's level on your next saving throw made within 1 minute. Special: " +
      FOCUS_FRAME,
  }),
  F({
    id: "focused-specialist",
    name: "Focused Specialist",
    prerequisites: ["Arcane Focus", "Specialist wizard 1st level"],
    benefitSummary:
      "[Arcane.] Your focus sharpens the spells of your specialist school. Benefit: Expend your arcane focus to gain one of the following effects, chosen when you expend it, applied to the next spell of your specialist school that you cast within 1 round: its caster level increases by 1; or its saving throw DC increases by 1 (this stacks with Spell Focus and Greater Spell Focus — the magazine prints \"Improved Spell Focus,\" converted to the 3.5 feat name; see SCREENING.md); or you gain a +2 bonus on caster level checks to overcome spell resistance with it. Special: " +
      FOCUS_FRAME,
  }),
  F({
    id: "magical-insight",
    name: "Magical Insight",
    prerequisites: ["Int 13", "Arcane Focus"],
    benefitSummary:
      "[Arcane.] Focus deepens your understanding of magic itself. Benefit: Expend your arcane focus to gain one of the following effects, chosen when you expend it: (1) a divination spell that requires concentration reveals information as if you had studied its subject for one additional round; (2) a +4 insight bonus on Spellcraft checks for 1 minute; or (3) a +4 insight bonus on your next Knowledge (arcana) check made within 1 minute. Special: " +
      FOCUS_FRAME,
  }),
  F({
    id: "potent-dweomercraft",
    name: "Potent Dweomercraft",
    prerequisites: ["Wis 13", "Arcane Focus", "Ability to cast 2nd-level arcane spells"],
    benefitSummary:
      "[Arcane.] You channel focus into a touch spell to make it bite deeper. Benefit: Expend your arcane focus to gain one of the following effects, chosen when you expend it, applied to the next melee touch spell you cast in the same round: the spell deals +25% damage; or its threat range doubles to 19-20; or you gain a +2 competency bonus on its next melee touch attack roll. Special: " +
      FOCUS_FRAME,
  }),
  // ---- Dark Sun article (1) ----
  F({
    id: "defiler",
    name: "Defiler",
    source: SRC_DARKSUN,
    prerequisites: ["Ability to cast 1st-level arcane spells"],
    benefitSummary:
      "[General.] You can power your spells using energy stolen from the plants around you, an act known as defiling. Benefit: When you cast an arcane spell, you may defile: the spell's caster level increases by +1, but the spell takes longer to cast — a casting time of a standard action or less increases to 1 round, a casting time in rounds increases by 1 round, and a casting time in minutes or hours increases by 1 minute or 1 hour respectively. When you defile, you instantly destroy all plant life (but not plant creatures) in a radius of 5 feet per level of the spell (a 0-level spell defiles a single 5-foot square); defiled ground is left permanently sterile, and only a carefully worded miracle can restore it. If there is no plant life within the area, the spell fails and is lost. You may only use defiling to enhance arcane spells cast with an arcane spellcasting class — not, for example, a cleric's domain spell that also appears on an arcane list. Special: On Athas you cannot cast arcane spells unless you possess this feat, even if you never intend to defile; wizards native to Athas gain this feat as a bonus feat at 1st level of wizard. ⚠️ STAGED WITH FLAG: the defiling mechanic is inseparable from the feat — see SCREENING.md §8.",
  }),
  // ---- Class Acts: The Clockwork Disciple (1) ----
  F({
    id: "technomagical-implant",
    name: "Technomagical Implant",
    source: SRC_CLOCKWORK,
    prerequisites: ["Con 13", "Character level 3rd"],
    benefitSummary:
      "[General.] You can support technomagical implants — relics of a lost civilization's blend of magic and technology — in your body. Benefit: You may gain technomagical implants. Minor implants are small disks or chips implanted under the skin (DC 20 Spot check to notice); major implants are disks or rods up to a foot in size, partly protruding from the body (DC 10 Spot check to notice). Each implant takes up a body slot as a magic item of the appropriate type; implants are mutually compatible and stack where applicable. The technology can no longer be created — implants exist only as found treasure, and this feat grants none by itself. Special: A monk may select Technomagical Implant as her 6th-level monk bonus feat. The fifteen implants print in magic-items-draft.ts.",
  }),
  // ---- Dragonmarks (1) ----
  F({
    id: "dragonmarked-sorcerer",
    name: "Dragonmarked Sorcerer",
    source: SRC_DRAGONMARKS,
    prerequisites: [
      "Member of an appropriate dragonmarked race and house",
      "Does not possess an existing dragonmark",
      "Sorcerer level 1st",
    ],
    benefitSummary:
      "[General.] Your house's dragonmark runs through your sorcery rather than manifesting as spell-like abilities. Benefit: Add all of the sorcerer spells provided by your house's least, lesser, and greater dragonmarks to your spells known; you cannot cast a spell so gained until you are of an appropriate level for it. You gain a physical dragonmark — initially of the least mark's shape, changing as you gain spells that replicate the powers of the lesser and greater marks — but the mark grants no spell-like abilities. Special: You cannot select this feat if you possess the Aberrant Dragonmark, Greater Dragonmark, Least Dragonmark, or Lesser Dragonmark feat. ⚠️ STAGED WITH FLAG: the prerequisite and the spell lists it draws on are Eberron dragonmarked-house material — see SCREENING.md §7.",
  }),
];
