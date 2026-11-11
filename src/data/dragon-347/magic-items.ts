// Dragon Magazine #347 (September 2006) — magic item draft: 9 records.
// All nine are "Bazaar of the Bizarre: A Mastery of Elements" (Greg
// Marks), pp. 72-74 — the survey estimated ~8; the article prints nine
// (confirmed by the Forgotten Realms wiki's article summary and by the
// page images). The items use the MIC-style Description / Activation /
// Effect / Aura-Caster Level / Construction format.
// Every price, aura, CL, construction line, and weight was verified
// against rendered page images (magazine pp. 72-74); the image governs
// over the OCR stream — it corrects the OCR on four prices/figures:
// boots of fire walking cost 37,500 gp (OCR read 17,500; the printed
// construction cost of 18,750 gp confirms the image), the choker of
// the sirens' construction XP is 1,744 (OCR garbled), gloves of
// burrowing cost 81,000 gp with 81 construction days, and a sling
// boulder deals 2d6+1 damage (OCR read 1d6+1).
// APOC flags — see SCREENING.md: bracers of whirlwind grant a flight
// speed (a flying effect; the Melairshield bars flying over the
// Bastion — the item stages as printed); gloves of burrowing build
// with passwall (a passage effect, not planar travel — stages clean,
// noted); the elemental elixir's transformation is a polymorph effect
// keyed to the four core elements — stages as printed under the
// elemental-hampering screen note (the hampering is not baked in).

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #347 — Bazaar of the Bizarre: A Mastery of Elements (Greg Marks), pp. 72-74";
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

