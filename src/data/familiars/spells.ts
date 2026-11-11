import type { SpellDefinition } from "@/engine/types";

// Familiars: Crouching Monkey, Hidden Toad (Encyclopaedia
// Arcane, Mongoose Publishing, MGP 1017, ©2003) spells,
// transcribed from Shaun's own scanned copy (read visually,
// 2026-11-04). The PDF is image-only; printed page = PDF
// page − 2 throughout.
//
// SOURCES: The Summoning (pp. 7–12) prints fifteen "familiar
// ritual" entries, one per creature type, each covering spell
// levels I–IX with "Level: Varies"; the book's own Rules
// Summary (p. 63) lists each numeral separately as a spell of
// its own level — "Familiar Ritual I" is a 1st-level spell
// summoning a creature of CR less than 1/2, up to "Familiar
// Ritual IX", a 9th-level spell summoning CR 8 or less (per
// the Familiar Ritual CRs table, p. 7). The records below
// therefore expand each printed family entry into its nine
// spells (135 records), generated from the family's printed
// stat block so the shared text lives once; each record's
// citation is the family's chapter pages. The Training
// chapter's Training Ritual I–VIII (p. 35) is expanded the
// same way (the summary lists Training Ritual I as a
// 2nd-level spell through Training Ritual VIII as 9th).
// Unbound Mages adds two individual ritual spells (pp. 33–34)
// and Spells of the Master eight more (pp. 54–56).
//
// 3.0-era presentation is kept as printed and noted, not
// modernised: every spell in this book is printed under the
// "Universal" school, casting times print "1 action" (3.5:
// 1 standard action), and most entries print no Saving Throw
// or Spell Resistance line at all (recorded as "Not printed
// in source", following the heroes-of-horror pack). Summaries
// and descriptions are short mechanical paraphrases in our
// own words; no book prose is reproduced.
// Source PDF: /A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf

const FAM = "Familiars: Crouching Monkey, Hidden Toad";
const FAM_URL =
  "/A POC PC related/2.Alchemy & steampunk flavored material/Familiars. Crouching Monkey, Hidden Toad.pdf";

/** Maximum familiar Challenge Rating per ritual spell level (p. 7 table). */
const RITUAL_CR = ["less than 1/2", "1", "2", "3", "4", "5", "6", "7", "8"];
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const ROMAN_ID = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"];

const SUMMONING_RULES =
  "All familiar ritual spells are part of the Summon Familiar ability and do not count against a caster's spells known (if any). The spell's level caps the familiar's Challenge Rating (1st: less than 1/2; 2nd: 1; 3rd: 2; 4th: 3; 5th: 4; 6th: 5; 7th: 6; 8th: 7; 9th: 8 — the Improved Familiar feat may allow a higher CR than normal). Ritual spells cannot summon creatures with class levels, except that humanoids and other creatures that advance by class begin with one free class level in their chosen path of infusion. Before the ritual completes, the mage chooses a path of infusion for the familiar and pays any XP cost that path carries. The spell slot used is 'permanently' used until the familiar is dismissed or dies, and the caster regains it a year after the dismissal or death.";

interface RitualFamily {
  /** Kebab id stem, e.g. "animal-familiar-ritual". */
  id: string;
  /** Printed entry name without the I–IX range, e.g. "Animal Familiar Ritual". */
  name: string;
  /** Target line noun, e.g. "animal". */
  target: string;
  /** Printed page span of the family entry, e.g. "pp. 8–9". */
  cite: string;
  components: string;
  castingTime: string;
  /** Material/focus/XP cost detail, appended to the description. */
  costDetail: string;
  /** Whether the familiar becomes a magical beast on completion. */
  becomesMagicalBeast: boolean;
}

