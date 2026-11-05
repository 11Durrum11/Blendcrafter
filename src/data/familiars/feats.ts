import type { FeatDefinition } from "@/engine/types";

// Familiars: Crouching Monkey, Hidden Toad (Encyclopaedia
// Arcane, Mongoose Publishing, MGP 1017, ©2003) — the Familiar
// Feats chapter, printed pp. 39–41, transcribed from Shaun's own
// scanned copy (read visually, 2026-11-04). The PDF is
// image-only; printed page = PDF page − 2 throughout.
// Every feat in the chapter is printed with the [Special] tag;
// the engine has no "special" feat category, so all are filed
// as "general" and the printed tag is noted in each record.
// These feats are taken by the MASTER and work through this
// book's familiar rules (familiar ritual spells, paths of
// infusion — see spells.ts and familiars-draft.md). Benefit and
// Special lines are short mechanical paraphrases in our own
// words; no book prose is reproduced.
// Source PDF: /A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf

const FAM = "Familiars: Crouching Monkey, Hidden Toad";
const FAM_URL =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf";

export const FAMILIARS_FEATS: FeatDefinition[] = [
  {
    id: "cultivate-link",
    name: "Cultivate Link",
    category: "general",
    prerequisites: ["Must have a familiar", "Able to cast 2nd-level arcane spells"],
    benefitSummary:
      "While you are the master of a familiar of one particular type, you are treated as having an effective master level two higher than normal for that familiar. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "This feat may be taken multiple times, each time for a different familiar type (magical beast, ooze, undead, and so on).",
    source: `${FAM}, p. 39`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "enhanced-damage-reduction",
    name: "Enhanced Damage Reduction",
    category: "general",
    prerequisites: ["Must have a familiar that has the Damage Reduction ability"],
    benefitSummary:
      "Your familiar retains its damage reduction while up to 60 feet away from you. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normal: the familiar loses its damage reduction when it is 30 feet away from its master.",
    source: `${FAM}, p. 39`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "enhanced-spell-sharing",
    name: "Enhanced Spell Sharing",
    category: "general",
    prerequisites: ["Must have a familiar", "Able to cast 3rd-level arcane spells"],
    benefitSummary:
      "You can share spells with a familiar that is up to 10 feet away, and shared spells with durations other than instantaneous only stop working if the familiar moves farther than 10 feet away. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "Normal: the familiar must be within 5 feet at the time of casting, and a shared spell of non-instantaneous duration stops affecting it if it moves farther than 5 feet away.",
    source: `${FAM}, p. 39`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "extended-empathic-link",
    name: "Extended Empathic Link",
    category: "general",
    prerequisites: ["Must have a familiar", "Able to cast 3rd-level arcane spells"],
    benefitSummary: "Your empathic link with your familiar works out to a distance of five miles. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normally, the empathic link only extends out to one mile.",
    source: `${FAM}, p. 39`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "extended-ward",
    name: "Extended Ward",
    category: "general",
    prerequisites: ["Must have a familiar that has the Protective Ward ability"],
    benefitSummary: "Your familiar's protective ward now extends to 30 feet. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normal: the protective ward only has a 10-foot radius.",
    source: `${FAM}, p. 39`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "extra-aid",
    name: "Extra Aid",
    category: "general",
    prerequisites: ["Must have a familiar that has the Aid Master ability"],
    benefitSummary: "Your familiar may aid you three more times per day than normal. (Printed as a [Special] feat.)",
    modifiers: [],
    source: `${FAM}, pp. 39–40`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "extra-familiar",
    name: "Extra Familiar",
    category: "general",
    prerequisites: ["Ability to Summon Familiar", "Intelligence 13+", "Charisma 13+"],
    benefitSummary:
      "You can summon an additional familiar with the familiar ritual spells. Your effective master level for each familiar's special abilities is divided by the number of familiars you have (rounded down, minimum 1). Each additional familiar is summoned with a ritual using a spell slot one level higher than normal per familiar you already have, and those slots are 'permanently' lost while the familiars remain in your service. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "Normal: you can only have one familiar. This feat may be taken a number of times equal to your primary spellcasting ability's modifier, each time allowing you to summon an additional familiar.",
    source: `${FAM}, p. 40`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "familiar-slot",
    name: "Familiar Slot",
    category: "general",
    prerequisites: ["Must have a familiar", "Familiar Spell (specific ritual)"],
    benefitSummary:
      "You gain a bonus spell slot that can only be used in conjunction with a familiar summoned by one specific familiar ritual spell — you no longer need to sacrifice a regular spell slot when you summon a familiar with that ritual. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "Normally, when using familiar ritual II–IX to summon a familiar the caster 'permanently' uses a spell slot. This feat may be taken multiple times, each time for a different familiar ritual spell.",
    source: `${FAM}, p. 40`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "familiar-spell",
    name: "Familiar Spell",
    category: "general",
    prerequisites: ["Must have a familiar", "Able to cast 2nd-level arcane spells"],
    benefitSummary:
      "You gain a bonus known spell that can only be used in conjunction with one specific familiar ritual spell. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "Normal: familiar ritual II–IX spells require the caster to use a known spell slot. This feat may be taken multiple times, but each time it must apply to a different familiar ritual spell.",
    source: `${FAM}, p. 40`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "far-reaching-empathic-link",
    name: "Far-Reaching Empathic Link",
    category: "general",
    prerequisites: ["Extended Empathic Link"],
    benefitSummary:
      "Your empathic link with your familiar works as long as you and your familiar are upon the same plane. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normal: the empathic link only extends out to one mile.",
    source: `${FAM}, p. 40`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "greater-scry-on-familiar",
    name: "Greater Scry on Familiar",
    category: "general",
    prerequisites: ["Must have a familiar upon which you can use the Scry on Familiar ability"],
    benefitSummary:
      "You can use greater scrying, instead of scrying, once per day upon your familiar, without material components or focus. (Printed as a [Special] feat.)",
    modifiers: [],
    source: `${FAM}, pp. 40–41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "greater-spell-sharing",
    name: "Greater Spell Sharing",
    category: "general",
    prerequisites: ["Enhanced Spell Sharing"],
    benefitSummary:
      "You can share spells with a familiar that is up to 30 feet away, and shared spells with durations other than instantaneous only stop working if the familiar moves farther than 30 feet away from you. (Printed as a [Special] feat.)",
    modifiers: [],
    special:
      "Normal: the familiar must be within 5 feet at the time of casting, and a shared spell of non-instantaneous duration stops affecting it if it moves farther than 5 feet away.",
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "hold-touch",
    name: "Hold Touch",
    category: "general",
    prerequisites: ["Must have a familiar that can use the Touch ability"],
    benefitSummary:
      "When you designate your familiar as the 'toucher' and then cast another spell, the touch spell it holds does not dissipate; it stays with the familiar until it is either dismissed, replaced, or used. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normal: when your familiar is designated as the 'toucher' and you cast another spell, the touch spell it holds dissipates.",
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "mouthpiece",
    name: "Mouthpiece",
    category: "general",
    prerequisites: ["Must have a familiar who can vocalise and has the Improved Empathic Link ability"],
    benefitSummary:
      "As improved empathic link, but by taking a full-round action you can not only see and hear what your familiar sees and hears, you may also speak through it — relaying messages and even casting Verbal-only spells with the familiar acting as the 'caster' (no metamagic feats may modify a spell cast this way). This may attract an attack of opportunity; while in this trance you are considered helpless and cannot make Spot or Listen checks, and you may end the connection as a standard action. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "Normally, improved empathic link only allows you to see and hear what the familiar sees and hears.",
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "sense-component",
    name: "Sense Component",
    category: "general",
    prerequisites: ["Must have a familiar with the Find Component ability"],
    benefitSummary:
      "Your familiar can detect the presence of any spell components for spells that you know which lie within 60 feet of the familiar. (Printed as a [Special] feat.)",
    modifiers: [],
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "speak-with-another",
    name: "Speak with Another",
    category: "general",
    prerequisites: ["Must have a familiar that has the ability to Speak with Master"],
    benefitSummary:
      "Choose a number of individuals equal to one plus your familiar's Intelligence modifier (minimum one); your familiar can speak to them in the secret language it shares with you, communicating as if using a common language (others cannot understand without magical help, but those chosen understand without aid). (Printed as a [Special] feat.)",
    modifiers: [],
    special: "This feat may be taken multiple times; each time the familiar's master chooses a new batch of individuals to which the familiar can speak.",
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
  {
    id: "unbroken-bond",
    name: "Unbroken Bond",
    category: "general",
    prerequisites: ["Must have a familiar", "Cultivate Link"],
    benefitSummary:
      "Each time you gain a '+1 level to existing class' benefit and apply it toward your sorcerer or wizard spells, you also gain +1 to your effective master level with one particular familiar type. (Printed as a [Special] feat.)",
    modifiers: [],
    special: "This feat may be taken multiple times, but each time it must be for a different familiar type (magical beast, ooze, undead, and so on).",
    source: `${FAM}, p. 41`,
    sourceUrl: FAM_URL,
    ruleset: "core",
  },
];
