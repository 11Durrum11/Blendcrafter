// Dragon Magazine #326 (December 2004) — magic item draft: 11 items.
// Blocks: "The Magic Shop: Nature Unleashed" (Kieran Turley), pp. 76-78 — the intro's
// nine items for nature's guardians; and the "Magic Items of the Sewers" sidebar of
// "Down the Drain" (Chris DeKalb and Jacob Stammann), p. 55 — two items the program
// survey had marked reference-only with their article; they are fully record-shaped
// and stage per the standing full-text rule (see MANIFEST). Summaries carry aura/CL/
// creation lines and weight in the house style of recent packs. Every price, CL, and
// creation line was verified against rendered page images (pp. 55, 76-78).

import type { MagicItemDefinition } from "@/engine/types";

const SRC_SHOP = "Dragon Magazine #326 — The Magic Shop: Nature Unleashed (Kieran Turley), pp. 76-78";
const SRC_SEWER = "Dragon Magazine #326 — Down the Drain: Magic Items of the Sewers (Chris DeKalb and Jacob Stammann), p. 55";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_SHOP,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_326_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- The Magic Shop: Nature Unleashed ----
  M({
    id: "acorn-of-acuity",
    name: "Acorn of Acuity",
    cost: "4,120 gp",
    summary:
      "A fist-sized wooden carving of an acorn, made from oak and polished smooth as if from years of use: a character who holds the acorn in one hand gains a +5 competence bonus on all Survival skill checks, and the acorn's owner can also speak with animals, as the spell, once per day. Faint divination; CL 3rd; Craft Wondrous Item, speak with animals; Weight —.",
  }),
  M({
    id: "arboreal-armor",
    name: "Arboreal Armor",
    category: "armor",
    cost: "16,000 gp",
    summary:
      "Armor of bark plates held together by vines and covered with patches of moss, functioning as +2 leather armor: its appearance gives the wearer a +4 bonus on Hide checks made in forested settings, the armor automatically regenerates damage dealt to it at the rate of 1 hit point per hour, the wearer can cast entangle three times per day, and the armor itself casts goodberry every morning at dawn, growing five berries from its own form. Faint abjuration; CL 5th; Craft Magic Arms and Armor, entangle, goodberry; Weight 15 lb.",
  }),
  M({
    id: "briar-staff",
    name: "Briar Staff",
    category: "staff",
    cost: "139,500 gp",
    summary:
      "A staff created from a single gnarled oak bough, bearing a cluster of twisted twigs at its top that bud to life when a power is used: unlike other staffs, a briar staff can regain spent charges — burying it 1 foot deep within a forest at least 1 square mile in size regains 1 charge for every 7 days it remains buried and undisturbed. The staff allows the use of entangle (1 charge), spike growth (1 charge), and wall of thorns (3 charges). Strong transmutation; CL 12th; Craft Staff, entangle, spike growth, wall of thorns; Weight 4 lb.",
  }),
  M({
    id: "deluge-rod",
    name: "Deluge Rod",
    category: "rod",
    cost: "93,180 gp",
    summary:
      "A scepter of solid water suspended in time: the rod has the properties of a +1 frost club, but exacts a curse — its bearer can never truly feel warm or dry, suffering a −8 penalty on Fortitude saves made to resist the effects of a cold environment and on Constitution checks to resist drowning, while gaining a +4 circumstance bonus on Fortitude saves to resist the effects of heat and on Constitution checks to stave off thirst. Touch of the Brine Lord: as a free action, the wielder can cause the rod to deal an additional 2d6 points of cold damage when used as a melee weapon, lasting 10 rounds once activated, usable three times per day. Breath of the Brine Lord: the rod sprays forth a cloud of acidic mist, as the spell acid fog, once per day. Will of the Brine Lord: the rod summons 1d4+1 Huge fiendish sharks or 1 Huge water elemental, as the spell summon monster VII, once per day. Strong conjuration; CL 13th; Create Rod (as printed), acid fog, summon monster VII; Weight 2 lb.",
  }),
  M({
    id: "eagles-cry-bow",
    name: "Eagles' Cry Bow",
    category: "weapon",
    cost: "73,800 gp",
    summary:
      "A +5 composite longbow (+4 Strength bonus) covered in woodcarvings of elven history, with double the range increment of a normal composite longbow (220 feet) and a maximum range of twenty range increments (each range increment beyond the first still incurs the normal −2 penalty): whenever a user fires it, the bow lets out a cry similar to that of an eagle, and all elves within 30 feet who can hear it are affected as if by a 15th-level bard's inspire courage ability (granting a +3 morale bonus on saving throws against charm and fear effects and on attack and weapon damage rolls) for that round and for the following 5 rounds. Strong transmutation; CL 15th; Craft Magic Arms & Armor, Far Shot, true strike, creator must be an elf; Weight 3 lb.",
  }),
  M({
    id: "rod-of-the-wild",
    name: "Rod of the Wild",
    category: "rod",
    cost: "35,145 gp",
    summary:
      "A 3-foot-long oak cudgel carved with the four animal aspects it bestows, functioning as a +2 club: once per day, the wielder can choose to take on certain aspects of one of the four animal totems, and the rod grants the chosen totem's abilities as long as its wielder holds it (one totem animal at a time). Bear: a +3 natural armor bonus and a +4 enhancement bonus to Strength, adding 20 pounds of bulk to the wielder's weight. Hawk: a +2 competence bonus on Search and Spot checks, and feather fall at will as a spell-like ability; the wielder's eyes take on a golden hue. Mouse: a +4 competence bonus on all Hide checks, and reduce person on himself at will; the wielder gains an uncontrollable (purely roleplaying) nose twitch. Salmon: a +4 competence bonus on all Swim checks, and water breathing once per day; the wielder's skin takes on a slight silvery sheen. Moderate transmutation; CL 9th; Craft Rod, bull's strength, feather fall, reduce person, water breathing; Weight 3 lb.",
  }),
  M({
    id: "sylvan-cloak",
    name: "Sylvan Cloak",
    cost: "11,500 gp",
    summary:
      "A mottled green cloak of heavy fabric with oak leaf designs, gathered at the neck by a copper acorn brooch: the wearer gains a +4 bonus on Escape Artist checks and a +4 bonus on Fortitude saves made to resist the effects of extremely hot or cold environments, and creatures tracking the wearer by scent suffer a −10 penalty on their Wisdom or Survival checks while tracking him through heavily wooded areas (this effect does not inhibit trackers in any nonforested environment). The cloak never catches on branches or underbrush and faintly smells like a forest after heavy rainfall. Faint transmutation; CL 5th; Craft Wondrous Item, pass without trace; Weight 1 lb. (The printed price line reads \"Price 11,500\" with no \"gp\" — see MANIFEST.)",
  }),
  M({
    id: "sylvan-cloak-greater",
    name: "Sylvan Cloak, Greater",
    cost: "153,360 gp",
    summary:
      "Superficially appearing as a sylvan cloak, this garment grants all of a sylvan cloak's abilities, as well as the ability for its wearer to tree stride, as the spell, once per hour, and to animate a tree as per the liveoak spell once per day. Moderate transmutation; CL 11th; Craft Wondrous Item, liveoak, tree stride; Weight 1 lb.",
  }),
  M({
    id: "thornblade",
    name: "Thornblade",
    category: "weapon",
    cost: "56,450 gp",
    summary:
      "A +3 keen scimitar that bonds with its owner: when drawn, barbed rosebush-like thorns spring from the flat of its emerald-sheened blade, sinking back when sheathed, and up to three times per day, when its wielder makes a successful attack with the thornblade, he can choose to have the sword's thorns affect the target with bloodroot poison. If its owner does not touch the weapon for 30 days, it withers away to nothing, effectively destroying itself; an owner can grant the sword as a gift to another creature, making that creature the weapon's new owner. Moderate conjuration; CL 9th; Craft Magic Arms and Armor, poison; Weight 4 lb.",
  }),
  // ---- Down the Drain: Magic Items of the Sewers ----
  M({
    id: "balclava-of-clean-air",
    name: "Balclava of Clean Air",
    source: SRC_SEWER,
    cost: "5,000 gp",
    summary:
      "A black cloth head covering with an opening for the eyes that takes up the headband magic item slot (name spelled \"Balclava\" in print — see MANIFEST): only pure, magically cleansed air passes through its cloth, rendering its wearer immune to all inhaled and scent-based effects. The balclava negates the wearer's scent ability and any other special ability based on his sense of smell, and blocks all unpleasant mundane and magical smells. Strong transmutation; CL 12th; Craft Wondrous Item (no spells listed in the creation line, as printed); Weight —.",
  }),
  M({
    id: "veil-of-perfume",
    name: "Veil of Perfume",
    source: SRC_SEWER,
    cost: "2,000 gp",
    summary:
      "A small white silk veil tied around the wearer's head to cover his mouth and nose, taking up no magic item slot: the veil continually exudes the scent of roses, covering all other scents. It negates the wearer's scent ability and any other special ability based on his sense of smell, and blocks all unpleasant mundane smells while helping defend against magical ones — the wearer is immune to any nonmagical nauseating or scent-based attack, and against spells and supernatural effects that cause nausea or that affect a character through smell, such as stinking cloud or a ghast's stench ability, the wearer gains a +2 bonus on his saving throw. Faint transmutation; CL 3rd; Craft Wondrous Item (no spells listed in the creation line, as printed); Weight —.",
  }),
];
