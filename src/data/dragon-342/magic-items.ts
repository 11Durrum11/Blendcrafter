// Dragon Magazine #342 (April 2006) — magic item draft: 23 records.
// ONE item from "Domain Power" (Jake Manley), p. 22: the Devoted Symbol
// sidebar. THIRTEEN items from "Wormfood: Forgotten Magic" (Jeremy
// Walker, Chad Dulac with UDON and Jim Zubkavich), pp. 66-69 — Age of
// Worms / Order of the Storm material: the mechanics stage, the Kyuss
// and Order of the Storm lore is stripped to a source note (Greyhawk
// adventure-path lore, not FR canon). NINE items from "Bazaar of the
// Bizarre: Healer's Touch" (John E. Ling, Jr.), pp. 70-72.
// NOT staged here: the three Olidammara relics of "Core Beliefs:
// Olidammara" (kanteel of the oldest, mask of Imontilo, spying eye of
// Olidammara) — unique god-relics described inside a deity-lore
// article; they digest in full, stat lines included, in reference.md
// and are flagged in SCREENING.md for Shaun's call. The joke "chair of
// propping" from "The Ecology of the Adventurer" likewise digests in
// reference.md only (April-issue gag treatment, cf. issue #330's Flaws
// for Commoners).
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 22, 66-69, 70-72); the image governs over
// the OCR stream — it corrects, among others, the skull of dragon
// form's price (86,000 gp, not the OCR's 56,000) and names the
// "corporeal lodestone" and "Tholveg's final prayer" that the OCR
// garbled.
// ⚠️ APOC FLAGS — see SCREENING.md: the corporeal lodestone works by
// sealing an area against Ethereal travel; the shield of the sun casts
// sunbeam in a world whose sky is always grey; the skull of dragon
// form and elixir of draconic essence put dragon shapes on mortals in
// a world whose dragons withdrew under the Council of Wyrms. All stage
// as printed; none silently altered.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_DOMAIN = "Dragon Magazine #342 — Domain Power (Jake Manley), pp. 21-25";
const SRC_WORM = "Dragon Magazine #342 — Wormfood: Forgotten Magic (Jeremy Walker, Chad Dulac with UDON and Jim Zubkavich), pp. 66-69";
const SRC_BAZAAR = "Dragon Magazine #342 — Bazaar of the Bizarre: Healer's Touch (John E. Ling, Jr.), pp. 70-72";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_WORM,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_342_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Domain Power sidebar (1) ----
  M({
    id: "devoted-symbol",
    name: "Devoted Symbol",
    source: SRC_DOMAIN,
    cost: "20,000 gp",
    summary:
      "Holy symbol (wondrous item, amulet slot) — these rare holy symbols enhance the bond between a cleric and his deity, granting access to one improved granted power (the improved domain powers of 'Domain Power,' digested in this pack's reference.md). Devoted symbols are tied to one specific domain and only grant the power if the wearer already has that domain and is a follower of the same deity: a devoted symbol tied to the Knowledge domain only grants the divine inspiration ability if the wearer is a cleric of Vecna with the Knowledge domain. Devoted symbols are worn around the neck, taking up the amulet slot, and can be used as a holy symbol for the purposes of turning or rebuking undead and as a spell focus. Moderate divination; CL 7th; Craft Wondrous Item, divination; Weight 1/2 lb.",
  }),
  // ---- Wormfood: Forgotten Magic (13) ----
  M({
    id: "amulet-of-light",
    name: "Amulet of Light",
    cost: "25,000 gp",
    summary:
      "Amulet (wondrous item) — long ago, these simple sunburst pendants were given to the Order of the Storm's front-line soldiers to aid in the destruction of their undead foes and to prevent their comrades from rising as undead even as they fell. Each of these pendants radiates a continual consecrate effect, as the spell. Moderate evocation; CL 5th; Craft Wondrous Item, consecrate; Weight 1 lb.",
  }),
  M({
    id: "breathdrinker-sword",
    name: "Breathdrinker Sword",
    category: "weapon",
    cost: "50,350 gp",
    summary:
      "Weapon (+3 greatsword) — this blade possesses an inordinate amount of ornamentation: the blade itself is serrated, and numerous hooks, spikes, loops, and crossguards project irregularly from its surface, while the grip contains an intricate wire handle that flows over the hands of the wielder and binds the sword to his flesh while he wields it. The sword grants its user a +8 circumstance bonus on checks made to resist disarming. The wielder is also immune to any energy damage resulting from breath weapons. In addition, once the sword has protected its wielder from a breath weapon, he can choose to store the energy of the breath weapon within the sword or have it dissipate harmlessly; if he chooses to store the energy, he is no longer protected from any future breath weapons as long as the energy remains within the sword, but if he successfully hits an opponent with the breathdrinker sword while it retains this stored power he may choose to release it — his target suffers the breath weapon's effects in addition to the attack's normal damage (dealing the same damage with the usual Reflex save for half). The sword may retain its stored energy no longer than one day, after which it dissipates harmlessly. The sword offers no protection against breath weapons that do not deal energy damage. Strong abjuration and evocation; CL 14th; Craft Magic Arms and Armor, protection from energy, spell turning; Weight 4 lb.",
  }),
  M({
    id: "cloak-of-the-sorcerer-king",
    name: "Cloak of the Sorcerer-King",
    cost: "102,000 gp",
    summary:
      "Cloak (wondrous item) — a full-length cloak woven from hundreds of tiny scales taken from each of the five chromatic dragons. It grants its wearer a +6 enhancement bonus to Charisma. In addition, it allows the wearer to take on the aspect of each of the chromatic dragons once per day, gaining some of the abilities of that dragon; activating an aspect is a standard action for the wearer, each aspect lasts for 1 minute, and no other aspect may be assumed for the duration of the effect. Black: acid resistance 30, and darkness once as a spell-like ability (CL 18th); sorcerer spells cast with the acid or water descriptor are automatically extended and empowered. Blue: electricity resistance 30, and ventriloquism once (CL 18th); electricity or earth descriptor spells auto-extended and empowered. Green: acid resistance 30, and suggestion once (CL 18th); acid or air descriptor spells auto-extended and empowered. Red: fire resistance 30, and locate object once (CL 18th); fire descriptor spells auto-extended and empowered. White: cold resistance 30, and fog cloud once (CL 18th); cold descriptor spells auto-extended and empowered. (Auto-extension/empowerment is as the metamagic feats, with no adjustment to the spell's level or casting time; each aspect also subtly shifts the wearer's features toward the dragon's cast.) Strong abjuration and transmutation; CL 18th; Craft Wondrous Item, eagle's splendor, resist energy, creator must be a sorcerer; Weight 2 lb.",
  }),
  M({
    id: "corporeal-lodestone",
    name: "Corporeal Lodestone",
    cost: "39,000 gp",
    summary:
      "Ward stone (wondrous item) — this powerful ward resembles nothing more than an unremarkable 1-inch-diameter sphere of polished steel. The lodestone's power strengthens the boundary between the Ethereal Plane and the Material Plane, preventing any incorporeal undead from manifesting within a 20-foot radius. It also prevents any travel to and from the Ethereal Plane within that radius, negating the effects of spells such as blink, ethereal jaunt, and etherealness. Because the lodestone is so tightly bound to the Material Plane, it may not be taken to another plane: any time its possessor is transported across planes, the lodestone remains behind. Strong abjuration; CL 15th; Craft Wondrous Item, dimensional lock; Weight 1 lb. APOC: an anti-planar ward — see SCREENING.md.",
  }),
  M({
    id: "doomslayer-bow",
    name: "Doomslayer Bow",
    category: "weapon",
    cost: "50,900 gp",
    summary:
      "Weapon (+2 composite longbow, +5 Strength bonus) — crafted from ordinary yew and trimmed with dragon bone. This bow allows the wielder to find the weak spots in his enemy's hide, allowing him to ignore any natural armor bonus (including any enhancement bonuses to that natural armor) for one attack three times per day. The wielder must declare that he is using this ability (a free action) before the attack roll is made. Strong divination; CL 16th; Craft Magic Arms and Armor, true strike; Weight 3 lb.",
  }),
  M({
    id: "dragonbane-scepter",
    name: "Dragonbane Scepter",
    category: "rod",
    cost: "5,500 gp",
    summary:
      "Scepter (rod) — crafted from adamantine and studded with precious and semi-precious stones, this scepter grants the ability to penetrate the arcane defenses of the most powerful dragons: the wielder receives a +4 bonus on caster level checks to overcome the spell resistance of dragons. Moderate (no school); CL 10th; Craft Rod, Greater Spell Penetration; Weight — (none printed).",
  }),
  M({
    id: "elixir-of-draconic-essence",
    name: "Elixir of Draconic Essence",
    cost: "6,550 gp",
    summary:
      "Elixir (wondrous item, potion-like) — this elixir comes in five varieties, one for each of the five chromatic dragons, made from the blood of true dragons and enhanced by magic. Made from the blood of its associated creature, it grants powers of that creature to whomever drinks it, for 10 minutes: thick scales of the appropriate color cover the drinker's skin, granting a +4 enhancement bonus to his existing natural armor bonus; he gains a +8 enhancement bonus to Strength, a +4 enhancement bonus to Constitution, a +2 enhancement bonus to Intelligence, and a +2 enhancement bonus to Charisma; his face extends into a fierce snout while his fingers twist into sharp claws, giving him 2 claws and a bite he can use as natural attacks (by size — bite/claws: Fine 1/—, Diminutive 1d2/1, Tiny 1d3/1d2, Small 1d4/1d3, Medium 1d6/1d4, Large 1d8/1d6, Huge 2d6/1d8, Gargantuan 3d6/2d6, Colossal 4d6/3d6); powerful wings burst from his shoulders, giving him a fly speed of 60 feet (average); he gains a breath weapon of the appropriate type (black: 60-foot line of acid; blue: 60-foot line of lightning; green: 30-foot cone of corrosive (acid) gas; red: 30-foot cone of fire; white: 30-foot cone of cold) usable once every 1d4 rounds, dealing 6d6 points of damage — a DC 14 Reflex save halves this damage; and he gains complete immunity to the energy type associated with his breath weapon. Moderate transmutation; CL 11th; Craft Wondrous Item, polymorph; Weight 1 lb.",
  }),
  M({
    id: "phylactery-of-protection-from-evil",
    name: "Phylactery of Protection from Evil",
    cost: "30,000 gp",
    summary:
      "Phylactery (wondrous item) — this phylactery continuously grants the wearer the effects of the protection from evil spell. While this type of protection is the most common version of this item, phylacteries for the other protection from alignment spells also exist. Moderate abjuration; CL 7th; Craft Wondrous Item, magic circle against evil; Weight 1/2 lb.",
  }),
  M({
    id: "quicksilver-cloak",
    name: "Quicksilver Cloak",
    cost: "25,000 gp",
    summary:
      "Cloak (wondrous item) — this shimmering silver cloak seems to be spun from quicksilver; its form constantly ripples and flows around the wearer and light dances across its surface. It grants the wearer complete immunity to paralysis and a +10 competence bonus on Escape Artist checks. Moderate abjuration; CL 7th; Craft Wondrous Item, freedom of movement; Weight 2 lb.",
  }),
  M({
    id: "ring-of-death-ward",
    name: "Ring of Death Ward",
    category: "ring",
    cost: "60,000 gp",
    summary:
      "Ring — this ring continuously grants its wearer the protection of the death ward spell. Moderate abjuration; CL 7th; Forge Ring, death ward; Weight —.",
  }),
  M({
    id: "shield-of-the-sun-342",
    name: "Shield of the Sun",
    category: "armor",
    cost: "74,170 gp",
    summary:
      "Shield (+2 heavy steel shield) — this shield has a highly polished concave reflective surface that contains a large golden gem at its center. Twice per day, on command, the gem can ignite a brilliant beam of sunlight, blinding the living and destroying the undead; this effect is equivalent to a sunbeam spell (caster level 13th). Strong evocation; CL 13th; Craft Magic Arms and Armor, sunbeam; Weight 15 lb. (Not the Dungeon Master's Guide major artifact of the same name, which keeps the base id.) APOC: a sunlight effect in a sunless world — staged as printed, see SCREENING.md.",
  }),
  M({
    id: "shroud-of-undeath",
    name: "Shroud of Undeath",
    cost: "7,500 gp",
    summary:
      "Mantle (wondrous item) — this mantle is made from plain gray silk, embroidered with delicate white tracings of powerful runes of protection and warding. Worn over normal clothing or armor, it continuously gives the wearer the benefits of the hide from undead spell (Will save DC 15). Faint abjuration; CL 3rd; Craft Wondrous Item, hide from undead; Weight 1 lb.",
  }),
  M({
    id: "skull-of-dragon-form",
    name: "Skull of Dragon Form",
    cost: "86,000 gp",
    summary:
      "Skull (wondrous item) — crafted from the skulls of the mightiest dragons, magically resized to fit over a humanoid-sized head. This item comes in five varieties, each crafted from the skull of a different-colored chromatic dragon. Once per day, the wearer may transform into a juvenile dragon of the appropriate kind; this effect lasts for 1 hour, although it may be dismissed at any time as a standard action. The effect functions as the polymorph spell (caster level 17th, without the HD restriction), except that the wearer gains the breath weapon of the dragon he becomes, as well as its sensory abilities (darkvision, keen senses, blindsense, and so on). Strong transmutation; CL 17th; Craft Wondrous Item, shapechange; Weight 4 lb. APOC: dragon form — see SCREENING.md.",
  }),
  // ---- Bazaar of the Bizarre: Healer's Touch (9) ----
  M({
    id: "amulet-of-preservation",
    name: "Amulet of Preservation",
    source: SRC_BAZAAR,
    cost: "6,000 gp",
    summary:
      "Amulet (wondrous item) — securing an amulet of preservation around a corpse's neck halts the decaying process for as long as it remains on the corpse. In addition, the amulet of preservation prevents the deceased wearer from rising as the spawn of certain undead (like ghouls, shadows, and vampires), and days spent under the influence of the amulet do not count against the time limit of a raise dead spell. Though developed by clerics of Pelor, the clergy of Wee Jas has found the greatest use for these items. Faint necromancy; CL 3rd; Craft Wondrous Items (as printed), gentle repose; Weight 1 lb.",
  }),
  M({
    id: "bolt-of-healing",
    name: "Bolt of Healing",
    category: "ammunition",
    source: SRC_BAZAAR,
    cost: "132 gp",
    summary:
      "Ammunition (+1 crossbow bolt) — painted bright red and affixed with a blunt, cushioned tip, a bolt of healing allows a crossbow wielder to provide succor to her allies instead of suffering to her enemies. When one of these bolts strikes a target, it explodes in a flash of positive energy: a successful hit deals no damage, but instead cures its target of 1d8+5 points of damage. Against undead and other creatures harmed by positive energy, the bolt inflicts 1d8+5 points of damage instead; an undead creature struck by a bolt of healing can apply spell resistance and can make a DC 11 Will save to take half damage. Making a successful critical hit with a bolt of healing has no additional effect: the bolt still cures 1d8+5 points of damage (or inflicts it, as appropriate) no matter how well it strikes. Faint conjuration; CL 5th; Craft Magic Arms and Armor, cure light wounds; Weight —.",
  }),
  M({
    id: "calming-stone",
    name: "Calming Stone",
    source: SRC_BAZAAR,
    cost: "10,800 gp",
    summary:
      "Stone (wondrous item) — when a user touches the stone and utters the command word, this 1-foot-diameter smooth rock emits a light, melodic tune that creates the effect of a calm emotions spell for up to 10 minutes. Repeating the command word ends the effect. A calming stone can be used up to three times per day. Faint enchantment; CL 3rd; Craft Wondrous Item, calm emotions, ghost sound; Weight 25 lb.",
  }),
  M({
    id: "detoxification-orb",
    name: "Detoxification Orb",
    source: SRC_BAZAAR,
    cost: "3,000 gp",
    summary:
      "Orb (wondrous item) — a crystal orb roughly 6 to 8 inches in diameter. When it is placed against the skin of a poisoned creature and tapped twice, in a flash of light the orb draws out any poisons in the creature's system, filling the otherwise clear sphere with a green mist; this effect duplicates the neutralize poison spell, except its duration is instantaneous and thus does not provide any further protection. After 1 round the mist dissipates within the orb. A detoxification orb crumbles to dust after 10 uses. As a standard action, the user of the orb can make a Craft (poisonmaking) check to identify a poison drawn out with it (the DC equals the poison's Fortitude save DC). Faint conjuration; CL 5th; Craft Wondrous Item, neutralize poison; Weight 2 lb.",
  }),
  M({
    id: "gem-of-poison-detection",
    name: "Gem of Poison Detection",
    source: SRC_BAZAAR,
    cost: "1,100 gp",
    summary:
      "Gem (wondrous item) — this magical gem appears as a finely cut emerald. Placing the gem against a creature's bare skin and speaking the first command word detects whether or not the creature is poisoned. When placed within 1 foot of food or drink and the second command word is spoken it detects poison present. Pointing the gem at a creature within 30 feet with whom you have line of effect and speaking the third command word detects whether that creature has a poison attack or is using poison on one of its weapons. If the gem of poison detection detects poison in any of those three ways it turns black and cold. Even if the gem is somehow disenchanted it remains a gem worth 100 gp. Faint divination; CL 1st; Craft Wondrous Item, detect poison; Weight —.",
  }),
  M({
    id: "healers-mask",
    name: "Healer's Mask",
    source: SRC_BAZAAR,
    cost: "3,125 gp",
    summary:
      "Mask (wondrous item) — made from strong burlap and treated with special chemicals as well as magical enhancements, a healer's mask is worn over the mouth and nose, taking up the necklace slot (as printed). A healer's mask casts remove disease on its wearer when first donned; it can only cast remove disease once — if removed and donned again it provides only the +2 bonus on saves. For one month after the mask casts remove disease it provides a +2 bonus on all saves made to resist or overcome diseases (natural or magical) to anyone wearing the mask when such a save must be made. At the end of that month the healer's mask becomes a nonmagical burlap mask. Any creature may gain the saving throw bonus, but only the first creature to put on the mask gains the benefit of the remove disease. Faint abjuration; CL 1st; Craft Wondrous Items (as printed), remove disease, resistance; Weight —.",
  }),
  M({
    id: "medic-hat",
    name: "Medic Hat",
    source: SRC_BAZAAR,
    cost: "8,000 gp",
    summary:
      "Hat (wondrous item) — these upright white hats made of a heavy cloth bear Pelor's holy symbol. Whenever a medic hat wearer casts a spell of the conjuration (healing) subschool she is protected as by the sanctuary spell (DC 11) for 1 round per level of healing spell cast (a 0-level spell grants no sanctuary effect). The duration of the sanctuary effect overlaps with multiple healing spells so that only the highest-level or most recent spell affects it — for example, a cleric who casts heal is protected for 6 rounds, and if she casts heal again on the next round the duration of her sanctuary effect lasts for 6 rounds beginning that round. Those who succeed on the Will save to attack the wearer of a medic hat are immune to its effects for one day. Faint abjuration; CL 1st; Craft Wondrous Item, sanctuary; Weight —.",
  }),
  M({
    id: "rod-of-disenchantment",
    name: "Rod of Disenchantment",
    category: "rod",
    source: SRC_BAZAAR,
    cost: "50,000 gp",
    summary:
      "Rod — a foot-long ivory rod with 1-inch bands of ebony at either end. When touched to a creature (a melee touch attack) and the command word is uttered, several effects occur simultaneously and instantaneously: all enchantments on the creature cease functioning; all transmutation effects on the creature end; all curses (as from bestow curse) on the creature are removed; and all cursed items in the creature's possession cease functioning and drop to the ground. All effects function as per break enchantment at caster level 16. After discharging, a rod of disenchantment loses its magical properties for 12 hours until it recharges (it still detects as magical, however). Moderate abjuration; CL 16th; Craft Rod, break enchantment, greater dispel magic; Weight 1 lb.",
  }),
  M({
    id: "tholvegs-final-prayer",
    name: "Tholveg's Final Prayer",
    source: SRC_BAZAAR,
    cost: "3,000 gp",
    summary:
      "Crystal marble (wondrous item, single use) — Pelor's holy symbol is clearly visible within the center of this 1-inch-diameter fragile clear crystal marble. To use this item, the user must shatter the item upon the ground (as a standard action that does not provoke an attack of opportunity) and loudly exclaim a prayer to Pelor. When activating the item, the user must immediately choose one of four effects: cure serious wounds, remove blindness/deafness, remove curse, or remove disease. All effects target the item's user and are cast at 15th level. Strong conjuration and abjuration; CL 15th; Craft Wondrous Item, cure serious wounds, remove blindness/deafness, remove curse, remove disease; Weight —.",
  }),
];
