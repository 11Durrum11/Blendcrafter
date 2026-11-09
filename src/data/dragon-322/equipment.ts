// Dragon Magazine #322 (August 2004) — equipment.
// Two groups stage (13 records):
//
//   * Eight magic POISON QUALITIES from "Silicon Sorcery: Shadows
//     of Undrentide — Magic Poison Qualities" by Clifford Horowitz
//     (pp. 50–52): magic qualities that can be added to any mundane
//     poison, staged as equipment in the "poison" category (the
//     Drow of the Underdark poison precedent). They are
//     enhancements, not standalone goods: each record's cost is the
//     printed price formula (a multiple of one dose of the poison
//     to be enhanced), and each summary carries the printed aura,
//     caster level, and Brew Potion prerequisites alongside the
//     mechanic. All values verified against the page images
//     (magazine pp. 50–52), which correct the OCR layer in four
//     places: Concentrated is CL 5th (OCR read 9th); Mounting is
//     6 × poison cost (OCR read 8 ×); Potent is 6 × poison cost
//     (OCR garbled); and the creation formula in the article's
//     introduction replaces the 25 gp figure in the potion formula
//     with the cost of one dose of the poison (worked example:
//     gripping ungol dust costs 1,000 gp [one dose] × 2 [gripping
//     is a 2nd-level spell] × 3 [its 3rd-level caster] = 6,000 gp).
//
//   * Five ALCHEMICAL ITEMS from the "New Alchemical Items"
//     sidebar in "Ecology of the Dark Ones" (p. 34): dark-one
//     splash weapons and dusts, staged in the catalog's
//     "alchemical gear" category. The brief listed the Ecology as
//     reference-only, but record-shaped content stages even inside
//     reference-listed articles (the Lord of Darkness precedent in
//     this same pack); the sidebar items are mundane alchemy with
//     full cost/weight/Craft lines. Verified against the page
//     image (magazine p. 34): Brown Mold Oil 75 gp, Oil of Nausea
//     60 gp, Poison-Friend Pod 50 gp, Shadow Haze Dust 30 gp with
//     a −8 Spot penalty, Shadow Veil 40 gp — the OCR layer garbled
//     every one of those numbers, and missed Brown Mold Oil
//     entirely at a column break. SHADOW VEIL stages suffixed
//     -322: the plain id is held by both a Complete Mage feat and
//     a Magic Item Compendium clothing item of the same name.
//
// Summaries are faithful mechanical paraphrases in our own words;
// no magazine prose is reproduced.

import type { EquipmentItem } from "@/engine/types";

const DM322 = "Dragon Magazine #322 — Silicon Sorcery (Magic Poison Qualities)";
const DM322_ECO = "Dragon Magazine #322 — Ecology of the Dark Ones";
const URL322 =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine322_djvu.txt";

