// Dragon Magazine #336 (October 2005) — magic item draft: 8 records.
// "Bazaar of the Bizarre: Curios of Corruption" (Greg Marks), pp. 70-72 —
// eight items of horror, matching the survey's "~8" exactly. The set
// piece, the Blasphemous Figurines of the Void, is ONE item record (a
// set of four jade figurines in a black velvet bag, priced as a set at
// 14,000 gp), with each figurine's blessing carried in its summary.
// NOT staged from Spellcraft: the Demonomicon of Iggwilv itself (a
// lesser artifact: +5 caster levels on evil-descriptor spells, planar
// binding bonuses, soul-trapping blank pages, CL 18th) screens to
// reference under APOC severed-planar / calling canon — see
// SCREENING.md and reference.md.
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 70-72); the image governs over the OCR
// stream — it confirms the sacrificial knife's unusual printed price
// (14,302 gp) and the parasitic twin's 91,000 gp.
// ⚠️ APOC FLAGS — see SCREENING.md: the carnivorous tome works by trap
// the soul; the fiendish elixir grants the extraplanar subtype for an
// hour; the brush of the fallen master was created by a demonologist
// who sold his soul (lore only — its mechanics are painting and
// negative levels). All stage as printed.
// Item summaries are faithful paraphrases in our own words; no magazine
// prose is reproduced.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #336 — Bazaar of the Bizarre: Curios of Corruption (Greg Marks), pp. 70-72";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_336_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "blasphemous-figurines-of-the-void",
    name: "Blasphemous Figurines of the Void",
    cost: "14,000 gp",
    summary:
      "Wondrous item (set) — four disturbingly carved jade figurines in a black velvet bag comprise this complete set. Each figurine bestows a different blessing upon its wielder when held in hand and its name is spoken; each can be invoked only once per day, and the user can have the blessings of only one figurine at a time. All four figurines must be stored together in the same black velvet bag or they cannot be recharged and used the next day. Alintyl, the Corruptor (cephalopodan): a +5 profane bonus on Bluff and Diplomacy checks for 1 hour. Ilanser bli, the Seductress (porcine): cast charm person once per day as a 5th-level sorcerer with a duration of 1 hour and a range of touch; those charmed seek to woo the user, desiring the user even to their detriment. Nolanlor, the Devourer (avian): nonmagical food and water within 30 feet of the user permanently spoils and becomes unfit for consumption (potions and other magical foods are not affected), and the user is plunged into darkness, as per the spell; these effects last for 1 hour. Vandommezeron, the Destroyer (apelike): the activator is filled with a furious rage, as per the spell cast by a 5th-level wizard. Faint enchantment, evocation, and transmutation; CL 5th; Craft Wondrous Item, charm person, darkness, rage; Weight 2 lb.",
  }),
  M({
    id: "brush-of-the-fallen-master",
    name: "Brush of the Fallen Master",
    cost: "20,000 gp",
    summary:
      "Wondrous item — a fine paintbrush with an elegant darkwood handle and a golden setting holding fine blond bristles taken from the head of a murdered elven prince, originally created by Xerith Blasitil, a powerful demonologist who sold his soul to create it. Given suitable raw materials (such as paints and a canvas), the brush allows its user to create beautiful masterpieces, bestowing a +20 competence bonus on the user's Craft (painting) skill checks. However, every time the brush is used to create a painting, it bestows one negative level upon the user. Negative levels acquired in this way remain as long as the painter keeps the brush and disappear when the brush is permanently discarded; they never result in actual level loss, but they cannot be overcome in any way (including restoration spells) while the brush is owned. The brush cannot be discarded unless its owner makes a Will save (DC 20 + the number of paintings created using the brush), attempted no more than once per day. Once a painter uses the brush he feels a desire to continue creating more paintings: once per week, if the owner has not begun painting a new piece he must make a Will save (DC 20 + number of weeks since last painting with the brush) or be compelled to start a new painting and therefore gain another negative level. Strong transmutation; CL 15th; Craft Wondrous Item, enervation; Weight —.",
  }),
  M({
    id: "carnivorous-tome",
    name: "Carnivorous Tome",
    cost: "150,000 gp",
    summary:
      "Wondrous item — the front cover of this large dusty tome bares a poorly tanned and stretched humanoid face, with jagged teeth protruding from the mouth, nostrils, and eyes; only half of its 101 pages bear any writing, and each of those offers the detailed physical description of an individual inscribed in Infernal. The tome is an insidious trap for book thieves: when at rest among other books it alters its appearance to fit in with nearby tomes. If a creature touches the tome without first speaking the command word, the tome immediately animates, its mouth suddenly taking on a dark sheen that glows a pale sea-green and rasping as if taking a dead breath with ancient, dust-filled lungs; the creature touching the tome risks becoming trapped within its pages, sucked in by the drawing breath of the cover's mouth — it must succeed at a DC 23 Will save or be imprisoned within the book, its description immediately appearing on one of the blank pages. Once all the pages are filled, the book no longer animates when touched and acts as a simple book of descriptions. If a page is burned or otherwise destroyed, the creature described on that page is lost and can only be returned to life by a miracle or wish spell; destroying the entire book affects all the creatures trapped within. Speaking the command word and reading a description frees the creature from its imprisonment. Strong abjuration; CL 17th; Craft Wondrous Item, trap the soul; Weight 5 lb. APOC: the tome imprisons creatures in its pages (a trap the soul effect) — see SCREENING.md.",
  }),
  M({
    id: "fiendish-elixir",
    name: "Fiendish Elixir",
    cost: "5,000 gp",
    summary:
      "Wondrous item (elixir) — housed in a black crystal bottle with a long fluted neck, this elixir is created from the corrupted blood of a celestial and is most commonly found among mortals allied with fiends or who otherwise embrace the powers of the Lower Planes; its power activates upon consuming the enchanted blood. A character imbibing the elixir gains a +5 circumstance bonus on Fortitude saving throws against poison, acid and cold resistance 5, a +2 natural armor bonus, and a +2 enhancement bonus to Strength. In addition, the drinker gains 5 points of damage reduction dependent upon his alignment: a lawful drinker gains DR 5/silver, a chaotic drinker gains DR 5/cold iron, and a drinker neither chaotic nor lawful gains DR 5/magic. All of the elixir's effects last for 1 hour. While under the effect of the elixir, the drinker gains the extraplanar and evil subtypes, with all their benefits and penalties, regardless of the drinker's actual type or alignment. Moderate transmutation; CL 7th; Craft Wondrous Item, polymorph; Weight 1/2 lb. APOC: the drinker temporarily gains the extraplanar subtype — see SCREENING.md.",
  }),
  M({
    id: "mask-of-endless-laughter",
    name: "Mask of Endless Laughter",
    cost: "24,500 gp",
    summary:
      "Wondrous item (face) — created to bring joy into the hearts of children, this harlequin mask of white porcelain was corrupted by the taint of evil; it straps over the wearer's face using colorful ribbons that tie behind the head. While wearing the mask, the user gains a +2 enhancement bonus to his Charisma score and a +5 competence bonus on Perform (comedy) skill checks. Anyone who witnesses a performance given by the mask's wearer must make a DC 13 Will save or suffer the effects of Tasha's hideous laughter for the duration of the performance, regardless of the Perform skill used. The mask comes with a price: if removed, the wearer must make a DC 23 Will save or die in 1d4 rounds as a seizure of laughter overcomes him; a break enchantment, miracle, remove curse, or wish spell cast during the seizure ends it and prevents the wearer from dying. Faint enchantment; CL 5th; Craft Wondrous Item, Tasha's hideous laughter; Weight 1 lb.",
  }),
  M({
    id: "parasitic-twin",
    name: "Parasitic Twin",
    cost: "91,000 gp",
    summary:
      "Wondrous item — this ruddy lump of nondescript flesh feels warm to the touch and shows no signs of rot regardless of how long it sits. Anyone consuming this piece of flesh grows a second head from her left shoulder within 1d6 days; once consumed, only a heal or remove disease cast within the first 24 hours prevents the second head from forming. The second head is physically similar to the primary head, although often slightly smaller and more malignant in appearance. The parasitic twin possesses the same Intelligence, Wisdom, and Charisma scores as its host, as well as the same alignment portion relating to law and chaos (but it is always evil). It speaks any languages the host does, as well as Abyssal and Infernal. The parasitic twin also has 10 ranks in Knowledge (arcana), Knowledge (religion), and Knowledge (the planes); it possesses no other skill ranks, cannot make attacks, and cannot cast spells, but it can make untrained skill checks that do not require a body, such as Bluff or Listen. These languages and skill ranks belong to the parasitic twin and do not aid the host in qualifying for prestige classes. The parasitic twin has no control of the body beyond its own head and neck; any spell effect suffered by the host also affects the parasitic twin, but the twin cannot be slain without removing it or killing the host — it can only be removed by cutting it from the host, a process that deals 10d6 points of damage to the host. The twin aids the host solely based upon its never-ending quest to corrupt the host to evil and the worship of dark powers: every small concession the host makes might earn her some useful piece of information or a few hours of cooperation from the parasitic twin; while the twin prefers to allow the host to corrupt herself, once per week it can force the host to make a DC 20 Will save or perform an evil act, which might eventually result in an alignment change. Any attack that would affect only the user's head (such as a vorpal weapon) has a 50% chance of affecting the parasitic twin instead; if the effect targets the user's actual head it affects him as normal, and the parasitic twin then gains control of the body. Strong conjuration; CL 13th; Craft Wondrous Item, regenerate, creator must be evil; Weight 1/2 lb.",
  }),
  M({
    id: "sacrificial-knife-336",
    name: "Sacrificial Knife",
    cost: "14,302 gp",
    summary:
      "Weapon — the hilt of this knife is cast as an open-mouthed serpent, the dull wavy blade forming its tongue, with a dark ruby the size of an acorn at the end of the serpent's tail forming the pommel. Thin and poorly balanced, this +1 dagger imposes a -2 penalty on attack rolls when used as a weapon. Its purpose becomes clear when brought near a helpless living creature, as a deep red glow begins to emanate from within the pommel and a faint hissing noise becomes audible: if used in a coup de grace attempt, plunging the blade into the heart of the helpless living creature, the sacrificial knife casts death knell on the target creature, benefiting the wielder. Faint necromancy; CL 3rd; Craft Magic Arms and Armor, death knell; Weight 1 lb. (Staged under a -336 id because the plain name is a generic weapon description; the audit verifies the id against the live barrels — see MANIFEST.)",
  }),
  M({
    id: "staff-of-nightmares",
    name: "Staff of Nightmares",
    category: "staff",
    cost: "51,000 gp",
    summary:
      "Staff — bleached bones held together by dried sinew and spiked chains create this morbid staff. The staff of nightmares allows the use of the following spells: scare (1 charge), fear (2 charges), nightmare (2 charges), phantasmal killer (2 charges), symbol of fear (3 charges), weird (4 charges). Strong illusion and necromancy; CL 17th; Craft Staff, fear, nightmare, phantasmal killer, scare, symbol of fear, weird; Weight 5 lb.",
  }),
];