export const DRAGON_347_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "boots-of-fire-walking",
    name: "Boots of Fire Walking",
    cost: "37,500 gp",
    summary:
      "Wondrous item (boots) — crafted from the skin of a salamander, these comfortable boots are covered in red scales and adjust to fit the size of your feet. Activation: wearing the boots activates their abilities. Effect: when worn, the boots grant you the ability to walk on lava as if it were solid ground and to climb flames as though they were solid rock (requiring a DC 15 Climb check). While wearing boots of fire walking, you and your equipment are immune to environmental heat damage, although the boots offer no protection from attacks that deal fire damage (magical or otherwise): you could attempt to climb a slow-moving lava fall or climb to the top of a bonfire, but you are not protected from a scorching ray or a fireball. Faint abjuration and transmutation; CL 5th; Craft Wondrous Item, protection from energy (fire), spider climb, 18,750 gp, 1,500 XP, 38 days; Weight 1 lb.",
  }),
  M({
    id: "bracers-of-whirlwind",
    name: "Bracers of Whirlwind",
    cost: "9,800 gp",
    summary:
      "Wondrous item (bracers) — this set of thin electrum bracers is engraved with images of blowing leaves and swirling clouds; the bracers are slim enough to let you easily hide them under loose clothing and adjust to fit when you don them. Activation: once per day as a standard action, you may cross your arms at the wrists and invoke the power of the bracers of whirlwind by exhaling a deep breath; the transformation lasts for 15 minutes, although you may dismiss the power of the bracers early and return to your normal form as a move action. Effect: the bracers transform you into a violent whirlwind made of air, granting you DR 10/magic and a flight speed of 100 feet (perfect). The whirlwind form is 40 feet high and behaves in all ways as the whirlwind of a Large air elemental (see page 95 of the Monster Manual). Moderate transmutation; CL 7th; Craft Wondrous Item, gaseous form, 4,900 gp, 392 XP, 10 days; Weight 1 lb. APOC: the form flies — see SCREENING.md.",
  }),
  M({
    id: "candle-of-sweet-breezes",
    name: "Candle of Sweet Breezes",
    cost: "1,500 gp",
    summary:
      "Wondrous item (candle) — white swirls decorate a slim blue candle held within a relatively plain silver candleholder. Activation: lighting the candle of sweet breezes as a standard action activates its abilities. Effect: when lit, a candle of sweet breezes creates a faint gust that forms a bubble of pure air in a radius of 60 feet that eliminates scents as well as airborne diseases and poisons; other air is displaced by the bubble, and the air within this bubble is safe to breathe 1 round after lighting the candle, regardless of any vapors or previous lack of air. The breeze created by the candle is very slight and does not disturb anything heavier than dust. Characters gain a +2 bonus on saving throws made to resist breath weapons that enter the area of the candle. The candle burns for 1 hour, after which time its magic fades and any previous environmental effects reestablish themselves normally. Once lit, the candle cannot be reused. Due to the magic of the candle, lighting the wick cannot result in an explosion, even if the candle is ignited within a flammable gas. Faint evocation; CL 3rd; Craft Wondrous Item, gust of wind, 750 gp, 60 XP, 2 days; Weight 1/2 lb.",
  }),
  M({
    id: "choker-of-the-sirens",
    name: "Choker of the Sirens",
    cost: "43,600 gp",
    summary:
      "Wondrous item (choker; occupies the same slot as an amulet) — a black leather choker edged in lace with two pearls set at its center; in addition to the two obvious pearls, the choker possesses an empty setting for a third stone. Prerequisite: the ability to breathe water functions regardless of the owner's gender, but the captivating song functions only for females. Activation: the ability to breathe water functions as long as the choker is worn and does not require any activation; once per day, you can captivate others by singing (you do not need ranks in Perform (sing) to use the captivation ability; a male character cannot use the captivating song feature). Effect: while worn, the choker of the sirens enables you to breathe water in addition to breathing air, as the spell water breathing. Only a female character can call forth the true power of the choker: once per day, when you sing, all creatures within 90 feet of you must make a Will save (DC 12 + your Charisma modifier) or become captivated; this is a sonic, mind-affecting, charm effect. A captivated victim moves toward you in the most direct way possible, can avoid hazards, and moves to avoid attacks of opportunity when able; a creature that takes damage is granted a second saving throw with a +2 bonus. Captivated creatures can take no actions other than to move toward you. A victim within 5 feet of you becomes fascinated and helpless, and it doesn't break free of the fascination effect unless it takes at least 1 point of damage (which grants it a saving throw with a +2 bonus). The effect continues for as long as you sing, to a maximum number of rounds equal to 3 + your Charisma modifier (minimum 1 round). A bard's countersong ability allows the captivated creature to attempt a new Will save. Attaching a pearl of the sirens (Dungeon Master's Guide, page 263) to the empty setting of the choker of the sirens increases the choker's DC by +2. Moderate enchantment and transmutation; CL 6th; Craft Wondrous Item, water breathing, enthrall, 21,800 gp, 1,744 XP, 22 days; Weight 1/2 lb.",
  }),
  M({
    id: "elemental-elixir",
    name: "Elemental Elixir",
    cost: "1,400 gp",
    summary:
      "Wondrous item (elixir) — found in a metal flask, this elixir comes in four varieties, one for each element: air, earth, fire, and water; each flask contains only one dose. Activation: drinking the elixir grants you its power. Effect: a dose of elemental elixir transforms you into an elemental of your size and of the kind the elixir is keyed to. The transformation lasts for 30 minutes, although you can dismiss the transformation as a standard action before the duration expires. For example, a halfling drinking an air elemental elixir transforms into a Small air elemental, while an ogre drinking a fire elemental elixir becomes a Large fire elemental. For the duration of the transformation, your type becomes elemental and your subtype changes to match your new form. You gain the Strength, Dexterity, and Constitution scores of the new elemental form but retain your own Intelligence, Wisdom, and Charisma scores. You also gain all extraordinary and supernatural special attacks and qualities possessed by the new elemental form. Neither changing into the new elemental form nor returning to your natural form results in the healing of any hit point damage. If slain, you revert to your original form, although you remain dead. Moderate transmutation; CL 7th; Craft Wondrous Item, polymorph, 700 gp, 56 XP, 2 days; Weight 1/2 lb. APOC: an elemental transformation — the elemental-hampering screen note is in SCREENING.md; the record is staged as printed.",
  }),
  M({
    id: "gloves-of-burrowing",
    name: "Gloves of Burrowing",
    cost: "81,000 gp",
    summary:
      "Wondrous item (gloves) — appearing as flexible cracked rock, a pair of gloves of burrowing are made from the stony hide of a xorn or similar elemental creature with the ability to burrow through earth. Activation: simply putting on the gloves grants you the ability to move through earth and stone; in addition, once per day, you can make a sudden chopping motion to grant you the ability to mold stone as clay, but doing so causes the gloves of burrowing to lose all power for 1 hour afterward. Effect: while worn, the gloves of burrowing grant you the ability to push through earth or stone with a burrow speed equal to one half your base land speed; your passage is like that of an earth elemental, leaving no tunnel behind for others to follow and indeed no signs of your passage at all. In addition to the ability to move through the ground, gloves of burrowing grant you the ability to use stone shape once per day as a 9th-level sorcerer. Moderate transmutation; CL 9th; Craft Wondrous Item, passwall, 40,500 gp, 3,240 XP, 81 days; Weight 1/2 lb.",
  }),
  M({
    id: "lascits-aquatic-earring",
    name: "Lascit's Aquatic Earring",
    cost: "19,500 gp",
    summary:
      "Wondrous item (earring; doesn't take up any magic item slot) — this earring bears a small sapphire carved in the shape of a leaping fish hanging inside a golden hoop; almost imperceptible, the words \"Ear of the Sea\" are engraved upon the hoop in Aquan. Activation: wearing the earring allows you to understand and speak Aquan; in addition, once per day you may purposefully rub the sapphire with a drop of seawater, as a standard action, in order to activate the speak with animals power of the earring. Effect: Lascit's aquatic earring grants you the ability to understand and speak Aquan as a constant effect; in addition, once per day, the wearer can speak with animals as a 5th-level druid, but with aquatic animals only. Faint divination; CL 5th; Craft Wondrous Item, speak with animals, comprehend languages, 9,750 gp, 780 XP, 10 days; Weight —.",
  }),
  M({
    id: "ring-of-immolation",
    name: "Ring of Immolation",
    category: "ring",
    cost: "56,000 gp",
    summary:
      "Ring — this brass ring is crafted in the shape of two flames whose tips meet to form a circle about your finger; the ring of immolation is always warm to the touch, regardless of the actual ambient temperature. Activation: putting on the ring engulfs you in violet flames. Effect: fire encircles your body, igniting nearby flammable objects and dealing 1d6+7 points of fire damage to those who attack you with a melee attack; enemies using a melee reach weapon are not subject to this damage. In addition, you can deal 1d6+7 points of fire damage to a foe with a successful touch attack. You cannot suppress the flames as long as the ring is worn, but they are instantly extinguished if you remove it. The flames radiate light as a torch. Moderate evocation; CL 7th; Forge Ring, fire shield, 28,000 gp, 2,240 XP, 56 days; Weight —.",
  }),
  M({
    id: "sling-boulder",
    name: "Sling Boulder",
    category: "ammunition",
    cost: "367 gp each",
    summary:
      "Ammunition — a plain burlap bag contains 2d4 simple polished stones usable as ammunition for a Small or Medium sling. Activation: you fire a sling boulder like any other bullet; the magic of the sling boulder can only be used once and is expended when fired, whether or not the sling boulder hits. Effect: these +1 sling stones are more than they appear — when fired from a sling, the stone instantly transforms into a large boulder that deals 2d6+1 points of damage (plus your Strength bonus), instead of the normal 1d4 for a sling bullet. Faint transmutation; CL 3rd; Craft Magic Arms and Armor, shrink item, 184 gp, 15 XP, 1 day; Weight 1/2 lb. each.",
  }),
];