export const DRAGON_322_EQUIPMENT: EquipmentItem[] = [
  {
    id: "concentrated-poison-quality",
    name: "Concentrated (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "15 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 50). A quality that can be added to any mundane poison: the brewer intensifies the poison repeatedly through special distilling processes, guaranteeing the venom has maximum possible effect. A concentrated poison deals maximum damage each time it inflicts damage; concentrated poisons that cause paralyzation or unconsciousness instead have their durations maximized. Creating a magic poison requires the Brew Potion feat and knowledge of all the spells listed for the qualities to be added; the cost follows the potion formula with the cost of one dose of the poison in place of the 25 gp figure (dose cost × spell level × caster level). Faint necromancy; CL 5th; Brew Potion, Maximize Spell, bestow curse.",
  },
  {
    id: "contagious-poison-quality",
    name: "Contagious (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "6 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 51). A quality that can be added to any mundane poison: contagious poison seeps into the skin of the victim in addition to wherever else in the body it attacks, turning the victim's sweat and touch into a weaker version of itself. Once contagious poison affects a victim, whether by its initial exposure or the secondary effects, the venom seeps into his body; while it deals no further damage and does not prevent recovery, it taints the victim and effectively turns his touch into a contact poison — the poison affects the next creature the victim touches with bare flesh. The contagious poison can only affect one additional creature in this way. The poison transmitted does not have the contagious quality, but it has any other magic qualities of the original poison. Faint necromancy; CL 3rd; Brew Potion, ghoul touch.",
  },
  {
    id: "destructive-poison-quality",
    name: "Destructive (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "15 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 51). This property can only be added to poison already enhanced with the repeating property. Treat destructive venom as normal repeating venom; however, should the poison manage to reduce an ability score to 0 (and that doesn't kill the victim), the poison begins to convert the ability damage into permanent ability drain at its normal damage rate (for example, a dose of gripping repeating destructive insanity mist that has reduced its victim to 0 Wisdom through ability damage begins to convert that damage to permanent ability drain at a rate of 2d6 points of Wisdom per day). Victims surviving this poison still regain any temporary damage at the normal rate. Moderate necromancy; CL 5th; Brew Potion, inflict serious wounds.",
  },
  {
    id: "gripping-poison-quality",
    name: "Gripping (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "6 × poison cost per dose × number of degrees",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, pp. 51–52). A quality that can be added to any mundane poison: gripping poison seizes a victim and refuses to let go, working ever deeper into the body and making it harder to purge. Poisons with this quality deal no additional damage, but the time required to recover from them is significantly longer. Victims exposed to this variety of poison must make a Fortitude save and another save 1 minute later; however, if either of these saves fails, the poison works its way into the victim's body, and once embedded, the victim cannot recover from the damage the poison dealt until purged of the venom. Gripping poison has degrees: the number of successful Fortitude saves the victim must make in order to overcome a gripping poison equals the number of degrees the poison has in gripping; the victim makes one Fortitude save per day, and once he makes a number of successful Fortitude saves equal to the poison's gripping degree, he is free of the effect and can begin to heal normally. A poison may not have more than five degrees in this quality, and the cost of enhancing a poison with multiple degrees is multiplied by the number of degrees desired. Neutralize poison does not automatically remove a gripping poison from the victim, but it does count as one successful Fortitude save. Faint transmutation; CL 3rd; Brew Potion, bear's endurance.",
  },
  {
    id: "mounting-poison-quality",
    name: "Mounting (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "6 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 52). Only a poison already enhanced with the gripping property can have the mounting property added to it. Mounting poison inundates the host body just like gripping poison, but it digs much deeper, seeping into the body more thoroughly. Treat mounting poison as normal gripping poison, except that each failed Fortitude save adds +2 to the DC for future saves, to a maximum of double the normal DC. Faint necromancy; CL 3rd; Brew Potion, inflict moderate wounds.",
  },
  {
    id: "potent-poison-quality",
    name: "Potent (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "6 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 52). A quality that can be added to any mundane poison: a potent poison is brewed for optimal effectiveness and magically treated to exceed its normal limitations, expanding its potential to do harm. A potent poison deals half again as much damage as normal. Poisons that only cause unconsciousness or paralyzation have the duration of their effects increased by 50%. Faint necromancy; CL 3rd; Brew Potion, death knell.",
  },
  {
    id: "repeating-poison-quality",
    name: "Repeating (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "15 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 52). This property can only be added to poison already enhanced with the gripping property. Repeating poison doesn't just rest in the body and refuse to leave; it continues its assault for as long as it manages to hold onto the victim. Treat repeating poison as normal gripping poison, except that repeating poison deals its secondary damage each day the victim fails his Fortitude saving throw to overcome the poison. Faint necromancy; CL 5th; Brew Potion, inflict serious wounds.",
  },
  {
    id: "spell-resistant-poison-quality",
    name: "Spell Resistant (Magic Poison Quality)",
    category: "poison",
    ruleset: "core",
    source: DM322,
    sourceUrl: URL322,
    cost: "15 × poison cost per dose",
    weight: "—",
    notes:
      "Magic poison quality (Silicon Sorcery, p. 52). A quality that can be added to any mundane poison: spell resistant poison resists magic manipulation and rebuffs magic attempts to neutralize or slow it. Spell resistant poison has a spell resistance score against all spells that attempt to slow or neutralize it, equal to the poison's base Fortitude save DC (for example, a dose of spell resistant shadow essence has spell resistance 17). Spellcasters hoping to aid the poison victim with magic must first beat the poison's spell resistance with a caster level check, just as if the poison were a creature. Faint abjuration; CL 5th; Brew Potion, dispel magic.",
  },
  // ---- New Alchemical Items, "Ecology of the Dark Ones" (p. 34) ----
  {
    id: "brown-mold-oil",
    name: "Brown Mold Oil",
    category: "alchemical gear",
    ruleset: "core",
    source: DM322_ECO,
    sourceUrl: URL322,
    cost: "75 gp",
    weight: "1 lb.",
    notes:
      "Alchemical item (Ecology of the Dark Ones, p. 34). Brown mold is ground and neutralized by a compound of lime and algae; when exposed to air, the compound turns gummy and inert, allowing the brown mold to revive for 1 round to cause cold damage to any creature it touches. A flask or potskin of brown mold oil has a range increment of 10 feet and is used as a thrown splash weapon. A direct hit deals 2d6 points of nonlethal cold damage, while all creatures within 5 feet take 1d6 points of nonlethal cold damage from the splash. Brown mold oil may be created with a successful DC 25 Craft (alchemy) check.",
  },
  {
    id: "oil-of-nausea",
    name: "Oil of Nausea",
    category: "alchemical gear",
    ruleset: "core",
    source: DM322_ECO,
    sourceUrl: URL322,
    cost: "60 gp",
    weight: "1 lb.",
    notes:
      "Alchemical item (Ecology of the Dark Ones, p. 34). Odorous resins and slimes are used to create oil of nausea. Flasks and potskins of the oil have a range increment of 10 feet and are used as a thrown splash weapon. Those directly struck by oil of nausea must make a successful DC 15 Fortitude saving throw or be nauseated for 1d4 rounds, while those within the 5-foot-splash radius must make a DC 10 Fortitude save or be nauseated for 1 round. Oil of nausea may be created with a successful DC 15 Craft (alchemy) check.",
  },
  {
    id: "poison-friend-pod",
    name: "Poison-Friend Pod",
    category: "alchemical gear",
    ruleset: "core",
    source: DM322_ECO,
    sourceUrl: URL322,
    cost: "50 gp",
    weight: "—",
    notes:
      "Alchemical item (Ecology of the Dark Ones, p. 34). These fungal spore pods are chemically altered so that their otherwise harmless clouds cause creatures to be more susceptible to poison. A poison-friend pod is a thrown weapon with a range increment of 10 feet. Upon striking a creature or square, these fungi erupt in a 10-foot cloud of spores that disperses in 1 round. Anyone caught in the cloud must make a successful DC 15 Fortitude save or take a −4 penalty on all saving throws against poison made in the next 10 minutes. Poison-friend pods may be created with a successful DC 25 Craft (alchemy) check.",
  },
  {
    id: "shadow-haze-dust",
    name: "Shadow Haze Dust",
    category: "alchemical gear",
    ruleset: "core",
    source: DM322_ECO,
    sourceUrl: URL322,
    cost: "30 gp",
    weight: "1 lb.",
    notes:
      "Alchemical item (Ecology of the Dark Ones, p. 34). Shadow haze dust is a potent eye irritant that obscures its victims' vision with dark hazes. One bag or potskin has a range increment of 10 feet and fills a 10-foot-radius cloud with the dust. Those within the cloud must make a DC 15 Fortitude save or suffer a −8 penalty on all Spot checks for 1 hour or until a gallon of water is used to flush the character's eyes. Shadow haze dust may be created with a successful DC 20 Craft (alchemy) check.",
  },
  {
    id: "shadow-veil-322",
    name: "Shadow Veil",
    category: "alchemical gear",
    ruleset: "core",
    source: DM322_ECO,
    sourceUrl: URL322,
    cost: "40 gp",
    weight: "1 lb.",
    notes:
      "Alchemical item (Ecology of the Dark Ones, p. 34). Shadow veil is a black dust created from finely powdered crystals that grow only in the deepest reaches of the Underdark. When stored in bags or potskins, this dust can be thrown as a splash weapon with a range increment of 10 feet. Upon striking a creature or square, the dust erupts in a 10-foot-radius cloud. Although this cloud has no effect on living creatures, it reacts with all nonmagical fires no larger than a campfire within the area, snuffing them out: torches, lanterns, candles, cooking fires and the like go out instantly, but magical fire (such as a wall of fire spell) is unaffected. Although its effect is swift, a shadow veil dissipates quickly, and extinguished fires can be relit on the round following its use. Shadow veil may be created with a successful DC 25 Craft (alchemy) check. (Staged suffixed: the plain id is held by a Complete Mage feat and a Magic Item Compendium clothing item of the same name.)",
  },
];