function familiarRitual(f: RitualFamily, n: number): SpellDefinition {
  const level = n + 1; // array index 0 = ritual I = 1st-level spell
  const effective =
    level === 1
      ? "As a 1st-level ritual it uses the master's full effective level."
      : `Because this is a ${ROMAN[n]} ritual, the familiar's effective master level is the master's actual level minus ${level}.`;
  const typeNote = f.becomesMagicalBeast
    ? " On completion of the ritual the familiar becomes a magical beast."
    : " This ritual does not change the familiar's type to magical beast.";
  return {
    id: `${f.id}-${ROMAN_ID[n]}`,
    name: `${f.name} ${ROMAN[n]}`,
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": level },
    components: f.components,
    castingTime: f.castingTime,
    range: "Unlimited",
    targetOrArea: `One ${f.target}`,
    duration: "Instantaneous",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary: `Binds one ${f.target} of Challenge Rating ${RITUAL_CR[level - 1]} or less as the caster's familiar. ${f.costDetail}`,
    description: `${SUMMONING_RULES} ${effective}${typeNote}`,
    source: `${FAM}, ${f.cite}`,
    sourceUrl: FAM_URL,
  };
}

const TRADITIONAL_MC =
  "Material component: 100 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 100 gp.";
const ALT_MC_250 =
  "Material component: 250 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 250 gp. Arcane focus: an object associated with the type of creature bound (not consumed). XP cost: 25 XP per Challenge Rating of the familiar.";
const ALT_MC_500 =
  "Material component: 500 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 500 gp. Arcane focus: an object associated with the type of creature bound (not consumed). XP cost: 50 XP per Challenge Rating of the familiar.";

