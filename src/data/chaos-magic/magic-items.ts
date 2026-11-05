import type { MagicItemDefinition } from "@/engine/types";

// Chaos Magic: Wild Sorcery (Encyclopaedia Arcane,
// Mongoose Publishing, 2001) — Bottled Lightning,
// printed pp. 54-59, transcribed from Shaun's own
// scanned copy (read visually; the scan is image-only),
// 2026-11-04. The book prints no named, priced magic
// items: chaos magic items are individually crafted by
// infusing a masterwork object with one of the five
// infusion types below, so the five infusion types are
// built here as item records, priced by the book's
// reagent costs (printed p. 56) exactly as printed.
// All infusions within a single item must be of the
// same type. Creation in brief (full digest in the
// draft report): only masterworked items may be
// infused (attempting to infuse a lesser item causes
// an explosion); the tempering solution costs the
// reagent prices in each record's cost field and takes
// 1 day per 500 gp to brew (Alchemy check DC 10 + 1 per
// 500 gp of ingredients); tempering takes 1 day per
// 500 gp of combined cost (second Alchemy check at the
// same DC); the final infusion takes 1 hour per 500 gp
// and ends with a Will save. A finished item must be
// attuned to a wielder to provide any benefit — for
// each infusion attuned, the wielder suffers a -1
// penalty to either his Strength, Dexterity or
// Constitution — and all chaos items suffer chaotic
// decay, ending in explosive decay. Summaries are
// short mechanical paraphrases in our own words; no
// book prose is reproduced.

const CM = "Chaos Magic: Wild Sorcery";
const CM_PATH = "/Desktop/DnD-3.5/Supplements/Magic/Encyclopaedia Arcane/Chaos Magic - Wild Sorcery.pdf";
const BL = `${CM} — Bottled Lightning`;

export const CHAOS_MAGIC_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "augmentation-infusion",
    name: "Augmentation Infusion",
    category: "Chaos magic infusion",
    cost: "500 gp per point of enhancement bonus in reagents (up to 2,500 gp for +5), plus the masterwork base item",
    summary: "Chaos magic item infusion (book pp. 55-56): adds an enhancement bonus to one of the following — damage rolls, attack rolls, Armour Class, or one ability score. The chaos mage must select one of these to receive the object's augmentation infusion; whilst a single object may contain more than one augmentation infusion, each must have a different effect. Augmentation, insight, and resistance infusions are able to provide a maximum bonus of +1 for every two caster levels of their creator. Chaotic decay: the attuned wielder must make a Will save every full week at DC 10 + 1 per point of enhancement or the object loses one point of hardness.",
    source: `${BL} — Select Infusion, p. 55`,
    sourceUrl: CM_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "insight-infusion",
    name: "Insight Infusion",
    category: "Chaos magic infusion",
    cost: "250 gp per point of insight bonus in reagents (up to 1,250 gp for +5), plus the masterwork base item",
    summary: "Chaos magic item infusion (book pp. 55-56): provides an insight bonus to a single skill. The skill that will receive the insight bonus must be specified at the time the infusion is created and cannot be altered thereafter. Augmentation, insight, and resistance infusions are able to provide a maximum bonus of +1 for every two caster levels of their creator. Chaotic decay: the attuned wielder must make a Will save every full week at DC 10 + 1 per 2 points of bonus or the object loses one point of hardness.",
    source: `${BL} — Select Infusion, p. 55`,
    sourceUrl: CM_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "resistance-infusion",
    name: "Resistance Infusion",
    category: "Chaos magic infusion",
    cost: "200 gp per point of resistance bonus in reagents (up to 1,000 gp for +5), plus the masterwork base item",
    summary: "Chaos magic item infusion (book pp. 55-56): applied to a character's saving throws, granting a resistance bonus to one of the following attack types — acid, cold, fire, lightning, or sonic. Augmentation, insight, and resistance infusions are able to provide a maximum bonus of +1 for every two caster levels of their creator. Chaotic decay: the attuned wielder must make a Will save every full week at DC 10 + 1 per 2 points of bonus or the object loses one point of hardness.",
    source: `${BL} — Select Infusion, p. 55`,
    sourceUrl: CM_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "storage-infusion",
    name: "Storage Infusion",
    category: "Chaos magic infusion",
    cost: "50 gp per point of chaos energy to be stored in reagents, plus the masterwork base item",
    summary: "Chaos magic item infusion (book pp. 55-56): holds raw, primal chaos for later use by the chaos mage — having this energy on tap allows the chaos mage to cast more powerful spells than he would normally be capable of, while decreasing the chances he will suffer a backlash. Any chaos mage attuned to an item with this type of infusion can use the energy it contains to lower the DC of any Casting check they make while casting a chaos magic spell: a chaos mage can draw up to three points of chaos energy per caster level from a storage infusion for use during the casting of a spell, and each point used grants a +1 enhancement bonus to the Casting check required to cast the spell. Chaotic decay: the attuned wielder must make a Will save every full week at DC 10 + 1 per 10 points of stored energy or fraction thereof, or the object loses one point of hardness.",
    source: `${BL} — Select Infusion, p. 55`,
    sourceUrl: CM_PATH,
    ruleset: "core",
    modifiers: [],
  },
  {
    id: "luck-infusion",
    name: "Luck Infusion",
    category: "Chaos magic infusion",
    cost: "150 gp per point of luck in reagents, plus the masterwork base item",
    summary: "Chaos magic item infusion (book pp. 55-56): the most unpredictable infusion type, bending the forces of chaos in favour of the character wielding it. For every point of luck placed in an object, the wielder may add +1 to any die roll once each day; up to three points of luck may be used on any one die roll, providing a maximum +3 circumstance bonus. However, each time a point of luck is used, the Games Master will give the character a -1 circumstance penalty on any other roll the character makes within the next twenty-four hours, as he desires; if no roll is made during the period in which a circumstance penalty could come into play, the Games Master should feel free to visit bad luck upon the character (a lost pouch, a leaking water skin, an old enemy learning of their whereabouts). Chaotic decay: the attuned wielder must make a Will save every full week at DC 10 + 1 per point of luck or the object loses one point of hardness.",
    source: `${BL} — Select Infusion, pp. 55-56`,
    sourceUrl: CM_PATH,
    ruleset: "core",
    modifiers: [],
  },
];