const RITUAL_FAMILIES: RitualFamily[] = [
  {
    id: "animal-familiar-ritual",
    name: "Animal Familiar Ritual",
    target: "animal",
    cite: "p. 7",
    components: "V, S, M",
    castingTime: "9 hours",
    costDetail: TRADITIONAL_MC,
    becomesMagicalBeast: true,
  },
  {
    id: "beast-familiar-ritual",
    name: "Beast Familiar Ritual",
    target: "beast",
    cite: "p. 8",
    components: "V, S, M",
    castingTime: "9 hours",
    costDetail: `${TRADITIONAL_MC} Printed as "same as animal familiar ritual, only this spell binds a beast."`,
    becomesMagicalBeast: true,
  },
  {
    id: "magical-beast-familiar-ritual",
    name: "Magical Beast Familiar Ritual",
    target: "magical beast",
    cite: "p. 8",
    components: "V, S, M",
    castingTime: "9 hours",
    costDetail:
      "Material component: 250 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 250 gp.",
    becomesMagicalBeast: false,
  },
  {
    id: "vermin-familiar-ritual",
    name: "Vermin Familiar Ritual",
    target: "vermin",
    cite: "pp. 8–9",
    components: "V, S, M",
    castingTime: "9 hours",
    costDetail: `${TRADITIONAL_MC} Printed as "same as animal familiar ritual, only this spell binds vermin."`,
    becomesMagicalBeast: true,
  },
  {
    id: "aberrations-familiar-ritual",
    name: "Aberrations Familiar Ritual",
    target: "aberration",
    cite: "p. 9",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
  {
    id: "construct-familiar-ritual",
    name: "Construct Familiar Ritual",
    target: "construct",
    cite: "pp. 9–10",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail:
      "Material component: 250 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 250 gp. Focus: a construct present within the magic circle; or precious material placed within the circle worth at least the construct's creation cost — in that case the materials are consumed and replaced by the construct. XP cost: the normal experience cost for creating a construct of that type, plus 25 XP per Challenge Rating.",
    becomesMagicalBeast: false,
  },
  {
    id: "dragon-familiar-ritual",
    name: "Dragon Familiar Ritual",
    target: "dragon",
    cite: "p. 10",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail:
      "Material component: 750 gp worth of diamond dust or other precious material per Challenge Rating of the familiar, minimum 750 gp. Arcane focus: an object associated with the type of dragon bound (not consumed). XP cost: 75 XP per Challenge Rating of the familiar.",
    becomesMagicalBeast: false,
  },
  {
    id: "fey-familiar-ritual",
    name: "Fey Familiar Ritual",
    target: "fey",
    cite: "p. 10",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
  {
    id: "humanoid-familiar-ritual",
    name: "Humanoid Familiar Ritual",
    target: "humanoid",
    cite: "pp. 10–11",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
  {
    id: "monstrous-humanoid-familiar-ritual",
    name: "Monstrous Humanoid Familiar Ritual",
    target: "monstrous humanoid",
    cite: "p. 11",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_500,
    becomesMagicalBeast: false,
  },
  {
    id: "ooze-familiar-ritual",
    name: "Ooze Familiar Ritual",
    target: "ooze",
    cite: "p. 11",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: `${ALT_MC_500} The focus for this ritual is a magically treated container that will hold the ooze during the spell.`,
    becomesMagicalBeast: false,
  },
  {
    id: "outsider-familiar-ritual",
    name: "Outsider Familiar Ritual",
    target: "outsider",
    cite: "p. 11",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
  {
    id: "plant-familiar-ritual",
    name: "Plant Familiar Ritual",
    target: "plant",
    cite: "p. 12",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
  {
    id: "shapechanger-familiar-ritual",
    name: "Shapechanger Familiar Ritual",
    target: "shapechanger",
    cite: "p. 12",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_500,
    becomesMagicalBeast: false,
  },
  {
    id: "undead-familiar-ritual",
    name: "Undead Familiar Ritual",
    target: "undead creature",
    cite: "p. 12",
    components: "V, S, M, F, XP",
    castingTime: "12 hours",
    costDetail: ALT_MC_250,
    becomesMagicalBeast: false,
  },
];

/** XP cost of a training ritual by the familiar's total class levels beforehand (p. 36). */
const TRAINING_XP = "0 levels: 1,000 XP; 1 level: 2,000 XP; 2 levels: 3,000 XP; 3 levels: 4,000 XP; 4 levels: 5,000 XP; 5 levels: 6,000 XP; 6 levels: 7,000 XP; 7 levels: 8,000 XP";

function trainingRitual(n: number): SpellDefinition {
  const granted = n + 1; // Training Ritual I grants the 1st class level
  const slot = granted + 1; // ...and is cast with a (granted+1)-level spell slot
  return {
    id: `training-ritual-${ROMAN_ID[n]}`,
    name: `Training Ritual ${ROMAN[n]}`,
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": slot },
    components: "V, S, M, F",
    castingTime: "9 hours",
    range: "Unlimited",
    targetOrArea: "One familiar",
    duration: "Instantaneous",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary: `Infuses the caster's familiar with the abilities (but not the Hit Dice) of its ${["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"][n]} level in a class appropriate to its path of infusion, cast with a ${slot}${slot === 2 ? "nd" : slot === 3 ? "rd" : "th"}-level spell slot. Training rituals must be cast in sequence (I through VIII), and a familiar can hold at most eight trained class levels.`,
    description: `Material cost: 300 gp worth of masterwork objects associated with the class being trained in, per spell level of the ritual (for this ritual, ${300 * slot} gp). XP cost, by the familiar's total class levels prior to the ritual — ${TRAINING_XP}. A trained familiar adds the class's base attack bonus to the bonus granted by its master, adds the class's saving throw modifiers to its normal bonuses, and gains the class's skill points on top of its base skills; it does not gain bonus feats or ability increases from level gains, and each class carries special training restrictions (pp. 36–38). This spell is part of the Summon Familiar ability and does not count against a caster's spells known (if any).`,
    source: `${FAM}, pp. 35–36`,
    sourceUrl: FAM_URL,
  };
}

export const FAMILIARS_SPELLS: SpellDefinition[] = [
  // The Summoning (pp. 7–12): fifteen familiar ritual families × I–IX.
  ...RITUAL_FAMILIES.flatMap((f) => ROMAN.map((_, n) => familiarRitual(f, n))),
  // Training Familiars (pp. 35–36): Training Ritual I–VIII.
  ...ROMAN.slice(0, 8).map((_, n) => trainingRitual(n)),
  // Unbound Mages (pp. 33–34).
  {
    id: "ritual-of-independence",
    name: "Ritual of Independence",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 1 },
    components: "V, S, M",
    castingTime: "9 hours",
    range: "Personal",
    targetOrArea: "You",
    duration: "Instantaneous",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "The caster forever gives up the ability to summon a familiar and gains a bonus feat: a metamagic feat, an item creation feat, Spell Focus, or Spell Penetration. Material cost: 100 gp worth of diamond dust or some other precious material encircling the caster.",
    description:
      "This spell may not be cast by a mage who has ever bonded to a familiar. The ritual is irreversible — once it is completed the caster will never be able to summon a familiar again — and it takes immediate effect; further castings have no effect. Like the other ritual spells in this book it is part of the Summon Familiar ability and does not count against a caster's spells known (if any).",
    source: `${FAM}, p. 33`,
    sourceUrl: FAM_URL,
  },
  {
    id: "ritual-of-power",
    name: "Ritual of Power",
    ruleset: "core",
    school: "Universal",
    descriptors: ["Evil"],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M, XP",
    castingTime: "9 hours",
    range: "Personal",
    targetOrArea: "You",
    duration: "Instantaneous",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "The caster sacrifices another mage's familiar and forever gives up summoning a familiar of his own, gaining a bonus feat (metamagic, item creation, Spell Focus, or Spell Penetration), the special boon normally associated with the sacrificed familiar, and a +2 inherent bonus to his primary casting ability (Charisma for sorcerers, Intelligence for wizards). Material cost: a masterwork or better weapon and 100 gp worth of diamond dust or other precious material encircling the familiar to be sacrificed. XP cost: 2,500 XP.",
    description:
      "This spell may not be cast by a mage who has ever bound himself to a familiar or cast the ritual of independence. The sacrificed familiar must have (or have had, before its death) a master of the same caster level as the caster of this spell; it is killed with a ceremonial weapon as part of the ritual. The ritual is irreversible and takes immediate effect; further castings have no effect. If the caster ever atones for this act (via the atonement spell or some other means), he permanently loses the boon and the inherent bonus but keeps the bonus feat. Like the other ritual spells in this book it is part of the Summon Familiar ability and does not count against a caster's spells known (if any).",
    source: `${FAM}, p. 34`,
    sourceUrl: FAM_URL,
  },
  // Spells of the Master (pp. 54–56).
  {
    id: "bond-transferral",
    name: "Bond Transferral",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 7 },
    components: "V, S, M, XP",
    castingTime: "9 hours",
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "One willing creature and your familiar",
    duration: "Instantaneous",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Bonds the caster's familiar to a creature of the caster's choice, making that creature its new master. Material cost: 100 gp worth of diamond dust or other precious material per Challenge Rating of the familiar being bonded, minimum 100 gp. XP cost: the maximum experience loss that comes from dismissing a familiar (200 XP per class level); the recipient must also pay the normal XP cost for acquiring a familiar of the Challenge Rating and type bonded.",
    description:
      "The familiar uses its previous master's effective class level, reduced by two, when determining its special abilities, and that level is not affected by any later increase in the former master's level. If the familiar was summoned with a 'permanent' spell slot, the former master does not regain the slot unless the familiar dies or the new master takes over its maintenance by sacrificing the appropriate level spell slot; if the new master's effective class level later rises above the former master's, the new master may take over the familiar's maintenance that way, and the familiar then uses the new master's effective level. In all other respects the pair are treated as a normal master and familiar: the new master gains the boons of the familiar's type, the familiar is infused with the abilities appropriate to its adjusted master level, and both suffer the dooms of the bond. The familiar still counts against both masters' numbers of familiars (relevant only with the Extra Familiar feat).",
    source: `${FAM}, pp. 54–55`,
    sourceUrl: FAM_URL,
  },
  {
    id: "bolster-familiar",
    name: "Bolster Familiar",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 3 },
    components: "V, S",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "Your familiar",
    duration: "1 minute/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Grants your familiar 1d4+1 temporary hit points per four caster levels and a +1 bonus to all attack rolls and saving throws.",
    source: `${FAM}, p. 55`,
    sourceUrl: FAM_URL,
  },
  {
    id: "familiar-growth",
    name: "Familiar Growth",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "Your familiar",
    duration: "1 minute/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Your familiar grows to twice its normal size — height, length and width double and its weight increases by a factor of eight. Its Hit Dice double and it gains temporary hit points equal to its current hit points; its size increases one step (with the matching changes to AC, attack bonus, grapple and so on); it gains a +2 size bonus to Strength and Constitution, and the damage of its natural attacks increases.",
    source: `${FAM}, p. 55`,
    sourceUrl: FAM_URL,
  },
  {
    id: "familiar-refuge",
    name: "Familiar Refuge",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 2 },
    components: "V, S",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./level)",
    targetOrArea: "Your familiar",
    duration: "1 round/level",
    savingThrow: "Will negates",
    spellResistance: "No",
    summary:
      "Wards your familiar: any opponent attempting to strike or otherwise directly attack it, even with a targeted spell, must first attempt a Will save. An attacker who fails cannot follow through — that part of its action is lost — and cannot directly attack the warded familiar for the spell's duration; one who succeeds attacks normally and is unaffected by that casting. The spell does not protect against area or effect spells, and the familiar breaks the spell if it attacks or casts any offensive spells.",
    source: `${FAM}, pp. 55–56`,
    sourceUrl: FAM_URL,
  },
  {
    id: "familiars-fang",
    name: "Familiar's Fang",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 2 },
    components: "V, S",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "Your familiar",
    duration: "1 minute/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Gives one of your familiar's natural weapons (a slam attack, fist, bite, or other natural weapon) a +1 enhancement bonus to attack and damage rolls. The spell does not change an unarmed strike's damage from nonlethal damage to normal damage.",
    source: `${FAM}, p. 56`,
    sourceUrl: FAM_URL,
  },
  {
    id: "greater-familiars-fang",
    name: "Greater Familiar's Fang",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 4 },
    components: "V, S",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "Your familiar",
    duration: "1 hour/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary: "As familiar's fang, except that the enhancement bonus to attack and damage is +1 per three caster levels (maximum +5).",
    source: `${FAM}, p. 56`,
    sourceUrl: FAM_URL,
  },
  {
    id: "speak-with-familiar",
    name: "Speak with Familiar",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 1 },
    components: "V, S",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "One touched creature and your familiar",
    duration: "1 minute/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "The subject of the spell can comprehend and communicate with your familiar, asking questions of and receiving answers from the indicated familiar.",
    source: `${FAM}, p. 56`,
    sourceUrl: FAM_URL,
  },
  {
    id: "takkalars-familiar-augmentation",
    name: "Takkalar's Familiar Augmentation",
    ruleset: "core",
    school: "Universal",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 5 },
    components: "V, S, M",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "Your familiar",
    duration: "1 round/level",
    savingThrow: "Not printed in source",
    spellResistance: "Not printed in source",
    summary:
      "Your familiar gains 1d6 temporary hit points per caster level, a 2d4 enhancement bonus to Strength, a 2d4 enhancement bonus to Dexterity, a +1 base attack bonus per two effective master levels (which may give the familiar an extra attack), and a +5 competence bonus on Fortitude saves. Material component: powdered ginseng, sprinkled in the familiar's direction.",
    description:
      "The book's Rules Summary (p. 63) lists this spell under the name \"Tenser's Familiar Augmentation\"; the full entry in Spells of the Master (p. 56) is headed \"Takkalar's Familiar Augmentation\" and is the name recorded here.",
    source: `${FAM}, p. 56`,
    sourceUrl: FAM_URL,
  },
];
